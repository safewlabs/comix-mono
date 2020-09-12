import Splide from "@splidejs/splide";

document.addEventListener("DOMContentLoaded", () => {
  new Splide("#splide", {
    perPage: 4,
    rewind: true,
    breakpoints: {
      640 : {
        perPage: 1,
      },
      768: {
        perPage: 2
      },
      1024: {
        perPage: 3
      },
      1280: {
        perPage: 4
      }  
    }
  }).mount();
});