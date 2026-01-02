import { ActivityIndicator, Pressable, Text, View } from "react-native";

interface SocialSignInButtonProps {
    label: string;
    icon: React.ReactNode;
    loading?: boolean;
    onPress: () => void;
}

export function SocialSignInButton({
    label,
    icon,
    loading,
    onPress,
}: SocialSignInButtonProps) {
    return (
        <Pressable
            onPress={onPress}
            disabled={loading}
            className="w-full flex-row items-center justify-center gap-2 rounded-xl border border-neutral-700 bg-neutral-900 py-3"
        >
            {loading ? (
                <ActivityIndicator size="small" color="#e5e5e5" />
            ) : (
                <>
                    <View>{icon}</View>
                    <Text className="text-sm font-medium text-neutral-100">
                        {label}
                    </Text>
                </>
            )}
        </Pressable>
    );
}
