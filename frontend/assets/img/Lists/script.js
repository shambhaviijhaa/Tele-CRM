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
