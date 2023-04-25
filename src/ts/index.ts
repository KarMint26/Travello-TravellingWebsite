// Humburger Button
const menu = document.getElementById("menu");
const navComponent = document.querySelector(".component-nav");
const linkNav = document.querySelectorAll(".link-nav-list");
let count: number = 0;

menu?.addEventListener("click", () => {
  if (count === 0) {
    menu.setAttribute("src", "../assets/icon/close.png");
    navComponent?.classList.toggle("active");
    count++;
  } else {
    menu.setAttribute("src", "../assets/icon/menu.png");
    navComponent?.classList.remove("active");
    count = 0;
  }

  linkNav?.forEach((li) => {
    li.addEventListener("click", () => {
      if (count === 1) {
        navComponent?.classList.remove("active");
        menu.setAttribute("src", "../assets/icon/menu.png");
        count = 0;
      }
    });
  });
});

// Sticky Back To Top

// Get the button:
const mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
    if (mybutton) {
      mybutton.style.display = "flex";
    }
  } else {
    if (mybutton) {
      mybutton.style.display = "none";
    }
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
