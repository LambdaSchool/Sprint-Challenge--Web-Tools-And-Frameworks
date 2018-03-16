How would you teach the basic ideas behind preprocessing to a friend? Please don't copy and paste an answer here, use your own thoughts.
    -Preprocessing is about making your work more efficient, giving you tools to be more productive and achieving more in LESS time by making the process much easier and accessible. It works by using a tool like LESS that "translates" much more simplified input and instruction and ouputs them into a CSS file.

What is the npm command to globally install LESS?
    - npm install -g less

What is the most useful mixin you have used this week?
    - .b1{
        margin-top : 20px;
	    display: inline-block;
	    color: white;
	    font-size: 15px;
	    width: 200px;
	    height: 20px;
	    background-color: rgb(86, 235, 17);
	    text-align: center;
        padding: 0 20px 20px 20px;
        
	    &:hover {
            background-color: darken(rgb(86, 235, 17), 20%);
            .skew(11deg, 11deg);
	    }

What are the names of the 5 breakpoints used in bootstrap?
    - xs (extra small), sm (small), md (medium), lg (large) and xl (extra large).

What is the utility class name that turns an element into a flexbox?
    - d-flex.