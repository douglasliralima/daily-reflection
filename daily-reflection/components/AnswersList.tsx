import Answers from "@/model/Answer";
import { View } from "react-native";

export default function AnswersList({ answers }: { answers: Answers[] }) {

    return (
        <View className="flex-1 gap-2 mt-4">
            {answers.map((answer) => (
                <View key={answer.id} className="p-4 border-b border-neutral-800">
                    <View className="mb-2">
                        <View className="text-white">{answer.content}</View>
                    </View>
                </View>
            ))}
        </View>
    );
}