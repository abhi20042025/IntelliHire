import React from "react";

// --- CUSTOM DONUT CHART ---
// --- CUSTOM DONUT CHART ---
export function DonutChart({ data = { Java: 25, Python: 35, AWS: 20, Docker: 20 } }) {
  const entries = Object.entries(data);
  const total = entries.reduce((sum, [_, val]) => sum + val, 0);

  let accumulatedPercent = 0;
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const center = 60;

  // Exact colors matching Image 1
  const colors = {
    Java: "#34d399",   // Bright Green (25%)
    Python: "#60a5fa", // Cyan/Light Blue (35%)
    AWS: "#fbbf24",    // Yellow/Orange (20%)
    Docker: "#f472b6"  // Pink/Magenta (20%)
  };

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", gap: "12px" }}>
      <div style={{ position: "relative", width: "120px", height: "120px", flexShrink: 0 }}>
        <svg width="120" height="120" viewBox="0 0 120 120">
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="transparent"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="14"
          />
          {entries.map(([key, value]) => {
            const percent = value / total;
            const strokeLength = percent * circumference;
            const strokeOffset = circumference - (accumulatedPercent * circumference);
            accumulatedPercent += percent;
            const color = colors[key] || "#60a5fa";

            return (
              <circle
                key={key}
                cx={center}
                cy={center}
                r={radius}
                fill="transparent"
                stroke={color}
                strokeWidth="14"
                strokeDasharray={`${strokeLength} ${circumference}`}
                strokeDashoffset={strokeOffset}
                transform={`rotate(-90 ${center} ${center})`}
                strokeLinecap="butt"
                style={{
                  transition: "stroke-dashoffset 0.8s ease-in-out",
                  filter: `drop-shadow(0 0 3px ${color}88)`
                }}
              />
            );
          })}
        </svg>
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          pointerEvents: "none"
        }}>
          <div style={{ fontSize: "16px", fontWeight: "800", color: "#ffffff", lineHeight: "1" }}>100%</div>
          <div style={{ fontSize: "9px", fontWeight: "600", color: "var(--text-muted)", letterSpacing: "0.5px", marginTop: "2px" }}>TOTAL</div>
        </div>
      </div>

      {/* Legend on Right Side as seen in Image 1 */}
      <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
        {entries.map(([key, value]) => {
          const color = colors[key] || "#60a5fa";
          return (
            <div key={key} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "11px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: color, boxShadow: `0 0 6px ${color}` }}></span>
                <span style={{ color: "var(--text-secondary)", fontWeight: "500" }}>{key}</span>
              </div>
              <span style={{ fontWeight: "700", color: "var(--text-primary)" }}>{value}%</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// --- CUSTOM BAR CHART matching Image 1 ---
export function BarChart() {
  const bars = [
    { label: "0-2 years", bottomH: 25, topH: 15 },
    { label: "2-5 years", bottomH: 45, topH: 25 },
    { label: "5+ years", bottomH: 60, topH: 30 }
  ];

  const yTicks = [50, 40, 30, 20, 10, 0];

  return (
    <div style={{ width: "100%", height: "140px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <div style={{ flex: 1, display: "flex", gap: "10px", position: "relative" }}>
        {/* Y Axis ticks */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", fontSize: "9px", color: "var(--text-muted)", height: "100%", paddingRight: "4px" }}>
          {yTicks.map(tick => (
            <span key={tick}>{tick}</span>
          ))}
        </div>

        {/* Chart plot area */}
        <div style={{ flex: 1, display: "flex", alignItems: "flex-end", justifyContent: "space-around", borderLeft: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)", paddingLeft: "8px", paddingBottom: "2px", height: "100%", position: "relative" }}>
          {/* Horizontal Grid lines */}
          <div style={{ position: "absolute", top: "0%", width: "100%", borderTop: "1px dashed rgba(255,255,255,0.05)" }}></div>
          <div style={{ position: "absolute", top: "20%", width: "100%", borderTop: "1px dashed rgba(255,255,255,0.05)" }}></div>
          <div style={{ position: "absolute", top: "40%", width: "100%", borderTop: "1px dashed rgba(255,255,255,0.05)" }}></div>
          <div style={{ position: "absolute", top: "60%", width: "100%", borderTop: "1px dashed rgba(255,255,255,0.05)" }}></div>
          <div style={{ position: "absolute", top: "80%", width: "100%", borderTop: "1px dashed rgba(255,255,255,0.05)" }}></div>

          {bars.map((bar, idx) => (
            <div key={idx} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", width: "28px", height: "100%", justifyContent: "flex-end", zIndex: 2 }}>
              {/* Stacked Vertical Bar */}
              <div style={{ width: "100%", display: "flex", flexDirection: "column", borderRadius: "3px", overflow: "hidden" }}>
                {/* Top Teal/Cyan segment */}
                <div style={{
                  height: `${bar.topH}px`,
                  backgroundColor: "#34d399",
                  boxShadow: "0 0 8px rgba(52, 211, 153, 0.4)",
                  transition: "height 0.6s ease"
                }}></div>
                {/* Bottom Dark Blue segment */}
                <div style={{
                  height: `${bar.bottomH}px`,
                  backgroundColor: "#3b82f6",
                  boxShadow: "0 0 8px rgba(59, 130, 246, 0.4)",
                  transition: "height 0.6s ease"
                }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* X Axis Labels */}
      <div style={{ display: "flex", justifyContent: "space-around", paddingLeft: "24px", paddingTop: "6px" }}>
        {bars.map((bar, idx) => (
          <span key={idx} style={{ fontSize: "9px", color: "var(--text-secondary)", fontWeight: "500" }}>{bar.label}</span>
        ))}
      </div>
    </div>
  );
}

// --- CUSTOM RADAR CHART ---
export function RadarChart({ skills = ["AWS", "Docker", "Python", "Java", "Kubernetes"], values = [80, 70, 90, 50, 40], targetValues = [90, 80, 85, 75, 80] }) {
  const center = 100;
  const maxRadius = 70;
  const angleStep = (2 * Math.PI) / skills.length;

  // Grid levels (concentric polygons)
  const levels = [0.2, 0.4, 0.6, 0.8, 1.0];

  const getPoints = (valArray) => {
    return valArray
      .map((val, i) => {
        const angle = i * angleStep - Math.PI / 2; // start from top
        const r = (val / 100) * maxRadius;
        const x = center + r * Math.cos(angle);
        const y = center + r * Math.sin(angle);
        return `${x},${y}`;
      })
      .join(" ");
  };

  const getGridPoints = (level) => {
    return skills
      .map((_, i) => {
        const angle = i * angleStep - Math.PI / 2;
        const r = level * maxRadius;
        const x = center + r * Math.cos(angle);
        const y = center + r * Math.sin(angle);
        return `${x},${y}`;
      })
      .join(" ");
  };

  return (
    <div className="radar-chart-container">
      <svg width="200" height="200" viewBox="0 0 200 200" style={{ overflow: "visible" }}>
        {/* Concentric grid lines */}
        {levels.map((lvl, index) => (
          <polygon
            key={index}
            points={getGridPoints(lvl)}
            fill="none"
            stroke="var(--border-color)"
            strokeWidth="1"
          />
        ))}

        {/* Axes lines */}
        {skills.map((_, i) => {
          const angle = i * angleStep - Math.PI / 2;
          const x = center + maxRadius * Math.cos(angle);
          const y = center + maxRadius * Math.sin(angle);
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={x}
              y2={y}
              stroke="var(--border-color)"
              strokeWidth="1"
            />
          );
        })}

        {/* Target/Job Requirement Area */}
        <polygon
          points={getPoints(targetValues)}
          fill="rgba(244, 114, 182, 0.15)"
          stroke="#f472b6"
          strokeWidth="1.5"
          strokeDasharray="3,3"
          style={{ transition: "all 0.5s ease" }}
        />

        {/* Candidate Skill Area */}
        <polygon
          points={getPoints(values)}
          fill="rgba(96, 165, 250, 0.25)"
          stroke="#60a5fa"
          strokeWidth="2"
          style={{
            transition: "all 0.5s ease",
            filter: "drop-shadow(0 0 4px rgba(96, 165, 250, 0.5))"
          }}
        />

        {/* Skill Labels */}
        {skills.map((skill, i) => {
          const angle = i * angleStep - Math.PI / 2;
          // Offset text slightly further out than maxRadius
          const textRadius = maxRadius + 16;
          const x = center + textRadius * Math.cos(angle);
          const y = center + textRadius * Math.sin(angle);

          // Anchor text based on its quadrant
          let textAnchor = "middle";
          if (Math.cos(angle) > 0.1) textAnchor = "start";
          else if (Math.cos(angle) < -0.1) textAnchor = "end";

          return (
            <text
              key={i}
              x={x}
              y={y + 4}
              fill="var(--text-secondary)"
              fontSize="10"
              fontFamily="Inter, sans-serif"
              textAnchor={textAnchor}
              className="radar-label"
            >
              {skill}
            </text>
          );
        })}
      </svg>

      <div className="radar-legend">
        <div className="legend-item">
          <span className="legend-line dash" style={{ borderBottomColor: "#f472b6" }}></span>
          <span className="legend-text">Job Role Target</span>
        </div>
        <div className="legend-item">
          <span className="legend-line solid" style={{ backgroundColor: "#60a5fa" }}></span>
          <span className="legend-text">Candidate Skill</span>
        </div>
      </div>
    </div>
  );
}
