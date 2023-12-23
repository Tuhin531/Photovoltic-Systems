// Get a reference to the projects links and create project buttons
const projectsLinks = document.getElementsByClassName('projects-link');

// Loop through each projects link
Array.from(projectsLinks).forEach((link) => {
  
  // Add event listener to the projects link
  link.addEventListener('click', () => {
    // Redirect to the projects page
    window.location.href = 'projects.html';
  });
  

  // Append the create project button to the parent element of the link
  
});




// Get a reference to the create project button and the form
const createProjectButton = document.getElementById('create-project-button');

const createProjectForm = document.getElementById('create-project-form');

// Add event listener to the create project button
createProjectButton.addEventListener('click', function(event) {
event.preventDefault(); // Prevent the default form submission behavior

// Retrieve the form data
const formData = new FormData(createProjectForm);
  
// Create an object to store the form data
const projectData = {};
  
// Iterate over the form fields and store their values in the projectData object
for (let [key, value] of formData.entries()) {
projectData[key] = value;
}

// Call a function to handle the form submission and pass the projectData object
handleFormSubmission(projectData);
});




function handleFormSubmission(projectData) {
  
// Perform any additional processing or validation of the form data if needed
  
// Make an AJAX request or use the fetch API to send the form data to the backend
   fetch('http://127.0.0.1:5000/api/create-project', {
    method: 'POST',
    headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify(projectData)
   })
   .then(response => response.json())
   .then(data => {
     // Handle the response from the backend
     // You can update the UI or display a success message to the user
     console.log('Project created:', data);
   })
   .catch(error => {
     // Handle any errors that occurred during the request
     console.error('Error creating project:', error);
   });
 }


const registerbutton = document.getElementById("register-button")
const rgisterForm = document.getElementById('registration-form');

// Add event listener to the create project button
registerbutton.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Retrieve the form data
  const formData = new FormData(rgisterForm);
  
  // Create an object to store the form data
  const registerData = {};
  
  // Iterate over the form fields and store their values in the projectData object
  for (let [key, value] of formData.entries()) {
    registerData[key] = value;
  }

  // Call a function to handle the form submission and pass the projectData object
 handleRegisterFormSubmission(registerData)
});


function handleRegisterFormSubmission(data) {
  // Perform any additional processing or validation of the form data if needed
  
  // Make an AJAX request or use the fetch API to send the form data to the backend
  fetch('http://127.0.0.1:5000/api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    // Handle the response from the backend
    // You can update the UI or display a success message to the user
    console.log('register created:', data);
  })
  .catch(error => {
    // Handle any errors that occurred during the request
    console.error('Error creating project:', error);
  });
}

const loginButton = document.querySelector("#login-form button");
const loginForm = document.getElementById("login-form");

// Add event listener to the login button
loginButton.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Retrieve the form data
  const formData = new FormData(loginForm);

  // Create an object to store the form data
  const loginData = {};

  // Iterate over the form fields and store their values in the loginData object
  for (let [key, value] of formData.entries()) {
    loginData[key] = value;
  }

  // Call a function to handle the form submission and pass the loginData object
  handleLoginFormSubmission(loginData);
});


function handleLoginFormSubmission(data) {
  // Perform any additional processing or validation of the form data if needed

  // Make an AJAX request or use the fetch API to send the form data to the backend
  fetch("http://127.0.0.1:5000/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {
      // Handle the response from the backend
      // You can update the UI or display a success message to the user
      console.log("Login successful:", data);
    })
    .catch(error => {
      // Handle any errors that occurred during the request
      console.error("Error during login:", error);
    });
}
