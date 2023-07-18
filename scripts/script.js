$(".carusels").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  dots: true,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
  autoplaySpeed: 5000,
});
