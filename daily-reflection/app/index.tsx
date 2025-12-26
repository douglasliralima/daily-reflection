import AnswersList from "@/components/AnswersList/AnswersList"
import EphemeralNotice from "@/components/EphemeralTimer"
import { LoginButton, MenuButton } from "@/components/Menu"
import QuestionDisplay from "@/components/QuestionDisplay"
import useQuestion from "@/hooks/useQuestion"
import { Stack } from "expo-router"

export default function Index() {
  const { question, remainingSeconds, isLoading } = useQuestion()

  return (
    <>
      <Stack.Screen
        options={{
          title: "",
          headerRight: () => <LoginButton />,
          headerLeft: () => <MenuButton />,
        }}
      />

      <QuestionDisplay question={question} isLoading={isLoading} />
      <EphemeralNotice remainingSeconds={remainingSeconds ?? 0} />
      <AnswersList />
    </>
  )
}
