// login.js

// Retrieve users array from localStorage on page load
const users = JSON.parse(localStorage.getItem('users')) || [];

const form = document.querySelector('#form_page');

function login() {
  const name_input = document.querySelector('#name1');
  const email_input = document.querySelector('#email1');
  const password_input = document.querySelector('#password1');

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const user_name = name_input.value;
    const user_email = email_input.value;
    const user_password = password_input.value;

    // Check if the user exists in the users array and the provided password is correct
    const loggedInUser = users.find(
      (user) => user.user_email === user_email && user.user_password === user_password
    );

    if (loggedInUser) {
      // User credentials are correct, proceed to welcome page
    //   document.getElementById('registrationMessage').innerText = 'Login Successful';
      console.log('Logged in:', loggedInUser);

      // Save the user's name to localStorage (optional)
      localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));

      // Redirect to welcome page with the user's name in the query string
      window.location.href = `welcome.html?name=${encodeURIComponent(user_name)}`;
    } else {
      // User not found or incorrect credentials
    //   document.getElementById('registrationMessage').innerText = 'Invalid email or password!';
    console.log('Invalid!');
    }

    // Clear the input fields after form submission
    name_input.value = '';
    email_input.value = '';
    password_input.value = '';
  });
}

login();
