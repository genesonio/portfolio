import { HeaderResponsive } from "@/components/Header"
import { Home } from "@/components/Home"
import { Background } from "@/components/Particles"
import { Projects } from "@/components/Projects"

import links from "@/utils/links"

import { type NextPage } from "next"

const Index: NextPage = () => {
  return (
    <>
      <Background />
      <HeaderResponsive links={links} />
      <main>
        <Home />
        <Projects />
      </main>
    </>
  )
}

export default Index
