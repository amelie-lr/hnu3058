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