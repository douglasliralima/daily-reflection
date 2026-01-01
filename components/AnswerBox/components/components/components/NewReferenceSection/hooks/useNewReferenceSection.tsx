import { useModalBoxContext } from "@/context/ModalContext";
import NewAnswer from "@/model/NewAnswer";
import Reference from "@/model/Reference";
import { useCallback, useEffect, useMemo, useState } from "react";


export default function useNewReferenceSection() {
    const { value, setValue } = useModalBoxContext<NewAnswer>();

    const [open, setOpen] = useState(false);
    const [text, setText] = useState("");
    const [source, setSource] = useState("");
    const [isEditing, setIsEditing] = useState(false);

    const hasReference = useMemo(() => !!value?.reference, [value?.reference]);

    const canAdd = useMemo(() => !!text.trim() && !!source.trim(), [text, source]);

    useEffect(() => {
        if (isEditing && value?.reference) {
            setText(value.reference.text);
            setSource(value.reference.source);
            setOpen(true);
        }
    }, [isEditing, value?.reference]);

    const handleOpen = useCallback(() => {
        setOpen(true);
    }, []);

    const handleCancel = useCallback(() => {
        setOpen(false);
        setText("");
        setSource("");
        setIsEditing(false);
    }, []);

    const handleAdd = useCallback(() => {
        if (!canAdd) return;

        const ref: Reference = { text: text.trim(), source: source.trim() };

        setValue((prev: NewAnswer | undefined) => ({
            ...prev,
            reference: ref,
        } as NewAnswer));

        setOpen(false);
        setText("");
        setSource("");
        setIsEditing(false);
    }, [canAdd, source, text, setValue]);

    const handleEdit = useCallback(() => {
        setIsEditing(true);
    }, []);

    const handleRemove = useCallback(() => {
        setValue((prev: NewAnswer | undefined) => ({
            ...prev,
            reference: undefined,
        } as NewAnswer));
    }, [setValue]);

    return {
        open,
        text,
        setText,
        source,
        setSource,
        canAdd,
        hasReference,
        reference: value?.reference,
        handleOpen,
        handleCancel,
        handleAdd,
        handleEdit,
        handleRemove,
    };
}