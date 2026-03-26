function initGallery() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const filterItems = document.querySelectorAll('.filter-item');
  const lightboxLinks = document.querySelectorAll('.lightbox');

  if (!filterBtns.length || !lightboxLinks.length) return;

  let currentIndex = 0;
  let galleryImages = [];

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      filterItems.forEach(item => {
        item.style.display =
          filter === 'all' || item.classList.contains(filter) ? 'block' : 'none';
      });
    });
  });

  const lightboxOverlay = document.createElement('div');
  lightboxOverlay.className = 'lightbox-overlay';
  lightboxOverlay.innerHTML = `
    <span class="close-lightbox">&times;</span>
    <span class="nav-arrow prev">&#10094;</span>
    <img src="" />
    <span class="nav-arrow next">&#10095;</span>
  `;
  document.body.appendChild(lightboxOverlay);

  const img = lightboxOverlay.querySelector('img');
  const close = lightboxOverlay.querySelector('.close-lightbox');
  const prev = lightboxOverlay.querySelector('.prev');
  const next = lightboxOverlay.querySelector('.next');

  function show() {
    img.src = galleryImages[currentIndex].href;
  }

  lightboxLinks.forEach((link, i) => {
    galleryImages.push(link);
    link.addEventListener('click', e => {
      e.preventDefault();
      currentIndex = i;
      show();
      lightboxOverlay.style.display = 'flex';
    });
  });

  close.onclick = () => (lightboxOverlay.style.display = 'none');
  prev.onclick = () => {
    currentIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
    show();
  };
  next.onclick = () => {
    currentIndex = currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1;
    show();
  };
}
