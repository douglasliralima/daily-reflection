import {
    BottomSheetScrollView,
    BottomSheetTextInput,
} from "@gorhom/bottom-sheet";
import { Text, View } from "react-native";
import { ShareButton } from "./ShareButton";

interface Props {
    answerLabel: string;
    answerPlaceholder: string;
    value: string;
    onChange: (v: string) => void;
}

export function AnswerModalMobile({ answerLabel, answerPlaceholder, value, onChange }: Props) {
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
                    className="min-h-[220px] rounded-2xl bg-neutral-800 p-5"
                    style={{
                        color: "#f5f5f5",
                        fontSize: 16,
                        lineHeight: 22,
                    }}
                />
            </BottomSheetScrollView>

            {/* FOOTER */}
            <View className="border-t border-neutral-800 px-6 py-5">
                <ShareButton enabled={!!value.trim()} />
            </View>
        </View>
    );
}
