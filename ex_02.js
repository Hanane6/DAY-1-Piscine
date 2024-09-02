// The module path to fiddles accepts all the common variations:
//
// - @jsfiddle/[fiddle].js
// - @jsfiddle/[user]/[fiddle].js
// - @jsfiddle/[user]/[fiddle]/[version].js
// - @jsfiddle/[user]/[fiddle]/latest.js
//
// You need to remember to add `.js` at the end.

import FiddleModule from "@jsfiddle/rLd4uyep.js"

let message = FiddleModule.greet("Hello world")

document.querySelector("p").innerHTML = message
