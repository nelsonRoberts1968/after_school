async function loginFormHandler(event){
  event.preventDefault();


  const password = document.querySelector('#password-login').value.trim();
  const email = document.querySelector('#email-login').value.trim();
  console.log(event);
  console.log(password,email);
    if (email && password) {
      const response = await fetch('api/users/login', {
        method: 'POST',
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
        alert("Failed to log in");
      }
    }
  }

  document.querySelector('.form-container').addEventListener('submit', loginFormHandler);
  
  
