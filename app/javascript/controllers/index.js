// Import and register all your controllers from the importmap under controllers/*

import { application } from "controllers/application"
import { Tabs, Toggle } from "tailwindcss-stimulus-components"

// Eager load all controllers defined in the import map under controllers/**/*_controller
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"
eagerLoadControllersFrom("controllers", application)
application.register('tabs', Tabs)
application.register('toggle', Toggle)
// Lazy load controllers as they appear in the DOM (remember not to preload controllers in import map!)
// import { lazyLoadControllersFrom } from "@hotwired/stimulus-loading"
// lazyLoadControllersFrom("controllers", application)
