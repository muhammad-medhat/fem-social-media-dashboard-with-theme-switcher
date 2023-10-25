# Frontend Mentor - Social media dashboard with theme switcher solution

This is a solution to the [Social media dashboard with theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Toggle color theme to their preference

### Screenshot

![Frontend Mentor | social media dashboard with theme switcher](images/scrsh.png?raw=true "Frontend Mentor | social media dashboard with theme switcher")

### Links

- Solution URL: https://github.com/muhammad-medhat/fem-social-media-dashboard-with-theme-switcher.git
- Live Site URL: https://muhammad-medhat.github.io/fem-social-media-dashboard-with-theme-switcher/

## My process

- you can switch between dark mode or light mode, this setting is saved in the local storage
- if local storage variable doesnt exist it will load according to the system default preferences
- system default theme is determined by the media query `prefers-color-scheme`

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- gulp
- BEM

### What I learned

I have recently learned BEM (Block Element Modifier) methodology and incorporated Gulp scripts into my workflow for organizing SCSS files. BEM helps me structure and style web components, promoting modular development. Gulp automates tasks like SCSS compilation and optimization. By organizing SCSS files according to BEM principles and utilizing Gulp, I create scalable and maintainable stylesheets efficiently.

I have recently learned about the prefers media query. This media query allows developers to target user preferences, such as color schemes (light or dark mode), contrast levels, and reduced motion. By utilizing the prefers media query, we can create responsive and user-friendly designs that adapt to individual preferences and enhance accessibility.

```css
@media (prefers-color-scheme: dark) {
  :root {
    ...;
  }
}
```
