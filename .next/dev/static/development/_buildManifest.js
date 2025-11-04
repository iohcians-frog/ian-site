self.__BUILD_MANIFEST = {
  "/": [
    "static/chunks/pages/index.js"
  ],
  "/_error": [
    "static/chunks/pages/_error.js"
  ],
  "/serious": [
    "static/chunks/pages/serious.js"
  ],
  "/serious/[slug]": [
    "static/chunks/pages/serious/[slug].js"
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
    "/manifesto",
    "/serious",
    "/serious/[slug]"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()