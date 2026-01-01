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

/// Java Script has Started, Black-Jack game----

Box-shadow - like text-shadow, it is property for a recatangular box, (faster)
Drop- shadow :  for dynamic elements, irregular shape, (slower, need to calculate the shadow for rendering).

@media <media-type> and (<media-feature>) { // css rules to apply when conditions are met}

called At-rule OR @-rule is for responsive web design, allows different styles based on env and device. 

There are a lot of at rules. like @import -- alows you to import external css files.

@import url("styles.css");
@media screen and (max-width: 600px) {
      body {
        background-color: lightblue;
      }
    }

 all import rules must apear before any other rules in stylesheet except for @charset   


Also to get to elements of html we have learned 2 methods uptil now ::
document.getElementById , document.querySelector : returns the first matching element encountered in the DOM traversal.

bracket notation vs dot notation javascript

bracket notation is required when : the property name is not a valid JavaScript identifier (e.g., contains spaces, hyphens, or starts with a number).
OR when accessing properties dynamically, where the property name is stored in a variable or determined at runtime.


1. :active (clicked state)
:active applies styles only while an element is being pressed (e.g., mouse button is down on a button).

Often used with :hover to make buttons feel “pressed” when clicked.

Example:

css
button {
  background: #22c55e;
  box-shadow: 0 10px 24px rgba(34, 197, 94, 0.4);
}

button:active {
  transform: translateY(1px);   /* move slightly down */
  box-shadow: 0 6px 16px rgba(34, 197, 94, 0.5); /* smaller shadow */
}
2. transition (smooth change)
transition makes property changes animate over time instead of switching instantly.

Common sub‑parts (usually written together in the shorthand):

transition-property: which CSS properties should animate (background, transform, box-shadow, all, etc.).

transition-duration: how long the animation takes (0.2s, 500ms).

transition-timing-function: speed curve (ease, linear, ease-in, ease-out, cubic-bezier(...)).

transition-delay: wait time before the animation starts.

Shorthand example used for a button:

css
button {
  transition: background 0.2s ease, transform 0.1s ease, box-shadow 0.2s ease;
}
Now any change to background, transform, or box-shadow (through :hover, :active, a class change, etc.) will animate smoothly.

3. transform (move / scale / rotate / skew)
transform visually changes an element’s shape or position without affecting the layout around it.

Common transform functions:

translateX(px) / translateY(px) / translate(x, y) – move.

scale(factor) / scaleX() / scaleY() – grow or shrink.

rotate(angle) – rotate (e.g., rotate(10deg)).

skewX() / skewY() – slant.

Example: hover + active with transforms and transitions:

css
button {
  transform: translateY(0);
  transition: background 0.2s ease, transform 0.1s ease, box-shadow 0.2s ease;
}

/* mouse over: lift up a bit */
button:hover {
  background: #16a34a;
  transform: translateY(-1px);
}

/* mouse down: look pressed */
button:active {
  transform: translateY(0); /* back down */
  box-shadow: 0 6px 16px rgba(34, 197, 94, 0.5);
}
You can also combine multiple transforms:

css
.box:hover {
  transform: translateY(-5px) scale(1.05) rotate(2deg);
}
This gives you a powerful pattern:

:hover / :active define states,

transform defines how the element moves/changes,

transition makes those state changes smooth and animated.


Java Script: 

### setTimeout and clearTimeout — quick notes

- setTimeout(fn, ms) schedules `fn` to run after `ms` milliseconds and returns a timer id (in browsers a number; in Node a Timeout object).
- clearTimeout(timerId) cancels the scheduled callback associated with `timerId`.

Usage example:
```javascript
// schedule
const timerId = setTimeout(() => {
  console.log('This runs after 2 seconds');
}, 2000);

// cancel before it runs
clearTimeout(timerId);
```

Why you must pass the setTimeout return value to clearTimeout:
- The value returned by setTimeout uniquely identifies that scheduled callback. clearTimeout(timerId) removes only that specific timer.
- If you don't pass the timer id (or pass the wrong id), the intended callback will still execute. Multiple timers are independent — each needs its own id if you want to cancel them selectively.
- Common pattern (debounce): store the timer id in a variable and clear it before creating a new one so only the latest scheduled action runs.
```javascript
let debounceTimer;
function onInput() {
  clearTimeout(debounceTimer);               // cancel previous pending action
  debounceTimer = setTimeout(doSearch, 300); // schedule new one
}
```

Notes:
- In browsers the id is numeric; in Node it's a Timeout object — both are accepted by clearTimeout.
- Always keep the timer id in a scope where you can call clearTimeout when needed.

Big picture
JavaScript runtime in the browser = single-threaded call stack + host features (Web APIs) + queues + event loop.

Concurrency is simulated by delegating work to Web APIs and scheduling callbacks via queues.

Call stack
Call stack = where JS executes functions, one at a time (LIFO).

If stack is busy, nothing else runs, including setTimeout callbacks or UI updates.

Long-running code blocks everything (single-threaded == one stack).

Simple view:

text
Top   ┌───────────────┐  <- currently running function
      │   functionC   │
      ├───────────────┤
      │   functionB   │
      ├───────────────┤
Bottom│   functionA   │
      └───────────────┘
Web APIs (browser environment)
Web APIs are features provided by the browser, not JS itself.

JS calls into these APIs; they run in the browser’s own threads.

Examples:

Timers: setTimeout, setInterval

Network: fetch, XMLHttpRequest

DOM: document.querySelector, addEventListener

Misc: geolocation, localStorage, Canvas, etc.

Key idea:

text
Your JS code  --->  Browser Web APIs
          (request work; browser does it elsewhere)
Task (macro) queue and microtask queue
There are two main queues to understand:

Macro task queue (often called “task queue”)

Holds callbacks from:

setTimeout, setInterval

DOM events (click, keydown, etc.)

Some older async APIs

Microtask queue

Holds callbacks from:

Promise.then, catch, finally

queueMicrotask

Always drained before the next macro task.

Event loop
Event loop = scheduler that coordinates stack + queues.

Core rule (simplified):

If call stack is empty:

Take all microtasks (promise callbacks, etc.) and run them (one by one).

Then take one task from macro task queue and run it.

Repeat forever.

ASCII view:

text
          ┌──────────────┐
          │  Call Stack  │
          └──────┬───────┘
                 │
          Event Loop
                 │
   ┌─────────────┴─────────────┐
   │                           │
┌───────┐                  ┌──────────┐
│Micro- │                  │ Macro    │
│tasks  │                  │ tasks    │
│(Prom.)│                  │(setTimeout,
└───────┘                  │ events…) │
                           └──────────┘
Order:

text
while (true):
  if stack empty:
     run all microtasks
     take one macro task and run it
How setTimeout actually works
Pseudocode mental model:

js
setTimeout(callback, delay);
// 1. JS tells browser: "Run this callback after delay ms."
// 2. Browser timer counts time in Web API land.
// 3. When delay passes, browser pushes callback into macro task queue.
// 4. Event loop will run it ONLY when call stack is empty
//    and after all microtasks.
Diagram:

text
JS: setTimeout(cb, 1000)
      │
      ▼
  Web API (Timer)
      │   after 1000 ms
      ▼
Macro task queue: [ cb ]
      │
      ▼   (when stack empty & after microtasks)
Call stack: cb()
Important: delay is minimum wait time, not guaranteed execution time.
If stack is busy for 5 seconds, a setTimeout(..., 1000) callback runs after that, not at 1 second.

Why async tasks can be “late”
Example:

js
setTimeout(() => console.log("A"), 0);

const start = Date.now();
while (Date.now() - start < 3000) {
  // Busy loop for ~3 seconds
}

console.log("B");
Execution:

setTimeout schedules callback in Web API.

Timer finishes almost immediately, callback goes into macro task queue.

But call stack is blocked by the while loop for ~3 seconds.

Event loop cannot pull callback until stack is empty.

Output order: "B" then "A" (after the loop), even though timeout was 0.

Takeaway:

Timers are not precise; they respect call stack + event loop.

Promises vs setTimeout
Promises use microtask queue, which runs before the next timer/event.

Example:

js
console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => console.log("3"));

console.log("4");
Order:

1 (sync)

4 (sync)

3 (microtask)

2 (macro task from setTimeout)

Reason:

text
End of sync code:
- Stack empty
- Microtask queue: [promise callback]
- Macro task queue: [setTimeout callback]

Event loop:
1. Run all microtasks -> logs "3"
2. Take one macro task -> logs "2"
Web APIs vs JS engine
Clarify separation:

text
+------------------------+
|  JavaScript Engine     |
|  - Call stack          |
|  - Heap                |
+------------+-----------+
             |
             | calls into
             v
+------------------------+
|  Browser (Host)        |
|  - Web APIs (timers,   |
|    DOM, network, etc.) |
|  - Schedules tasks     |
+------------------------+
JS engine is single-threaded.

Browser Web APIs can run work concurrently (e.g., network I/O).

When Web API finishes, it schedules callbacks onto appropriate queue.

Cheat-summary (copyable)
text
- JS is single-threaded: one call stack, one thing at a time.
- Web APIs (timers, DOM, fetch) live in the browser, not in JS itself.
- setTimeout/setInterval schedule callbacks into the macro task queue
  AFTER at least the delay, not exactly at delay.
- Event loop:
  - When stack is empty:
    1. Run all microtasks (Promise callbacks, queueMicrotask).
    2. Take one macro task (setTimeout, events) and run it.
- If the stack is busy, no callbacks run, so timers and events are delayed.
- Promises (microtasks) run before timers/events (macro tasks).

JS Modules: Export/Import
Export Types
Named exports (multiple per file):

js
// Inline
export const PI = 3.14;
export function add(a, b) { return a + b; }

// Or at bottom
const PI = 3.14;
function add(a, b) { return a + b; }
export { PI, add };

// Re-export
export { PI as CircleConst } from './math.js';
Default export (one per file):

js
const defaultFunc = () => console.log("default");
export default defaultFunc;

// Or inline
export default function multiply(a, b) { return a * b; }
Import Syntax
Named imports:

js
import { add, PI } from './math.js';
// Alias with 'as'
import { add as sum, PI as RADIUS } from './math.js';
Default import:

js
import multiply from './math.js';
// Mix default + named
import multiply, { add } from './math.js';
All imports:

js
import * as MathUtils from './math.js';
MathUtils.add(1, 2); // Namespace
Quick Rules
text
- Named: export { x }, import { x }
- Default: export default x, import x
- One default per file, unlimited named
- 'as' renames: import { x as y }
- Relative paths: './file.js' (no .js extension needed in modern bundlers)
File example (math.js):

js
export const PI = 3.14;
export function add(a, b) { return a + b; }
export default function multiply(a, b) { return a * b; }
Usage (main.js):

js
import multiply, { add, PI as RADIUS } from './math.js';
console.log(add(1, 2));     // 3
console.log(multiply(2, 3)); // 6
console.log(RADIUS);         // 3.14


Arrow functions : 
const getMoneySpent = Amount => `Hey Tom , you spent ${Amount} ruppees`
 Rest Parameter  ::  function setPermissions(permissionLevel, ...names) {
    
 }