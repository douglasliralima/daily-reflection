export default function mockVote(
    answerId: string,
    voteType: "up" | "down" | "neutral",
) {
    if (voteType === undefined) {
        console.log(`Mock vote removed for answerId: ${answerId}`);
        return;
    }
    console.log(`Mock vote synced for answerId: ${answerId} with voteType: ${voteType}`);
}