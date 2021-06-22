# Star Wars Characters

![screenshot](images/screenshot.png)

## General Info

The Star Wars character browser created with CSS and JavaScript.

Click [here](https://marekjanik.github.io/star-wars/) to watch it live.

## Technologies

This project is built with Vanilla JavaScript.

## HTML

The HTML structure consists of the `header` section which holds the logo and the search engine, and the `.character-container` section which holds the individual characters from the Star Wars API.

There is also a `.modal` section, created with div elements, which displays a character's info.

## CSS

All elements are positioned in the middle of the page using Flexbox.

The `.modal`'s display property is primarily set to none.

Class `.modal--active` is added via JavaScript. 

## JavaScript

Firstly, variables are declared storing the DOM elements.

Next, the data from the external API is fetched and saved as a variable `characters`. Function `getCharacters()` get the names of the characters from the fetched data and add them to DOM's `.character-list` as `<li>` elements.

When an individual character element is clicked, a modal is displayed with the function `showModal()`.

Function `getCharacterInfo()`, which is invoked during displaying a modal, gets an individual character's info from the API and adds that to the modal's content. 

Additionally, to avoid a bug after hiding the modal, function `removeAllChildNodes()` is called removing a previous character's info.

Finally, the search engine's `input` element is being listened with `addEventListener()` method, filtering characters by the search term.

## Things I Have Learned

| Syntax                                                         | Description                                                                                                            |
| -------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| fetch(url).then(response => response.json()).then(data => ...) | takes the URL path to the resource you want to fetch and returns a promise containing the response (a Response object) |


## Sources

[Star Wars API](https://swapi.dev/)
