const nav = document.getElementById("nav-toggler");
const navListener = nav.addEventListener("click", navToggle);
const mySidenav = document.getElementById("mySidenav");

if (window.innerWidth < 994) {
  mySidenav.innerHTML = `
        <a href="/events">Events</a>
        <a href="https://youngleaders-world.mykajabi.com/opt-in">Video Resources</a>
        <a href="/courses">Courses</a>
        <a href="/speakers">Speakers</a>
        <a href="/waystogive">Ways To Give</a>
        <a href="/about">About Us</a>
        <a href="/opportunities">Opportunities</a>
        <a href="/contact">Contact Us</a>
    `;
}

let linkItems = mySidenav.getElementsByTagName("a");
linkItems = Array.from(linkItems);

var x = 0;
function navToggle() {
  if (x == 0) {
    x = 1;
    openNav();
  } else {
    x = 0;
    closeNav();
  }
}
function openNav() {
  mySidenav.style.width = "250px";
  linkItems.forEach((link) => {
    link.classList.add("fadeIn");
    // setTimeout(() => {
    //     link.classList.remove("fade")
    // }, 1000);
  });
}
function closeNav() {
  mySidenav.style.width = "0px";
  linkItems.forEach((link) => {
    link.classList.remove("fadeIn");
    link.classList.add("fadeout");
    setTimeout(() => {
      link.classList.remove("fadeout");
    }, 1000);
  });
}
