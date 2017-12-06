var app = new function() {
  this.icnDiv = document.getElementById('icons');
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
  this.icons = 
  [{"name":"Developer","link":"./images/icons/Developer.png"},
  {"name":"Calculator","link":"./images/icons/Calculator.png"},
  {"name":"FaceTime","link":"./images/icons/FaceTime.png"}, 
  {"name":"EasyFind","link":"./images/icons/EasyFind.png"}, 
  {"name":"Calender","link":"./images/icons/Calendar.png"}, 
  {"name":"Cobook","link":"./images/icons/Cobook.png"}, 
  {"name":"CandyBar","link":"./images/icons/CandyBar.png"},
  {"name":"Compass","link":"./images/icons/Compass.png"},
  {"name":"Users","link":"./images/icons/Users.png"},
  {"name":"Developer","link":"./images/icons/Developer.png"},
  
  {"name":"Downloads","link":"./images/icons/Downloads.png"},
  {"name":"Finder","link":"./images/icons/Finder.png"}, 
  {"name":"Doo","link":"./images/icons/Doo.png"}, 
  {"name":"Dictionary","link":"./images/icons/Dictionary.png"}, 
  {"name":"Contacts","link":"./images/icons/Contacts.png"}, 
  {"name":"InDesign","link":"./images/icons/InDesign.png"},
  {"name":"Camera","link":"./images/icons/Camera.png"},
  {"name":"CloudApp","link":"./images/icons/CloudApp.png"},
  {"name":"Notes","link":"./images/icons/Notes.png"},
  {"name":"Music","link":"./images/icons/Music.png"},
  {"name":"Passbook","link":"./images/icons/Passbook.png"}, 
  {"name":"Photoshop","link":"./images/icons/Photoshop.png"}];
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
  
  this.GetData = function() {
    var data = '';
    if (this.icons.length > 0) {
      for (i = 0; i < this.icons.length; i++) {
        //data += '<div><img src='+this.icons[i]+'width="52px" height="52px />';
        data += '<div><img src=' + this.icons[i].link + ' class="imagTag" width="52px" height="52px" />'+'<span>'+this.icons[i].name+'</span></div>';
        // data += '<span><button onclick="app.Edit(' + i + ')">Edit</button></span>';
        // data += '<span><button onclick="app.Delete(' + i + ')">Delete</button></span>';
      }
    }
    this.Count(this.icons.length);
    return this.icnDiv.innerHTML = data;
  };
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
  this.DeleteIcons = function (item) {
    this.icons.splice(item, 1);
    this.GetData();
  };
  
}
app.GetData();
function CloseInput() {
  document.getElementById('spoiler').style.display = 'none';
}