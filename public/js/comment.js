const thanks = document.getElementById("commTitle");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent the form from submitting normally

  const userName = document.getElementById("name");
  const comment = document.getElementById("comment");

  const newComment = {
    name: userName.value,
    comment: comment.value,
  };
  // Set up the request options
  const postComment = (comment) =>
    fetch("/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    });

  // Send the POST request to the server
  postComment(newComment)
    .then((response) => {
      if (response.ok) {
        // Request successful, handle the response
        return response.json();
      } else {
        // Request failed, handle the error
        throw new Error("Request failed.");
      }
    })
    .then((data) => {
      // Do something with the response data
      console.log(data);
    })
    .catch((error) => {
      // Handle any errors
      console.error(error);
    });

  // Display a "thank you" message to the user
  form.classList.add("hide");
  thanks.classList.add("thank-you");
  thanks.innerText = "Thank You!";
});

const renderComments = async () => {
  try {
    const res = await fetch("/api/comments"); // fetch comments from API
    const comments = await res.json(); // parse response as JSON

    const commentsContainer = document.getElementById("comments-container");
    comments.forEach((comment) => {
      const commentHtml = `
              <div class="comment">
                <h3>${comment.title}</h3>
                <p>${comment.text}</p>
              </div>
            `;
      commentsContainer.insertAdjacentHTML("beforeend", commentHtml); // append comment HTML to comments container
    });
  } catch (error) {
    console.error(error);
  }
};
