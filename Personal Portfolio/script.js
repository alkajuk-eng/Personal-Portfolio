const togglebtn = document.querySelector(".togglebtn");
const navLinks = document.querySelector(".nav-links");

togglebtn.addEventListener("click", () => {
    togglebtn.classList.toggle("active");
    navLinks.classList.toggle("active");
});

var typed=new Typed(".input",{
            strings:["Frontend Developer","UX Designer","Web Developer"],
            typeSpeed:70,
            backSpeed:55,
            loop:true
        }) 