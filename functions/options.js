
function setup() {
  restoreOptions();
  document.getElementById("save").addEventListener("click", saveOptions);
}

// Saves options to browser.storage.sync.
function saveOptions() {
  var twilio_account_id = document.getElementById("twilio_account_id").value;
  var twilio_auth_token = document.getElementById("twilio_auth_token").value;
  browser.storage.sync.set(
    {
      twilio_account_id: twilio_account_id,
      twilio_auth_token: twilio_auth_token
    },
    function() {
      var status = document.getElementById("status");
      status.textContent = "Options saved.";
    }
  );
}

// Restores form state using the preferences in browser.storage.
function restoreOptions() {
  browser.storage.sync.get(
    {
      twilio_account_id: "",
      twilio_auth_token: ""
    },
    function(items) {
      document.getElementById("twilio_account_id").value =
        items.twilio_account_id;
      document.getElementById("twilio_auth_token").value =
        items.twilio_auth_token;
    }
  );
}
