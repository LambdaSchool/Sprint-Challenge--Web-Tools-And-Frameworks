1. A preprocessor is a tool used to enhance the capabilities of the language being used. In front-end development, we have been using LESS, which gets converted and run as CSS. LESS gives us the ability to use variables, functions, mixins, and even nesting. Variables are useful for a number of reasons. For example, you can design a color scheme by defining a variable as a color. So instead of typing #FFFFFF all over your CSS sheet, you can define @primarycolor:#FFFFFF and then whenever you want to use the color, insert @primarycolor. Better yet, if you want to change the color, you can change using only the @primarycolor definition. Mixins are a way to create a set of styles that can be called upon at any time. For example, say you wanted all buttons on the page to be 200px wide, 50px tall, and the color gray. You could create a mixin with that styling, and then call only the mixin itself on the stylesheet .mybutton {.mybuttonstyles}. Mixins are also useful when it comes to supporting various browsers. Instead of entering 3 different styles for border radius, for instance, you can define the mixin with that styling and then use only .border-radius when you want to use it.

2. npm install less

3. My favorite mixin is border radius. It's cool to know it's doing the browser support work without needing to enter it each time. I also think border-radius is attractive in modern design.

4. The five breakpoints are: xs, s, m, l, xl. xs is the default as Bootstrap is now mobile-first.

5. d-flex. 