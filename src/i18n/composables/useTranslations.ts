import { watch } from "vue";
import { loadTranslations } from "../utils/load";
import { locale, translations } from "../store";

export const useTranslations = () => {
  // Portfolio is English-only
  locale.value = "en";

  document.documentElement.lang = "en";
  window.localStorage.setItem("portfolio-locale", "en");

  watch(
    locale,
    async () => {
      translations.value =
        (await loadTranslations("common", "en")) ?? {};
    },
    { immediate: true },
  );
};