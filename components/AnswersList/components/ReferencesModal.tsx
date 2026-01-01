import ReferenceSection from '@/components/ReferenceContent/ReferenceContent';
import Reference from '@/model/Reference';
import type { BottomSheetBackdropProps } from '@gorhom/bottom-sheet';
import { BottomSheetBackdrop, BottomSheetModal, BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { useEffect, useMemo, useRef } from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface ReferenceModalProps {
    isOpen: boolean;
    onClose: () => void;
    reference: Reference | undefined;
}

export default function ReferenceModal({
    isOpen,
    onClose,
    reference,
}: ReferenceModalProps) {
    if (!reference) {
        return null;
    }

    const bottomSheetRef = useRef<BottomSheetModal>(null);
    const snapPoints = useMemo(() => ['60%', '80%'], []);
    const insets = useSafeAreaInsets()


    useEffect(() => {
        if (isOpen) {
            bottomSheetRef.current?.present();
        } else {
            bottomSheetRef.current?.dismiss();
        }
    }, [isOpen]);

    const renderBackdrop = (props: BottomSheetBackdropProps) => (
        <BottomSheetBackdrop
            {...props}
            disappearsOnIndex={-1}
            appearsOnIndex={0}
            opacity={0.5}
        />
    );

    return (
        <BottomSheetModal
            bottomInset={insets.bottom}
            topInset={insets.top}
            ref={bottomSheetRef}
            snapPoints={snapPoints}
            enablePanDownToClose
            onDismiss={onClose}
            backdropComponent={renderBackdrop}
            backgroundStyle={{ backgroundColor: '#262626' }}
            handleIndicatorStyle={{ backgroundColor: '#525252' }}
        >
            <View className="px-6 pb-6 flex-1">
                <Text className="text-xl font-bold text-neutral-100 mb-4">
                    Reference
                </Text>

                <BottomSheetScrollView contentContainerStyle={{ paddingBottom: 48 }}>
                    <ReferenceSection reference={reference} />
                </BottomSheetScrollView>
            </View>
        </BottomSheetModal>
    );
}