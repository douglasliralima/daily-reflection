import { useModalBoxContext } from "@/context/ModalContext";
import NewAnswer from "@/model/NewAnswer";
import { useEffect } from "react";


export default function useAnswerModalContent() {
    const { value, setValue } = useModalBoxContext<NewAnswer>();

    useEffect(() => {
        if (!value) {
            setValue({ content: '' });
        }
    }, [value, setValue]);

    const onChangeText = (text: string) => {
        setValue((prev: NewAnswer | undefined) => ({
            ...prev,
            content: text,
        } as NewAnswer));
    }

    return { onChangeText, value };
}