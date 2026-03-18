import { motion } from 'framer-motion';

/* ─── Data ───────────────────────────────────────────────────── */
const skills = [
  "Java", "Python", "JavaScript", "TypeScript", "Node.js", "Express.js",
  "React.js", "Next.js", "Tailwind CSS", "ShadCN UI", "MongoDB", "MySQL",
  "Socket.IO", "WebRTC", "PostgreSQL", "Drizzle ORM", "Git", "Postman", "Vercel"
];

const projects = [
  {
    id: 1,
    title: 'Real-Time Collaborative Code Editor',
    category: 'Full-Stack Web App',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2500&auto=format&fit=crop',
    tech: 'React, TypeScript, Node.js, Express, Firebase, WebRTC, Monaco Editor',
    desc: 'Engineered a full-stack collaborative code editor featuring real-time synchronization, live cursor tracking, remote code execution (13+ languages), and WebRTC video conferencing.',
    liveLink: 'https://collaborative-coding-omega.vercel.app/',
    githubLink: 'https://github.com/J-vijayalakshmi/collaborative-coding'
  },
  {
    id: 2,
    title: 'React Transpiler & Code Converter Tool',
    category: 'Developer Tool',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2500&auto=format&fit=crop',
    tech: 'TypeScript, React.js, Vite, Monaco Editor, HTML/CSS Parser',
    desc: 'Developed an automated code transpiler converting HTML/CSS/JavaScript into optimized React components via Abstract Syntax Trees with a live preview Monaco editor.',
    liveLink: 'https://react-transcript.vercel.app/',
    githubLink: 'https://github.com/J-vijayalakshmi/ReactTranscript'
  }
];

/* ─── Reusable fade-in wrapper ───────────────────────────────── */
function Section({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={`relative min-h-screen w-full flex flex-col justify-center px-6 lg:px-16 py-24 ${className}`}>
      {children}
    </section>
  );
}

/* ─── Scrolling skill marquee ────────────────────────────────── */
function SkillMarquee() {
  const doubled = [...skills, ...skills]; // duplicate for seamless loop
  return (
    <div className="overflow-hidden w-full py-2">
      <motion.div
        className="flex gap-6 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
      >
        {doubled.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="px-6 py-3 glass rounded-full border border-white/10 text-white/90 font-medium text-lg shrink-0"
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ─── Main Component ─────────────────────────────────────────── */
export default function Projects() {
  return (
    <div className="relative w-full">

      {/* ═══════════ SECTION 1 : SKILLS (scrolling marquee) ═══════════ */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto w-full"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-3">
            Core Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mb-12" />
          <SkillMarquee />
          {/* second row scrolling the opposite direction */}
          <div className="overflow-hidden w-full py-2 mt-4">
            <motion.div
              className="flex gap-6 whitespace-nowrap"
              animate={{ x: ['-50%', '0%'] }}
              transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
            >
              {[...skills, ...skills].reverse().map((skill, i) => (
                <span
                  key={`rev-${skill}-${i}`}
                  className="px-6 py-3 glass rounded-full border border-white/10 text-white/90 font-medium text-lg shrink-0"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </Section>

      {/* ═══════════ SECTION 2 : WORK EXPERIENCE ═══════════ */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto w-full"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-3">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mb-12" />

          <div className="glass rounded-2xl p-8 md:p-12 relative overflow-hidden group border-white/10 hover:border-purple-500/30 transition-colors duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Software Developer Intern</h3>
                <p className="text-purple-400 font-medium text-lg">Celeritaz Health Pvt. Ltd., Hyderabad</p>
              </div>
              <div className="px-4 py-2 rounded-full border border-white/20 bg-white/5 text-white/70 whitespace-nowrap">
                Mar 2024 – Jun 2024
              </div>
            </div>
            <ul className="relative z-10 mt-8 space-y-4 text-white/70 text-lg list-disc pl-5 marker:text-purple-500">
              <li>Engineered scalable REST APIs using TypeScript, Next.js, and PostgreSQL, improving retrieval speed by 35%.</li>
              <li>Designed validated form flows for patient onboarding, reducing manual data errors by 40%.</li>
              <li>Developed responsive UI with ShadCN & Tailwind, integrated Drizzle ORM reducing query complexity by 25%.</li>
              <li>Contributed to an Electronic Health Record (EHR) system supporting multiple user roles and secured data access.</li>
            </ul>
          </div>
        </motion.div>
      </Section>

      {/* ═══════════ SECTION 3 : FEATURED PROJECTS ═══════════ */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto w-full"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-3">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group relative cursor-pointer"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500" />
                <div className="relative h-[420px] w-full rounded-3xl overflow-hidden glass p-6 flex flex-col justify-end">
                  <div className="absolute inset-0 z-0">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-25 group-hover:opacity-40 transition-opacity duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  </div>
                  <div className="relative z-10 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-purple-400 font-medium mb-2 tracking-wider uppercase text-xs">{project.category}</p>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="inline-block px-3 py-1 bg-white/10 border border-white/10 rounded-md text-xs text-white/80 mb-4">{project.tech}</p>
                    <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                      <p className="text-white/70 leading-relaxed text-sm md:text-base mb-6">{project.desc}</p>
                      <div className="flex items-center gap-4">
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="px-5 py-2 glass rounded-full text-sm hover:bg-white/10 hover:border-purple-500/50 transition-colors pointer-events-auto flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                          View Live
                        </a>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="px-5 py-2 glass rounded-full text-sm hover:bg-white/10 hover:border-purple-500/50 transition-colors pointer-events-auto flex items-center gap-2">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                          Source
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* ═══════════ SECTION 4 : EDUCATION ═══════════ */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto w-full"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-3">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mb-12" />

          <div className="glass rounded-2xl p-8 md:p-12 relative overflow-hidden group border-white/10 hover:border-purple-500/30 transition-colors duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">CVR College of Engineering</h3>
                  <p className="text-purple-400 font-medium text-lg">B.Tech in Computer Science and Engineering</p>
                </div>
                <div className="px-4 py-2 rounded-full border border-white/20 bg-white/5 text-white/70 whitespace-nowrap">
                  Nov 2022 – Apr 2026
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-white/50 text-lg">CGPA:</span>
                <span className="text-3xl font-bold text-white">8.33</span>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* ═══════════ SECTION 5 : CERTIFICATIONS ═══════════ */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto w-full"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-3">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mb-12" />

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-2xl p-8 relative overflow-hidden group border-white/10 hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">Oracle Academy Database Programming with SQL</h3>
                  <p className="text-white/40 mt-1">Oracle Academy</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="glass rounded-2xl p-8 relative overflow-hidden group border-white/10 hover:border-indigo-500/30 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">AI-ML Virtual Internship AICTE EduSkills</h3>
                  <p className="text-white/40 mt-1">Google for Developers</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass rounded-2xl p-8 relative overflow-hidden group border-white/10 hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">Oracle Academy Database Design</h3>
                  <p className="text-white/40 mt-1">Oracle Academy</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="glass rounded-2xl p-8 relative overflow-hidden group border-white/10 hover:border-indigo-500/30 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">Google Cloud Generative AI Virtual Internship</h3>
                  <p className="text-white/40 mt-1">AICTE EduSkills</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Section>

      {/* ═══════════ SECTION 6 : ACHIEVEMENTS ═══════════ */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto w-full"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-3">
            Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass rounded-2xl p-8 border-white/10 hover:border-purple-500/30 transition-colors group"
            >
              <span className="text-4xl mb-4 block">🏆</span>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">Finalist, Bit N Build Hackathon</h3>
              <p className="text-white/40">State-Level Hackathon · Feb 2024</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="glass rounded-2xl p-8 border-white/10 hover:border-purple-500/30 transition-colors group"
            >
              <span className="text-4xl mb-4 block">💻</span>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">250+ DSA Problems Solved</h3>
              <p className="text-white/40">LeetCode & CodeChef</p>
            </motion.div>
          </div>
        </motion.div>
      </Section>

      {/* ═══════════ FOOTER / CONTACT ═══════════ */}
      <section className="relative w-full py-24 px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Let's Build Together</h2>
          <p className="text-white/40 text-lg mb-8 max-w-xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, and creative ideas.
          </p>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <a href="mailto:vijjijayasurya@gmail.com" className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full text-white font-medium hover:opacity-90 transition-opacity">
              Get in Touch
            </a>
            <a href="tel:+918555856792" className="px-8 py-3 glass rounded-full text-white font-medium hover:bg-white/10 transition-colors border border-white/10">
              +91 85558 56792
            </a>
          </div>
          <p className="text-white/20 text-sm mt-16">© 2026 Jayasurya Vijaya Lakshmi. All rights reserved.</p>
        </motion.div>
      </section>

    </div>
  );
}
