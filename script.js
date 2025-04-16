let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu');

menuBtn.onclick = () =>{
  menuBtn.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  menuBtn.classList.remove('fa-times');
  navbar.classList.remove('active');

}

let themeBtn = document.querySelector('#theme-btn');

themeBtn.onclick = () =>{
  themeBtn.classList.toggle('fa-sun');

  if(themeBtn.classList.contains('fa-sun')){
    document.body.classList.add('active');
  }
  else{
    document.body.classList.remove('active');
  }
}


var swiper = new Swiper(".gallery-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    loop:true,
    autoplay:{
        delay:1000,
        disableOnInteraction:false,
    },
  });    
  


AOS.init({
  duration: 800,
  delay: 400,
});


// contact section

document.getElementById("donationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const amount = parseFloat(document.getElementById("amount").value.trim());
  const message = document.getElementById("message");

  if (name && email && amount > 0) {
    // message.textContent = Thank you, ${name}, for donating ₹${amount}!;
    message.style.color = "green";
    this.reset();
  } else {
    message.textContent = "Please fill out all fields correctly.";
    message.style.color = "red";
  }
});
