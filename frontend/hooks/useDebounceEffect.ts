import { useEffect, useRef } from "react";

export function useDebouncedEffect(
    effect: () => void,
    deps: unknown[],
    delay: number = 1000,
) {
    const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

    useEffect(() => {
        timeoutRef.current && clearTimeout(timeoutRef.current);

        timeoutRef.current = setTimeout(() => {
            effect();
        }, delay);

        return () => {
            timeoutRef.current && clearTimeout(timeoutRef.current);
        };
    }, deps);
}