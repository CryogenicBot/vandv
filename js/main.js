var isScrolling = false;
var isSidebarFrozen = false;
var sidebars;

function init (){
  sidebars = document.getElementsByClassName('sidebar-content-wrapper');
}

function windowScroll(){
  setTimeout(checkSideBar,0);
}

function lockSidebars(){
  for(var i = 0; i < sidebars.length; ++i){
    sidebars[i].className = sidebars[i].className + ' sidebar-fixed';
  }
  console.log(sidebars);
}

function unlockSidebars(){
  for(var i = 0; i < sidebars.length; ++i){
    var className = sidebars[i].className;
    sidebars[i].className = className.replace( /(?:^|\s)sidebar-fixed(?!\S)/g , '' );
  }
  console.log(sidebars);
}

function checkSideBar(){
  if(window.scrollY > 70 && !isSidebarFrozen){
    console.log('freeze sidebar');
    isSidebarFrozen = true;
    lockSidebars();
  }else if(window.scrollY <= 70 && isSidebarFrozen){
    console.log('unfreeze sidebar');
    isSidebarFrozen = false;
    unlockSidebars();
  }
  isScrolling = false;
}

window.onload = init;
window.onscroll = windowScroll;
window.onwheel = windowScroll;
