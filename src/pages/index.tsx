import { Bio } from "@/components/Bio"
import { HeaderResponsive } from "@/components/Header"
import { Home } from "@/components/Home"
import { Background } from "@/components/Particles"
import { Projects } from "@/components/Projects"

import links from "@/utils/links"

import { type NextPage } from "next"

const Index: NextPage = () => {
  return (
    <>
      <main>
        <Background />
        <HeaderResponsive links={links} />
        <Home />
        <Projects />
        <Bio />
      </main>
    </>
  )
}

export default Index
