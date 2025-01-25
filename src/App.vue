<script setup lang="ts">
import { storeToRefs } from 'pinia';

import ListCompetitors from './components/ListCompetitors.vue';
import ModalCompetitors from './components/ModalCompetitors.vue';
import ModalCompetitorsTest from './components/ModalCompetitorsTest.vue';

import { useAppStore } from './store/app.store.ts';

const appStore = useAppStore();
const { isModalVisible, competitors } = storeToRefs(appStore);
const { $resetStore } = appStore;
</script>

<template>
  <div class="grid place-items-center w-screen h-screen">
    <div class="flex flex-col gap-4 w-full max-w-[26.875rem]">
      <div class="flex justify-between items-center">
        <h2 class="text-xl">Competitors List</h2>

        <button class="px-8 py-2 border border-red-400 text-red-400 rounded-sm cursor-pointer" @click="$resetStore">Reset</button>
      </div>
  
      <ListCompetitors :items="competitors"/>
    </div>

    <!-- Modal with v-if -->
    <!-- <ModalCompetitors v-if="isModalVisible" /> -->

    <!-- Modal with v-show -->
    <ModalCompetitorsTest v-model="isModalVisible" />
  </div>
</template>
