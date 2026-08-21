<script setup lang="ts">
import {
  ref,
  watchEffect,
  onBeforeUnmount,
} from "vue";
import gsap from "gsap";
import { Vector3 } from "three";

import AppearingText from "../../../components/AppearingText.vue";
import PinIcon from "../../../components/icons/Pin.vue";
import ProjectedElement from "../../../components/ProjectedElement.vue";

import { BREAKPOINTS } from "../../../utils/sizes";
import { profile } from "../../../content/profile";

const point = new Vector3(
  -0.76,
  3.6,
  6.75,
);

const wrapperRef =
  ref<HTMLDivElement | null>(null);

const timelines = ref<
  {
    timeline: gsap.core.Timeline;
    delay: number;
  }[]
>([]);

let matchMedia:
  | gsap.MatchMedia
  | null = null;

const emit = defineEmits<{
  "timeline:created": [
    timeline: gsap.core.Timeline,
  ];
}>();

watchEffect((onInvalidate) => {
  const wrapperEl = wrapperRef.value;

  if (!wrapperEl) {
    return;
  }

  if (matchMedia) {
    matchMedia.revert();
    matchMedia = null;
  }

  matchMedia = gsap.matchMedia();

  matchMedia.add(
    {
      isMobile: `(max-width: ${
        BREAKPOINTS.md - 1
      }px)`,

      isDesktop: `(min-width: ${BREAKPOINTS.md}px)`,

      isLandscape:
        "(min-aspect-ratio: 1)",
    },

    (context) => {
      const { conditions } = context;

      const { isLandscape } =
        conditions as {
          isMobile: boolean;
          isDesktop: boolean;
          isLandscape: boolean;
        };

      const tl = gsap.timeline({
        paused: true,
      });

      if (isLandscape) {
        tl.fromTo(
          wrapperEl,

          {
            clipPath:
              "inset(0% 0% 0% 100%)",
          },

          {
            clipPath:
              "inset(0% 0% 0% 0%)",

            duration: 0.3,

            ease: "none",
          },

          0,
        );
      } else {
        gsap.set(wrapperEl, {
          clipPath:
            "inset(0% 0% 0% 0%)",
        });
      }

      if (isLandscape) {
        for (
          let i = 0;
          i < timelines.value.length;
          i++
        ) {
          const item =
            timelines.value[i];

          if (!item) {
            continue;
          }

          tl.add(
            () => {
              item.timeline.restart(
                true,
              );
            },

            item.delay + 0.25,
          );
        }
      }

      emit(
        "timeline:created",
        tl,
      );

      return () => {
        tl.kill();
      };
    },
  );

  onInvalidate(() => {
    if (matchMedia) {
      matchMedia.revert();
      matchMedia = null;
    }
  });
});

onBeforeUnmount(() => {
  if (matchMedia) {
    matchMedia.revert();
    matchMedia = null;
  }
});

const handleTimelineCreated = (
  timeline: gsap.core.Timeline,
  delay: number,
) => {
  timelines.value = [
    ...timelines.value,

    {
      timeline,
      delay,
    },
  ];
};
</script>

<template>
  <ProjectedElement :point="point">
    <div
      ref="wrapperRef"
      class="box-details"
    >
      <div
        class="box-details-content"
      >
        <div
          class="box-details-title"
        >
          <AppearingText
            text="PROFILE"
            :steps="1"
            :duration="0.35"
            @timeline:created="
              (
                tl:
                  gsap.core.Timeline,
              ) =>
                handleTimelineCreated(
                  tl,
                  0,
                )
            "
          />
        </div>

        <div
          class="box-details-items"
        >
          <div
            class="box-details-item"
          >
            <AppearingText
              class="box-details-content-copy"
              :text="
                profile.creative.status
              "
              :steps="2"
              :duration="0.35"
              @timeline:created="
                (
                  tl:
                    gsap.core.Timeline,
                ) =>
                  handleTimelineCreated(
                    tl,
                    0.08,
                  )
              "
            />
          </div>

          <div
            class="box-details-item"
          >
            <AppearingText
              class="box-details-content-copy"
              :text="
                profile.creative.focus
              "
              :steps="2"
              :duration="0.35"
              @timeline:created="
                (
                  tl:
                    gsap.core.Timeline,
                ) =>
                  handleTimelineCreated(
                    tl,
                    0.14,
                  )
              "
            />
          </div>

          <div
            class="box-details-item"
          >
            <PinIcon
              class="box-details-icon"
            />

            <AppearingText
              class="box-details-content-copy"
              :text="
                profile.location
              "
              :steps="3"
              :duration="0.35"
              @timeline:created="
                (
                  tl:
                    gsap.core.Timeline,
                ) =>
                  handleTimelineCreated(
                    tl,
                    0.2,
                  )
              "
            />
          </div>
        </div>
      </div>
    </div>
  </ProjectedElement>
</template>

<style scoped lang="scss">
.box-details {
  --line-length:
    min(
      48px,
      calc(var(--svw) * 5)
    );

  display: none;

  @include mixins.landscape {
    display: block;

    position: absolute;

    width: 340px;

    max-width:
      calc(var(--svw) * 34);

    padding-bottom: 3px;

    padding-right:
      var(--line-length);

    transform:
      translate(
        -100%,
        -50%
      );
  }

  @include mixins.landscape-large {
    width: 360px;

    max-width:
      calc(var(--svw) * 34);
  }

  &::after,
  &::before {
    display: none;

    @include mixins.landscape {
      display: block;
    }
  }

  &::after {
    content: "";

    position: absolute;

    top: 50%;

    right: 0;

    width: 11px;

    height: 11px;

    transform:
      translateY(-50%);

    background-color:
      var(--color-cyan-400);

    border-radius: 50%;
  }

  &::before {
    content: "";

    position: absolute;

    top: 50%;

    right: 0;

    width:
      var(--line-length);

    height: 0;

    transform:
      translateY(-50%);

    border-bottom:
      var(--stroke-sm)
      solid
      var(--color-cyan-400);
  }

  &-content {
    display: flex;

    flex-direction: column;

    justify-content:
      flex-start;

    gap: 10px;

    padding:
      var(--space-xs)
      var(--space-sm);

    border:
      var(--stroke-sm)
      solid
      var(--color-cyan-400);

    border-radius:
      var(--radius-md);

    background:
      linear-gradient(
        to bottom,
        var(--color-hologram-top)
          0%,
        var(--color-hologram-bottom)
          100%
      );

    @include mixins.mq("md") {
      padding:
        var(--space-sm)
        var(--space-md);
    }
  }

  &-title {
    margin-bottom: 2px;

    font-size:
      var(
        --font-size-title-xxs
      );

    font-weight: 700;

    line-height: 1;

    @include mixins.mq("md") {
      font-size:
        var(
          --font-size-title-xs
        );
    }
  }

  &-items {
    display: flex;

    flex-direction: column;

    gap: 9px;

    font-size:
      var(--font-size-sm);
  }

  &-item {
    display: flex;

    flex-direction: row;

    align-items: flex-start;

    gap: 8px;

    width: 100%;

    height: auto;

    min-height: 20px;

    white-space: normal;

    line-height: 1.3;
  }

  &-icon {
    flex: 0 0 auto;

    width:
      var(--icon-size-xxs);

    margin-top: 2px;

    --icon-color:
      var(--color-white-400);

    @include mixins.mq("md") {
      width:
        var(--icon-size-xs);
    }
  }
}

.box-details-content-copy {
  flex: 1;

  min-width: 0;

  white-space: normal;

  overflow-wrap:
    break-word;

  word-break: normal;

  line-height: 1.3;
}
</style>