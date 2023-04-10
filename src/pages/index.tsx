import { HeaderResponsive } from "@/components/Header"
import ParticlesComponent from "@/components/Particles"
import links from "@/links"

import { type NextPage } from "next"

const Home: NextPage = () => {
  return (
    <main>
      <ParticlesComponent />
      <HeaderResponsive links={links} />

      <section></section>
    </main>
  )
}

export default Home
