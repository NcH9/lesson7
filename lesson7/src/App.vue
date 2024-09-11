<script setup>
import { RouterLink, RouterView } from 'vue-router'
import task7 from './components/task7.vue';
import task7_2 from './components/task7_2.vue';
import task7_3 from './components/task7_3.vue';
</script>

<template>
  <div class="grid">
    <div class="tasks">
      Slots:
      <task7 />
    </div>
    <div class="tasks">
      Mixins:
      <task7_2 />
    </div>
    <div class="tasks">
      Directives
      <task7_3/>
    </div>
  </div>
  


  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.grid {
  display: grid;
}
.tasks {
  background-color: rgb(145, 194, 132);
  color: black;
  padding: 15px;
  margin: 15px;
  border-radius: 15px;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
