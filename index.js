(function (root, factory) {
	if ( typeof define === 'function' && define.amd ) {
		define(['buoy'], factory(root));
	} else if ( typeof exports === 'object' ) {
		module.exports = factory(require('buoy'));
	} else {
		root.clickMe = factory(root, root.buoy);
	}
})(typeof global !== 'undefined' ? global : this.window || this.global, function (root) {
    var options = {};
    var title = [
      'Mr',
      'Ms',
      'Miss',
      'Mrs',
      'Mx',
      'Master',
      'Sir',
      'Madam',
      'Dame',
      'Lord',
      'Lady',
      'Dr',
      'Prof',
      'Br',
      'Sr',
      'Fr',
      'Rev',
      'Pr',
      'Elder'
    ];
    
    var suffixes = {
      "bt": "Baronet",
      "bart": "Baronet",
      "esq": "Esquire",
      "VC": "Victoria Cross",
      "gc": "Knight of the Order of the Garter",
      "lg": "Lady of the Order of the Garter",
      "kt": "Knight of the Order of the Thistle",
      "lt": "Lady of the Order of the Thistle",
      "kp": "Knight of the Order of Saint Patrick",
      "gcb": "Knight/Dame Grand Cross of the Order of the Bath",
      "om": "Order of Merit",
      "gcsi": "Knight Grand Commander of the Order of the Star of India",
    };
    
    function nameparser( string, options, settings ) {
      return new Nameparser( string, settings, options );
    }
    
    Nameparser.prototype.init = function( string, settings, options ) {
      this.options = {
        original: '',
        tokens: []
      };
    
      if ( options ) {
        this.options = extend(true, this.options, options);
      }
    
      return this.tokenizer( string );
    };
    
    nameparser.tokenizer = function(string) {
      this.options.original = string;
      
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
          this.options.tokens.push({ type: 'punctuation', value: char });
          current++;
          continue;
        }
        
        if( NUMBER.test( char ) && char !== undefined ) {
          var val = '';
          
          while( NUMBER.test( char ) && char !== undefined ) {
            val += char;
            char = string[++current];
          }
          
          this.options.tokens.push({ type: 'number', value: val });
        }
        
        if( WORD_CHARACTER.test( char ) && char !== undefined ) {
          var val = '';
          
          while( WORD_CHARACTER.test( char ) && char !== undefined ) {
            val += char;
            char = string[++current];
          }
          
          this.options.tokens.push({ type: 'string', value: val });
          continue;
        }
        
        current++;
      }
    
      return this.options;
    };
    
    nameparser.checkSettings = function(settings) {
      if (!settings) {
        return;
      }
    
      if (typeof settings !== 'object') {
        throw new Error('Please make sure any settings are of type `object` you passed: ' + typeof settings);
      }
    
      if (settings.cache) {
        throw new Error('You cannot redifine cache');
      }
    
      if (settings.original) {
        throw new Error('You cannot redifine original');
      }
    };
    
    var extend = function() {
      var extended = {};
      var deep = false;
      var i = 0;
      var length = arguments.length;
    
      if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
        deep = arguments[0];
        i++;
      }
    
      var merge = function(obj) {
        for (var prop in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, prop)) {
            if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
              extended[prop] = extend(true, extended[prop], obj[prop]);
            } else {
              extended[prop] = obj[prop];
            }
          }
        }
      };
    
      for (; i < length; i++) {
        var obj = arguments[i];
        merge(obj);
      }
      return extended;
    };
    
    root.nameparser = nameparser;
    return nameparser;
});
