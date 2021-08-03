
/*This should be loaded after the html doc is fully loaded.*/
window.onload = () => {
//show the file page content
var openTab = document.getElementById("firstTab");
openTab.click();
}

/*Should be loaded before the html doc because some functions linked to onclick attributes of elements.*/
function refresh() {
    window.location.reload();
}
//show the side nav when the menu icon is clicked on when the screen is small.
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}
//hide the side nav when the overlay or the file's page content is clicked on when the screen is small.
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}
//List of files shown when we click it, colour changes to aqua.
function myFunc(id) {
  var filesContainer = document.getElementById(id);
  if (!filesContainer.classList.contains("w3-show")) {
    filesContainer.classList.remove("w3-hide");
    filesContainer.classList.add("w3-show"); 
    filesContainer.previousElementSibling.classList.toggle("w3-aqua");
  } else { 
    filesContainer.classList.remove("w3-show"); 
    filesContainer.classList.add("w3-hide");
    filesContainer.previousElementSibling.classList.toggle("w3-aqua");
  }
}
//Show file page content
function doShare(fileName) {
  var i;
  //get all page content, hide them
  var x = document.getElementsByClassName("file");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  //get all files on the side nav
  fileOnSideNav = document.getElementsByClassName("test");
  for (i = 0; i < x.length; i++) {
    fileOnSideNav[i].classList.remove("w3-aqua");
  }
  //show the page content for the file that's been clicked, currentTarget is what the event listener is attached to.
  document.getElementById(fileName).style.display = "block";
  event.currentTarget.classList.add("w3-aqua");
}

