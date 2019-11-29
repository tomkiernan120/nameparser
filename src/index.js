const nameparser = function( string, options, settings ) {
  return nameparser.init(  string, options, settings  );
};

// Establish the root object, `window` in the browser, or `global` on the server.
   var root = this; 

   // Create a reference to this
   var _ = new Object();

   var isNode = false;

   // Export the Underscore object for **CommonJS**, with backwards-compatibility
   // for the old `require()` API. If we're not in CommonJS, add `_` to the
   // global object.

nameparser.init = require('./utils/init');;
nameparser.checkString = require('./utils/checkstring');
nameparser.tokenizer = require('./utils/tokenizer');
nameparser.tokenizer = require('./utils/parser');


this.nameparser = nameparser;

if ( process && process.release && (typeof process !== 'undefined') && (process.release.name === 'node') ) {
  module.exports = nameparser;
  root.nameparser = nameparser;
  isNode = true;
} 
else {
  console.log( window );
  root.nameparser = nameparser;
  window.nameparser = nameparser;
}

module.exports = nameparser;
