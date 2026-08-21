<script setup lang="ts">
import { profile } from "../../../content/profile";
import { social } from "../../../content/social";

const github =
  social.find((item) => item.name === "github")?.url ?? "#";

const linkedin =
  social.find((item) => item.name === "linkedin")?.url ?? "#";
</script>

<template>
 <section
  id="professional-top"
  class="hero"
>
    <div class="hero-main">
      <div class="hero-status">
        <span class="status-dot"></span>
        <span>COMPUTER SCIENCE / DATA / SYSTEMS</span>
      </div>

      <h1>
        From raw data
        <br />
        to useful systems.
      </h1>

      <p class="hero-description">
        {{ profile.about }}
      </p>

      <div class="hero-actions">
        <a
          href="#professional-projects"
          class="action action-primary"
        >
          VIEW PROJECTS ↓
        </a>

        <a
          :href="github"
          target="_blank"
          rel="noopener noreferrer"
          class="action"
        >
          GITHUB ↗
        </a>

        <a
          :href="linkedin"
          target="_blank"
          rel="noopener noreferrer"
          class="action"
        >
          LINKEDIN ↗
        </a>
      </div>
    </div>

    <aside class="hero-dashboard">
      <div class="dashboard-title">
        <span>PROFILE / OVERVIEW</span>
        <span>2026</span>
      </div>

      <div class="dashboard-row">
        <span>Selected Projects</span>
        <strong>05+</strong>
      </div>

      <div class="dashboard-row">
        <span>GPA</span>
        <strong>{{ profile.education.gpa }}</strong>
      </div>

      <div class="dashboard-row">
        <span>English</span>
        <strong>{{ profile.english.level }}</strong>
      </div>

      <div class="dashboard-row">
        <span>Graduation</span>
        <strong>2027</strong>
      </div>

      <div class="dashboard-location">
        <span>LOCATION</span>
        <strong>{{ profile.location }}</strong>
      </div>

      <div class="dashboard-signal">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </aside>
  </section>
</template>

<style scoped>
.hero {
  min-height: calc(100vh - 74px);
  padding: 9vh 5vw 6vh;
  display: grid;
  grid-template-columns: minmax(0, 1.65fr) minmax(320px, 0.55fr);
  gap: 7vw;
  align-items: end;
  background: #f6f7f9;
  color: #121417;
}

.hero-status {
  display: flex;
  align-items: center;
  gap: 9px;
  font-size: 10px;
  letter-spacing: 0.15em;
  color: #68707a;
}

.status-dot {
  width: 7px;
  height: 7px;
  background: #111418;
  border-radius: 50%;
}

.hero h1 {
  font-size: clamp(62px, 8vw, 132px);
  line-height: 0.87;
  letter-spacing: -0.07em;
  margin: 28px 0 38px;
  max-width: 1200px;
}

.hero-description {
  max-width: 660px;
  font-size: 16px;
  line-height: 1.7;
  color: #626a74;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 34px;
}

.action {
  padding: 12px 16px;
  border: 1px solid #bfc5cc;
  text-decoration: none;
  color: #121417;
  font-size: 10px;
  letter-spacing: 0.1em;
  transition:
    background 0.2s ease,
    color 0.2s ease;
}

.action:hover {
  background: #121417;
  color: #fff;
}

.action-primary {
  background: #121417;
  color: #fff;
  border-color: #121417;
}

.hero-dashboard {
  border: 1px solid #cbd0d6;
}

.dashboard-title {
  padding: 13px 15px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #cbd0d6;
  font-size: 9px;
  letter-spacing: 0.13em;
  color: #737b85;
}

.dashboard-row {
  padding: 20px 15px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 1px solid #d6dade;
}

.dashboard-row span {
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #747c86;
}

.dashboard-row strong {
  font-size: 26px;
  letter-spacing: -0.04em;
}

.dashboard-location {
  padding: 18px 15px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.dashboard-location span {
  font-size: 8px;
  letter-spacing: 0.13em;
  color: #858c95;
}

.dashboard-location strong {
  font-size: 12px;
}

.dashboard-signal {
  height: 70px;
  border-top: 1px solid #cbd0d6;
  padding: 12px 15px;
  display: flex;
  gap: 6px;
  align-items: flex-end;
}

.dashboard-signal span {
  flex: 1;
  background: #171a1e;
}

.dashboard-signal span:nth-child(1) { height: 24%; }
.dashboard-signal span:nth-child(2) { height: 38%; }
.dashboard-signal span:nth-child(3) { height: 31%; }
.dashboard-signal span:nth-child(4) { height: 54%; }
.dashboard-signal span:nth-child(5) { height: 48%; }
.dashboard-signal span:nth-child(6) { height: 72%; }
.dashboard-signal span:nth-child(7) { height: 65%; }
.dashboard-signal span:nth-child(8) { height: 90%; }

@media (max-width: 850px) {
  .hero {
    grid-template-columns: 1fr;
    padding: 90px 20px 50px;
  }

  .hero h1 {
    font-size: clamp(54px, 16vw, 90px);
  }

  .hero-dashboard {
    margin-top: 20px;
  }
}
</style>