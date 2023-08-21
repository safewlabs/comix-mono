import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    const swiperEl = document.querySelector('swiper-container')
    Object.assign(swiperEl, {
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      },
    });
    swiperEl.initialize();
  }
}
