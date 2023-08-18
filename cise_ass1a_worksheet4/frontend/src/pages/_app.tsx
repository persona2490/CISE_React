import "/Users/wangsiyi/Documents/GitHub/CISE_React/cise_ass1a_worksheet4/frontend/src/styles/globals.scss";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import PopulatedNavBar from "/Users/wangsiyi/Documents/GitHub/CISE_React/cise_ass1a_worksheet4/frontend/src/components/table/PopulatedNavBar";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <PopulatedNavBar />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
