import Head from "next/head"

import { MantineProvider } from "@mantine/core"

import { type AppType } from "next/dist/shared/lib/utils"

import "@/styles/globals.css"

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>&lt;Genésio /&gt;</title>
        <meta
          name="description"
          content="Portfólio do desenvolvedor front-end Genésio S. Pacheco "
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Component {...pageProps} />
      </MantineProvider>
    </>
  )
}

export default MyApp
