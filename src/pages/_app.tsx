import Head from "next/head"

import { MantineProvider } from "@mantine/core"

import { type AppType } from "next/dist/shared/lib/utils"

import "@/styles/globals.css"
import theme from "@/utils/theme"

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
      <!-- Google tag (gtag.js) -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-6X984J7KRR"></script>
      <script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-6X984J7KRR');
      </script>
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

      <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
        <Component {...pageProps} />
      </MantineProvider>
    </>
  )
}

export default MyApp
