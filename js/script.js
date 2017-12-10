var app = new function(iconData,menuData) {

  this.firstPanel = document.getElementById('firstPanel');
  this.secondPanel = document.getElementById('secondPanel');
  this.menuPanel = document.getElementById('menuPanel');
  this.bakground = document.getElementById('container');

  // To get all main icons data from js file
  this.icons = icons;
  this.menues = menus;

  // To get icon data from user input
  this.GetData = function() {
    var firstPanelData = '';
    var secondPanelData = '';
    var menuPanelData = '';
    if (this.icons.length > 0) {
      for (i = 0; i < this.icons.length; i++) {
        if(i < 20){
            firstPanelData += '<div class="iconCont"><div><img src=' + this.icons[i].link + ' class="imagTag"';
            firstPanelData += 'width="52px" height="52px" /></div><div><span>'+ this.icons[i].name +'</span></div>';
          
            // Uncomment to view Edit and Delete feature
            // firstPanelData += '<div><span><button onclick="app.EditIcons(' + i + ')">Edit</button></span>';
            // firstPanelData += '<span><button onclick="app.DeleteIcons(' + i + ')">Delete</button></span></div>';

            firstPanelData += '</div>';
        }else {
            // data += '<div><img src='+this.icons[i]+'width="52px" height="52px />';
            secondPanelData += '<div class="iconCont"><div><img src=' + this.icons[i].link + ' class="imagTag"';
            secondPanelData += ' width="52px" height="52px" /></div>'+'<div><span>'+ this.icons[i].name +'</span></div>';
            // Uncomment to view Edit and Delete feature
            // secondPanelData += '<div><span><button onclick="app.EditIcons(' + i + ')">Edit</button></span>';
            // secondPanelData += '<span><button onclick="app.DeleteIcons(' + i + ')">Delete</button></span></div>';

            secondPanelData += '</div>';
        }
      }
    }
    if(this.menues.length > 0){
       for (i = 0; i < this.menues.length; i++) {
        menuPanelData += '<div class="iconCont" onclick="app.ShowPopUP(' + i + ') "><div><img src=' + this.menues[i].link + ' class="imagTag" width="52px" height="52px" /></div>'+'<div><span>'+ this.menues[i].name +'</span></div></div>';
      }
    }
    //this.Count(this.icons.length);
    return this.firstPanel.innerHTML = firstPanelData,this.secondPanel.innerHTML = secondPanelData, this.menuPanel.innerHTML = menuPanelData ;
  };

  // To add icon from user input
  this.AddIcons = function () {
    elNam = document.getElementById('add-iconsName');
    elLink = document.getElementById('add-iconsLink');
    var icnName = elNam.value;
    var icnLink = elLink.value;
    if (icnName && icnLink) {
      this.icons.push({"name":icnName.trim(),link:icnLink.trim()});
      console.log(this.icons)
      elNam.value = '';
      elLink.value = '';
      this.GetData();
    }
  };

  // To show icon in pop up
  this.ShowPopUP = function(index){
    document.getElementById('iconPopupPanel').style.display = 'block';
    this.popDiv = document.getElementById("popIcon");
    var popData = '';
    popData += '<div><img src=' + this.menues[index].link + ' class="imagTag" width="52px" height="52px" />'+'<div>'+this.menues[index].name+'</span></div>';
    return this.popDiv.innerHTML = popData;
  };

  // To Edit icon name and image link with proper path
  this.EditIcons = function (index) {
    var elNam = document.getElementById('edit-name');
    var elLink = document.getElementById('edit-link');
    elNam.value = this.icons[index].name;
    elLink.value = this.icons[index].link;
    document.getElementById('closeEdit').style.display = 'block';
    self = this;
    document.getElementById('saveEditIcon').onsubmit = function() {
      var nam = elNam.value;
      var link = elLink.value;
      if (nam && link) {
        self.icons[index].name = nam.trim();
        self.icons[index].link = link.trim();
        self.GetData();
        CloseInput();
      }
    }
  };

  //To delete icons
  this.DeleteIcons = function (index) {
    this.icons.splice(index, 1);
    this.GetData();
  };

  this.ChangeBackground = function() {
    var el = document.getElementById('get-background');
    var elImg = el.value;
    this.bakground.style.backgroundImage = 'url('+ elImg + ')';
    
  } 
}

// To fetch data
app.GetData(iconData, menuData);

// To close Edit inputs 
function CloseInput() {
  document.getElementById('closeEdit').style.display = 'none';
}

// To close pop up of icon
function ClosePopup() {
 document.getElementById('iconPopupPanel').style.display = 'none';
}

// For first secreen
function openFirstScreen() {
  this.firstPanel.style.display = 'block';
  this.secondPanel.style.display = 'none';
  document.getElementById('firstNav').style.pointerEvents = "none";
  document.getElementById('secNav').style.pointerEvents = "auto";
  document.getElementById('secNav').style.opacity = 0.3;
  document.getElementById('firstNav').style.opacity = 1;

}

// For second screen
function openSecondScreen() {
  this.secondPanel.style.display = 'block';
  this.firstPanel.style.display = 'none';
  document.getElementById('secNav').style.pointerEvents = "none";
  document.getElementById('firstNav').style.pointerEvents = "auto";
  document.getElementById('firstNav').style.opacity = 0.3;
  document.getElementById('secNav').style.opacity = 1;
}
