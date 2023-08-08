# etch-a-sketch
- A simple sketching pixel app

Still under progress:
- [x] need to create js function so when pad is drag, it changes color(maybe use the .addclass and addEventListener("mousedown"))
- [x] need to get class to keep being added to div when mouse is held down, (setting a condition for mousedown to be true and mouseup to be false) 
        - Used object to store state of mouse event
- [x] create scroll bar option to set desired grid size
        - [x] achieving this by creating an input slider, setting value to equal what chosen then make grid according to slider value
                - [x] create size value div to change according to slider
        - [x]need to set inner html to be according the grid size slider

- [x] create reset button
        - make page to reload 

- [X] need to figure out how to remove class from element using a button click
        - able to achieved this by clearing a reload grid function
        - keeping the current size set by input range in a variable 
        - reload the grid and use the current size grid as argument in makeGrid()

- [ ] edit on css a little 
        - change background color
        - remove border line in grid