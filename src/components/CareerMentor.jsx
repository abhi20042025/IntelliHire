import React, { useState, useRef, useEffect } from "react";

export default function CareerMentor({ isOpen, onClose, candidates }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "mentor",
      text: "Hello! I am your AI Career Mentor. I've reviewed your latest candidate recommendations.",
      timestamp: "10:30 AM"
    },
    {
      id: 2,
      sender: "mentor",
      text: "For the Senior AI Engineer role, Abhishek Singh is currently the top-screened candidate. He has a 92% match score, but needs to learn Kubernetes.",
      timestamp: "10:31 AM"
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: inputValue,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);
    const query = inputValue.toLowerCase();
    setInputValue("");

    // Simulate AI response delay
    setTimeout(() => {
      let responseText = "I'm analyzing your request. You can check the Candidate Comparison tab to see side-by-side matches, or go to Resume Screener to scan new uploads.";

      if (query.includes("abhishek") || query.includes("singh")) {
        responseText = "Abhishek Singh is a stellar choice for the Senior AI Engineer position. His ATS compatibility score is 92%. However, he misses 'Kubernetes' and 'Kafka' in his recent resume (v3_final.pdf). He should check out the Docker and Kubernetes Udemy courses in his learning roadmap.";
      } else if (query.includes("dother") || query.includes("brahy")) {
        responseText = "Dother Brahy has an 86% ATS score. She is very strong in Java and Python, but lacks AWS cloud deployment experience compared to Abhishek Singh.";
      } else if (query.includes("best") || query.includes("top") || query.includes("highest")) {
        const topCandidate = [...candidates].sort((a, b) => b.atsScore - a.atsScore)[0];
        responseText = `Currently, the highest-ranking candidate is ${topCandidate.name} with a score of ${topCandidate.atsScore}%, active in the "${topCandidate.role}" pipeline.`;
      } else if (query.includes("kubernetes") || query.includes("k8s")) {
        responseText = "Many of your Senior AI candidates are missing Kubernetes skills. I recommend setting up a short training course for new hires, or prioritizing candidates like Sanra Hsong who already has Kubernetes and Docker proficiency.";
      } else if (query.includes("hi") || query.includes("hello") || query.includes("hey")) {
        responseText = "Hello there! How can I help you evaluate candidates or prepare for upcoming interviews today?";
      }

      const mentorResponse = {
        id: Date.now() + 1,
        sender: "mentor",
        text: responseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, mentorResponse]);
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="career-mentor-floating glass-card">
      <div className="mentor-header">
        <div className="mentor-profile-info">
          <div className="mentor-bot-icon" style={{ width: "24px", height: "24px" }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <rect x="3" y="11" width="18" height="10" rx="2" />
              <circle cx="12" cy="5" r="2" />
              <path d="M12 7v4" />
            </svg>
          </div>
          <div>
            <h3 style={{ fontSize: "13px", fontWeight: "600" }}>AI Career Mentor</h3>
            <span style={{ fontSize: "9px", color: "var(--color-green)" }}>● online</span>
          </div>
        </div>
        <button className="close-btn" onClick={onClose}>×</button>
      </div>

      <div className="mentor-messages">
        {messages.map((msg) => (
          <div key={msg.id} className={`message-bubble ${msg.sender}`}>
            <div>{msg.text}</div>
            <div className="message-time">{msg.timestamp}</div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSend} className="mentor-input-row">
        <input
          type="text"
          className="mentor-input"
          placeholder="Ask mentor..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className="mentor-send-btn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </form>
    </div>
  );
}
