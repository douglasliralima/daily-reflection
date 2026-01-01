import { createContext, useCallback, useContext, useState } from "react";

interface ModalBoxContextProps<T = object> {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    value: T | undefined;
    setValue: React.Dispatch<React.SetStateAction<T | undefined>>;
}

const ModalBoxContext = createContext<ModalBoxContextProps<any> | undefined>(undefined);

export function ModalBoxProvider<T = object>({ children, ...props }: { children: React.ReactNode; initialValue?: T }) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState<T | undefined>();

    const onClose = useCallback(() => {
        setOpen(false);
        setValue(undefined);
    }, []);

    return (
        <ModalBoxContext.Provider value={{
            isOpen: open,
            onOpen: () => setOpen(true),
            onClose,
            value,
            setValue,
        }}>
            {children}
        </ModalBoxContext.Provider >
    );
}

export function useModalBoxContext<T = object>() {
    const context = useContext(ModalBoxContext) as ModalBoxContextProps<T> | undefined;
    if (!context) {
        throw new Error("useModalBoxContext must be used within an ModalBoxProvider");
    }
    return context;
}