import { ThemeProvider } from "styled-components";
import Layout from "../feature/layout";
import Header from "../feature/layout/Header";
import GlobalStyle from "../styles/GlobalStyle";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default MyApp;
