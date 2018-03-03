1. How would you teach the basic ideas behind preprocessing to a friend? Please don't copy and paste an answer here, use your own thoughts.

    Preprocessing is when a language is converted to a different language by the preprocessor. The preprocessor takes in data from program A and produces/translates an output for program B.

2. What is the npm command to globally install LESS?

    npm install -g less

3. What is the most useful mixin you have used this week?

    ```javascript
    .border {
        border-top: solid 2px black;
        border-bottom: 1px black;  
    }
    
    footer {
        color: #cc99ff;
        .border;
    }

    .dropdown-menu {
        color: #0066ff;
        .border;
    }

    .carousel {
        color: #00e600;
        .border;
    }

    img {
        color: #ff6666;
        .border;
    }
    ```

4. What are the names of the 5 breakpoints used in bootstrap?

    xs, sm, md, lg and xl.

5. What is the utility class name that turns an element into a flexbox?

    .d-flex