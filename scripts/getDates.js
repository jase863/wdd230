const date = new Date();

if (visualViewport.width < 640) {
  
    document.querySelector("#copyright").innerHTML = `&copy;${date.getFullYear()}<br>Jason Walker<br>Utah<br>`

} else {document.querySelector("#copyright").innerHTML = `&copy;${date.getFullYear()} | Jason Walker | Utah`};

document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;
