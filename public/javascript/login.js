async function loginFormHandler(event) {
  event.preventDefault();
  const password = document.querySelector('#password-login').value.trim();
  const email = document.querySelector('#email-login').value.trim();
 console.log(event);
    if (email && password) {
      const response = await fetch('api/users/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
      console.log(response);
      if (response.ok) {
          console.log("posted succeful");
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  }

  document.querySelector('.form-container').addEventListener('submit', loginFormHandler);
  
  
