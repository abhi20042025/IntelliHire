import React, { useState } from "react";
import { DonutChart, BarChart } from "./Charts";
import AvatarIcon from "./AvatarIcon";

export default function DashboardView({ candidates, selectedCandidate, setSelectedCandidate, onUploadClick }) {
  const [filterRole, setFilterRole] = useState("Matching");
  const [matchingFilter, setMatchingFilter] = useState("Matchings");

  // Replicate exact mockup list from Image 1 for Resume Scanned Card
  const scannedResumes = [
    { 
      name: "Abhishek Singh", 
      sub: "Last Candidate", 
      role: "Senior AI Engineer", 
      status: "Screened", 
      color: "#60a5fa", 
      bg: "rgba(96, 165, 250, 0.15)"
    },
    { 
      name: "Dother Brahy", 
      sub: "Last Candidate", 
      role: "Senior AI Engineer", 
      status: "Shortlisted", 
      color: "#34d399", 
      bg: "rgba(52, 211, 153, 0.15)"
    },
    { 
      name: "Abhishek Banoatar", 
      sub: "Last Candidate", 
      role: "Engineers", 
      status: "Shortlisted", 
      color: "#fbbf24", 
      bg: "rgba(251, 191, 36, 0.15)"
    }
  ];

  // Replicate exact mockup list from Image 1 for Candidate Ranking Card
  const rankingCandidates = [
    { 
      name: "Abhishek Singh", 
      sub: "Candidate", 
      role: "Engineer", 
      skill: "Python Ari skills", 
      score: 92, 
      dotColor: "#34d399"
    },
    { 
      name: "Abhishek Sam..", 
      sub: "Candidate", 
      role: "Engineer", 
      skill: "Python Ari skills", 
      score: 88, 
      dotColor: "#34d399"
    },
    { 
      name: "Diont Aluss", 
      sub: "Candidate", 
      role: "Shortlisted", 
      skill: "Extracted skill", 
      score: 88, 
      dotColor: "#f87171"
    },
    { 
      name: "Sanra Hsong", 
      sub: "Candidate", 
      role: "Engineer", 
      skill: "Kubernetes", 
      score: 75, 
      dotColor: "#f87171"
    },
    { 
      name: "Jaman Sanah", 
      sub: "Candidate", 
      role: "Engineer", 
      skill: "AWS Kafka", 
      score: 75, 
      dotColor: "#34d399"
    },
    { 
      name: "Jarny Shiavor", 
      sub: "Refer", 
      role: "Shortlisted", 
      skill: "AIF Sarer", 
      score: 75, 
      dotColor: "#34d399"
    }
  ];

  return (
    <div className="dashboard-grid animate-fade-in" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      
      {/* TOP ROW */}
      <div className="grid-top-row">
        
        {/* Card 1: Resume Scanned / Recent Uploads List */}
        <div className="glass-card" style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "12px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h2 className="card-heading" style={{ fontSize: "14px", fontWeight: "600", color: "var(--text-primary)" }}>
              Resume Scanned: <span style={{ color: "#34d399" }}>1,452</span>
            </h2>
            <button className="stat-btn" onClick={onUploadClick} style={{
              fontSize: "11px",
              padding: "4px 10px",
              borderRadius: "6px",
              backgroundColor: "rgba(255,255,255,0.05)",
              border: "1px solid var(--border-color)",
              color: "var(--text-secondary)",
              cursor: "pointer"
            }}>
              Recent uploads
            </button>
          </div>

          <div className="custom-table-wrapper" style={{ flex: 1, overflow: "visible" }}>
            <table className="custom-table" style={{ fontSize: "11px", width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border-color)", textAlign: "left" }}>
                  <th style={{ padding: "8px 4px", color: "var(--text-muted)", fontWeight: "500" }}>Candidate Name</th>
                  <th style={{ padding: "8px 4px", color: "var(--text-muted)", fontWeight: "500" }}>Role</th>
                  <th style={{ padding: "8px 4px", color: "var(--text-muted)", fontWeight: "500" }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {scannedResumes.map((cand, idx) => (
                  <tr key={idx} style={{ borderBottom: "1px solid rgba(255,255,255,0.02)", height: "46px" }}>
                    <td style={{ padding: "6px 4px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <AvatarIcon name={cand.name} size={26} />
                        <div style={{ display: "flex", flexDirection: "column" }}>
                          <span style={{ fontWeight: "600", color: "var(--text-primary)", fontSize: "11px" }}>{cand.name}</span>
                          <span style={{ fontSize: "9px", color: "var(--text-muted)" }}>{cand.sub}</span>
                        </div>
                      </div>
                    </td>
                    <td style={{ color: "var(--text-secondary)", fontSize: "11px", padding: "6px 4px" }}>{cand.role}</td>
                    <td style={{ padding: "6px 4px" }}>
                      <span style={{
                        backgroundColor: cand.bg,
                        color: cand.color,
                        fontSize: "10px",
                        padding: "3px 8px",
                        borderRadius: "12px",
                        fontWeight: "600",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "5px"
                      }}>
                        <span style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: cand.color }}></span>
                        {cand.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Card 2: Skill Distribution Donut */}
        <div className="glass-card" style={{ padding: "20px", display: "flex", flexDirection: "column" }}>
          <div className="stat-title" style={{ marginBottom: "12px", fontSize: "14px", fontWeight: "600" }}>Skill Distribution</div>
          <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <DonutChart data={{ Java: 25, Python: 35, AWS: 20, Docker: 20 }} />
          </div>
        </div>

        {/* Card 3: Experience Trend Bar Chart */}
        <div className="glass-card" style={{ padding: "20px", display: "flex", flexDirection: "column" }}>
          <div className="stat-title" style={{ marginBottom: "12px", fontSize: "14px", fontWeight: "600" }}>Experience Trend</div>
          <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <BarChart />
          </div>
        </div>
      </div>

      {/* BOTTOM ROW */}
      <div className="grid-bottom-row">
        
        {/* Card 4: Candidate Ranking Table */}
        <div className="glass-card" style={{ padding: "20px" }}>
          <div className="card-header-row" style={{ marginBottom: "12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h2 className="card-heading" style={{ fontSize: "14px", fontWeight: "600" }}>Candidate Ranking</h2>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", backgroundColor: "rgba(255,255,255,0.04)", padding: "4px 10px", borderRadius: "6px", border: "1px solid var(--border-color)", color: "var(--text-secondary)" }}>
              <span>⚙</span>
              <span>Matching</span>
              <span>▾</span>
            </div>
          </div>

          <div className="custom-table-wrapper" style={{ overflow: "visible" }}>
            <table className="custom-table" style={{ fontSize: "11px", width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border-color)", textAlign: "left" }}>
                  <th style={{ padding: "8px 4px", color: "var(--text-muted)", fontWeight: "500" }}>Name</th>
                  <th style={{ padding: "8px 4px", color: "var(--text-muted)", fontWeight: "500" }}>Role</th>
                  <th style={{ padding: "8px 4px", color: "var(--text-muted)", fontWeight: "500" }}>Extracted Skills</th>
                  <th style={{ padding: "8px 4px", color: "var(--text-muted)", fontWeight: "500" }}>ATS Score</th>
                </tr>
              </thead>
              <tbody>
                {rankingCandidates.map((cand, idx) => (
                  <tr key={idx} style={{ borderBottom: "1px solid rgba(255,255,255,0.02)", height: "42px" }}>
                    <td style={{ padding: "4px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <AvatarIcon name={cand.name} size={24} />
                        <div style={{ display: "flex", flexDirection: "column" }}>
                          <span style={{ fontWeight: "600", color: "var(--text-primary)", fontSize: "11px" }}>{cand.name}</span>
                          <span style={{ fontSize: "9px", color: "var(--text-muted)" }}>{cand.sub}</span>
                        </div>
                      </div>
                    </td>
                    <td style={{ color: "var(--text-secondary)", fontSize: "11px", padding: "4px" }}>{cand.role}</td>
                    <td style={{ padding: "4px" }}>
                      <span className="skill-tag" style={{
                        backgroundColor: "rgba(96, 165, 250, 0.1)",
                        borderColor: "rgba(96, 165, 250, 0.25)",
                        color: "#60a5fa",
                        fontSize: "9px",
                        padding: "3px 8px",
                        borderRadius: "4px",
                        display: "inline-block",
                        whiteSpace: "nowrap"
                      }}>
                        {cand.skill}
                      </span>
                    </td>
                    <td style={{ padding: "4px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <span style={{ fontWeight: "700", color: cand.score >= 85 ? "#34d399" : cand.score >= 80 ? "#34d399" : "#34d399" }}>{cand.score}%</span>
                        <span style={{
                          width: "7px",
                          height: "7px",
                          borderRadius: "50%",
                          backgroundColor: cand.dotColor,
                          boxShadow: `0 0 6px ${cand.dotColor}`
                        }}></span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Card 5: Job Matching Detail Card matching Image 1 */}
        <div className="glass-card matching-card" style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "14px" }}>
          <div className="card-header-row" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--border-color)", paddingBottom: "10px" }}>
            <h2 className="card-heading" style={{ fontSize: "14px", fontWeight: "600" }}>Job Matching</h2>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", backgroundColor: "rgba(255,255,255,0.04)", padding: "4px 10px", borderRadius: "6px", border: "1px solid var(--border-color)", color: "var(--text-secondary)" }}>
              <span>✨</span>
              <span>Matchings</span>
              <span>▾</span>
            </div>
          </div>

          <div className="grid-2col-matching">
            
            {/* Left Sub-column: Job Description details */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <div>
                <h3 style={{ fontSize: "14px", fontWeight: "700", color: "var(--text-primary)" }}>Senior AI Engineer</h3>
                <span style={{ fontSize: "10px", color: "var(--text-muted)", fontWeight: "600", display: "block", marginTop: "4px" }}>Job Description</span>
              </div>
              <p style={{ fontSize: "10px", color: "var(--text-secondary)", lineHeight: "1.4" }}>
                Senior AI Engineer is expected to complete end-to-end tasks from architecture engineering, building an automated pipeline targeting solution to implementation.
              </p>
              <div>
                <span style={{ fontSize: "10px", color: "var(--text-muted)", fontWeight: "600", display: "block", marginBottom: "4px" }}>Implications</span>
                <ul style={{ paddingLeft: "12px", fontSize: "10px", color: "var(--text-secondary)", display: "flex", flexDirection: "column", gap: "4px" }}>
                  <li>Demands key skills regarding candidate matching requirements.</li>
                  <li>Suitable candidate AI Engineering.</li>
                  <li>Development steps in AI components implementation.</li>
                  <li>Architecture consensus.</li>
                </ul>
              </div>
            </div>

            {/* Right Sub-column: Candidate Alignment */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", borderLeft: "1px solid var(--border-color)", paddingLeft: "14px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <AvatarIcon name="Abhishek Singh" size={28} glow={true} style={{ border: "1.5px solid #60a5fa" }} />
                <div>
                  <h4 style={{ fontSize: "11px", fontWeight: "600", color: "var(--text-primary)" }}>Abhishek Singh</h4>
                  <span style={{ fontSize: "9px", color: "var(--text-muted)" }}>(Candidate)</span>
                </div>
              </div>

              <div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "10px", marginBottom: "4px" }}>
                  <span style={{ color: "var(--text-secondary)" }}>Resume Match: <strong style={{ color: "#34d399" }}>92%</strong></span>
                </div>
                <div className="progress-track" style={{ width: "100%", height: "5px", backgroundColor: "rgba(255,255,255,0.06)", borderRadius: "4px", overflow: "hidden" }}>
                  <div className="progress-fill" style={{ width: "92%", height: "100%", backgroundColor: "#34d399", boxShadow: "0 0 8px rgba(52, 211, 153, 0.5)" }}></div>
                </div>
              </div>

              <div>
                <span style={{ fontSize: "9px", color: "var(--text-muted)", fontWeight: "600", display: "block", marginBottom: "4px" }}>Missing Skills</span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
                  {["Kubernetes", "Kafka", "Kafka", "Kubernetes"].map((skill, idx) => (
                    <span key={idx} style={{
                      fontSize: "8.5px",
                      backgroundColor: "rgba(239, 68, 68, 0.15)",
                      border: "1px solid rgba(239, 68, 68, 0.3)",
                      color: "#fca5a5",
                      borderRadius: "4px",
                      padding: "2px 6px",
                      fontWeight: "500"
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span style={{ fontSize: "9px", color: "var(--text-muted)", fontWeight: "600", display: "block", marginBottom: "4px" }}>Personalized Roadmap</span>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  {[
                    { name: "Docker", url: "https://dockers/docker..." },
                    { name: "AWS", url: "https://aws.com/AWS..." }
                  ].map((link, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontSize: "9.5px",
                        color: "var(--text-secondary)",
                        padding: "4px 6px",
                        borderRadius: "4px",
                        backgroundColor: "rgba(255,255,255,0.03)",
                        border: "1px solid var(--border-color)"
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", overflow: "hidden" }}>
                        <span style={{ color: "#60a5fa", fontWeight: "bold" }}>●</span>
                        <span style={{ fontWeight: "600", color: "#ffffff" }}>{link.name}</span>
                        <span style={{ color: "var(--text-muted)", fontSize: "8.5px", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>{link.url}</span>
                      </div>
                      <span style={{ fontSize: "10px", color: "var(--text-muted)" }}>›</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
