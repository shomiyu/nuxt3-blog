<script setup>
const ctx = useRuntimeConfig();

const { data } = await useFetch("/blog", {
  baseURL: ctx.baseURL,
  headers: {
    "X-MICROCMS-API-KEY": ctx.apiKey,
  },
});
</script>

<template>
  <div>
    <h1>Hello, Nuxt3!</h1>
    <ul class="test">
      <li v-for="article in data.contents" :key="article.id">
        <router-link :to="`/${article.id}`">{{ article.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.test {
  li {
    a {
      color: red;
    }
  }
}
</style>
