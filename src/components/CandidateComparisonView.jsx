import React, { useState } from "react";
import { RadarChart } from "./Charts";
import AvatarIcon from "./AvatarIcon";

export default function CandidateComparisonView({ candidates }) {
  const [candidate1Id, setCandidate1Id] = useState(candidates[0]?.id || "");
  const [candidate2Id, setCandidate2Id] = useState(candidates[1]?.id || "");

  const c1 = candidates.find((c) => c.id === candidate1Id);
  const c2 = candidates.find((c) => c.id === candidate2Id);

  // Extract skills distributions for radar comparison
  const getRadarValues = (candidate) => {
    if (!candidate) return [0, 0, 0, 0, 0];
    return [
      candidate.skillsDistribution.AWS * 2,
      candidate.skillsDistribution.Docker * 4,
      candidate.skillsDistribution.Python * 2,
      candidate.skillsDistribution.Java * 2,
      candidate.extractedSkills.includes("Kubernetes") ? 80 : 30
    ];
  };

  return (
    <div className="animate-fade-in" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {/* Selectors */}
      <div className="compare-selectors">
        <div className="glass-card selector-box">
          <label className="select-title">Compare Candidate A</label>
          <select
            className="card-select"
            value={candidate1Id}
            onChange={(e) => setCandidate1Id(e.target.value)}
            style={{ width: "100%", padding: "10px", fontSize: "14px" }}
          >
            {candidates.map((c) => (
              <option key={c.id} value={c.id}>{c.name} ({c.role})</option>
            ))}
          </select>
        </div>

        <div className="glass-card selector-box">
          <label className="select-title">Compare Candidate B</label>
          <select
            className="card-select"
            value={candidate2Id}
            onChange={(e) => setCandidate2Id(e.target.value)}
            style={{ width: "100%", padding: "10px", fontSize: "14px" }}
          >
            {candidates.map((c) => (
              <option key={c.id} value={c.id}>{c.name} ({c.role})</option>
            ))}
          </select>
        </div>
      </div>

      {/* Side by side comparison layout */}
      <div className="comparison-grid">
        {/* Candidate A Card */}
        {c1 ? (
          <div className="glass-card compare-card">
            <div className="compare-avatar-header">
              <AvatarIcon name={c1.name} size={48} glow={true} />
              <div>
                <h3 className="compare-name">{c1.name}</h3>
                <span className="compare-role">{c1.role}</span>
              </div>
            </div>

            <div className="comparison-metrics">
              <div className="metric-row">
                <span className="metric-name">ATS Score</span>
                <span className="metric-val" style={{ color: "var(--color-green)", fontWeight: "bold" }}>
                  {c1.atsScore}%
                </span>
              </div>
              <div className="metric-row">
                <span className="metric-name">Experience</span>
                <span className="metric-val">{c1.experience} Years</span>
              </div>
              <div className="metric-row" style={{ flexDirection: "column", gap: "6px" }}>
                <span className="metric-name" style={{ alignSelf: "flex-start" }}>Summary</span>
                <span className="desc-text" style={{ fontSize: "12px" }}>{c1.experienceBreakdown}</span>
              </div>
              <div className="metric-row" style={{ flexDirection: "column", gap: "6px" }}>
                <span className="metric-name" style={{ alignSelf: "flex-start" }}>Extracted Skills</span>
                <div className="skill-tag-list" style={{ marginTop: "4px" }}>
                  {c1.extractedSkills.map((s, idx) => (
                    <span key={idx} className="skill-tag">{s}</span>
                  ))}
                </div>
              </div>
              <div className="metric-row" style={{ flexDirection: "column", gap: "6px" }}>
                <span className="metric-name" style={{ alignSelf: "flex-start" }}>Missing Skills</span>
                <div className="missing-skills-tags" style={{ marginTop: "4px" }}>
                  {c1.missingSkills.map((s, idx) => (
                    <span key={idx} className="missing-tag">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="glass-card compare-card" style={{ justifyContent: "center", alignItems: "center" }}>
            Select candidate A
          </div>
        )}

        {/* Candidate B Card */}
        {c2 ? (
          <div className="glass-card compare-card">
            <div className="compare-avatar-header">
              <AvatarIcon name={c2.name} size={48} glow={true} style={{ boxShadow: "0 0 0 2px #f472b655, 0 0 10px #f472b644" }} />
              <div>
                <h3 className="compare-name">{c2.name}</h3>
                <span className="compare-role">{c2.role}</span>
              </div>
            </div>

            <div className="comparison-metrics">
              <div className="metric-row">
                <span className="metric-name">ATS Score</span>
                <span className="metric-val" style={{ color: "var(--color-pink)", fontWeight: "bold" }}>
                  {c2.atsScore}%
                </span>
              </div>
              <div className="metric-row">
                <span className="metric-name">Experience</span>
                <span className="metric-val">{c2.experience} Years</span>
              </div>
              <div className="metric-row" style={{ flexDirection: "column", gap: "6px" }}>
                <span className="metric-name" style={{ alignSelf: "flex-start" }}>Summary</span>
                <span className="desc-text" style={{ fontSize: "12px" }}>{c2.experienceBreakdown}</span>
              </div>
              <div className="metric-row" style={{ flexDirection: "column", gap: "6px" }}>
                <span className="metric-name" style={{ alignSelf: "flex-start" }}>Extracted Skills</span>
                <div className="skill-tag-list" style={{ marginTop: "4px" }}>
                  {c2.extractedSkills.map((s, idx) => (
                    <span key={idx} className="skill-tag">{s}</span>
                  ))}
                </div>
              </div>
              <div className="metric-row" style={{ flexDirection: "column", gap: "6px" }}>
                <span className="metric-name" style={{ alignSelf: "flex-start" }}>Missing Skills</span>
                <div className="missing-skills-tags" style={{ marginTop: "4px" }}>
                  {c2.missingSkills.map((s, idx) => (
                    <span key={idx} className="missing-tag">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="glass-card compare-card" style={{ justifyContent: "center", alignItems: "center" }}>
            Select candidate B
          </div>
        )}
      </div>

      {/* Radar Overlay Comparison */}
      {c1 && c2 && (
        <div className="glass-card" style={{ padding: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h2 className="card-heading" style={{ alignSelf: "flex-start", marginBottom: "10px" }}>Radar Skill Comparison</h2>
          <p style={{ fontSize: "12px", color: "var(--text-secondary)", alignSelf: "flex-start", marginBottom: "20px" }}>
            Blue area represents {c1.name}'s competencies; Pink dashed area represents {c2.name}'s competencies.
          </p>
          <RadarChart
            skills={["AWS", "Docker", "Python", "Java", "Kubernetes"]}
            values={getRadarValues(c1)}
            targetValues={getRadarValues(c2)}
          />
        </div>
      )}
    </div>
  );
}
