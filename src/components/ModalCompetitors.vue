<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';

import BaseModal from './BaseModal.vue';
import ListSelectedCompetitors from './ListSelectedCompetitors.vue';

onMounted(() => {
  console.log('ModalCompetitors mounted');
});

onUnmounted(() => {
  console.log('ModalCompetitors unmounted');
});
</script>

<template>
  <BaseModal>
    <ListSelectedCompetitors />
  </BaseModal>
</template>
