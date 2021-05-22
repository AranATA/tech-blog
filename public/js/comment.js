const commentFormHandler = async function(event) {
  event.preventDefault();

  const postId = document.querySelector('input[name="post-id"]').value;
  const commentContent = document.querySelector('textarea[name="comment-body"]').value;

  if (body) {
    await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({
        postId,
        commentContent
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    document.location.reload();
  }
};

document
  .querySelector('#new-comment-form')
  .addEventListener('submit', commentFormHandler);
