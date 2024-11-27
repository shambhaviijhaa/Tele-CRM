const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// Handle the signup form submission
document.querySelector('.sign-up-form').addEventListener('submit', async function(e) {
  e.preventDefault();  // Prevent form from reloading the page

  // Capture form values
  const username = document.querySelector('.sign-up-form input[placeholder="Username"]').value;
  const name = document.querySelector('.sign-up-form input[placeholder="Name"]').value;
  const email = document.querySelector('.sign-up-form input[placeholder="Email"]').value;
  const role = document.querySelector('.sign-up-form input[placeholder="Role"]').value;
  const password = document.querySelector('.sign-up-form input[placeholder="Password"]').value;

  // Send a POST request to the signup API
  const response = await fetch('http://localhost:5000/api/users/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, name, email, role, password })
  });

  // Handle the response
  if (response.ok) {  // If the response status is 201 (created), the user is registered successfully
    alert('User registered successfully');
  } else {
    const result = await response.text();  // Extract the error message from the response
    alert('Error: ' + result);
  }
});

// Handle the login form submission
document.querySelector('.sign-in-form').addEventListener('submit', async function(e) {
  e.preventDefault();  // Prevent form from reloading the page

  // Capture form values
  const username = document.querySelector('.sign-in-form input[placeholder="Username"]').value;
  const password = document.querySelector('.sign-in-form input[placeholder="Password"]').value;

  // Send a POST request to the login API
  const response = await fetch('http://localhost:5000/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  });

  // Handle the response
  if (response.ok) {
    const result = await response.json();  // Parse the result to get the token
    alert('Login successful!');
    
    // Store the token in localStorage for future authenticated requests
    localStorage.setItem('token', result.token);

    // Redirect to the dashboard page after successful login
    window.location.href = '/dashboard.html';  // Correct redirection to dashboard.html
  } else {
    alert('Error: Invalid credentials');
  }
});
