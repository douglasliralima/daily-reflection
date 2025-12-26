import AnswersList from "@/components/AnswersList/AnswersList"
import EphemeralNotice from "@/components/EphemeralTimer"
import QuestionDisplay from "@/components/QuestionDisplay"
import useQuestion from "@/hooks/useQuestion"
import { View } from "react-native"

export default function Index() {
  const { question, remainingSeconds, isLoading } = useQuestion()

  return (
    <View className="flex-1 bg-neutral-950">
      <QuestionDisplay question={question} isLoading={isLoading} />
      <EphemeralNotice remainingSeconds={remainingSeconds ?? 0} />
      <AnswersList />
    </View>
  )
}
