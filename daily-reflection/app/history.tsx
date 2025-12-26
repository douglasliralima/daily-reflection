import { Stack } from "expo-router"
import { Pressable, Text, View } from "react-native"

export default function History() {
    return (
        <>
            <Stack.Screen
                options={{
                    title: "Previous Reflection",
                }}
            />

            <View className="flex-1 px-5 pt-6">
                <Text className="text-neutral-300 text-sm mb-4">
                    Previous Questions
                </Text>

                <View className="gap-4">
                    {[
                        "Yesterday",
                        "Two days ago",
                        "Last week",
                    ].map((label) => (
                        <Pressable
                            key={label}
                            className="py-4 border-b border-neutral-800"
                        >
                            <Text className="text-white text-base">
                                {label}
                            </Text>
                        </Pressable>
                    ))}
                </View>
            </View>
        </>
    )
}