<script setup lang="ts">
import { profile } from "../../../content/profile";
import { social } from "../../../content/social";

const email =
  social.find((item) => item.name === "mail")?.url ?? "#";

const github =
  social.find((item) => item.name === "github")?.url ?? "#";

const linkedin =
  social.find((item) => item.name === "linkedin")?.url ?? "#";
</script>

<template>
  <section
    id="professional-contact"
    class="contact"
  >
    <div class="contact-index">
      06 / CONTACT
    </div>

    <div class="contact-main">
      <p class="contact-eyebrow">
        OPEN TO OPPORTUNITIES
      </p>

      <h2>
        Let's build something
        <br />
        useful.
      </h2>

      <p class="contact-description">
        Interested in data engineering, analytics and
        system-oriented opportunities where I can keep
        learning while contributing to practical projects.
      </p>

      <div class="contact-actions">
        <a
          :href="email"
          class="contact-primary"
        >
          EMAIL ME ↗
        </a>

        <a
          href="/resume/Pham_Duc_Manh_Resume.pdf"
          target="_blank"
        >
          VIEW RESUME ↗
        </a>

        <a
          :href="linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          LINKEDIN ↗
        </a>

        <a
          :href="github"
          target="_blank"
          rel="noopener noreferrer"
        >
          GITHUB ↗
        </a>
      </div>
    </div>

    <footer class="contact-footer">
      <span>{{ profile.name }}</span>
      <span>{{ profile.location }}</span>
      <span>PORTFOLIO / 2026</span>
    </footer>
  </section>
</template>

<style scoped>
.contact {
  min-height: 90vh;
  padding: 80px 5vw 30px;
  background: #111418;
  color: #f4f6f8;
  display: flex;
  flex-direction: column;
}

.contact-index {
  font-size: 10px;
  letter-spacing: 0.16em;
  color: #737b85;
}

.contact-main {
  margin: auto 0;
}

.contact-eyebrow {
  font-size: 10px;
  letter-spacing: 0.16em;
  color: #89919a;
  margin-bottom: 20px;
}

.contact h2 {
  font-size: clamp(58px, 8vw, 128px);
  line-height: 0.88;
  letter-spacing: -0.07em;
}

.contact-description {
  max-width: 600px;
  margin-top: 32px;
  font-size: 15px;
  line-height: 1.7;
  color: #9199a3;
}

.contact-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 38px;
}

.contact-actions a {
  color: #f4f6f8;
  text-decoration: none;
  border: 1px solid #454b53;
  padding: 12px 16px;
  font-size: 10px;
  letter-spacing: 0.1em;
  transition:
    background 0.2s ease,
    color 0.2s ease;
}

.contact-actions a:hover,
.contact-actions .contact-primary {
  background: #f4f6f8;
  color: #111418;
}

.contact-footer {
  border-top: 1px solid #353a41;
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  color: #737b85;
  font-size: 9px;
  letter-spacing: 0.1em;
}

@media (max-width: 700px) {
  .contact {
    padding: 70px 20px 25px;
  }

  .contact-footer {
    flex-direction: column;
  }
}
</style>