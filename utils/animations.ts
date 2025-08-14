import { easeInOut } from "framer-motion";

export const fadeInLeft = {
  hidden: { opacity: 0, x: -60, filter: "blur(3px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      ease: easeInOut,
      duration: 0.6,
      delay: 0.3
    }
  }
};

export const fadeInDown = {
  hidden : { opacity: 0, y: -8, filter: "blur(3px)" },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring" as const,
      duration: 0.8,
      stiffness: 400,
      damping: 30,
      mass: 1,
      restDelta: 0.001,
      delay: 0.6 + (i * 0.1)
    }
  })
}

export const fadeInV1 = {
  hidden: { opacity: 0, filter: "blur(3px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring" as const,
      duration: 0.5,
      delay: 0.8,
      mass: 1,
      restDelta: 0.001,
      stiffness: 400,
      damping: 30
    }
  }
}

export const fadeInV2 = {
  hidden: { opacity: 0, filter: "blur(3px)" },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring" as const,
      duration: 0.5,
      stiffness: 400,
      damping: 30,
      mass: 1,
      restDelta: 0.001,
      delay: 0.8 + (i * 0.1)
    }
  })
}

export const fadeUpHeaderBTN1 = {
  hidden: { opacity: 0, y: 15, filter: "blur(3px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring" as const,
      duration: 0.5,
      delay: 0.6,
      mass: 1,
      restDelta: 0.001,
      stiffness: 400,
      damping: 30
    }
  }
}

export const fadeUpHeaderBTN2 = {
  hidden: { opacity: 0, y: 15, filter: "blur(3px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring" as const,
      duration: 0.6,
      delay: 0.7,
      mass: 1,
      restDelta: 0.001,
      stiffness: 400,
      damping: 30
    }
  }
}

export const fadeUpHeaderBTN3 = {
  hidden: { opacity: 0, y: 15, filter: "blur(3px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring" as const,
      duration: 0.7,
      delay: 0.8,
      mass: 1,
      restDelta: 0.001,
      stiffness: 400,
      damping: 30
    }
  }
}