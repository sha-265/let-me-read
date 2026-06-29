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
                details.requestHeaders[i].value = 'Mozilla/5.0 (Linux; Android 9) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.6668.70 Safari/537.36 haaretz/5.0.49';
                break;
            }
        }
        return {requestHeaders: details.requestHeaders};
    },
    {urls: ["https://www.haaretz.co.il/*ty-article*", "https://www.haaretz.com/*ty-article*", "https://www.themarker.com/*ty-article*"]},
    ['blocking', 'requestHeaders']
    );
