import { createContext, useCallback, useContext, useState } from "react";

interface ModalBoxContextProps {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    value: string;
    onChange: (value: string) => void;
}

const ModalBoxContext = createContext<ModalBoxContextProps | undefined>(undefined);

export function ModalBoxProvider({ children, ...props }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

    const onClose = useCallback(() => {
        setOpen(false);
        setValue("");
    }, []);

    return (
        <ModalBoxContext.Provider value={{
            isOpen: open,
            onOpen: () => setOpen(true),
            onClose,
            value,
            onChange: setValue
        }}>
            {children}
        </ModalBoxContext.Provider >
    );
}

export function useModalBoxContext() {
    const context = useContext(ModalBoxContext);
    if (!context) {
        throw new Error("useModalBoxContext must be used within an ModalBoxProvider");
    }
    return context;
}