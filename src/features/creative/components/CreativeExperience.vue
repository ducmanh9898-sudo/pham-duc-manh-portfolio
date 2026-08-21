<script setup lang="ts">
import Header from "../../../components/Header.vue";
import Home from "../../home/components/Home.vue";
import Project from "../../projects/components/Project.vue";
import ProjectBackground from "../../projects/components/ProjectBackground.vue";
import Cursor from "../../../components/Cursor.vue";
import ExperienceSwitcher from "../../gateway/components/ExperienceSwitcher.vue";
import { useAgent } from "../../../composables/useAgent";
import {
  projectVisible,
} from "../../../composables/useRouteObserver";
import { useProjectTransition } from "../../../composables/useProjectTransition";

const { isTransitioning } = useProjectTransition();
const { isTouch } = useAgent();
</script>

<template>
  <ExperienceSwitcher />

  <Header />

  <div
    :class="{
      'home-wrapper-projectIsReady': projectVisible,
    }"
  >
    <Home />
  </div>

  <ProjectBackground />

  <div
    class="project-wrapper"
    :class="{
      'project-wrapper-visible': projectVisible,
      'project-wrapper-transitioning': isTransitioning,
    }"
  >
    <div class="project-content">
      <Project />
    </div>
  </div>

  <Cursor v-if="!isTouch" />
</template>
<style lang="scss">
.home-wrapper-projectIsReady {
  visibility: hidden;
  position: fixed;
  inset: 0;
}

.project-wrapper {
  position: fixed;
  inset: 0;
  overflow: hidden;
  z-index: var(--z-index-layout-project);
  visibility: hidden;
  pointer-events: none;

  &-visible {
    visibility: visible;
    pointer-events: auto;
    position: static;
  }
}

.project-content {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>