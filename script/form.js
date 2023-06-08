// html
window.addEventListener("DOMContentLoaded", () => {
    // capturar valor de los imputs
    const firstNameInput = document.querySelector('input[name="firstname"]');
    const lastNameInput = document.querySelector('input[name="lastname"]');
    const usernameInput = document.querySelector('input[name="username"]');
    const passwordInput = document.querySelector('input[name="password"]');
    const confirmPasswordInput = document.querySelector(
      'input[name="confirmpassword"]'
    );
    const birthdayInput = document.querySelector('input[name="birthday"]');
    const termsAndConditionsInput = document.querySelector(
      'input[name="termsconditions"]'
    );
    const form = document.querySelector("form");
  
    //funciones
    const validateName = (name) => {
      const regExp = new RegExp(/^[a-zA-Z\s]+$/);
      const isCorrect = name.length > 0 && regExp.test(name); // numero de cadena es mayor a 0 y tenga la exprecion regexp
     
      return isCorrect; // me devuelve un boolean
    };
  
    const validateUserName = (username) => {
      const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
      return username.length > 0 && regExp.test(username);
    };
  
    const validatePassword = (password, confirmPassword) =>
      password === confirmPassword;
  
    const validateBirthday = (birthday) => {
      const today = new Date();
      const eighteenYearsAgo = new Date(
        today.getFullYear() - 18,
        today.getMonth(),
        today.getDate()
      );
      const birthdayDate = new Date(birthday);
      return birthdayDate <= eighteenYearsAgo;
    };
  
    // combierto la cadena de texto guardada devuelta a un objeto
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
  
    // repasar es lo mismo que lo de arriba
    // JSON.parse(user)
    // const userJson = JSON.parse(user)
    // asi puedo trabajarlo con un objeto
    // console.log(userJson.password);
  
  
   // evento - evento del surmulario - submit
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const firstName = firstNameInput.value; //creo una variable al que le asigno el valor de la captura del imput firstnameimput
      const lastName = lastNameInput.value;
      const username = usernameInput.value;
      const password = passwordInput.value;
      const confirmPassword = confirmPasswordInput.value;
      const birthday = birthdayInput.value;
      const termsAndConditions = termsAndConditionsInput.checked;
  
      let isValid = true; // la condicion
      // isValid = isValid && validateName(firstName)
      isValid &&= validateName(firstName); //validateName es el nombre de la funcion y (el parametro es variable firstname de la linea 59)
      isValid &&= validateName(lastName);
      isValid &&= validateUserName(username);
      isValid &&= validatePassword(password, confirmPassword);
      isValid &&= validateBirthday(birthday);
  
      if (!isValid) {
        alert("Invalid input");
        return;
      }
  
      const newUser = {
        firstName,
        lastName,
        password,
        confirmPassword,
        username,
        birthday,
        termsAndConditions,
      };
       
      // guardo el usuario con json.stringify que guarda string
      localStorage.setItem("user", JSON.stringify(newUser));
    });
  });
  