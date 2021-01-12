function getel(e){
  return document.querySelector(this.e);
}
function detect(ev = "click",e = document, f = function(){console.log(ev + "Has Been Fired!")}){
    e.addEventListener(ev, f);
}
