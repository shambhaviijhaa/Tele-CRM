// Function to show different sections on click
function showSection(sectionId) {
    var sections = document.getElementsByClassName("content");
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
    }
    document.getElementById(sectionId).style.display = "block";
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
