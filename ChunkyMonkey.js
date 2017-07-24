function chunkArrayInGroups(arr, size) {
  // Break it up.
  var newArr = [];
  if(size>=arr.length){
    newArr = arr;
  }else if(size<arr.length){
    var beg = 0;
    var end = size;
    while(end<=arr.length){
      newArr.push(arr.slice(beg,end));
      beg = end;
      end = end+size;
    }
    if(beg<arr.length && end>arr.length){
      newArr.push(arr.slice(beg,arr.length));
    }
  }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);