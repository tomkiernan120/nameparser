module.exports = function( variable ) {
  if( typeof variable !== 'string' ){
    throw Error( `You cannot use typeof ${typeof variable} as String` );
  };
};
