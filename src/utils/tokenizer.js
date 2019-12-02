module.exports = function() {
  let string = this.defaults.original;
  
  var current = 0;
  var tokens = [];

  while (current < string.length) {
    var char = string[current];
    
    var WORD_CHARACTER = /\w/;
    var WHITE_SPACE = /\s/;
    var PUNCTUATION = /[^\s\w]/;
    var NUMBER = /[0-9]/;
    
    
    if( WHITE_SPACE.test( char ) ) {
      current++;
      continue;
    }
    
    if( PUNCTUATION.test( char ) ) {
      this.defaults.tokens.push({ type: 'punctuation', value: char });
      current++;
      continue;
    }
    
    if( NUMBER.test( char ) && char !== undefined ) {
      var val = '';
      
      while( NUMBER.test( char ) && char !== undefined ) {
        val += char;
        char = string[++current];
      }
      
      this.defaults.tokens.push({ type: 'number', value: val });
    }
    
    if( WORD_CHARACTER.test( char ) && char !== undefined ) {
      let val = '';
      
      while( WORD_CHARACTER.test( char ) && char !== undefined ) {
        val += char;
        char = string[++current];
      }
      
      this.defaults.tokens.push({ type: 'string', value: val });
      continue;
    }
    
    current++;
  }

  return this;
};
