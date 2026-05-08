export default function StageOne() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg">
      {/* Background with blue tint */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 110%, rgba(37,99,235,0.07) 0%, transparent 55%)",
        }}
      />

      {/* Top wordmark */}
      <div className="absolute font-display text-[1.5vw] tracking-[0.4em] text-muted uppercase" style={{ top: "4vh", left: "5vw" }}>
        AURELIX SYSTEMS
      </div>

      {/* Top hairline */}
      <div
        className="absolute left-[5vw] right-[5vw] h-px"
        style={{ top: "8.5vh", background: "rgba(201,146,26,0.25)" }}
      />

      {/* Header */}
      <div className="absolute" style={{ top: "11.5vh", left: "5vw", right: "5vw" }}>
        <p
          className="font-body font-bold uppercase tracking-[0.3em]"
          style={{ fontSize: "1.6vw", color: "#2563EB", marginBottom: "1.2vh" }}
        >
          Vertical 03
        </p>
        <div style={{ display: "flex", alignItems: "flex-end", gap: "2vw", marginBottom: "1.5vh" }}>
          <h2
            className="font-display font-black text-text tracking-[0.05em]"
            style={{ fontSize: "4.2vw" }}
          >
            StageOne
          </h2>
          <p
            className="font-body font-bold text-muted"
            style={{ fontSize: "2vw", marginBottom: "0.8vh" }}
          >
            Business Infrastructure Intelligence
          </p>
        </div>
        {/* Blue rule */}
        <div style={{ width: "100%", height: "1px", background: "rgba(37,99,235,0.3)", marginBottom: "1.5vh" }} />

        {/* Description */}
        <p className="font-body text-muted" style={{ fontSize: "1.9vw", lineHeight: 1.6, maxWidth: "65vw" }}>
          An AI-powered business acceleration platform helping startups and enterprises scale intelligently with growth strategy, website generation, and automation architecture.
        </p>
      </div>

      {/* Three columns */}
      <div
        className="absolute"
        style={{
          top: "45vh",
          left: "5vw",
          right: "5vw",
          bottom: "10vh",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "2.5vw",
        }}
      >
        {/* Column 1 */}
        <div
          style={{
            borderTop: "3px solid #2563EB",
            paddingTop: "2.5vh",
          }}
        >
          <div
            style={{
              width: "3.5vw",
              height: "3.5vw",
              border: "1px solid rgba(37,99,235,0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "2vh",
            }}
          >
            <p className="font-display font-black" style={{ fontSize: "1.8vw", color: "#2563EB" }}>01</p>
          </div>
          <h3
            className="font-display font-bold text-text"
            style={{ fontSize: "2.2vw", marginBottom: "1.5vh", lineHeight: 1.3 }}
          >
            AI Growth Intelligence
          </h3>
          <p className="font-body text-muted" style={{ fontSize: "1.8vw", lineHeight: 1.6 }}>
            Strategy systems and growth roadmaps powered by AI analysis
          </p>
        </div>

        {/* Column 2 */}
        <div
          style={{
            borderTop: "3px solid rgba(37,99,235,0.6)",
            paddingTop: "2.5vh",
          }}
        >
          <div
            style={{
              width: "3.5vw",
              height: "3.5vw",
              border: "1px solid rgba(37,99,235,0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "2vh",
            }}
          >
            <p className="font-display font-black" style={{ fontSize: "1.8vw", color: "#2563EB" }}>02</p>
          </div>
          <h3
            className="font-display font-bold text-text"
            style={{ fontSize: "2.2vw", marginBottom: "1.5vh", lineHeight: 1.3 }}
          >
            Website Generation
          </h3>
          <p className="font-body text-muted" style={{ fontSize: "1.8vw", lineHeight: 1.6 }}>
            Automated site creation and digital presence deployment at scale
          </p>
        </div>

        {/* Column 3 */}
        <div
          style={{
            borderTop: "3px solid rgba(37,99,235,0.35)",
            paddingTop: "2.5vh",
          }}
        >
          <div
            style={{
              width: "3.5vw",
              height: "3.5vw",
              border: "1px solid rgba(37,99,235,0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "2vh",
            }}
          >
            <p className="font-display font-black" style={{ fontSize: "1.8vw", color: "#2563EB" }}>03</p>
          </div>
          <h3
            className="font-display font-bold text-text"
            style={{ fontSize: "2.2vw", marginBottom: "1.5vh", lineHeight: 1.3 }}
          >
            Business Automation
          </h3>
          <p className="font-body text-muted" style={{ fontSize: "1.8vw", lineHeight: 1.6 }}>
            Intelligent workflows, chatbot infrastructure, and process automation
          </p>
        </div>
      </div>

      {/* Bottom hairline */}
      <div
        className="absolute left-[5vw] right-[5vw] h-px"
        style={{ bottom: "8vh", background: "rgba(201,146,26,0.2)" }}
      />

      {/* Slide number */}
      <div className="absolute font-body text-muted" style={{ fontSize: "1.5vw", bottom: "3vh", right: "5vw" }}>
        06
      </div>
    </div>
  );
}
