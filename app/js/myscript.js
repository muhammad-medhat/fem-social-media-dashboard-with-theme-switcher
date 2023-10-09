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

const darkButton = document.getElementById("dark");
const lightButton = document.getElementById("light");

const setColorMode = (mode = "dark") => {
  //document.querySelector("body").classList = mode;
  setBody();
  document.getElementById(mode).checked = true;
  // debugger;
  const el = document.querySelector(".header__toggle>label>spam");
  document.querySelector(".header__toggle>label>spam").innerText =
    colorModeFromLocalStorage;
};

const colorModeFromLocalStorage = localStorage.getItem("colorMode");
const colorModeFromPreferences = () => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light"; // If preference is set or does not match anything (light is default)
};
const radioButtons = document.querySelectorAll(".toggle__wrapper input");
radioButtons.forEach((inp) => {
  console.log("inp", inp);
  const mode = inp.id;
  inp.addEventListener("click", () => {
    debugger;
    setColorMode(inp.id);
    // document.getElementById(inp.id).checked
    //   ? setColorMode("dark")
    //   : setColorMode("light");
  });
});
/**
 * load and apply theme
 */
const setBody = (mode = "dark") => {
  // debugger;
  const body = document.querySelector("body");
  colorModeFromLocalStorage
    ? (body.classList = colorModeFromLocalStorage)
    : (body.classList = colorModeFromPreferences());
};

console.log("match", window.matchMedia("(prefers-color-scheme: dark)"));
console.log("pref", colorModeFromPreferences());
console.log("storage", colorModeFromLocalStorage);
debugger;
colorModeFromLocalStorage ? setColorMode(colorModeFromLocalStorage) : setBody();
