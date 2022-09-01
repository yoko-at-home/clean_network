import "src/lib/tailwind.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={0}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        emotionOptions={{ key: "mantine", prepend: false }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </SessionProvider>
  );
}

export default MyApp;
