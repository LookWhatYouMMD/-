function init(){
  var obj = document.getElementById("title");
  alert(obj.innerHTML);
  obj.innerHTML = "GOODBYE WORLD!!"
  obj.setAttribute('class','tit');
  picobj.getAttribute('alt');
}

function changePicture(){
  picobj.setAttribute('scr','2.jpg');
}
window.onload = init;
document.getElementById('title').innerHTML=a.getAttribute('666')