import { defineNuxtConfig } from "nuxt3";
const { BASE_URL, API_KEY } = process.env;

export default defineNuxtConfig({
  /**
   * See: https://v3.nuxtjs.org/docs/directory-structure/nuxt.config#css
   */
  ssr: true,
  css: [],
  // SSGに未対応のためAPI_KEYはpublicに&GETのみなので見えても問題なし
  publicRuntimeConfig: {
    baseURL: BASE_URL,
  },
  privateRuntimeConfig: {
    apiKey: API_KEY,
  },
});
