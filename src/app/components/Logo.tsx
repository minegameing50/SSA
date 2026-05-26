import logoSrc from "../../imports/IMG-20260520-WA0000.jpg";

interface LogoProps {
  size?: number;
  showText?: boolean;
  textColor?: string;
  accentColor?: string;
  className?: string;
}

export function Logo({
  size = 40,
  showText = true,
  textColor = "#1b4332",
  accentColor = "#f4a31a",
  className = "",
}: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img
        src={logoSrc}
        alt="Shiv Shatakshi Agro Logo"
        style={{ width: size, height: size, objectFit: "contain" }}
        draggable={false}
      />
      {showText && (
        <div className="flex flex-col leading-tight">
          <span style={{ fontWeight: 700, color: textColor, fontSize: "0.9rem", letterSpacing: "-0.01em" }}>
            Shiv Shatakshi
          </span>
          <span style={{ fontWeight: 600, color: accentColor, fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            Agro
          </span>
        </div>
      )}
    </div>
  );
}
