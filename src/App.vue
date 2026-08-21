<script setup lang="ts">
import ChooseExperience from "./features/gateway/components/ChooseExperience.vue";
import ProfessionalHome from "./features/professional/components/ProfessionalHome.vue";
import CreativeExperience from "./features/creative/components/CreativeExperience.vue";

import { useExperience } from "./composables/useExperience";
import { useTranslations } from "./i18n/composables/useTranslations";
import { usePreloader } from "./composables/usePreloader";
import { useMusic } from "./features/sounds/composables/useMusic";
import { useHowler } from "./features/sounds/composables/useHowler";
import { useScroll } from "./composables/useScroll";
import { useRouteObserver } from "./composables/useRouteObserver";
import { useClickSound } from "./features/sounds/composables/useClickSounds";

const { experience } = useExperience();

useTranslations();
usePreloader();
useMusic();
useHowler();
useScroll();
useRouteObserver();
useClickSound();
</script>

<template>
  <ChooseExperience v-if="experience === null" />

  <ProfessionalHome
    v-else-if="experience === 'professional'"
  />

  <CreativeExperience
    v-else-if="experience === 'creative'"
  />
</template>