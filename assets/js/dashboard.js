// Function to show the selected section and hide others
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => {
        section.style.display = 'none'; // Hide each section
    });

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block'; // Show selected section

    // Remove active class from all links
    const links = document.querySelectorAll('.nav-list li a');
    links.forEach(link => {
        link.classList.remove('active'); // Remove active class
    });

    // Add active class to the clicked link
    const activeLink = document.querySelector(`.nav-list li a[href="#${sectionId}"]`);
    if (activeLink) {
        activeLink.classList.add('active'); // Add active class to the selected link
    }
}

// Show the activities section by default
showSection('activities'); // Display the Activities section by default

// Function to integrate Gmail
function integrateGmail() {
    alert('Integrating Gmail...');
}

// Function to integrate Google Drive
function integrateGoogleDrive() {
    alert('Integrating Google Drive...');
}

// Function to search leads
function searchLeads(query) {
    const leads = document.querySelectorAll('#lead-list li');
    leads.forEach(lead => {
        if (lead.textContent.toLowerCase().includes(query.toLowerCase())) {
            lead.style.display = 'block';
        } else {
            lead.style.display = 'none';
        }
    });
}
