import { useModalBoxContext } from "@/context/ModalContext";
import {
    BottomSheetBackdrop,
    BottomSheetBackdropProps,
    BottomSheetModal,
} from "@gorhom/bottom-sheet";
import { useEffect, useRef } from "react";
import { Platform } from "react-native";
import { AnswerModalMobile } from "./AnswerModalMobile";
import { AnswerModalWeb } from "./AnswerModalWeb";


export default function AnswerModal() {
    const bottomSheetRef = useRef<BottomSheetModal>(null);
    const isWeb = Platform.OS === "web";
    const { isOpen } = useModalBoxContext();

    const snapPoints = isWeb ? ["80%"] : ["100%"];

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
            backdropComponent={renderBackdrop}
            backgroundStyle={{ backgroundColor: "#1f1f22" }}
            handleIndicatorStyle={{ backgroundColor: "#525252" }}
        >
            {isWeb ? (
                <AnswerModalWeb answerLabel={answerLabel} answerPlaceholder={answerPlaceholder} />
            ) : (
                <AnswerModalMobile answerLabel={answerLabel} answerPlaceholder={answerPlaceholder} />
            )}
        </BottomSheetModal>
    );
}
