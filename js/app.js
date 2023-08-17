

const login_btn= document.querySelector('#log_btn');

login_btn.addEventListener('click', () =>{
  window.location.href='login.html';
})

// Retrieve users array from localStorage on page load
const users = JSON.parse(localStorage.getItem('users')) || [];

const form = document.querySelector('#form_page');

function registration() {
  const name_input = document.querySelector('#name');
  const email_input = document.querySelector('#email');
  const password_input = document.querySelector('#password');

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const user_name = name_input.value;
    const user_email = email_input.value;
    const user_password = password_input.value;

    // Checking the email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user_email)) {
      document.getElementById('registrationMessage').innerText = 'Invalid email format!';
      return;
    }

    // Checking if the email is already registered!
    const isUserExist = users.some((user) => user.user_email === user_email);
    if (isUserExist) {
      document.getElementById('registrationMessage').innerText = 'This email is already registered!';
      return;
    }

    users.push({ user_name, user_email, user_password });
    document.getElementById('registrationMessage').innerHTML = 'Registration Successful';
    console.log(users);

    // Save updated users array to localStorage
    localStorage.setItem('users', JSON.stringify(users));

    name_input.value = '';
    email_input.value = '';
    password_input.value = '';

    
    window.location.href = `welcome.html?name=${encodeURIComponent(user_name)}`;
  });
}

registration();
