<script setup lang="ts">
import { nextTick, ref, watch } from "vue";
import { useCaseStudy } from "../../../composables/useCaseStudy";

const {
  activeProject,
  activeProjectId,

  previousProject,
  nextProject,

  openPreviousProject,
  openNextProject,
  closeCaseStudy,
} = useCaseStudy();

const caseStudyRef =
  ref<HTMLElement | null>(null);

watch(activeProjectId, async () => {
  await nextTick();

  caseStudyRef.value?.scrollTo({
    top: 0,
    left: 0,
    behavior: "auto",
  });
});
</script>

<template>
  <Transition name="case-study">
    <div
      v-if="activeProject"
      ref="caseStudyRef"
      class="case-study"
      data-lenis-prevent
    >
      <header class="case-nav">
        <button
          type="button"
          class="back-button"
          @click="closeCaseStudy"
        >
          ← BACK TO PORTFOLIO
        </button>

        <span>
          {{ activeProject.year }}
          /
          {{ activeProject.category }}
        </span>
      </header>

      <main class="case-content">
        <!-- HERO -->

        <section class="case-hero">
          <p class="eyebrow">
            PROJECT CASE STUDY
          </p>

          <h1>
            {{ activeProject.title }}
          </h1>

          <div class="hero-meta">
            <div>
              <span>ROLE</span>
              <strong>
                {{ activeProject.role }}
              </strong>
            </div>

            <div>
              <span>YEAR</span>
              <strong>
                {{ activeProject.year }}
              </strong>
            </div>

            <div>
              <span>AREA</span>
              <strong>
                {{ activeProject.category }}
              </strong>
            </div>
          </div>
        </section>

        <!-- METRICS -->

        <section
          v-if="activeProject.metrics?.length"
          class="metrics"
        >
          <div
            v-for="metric in activeProject.metrics"
            :key="metric.label"
            class="metric"
          >
            <strong>
              {{ metric.value }}
            </strong>

            <span>
              {{ metric.label }}
            </span>
          </div>
        </section>

        <!-- PROBLEM -->

        <section class="case-section">
          <div class="section-number">
            01
          </div>

          <div>
            <p class="section-label">
              PROBLEM
            </p>

            <h2>
              What needed to be solved?
            </h2>

            <p class="section-copy">
              {{
                activeProject.caseStudy.problem
              }}
            </p>
          </div>
        </section>

        <!-- APPROACH -->

        <section class="case-section">
          <div class="section-number">
            02
          </div>

          <div>
            <p class="section-label">
              APPROACH
            </p>

            <h2>
              How I approached it.
            </h2>

            <ol class="case-list">
              <li
                v-for="(
                  item,
                  index
                ) in activeProject.caseStudy
                  .approach"
                :key="item"
              >
                <span>
                  {{
                    String(
                      index + 1,
                    ).padStart(2, "0")
                  }}
                </span>

                <p>{{ item }}</p>
              </li>
            </ol>
          </div>
        </section>
<!-- SYSTEM / ANALYSIS FLOW -->

<section class="case-section">
  <div class="section-number">
    03
  </div>

  <div>
    <p class="section-label">
      SYSTEM / ANALYSIS FLOW
    </p>

    <h2>
      How the pieces connect.
    </h2>

    <div class="project-flow">
      <template
        v-for="(step, index) in activeProject.caseStudy.flow"
        :key="step"
      >
        <div class="flow-step">
          <span class="flow-index">
            {{ String(index + 1).padStart(2, "0") }}
          </span>

          <strong>
            {{ step }}
          </strong>
        </div>

        <div
          v-if="
            index <
            activeProject.caseStudy.flow.length - 1
          "
          class="flow-arrow"
        >
          →
        </div>
      </template>
    </div>
  </div>
</section>
        <!-- RESULTS -->

        <section class="case-section">
          <div class="section-number">
            03
          </div>

          <div>
            <p class="section-label">
              RESULTS
            </p>

            <h2>
              What came out of it.
            </h2>
<!-- FLOW -->

<section class="case-section case-flow-section">
  <div class="section-number">
    03
  </div>

  <div>
    <p class="section-label">
      SYSTEM / ANALYSIS FLOW
    </p>

    <h2>
      How the pieces connect.
    </h2>

    <div class="project-flow">
      <template
        v-for="(step, index) in activeProject.caseStudy.flow"
        :key="step"
      >
        <div class="flow-step">
          <span class="flow-index">
            {{ String(index + 1).padStart(2, "0") }}
          </span>

          <strong>
            {{ step }}
          </strong>
        </div>

        <div
          v-if="
            index <
            activeProject.caseStudy.flow.length - 1
          "
          class="flow-arrow"
        >
          →
        </div>
      </template>
    </div>
  </div>
</section>
            <ul class="results-list">
              <li
                v-for="result in activeProject
                  .caseStudy.results"
                :key="result"
              >
                {{ result }}
              </li>
            </ul>
          </div>
        </section>

        <!-- STACK -->

        <section class="case-section">
          <div class="section-number">
            04
          </div>

          <div>
            <p class="section-label">
              TECHNOLOGY / METHODS
            </p>

            <h2>
              Tools used in context.
            </h2>

            <div class="stack">
              <span
                v-for="item in activeProject.stack"
                :key="item"
              >
                {{ item }}
              </span>
            </div>

            <a
              v-if="
                activeProject.caseStudy.github
              "
              :href="
                activeProject.caseStudy.github
              "
              target="_blank"
              rel="noopener noreferrer"
              class="github-link"
            >
              VIEW PROJECT ON GITHUB ↗
            </a>
          </div>
        </section>
      </main>

      <footer class="case-footer">
  <div class="case-pagination">
    <button
      v-if="previousProject"
      type="button"
      class="pagination-project"
      @click="openPreviousProject"
    >
      <span>← PREVIOUS PROJECT</span>

      <strong>
        {{ previousProject.title }}
      </strong>
    </button>

    <div
      v-else
      class="pagination-spacer"
    ></div>

    <button
      v-if="nextProject"
      type="button"
      class="pagination-project pagination-next"
      @click="openNextProject"
    >
      <span>NEXT PROJECT →</span>

      <strong>
        {{ nextProject.title }}
      </strong>
    </button>
  </div>

  <button
    type="button"
    class="back-projects"
    @click="closeCaseStudy"
  >
    ← BACK TO PORTFOLIO
  </button>
</footer>
    </div>
  </Transition>
</template>

<style scoped>
.project-flow {
  max-width: 1100px;

  display: flex;
  align-items: stretch;

  gap: 10px;

  margin-top: 40px;
}

.flow-step {
  flex: 1;

  min-height: 145px;

  padding: 18px;

  border: 1px solid #cbd0d6;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: #eef1f4;
}

.flow-index {
  font-size: 9px;
  letter-spacing: 0.12em;

  color: #8a929c;
}

.flow-step strong {
  font-size: 14px;

  line-height: 1.35;
}

.flow-arrow {
  display: flex;
  align-items: center;
  justify-content: center;

  color: #8a929c;
}
.case-study {
  position: fixed;
  inset: 0;

  z-index: 200000;

  width: 100%;
  height: 100dvh;

  overflow-y: auto;
  overflow-x: hidden;

  overscroll-behavior: contain;

  background: #f6f7f9;
  color: #121417;

  -webkit-overflow-scrolling: touch;
}

.case-nav {
  position: sticky;
  top: 0;
  z-index: 10;

  height: 68px;
  padding: 0 5vw;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid #d4d9df;

  background: rgba(246, 247, 249, 0.94);
  backdrop-filter: blur(16px);

  font-size: 9px;
  letter-spacing: 0.12em;
}

.case-nav button,
.case-footer button {
  border: 0;
  background: transparent;

  font: inherit;
  cursor: pointer;

  letter-spacing: 0.1em;
}

.case-content {
  width: min(1500px, 100%);
  margin: 0 auto;
}

.case-hero {
  min-height: 75vh;

  padding: 10vh 5vw 7vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.eyebrow,
.section-label,
.hero-meta span {
  font-size: 9px;
  letter-spacing: 0.15em;
  color: #7c848e;
}

.case-hero h1 {
  max-width: 1200px;

  margin: 22px 0 50px;

  font-size: clamp(54px, 8vw, 125px);
  line-height: 0.9;

  letter-spacing: -0.065em;
}

.hero-meta {
  display: grid;
  grid-template-columns:
  repeat(
    auto-fit,
    minmax(220px, 1fr)
  );

  border-top: 1px solid #ced3d9;
}

.hero-meta > div {
  padding: 20px 0;

  display: flex;
  flex-direction: column;

  gap: 7px;

  border-bottom: 1px solid #ced3d9;
}

.hero-meta strong {
  font-size: 13px;
}

.metrics {
  padding: 0 5vw 90px;

  display: grid;

  grid-template-columns:
    repeat(
      auto-fit,
      minmax(220px, 1fr)
    );

  gap: 1px;

  background: #cbd1d7;
}

.metric {
  min-height: 135px;
  padding: 24px;

  background: #111418;
  color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.metric strong {
  font-size: clamp(32px, 5vw, 64px);
  letter-spacing: -0.05em;
}

.metric span {
  font-size: 9px;
  letter-spacing: 0.12em;
  text-transform: uppercase;

  color: #8e969f;
}

.case-section {
  padding: 100px 5vw;

  display: grid;
  grid-template-columns: 110px 1fr;

  border-top: 1px solid #d4d9df;
}

.section-number {
  font-size: 10px;
  color: #8b929b;
}

.case-section h2 {
  margin: 16px 0 30px;

  font-size: clamp(40px, 5vw, 76px);

  line-height: 0.95;

  letter-spacing: -0.055em;
}

.section-copy {
  max-width: 800px;

  font-size: 17px;
  line-height: 1.75;

  color: #5f6872;
}

.case-list {
  max-width: 900px;

  list-style: none;
  padding: 0;
}

.case-list li {
  display: grid;
  grid-template-columns: 50px 1fr;

  gap: 20px;

  padding: 20px 0;

  border-top: 1px solid #d2d7dc;
}

.case-list li:last-child {
  border-bottom: 1px solid #d2d7dc;
}

.case-list span {
  font-size: 9px;
  color: #8b929b;
}

.case-list p,
.results-list {
  line-height: 1.7;
  color: #515a64;
}

.results-list {
  max-width: 850px;
  padding-left: 20px;
}

.results-list li + li {
  margin-top: 13px;
}

.stack {
  max-width: 850px;

  display: flex;
  flex-wrap: wrap;

  gap: 8px;
}

.stack span {
  padding: 9px 12px;

  border: 1px solid #c7ccd2;

  border-radius: 999px;

  font-size: 9px;

  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.github-link {
  display: inline-block;

  margin-top: 35px;

  padding: 13px 16px;

  background: #111418;
  color: #fff;

  text-decoration: none;

  font-size: 9px;
  letter-spacing: 0.1em;
}

.case-footer {
  padding: 55px 5vw;

  border-top: 1px solid #d4d9df;
}

.case-pagination {
  display: grid;
  grid-template-columns:
    repeat(2, minmax(0, 1fr));

  gap: 20px;

  margin-bottom: 55px;
}

.pagination-project {
  min-height: 150px;

  padding: 22px;

  border: 1px solid #cbd0d6;

  background: transparent;
  color: #121417;

  cursor: pointer;

  text-align: left;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  transition:
    background 0.2s ease,
    color 0.2s ease;
}

.pagination-project:hover {
  background: #111418;
  color: #fff;
}

.pagination-project span {
  font-size: 8px;
  letter-spacing: 0.12em;
}

.pagination-project strong {
  max-width: 500px;

  font-size: clamp(18px, 2.2vw, 30px);

  line-height: 1.05;

  letter-spacing: -0.035em;
}

.pagination-next {
  text-align: right;

  align-items: flex-end;
}

.back-projects {
  border: 0;
  padding: 0;

  background: transparent;

  cursor: pointer;

  font: inherit;

  font-size: 9px;
  letter-spacing: 0.1em;
}

.pagination-spacer {
  min-height: 1px;
}

@media (max-width: 700px) {
  .project-flow {
    flex-direction: column;
  }

  .flow-step {
    min-height: 100px;
  }

  .flow-arrow {
    height: 24px;

    transform: rotate(90deg);
  }
  .project-flow {
    flex-direction: column;
  }

  .flow-step {
    min-height: 100px;
  }

  .flow-arrow {
    height: 24px;

    transform: rotate(90deg);
  }
  .case-pagination {
    grid-template-columns: 1fr;
  }

  .pagination-spacer {
    display: none;
  }
}
.case-study-enter-active,
.case-study-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.35s ease;
}

.case-study-enter-from,
.case-study-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

@media (max-width: 700px) {
  .project-flow {
    flex-direction: column;
  }

  .flow-step {
    min-height: 100px;
  }

  .flow-arrow {
    height: 24px;

    transform: rotate(90deg);
  }
  .case-nav {
    padding: 0 20px;
  }

  .case-nav > span {
    display: none;
  }

  .case-hero {
    min-height: 65vh;

    padding:
      80px
      20px
      45px;
  }

  .hero-meta {
    grid-template-columns: 1fr;
  }

  .metrics {
    padding:
      0
      20px
      60px;

    grid-template-columns: 1fr;
  }

  .case-section {
    padding:
      70px
      20px;

    grid-template-columns: 1fr;

    gap: 20px;
  }
}
.project-flow {
  max-width: 1100px;

  display: flex;
  align-items: stretch;

  gap: 10px;

  margin-top: 40px;
}

.flow-step {
  flex: 1;

  min-width: 0;
  min-height: 145px;

  padding: 18px;

  border: 1px solid #cbd0d6;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: #eef1f4;
}

.flow-index {
  font-size: 9px;
  letter-spacing: 0.12em;

  color: #8a929c;
}

.flow-step strong {
  font-size: 14px;
  line-height: 1.35;

  overflow-wrap: break-word;
}

.flow-arrow {
  flex: 0 0 24px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #8a929c;
}
@media (max-width: 700px) {
  .project-flow {
    flex-direction: column;
  }

  .flow-step {
    min-height: 100px;
  }

  .flow-arrow {
    transform: rotate(90deg);

    height: 25px;
  }
}
</style>