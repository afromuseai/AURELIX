export default function Closing() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg">
      {/* Background — rich gold center glow, closing energy */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(201,146,26,0.13) 0%, rgba(201,146,26,0.05) 40%, transparent 65%)",
        }}
      />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,146,26,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,146,26,1) 1px, transparent 1px)",
          backgroundSize: "8vw 8vw",
        }}
      />

      {/* Top wordmark */}
      <div className="absolute font-display text-[1.5vw] tracking-[0.4em] text-muted uppercase" style={{ top: "4vh", left: "5vw" }}>
        AURELIX SYSTEMS
      </div>

      {/* Top hairline */}
      <div
        className="absolute left-[5vw] right-[5vw] h-px"
        style={{ top: "8.5vh", background: "rgba(201,146,26,0.35)" }}
      />

      {/* Center content */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center"
        style={{ gap: 0 }}
      >
        {/* Pyramid SVG */}
        <svg
          viewBox="0 0 60 52"
          style={{
            width: "4.5vw",
            height: "auto",
            marginBottom: "3.5vh",
            filter: "drop-shadow(0 0 1.5vw rgba(201,146,26,0.6))",
          }}
          aria-hidden="true"
        >
          <polygon points="30,2 58,50 2,50" fill="none" stroke="#C9921A" strokeWidth="2.5" />
          <polygon points="30,10 52,48 8,48" fill="#C9921A" fillOpacity="0.2" />
        </svg>

        {/* Label */}
        <p
          className="font-body font-medium text-primary uppercase tracking-[0.35em]"
          style={{ fontSize: "1.6vw", marginBottom: "2.5vh" }}
        >
          Join the Future
        </p>

        {/* Headline */}
        <h2
          className="font-display font-black text-text text-center tracking-[0.08em]"
          style={{ fontSize: "4.5vw", marginBottom: "1.5vh", textWrap: "balance" }}
        >
          AURELIX SYSTEMS
        </h2>

        {/* Tagline */}
        <p
          className="font-body font-medium text-accent text-center tracking-[0.06em]"
          style={{ fontSize: "2.2vw", marginBottom: "4vh" }}
        >
          Building Intelligent Systems
        </p>

        {/* Gold rule */}
        <div
          className="bg-primary"
          style={{ width: "12vw", height: "1px", marginBottom: "4vh" }}
        />

        {/* Contact line */}
        <p
          className="font-body text-muted text-center uppercase tracking-[0.2em]"
          style={{ fontSize: "1.7vw", marginBottom: "1.5vh" }}
        >
          Creativity &nbsp;·&nbsp; Finance &nbsp;·&nbsp; Business &nbsp;·&nbsp; Security
        </p>

        <p
          className="font-body text-muted text-center"
          style={{ fontSize: "1.7vw" }}
        >
          contact@aurelixsystems.com
        </p>
      </div>

      {/* Four product color marks — bottom bar */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ height: "0.6vh", display: "flex" }}
      >
        <div style={{ flex: 1, background: "#D97706" }} />
        <div style={{ flex: 1, background: "#059669" }} />
        <div style={{ flex: 1, background: "#2563EB" }} />
        <div style={{ flex: 1, background: "#4F46E5" }} />
      </div>

      {/* Bottom hairline */}
      <div
        className="absolute left-[5vw] right-[5vw] h-px"
        style={{ bottom: "8vh", background: "rgba(201,146,26,0.25)" }}
      />

      {/* Slide number */}
      <div className="absolute font-body text-muted" style={{ fontSize: "1.5vw", bottom: "3vh", right: "5vw" }}>
        09
      </div>
    </div>
  );
}
