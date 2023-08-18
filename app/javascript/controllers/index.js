// Import and register all your controllers from the importmap under controllers/*

import { application } from "controllers/application"
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"
import { Tabs, Toggle, Dropdown } from "tailwindcss-stimulus-components"
import * as ActiveStorage from "@rails/activestorage"
import "vanilla-nested"
import "chartkick"
import "Chart.bundle"

// Eager load all controllers defined in the import map under controllers/**/*_controller
ActiveStorage.start()
eagerLoadControllersFrom("controllers", application)
application.register('tabs', Tabs)
application.register('toggle', Toggle)
application.register('dropdown', Dropdown)
