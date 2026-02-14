function convertTemp() {
  let temp = document.getElementById("tempInput").value;
  let unit = document.getElementById("unitSelect").value;
  let result = document.getElementById("result");

  if (temp === "") {
    result.innerHTML = "⚠ Please enter a temperature!";
    return;
  }

  temp = Number(temp);

  let output;

  if (unit === "cToF") {
    output = (temp * 9/5) + 32;
    result.innerHTML = `${temp}°C = ${output.toFixed(2)}°F`;

  } else if (unit === "fToC") {
    output = (temp - 32) * 5/9;
    result.innerHTML = `${temp}°F = ${output.toFixed(2)}°C`;

  } else if (unit === "cToK") {
    output = temp + 273.15;
    result.innerHTML = `${temp}°C = ${output.toFixed(2)}K`;
  }
}
