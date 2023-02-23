// Define function to generate a random password
function generatePassword(length) {
  var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=";
  var password = "";
  for (var i = 0; i < length; i++) {
    var index = Math.floor(Math.random() * charset.length);
    password += charset.charAt(index);
  }
  return password;
}

// Define function to handle form submission
function handleSubmit(event) {
  event.preventDefault();
  var length = parseInt(document.getElementById("password-length").value);
  var password = generatePassword(length);
  document.getElementById("password").value = password;
}

// Attach event listener to form submit button
document.getElementById("generate-button").addEventListener("click", handleSubmit);
