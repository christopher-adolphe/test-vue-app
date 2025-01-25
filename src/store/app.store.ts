import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

import type { Competitor } from '../types/competitor';
import mockCompetitors from '../mock/competitors.mock';

export const useAppStore = defineStore('appStore', () => {
  const competitors = ref<Competitor[]>(mockCompetitors);
  const selectedCompetitorsId =  ref<string[]>([]);
  const isLastSelectedCompetitor = computed(() => selectedCompetitorsId.value.length === 1);
  const isModalVisible = ref(false);

  function $resetStore() {
    competitors.value = competitors.value.map(mockCompetitor => ({ ...mockCompetitor, isSelected: false }));
    selectedCompetitorsId.value = [];
    isModalVisible.value = false;
  }

  function handleToggleModal() {
    isModalVisible.value = !isModalVisible.value;
  }

  function handleSelectCompetitor(id: string) {
    const existingId = selectedCompetitorsId.value.find(selectedId => selectedId === id);

    if (existingId) {
      return;
    }

    selectedCompetitorsId.value.push(id);
    handleToggleCompetitorSelected(id);
    handleToggleModal();
  }

  function handleToggleCompetitorSelected(id: string) {
    const selectedCompetitorIndex = competitors.value.findIndex(competitor => competitor.id === id);

    competitors.value[selectedCompetitorIndex].isSelected = !competitors.value[selectedCompetitorIndex].isSelected;
  }

  function handleDeselectCompetitor(id: string) {
    if (isLastSelectedCompetitor.value) {
      handleToggleModal();
    }

    selectedCompetitorsId.value = selectedCompetitorsId.value.filter(selectedId => selectedId !== id);
    handleToggleCompetitorSelected(id);
  }

  return {
    competitors,
    selectedCompetitorsId,
    isModalVisible,
    $resetStore,
    handleToggleModal,
    handleSelectCompetitor,
    handleDeselectCompetitor
  }
});