// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  app: {
    pageTransition: { name: "rotate" },
    // head: {
    //   link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
    // },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxtjs/color-mode",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/i18n",
    "@nuxt/image",
    "@nuxtjs/mdc",
    "nuxt-svgo",
    [
      "@vee-validate/nuxt",
      {
        autoImports: false,
      },
    ],
    "@nuxtjs/i18n",
  ],
  //@ts-ignore
  svgoOption: {
    svgo: true,
    defaultImport: "component",
    svgoConfig: {
      multipass: true,
      removeViewBox: false,
    },
  },
  svgo: {
    autoImportPath: "./assets/stack-icons/",
  },

  image: {
    // Options
    // format: ["webp"],
  },

  piniaPluginPersistedstate: {
    storage: "cookies",
    debug: true,
  },
  runtimeConfig: {
    public: {
      appUrl: process.env.APP_URL,
    },
  },

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
});
