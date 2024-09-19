document.querySelector("#loginBtn").addEventListener("click", (e) => {
  e.preventDefault();
  const phoneNumber = document.querySelector("#phone-number").value;
  const pinNumber = document.querySelector("#pin-number").value;

  if (phoneNumber.length > 10 && pinNumber === "1234") {
    window.location.href = "home.html";
  } else {
    alert("Invalid Phone number or pin !!");
  }
});
