const Farenheit = 33.8;
const results = document.getElementById("results");

Celsium.addEventListener("submit", Metamorphose);


function Metamorphose(event) {
  const Celsium = document.getElementById("Celsium");
  event.preventDefault();

  const amount = document.querySelector('#amount').value

  let farenheitAmount = Farenheit * amount
  results.innerHTML = `${amount} C = ${farenheitAmount} F`;
  return farenheitAmount;
}
