import type { PageKeywords } from "@interfaces/keywords";


export default function processKeywords(pageKeywords: PageKeywords): PageKeywords {
  const uniqueKeywords = Array.from(new Set(pageKeywords.keywords.map(kw => kw.toLowerCase())));
  return { keywords: uniqueKeywords };
}