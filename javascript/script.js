import { CASE_STUDIES } from './modules/case-studies.js';

document.addEventListener('DOMContentLoaded', () => {
  // Show case study
  const caseStudyItemTemplate = Handlebars.compile(document.getElementById('case-study-item-template').innerHTML);
  const slideshow = document.getElementById('case-study-slideshow');
  const caseStudyBtns = document.querySelectorAll('.case-study-overview a');

  caseStudyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentCaseStudy = CASE_STUDIES[btn.dataset.project];

      slideshow.innerHTML = caseStudyItemTemplate(currentCaseStudy);
      slideshow.scrollLeft = 0;

      toggleSlideshowModal();
    });
  });

  // Hide case study
  const closeModalBtn = document.getElementById('close-modal-btn');
  const overlay = document.getElementById('overlay');
  
  [overlay, closeModalBtn].forEach(el => {
    el.addEventListener('click', toggleSlideshowModal);
  });

  // Toggle slideshow modal and background blur
  const main = document.querySelector('main');
  const slideShowModal = document.getElementById('slideshow-modal');
  
  function toggleSlideshowModal() {
    const showSlideshow = main.style.filter !== 'blur(2px)';

    toggleBackgroundBlur(showSlideshow);
    toggleSlideshowDisplay(showSlideshow);
  }

  function toggleBackgroundBlur(showSlideshow) {
    main.style.filter = showSlideshow ? 'blur(2px)' : 'none';
    overlay.style.display = showSlideshow ? 'block' : 'none';
  };

  function toggleSlideshowDisplay(showSlideshow) {
    slideShowModal.style.visibility = showSlideshow ? 'visible' : 'hidden';
    slideShowModal.style.opacity = showSlideshow ? 1 : 0;
  };
});
