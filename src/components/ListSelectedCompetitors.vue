<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { useAppStore } from '../store/app.store.ts';

const appStore = useAppStore();
const { selectedCompetitorsId } = storeToRefs(appStore);
const { handleDeselectCompetitor } = appStore;
</script>

<template>
  <div class="flex flex-col gap-4">
    <h2>Selected Competitors</h2>

    <ul class="flex flex-col gap-2">
      <li
        v-for="competitor in selectedCompetitorsId"
        :key="competitor"
        class="flex justify-between items-center p-4 border border-blue-400 rounded-sm"
      >
        <div>
          <h3>Competitor ID:</h3>

          <span>{{ competitor }}</span>
        </div>

        <button
          class="ml-auto p-4 cursor-pointer"
          @click="handleDeselectCompetitor(competitor)"
        >
          <svg class="stroke-blue-900" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2m-6 5v6m4-6v6"/>
          </svg>
        </button>
      </li>
    </ul>
  </div>
</template>
