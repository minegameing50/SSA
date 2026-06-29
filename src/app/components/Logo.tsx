// Logo image is served as a static public asset (/logo.jpg) for better performance:
// - Not bundled into the JS bundle
// - Can be preloaded via <link rel="preload"> in index.html
// - Reduces initial JS bundle size
const LOGO_SRC = "/logo.jpg";

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
        src={LOGO_SRC}
        alt="Shiv Shatakshi Agro Logo"
        width={size}
        height={size}
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
