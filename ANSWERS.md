<!-- Answers to the Self Study Questions go here -->

1. How would you teach the basic ideas behind preprocessing to a friend?  Please don't copy and paste an answer here, use your own thoughts.
I would describe a preprocessor as a program called Less (in our instance) that allows you to write a 
short-handed version of your CSS with a few extra functions. The preprocessor (less) then "compiles" your short-hand into
traditonal CSS for your browser to read. Basically it's awesome. 

2. What is the yarn command to globally install LESS?
yarn global add less-watch-compiler

3. What is the most useful mixin you have used this week?
--syntax--
.content {
    color: #FFA500;
    font-size: 12px;
}

.content-style {
    text-align: center;
    .content;
}

4. What are the names of the 5 breakpoints used in bootstrap?
col- ==Phone
col-sm ==Tablet
col-md==Laptop
col-lg==LargeDesktop
col-xl==ExtraLarge 

5. What is the utility class name that turns an element into a flexbox?
.d-flex
