1. How would you teach the basic ideas behind preprocessing to a friend?
Answer:  We can define out own variables, use mixins, and nest parent and child classes or tags to make the code look less complex.
		 It increases productivity and decreases errors.
		 
2. What is the npm command to globally install LESS?
Answer: On Windows in git bash; and on MAC in the terminal: sudo npm install -g less

3. What is the most useful mixing you have used in this week?
Answer: .button-creator(@width, @height, @background-color,@hover-color, @border, @border-color) {
			width:@width;
			height:@height;
			background:@background-color;
			border: @border solid @border-color;
			&:hover{
				background-color: darken(@hover-color, 20%);
				color:white;
			}
		}
4. What are the names of the 5 breakpoints used in bootstrap?
	(i) portrait phones: <576px
	(ii)landscape phones: 576px<x<768px
	(iii)medium devices: 769px<x<992px
	(iv)desktops:993px<x<1200px
	(v)large desktops:>1201px
5.What is the utility class name that turns an element into a flexbox?
Answer: d-flex