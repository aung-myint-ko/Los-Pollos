import React, { useState } from "react";
import Head from "next/head";
import RecipeContent from "../../components/Menu/RecipeContent";
import { client } from "../../lib/client";

function RecipeDetails({ AllRecipes }) {
  return (
    <div>
      <Head>
        <title>Menu | Los Pollos</title>
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
      <RecipeContent Recipes={AllRecipes} />
    </div>
  );
}
export const getStaticPaths = async () => {
  const allRecipes = `*[_type == "allRecipes"] {slug {current}}`;

  const AllRecipesSlugs = await client.fetch(allRecipes);

  const paths = AllRecipesSlugs.map((recipe) => ({
    params: { recipeSlug: recipe.slug.current },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (context) => {
  const recipeSlug = context.params.recipeSlug;
  const allRecipesQuery = `*[_type == "allRecipes" && slug.current == "${recipeSlug}"][0]`;
  const AllRecipes = await client.fetch(allRecipesQuery);

  return {
    props: {
      AllRecipes,
    },
  };
};

export default RecipeDetails;
