const PauseDisclaimer = ({ paused }: { paused: boolean }) => {
    return (
        paused && (
            <div
                style={{
                    position: "absolute",
                    zIndex: 10,
                    top: "2rem",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backdropFilter: "blur(20px)",
                    background: "rgba(var(--grey1), 0.85)",
                    borderRadius: "0.4rem",
                    padding: "0.5rem 1.5rem",
                    textAlign: "start",
                    border: "1px solid rgb(var(--grey2))",
                    boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.3)",
                }}
            >
                <h2
                    style={{
                        fontSize: "2rem",
                        fontWeight: "300",
                    }}
                >
                    Pausat
                </h2>
                <p
                    style={{
                        fontSize: "1.4rem",
                        color: "rgba(var(--secText))",
                        fontWeight: "300",
                        marginTop: "-0.5rem",
                    }}
                >
                    Bildspelet har blivit pausat. Tryck på mellanslagstangenten
                    för att fortsätta igen.
                </p>
            </div>
        )
    );
};

export default PauseDisclaimer;
