const date = new Date();

document.getElementById("year").innerHTML = `&copy;${date.getFullYear()}`;

document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;
