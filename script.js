const input = document.getElementById("input");

function reverseString(str) {
  return str.split("").reverse().join("");
}

function check() {
  const value = input.value.trim();
  const reversed = reverseString(value);

  if (value === "") {
    showAlert("ENTER SOMETHING");
    return;
  }

  if (value.toLowerCase() === reversed.toLowerCase()) {
    showAlert("P A L I N D R O M E");
  } else {
    showAlert("N O T  T O D A Y");
  }
}

function showAlert(message) {
  document.getElementById("alertText").innerText = message;
  document.getElementById("customAlert").classList.add("show");
}

function closeAlert() {
  document.getElementById("customAlert").classList.remove("show");
}