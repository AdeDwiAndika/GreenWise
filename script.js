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

document.querySelectorAll(".accordion-header").forEach((button) => {
  button.addEventListener("click", function () {
    const content = this.nextElementSibling;
    const icon = this.querySelector(".accordion-icon");

    if (content.classList.contains("hidden")) {
      document
        .querySelectorAll(".accordion-content")
        .forEach((item) => item.classList.add("hidden"));
      document
        .querySelectorAll(".accordion-icon")
        .forEach((icon) => (icon.textContent = "+"));

      content.classList.remove("hidden");
      icon.textContent = "-";
    } else {
      content.classList.add("hidden");
      icon.textContent = "+";
    }
  });
});

const ctx = document.getElementById("weeklyStats").getContext("2d");
new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"],
    datasets: [
      {
        label: "Sampah Dikumpulkan (Kg)",
        data: [5, 7.5, 10, 9, 8, 12, 14],
        borderColor: "#3A9F1D",
        borderWidth: 5,
        fill: false,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
