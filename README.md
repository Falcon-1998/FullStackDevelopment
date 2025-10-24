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

text-align : Using this I was able to move google logo to center.
margin-top,bottom,right,left props can be used based to put space from other docs.
display : this is nothing but type of box your element will sit in.

Q1) AFTER ADDING width my text box moves ot the left is not coming in the center why?
Ans) You're making the .text element a fixed-width block, so the block itself stays left-aligned by default. text-align:center centers inline content inside the block, but it does not center the block. To center the box itself, either give it automatic horizontal margins or center with flexbox.

Q2) why textbox in not becoming bigger? after I make it 400px instead of 200px
Ans) Your .text container is 400px, but the input inside it keeps its own default width. Make the input fill the container.