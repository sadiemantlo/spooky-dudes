const response = await fetch('/api/scene/:id', {
  method: 'GET',
  body: JSON.stringify({ title, text }),
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
});