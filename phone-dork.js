browser.contextMenus.create({
    title: "Search All",
    contexts: ["selection"],  // ContextType
});

browser.contextMenus.create({
    title: "Search in Twilio",
    contexts:["selection"],  // ContextType
});

browser.contextMenus.create({
    title: "Search in Google",
    contexts:["selection"],  // ContextType
    onclick: searchGoogle // A callback function
});
