import { mockQuestion } from "@/mock/mockQuestion";
import { useEffect, useState } from "react";

const DEFAULT_EXPIRATION_SECONDS = 48 * 60 * 60; // 48 hours

export default function useQuestion() {
    const [question, setQuestion] = useState<string | undefined>(undefined);
    const [remainingSeconds, setRemainingSeconds] = useState<number>(DEFAULT_EXPIRATION_SECONDS); // Default to 48 hours
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let mounted = true;

        async function loadQuestion() {
            try {
                const { content, expiresInSeconds } = await mockQuestion();
                if (mounted) {
                    setQuestion(content);
                    setRemainingSeconds(expiresInSeconds ?? DEFAULT_EXPIRATION_SECONDS);
                }
            } finally {
                if (mounted) {
                    setLoading(false);
                }
            }
        }

        loadQuestion();

        return () => {
            mounted = false;
        };
    }, []);


    useEffect(() => {
        if (loading) return;

        const interval = setInterval(() => {
            setRemainingSeconds((prev) => {
                // TO-DO: handle expiration to recall for a new question
                if (prev <= 0) return 0;
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [loading]);

    return { question, remainingSeconds, loading };
}