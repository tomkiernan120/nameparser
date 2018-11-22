/*!
 * Universal Module Definition (UMD) Boilerplate
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 */
 (((root, factory) => {
  if ( typeof define === 'function' && define.amd ) {
    define([], () => factory(root));
  } else if ( typeof exports === 'object' ) {
    module.exports = factory(root);
  } else {
    root.NameParser = factory(root);
  }
 }))(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : this, window => {
   //
   // Variables
   //
   const trim = string => {
    return string.replace( /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '' );
   }

   const privateAPIs = {
    titles: ["Mr"," Mrs"," Miss"," Ms"," Dr"," Admiral"," Air Comm"," Ambassador"," Baron"," Baroness"," Brig &amp; Mrs"," Brig Gen"," Brigadier"," Brother"," Canon"," Capt"," Chief"," Cllr"," Col"," Commander"," Commander &amp; Mrs"," Consul"," Consul General"," Count"," Countess"," Countess of"," Cpl"," Dame"," Deputy"," Dr &amp; Mrs"," Drs"," Duchess"," Duke"," Earl"," Father"," General"," Gräfin"," HE"," HMA"," Her Grace"," His Excellency"," Ing"," Judge"," Justice"," Lady"," Lic"," Llc"," Lord"," Lord &amp; Lady"," Lt"," Lt Col"," Lt Cpl"," M"," Madam"," Madame"," Major"," Major General"," Marchioness"," Marquis"," Minister"," Mme"," Mr &amp; Dr"," Mr &amp; Mrs"," Mr &amp; Ms"," Prince"," Princess"," Prof"," Prof &amp; Dr"," Prof &amp; Mrs"," Prof &amp; Rev"," Prof Dame"," Prof Dr"," Pvt"," Rabbi"," Rear Admiral"," Rev"," Rev &amp; Mrs"," Rev Canon"," Rev Dr"," Senator"," Sgt"," Sheriff"," Sir"," Sir &amp; Lady"," Sister"," The Earl of"," The Hon"," The Hon Dr"," The Hon Lady"," The Hon Lord"," The Hon Mrs"," The Hon Sir"," The Honourable"," The Rt Hon"," The Rt Hon Dr"," The Rt Hon Lord"," The Rt Hon Sir"," The Rt Hon Visc"," Viscount"].map( (e) => {
      return trim( e.toLowerCase() );
    }),
    punctuation: [],
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
    return string.toLowerCase().replace( /\b[a-z]/g, function(letter) {
      return letter.toUpperCase();
    })
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

        console.log( length );

        publicAPIs.parts.map((e,i) => {
          if( removeAllPunctuation( trim(e).toLowerCase() ) ){

            console.log( publicAPIs.parsedData.forename ); 

            if( !publicAPIs.parsedData.forename ){
              publicAPIs.parsedData.forename = upperCase( e );
              publicAPIs.parts.splice( i, 1 );
              return;
            }

            if( !publicAPIs.parsedData.middlename && length == 3 ){
              publicAPIs.parsedData.middlename = upperCase( e );
              publicAPIs.parts.splice( i, 1 );
              return;
            }

            console.log( e );

            if( !publicAPIs.parsedData.surname ){
              publicAPIs.parsedData.surname = upperCase( e );
              publicAPIs.parts.splice( i, 1 );
              return;
            }
          }
        })
      }
    }

   const publicAPIs = {
    parsedData: {
      title: '',
      forename: '',
      middlename: '',
      surname: '',
      suffixes: null
    }
   };




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
 });



 var parse = NameParser.parse('Mr. Tom Kiernan');

 console.log( NameParser )