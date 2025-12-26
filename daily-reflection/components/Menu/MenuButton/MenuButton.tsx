import { Menu } from "lucide-react-native"
import { Pressable, View } from "react-native"
import { useMenu } from ".."

export default function MenuButton() {
    const { openMenu } = useMenu()

    return (
        <View style={{ marginLeft: 24 }}>
            <Pressable onPress={openMenu} hitSlop={10} >
                <Menu size={24} color="white" />
            </Pressable>
        </View>
    )
}
