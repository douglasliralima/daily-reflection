import { Text, View } from "react-native";

interface QuestionDisplayProps {
    question?: string;
    isLoading?: boolean;
}

const QuestionDisplay = ({ question, isLoading }: QuestionDisplayProps) => {
    if (isLoading) {
        return (
            <View className="pb-10 px-6">
                <View className="h-7 w-11/12 rounded bg-neutral-800 mb-3" />
                <View className="h-7 w-10/12 rounded bg-neutral-800 mb-3" />
                <View className="h-7 w-8/12 rounded bg-neutral-800" />
            </View>
        );
    }

    if (!question) {
        return (
            <View className="pb-10 px-6">
                <Text className="text-3xl font-serif text-neutral-100 leading-snug">
                    No question available.
                </Text>
            </View>
        );
    }

    return (
        <View className="pb-10 px-6">
            <Text className="text-3xl font-serif text-neutral-100 leading-snug">
                {question}
            </Text>
        </View>
    );
};

export default QuestionDisplay;
