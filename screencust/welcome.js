'use strict';

export default function(message) {

  if (NODE_ENV == "development") {
    console.log(message);
  }

  if (USER == "Petr") {
    console.log(USER);
  }

  console.log(NODE_ENV);

  alert(`Welcome ${message}`);
};
