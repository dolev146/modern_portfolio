const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", async (e) => {
  await e.preventDefault();
  try {
    const FD = await new FormData(contactForm);
    const stringified = await JSON.stringify(Object.fromEntries(FD));
    let res = await fetch("http://localhost:1000/api/contact/email", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: stringified,
    });
    let data = await res.json();
    console.log(data);
    contactForm.reset(); 
  } catch (error) {
    console.log(error);
  }
});
