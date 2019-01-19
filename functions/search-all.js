searchAll = function(selection) {
    if( !isValidSelection(selection) ){ return; }
    searchGoogle(selection);
    searchTwilio(selection);
};
