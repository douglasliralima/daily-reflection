export default interface Answers {
    id: string;
    content: string;
    references?: Array<{
        text: string;
        source: string;
    }>;
    votes: number;
}