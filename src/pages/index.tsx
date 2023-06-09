import {Bio} from "@/components/Bio"
import {Contact} from "@/components/Contact"
import {HeaderResponsive} from "@/components/Header"
import {Home} from "@/components/Home"
import {Background} from "@/components/Particles"
import {Projects} from "@/components/Projects"
import {Footer} from "@/components/Footer"

import links from "@/utils/links"

import {type NextPage} from "next"
import {BackToTop} from "@/components/BackToTop"

const Index: NextPage = () => {
  return (
    <main>
      <Background />
      <HeaderResponsive links={links} />
      <Home />
      <Projects />
      <Bio />
      <Contact />
      <BackToTop />
      <Footer />
    </main>
  )
}

export default Index
