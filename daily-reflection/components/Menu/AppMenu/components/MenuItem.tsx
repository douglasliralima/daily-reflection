import { LucideIcon } from "lucide-react-native"
import { Pressable, Text } from "react-native"

type MenuItemProps = {
    label: string
    icon: LucideIcon
    onPress: () => void
}

export default function MenuItem({
    label,
    icon: Icon,
    onPress,
}: MenuItemProps) {
    return (
        <Pressable
            onPress={onPress}
            className="flex-row items-center gap-3 py-4 px-4 rounded-xl bg-neutral-900 active:bg-neutral-800"
        >
            <Icon size={20} color="white" />
            <Text className="text-white text-base">{label}</Text>
        </Pressable>
    )
}
