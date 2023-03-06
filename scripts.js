// source : https://stackoverflow.com/questions/43008609/expanding-all-details-tags

function openDetails() {
    var x = document.getElementsByTagName("details");
    var i;
    for (i = 0; i < x.length; i++) {
         x[i].setAttribute("open", "true");
}
}

function closeDetails() {
    var x = document.getElementsByTagName("details");
    var i;
    for (i = 0; i < x.length; i++) {
         x[i].removeAttribute("open");
}
}



// source : https://www.w3schools.com/css/tryit.asp?filename=trycss3_var_js

// Get the root element
var r = document.querySelector(':root');

// Create a function for setting a variable value
function col1() {
    // Set the value of variable --blue to another value (in this case "lightblue")
    r.style.setProperty('--doublewidth', '100% - (2 * 0.75%');
    r.style.setProperty('--col', '1');
    r.style.setProperty('--ratio', '0.5');
    r.style.setProperty('--base', '3vw');
}
function col2() {
    // Set the value of variable --blue to another value (in this case "lightblue")
    r.style.setProperty('--doublewidth', '2 * (var(--divwidth) + 0.75%)'); // besoin de recopier ici pour que le calcul se refasse correctement
    r.style.setProperty('--col', '2');
    r.style.setProperty('--ratio', '2.0309');
    r.style.setProperty('--base', '1.5vw');
}
function col3() {
    // Set the value of variable --blue to another value (in this case "lightblue")
    r.style.setProperty('--doublewidth', '2 * (var(--divwidth) + 0.75%)'); // besoin de recopier ici pour que le calcul se refasse correctement
    r.style.setProperty('--col', '3');
    r.style.setProperty('--ratio', '2.0471');
    r.style.setProperty('--base', '1vw');
  }
function col4() {
    // Set the value of variable --blue to another value (in this case "lightblue")
    r.style.setProperty('--doublewidth', '2 * (var(--divwidth) + 0.75%)'); // besoin de recopier ici pour que le calcul se refasse correctement
    r.style.setProperty('--col', '4');
    r.style.setProperty('--ratio', '2.0638');
    r.style.setProperty('--base', '0.75vw');
}
function col5() {
    // Set the value of variable --blue to another value (in this case "lightblue")
    r.style.setProperty('--doublewidth', '2 * (var(--divwidth) + 0.75%)'); // besoin de recopier ici pour que le calcul se refasse correctement
    r.style.setProperty('--col', '5');
    r.style.setProperty('--ratio', '2.0811');
    r.style.setProperty('--base', '0.6vw');
}