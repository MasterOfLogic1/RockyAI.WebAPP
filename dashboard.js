document.addEventListener("DOMContentLoaded", function() {
    // 1) Highlight menu item
    let currentLocation = window.location.pathname.split("/").pop();
    let menuItems       = document.querySelectorAll(".menu-item");

    menuItems.forEach(item => {
        if (currentLocation === item.getAttribute("href")) {
            item.classList.add("active");
        }
    });

    // 2) File upload progress
    const fileInput   = document.querySelector(".file-input");
    const progressBar = document.querySelector(".file-progress-bar");
    if (fileInput && progressBar) {
      fileInput.addEventListener("change", function () {
        progressBar.style.width = "100%";
      });
    }

    // 3) Sidebar open/close
    const sidebar  = document.querySelector(".sidebar");
    const openBtn  = document.querySelector(".toggle-btn");
    const closeBtn = document.querySelector(".close-btn");
  
    // Open sidebar on hamburger click
    openBtn.addEventListener("click", function() {
      sidebar.classList.add("open");
    });
  
    // Close sidebar on close-btn click
    closeBtn.addEventListener("click", function() {
      sidebar.classList.remove("open");
    });
  
    // Close sidebar if user clicks outside of it
    document.addEventListener("click", function(event) {
      // if click is NOT inside the sidebar and NOT on the open button
      if (!sidebar.contains(event.target) && !openBtn.contains(event.target)) {
        sidebar.classList.remove("open");
      }
    });
});
