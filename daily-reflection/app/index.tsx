import EphemeralNotice from "@/components/EphemeralTimer";
import QuestionDisplay from "@/components/QuestionDisplay";
import useQuestion from "@/hooks/useQuestion";
import { View } from "react-native";

export default function Index() {
  const { question, remainingSeconds, loading } = useQuestion();

  return (
    <View className="flex-1 bg-neutral-900">
      <QuestionDisplay question={question} loading={loading} />
      <EphemeralNotice remainingSeconds={remainingSeconds ?? 0} />
    </View>
  );
}
