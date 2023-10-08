
const loginForm = document.querySelector(".login-form"); 

    loginForm.addEventListener("submit", function (event) {
      event.preventDefault(); 

      const emailInput = loginForm.querySelector('input[name="email"]');
      const passwordInput = loginForm.querySelector('input[name="password"]');

      const emailValue = emailInput.value;
      const passwordValue = passwordInput.value;

      if (!emailValue || !passwordValue) {
        alert("Please fill in all fields");
      } else {
        const userData = {
          email: emailValue,
          password: passwordValue
        };
        console.log("User Data:", userData);
        loginForm.reset(); // Очищаем значения полей формы
      }
    });
