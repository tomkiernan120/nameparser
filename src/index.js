const nameparser = function( string, options, settings ) {
  return nameparser.init(  string, options, settings  );
};

nameparser.init = require('./utils/init');;
nameparser.checkString = require('./utils/checkstring');
nameparser.tokenizer = require('./utils/tokenizer');
nameparser.tokenizer = require('./utils/parser');

root.nameparser = nameparser;

module.exports = nameparser
