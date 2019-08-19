const boxesAnimation = window.anime({
    targets: '.js-',
    translateY: [150, 50],
    backgroundColor: {
      value: (el, i, t) => {
        const r = 32 + (i * 12);
        const g = 75 + (i * 12);
        const b = 120;
        const color = `rgb(${r}, ${g}, ${b})`;
        return color;
      },
      easing: 'linear',
      duration: 100,
    },
    duration: 700,
    easing: 'easeOutElastic',
    elasticity: 600,
    delay: (el, i, t) => i * 20,
    loop: true,
    direction: 'alternate',
  });