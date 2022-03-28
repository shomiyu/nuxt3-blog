import { defineNuxtConfig } from "nuxt3";
const { BASE_URL, API_KEY } = process.env;

export default defineNuxtConfig({
  /**
   * See: https://v3.nuxtjs.org/docs/directory-structure/nuxt.config#css
   */
  css: [],
  privateRuntimeConfig: {
    apiKey: API_KEY,
  },
  publicRuntimeConfig: {
    baseURL: BASE_URL,
    apiKey: process.env.NODE_ENV !== "production" ? API_KEY : undefined,
  },
});
