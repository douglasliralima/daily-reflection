import { View } from "react-native";
import Svg, { Circle } from "react-native-svg";

interface CharacterProgressProps {
    current: number;
    max: number;
    size?: number;
}

export function CharacterProgress({
    current,
    max,
    size = 24,
}: CharacterProgressProps) {
    const percentage = Math.min((current / max) * 100, 100);

    const strokeWidth = 2;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset =
        circumference - (percentage / 100) * circumference;

    const getColor = () => {
        if (percentage <= 50) return "#3b82f6";
        if (percentage <= 80) return "#facc15";
        return "#ef4444";
    };

    return (
        <View
            style={{
                width: size,
                height: size,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 2,
            }}
        >
            <Svg
                width={size}
                height={size}
                viewBox={`0 0 ${size} ${size}`}
                style={{ transform: [{ rotate: "-90deg" }] }}
            >
                <Circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="#27272a"
                    strokeWidth={strokeWidth}
                    fill="none"
                />

                <Circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke={getColor()}
                    strokeWidth={strokeWidth}
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                />
            </Svg>
        </View>
    );
}
