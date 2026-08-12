import React from "react";

// Generates a consistent gradient color pair based on a name string
function nameToGradient(name = "") {
  const gradients = [
    ["#7c3aed", "#a78bfa"], // violet
    ["#1d4ed8", "#60a5fa"], // blue
    ["#059669", "#34d399"], // emerald
    ["#be185d", "#f472b6"], // pink
    ["#b45309", "#fbbf24"], // amber
    ["#0e7490", "#22d3ee"], // cyan
    ["#dc2626", "#f87171"], // red
    ["#7e22ce", "#c084fc"], // purple
    ["#065f46", "#6ee7b7"], // teal
    ["#92400e", "#fcd34d"], // yellow
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return gradients[Math.abs(hash) % gradients.length];
}

// Extracts up to 2 initials from a name
function getInitials(name = "") {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
}

/**
 * AvatarIcon — a creative gradient initials avatar.
 *
 * Props:
 *  name    {string}  — the person's full name (used for initials + colour)
 *  size    {number}  — diameter in px  (default 28)
 *  fontSize{number}  — font size in px (default auto-calculated)
 *  style   {object}  — extra inline styles applied to the outer div
 *  glow    {boolean} — show a subtle glow ring (default false)
 */
export default function AvatarIcon({ name = "?", size = 28, fontSize, style = {}, glow = false }) {
  const [from, to] = nameToGradient(name);
  const initials = getInitials(name);
  const fs = fontSize ?? Math.round(size * 0.38);
  const glowStyle = glow
    ? { boxShadow: `0 0 0 2px ${from}55, 0 0 10px ${from}44` }
    : {};

  return (
    <div
      aria-label={name}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        background: `linear-gradient(135deg, ${from}, ${to})`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        fontFamily: "Inter, sans-serif",
        fontWeight: "700",
        fontSize: `${fs}px`,
        color: "#ffffff",
        letterSpacing: "0.02em",
        userSelect: "none",
        ...glowStyle,
        ...style,
      }}
    >
      {initials}
    </div>
  );
}
