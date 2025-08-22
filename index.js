document.getElementById("login-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const mobileNumber = 123456789;
  const pinNumber = 1234;
  const mobileN = document.getElementById("mobile");
  const mValue = parseInt(mobileN.value);
  const pinN = document.getElementById("pin");
  const pinV = parseInt(pinN.value);
  if (mValue === mobileNumber && pinV === pinNumber) {
    window.location.href = "./home.html";
  } else {
    console.log("filed");
  }
});
