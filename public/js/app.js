// Get references to the toggle buttons and elements
const themeToggle = document.getElementById("theme-toggle");
const languageToggle = document.getElementById("language-toggle");
const moonIcon = document.getElementById("moon-icon");
const sunIcon = document.getElementById("sun-icon");

// Set initial language preference if not already set
if (!document.documentElement.lang) {
  document.documentElement.lang = "en"; // Default language
}

// Load theme from localStorage if it's set
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.body.setAttribute("data-theme", savedTheme);
} else {
  // Fallback to light mode if no theme is set in localStorage
  document.body.setAttribute("data-theme", "light");
}

// Function to toggle theme and update localStorage
themeToggle.addEventListener("click", () => {
  const currentTheme = document.body.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  // Toggle the theme on the body
  document.body.setAttribute("data-theme", newTheme);

  // Save the theme preference in localStorage
  localStorage.setItem("theme", newTheme);

  // Smoothly toggle the visibility of the icons
  if (newTheme === "dark") {
    sunIcon.style.display = "none";  // Hide sun icon
    moonIcon.style.display = "inline"; // Show moon icon
  } else {
    moonIcon.style.display = "none";  // Hide moon icon
    sunIcon.style.display = "inline"; // Show sun icon
  }

  // Add smooth icon transition effect by adding/removing the 'move-icon' class
  sunIcon.classList.remove("move-icon");
  moonIcon.classList.remove("move-icon");
  
  // Add move effect to the current active icon (moon or sun)
  if (newTheme === "dark") {
    moonIcon.classList.add("move-icon-sun");
  } else {
    sunIcon.classList.add("move-icon-moon");
  }
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
