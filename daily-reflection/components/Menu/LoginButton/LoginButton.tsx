import { Pressable, Text } from "react-native"

export default function LoginButton() {
    return (
        <Pressable
            style={{
                marginRight: 24,
            }}
            onPress={() => console.log("Login")}
            className="px-3 py-1.5 rounded-md bg-neutral-800 active:bg-neutral-700"
        >
            <Text className="text-white text-sm font-semibold">
                Enter
            </Text>
        </Pressable>
    )
}
