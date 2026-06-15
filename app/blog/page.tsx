import Link from 'next/link';
import { blogPosts } from './posts';

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