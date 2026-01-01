import { MAX_CHARS } from "@/const";
import { useModalBoxContext } from "@/context/ModalContext";
import {
    BottomSheetScrollView,
    BottomSheetTextInput,
} from "@gorhom/bottom-sheet";
import { Text, View } from "react-native";
import AnswerModalFooter from "./components/AnswerModalFooter/AnswerModalFooter";
import { ReferenceInputToggle } from "./components/ReferencesSection";

interface Props {
    answerLabel: string;
    answerPlaceholder: string;
}

export function AnswerModalMobile({
    answerLabel,
    answerPlaceholder,
}: Props) {
    const { value, onChange } = useModalBoxContext();

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
                    value={value}
                    onChangeText={onChange}
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

            <ReferenceInputToggle />

            <AnswerModalFooter />
        </View>
    );
}
