<script setup lang="ts">
import { certifications } from "../../../content/certifications";
</script>

<template>
  <section
  id="professional-certifications"
  class="certifications"
>
    <header class="certifications-header">
      <p class="section-index">
        05 / CERTIFICATIONS
      </p>

      <h2>
        Continuous
        <br />
        learning.
      </h2>

      <p>
        Professional certificates and courses supporting my
        development across analytics, business intelligence,
        cloud data and project management.
      </p>
    </header>

    <div class="certificate-list">
      <component
        :is="certificate.url ? 'a' : 'div'"
        v-for="(certificate, index) in certifications"
        :key="certificate.name"
        :href="certificate.url ?? undefined"
        :target="certificate.url ? '_blank' : undefined"
        :rel="certificate.url ? 'noopener noreferrer' : undefined"
        class="certificate"
      >
        <span class="certificate-index">
          {{ String(index + 1).padStart(2, "0") }}
        </span>

        <div class="certificate-main">
          <h3>{{ certificate.name }}</h3>

          <span>
            {{ certificate.issuer }}
          </span>
        </div>

        <span class="certificate-year">
          {{ certificate.year }}
        </span>

        <span class="certificate-arrow">
          {{ certificate.url ? "↗" : "—" }}
        </span>
      </component>
    </div>
  </section>
</template>

<style scoped>
.certifications {
  padding: 110px 5vw;
  background: #e9edf1;
  color: #121417;
  border-top: 1px solid #cdd2d8;
}

.certifications-header {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(280px, 0.6fr);
  gap: 60px;
  align-items: end;
  margin-bottom: 75px;
}

.section-index {
  grid-column: 1 / -1;
  font-size: 10px;
  letter-spacing: 0.16em;
  color: #777f89;
}

.certifications-header h2 {
  font-size: clamp(48px, 6vw, 90px);
  line-height: 0.93;
  letter-spacing: -0.06em;
}

.certifications-header > p:last-child {
  line-height: 1.7;
  color: #69717b;
  max-width: 480px;
}

.certificate-list {
  border-top: 1px solid #bec5cc;
}

.certificate {
  display: grid;
  grid-template-columns: 60px minmax(0, 1fr) 80px 30px;
  align-items: center;
  gap: 20px;
  padding: 27px 0;
  border-bottom: 1px solid #bec5cc;
  color: inherit;
  text-decoration: none;
  transition: padding 0.2s ease;
}

a.certificate:hover {
  padding-left: 10px;
}

.certificate-index {
  font-size: 10px;
  color: #858d97;
}

.certificate-main h3 {
  font-size: clamp(18px, 2vw, 27px);
  letter-spacing: -0.025em;
  margin-bottom: 6px;
}

.certificate-main span {
  font-size: 11px;
  color: #737b85;
}

.certificate-year {
  font-size: 11px;
}

.certificate-arrow {
  font-size: 18px;
}

@media (max-width: 750px) {
  .certifications {
    padding: 80px 20px;
  }

  .certifications-header {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .section-index {
    grid-column: auto;
  }

  .certificate {
    grid-template-columns: 30px 1fr 40px;
  }

  .certificate-year {
    display: none;
  }
}
</style>