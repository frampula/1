function getAlert() {
  alert("Hello User!");
}

function pipiHello() {
    console.log('pipi, hello!')
}

const pipiButton = document.getElementById("pipi");

pipiButton.addEventListener('mouseenter', pipiHello);
