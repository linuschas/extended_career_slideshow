// Absoltue places tags on screen

const Tags = ({ tags }: { tags: string[] }) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "1rem",
            }}
        >
            {tags.map((tag, i) => (
                <div
                    key={i}
                    style={{
                        background: "rgb(var(--blue1))",
                        borderRadius: "2.5rem",
                        padding: "0.25rem 1.5rem",
                        boxShadow: "0 0 5px 1px rgba(0, 0, 0, 0.3)",
                    }}
                >
                    <p
                        style={{
                            fontSize: "2rem",
                        }}
                    >
                        {tag}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Tags;
