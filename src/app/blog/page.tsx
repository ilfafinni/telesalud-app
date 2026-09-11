"use client"

import { useState } from "react"
import Link from "next/link"
import { blogPosts } from "@/lib/blog"
import {
  ArrowRight,
  BookOpenText,
  CalendarDays,
  Clock,
  User,
} from "lucide-react"

const categorias = ["Todos", ...Array.from(new Set(blogPosts.map((post) => post.categoria)))]

const pillStyles: Record<string, string> = {
  Telemedicina: "bg-primary-light text-primary",
  Cardiología: "bg-rose-50 text-rose-600",
  Nutrición: "bg-amber-50 text-amber-600",
  Pediatría: "bg-blue-50 text-blue-600",
  Psiquiatría: "bg-violet-50 text-violet-600",
}

export default function BlogPage() {
  const [activeCategoria, setActiveCategoria] = useState("Todos")

  const filteredPosts =
    activeCategoria === "Todos"
      ? blogPosts
      : blogPosts.filter((post) => post.categoria === activeCategoria)

  const [featured, ...rest] = filteredPosts

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero banner */}
      <section className="relative overflow-hidden bg-gradient-to-r from-secondary to-secondary-dark text-white">
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-accent/10" />
        <div className="absolute -bottom-24 -left-16 w-72 h-72 rounded-full bg-primary/30" />
        <div className="relative max-w-5xl mx-auto px-4 py-14 md:py-20 text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide uppercase">
            <BookOpenText size={14} className="text-accent" />
            TeleSalud Blog
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mt-5">Blog y noticias</h1>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            Artículos, guías y consejos de nuestro equipo de especialistas para cuidar tu salud.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Category filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categorias.map((categoria) => {
            const isActive = categoria === activeCategoria
            return (
              <button
                key={categoria}
                onClick={() => setActiveCategoria(categoria)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  isActive
                    ? "bg-primary text-white shadow-md shadow-primary/25"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-primary hover:text-primary"
                }`}
              >
                {categoria}
              </button>
            )
          })}
        </div>

        {/* Featured post */}
        {featured && (
          <article className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-dark text-white shadow-lg shadow-primary/20 mb-8">
            <div className="absolute -right-12 -top-12 w-56 h-56 rounded-full bg-white/10" />
            <div className="absolute right-16 bottom-0 w-40 h-40 rounded-full bg-white/5" />
            <div className="relative p-8 md:p-10">
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="text-xs font-semibold bg-white/20 px-3 py-1 rounded-full">
                  {featured.categoria}
                </span>
                <span className="text-xs font-medium inline-flex items-center gap-1.5 opacity-80">
                  <BookOpenText size={13} /> Lectura destacada
                </span>
              </div>
              <Link
                href={`/blog/${featured.slug}`}
                className="group-hover:underline decoration-2 underline-offset-8"
              >
                <h2 className="text-2xl md:text-4xl font-bold leading-tight">{featured.titulo}</h2>
              </Link>
              <p className="mt-4 text-white/80 max-w-2xl text-sm md:text-base">{featured.excerpt}</p>
              <div className="mt-6 flex flex-wrap items-center gap-5 text-xs md:text-sm text-white/75">
                <span className="flex items-center gap-1.5">
                  <User size={14} /> {featured.autor}
                </span>
                <span className="flex items-center gap-1.5">
                  <CalendarDays size={14} /> {featured.fecha}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={14} /> {featured.lectura}
                </span>
              </div>
              <Link
                href={`/blog/${featured.slug}`}
                className="mt-7 inline-flex items-center gap-2 bg-white text-primary font-semibold text-sm px-5 py-2.5 rounded-full hover:gap-3 hover:bg-accent hover:text-white transition-all"
              >
                Leer artículo <ArrowRight size={16} />
              </Link>
            </div>
          </article>
        )}

        {/* Post grid */}
        {rest.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => {
              const pill = pillStyles[post.categoria] ?? "bg-primary-light text-primary"
              return (
                <article
                  key={post.slug}
                  className="group bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col hover:shadow-lg hover:border-primary hover:-translate-y-1 transition-all"
                >
                  <div className="mb-4">
                    <span className={`text-xs px-3 py-1 rounded-full font-semibold ${pill}`}>
                      {post.categoria}
                    </span>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-lg font-bold text-secondary mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.titulo}
                    </h3>
                  </Link>
                  <p className="text-sm text-gray-500 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-gray-400 mb-4">
                      <span className="flex items-center gap-1">
                        <User size={12} /> {post.autor}
                      </span>
                      <span className="flex items-center gap-1">
                        <CalendarDays size={12} /> {post.fecha}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} /> {post.lectura}
                      </span>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:gap-2 transition-all"
                    >
                      Leer artículo <ArrowRight size={14} />
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        ) : (
          <p className="text-center text-gray-500">No hay artículos en esta categoría.</p>
        )}
      </div>
    </div>
  )
}