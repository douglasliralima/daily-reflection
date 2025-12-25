import { Text, View } from "react-native";

interface QuestionDisplayProps {
    question: string;
}

const QuestionDisplay = ({ question }: QuestionDisplayProps) => {
    return (
        <View className="pt-16 pb-10 px-6">
            <Text className="text-2xl font-serif text-neutral-100 leading-snug">
                {question}
            </Text>
        </View>
    );
};

export default QuestionDisplay;
