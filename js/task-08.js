// event.preventDefault();

const form = document.querySelector(".login-form");

form.addEventListener("submit", formLogin);

    
    
function formLogin(event) {
  event.preventDefault();
  const obj = {};
  const inputEmail = form.elements[0].value;
  const inputPassword = form.elements[1].value;

  if (inputEmail === "" || inputPassword === "") {
      alert("Please write your email or password!");
  }

  obj.email = inputEmail;
  obj.password = inputPassword;
  console.log(obj);
  
  form.reset();
};

