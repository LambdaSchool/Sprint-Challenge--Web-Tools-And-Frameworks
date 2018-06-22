<!-- Answers to the Self Study Questions go here -->

1. How would you teach the basic ideas behind preprocessing to a friend?  Please don't copy and paste an answer here, use your own thoughts.

    Preprocessors extend the ability of CSS by making it easier to use. There are many different preprocessors availaible to use and in terms of syntax, they are all very similar. Preprocessors offer variables to store repeated data such as color schemes, common margin widths, and font-styles. They also offer mixins which holds a set of properties and values that can be repeated through out the code. They offer nesting, similar to the nesting of HTML elements, allowing for better visual distribution in the file. All code is written in a .less file which then is compiled into a CSS file. No work is done in the CSS file. The compiler runs and updates the CSS file every time a change is made and saved. Additionally less files can be split up and separated and then imported into one main file that is linked to the HTML. Preprocessors are a very userful and necessary tool in development, especially as projects become bigger and harder to manage. 

2. What is the yarn command to globally install LESS?

    ```yarn global add less```

3. What is the most useful mixin you have used this week?

    The most useful mixin I utilized this week was a mixin I created to center content using Flexbox. It was the most useful to me because I used it many times through out my projects this week. 

4. What are the names of the 5 breakpoints used in bootstrap?

    xs,sm, md, lg, xl

5. What is the utility class name that turns an element into a flexbox?

    class = d-flex