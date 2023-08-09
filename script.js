// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}
// Slideshow JS Code
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  slides[index].classList.add('active');
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds

// Hover Effects for Portfolio Items
let portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach((item) => {
  item.addEventListener('mouseover', function() {
    this.classList.add('hover');
  });

  item.addEventListener('mouseout', function() {
    this.classList.remove('hover');
  });
});
// Tooltip or Pop-up
let tooltip = document.querySelector('.tooltip');
let targetElement = document.querySelector('.target-element');

targetElement.addEventListener('mouseover', function() {
  tooltip.style.display = 'block';
});

targetElement.addEventListener('mouseout', function() {
  tooltip.style.display = 'none';
});

// Click Event for Interactive Buttons
let interactiveBtn = document.querySelector('.interactive-btn');

interactiveBtn.addEventListener('click', function() {
  // Perform the desired action when the button is clicked
  console.log('Button clicked!');
});
// Animated Transitions between Sections
const sections = document.querySelectorAll('section');

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

function validateForm() {
  var email = document.forms["contactForm"]["email"].value;
  var phone = document.forms["contactForm"]["phone"].value;

  // Validate email
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    displayErrorMessage("Please enter a valid email address");
    return false;
  }
  // Validate phone number
  var phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone)) {
    displayErrorMessage("Please enter a 10-digit phone number");
    return false;
  }

  // Clear error message
  clearErrorMessage();
}

function displayErrorMessage(message) {
  var errorElement = document.createElement("p");
  errorElement.className = "error-message";
  errorElement.textContent = message;
  var form = document.forms["contactForm"];
  form.appendChild(errorElement);
}

function clearErrorMessage() {
  var form = document.forms["contactForm"];
  var errorElement = form.querySelector(".error-message");
  if (errorElement) {
    form.removeChild(errorElement);
  }
}