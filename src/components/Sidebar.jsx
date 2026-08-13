import React from "react";

export default function Sidebar({ activeTab, setActiveTab, mentorOpen, setMentorOpen, sidebarOpen, setSidebarOpen }) {
  const menuItems = [
    {
      id: "dashboard",
      label: "Recruiter Dashboard",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="9" rx="1" />
          <rect x="14" y="3" width="7" height="5" rx="1" />
          <rect x="14" y="12" width="7" height="9" rx="1" />
          <rect x="3" y="16" width="7" height="5" rx="1" />
        </svg>
      )
    },
    {
      id: "screener",
      label: "Candidate Dashboard",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      )
    },
    {
      id: "prep",
      label: "Interview Prep",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      )
    },
    {
      id: "comparison",
      label: "Analytics",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      )
    },
    {
      id: "matching",
      label: "Job Matching",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )
    }
  ];

  return (
    <aside className={`sidebar${sidebarOpen ? " sidebar-open" : ""}`}>
      <div>
        <div className="sidebar-logo">
          <div className="logo-icon">IH</div>
          <span className="logo-text">IntelliHire</span>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${activeTab === item.id ? "active" : ""}`}
              onClick={() => setActiveTab(item.id)}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* AI Career Mentor Sidebar Box (matches Mockup) */}
      <div className="sidebar-mentor-widget glass-card" style={{
        padding: "16px",
        borderRadius: "14px",
        position: "relative",
        border: "1px solid rgba(167, 139, 250, 0.2)",
        boxShadow: "0 0 12px rgba(167, 139, 250, 0.1)",
        cursor: "pointer"
      }} onClick={() => setMentorOpen(true)}>
        <button 
          style={{
            position: "absolute",
            top: "8px",
            right: "8px",
            background: "transparent",
            border: "none",
            color: "var(--color-pink)",
            fontSize: "12px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
          onClick={(e) => {
            e.stopPropagation();
            setMentorOpen(false);
          }}
        >
          ×
        </button>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
          {/* Glowing Glass Sphere Robot Container */}
          <div style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            background: "rgba(167, 139, 250, 0.1)",
            border: "1.5px solid var(--color-purple)",
            boxShadow: "0 0 10px var(--color-purple-glow)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-purple)" strokeWidth="2">
              <rect x="3" y="11" width="18" height="10" rx="2" />
              <circle cx="12" cy="5" r="2" />
              <path d="M12 7v4" />
              <line x1="8" y1="16" x2="8.01" y2="16" />
              <line x1="16" y1="16" x2="16.01" y2="16" />
            </svg>
          </div>

          <div style={{ textAlign: "center" }}>
            <h4 style={{ fontSize: "12px", fontWeight: "600", color: "var(--text-primary)" }}>AI Career Mentor</h4>
            <div style={{ fontSize: "10px", color: "var(--text-muted)", marginTop: "8px", lineHeight: "1.4" }}>
              Last message from:<br/>
              <span style={{ color: "var(--text-primary)", fontWeight: "500" }}>Mentor: Review your latest recommendations.</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
