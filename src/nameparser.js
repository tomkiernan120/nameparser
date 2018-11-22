import { privateAPIs } from 'Variables/private';
import { publicAPIs } from 'Variables/public';

const NameParser = (() => {
      //
   // Variables
   //
   const trim = string => {
    return string.replace( /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '' );
   }



   //
   // Methods
   //

   /**
    * A private method
    */
   const isString = string => {
     return typeof string === "string" ? true : false;
   };

   const removeAllPunctuation = (string) => {
    return string.replace( /[^\d\w\s]/, '' );
   }

   const setString = string => {
     publicAPIs.string = trim( string );
   }

   const getString = () => {
    return publicAPIs.string;
   }

   const setParts = () => {
    if( publicAPIs.string.length ){
      publicAPIs.parts = publicAPIs.string.split(' ');
    }
   }

   const upperCase = (string) => {
    if( typeof string == "string" ){
      return string.toLowerCase().replace( /\b[a-z]/g, function(letter) {
        return letter.toUpperCase();
      });
    }
   }

   const getParts = () => {
    return publicAPIs.parts;
   }

   const parseForTitle = () => {
    if( publicAPIs.parts.length ){

      publicAPIs.parts.map((e,i) => {
        let itemIndex = privateAPIs.titles.indexOf( removeAllPunctuation( trim(e).toLowerCase() ) );
        if( itemIndex > -1 ) {
          publicAPIs.parsedData.title = upperCase(privateAPIs.titles[itemIndex]);
          publicAPIs.parts.splice(i,1);
        }
      });
    }
   }

    const parseNameParts = () => {
      if( publicAPIs.parts.length ){

        const length = publicAPIs.parts.length;

        if( length >= 3 ){
          publicAPIs.parsedData.middlename = upperCase( publicAPIs.parts[1] );
          publicAPIs.parts.splice(1,1);
        }

        if( publicAPIs.parts[0] ){
          publicAPIs.parsedData.forename = upperCase( publicAPIs.parts[0] );
          publicAPIs.parts.splice(0,1);
        }

        if( publicAPIs.parts[0] ){
          publicAPIs.parsedData.surname = upperCase( publicAPIs.parts[0] );
          publicAPIs.parts.splice(0,1);
        }
          
      }
    }






   /**
    * public method
    */
   publicAPIs.parse = string => {
     if( !isString( string ) ){
      throw new Error( "Please enter a string" );
     }

     setString( string );
     setParts();
     parseForTitle();
     parseNameParts();

     return publicAPIs.parsedData;
   };


   //
   // Return the Public APIs
   //

   return publicAPIs;
  })();


 var parse = NameParser.parse('Mr. Tom Kiernan');

 console.log( NameParser )