
let slider = document.getElementById("valueSlider");
let nummer = document.getElementById("selectedNumber");
let hint = document.getElementById("hint");

let rättTal = Math.floor(Math.random() * 101);

slider.oninput = function () {

    nummer.innerHTML = slider.value;

    if (slider.value < rättTal) {
        hint.innerHTML = "Talet är större";
    }
    else if (slider.value > rättTal) {
        hint.innerHTML = "Talet är mindre";
    }
    else {
        hint.innerHTML = "Rätt gissat!";
    }

};