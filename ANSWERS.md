<!-- Answers to the Self Study Questions go here -->

1. How would you teach the basic ideas behind preprocessing to a friend?  Please don't copy and paste an answer here, use your own thoughts.
    A: I actually talked with my older brother about this same question earlier. The way that I described the basic ideas behind preprocessing were to let them know that preprocessing enables us to write in a way that's either more familiar or streamlined for the same effect (so, making things more efficient). Afterwards, the way that we wrote gets compiled, or translated, into the appropriate language that we need it to be functional.

    Why wouldn't we just write it in the language that it ends up being used as? Well, preprocessing enables us to access features of efficient writing and file management that are otherwise unavailable to us in the same ways. Making our own shorthand and consistently declaring different variables and classes that contain certain methods (which could potentially be 5+ lines) allow us to call those same properties and values with only a single line each, making our code easier to humanly read, too. 

2. What is the yarn command to globally install LESS?
    A: yarn global add less

3. What is the most useful mixin you have used this week?
    A: For me, I'd have to say a tie between .opacity and .border-radius for the most useful mixin that I've used this week.

    I enjoyed learning more about border-radius and made it usable for myself as follows:

    .custom-border-radius(@tl,@tr,@br,@bl) {
        border-top-left-radius: @tl;
        border-top-right-radius: @tr;
        border-bottom-right-radius: @br;
        border-bottom-left-radius: @bl;
    }

    And for opacity, I'm interested in learning more about using transparent PNGs in tandem with parallax to make interesting designs. Controlling opacity on things like &:hover for the parent element gave me more to think about working with.

4. What are the names of the 5 breakpoints used in bootstrap?
    A: 
        xs - Extra small (<576px)
        sm - Small (>=576px)
        md - Medium (>= 768px)
        lg - Large (>= 992px)
        xl - Extra Large (>= 1200px)


5. What is the utility class name that turns an element into a flexbox?
    A: d-flex
