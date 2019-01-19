searchGoogle = function(selection) {
    if( !isValidSelection(selection) ){ return; }
    var num = extractPhoneNumberDigits(selection.selectionText);
    var query = '';
    var variations = createNumberFormats(num);
    variations.forEach( function(phoneNumber, index) {
        query += index === (variations.length - 1) ? '"' + phoneNumber + '"' : '"' + phoneNumber + '"' + ' OR ';
    });
    browser.tabs.create({url: "https://www.google.com/search?q=" + query });
};
