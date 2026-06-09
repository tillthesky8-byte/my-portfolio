'use client';
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';
import { ScrollAnimation } from '../components/uilayouts/scroll-animation';
import 'lenis/dist/lenis.css'

function SectionTitle({ children }: { children: string }) {
  return (
    <h2 className="section-title">
      {children}
    </h2>
  );
}

function ProjectCard({
  title,
  description,
  reversed = false,
}: {
  title: string;
  description: string;
  reversed?: boolean;
}) {
  return (
    <article
      className={`project-card section-box w-full text-left ${reversed ? 'project-card-reversed' : ''}`}
    >
      <div className="project-thumb" aria-hidden="true">
        <span>Thumbnail</span>
      </div>

      <div className="project-copy">
        <h3 className="text-white uppercase tracking-[0.2em] text-sm mb-2">
          {title}
        </h3>
        <p className="text-white">
          {description}
        </p>
      </div>
    </article>
  );
}

function HeroSection() {
  return (
    <section className="scroll-section h-screen flex flex-col items-center justify-center">
      <div className="eye-brow" aria-hidden="true">
        <span className="text-sm tracking-[0.7em] uppercase text-purple-500 font-bold">
        PORTFOLIO
        </span>
      </div>
      
      <h1 className="hero-title text-center">
        NAZAR HVOZD
      </h1>
      <p className="hero-subtitle">
        DATA ANALYST | BI ANALYST | BUSINESS ANALYST
      </p>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="scroll-section min-h-screen flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-4xl mx-auto flex flex-col gap-5 items-start ">
        <ScrollAnimation animation="fade-up" duration={1}>
          <SectionTitle>ABOUT ME</SectionTitle>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" duration={1} delay={0.2}>
          <div className="section-box max-w-3xl text-left">
            <p className="description">
              I started as a self-taught developer interested in markets and systems.
              Over time I became focused on quantitative research, risk modeling, and
              understanding how information becomes decision-making structure.
              My current work blends data analysis, finance logic, and software engineering.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section className="scroll-section min-h-screen flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-5xl mx-auto flex flex-col gap-5 items-start ">
        <ScrollAnimation animation="fade-up" duration={1}>
          <SectionTitle>PROJECTS</SectionTitle>
        </ScrollAnimation>

        <div className="mt-4 flex flex-col gap-5 w-full">
          <ScrollAnimation animation="fade-up" duration={1} delay={0.2}>
            <ProjectCard
              title="Psychological Burden Index"
              description="Research model linking cognitive load to innovation output."
            />
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" duration={1} delay={0.35}>
            <ProjectCard
              title="Quantitative Backtesting Engine"
              description="Event-driven system for strategy simulation."
              reversed
            />
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" duration={1} delay={0.5}>
            <ProjectCard
              title="Power BI Macro Dashboard"
              description="Financial visualization suite for macro indicators."
              reversed={false}
            />
          </ScrollAnimation>

          
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="scroll-section h-screen flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-start gap-5">
        <ScrollAnimation animation="fade-up" duration={1}>
          <SectionTitle>CONTACT</SectionTitle>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" duration={1} delay={0.2}>
          <div className="section-box text-left">
            <p className="text-white">alex.novak@researchlab.dev</p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}

function Canvs() {
  return (
    <>
      <div className='fixed inset-0 -z-10 overflow-hidden'>
        <ShaderGradientCanvas
          style={{
            width: '100%',
            height: '100%',
          }}
          lazyLoad={undefined}
          fov={undefined}
          pixelDensity={1}
          pointerEvents='none'
        >
          <ShaderGradient
            animate='on'
            type='sphere'
            wireframe={false}
            shader='defaults'
            uTime={0}
            uSpeed={0.05}
            uStrength={0.3}
            uDensity={0.1}
            uFrequency={4}
            uAmplitude={3.8}
            positionX={-0.1}
            positionY={0}
            positionZ={0}
            rotationX={0}
            rotationY={130}
            rotationZ={100}
            color1='#375b5e'
            color2='#5c0297'
            color3='#8da0ce'
            reflection={0.4}
            // View (camera) props
            cAzimuthAngle={270}
            cPolarAngle={180}
            cDistance={0.5}
            cameraZoom={15.1}
            // Effect props
            lightType='env'
            brightness={0.2}
            envPreset='city'
            grain='on'
            // Tool props
            toggleAxis={false}
            zoomOut={false}
            hoverState=''
            // Optional - if using transition features
            enableTransition={false}
          />
        </ShaderGradientCanvas>
      </div>
    </>
  );
}



function App() {

  return (
    <>
      <Canvs />
      <article className="relative z-10 scroll-wrapper">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </article>
    </>
  );
}

export default App
