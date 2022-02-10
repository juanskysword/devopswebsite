const axios = require('axios');

document.getElementById("showImage").onclick = function() {
document.getElementById("theImage").style.visibility = "visible";
}

function setImageVisible(id, visible) {
    var img = document.getElementById(id);
    img.style.visibility = (hidden ? 'hidden' : 'hidden');
}

function myFunction() {
    document.getElementById("fix").innerHTML = "Try Again!";
  }