1. How would you teach the basic ideas behind preprocessing to a friend?  Please don't copy and paste an answer here, use your own thoughts.

    The basic idea behind preprocessing is you have a program running in your command line and tell it to watch for any changes inside directory/file X, in our example we would be using a LESS file, and if it finds any changes make sure to output those changes to directory/file Y, a CSS file. The basics behind LESS or any CSS preprocessor is that we can now utilize functionality like nested CSS selectors and functions, and so much more, to create easier to read code and save time by writing less code.
    
2. What is the yarn command to globally install LESS?

    yarn global add less
    
3. What is the most useful mixin you have used this week?

    The most useful mixin I have used this week is a combination of two.
      
    ```
      .rotate-mixin (@deg) {
        transform+_ : rotate(@deg);
      }
      
      .skew-mixin (@deg1, @deg2) {
        transform+_: skew(@deg1, @deg2);
      }
      
    And to use this mixing in our CSS looks like
    
      .css-class {
        .rotate-mixin(20deg);
        .skew-mixin(20deg, 20deg)
      }
    ```
      
    Adding the `+_` to a LESS property allows us to create mixins that are independent of each other but also have the ability to play nicely if they are using the same CSS property and are placed in the same CSS selector
    
4. What are the names of the 5 breakpoints used in bootstrap?

    col-*
    col-sm-*
    col-md-*
    col-lg-*
    col-xl-*
    
5. What is the utility class name that turns an element into a flexbox?

    d-flex
