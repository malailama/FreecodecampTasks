function largestOfFour(arr) {
  // You can do this!
  var indexOut = 0;
  while(indexOut<arr.length){
    var largest = arr[indexOut][0];
    var indexIn = 0;
    while(indexIn<arr[indexOut].length){
      if(arr[indexOut][indexIn]>largest){
        largest = arr[indexOut][indexIn];
      }
      indexIn++;
    }
    arr[indexOut] = largest;
    console.log(largest);
    indexOut++;
  }
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);