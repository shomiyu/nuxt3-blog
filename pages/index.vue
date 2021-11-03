<script setup>
const { data } = await useFetch("/blog", {
  baseURL: "https://eureka.microcms.io/api/v1",
  headers: {
    "X-MICROCMS-API-KEY": "dd786b48c45344139fc3cd04474c2d64e0fb",
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
