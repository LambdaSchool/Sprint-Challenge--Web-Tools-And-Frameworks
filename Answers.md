## Questions/Answers

1. How would you teach the basic ideas behind preprocessing to a friend?  Please don't copy and paste an answer here, use your own thoughts.

      Preprocessing is a better way to write, maintain and organize your CSS. For those familiar with other programming languages, preprocessors are easier to understand and utilize syntax for variables, operators, functions, mixins and nesting that allow you to visualize the relationships between your CSS selectors in an easy to see format as well as create reusuable snippets. All of this compiles down to raw CSS.

2. What is the yarn command to globally install LESS?

        yarn global add less

3. What is the most useful mixin you have used this week?

        .border-radius (@radius: 5px) {
          -webkit-border-radius: @radius;
          -moz-border-radius:    @radius;
          border-radius:         @radius;

          -moz-background-clip:    padding;
          -webkit-background-clip: padding-box;
          background-clip:         padding-box;
        }

4. What are the names of the 5 breakpoints used in bootstrap?

    + Extra small or col
    + Small or col-sm
    + Medium or col-md
    + Large or col-lg
    + Extra Large or col-xl

5. What is the utility class name that turns an element into a flexbox?

        d-flex