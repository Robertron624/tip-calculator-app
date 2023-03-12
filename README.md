# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot


### Links

- Solution URL: [Solution URL](https://github.com/Robertron624/tip-calculator-app)
- Live Site URL: [Live site URL](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [Sass] (https://sass-lang.com/) - CSS preprocessor
- [React](https://reactjs.org/) - JS library
- [Vite](https://vitejs.dev/) - Javascript build tool

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

I got better at conditional styling for errors and html elements states, also how to pass state between different components.

I think I did a good job with custom discount button/input:

```js
                {percentageOptions.map((percentage, i) => {
                    return typeof percentage === "number" ? (
                        <button
                            onClick={handleClick}
                            className={`number-percentage ${
                                discount == percentage ? "selected" : ""
                            }`}
                            key={i}
                            value={percentage}
                        >{`${percentage * 100}%`}</button>
                    ) : !customDiscountOpen ? (
                        <button
                            onClick={() =>
                                setCustomDiscountOpen(
                                    (customDiscountOpen) => !customDiscountOpen
                                )
                            }
                            className="custom-button"
                            key={i}
                        >
                            {percentage}
                        </button>
                    ) : (
                        <input
                            className="custom-input"
                            key={i}
                            type="text"
                            placeholder="0"
                            onChange={handleCustomDiscount}
                        />
                    );
                })}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

I want to improve my form's handling, I feel I must amelirate my form data verification and sanatization


## Author

- Personal Website - [Robert Ramirez](https://robert-ramirez.netlify.app)
- Frontend Mentor User- [@Robertron624](https://www.frontendmentor.io/profile/Robertron624)
- Twitter - [@robertdowny](https://www.twitter.com/robertdowny)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

