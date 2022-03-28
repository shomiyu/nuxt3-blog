import { defineNuxtConfig } from "nuxt3";
const { BASE_URL, API_KEY } = process.env;

export default defineNuxtConfig({
  /**
   * See: https://v3.nuxtjs.org/docs/directory-structure/nuxt.config#css
   */
  css: [],
  // 最初のやつ
  // privateRuntimeConfig: {
  //   apiKey: process.env.NODE_ENV !== "production" ? API_KEY : undefined,
  // },
  // publicRuntimeConfig: {
  //   baseURL: BASE_URL,
  //   apiKey: API_KEY,
  // },

  privateRuntimeConfig: {
    baseURL: BASE_URL,
    apiKey: API_KEY,
  },

  publicRuntimeConfig: {
    // baseURL: BASE_URL,
    // apiKey: API_KEY,
    apiKey: process.env.NODE_ENV !== "production" ? API_KEY : API_KEY,
  },
});
