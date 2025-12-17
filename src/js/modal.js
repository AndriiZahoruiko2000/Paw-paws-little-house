import { createModalTemplate } from './render-functions';
import { allAnimals } from './pets-list';

document.addEventListener('DOMContentLoaded', () => {
  const refs = {
    petList: document.querySelector('.js-pet-list'),
    backdrop: document.querySelector('.js-backdrop'),
    modalWindow: document.querySelector('.js-modal-window'),
  };

  if (!refs.petList || !refs.backdrop || !refs.modalWindow) return;

  /* ================= OPEN MODAL ================= */
  refs.petList.addEventListener('click', e => {
    const btn = e.target.closest('.js-more-info');
    if (!btn) return;

    const id = btn.dataset.id;
    const pet = allAnimals.find(p => String(p._id) === String(id));
    if (!pet) return;

    refs.modalWindow.innerHTML = createModalTemplate(pet);
    refs.backdrop.classList.add('is-open');

    lockScroll();
  });

  /* ================= CLOSE MODAL ================= */
  refs.backdrop.addEventListener('click', e => {
    if (
      e.target === refs.backdrop ||
      e.target.closest('.js-modal-close')
    ) {
      closeModal();
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && refs.backdrop.classList.contains('is-open')) {
      closeModal();
    }
  });

  function closeModal() {
    refs.backdrop.classList.remove('is-open');
    refs.modalWindow.innerHTML = '';
    unlockScroll();
  }

  /* ================= SCROLL LOCK ================= */
  function lockScroll() {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    // ⛔ блокуємо wheel / touch
    document.addEventListener('wheel', preventScroll, { passive: false });
    document.addEventListener('touchmove', preventScroll, { passive: false });
  }

  function unlockScroll() {
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';

    document.removeEventListener('wheel', preventScroll);
    document.removeEventListener('touchmove', preventScroll);
  }

  function preventScroll(e) {
    e.preventDefault();
  }
});
