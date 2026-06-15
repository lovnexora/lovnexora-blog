import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '../page';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <div className="container">
      <nav>
        <Link href="/">Intro</Link>
        <Link href="/blog" className="active">Blog</Link>
        <Link href="/projects">Projects</Link>
      </nav>

      <Link href="/blog" className="back-link">← All posts</Link>

      <article>
        <p className="post-full-date">{post!.date}</p>
        <h1 className="post-full-title">{post!.title}</h1>
        <div className="post-full-content">{post!.content}</div>
      </article>
    </div>
  );
}
