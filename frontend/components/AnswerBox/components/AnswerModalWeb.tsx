import { useModalBoxContext } from "@/context/ModalContext";
import { BottomSheetView } from "@gorhom/bottom-sheet";
import { Text, TextInput, View } from "react-native";
import { ShareButton } from "./ShareButton/ShareButton";

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
                placeholder={answerPlaceholder}
                placeholderTextColor="#6b7280"
                textAlignVertical="top"
                className="min-h-[180px] rounded-2xl bg-neutral-800 p-5 text-base text-neutral-100"
            />

            <View className="mt-6">
                <ShareButton enabled={!!value.trim()} />
            </View>
        </BottomSheetView>
    );
}
