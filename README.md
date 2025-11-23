This is a tutorial repo for my course
Notes : 
1) image tag :  <img id="This is a unique identifier for this object in entire document"src="source/path of the image" width ="" height="" alt="alternate This is a description of image, when it is not displayed due to some error">

---
## Industry Standard Frontend Project Reference

### 1. File Structure

```
project-root/
│
├── public/                # Static assets (images, fonts, favicon, etc.)
│   ├── images/
│   └── ...
│
├── src/                   # Source code
│   ├── index.html         # Main HTML file
│   ├── styles/            # CSS/SASS files
│   │   └── main.css
│   ├── scripts/           # JS files
│   │   └── app.js
│   └── components/        # Reusable HTML/JS/CSS components (optional)
│
├── package.json           # Project metadata & dependencies (for npm projects)
└── README.md              # Project documentation
```

### 2. Naming Conventions

- **Files:**  
    - HTML: `index.html`, `about.html`
    - CSS: `main.css`, `navbar.css`
    - JS: `app.js`, `scoreboard.js`
- **Folders:**  
    - Lowercase, hyphen-separated: `score-board`, `user-profile`
- **Classes/IDs:**  
    - CSS classes: `score-display`, `score-btn` (kebab-case)
    - JS variables: `homeScore`, `guestScore` (camelCase)
- **Components:**  
    - React: `ScoreBoard.jsx`, `HomePage.jsx` (PascalCase)

### 3. Code Quality & Cleanliness

**Parameters to judge frontend code:**
- Separation of concerns: HTML, CSS, JS in separate files.
- Modularity: Reusable components/functions.
- Naming: Clear, consistent, descriptive names.
- Accessibility: Use semantic HTML, ARIA attributes.
- Responsiveness: Works on all screen sizes.
- Performance: Minimize DOM manipulation, optimize assets.
- Consistency: Use a style guide (Prettier, ESLint).
- Documentation: Comments, README, code docs.
- Testing: Unit/integration tests (Jest, Cypress).
- Version control: Use Git, meaningful commit messages.

### 4. How to Make Code Cleaner

- Use linters: ESLint for JS, Stylelint for CSS.
- Prettify code: Use Prettier for formatting.
- Avoid inline styles/scripts: Use external files.
- DRY principle: Don’t Repeat Yourself—reuse code.
- Comment wisely: Explain “why”, not “what”.
- Remove dead code: Delete unused files/functions.
- Follow a style guide: Airbnb, Google, or your team’s.

### 5. Standard Rules/Best Practices

- Semantic HTML: Use `<header>`, `<main>`, `<footer>`, etc.
- BEM for CSS: Block__Element--Modifier naming.
- Accessibility: Alt text for images, keyboard navigation.
- Mobile-first: Design for small screens first.
- Optimize assets: Compress images, minify CSS/JS.
- Use frameworks/libraries: React, Vue, Angular for large projects.
- Automate builds: Use Webpack, Vite, Parcel.

---
**Summary:**  
A good frontend project is modular, readable, maintainable, accessible, and performant.  
Follow separation of concerns, use clear naming, document your code, and automate quality checks.
# FullStackDevelopment
This is a tutorial repo for my course
Notes : 
1) image tag :  <img id="This is a unique identifier for this object in entire document"src="source/path of the image" width ="" height="" alt="alternate This is a description of image, when it is not displayed due to some error">

2) div tag : <div id="unique id in the entire doc" style="usually CSS, quick styling of whatever inside"  desc="This tag is for grouping elements under one node">

3) input tag : <input type="what type of input : text, upload image, pass" placeholder="whatever is written in grey">

4) button tag : <button onClick="you can write javascript logic here also can call a method here">Name_of_button</button> 

5) script tag: <script src="path of the script"></script>

6) anchor tag : <a href="hyperreference, which is nothing but address of the main link or webadress " target="_blank --this means a new tab will open when you click on the link ">  Whatever text you want to write to appear as a link</a>

--- Structure in an html page
7) Head : <head></head> This contains metadata about the page like language, stylesheet links and other injectors in a page
8) Body : <body></body> Eveything is written here all your tags.
9) html tag : html tag for the whole document, also <!doctype html> to tell we use html5
I have completed first 30 mins of this course by the second commit

10) ol = ordered list ul = unordered list :
    <ol>  <li></li> </ol>.   li is List Item
11) I have signed in on the Netlify.com which is a site that deploys your webprojects to be seen anywhere from the world.    
I have completed first 60 mins of this course by the second commit

CSS : 
<link rel="stylesheet" href="styles.css">
link tag : it is used to link other resources to your webpage mainly css, but can do other stuff
rel = defines natuure of relationship of  linked document (in this case css) to our document
href = where the resource is, path, location.
 
body { } Inside this block in a css file you can configure the stlyes for the body tag

class property : [Most used one] you can assign any div or inp, button, label a class tag and then can set properties for that class.

line-height :  recongnized by more browsers than this one.
text-align : Using this I was able to move google logo to center.
margin-top,bottom,right,left props can be used based to put space from other docs.
margins collapse onto each other
display : this is nothing but type of box your element will sit in.
 display-inline means you can add an element next to your element like a horizontal list
 display-block takes up all the space inside that div.

Q1) AFTER ADDING width my text box moves ot the left is not coming in the center why?
Ans) You're making the .text element a fixed-width block, so the block itself stays left-aligned by default. text-align:center centers inline content inside the block, but it does not center the block. To center the box itself, either give it automatic horizontal margins or center with flexbox.

Q2) why textbox in not becoming bigger? after I make it 400px instead of 200px
Ans) Your .text container is 400px, but the input inside it keeps its own default width. Make the input fill the container.

Q3) How to center an element?
Ans)     display: block;   // first thing is you need the whole block inside the div [div in which you want to center]
         margin-left: auto;
         margin-right: auto;
         
Padding : close relative of margin, it is margin for the things inside a div means, margin inversed. padding will add space inbetween the div and it's elements.  
The Box Model : 
1) Margin       2) Border       3) Padding      4) Content 

difference b/w background-color and color
color referes to color of text and objects inside that div.

font-weight = controls thickness of your text.
border-radius = making it circular
border : set the thicknessof boder colorofBorder

FlexBox :  Why do I need flexbox ---
 the above trick to center the elements will not work if you have two inline elements, they will move to the left
Two ways to take them to center ; using text-align -- it is not flexible OR use a flexbox
 Use : .buttons {
      display: flex; // for flexbox
      flex-direction: row;
      justify-content: center; // centers children horizontally
      align-items: center // centers children vertically
      gap: 20px; // decides gap between items can be used insted of margin which you will have to set for each element.``    
    }
    This flex-direction is also useful.

Now Remember if you see elements are not fixing right, like they have too much space in between (horizontally or vertically) then 
check for margins and padding, see if it is not automatic, You should be assigning it.


margin : top right left right
paddding : top right left right
margin : t/b l/r
same for padding :: This is for saving lines of code


SPACE EXPLORATION SITE

1)  background-image: url("../../Pictures/guillermo-ferla-Oze6U2m1oYU-unsplash.jpg"); 
     TO get the background image in the 
     background-size : cover ;  to contain the image.
2) Using fonts ::: 
  Now you can use font-family property to set the font
  font-weight sets bold, other stuff
  If you want to use custom fonts, you need their tff files
  and then you need to to @font-face like this ::
     @font-face{
      src : url(""Corolene.tff); // location to tff file, must download
      font-family : Corlene ;  // you can give name to your font family 
      // This all are in the css file
     }
3) Inherit tag : border : inherit , padding : inherit    
4) span tag :: unlike div it takes on the required space

5) id vs class :: id is used when we are sure we use it only once, but classes can be reused.
you can use both, every property of class will be overriden by id.
Resources ::: Giphy.com for gifs and Cooler for finding colors.
6) Text Shadow :-- text-shadow : -5px 5px black
                (left-right) x-axis   (up-down) y    blur   color of shadow1

7) justify-content vs align-items in flexbox : one is horizontal align other is vertical
    justfy-content : start, center, end, space-around, space-evenely, space-inbetween
    align-items : start, center, end
8) If you change the flex direction from row to column, then jusify-content --> vertical. , align-items --> horizontal , SO inversion occurs


Birthday Card ::::

1) Put the topmost section in the center using display = flex, flex-direction=column, and align-items: center. 



