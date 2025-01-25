<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';

import BaseModaTest from './BaseModaTest.vue';
import ListSelectedCompetitors from './ListSelectedCompetitors.vue';

const isModalVisible = defineModel();

onMounted(() => {
  console.log('ModalCompetitorsTest mounted');
});

onUnmounted(() => {
  console.log('ModalCompetitorsTest unmounted');
});
</script>

<template>
  <div>
    <BaseModaTest v-model="isModalVisible">
      <ListSelectedCompetitors />
    </BaseModaTest>
  </div>
</template>
