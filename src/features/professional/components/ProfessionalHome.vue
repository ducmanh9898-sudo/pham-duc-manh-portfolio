<script setup lang="ts">
import { profile } from "../../../content/profile";
import ExperienceSwitcher from "../../gateway/components/ExperienceSwitcher.vue";
</script>

<template>
  <main class="professional">
  <ExperienceSwitcher />
    <nav class="professional-nav">
      <div>
        <strong>{{ profile.name }}</strong>
        <span> / Portfolio</span>
      </div>

      <div class="nav-links">
        <a href="#professional-about">About</a>
        <a href="#professional-projects">Projects</a>
        <a href="#professional-contact">Contact</a>
      </div>
    </nav>

    <section class="professional-hero">
      <div class="hero-copy">
        <p class="eyebrow">COMPUTER SCIENCE / DATA / SYSTEMS</p>

        <h1>
          Building practical
          <br />
          data-driven systems.
        </h1>

        <p class="hero-description">
          {{ profile.about }}
        </p>
      </div>

      <div class="hero-meta">
        <div class="metric">
          <span>SELECTED WORK</span>
          <strong>05+</strong>
        </div>

        <div class="metric">
          <span>GPA</span>
          <strong>{{ profile.education.gpa }}</strong>
        </div>

        <div class="metric">
          <span>ENGLISH</span>
          <strong>{{ profile.english.level }}</strong>
        </div>
      </div>
    </section>

    <section id="professional-about" class="professional-section">
      <div class="section-number">01</div>

      <div>
        <p class="section-label">PROFILE</p>

        <h2>{{ profile.title }}</h2>

        <p class="section-copy">
          {{ profile.tagline }}
        </p>
      </div>
    </section>

    <section id="professional-projects" class="professional-section">
      <div class="section-number">02</div>

      <div>
        <p class="section-label">SELECTED PROJECTS</p>

        <h2>Projects will live here.</h2>

        <p class="section-copy">
          This section will become the recruiter-focused case study view
          in the next stage.
        </p>
      </div>
    </section>

    <section id="professional-contact" class="professional-section">
      <div class="section-number">03</div>

      <div>
        <p class="section-label">LOCATION</p>

        <h2>{{ profile.location }}</h2>
      </div>
    </section>
  </main>
</template>

<style scoped>
.professional {
  min-height: 100vh;
  background: #f6f7f9;
  color: #121417;
  font-family:
    Inter,
    Arial,
    sans-serif;
}

.professional-nav {
  height: 74px;
  border-bottom: 1px solid #d9dde3;
  padding: 0 5vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
}

.professional-nav span {
  opacity: 0.45;
}

.nav-links {
  display: flex;
  gap: 28px;
}

.nav-links a {
  color: inherit;
  text-decoration: none;
}

.professional-hero {
  min-height: calc(100vh - 74px);
  padding: 9vh 5vw 6vh;
  display: grid;
  grid-template-columns: minmax(0, 1.8fr) minmax(260px, 0.7fr);
  gap: 7vw;
  align-items: end;
}

.eyebrow,
.section-label,
.metric span {
  font-size: 11px;
  letter-spacing: 0.16em;
  opacity: 0.5;
}

.hero-copy h1 {
  font-size: clamp(56px, 7vw, 120px);
  line-height: 0.91;
  letter-spacing: -0.065em;
  margin: 24px 0 36px;
  max-width: 1100px;
}

.hero-description {
  max-width: 650px;
  font-size: 17px;
  line-height: 1.7;
  color: #555d67;
}

.hero-meta {
  border-top: 1px solid #cfd4da;
}

.metric {
  padding: 22px 0;
  border-bottom: 1px solid #cfd4da;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.metric strong {
  font-size: 30px;
  letter-spacing: -0.04em;
}

.professional-section {
  min-height: 62vh;
  border-top: 1px solid #d9dde3;
  padding: 7vh 5vw;
  display: grid;
  grid-template-columns: 120px minmax(0, 1fr);
}

.section-number {
  font-size: 12px;
  opacity: 0.4;
}

.professional-section h2 {
  font-size: clamp(38px, 5vw, 72px);
  letter-spacing: -0.05em;
  margin: 18px 0;
}

.section-copy {
  max-width: 600px;
  line-height: 1.7;
  color: #626974;
}

@media (max-width: 800px) {
  .professional-nav {
    padding: 0 20px;
  }

  .nav-links {
    display: none;
  }

  .professional-hero {
    padding: 90px 20px 40px;
    grid-template-columns: 1fr;
  }

  .professional-section {
    padding: 60px 20px;
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .hero-copy h1 {
    font-size: clamp(48px, 15vw, 78px);
  }
}
</style>