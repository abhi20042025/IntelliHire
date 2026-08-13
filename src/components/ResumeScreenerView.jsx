import React, { useState } from "react";
import { RadarChart } from "./Charts";
import AvatarIcon from "./AvatarIcon";

export default function ResumeScreenerView({ candidates, setCandidates, uploadHistory, setUploadHistory }) {
  const [dragActive, setDragActive] = useState(false);
  const [parsingState, setParsingState] = useState(null);
  const [parseProgress, setParseProgress] = useState(0);
  const [showUploads, setShowUploads] = useState(false);

  const mockScreenerCandidates = [
    { name: "Abhishek Singh", sub: "Last Candidate", score: 89, status: "Screened", statusColor: "#60a5fa" },
    { name: "Duther Brahy", sub: "Last Candidate", score: 86, status: "Shortlisted", statusColor: "#34d399" },
    { name: "Abhishek Sanvatar", sub: "Last Candidate", score: 75, status: "Shortlisted", statusColor: "#fbbf24" }
  ];

  const versionTrackingData = [
    { name: "Abhishek Singh", sub: "Candidate", diff: "Key difference : ocean differences" },
    { name: "Abhishek Sam...", sub: "Candidate", diff: "Key difference key differences" },
    { name: "Drunt Aloss", sub: "Candidate", diff: "Key difference key differences" }
  ];

  const projectsList = [
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Docker", icon: "🐳" },
    { name: "VS Code", icon: "💻" },
    { name: "Python", icon: "🐍" },
    { name: "Kubernetes", icon: "☸️" }
  ];

  const certsList = [
    { name: "AWS Cloud", badge: "🛡️" },
    { name: "CKAD", badge: "🎖️" },
    { name: "TensorRT", badge: "🏅" },
    { name: "Docker Pro", badge: "🎗️" },
    { name: "Kafka Dev", badge: "🥇" }
  ];

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setParsingState("uploading");
      setParseProgress(0);
      const timer = setInterval(() => {
        setParseProgress((old) => {
          if (old >= 100) {
            clearInterval(timer);
            setParsingState("done");
            return 100;
          }
          return old + 20;
        });
      }, 300);
    }
  };

  return (
    <div className="animate-fade-in" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      
      {/* Top Banner: Component Header Labels */}
      <div className="grid-screener-3col">
        
        {/* Component 1: Resume Screener */}
        <div className="glass-card" style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <span style={{ fontSize: "10px", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: "700" }}>Component: Resume Screener</span>
              <h2 className="card-heading" style={{ fontSize: "15px", marginTop: "2px" }}>Resume Screener</h2>
            </div>
            <div style={{ display: "flex", gap: "8px", position: "relative" }}>
              <label htmlFor="screener-upload" style={{
                fontSize: "11px",
                padding: "6px 12px",
                borderRadius: "6px",
                background: "linear-gradient(135deg, #3b82f6, #60a5fa)",
                color: "#ffffff",
                fontWeight: "600",
                cursor: "pointer",
                boxShadow: "0 0 10px rgba(59, 130, 246, 0.4)"
              }}>
                ↑ Upload (PDF/DOCX)
              </label>
              <input type="file" id="screener-upload" style={{ display: "none" }} onChange={handleFileChange} />
              <div style={{ position: "relative" }}>
                <button
                  onClick={() => setShowUploads((v) => !v)}
                  style={{
                    fontSize: "10px",
                    padding: "6px 10px",
                    borderRadius: "6px",
                    backgroundColor: showUploads ? "rgba(96, 165, 250, 0.15)" : "rgba(255,255,255,0.05)",
                    border: showUploads ? "1px solid rgba(96,165,250,0.4)" : "1px solid var(--border-color)",
                    color: showUploads ? "#60a5fa" : "var(--text-secondary)",
                    cursor: "pointer",
                    transition: "all 0.2s ease"
                  }}
                >
                  Recent uploads {showUploads ? "▲" : "▼"}
                </button>
                {showUploads && (
                  <div style={{
                    position: "absolute",
                    top: "calc(100% + 6px)",
                    right: 0,
                    width: "260px",
                    backgroundColor: "#1a1a2e",
                    border: "1px solid var(--border-color)",
                    borderRadius: "10px",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
                    zIndex: 100,
                    overflow: "hidden"
                  }}>
                    <div style={{ padding: "10px 14px", borderBottom: "1px solid var(--border-color)", fontSize: "11px", fontWeight: "700", color: "var(--text-muted)", textTransform: "uppercase" }}>
                      Upload History
                    </div>
                    {uploadHistory.map((file) => (
                      <div key={file.id} style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "10px 14px",
                        borderBottom: "1px solid rgba(255,255,255,0.03)",
                        fontSize: "11px"
                      }}>
                        <div>
                          <div style={{ fontWeight: "600", color: "var(--text-primary)" }}>{file.name}</div>
                          <div style={{ fontSize: "9px", color: "var(--text-muted)", marginTop: "2px" }}>{file.date}</div>
                        </div>
                        <span style={{
                          fontSize: "9px",
                          padding: "2px 7px",
                          borderRadius: "10px",
                          backgroundColor: file.status === "Completed" ? "rgba(52,211,153,0.15)" : "rgba(251,191,36,0.15)",
                          color: file.status === "Completed" ? "#34d399" : "#fbbf24",
                          fontWeight: "600"
                        }}>
                          {file.ats != null ? `${file.ats}% ATS` : file.status}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Screener Table */}
          <div className="custom-table-wrapper">
            <table className="custom-table" style={{ fontSize: "11px", width: "100%" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border-color)", textAlign: "left" }}>
                  <th style={{ padding: "8px 4px", color: "var(--text-muted)" }}>Candidate Name</th>
                  <th style={{ padding: "8px 4px", color: "var(--text-muted)" }}>ATS Compatibility Score</th>
                  <th style={{ padding: "8px 4px", color: "var(--text-muted)" }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {mockScreenerCandidates.map((cand, idx) => (
                  <tr key={idx} style={{ borderBottom: "1px solid rgba(255,255,255,0.02)", height: "42px" }}>
                    <td style={{ padding: "4px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <AvatarIcon name={cand.name} size={24} />
                        <div>
                          <div style={{ fontWeight: "600", color: "var(--text-primary)", fontSize: "11px" }}>{cand.name}</div>
                          <div style={{ fontSize: "9px", color: "var(--text-muted)" }}>{cand.sub}</div>
                        </div>
                      </div>
                    </td>
                    <td style={{ padding: "4px", fontWeight: "700", color: "#34d399" }}>{cand.score}%</td>
                    <td style={{ padding: "4px" }}>
                      <span style={{
                        backgroundColor: cand.statusColor + "22",
                        color: cand.statusColor,
                        padding: "3px 8px",
                        borderRadius: "12px",
                        fontSize: "9.5px",
                        fontWeight: "600",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px"
                      }}>
                        <span style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: cand.statusColor }}></span>
                        {cand.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Skill Gap Radar preview */}
          <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "12px" }}>
            <span style={{ fontSize: "11px", fontWeight: "600", color: "var(--text-secondary)", display: "block", marginBottom: "8px" }}>Skill-Gap Visualization</span>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <RadarChart skills={["NVD", "Python", "Docker", "React", "AWS"]} values={[75, 90, 60, 80, 70]} targetValues={[85, 80, 85, 75, 80]} />
            </div>
          </div>
        </div>

        {/* Component 2: AI Resume Analysis & Missing Keywords */}
        <div className="glass-card" style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <span style={{ fontSize: "10px", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: "700" }}>Component: AI Resume Analysis & Missing Keywords</span>
            <h2 className="card-heading" style={{ fontSize: "15px", marginTop: "2px" }}>Analysis & Breakdown</h2>
          </div>

          {/* Key Metrics Overview */}
          <div style={{ backgroundColor: "rgba(255,255,255,0.03)", padding: "12px", borderRadius: "10px", border: "1px solid var(--border-color)" }}>
            <span style={{ fontSize: "11px", fontWeight: "600", color: "var(--text-secondary)", display: "block", marginBottom: "8px" }}>Key Metrics Overview</span>
            <div className="grid-2col-small">
              <div>Java: <strong style={{ color: "#34d399" }}>25%</strong></div>
              <div>Python: <strong style={{ color: "#60a5fa" }}>35%</strong></div>
              <div>AWS: <strong style={{ color: "#fbbf24" }}>20%</strong></div>
              <div>Docker: <strong style={{ color: "#f472b6" }}>20%</strong></div>
            </div>
          </div>

          {/* AI Resume Analysis */}
          <div style={{ backgroundColor: "rgba(255,255,255,0.03)", padding: "12px", borderRadius: "10px", border: "1px solid var(--border-color)" }}>
            <span style={{ fontSize: "11px", fontWeight: "600", color: "var(--text-secondary)", display: "block", marginBottom: "4px" }}>AI Resume Analysis</span>
            <div style={{ fontSize: "24px", fontWeight: "800", color: "#34d399" }}>92%</div>
            <p style={{ fontSize: "10px", color: "var(--text-muted)", marginTop: "4px", lineHeight: "1.4" }}>
              Experienced AI Engineer with professional skill set matching high architectural standards. Strong knowledge of ML pipelines and scalable deployments.
            </p>
          </div>

          {/* Missing Keywords */}
          <div>
            <span style={{ fontSize: "11px", fontWeight: "600", color: "var(--text-secondary)", display: "block", marginBottom: "6px" }}>Missing Keywords</span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {["AWS (Matched)", "Docker (Matched)", "Kafka", "Kubernetes-pleising", "Rubermers"].map((kw, idx) => (
                <span key={idx} style={{
                  fontSize: "9px",
                  padding: "3px 8px",
                  borderRadius: "6px",
                  backgroundColor: kw.includes("Matched") ? "rgba(52, 211, 153, 0.15)" : "rgba(239, 68, 68, 0.15)",
                  color: kw.includes("Matched") ? "#34d399" : "#fca5a5",
                  border: `1px solid ${kw.includes("Matched") ? "rgba(52, 211, 153, 0.3)" : "rgba(239, 68, 68, 0.3)"}`
                }}>
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Component 3: Recommended Projects & Certifications & Version Tracking */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          
          {/* Recommended Projects & Certifications */}
          <div className="glass-card" style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "14px" }}>
            <span style={{ fontSize: "10px", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: "700" }}>Recommended Projects & Certifications</span>
            
            <div>
              <span style={{ fontSize: "11px", fontWeight: "600", color: "var(--text-secondary)", display: "block", marginBottom: "8px" }}>Recommended Projects</span>
              <div style={{ display: "flex", gap: "10px" }}>
                {projectsList.map((p, idx) => (
                  <div key={idx} style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    border: "1px solid var(--border-color)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "18px"
                  }} title={p.name}>
                    {p.icon}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span style={{ fontSize: "11px", fontWeight: "600", color: "var(--text-secondary)", display: "block", marginBottom: "8px" }}>Recommended Certifications</span>
              <div style={{ display: "flex", gap: "10px" }}>
                {certsList.map((c, idx) => (
                  <div key={idx} style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    border: "1px solid var(--border-color)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "18px"
                  }} title={c.name}>
                    {c.badge}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Component: Resume Versions Tracking */}
          <div className="glass-card" style={{ padding: "20px" }}>
            <div style={{ marginBottom: "10px" }}>
              <span style={{ fontSize: "10px", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: "700" }}>Component: Resume Versions Tracking</span>
              <h3 style={{ fontSize: "13px", fontWeight: "600", marginTop: "2px" }}>Resume Versions Tracking</h3>
            </div>

            <div className="custom-table-wrapper">
              <table className="custom-table" style={{ fontSize: "10px", width: "100%" }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid var(--border-color)", textAlign: "left" }}>
                    <th style={{ padding: "6px 4px", color: "var(--text-muted)" }}>Upload Name</th>
                    <th style={{ padding: "6px 4px", color: "var(--text-muted)" }}>Key Difference</th>
                  </tr>
                </thead>
                <tbody>
                  {versionTrackingData.map((v, idx) => (
                    <tr key={idx} style={{ borderBottom: "1px solid rgba(255,255,255,0.02)", height: "36px" }}>
                      <td style={{ padding: "4px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                          <AvatarIcon name={v.name} size={20} />
                          <div>
                            <div style={{ fontWeight: "600", color: "var(--text-primary)" }}>{v.name}</div>
                            <div style={{ fontSize: "8px", color: "var(--text-muted)" }}>{v.sub}</div>
                          </div>
                        </div>
                      </td>
                      <td style={{ padding: "4px", color: "#34d399", fontWeight: "500" }}>{v.diff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
