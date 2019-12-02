module.exports = function init( string, options, settings ) {
  this.checkString( string );
  
  this.defaults = {
    original: string,
    tokens: [],
  };
  
    
  this.tokenizer();
  this.parser();
  
  return this.defaults;
};
