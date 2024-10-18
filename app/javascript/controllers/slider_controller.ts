import { tns } from "tiny-slider";
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    let sliders = document.querySelectorAll(".items-slider");
    sliders.forEach((slider) => {
      tns({
        container: slider,
        items: 1,
        autoWidth: true,
        slideBy: "page",
        arrowKeys: true,
        speed: 400,
        controls: false,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayButtonOutput: false,
        responsive: {
          350: {
            items: 1,
            gutter: 10,
          },
          500: {
            items: 1,
            gutter: 20,
          },
        },
      });
    });
  }
}
