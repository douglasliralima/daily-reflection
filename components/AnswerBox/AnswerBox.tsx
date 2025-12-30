import { useModalBoxContext } from "@/context/ModalContext";
import useCreateAnswer from "@/hooks/useCreateAnswer";
import clsx from "clsx";
import { Plus } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import AnswerModal from "./components/AnswerModal";

export default function AnswerBox() {
    const { onOpen } = useModalBoxContext();
    const { isCreating } = useCreateAnswer();

    return (
        <View>
            <View className={clsx(
                // padding
                "px-6 py-4",
                // border top style
                "border-t border-neutral-700 border-solid",
            )}>
                <TouchableOpacity
                    // TO-DO: We need to disable this button if the user already created a answer
                    // he could only edit it, if already created one today
                    disabled={isCreating}
                    className={clsx(
                        // Styles for the answer box container
                        "flex-row items-center gap-2",
                        // Background and padding styles
                        "bg-neutral-800 rounded-2xl px-4 py-3",
                    )}
                    onPress={onOpen}
                >
                    <Plus size={16} color="#9ca3af" />
                    <Text className="text-neutral-400">
                        Share a reflection...
                    </Text>
                </TouchableOpacity>
            </View>

            <AnswerModal />
        </View>
    );
}