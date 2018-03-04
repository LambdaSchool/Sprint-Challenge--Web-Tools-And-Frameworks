1. How would you teach the basic ideas behind preprocessing to a friend? Please don't copy and paste an answer here, use your own thoughts.

- Preprocessing can be compared to high level programming languages and compling in computer programming.
- Like high level programming languages, less files are more readable than CSS.
- User can write less files quickly and then use pre-processing tools to compile(convert) files to css. This reduces significant amount of development time.

2. What is the npm command to globally install LESS?

```sh
  npm install -g less
```

3. What is the most useful mixin you have used this week?

- skew mixin
```css
  .skew (@deg, @deg2) {
	-webkit-transform:       skew(@deg, @deg2);
	-moz-transform: 	 skew(@deg, @deg2);
	-ms-transform: 		 skew(@deg, @deg2);
	-o-transform: 		 skew(@deg, @deg2);
}
```
4. What are the names of the 5 breakpoints used in bootstrap?

- xs, sm, md, lg, xl 

5. What is the utility class name that turns an element into a flexbox?

- d-flex
