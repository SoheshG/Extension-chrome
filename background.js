let currentTab = null;
let siteTime = {};

chrome.tabs.onActivated.addListener((activeInfo) => {
  updateTimeTracker();
  chrome.tabs.get(activeInfo.tabId, (tab) => {
    currentTab = tab.url ? new URL(tab.url).hostname : null;
  });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.active && changeInfo.url) {
    updateTimeTracker();
    currentTab = new URL(changeInfo.url).hostname;
  }
});

function updateTimeTracker() {
  if (currentTab) {
    siteTime[currentTab] = (siteTime[currentTab] || 0) + 1; // 1 second for simplicity
  }
}

setInterval(() => {
  updateTimeTracker();
  chrome.storage.local.set({ siteTime });
}, 1000); // Save data every second
