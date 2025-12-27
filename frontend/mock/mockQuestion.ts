import Question from "@/model/Question";

export function mockQuestion(): Promise<Question> {
    return new Promise((resolve) => {
        const currentQuestion = "What does it mean to live with intention in a world of constant distraction?";
        setTimeout(() => {
            resolve({
                content: currentQuestion,
                expiresInSeconds: 48 * 60 * 60, // 48 hours
            });
        }, 2000);
    })
}