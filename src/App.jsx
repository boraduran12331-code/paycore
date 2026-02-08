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
    { id: "c20", name: "Konsept 15 — Chip App Icon", image: "/gorseller/20_chip_app_icon.png", bg: "#FFFFFF" },
    { id: "c21", name: "Konsept 16 — Chip Circuit Board", image: "/gorseller/21_chip_circuit_board.png", bg: "#0F172A" },
    { id: "c22", name: "Konsept 17 — Chip Double Ring", image: "/gorseller/22_chip_double_ring.png", bg: "#FFFFFF" },
    { id: "c23", name: "Konsept 18 — Chip Rounded Badge", image: "/gorseller/23_chip_rounded_badge.png", bg: "#F1F5F9" },
    { id: "c24", name: "Konsept 19 — Chip Diamond", image: "/gorseller/24_chip_diamond.png", bg: "#0A0A0A" },
    { id: "c25", name: "Konsept 20 — Chip Split Color", image: "/gorseller/25_chip_split_color.png", bg: "#FFFFFF" },
    { id: "c26", name: "Konsept 21 — Chip Minimal Line", image: "/gorseller/26_chip_minimal_line.png", bg: "#F8FAFC" },
    { id: "c27", name: "Konsept 22 — Chip Glow Center", image: "/gorseller/27_chip_glow_center.png", bg: "#0A1628" },
    { id: "c31", name: "Konsept 23 — Chip Bracket Hybrid", image: "/gorseller/28_chip_bracket_hybrid.png", bg: "#FFFFFF" },
    { id: "c29", name: "Konsept 24 — Chip Wide Horizontal", image: "/gorseller/29_chip_wide_horizontal.png", bg: "#F1F5F9" },
    { id: "c30", name: "Konsept 25 — Chip Stacked Centered", image: "/gorseller/30_chip_stacked_centered.png", bg: "#0F172A" }
];

const tutorialSteps = [
    { title: "Hoş Geldiniz", text: "PayCore logo sunum paneline hoş geldiniz. Tasarımları incelemek için birkaç hızlı ipucu.", icon: "👋" },
    { title: "Kullanım Önerisi", text: "Tüm detayları ve doğru renkleri görebilmek için bilgisayar üzerinden görüntülenmesi önerilir.", icon: "💻" },
    { title: "Taslak Çalışmalar", text: "Çalışmalar şu an taslak (draft) aşamasındadır. Beğenilen tasarım üzerinden detaylı revizeler yapılacaktır.", icon: "📝" },
    { title: "İnceleme ve İndirme", text: "Görsellere tıklayarak tam ekran açabilir, klavye okları ile gezebilir ve beğendiğiniz tasarımı indirebilirsiniz.", icon: "🎯" }
];

export default function PayCoreLogoShowcase() {
    const [fullscreen, setFullscreen] = useState(null);
    const [showTutorial, setShowTutorial] = useState(false);
    const [tutorialIndex, setTutorialIndex] = useState(0);

    useEffect(() => {
        const hasSeenTutorial = localStorage.getItem("hasSeenTutorial");
        if (!hasSeenTutorial) {
            setShowTutorial(true);
        }
    }, []);

    const closeTutorial = () => {
        localStorage.setItem("hasSeenTutorial", "true");
        setShowTutorial(false);
    };

    const nextStep = () => {
        if (tutorialIndex < tutorialSteps.length - 1) {
            setTutorialIndex(prev => prev + 1);
        } else {
            closeTutorial();
        }
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (showTutorial) return;
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
    }, [fullscreen, showTutorial]);

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
            padding: "20px 16px",
            fontFamily: "'Segoe UI', -apple-system, sans-serif",
            boxSizing: "border-box"
        }}>
            <style>{`
                * { box-sizing: border-box; }
                @keyframes fadeIn {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                }
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .concept-grid {
                    display: grid;
                    grid-template-columns: repeat(1, 1fr);
                    gap: 16px;
                }
                @media (min-width: 640px) {
                    .concept-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
                }
                @media (min-width: 1024px) {
                    .concept-grid { grid-template-columns: repeat(3, 1fr); gap: 24px; }
                }
                .concept-card:hover img {
                    transform: scale(1.03);
                }
                .nav-btn {
                    width: 44px; height: 44px;
                }
                @media (min-width: 768px) {
                    .nav-btn { width: 60px; height: 60px; }
                }
            `}</style>

            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                <div style={{ marginBottom: "40px", textAlign: "center", padding: "0 10px" }}>
                    <p style={{ fontSize: "10px", fontWeight: 600, color: "#3B82F6", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "8px" }}>Logo Redesign Proposal</p>
                    <h1 style={{ fontSize: "clamp(24px, 5vw, 42px)", fontWeight: 800, color: "#FFFFFF", letterSpacing: "-1px", margin: 0 }}>PayCore — Konseptler</h1>
                    <p style={{ fontSize: "14px", color: "#64748B", marginTop: "12px", lineHeight: 1.5 }}>{concepts.length} farklı tasarım yönü</p>
                </div>

                <div className="concept-grid">
                    {concepts.map((c, index) => (
                        <div
                            key={c.id}
                            className="concept-card"
                            onClick={() => setFullscreen(c)}
                            style={{
                                background: c.bg,
                                borderRadius: "20px",
                                // Mobilde dikey alanı artırmak için height clamp kullandık
                                height: "clamp(220px, 35vh, 260px)",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                                position: "relative",
                                overflow: "hidden",
                                border: "1px solid rgba(255,255,255,0.05)",
                                boxShadow: "0 8px 24px rgba(0,0,0,0.15)"
                            }}
                        >
                            <div style={{
                                position: "absolute", top: "16px", left: "16px",
                                fontSize: "11px", fontWeight: 800,
                                zIndex: 10,
                                color: c.bg === "#FFFFFF" || c.bg === "#F8FAFC" || c.bg === "#F1F5F9" ? "#3B82F6" : "#FFFFFF",
                                background: c.bg === "#FFFFFF" || c.bg === "#F8FAFC" || c.bg === "#F1F5F9" ? "rgba(59, 130, 246, 0.1)" : "rgba(255,255,255,0.15)",
                                padding: "4px 10px",
                                borderRadius: "8px",
                                backdropFilter: "blur(5px)",
                                fontFamily: "'Courier New', monospace"
                            }}>
                                {String(index + 1).padStart(2, "0")}
                            </div>

                            <img
                                src={c.image}
                                alt={c.name}
                                style={{
                                    // Mobilde daha büyük gözükmesi için alanı genişletiyoruz
                                    width: "88%",
                                    height: "88%",
                                    objectFit: "contain",
                                    transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Tutorial Modal */}
            {showTutorial && (
                <div style={{
                    position: "fixed",
                    top: 0, left: 0, right: 0, bottom: 0,
                    background: "rgba(0,0,0,0.92)",
                    backdropFilter: "blur(12px)",
                    zIndex: 2000,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "20px"
                }}>
                    <div style={{
                        maxWidth: "400px",
                        width: "100%",
                        background: "#121212",
                        borderRadius: "24px",
                        border: "1px solid rgba(255,255,255,0.1)",
                        padding: "32px 24px",
                        textAlign: "center",
                        boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
                        animation: "fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1)"
                    }}>
                        <div style={{ fontSize: "48px", marginBottom: "20px" }}>
                            {tutorialSteps[tutorialIndex].icon}
                        </div>
                        <h2 style={{ color: "#FFF", fontSize: "20px", fontWeight: 800, marginBottom: "12px" }}>
                            {tutorialSteps[tutorialIndex].title}
                        </h2>
                        <p style={{ color: "#AAA", fontSize: "15px", lineHeight: 1.6, marginBottom: "28px" }}>
                            {tutorialSteps[tutorialIndex].text}
                        </p>

                        <div style={{ display: "flex", justifyContent: "center", gap: "6px", marginBottom: "28px" }}>
                            {tutorialSteps.map((_, idx) => (
                                <div key={idx} style={{
                                    width: idx === tutorialIndex ? "20px" : "6px",
                                    height: "6px",
                                    borderRadius: "3px",
                                    background: idx === tutorialIndex ? "#3B82F6" : "rgba(255,255,255,0.1)",
                                    transition: "all 0.3s ease"
                                }} />
                            ))}
                        </div>

                        <button
                            onClick={nextStep}
                            style={{
                                width: "100%",
                                padding: "14px",
                                borderRadius: "12px",
                                background: "#3B82F6",
                                color: "#FFF",
                                border: "none",
                                fontSize: "15px",
                                fontWeight: 700,
                                cursor: "pointer",
                                boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)"
                            }}
                        >
                            {tutorialIndex === tutorialSteps.length - 1 ? "Sistemi Aç" : "Sıradaki"}
                        </button>
                    </div>
                </div>
            )}

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
                        padding: "20px",
                        cursor: "zoom-out",
                        backdropFilter: "blur(15px)"
                    }}
                >
                    <div style={{
                        position: "absolute",
                        top: "20px",
                        display: "flex",
                        background: "rgba(255,255,255,0.08)",
                        backdropFilter: "blur(20px)",
                        padding: "10px 20px",
                        borderRadius: "100px",
                        border: "1px solid rgba(255,255,255,0.1)",
                        alignItems: "center",
                        gap: "12px",
                        color: "#FFFFFF",
                        fontSize: "13px",
                        fontWeight: 600,
                        zIndex: 1001,
                        animation: "slideUp 0.4s ease-out"
                    }}>
                        <span style={{ color: "#3B82F6" }}>#{String(concepts.findIndex(c => c.id === fullscreen.id) + 1).padStart(2, "0")}</span>
                        <div style={{ width: "1px", height: "14px", background: "rgba(255,255,255,0.2)" }} />
                        <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "150px" }}>
                            {fullscreen.name.split(" — ")[1] || fullscreen.name}
                        </span>
                    </div>

                    <button
                        className="nav-btn"
                        onClick={(e) => {
                            e.stopPropagation();
                            const currentIndex = concepts.findIndex(c => c.id === fullscreen.id);
                            const prev = concepts[(currentIndex - 1 + concepts.length) % concepts.length];
                            setFullscreen(prev);
                        }}
                        style={{
                            position: "absolute",
                            left: "10px",
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            color: "#FFFFFF",
                            borderRadius: "50%",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: 1002
                        }}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                    </button>

                    <button
                        className="nav-btn"
                        onClick={(e) => {
                            e.stopPropagation();
                            const currentIndex = concepts.findIndex(c => c.id === fullscreen.id);
                            const next = concepts[(currentIndex + 1) % concepts.length];
                            setFullscreen(next);
                        }}
                        style={{
                            position: "absolute",
                            right: "10px",
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            color: "#FFFFFF",
                            borderRadius: "50%",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: 1002
                        }}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </button>

                    <img
                        key={fullscreen.id}
                        src={fullscreen.image}
                        alt={fullscreen.name}
                        style={{
                            maxWidth: "95%",
                            maxHeight: "75%",
                            objectFit: "contain",
                            borderRadius: "12px",
                            boxShadow: "0 20px 60px rgba(0,0,0,0.8)",
                            animation: "fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
                        }}
                    />

                    <button
                        onClick={(e) => handleDownload(e, fullscreen.image, `PayCore_Konsept_${fullscreen.id}.png`)}
                        style={{
                            position: "absolute",
                            bottom: "30px",
                            background: "#3B82F6",
                            color: "#FFFFFF",
                            border: "none",
                            padding: "14px 28px",
                            borderRadius: "12px",
                            fontSize: "14px",
                            fontWeight: 700,
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            boxShadow: "0 12px 24px rgba(59, 130, 246, 0.4)",
                            animation: "slideUp 0.5s ease-out",
                            zIndex: 1002
                        }}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                        İndir
                    </button>
                </div>
            )}
        </div>
    );
}