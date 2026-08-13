import React, { useState } from "react";
import { mockInterviewQuestions } from "../data/mockCandidates";

export default function InterviewPrepView() {
  const [activeType, setActiveType] = useState("Technical");
  const [userAnswer, setUserAnswer] = useState("");
  const [evalResult, setEvalResult] = useState(null);
  const [currentQuestions, setCurrentQuestions] = useState(
    mockInterviewQuestions["Technical"]
  );
  const [selectedQuestion, setSelectedQuestion] = useState(
    mockInterviewQuestions["Technical"][0]
  );

  const questionTypes = ["Technical", "HR", "Coding", "Behavioral"];

  const handleTypeChange = (type) => {
    setActiveType(type);
    setCurrentQuestions(mockInterviewQuestions[type]);
    setSelectedQuestion(mockInterviewQuestions[type][0]);
    setUserAnswer("");
    setEvalResult(null);
  };

  const handleGenerateQuestions = () => {
    const questions = mockInterviewQuestions[activeType];
    // Rotate to next question in the list
    const currentIdx = questions.findIndex(q => q.id === selectedQuestion?.id);
    const nextIdx = (currentIdx + 1) % questions.length;
    setSelectedQuestion(questions[nextIdx]);
    setUserAnswer("");
    setEvalResult(null);
  };

  const handleEvaluate = () => {
    if (!userAnswer.trim()) return;
    const wordCount = userAnswer.trim().split(/\s+/).length;
    const score = Math.min(100, Math.max(50, 60 + wordCount * 2));
    const clampedScore = Math.min(score, 98);

    const feedbackMap = {
      Technical: "Good technical depth! Consider elaborating on trade-offs and real-world examples.",
      HR: "Strong personal framing. Try to quantify impact where possible.",
      Coding: "Solid approach. Always mention time and space complexity in your response.",
      Behavioral: "Great STAR structure. Make your outcome metrics more specific."
    };

    setEvalResult({
      score: clampedScore,
      feedback: feedbackMap[activeType],
      keyPoints: selectedQuestion?.keyPoints || []
    });
  };

  return (
    <div className="animate-fade-in" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div>
        <span style={{ fontSize: "10px", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: "700" }}>AI Interview Preparation</span>
        <h2 className="card-heading" style={{ fontSize: "18px", marginTop: "2px" }}>Interview Preparation Suite</h2>
        <p style={{ fontSize: "12px", color: "var(--text-secondary)", marginTop: "4px" }}>
          Practice real interview questions by category. Type your answer and get instant AI feedback.
        </p>
      </div>

      <div className="grid-prep-2col">
        {/* Left Side: Question Type Selector */}
        <div className="glass-card" style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "16px" }}>
          <span style={{ fontSize: "11px", fontWeight: "600", color: "var(--text-secondary)" }}>Question Category</span>
          <div className="grid-2col-equal">
            {questionTypes.map((type) => (
              <button
                key={type}
                onClick={() => handleTypeChange(type)}
                style={{
                  padding: "8px 12px",
                  borderRadius: "6px",
                  fontSize: "12px",
                  fontWeight: "600",
                  border: activeType === type ? "1.5px solid #60a5fa" : "1px solid var(--border-color)",
                  backgroundColor: activeType === type ? "rgba(96, 165, 250, 0.2)" : "rgba(255,255,255,0.03)",
                  color: activeType === type ? "#60a5fa" : "var(--text-secondary)",
                  cursor: "pointer",
                  transition: "all 0.2s ease"
                }}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Key Points hint */}
          {selectedQuestion?.keyPoints?.length > 0 && (
            <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "12px" }}>
              <span style={{ fontSize: "11px", fontWeight: "600", color: "var(--text-secondary)", display: "block", marginBottom: "8px" }}>
              Key Points to Cover
              </span>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" }}>
                {selectedQuestion.keyPoints.map((kp, idx) => (
                  <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "6px", fontSize: "11px" }}>
                    <span style={{ color: "#60a5fa", fontWeight: "bold", flexShrink: 0 }}>›</span>
                    <span style={{ color: "var(--text-secondary)" }}>{kp}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button
            onClick={handleEvaluate}
            disabled={!userAnswer.trim()}
            style={{
              marginTop: "auto",
              padding: "10px",
              borderRadius: "8px",
              background: userAnswer.trim()
                ? "linear-gradient(135deg, #3b82f6, #60a5fa)"
                : "rgba(255,255,255,0.06)",
              color: userAnswer.trim() ? "#ffffff" : "var(--text-muted)",
              fontWeight: "600",
              fontSize: "12px",
              border: "none",
              cursor: userAnswer.trim() ? "pointer" : "not-allowed",
              boxShadow: userAnswer.trim() ? "0 0 12px rgba(59, 130, 246, 0.4)" : "none",
              transition: "all 0.2s ease"
            }}
          >
            Evaluate My Answer
          </button>
        </div>

        {/* Right Side: Question Display & Answer */}
        <div className="glass-card" style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "14px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "12px", fontWeight: "600", color: "var(--text-primary)" }}>
              {activeType} Question
            </span>
            <button
              onClick={handleGenerateQuestions}
              style={{
                padding: "6px 12px",
                borderRadius: "6px",
                background: "linear-gradient(135deg, #7c3aed, #a78bfa)",
                color: "#ffffff",
                fontSize: "11px",
                fontWeight: "600",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 0 10px rgba(124, 58, 237, 0.35)",
                transition: "all 0.2s ease"
              }}
            >
              Next Question
            </button>
          </div>

          {/* Current Question */}
          {selectedQuestion && (
            <div style={{
              padding: "14px",
              borderRadius: "8px",
              backgroundColor: "rgba(96, 165, 250, 0.06)",
              border: "1px solid rgba(96, 165, 250, 0.2)",
              fontSize: "13px",
              color: "var(--text-primary)",
              lineHeight: "1.6",
              fontWeight: "500"
            }}>
              {selectedQuestion.question}
            </div>
          )}

          {/* All available questions list */}
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <span style={{ fontSize: "10px", color: "var(--text-muted)", fontWeight: "600", textTransform: "uppercase" }}>
              All {activeType} Questions
            </span>
            {currentQuestions.map((q) => (
              <div
                key={q.id}
                onClick={() => { setSelectedQuestion(q); setUserAnswer(""); setEvalResult(null); }}
                style={{
                  padding: "10px 12px",
                  borderRadius: "6px",
                  backgroundColor: selectedQuestion?.id === q.id ? "rgba(96, 165, 250, 0.1)" : "rgba(255,255,255,0.02)",
                  border: `1px solid ${selectedQuestion?.id === q.id ? "rgba(96, 165, 250, 0.3)" : "var(--border-color)"}`,
                  fontSize: "11px",
                  color: selectedQuestion?.id === q.id ? "#60a5fa" : "var(--text-secondary)",
                  lineHeight: "1.4",
                  cursor: "pointer",
                  transition: "all 0.2s ease"
                }}
              >
                {q.question}
              </div>
            ))}
          </div>

          <textarea
            placeholder="Type your answer here... Be as detailed as possible."
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            style={{
              width: "100%",
              height: "90px",
              backgroundColor: "rgba(0,0,0,0.3)",
              border: "1px solid var(--border-color)",
              borderRadius: "6px",
              padding: "10px",
              color: "#ffffff",
              fontSize: "11px",
              resize: "none",
              boxSizing: "border-box",
              outline: "none",
              fontFamily: "inherit"
            }}
          />

          {evalResult && (
            <div style={{ padding: "12px", borderRadius: "8px", backgroundColor: "rgba(52, 211, 153, 0.08)", border: "1px solid rgba(52, 211, 153, 0.25)", fontSize: "11px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                <strong style={{ color: "#34d399", fontSize: "13px" }}>Score: {evalResult.score}%</strong>
                <div style={{ height: "6px", width: "120px", backgroundColor: "rgba(255,255,255,0.06)", borderRadius: "4px", overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${evalResult.score}%`, backgroundColor: "#34d399", boxShadow: "0 0 8px rgba(52,211,153,0.5)", transition: "width 0.6s ease" }} />
                </div>
              </div>
              <p style={{ color: "var(--text-secondary)", marginBottom: "6px" }}>{evalResult.feedback}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
