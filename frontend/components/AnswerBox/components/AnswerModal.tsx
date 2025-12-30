import {
    BottomSheetBackdrop,
    BottomSheetBackdropProps,
    BottomSheetModal,
} from "@gorhom/bottom-sheet";
import { useEffect, useRef, useState } from "react";
import { Platform } from "react-native";
import { AnswerModalMobile } from "./AnswerModalMobile";
import { AnswerModalWeb } from "./AnswerModalWeb";

interface AnswerModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function AnswerModal({ isOpen, onClose }: AnswerModalProps) {
    const bottomSheetRef = useRef<BottomSheetModal>(null);
    const isWeb = Platform.OS === "web";

    const [value, setValue] = useState("");

    const snapPoints = isWeb ? ["60%"] : ["100%"];

    const answerLabel = "Your Reflection";
    const answerPlaceholder = "Take a moment. Write what comes to mind...";

    useEffect(() => {
        if (isOpen) bottomSheetRef.current?.present();
        else bottomSheetRef.current?.dismiss();
    }, [isOpen]);

    const renderBackdrop = (props: BottomSheetBackdropProps) => (
        <BottomSheetBackdrop
            {...props}
            appearsOnIndex={0}
            disappearsOnIndex={-1}
            opacity={0.75}
            pressBehavior="close"
        />
    );

    return (
        <BottomSheetModal
            ref={bottomSheetRef}
            snapPoints={snapPoints}
            onDismiss={onClose}
            backdropComponent={renderBackdrop}
            backgroundStyle={{ backgroundColor: "#1f1f22" }}
            handleIndicatorStyle={{ backgroundColor: "#525252" }}
        >
            {isWeb ? (
                <AnswerModalWeb answerLabel={answerLabel} answerPlaceholder={answerPlaceholder} value={value} onChange={setValue} />
            ) : (
                <AnswerModalMobile answerLabel={answerLabel} answerPlaceholder={answerPlaceholder} value={value} onChange={setValue} />
            )}
        </BottomSheetModal>
    );
}
