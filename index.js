function validateName() {
  let name = document.querySelector("#name");
  let formHelper = document.querySelectorAll(".form-helper")[0];
  //   console.log(name.value);
  if (!name.value) {
    formHelper.style.display = "block";
    name.style.border = "2px solid red";
  } else {
    formHelper.style.display = "none";
    name.style.border = "2px solid #3af734";
  }
}
function validatePassword() {
  let pwd = document.querySelector("#pwd");
  let pattern = /[a-zA-Z0-9_@./#&+-]{6}/;
  let result = pattern.test(pwd.value);
  let formHelper = document.querySelectorAll(".form-helper")[2];

  if (result) {
    formHelper.style.display = "none";
    pwd.style.border = "2px solid #3af734";

  } else {
    formHelper.style.display = "block";
    pwd.style.border = "2px solid red";

  }
}
function validateMobileNumber() {
  let number = document.querySelector("#number");
  let formHelper = document.querySelectorAll(".form-helper")[1];
  //   console.log(name.value);
  if (!number.value) {
    formHelper.style.display = "block";
    number.style.border = "2px solid red";

  } else {
    formHelper.style.display = "none";
    number.style.border = "2px solid #3af734";

  }
}

function submit() {
  let form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    validateName();
    validateMobileNumber();
    validatePassword();
    
    
  });
}
submit();
