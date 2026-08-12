import React from "react";
import AvatarIcon from "./AvatarIcon";

export default function Header({ activeTab, theme, toggleTheme }) {
  const titles = {
    dashboard: "Dashboard",
    screener: "Resume Screener",
    comparison: "Candidate Comparison",
    prep: "AI Interview Preparation",
    matching: "Job Matching Analysis"
  };

  return (
    <header className="header">
      <h1 className="header-title">{titles[activeTab] || "Dashboard"}</h1>

      <div className="header-actions">
        {/* Theme Toggle Button */}
        <button 
          className="header-icon-btn" 
          onClick={toggleTheme} 
          title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
          style={{
            cursor: "pointer",
            transition: "all 0.3s ease",
            transform: theme === "light" ? "rotate(180deg)" : "rotate(0deg)"
          }}
        >
          {theme === "dark" ? (
            /* Sun Icon when in Dark Mode to switch to Light */
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          ) : (
            /* Moon Icon when in Light Mode to switch to Dark */
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>

        {/* Messages Icon */}
        <button className="header-icon-btn" title="Messages">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        </button>

        {/* Notifications Icon with active badge */}
        <button className="header-icon-btn" style={{ position: "relative" }} title="Notifications">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
          <span style={{
            position: "absolute",
            top: "6px",
            right: "6px",
            width: "8px",
            height: "8px",
            backgroundColor: "#f87171",
            borderRadius: "50%",
            boxShadow: "0 0 6px #f87171"
          }}></span>
        </button>

        {/* User Info */}
        <div className="user-profile">
          <AvatarIcon name="Admin User" size={34} glow={true} />
        </div>
      </div>
    </header>
  );
}
