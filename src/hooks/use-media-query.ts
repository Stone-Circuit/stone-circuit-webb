import { useState, useEffect } from "react";

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    
    const handle = requestAnimationFrame(() => {
      setMatches(media.matches);
    });

    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    
    return () => {
      cancelAnimationFrame(handle);
      media.removeEventListener("change", listener);
    };
  }, [query]);

  return matches;
}
