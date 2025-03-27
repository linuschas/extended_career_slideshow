import { useEffect, useRef, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { TrackDetails } from "keen-slider";
import { usePause } from "./components/usePause";
import PauseDisclaimer from "./components/PauseDisclaimer";
import Slide, { SlideDetails } from "./components/Slide";
import importedSlides from "./slides.json";

const App = () => {
    const [details, setDetails] = useState<TrackDetails | null>(null);
    const autoPlayIntervalRef = useRef<number | null>(null);
    const paused = usePause();

    // Keen Slider boilerplate
    const [sliderRef, instanceRef] = useKeenSlider({
        loop: true,
        detailsChanged(s) {
            setDetails(s.track.details);
        },
        initial: 0,
    });

    // Control slider with arrows
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!instanceRef.current) return;

            if (e.key === "ArrowRight") {
                instanceRef.current.next();
                e.preventDefault();
                if (!paused) startAutoPlay();
            } else if (e.key === "ArrowLeft") {
                instanceRef.current.prev();
                e.preventDefault();
                if (!paused) startAutoPlay();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [instanceRef]);

    const stopAutoPlay = () => {
        if (autoPlayIntervalRef.current) {
            clearInterval(autoPlayIntervalRef.current);
            autoPlayIntervalRef.current = null;
        }
    };

    const startAutoPlay = () => {
        stopAutoPlay();
        autoPlayIntervalRef.current = setInterval(() => {
            if (!instanceRef.current) return;
            instanceRef.current.next();
        }, 15000);
    };

    // Auto play slider when unpaused, clear interval when paused
    useEffect(() => {
        if (paused) return;

        startAutoPlay();
        return stopAutoPlay;
    }, [paused]);

    const slides: SlideDetails[] = importedSlides;

    return (
        <>
            <img
                src="./chas_academy_logo.png"
                alt="Chas Academy logo"
                style={{
                    position: "absolute",
                    top: "0.75vw",
                    left: "0.75vw",
                    width: "10vw",
                    height: "auto",
                    zIndex: 10,
                }}
            />

            <div ref={sliderRef} className="keen-slider zoom-out">
                <PauseDisclaimer paused={paused} />
                {slides.map((slide, idx) => (
                    <Slide
                        key={"slide-" + idx}
                        idx={idx}
                        details={details}
                        {...slide}
                    />
                ))}
            </div>
        </>
    );
};

export default App;
