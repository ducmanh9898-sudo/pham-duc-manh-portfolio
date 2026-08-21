<script setup lang="ts">
import { technicalStack } from "../../../content/technicalStack";
</script>

<template>
  <section
  id="professional-stack"
  class="stack"
>
    <header class="stack-header">
      <p class="section-index">
        02 / TECHNICAL STACK
      </p>

      <h2>
        Tools are useful.
        <br />
        Systems matter more.
      </h2>

      <p>
        Technologies I have used across data engineering,
        analytics, machine learning and system analysis projects.
      </p>
    </header>

    <div class="stack-table">
      <article
        v-for="(group, index) in technicalStack"
        :key="group.category"
        class="stack-row"
      >
        <div class="stack-index">
          {{ String(index + 1).padStart(2, "0") }}
        </div>

        <div class="stack-category">
          <strong>{{ group.category }}</strong>

          <span>
            {{ group.description }}
          </span>
        </div>

        <div class="stack-tools">
          <span
            v-for="tool in group.tools"
            :key="tool"
            class="stack-tool"
          >
            {{ tool }}
          </span>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.stack {
  padding: 110px 5vw;
  border-top: 1px solid #d9dde3;
  background: #111418;
  color: #f4f6f8;
}

.stack-header {
  max-width: 1000px;
  margin-bottom: 80px;
}

.section-index {
  font-size: 10px;
  letter-spacing: 0.16em;
  color: #808892;
  margin-bottom: 20px;
}

.stack-header h2 {
  font-size: clamp(48px, 6vw, 90px);
  line-height: 0.93;
  letter-spacing: -0.06em;
  margin-bottom: 30px;
}

.stack-header > p:last-child {
  max-width: 570px;
  line-height: 1.7;
  color: #949ca6;
}

.stack-table {
  border-top: 1px solid #343940;
}

.stack-row {
  display: grid;
  grid-template-columns: 70px minmax(220px, 0.7fr) minmax(0, 1.3fr);
  gap: 30px;
  padding: 30px 0;
  border-bottom: 1px solid #343940;
}

.stack-index {
  color: #686f78;
  font-size: 10px;
  padding-top: 4px;
}

.stack-category {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.stack-category strong {
  font-size: 17px;
}

.stack-category span {
  max-width: 280px;
  color: #757e88;
  font-size: 12px;
  line-height: 1.5;
}

.stack-tools {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.stack-tool {
  border: 1px solid #414851;
  border-radius: 999px;
  padding: 8px 12px;
  font-size: 10px;
  letter-spacing: 0.04em;
  color: #d2d6db;
}

@media (max-width: 800px) {
  .stack {
    padding: 80px 20px;
  }

  .stack-row {
    grid-template-columns: 35px 1fr;
  }

  .stack-tools {
    grid-column: 2;
    margin-top: 10px;
  }
}
</style>