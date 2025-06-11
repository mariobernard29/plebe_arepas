const swipers = new Swiper('.swiper-suc', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  autoplay: {
    delay: 5000,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows

  // And if we need scrollbar
  scrollbar: {
  },
});
