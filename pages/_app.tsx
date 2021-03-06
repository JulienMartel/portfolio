import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Head from "next/head";

const colors = {
  off: {
    white: "#b8b8b8",
    black: "#292929",
  },
};

const styles = {
  global: {
    body: {
      bg: "off.black",
    },
  },
};

const theme = extendTheme({
  colors,
  styles,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider {...{ theme }}>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <Seo />

      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;

const Seo = () => (
  <NextSeo
    title="jubag"
    description="dev portfolio"
    canonical="https://jubag.dev"
    openGraph={{
      url: "https://jubag.dev",
      title: "jubag",
      description: "dev portfolio",
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 628,
          alt: "jubag portfolio",
        },
      ],
      siteName: "jubag",
    }}
    twitter={{
      handle: "@cc4888",
      site: "@cc4888",
      cardType: "summary_large_image",
    }}
  />
);
