$(document).ready(function() {
  let typed = new Typed('#typed-text', {
    strings: ["Programador", "DataOps", "Designer"],
    typeSpeed: 80,
    backSpeed: 50,
    loop: true,
    smartBackspace: true,
    shuffle: true,
    startDelay: 1000,
    showCursor: false
  });
});

function formattedNumber() {
  const cellphoneNumber = document.getElementById("number_input").value;
  const cleanedNumber = cellphoneNumber.replace(/\D/g, "");

  if (cleanedNumber.length === 11) {
    const formattedCellNumber = cleanedNumber.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");

    console.log(formattedCellNumber);

    return formattedCellNumber;
  } else {
    console.log("Número de telefone inválido");
    
    return cellphoneNumber;
  }
}

function updateFormattedNumber() {
  const formattedCellNumber = formattedNumber();
  document.getElementById("number_input").value = formattedCellNumber;
}