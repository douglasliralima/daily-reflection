import { MAX_CHARS } from "@/const";
import { useModalBoxContext } from "@/context/ModalContext";
import { BottomSheetView } from "@gorhom/bottom-sheet";
import clsx from "clsx";
import { useState } from "react";
import { Text, TextInput } from "react-native";
import AnswerModalFooter from "./AnswerModalFooter/AnswerModalFooter";

interface Props {
    answerLabel: string;
    answerPlaceholder: string;
}

export function AnswerModalWeb({ answerLabel, answerPlaceholder }: Props) {
    const { value, onChange } = useModalBoxContext();

    const [show, setShow] = useState(false);
    const [text, setText] = useState("");
    const [source, setSource] = useState("");

    const handleAdd = () => {
        // do something with text + source
        setText("");
        setSource("");
        setShow(false);
    };

    return (
        <BottomSheetView style={{ paddingHorizontal: 24, paddingBottom: 24 }}>
            <Text className="mb-3 text-sm font-medium text-neutral-200">
                {answerLabel}
            </Text>

            <TextInput
                multiline
                value={value}
                onChangeText={onChange}
                maxLength={MAX_CHARS}
                placeholder={answerPlaceholder}
                placeholderTextColor="#6b7280"
                textAlignVertical="top"
                className={clsx(
                    // box
                    "min-h-[180px] rounded-top-2xl",
                    // padding
                    "px-5 pt-5",
                    // Background and text styles
                    "bg-neutral-800 text-base text-neutral-100"
                )}
            />

            <AnswerModalFooter />

        </BottomSheetView>
    );
}
