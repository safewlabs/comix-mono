# frozen_string_literal: true

# Pin npm packages by running ./bin/importmap

pin "application", preload: true
pin "@hotwired/turbo-rails", to: "https://ga.jspm.io/npm:@hotwired/turbo-rails@7.3.0/app/javascript/turbo/index.js"
pin "@hotwired/stimulus", to: "https://ga.jspm.io/npm:@hotwired/stimulus@3.2.2/dist/stimulus.js", preload: true
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js", preload: true
pin_all_from "app/javascript/controllers", under: "controllers"
pin "tailwindcss-stimulus-components", to: "https://ga.jspm.io/npm:tailwindcss-stimulus-components@3.0.4/dist/tailwindcss-stimulus-components.modern.js"
pin "trix"
pin "@rails/actiontext", to: "actiontext.js"
pin "@rails/activestorage", to: "https://ga.jspm.io/npm:@rails/activestorage@7.0.4-2/app/assets/javascripts/activestorage.esm.js"
pin "vanilla-nested", to: "vanilla_nested.js", preload: true
pin "@hotwired/turbo", to: "https://ga.jspm.io/npm:@hotwired/turbo@7.3.0/dist/turbo.es2017-esm.js"
pin "@rails/actioncable/src", to: "https://ga.jspm.io/npm:@rails/actioncable@7.0.4-2/src/index.js"
pin "chartkick", to: "chartkick.js"
pin "Chart.bundle", to: "Chart.bundle.js"
pin "pdf.js", to: "https://ga.jspm.io/npm:pdf.js@0.1.0/index.js"
pin "buffer", to: "https://ga.jspm.io/npm:@jspm/core@2.0.1/nodelibs/browser/buffer.js"
pin "child_process", to: "https://ga.jspm.io/npm:@jspm/core@2.0.1/nodelibs/browser/child_process.js"
pin "coffee-script", to: "https://ga.jspm.io/npm:coffee-script@1.12.7/lib/coffee-script/coffee-script.js"
pin "fs", to: "https://ga.jspm.io/npm:@jspm/core@2.0.1/nodelibs/browser/fs.js"
pin "module", to: "https://ga.jspm.io/npm:@jspm/core@2.0.1/nodelibs/browser/module.js"
pin "path", to: "https://ga.jspm.io/npm:@jspm/core@2.0.1/nodelibs/browser/path.js"
pin "process", to: "https://ga.jspm.io/npm:@jspm/core@2.0.1/nodelibs/browser/process-production.js"
pin "vm", to: "https://ga.jspm.io/npm:@jspm/core@2.0.1/nodelibs/browser/vm.js"
pin "tiny-slider", to: "https://ga.jspm.io/npm:tiny-slider@2.9.4/dist/tiny-slider.js"
