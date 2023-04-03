// Validate user input and send login request
const handleLoginSubmit = async (event) => {
  event.preventDefault();

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
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/select');
      } else {
        alert(response.statusText);
      }

    }
  };




document
  .querySelector('.login-form')
  .addEventListener('submit', handleLoginSubmit);
