import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";
export const client = createClient({
  projectId: "mw2yrr18",
  dataset: "production",
  apiVersion: "2022-07-30",
  useCdn: false,
  token:
    "skccw3586jvuS5Ub3UVz2hqEZg2Pfd28do44ZBBYxeSBoh9yM98UwztZDoM62sowA1lHzP2Xkp8Q87ytnFLfuL9wAGlUqQoUxmRpD5eiozVuC1UMH4gs5zVzCQNOO0NWRDAKrqG3oiKTeZUkdtodxyKAPwft5cT1DhaPEUM3MV3kUhWVAT5M",
});

const builder = ImageUrlBuilder(client);

export const Urlfor = (source) => builder.image(source);
