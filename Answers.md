Sprint-Challenge--Web-Tools-And-Frameworks:

1. How would you teach the basic ideas behind preprocessing to a friend? Please don't copy and paste an answer here, use your own thoughts.

    Preprocessing is a way for making work in CSS quicker and more readable. We utilize Preprocessors which adds features and capabilities that were not originally available in CSS. There are several preprocessor languages/syntax but we are currently using LESS. LESS allows us to compile whatever we have declared in the LESS file into CSS.  


2. What is the yarn command to globally install LESS?
    First step is to install Yarn on one's computer. After it's installed, we open Git Bash and run this command to globally install LESS:     
                                yarn global add less

    But it does not end there. It is important that we activate the Less Watch Compiler which will compile the LESS file into CSS. To do that, this is the command in Git Bash: 
                                
                                less-watch-compiler less css index.less 

3. What is the most useful mixin you have used this week?
    I liked the two mixins in one of the given task: 

    .border-radius (@radius: 5px) {
	    -webkit-border-radius: @radius;
	    -moz-border-radius:    @radius;
	    border-radius:         @radius;

	    -moz-background-clip:    padding;
	    -webkit-background-clip: padding-box;
	    background-clip:         padding-box;
    }

    .opacity (@opacity: 0.5) {
	    -webkit-opacity: 	@opacity;
	    -moz-opacity: 		@opacity;
	    opacity: 		    @opacity;
    }       


4. What are the names of the 5 breakpoints used in bootstrap?
    The 5 breakpoints in bootstrap are the following: 
        - Extra small (<576px)
        - Small (≥576px)
        - Medium (≥768px)
        - Large (≥992px)
        - Extra Large (≥1200px)

5. What is the utility class name that turns an element into a flexbox?
    The Display property is the utility class that turns an element into a flexbox. 