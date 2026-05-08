const base = import.meta.env.BASE_URL;

export default function Cover() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg">
      {/* Deep background with subtle gold radial glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 50% -5%, rgba(201,146,26,0.14) 0%, transparent 55%), linear-gradient(180deg, #0f0f0a 0%, #0e0e0f 100%)",
        }}
      />

      {/* Hero image — loads from async generation */}
      <img
        src={`${base}hero.png`}
        crossOrigin="anonymous"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.12 }}
        alt=""
      />

      {/* Gradient overlay for text contrast */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(14,14,15,0.35) 0%, rgba(14,14,15,0.7) 65%, rgba(14,14,15,0.95) 100%)",
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

      {/* Top wordmark — left */}
      <div className="absolute font-display text-[1.5vw] tracking-[0.4em] text-muted uppercase" style={{ top: "4vh", left: "5vw" }}>
        AURELIX SYSTEMS
      </div>

      {/* Year — right */}
      <div className="absolute font-body text-[1.5vw] tracking-[0.15em] text-muted" style={{ top: "4vh", right: "5vw" }}>
        2026
      </div>

      {/* Top hairline */}
      <div
        className="absolute left-[5vw] right-[5vw] h-px"
        style={{ top: "8.5vh", background: "rgba(201,146,26,0.35)" }}
      />

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {/* Pyramid SVG mark */}
        <svg
          viewBox="0 0 60 52"
          style={{
            width: "5.5vw",
            height: "auto",
            marginBottom: "3.5vh",
            filter: "drop-shadow(0 0 1.5vw rgba(201,146,26,0.55))",
          }}
          aria-hidden="true"
        >
          <polygon points="30,2 58,50 2,50" fill="none" stroke="#C9921A" strokeWidth="2.5" />
          <polygon points="30,10 52,48 8,48" fill="#C9921A" fillOpacity="0.18" />
        </svg>

        {/* Main headline */}
        <h1
          className="font-display font-black text-text text-center tracking-[0.18em]"
          style={{ fontSize: "5.8vw", textWrap: "balance", marginBottom: "1.5vh" }}
        >
          AURELIX SYSTEMS
        </h1>

        {/* Gold rule */}
        <div
          className="bg-primary"
          style={{ width: "18vw", height: "1px", marginBottom: "2.5vh" }}
        />

        {/* Tagline */}
        <p
          className="font-body font-medium text-accent text-center tracking-[0.08em]"
          style={{ fontSize: "2.3vw", marginBottom: "2.5vh" }}
        >
          Building Intelligent Systems
        </p>

        {/* Sector tags */}
        <p
          className="font-body text-muted text-center uppercase tracking-[0.22em]"
          style={{ fontSize: "1.6vw" }}
        >
          Creativity &nbsp;·&nbsp; Finance &nbsp;·&nbsp; Business &nbsp;·&nbsp; Security
        </p>
      </div>

      {/* Bottom hairline */}
      <div
        className="absolute left-[5vw] right-[5vw] h-px"
        style={{ bottom: "8vh", background: "rgba(201,146,26,0.2)" }}
      />

      {/* Slide number */}
      <div className="absolute font-body text-muted" style={{ fontSize: "1.5vw", bottom: "3vh", right: "5vw" }}>
        01
      </div>
    </div>
  );
}
