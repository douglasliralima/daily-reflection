import type { BottomSheetBackdropProps } from '@gorhom/bottom-sheet';
import { BottomSheetBackdrop, BottomSheetModal, BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { useEffect, useMemo, useRef } from 'react';
import { Text, View } from 'react-native';

interface Reference {
    text: string;
    source?: string;
}

interface ReferencesModalProps {
    isOpen: boolean;
    onClose: () => void;
    references: Reference[];
}

export default function ReferencesModal({
    isOpen,
    onClose,
    references,
}: ReferencesModalProps) {
    const bottomSheetRef = useRef<BottomSheetModal>(null);
    const snapPoints = useMemo(() => ['60%', '80%'], []);

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
                    References
                </Text>

                <BottomSheetScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 24 }}>
                    {references.map((ref, index) => (
                        <View
                            key={index}
                            className="mb-4 pb-4 border-b border-neutral-700"
                        >
                            <Text className="text-base text-neutral-200 leading-6">
                                {ref.text}
                            </Text>
                            {ref.source ? (
                                <Text className="text-sm text-neutral-400 mt-2">
                                    Source: {ref.source}
                                </Text>
                            ) : null}
                        </View>
                    ))}
                </BottomSheetScrollView>
            </View>
        </BottomSheetModal>
    );
}