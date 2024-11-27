// Function to show different sections on click
function showSection(sectionId) {
    // Hide all sections
    const sections = document.getElementsByClassName('content');
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none'; // Hide all sections
    }

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
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
function showSubContent(sectionId, contentId, submenuItem) {
    // Hide all other sections
    var sections = document.getElementsByClassName("content");
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
    }
    // Hide all add lead sub-content
    var subContents = document.getElementsByClassName("sub-content");
    for (var i = 0; i < subContents.length; i++) {
        subContents[i].style.display = "none";
    }
    
    // Show selected section
    document.getElementById(sectionId).style.display = "block";
    // Show selected sub-content
    document.getElementById(contentId).style.display = "block";
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



document.querySelector('.settings-button').addEventListener('click', function() {
    // Add your settings functionality here
    console.log('Settings clicked!');
});

//add list start
const customCreateListBtn = document.getElementById('custom-create-list-btn');
const customCreateListModal = document.getElementById('custom-create-list-modal');
const customCloseBtn = document.querySelector('.custom-close');
const customListNameInput = document.getElementById('custom-list-name');
const customListColorInput = document.getElementById('custom-list-color');
const customProceedBtn = document.getElementById('custom-proceed-btn');
const customListContainer = document.getElementById('custom-list-container');

// Open modal to create a new list
customCreateListBtn.addEventListener('click', () => {
    customCreateListModal.style.display = 'block';
});

// Close modal
customCloseBtn.addEventListener('click', () => {
    customCreateListModal.style.display = 'none';
});

// Function to create a new list
function createCustomList(name, color) {
    // Create the list item
    const customListElement = document.createElement('li');
    customListElement.style.backgroundColor = color;

    // Create the text for the list name
    const customListText = document.createElement('span');
    customListText.textContent = name;
    
    // Create a container for the buttons
    const customButtonContainer = document.createElement('div');
    customButtonContainer.classList.add('custom-list-buttons');

    // Create the "Edit" button
    const customEditButton = document.createElement('button');
    customEditButton.textContent = 'Edit';
    customEditButton.classList.add('custom-edit');
    customEditButton.addEventListener('click', () => {
        const newName = prompt('Enter new name:', name);
        if (newName) {
            customListText.textContent = newName;
        }
    });

    // Create the "Delete" button
    const customDeleteButton = document.createElement('button');
    customDeleteButton.textContent = 'Delete';
    customDeleteButton.classList.add('custom-delete');
    customDeleteButton.addEventListener('click', () => {
        customListElement.remove();
    });

    // Append buttons to the button container
    customButtonContainer.appendChild(customEditButton);
    customButtonContainer.appendChild(customDeleteButton);

    // Append the text and button container to the list item
    customListElement.appendChild(customListText);
    customListElement.appendChild(customButtonContainer);

    // Append the new list item to the list container
    customListContainer.appendChild(customListElement);
}

     // Event listener for the "Proceed" button
customProceedBtn.addEventListener('click', () => {
    const listName = customListNameInput.value;
    const listColor = customListColorInput.value;

    if (listName) {
        createCustomList(listName, listColor);

        // Clear the input fields
        customListNameInput.value = '';
        customListColorInput.value = '#ffffff'; // Reset color to default
        
        // Hide the modal after the list is created
        customCreateListModal.style.display = 'none';
    }
});

//add list end

//splash screen start
document.addEventListener("DOMContentLoaded", () => {
    // Simulating loading time (You can replace this with actual project initialization logic)
    setTimeout(() => {
        // Hide splash screen and show main content after animation completes
        const splashScreen = document.getElementById('splash-screen');
        const mainContent = document.getElementById('main-content');

        splashScreen.addEventListener('animationend', () => {
            splashScreen.style.display = 'none'; // Hide splash screen after fade-out
            mainContent.style.opacity = '1'; // Fade in main content
        });

    }, 3000); // Example 3 seconds delay (replace with actual timing)
});
//splash screen end

//activities start
// Show the Leads section
function showLeads() {
    document.getElementById('lead-list').style.display = 'block';
    document.getElementById('call-list').style.display = 'none';
    document.getElementById('lead-info').style.display = 'none';
    document.getElementById('call-info').style.display = 'none';
}

// Show the Calls section
function showCalls() {
    document.getElementById('lead-list').style.display = 'none';
    document.getElementById('call-list').style.display = 'block';
    document.getElementById('lead-info').style.display = 'none';
    document.getElementById('call-info').style.display = 'none';
}

// Display lead info when a lead is clicked
function showLeadInfo(name, status, phone, acquired, history) {
    document.getElementById('lead-info').style.display = 'block';
    document.getElementById('call-info').style.display = 'none';

    document.getElementById('lead-name').textContent = name;
    document.getElementById('lead-status').textContent = status;
    document.getElementById('lead-phone').textContent = phone;
    document.getElementById('lead-acquired').textContent = acquired;
    document.getElementById('lead-history').textContent = history;
}

// Display call info when a call is clicked
function showCallInfo(name, status, phone, time, history) {
    document.getElementById('call-info').style.display = 'block';
    document.getElementById('lead-info').style.display = 'none';

    document.getElementById('call-name').textContent = name;
    document.getElementById('call-status').textContent = status;
    document.getElementById('call-phone').textContent = phone;
    document.getElementById('call-time').textContent = time;
    document.getElementById('call-history').textContent = history;
}

// Function to fetch and display all leads from the backend
async function fetchLeads() {
    try {
        const response = await fetch('http://localhost:5000/api/leads');  // API endpoint for fetching leads
        const leads = await response.json();
        const leadList = document.getElementById('lead-list');
        leadList.innerHTML = '';

        // Populate the leads list dynamically
        leads.forEach(lead => {
            leadList.innerHTML += `
                <div class="lead-item" onclick="showLeadInfo('${lead.name}', 'Fresh', '${lead.phone}', 'Acquired: ${new Date(lead.acquired).toLocaleString()}')">
                    <h4>${lead.name}</h4>
                    <p>Phone: ${lead.phone}</p>
                    <p>Acquired: ${new Date(lead.acquired).toLocaleString()}</p>
                </div>
            `;
        });
    } catch (error) {
        console.error('Error fetching leads:', error);
    }
}

// Display lead info when a lead is clicked
function showLeadInfo(name, status, phone, acquired, history) {
    document.getElementById('lead-info').style.display = 'block';
    document.getElementById('call-info').style.display = 'none';

    document.getElementById('lead-name').textContent = name;
    document.getElementById('lead-status').textContent = status;
    document.getElementById('lead-phone').textContent = phone;
    document.getElementById('lead-acquired').textContent = acquired;
    document.getElementById('lead-history').textContent = history;
}

// Submit new lead to the backend
document.getElementById('add-lead-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Collect form data
    const leadData = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        alternatePhone: document.getElementById('alternatePhone').value,
        acquired: document.getElementById('acquired').value,
    };

    // Send POST request to add the lead
    fetch('http://localhost:5000/api/leads', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(leadData),
    })
        .then(response => response.json())
        .then(data => {
            alert('Lead added successfully!');
            document.getElementById('add-lead-form').reset();  // Reset form after submission
            fetchLeads();  // Refresh leads list
        })
        .catch(error => {
            console.error('Error adding lead:', error);
            alert('Failed to add lead');
        });
});

// On page load, fetch and display all leads
document.addEventListener('DOMContentLoaded', function () {
    fetchLeads();
});

// Function to handle Excel file upload and send data to the backend
function uploadAndDisplay() {
    const fileInput = document.getElementById('excelFileInput');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function(event) {
            const data = new Uint8Array(event.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const sheetName = workbook.SheetNames[0];  // Assuming we're working with the first sheet
            const worksheet = workbook.Sheets[sheetName];

            const json = XLSX.utils.sheet_to_json(worksheet); // Parse to JSON

            // Display the parsed data on the frontend (optional)
            displayData(json);

            // Send the parsed data to the backend for storing in Leads collection
            sendExcelDataToBackend(json);
        };

        reader.readAsArrayBuffer(file);
    }
}

// Display Excel data on the frontend (optional)
function displayData(data) {
    const dataDisplay = document.getElementById('excelDataDisplay');

    // Create table structure dynamically based on keys in the first object
    if (data.length === 0) {
        dataDisplay.innerHTML = '<p>No data available.</p>';
        return;
    }

    const headers = Object.keys(data[0]);
    let table = '<table class="excel-upload-table"><thead><tr>';

    // Create table headers
    headers.forEach(header => {
        table += `<th class="excel-upload-th">${header}</th>`;
    });
    table += '</tr></thead><tbody>';

    // Populate table rows with data
    data.forEach(item => {
        table += '<tr class="excel-upload-tr">';
        headers.forEach(header => {
            table += `<td class="excel-upload-td">${item[header] || ''}</td>`;
        });
        table += '</tr>';
    });

    table += '</tbody></table>';
    dataDisplay.innerHTML = table;
}
// Function to send Excel data to the backend
function sendExcelDataToBackend(excelData) {
    fetch('http://localhost:5000/api/leads/excel-upload', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(excelData),  // Send the parsed Excel data as JSON
    })
    .then(response => response.json())
    .then(data => {
        alert('Excel data uploaded and stored successfully!');
    })
    .catch(error => {
        console.error('Error uploading Excel data:', error);
    });
}
//  user profile start
// Show/Hide the profile dropdown when clicking the user name
document.querySelector('.user-name').addEventListener('click', () => {
    const dropdown = document.getElementById('profileUserDropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

// Close dropdown if clicked outside
window.addEventListener('click', (event) => {
    const dropdown = document.getElementById('profileUserDropdown');
    const userProfileSection = document.querySelector('.user-profile-section');
    if (!userProfileSection.contains(event.target)) {
        dropdown.style.display = 'none';
    }
});
// Toggle dropdown visibility
document.querySelector('.profile-user-name').addEventListener('click', () => {
    const dropdown = document.getElementById('profileUserDropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

//  user profile end

async function searchLeadsByName() {
    const name = document.getElementById('filter-name').value;
    try {
        const response = await fetch(`http://localhost:5000/api/leads/by-name?name=${name}`);
        const leads = await response.json();

        // Clear existing search results
        const searchResults = document.getElementById('search-results-list');
        searchResults.innerHTML = '';

        // Display results
        if (leads.length === 0) {
            searchResults.innerHTML = '<p>No leads found.</p>';
        } else {
            leads.forEach(lead => {
                searchResults.innerHTML += `
                    <div class="lead-item">
                        <h4>${lead.name}</h4>
                        <p>Phone: ${lead.phone}</p>
                        <p>Email: ${lead.email}</p>
                        <p>Acquired: ${new Date(lead.acquired).toLocaleString()}</p>
                    </div>
                `;
            });
        }
    } catch (error) {
        console.error('Error fetching leads:', error);
    }
}

// calls report start
// const callsData = [
//     { agent: "Alice Johnson", totalCalls: 120, duration: 350 },
//     { agent: "Bob Smith", totalCalls: 98, duration: 290 },
//     { agent: "Charlie Brown", totalCalls: 135, duration: 400 },
//     { agent: "Diana Prince", totalCalls: 110, duration: 320 },
//   ];
  
//   // Function to calculate summary stats
//   function calculateSummary(data) {
//     const totalCalls = data.reduce((sum, record) => sum + record.totalCalls, 0);
//     const totalDuration = data.reduce((sum, record) => sum + record.duration, 0);
//     const avgDuration = (totalDuration / data.length).toFixed(2);
  
//     const topPerformer = data.reduce((top, record) => 
//       record.totalCalls > top.totalCalls ? record : top, { agent: "N/A", totalCalls: 0 }
//     );
  
//     return {
//       totalCalls,
//       avgDuration,
//       topPerformer: topPerformer.agent,
//     };
//   }
  
//   // Function to load data into the table
//   function loadCallsData() {
//     const tbody = document.getElementById("calls-data");
//     callsData.forEach((record) => {
//       const row = document.createElement("tr");
//       row.innerHTML = `
//         <td>${record.agent}</td>
//         <td>${record.totalCalls}</td>
//         <td>${record.duration}</td>
//       `;
//       tbody.appendChild(row);
//     });
//   }
  
//   // Function to display summary stats
//   function displaySummary() {
//     const { totalCalls, avgDuration, topPerformer } = calculateSummary(callsData);
  
//     document.getElementById("total-calls").textContent = totalCalls;
//     document.getElementById("avg-duration").textContent = avgDuration;
//     document.getElementById("top-performer").textContent = topPerformer;
//   }
  
//   // Initialize the report
//   window.onload = function () {
//     loadCallsData();
//     displaySummary();
//   };
  
// calls report end
// report leaderboard start
// report leaderboard end

// dashboard.js (linked in your dashboard.html)
document.addEventListener('DOMContentLoaded', () => {
    // Check if the user is logged in (i.e., token is available in localStorage)
    const token = localStorage.getItem('token');
    
    if (!token) {
      // Redirect back to login if no token is found
      alert('Please log in first');
      window.location.href = 'login.html';
    }
  });
  