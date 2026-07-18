import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Stone Circuit",
    short_name: "Stone Circuit",
    description: "Building Intelligent Business Software",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#00baa3",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
