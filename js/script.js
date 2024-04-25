let celciusCF = document.getElementById('C-cf');
let fahrenheitCF = document.getElementById('F-cf');

let fahrenheitFC = document.getElementById('F-fc');
let celciusFC = document.getElementById('C-fc');


function cFahrenheit() {
    let f = (parseFloat(celciusCF.value)*1.8) + 32;
    return parseFloat(f);
}

function fCelsius() {
    let c = (parseFloat(fahrenheitFC.value) - 32)*0.56;
    return parseFloat(c);
}

let convertBtn = document.getElementsByClassName('convert');

let reverse = false;

if (!reverse) {
    f = convertBtn.addEventListener('click',cFahrenheit());
    fahrenheitCF.value = f
    reverse = true;
}
else {
    c = convertBtn.addEventListener('click',fCelsius());
    celciusFC.value = c
    reverse = false;
}