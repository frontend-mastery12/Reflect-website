// Clean, vanilla JavaScript for video autoplay and demo modal
document.addEventListener('DOMContentLoaded', () => {
  // Ensure all background loop videos play smoothly
  const backgroundVideos = document.querySelectorAll(
    '.hero-video, .radar-video, .cipher-video, .globe-video'
  );
  backgroundVideos.forEach((vid) => {
    vid.muted = true;
    vid.play().catch((err) => {
      console.warn('Video autoplay notice:', err);
    });
  });

  // Modal demo video interaction
  const playBtn = document.getElementById('playBtn');
  const videoModal = document.getElementById('videoModal');
  const modalClose = document.getElementById('modalClose');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalVideo = document.getElementById('modalVideo');

  if (playBtn && videoModal) {
    playBtn.addEventListener('click', () => {
      videoModal.classList.add('active');
      videoModal.setAttribute('aria-hidden', 'false');
      if (modalVideo) {
        modalVideo.currentTime = 0;
        modalVideo.play().catch(() => {});
      }
    });
  }

  const closeModal = () => {
    if (!videoModal) return;
    videoModal.classList.remove('active');
    videoModal.setAttribute('aria-hidden', 'true');
    if (modalVideo) {
      modalVideo.pause();
    }
  };

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoModal && videoModal.classList.contains('active')) {
      closeModal();
    }
  });
});
