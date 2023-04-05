const response = await fetch('story/scene/:id', {
  method: 'GET',
  body: JSON.stringify({ title, text }),
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
});



// document
//   .querySelector('#start')
//   .addEventListener('#start', handleSignupSubmit);