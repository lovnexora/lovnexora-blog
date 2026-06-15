import Link from 'next/link';

const projects = [
  {
    title: "DoorDie App",
    description: "A high-performance web application optimized for strict execution frameworks and productivity metrics.",
    link: "https://do-o-rdie.vercel.app/",
    tech: ["Next.js", "Vercel", "Tailwind"],
    status: "Live"
  },
  // Add more projects here:
  // {
  //   title: "Project Name",
  //   description: "What it does.",
  //   link: "https://...",
  //   tech: ["Tech1", "Tech2"],
  //   status: "Live"
  // },
];

export default function ProjectsPage() {
  return (
    <div className="container">
      <nav>
        <Link href="/">Intro</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/projects" className="active">Projects</Link>
      </nav>

      <p className="section-label">Production Environments</p>

      <div className="project-list">
        {projects.map((project, idx) => (
          <a key={idx} href={project.link} target="_blank" rel="noopener noreferrer" className="project-item">
            <div className="project-header">
              <span className="project-title">{project.title} →</span>
              <span className="project-status">{project.status}</span>
            </div>
            <p className="project-desc">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((t, i) => (
                <span key={i} className="tech-tag">{t}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
