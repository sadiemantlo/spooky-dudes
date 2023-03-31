const button = document.getElementById("start");
button.addEventListener("click", startStory);

document.querySelector('.btn-logout').addEventListener('click', async () => {
  try {
    await fetch('/api/users/logout', { method: 'POST' });
    document.location.replace('/login');
  } catch (error) {
    console.error(error);
    console.error('Failed to logout.');
  }
});

const startStory = async (event) =>{
  fetch("/api/scene/1")
    .then(response => response.json())
    .then(data => displayData(data))
    .catch(error => console.error(error));
}