// Function to show different sections on click and close open submenus
function showSection(sectionId, menuItem) {
    // Close any open submenus
    closeAllSubmenus();

    // Hide all other sections
    var sections = document.getElementsByClassName("content");
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
    }

    // Show the selected section
    document.getElementById(sectionId).style.display = "block";

    // Remove 'selected' class from all main menu items
    var menuItems = document.getElementsByClassName("icon-container");
    for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].classList.remove("selected");
    }

    // Add 'selected' class to the clicked main menu item
    if (menuItem) {
        menuItem.classList.add("selected");
    }
}

// Function to toggle the visibility of the "Add Lead" submenu and close others
function toggleSubsection(submenuId) {
    var submenu = document.getElementById(submenuId);

    // Close other open submenus
    closeAllSubmenus();

    // Toggle the selected submenu visibility
    submenu.style.display = submenu.style.display === "block" ? "none" : "block";
}

// Function to close all submenus
function closeAllSubmenus() {
    var submenus = document.getElementsByClassName("sub-menu");
    for (var i = 0; i < submenus.length; i++) {
        submenus[i].style.display = "none";
    }
}

// Function to show specific subsection content for "Add Lead" and highlight submenu
function showSubContent(contentId, submenuItem) {
    // Hide all add lead sub-content
    var subContents = document.getElementsByClassName("sub-content");
    for (var i = 0; i < subContents.length; i++) {
        subContents[i].style.display = "none";
    }

    // Show selected sub-content
    document.getElementById(contentId).style.display = "block";

    // Ensure that the "Add Lead" main section is visible
    showSection('add-lead');

    // Remove 'selected' class from all submenu items
    var submenuItems = submenuItem.parentElement.getElementsByTagName("li");
    for (var i = 0; i < submenuItems.length; i++) {
        submenuItems[i].classList.remove("selected");
    }

    // Add 'selected' class to the clicked submenu item
    if (submenuItem) {
        submenuItem.classList.add("selected");
    }
}

// Detect clicks outside the submenus and close them
document.addEventListener('click', function(event) {
    // Check if the click is outside any sub-menu or icon-container
    var isClickInsideSidebar = event.target.closest('.icon-container, .sub-menu');

    if (!isClickInsideSidebar) {
        // Close all submenus if the click was outside
        closeAllSubmenus();
    }
});


// Search functionality (example)
function searchLeads(query) {
    // Logic for searching leads based on the input query
    console.log("Searching leads with query: " + query);
}

// Filter by name
function filterByName(name) {
    console.log("Filtering by name: " + name);
}

// Filter by phone
function filterByPhone(phone) {
    console.log("Filtering by phone: " + phone);
}

// Filter by email
function filterByEmail(email) {
    console.log("Filtering by email: " + email);
}
