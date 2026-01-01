import Reference from "@/model/Reference";
import { Text, View } from "react-native";

export default function ReferenceSection({ reference }: { reference: Reference }) {
    return <View>
        <Text className="text-base text-neutral-200 leading-6">
            {reference.text}
        </Text>
        <Text className="text-sm text-neutral-400 mt-2 mb-4">
            Source: {reference.source}
        </Text>
    </View>
}