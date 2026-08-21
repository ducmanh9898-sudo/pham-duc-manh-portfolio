import gsap from "gsap";
import { sceneWeightsInOut } from "../scenes";
import { animations as avatarAnimations } from "../../three/objects/avatar/animations";
import { createMatchMedia } from "../utils/matchMedia";

let inTl: gsap.core.Timeline | null = null;
let wakeUpMm: gsap.MatchMedia | null = null;

const setup = (contact: HTMLElement) => {
  // Contact is the final scene.
  // Keep its "out" weight at zero so the avatar
  // remains visible while the visitor reaches the bottom.
  sceneWeightsInOut.contact.out = 0;

  inTl = gsap.timeline({
    scrollTrigger: {
      trigger: contact,
      start: "top bottom",
      end: "bottom bottom",
      scrub: true,
    },
  });

  inTl.fromTo(
    sceneWeightsInOut.contact,
    { in: 0 },
    {
      in: 1,
      duration: 1,
      ease: "none",
    },
    0,
  );

  wakeUpMm = createMatchMedia((_context, { isMobile }) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contact,
        start: isMobile ? "top 10%" : "top 15%",
      },
    });

    tl.call(avatarAnimations.wakeUp, [0.25]);
  });
};

const destroy = () => {
  if (inTl) {
    inTl.kill();
    inTl = null;
  }

  if (wakeUpMm) {
    wakeUpMm.kill();
    wakeUpMm = null;
  }

  sceneWeightsInOut.contact.in = 0;
  sceneWeightsInOut.contact.out = 0;
};

export const contact = {
  setup,
  destroy,
};