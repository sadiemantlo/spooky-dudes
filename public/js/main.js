
document.querySelector('.btn-logout').addEventListener('click', async () => {
  try {
    await fetch('/api/users/logout', { method: 'POST' });
    document.location.replace('/login');
  } catch (error) {
    console.error(error);
    console.error('Failed to logout.');
  }
});

document.querySelector('#start').addEventListener('click', async () => {
  try {
    await fetch('/api/scene/1', { method: 'GET' });
    document.location.replace('/story/:id');
  } catch (error) {
    console.error(error);
    console.error('Failed to start story.');
  }
});