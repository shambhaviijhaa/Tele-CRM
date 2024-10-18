// Function to show different sections on click and highlight selected item
function showSection(sectionId, menuItem) {
    var sections = document.getElementsByClassName("content");
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
    }
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

// Function to toggle the visibility of the "Add Lead" submenu
function toggleSubsection(submenuId) {
    var submenu = document.getElementById(submenuId);
    submenu.style.display = submenu.style.display === "block" ? "none" : "block";
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
    var submenuItems = document.getElementsByClassName("sub-menu")[0].getElementsByTagName("li");
    for (var i = 0; i < submenuItems.length; i++) {
        submenuItems[i].classList.remove("selected");
    }
    
    // Add 'selected' class to the clicked submenu item
    if (submenuItem) {
        submenuItem.classList.add("selected");
    }
}
// Placeholder Gmail and Google Drive integration functions
function integrateGmail() {
    alert("Gmail integration coming soon!");
}

function integrateGoogleDrive() {
    alert("Google Drive integration coming soon!");
}

// Placeholder search function
function searchLeads(value) {
    console.log("Searching leads for: " + value);
}
