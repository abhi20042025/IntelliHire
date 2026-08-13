import React, { useState } from "react";
import { jobPostings } from "../data/mockCandidates";
import AvatarIcon from "./AvatarIcon";

export default function JobMatchingView({ candidates, selectedCandidate, setSelectedCandidate }) {
  const [selectedJobId, setSelectedJobId] = useState(jobPostings[0]?.id || "");
  const activeJob = jobPostings.find((job) => job.id === selectedJobId);

  return (
    <div className="dashboard-grid animate-fade-in grid-jobmatch">
      {/* Left Column: Job Description & Details */}
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div className="glass-card" style={{ padding: "24px" }}>
          <div className="card-header-row">
            <h2 className="card-heading">Available Job Roles</h2>
            <select
              className="card-select"
              value={selectedJobId}
              onChange={(e) => setSelectedJobId(e.target.value)}
            >
              {jobPostings.map((job) => (
                <option key={job.id} value={job.id}>{job.title}</option>
              ))}
            </select>
          </div>

          {activeJob && (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "12px" }}>
              <div>
                <h3 className="role-title" style={{ fontSize: "20px" }}>{activeJob.title}</h3>
                <span className="section-subhead" style={{ color: "var(--color-purple)" }}>Job Specifications</span>
              </div>

              <div>
                <span className="section-subhead">Role Overview</span>
                <p className="desc-text" style={{ marginTop: "4px", fontSize: "13px" }}>
                  {activeJob.description}
                </p>
              </div>

              <div>
                <span className="section-subhead">Key Implications & Requirements</span>
                <ul className="bullet-list" style={{ marginTop: "8px", fontSize: "12px", gap: "10px" }}>
                  {activeJob.implications.map((imp, idx) => (
                    <li key={idx} style={{ lineHeight: "1.4" }}>{imp}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right Column: Candidate Selection & Roadmap */}
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div className="glass-card" style={{ padding: "24px" }}>
          <div className="card-header-row">
            <h2 className="card-heading">Select Candidate</h2>
            <select
              className="card-select"
              value={selectedCandidate?.id || ""}
              onChange={(e) => {
                const found = candidates.find(c => c.id === e.target.value);
                if (found) setSelectedCandidate(found);
              }}
            >
              {candidates.map((cand) => (
                <option key={cand.id} value={cand.id}>{cand.name}</option>
              ))}
            </select>
          </div>

          {selectedCandidate ? (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <AvatarIcon name={selectedCandidate.name} size={42} glow={true} style={{ border: "1.5px solid var(--color-blue)" }} />
                <div>
                  <h4 style={{ fontSize: "15px", fontWeight: "600" }}>{selectedCandidate.name}</h4>
                  <span className="desc-text" style={{ fontSize: "12px" }}>Current Role: {selectedCandidate.role}</span>
                </div>
              </div>

              {/* ATS Breakdown subscores */}
              <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "12px" }}>
                <span className="section-subhead">ATS Breakdown</span>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "8px" }}>
                  {Object.entries(selectedCandidate.atsBreakdown || {
                    overall: selectedCandidate.atsScore,
                    keyword: 95,
                    formatting: 88,
                    grammar: 90,
                    experience: 94,
                    projects: 96
                  }).map(([key, val]) => (
                    <div key={key} style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px" }}>
                        <span style={{ textTransform: "capitalize", color: "var(--text-secondary)" }}>
                          {key === "overall" ? "Overall ATS" : key.replace(/([A-Z])/g, ' $1')}
                        </span>
                        <span style={{ fontWeight: "600" }}>{val}%</span>
                      </div>
                      <div className="progress-track" style={{ width: "100%", height: "4px" }}>
                        <div
                          className="progress-fill"
                          style={{
                            width: `${val}%`,
                            backgroundColor: key === "overall" ? "var(--color-blue)" : "var(--color-purple)",
                            boxShadow: `0 0 6px ${key === "overall" ? "var(--color-blue-glow)" : "var(--color-purple-glow)"}`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Resume Summary Bullet Lists */}
              <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "12px" }}>
                <span className="section-subhead">AI Resume Summary</span>
                
                <div style={{ marginTop: "8px" }}>
                  <div style={{ fontSize: "11px", fontWeight: "600", color: "var(--color-green)", marginBottom: "6px" }}>
                    Professional Summary
                  </div>
                  <ul style={{ listStyle: "none", fontSize: "11px", display: "flex", flexDirection: "column", gap: "6px" }}>
                    {selectedCandidate.professionalSummary.map((bullet, idx) => (
                      <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "6px" }}>
                        <span style={{ color: "var(--color-green)", fontWeight: "bold" }}>✓</span>
                        <span style={{ color: "var(--text-primary)" }}>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginTop: "12px" }}>
                  <div style={{ fontSize: "11px", fontWeight: "600", color: "var(--color-red)", marginBottom: "6px" }}>
                    Weaknesses
                  </div>
                  <ul style={{ listStyle: "none", fontSize: "11px", display: "flex", flexDirection: "column", gap: "6px" }}>
                    {selectedCandidate.weaknesses.map((bullet, idx) => (
                      <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "6px" }}>
                        <span style={{ color: "var(--color-red)", fontWeight: "bold" }}>✗</span>
                        <span style={{ color: "var(--text-secondary)" }}>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "12px" }}>
                <span className="section-subhead">Missing Keywords/Skills</span>
                <div className="missing-skills-tags" style={{ marginTop: "6px" }}>
                  {selectedCandidate.missingSkills.map((skill, idx) => (
                    <span key={idx} className="missing-tag">{skill}</span>
                  ))}
                </div>
              </div>

              <div>
                <span className="section-subhead">Personal Roadmap</span>
                <div className="roadmaps-container" style={{ marginTop: "8px" }}>
                  {selectedCandidate.roadmap.map((item, idx) => (
                    <div key={idx} className="roadmap-item">
                      <div className="roadmap-tech">
                        <span style={{ color: "var(--color-purple)", fontWeight: "bold" }}>●</span>
                        <span>{item.skill}</span>
                      </div>
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className="roadmap-link">
                        Access Resources
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div style={{ minHeight: "150px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", fontSize: "13px" }}>
              Please select a candidate to analyze matching details.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
