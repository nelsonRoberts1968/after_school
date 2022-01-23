async function signupFormHandler (event) {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    /*form validation logic to be implementated later*/
    // const checkUsername = () => {
    //   let valid = false;
    //   const min=3, max=25;
    //   const usernameValid = username.value.trim();

    //   if(!isRequired(usernameValid)){
    //     showError(username, 'Username cannot be empty.');
    //   }else if (!isBetween(username.length,min, max)){
    //     showError(username,`username must be between ${min} and ${max}`);
    //   }else{
    //     showSuccess(username);
    //     valid = true;
    //   }
    //   return valid;
    //   };
    
    // const checkEmail = () => {
    //   let valid = false;
    //   const emailValid = email.value.trim();
    //   if (!isRequired(emailValid)) {
    //       showError(email, 'Email cannot be blank.');
    //   } else if (!isEmailValid(email)) {
    //       showError(email, 'Email is not valid.')
    //   } else {
    //       showSuccess(email);
    //       valid = true;
    //   }
    //   return valid;
    // };

    // const checkPassword = () => {
    //   let valid = false;

    //   const passwordValid = password.value.trim();
  
    //   if (!isRequired(passwordValid)) {
    //       showError(password, 'Password cannot be blank.');
    //   } else if (!isPasswordSecure(password)) {
    //       showError(password, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
    //   } else {
    //       showSuccess(password);
    //       valid = true;
    //   }
    //   return valid;
    // };

    if (username && email && password) {
      console.log('Login post is getting called');
      const response = await fetch('api/users/signup', {
        method: 'POST',
        body: JSON.stringify({
          username,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });

      // check the response status
      if (response.ok) {
        console.log('success');
        document.location.replace('/');
      } else {
        alert('Failed to signup');
      }
    }
}
  
document.querySelector('.form-container').addEventListener('submit', signupFormHandler);
