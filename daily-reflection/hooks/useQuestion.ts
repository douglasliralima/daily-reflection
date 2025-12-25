import { mockQuestion } from "@/mock/mockQuestion";
import { useEffect, useState } from "react";

export default function useQuestion() {

    const [question, setQuestion] = useState<string | null>(null);
    const [remainingSeconds, setRemainingSeconds] = useState<number | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let mounted = true;

        async function loadQuestion() {
            try {
                const { content, expiresInSeconds } = await mockQuestion();
                if (mounted) {
                    setQuestion(content);
                    setRemainingSeconds(expiresInSeconds ?? null);
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
        if (remainingSeconds === null) return;

        const interval = setInterval(() => {
            setRemainingSeconds((prev) => {
                // TO-DO: handle expiration to recall for a new question
                if (prev === null || prev <= 0) return 0;
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [remainingSeconds]);

    return { question, remainingSeconds, loading };
}