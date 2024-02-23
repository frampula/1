// fetch("./user.json")
// .then((response) => {
//   return response.json();
// }).then((data) => {
//     console.log(data)
// });


fetch('https://api.monobank.ua/bank/currency')
.then((response) => {
  return response.json();
}).then((data) => {
    console.log(data)
});