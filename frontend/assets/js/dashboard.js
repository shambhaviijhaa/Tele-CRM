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
// Show the Leads section and hide Calls
function showLeads() {
    document.getElementById('myLeads').style.display = 'block';  // Show Leads
    document.getElementById('myCalls').style.display = 'none';   // Hide Calls
    document.querySelector('.tab.active').classList.remove('active');  // Remove active class from the current tab
    document.querySelector('.tab:nth-child(1)').classList.add('active');  // Add active class to the "Leads" tab
}

// Show the Calls section and hide Leads
function showCalls() {
    document.getElementById('myCalls').style.display = 'block';  // Show Calls
    document.getElementById('myLeads').style.display = 'none';   // Hide Leads
    document.querySelector('.tab.active').classList.remove('active');  // Remove active class from the current tab
    document.querySelector('.tab:nth-child(2)').classList.add('active');  // Add active class to the "Calls" tab
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

// Function to fetch and display all calls from the backend
async function fetchCalls() {
    try {
        const response = await fetch('http://localhost:5000/api/calls');  // API endpoint for fetching calls
        const calls = await response.json();
        const callList = document.getElementById('call-list');
        callList.innerHTML = '';

        // Populate the calls list dynamically
        calls.forEach(call => {
            const callDate = new Date(call.callDate).toLocaleString();
            callList.innerHTML += `
                <div class="call-item" onclick="showCallInfo('${call.leadId.name}', '${call.callOutcome}', '${call.leadId.phone}', '${callDate}', '${call.callDuration} minutes')">
                    <h4>${call.leadId.name}</h4>
                    <p>Status: ${call.callOutcome}</p>
                    <p>${callDate}</p>
                </div>
            `;
        });
    } catch (error) {
        console.error('Error fetching calls:', error);
    }
}

// Call info display function (already in your script)
function showCallInfo(name, status, phone, time, history) {
    document.getElementById('call-info').style.display = 'block';
    document.getElementById('lead-info').style.display = 'none';

    document.getElementById('call-name').textContent = name;
    document.getElementById('call-status').textContent = status;
    document.getElementById('call-phone').textContent = phone;
    document.getElementById('call-time').textContent = time;
    document.getElementById('call-history').textContent = history;
}

// Fetch calls on page load
document.addEventListener('DOMContentLoaded', function () {
    fetchCalls();
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
function toggleProfileSection() {
    const profileSection = document.getElementById("userProfileSection");
    if (profileSection.style.display === "none") {
        profileSection.style.display = "block"; // Show the section
    } else {
        profileSection.style.display = "none"; // Hide the section
    }
}
//  user profile end

// async function searchLeadsByName() {
//     const name = document.getElementById('filter-name').value;
//     try {
//         const response = await fetch(`http://localhost:5000/api/leads/by-name?name=${name}`);
//         const leads = await response.json();

//         // Clear existing search results
//         const searchResults = document.getElementById('search-results-list');
//         searchResults.innerHTML = '';

//         // Display results
//         if (leads.length === 0) {
//             searchResults.innerHTML = '<p>No leads found.</p>';
//         } else {
//             leads.forEach(lead => {
//                 searchResults.innerHTML += `
//                     <div class="lead-item">
//                         <h4>${lead.name}</h4>
//                         <p>Phone: ${lead.phone}</p>
//                         <p>Email: ${lead.email}</p>
//                         <p>Acquired: ${new Date(lead.acquired).toLocaleString()}</p>
//                     </div>
//                 `;
//             });
//         }
//     } catch (error) {
//         console.error('Error fetching leads:', error);
//     }
// }
// document.addEventListener('DOMContentLoaded', () => {
//     // Check if the user is logged in (i.e., token is available in localStorage)
//     const token = localStorage.getItem('token');
    
//     if (!token) {
//       // Redirect back to login if no token is found
//       alert('Please log in first');
//       window.location.href = 'login.html';
//     }
//   });
  
 //--------------------------------------------profile start-------------------------------------------------------------
 

 //--------------------------------------------profile end------------------------------------------------------------------

 //logout start
//  function handleLogout() {
//     // Show a confirmation dialog
//     const confirmed = confirm("Are you sure you want to log out?");
//     if (confirmed) {
//         // Perform logout logic (e.g., clear user session, redirect to login page)
//         window.location.href = "login.html"; // Redirect to login page
//     }
// }

 //logout end