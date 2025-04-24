const themeBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const body = document.body;

themeBtn.addEventListener("click", () => {
  body.classList.toggle("night");
  body.classList.toggle("day");

  if (body.classList.contains("night")) {
    themeIcon.textContent = "🌙";
  } else {
    themeIcon.textContent = "🌞";
  }
});

// Hamburger Menu
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});


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
