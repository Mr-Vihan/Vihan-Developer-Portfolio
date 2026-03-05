// Projects Section
const seeMoreBtn = document.getElementById("seeMoreBtn");
const seeLessBtn = document.getElementById("seeLessBtn");
const hiddenProjects = document.querySelectorAll("#projectsGrid .project-card.hidden");

seeMoreBtn.addEventListener("click", () => {
  hiddenProjects.forEach(card => {
    card.style.display = "block";
  });
  seeMoreBtn.style.display = "none";
  seeLessBtn.style.display = "inline-block";
});

seeLessBtn.addEventListener("click", () => {
  hiddenProjects.forEach(card => {
    card.style.display = "none";
  });
  seeLessBtn.style.display = "none";
  seeMoreBtn.style.display = "inline-block";

  // Scroll back to Projects section
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
});

// Demo Projects Section
const demoSeeMoreBtn = document.getElementById("demoSeeMoreBtn");
const demoSeeLessBtn = document.getElementById("demoSeeLessBtn");
const hiddenDemoProjects = document.querySelectorAll("#demoProjectsGrid .project-card.extra.hidden");

demoSeeMoreBtn.addEventListener("click", () => {
  hiddenDemoProjects.forEach(card => {
    card.style.display = "block";
  });
  demoSeeMoreBtn.style.display = "none";
  demoSeeLessBtn.style.display = "inline-block";
});

demoSeeLessBtn.addEventListener("click", () => {
  hiddenDemoProjects.forEach(card => {
    card.style.display = "none";
  });
  demoSeeLessBtn.style.display = "none";
  demoSeeMoreBtn.style.display = "inline-block";

  // Scroll back to Demo Projects section
  document.getElementById("demo-projects").scrollIntoView({ behavior: "smooth" });
});
