document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav-links a");

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      // Remove the active class from all links
      links.forEach((link) => link.classList.remove("active"));

      // Add the active class to the clicked link
      event.target.classList.add("active");
    });
  });
});
