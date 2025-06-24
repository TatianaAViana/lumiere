import Link from "next/link"
import Image from "next/image"
import { Calendar, Share2 } from "lucide-react"

const blogPosts = [
  {
    id: "tudo-sobre-alisamentos",
    title: "Tudo sobre alisamentos",
    excerpt: "Descubra os diferentes tipos de alisamentos e qual é o mais adequado para o seu tipo de cabelo.",
    date: "15 de Janeiro, 2024",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "microblading-sobrancelha-fio-fio",
    title: "Microblading: a sobrancelha fio a fio",
    excerpt: "Conheça a técnica revolucionária que cria sobrancelhas perfeitas e naturais.",
    date: "10 de Janeiro, 2024",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "corte-feminino-2025-tendencias",
    title: "Corte feminino 2025: Tendências",
    excerpt: "As principais tendências em cortes femininos para este ano que está a chegar.",
    date: "5 de Janeiro, 2024",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "gravida-escova-progressiva-alisamento",
    title: "Grávida pode fazer escova progressiva e alisamento?",
    excerpt: "Esclarecemos todas as dúvidas sobre tratamentos capilares durante a gravidez.",
    date: "28 de Dezembro, 2023",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "beneficios-depilacao-laser-diodo",
    title: "Benefícios da depilação a laser diodo para uma pele suave e sem pelos",
    excerpt: "Descubra as vantagens da depilação definitiva com tecnologia laser diodo.",
    date: "20 de Dezembro, 2023",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "coloracao-tom-sobre-tom",
    title: "Coloração tom sobre tom, o que é?",
    excerpt: "Entenda esta técnica de coloração suave que realça a cor natural dos cabelos.",
    date: "15 de Dezembro, 2023",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function BlogPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-roxo-acinzentado mb-8 text-center">Blog</h1>
          <p className="text-cinza-claro text-center mb-12 max-w-2xl mx-auto">
            Fique por dentro das últimas tendências em beleza, dicas de cuidados e novidades do mundo da estética.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-branco-neve rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <Link href={`/blog/${post.id}`}>
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </Link>

                <div className="p-6">
                  <div className="flex items-center text-cinza-claro text-sm mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    {post.date}
                  </div>

                  <Link href={`/blog/${post.id}`}>
                    <h2 className="text-xl font-semibold text-roxo-acinzentado mb-3 hover:text-opacity-80 transition-colors">
                      {post.title}
                    </h2>
                  </Link>

                  <p className="text-cinza-claro text-sm mb-4 leading-relaxed">{post.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-roxo-acinzentado font-semibold text-sm hover:underline"
                    >
                      Ler mais
                    </Link>

                    <button className="text-cinza-claro hover:text-roxo-acinzentado transition-colors">
                      <Share2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-cinza-claro mb-4">Partilhe os nossos artigos</p>
            <div className="flex justify-center space-x-4">
              <button className="bg-roxo-acinzentado text-branco-neve p-3 rounded-full hover:bg-opacity-90 transition-colors">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
