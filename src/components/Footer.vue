<script setup lang="ts">
import Social from "./Social.vue";
import Link from "./Link.vue";
import Clickable from "./Clickable.vue";
import NotchSection from "./NotchSection.vue";
import ButtonRound from "./ButtonRound.vue";
import ArrowRightLong from "./icons/ArrowRightLong.vue";

import { lenis } from "../composables/useScroll";
import { profile } from "../content/profile";

interface Props {
  withSocial?: boolean;
}

const { withSocial = true } = defineProps<Props>();

const handleBackToTop = () => {
  if (!lenis.value) return;

  lenis.value.scrollTo(0);
};
</script>

<template>
  <footer class="footer">
    <NotchSection class="footer-notch" />

    <div class="footer-content">
      <!-- BACK TO TOP -->
      <div
        class="footer-back-to-top"
        tabindex="0"
        role="button"
        aria-label="Back to top"
        @click="handleBackToTop"
        @keydown.enter="handleBackToTop"
        data-cursor="circle-white"
        data-sound="click"
      >
        <ButtonRound
          renderAs="div"
          variant="border"
          class="children-unclickable"
          data-hoversound="hover"
        >
          <ArrowRightLong
            class="footer-back-to-top-icon"
          />
        </ButtonRound>
      </div>

      <!-- IDENTITY -->
      <div class="footer-top">
        <Social v-if="withSocial" />

        <div class="footer-identity">
          <strong>{{ profile.name }}</strong>

          <span>{{ profile.location }}</span>
        </div>
      </div>

      <!-- CREDITS -->
      <div class="footer-credits">
        <div class="footer-credit-row">
          <span>
            Portfolio based on an original concept by
          </span>

          <Clickable renderAs="div">
            <Link
              href="https://david-hckh.com"
              external
              class="footer-link children-unclickable"
              data-cursor="circle-white"
              data-hoversound="hover"
            >
              David Heckhoff
            </Link>
          </Clickable>
        </div>

        <div class="footer-credit-row">
          <span>Music produced by</span>

          <Clickable renderAs="div">
            <Link
              href="https://soundcloud.com/hmsurf"
              external
              class="footer-link children-unclickable"
              data-cursor="circle-white"
              data-hoversound="hover"
            >
              HM Surf
            </Link>
          </Clickable>
        </div>

        <p>
          Customized by {{ profile.name }}
        </p>

        <p>
          © {{ new Date().getFullYear() }}
          {{ profile.name }}
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  width: 100%;

  position: relative;

  display: flex;
  justify-content: center;

  background:
    var(
      --color-background-300,
      var(--color-beige-400)
    );

  &-content {
    width: 100%;
    max-width: var(--breakpoint-xxxl);

    padding:
      calc(
        var(--space-outer) +
        var(--space-sm)
      )
      var(--space-outer);

    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: var(--space-xl);
  }

  &-back-to-top {
    cursor: pointer;

    @include mixins.mq("md") {
      position: absolute;

      top:
        calc(
          var(--space-outer) +
          var(--space-sm)
        );

      left: 50%;

      transform: translateX(-50%);
    }

    &-icon {
      transform: rotate(-90deg);
    }
  }

  &-top {
    width: 100%;

    display: flex;
    flex-direction: column;

    justify-content: space-between;
    align-items: center;

    gap: var(--space-xl);

    @include mixins.mq("md") {
      flex-direction: row;
    }
  }

  &-identity {
    display: flex;
    flex-direction: column;

    gap: 4px;

    text-align: center;

    @include mixins.mq("md") {
      margin-left: auto;

      text-align: right;
    }

    strong {
      font-size: var(--font-size-md);
    }

    span {
      font-size: var(--font-size-sm);
      opacity: 0.6;
    }
  }

  &-credits {
    width: 100%;

    padding-top: var(--space-md);

    border-top:
      1px solid
      rgba(0, 0, 0, 0.12);

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: var(--space-sm);

    font-size: var(--font-size-sm);
    text-align: center;
  }

  &-credit-row {
    display: flex;
    flex-wrap: wrap;

    justify-content: center;

    gap: var(--space-xxs);
  }

  &-link {
    font-weight: 700;
  }

  &-notch {
    position: absolute;

    top: 0;
    left: 0;

    transform: translateY(-100%);

    color:
      var(
        --color-background-300,
        var(--color-beige-400)
      );

    --icon-color:
      var(
        --color-background-300,
        var(--color-beige-400)
      );
  }
}
</style>