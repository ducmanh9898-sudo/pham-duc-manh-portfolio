import { computed, ref } from "vue";
import { portfolioProjects } from "../content/portfolioProjects";

const activeProjectId = ref<string | null>(null);

let previousHtmlOverflow = "";
let previousBodyOverflow = "";

export const useCaseStudy = () => {
  const activeProjectIndex = computed(() => {
    if (!activeProjectId.value) {
      return -1;
    }

    return portfolioProjects.findIndex(
      (project) =>
        project.id === activeProjectId.value,
    );
  });

  const activeProject = computed(() => {
    const index = activeProjectIndex.value;

    if (index < 0) {
      return null;
    }

    return portfolioProjects[index] ?? null;
  });

  const previousProject = computed(() => {
    const index = activeProjectIndex.value;

    if (index <= 0) {
      return null;
    }

    return portfolioProjects[index - 1] ?? null;
  });

  const nextProject = computed(() => {
    const index = activeProjectIndex.value;

    if (
      index < 0 ||
      index >= portfolioProjects.length - 1
    ) {
      return null;
    }

    return portfolioProjects[index + 1] ?? null;
  });

  const lockBackgroundScroll = () => {
    previousHtmlOverflow =
      document.documentElement.style.overflow;

    previousBodyOverflow =
      document.body.style.overflow;

    document.documentElement.style.overflow =
      "hidden";

    document.body.style.overflow =
      "hidden";
  };

  const unlockBackgroundScroll = () => {
    document.documentElement.style.overflow =
      previousHtmlOverflow;

    document.body.style.overflow =
      previousBodyOverflow;

    previousHtmlOverflow = "";
    previousBodyOverflow = "";
  };

  const openCaseStudy = (
    projectId: string,
  ) => {
    if (!activeProjectId.value) {
      lockBackgroundScroll();
    }

    activeProjectId.value = projectId;
  };

  const openPreviousProject = () => {
    if (!previousProject.value) {
      return;
    }

    activeProjectId.value =
      previousProject.value.id;
  };

  const openNextProject = () => {
    if (!nextProject.value) {
      return;
    }

    activeProjectId.value =
      nextProject.value.id;
  };

  const closeCaseStudy = () => {
    activeProjectId.value = null;

    unlockBackgroundScroll();
  };

  return {
    activeProject,
    activeProjectId,

    previousProject,
    nextProject,

    openCaseStudy,
    openPreviousProject,
    openNextProject,
    closeCaseStudy,
  };
};