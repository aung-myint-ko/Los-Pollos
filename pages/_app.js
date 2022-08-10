import Layout from "../components/Layout";
import Link from "next/link";
import "../styles/globals.css";
import Router from "next/router";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import { useEffect, useState } from "react";
import AOS from "aos";
import Loading from "../components/Loading";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, [4000]);
    AOS.init({
      easing: "ease-out-cubic",
      duration: 800,
      offset: 30,
    });
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <NextNProgress color="#f64b15" />
          <Head>
            <link
              rel="stylesheet"
              href="https://unpkg.com/aos@next/dist/aos.css"
            />
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
              integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
              crossOrigin="anonymous"
              referrerPolicy="no-referrer"
            />
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </>
      )}
    </>
  );
}

export default MyApp;
