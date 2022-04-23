// Import and register all your controllers from the importmap under controllers/*

import { application } from "controllers/application"
import { Tabs, Toggle, Dropdown } from "tailwindcss-stimulus-components"
import * as ActiveStorage from "@rails/activestorage"
import "vanilla-nested"

// Eager load all controllers defined in the import map under controllers/**/*_controller
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"
ActiveStorage.start()
eagerLoadControllersFrom("controllers", application)
application.register('tabs', Tabs)
application.register('toggle', Toggle)
application.register('dropdown', Dropdown)
// Lazy load controllers as they appear in the DOM (remember not to preload controllers in import map!)
// import { lazyLoadControllersFrom } from "@hotwired/stimulus-loading"
// lazyLoadControllersFrom("controllers", application)
