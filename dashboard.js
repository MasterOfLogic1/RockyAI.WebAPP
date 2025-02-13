document.addEventListener("DOMContentLoaded", function() {
    // Get the current page URL
    let currentLocation = window.location.pathname.split("/").pop();

    // Get all sidebar menu items
    let menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach(item => {
        let itemHref = item.getAttribute("href");

        // Check if the menu item matches the current page
        if (currentLocation === itemHref) {
            item.classList.add("active");
        }
    });

    // Toggle Sidebar Collapse
    document.querySelector(".toggle-btn").addEventListener("click", function() {
        document.querySelector(".sidebar").classList.toggle("collapsed");
    });
});
