document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  menuToggle.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
  });

  // Menutup menu saat mengklik di luar menu
  document.addEventListener("click", function (event) {
    if (
      !menuToggle.contains(event.target) &&
      !mobileMenu.contains(event.target)
    ) {
      mobileMenu.classList.add("hidden");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const menuDasboard = document.getElementById("menuDashboard");
  const mobileDashboard = document.getElementById("mobileDashboard");

  menuDasboard.addEventListener("click", function () {
    mobileDashboard.classList.toggle("hidden");
  });

  // Menutup menu saat mengklik di luar menu
  document.addEventListener("click", function (event) {
    if (
      !menuDasboard.contains(event.target) &&
      !mobileDashboard.contains(event.target)
    ) {
      mobileDashboard.classList.add("hidden");
    }
  });
});
