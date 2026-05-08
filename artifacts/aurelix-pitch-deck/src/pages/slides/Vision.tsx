export default function Vision() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 0% 50%, rgba(201,146,26,0.06) 0%, transparent 60%)",
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

      {/* Right decorative column */}
      <div
        className="absolute top-0 right-0 h-full"
        style={{
          width: "38vw",
          background: "linear-gradient(135deg, rgba(201,146,26,0.05) 0%, transparent 60%)",
          borderLeft: "1px solid rgba(201,146,26,0.12)",
        }}
      >
        {/* Geometric accent — stacked horizontal gold lines */}
        <div className="absolute" style={{ top: "28vh", left: "6vw", right: "5vw" }}>
          <div className="bg-primary" style={{ height: "2px", width: "100%", marginBottom: "2.5vh", opacity: 0.7 }} />
          <div className="bg-primary" style={{ height: "1px", width: "75%", marginBottom: "2.5vh", opacity: 0.4 }} />
          <div className="bg-primary" style={{ height: "1px", width: "50%", marginBottom: "2.5vh", opacity: 0.25 }} />
          <div className="bg-primary" style={{ height: "1px", width: "30%", opacity: 0.15 }} />
        </div>

        {/* Large background text watermark */}
        <div
          className="absolute font-display font-black text-primary"
          style={{
            fontSize: "12vw",
            opacity: 0.04,
            bottom: "5vh",
            right: "-1vw",
            letterSpacing: "-0.05em",
            lineHeight: 1,
          }}
        >
          AX
        </div>
      </div>

      {/* Left content */}
      <div className="absolute" style={{ top: "12vh", left: "5vw", right: "40vw" }}>
        {/* Section label */}
        <p
          className="font-body font-medium text-primary uppercase tracking-[0.3em]"
          style={{ fontSize: "1.6vw", marginBottom: "2vh" }}
        >
          OUR VISION
        </p>

        {/* Headline */}
        <h2
          className="font-display font-black text-text tracking-[0.05em]"
          style={{ fontSize: "4vw", marginBottom: "1.5vh", textWrap: "balance" }}
        >
          Intelligent Infrastructure
        </h2>

        {/* Sub-headline */}
        <h3
          className="font-display font-bold text-accent tracking-[0.04em]"
          style={{ fontSize: "2vw", marginBottom: "3vh" }}
        >
          for the next era
        </h3>

        {/* Gold divider */}
        <div className="bg-primary" style={{ width: "8vw", height: "2px", marginBottom: "3.5vh" }} />

        {/* Mission statement */}
        <p
          className="font-body text-text"
          style={{ fontSize: "2vw", lineHeight: 1.65, marginBottom: "3.5vh", opacity: 0.85 }}
        >
          Building AI systems that empower creativity, accelerate business growth, strengthen digital security, and redefine human-technology interaction.
        </p>

        {/* Beliefs label */}
        <p
          className="font-body font-bold text-muted uppercase tracking-[0.25em]"
          style={{ fontSize: "1.6vw", marginBottom: "2vh" }}
        >
          We Believe
        </p>

        {/* Four beliefs */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.4vh" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1.2vw" }}>
            <div className="bg-primary flex-shrink-0" style={{ width: "0.4vw", height: "0.4vw", borderRadius: "50%" }} />
            <p className="font-body text-text" style={{ fontSize: "2vw", opacity: 0.8 }}>Intelligence should scale</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1.2vw" }}>
            <div className="bg-primary flex-shrink-0" style={{ width: "0.4vw", height: "0.4vw", borderRadius: "50%" }} />
            <p className="font-body text-text" style={{ fontSize: "2vw", opacity: 0.8 }}>Systems should adapt</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1.2vw" }}>
            <div className="bg-primary flex-shrink-0" style={{ width: "0.4vw", height: "0.4vw", borderRadius: "50%" }} />
            <p className="font-body text-text" style={{ fontSize: "2vw", opacity: 0.8 }}>Automation should empower</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1.2vw" }}>
            <div className="bg-primary flex-shrink-0" style={{ width: "0.4vw", height: "0.4vw", borderRadius: "50%" }} />
            <p className="font-body text-text" style={{ fontSize: "2vw", opacity: 0.8 }}>Innovation must remain human-centered</p>
          </div>
        </div>
      </div>

      {/* Bottom hairline */}
      <div
        className="absolute left-[5vw] right-[5vw] h-px"
        style={{ bottom: "8vh", background: "rgba(201,146,26,0.2)" }}
      />

      {/* Slide number */}
      <div className="absolute font-body text-muted" style={{ fontSize: "1.5vw", bottom: "3vh", right: "5vw" }}>
        02
      </div>
    </div>
  );
}
