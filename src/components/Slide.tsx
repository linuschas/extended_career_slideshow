import { TrackDetails } from "keen-slider";
import Tags from "./Tags";
import React from "react";

export interface SlideDetails {
    title: string;
    tags: string[];
    description: string;
    path: string;
}

interface SlideProps extends SlideDetails {
    idx: number;
    details: TrackDetails | null;
}

const Slide: React.FC<SlideProps> = ({
    title,
    tags,
    description,
    path,
    idx,
    details,
}) => {
    // Keen Slider boilerplate
    const scaleStyle = (idx: number) => {
        if (!details) return {};

        const slide = details.slides[idx];
        const scale_size = 0.7;
        const scale = 1 - (scale_size - scale_size * slide.portion);

        return {
            transform: `scale(${scale})`,
            WebkitTransform: `scale(${scale})`,
        };
    };

    return (
        <div
            key={idx}
            className="keen-slider__slide zoom-out__slide"
            style={{
                padding: "1rem",
                boxSizing: "border-box",
            }}
        >
            <div
                style={{
                    ...scaleStyle(idx),
                    position: "relative",
                    borderRadius: "3rem",
                    overflow: "hidden",
                    background: "rgb(var(--grey1))",
                    border: "3px solid rgb(var(--grey2))",
                    boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.3)",
                }}
            >
                <img
                    src={path}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                />

                <div
                    style={{
                        bottom: "0",
                        textAlign: "left",
                        backdropFilter: "blur(20px)",
                        padding: "3rem",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginBottom: "0.5rem",
                        }}
                    >
                        <h1
                            style={{
                                fontWeight: "500",
                                fontSize: "3rem",
                                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                            }}
                        >
                            {title}
                        </h1>

                        <Tags tags={tags} />
                    </div>
                    <p
                        style={{
                            fontSize: "2.25rem",
                            textShadow: "2px 2px 4px rgba(0, 0, 0, 1.0)",
                            color: "rgba(var(--secText))",
                        }}
                    >
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Slide;
