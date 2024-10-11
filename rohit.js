// document.getElementById("title").innerHTML = "New Title";
// const a = document.getElementById("myDIV");
//const button = document.querySelector(".checked");
//console.log(button);

var close = document.getElementsByClassName("Close");
var i;
for(i=0;i<close.length;i++){
close[i].onclick=function(){

    var div=this.parentElement;
    div.style.display="none";
};

}



var list = document.querySelector("ul");

list.addEventListener(
"click",
function (ev) {
if(ev.target.tagName === "LI"){
    ev.target.classList.toggle("checked");

}

},
false

);

