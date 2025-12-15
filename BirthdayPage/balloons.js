// balloons.js - spawn balloons that rise on page load
(function () {
  const BALLOON_COUNT = 10;
  const container = document.querySelector('.balloon-container');
  console.log('balloons.js loaded, container=', container);
  if (!container) return;

  function rand(min, max) {
    return Math.random() * (max - min) + min;
  }

  function createBalloon(i) {
    const el = document.createElement('div');
    el.className = 'balloon';

    // random color class
    const color = Math.ceil(rand(1, 5));
    el.classList.add(`color-${color}`);

    // random horizontal position (in percent)
    const left = rand(5, 95);
    el.style.left = `${left}%`;

    // random durations and delays
    const dur = rand(5, 10).toFixed(2) + 's';
    const delay = rand(0, 2).toFixed(2) + 's';
    const swayDur = rand(2.5, 4).toFixed(2) + 's';

    el.style.setProperty('--dur', dur);
    el.style.setProperty('--delay', delay);
    el.style.setProperty('--swayDur', swayDur);

    // add sway and stagger class
    el.classList.add('sway');

    // remove balloon after rise animation ends
    el.addEventListener('animationend', (ev) => {
      // when rise finishes (first animation)
      if (ev.animationName === 'rise') {
        el.remove();
      }
    });

    return el;
  }

  // spawn balloons with small interval to create pop effect
  // immediate one for quick visual feedback (helps debug)
  const first = createBalloon(0);
  container.appendChild(first);

  for (let i = 0; i < BALLOON_COUNT; i++) {
    setTimeout(() => {
      const b = createBalloon(i + 1);
      container.appendChild(b);
    }, i * 250 + Math.random() * 200);
  }
})();
