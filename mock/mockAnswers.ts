import Answers from "@/model/Answer";

const initialAnswers = [
    {
        id: "1",
        content: "I think it begins with accepting that distraction is not the enemy—it's a symptom. The real question is what we're avoiding when we let ourselves be pulled away. Living with intention might mean sitting with that discomfort instead of reaching for the phone.",
        votes: 3,
    },
    {
        id: "2",
        content: "For me, intention has become less about control and more about return. I don't expect myself to be focused all the time. But I try to notice when I've drifted and gently come back. That noticing is the practice.",
        references: [
            {
                text: "Attention is the beginning of devotion.",
                source: "Mary Oliver"
            }
        ],
        votes: 7,
    },
    {
        id: "3",
        content: "I've started to think of intention as choosing what deserves my presence. Not everything needs me fully there. But some things—conversations with people I love, moments of beauty, my own suffering—these ask for my whole self.",
        votes: 2,
    },
    {
        id: "4",
        content: "There's a passage I return to often when I think about this. It reminds me that attention itself is a form of prayer, a way of being present to what is sacred in the ordinary.",
        references: [
            {
                text: "Be still, and know that I am God.",
                source: "Psalm 46:10"
            },
            {
                text: "The present moment is filled with joy and happiness. If you are attentive, you will see it.",
                source: "Thich Nhat Hanh"
            }
        ],
        votes: 5,
    },
];

export function mockAnswers(): Promise<Answers[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(initialAnswers);
        }, 1000);
    });
}

export function mockNewAnswer(answerContent: string): Promise<Answers> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const newAnswer: Answers = {
                id: (initialAnswers.length + 1).toString(),
                content: answerContent,
                votes: 0,
            };
            initialAnswers.unshift(newAnswer);
            console.log("New answer added:", newAnswer);
            resolve(newAnswer);
        }, 2000);
    });
}