export default function GTPro() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg">
      {/* Background with emerald tint */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 100% 50%, rgba(5,150,105,0.07) 0%, transparent 55%)",
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

      {/* Right accent panel */}
      <div
        className="absolute top-0 right-0 h-full"
        style={{
          width: "38vw",
          background: "linear-gradient(180deg, rgba(5,150,105,0.07) 0%, rgba(5,150,105,0.03) 100%)",
          borderLeft: "1px solid rgba(5,150,105,0.2)",
        }}
      >
        {/* Emerald vertical bar */}
        <div
          className="absolute top-0 left-0 bottom-0"
          style={{ width: "3px", background: "linear-gradient(180deg, #059669 0%, rgba(5,150,105,0.2) 100%)" }}
        />

        {/* Feature tags */}
        <div
          className="absolute"
          style={{ top: "28vh", left: "5vw", right: "5vw" }}
        >
          <p
            className="font-body font-bold uppercase tracking-[0.25em]"
            style={{ fontSize: "1.5vw", color: "#059669", marginBottom: "3vh" }}
          >
            Capabilities
          </p>

          <div
            style={{
              border: "1px solid rgba(5,150,105,0.25)",
              padding: "2vh 2vw",
              marginBottom: "2vh",
            }}
          >
            <p className="font-body font-medium text-text" style={{ fontSize: "2vw" }}>
              AI-Driven Trading Systems
            </p>
          </div>

          <div
            style={{
              border: "1px solid rgba(5,150,105,0.25)",
              padding: "2vh 2vw",
              marginBottom: "2vh",
            }}
          >
            <p className="font-body font-medium text-text" style={{ fontSize: "2vw" }}>
              Autonomous Execution Bots
            </p>
          </div>

          <div
            style={{
              border: "1px solid rgba(5,150,105,0.25)",
              padding: "2vh 2vw",
              marginBottom: "2vh",
            }}
          >
            <p className="font-body font-medium text-text" style={{ fontSize: "2vw" }}>
              Real-Time Market Intelligence
            </p>
          </div>

          <div
            style={{
              border: "1px solid rgba(5,150,105,0.25)",
              padding: "2vh 2vw",
            }}
          >
            <p className="font-body font-medium text-text" style={{ fontSize: "2vw" }}>
              Strategy Optimization
            </p>
          </div>
        </div>
      </div>

      {/* Left content */}
      <div className="absolute" style={{ top: "12vh", left: "5vw", right: "42vw" }}>
        {/* Product label */}
        <p
          className="font-body font-bold uppercase tracking-[0.3em]"
          style={{ fontSize: "1.6vw", color: "#059669", marginBottom: "2vh" }}
        >
          Vertical 02
        </p>

        {/* Product name */}
        <h2
          className="font-display font-black text-text tracking-[0.05em]"
          style={{ fontSize: "4.5vw", marginBottom: "2.5vh" }}
        >
          GTPro
        </h2>

        {/* Emerald divider */}
        <div style={{ width: "6vw", height: "2px", background: "#059669", marginBottom: "3vh" }} />

        {/* Tagline */}
        <p
          className="font-body font-bold text-text"
          style={{ fontSize: "2.2vw", marginBottom: "3vh" }}
        >
          Global Trade Intelligence
        </p>

        {/* Description */}
        <p
          className="font-body text-muted"
          style={{ fontSize: "2vw", lineHeight: 1.7, marginBottom: "4vh" }}
        >
          An advanced AI-powered trading intelligence platform engineered for real-time market analysis and autonomous execution through intelligent bot fleets and predictive strategy systems.
        </p>

        {/* Status tag */}
        <div
          style={{
            display: "inline-block",
            border: "1px solid rgba(5,150,105,0.5)",
            padding: "0.8vh 1.5vw",
          }}
        >
          <p
            className="font-body font-medium uppercase tracking-[0.2em]"
            style={{ fontSize: "1.6vw", color: "#059669" }}
          >
            Live
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
        05
      </div>
    </div>
  );
}
