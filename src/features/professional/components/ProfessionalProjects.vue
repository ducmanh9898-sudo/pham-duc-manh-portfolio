<script setup lang="ts">
import { ref } from "vue";
import { portfolioProjects } from "../../../content/portfolioProjects";

const activeProject = ref<string | null>(null);

const toggleProject = (projectId: string) => {
  activeProject.value =
    activeProject.value === projectId
      ? null
      : projectId;
};
</script>

<template>
  <section id="professional-projects" class="projects">
    <header class="projects-header">
      <div>
        <p class="section-index">03 / SELECTED WORK</p>

        <h2>
          Projects built around
          <br />
          real problems.
        </h2>
      </div>

      <p class="projects-intro">
        A selection of work across data engineering, analytics,
        machine learning, system analysis and project delivery.
      </p>
    </header>

    <div class="projects-list">
      <article
        v-for="(project, index) in portfolioProjects"
        :key="project.id"
        class="project"
      >
        <div class="project-index">
          {{ String(index + 1).padStart(2, "0") }}
        </div>

        <div class="project-main">
          <div class="project-meta">
            <span>{{ project.category }}</span>
            <span>{{ project.year }}</span>
          </div>

          <h3>{{ project.title }}</h3>

          <p class="project-description">
            {{ project.description }}
          </p>

          <div class="project-role">
            <span>ROLE</span>
            <strong>{{ project.role }}</strong>
          </div>
          <div
  v-if="project.metrics?.length"
  class="project-metrics"
>
  <div
    v-for="metric in project.metrics"
    :key="metric.label"
    class="project-metric"
  >
    <strong>{{ metric.value }}</strong>
    <span>{{ metric.label }}</span>
  </div>
</div>
<button
  class="project-toggle"
  type="button"
  :aria-expanded="activeProject === project.id"
  @click="toggleProject(project.id)"
>
  <span>
    {{
      activeProject === project.id
        ? "CLOSE DETAILS"
        : "VIEW DETAILS"
    }}
  </span>

  <span
    class="toggle-icon"
    :class="{
      'toggle-icon-open':
        activeProject === project.id,
    }"
  >
    +
  </span>
</button>

<div
  v-if="activeProject === project.id"
  class="project-details"
>
  <div class="details-block">
    <p class="details-label">
      KEY CONTRIBUTIONS
    </p>

    <ul class="project-highlights">
      <li
        v-for="highlight in project.highlights"
        :key="highlight"
      >
        {{ highlight }}
      </li>
    </ul>
  </div>

  <div class="details-block">
    <p class="details-label">
      TECHNOLOGY / METHODS
    </p>

    <div class="project-stack">
      <span
        v-for="technology in project.stack"
        :key="technology"
      >
        {{ technology }}
      </span>
    </div>
  </div>
</div>

        

        </div>

        <div class="project-arrow">
          ↗
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.projects {
  padding: 110px 5vw;
  border-top: 1px solid #d9dde3;
  background: #f6f7f9;
}

.projects-header {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(280px, 0.6fr);
  gap: 60px;
  align-items: end;
  margin-bottom: 80px;
}

.section-index {
  font-size: 10px;
  letter-spacing: 0.16em;
  color: #777f89;
  margin-bottom: 18px;
}

.projects-header h2 {
  font-size: clamp(48px, 6vw, 92px);
  line-height: 0.92;
  letter-spacing: -0.065em;
}

.projects-intro {
  font-size: 15px;
  line-height: 1.7;
  color: #68707b;
  max-width: 480px;
}

.projects-list {
  border-top: 1px solid #cfd4da;
}

.project {
  display: grid;
  grid-template-columns: 70px minmax(0, 1fr) 60px;
  gap: 20px;
  padding: 42px 0;
  border-bottom: 1px solid #cfd4da;
  transition: background 0.25s ease;
}

.project:hover {
  background: #eceff2;
}

.project-index {
  font-size: 11px;
  color: #9198a2;
  padding-top: 5px;
}

.project-meta {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  font-size: 10px;
  letter-spacing: 0.14em;
  color: #717984;
}

.project h3 {
  font-size: clamp(30px, 4vw, 58px);
  line-height: 1;
  letter-spacing: -0.045em;
  margin: 14px 0 18px;
}

.project-description {
  max-width: 750px;
  color: #606873;
  line-height: 1.7;
}

.project-role {
  margin-top: 26px;
  display: flex;
  align-items: center;
  gap: 14px;
}

.project-role span {
  font-size: 9px;
  letter-spacing: 0.14em;
  color: #8a929d;
}

.project-role strong {
  font-size: 12px;
}

.project-highlights {
  margin-top: 24px;
  padding-left: 18px;
  max-width: 760px;
  color: #444b54;
  line-height: 1.7;
}

.project-highlights li + li {
  margin-top: 4px;
}

.project-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-top: 28px;
}

.project-stack span {
  border: 1px solid #c5cbd2;
  border-radius: 999px;
  padding: 7px 11px;
  font-size: 9px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.project-arrow {
  font-size: 24px;
  display: flex;
  justify-content: flex-end;
}

@media (max-width: 800px) {
  .projects {
    padding: 80px 20px;
  }

  .projects-header {
    grid-template-columns: 1fr;
    gap: 30px;
    margin-bottom: 55px;
  }

  .project {
    grid-template-columns: 35px 1fr;
  }

  .project-arrow {
    display: none;
  }

  .project-meta {
    flex-direction: column;
    gap: 5px;
  }
}
</style>
.project-metrics {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1px;
  margin-top: 28px;
  max-width: 760px;
  background: #cfd4da;
  border: 1px solid #cfd4da;
}

.project-metric {
  background: #f6f7f9;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.project-metric strong {
  font-size: 22px;
  letter-spacing: -0.04em;
}

.project-metric span {
  font-size: 9px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #777f89;
}

@media (max-width: 600px) {
  .project-metrics {
    grid-template-columns: 1fr;
  }
}
.project-toggle {
  margin-top: 28px;

  width: 100%;
  max-width: 760px;

  padding: 14px 0;

  border: 0;
  border-top: 1px solid #cfd4da;
  border-bottom: 1px solid #cfd4da;

  background: transparent;
  color: #121417;

  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;

  font: inherit;
  font-size: 9px;
  letter-spacing: 0.12em;
}

.toggle-icon {
  font-size: 20px;
  font-weight: 300;

  transition: transform 0.25s ease;
}

.toggle-icon-open {
  transform: rotate(45deg);
}

.project-details {
  max-width: 760px;
  padding: 28px 0 8px;

  display: grid;
  grid-template-columns:
    minmax(0, 1.2fr)
    minmax(220px, 0.8fr);

  gap: 40px;
}

.details-label {
  margin-bottom: 14px;

  font-size: 8px;
  letter-spacing: 0.14em;
  color: #8b929c;
}

.project-highlights {
  margin: 0;
  padding-left: 18px;

  color: #444b54;
  line-height: 1.7;
}

.project-highlights li + li {
  margin-top: 5px;
}

.project-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}

.project-stack span {
  border: 1px solid #c5cbd2;
  border-radius: 999px;

  padding: 7px 11px;

  font-size: 9px;
  letter-spacing: 0.07em;
  text-transform: uppercase;
}

@media (max-width: 700px) {
  .project-details {
    grid-template-columns: 1fr;
    gap: 28px;
  }
}