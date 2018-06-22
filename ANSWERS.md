<!-- Answers to the Self Study Questions go here -->

1. How would you teach the basic ideas behind preprocessing to a friend?  Please don't copy and paste an answer here, use your own thoughts.

I would compare it to pre-made ingredients to make for a meal. CSS code from scratch are the raw ingredients (probably mostly spices) you have to source and know how to put together for a dish to make it taste correctly. 

The dish is the canvas and your white space in your files is the same. 

Instead of sourcing ingredients each by themselves, and buying spices by the bottle, you go to the bulk section and only get what you need or buy pre-made spice combinations which is basically what you're doing with pre-processing.

It takes out the larger part of the guesswork such as measurement and knowing the taste profile and instead gives you things to cook with/build with in a more efficient workflow. 

Instead of killing yourself over which spices to use, you just buy pre-made spice packs, or assembling them yourself from the bulk section instead of buying bottles, you have more control over reference material.

Preprocessing is basically like the Dewey Decimal system for your library but instead for your code in your project. It helps keep naming/profiling easier. 


2. What is the yarn command to globally install LESS?

yarn global add less

3. What is the most useful mixin you have used this week?
//

.max-breakpoint(@size, @content) {
  @media only screen and (max-width: @size + px) { @content(); }
}

//

4. What are the names of the 5 breakpoints used in bootstrap?

.col- (extra small devices - screen width less than 576px)
.col-sm- (small devices - screen width equal to or greater than 576px)
.col-md- (medium devices - screen width equal to or greater than 768px)
.col-lg- (large devices - screen width equal to or greater than 992px)
.col-xl- (xlarge devices - screen width equal to or greater than 1200px)

5. What is the utility class name that turns an element into a flexbox?

.d-flex and .d-inline-flex.