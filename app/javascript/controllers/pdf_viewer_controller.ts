import { Controller } from "@hotwired/stimulus"
import WebViewer from '@pdftron/webviewer'

export default class extends Controller {
  declare pdfValue: string
  static values = { pdf: String }
  static targets = ["pdf"]

  connect() {
    const element: any = document.getElementById('viewer');
    console.log("value", this.pdfValue);
    WebViewer({
      path: '/webviewer',
      licenseKey: 'demo:1707478433289:7f4a651c0300000000074e0002d2d802fa4936f5c0ce295cc12e3d70d6',
      initialDoc: this.pdfValue,
    }, element).then((instance) => {
      
      // change to dark mode
      instance.UI.setTheme('dark');
      instance.UI.setFitMode('Width')
      instance.Core.documentViewer.addEventListener('documentLoaded', () => {})
    });
  }
}
