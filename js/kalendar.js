// registriraj varijable

// pokupi vrijednost iz oba inputa

/*function rezerviraj() {
    var min = document.querySelector("#od"),
        max = document.querySelector("#do"),
        dan = document.getElementsByTagName("td");

    for (var i = min.value - 1; i < max.value; i++) {
        min.addClass = "prviDan";
        max.addClass = "zadnjiDan";
        var input = dan[i];
        input.className += "zacrveni";
        console.log(input.innerHTML)
    }

    console.log(min.value);
    console.log(max.value);

}*/
// označavanje dana onclick
this.onclick = function() {
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
}