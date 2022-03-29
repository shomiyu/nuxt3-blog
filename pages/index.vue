<script setup>
const ctx = useRuntimeConfig();

console.log(ctx.apiKey);

const { data } = await useFetch("/blog", {
  baseURL: "https://eureka.microcms.io/api/v1",
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
        <NuxtLink :to="`/${article.id}`">{{ article.title }}</NuxtLink>
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
