import { useEffect, useState } from "react";

function useQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false);

  const handleChange = (e: any) => setMatches(e.matches);

  useEffect(() => {
    const m = window.matchMedia(query);

    setMatches(m.matches);

    m.addEventListener("change", handleChange);

    return () => {
      m.removeEventListener("change", handleChange);
    };
  }, [query]);

  return !matches;
}

export default useQuery;
