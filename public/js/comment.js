const thanks = document.getElementById("commTitle");
const form = document.getElementById("form");

form.addEventListener("submit", async (e) => {
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(comment),
      });

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