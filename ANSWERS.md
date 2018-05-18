<!-- Answers to the Self Study Questions go here -->

1. How would you teach the basic ideas behind preprocessing to a friend?  Please don't copy and paste an answer here, use your own thoughts.
-- A preprocessor allows you to edit css more efficiently and error-free by use of nesting, variables, mixins, functions, etc., and helps to maintain consistency throughout the page.

2. What is the yarn command to globally install LESS?
-- yarn global add less

3. What is the most useful mixin you have used this week?
-- .button (@width, @height, @color) {
	width: @width;
	height: @height;
	background: @color;
	font-size: 14px;
	color: black;
	border: @btn-border;
	.border-radius;
	margin: 20px 0;
	&:hover {
		background: darken(@color, 20%);
	}
	
}

4. What are the names of the 5 breakpoints used in bootstrap?
-- xs, sm, md, lg, xl

5. What is the utility class name that turns an element into a flexbox?
-- d-flex