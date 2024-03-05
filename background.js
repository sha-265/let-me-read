browser.webRequest.onBeforeRequest.addListener(
  function() { return {cancel: true}; },
  {
    urls: ["https://www.haaretz.co.il/htz/js/inter.js", "https://www.themarker.com/st/c/static/heb/inter.js"],
    types: ["script"]
  },
  ["blocking"]
);

browser.webRequest.onBeforeSendHeaders.addListener(
    function(details) {
        for (var i = 0; i < details.requestHeaders.length; ++i) {
            if (details.requestHeaders[i].name === 'User-Agent') {
                details.requestHeaders[i].value = 'Mozilla/5.0 (Java) outbrain';
                break;
            }
        }
        return {requestHeaders: details.requestHeaders};
    },
    {urls: ["https://www.haaretz.co.il/*", "https://www.haaretz.com/*", "https://www.themarker.com/*", "https://www.quora.com/*"]},
    ['blocking', 'requestHeaders']
    );
