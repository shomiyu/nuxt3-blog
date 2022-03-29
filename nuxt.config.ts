import { defineNuxtConfig } from "nuxt3";
const { BASE_URL, API_KEY } = process.env;

export default defineNuxtConfig({
  /**
   * See: https://v3.nuxtjs.org/docs/directory-structure/nuxt.config#css
   */
  css: [],
  publicRuntimeConfig: {
    baseURL: BASE_URL,
    apiKey: API_KEY,
  },
});
