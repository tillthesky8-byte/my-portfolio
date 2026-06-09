'use client';
import './StyleHeroSection.css';

function HeroSection() {
  return (
    <section className="scroll-section h-screen flex flex-col items-center justify-center">
        <span className="text-sm tracking-[0.7em] uppercase text-purple-500 font-bold">
        PORTFOLIO
        </span>

      
      <h1 className="hero-title text-center">
        NAZAR HVOZD
      </h1>
      <p className="hero-subtitle">
        DATA ANALYST | BI ANALYST | BUSINESS ANALYST
      </p>
    </section>
  );
}

export default HeroSection;