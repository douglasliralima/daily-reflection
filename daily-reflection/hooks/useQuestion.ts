import { mockQuestion } from "@/mock/mockQuestion";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const DEFAULT_EXPIRATION_SECONDS = 48 * 60 * 60; // 48 hours

export default function useQuestion() {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['question'],
        queryFn: mockQuestion,
        staleTime: DEFAULT_EXPIRATION_SECONDS * 1000,
        refetchOnWindowFocus: false,
    });

    const [remainingSeconds, setRemainingSeconds] = useState<number>(DEFAULT_EXPIRATION_SECONDS);

    useEffect(() => {
        if (data?.expiresInSeconds) {
            setRemainingSeconds(data.expiresInSeconds);
        }
    }, [data]);

    useEffect(() => {
        if (isLoading || !data) return;

        const interval = setInterval(() => {
            setRemainingSeconds((prev) => {
                // TO-DO: handle expiration to recall for a new question
                if (prev <= 0) return 0;
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [isLoading]);

    return {
        question: data?.content,
        remainingSeconds,
        isLoading,
        isError,
    };
}