import clsx from "clsx";
import { Plus } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";

export default function AnswerBox() {
    return (
        <View className="px-6 py-4">
            <TouchableOpacity
                className={clsx(
                    // Styles for the answer box container
                    "flex-row items-center gap-2",
                    // Background and padding styles
                    "bg-neutral-800 rounded-2xl px-4 py-3",
                )}
                onPress={() => {
                    // Handle press to open answer input
                }}
            >
                <Plus size={16} color="#9ca3af" />
                <Text className="text-neutral-400">
                    Share a reflection...
                </Text>
            </TouchableOpacity>
        </View>
    );
}