<script setup lang="ts">
import { onMounted } from "vue";
import NotchSection from "../../../components/NotchSection.vue";
import { portfolioProjects } from "../../../content/portfolioProjects";
import { useCaseStudy } from "../../../composables/useCaseStudy";

const { openCaseStudy } = useCaseStudy();

const emit = defineEmits<{
  (e: "loaded"): void;
}>();

onMounted(() => {
  emit("loaded");
});
</script>

<template>
  <section class="creative-projects">
    <NotchSection class="projects-notch projects-notch-start" />
    <NotchSection class="projects-notch projects-notch-end" />

    <div class="projects-shell">
      <header class="projects-header">
        <div>
          <p class="projects-eyebrow">
            SELECTED / PROJECTS
          </p>

          <h2>
            Things I've
            <br />
            worked on.
          </h2>
        </div>

        <div class="header-note">
          <span class="note-dot"></span>

          <p>
            Data, systems, analytics and ideas —
            presented with a little more personality.
          </p>
        </div>
      </header>

      <div class="projects-grid">
        <article
          v-for="(project, index) in portfolioProjects"
          :key="project.id"
          class="project-card"
        >
          <div class="card-visual">
            <div class="visual-grid"></div>

            <span class="visual-number">
              {{ String(index + 1).padStart(2, "0") }}
            </span>

            <div class="visual-orbit orbit-one"></div>
            <div class="visual-orbit orbit-two"></div>

            <div class="visual-object">
              <span class="object-eye"></span>
              <span class="object-eye"></span>

              <span class="object-mouth"></span>
            </div>

            <div
              v-if="project.metrics?.length"
              class="visual-metric"
            >
              <strong>
                {{ project.metrics[0]?.value }}
              </strong>

              <span>
                {{ project.metrics[0]?.label }}
              </span>
            </div>

            <span class="visual-year">
              {{ project.year }}
            </span>
          </div>

          <div class="card-content">
            <div class="card-meta">
              <span>{{ project.category }}</span>
              <span>{{ project.role }}</span>
            </div>

            <h3>{{ project.title }}</h3>

            <p class="card-description">
              {{ project.description }}
            </p>

            <div class="card-stack">
              <span
                v-for="technology in project.stack.slice(0, 5)"
                :key="technology"
              >
                {{ technology }}
              </span>
            </div>

            <button
  type="button"
  class="card-footer"
  :aria-label="`Read ${project.title} case study`"
  @click="openCaseStudy(project.id)"
>
  <span>
    READ FULL CASE STUDY
  </span>

  <span class="card-arrow">
    ↗
  </span>
</button>
          </div>
        </article>
      </div>

      <footer class="projects-footer">
        <p>
          Different projects. Same curiosity.
        </p>

        <div>
          <span>DATA</span>
          <span>SYSTEMS</span>
          <span>ANALYTICS</span>
          <span>LEARNING</span>
        </div>
      </footer>
    </div>
  </section>
</template>

<style scoped lang="scss">
.creative-projects {
  position: relative;

  width: 100%;

  padding:
    clamp(100px, 12vw, 170px)
    var(--space-outer);

  background: #f3eddf;
  color: #17151d;

  overflow: hidden;
}

.projects-shell {
  width: min(1280px, 100%);
  margin: 0 auto;
}

.projects-header {
  display: grid;
  grid-template-columns:
    minmax(0, 1.3fr)
    minmax(260px, 0.5fr);

  gap: 60px;
  align-items: end;

  margin-bottom: 75px;
}

.projects-eyebrow {
  margin-bottom: 15px;

  font-size: 11px;
  font-weight: 700;

  letter-spacing: 0.16em;
}

.projects-header h2 {
  font-size:
    clamp(52px, 8vw, 118px);

  line-height: 0.87;

  letter-spacing: -0.065em;
  font-weight: 900;
}

.header-note {
  display: flex;
  gap: 12px;
  align-items: flex-start;

  max-width: 390px;

  font-size: 14px;
  line-height: 1.6;
}

.note-dot {
  flex: 0 0 auto;

  width: 10px;
  height: 10px;

  margin-top: 6px;

  border-radius: 50%;

  background: #ff785a;
}

.projects-grid {
  display: grid;
  grid-template-columns:
    repeat(2, minmax(0, 1fr));

  gap: 20px;
}

.project-card {
  border: 2px solid #17151d;
  border-radius: 28px;

  background: #fffaf0;

  overflow: hidden;

  box-shadow:
    7px 7px 0 #17151d;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.project-card:hover {
  transform: translate(-3px, -3px);

  box-shadow:
    11px 11px 0 #17151d;
}

/* Visual */

.card-visual {
  min-height: 315px;

  position: relative;
  overflow: hidden;

  border-bottom: 2px solid #17151d;

  background: #bcecff;
}

.project-card:nth-child(2) .card-visual {
  background: #d8f58d;
}

.project-card:nth-child(3) .card-visual {
  background: #ffb7a5;
}

.project-card:nth-child(4) .card-visual {
  background: #d7c5ff;
}

.project-card:nth-child(5) .card-visual {
  background: #ffe37b;
}

.visual-grid {
  position: absolute;
  inset: 0;

  opacity: 0.14;

  background-image:
    linear-gradient(
      #17151d 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      #17151d 1px,
      transparent 1px
    );

  background-size: 28px 28px;
}

.visual-number {
  position: absolute;

  left: 22px;
  top: 17px;

  font-size:
    clamp(54px, 7vw, 94px);

  line-height: 1;

  font-weight: 900;
  letter-spacing: -0.08em;

  opacity: 0.16;
}

.visual-object {
  width: 128px;
  height: 128px;

  position: absolute;

  left: 50%;
  top: 50%;

  transform:
    translate(-50%, -50%)
    rotate(-7deg);

  border: 2px solid #17151d;
  border-radius:
    42% 58% 48% 52%;

  background: #fffaf0;

  box-shadow:
    6px 6px 0 #17151d;
}

.object-eye {
  width: 10px;
  height: 15px;

  position: absolute;
  top: 43px;

  border-radius: 999px;

  background: #17151d;
}

.object-eye:nth-child(1) {
  left: 37px;
}

.object-eye:nth-child(2) {
  right: 37px;
}

.object-mouth {
  width: 37px;
  height: 18px;

  position: absolute;

  left: 44px;
  top: 68px;

  border-bottom:
    4px solid #17151d;

  border-radius:
    0 0 50% 50%;
}

.visual-orbit {
  position: absolute;

  left: 50%;
  top: 50%;

  width: 260px;
  height: 110px;

  border:
    2px solid rgba(23, 21, 29, 0.3);

  border-radius: 50%;
}

.orbit-one {
  transform:
    translate(-50%, -50%)
    rotate(22deg);
}

.orbit-two {
  transform:
    translate(-50%, -50%)
    rotate(-28deg);
}

.visual-metric {
  position: absolute;

  right: 20px;
  bottom: 20px;

  min-width: 105px;

  padding: 11px 13px;

  border: 2px solid #17151d;
  border-radius: 14px;

  background: #fffaf0;

  display: flex;
  flex-direction: column;

  transform: rotate(3deg);
}

.visual-metric strong {
  font-size: 20px;
  line-height: 1;
}

.visual-metric span {
  margin-top: 4px;

  font-size: 8px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.visual-year {
  position: absolute;

  right: 20px;
  top: 18px;

  padding: 7px 10px;

  border: 2px solid #17151d;
  border-radius: 999px;

  background: #fffaf0;

  font-size: 9px;
  font-weight: 700;
}

/* Content */

.card-content {
  padding: 24px;
}

.card-meta {
  display: flex;
  justify-content: space-between;
  gap: 20px;

  font-size: 9px;
  font-weight: 700;

  letter-spacing: 0.1em;
}

.card-meta span:last-child {
  text-align: right;
  opacity: 0.55;
}

.card-content h3 {
  margin: 15px 0 14px;

  font-size:
    clamp(28px, 3vw, 43px);

  line-height: 0.98;

  letter-spacing: -0.04em;
}

.card-description {
  max-width: 590px;

  font-size: 13px;
  line-height: 1.6;

  opacity: 0.67;
}

.card-stack {
  display: flex;
  flex-wrap: wrap;

  gap: 6px;

  margin-top: 22px;
}

.card-stack span {
  padding: 6px 9px;

  border:
    1.5px solid #17151d;

  border-radius: 999px;

  font-size: 8px;
  font-weight: 700;

  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.card-footer {
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 26px;
  padding: 15px 0 0;

  border: 0;
  border-top:
    1px solid rgba(23, 21, 29, 0.25);

  background: transparent;
  color: #17151d;

  font: inherit;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.12em;

  cursor: pointer;

  text-align: left;
}
.card-footer:hover .card-arrow {
  transform: translate(4px, -4px);
}

.card-arrow {
  font-size: 20px;

  transition: transform 0.2s ease;
}

.card-arrow {
  font-size: 20px;
}

/* Footer */

.projects-footer {
  margin-top: 70px;

  padding-top: 20px;

  border-top:
    2px solid #17151d;

  display: flex;
  justify-content: space-between;
  gap: 30px;

  font-size: 11px;
}

.projects-footer > div {
  display: flex;
  flex-wrap: wrap;

  gap: 16px;

  font-size: 9px;
  font-weight: 700;

  letter-spacing: 0.12em;
}

/* Existing notch integration */

.projects-notch {
  position: absolute;
  left: 0;

  color: #f3eddf;
  --icon-color: #f3eddf;
}

.projects-notch-start {
  top: 0;
  transform: translateY(-100%);
}

.projects-notch-end {
  bottom: 0;
}

/* Responsive */

@media (max-width: 850px) {
  .projects-header {
    grid-template-columns: 1fr;

    gap: 30px;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .creative-projects {
    padding-left: 20px;
    padding-right: 20px;
  }

  .card-visual {
    min-height: 260px;
  }

  .visual-object {
    width: 105px;
    height: 105px;
  }

  .object-eye {
    top: 35px;
  }

  .object-eye:nth-child(1) {
    left: 29px;
  }

  .object-eye:nth-child(2) {
    right: 29px;
  }

  .object-mouth {
    width: 31px;

    left: 35px;
    top: 56px;
  }

  .visual-orbit {
    width: 205px;
    height: 90px;
  }

  .projects-footer {
    flex-direction: column;
  }
}
</style>