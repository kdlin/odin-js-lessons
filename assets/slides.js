// Slide lightbox + interaction for CSC 365 lessons
(function() {
  const lb = document.createElement('div');
  lb.className = 'slide-lightbox';
  lb.innerHTML = '<img>';
  document.body.appendChild(lb);
  const lbImg = lb.querySelector('img');

  document.addEventListener('click', e => {
    const img = e.target.closest('.slide-embed img');
    if (img) {
      lbImg.src = img.src;
      lb.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
    if (e.target.closest('.slide-lightbox')) {
      lb.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && lb.classList.contains('active')) {
      lb.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
})();
