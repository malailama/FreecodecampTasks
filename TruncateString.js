function truncateString(str, num) {
  // Clear out that junk in your trunk
  if(num>=str.length){
    return str;
  }
  else if(num<str.length){
    var str1;
    if(num<3){
      str1 = str.slice(0,num);
      str1 += '...';
      return str1;
    } else if(num>=3){
      str1 = str.slice(0,num-3);
      str1 += '...';
      return str1;
    }
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
