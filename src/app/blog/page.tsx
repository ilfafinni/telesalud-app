import Link from "next/link"
import { blogPosts } from "@/lib/blog"
import { ArrowRight, CalendarDays, Clock, User } from "lucide-react"

export const metadata = {
  title: "Blog y noticias | TeleSalud",
  description: "Artículos, guías y consejos de nuestros especialistas para cuidar tu salud.",
}

export default function BlogPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-secondary mb-3">Blog y noticias</h1>
          <p className="text-gray-500">Artículos, guías y consejos de nuestro equipo de especialistas.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <article key={post.slug} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col hover:shadow-md hover:border-primary transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs bg-primary-light text-primary px-3 py-1 rounded-full font-medium">{post.categoria}</span>
              </div>
              <Link href={`/blog/${post.slug}`} className="group">
                <h2 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">{post.titulo}</h2>
              </Link>
              <p className="text-gray-500 text-sm mb-4">{post.excerpt}</p>
              <div className="mt-auto">
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                  <span className="flex items-center gap-1"><User size={12} /> {post.autor}</span>
                  <span className="flex items-center gap-1"><CalendarDays size={12} /> {post.fecha}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {post.lectura}</span>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-primary font-medium text-sm hover:gap-2 transition-all"
                >
                  Leer artículo <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}