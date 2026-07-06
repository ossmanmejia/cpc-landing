const coursesGrid = document.querySelector('#coursesGrid');
const courses = window.COURSES || [];
const modal = document.querySelector('#courseModal');
const modalPanel = modal?.querySelector('.modal__panel');
const modalTitle = document.querySelector('#modalTitle');
const modalArea = document.querySelector('#modalArea');
const modalMeta = document.querySelector('#modalMeta');
const modalDescription = document.querySelector('#modalDescription');
const modalContent = document.querySelector('#modalContent');
let lastFocusedElement = null;

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function createCourseCard(course) {
  const article = document.createElement('article');
  article.className = 'course-card';

  article.innerHTML = `
    <div class="course-card__top">
      <span class="course-card__index">${course.id}.</span>
      <span class="course-card__duration">${escapeHtml(course.duration)}</span>
    </div>
    <h3>${escapeHtml(course.title)}</h3>
    <p class="course-card__area">${escapeHtml(course.area)}</p>
    <div class="course-card__meta">
      <span>Nivel ${escapeHtml(course.level)}</span>
    </div>
    <button class="course-card__button" type="button" data-course-id="${course.id}">
      Ver información completa
    </button>
  `;

  return article;
}

function renderCourses() {
  coursesGrid.innerHTML = '';
  courses.slice(0, 8).forEach((course) => {
    coursesGrid.appendChild(createCourseCard(course));
  });
}

function openModal(course) {
  lastFocusedElement = document.activeElement;
  modalTitle.textContent = course.title;
  modalArea.textContent = course.area || 'Curso virtual';
  modalMeta.innerHTML = `
    <span>Duración: ${escapeHtml(course.duration)}</span>
    <span>Nivel ${escapeHtml(course.level)}</span>
  `;
  modalDescription.textContent = course.description || 'Descripción no disponible.';
  modalContent.textContent = course.content || 'Contenido no disponible.';
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  modalPanel.focus();
}

function closeModal() {
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  if (lastFocusedElement) lastFocusedElement.focus();
}

coursesGrid.addEventListener('click', (event) => {
  const button = event.target.closest('[data-course-id]');
  if (!button) return;
  const course = courses.find((item) => String(item.id) === String(button.dataset.courseId));
  if (course) openModal(course);
});

modal.addEventListener('click', (event) => {
  if (event.target.closest('[data-close-modal]')) closeModal();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
});

renderCourses();
