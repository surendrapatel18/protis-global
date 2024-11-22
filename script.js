
// Select elements
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenuBtn = document.getElementById("closeMenuBtn");
const topPage = document.getElementById("top-page");
const scrollLinks = document.querySelectorAll(".scroll-link");

// Show the mobile menu
menuToggle.addEventListener("click", () => {
    mobileMenu.classList.remove("translate-x-full");
    mobileMenu.classList.add("translate-x-0");
    topPage.classList.add("hidden");
});

// Hide the mobile menu
closeMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("translate-x-0");
    mobileMenu.classList.add("translate-x-full");
    topPage.classList.remove("hidden");
});

// Smooth scroll for links and close menu on click
scrollLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        // Scroll to the section smoothly
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth",
            });
        }

        // Close the mobile menu
        mobileMenu.classList.add("translate-x-full");
        mobileMenu.classList.remove("translate-x-0");
        topPage.classList.remove("hidden");
    });
});



// Hero-Section Slider
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".banner-slide");
  const pagination = document.querySelector(".pagination");
  let currentSlide = 0;

  // Create pagination dots
  slides.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("pagination-dot");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      goToSlide(index);
    });
    pagination.appendChild(dot);
  });

  const dots = document.querySelectorAll(".pagination-dot");

  // Function to change slides
  const changeSlide = () => {
    slides[currentSlide].style.display = "none";
    dots[currentSlide].classList.remove("active");

    currentSlide = (currentSlide + 1) % slides.length;

    slides[currentSlide].style.display = "block";
    dots[currentSlide].classList.add("active");
  };

  // Function to go to a specific slide
  const goToSlide = (index) => {
    slides[currentSlide].style.display = "none";
    dots[currentSlide].classList.remove("active");

    currentSlide = index;

    slides[currentSlide].style.display = "block";
    dots[currentSlide].classList.add("active");
  };
  setInterval(changeSlide, 2000);
});



//  Image-thumbnail video Play
 
const thumbnail1 = document.getElementById('thumbnail1');
const video1 = document.getElementById('video1');

thumbnail1.addEventListener('click', () => {
  thumbnail1.classList.add('hidden');  
  video1.classList.remove('hidden');   
  video1.play();                      
});


//Brand-Logo Initialize Swiper

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 6,  
  spaceBetween: 30,  
  loop: true,  
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,  
    draggable: true,  
  },
  breakpoints: {
    320: {
      slidesPerView: 2,  
      spaceBetween: 10,  
    },
    640: {
      slidesPerView: 3, 
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 4,  
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 5,  
      spaceBetween: 25,
    },
    1280: {
      slidesPerView: 6,  
      spaceBetween: 30,
    },
  },
});

// Card-Slider

var swiper3 = new Swiper(".mySwiper3", {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true, 
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});



//  Image-thumbnail video Play
 
const thumbnail2 = document.getElementById('thumbnail2');
const video2 = document.getElementById('video2');

thumbnail2.addEventListener('click', () => {
  thumbnail2.classList.add('hidden');  
  video2.classList.remove('hidden');   
  video2.play();                      
});


// Toggle-Accordion-Item

function toggleAccordionItem(event) {
  const content = event.currentTarget.nextElementSibling;

  if (content.style.maxHeight) {
      content.style.maxHeight = null;
  } else {
      content.style.maxHeight = content.scrollHeight + "px";
  }
}

// Updated Year 
  
document.getElementById('year').textContent = new Date().getFullYear();