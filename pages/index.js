import Head from "next/head";
import dynamic from "next/dynamic";
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
        <meta
          name="description"
          content="Los Pollos landed in Myanmar in 1977,  when the first restaurant opened its doors at Bogyoke Road"
        />
        <meta
          name="keywords"
          content="Los Pollos, los pollos, los pollos myanmar"
        />
        <link rel="icon" href="/images/icon.png" />
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
