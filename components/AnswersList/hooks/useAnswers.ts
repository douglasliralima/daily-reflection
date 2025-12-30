import { mockAnswers } from "@/mock/mockAnswers";
import Answers from "@/model/Answer";
import { useQuery } from "@tanstack/react-query";

export default function useAnswers() {
    const { data: answers = [], isLoading } = useQuery<Answers[]>({
        queryKey: ['answers'],
        queryFn: mockAnswers,
        staleTime: 5 * 60 * 1000, // 5 minutes
        refetchOnWindowFocus: false,
    });

    return { answers, isLoading };
}