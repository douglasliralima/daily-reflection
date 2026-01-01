import { MAX_CHARS } from "@/const";
import { BottomSheetView } from "@gorhom/bottom-sheet";
import clsx from "clsx";
import { Text, TextInput } from "react-native";
import AnswerModalFooter from "./components/AnswerModalFooter/AnswerModalFooter";
import { NewReferenceSection } from "./components/NewReferenceSection/NewReferenceSection";
import useAnswerModalContent from "./hooks/useAnswerModalContent";

interface Props {
    answerLabel: string;
    answerPlaceholder: string;
}

export function AnswerModalContentWeb({ answerLabel, answerPlaceholder }: Props) {
    const { onChangeText, value } = useAnswerModalContent();


    return (
        <BottomSheetView style={{ paddingHorizontal: 24, paddingBottom: 24 }}>
            <Text className="mb-3 text-sm font-medium text-neutral-200">
                {answerLabel}
            </Text>

            <TextInput
                multiline
                value={value?.content || ''}
                onChangeText={onChangeText}
                maxLength={MAX_CHARS}
                placeholder={answerPlaceholder}
                placeholderTextColor="#6b7280"
                textAlignVertical="top"
                className={clsx(
                    // box
                    "min-h-[180px] rounded-top-2xl",
                    // padding
                    "px-5 pt-5",
                    // Background and text styles
                    "bg-neutral-800 text-base text-neutral-100"
                )}
            />
            <NewReferenceSection />

            <AnswerModalFooter />

        </BottomSheetView>
    );
}
