import { MAX_CHARS } from "@/const";
import { useModalBoxContext } from "@/context/ModalContext";
import { BottomSheetView } from "@gorhom/bottom-sheet";
import clsx from "clsx";
import { Text, TextInput } from "react-native";
import AnswerModalFooter from "./components/AnswerModalFooter/AnswerModalFooter";
import { ReferenceInputToggle } from "./components/ReferencesSection";

interface Props {
    answerLabel: string;
    answerPlaceholder: string;
}

export function AnswerModalWeb({ answerLabel, answerPlaceholder }: Props) {
    const { value, onChange } = useModalBoxContext();

    return (
        <BottomSheetView style={{ paddingHorizontal: 24, paddingBottom: 24 }}>
            <Text className="mb-3 text-sm font-medium text-neutral-200">
                {answerLabel}
            </Text>

            <TextInput
                multiline
                value={value}
                onChangeText={onChange}
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
            <ReferenceInputToggle />

            <AnswerModalFooter />

        </BottomSheetView>
    );
}
