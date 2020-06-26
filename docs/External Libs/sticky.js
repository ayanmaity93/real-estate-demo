window.onscroll = function() {myFunction()};

function myFunction(){
    var navbar = document.getElementById("sticky-header");
    if (window.pageYOffset >= 200 && window.innerWidth > 991) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}