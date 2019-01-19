import searchGoogle from '/functions/google.js'

// browser.contextMenus.create({
//     title: "Search All",
//     contexts: ["selection"],  // ContextType
//     onclick: searchAll // A callback function
// });
//
// browser.contextMenus.create({
//     title: "Search in Twilio",
//     contexts:["selection"],  // ContextType
//     onclick: searchTwilio // A callback function
// });

browser.contextMenus.create({
    title: "Search in Google",
    contexts:["selection"],  // ContextType
    onclick: searchGoogle // A callback function
});
