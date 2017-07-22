
function titleCase(str) {
  var array = str.split(' ');
  var n=0;
  while(n<array.length){
  	var copy = array[n].substring(1).toLowerCase();
  	array[n] = array[n][0].toUpperCase() + copy;
    n++;
  }
  str = array.join(" ");
  return str;
}

titleCase("I'm a little tea pot");