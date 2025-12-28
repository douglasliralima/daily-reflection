import clsx from "clsx";
import { Plus } from "lucide-react-native";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import AnswerModal from "./components/AnswerModal";

export default function AnswerBox() {
    const [openReflectionInput, setOpenReflectionInput] = useState(false);
    return (
        <View>
            <View className={clsx(
                // padding
                "px-6 py-4",
                // border top style
                "border-t border-neutral-700 border-solid",
            )}>
                <TouchableOpacity
                    className={clsx(
                        // Styles for the answer box container
                        "flex-row items-center gap-2",
                        // Background and padding styles
                        "bg-neutral-800 rounded-2xl px-4 py-3",
                    )}
                    onPress={() => setOpenReflectionInput(true)}
                >
                    <Plus size={16} color="#9ca3af" />
                    <Text className="text-neutral-400">
                        Share a reflection...
                    </Text>
                </TouchableOpacity>
            </View>

            <AnswerModal
                isOpen={openReflectionInput}
                onClose={() => setOpenReflectionInput(false)}
            />
        </View>
    );
}