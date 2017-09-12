function toggleLeftMenu() {
    console.log(document.getElementById("leftMenu").style.display);
    if (document.getElementById("leftMenu").style.display == "block")
        document.getElementById("leftMenu").style.display = "none";
    else
        document.getElementById("leftMenu").style.display = "block";

}
