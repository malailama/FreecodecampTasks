function repeatStringNumTimes(str, num) {
  // repeat after me
  var base = str;
  if(num<0){
    console.log(num);
    str = '';
  }
  else {
    var i = 1;
    while(i<num){
      str = str+base;
      i++;
    }
  }
  console.log("Result: "+str);
  return str;
}

repeatStringNumTimes("abc", 3);
