import Reference from "./Reference";

export default interface NewAnswer {
    content: string;
    reference?: Reference;
}