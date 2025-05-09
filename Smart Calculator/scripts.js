
function appendValue (value){
    document.querySelector("#calDisplay").value += value;
}

function clearDisplay (){
    document.querySelector("#calDisplay").value = "";
}

function backspace () {
    const calDisplay = document.querySelector("#calDisplay");
    calDisplay.value = calDisplay.value.slice(0, -1)
}

function calculate  () {
    try {
        const result = eval(document.querySelector("#calDisplay").value);
        document.querySelector("#calDisplay").value = result;
    } catch {
        document.querySelector("#calDisplay").value = "Error"
    }
}
 