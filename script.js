document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      alert("Form submitted! Thanks for reaching out.");
    });
  }
});
