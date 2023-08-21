import { tns } from "tiny-slider"
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    tns({
        container: '.items-slider',
        items: 4,
        slideBy: 'page',
        arrowKeys: true,
        autoplayHoverPause: true,
        speed: 300,
        autoplay: true,
        controls: false,
        responsive: {
            350: {
              items: 1,
              controls: true,
              edgePadding: 30
            },
            500: {
              items: 4
            }
          },
      });
  }
}
