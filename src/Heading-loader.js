import {BASE_URL} from './config.js';
const loadComponentUsingFeatureDetection = (win, doc) => {
  const hasCes = 'customElements' in window && window.customElements.define;
  if (hasCes) {
    let s = doc.documentElement;
    s = s.insertBefore(doc.createElement('script'), s.lastChild);
    s.defer = false;
    s.type = 'module';
    s.src = BASE_URL + '/src/Heading.js';
  }
};
loadComponentUsingFeatureDetection(window, document);