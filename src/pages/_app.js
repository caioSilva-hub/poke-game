import { ThemeProvider } from "styled-components";
import React from "react";
import GlobalStyle from "../styles/globalStyled";
import { Theme } from "../../src/styles/themes/theme";
import pokeball from "../../public/images/pokeball.png";

import Head from "next/head";
function MyApp({ Component, pageProps }) {
  const tema = Theme;
  return (
    <>
      <Head>
        <title>Pokemon</title>
        <link href={pokeball} />
      </Head>
      <ThemeProvider theme={tema}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
