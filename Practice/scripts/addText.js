const addButton = document.getElementById("addText");
const textBox = document.getElementById("biz-description");
var addedText = document.getElementById("addedText");


addButton.addEventListener('click', ()=>{

    addedText.textContent = textBox.value;
    console.log(textBox.value);
});
