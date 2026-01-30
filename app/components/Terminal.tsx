"use client";

import TypingText from "./TypingText";
import cv from "../data/cv.json";

export default function Terminal() {
  return (
    <div className="terminal">
      {/* Header */}
      <div className="terminal-header">
        <div className="terminal-name">{cv.name}</div>
        <div className="terminal-subtitle">{cv.title}</div>
        <div className="terminal-location">{cv.location}</div>

        <div className="terminal-links">
          Email: {cv.email} · Phone: {cv.phone} ·{" "}
          <a href={cv.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>{" "}
          ·{" "}
          <a href={cv.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>

      </div>

      {/* Body */}
      <TypingText
        text={`
Summary
-------
${cv.summary}

Skills
------
Data & Analytics:
${cv.skills.data_analytics.join(", ")}

Big Data / ETL:
${cv.skills.big_data_etl.join(", ")}

Compliance & AML:
${cv.skills.compliance_aml.join(", ")}

Machine Learning:
${cv.skills.machine_learning.join(", ")}

Visualization & Reporting:
${cv.skills.visualization.join(", ")}

Systems & Tools:
${cv.skills.systems_tools.join(", ")}

Experience
----------
${cv.experience.map(e => `
${e.role} — ${e.company}
${e.period}
${e.details.map(d => `- ${d}`).join("\n")}
`).join("\n")}

Projects
--------
${cv.projects.map(p => `
${p.name}
${p.description}
`).join("\n")}

Education
---------
${cv.education.join("\n")}

Languages
---------
${cv.languages.join(", ")}

Score
-----
${cv.score.join("\n")}

--
${cv.footer}
        `.trim()}
      />
    </div>
  );
}
