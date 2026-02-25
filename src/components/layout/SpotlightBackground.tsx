import { useMousePosition } from "../../hooks/useMousePosition";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export default function SpotlightBackground() {
  const { x, y } = useMousePosition();
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <>
      {/* Dot grid texture */}
      <div className="pointer-events-none fixed inset-0 z-0 dot-grid opacity-40" />

      {/* Spotlight (desktop only) */}
      {isDesktop && (
        <div
          className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px at ${x}px ${y}px, rgba(139, 92, 246, 0.08), transparent 80%)`,
          }}
        />
      )}
    </>
  );
}
