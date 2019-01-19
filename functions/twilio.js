searchTwilio = function(selection) {
  if (!isValidSelection(selection)) {
    return;
  }
  var num = extractPhoneNumberDigits(selection.selectionText);
  browser.storage.sync.get(
    {
      twilio_auth_token: null,
      twilio_account_id: null
    },
    function(items) {
      query_twilio(num, items.twilio_auth_token, items.twilio_account_id);
    }
  );
};

var query_twilio = function(phone_number, auth_token, account_id) {
  // Build the URL
  var url = "https://" + account_id + ":" + auth_token + "@";
  url += "lookups.twilio.com/v1/PhoneNumbers/";
  url +=
    "+1" +
    phone_number
      .replace("(", "")
      .replace(")", "")
      .replace("-", "");
  url += "?Type=carrier&Type=caller-name";
  browser.tabs.create({ url: url });
};
