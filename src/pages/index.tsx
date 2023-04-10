import { HeaderResponsive } from "@/components/Header"
import { Background } from "@/components/Particles"
import links from "@/utils/links"

import { type NextPage } from "next"

const Home: NextPage = () => {
  return (
    <main>
      <Background />
      <HeaderResponsive links={links} />

      <section></section>
    </main>
  )
}

export default Home
