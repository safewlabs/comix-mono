import { Application } from "@hotwired/stimulus"
import "trix"
import "@rails/actiontext"
window['global'] = window

const application = Application.start()

// Configure Stimulus development experience
application['warnings'] = true
application.debug = false

window['Stimulus'] = application
export { application }
