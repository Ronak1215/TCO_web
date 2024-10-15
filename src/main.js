var titles = document.querySelectorAll('.swiper-slide');
    var title = [];
    titles.forEach(function(element) {
  title.push(element.dataset.title);
});

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop:true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 300,
    modifier: 2.5,
    // slideShadows: true,
  },
  autoplay:{
    delay:3000,
    disableOnInteraction:true,
  }, 
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + title[index] + '</span>';
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
    800:{
      depth:200,
      modifier: .5,
    }
  },

});

var swiper2 = new Swiper(".multiple-slide-carousel", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".multiple-slide-carousel #slider-button-right",
    prevEl: ".multiple-slide-carousel #slider-button-left",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
   1220: {
       slidesPerView: 3,
       spaceBetween: 30
   },
   670: {
       slidesPerView: 2,
       spaceBetween: 30
   }
 }
});

// Initialize the first carousel
var thumbsSwiper1 = new Swiper(".carousel-1-thumbs", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper1 = new Swiper(".carousel-1", {
  spaceBetween: 10,
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  thumbs: {
      swiper: thumbsSwiper1,
  },
});

// Initialize the second carousel
var thumbsSwiper2 = new Swiper(".carousel-2-thumbs", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".carousel-2", {
  spaceBetween: 10,
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  thumbs: {
      swiper: thumbsSwiper2,
  },
});


function toggleNavbar(collapseID){
  document.getElementById(collapseID).classList.toggle("hidden");
  document.getElementById(collapseID).classList.toggle("flex");
}