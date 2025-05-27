


window.onbeforeunload = function () {
    document.querySelector('html').style.scrollBehavior = '';
    window.scrollTo(0, 0);
  }

function hoverbox(){
  var blkbox = document.getElementById("content-boxes");
  blkbox.style.zIndex = "40"
  blkbox.style.background = "white"
}

function openLinkInNewTab(url) {
  window.open(url, '_blank');
}