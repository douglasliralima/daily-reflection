import { BottomSheetView } from "@gorhom/bottom-sheet";
import { Text, TextInput, View } from "react-native";
import { ShareButton } from "./ShareButton";

interface Props {
    value: string;
    onChange: (v: string) => void;
}

export function AnswerModalWeb({ value, onChange }: Props) {
    return (
        <BottomSheetView style={{ paddingHorizontal: 24, paddingBottom: 24 }}>
            <Text className="mb-3 text-sm font-medium text-neutral-200">
                Your reflection
            </Text>

            <TextInput
                multiline
                value={value}
                onChangeText={onChange}
                placeholder="Take a moment. Write what comes to mind..."
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
