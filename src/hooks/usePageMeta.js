import { useEffect } from "react";

const BASE_TITLE = "ecogad";

export default function usePageMeta(pageTitle, description) {
  useEffect(() => {
    const fullTitle = pageTitle ? `${pageTitle} | ${BASE_TITLE}` : BASE_TITLE;
    document.title = fullTitle;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && description) {
      metaDescription.setAttribute("content", description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", fullTitle);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription && description) {
      ogDescription.setAttribute("content", description);
    }
  }, [pageTitle, description]);
}
