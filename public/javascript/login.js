async function loginFormHandler(event) {
  event.preventDefault();

    if (email && password) {
      const response = await fetch('api/users', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
          console.log("posted succeful");
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  }

  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
  
  
