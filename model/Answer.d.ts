import Reference from "./Reference";

export default interface Answers {
    id: string;
    content: string;
    reference?: Reference;
    votes: number;
    optimistic?: boolean;
    error?: boolean;
}