<script setup lang="ts">
import { profile } from "../../../content/profile";
</script>

<template>
  <nav class="professional-nav">
    <a href="#professional-top" class="nav-brand">
      <strong>{{ profile.name }}</strong>
      <span>/ Portfolio</span>
    </a>

    <div class="nav-links">
      <a href="#professional-about">Profile</a>
      <a href="#professional-stack">Stack</a>
      <a href="#professional-projects">Projects</a>
      <a href="#professional-education">Education</a>
      <a href="#professional-certifications">Certificates</a>
      <a href="#professional-contact">Contact</a>
    </div>

    <a
      href="/resume/Pham_Duc_Manh_Resume.pdf"
      target="_blank"
      class="resume-link"
    >
      Resume ↗
    </a>
  </nav>
</template>

<style scoped>
.professional-nav {
  position: sticky;
  top: 0;
  z-index: 1000;

  height: 68px;
  padding: 0 5vw;

  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 40px;

  background: rgba(246, 247, 249, 0.92);
  border-bottom: 1px solid #d9dde3;

  backdrop-filter: blur(18px);
}

.nav-brand {
  display: flex;
  gap: 5px;
  align-items: center;

  color: #121417;
  text-decoration: none;
  font-size: 12px;

  white-space: nowrap;
}

.nav-brand span {
  color: #9299a2;
}

.nav-links {
  display: flex;
  justify-content: center;
  gap: 24px;
}

.nav-links a,
.resume-link {
  color: #59616b;
  text-decoration: none;

  font-size: 9px;
  letter-spacing: 0.09em;
  text-transform: uppercase;

  transition: color 0.2s ease;
}

.nav-links a:hover,
.resume-link:hover {
  color: #111418;
}

.resume-link {
  border: 1px solid #c9ced4;
  padding: 9px 12px;
}

@media (max-width: 1050px) {
  .professional-nav {
    grid-template-columns: 1fr auto;
  }

  .nav-links {
    display: none;
  }
}

@media (max-width: 600px) {
  .professional-nav {
    height: 60px;
    padding: 0 20px;
  }

  .nav-brand span {
    display: none;
  }

  .resume-link {
    font-size: 8px;
    padding: 7px 9px;
  }
}
</style>