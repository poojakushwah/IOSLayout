# IOSLayout
An IOS based responsive demo application supporting desktop, ipad and iphone.
It consist of icons with their name and image. It has 5 icons in 4
rows in horizontal and 4 icons in 5 rows in vertical mode. It also
have 4 icons in the menu panel. It also has navigation buttons for changing screens.
It allows to do some basic operations.

# Libraries 
  * jQuery 3.2.1
  * jQuery UI 1.12.1
   
# Features
 It has following features:-
* UI changes as per the screen size horizontally and vertically.
* An icon can be dragged.
* Icon in menu items are clickable. A popup box pop up when menu
    icon is clicked.
* We can change screen with navigation button present at bottom.
* Menu panel changes its position on vertical and horizontal of iphone.
* Runtime Add, Edit, Delete and change background  operations can be
     performed with following functions:-
    - To Add icon data - AddIcons()
    - To Edit icon data - EditIcons()
    - To Delete icon data - DeleteIcons()
    - To Change background Image - ChangeBackground() 
* Currently, Icon data is coming from iconData.js file. You can
   change data  data at one place and update them as you want.

# Steps for test Add, edit, delete and change background operations
* Uncomment all line of code in div as class "practiceData" from index.html.
* Uncomment all line of code which has EditIcons and DeleteIcons on
    onclick of div in script.js
* You can see Add Icon and Change background related html on top left position
   of window screen.
* To add icon, You can enter name like "clock" and image as relative path
    for eg. "./images/icons/Clock.png" in input fields under Add icon label.
* To edit icon, You would be able see edit button under each icon.
   After clicking, you can see two pre filled  input fields.
   You can update name and icon image with relative path.
* To delete icon, you can simply click on delete button present under icons.
* To change background, You can pass relative image path for eg.
    "./images/icons/Developer.png" in input field under change background label.

# Tested browsers
  - Google Chrome version 63.0
  - Mozilla firefox version 57.0
  - Microsoft Edge version 40.150
  - Safari  version 5.1.7
  
