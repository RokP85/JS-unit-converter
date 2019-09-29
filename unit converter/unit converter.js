let miles = document.getElementById("result");

function convert() {
    let convertButton = parseFloat(document.getElementById("input").value) * 0.62;
    miles.textContent = convertButton + "milj";
}

