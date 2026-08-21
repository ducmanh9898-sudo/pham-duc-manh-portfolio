<script setup lang="ts">
import { useExperience } from "../../../composables/useExperience";

const { resetExperience } = useExperience();

const handleSwitch = () => {
  resetExperience();

  requestAnimationFrame(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  });
};
</script>

<template>
  <button
    class="experience-switcher"
    type="button"
    @click="handleSwitch"
  >
    ← SWITCH EXPERIENCE
  </button>
</template>

<style scoped>
.experience-switcher {
  position: fixed;
  left: 24px;
  bottom: 24px;
  z-index: 99999;

  border: 1px solid rgba(0, 0, 0, 0.18);
  background: rgba(255, 255, 255, 0.9);

  padding: 11px 15px;

  border-radius: 999px;

  font-size: 10px;
  font-weight: 700;

  letter-spacing: 0.12em;

  cursor: pointer;

  backdrop-filter: blur(12px);

  transition:
    transform 0.2s ease,
    background 0.2s ease;
}

.experience-switcher:hover {
  transform: translateY(-2px);
  background: #fff;
}

@media (max-width: 700px) {
  .experience-switcher {
    left: 14px;
    bottom: 14px;
  }
}
</style>