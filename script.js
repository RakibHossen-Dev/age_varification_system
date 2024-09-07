function isVarification() {
  let age = document.getElementById("age").value;
  age = Number(age);

  if (age >= 18) {
    document.getElementById("output").innerHTML =
      "Welcome!😍,You are ready for passport";
  } else {
    document.getElementById("output").innerHTML =
      "Sorry😥, You are not ready for passport";
  }
}
