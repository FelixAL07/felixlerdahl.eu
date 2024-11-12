// Toggle between light and dark themes
const themeToggle = document.getElementById("theme-toggle");
const languageToggle = document.getElementById("language-toggle");

// Toggle Theme functionality
themeToggle.addEventListener("click", () => {
  // Toggle the data-theme attribute between 'light' and 'dark'
  document.body.setAttribute(
    "data-theme", 
    document.body.getAttribute("data-theme") === "dark" ? "light" : "dark"
  );
});

// Language Switch functionality
languageToggle.addEventListener("click", () => {
  const currentLanguage = document.documentElement.lang;

  if (currentLanguage === "en") {
    document.documentElement.lang = "no"; // Switch to Norwegian
    document.getElementById("greeting").textContent = "Velkommen til min profesjonelle nettside";
    document.getElementById("about-text").textContent = "Jeg er Felix, en lidenskapelig utvikler som fokuserer på å lage innovative og brukervennlige webapplikasjoner.";
    document.getElementById("projects").querySelector("h2").textContent = "Mine Prosjekter";
    languageToggle.textContent = "Switch to English";
  } else {
    document.documentElement.lang = "en"; // Switch to English
    document.getElementById("greeting").textContent = "Welcome to My Professional Website";
    document.getElementById("about-text").textContent = "I am Felix, a passionate developer focused on creating innovative and user-friendly web applications.";
    document.getElementById("projects").querySelector("h2").textContent = "My Projects";
    languageToggle.textContent = "Switch to Norwegian";
  }
});
