import { useEffect, useCallback } from "react";

export const useScroll = (
  callback: () => void,
  hasMore: boolean,
  loading: boolean
) => {
  const handleScroll = useCallback(() => {
    if (loading || !hasMore) return;

    const scrollTop = document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.offsetHeight;

    if (scrollTop + windowHeight >= documentHeight - 200) {
      callback();
    }
  }, [callback, hasMore, loading]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
};
