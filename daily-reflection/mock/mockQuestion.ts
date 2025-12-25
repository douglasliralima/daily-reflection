export function mockQuestion(): Promise<{
    content: string;
}> {
    return new Promise((resolve) => {
        const currentQuestion = "What does it mean to live with intention in a world of constant distraction?";
        setTimeout(() => {
            resolve({ content: currentQuestion });
        }, 500);
    })
}