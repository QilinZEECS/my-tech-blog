import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import { getPostBySlug, getPostSlugs } from "@/lib/mdx";
import { GlassCard } from "@/components/glass-card";
import type { Metadata } from "next";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      {/* Back Link */}
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 16l-4-4m0 0l4-4m-4 4h18"
          />
        </svg>
        Back to home
      </Link>

      {/* Article Header */}
      <GlassCard className="mb-8" tiltEnabled={false}>
        <header>
          <div className="mb-4 flex items-center gap-3">
            <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary">
              Article
            </span>
            <time className="text-sm text-muted-foreground">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
          <h1 className="mb-4 bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl">
            {post.title}
          </h1>
          {post.description && (
            <p className="text-lg text-muted-foreground">{post.description}</p>
          )}
        </header>
      </GlassCard>

      {/* Article Content */}
      <GlassCard tiltEnabled={false}>
        <article className="prose prose-neutral dark:prose-invert max-w-none prose-headings:bg-gradient-to-r prose-headings:from-foreground prose-headings:to-muted-foreground prose-headings:bg-clip-text prose-headings:text-transparent prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-code:rounded prose-code:bg-secondary prose-code:px-1.5 prose-code:py-0.5 prose-code:before:content-none prose-code:after:content-none prose-pre:glass prose-pre:border prose-pre:border-border">
          <MDXRemote
            source={post.content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [
                  [
                    rehypePrettyCode,
                    {
                      theme: "github-dark",
                      keepBackground: false,
                    },
                  ],
                ],
              },
            }}
          />
        </article>
      </GlassCard>

      {/* Footer Navigation */}
      <div className="mt-8 flex justify-center">
        <Link
          href="/"
          className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all hover:scale-105"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
          Back to all posts
        </Link>
      </div>
    </div>
  );
}
