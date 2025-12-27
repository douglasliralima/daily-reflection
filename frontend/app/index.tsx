import AnswerBox from "@/components/AnswerBox/AnswerBox"
import AnswersList from "@/components/AnswersList/AnswersList"
import EphemeralNotice from "@/components/EphemeralTimer"
import QuestionDisplay from "@/components/QuestionDisplay"
import useQuestion from "@/hooks/useQuestion"
import { View } from "react-native"
import { ScrollView } from "react-native-gesture-handler"

export default function Index() {
  const { question, remainingSeconds, isLoading } = useQuestion()

  return (
    <View className="flex-1 bg-neutral-900">
      <ScrollView>
        <QuestionDisplay question={question} isLoading={isLoading} />
        <EphemeralNotice remainingSeconds={remainingSeconds ?? 0} />
        <AnswersList />
      </ScrollView>
      <AnswerBox />
    </View>
  )
}
