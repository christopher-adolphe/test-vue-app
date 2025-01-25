import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

import type { Competitor } from '../types/competitor';

export const useAppStore = defineStore('appStore', () => {
  const competitors = ref<Competitor[]>([
    {
      id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
      name: 'CodeMaster',
      score: 950,
      rank: 1,
      isSelected: false,
    },
    {
      id: '7c8ed729-7e0e-4ea5-b0d3-0c51c0382f3b',
      name: 'ScriptWizard',
      score: 900,
      rank: 2,
      isSelected: false,
    },
    {
      id: 'e0d0d6c8-2c60-4ed6-b7f4-4f6cf5c6f72f',
      name: 'ByteBoss',
      score: 870,
      rank: 3,
      isSelected: false,
    },
    {
      id: 'bc4a27f8-7bda-44fc-a2c3-d3952106e042',
      name: 'JSNinja',
      score: 850,
      rank: 4,
      isSelected: false,
    },
    {
      id: '7421de2e-4358-4930-96f1-379548a91e08',
      name: 'AlgoAce',
      score: 830,
      rank: 5,
      isSelected: false,
    },
    {
      id: '34829d64-d6a4-4da3-8d1d-34ad7c0d5053',
      name: 'DebugKing',
      score: 800,
      rank: 6,
      isSelected: false,
    },
    {
      id: '68ec8c44-9038-4200-9bd5-6d209a6f9b37',
      name: 'SyntaxSlinger',
      score: 770,
      rank: 7,
      isSelected: false,
    },
    {
      id: '7c2c8653-3077-4ddf-9213-030d83a9fc82',
      name: 'FrontendGuru',
      score: 750,
      rank: 8,
      isSelected: false,
    },
    {
      id: 'ef918a4c-eaa2-4c81-808c-5d77f39b1641',
      name: 'PromisePro',
      score: 730,
      rank: 9,
      isSelected: false,
    },
    {
      id: '2b9a9904-60ae-49c7-8991-f192b64e0d8a',
      name: 'ClosureCaptain',
      score: 700,
      rank: 10,
      isSelected: false,
    }
  ]);
  const selectedCompetitorsId =  ref<string[]>([]);
  const isLastSelectedCompetitor = computed(() => selectedCompetitorsId.value.length === 1);
  const isModalVisible = ref(false);

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
    handleToggleModal,
    handleSelectCompetitor,
    handleDeselectCompetitor
  }
});