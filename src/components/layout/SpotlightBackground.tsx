import { useMousePosition } from "../../hooks/useMousePosition";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export default function SpotlightBackground() {
  const { x, y } = useMousePosition();
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  if (!isDesktop) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
    />
  );
}
