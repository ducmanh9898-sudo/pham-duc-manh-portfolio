<script setup lang="ts">
import { profile } from "../../../content/profile";

const coursework = [
  "Database Systems",
  "Big Data",
  "Data Mining",
  "Enterprise Information Systems Development",
  "Information Systems Management",
  "Intelligent Commerce Systems",
];
</script>

<template>
  <section
  id="professional-education"
  class="education"
>
    <header class="education-header">
      <p class="section-index">
        04 / EDUCATION
      </p>

      <h2>
        Computer Science
        <br />
        foundation.
      </h2>
    </header>

    <div class="education-card">
      <div class="education-period">
        {{ profile.education.period }}
      </div>

      <div class="education-main">
        <p class="education-type">
          BACHELOR'S DEGREE
        </p>

        <h3>
          {{ profile.education.degree }}
        </h3>

        <p class="university">
          {{ profile.education.university }}
        </p>

        <div class="education-meta">
          <div>
            <span>GPA</span>
            <strong>{{ profile.education.gpa }}</strong>
          </div>

          <div>
            <span>LOCATION</span>
            <strong>{{ profile.location }}</strong>
          </div>
        </div>

        <div class="coursework">
          <p>RELEVANT COURSEWORK</p>

          <div class="coursework-list">
            <span
              v-for="course in coursework"
              :key="course"
            >
              {{ course }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.education {
  padding: 110px 5vw;
  background: #f6f7f9;
  color: #121417;
  border-top: 1px solid #d9dde3;
}

.education-header {
  margin-bottom: 75px;
}

.section-index {
  font-size: 10px;
  letter-spacing: 0.16em;
  color: #7c848e;
  margin-bottom: 18px;
}

.education-header h2 {
  font-size: clamp(48px, 6vw, 90px);
  line-height: 0.93;
  letter-spacing: -0.06em;
}

.education-card {
  border-top: 1px solid #cbd0d6;
  border-bottom: 1px solid #cbd0d6;
  padding: 38px 0;
  display: grid;
  grid-template-columns: 180px minmax(0, 1fr);
  gap: 40px;
}

.education-period {
  font-size: 12px;
  color: #7d858f;
}

.education-type {
  font-size: 9px;
  letter-spacing: 0.15em;
  color: #8b929b;
}

.education-main h3 {
  font-size: clamp(32px, 4vw, 58px);
  letter-spacing: -0.045em;
  margin: 12px 0 8px;
}

.university {
  font-size: 16px;
  color: #616974;
}

.education-meta {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 200px));
  gap: 12px;
  margin-top: 35px;
}

.education-meta div {
  border: 1px solid #d2d6dc;
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.education-meta span,
.coursework > p {
  font-size: 8px;
  letter-spacing: 0.14em;
  color: #858d97;
}

.education-meta strong {
  font-size: 14px;
}

.coursework {
  margin-top: 36px;
}

.coursework-list {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-top: 13px;
}

.coursework-list span {
  border: 1px solid #ccd1d7;
  padding: 8px 11px;
  font-size: 10px;
}

@media (max-width: 700px) {
  .education {
    padding: 80px 20px;
  }

  .education-card {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .education-meta {
    grid-template-columns: 1fr;
  }
}
</style>