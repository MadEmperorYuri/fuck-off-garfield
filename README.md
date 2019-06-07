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
