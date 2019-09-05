/* 
happens to be in js (and prefer to also answer in js), 
but its upto you if you would like to rewrite this using any other language
*/

function setTitle(s) {
  var splitted = s.split(' ');
  var arr = [];
  splitted.forEach((x)=>arr.push(x[0].toUpperCase() + x.substring(1)));
  
  return arr.join(' ');
}