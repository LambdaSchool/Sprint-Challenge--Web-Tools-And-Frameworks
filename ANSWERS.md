<!-- Answers to the Self Study Questions go here -->

1. How would you teach the basic ideas behind preprocessing to a friend?  Please don't copy and paste an answer here, use your own thoughts.

Preprocessing enables web developers to more efficiently and effectively style a website.  A preprocessor takes some instructions and runs them through a sort of engine and creates a sheet of styles to complete the design of a website (color scheme, layout, font and general appearance)  Another benefit of preprocessing is that it allows for more organized documentation and this allows multiple developers to work more effectively together.

2. What is the yarn command to globally install LESS?

To globally install yarn, you would run this command in your terminal:

  $ yarn global add less

3. What is the most useful mixin you have used this week?

Centering mixins that do

  justify-content:  center  
  align-items: center

are very useful and timesaving.

I also thought that the custom button mixin was very useful.  It was immediately obvious to me why it makes sense to invest time and effort into building a mixin that can be used nearly effortlessly over an over again throughout a website.  This is a huge plus for productivity.

4. What are the names of the 5 breakpoints used in bootstrap?

		a. Extra small devices (smart watches?) have a max-width setting of 575.98px
		b. Small devices (phones) have a min-width setting of 576px
		c. Medium devices (tablets and small desktops) have a min-width setting of 768px
		d. Large devices (normal to large desktops) have a min-width setting of 992px
		e. Extra large devices (large desktops) have a min-width setting of 1200px

This breakpoints are specified with a media take in the CSS:

@media(min-width: ____) so that styles can be uniquely applied to each type of device in order to optimize user experience.

5. What is the utility class name that turns an element into a flexbox?

The utility class that turns an element into a flexbox is "d-flex" 
