import {BASE_URL} from './config.js';
(function loadComponentUsingFeatureDetection(win,doc) {
  var hasCes = 'customElements' in window && window.customElements.define;
  if (hasCes) {
    var s = doc.documentElement;
    s = s.insertBefore(doc.createElement('script'), s.lastChild);
    s.defer = false;
    s.type = 'module';
    s.src = BASE_URL + '/src/Heading.js';
  }
}(window,document));