<script>
  const seeMoreBtn = document.getElementById("seeMoreBtn");
  const seeLessBtn = document.getElementById("seeLessBtn");
  const hiddenProjects = document.querySelectorAll(".project-card.hidden");

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
  });
</script>
