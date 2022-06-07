// .add
// .remove
// .toggle
// .contains
// .classList
// .addEventListener
// .querySelector

// .sidebar - .show-sidebar

const toggleBtn = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");

// toggle open & close menu
toggleBtn.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});

// close sidebar with close btn
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
