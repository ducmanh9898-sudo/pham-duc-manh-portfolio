import { ref } from "vue";

export type ExperienceMode = "professional" | "creative";

const experience = ref<ExperienceMode | null>(null);

export const useExperience = () => {
  const selectExperience = (mode: ExperienceMode) => {
    experience.value = mode;
  };

  const resetExperience = () => {
    experience.value = null;
  };

  return {
    experience,
    selectExperience,
    resetExperience,
  };
};