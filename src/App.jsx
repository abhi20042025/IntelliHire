import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DashboardView from "./components/DashboardView";
import ResumeScreenerView from "./components/ResumeScreenerView";
import CandidateComparisonView from "./components/CandidateComparisonView";
import InterviewPrepView from "./components/InterviewPrepView";
import JobMatchingView from "./components/JobMatchingView";
import CareerMentor from "./components/CareerMentor";
import { initialCandidates, initialUploadHistory } from "./data/mockCandidates";

function App() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [candidates, setCandidates] = useState(initialCandidates);
  const [selectedCandidate, setSelectedCandidate] = useState(initialCandidates[0]);
  const [mentorOpen, setMentorOpen] = useState(false);
  const [uploadHistory, setUploadHistory] = useState(initialUploadHistory);
  const [theme, setTheme] = useState("dark");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.add("light-theme");
    } else {
      document.body.classList.remove("light-theme");
    }
  }, [theme]);

  // Close sidebar on ESC key press
  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") setSidebarOpen(false); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const handleUploadRedirect = () => setActiveTab("screener");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <DashboardView
            candidates={candidates}
            selectedCandidate={selectedCandidate}
            setSelectedCandidate={setSelectedCandidate}
            onUploadClick={handleUploadRedirect}
          />
        );
      case "screener":
        return (
          <ResumeScreenerView
            candidates={candidates}
            setCandidates={setCandidates}
            uploadHistory={uploadHistory}
            setUploadHistory={setUploadHistory}
          />
        );
      case "comparison":
        return <CandidateComparisonView candidates={candidates} />;
      case "prep":
        return <InterviewPrepView />;
      case "matching":
        return (
          <JobMatchingView
            candidates={candidates}
            selectedCandidate={selectedCandidate}
            setSelectedCandidate={setSelectedCandidate}
          />
        );
      default:
        return (
          <DashboardView
            candidates={candidates}
            selectedCandidate={selectedCandidate}
            setSelectedCandidate={setSelectedCandidate}
            onUploadClick={handleUploadRedirect}
          />
        );
    }
  };

  return (
    <>
      {/* ── Mobile sidebar + backdrop ─────────────────────────────────
          Rendered at React root level — outside all overflow:hidden
          containers — so position:fixed works without clipping. */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={(tab) => { setActiveTab(tab); setSidebarOpen(false); }}
        mentorOpen={mentorOpen}
        setMentorOpen={setMentorOpen}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* ── Main app shell ───────────────────────────────────────── */}
      <div className={`liquid-display-container ${theme === "light" ? "light-theme" : ""}`}>
        <div className="liquid-blob liquid-blob-1"></div>
        <div className="liquid-blob liquid-blob-2"></div>
        <div className="liquid-blob liquid-blob-3"></div>

        <div className="app-container">
          <main className="main-content">
            <Header
              activeTab={activeTab}
              theme={theme}
              toggleTheme={toggleTheme}
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />
            <div className="content-pane">{renderContent()}</div>
          </main>

          <CareerMentor
            isOpen={mentorOpen}
            onClose={() => setMentorOpen(false)}
            candidates={candidates}
          />
        </div>
      </div>
    </>
  );
}

export default App;
