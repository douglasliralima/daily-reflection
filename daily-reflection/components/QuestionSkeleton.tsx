import { View } from "react-native";

const QuestionSkeleton = () => {
    return (
        <View className="pt-16 pb-10 px-6">
            <View className="h-7 w-11/12 rounded bg-neutral-800 mb-3" />
            <View className="h-7 w-10/12 rounded bg-neutral-800 mb-3" />
            <View className="h-7 w-8/12 rounded bg-neutral-800" />
        </View>
    );
};

export default QuestionSkeleton;
