export default function MarketOpportunity() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg">
      {/* Background — strong central gold glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,146,26,0.1) 0%, rgba(201,146,26,0.04) 35%, transparent 65%), linear-gradient(180deg, #0e0e0f 0%, #0f0e08 50%, #0e0e0f 100%)",
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,146,26,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,146,26,1) 1px, transparent 1px)",
          backgroundSize: "10vw 10vh",
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

      {/* Left column — main stat */}
      <div
        className="absolute"
        style={{
          top: "50%",
          left: "8vw",
          transform: "translateY(-55%)",
          width: "50vw",
        }}
      >
        <p
          className="font-body font-medium text-primary uppercase tracking-[0.3em]"
          style={{ fontSize: "1.6vw", marginBottom: "2vh" }}
        >
          Market Opportunity
        </p>

        {/* Big stat */}
        <p
          className="font-display font-black"
          style={{
            fontSize: "11vw",
            color: "#C9921A",
            lineHeight: 0.9,
            letterSpacing: "-0.02em",
            marginBottom: "2vh",
            filter: "drop-shadow(0 0 3vw rgba(201,146,26,0.3))",
          }}
        >
          $1.8T
        </p>

        {/* Stat label */}
        <p
          className="font-body text-text"
          style={{ fontSize: "2.2vw", marginBottom: "1vh", opacity: 0.85 }}
        >
          Projected Global AI Market by 2030
        </p>
        <p className="font-body text-muted" style={{ fontSize: "1.6vw" }}>
          Source: Goldman Sachs Global Investment Research
        </p>
      </div>

      {/* Right column — four sectors */}
      <div
        className="absolute"
        style={{
          top: "50%",
          right: "6vw",
          transform: "translateY(-50%)",
          width: "28vw",
          display: "flex",
          flexDirection: "column",
          gap: "2vh",
        }}
      >
        <p
          className="font-body font-bold uppercase tracking-[0.25em] text-muted"
          style={{ fontSize: "1.5vw", marginBottom: "1vh" }}
        >
          AURELIX Sectors
        </p>

        <div style={{ borderLeft: "3px solid #D97706", paddingLeft: "1.5vw" }}>
          <p className="font-body font-bold text-text" style={{ fontSize: "2vw" }}>Creative AI</p>
          <p className="font-body text-muted" style={{ fontSize: "1.7vw" }}>Music, content, production</p>
        </div>

        <div style={{ borderLeft: "3px solid #059669", paddingLeft: "1.5vw" }}>
          <p className="font-body font-bold text-text" style={{ fontSize: "2vw" }}>Financial AI</p>
          <p className="font-body text-muted" style={{ fontSize: "1.7vw" }}>Trading, markets, execution</p>
        </div>

        <div style={{ borderLeft: "3px solid #2563EB", paddingLeft: "1.5vw" }}>
          <p className="font-body font-bold text-text" style={{ fontSize: "2vw" }}>Business AI</p>
          <p className="font-body text-muted" style={{ fontSize: "1.7vw" }}>Growth, automation, infrastructure</p>
        </div>

        <div style={{ borderLeft: "3px solid #4F46E5", paddingLeft: "1.5vw" }}>
          <p className="font-body font-bold text-text" style={{ fontSize: "2vw" }}>Security AI</p>
          <p className="font-body text-muted" style={{ fontSize: "1.7vw" }}>Defense, detection, protection</p>
        </div>
      </div>

      {/* Bottom hairline */}
      <div
        className="absolute left-[5vw] right-[5vw] h-px"
        style={{ bottom: "8vh", background: "rgba(201,146,26,0.2)" }}
      />

      {/* Slide number */}
      <div className="absolute font-body text-muted" style={{ fontSize: "1.5vw", bottom: "3vh", right: "5vw" }}>
        08
      </div>
    </div>
  );
}
