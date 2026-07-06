const PREINSCRIPTION_URL = "https://example.com/formulario-preinscripcion"; // Reemplazar por el enlace oficial

const grid = document.querySelector("#coursesGrid");
const filters = document.querySelector(".filters");
const preRegisterLink = document.querySelector("#preRegisterLink");
preRegisterLink.href = PREINSCRIPTION_URL;

function normalizeArea(area) {
  return (area || "Sin área").replace(/\s+/g, " ").trim();
}

function renderCourses(area = "Todas") {
  const selected = area === "Todas" ? window.COURSES : window.COURSES.filter(course => normalizeArea(course.area) === area);

  grid.innerHTML = selected.map(course => `
    <article class="card" id="${course.slug}">
      <div class="card__top">
        <div class="card__number">${String(course.id).padStart(2, "0")}</div>
        <div>
          <p class="card__area">${normalizeArea(course.area)}</p>
          <h3>${course.name}</h3>
        </div>
      </div>
      <div class="meta" aria-label="Características del curso">
        <span>${course.duration}</span>
        <span>${course.level}</span>
        <span>${course.modality}</span>
        <span>Certificado: ${course.certificate}</span>
      </div>
      <p class="card__desc">${course.description}</p>
      <details>
        <summary>Ver contenido</summary>
        <ul>
          ${course.content.map(item => `<li>${item}</li>`).join("")}
        </ul>
      </details>
    </article>
  `).join("");
}

function renderFilters() {
  const areas = ["Todas", ...new Set(window.COURSES.map(course => normalizeArea(course.area)))];
  filters.innerHTML = areas.map((area, index) => `
    <button class="filter ${index === 0 ? "is-active" : ""}" type="button" data-area="${area}">${area === "Todas" ? "Todas las áreas" : area}</button>
  `).join("");

  filters.addEventListener("click", event => {
    const button = event.target.closest("button[data-area]");
    if (!button) return;
    document.querySelectorAll(".filter").forEach(item => item.classList.remove("is-active"));
    button.classList.add("is-active");
    renderCourses(button.dataset.area);
  });
}

renderFilters();
renderCourses();
