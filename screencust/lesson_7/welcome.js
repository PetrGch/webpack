'use strict';

module.exports = function(message) {

  if (NODE_ENV == 'development') {
    console.log(`Welcome ${message}`);
    alert('HI ' + USER)
  }

  alert(`Welcome ${message}`);
}
