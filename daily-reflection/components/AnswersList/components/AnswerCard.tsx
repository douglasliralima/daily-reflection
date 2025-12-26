import ReferencesModal from "@/components/ReferencesModal";
import { useDebouncedEffect } from "@/hooks/useDebounceEffect";
import mockVote from "@/mock/mockVote";
import Answers from "@/model/Answer";
import { BookOpen, ChevronDown, ChevronUp } from "lucide-react-native";
import { useCallback, useState } from "react";
import { Pressable, Text, View } from "react-native";

export default function AnswerCard({ answer }: { answer: Answers }) {

    const [votes, setVotes] = useState(answer.votes);
    const [userVote, setUserVote] = useState<"up" | "down" | "neutral">("neutral");
    const [openReferences, setOpenReferences] = useState(false);

    const textColorClass = {
        up: "font-bold text-green-500",
        down: "font-bold text-red-500",
        neutral: "text-neutral-400",
    };

    const handleVote = useCallback((type: "up" | "down") => {
        if (userVote === type) {
            setVotes((prevVotes) => (type === "up" ? prevVotes - 1 : prevVotes + 1));
            setUserVote("neutral");
        } else {
            setVotes((prevVotes) => {
                if (userVote === "neutral") {
                    return type === "up" ? prevVotes + 1 : prevVotes - 1;
                } else {
                    return type === "up" ? prevVotes + 2 : prevVotes - 2;
                }
            });
            setUserVote(type);
        }
    }, [userVote]);

    useDebouncedEffect(
        () => {
            mockVote(answer.id, userVote);
        },
        [userVote],
        600
    );

    return (
        <View className="px-6 py-6 border-b border-neutral-800">
            <Text className="text-base text-neutral-100 leading-relaxed">
                {answer.content}
            </Text>
            <View className="flex-row items-center justify-between mt-5">
                <View className="flex-row items-center gap-1">
                    <Pressable
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

                {answer.references && answer.references.length > 0 && (
                    <Pressable
                        className="flex-row items-center gap-1.5"
                        onPress={() => setOpenReferences(true)}
                    >
                        <BookOpen size={13} strokeWidth={1.5} color="#9ca3af" />
                        <Text className="text-xs text-neutral-400">
                            {answer.references.length}
                        </Text>
                    </Pressable>
                )}
            </View>
            <ReferencesModal
                isOpen={openReferences}
                onClose={() => setOpenReferences(false)}
                references={answer.references || []}
            />
        </View>
    );
}