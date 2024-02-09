import { Controller } from "@hotwired/stimulus"
import WebViewer from '@pdftron/webviewer'

export default class extends Controller {
  declare pdfValue: string
  declare licenseValue: string
  static values = { pdf: String, license: String }
  static targets = ["pdf"]

  connect() {
    const element: any = document.getElementById('viewer');
    console.log("value", this.pdfValue);
    WebViewer({
      path: '/webviewer',
      licenseKey: this.licenseValue,
      initialDoc: this.pdfValue,
    }, element).then((instance) => {
      
      // change to dark mode
      instance.UI.setTheme('dark');
      instance.UI.setFitMode('Width')
      instance.Core.documentViewer.addEventListener('documentLoaded', () => {})
    });
  }
}
