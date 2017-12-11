(function($) {
  $.firstPanel = document.getElementById('firstPanel');
  $.secondPanel = document.getElementById('secondPanel');
  $.menuPanel = document.getElementById('menuPanel');
  $.bakground = document.getElementById('container');

  // To get all main icons data from js file
  $.icons = icons;
  $.menues = menus;

  // To get icon data from user input
  $.CreateIcons = function() {
    var firstPanelData = '';
    var secondPanelData = '';
    var menuPanelData = '';
    if ($.icons.length > 0) {
      for (i = 0; i < $.icons.length; i++) {
        if(i < 20){
            firstPanelData += '<div class="iconCont"><div><img src=' + $.icons[i].link + ' class="imagTag"';
            firstPanelData += 'width="52px" height="52px"/></div><div><span>'+ $.icons[i].name +'</span></div>';
            // Uncomment to view Edit and Delete feature
            // firstPanelData += '<div><span><button onclick="$.EditIcons(' + i + ')">Edit</button></span>';
            // firstPanelData += '<span><button onclick="$.DeleteIcons('+ i + ')">Delete</button></span></div>';
            firstPanelData += '</div>';
            document.getElementsByClassName("nav_row")[0].style.display = "none";
        }else {
            secondPanelData += '<div class="iconCont"><div><img src='+ $.icons[i].link + ' class="imagTag"';
            secondPanelData += ' width="52px" height="52px"/></div>'+'<div><span>'+ $.icons[i].name +'</span></div>';
            // Uncomment to view Edit and Delete feature
            // secondPanelData += '<div><span><button onclick="$.EditIcons(' + i + ')">Edit</button></span>';
            // secondPanelData += '<span><button onclick="$.DeleteIcons('+ i + ')">Delete</button></span></div>';
            secondPanelData += '</div>';
            document.getElementsByClassName("nav_row")[0].style.display = "block";
        }
      }
    }
    if($.menues.length > 0){
       for (i = 0; i < $.menues.length; i++) {
        menuPanelData += '<div class="iconCont" onclick="$.ShowPopUP('+ i + ') "><div>';
        menuPanelData += '<img src=' + $.menues[i].link + ' class="imagTag" width="52px" height="52px" /></div>';
        menuPanelData += '<div><span>'+ $.menues[i].name +'</span></div></div>';
      }
    }
    return $.firstPanel.innerHTML =firstPanelData,$.secondPanel.innerHTML = secondPanelData,$.menuPanel.innerHTML = menuPanelData ;
  };

  // To add icon from user input
  $.AddIcons = function () {
    elNam = document.getElementById('add-iconsName');
    elLink = document.getElementById('add-iconsLink');
    var icnName = elNam.value;
    var icnLink = elLink.value;
    if (icnName && icnLink) {
      document.getElementById("addErrorMsg").style.display = "none";
      $.icons.push({"name":icnName.trim(),link:icnLink.trim()});
      elNam.value = '';
      elLink.value = '';
      $.CreateIcons();
    } else {
      document.getElementById("addErrorMsg").style.display = "block";
    }
  };

  // To show icon in pop up
  $.ShowPopUP = function(index){
    document.getElementById('iconPopupPanel').style.display = 'block';
    $.popDiv = document.getElementById("popIcon");
    var popData = '';
    popData += '<div><img src=' + $.menues[index].link + ' class="imagTag" width="52px" height="52px"/>';
    popData += '<div>'+$.menues[index].name+'</span></div>';
    return $.popDiv.innerHTML = popData;
  };

  // To Edit icon name and image link with proper path
   $.EditIcons = function (index) {
    var elNam = document.getElementById('edit-name');
    var elLink = document.getElementById('edit-link');
    elNam.value = $.icons[index].name;
    elLink.value = $.icons[index].link;
    document.getElementById('closeEdit').style.display = 'block';
    self = $;
    document.getElementById('saveEditIcon').onsubmit = function() {
      var nam = elNam.value;
      var link = elLink.value;
      if (nam && link) {
        self.icons[index].name = nam.trim();
        self.icons[index].link = link.trim();
        self.CreateIcons();
        CloseInput();
      }
    }
  };

  //To delete icons
  $.DeleteIcons = function (index) {
    $.icons.splice(index, 1);
    $.CreateIcons();
  };

  $.ChangeBackground = function() {
    var el = document.getElementById('get-background');
    var elImg = el.value;
    if( elImg ) {
      document.getElementById("backErrorMsg").style.display = "none";
    }else {
      document.getElementById("backErrorMsg").style.display = "block";
    }
    $.bakground.style.backgroundImage = 'url('+ elImg + ')';
  }
//}
$.CreateIcons(icons,menus);
})(jQuery);

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