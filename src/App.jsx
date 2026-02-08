import { useState, useEffect } from "react";

const concepts = [
    { id: "c1", name: "Konsept 1 — Clean Fintech", image: "/gorseller/01_clean_fintech.png", bg: "#FFFFFF" },
    { id: "c2", name: "Konsept 2 — Bold Geometric", image: "/gorseller/02_bold_dark.png", bg: "#0A1628" },
    { id: "c3", name: "Konsept 3 — Dot Separator", image: "/gorseller/03_dot_separator.png", bg: "#F8FAFC" },
    { id: "c4", name: "Konsept 4 — Gradient Modern", image: "/gorseller/04_gradient_modern.png", bg: "#FFFFFF" },
    { id: "c5", name: "Konsept 5 — Stacked", image: "/gorseller/05_stacked.png", bg: "#0F172A" },
    { id: "c11", name: "Konsept 6 — Chip Minimal Flat", image: "/gorseller/11_chip_minimal_flat.png", bg: "#FFFFFF" },
    { id: "c12", name: "Konsept 7 — Chip Dark Bold", image: "/gorseller/12_chip_dark_bold.png", bg: "#0A0A0A" },
    { id: "c13", name: "Konsept 8 — Chip Gradient Circle", image: "/gorseller/13_chip_gradient_circle.png", bg: "#FFFFFF" },
    { id: "c14", name: "Konsept 9 — Chip Outlined Light", image: "/gorseller/14_chip_outlined_light.png", bg: "#F8FAFC" },
    { id: "c15", name: "Konsept 10 — Chip Hexagon Dark", image: "/gorseller/15_chip_hexagon_dark.png", bg: "#0F172A" },
    { id: "c16", name: "Konsept 11 — Chip Shield", image: "/gorseller/16_chip_shield.png", bg: "#FFFFFF" },
    { id: "c17", name: "Konsept 12 — Chip Rounded Soft", image: "/gorseller/17_chip_rounded_soft.png", bg: "#F1F5F9" },
    { id: "c18", name: "Konsept 13 — Chip Stacked Dark", image: "/gorseller/18_chip_stacked_dark.png", bg: "#0A1628" },
    { id: "c19", name: "Konsept 14 — Chip Line Art", image: "/gorseller/19_chip_line_art.png", bg: "#FFFFFF" },
    { id: "c20", name: "Konsept 15 — Chip App Icon", image: "/gorseller/20_chip_app_icon.png", bg: "#FFFFFF" }
];

export default function PayCoreLogoShowcase() {
    const [fullscreen, setFullscreen] = useState(null);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!fullscreen) return;
            const currentIndex = concepts.findIndex(c => c.id === fullscreen.id);
            if (e.key === "ArrowRight") {
                const next = concepts[(currentIndex + 1) % concepts.length];
                setFullscreen(next);
            } else if (e.key === "ArrowLeft") {
                const prev = concepts[(currentIndex - 1 + concepts.length) % concepts.length];
                setFullscreen(prev);
            } else if (e.key === "Escape") {
                setFullscreen(null);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [fullscreen]);

    const handleDownload = (e, imgPath, fileName) => {
        e.stopPropagation();
        const link = document.createElement("a");
        link.href = imgPath;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div style={{
            minHeight: "100vh",
            background: "#0A0A0A",
            padding: "40px 24px",
            fontFamily: "'Segoe UI', -apple-system, sans-serif"
        }}>
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                }
                .concept-card:hover img {
                    transform: scale(1.05);
                }
            `}</style>

            <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
                <div style={{ marginBottom: "60px", textAlign: "center" }}>
                    <p style={{ fontSize: "11px", fontWeight: 600, color: "#3B82F6", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "12px" }}>Logo Redesign Proposal</p>
                    <h1 style={{ fontSize: "42px", fontWeight: 800, color: "#FFFFFF", letterSpacing: "-1.5px", margin: 0 }}>PayCore — Konseptler</h1>
                    <p style={{ fontSize: "16px", color: "#64748B", marginTop: "16px", lineHeight: 1.6 }}>Ödeme yöntemi markası için {concepts.length} farklı görsel çalışma</p>
                </div>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                    gap: "24px"
                }}>
                    {concepts.map((c, index) => (
                        <div
                            key={c.id}
                            className="concept-card"
                            onClick={() => setFullscreen(c)}
                            style={{
                                background: c.bg,
                                borderRadius: "24px",
                                height: "240px",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                                position: "relative",
                                overflow: "hidden",
                                border: "1px solid rgba(255,255,255,0.05)",
                                boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
                            }}
                        >
                            {/* Concept Number Badge */}
                            <div style={{
                                position: "absolute", top: "20px", left: "20px",
                                fontSize: "12px", fontWeight: 800,
                                zIndex: 10,
                                color: c.bg === "#FFFFFF" || c.bg === "#F8FAFC" || c.bg === "#F1F5F9" ? "#3B82F6" : "#FFFFFF",
                                background: c.bg === "#FFFFFF" || c.bg === "#F8FAFC" || c.bg === "#F1F5F9" ? "rgba(59, 130, 246, 0.1)" : "rgba(255,255,255,0.15)",
                                padding: "6px 12px",
                                borderRadius: "10px",
                                backdropFilter: "blur(5px)",
                                fontFamily: "'Courier New', monospace"
                            }}>
                                {String(index + 1).padStart(2, "0")}
                            </div>

                            <img
                                src={c.image}
                                alt={c.name}
                                style={{
                                    width: "80%",
                                    height: "80%",
                                    objectFit: "contain",
                                    transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
                                }}
                            />
                        </div>
                    ))}
                </div>

                <p style={{
                    textAlign: "center", marginTop: "60px",
                    fontSize: "14px", color: "#475569", fontWeight: 500
                }}>
                    Detaylı incelemek ve indirmek için görsellere tıklayın
                </p>
            </div>

            {/* Fullscreen Modal */}
            {fullscreen && (
                <div
                    onClick={() => setFullscreen(null)}
                    style={{
                        position: "fixed",
                        top: 0, left: 0, right: 0, bottom: 0,
                        background: "rgba(0,0,0,0.98)",
                        zIndex: 1000,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "40px",
                        cursor: "zoom-out",
                        backdropFilter: "blur(15px)"
                    }}
                >
                    {/* Header Info */}
                    <div style={{
                        position: "absolute",
                        top: "30px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: "rgba(255,255,255,0.08)",
                        backdropFilter: "blur(20px)",
                        padding: "14px 28px",
                        borderRadius: "100px",
                        border: "1px solid rgba(255,255,255,0.1)",
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                        color: "#FFFFFF",
                        fontSize: "15px",
                        fontWeight: 600,
                        zIndex: 1001,
                        animation: "fadeIn 0.4s ease-out"
                    }}>
                        <span style={{ color: "#3B82F6" }}>#{String(concepts.findIndex(c => c.id === fullscreen.id) + 1).padStart(2, "0")}</span>
                        <div style={{ width: "1px", height: "16px", background: "rgba(255,255,255,0.2)" }} />
                        <span>{fullscreen.name.split(" — ")[1] || fullscreen.name}</span>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            const currentIndex = concepts.findIndex(c => c.id === fullscreen.id);
                            const prev = concepts[(currentIndex - 1 + concepts.length) % concepts.length];
                            setFullscreen(prev);
                        }}
                        style={{
                            position: "absolute",
                            left: "30px",
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            color: "#FFFFFF",
                            width: "60px", height: "60px",
                            borderRadius: "50%",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "all 0.2s"
                        }}
                    >
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                    </button>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            const currentIndex = concepts.findIndex(c => c.id === fullscreen.id);
                            const next = concepts[(currentIndex + 1) % concepts.length];
                            setFullscreen(next);
                        }}
                        style={{
                            position: "absolute",
                            right: "30px",
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            color: "#FFFFFF",
                            width: "60px", height: "60px",
                            borderRadius: "50%",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "all 0.2s"
                        }}
                    >
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </button>

                    <img
                        key={fullscreen.id}
                        src={fullscreen.image}
                        alt={fullscreen.name}
                        style={{
                            maxWidth: "85%",
                            maxHeight: "80%",
                            objectFit: "contain",
                            borderRadius: "16px",
                            boxShadow: "0 30px 70px rgba(0,0,0,0.8)",
                            animation: "fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
                        }}
                    />

                    {/* Download Button */}
                    <button
                        onClick={(e) => handleDownload(e, fullscreen.image, `PayCore_Konsept_${fullscreen.id}.png`)}
                        style={{
                            position: "absolute",
                            bottom: "40px",
                            background: "#3B82F6",
                            color: "#FFFFFF",
                            border: "none",
                            padding: "16px 32px",
                            borderRadius: "14px",
                            fontSize: "16px",
                            fontWeight: 700,
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            boxShadow: "0 15px 30px rgba(59, 130, 246, 0.4)",
                            transition: "all 0.3s ease",
                            animation: "fadeIn 0.5s ease-out"
                        }}
                    >
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                        İndir (PNG)
                    </button>
                </div>
            )}
        </div>
    );
}