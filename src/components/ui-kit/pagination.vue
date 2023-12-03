<template>
  <div class="example-six">
    <vue-awesome-paginate
      :total-items="total"
      v-model="currentPage"
      @click="onClickHandler"
    >
      <template #prev-button>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
<rect width="40" height="40" rx="10" fill="#F5F9FF"/>
<rect x="0.25" y="0.25" width="39.5" height="39.5" rx="9.75" stroke="#2E3A59" stroke-opacity="0.04" stroke-width="0.5"/>
<path d="M17.3594 14.5C17.5579 14.3015 17.8796 14.3015 18.0781 14.5L23.2188 19.6406C23.411 19.8416 23.411 20.1584 23.2188 20.3594L18.0781 25.5C17.8796 25.6985 17.5579 25.6985 17.3594 25.5C17.1609 25.3015 17.1609 24.9797 17.3594 24.7812L22.1406 20L17.3594 15.2187C17.1609 15.0203 17.1609 14.6985 17.3594 14.5Z" fill="#8181A5"/>
</svg>
        </span>
      </template>

      <template #next-button>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
<rect width="40" height="40" rx="10" fill="#F5F9FF"/>
<rect x="0.25" y="0.25" width="39.5" height="39.5" rx="9.75" stroke="#2E3A59" stroke-opacity="0.04" stroke-width="0.5"/>
<path d="M17.3594 14.5C17.5579 14.3015 17.8796 14.3015 18.0781 14.5L23.2188 19.6406C23.411 19.8416 23.411 20.1584 23.2188 20.3594L18.0781 25.5C17.8796 25.6985 17.5579 25.6985 17.3594 25.5C17.1609 25.3015 17.1609 24.9797 17.3594 24.7812L22.1406 20L17.3594 15.2187C17.1609 15.0203 17.1609 14.6985 17.3594 14.5Z" fill="#8181A5"/>
</svg>
        </span>
      </template>
    </vue-awesome-paginate>
  </div>
</template>

<script setup lang="ts">
 import { ref, computed } from "vue";
 import { usePoolListStore } from "@/stores/poolList";

 const poolListStore = usePoolListStore();
  const limit = 10
  const onClickHandler = (page: number) => {
    poolListStore.setOffset(page * limit - limit)
  };

  const total = computed(() => {
    return poolListStore.poolsHundred.length
  })

  const currentPage = ref(1);
</script>

<style>
.example-six{
  width: 90%;
}
.example-six .pagination-container {
  column-gap: 10px;
  align-items: center;
}
.example-six .paginate-buttons {
  height: 35px;
  width: 35px;
  cursor: pointer;
  border-radius: 6px;
  background-color: transparent;
  border: none;
  color: black;
  font-family: 'Inter';
  font-weight: 600;
  font-size: 14px;
  line-height: 18.2px;
}

.example-six .back-button,
.example-six .next-button {
  border-radius: 8px;
  height: 45px;
  width: 45px;
}
.example-six .active-page {
  background-color: #F4F9FE;
  color:rgba(87, 126, 247, 0.96);
  position: relative;
}

.example-six .active-page::after {
    content: "";
    display: block;
    width: 30px;
    height: 3px;
    background-color: rgba(94, 129, 244, 1);
    border-radius: 6px;
    position: absolute;
    bottom: -13px;
    left: 3px;
}
.example-six .paginate-buttons {
  border: 1px solid rgba(46, 58, 89, 0.04);
}
.example-six .paginate-buttons:hover {
  background-color: rgba(94, 129, 244, 0.1);
}
.example-six .active-page:hover {
  background-color: rgba(94, 129, 244, 0.1);
}

.example-six .back-button svg {
  transform: rotate(180deg) translateY(-2px);
}
.example-six .next-button svg {
  transform: translateY(2px);
}

.example-six .back-button:hover,
.example-six .next-button:hover {
  background-color: transparent;
}

.example-six .back-button,
.example-six .next-button {
  border: none;
}
</style>