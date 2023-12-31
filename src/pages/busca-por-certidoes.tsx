import Head from 'next/head'

import { Communication } from '@/components/Communication'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { AboutUs } from '@/components/AboutUs'
import { Section1 } from '@/components/busca-por-certidoes/Section1'
import { Section2 } from '@/components/busca-por-certidoes/Section2'
import { Section3 } from '@/components/busca-por-certidoes/Section3'
import { Section4 } from '@/components/busca-por-certidoes/Section4'
import { Chat } from '@/components/landing-page/Chat'

import { getFooter } from '@/utils/getFooter'
import { getTestimonials } from '@/utils/getTestimonials'
import { getAboutUs } from '@/utils/getAboutUs'
import { getInfos } from '@/utils/getInfos'
import { getTags } from '@/utils/getTags'

export default function BuscaPorCertidoes({ data }: any) {
  if (!data) return
  const { footer, testimonials, aboutUs, infos, tags } = JSON.parse(data)

  const homeTags = tags.filter((tag: any) => tag.page === "Busca por Certidões")
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
        <Section1 infos={infos} />
        <Section2 infos={infos} />
        <Section3 infos={infos} />
        <Section4 testimonials={testimonials} />
        <AboutUs aboutUs={aboutUs} />
        <Footer footer={footer} />
      </div>
      <Chat />
    </>
  )
}

export async function getStaticProps() {
  const { footer } = await getFooter()
  const { testimonials } = await getTestimonials()
  const { aboutUs } = await getAboutUs()
  const { infos } = await getInfos()
  const { tags } = await getTags()

  return {
    props: {
      data: JSON.stringify({
        footer,
        testimonials,
        aboutUs,
        infos,
        tags
      }) || null
    }
  }
}