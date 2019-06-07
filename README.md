# Fuck Off, Garfield

You know how it is. You're browsing reddit, and you're not logged in (too much effort). You're just mindlessly expanding any thumbnail that satisfies some unconscious heuristic. And suddenly, there he is. It's terrible. Lovecraft was sick, but these people... jesus.

```javascript
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
```

There, problem solved. Not beautifully (too much effort). But solved.

# Why you can't this on the Chrome Web Store

You have to pay a $5.00 fee before you're allowed to publish to the Chrome Web Store. I bought some taquitos instead. If *you* want to publish it, by all means, have at it: This project is under the GNU General Public License 3.0.

If you want to use this right now, you can add it to your browser in about 30 seconds. First, download this project as a ZIP and uncompress it. Place it somewhere you won't mind it sticking around. Second, follow the [numbered list of directions under Create The Manifest from Google's Developer documentation](https://developer.chrome.com/extensions/getstarted#manifest). Done!
