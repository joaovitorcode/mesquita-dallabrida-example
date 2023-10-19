import { Communication } from "@/components/Communication"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Thumbnail } from '@/components/Thumbnail'
import { RichText } from '@/components/RichText'
import Image from "next/image"

import { getFooter } from '@/utils/getFooter'
import { getPosts } from '@/utils/getPosts'
import { getPostBySlug } from '@/utils/getPostBySlug'

export default function Post({ data }: any) {
  if (!data) return
  const { footer, posts, post } = JSON.parse(data)

  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  const handlePosts = () => {
    const thumbnails: any = []
    for (let i = 0; i < 3; i++) {
      thumbnails.push(
        <Thumbnail key={posts[i].slug} post={posts[i]} />
      )
    }
    return thumbnails
  } 

  return (
    <>
      <Communication />
      <Header />
      <div className="relative sm:static top-[72px]">
        <main className="max-w-3xl mx-auto p-4 xl:px-0">
          <div className="flex gap-4 flex-wrap items-center">
            <p className="text-sm font-medium py-1 px-3 text-main bg-red-100 rounded-2xl">
              {post.tag}
            </p>
            <p className="text-sm text-gray-900">
              {post.date}
            </p>
            <p className="text-sm text-main font-bold">
              {post.author}
            </p>
          </div>
          <h2 className="text-gray-900 font-bold text-2xl mt-6">
            {post.title}
          </h2>
          <Image
            src={post.image.url}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-[512px] rounded-2xl object-cover mt-6"
          />
          <article className="prose prose-headings:text-start text-justify prose-base sm:prose-lg md:prose-xl mt-6">
            <RichText content={post.body.raw} />
          </article>
          <h3 className="text-4xl font-bold pt-16">Artigos Recomendados</h3>
          <div className="mt-6 mb-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {handlePosts()}
          </div>
        </main>
        <Footer footer={footer} />
      </div>
    </>
  )
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

export async function getStaticProps(context: any) {
  const { slug = '' } = context.params

  const { footer } = await getFooter()
  const { posts } = await getPosts()
  const { post } = await getPostBySlug(slug)

  return {
    props: {
      data: JSON.stringify({
        footer,
        posts,
        post
      }) || null
    }
  }
}