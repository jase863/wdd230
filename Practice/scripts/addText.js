const addButton = document.getElementById("addText");
const clearButton = document.getElementById("clearText");
const textBox = document.getElementById("biz-description");
var addedText = document.getElementById("addedText");


addButton.addEventListener('click', ()=>{

    addedText.textContent = textBox.value;
});

clearButton.addEventListener('click', ()=>{

    addedText.textContent = "";
    textBox.value = "";
});