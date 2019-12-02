const titles = require('../lists/titles');
const suffixes = require('../lists/suffixes');

module.exports = function() {
  
  this.defaults.parsedData = { nodes: [], length: 0 };
  
  this.defaults.parsedData.length = this.defaults.tokens.length;
  
  let title = false;
  
  for( var i = 0; i < this.defaults.tokens.length; i++ ) {
    const item = this.defaults.tokens[ i ];
    
    let thisParsedItem = { value: item.value, type: "Most likely a middlename" };
      
    if( titles.indexOf( item.value ) > -1 ) {
      title = true
      thisParsedItem.type =  "Title";
    }
    
    if( (title && i === 1) || ( !title && i === 0 ) ) {
      thisParsedItem.type =  "Most likely the firstname";
    }

    if( i === (this.defaults.tokens.length - 1) && suffixes.indexOf( item.value ) <= 0 ) {
      thisParsedItem.type =  "Most likely the lastname";
    }
    else if( suffixes.indexOf( item.value ) > -1 ) {
      // do something here.
    }
    
    this.defaults.parsedData.nodes[ i ] = thisParsedItem;
  }
  
  
};
