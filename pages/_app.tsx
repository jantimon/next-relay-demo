import type { AppProps } from "next/app";
import React from "react";
import { ReactRelayContainer } from "../data/ReactRelayContainer";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ReactRelayContainer Component={Component} props={pageProps} />
  );
}
