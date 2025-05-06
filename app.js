const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });
const hiddenElements = document.querySelectorAll('.subdiv, .table');
hiddenElements.forEach((el) => observer.observe(el));
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");

  // Fade out loader
  loader.style.opacity = 0;

  setTimeout(() => {
    loader.style.display = "none";
    content.style.display = "block";
    // Trigger fade-in
    requestAnimationFrame(() => {
      content.classList.add("visible");
    });
  }, 700); // Match CSS transition duration
});
