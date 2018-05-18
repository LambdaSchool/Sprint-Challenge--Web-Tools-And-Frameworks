<!-- Answers to the Self Study Questions go here -->

1. How would you teach the basic ideas behind preprocessing to a friend?  Please don't copy and paste an answer here, use your own thoughts.

*Any course in preprocessing should begin with thorough lesson/understanding of
CSS. Once that is obtained, I would challenge my friend to think about what
makes CSS inefficient and bloated; among other things, media queries and
children selectors can get quite far from their parent selectors. Then I challenge
them to remember nesting from HTML and think about how we could use it in CSS,
this leads to the concept of preprocessor nesting. Similarly my friend and I can
think about the inefficiency in property values and how we could counteract
that (i.e. with variables) and similarly the inefficiency of entire property/value
groups and how we could counteract that (i.e. with mixins and escaping) basically
a lesson in preprocessors centers around how CSS could be made more efficient, we
brainstorm ideas and find that those ideas do or most likely do correspond to
preprocessor capabilities.*

2. What is the yarn command to globally install LESS?

*yarn global add less-watch-compiler*

3. What is the most useful mixin you have used this week?

*This week has involved a lot of column-based flexbox and so...
.display-column-flex {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

...has been most useful. In practice I have had to change the justify content
property a few times, I chose to simply overwrite it with top-down specificity
after my mixin declaration, but I could've similarly wrote multiple display: flex
rules into my mixin then used escaping to choose whichever I needed for a given
situation.*

4. What are the names of the 5 breakpoints used in bootstrap?
*xs sm md lg xl*

5. What is the utility class name that turns an element into a flexbox?

*.d-flex*
