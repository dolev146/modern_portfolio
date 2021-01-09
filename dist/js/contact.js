const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const FD = new FormData(contactForm);
  // Display the values
  for (var value of FD.values()) {
    console.log(value);
  }
});
