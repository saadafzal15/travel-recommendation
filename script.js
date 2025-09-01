// Contact form handling
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
      alert(`Thank you for contacting us!\nEmail: ${email}\nMessage: ${message}`);
      form.reset();
    });
  }
});
