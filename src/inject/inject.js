chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);

			if (
				document.body.classList.contains('loggedin') ||
				document.location.pathname !== '/'
			) {
				return;
			}

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

			let makeGarfieldFuckOff = function (settings) {
				let untrimmedSubreddits = settings.subreddits.split(',');
				let trimmedSubreddits = [];
				for (subreddit of untrimmedSubreddits) {
					trimmedSubreddits.push(subreddit.toLowerCase().trim());
				}

				let badThings = [];

				let things = document.getElementsByClassName('thing');

				for (thing of things) {
					for (subreddit of trimmedSubreddits) {
						if (thing.getAttribute('data-subreddit').toLowerCase() === subreddit) {
							badThings.push(thing);
						}
					}
				}

				for (badThing of badThings) {
					badThing.remove();
				}
			}

			chrome.storage.sync.get({subreddits: ''}, makeGarfieldFuckOff);
		}
	}, 10);
});
