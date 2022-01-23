const newEventForm = document.querySelector('#newEventForm');

async function newEventHandler(event) {
  event.preventDefault();
  const course_title = document.querySelector('#course_title').value.trim();
  const description = document.querySelector('#description').value.trim();
  const url = document.querySelector('#url').value.trim();
  const city = document.querySelector('#location').value.trim();
  const category = document.querySelector('#category').value.trim();
  const age = document.querySelector('#password-login').value.trim();

  if (course_title && description && url && city && category && age) {
    const response = await fetch('/api/courses', {
      method: 'post',
      body: JSON.stringify({
        course_title,
        description,
        url,
        city,
        category,
        age,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector('#newEventForm')
  .addEventListener('submit', newEventHandler);
