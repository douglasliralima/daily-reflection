import { Pressable, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const DATA = [
    {
        title: "Today",
        items: [
            {
                id: "1",
                question: "What went well today?",
                preview: "I finished an important task and stayed focused.",
            },
        ],
    },
    {
        title: "Yesterday",
        items: [
            {
                id: "2",
                question: "What was challenging?",
                preview: "I procrastinated in the afternoon.",
            },
        ],
    },
    {
        title: "Last week",
        items: [
            {
                id: "3",
                question: "What can I improve tomorrow?",
                preview: "Start with the hardest task first.",
            },
        ],
    },
]

export default function History() {
    return (
        <SafeAreaView className="flex-1 bg-neutral-950 px-4 pt-4">
            {DATA.map((section) => (
                <View key={section.title} className="mb-6">
                    {/* Section title */}
                    <Text className="text-neutral-400 text-sm mb-3">
                        {section.title}
                    </Text>

                    {/* Entries */}
                    <View className="gap-3">
                        {section.items.map((item) => (
                            <Pressable
                                key={item.id}
                                className="rounded-2xl bg-neutral-900 border border-neutral-800 p-4 active:bg-neutral-800"
                                onPress={() => {
                                    console.log("Open reflection", item.id)
                                }}
                            >
                                <Text className="text-white text-base font-semibold">
                                    {item.question}
                                </Text>

                                <Text
                                    className="text-neutral-400 text-sm mt-2"
                                    numberOfLines={2}
                                >
                                    {item.preview}
                                </Text>
                            </Pressable>
                        ))}
                    </View>
                </View>
            ))}
        </SafeAreaView>
    )
}
