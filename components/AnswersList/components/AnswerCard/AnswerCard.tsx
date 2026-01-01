import ReferencesModal from "@/components/AnswersList/components/ReferencesModal";
import Answers from "@/model/Answer";
import { BookOpen, ChevronDown, ChevronUp } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";
import useAnswerCard from "./hooks/useAnswerCard";

export default function AnswerCard({ answer }: { answer: Answers }) {
    const {
        isOptimistic,
        interactionsDisabled,
        hasError,
        votes,
        userVote,
        textColorClass,
        openReferences,
        setOpenReferences,
        handleVote,
        retryCreateAnswer
    } = useAnswerCard({ answer });

    return (
        <View
            className="px-6 py-4 border-b border-neutral-800"
            style={{
                opacity: isOptimistic ? 0.55 : 1,
            }}
        >
            <Text className="text-lg text-neutral-200 leading-relaxed">
                {answer.content}
            </Text>
            <View className="flex-row items-center justify-between mt-5">
                <View className="flex-row items-center gap-1">
                    <Pressable
                        disabled={interactionsDisabled}
                        onPress={() => handleVote("up")}
                        className="p-1.5 rounded"
                    >
                        <ChevronUp
                            size={18}
                            strokeWidth={1.5}
                            color={userVote === "up" ? "#ffffff" : "#9ca3af"}
                        />
                    </Pressable>

                    <Text
                        className={`text-xs min-w-[24px] text-center 
                            ${textColorClass[userVote as keyof typeof textColorClass]}`}
                    >
                        {votes !== 0 ? votes : ""}
                    </Text>

                    <Pressable
                        disabled={interactionsDisabled}
                        onPress={() => handleVote("down")}
                        className="p-1.5 rounded"
                    >
                        <ChevronDown
                            size={18}
                            strokeWidth={1.5}
                            color={userVote === "down" ? "#ffffff" : "#9ca3af"}
                        />
                    </Pressable>
                </View>

                {hasError && (
                    <Pressable
                        onPress={() => {
                            retryCreateAnswer(answer);
                        }}
                        className="mt-3 self-start"
                    >
                        <Text className="text-xs text-red-400 font-semibold">
                            Failed to post. Tap to retry
                        </Text>
                    </Pressable>
                )}

                {answer.reference && (
                    <Pressable
                        className="flex-row items-center gap-1.5"
                        onPress={() => setOpenReferences(true)}
                    >
                        <BookOpen size={13} strokeWidth={1.5} color="#9ca3af" />
                    </Pressable>
                )}
            </View>
            <ReferencesModal
                isOpen={openReferences}
                onClose={() => setOpenReferences(false)}
                reference={answer.reference}
            />
        </View>
    );
}