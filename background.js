'use strict';

chrome.browserAction.onClicked.addListener(currentTab => {
  chrome.windows.create({
    url: currentTab.url,
    incognito: !currentTab.incognito,
    focused: true,
    state: 'maximized'
  });
  chrome.tabs.remove(currentTab.id);
});
