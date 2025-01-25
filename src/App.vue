<script setup lang="ts">
import { storeToRefs } from 'pinia';

import ListCompetitors from './components/ListCompetitors.vue';
import Modal from './components/Modal.vue';
import ModalTest from './components/ModalTest.vue';


import { useAppStore } from './store/app.store.ts';

const appStore = useAppStore();
const { competitors } = storeToRefs(appStore);
</script>

<template>
  <div class="grid place-items-center w-screen h-screen">
    <div class="flex flex-col gap-4 w-full max-w-[26.875rem]">
      <h2 class="text-xl">Competitors List</h2>
  
      <ListCompetitors :items="competitors"/>
    </div>

    <!-- Modal with v-if -->
    <!-- <Modal /> -->

    <!-- Modal with v-show -->
    <ModalTest />
  </div>
</template>
