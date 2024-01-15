// Import and register all your controllers from the importmap under controllers/*

import { application } from "controllers/application"
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"
import { Tabs, Toggle, Dropdown, Modal } from "tailwindcss-stimulus-components"
import * as ActiveStorage from "@rails/activestorage"

// Eager load all controllers defined in the import map under controllers/**/*_controller
ActiveStorage.start()
eagerLoadControllersFrom("controllers", application)
application.register('tabs', Tabs)
application.register('toggle', Toggle)
application.register('dropdown', Dropdown)
application.register('modal', Modal)