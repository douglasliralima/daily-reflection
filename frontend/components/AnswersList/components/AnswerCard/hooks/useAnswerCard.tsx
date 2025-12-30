import useCreateAnswer from "@/hooks/useCreateAnswer";
import { useDebouncedEffect } from "@/hooks/useDebounceEffect";
import mockVote from "@/mock/mockVote";
import Answers from "@/model/Answer";
import { useCallback, useState } from "react";

export default function useAnswerCard({ answer }: { answer: Answers }) {

    const isOptimistic = answer.optimistic;
    const hasError = answer.error;
    const interactionsDisabled = isOptimistic || hasError;
    const { retryCreateAnswer } = useCreateAnswer();

    const [votes, setVotes] = useState(answer.votes);
    const [userVote, setUserVote] = useState<"up" | "down" | "neutral">("neutral");
    const [openReferences, setOpenReferences] = useState(false);

    const textColorClass = {
        up: "font-bold text-green-500",
        down: "font-bold text-red-500",
        neutral: "text-neutral-400",
    };

    const handleVote = useCallback((type: "up" | "down") => {
        if (userVote === type) {
            setVotes((prevVotes) => (type === "up" ? prevVotes - 1 : prevVotes + 1));
            setUserVote("neutral");
        } else {
            setVotes((prevVotes) => {
                if (userVote === "neutral") {
                    return type === "up" ? prevVotes + 1 : prevVotes - 1;
                } else {
                    return type === "up" ? prevVotes + 2 : prevVotes - 2;
                }
            });
            setUserVote(type);
        }
    }, [userVote]);

    useDebouncedEffect(
        () => {
            if (interactionsDisabled) return;
            mockVote(answer.id, userVote);
        },
        [userVote],
        600
    );
    return {
        isOptimistic,
        votes,
        userVote,
        textColorClass,
        interactionsDisabled,
        hasError,
        openReferences,
        setOpenReferences,
        handleVote,
        retryCreateAnswer,
    };
}