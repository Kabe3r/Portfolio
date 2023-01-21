
export const imageWrapper = {
      initial: {
            y: -2000,
      },
      animate: {
            y: -320,
            transition: {
                  delay: 2,
                  duration: 0.4,
                  type: "tween",
            },
      },
};

export const path01Variants = {
      open: { d: "M3.06061 2.99999L21.0606 21" },
      closed: { d: "M0 9.5L32 9.5" }
};

export const path02Variants = {
      open: { d: "M3.00006 21.0607L21 3.06064" },
      closed: { d: "M0 14.5L24 14.5" }
};

export const path03Variants = {
      open: { d: "M3.00006 21.0607L21 3.06064" },
      moving: { d: "M0 14.5L24 14.5" },
      closed: { d: "M0 19.5L16 19.5" }
};

export const iconsContainer = {
      initial: {},
      animate: {
            transition: {
                  delayChildren: 2.5,
                  staggerChildren: 0.2,
            },
      },
};

export const iconWrapper = {
      initial: {
            y: -2000,
      },
      animate: {
            y: 0,
            transition: {
                  duration: 0.4,
                  type: 'tween'
            }
      }
}

export const container = {
      visible: {
            transition: {
                  staggerChildren: 0.115,
                  delayChildren: 2,
            }
      }
}


export const item = {
      hidden: {
            y: "200%",
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85, }
      },
      visible: {
            y: 0,
            transition: {
                  ease: [0.455, 0.03, 0.515, 0.955], duration: 1,
                  type: 'spring'
            }
      }
};


export const aboutIconAnimate = {
      rotate: 360
}

export const aboutIconTransition = {
      type: 'tween',
      repeatType: "reverse",
      duration: 2,
      delay: 2.2
}


export const contactInputTransition = {
      background: [
            "linear-gradient(to right, #c9ada7 -200%, #f2e9e4 -100%, #c9ada7 0%,   #f2e9e4 100%)",
            "linear-gradient(to right, #c9ada7 -100%, #f2e9e4 0%,    #c9ada7 100%, #f2e9e4 200%)",
            "linear-gradient(to right, #c9ada7 0%, #f2e9e4 100%, #c9ada7 200%, #f2e9e4 300%)"
      ],
      transition: {
            duration: 2,
            repeat: Infinity,
            ease: "linear"
      }
}


export const itemVariants = {
      open: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 300, damping: 24 }
      },
      closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

export const linkVariants = {
      open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05
            }
      },
      closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",

            transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.3
            }
      }

};

