$(document).ready(function(){
    var owl = $('.carousel-content-func-container');
    owl.owlCarousel({
      items: 4,
      margin: 10,
      nav: true,
      navText: ['<i class="icon-chevron-left"></i>', '<i class="icon-chevron-right"></i>'],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        },
        1200: {
          items: 4
        }
      }
    });
  });

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
    const activeLink = document.querySelector(.nav-list li a[href="#${col}"]);
    if (activeLink) {
        activeLink.classList.add('active'); // Add active class to the selected link
    }
}

// Show the activities section by default
showSection('activities'); // Display the Activities section by default