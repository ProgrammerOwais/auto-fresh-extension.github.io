chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === "complete") {
    setTimeout(function () {
      chrome.tabs.reload(tabId);
    }, 10000); // Refresh every 10 seconds (30000 milliseconds)
  }
});
