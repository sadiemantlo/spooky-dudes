// Validate user input and send login request
const handleLoginSubmit = async (event) => {
  event.preventDefault();
  try {
    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (!username || !password) {
      alert('You must provide a username and password.');
      return;
    }

    if (username && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        window.location.replace('/select');
      }

      // if (!response.ok) {
      //   alert('Failed to sign up.');
      //   return;
      // }

      // go to home page

      // } 
    }
  }catch (error) {
      console.log(error);
    }
}

document
  .querySelector('.login-form')
  .addEventListener('submit', handleLoginSubmit);
