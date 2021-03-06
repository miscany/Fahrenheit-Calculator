window.addEventListener("DOMContentLoaded", (event) => {
  // functions
  function fahrenheitToCelsius() {
    var fahrenheit = document.getElementById("fahrenheit").value;

    document.getElementById("celsius").value = (
      ((fahrenheit - 32) * 5) /
      9
    ).toFixed(1);
  }

  function celsiusToFahrenheit() {
    var celsius = document.getElementById("celsius").value;
    document.getElementById("fahrenheit").value = (
      (celsius * 9) / 5 +
      32
    ).toFixed(1);
  }

  // event listeners
  document
    .getElementById("button-fah")
    .addEventListener("click", fahrenheitToCelsius);
  document
    .getElementById("button-cel")
    .addEventListener("click", celsiusToFahrenheit);
});
