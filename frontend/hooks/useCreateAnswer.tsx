import { useModalBoxContext } from "@/context/ModalContext";
import { mockNewAnswer } from "@/mock/mockAnswers";
import Answers from "@/model/Answer";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useCreateAnswer() {
    const { value, onClose } = useModalBoxContext();
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: mockNewAnswer,

        onMutate: async (content: string) => {
            await queryClient.cancelQueries({ queryKey: ["answers"] });

            const optimisticId = crypto.randomUUID();

            const optimisticAnswer: Answers = {
                id: optimisticId,
                content,
                votes: 0,
                optimistic: true,
                error: false,
            };

            queryClient.setQueryData<Answers[]>(["answers"], (old = []) => [
                optimisticAnswer,
                ...old,
            ]);

            return { optimisticId };
        },

        onError: (_err, _content, ctx) => {
            if (!ctx) return;

            queryClient.setQueryData<Answers[]>(["answers"], (old = []) =>
                old.map(a =>
                    a.id === ctx.optimisticId
                        ? { ...a, optimistic: false, error: true }
                        : a
                )
            );
        },

        onSuccess: (serverAnswer, _content, ctx) => {
            if (!ctx) return;

            queryClient.setQueryData<Answers[]>(["answers"], (old = []) =>
                old.map(a =>
                    a.id === ctx.optimisticId
                        ? serverAnswer
                        : a
                )
            );
        },
    });

    function createAnswer() {
        mutation.mutate(value);
        onClose();
    }

    function retryCreateAnswer(answer: Answers) {
        if (!answer.error) return;

        queryClient.setQueryData<Answers[]>(["answers"], (old = []) =>
            old.filter(a => a.id !== answer.id)
        );

        mutation.mutate(answer.content);
    }

    return {
        createAnswer,
        retryCreateAnswer,
        isCreating: mutation.isPending,
    };
}
