import Head from "next/head";
import Homes from "../components/Home";
import Intro from "../components/Intro";
import History from "../components/History";
import Popular from "../components/Popular";
import { client } from "../lib/client";

export default function Home({ popularRecipes }) {
  return (
    <div>
      <Head>
        <title>Los Pollos</title>
        <link rel="icon" href="/images/icon.png" />
        <meta
          name="description"
          content="Los Pollos landed in Myanmar in 1977, when the first restaurant opened its doors at Bogyoke Road"
        />
        <meta
          name="keywords"
          content="Los Pollos, los pollos, los pollos myanmar, los pollos vercel"
        />
        <meta property="og:title" content="Los Pollos" />
        <meta
          property="og:description"
          content="Los Pollos landed in Myanmar in 1977, when the first restaurant opened its doors at Bogyoke Road"
        />
        <meta
          property="og:image"
          content="https://los-pollos.vercel.app/images/icon.png"
        />
        <meta property="og:type" content="food delivery" />
        <meta property="twitter:title" content="Los Pollos" />
        <meta
          property="twitter:description"
          content="Los Pollos landed in Myanmar in 1977, when the first restaurant opened its doors at Bogyoke Road"
        />
        <meta
          property="twitter:image"
          content="https://los-pollos.vercel.app/images/icon.png"
        />
        <meta name="twitter:card" content="summary" />
      </Head>
      <Homes />
      <Intro />
      <Popular popularRecipes={popularRecipes} />
      <History />
    </div>
  );
}

export const getStaticProps = async () => {
  const query = `*[_type == "popular"]`;
  const popularRecipes = await client.fetch(query);
  return {
    props: {
      popularRecipes,
    },
  };
};
