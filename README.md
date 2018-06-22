# Assessing Your Web Tools and UI Frameworks Learning

* The objective of this challenge is test your knowledge on all of the topics surrounding web tools and frameworks you learned this week.
* Answers to your written questions will be recorded in _ANSWERS.md_
* This is to be worked on alone but you can use outside resources. You can _reference_ any old code you may have and the training kit content, however, please refrain from copying and pasting any of your answers. Try and understand the question and put your responses in your own words. Be as thorough as possible when explaining something.

* **Just a friendly Reminder** Don't fret or get anxious about this, this is a no-pressure assessment that is only going to help guide you here in the near future. This is NOT a pass/fail situation.

## Start by forking and cloning this repository.
* Fork / Clone this project into a directory on your machine.
* `cd` into the root directory of your local copy.

## Questions - Self Study - You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future. Remember to record your answers in _ANSWERS.md_

1. How would you teach the basic ideas behind preprocessing to a friend?  Please don't copy and paste an answer here, use your own thoughts.
  Preprocesing is essentially gathering a group of LESS files that contain website styling in them 
  and having the preprocessor compile/form one large computer readable document. Make easier for person to organize style code, but export a format that the computer can read.

2. What is the yarn command to globally install LESS?
   yarn global add less
3. What is the most useful mixin you have used this week?
    border-radius
4. What are the names of the 5 breakpoints used in bootstrap?
  xs Extra Small
  sm Small Devices
  md Medium
  lg Large
  xl Extra Large
5. What is the utility class name that turns an element into a flexbox?
  d-flex

## Lets get started on the project
For this sprint challenge you will be building a web page from scratch for a space themed magazine called SpaceWalker.

* SpaceWalker has provided you a desktop design file that they would like their site to look similar to.  **They are not asking for pixel perfection!**
* SpaceWalker has asked that you add your own features to it after the layout is complete.  SpaceWalker has provided all the images and content that you see in the design.
* This sprint challenge is broken into four distinct parts: Preprocessing, Layout, Utilities, and Components.  You will need to complete certain tasks before others can be started.

## Prerequisites
* You must have LESS and less watch compiler installed to get this project running correctly.

## Task 1: Preprocessing
* You will notice that there are several ```.less``` files in the LESS folder.  You will need to import the files into the ```index.less``` for this project to work correctly. The order in which they must be imported is:
1. ```bootstrap.less```
2. ```variables.less```
3. ```mixins.less```
4. ```layout.less```

* After you have your ```index.less``` imports set up, run ```less-watch-compiler less css index.less``` to get your styles going.
* Notice the ```variables.less``` file has the color scheme ready to go for you.  Use these variables to match the design provided to you.
* You will notice the ```mixins.less``` file has several mixins ready to be used.  Find ways to use at least 2 of these mixins after you have laid out the site.


## Task 2: Layout
* Use the grid system to layout the content and images given to you by SpaceWalker. **You can wait to implement the carousel in Task 4: Components**
* Try to mimic the layout of the desktop design. **Do not waste time going for pixel perfect layouts in this challenge!**
* When you have the general layout complete, move on to utilities for fine tuning the spacing.

## Task 3: Utilities
* Use the spacing utilities to match the layout design.
* Use any flexbox utilities you may need to match the design.

## Task 4: Components
* Implement the carousel at the top of the content.  Make sure to include all 4 images.
* Pick one more component of your choice to implement in the project:
  - Collapse
  - Dropdowns
  - Modals
  - Tooltips
  - Scrollspy
  - Navbar

* Once you're done with all four tasks, push your commits to your fork and submit a Pull-Request

**Stretch Tasks**
* Use the utility spacer classes to make the design look great on phones, tablets, and desktops.
* Try to find a way to implement ALL of the components into your site.

### Remember you can use any resources you want to solve these problems, but avoid copying/pasting solutions you've previously written. Also if you don't finish all of the challenges, that's fine! Just do what you can and submit your challenges in the end! HAVE FUN!
