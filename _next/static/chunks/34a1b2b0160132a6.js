(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,25086,e=>{e.v({name:"Ek E",title:"Compliance Data Analytics Specialist",location:"Phnom Penh, Cambodia",email:"eek.datasc@gmail.com",phone:"012 278 716",github:"https://github.com/eek-dataguy",linkedin:"https://linkedin.com/in/eke",summary:"Data analytics professional with experience in AML, compliance monitoring, and data engineering. Strong background in ETL pipelines, transaction monitoring, analytical rule design, and automation. Focused on accuracy, reliability, and building scalable analytics for regulated environments.",skills:{data_analytics:["Python","SQL","Pandas","NumPy","Statistics","Data Cleaning","Exploratory Data Analysis"],big_data_etl:["Apache Spark","Hive","NiFi","ETL Pipelines","Data Modeling","Data Integration"],compliance_aml:["Transaction Monitoring","Alert Triggering Rules","Scenario Design","Model Validation","Risk Indicators"],machine_learning:["Feature Engineering","Classification","Regression","Rule-Based Models","Model Evaluation"],visualization:["Power BI","Tableau","Dashboards","Automated Reporting"],systems_tools:["Linux","Shell Scripting","Git","Documentation","Workflow Automation"]},experience:[{role:"Compliance Data Analytics Specialist",company:"ABA Bank",period:"May 2024 — Present",details:["Performed AML and compliance-focused data analysis on large transactional datasets","Developed and validated alert triggering rules and monitoring scenarios","Designed controls to ensure correct execution of models and rules","Automated recurring analysis and compliance reports","Supported data sourcing and data management initiatives"]},{role:"Data Engineer",company:"Cellcard",period:"Apr 2023 — May 2024",details:["Designed and built ETL pipelines using Spark, Hive, and NiFi","Integrated data from multiple internal and external sources","Developed data models for analytics and reporting","Maintained technical documentation for data processes and architectures"]}],projects:[{name:"Camformant",description:"Job and education discovery platform built with modern web and backend technologies. Focused on scalable data handling and system integration."}],education:["Software Engineering — BELTEI International University (2022–2025)","High School — Grade A, Science Stream (2021)"],languages:["Khmer (Native)","English (Professional Working Proficiency)"],score:["Data Accuracy: ★★★★★","Problem Solving: ★★★★★","Reliability: ★★★★☆","Documentation: ★★★★☆"],footer:"Built as a minimal online resume. No visuals. No distractions. Just information."})},35438,e=>{"use strict";var a=e.i(43476),i=e.i(71645);function n({text:e}){let[n,t]=(0,i.useState)("");return(0,i.useEffect)(()=>{let a=0,i=setInterval(()=>{t(e.slice(0,a)),++a>e.length&&clearInterval(i)},10);return()=>clearInterval(i)},[e]),(0,a.jsx)("pre",{children:n})}var t=e.i(25086);function l(){return(0,a.jsxs)("div",{className:"terminal",children:[(0,a.jsxs)("div",{className:"terminal-header",children:[(0,a.jsx)("div",{className:"terminal-name",children:t.default.name}),(0,a.jsx)("div",{className:"terminal-subtitle",children:t.default.title}),(0,a.jsx)("div",{className:"terminal-location",children:t.default.location}),(0,a.jsxs)("div",{className:"terminal-links",children:["Email: ",t.default.email," · Phone: ",t.default.phone," ·"," ",(0,a.jsx)("a",{href:t.default.github,target:"_blank",rel:"noopener noreferrer",children:"GitHub"})," ","·"," ",(0,a.jsx)("a",{href:t.default.linkedin,target:"_blank",rel:"noopener noreferrer",children:"LinkedIn"})]})]}),(0,a.jsx)(n,{text:`
Summary
-------
${t.default.summary}

Skills
------
Data & Analytics:
${t.default.skills.data_analytics.join(", ")}

Big Data / ETL:
${t.default.skills.big_data_etl.join(", ")}

Compliance & AML:
${t.default.skills.compliance_aml.join(", ")}

Machine Learning:
${t.default.skills.machine_learning.join(", ")}

Visualization & Reporting:
${t.default.skills.visualization.join(", ")}

Systems & Tools:
${t.default.skills.systems_tools.join(", ")}

Experience
----------
${t.default.experience.map(e=>`
${e.role} — ${e.company}
${e.period}
${e.details.map(e=>`- ${e}`).join("\n")}
`).join("\n")}

Projects
--------
${t.default.projects.map(e=>`
${e.name}
${e.description}
`).join("\n")}

Education
---------
${t.default.education.join("\n")}

Languages
---------
${t.default.languages.join(", ")}

Score
-----
${t.default.score.join("\n")}

--
${t.default.footer}
        `.trim()})]})}e.s(["default",()=>l],35438)}]);