import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import { BentoGrid, BentoItem } from "@/components/bento-grid";
import { GlassCard } from "@/components/glass-card";

export default function Home() {
  const posts = getAllPosts();
  const featuredPost = posts[0];
  const recentPosts = posts.slice(1, 4);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      {/* Hero Section */}
      <section className="mb-12">
        <BentoGrid>
          {/* Main Hero Card */}
          <BentoItem colSpan={2} rowSpan={2}>
            <GlassCard className="flex h-full flex-col justify-between">
              <div>
                <span className="mb-4 inline-block rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary">
                  Hi, I'm Qilin 👋
                </span>
                <h1 className="mb-4 bg-gradient-to-br from-foreground via-foreground to-muted-foreground bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl">
                  Exploring the Art of
                  <br />
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text">
                    Software Engineering
                  </span>
                </h1>
                <p className="max-w-lg text-muted-foreground">
                  Welcome to my digital garden where I share insights on
                  technology, software development, and the craft of building
                  elegant solutions.
                </p>
              </div>
              <div className="mt-8 flex gap-4">
                <div className="glass rounded-xl px-4 py-3">
                  <p className="text-2xl font-bold text-primary">
                    {posts.length}
                  </p>
                  <p className="text-xs text-muted-foreground">Articles</p>
                </div>
                <div className="glass rounded-xl px-4 py-3">
                  <p className="text-2xl font-bold text-accent">∞</p>
                  <p className="text-xs text-muted-foreground">Ideas</p>
                </div>
              </div>
            </GlassCard>
          </BentoItem>

          {/* Quick Stats / About */}
          <BentoItem>
            <GlassCard className="h-full">
              <div className="flex h-full flex-col justify-center text-center">
                <div className="mb-2 text-4xl">🚀</div>
                <h3 className="mb-2 font-semibold">Modern Stack</h3>
                <p className="text-sm text-muted-foreground">
                  Next.js, TypeScript, Tailwind CSS
                </p>
              </div>
            </GlassCard>
          </BentoItem>

          {/* Theme Indicator */}
          <BentoItem>
            <GlassCard className="h-full">
              <div className="flex h-full flex-col justify-center text-center">
                <div className="mb-2 text-4xl">✨</div>
                <h3 className="mb-2 font-semibold">Ethereal Design</h3>
                <p className="text-sm text-muted-foreground">
                  Glassmorphism & Bento Grid
                </p>
              </div>
            </GlassCard>
          </BentoItem>
        </BentoGrid>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="mb-12">
          <h2 className="mb-6 text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Featured Post
          </h2>
          <Link href={`/posts/${featuredPost.slug}`} className="block">
            <GlassCard className="group transition-transform duration-300 hover:scale-[1.01]">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <span className="mb-2 inline-block rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-accent">
                    Latest
                  </span>
                  <h3 className="mb-2 text-2xl font-bold transition-colors group-hover:text-primary">
                    {featuredPost.title}
                  </h3>
                  <p className="mb-4 text-muted-foreground line-clamp-2">
                    {featuredPost.description}
                  </p>
                  <time className="text-sm text-muted-foreground">
                    {new Date(featuredPost.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
                <div className="flex items-center text-primary">
                  <span className="mr-2 text-sm font-medium">Read more</span>
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </GlassCard>
          </Link>
        </section>
      )}

      {/* Recent Posts Grid */}
      {recentPosts.length > 0 && (
        <section>
          <h2 className="mb-6 text-sm font-medium uppercase tracking-wider text-muted-foreground">
            More Articles
          </h2>
          <BentoGrid className="md:grid-cols-3">
            {recentPosts.map((post) => (
              <BentoItem key={post.slug}>
                <Link href={`/posts/${post.slug}`} className="block h-full">
                  <GlassCard className="group h-full transition-transform duration-300 hover:scale-[1.02]">
                    <div className="flex h-full flex-col">
                      <time className="mb-2 text-xs text-muted-foreground">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </time>
                      <h3 className="mb-2 font-semibold transition-colors group-hover:text-primary line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="mt-auto text-sm text-muted-foreground line-clamp-3">
                        {post.description}
                      </p>
                    </div>
                  </GlassCard>
                </Link>
              </BentoItem>
            ))}
          </BentoGrid>
        </section>
      )}

      {/* Empty State */}
      {posts.length === 0 && (
        <section>
          <GlassCard className="py-16 text-center">
            <div className="mb-4 text-6xl">📝</div>
            <h2 className="mb-2 text-xl font-semibold">No posts yet</h2>
            <p className="text-muted-foreground">
              Check back soon for new content!
            </p>
          </GlassCard>
        </section>
      )}
    </div>
  );
}
