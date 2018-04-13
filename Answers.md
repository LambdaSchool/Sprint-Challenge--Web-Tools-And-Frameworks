Questions - Self Study - You can exercise your Google-Fu for this and any other Sprint Challenge in the future. Remember to record your answers in Answers.md

1.- How would you teach the basic ideas behind preprocessing to a friend? Please don't copy and paste an answer here, use your own thoughts.

    Preprocessing is a tool that allows us to save time creating a CSS file for our project,
    we can optimize our time by declaring variables and functions like any other programing language.

2.- What is the yarn command to globally install LESS?

    yarn global add less


3.- What is the most useful mixin you have used this week?

    I just started a way how to use mixin and in my last proyect help me a lot: ".hove color"


                .hover-color {
                    color: white;
                    background: @info-color;
                }

                nav {
                    a {
                        color: @info-color;
                        &:hover {
                            .hover-color;
                        }
                    }
                    .dropdown-item {
                        &:hover {
                            .hover-color;
                        }
                    }
                }


                .container {
                    max-width: 800px;
                }

                .footer {
                    .hover-color;
                }


                .nav-pills .nav-link.active, .nav-pills .show>.nav-link{
                    .hover-color;
                }


4.- What are the names of the 5 breakpoints used in bootstrap?

    xs (default)
    sm
    md

    lg
    xl


5.- What is the utility class name that turns an element into a flexbox?

    d-flex

    I use this in my Bootstrap Project II

     <!-- Use the flex utility to vertically center and move the nav to the far right of it’s container -->

        <div class="col-9 d-flex justify-content-end align-items-center">



Thanks,


Have a Nice Weekend
'Vlad' Fraga

