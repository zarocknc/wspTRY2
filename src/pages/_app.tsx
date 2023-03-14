import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import NavBar from "@/components/navigation/NavBar";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <NavBar />
      <Component {...pageProps} />
    </SessionProvider>
  );
}
