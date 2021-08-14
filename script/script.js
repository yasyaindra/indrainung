particlesJS({
  particles: {
    number: {
      value: 162,
      density: {
        enable: true,
        value_area: 3201.34793597304,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 4,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 11.815675462780618,
      random: true,
      anim: {
        enable: false,
        speed: 10.1095197978096,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 0,
      color: "#ffffff",
      opacity: 0.6144151240645921,
      width: 7.719574635683337,
    },
    move: {
      enable: true,
      speed: 1.6849199663016001,
      direction: "bottom",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 537.9236148466919,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 217.7309869617563,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 85.38470076931618,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: false,
});
