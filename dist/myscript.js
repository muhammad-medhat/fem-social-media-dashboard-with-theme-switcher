"use strict";

/* 
The first time the page is loaded, the color mode set on the preference 
is used and set as 'default' in the local storage. 

Changing the default preferences works the same way as changing the 
color mode using the buttons, if the page is loaded.

When the page is reloaded, whatever is the value set on the local storage
has precedence over the values in the preference. If the preference
changed after the page was visited - and the page is not loaded - 
the last value saved on the local storage is loaded. 
*/

var darkButton = document.getElementById("dark");
var lightButton = document.getElementById("light");
var defaultColorMode = "dark";

/**
 *
 * functions
 */
/**
 * load and apply theme
 */
var setBody = function setBody() {
  var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultColorMode;
  // debugger;
  var body = document.querySelector("body");
  colorModeFromLocalStorage ? body.classList = mode :
  //  : (body.classList = defaultColorMode);
  body.classList = colorModeFromPreferences();
};
var setToggleText = function setToggleText() {
  var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultColorMode;
  document.querySelector(".header__toggle>label>spam").innerText = mode;
};
var setColorMode = function setColorMode() {
  var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultColorMode;
  //document.querySelector("body").classList = mode;
  setBody(mode);
  document.getElementById(mode).checked = true;
  setToggleText(mode);
  // set storage
  localStorage.setItem("colorMode", mode);
};
/**########################################################### */
var colorModeFromLocalStorage = localStorage.getItem("colorMode");
var colorModeFromPreferences = function colorModeFromPreferences() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"; // If preference is set or does not match anything (light is default)
};

var radioButtons = document.querySelectorAll(".toggle__wrapper input");
radioButtons.forEach(function (inp) {
  var mode = inp.id;
  inp.addEventListener("click", function () {
    // debugger;
    setColorMode(mode);
  });
});
console.log("match", window.matchMedia("(prefers-color-scheme: dark)"));
console.log("colorModeFromPreferences ", colorModeFromPreferences());
console.log("colorModeFromLocalStorage ", colorModeFromLocalStorage);
// debugger;
colorModeFromLocalStorage ? setColorMode(colorModeFromLocalStorage) : setColorMode(colorModeFromPreferences());
//# sourceMappingURL=myscript.js.map