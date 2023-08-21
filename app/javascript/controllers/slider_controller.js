import { tns } from "tiny-slider"
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    tns({
        container: '.items-slider',
        items: 4,
        slideBy: 'page',
        arrowKeys: true,
        speed: 300,
        controls: false,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayButtonOutput: false,
        responsive: {
            350: {
              items: 2,
              controls: false,
              edgePadding: 30
            },
            500: {
              items: 4
            }
          },
      });
  }
}
