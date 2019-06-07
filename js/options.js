let subredditsField = document.getElementById("subreddits-field");

subredditsField.onchange = function() {
  chrome.storage.sync.set({
    subreddits: subredditsField.value
  });
}

function restoreOptions() {

  chrome.storage.sync.get({
    firstRun: true,
  }, function(options) {
    if (options.firstRun === true) {
      chrome.storage.sync.set({
        subreddits: 'imsorryjon',
        firstRun: false
      });
    }
  });

  chrome.storage.sync.get({
    subreddits: '',
  }, function(options) {
    subredditsField.value = options.subreddits;
  });

}

document.addEventListener('DOMContentLoaded', restoreOptions);
