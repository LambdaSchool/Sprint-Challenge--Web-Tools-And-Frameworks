<!-- Answers to the Self Study Questions go here -->

1. How would you teach the basic ideas behind preprocessing to a friend?  Please don't copy and paste an answer here, use your own thoughts.

    Preprocessing languages like LESS provide more robust syntax for styling. Javascript then compiles this syntax into normal CSS.

2. What is the yarn command to globally install LESS?

    yarn global add less

3. What is the most useful mixin you have used this week?

    .custom-button (@width, @height, @background-color) {
        width: @width;
        height: @height;
        outline: none;
        border: none;
        cursor: pointer;
        display: block;
        position: relative;
        background-color: @background-color;
        font-size: 16px;
        font-weight: 300px;
        color: black;
        text-transform: uppercase;
        letter-spacing: 2px;
        padding: 25px 80px;
        margin: 0 auto;
        border-radius: 20px;
        box-shadow: 0 6px #EFA424;
        text-align: center;
        &:hover{
            box-shadow: 0 4px darken(#EFA424, 20%);
            background: darken(@background-color, 20%);
            top: 2px;
        }
        &:active{
            box-shadow: none;
            top: 6px;
        }
    }

4. What are the names of the 5 breakpoints used in bootstrap?

    xs, sm, md, lg, xl.

5. What is the utility class name that turns an element into a flexbox?

    .d-flex.