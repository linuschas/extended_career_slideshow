// Pause hook, primarily to manage the auto-playing slider

import { useEffect, useState } from "react";

export const usePause = (): boolean => {
    const [paused, setPaused] = useState<boolean>(false);

    useEffect(() => {
        const keyDown = (e: KeyboardEvent) => {
            if (e.code === "Space") {
                e.preventDefault();
                setPaused((prev) => !prev);
            }
        };

        window.addEventListener("keydown", keyDown);

        return () => window.removeEventListener("keydown", keyDown);
    }, []);

    return paused;
};
