import useAnswers from "@/components/AnswersList/hooks/useAnswers";
import { Text, View } from "react-native";
import AnswerCard from "./components/AnswerCard/AnswerCard";

export default function AnswersList() {
    const { answers } = useAnswers();

    if (answers.length === 0) {
        return (
            <View className="flex-1 items-center justify-center mt-4">
                <Text className="text-neutral-500">
                    No reflections yet. Be the first to share.
                </Text>
            </View>
        );
    }

    return (
        <View
            className="flex-1 gap-2 mt-4 pb-6"
        >
            {answers.map((answer) => (
                <AnswerCard key={answer.id} answer={answer} />
            ))}
        </View>
    );
}