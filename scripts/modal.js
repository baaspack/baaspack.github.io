const modal = document.querySelector('#modal');
const modalOverlay = document.querySelector('#modal-overlay');
const caseStudyArticle = document.querySelector('article.case-study');

modalOverlay.addEventListener('click', () => {
  modal.classList.toggle('closed');
  modalOverlay.classList.toggle('closed');
});

caseStudyArticle.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG') {
    modal.querySelector('img').src = e.target.src;

    modal.classList.toggle('closed');
    modalOverlay.classList.toggle('closed');
  }
});
