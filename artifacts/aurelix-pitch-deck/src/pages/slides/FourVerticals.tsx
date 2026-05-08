export default function FourVerticals() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg">
      {/* Subtle background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(201,146,26,0.05) 0%, transparent 60%)",
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
      <div className="absolute" style={{ top: "11vh", left: "5vw" }}>
        <p
          className="font-body font-medium text-primary uppercase tracking-[0.3em]"
          style={{ fontSize: "1.6vw", marginBottom: "1.2vh" }}
        >
          OUR PRODUCTS
        </p>
        <h2
          className="font-display font-black text-text tracking-[0.05em]"
          style={{ fontSize: "3.8vw" }}
        >
          Four Verticals
        </h2>
      </div>

      {/* Subtitle right */}
      <div className="absolute" style={{ top: "13vh", right: "5vw" }}>
        <p
          className="font-body text-muted text-right"
          style={{ fontSize: "1.8vw", maxWidth: "28vw", lineHeight: 1.5 }}
        >
          One AI infrastructure company across four industries
        </p>
      </div>

      {/* 2x2 Grid */}
      <div
        className="absolute"
        style={{
          top: "26vh",
          left: "5vw",
          right: "5vw",
          bottom: "10vh",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gap: "2vh 2vw",
        }}
      >
        {/* AfroMuse AI */}
        <div
          style={{
            background: "rgba(20,14,8,0.8)",
            border: "1px solid rgba(217,119,6,0.3)",
            padding: "3vh 2.5vw",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            className="absolute top-0 left-0 right-0"
            style={{ height: "3px", background: "linear-gradient(90deg, #D97706, rgba(217,119,6,0.3))" }}
          />
          <p
            className="font-body font-bold uppercase tracking-[0.2em]"
            style={{ fontSize: "1.5vw", color: "#D97706", marginBottom: "1.2vh" }}
          >
            Creative Intelligence
          </p>
          <h3
            className="font-display font-bold text-text tracking-[0.04em]"
            style={{ fontSize: "2.4vw", marginBottom: "1.5vh" }}
          >
            AfroMuse AI
          </h3>
          <p className="font-body text-muted" style={{ fontSize: "1.8vw", lineHeight: 1.5 }}>
            AI-powered music and creative workflow platform for artists, producers, and creators
          </p>
        </div>

        {/* GTPro */}
        <div
          style={{
            background: "rgba(8,20,14,0.8)",
            border: "1px solid rgba(5,150,105,0.3)",
            padding: "3vh 2.5vw",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            className="absolute top-0 left-0 right-0"
            style={{ height: "3px", background: "linear-gradient(90deg, #059669, rgba(5,150,105,0.3))" }}
          />
          <p
            className="font-body font-bold uppercase tracking-[0.2em]"
            style={{ fontSize: "1.5vw", color: "#059669", marginBottom: "1.2vh" }}
          >
            Trade Intelligence
          </p>
          <h3
            className="font-display font-bold text-text tracking-[0.04em]"
            style={{ fontSize: "2.4vw", marginBottom: "1.5vh" }}
          >
            GTPro
          </h3>
          <p className="font-body text-muted" style={{ fontSize: "1.8vw", lineHeight: 1.5 }}>
            Advanced AI trading intelligence with autonomous execution and real-time market analysis
          </p>
        </div>

        {/* StageOne */}
        <div
          style={{
            background: "rgba(8,12,22,0.8)",
            border: "1px solid rgba(37,99,235,0.3)",
            padding: "3vh 2.5vw",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            className="absolute top-0 left-0 right-0"
            style={{ height: "3px", background: "linear-gradient(90deg, #2563EB, rgba(37,99,235,0.3))" }}
          />
          <p
            className="font-body font-bold uppercase tracking-[0.2em]"
            style={{ fontSize: "1.5vw", color: "#2563EB", marginBottom: "1.2vh" }}
          >
            Business Intelligence
          </p>
          <h3
            className="font-display font-bold text-text tracking-[0.04em]"
            style={{ fontSize: "2.4vw", marginBottom: "1.5vh" }}
          >
            StageOne
          </h3>
          <p className="font-body text-muted" style={{ fontSize: "1.8vw", lineHeight: 1.5 }}>
            AI-powered business acceleration for startups and enterprises scaling intelligently
          </p>
        </div>

        {/* AURELIX Cyber */}
        <div
          style={{
            background: "rgba(12,10,22,0.8)",
            border: "1px solid rgba(79,70,229,0.3)",
            padding: "3vh 2.5vw",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            className="absolute top-0 left-0 right-0"
            style={{ height: "3px", background: "linear-gradient(90deg, #4F46E5, rgba(79,70,229,0.3))" }}
          />
          <p
            className="font-body font-bold uppercase tracking-[0.2em]"
            style={{ fontSize: "1.5vw", color: "#4F46E5", marginBottom: "1.2vh" }}
          >
            Security Intelligence
          </p>
          <h3
            className="font-display font-bold text-text tracking-[0.04em]"
            style={{ fontSize: "2.4vw", marginBottom: "1.5vh" }}
          >
            AURELIX Cyber
          </h3>
          <p className="font-body text-muted" style={{ fontSize: "1.8vw", lineHeight: 1.5 }}>
            Next-generation cybersecurity with autonomous threat monitoring and AI-powered defense
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
        03
      </div>
    </div>
  );
}
