var app = new function(iconData) {

  this.firstPanel = document.getElementById('firstPanel');
  this.secondPanel = document.getElementById('secondPanel');
  // Conditions to detect devices
  window.onresize = function(event) {
    if (window.matchMedia( "(min-width: 1024px)" ).matches) {
      //alert("ipad hor")
    }else if (window.matchMedia( "(max-width: 1023px) and (min-width: 768px)" ).matches) {
      //alert("ipad ver")
    }else if (window.matchMedia( "(max-width: 767px) and (min-width: 568px)" ).matches) {
      //alert("iphine hor")
    }else if (window.matchMedia( "(max-width: 567px) and (min-width: 320px)" ).matches) {
      //alert("iphone ver")
    }
  };

  // To get all data from js file
  this.icons = icons;

  // To get icons count
  this.Count = function(data) {
    var el   = document.getElementById('counter');
    var name = 'icons';
    if (data) {
      if (data > 1) {
        name = 'icons';
      }
      el.innerHTML = data + ' ' + name ;
    } else {
      el.innerHTML = 'No ' + name;
    }
  };

  // To get icon data from user input
  this.GetData = function() {
    var firstPanelData = '';
    var secondPanelData = '';
    if (this.icons.length > 0) {
      for (i = 0; i < this.icons.length; i++) {
        if(i < 20){
          //data += '<div><img src='+this.icons[i]+'width="52px" height="52px />';
          firstPanelData += '<div class="iconCont" onclick="app.ShowPopUP(' + i + ') "><img src=' + this.icons[i].link + ' class="imagTag" width="52px" height="52px" />'+'<span>'+this.icons[i].name+'</span></div>';
          // data += '<span><button onclick="app.Edit(' + i + ')">Edit</button></span>';
          // data += '<span><button onclick="app.Delete(' + i + ')">Delete</button></span>';
        }else {
           //data += '<div><img src='+this.icons[i]+'width="52px" height="52px />';
          secondPanelData += '<div class="iconCont" onclick="app.ShowPopUP(' + i + ') "><img src=' + this.icons[i].link + ' class="imagTag" width="52px" height="52px" />'+'<span>'+this.icons[i].name+'</span></div>';
          // data += '<span><button onclick="app.Edit(' + i + ')">Edit</button></span>';
          // data += '<span><button onclick="app.Delete(' + i + ')">Delete</button></span>';
        }
      }
    }
    //this.Count(this.icons.length);
    return this.firstPanel.innerHTML = firstPanelData,this.secondPanel.innerHTML = secondPanelData;
  };

  // To add icon from user input
  this.AddIcons = function () {
    el = document.getElementById('add-icons');
    var icn = el.value;
    if (icn) {
      this.icons.push({"name":icn.trim(),link:icn.trim()});
      console.log(this.icons)
      el.value = '';
      this.GetData();
    }
  };

  // To show icon in pop up
  this.ShowPopUP = function(index){
    document.getElementById('iconPopupPanel').style.display = 'block';
    this.popDiv = document.getElementById("popIcon");
    var popData = '';
    popData += '<div><img src=' + this.icons[index].link + ' class="imagTag" width="52px" height="52px" />'+'<div>'+this.icons[index].name+'</span></div>';
    return this.popDiv.innerHTML = popData;
  };

  // To Edit icon name and image link with proper path
  this.EditIcons = function (item) {
    var el = document.getElementById('edit-icons');
    el.value = this.icons[item];
    document.getElementById('spoiler').style.display = 'block';
    self = this;
    document.getElementById('saveEditIcon').onsubmit = function() {
      var icn = el.value;
      if (icn) {
        self.icons.splice(item, 1, icn.trim());
        self.GetData();
        CloseInput();
      }
    }
  };

  //To delete icons
  this.DeleteIcons = function (item) {
    this.icons.splice(item, 1);
    this.GetData();
  }; 
}

// To fetch data
app.GetData(iconData);

// To close Edit inputs 
function CloseInput() {
  document.getElementById('spoiler').style.display = 'none';
}

// To close pop up of icon
function ClosePopup() {
 document.getElementById('iconPopupPanel').style.display = 'none';
}

//
function openFirstScreen() {
  console.log("first")
  this.firstPanel.style.display = 'block';
  this.secondPanel.style.display = 'none';
}

//
function openSecondScreen() {
  console.log("second")
  this.secondPanel.style.display = 'block';
  this.firstPanel.style.display = 'none';
}