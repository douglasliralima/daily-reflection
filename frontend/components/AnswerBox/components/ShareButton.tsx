import { Pressable, Text } from "react-native";

interface ShareButtonProps {
    enabled: boolean;
    onPress?: () => void;
}

export function ShareButton({ enabled, onPress }: ShareButtonProps) {
    return (
        <Pressable
            disabled={!enabled}
            onPress={onPress}
            className={`w-full items-center justify-center rounded-xl py-3 ${enabled ? "bg-neutral-700" : "bg-neutral-800"
                }`}
        >
            <Text
                className={`text-sm font-medium ${enabled ? "text-neutral-100" : "text-neutral-500"
                    }`}
            >
                Share
            </Text>
        </Pressable>
    );
}
