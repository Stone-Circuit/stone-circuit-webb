import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Stone Circuit",
    short_name: "Stone Circuit",
    description: "Intelligent business software designed to simplify complex operations.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#00baa3",
    icons: [
      {
        src: "/icon",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
