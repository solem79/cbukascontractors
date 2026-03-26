function initCounters() {
  const counters = document.querySelectorAll(".count");
  if (!counters.length) return;

  counters.forEach(el => {
    let target = +el.dataset.target;
    let start = 0;
    let inc = target / 120;

    function run() {
      start += inc;
      if (start < target) {
        el.textContent = Math.floor(start) + "+";
        requestAnimationFrame(run);
      } else {
        el.textContent = target + "+";
      }
    }
    run();
  });
}
