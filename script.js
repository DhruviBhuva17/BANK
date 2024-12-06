
// Function to validate login form  
function validateLoginForm() {  
  var username = document.getElementById("username").value;  
  var password = document.getElementById("password").value;  

  if (username === "" || password === "") {  
   alert("Please enter both username and password");  
   return false;  
  }  
  return true;  
}  

// Function to validate signup form  
function validateSignupForm() {  
  var fullname = document.getElementById("fullname").value;  
  var email = document.getElementById("email").value;  
  var phone = document.getElementById("phone").value;  
  var password = document.getElementById("password").value;  
  var confirmPassword = document.getElementById("confirmPassword").value;  

  if (fullname === "" || email === "" || phone === "" || password === "" || confirmPassword === "") {  
   alert("Please fill in all the fields");  
   return false;  
  }  

  if (password !== confirmPassword) {  
   alert("Passwords do not match");  
   return false;  
  }  
  return true;  
}  

// Function to handle login form submission  
function loginFormSubmit() {  
  if (validateLoginForm()) {  

   fetch('/login', {  
    method: 'POST',  
    headers: {  
      'Content-Type': 'application/json'  
    },  
    body: JSON.stringify({  
      username: document.getElementById("username").value,  
      password: document.getElementById("password").value  
    })  
   })  
   .then(response => response.json())  
   .then(data => {  
    if (data.success) {  

      window.location.href = 'dashboard.html';  
    } else {  
      alert('Invalid username or password');  
    }  
   })  
   .catch(error => console.error('Error:', error));  
  }  
}  


function signupFormSubmit() {  
  if (validateSignupForm()) {  

   fetch('/signup', {  
    method: 'POST',  
    headers: {  
      'Content-Type': 'application/json'  
    },  
    body: JSON.stringify({  
      fullname: document.getElementById("fullname").value,  
      email: document.getElementById("email").value,  
      phone: document.getElementById("phone").value,  
      password: document.getElementById("password").value  
    })  
   })  
   .then(response => response.json())  
   .then(data => {  
    if (data.success) {  

      window.location.href = 'login.html';  
    } else {  
      alert('Error creating account');  
    }  
   })  
   .catch(error => console.error('Error:', error));  
  }  
}  

// Add event listeners to the login and signup forms  
document.getElementById("loginForm").addEventListener("submit", loginFormSubmit);  
document.getElementById("signupForm").addEventListener("submit", signupFormSubmit);
