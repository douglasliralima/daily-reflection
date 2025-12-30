import { Text, View } from "react-native";

interface EphemeralNoticeProps {
    remainingSeconds: number;
}

function formatTime(seconds: number) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;

    return `${h}h ${m}m ${s}s`;
}

const EphemeralNotice = ({ remainingSeconds }: EphemeralNoticeProps) => {
    return (
        <View className="px-6 py-4 border-b border-neutral-800">
            <Text className="text-xs font-semibold text-neutral-600 text-center">
                This conversation disappears in {formatTime(remainingSeconds)}
            </Text>
        </View>
    );
};

export default EphemeralNotice;
