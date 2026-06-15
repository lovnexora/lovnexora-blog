import Link from 'next/link';

export const blogPosts = [

  {
    slug: "How it feels to be me",
    title: "How it feels to be me",
    date: "Jun 15, 2026",
    preview: "so i was feeling so stuck there like trapped.",
    content: ` so i was feeling so stuck there like trapped. like i was in a box and the walls were closing in on me. i couldn't breathe. i couldn't think. i couldn't move. i was just there, frozen in fear and anxiety.

Second paragraph goes here.`
  },

  {
    slug: "why-i-dropped-everything-to-build-in-public",
    title: "Why I Dropped Everything to Build in Public",
    date: "Jun 09, 2026",
    preview: "Today, my custom domain lovnexora.xyz officially went live. Seeing code go from a local computer to a global server changes how you think about building.",
    content: `Today, my custom domain lovnexora.xyz officially went live on the internet.

Seeing code go from a local computer to a global server changes how you think about building. Instead of hiding projects until they are 'perfect,' the goal now is absolute speed.

Execution out in the open creates accountability. There is nowhere to hide.`
  },
  {
    slug: "building-lovnexora-architecture-of-execution",
    title: "Building Lovnexora: The Architecture of Execution",
    date: "Jun 01, 2026",
    preview: "An inside look into constructing an automated content deployment pipeline using minimal overhead, modern frameworks, and relentless iteration.",
    content: `An inside look into constructing an automated content deployment pipeline using minimal overhead, modern frameworks, and relentless iteration cycle targets.

Building in public means showing the raw, unpolished execution path. Every decision logged. Every failure documented. Every win shipped fast.`
  },
  {
    slug: "winner-effect-tech-leadership",
    title: "The Winner Effect and Tech Leadership Operating Frameworks",
    date: "May 2026",
    preview: "Analyzing how dopamine feedback loops, aggressive project pacing, and entrepreneurial momentum redefine standard engineering productivity rules.",
    content: `Analyzing how dopamine feedback loops, aggressive project pacing, and entrepreneurial momentum redefine standard engineering productivity rules.

Dive deep into the psychological and tactical operating systems of prominent tech founders and the Silicon Valley landscape.`
  }
];

export default function BlogPage() {
  return (
    <div className="container">
      <nav>
        <Link href="/">Intro</Link>
        <Link href="/blog" className="active">Blog</Link>
        <Link href="/projects">Projects</Link>
      </nav>

      <p className="section-label">Published Writing</p>

      <div className="post-list">
        {blogPosts.map((post) => (
          <article key={post.slug} className="post-item">
            <div className="post-meta">
              <h2 className="post-title">{post.title}</h2>
              <span className="post-date">{post.date}</span>
            </div>
            <p className="post-preview">{post.preview}</p>
            <Link href={`/blog/${post.slug}`} className="read-more">
              Read full post →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
