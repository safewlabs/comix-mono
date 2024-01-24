import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = { state: Boolean }
  static targets = ["menu", "x", "bars"]

  connect() {
    console.log(this.stateValue)
  }

  toggle() {
    this.stateValue = !this.stateValue

    if (this.stateValue) {
      this.openMenu()
      this.showX()
    } else {
      this.closeMenu()
      this.showBars()
    }
  }

  openMenu() {
    this.menuTarget.classList.remove("hidden");
  }

  closeMenu() {
    this.menuTarget.classList.add("hidden");
  }

  showBars() {
    this.xTarget.classList.add("hidden")
    this.barsTarget.classList.remove("hidden")
  }

  showX() {
    this.xTarget.classList.remove("hidden")
    this.barsTarget.classList.add("hidden")
  }
}
