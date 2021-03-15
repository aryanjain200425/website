var el = document.getElementById("Button");
let root = document.documentElement;
var check = false;
if(el){

    el.addEventListener('click', switchBg);

}
else{
  console.log("NOpe");
}
function switchBg(){
  if(check){
    root.style.setProperty("--bgColor", "black");
    root.style.setProperty("--textColor", "white");
    root.style.setProperty("--dropBg", "#262626");
    check = false;
  }
  else{
    root.style.setProperty("--bgColor", "white");
    root.style.setProperty("--textColor", "black");
    root.style.setProperty("--dropBg", "#eae9e7");
    check = true;
  }

}
