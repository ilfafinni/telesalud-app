import Link from "next/link"
import { notFound } from "next/navigation"
import { blogPosts } from "@/lib/blog"
import { ArrowLeft, User, CalendarDays, Clock, ChevronRight } from "lucide-react"

export const metadata = {
  title: "Blog TeleSalud",
  description: "Artículos y consejos de nuestros especialistas.",
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const relacionados = blogPosts.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4">
        <Link href="/blog" className="inline-flex items-center gap-1 text-gray-500 hover:text-primary mb-8">
          <ArrowLeft size={16} /> Volver al blog
        </Link>

        <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs bg-primary-light text-primary px-3 py-1 rounded-full font-medium">{post.categoria}</span>
              <span className="text-xs text-gray-400 flex items-center gap-1"><User size={12} /> {post.autor}</span>
              <span className="text-xs text-gray-400 flex items-center gap-1"><CalendarDays size={12} /> {post.fecha}</span>
              <span className="text-xs text-gray-400 flex items-center gap-1"><Clock size={12} /> {post.lectura}</span>
            </div>

            <h1 className="text-3xl font-bold text-secondary mb-6">{post.titulo}</h1>

            <div className="prose prose-lg max-w-none space-y-4">
              {post.contenido.map((parrafo, i) => (
                <p key={i} className="text-gray-600 leading-relaxed">{parrafo}</p>
              ))}
            </div>
          </div>
        </article>

        <div className="mt-10">
          <h2 className="text-xl font-semibold text-secondary mb-4">Artículos relacionados</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {relacionados.map((art) => (
              <Link
                key={art.slug}
                href={`/blog/${art.slug}`}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md hover:border-primary transition-all"
              >
                <span className="text-xs bg-primary-light text-primary px-2 py-0.5 rounded-full font-medium">{art.categoria}</span>
                <h3 className="font-semibold text-secondary text-sm mt-2 mb-1">{art.titulo}</h3>
                <p className="text-xs text-gray-400 flex items-center gap-1">
                  {art.fecha} · {art.lectura}
                </p>
                <span className="text-sm text-primary font-medium flex items-center gap-1 mt-2">
                  Leer <ChevronRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}