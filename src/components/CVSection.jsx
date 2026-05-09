import React from 'react';
import { Download, FileText, CheckCircle } from 'lucide-react';

const CVSection = () => {
  return (
    <section className="section-container" id="resume">
      <div className="resume-grid reveal">
        {/* Left Side: Mock CV Card */}
        <div className="resume-preview-col">
          <div className="resume-card-mock">
            <div className="resume-glow" />

            <div className="resume-card-inner">
              <FileText size={80} color="var(--accent-orange)" style={{ opacity: 0.8 }} />
              <div className="resume-filename">
                DULATHMI_CV.PDF
              </div>
            </div>

            <div className="resume-badge">
              <CheckCircle size={20} color="#fff" />
            </div>
          </div>
        </div>

        {/* Right Side: Text & Download */}
        <div className="resume-text-col">
          <h2 className="resume-title">
            Ready to <span className="text-orange">Collaborate?</span>
          </h2>
          <p className="resume-desc">
            I am currently open to internship opportunities, collaborative projects, and entry-level positions in Software Engineering & DevOps. If you're looking for a highly motivated developer who loves building robust systems, we should talk!
          </p>

          <a href="/Dulathmi_Sadesna_CV_01.pdf" download className="btn-primary" style={{ display: 'inline-flex', gap: '0.5rem', alignItems: 'center' }}>
            <Download size={20} />
            Download Full CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default CVSection;
