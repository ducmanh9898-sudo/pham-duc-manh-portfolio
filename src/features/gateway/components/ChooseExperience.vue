<script setup lang="ts">
import { profile } from "../../../content/profile";
import { useExperience } from "../../../composables/useExperience";

const { selectExperience } = useExperience();
</script>

<template>
  <main class="gateway">
    <div class="gateway-noise"></div>

    <section class="gateway-content">
      <header class="gateway-header">
        <p class="gateway-eyebrow">PORTFOLIO / 2026</p>

        <h1 class="gateway-name">
          {{ profile.name }}
        </h1>

        <p class="gateway-title">
          {{ profile.title }}
        </p>
      </header>

      <div class="gateway-intro">
        <p>Two ways to explore the same journey.</p>
        <h2>Choose your experience.</h2>
      </div>

      <div class="experience-grid">
        <!-- PROFESSIONAL -->
        <button
          class="experience-card experience-card-professional"
          type="button"
          @click="selectExperience('professional')"
        >
          <div class="card-top">
            <span class="card-index">01</span>
            <span class="card-status">RECRUITER FRIENDLY</span>
          </div>

          <div class="professional-preview" aria-hidden="true">
            <div class="preview-sidebar">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div class="preview-main">
              <div class="preview-line preview-line-lg"></div>

              <div class="preview-metrics">
                <div>
                  <strong>05+</strong>
                  <span>Projects</span>
                </div>

                <div>
                  <strong>B2</strong>
                  <span>English</span>
                </div>

                <div>
                  <strong>8.2</strong>
                  <span>GPA</span>
                </div>
              </div>

              <div class="preview-chart">
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
              </div>
            </div>
          </div>

          <div class="card-copy">
            <p class="card-label">PROFESSIONAL MODE</p>

            <h3>
              Structured.
              <br />
              Data-driven.
            </h3>

            <p class="card-description">
              A clean and focused view of my projects, skills,
              education and technical journey.
            </p>
          </div>

          <div class="card-footer">
            <span>ENTER PROFESSIONAL</span>
            <span class="card-arrow">↗</span>
          </div>
        </button>

        <!-- CREATIVE -->
        <button
          class="experience-card experience-card-creative"
          type="button"
          @click="selectExperience('creative')"
        >
          <div class="card-top">
            <span class="card-index">02</span>
            <span class="card-status">INTERACTIVE</span>
          </div>

          <div class="creative-preview" aria-hidden="true">
            <div class="creative-orbit creative-orbit-one"></div>
            <div class="creative-orbit creative-orbit-two"></div>

            <div class="creative-face">
              <span class="creative-eye"></span>
              <span class="creative-eye"></span>
              <span class="creative-smile"></span>
            </div>

            <div class="creative-chip creative-chip-one">
              DATA
            </div>

            <div class="creative-chip creative-chip-two">
              AI
            </div>

            <div class="creative-chip creative-chip-three">
              IDEAS
            </div>
          </div>

          <div class="card-copy">
            <p class="card-label">CREATIVE MODE</p>

            <h3>
              Playful.
              <br />
              Interactive.
            </h3>

            <p class="card-description">
              Explore my work through a more experimental,
              animated and personality-driven experience.
            </p>
          </div>

          <div class="card-footer">
            <span>ENTER CREATIVE</span>
            <span class="card-arrow">↗</span>
          </div>
        </button>
      </div>

      <footer class="gateway-footer">
        <span>{{ profile.location }}</span>
        <span>SELECT AN EXPERIENCE TO CONTINUE</span>
      </footer>
    </section>
  </main>
</template>

<style scoped lang="scss">
.gateway {
  min-height: 100svh;
  width: 100%;
  background: #f2efe8;
  color: #161616;
  position: relative;
  overflow: hidden;
}

.gateway-noise {
  position: absolute;
  inset: 0;
  opacity: 0.035;
  pointer-events: none;
  background-image: radial-gradient(#000 0.6px, transparent 0.6px);
  background-size: 5px 5px;
}

.gateway-content {
  width: min(1440px, 100%);
  min-height: 100svh;
  margin: 0 auto;
  padding: 32px;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
}

.gateway-header {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: end;
  border-bottom: 1px solid rgba(22, 22, 22, 0.2);
  padding-bottom: 20px;
}

.gateway-eyebrow {
  grid-column: 1 / -1;
  font-size: 11px;
  letter-spacing: 0.18em;
  margin-bottom: 12px;
  opacity: 0.55;
}

.gateway-name {
  font-size: clamp(24px, 3vw, 48px);
  line-height: 0.95;
  font-weight: 800;
  letter-spacing: -0.04em;
}

.gateway-title {
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  opacity: 0.65;
}

.gateway-intro {
  padding: 48px 0 28px;
}

.gateway-intro p {
  font-size: 13px;
  opacity: 0.55;
  margin-bottom: 8px;
}

.gateway-intro h2 {
  font-size: clamp(36px, 6vw, 86px);
  letter-spacing: -0.06em;
  line-height: 0.95;
  font-weight: 700;
}

.experience-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  flex: 1;
}

.experience-card {
  appearance: none;
  border: 1px solid rgba(22, 22, 22, 0.18);
  padding: 22px;
  text-align: left;
  cursor: pointer;
  min-height: 500px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition:
    transform 0.35s ease,
    border-color 0.35s ease;
  font: inherit;
}

.experience-card:hover {
  transform: translateY(-6px);
  border-color: rgba(22, 22, 22, 0.65);
}

.experience-card-professional {
  background: #ecebe6;
  color: #161616;
}

.experience-card-creative {
  background: #17151d;
  color: #fff;
}

.card-top,
.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 3;
}

.card-index {
  font-size: 12px;
  opacity: 0.55;
}

.card-status {
  border: 1px solid currentColor;
  border-radius: 999px;
  padding: 5px 9px;
  font-size: 9px;
  letter-spacing: 0.12em;
  opacity: 0.65;
}

.card-copy {
  margin-top: auto;
  position: relative;
  z-index: 3;
  max-width: 470px;
}

.card-label {
  font-size: 11px;
  letter-spacing: 0.16em;
  margin-bottom: 10px;
  opacity: 0.55;
}

.card-copy h3 {
  font-size: clamp(36px, 4vw, 64px);
  line-height: 0.94;
  letter-spacing: -0.05em;
  margin-bottom: 18px;
}

.card-description {
  font-size: 14px;
  line-height: 1.55;
  max-width: 380px;
  opacity: 0.65;
}

.card-footer {
  border-top: 1px solid currentColor;
  padding-top: 16px;
  margin-top: 32px;
  font-size: 11px;
  letter-spacing: 0.12em;
}

.card-arrow {
  font-size: 20px;
  transition: transform 0.3s ease;
}

.experience-card:hover .card-arrow {
  transform: translate(4px, -4px);
}

/* PROFESSIONAL PREVIEW */

.professional-preview {
  width: min(390px, 72%);
  height: 185px;
  position: absolute;
  top: 72px;
  right: 22px;
  border: 1px solid rgba(22, 22, 22, 0.2);
  display: grid;
  grid-template-columns: 48px 1fr;
  background: rgba(255, 255, 255, 0.35);
}

.preview-sidebar {
  border-right: 1px solid rgba(22, 22, 22, 0.14);
  padding: 14px 10px;
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.preview-sidebar span {
  height: 4px;
  background: rgba(22, 22, 22, 0.2);
}

.preview-main {
  padding: 17px;
}

.preview-line {
  background: rgba(22, 22, 22, 0.17);
  height: 5px;
}

.preview-line-lg {
  width: 46%;
}

.preview-metrics {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 7px;
  margin-top: 20px;
}

.preview-metrics div {
  border: 1px solid rgba(22, 22, 22, 0.13);
  padding: 8px;
  display: flex;
  flex-direction: column;
}

.preview-metrics strong {
  font-size: 16px;
}

.preview-metrics span {
  font-size: 7px;
  margin-top: 2px;
  opacity: 0.5;
  text-transform: uppercase;
}

.preview-chart {
  height: 55px;
  display: flex;
  gap: 7px;
  align-items: end;
  margin-top: 17px;
}

.preview-chart i {
  flex: 1;
  background: #232323;
  opacity: 0.82;
}

.preview-chart i:nth-child(1) {
  height: 30%;
}

.preview-chart i:nth-child(2) {
  height: 55%;
}

.preview-chart i:nth-child(3) {
  height: 42%;
}

.preview-chart i:nth-child(4) {
  height: 78%;
}

.preview-chart i:nth-child(5) {
  height: 60%;
}

.preview-chart i:nth-child(6) {
  height: 92%;
}

/* CREATIVE PREVIEW */

.creative-preview {
  position: absolute;
  width: 280px;
  height: 230px;
  right: 30px;
  top: 58px;
}

.creative-face {
  position: absolute;
  width: 128px;
  height: 128px;
  border-radius: 42% 58% 52% 48%;
  background: #bdf86a;
  top: 48px;
  left: 76px;
  transform: rotate(-7deg);
}

.creative-eye {
  width: 10px;
  height: 15px;
  border-radius: 999px;
  background: #17151d;
  position: absolute;
  top: 43px;
}

.creative-eye:nth-child(1) {
  left: 38px;
}

.creative-eye:nth-child(2) {
  right: 38px;
}

.creative-smile {
  position: absolute;
  width: 36px;
  height: 18px;
  border-bottom: 4px solid #17151d;
  border-radius: 0 0 50% 50%;
  left: 46px;
  top: 69px;
}

.creative-orbit {
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 50%;
}

.creative-orbit-one {
  width: 220px;
  height: 120px;
  left: 27px;
  top: 49px;
  transform: rotate(22deg);
}

.creative-orbit-two {
  width: 220px;
  height: 120px;
  left: 27px;
  top: 49px;
  transform: rotate(-27deg);
}

.creative-chip {
  position: absolute;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 9px;
  letter-spacing: 0.12em;
  font-weight: 700;
}

.creative-chip-one {
  background: #ff8f70;
  left: 4px;
  top: 38px;
  transform: rotate(-8deg);
}

.creative-chip-two {
  background: #72c8ff;
  color: #17151d;
  right: 4px;
  top: 30px;
  transform: rotate(10deg);
}

.creative-chip-three {
  background: #f5d95f;
  color: #17151d;
  right: 9px;
  bottom: 25px;
  transform: rotate(-6deg);
}

.gateway-footer {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding-top: 22px;
  font-size: 9px;
  letter-spacing: 0.14em;
  opacity: 0.5;
}

@media (max-width: 800px) {
  .gateway-content {
    padding: 20px;
  }

  .gateway-header {
    grid-template-columns: 1fr;
    gap: 8px;
  }

  .gateway-title {
    justify-self: start;
  }

  .gateway-intro {
    padding-top: 38px;
  }

  .experience-grid {
    grid-template-columns: 1fr;
  }

  .experience-card {
    min-height: 470px;
  }

  .professional-preview,
  .creative-preview {
    transform: scale(0.82);
    transform-origin: top right;
  }

  .gateway-footer {
    flex-direction: column;
    padding-bottom: 10px;
  }
}
</style>