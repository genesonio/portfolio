import { type AppType } from "next/dist/shared/lib/utils"
import ParticlesComponent from "@/components/Particles"

import "@/styles/globals.css"

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <ParticlesComponent />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
