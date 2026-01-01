import { useModalBoxContext } from "@/context/ModalContext";
import {
    BottomSheetBackdrop,
    BottomSheetBackdropProps,
    BottomSheetModal,
} from "@gorhom/bottom-sheet";
import { useEffect, useRef } from "react";
import { Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnswerModalContentMobile } from "./components/AnswerModalContentMobile";
import { AnswerModalContentWeb } from "./components/AnswerModalContentWeb";


export default function AnswerModal() {
    const insets = useSafeAreaInsets()

    const bottomSheetRef = useRef<BottomSheetModal>(null);
    const isWeb = Platform.OS === "web";
    const { isOpen, onClose } = useModalBoxContext();

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
            bottomInset={insets.bottom}
            topInset={insets.top}
            ref={bottomSheetRef}
            snapPoints={snapPoints}
            backdropComponent={renderBackdrop}
            backgroundStyle={{ backgroundColor: "#1f1f22" }}
            handleIndicatorStyle={{ backgroundColor: "#525252" }}
            onDismiss={onClose}
        >
            {isWeb ? (
                <AnswerModalContentWeb answerLabel={answerLabel} answerPlaceholder={answerPlaceholder} />
            ) : (
                <AnswerModalContentMobile answerLabel={answerLabel} answerPlaceholder={answerPlaceholder} />
            )}
        </BottomSheetModal>
    );
}
