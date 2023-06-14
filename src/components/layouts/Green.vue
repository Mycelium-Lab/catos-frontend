<template>
  <div>
    <header>
      <ul class="nav">
        <li>
          <router-link class="link" to="/">Домашняя страница</router-link>
        </li>
        <li><router-link class="link" to="/page2">Страница 1</router-link></li>
        <li><router-link class="link" to="/page3">Страница 2</router-link></li>
        <li><router-link class="link" to="/page4">Страница 2</router-link></li>
      </ul>
    </header>
    <section class="content">
      <!--Элемент, который при отрисовке будет заменен на ваш view-->
      <slot />
    </section>
    <footer></footer>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
header {
  background-color: green;
  height: 70px;
  display: flex;
  align-items: center;
}

footer {
  background-color: green;
  height: 70px;
}

.content {
  min-height: calc(100vh - 140px);
}

ul {
  list-style: none;
  margin: 0;
  color: white;
}

li {
  color: white;
  display: inline;
  margin: 0 5px;
}

.link {
  color: white;
  text-decoration: none;
}
</style>
