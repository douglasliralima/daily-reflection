import AnswersList from "@/components/AnswersList";
import EphemeralNotice from "@/components/EphemeralTimer";
import QuestionDisplay from "@/components/QuestionDisplay";
import useAnswers from "@/hooks/useAnswers";
import useQuestion from "@/hooks/useQuestion";
import { View } from "react-native";

export default function Index() {
  const { question, remainingSeconds, isLoading } = useQuestion();
  const { answers } = useAnswers();

  return (
    <View className="flex-1 bg-neutral-900">
      <QuestionDisplay question={question} isLoading={isLoading} />
      <EphemeralNotice remainingSeconds={remainingSeconds ?? 0} />
      <AnswersList answers={answers} />
    </View>
  );
}
