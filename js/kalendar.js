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
// stvaranje slike 
function uslikaj() {
    document.querySelector(".upute").className = "nevidljiv";   // micanje uputa
    html2canvas(document.querySelector(".container")).then(function(canvas) {
        document.body.appendChild(canvas);
      document.querySelector("canvas").className = "uslikano";
    });
   document.querySelector(".poruka").className = "poruka"; // pokazuje poruku sa uputama
}