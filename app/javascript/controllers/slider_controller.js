import { tns } from "tiny-slider";
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    let sliders = document.querySelectorAll(".items-slider");
    sliders.forEach((slider) => {
      tns({
        container: slider,
        items: 4,
        slideBy: "page",
        arrowKeys: true,
        speed: 300,
        controls: false,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayButtonOutput: false,
        responsive: {
          350: {
            items: 2,
            gutter: 10,
          },
          500: {
            items: 4,
            gutter: 20,
          },
        },
      });
    });
  }
}
