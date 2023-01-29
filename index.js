let name = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let passwordConfirm = document.getElementById("password-repeat");
let welcome = document.getElementById("welcome-message");

// change slide
function moveNameUp() {
  name.style.top = "-110px";
  email.style.top = "0px";
  email.style.width = "100%";
  password.style.top = "10px";
  password.style.width = "98%";
  passwordConfirm.style.top = "20px";
  passwordConfirm.style.width = "96%";
  welcome.style.top = "30px";
  welcome.style.width = "94%"
}

function moveEmailUp() {
  email.style.top = "-110px";
  email.style.width = "100%";
  password.style.top = "0px";
  password.style.width = "100%";
  passwordConfirm.style.top = "10px";
  passwordConfirm.style.width = "98%";
  welcome.style.top = "20px";
  welcome.style.width = "96%"
}

function movePassWordUp() {
  password.style.top = "-110px";
  password.style.width = "100%";
  passwordConfirm.style.top = "0px";
  passwordConfirm.style.width = "100%";
  welcome.style.top = "10px";
  welcome.style.width = "96%"
}

function movePassWordRepeatUp() {
    passwordConfirm.style.top = "-110px";
    passwordConfirm.style.width = "100%";
    welcome.style.top = "0px";
    welcome.style.width = "100%"
  }

//change icon when typing
function updateNameIcon() {
  let nameIcon = document.getElementById("nameIcon");
  const animations = [
    { opacity: 1, top: "20px" },
    { opacity: 0, top: "-55px"},
    { opacity: 0, top: "60px" },
    { opacity: 1, top: "20px" },
  ];

  const animationTiming = {
    duration: 1000,
    iterations: 1,
  };

  nameIcon.animate(animations, animationTiming);
  setInterval(() => {
    nameIcon.textContent = "";
    nameIcon.textContent = "arrow_upward";
    nameIcon.setAttribute("onclick", "moveNameUp()");
  }, 500);
}

function updateEmailIcon() {
  let emailIcon = document.getElementById("emailIcon");
  const animations = [
    { opacity: 1, top: "20px" },
    { opacity: 0, top: "-55px"},
    { opacity: 0, top: "60px" },
    { opacity: 1, top: "20px" },
  ];

  const animationTiming = {
    duration: 1000,
    iterations: 1,
  };

  emailIcon.animate(animations, animationTiming);
  setInterval(() => {
    emailIcon.textContent = "";
    emailIcon.textContent = "arrow_upward";
    emailIcon.setAttribute("onclick", "moveEmailUp()");
  }, 500);
}

function updatePassIcon() {
  let passIcon = document.getElementById("passIcon");
  const animations = [
    { opacity: 1, top: "20px" },
    { opacity: 0, top: "-55px"},
    { opacity: 0, top: "60px" },
    { opacity: 1, top: "20px" },
  ];

  const animationTiming = {
    duration: 1000,
    iterations: 1,
  };

  passIcon.animate(animations, animationTiming);
  setInterval(() => {
    passIcon.textContent = "";
    passIcon.textContent = "arrow_upward";
    passIcon.setAttribute("onclick", "movePassWordUp()");
  }, 500);
}

function updatePassConfirmIcon() {
  let passConfirmIcon = document.getElementById("passConfirmIcon");
  const animations = [
    { opacity: 1, top: "20px" },
    { opacity: 0, top: "-55px"},
    { opacity: 0, top: "60px" },
    { opacity: 1, top: "20px" },
  ];

  const animationTiming = {
    duration: 1000,
    iterations: 1,
  };

  passConfirmIcon.animate(animations, animationTiming);
  setInterval(() => {
    passConfirmIcon.textContent = "";
    passConfirmIcon.textContent = "send";
    passConfirmIcon.setAttribute("onclick", "movePassWordRepeatUp()");
  }, 500);
}
