// označavanje dana onclick
/*this.onclick = function() {
    myFunction();
};

function myFunction() {
    var dan = window.event.target;

    if (event.shiftKey) {
        dan.className = "prviDan";
    } else if (event.ctrlKey) {
        dan.className = "zadnjiDan";
    } else if (event.altKey) {
        dan.className = "";
    } else {
        dan.className = "zacrveni";
    }
}*/

function tablica() {
    var dan = window.event.target;

    if (event.shiftKey) {
        dan.className = "prviDan";
    } else if (event.ctrlKey) {
        dan.className = "zadnjiDan";
    } else if (event.altKey) {
        dan.className = "";
    } else {
        dan.className = "zacrveni";
    }
}

function sakrijUpute() {
    document.querySelector(".upute").classList.toggle("sakrij");

}