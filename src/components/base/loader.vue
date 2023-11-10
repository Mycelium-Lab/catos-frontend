<template>
    <img class="loader" src="@/assets/images/loader.svg" />
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.loader{
    animation: loader 1s linear 0s infinite normal none running;
    -webkit-animation: loader 1s linear 0s infinite normal none running;
    display: flex;
    justify-content: center;
    margin-top: 28px;
}

@keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>