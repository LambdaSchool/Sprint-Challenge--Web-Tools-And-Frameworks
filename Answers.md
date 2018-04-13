# Self-Study Questions

## 1. How would you teach the basic ideas behind preprocessing to a friend?  Please don't copy and paste an answer here, use your own thoughts.

The preprocessor is like an advanced cut, copy, and paste machine. It can copy contents of entire files with one line (`@import`), substitute values or whole strings with a single world (*variables & escapes*), and even take code formatted in a certain way and copy it in a different format (*nesting, bubbling, etc*). 

But why would you even want an advanced cut, copy, and paste machine? Well, in the case of CSS, writing code for CSS is tedious. You often have to repeat lines of code. You often get lost in a giant line of selectors, wondering if your selection is specific enough. It's hard to determine what properties are inherited when you're deep in specifics or in a media query. However, CSS is what you need for the browser to accept, process, and render styling on your HTML pages.

The preprocessor eases a lot of the above. You write CSS in a simpler and "DRY"-er way, using code and shortcuts specific to the preprocessor. Then, the preprocessor compiles your simpler CSS with preprocessor-specific code into vanilla CSS. It does this by going over line by line and using that preprocessor-code to do its cut-copy-paste magic,  organizing and reformatting your CSS into a standard CSS file your browser can accept and process. Long story short, preprocessor helps make your CSS life easier.

## 2. What is the yarn command to globally install LESS?

`yarn global add less`

## 3. What is the most useful mixin you have used this week?

Honestly speaking, I haven't been using mixins as much as I should be. I do use a very simple one:

```css
.debug-box {
    border: 2px solid red;
}
```

I use this to explicitly visualize the box model of elements I have trouble wrangling with. Usually gets popped off once everything is working or before I submit a proposed completion.

## 4. What are the names of the 5 breakpoints used in bootstrap?

* XS
* SM
* MD
* LG
* XL

Note that all of these are `min-width`. Bootstrap has a "mobile-first" philosophy, so you design with the smallest screen in mind. Therefore, XS is **default**, and the other breakpoints modify as `min-width` of those breakpoints are reached.

## 5. What is the utility class name that turns an element into a flexbox?

`d-flex`