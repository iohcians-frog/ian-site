self.__BUILD_MANIFEST = {
  "/": [
    "static/chunks/pages/index.js"
  ],
  "/cases/[slug]": [
    "static/chunks/pages/cases/[slug].js"
  ],
  "__rewrites": {
    "afterFiles": [],
    "beforeFiles": [],
    "fallback": []
  },
  "sortedPages": [
    "/",
    "/_app",
    "/_error",
    "/about",
    "/cases",
    "/cases/[slug]",
    "/manifesto"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()