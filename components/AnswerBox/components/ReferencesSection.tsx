import { Plus } from "lucide-react-native";
import { useCallback, useMemo, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

export type ReferenceDraft = {
    text: string;
    source: string;
};

interface ReferenceInputToggleProps {
    /**
     * Called when user clicks "Add" with valid fields.
     * If you don't pass this, the component still works (it will just reset/close).
     */
    onAdd?: (ref: ReferenceDraft) => void;

    /**
     * Optional: customize placeholders/labels.
     */
    textPlaceholder?: string;
    sourcePlaceholder?: string;
    buttonLabel?: string;
}

export function ReferenceInputToggle({
    onAdd,
    textPlaceholder = "Quote or reference text...",
    sourcePlaceholder = "Source (author, book, etc.)",
    buttonLabel = "Add a reference",
}: ReferenceInputToggleProps) {
    const [open, setOpen] = useState(false);
    const [text, setText] = useState("");
    const [source, setSource] = useState("");

    const canAdd = useMemo(() => !!text.trim() && !!source.trim(), [text, source]);

    const handleOpen = useCallback(() => {
        setOpen(true);
    }, []);

    const handleCancel = useCallback(() => {
        setOpen(false);
        setText("");
        setSource("");
    }, []);

    const handleAdd = useCallback(() => {
        if (!canAdd) return;

        const ref: ReferenceDraft = { text: text.trim(), source: source.trim() };
        onAdd?.(ref);

        // reset + close
        setOpen(false);
        setText("");
        setSource("");
    }, [canAdd, onAdd, source, text]);

    return (
        <View className="pt-5">
            {open ? (
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
