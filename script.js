<script>
  const seeMoreBtn = document.getElementById("seeMoreBtn");
  const hiddenProjects = document.querySelectorAll(".project-card.hidden");

  seeMoreBtn.addEventListener("click", () => {
    hiddenProjects.forEach(card => {
      card.classList.remove("hidden");
    });

    seeMoreBtn.style.display = "none";
  });

</script>
