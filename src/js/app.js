// CSS

require('lightbox2/dist/css/lightbox.min.css')
require('../css/tether.min.css');

require('../css/main.css');
require('../scss/styles.scss');


// JS
window.jQuery = require('jquery');
window.lightbox = require('lightbox2');
window.Tether = require('./tether.min.js');
require('./foundation.min.js');
//require('./mo-js.js');
require('./main.js');