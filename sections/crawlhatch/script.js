document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-tabs a");

  // Hide all sections initially
  sections.forEach(section => section.style.display = "none");

  // Show a section when its nav link is clicked
  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);

      sections.forEach(section => {
        const isSocial = section.id === "Social Media";
        const isSubscribe = section.id === "subscribe";

        // Show both Social Media and Subscribe together
        if ((targetId === "subscribe") && (isSubscribe || isSocial)) {
          section.style.display = "block";
        } else if (section.id === targetId) {
          section.style.display = "block";
        } else if (!(targetId === "subscribe" && (isSubscribe || isSocial))) {
          section.style.display = "none";
        }
      });
    });
  });
});
