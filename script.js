// Theme toggle
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");
  themeBtn.setAttribute("aria-pressed", String(isDark));
});

// Show/Hide all driver lists
const toggleDriversBtn = document.getElementById("toggleDriversBtn");
let driversVisible = true;

toggleDriversBtn.addEventListener("click", function () {
  const driverLists = document.querySelectorAll(".drivers");
  driversVisible = !driversVisible;

  driverLists.forEach(function (list) {
    list.style.display = driversVisible ? "block" : "none";
  });

  toggleDriversBtn.textContent = driversVisible ? "Hide driver list" : "Show driver list";
});

// Filter teams by dropdown
const teamSelect = document.getElementById("teamSelect");

teamSelect.addEventListener("change", function () {
  const selected = teamSelect.value; // "all" or a team id
  const teams = document.querySelectorAll(".team");

  teams.forEach(function (team) {
    const teamName = team.getAttribute("data-team");
    if (selected === "all" || selected === teamName) {
      team.style.display = "block";
    } else {
      team.style.display = "none";
    }
  });
});

// Form submission message (static site demo)
const signupForm = document.getElementById("signupForm");
const formMessage = document.getElementById("formMessage");

signupForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  formMessage.textContent = `Thanks, ${name}! Your form has been submitted!`;

  signupForm.reset();
});