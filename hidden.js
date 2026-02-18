// Theme toggle
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  themeBtn.setAttribute("aria-pressed", String(isDark));
});

// Simple interactive behavior: reveal secret message
const surpriseBtn = document.getElementById("surpriseBtn");
const secretMsg = document.getElementById("secretMsg");

surpriseBtn.addEventListener("click", function () {
  secretMsg.classList.toggle("hidden");

  const isHidden = secretMsg.classList.contains("hidden");
  secretMsg.setAttribute("aria-hidden", String(isHidden));
  surpriseBtn.textContent = isHidden ? "Show a secret message" : "Hide the secret message";
});