function init(){
  var obj = document.getElementById("title");
  alert(obj.innerHTML);
  obj.innerHTML = "GOODBYE WORLD!!"
}
window.onload = init;