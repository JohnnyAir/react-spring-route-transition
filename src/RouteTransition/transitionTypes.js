//
const transitionTypes = {
  RIGHT_TO_LEFT: {
    forward: {
      from: {
        top: 0,
        transform: "translateX(100%)"
      },
      enter: { 
        transform: "translateX(0%)" 
      },
      leave: { 
        transform: "translateX(-100%)" 
      },
    },
    backward: {
      from: {
        top: 0,
        transform: "translateX(-100%)"
      },
      enter: { 
        transform: "translateX(0%)" 
      },
      leave: { 
        transform: "translateX(100%)" 
      }
    },
  },
  FADE_RIGHT_TO_LEFT: {
    forward: {
      from: {
        opacity: 0,
        top: 0,
        transform: "translateX(100%)"
      },
      enter: { 
        opacity: 1, 
        transform: "translateX(0%)" 
      },
      leave: { 
        opacity: 0, 
        transform: "translateX(-90%)" 
      },
    },
    backward: {
      from: {
        opacity: 0,
        top: 0,
        transform: "translateX(-100%)"
      },
      enter: { 
        opacity: 1, 
        transform: "translateX(0%)" 
      },
      leave: { 
        opacity: 0, 
        transform: "translateX(90%)" 
      },
    },
  },
  FADE: {
    forward: {
      from: {
        opacity: 0
      },
      enter: { 
        opacity: 1
      },
      leave: { 
        opacity: 0
      },
    },
    backward: {
      from: {
        opacity: 0
      },
      enter: { 
        opacity: 1
      },
      leave: { 
        opacity: 0
      },
    },
  }
};

export default transitionTypes;
