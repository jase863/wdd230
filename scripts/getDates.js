const date = new Date();

document.querySelector("p").innerHTML = `&copy;${date.getFullYear()}<br>Jason Walker<br>Utah`

document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;
