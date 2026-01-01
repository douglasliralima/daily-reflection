import { MAX_CHARS } from "@/const";
import {
    BottomSheetScrollView,
    BottomSheetTextInput,
} from "@gorhom/bottom-sheet";
import { Text, View } from "react-native";
import AnswerModalFooter from "./components/AnswerModalFooter/AnswerModalFooter";
import { NewReferenceSection } from "./components/NewReferenceSection/NewReferenceSection";
import useAnswerModalContent from "./hooks/useAnswerModalContent";

interface Props {
    answerLabel: string;
    answerPlaceholder: string;
}

export function AnswerModalContentMobile({
    answerLabel,
    answerPlaceholder,
}: Props) {
    const { onChangeText, value } = useAnswerModalContent();

    return (
        <View>
            <View className="border-b border-neutral-800 px-6 py-5">
                <Text className="text-sm font-medium text-neutral-200">
                    {answerLabel}
                </Text>
            </View>

            <BottomSheetScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{
                    paddingHorizontal: 24,
                    paddingTop: 24,
                    paddingBottom: 24,
                }}
            >
                <BottomSheetTextInput
                    autoFocus
                    multiline
                    value={value?.content || ''}
                    onChangeText={onChangeText}
                    placeholder={answerPlaceholder}
                    placeholderTextColor="#6b7280"
                    textAlignVertical="top"
                    className="min-h-[220px] rounded-2xl bg-neutral-800 px-5 pt-5"
                    style={{
                        color: "#f5f5f5",
                        fontSize: 16,
                        lineHeight: 22,
                    }}
                    maxLength={MAX_CHARS}
                />
            </BottomSheetScrollView>

            <NewReferenceSection />

            <AnswerModalFooter />
        </View>
    );
}
