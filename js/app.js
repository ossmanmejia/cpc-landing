const coursesGrid = document.querySelector('#coursesGrid');
const courses = window.COURSES || [];
const icons = ['📣', '👥', '✍', '🎧', '🎚', '🎬', '🤝', '💡'];

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function createCourseCard(course, index) {
  const article = document.createElement('article');
  article.className = 'course-card';

  article.innerHTML = `
    <div class="course-card__header">
      <div class="course-card__icon" aria-hidden="true">${icons[index % icons.length]}</div>
      <span class="course-card__duration">${escapeHtml(course.duration)}</span>
    </div>
    <span class="course-card__index">${course.id}.</span>
    <h3>${escapeHtml(course.title)}</h3>
    <p>${escapeHtml(course.description)}</p>
    <div class="course-card__meta">
      <span>${escapeHtml(course.modality)}</span>
      <span>Nivel ${escapeHtml(course.level)}</span>
      <span>Certificado: ${escapeHtml(course.certificate)}</span>
    </div>
    <details class="course-card__details">
      <summary>Ver contenido</summary>
      <pre>${escapeHtml(course.content)}</pre>
    </details>
  `;

  return article;
}

function renderCourses() {
  coursesGrid.innerHTML = '';
  courses.slice(0, 8).forEach((course, index) => {
    coursesGrid.appendChild(createCourseCard(course, index));
  });
}

renderCourses();
