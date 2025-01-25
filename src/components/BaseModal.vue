<script setup lang="ts">
import { useAppStore } from '../store/app.store.ts';

const appStore = useAppStore();
const { handleToggleModal } = appStore;
</script>

<template>
  <Teleport to="body">
    <div class="fixed inset-0 grid place-items-center w-screen h-screen bg-gray-400/40">
      <div class="relative flex flex-col gap-4 w-full max-w-[26.875rem] p-8 bg-white rounded-lg">
        <slot/>

        <button class="absolute top-4 right-4 cursor-pointer" @click="handleToggleModal">
          <svg class="stroke-blue-500" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>
  </Teleport>
</template>
