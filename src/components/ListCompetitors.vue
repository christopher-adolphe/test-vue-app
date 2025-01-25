<script setup lang="ts">
import { computed } from 'vue';
import { storeToRefs } from 'pinia';

import { useAppStore } from '../store/app.store.ts';

import type { Competitor } from '../types/competitor';

type ListCompetitorPros = {
  items: Competitor[];
};

const props = withDefaults(defineProps<ListCompetitorPros>(), {
  items: [],
});

const appStore = useAppStore();
const { handleSelectCompetitor } = appStore;

const hasItems = computed(() => Boolean(props.items.length));
</script>

<template>
  <ul v-if="hasItems" class="flex flex-col gap-2">
    <li
      v-for="({ id, name, score, isSelected }) in items"
      :key="id"
      :class="[
        'flex justify-between items-center p-4 border border-blue-400 rounded-sm',
        {
          'bg-blue-200': isSelected,
        }
      ]"
    >
      <span>{{ name }}</span>

      <button
        :class="[
          'px-8 py-2 border border-blue-900 rounded-sm cursor-pointer',
          { 'bg-gray-300 cursor-not-allowed': isSelected }
        ]"
        :disabled="isSelected"
        @click="handleSelectCompetitor(id)"
      >
        {{ score }}
      </button>
    </li>
  </ul>

  <div v-else>No competitors to list</div>
</template>
