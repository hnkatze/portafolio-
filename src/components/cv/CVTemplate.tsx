import { useState, useRef, useEffect } from "react";
import { t } from "@/lib/i18n";
import LanguageToggle from "./LanguageToggle";
import type {
  Lang,
  PersonalInfo,
  Skill,
  Experience,
  Education,
  Certification,
  Language,
} from "@/lib/types";

interface CVTemplateProps {
  personalInfo: PersonalInfo;
  skills: Skill[];
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
  languages: Language[];
  initialLang: Lang;
}

export default function CVTemplate({
  personalInfo,
  skills,
  experience,
  education,
  certifications,
  languages,
  initialLang,
}: CVTemplateProps) {
  const [lang, setLang] = useState<Lang>(initialLang);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const cvRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Listen for custom event to open modal from outside (JourneyNav)
  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-cv-modal", handler);
    return () => window.removeEventListener("open-cv-modal", handler);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const frontendSkills = skills.filter((s) => s.category === "frontend");
  const backendSkills = skills.filter((s) => s.category === "backend");
  const toolsSkills = skills.filter((s) => s.category === "tools");

  const labels = {
    experience: { es: "Experiencia Profesional", en: "Professional Experience" },
    education: { es: "Educacion", en: "Education" },
    skills: { es: "Habilidades Tecnicas", en: "Technical Skills" },
    languages: { es: "Idiomas", en: "Languages" },
    frontend: { es: "Frontend", en: "Frontend" },
    backend: { es: "Backend", en: "Backend" },
    tools: { es: "Herramientas", en: "Tools" },
    present: { es: "Presente", en: "Present" },
    inProgress: { es: "En curso", en: "In Progress" },
    completed: { es: "Completado", en: "Completed" },
    aiWorkflow: { es: "Flujo de Trabajo con IA", en: "AI-Augmented Workflow" },
    certifications: { es: "Certificaciones", en: "Certifications" },
    downloadPdf: { es: "Descargar PDF", en: "Download PDF" },
    generating: { es: "Generando...", en: "Generating..." },
  };

  const handleDownload = async () => {
    setLoading(true);
    try {
      const html2pdf = (await import("html2pdf.js")).default;
      const element = cvRef.current;
      if (!element) throw new Error("CV container not found");

      await html2pdf()
        .set({
          margin: 0,
          filename: `CV-Camilo-Henriquez-${lang.toUpperCase()}.pdf`,
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true },
          jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        })
        .from(element)
        .save();
    } catch {
      window.print();
    } finally {
      setLoading(false);
    }
  };

  // On mobile, just download directly (open modal triggers download)
  const handleOpen = () => {
    if (isMobile) {
      setOpen(true);
      // small delay to let the hidden A4 render
      setTimeout(() => handleDownload(), 300);
    } else {
      setOpen(true);
    }
  };

  // --- A4 Paper (compact, fits exactly 1 page) ---
  const CVPaper = (
    <div
      ref={cvRef}
      style={{
        width: "210mm",
        height: "297mm",
        padding: "10mm 12mm",
        fontFamily: "'Inter', system-ui, sans-serif",
        fontSize: "8.5pt",
        lineHeight: "1.35",
        backgroundColor: "#ffffff",
        color: "#111827",
        overflow: "hidden",
      }}
    >
      {/* Header — centered 3-line layout */}
      <header style={{ textAlign: "center", marginBottom: "4mm", paddingBottom: "3mm", borderBottom: "1.5px solid #e5e7eb" }}>
        <h1 style={{ fontSize: "18pt", fontWeight: 700, color: "#111827", marginBottom: "1px" }}>
          {personalInfo.name}
        </h1>
        <p style={{ fontSize: "10pt", color: "#2563eb", fontWeight: 500, marginBottom: "3px" }}>
          {t(personalInfo.title, lang)}
        </p>
        <p style={{ fontSize: "7.5pt", color: "#6b7280", maxWidth: "450px", margin: "0 auto 4px", lineHeight: 1.4 }}>
          {t(personalInfo.summary, lang)}
        </p>
        <div style={{ fontSize: "7.5pt", color: "#6b7280", display: "flex", justifyContent: "center", gap: "6px", flexWrap: "wrap" }}>
          <span>{personalInfo.email}</span>
          <span style={{ color: "#d1d5db" }}>|</span>
          <span>{personalInfo.location}</span>
          <span style={{ color: "#d1d5db" }}>|</span>
          <span>github.com/{personalInfo.socials.github}</span>
          <span style={{ color: "#d1d5db" }}>|</span>
          <span>linkedin.com/in/camilohenriquez</span>
        </div>
      </header>

      {/* Two-column layout for the rest */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 8mm" }}>

        {/* LEFT COLUMN */}
        <div>
          {/* Experience */}
          <section style={{ marginBottom: "3.5mm" }}>
            <h2 style={{ fontSize: "8pt", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", borderBottom: "1px solid #e5e7eb", paddingBottom: "1.5px", marginBottom: "2mm", color: "#111827" }}>
              {t(labels.experience, lang)}
            </h2>
            {experience.map((exp, idx) => (
              <div key={exp.company + exp.startDate} style={{ marginBottom: idx < experience.length - 1 ? "3mm" : 0 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <span style={{ fontWeight: 600, fontSize: "8.5pt", color: "#111827" }}>
                    {t(exp.role, lang)}
                  </span>
                  <span style={{ fontSize: "7pt", color: "#9ca3af" }}>
                    {exp.startDate} — {exp.endDate === "Present" ? t(labels.present, lang) : exp.endDate}
                  </span>
                </div>
                <p style={{ fontSize: "7.5pt", color: "#2563eb", marginBottom: "1px" }}>{exp.company}</p>
                <p style={{ fontSize: "7.5pt", color: "#4b5563", marginBottom: "1.5px" }}>
                  {t(exp.description, lang)}
                </p>
                <ul style={{ margin: 0, paddingLeft: "12px" }}>
                  {exp.highlights.map((h, i) => (
                    <li key={i} style={{ fontSize: "7.5pt", color: "#6b7280", marginBottom: "0.5px" }}>
                      {t(h, lang)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Education */}
          <section>
            <h2 style={{ fontSize: "8pt", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", borderBottom: "1px solid #e5e7eb", paddingBottom: "1.5px", marginBottom: "2mm", color: "#111827" }}>
              {t(labels.education, lang)}
            </h2>
            {education.map((edu, idx) => (
              <div key={edu.institution + t(edu.degree, lang)} style={{ marginBottom: idx < education.length - 1 ? "2mm" : 0 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <span style={{ fontWeight: 600, fontSize: "8.5pt", color: "#111827" }}>
                    {t(edu.degree, lang)}
                  </span>
                  <span style={{
                    fontSize: "6.5pt",
                    padding: "0.5px 4px",
                    borderRadius: "9999px",
                    backgroundColor: edu.status === "in_progress" ? "#dbeafe" : "#f3f4f6",
                    color: edu.status === "in_progress" ? "#2563eb" : "#6b7280",
                  }}>
                    {edu.status === "in_progress" ? t(labels.inProgress, lang) : t(labels.completed, lang)}
                  </span>
                </div>
                <p style={{ fontSize: "7.5pt", color: "#2563eb" }}>{edu.institution}</p>
                {edu.highlights && (
                  <p style={{ fontSize: "7pt", color: "#6b7280", marginTop: "0.5px" }}>
                    {edu.highlights.join(" · ")}
                  </p>
                )}
              </div>
            ))}
          </section>
        </div>

        {/* RIGHT COLUMN */}
        <div>
          {/* Skills */}
          <section style={{ marginBottom: "3.5mm" }}>
            <h2 style={{ fontSize: "8pt", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", borderBottom: "1px solid #e5e7eb", paddingBottom: "1.5px", marginBottom: "2mm", color: "#111827" }}>
              {t(labels.skills, lang)}
            </h2>
            <div style={{ marginBottom: "2mm" }}>
              <h3 style={{ fontSize: "7pt", fontWeight: 600, color: "#6b7280", textTransform: "uppercase", marginBottom: "1.5mm" }}>
                {t(labels.frontend, lang)}
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "2px" }}>
                {frontendSkills.map((s) => (
                  <span key={s.name} style={{ fontSize: "7pt", padding: "0.5px 4px", borderRadius: "2px", backgroundColor: "#eff6ff", color: "#1d4ed8", border: "0.5px solid #dbeafe" }}>
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2mm" }}>
              <div>
                <h3 style={{ fontSize: "7pt", fontWeight: 600, color: "#6b7280", textTransform: "uppercase", marginBottom: "1.5mm" }}>
                  {t(labels.backend, lang)}
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "2px" }}>
                  {backendSkills.map((s) => (
                    <span key={s.name} style={{ fontSize: "7pt", padding: "0.5px 4px", borderRadius: "2px", backgroundColor: "#f0fdf4", color: "#15803d", border: "0.5px solid #dcfce7" }}>
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 style={{ fontSize: "7pt", fontWeight: 600, color: "#6b7280", textTransform: "uppercase", marginBottom: "1.5mm" }}>
                  {t(labels.tools, lang)}
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "2px" }}>
                  {toolsSkills.map((s) => (
                    <span key={s.name} style={{ fontSize: "7pt", padding: "0.5px 4px", borderRadius: "2px", backgroundColor: "#faf5ff", color: "#7e22ce", border: "0.5px solid #f3e8ff" }}>
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* AI Workflow */}
          <section style={{ marginBottom: "3.5mm" }}>
            <h2 style={{ fontSize: "8pt", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", borderBottom: "1px solid #e5e7eb", paddingBottom: "1.5px", marginBottom: "2mm", color: "#111827" }}>
              {t(labels.aiWorkflow, lang)}
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5mm" }}>
              <div>
                <span style={{ fontSize: "7.5pt", fontWeight: 600, color: "#111827" }}>
                  {lang === "es" ? "Asistentes IA: " : "AI Assistants: "}
                </span>
                <span style={{ fontSize: "7.5pt", color: "#6b7280" }}>
                  {lang === "es"
                    ? "Claude Code, GitHub Copilot, Gemini, Codex — generacion, refactoring, pair programming"
                    : "Claude Code, GitHub Copilot, Gemini, Codex — generation, refactoring, pair programming"}
                </span>
              </div>
              <div>
                <span style={{ fontSize: "7.5pt", fontWeight: 600, color: "#111827" }}>
                  {lang === "es" ? "MCP Servers: " : "MCP Servers: "}
                </span>
                <span style={{ fontSize: "7.5pt", color: "#6b7280" }}>
                  {lang === "es"
                    ? "Servidores Model Context Protocol para flujos de desarrollo mejorados"
                    : "Model Context Protocol servers for enhanced development workflows"}
                </span>
              </div>
              <div>
                <span style={{ fontSize: "7.5pt", fontWeight: 600, color: "#111827" }}>
                  {lang === "es" ? "Review & Testing: " : "Review & Testing: "}
                </span>
                <span style={{ fontSize: "7.5pt", color: "#6b7280" }}>
                  {lang === "es"
                    ? "Scaffolding de tests y revision de codigo acelerados con IA"
                    : "AI-accelerated test scaffolding and code review"}
                </span>
              </div>
            </div>
          </section>

          {/* Languages + Certifications side by side */}
          <section>
            <h2 style={{ fontSize: "8pt", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", borderBottom: "1px solid #e5e7eb", paddingBottom: "1.5px", marginBottom: "2mm", color: "#111827" }}>
              {t(labels.languages, lang)}
            </h2>
            <div style={{ display: "flex", gap: "12px", marginBottom: "3mm" }}>
              {languages.map((l) => (
                <div key={t(l.name, lang)}>
                  <span style={{ fontWeight: 500, color: "#111827", fontSize: "8pt" }}>
                    {t(l.name, lang)}
                  </span>
                  <span style={{ color: "#6b7280", fontSize: "8pt" }}> — {t(l.level, lang)}</span>
                </div>
              ))}
            </div>

            <h2 style={{ fontSize: "8pt", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", borderBottom: "1px solid #e5e7eb", paddingBottom: "1.5px", marginBottom: "2mm", color: "#111827" }}>
              {t(labels.certifications, lang)}
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1mm" }}>
              {certifications.map((cert) => (
                <div key={cert.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <span style={{ fontSize: "7.5pt", color: "#111827" }}>
                    {cert.name}
                  </span>
                  <span style={{ fontSize: "7pt", color: "#9ca3af" }}>
                    {cert.issuer} · {cert.year}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );

  if (!open) {
    {/* Hidden A4 for mobile download — always rendered offscreen */}
    return (
      <div className="absolute -left-[9999px] top-0" aria-hidden="true">
        {CVPaper}
      </div>
    );
  }

  // --- MODAL ---
  return (
    <>
      {/* Hidden A4 for PDF generation (always offscreen) */}
      <div className="absolute -left-[9999px] top-0" aria-hidden="true">
        {CVPaper}
      </div>

      {/* Modal overlay */}
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm"
        onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
      >
        {/* Mobile: download-only view */}
        {isMobile ? (
          <div className="bg-gray-900 rounded-2xl p-6 mx-4 max-w-sm w-full text-center border border-white/10">
            <h2 className="text-xl font-bold text-white mb-1">{personalInfo.name}</h2>
            <p className="text-blue-400 text-sm font-medium mb-6">{t(personalInfo.title, lang)}</p>

            <div className="flex justify-center mb-6">
              <LanguageToggle currentLang={lang} onToggle={setLang} />
            </div>

            <button
              onClick={handleDownload}
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-500/20 text-blue-400 font-medium rounded-xl border border-blue-400/30 hover:bg-blue-500/30 disabled:opacity-50 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              {loading ? t(labels.generating, lang) : `${t(labels.downloadPdf, lang)} (${lang.toUpperCase()})`}
            </button>

            <button
              onClick={() => setOpen(false)}
              className="mt-4 text-sm text-gray-500 hover:text-white transition-colors"
            >
              {lang === "es" ? "Cerrar" : "Close"}
            </button>
          </div>
        ) : (
          /* Desktop: A4 preview + controls */
          <div className="flex flex-col items-center gap-4 max-h-[95vh]">
            {/* Controls bar */}
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-xl px-4 py-2 border border-white/10">
              <LanguageToggle currentLang={lang} onToggle={setLang} />
              <button
                onClick={handleDownload}
                disabled={loading}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-500/20 rounded-lg border border-blue-400/30 hover:bg-blue-500/30 disabled:opacity-50 transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                {loading ? t(labels.generating, lang) : t(labels.downloadPdf, lang)}
              </button>
              <button
                onClick={() => setOpen(false)}
                className="p-2 text-gray-400 hover:text-white transition-colors"
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* A4 preview (visual clone, scaled to fit screen) */}
            <div
              className="overflow-auto rounded-lg shadow-2xl"
              style={{ maxHeight: "calc(95vh - 60px)" }}
            >
              <div
                style={{
                  width: "210mm",
                  height: "297mm",
                  padding: "10mm 12mm",
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: "8.5pt",
                  lineHeight: "1.35",
                  backgroundColor: "#ffffff",
                  color: "#111827",
                  overflow: "hidden",
                  transform: "scale(0.85)",
                  transformOrigin: "top center",
                }}
              >
                {/* Header — centered 3-line layout */}
                <header style={{ textAlign: "center", marginBottom: "4mm", paddingBottom: "3mm", borderBottom: "1.5px solid #e5e7eb" }}>
                  <h1 style={{ fontSize: "18pt", fontWeight: 700, color: "#111827", marginBottom: "1px" }}>
                    {personalInfo.name}
                  </h1>
                  <p style={{ fontSize: "10pt", color: "#2563eb", fontWeight: 500, marginBottom: "3px" }}>
                    {t(personalInfo.title, lang)}
                  </p>
                  <p style={{ fontSize: "7.5pt", color: "#6b7280", maxWidth: "450px", margin: "0 auto 4px", lineHeight: 1.4 }}>
                    {t(personalInfo.summary, lang)}
                  </p>
                  <div style={{ fontSize: "7.5pt", color: "#6b7280", display: "flex", justifyContent: "center", gap: "6px", flexWrap: "wrap" }}>
                    <span>{personalInfo.email}</span>
                    <span style={{ color: "#d1d5db" }}>|</span>
                    <span>{personalInfo.location}</span>
                    <span style={{ color: "#d1d5db" }}>|</span>
                    <span>github.com/{personalInfo.socials.github}</span>
                    <span style={{ color: "#d1d5db" }}>|</span>
                    <span>linkedin.com/in/camilohenriquez</span>
                  </div>
                </header>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 8mm" }}>
                  {/* LEFT — Experience + Education */}
                  <div>
                    <section style={{ marginBottom: "3.5mm" }}>
                      <h2 style={{ fontSize: "8pt", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", borderBottom: "1px solid #e5e7eb", paddingBottom: "1.5px", marginBottom: "2mm", color: "#111827" }}>
                        {t(labels.experience, lang)}
                      </h2>
                      {experience.map((exp, idx) => (
                        <div key={exp.company + exp.startDate} style={{ marginBottom: idx < experience.length - 1 ? "3mm" : 0 }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                            <span style={{ fontWeight: 600, fontSize: "8.5pt" }}>{t(exp.role, lang)}</span>
                            <span style={{ fontSize: "7pt", color: "#9ca3af" }}>
                              {exp.startDate} — {exp.endDate === "Present" ? t(labels.present, lang) : exp.endDate}
                            </span>
                          </div>
                          <p style={{ fontSize: "7.5pt", color: "#2563eb", marginBottom: "1px" }}>{exp.company}</p>
                          <p style={{ fontSize: "7.5pt", color: "#4b5563", marginBottom: "1.5px" }}>{t(exp.description, lang)}</p>
                          <ul style={{ margin: 0, paddingLeft: "12px" }}>
                            {exp.highlights.map((h, i) => (
                              <li key={i} style={{ fontSize: "7.5pt", color: "#6b7280", marginBottom: "0.5px" }}>{t(h, lang)}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </section>
                    <section>
                      <h2 style={{ fontSize: "8pt", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", borderBottom: "1px solid #e5e7eb", paddingBottom: "1.5px", marginBottom: "2mm", color: "#111827" }}>
                        {t(labels.education, lang)}
                      </h2>
                      {education.map((edu, idx) => (
                        <div key={edu.institution + t(edu.degree, lang)} style={{ marginBottom: idx < education.length - 1 ? "2mm" : 0 }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                            <span style={{ fontWeight: 600, fontSize: "8.5pt" }}>{t(edu.degree, lang)}</span>
                            <span style={{ fontSize: "6.5pt", padding: "0.5px 4px", borderRadius: "9999px", backgroundColor: edu.status === "in_progress" ? "#dbeafe" : "#f3f4f6", color: edu.status === "in_progress" ? "#2563eb" : "#6b7280" }}>
                              {edu.status === "in_progress" ? t(labels.inProgress, lang) : t(labels.completed, lang)}
                            </span>
                          </div>
                          <p style={{ fontSize: "7.5pt", color: "#2563eb" }}>{edu.institution}</p>
                          {edu.highlights && <p style={{ fontSize: "7pt", color: "#6b7280", marginTop: "0.5px" }}>{edu.highlights.join(" · ")}</p>}
                        </div>
                      ))}
                    </section>
                  </div>

                  {/* RIGHT — Skills + AI + Languages */}
                  <div>
                    <section style={{ marginBottom: "3.5mm" }}>
                      <h2 style={{ fontSize: "8pt", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", borderBottom: "1px solid #e5e7eb", paddingBottom: "1.5px", marginBottom: "2mm", color: "#111827" }}>
                        {t(labels.skills, lang)}
                      </h2>
                      <div style={{ marginBottom: "2mm" }}>
                        <h3 style={{ fontSize: "7pt", fontWeight: 600, color: "#6b7280", textTransform: "uppercase", marginBottom: "1.5mm" }}>{t(labels.frontend, lang)}</h3>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "2px" }}>
                          {frontendSkills.map((s) => (
                            <span key={s.name} style={{ fontSize: "7pt", padding: "0.5px 4px", borderRadius: "2px", backgroundColor: "#eff6ff", color: "#1d4ed8", border: "0.5px solid #dbeafe" }}>{s.name}</span>
                          ))}
                        </div>
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2mm" }}>
                        <div>
                          <h3 style={{ fontSize: "7pt", fontWeight: 600, color: "#6b7280", textTransform: "uppercase", marginBottom: "1.5mm" }}>{t(labels.backend, lang)}</h3>
                          <div style={{ display: "flex", flexWrap: "wrap", gap: "2px" }}>
                            {backendSkills.map((s) => (
                              <span key={s.name} style={{ fontSize: "7pt", padding: "0.5px 4px", borderRadius: "2px", backgroundColor: "#f0fdf4", color: "#15803d", border: "0.5px solid #dcfce7" }}>{s.name}</span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h3 style={{ fontSize: "7pt", fontWeight: 600, color: "#6b7280", textTransform: "uppercase", marginBottom: "1.5mm" }}>{t(labels.tools, lang)}</h3>
                          <div style={{ display: "flex", flexWrap: "wrap", gap: "2px" }}>
                            {toolsSkills.map((s) => (
                              <span key={s.name} style={{ fontSize: "7pt", padding: "0.5px 4px", borderRadius: "2px", backgroundColor: "#faf5ff", color: "#7e22ce", border: "0.5px solid #f3e8ff" }}>{s.name}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </section>
                    <section style={{ marginBottom: "3.5mm" }}>
                      <h2 style={{ fontSize: "8pt", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", borderBottom: "1px solid #e5e7eb", paddingBottom: "1.5px", marginBottom: "2mm", color: "#111827" }}>
                        {t(labels.aiWorkflow, lang)}
                      </h2>
                      <div style={{ display: "flex", flexDirection: "column", gap: "1.5mm" }}>
                        <div>
                          <span style={{ fontSize: "7.5pt", fontWeight: 600 }}>{lang === "es" ? "Asistentes IA: " : "AI Assistants: "}</span>
                          <span style={{ fontSize: "7.5pt", color: "#6b7280" }}>{lang === "es" ? "Claude Code, GitHub Copilot, Gemini, Codex" : "Claude Code, GitHub Copilot, Gemini, Codex"}</span>
                        </div>
                        <div>
                          <span style={{ fontSize: "7.5pt", fontWeight: 600 }}>{lang === "es" ? "MCP Servers: " : "MCP Servers: "}</span>
                          <span style={{ fontSize: "7.5pt", color: "#6b7280" }}>{lang === "es" ? "Model Context Protocol para flujos mejorados" : "Model Context Protocol for enhanced workflows"}</span>
                        </div>
                        <div>
                          <span style={{ fontSize: "7.5pt", fontWeight: 600 }}>{lang === "es" ? "Review & Testing: " : "Review & Testing: "}</span>
                          <span style={{ fontSize: "7.5pt", color: "#6b7280" }}>{lang === "es" ? "Test scaffolding y code review con IA" : "AI-accelerated test scaffolding and code review"}</span>
                        </div>
                      </div>
                    </section>
                    <section>
                      <h2 style={{ fontSize: "8pt", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", borderBottom: "1px solid #e5e7eb", paddingBottom: "1.5px", marginBottom: "2mm", color: "#111827" }}>
                        {t(labels.languages, lang)}
                      </h2>
                      <div style={{ display: "flex", gap: "12px", marginBottom: "3mm" }}>
                        {languages.map((l) => (
                          <div key={t(l.name, lang)}>
                            <span style={{ fontWeight: 500, fontSize: "8pt" }}>{t(l.name, lang)}</span>
                            <span style={{ color: "#6b7280", fontSize: "8pt" }}> — {t(l.level, lang)}</span>
                          </div>
                        ))}
                      </div>

                      <h2 style={{ fontSize: "8pt", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", borderBottom: "1px solid #e5e7eb", paddingBottom: "1.5px", marginBottom: "2mm", color: "#111827" }}>
                        {t(labels.certifications, lang)}
                      </h2>
                      <div style={{ display: "flex", flexDirection: "column", gap: "1mm" }}>
                        {certifications.map((cert) => (
                          <div key={cert.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                            <span style={{ fontSize: "7.5pt", color: "#111827" }}>{cert.name}</span>
                            <span style={{ fontSize: "7pt", color: "#9ca3af" }}>{cert.issuer} · {cert.year}</span>
                          </div>
                        ))}
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
