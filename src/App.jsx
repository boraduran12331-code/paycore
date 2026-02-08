import { useState, useEffect } from "react";

const concepts = [
    {
        id: 1,
        name: "Konsept 1 — Clean Fintech",
        desc: "Minimal, güvenilir, kurumsal. Stripe/Wise tarzı modern ödeme markası.",
        bg: "#FFFFFF",
        image: "/gorseller/01_clean_fintech.png",
        render: () => (
            <div style={{ display: "flex", alignItems: "center", gap: "0px", fontFamily: "'Segoe UI', sans-serif" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <span style={{ fontSize: "42px", fontWeight: 700, color: "#0A1628", letterSpacing: "-1.5px" }}>pay</span>
                    <span style={{ fontSize: "42px", fontWeight: 300, color: "#0A1628", letterSpacing: "-1.5px" }}>core</span>
                </div>
                <div style={{
                    width: "6px", height: "6px", borderRadius: "50%",
                    background: "#3B82F6", marginLeft: "2px", marginTop: "16px"
                }} />
            </div>
        ),
        tagline: () => (
            <span style={{ fontFamily: "'Segoe UI', sans-serif", fontSize: "13px", fontWeight: 500, color: "#94A3B8", letterSpacing: "4px", textTransform: "uppercase", marginTop: "4px" }}>fast havale</span>
        )
    },
    {
        id: 2,
        name: "Konsept 2 — Bold Geometric",
        desc: "Cesur, güçlü tipografi. Dikkat çekici marka varlığı.",
        bg: "#0A1628",
        image: "/gorseller/02_bold_dark.png",
        render: () => (
            <div style={{ display: "flex", alignItems: "center", gap: "0px", fontFamily: "'Segoe UI', sans-serif" }}>
                <span style={{ fontSize: "48px", fontWeight: 900, color: "#FFFFFF", letterSpacing: "-2px", textTransform: "uppercase" }}>PAY</span>
                <span style={{ fontSize: "48px", fontWeight: 900, color: "#3B82F6", letterSpacing: "-2px", textTransform: "uppercase" }}>CORE</span>
            </div>
        ),
        tagline: () => (
            <span style={{ fontFamily: "'Segoe UI', sans-serif", fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.35)", letterSpacing: "6px", textTransform: "uppercase", marginTop: "2px" }}>fast havale</span>
        )
    },
    {
        id: 3,
        name: "Konsept 3 — Dot Separator",
        desc: "Nokta ayracı ile modern SaaS/fintech hissi. Temiz ve akılda kalıcı.",
        bg: "#F8FAFC",
        image: "/gorseller/03_dot_separator.png",
        render: () => (
            <div style={{ display: "flex", alignItems: "center", gap: "10px", fontFamily: "'Segoe UI', sans-serif" }}>
                <span style={{ fontSize: "44px", fontWeight: 700, color: "#1E293B", letterSpacing: "-1px" }}>Pay</span>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#F59E0B", marginTop: "4px" }} />
                <span style={{ fontSize: "44px", fontWeight: 700, color: "#1E293B", letterSpacing: "-1px" }}>Core</span>
            </div>
        ),
        tagline: () => (
            <span style={{ fontFamily: "'Segoe UI', sans-serif", fontSize: "13px", fontWeight: 500, color: "#94A3B8", letterSpacing: "3px", textTransform: "uppercase", marginTop: "6px" }}>fast havale</span>
        )
    },
    {
        id: 4,
        name: "Konsept 4 — Gradient Modern",
        desc: "Gradient vurgu ile dinamik ve genç marka kimliği.",
        bg: "#FFFFFF",
        image: "/gorseller/04_gradient_modern.png",
        render: () => (
            <div style={{ display: "flex", alignItems: "baseline", gap: "0px", fontFamily: "'Segoe UI', sans-serif" }}>
                <span style={{ fontSize: "44px", fontWeight: 300, color: "#334155", letterSpacing: "-1px" }}>pay</span>
                <span style={{
                    fontSize: "44px", fontWeight: 800, letterSpacing: "-1px",
                    background: "linear-gradient(135deg, #3B82F6, #06B6D4)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
                }}>core</span>
            </div>
        ),
        tagline: () => (
            <span style={{ fontFamily: "'Segoe UI', sans-serif", fontSize: "12px", fontWeight: 600, color: "#CBD5E1", letterSpacing: "5px", textTransform: "uppercase", marginTop: "4px" }}>fast havale</span>
        )
    },
    {
        id: 5,
        name: "Konsept 5 — Stacked",
        desc: "Dikey yerleşimli, kompakt ve ikon-friendly yapı.",
        bg: "#0F172A",
        image: "/gorseller/05_stacked.png",
        render: () => (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", fontFamily: "'Segoe UI', sans-serif", lineHeight: 1 }}>
                <span style={{ fontSize: "52px", fontWeight: 800, color: "#FFFFFF", letterSpacing: "-2px", textTransform: "uppercase" }}>PAY</span>
                <span style={{ fontSize: "52px", fontWeight: 800, color: "#3B82F6", letterSpacing: "-2px", textTransform: "uppercase", marginTop: "-10px" }}>CORE</span>
            </div>
        ),
        tagline: () => (
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "8px" }}>
                <div style={{ height: "1px", width: "24px", background: "rgba(255,255,255,0.3)" }} />
                <span style={{ fontFamily: "'Segoe UI', sans-serif", fontSize: "11px", fontWeight: 500, color: "rgba(255,255,255,0.4)", letterSpacing: "5px", textTransform: "uppercase" }}>fast havale</span>
            </div>
        )
    },
    {
        id: 6,
        name: "Konsept 6 — Slash Divider",
        desc: "Eğik çizgi ayracı ile enerjik ve hızlı his veren tasarım.",
        bg: "#FFFFFF",
        image: "/gorseller/06_slash_divider.png",
        render: () => (
            <div style={{ display: "flex", alignItems: "center", gap: "0px", fontFamily: "'Segoe UI', sans-serif" }}>
                <span style={{ fontSize: "44px", fontWeight: 700, color: "#1E293B", letterSpacing: "-1px" }}>Pay</span>
                <span style={{ fontSize: "48px", fontWeight: 200, color: "#3B82F6", margin: "0 2px" }}>/</span>
                <span style={{ fontSize: "44px", fontWeight: 700, color: "#1E293B", letterSpacing: "-1px" }}>Core</span>
            </div>
        ),
        tagline: () => (
            <span style={{ fontFamily: "'Segoe UI', sans-serif", fontSize: "13px", fontWeight: 500, color: "#94A3B8", letterSpacing: "3px", textTransform: "uppercase", marginTop: "6px" }}>fast havale</span>
        )
    },
    {
        id: 7,
        name: "Konsept 7 — Bracket Frame",
        desc: "Köşeli parantezler ile 'core' vurgusu. Teknoloji + güvenlik hissi.",
        bg: "#F1F5F9",
        image: "/gorseller/07_bracket_tech.png",
        render: () => (
            <div style={{ display: "flex", alignItems: "center", gap: "0px", fontFamily: "'Courier New', monospace" }}>
                <span style={{ fontSize: "40px", fontWeight: 700, color: "#1E293B", letterSpacing: "-1px" }}>pay</span>
                <span style={{ fontSize: "40px", fontWeight: 300, color: "#3B82F6" }}>[</span>
                <span style={{ fontSize: "40px", fontWeight: 700, color: "#3B82F6", letterSpacing: "-1px" }}>core</span>
                <span style={{ fontSize: "40px", fontWeight: 300, color: "#3B82F6" }}>]</span>
            </div>
        ),
        tagline: () => (
            <span style={{ fontFamily: "'Segoe UI', sans-serif", fontSize: "12px", fontWeight: 600, color: "#94A3B8", letterSpacing: "4px", textTransform: "uppercase", marginTop: "6px" }}>fast havale</span>
        )
    },
    {
        id: 8,
        name: "Konsept 8 — Underline Accent",
        desc: "Alt çizgi vurgusu ile sade ama güçlü marka ifadesi.",
        bg: "#FFFFFF",
        image: "/gorseller/08_underline_accent.png",
        render: () => (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", fontFamily: "'Segoe UI', sans-serif" }}>
                <span style={{ fontSize: "44px", fontWeight: 700, color: "#0F172A", letterSpacing: "-1.5px" }}>PayCore</span>
                <div style={{ height: "3px", width: "60px", background: "linear-gradient(90deg, #3B82F6, #06B6D4)", borderRadius: "2px", marginTop: "2px" }} />
            </div>
        ),
        tagline: () => (
            <span style={{ fontFamily: "'Segoe UI', sans-serif", fontSize: "13px", fontWeight: 500, color: "#94A3B8", letterSpacing: "3px", textTransform: "uppercase", marginTop: "10px" }}>fast havale</span>
        )
    },
    {
        id: 9,
        name: "Konsept 9 — Monospace Tech",
        desc: "Developer/API odaklı marka hissi. Teknik güvenilirlik.",
        bg: "#0F172A",
        image: "/gorseller/09_terminal.png",
        render: () => (
            <div style={{ display: "flex", alignItems: "center", gap: "0px", fontFamily: "'Courier New', monospace" }}>
                <span style={{ fontSize: "14px", fontWeight: 400, color: "#64748B", marginRight: "6px" }}>$</span>
                <span style={{ fontSize: "40px", fontWeight: 700, color: "#E2E8F0", letterSpacing: "2px" }}>PAYCORE</span>
                <div style={{
                    width: "3px", height: "36px", background: "#3B82F6",
                    marginLeft: "4px", animation: "blink 1s infinite",
                }} />
            </div>
        ),
        tagline: () => (
            <span style={{ fontFamily: "'Courier New', monospace", fontSize: "12px", fontWeight: 400, color: "#475569", letterSpacing: "3px", marginTop: "6px" }}>// fast havale</span>
        )
    },
    {
        id: 10,
        name: "Konsept 10 — Circle Mark + Type",
        desc: "Harf ikonu + wordmark kombinasyonu. Uygulama ve web için ideal.",
        bg: "#FFFFFF",
        image: "/gorseller/10_icon_wordmark (1).png",
        render: () => (
            <div style={{ display: "flex", alignItems: "center", gap: "14px", fontFamily: "'Segoe UI', sans-serif" }}>
                <div style={{
                    width: "52px", height: "52px", borderRadius: "14px",
                    background: "linear-gradient(135deg, #1E40AF, #3B82F6)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#FFFFFF", fontSize: "24px", fontWeight: 800, letterSpacing: "-1px"
                }}>Pc</div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <span style={{ fontSize: "36px", fontWeight: 700, color: "#0F172A", letterSpacing: "-1.5px", lineHeight: 1 }}>PayCore</span>
                    <span style={{ fontSize: "11px", fontWeight: 600, color: "#94A3B8", letterSpacing: "4px", textTransform: "uppercase", marginTop: "2px" }}>fast havale</span>
                </div>
            </div>
        ),
        tagline: () => null
    }
];

export default function PayCoreLogoShowcase() {
    const [selected, setSelected] = useState(null);
    const [fullscreen, setFullscreen] = useState(null);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!fullscreen) return;
            if (e.key === "ArrowRight") {
                const next = concepts.find(c => c.id === (fullscreen.id === 10 ? 1 : fullscreen.id + 1));
                setFullscreen(next);
            } else if (e.key === "ArrowLeft") {
                const prev = concepts.find(c => c.id === (fullscreen.id === 1 ? 10 : fullscreen.id - 1));
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
                @keyframes blink {
                    0%, 50% { opacity: 1; }
                    51%, 100% { opacity: 0; }
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                }
            `}</style>

            <div style={{ maxWidth: "900px", margin: "0 auto" }}>
                <div style={{ marginBottom: "48px", textAlign: "center" }}>
                    <p style={{ fontSize: "11px", fontWeight: 600, color: "#3B82F6", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "12px" }}>Logo Redesign Proposal</p>
                    <h1 style={{ fontSize: "36px", fontWeight: 800, color: "#FFFFFF", letterSpacing: "-1.5px", margin: 0 }}>PayCore — Konseptler</h1>
                    <p style={{ fontSize: "15px", color: "#64748B", marginTop: "12px", lineHeight: 1.6 }}>Ödeme yöntemi markası için 10 farklı tipografik yön</p>
                </div>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "16px"
                }}>
                    {concepts.map((c) => (
                        <div
                            key={c.id}
                            onClick={() => setFullscreen(c)}
                            style={{
                                background: c.bg,
                                borderRadius: "16px",
                                padding: "40px 32px",
                                cursor: "pointer",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                minHeight: "200px",
                                border: selected === c.id ? "2px solid #3B82F6" : "2px solid transparent",
                                transition: "all 0.2s ease",
                                position: "relative",
                                overflow: "hidden"
                            }}
                        >
                            <div style={{
                                position: "absolute", top: "12px", left: "16px",
                                fontSize: "10px", fontWeight: 700, color: c.bg === "#FFFFFF" || c.bg === "#F8FAFC" || c.bg === "#F1F5F9" ? "#CBD5E1" : "rgba(255,255,255,0.2)",
                                letterSpacing: "1px"
                            }}>
                                {String(c.id).padStart(2, "0")}
                            </div>

                            {c.render()}
                            {c.tagline()}
                        </div>
                    ))}
                </div>

                <p style={{
                    textAlign: "center", marginTop: "40px",
                    fontSize: "12px", color: "#334155"
                }}>
                    Görseli tam ekran görmek ve indirmek için konsepte tıklayın
                </p>
            </div>

            {/* Fullscreen Modal */}
            {fullscreen && (
                <div
                    onClick={() => setFullscreen(null)}
                    style={{
                        position: "fixed",
                        top: 0, left: 0, right: 0, bottom: 0,
                        background: "rgba(0,0,0,0.95)",
                        zIndex: 1000,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "40px",
                        cursor: "zoom-out",
                        backdropFilter: "blur(10px)"
                    }}
                >
                    {/* Header Info */}
                    <div style={{
                        position: "absolute",
                        top: "20px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: "rgba(255,255,255,0.1)",
                        backdropFilter: "blur(15px)",
                        padding: "12px 24px",
                        borderRadius: "100px",
                        border: "1px solid rgba(255,255,255,0.1)",
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                        color: "#FFFFFF",
                        fontSize: "14px",
                        fontWeight: 500,
                        zIndex: 1001
                    }}>
                        <span style={{ color: "rgba(255,255,255,0.5)" }}>#{String(fullscreen.id).padStart(2, "0")}</span>
                        <div style={{ width: "1px", height: "14px", background: "rgba(255,255,255,0.2)" }} />
                        <span>{fullscreen.name.split(" — ")[1]}</span>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            const prev = concepts.find(c => c.id === (fullscreen.id === 1 ? concepts.length : fullscreen.id - 1));
                            setFullscreen(prev);
                        }}
                        style={{
                            position: "absolute",
                            left: "20px",
                            background: "rgba(255,255,255,0.1)",
                            border: "none",
                            color: "#FFFFFF",
                            width: "50px", height: "50px",
                            borderRadius: "50%",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "all 0.2s"
                        }}
                        onMouseEnter={(e) => e.target.style.background = "rgba(255,255,255,0.2)"}
                        onMouseLeave={(e) => e.target.style.background = "rgba(255,255,255,0.1)"}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                    </button>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            const next = concepts.find(c => c.id === (fullscreen.id === concepts.length ? 1 : fullscreen.id + 1));
                            setFullscreen(next);
                        }}
                        style={{
                            position: "absolute",
                            right: "20px",
                            background: "rgba(255,255,255,0.1)",
                            border: "none",
                            color: "#FFFFFF",
                            width: "50px", height: "50px",
                            borderRadius: "50%",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "all 0.2s"
                        }}
                        onMouseEnter={(e) => e.target.style.background = "rgba(255,255,255,0.2)"}
                        onMouseLeave={(e) => e.target.style.background = "rgba(255,255,255,0.1)"}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </button>

                    <img
                        key={fullscreen.id}
                        src={fullscreen.image}
                        alt={fullscreen.name}
                        style={{
                            maxWidth: "85%",
                            maxHeight: "75%",
                            objectFit: "contain",
                            borderRadius: "12px",
                            boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
                            animation: "fadeIn 0.3s ease-out"
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
                            padding: "14px 28px",
                            borderRadius: "12px",
                            fontSize: "15px",
                            fontWeight: 600,
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            boxShadow: "0 10px 20px rgba(59, 130, 246, 0.3)",
                            transition: "transform 0.2s ease"
                        }}
                        onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
                        onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                        İndir (PNG)
                    </button>
                </div>
            )}
        </div>
    );
}