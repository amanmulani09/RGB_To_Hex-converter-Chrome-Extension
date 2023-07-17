const submitBtn = document.querySelector('.submit');
const output = document.querySelector('.output');
const copyBtn = document.querySelector('.copyToClipBoard');

function convertToHex(value){
    if(value.length === 0) return '';
    const valNumber = parseInt(value);
    const finalval = Math.min(Math.max(0,valNumber),255);
    return finalval.toString(16).toUpperCase().padStart(2,0);
}
function handleConvert(e){
    e.preventDefault();
    const rValue = document.querySelector('.rColor').value
    const gValue = document.querySelector('.gColor').value
    const BValue = document.querySelector('.bColor').value

    if(rValue.length == 0 &&  gValue.length === 0 && BValue.length === 0){
       return;
    }

    const result = `#${convertToHex(rValue)}${convertToHex(gValue)}${convertToHex(BValue)}`
    output.value = result
    copyBtn.innerHTML = "📋 Copy"

    console.log(result)
}

function copyToClipBoard(){
    navigator.clipboard.writeText(output.value);
    // Alert the copied text
    alert("Copied the text: " + output.value);
    copyBtn.innerHTML = "Copied ✅"
}

submitBtn.addEventListener('click',handleConvert);
copyBtn.addEventListener('click',copyToClipBoard)