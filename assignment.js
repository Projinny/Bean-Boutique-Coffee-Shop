const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    console.log('Menu toggled'); 
    navLinks.classList.toggle('active');
});





let slideIndex=0;

function showSlides(){
    let slides= document.getElementsByClassName("slideshow");
    let dot= document.getElementsByClassName("dot");

    for(let i =0; i<slides.length; i++){
        slides[i].style.display="none";
    }
    slideIndex++;

    if(slideIndex > slides.length){
        slideIndex=1;
    }
    slides[slideIndex -1].style.display="block";

    for(let i=0; i< dot.length; i++){
        dot[i].classList.remove("active");
    }

    dot[slideIndex - 1].classList.add("active");

    setTimeout(showSlides,3000);
}

showSlides();

function currentSlide(n){
    slideIndex= n-1;
    showSlides();
}




// let pop= document.getElementById("pop");
// let popbtn= document.getElementById("popbtn");
// popbtn.addEventListener("click", function(){
//     pop.style.display="block";
// });

function closeAd() {
    document.getElementById('discountAd').style.display = 'none';
  }

  function closelogin() {
    document.getElementById("pop").style.display = 'none';
  }
  function showlogin() {
    document.getElementById("pop").style.display = 'block';
  }