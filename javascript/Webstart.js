var count = 0;
function clicked() {
    count++;
    var elem = document.createElement("p");
    elem.textContent = count; 
    document.body.appendChild(elem);
}