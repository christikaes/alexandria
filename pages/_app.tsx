import type { AppProps } from "next/app";
import { CssVarsProvider } from "@mui/joy";
import "normalize.css/normalize.css";
import { theme } from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CssVarsProvider theme={theme}>
      <Component {...pageProps} />
    </CssVarsProvider>
  );
}

export default MyApp;
