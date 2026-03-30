const swiper = new Swiper(".advantages-swiper", {
  spaceBetween: 10,
  slidesPerView:1,
   autoHeight: true,

  pagination: {
    el: ".advantages-swiper-pagination",
    clickable: true,
  },

});


const reviewsSwiper = new Swiper(".reviews-swiper", {
  spaceBetween: 10,
  slidesPerView:1,
    autoHeight: true,
  loop:true,
  pagination: {
    el: ".reviews-swiper-pagination",
    clickable: true,
  },

});


const historySwiper = new Swiper(".history-swiper", {
  spaceBetween: 10,
  slidesPerView:1,
    autoHeight: true,
  loop:true,
  pagination: {
    el: ".history-swiper-pagination",
    clickable: true,
  },

});