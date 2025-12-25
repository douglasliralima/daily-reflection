import EphemeralNotice from "@/components/EphemeralTimer";
import QuestionDisplay from "@/components/QuestionDisplay";
import QuestionSkeleton from "@/components/QuestionSkeleton";
import useQuestion from "@/hooks/useQuestion";
import { ActivityIndicator, View } from "react-native";

export default function Index() {
  const { question, remainingSeconds, loading } = useQuestion();

  if (loading || !question) {
    return (
      <View className="flex-1 bg-neutral-900">
        <QuestionSkeleton />

        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    );
  }

  return (
    <View className="flex-1 bg-neutral-900">
      <QuestionDisplay question={question} />
      <EphemeralNotice remainingSeconds={remainingSeconds ?? 0} />
    </View>
  );
}
