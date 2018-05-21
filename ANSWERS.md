<!-- Answers to the Self Study Questions go here -->

1. How would you teach the basic ideas behind preprocessing to a friend?  Please don't copy and paste an answer here, use your own thoughts.
2. What is the yarn command to globally install LESS?
3. What is the most useful mixin you have used this week?
4. What are the names of the 5 breakpoints used in bootstrap?
5. What is the utility class name that turns an element into a flexbox?

<br>

1. Preprocessing makes writing CSS a bit easier. You can organize your code structure similar to the HTML structure, including separate files, so it is easier to read and keep organized. You can have variables, so making one change can affect the entire page. You can use mixins, which add various functionality and styles to your components. Namespace is a place where you can stash your mixins and other styles without having to worry about having duplicate names for similar items.


2. `yarn global add less`

3. I made a button mixin
    ``` less
    .cool-button (@width, @height, @bg-color) {
      width: @width;
      height: @height;
      background-color: @bg-color;

      border: 1px double @base-color;
      color: @base-color;
      font-size: 1.2rem;
      margin-top: 5px;
      margin-left: calc((100% - @width) / 2);
      cursor: pointer;

      .border-radius(10px);
      
      &:hover {
        background: darken(@base-color, 20%);
        .box-shadow(~"5px 10px 18px", @base-color);
        color:  @inverted-base-color;
      }
    }
    ```

4. xs (default), sm, md, lg, xl

5. `d-flex`