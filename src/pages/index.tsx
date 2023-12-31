import Head from 'next/head'

import { Communication } from '@/components/Communication'
import { Header } from '@/components/Header'
import { Banner } from '@/components/Banner'
import { AboutUs } from '@/components/AboutUs'
import { OurTeam } from '@/components/OurTeam'
import { OurServices } from '@/components/OurServices'
import { Testimonials } from '@/components/Testimonials'
import { OurBlog } from '@/components/OurBlog'
import { Advantages } from '@/components/Advantages'
import { FAQ } from '@/components/FAQ'
import { Footer } from '@/components/Footer'
import { Qualities } from '@/components/Qualities'
import { Chat } from '@/components/landing-page/Chat'

import { getApresentation } from '@/utils/getApresentation'
import { getQualities } from '@/utils/getQualities'
import { getAboutUs } from '@/utils/getAboutUs'
import { getOurTeams } from '@/utils/getOurTeams'
import { getServices } from '@/utils/getServices'
import { getTestimonials } from '@/utils/getTestimonials'
import { getFaqs } from '@/utils/getFaqs'
import { getFooter } from '@/utils/getFooter'
import { getPosts } from '@/utils/getPosts'
import { getTags } from '@/utils/getTags'

export default function Home({ data }: any) {
  if (!data) return
  const {
    apresentation,
    qualities,
    aboutUs,
    ourTeams,
    services,
    testimonials,
    faqs,
    footer,
    posts,
    tags
  } = JSON.parse(data)

  const homeTags = tags.filter((tag: any) => tag.page === "Início")
  const title = homeTags.filter((homeTag: any) => homeTag.tag === "Title")[0]
  const metaDescription = homeTags.filter((homeTag: any) => homeTag.tag === "Meta Description")[0]

  return (
    <>
      <Head>
        <title>{title.value}</title>
        <meta name="description" content={metaDescription.value} />
      </Head>
      <Communication />
      <Header />
      <div className="relative sm:static top-[64px]">
        <Banner apresentation={apresentation} />
        <Qualities qualities={qualities} />
        <AboutUs aboutUs={aboutUs} />
        <OurTeam ourTeams={ourTeams} />
        <OurServices services={services} />
        <Testimonials testimonials={testimonials} />
        <OurBlog posts={posts} />
        <Advantages />
        <FAQ faqs={faqs} />
        <Footer footer={footer} />
      </div>
      <Chat />
    </>
  )
}

export async function getStaticProps() {
  const { apresentation } = await getApresentation()
  const { qualities } = await getQualities()
  const { aboutUs } = await getAboutUs()
  const { ourTeams } = await getOurTeams()
  const { services } = await getServices()
  const { testimonials } = await getTestimonials()
  const { faqs } = await getFaqs()
  const { footer } = await getFooter()
  const { posts } = await getPosts()
  const { tags } = await getTags()

  return {
    props: {
      data: JSON.stringify({
        apresentation,
        qualities,
        aboutUs,
        ourTeams,
        services,
        testimonials,
        faqs,
        footer,
        posts,
        tags
      }) || null
    }
  }
}