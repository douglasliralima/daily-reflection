import { MAX_CHARS } from "@/const";
import { useModalBoxContext } from "@/context/ModalContext";
import { Text, View } from "react-native";
import { ShareButton } from "../ShareButton/ShareButton";
import { CharacterProgress } from "./components/CharactersProgress";

export default function AnswerModalFooter() {
    const { value } = useModalBoxContext();
    const currentLength = value.length;

    return <View className="py-4 items-center justify-between flex-row">
        <View className="flex flex-row gap-2 items-center">
            <CharacterProgress
                current={currentLength}
                max={MAX_CHARS}
                size={24}
            />

            <Text className="mt-1 text-xs text-neutral-500">
                Your identity remains anonymous.
            </Text>
        </View>

        <ShareButton enabled={!!value.trim()} />
    </View>
}