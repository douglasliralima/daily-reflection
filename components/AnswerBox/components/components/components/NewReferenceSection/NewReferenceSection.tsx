import ReferenceContent from "@/components/ReferenceContent/ReferenceContent";
import { Pencil, Plus, Trash2 } from "lucide-react-native";
import { Pressable, Text, TextInput, View } from "react-native";
import useNewReferenceSection from "./hooks/useNewReferenceSection";

interface NewReferenceSectionProps {
    textPlaceholder?: string;
    sourcePlaceholder?: string;
    buttonLabel?: string;
}

export function NewReferenceSection({
    textPlaceholder = "Quote or reference text...",
    sourcePlaceholder = "Source (author, book, etc.)",
    buttonLabel = "Add a reference",
}: NewReferenceSectionProps) {
    const {
        open,
        text,
        setText,
        source,
        setSource,
        canAdd,
        hasReference,
        reference,
        handleOpen,
        handleCancel,
        handleAdd,
        handleEdit,
        handleRemove,
    } = useNewReferenceSection();

    return (
        <View className="pt-5">
            {hasReference && !open && reference ? (
                <View className="gap-3">
                    <ReferenceContent reference={reference} />
                    <View className="flex-row items-center gap-3">
                        <Pressable
                            onPress={handleEdit}
                            className="flex-row items-center gap-2"
                            hitSlop={8}
                        >
                            <Pencil size={14} strokeWidth={1.5} color="#9ca3af" />
                            <Text className="text-xs font-medium text-neutral-400">
                                Edit reference
                            </Text>
                        </Pressable>
                        <Pressable
                            onPress={handleRemove}
                            className="flex-row items-center gap-2"
                            hitSlop={8}
                        >
                            <Trash2 size={14} strokeWidth={1.5} color="#ef4444" />
                            <Text className="text-xs font-medium text-red-400">
                                Remove
                            </Text>
                        </Pressable>
                    </View>
                </View>
            ) : open ? (
                <View className="gap-3">
                    <TextInput
                        value={text}
                        onChangeText={setText}
                        placeholder={textPlaceholder}
                        placeholderTextColor="#6b7280"
                        className="w-full rounded-xl bg-neutral-800 px-4 py-3"
                        style={{
                            color: "#f5f5f5",
                            fontSize: 14,
                            lineHeight: 20,
                        }}
                    />

                    <TextInput
                        value={source}
                        onChangeText={setSource}
                        placeholder={sourcePlaceholder}
                        placeholderTextColor="#6b7280"
                        className="w-full rounded-xl bg-neutral-800 px-4 py-3"
                        style={{
                            color: "#f5f5f5",
                            fontSize: 14,
                            lineHeight: 20,
                        }}
                    />

                    <View className="flex-row items-center gap-3">
                        <Pressable onPress={handleCancel} hitSlop={8}>
                            <Text className="text-xs font-medium text-neutral-400">
                                Cancel
                            </Text>
                        </Pressable>

                        <Pressable
                            onPress={handleAdd}
                            disabled={!canAdd}
                            className={`rounded-xl px-4 py-2 ${canAdd ? "bg-neutral-700" : "bg-neutral-800"
                                }`}
                        >
                            <Text
                                className={`text-xs font-semibold ${canAdd ? "text-neutral-100" : "text-neutral-500"
                                    }`}
                            >
                                Add
                            </Text>
                        </Pressable>
                    </View>
                </View>
            ) : (
                <Pressable
                    onPress={handleOpen}
                    className="flex-row items-center gap-2"
                    hitSlop={8}
                >
                    <Plus size={14} strokeWidth={1.5} color="#9ca3af" />
                    <Text className="text-xs font-medium text-neutral-400">
                        {buttonLabel}
                    </Text>
                </Pressable>
            )}
        </View>
    );
}
