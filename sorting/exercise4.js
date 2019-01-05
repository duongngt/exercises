var numlist = [1, 4, 6, 9, 3, 7, 8, 5, 2, 0];
var loop = numlist.length;
var temp;
//Bubble Sort
function bubbleSort() {
   var i;
   var j;
   for (i = 0; i < loop - 1; i++) {
      swapped = false;
      for (j = 0; j < loop - 1 - i; j++) {
         if (numlist[j] > numlist[j + 1]) {
            temp = numlist[j];
            numlist[j] = numlist[j + 1];
            numlist[j + 1] = temp;
            swapped = true;
         }
      }
      if (!swapped) {
         break;
      }
   }
   return numlist
}
console.log('bubble Sort: ' + bubbleSort());

//Insertion Sort
function insertionSort() {
   var holePosition;
   var valueToInsert;
   var i;
   for (i = 1; i < loop; i++) {
      valueToInsert = numlist[i];
      holePosition = i;
      while (holePosition > 0 && numlist[holePosition - 1] > valueToInsert) {
         temp = valueToInsert;
         valueToInsert = numlist[holePosition - 1];
         numlist[holePosition - 1] = temp;
         holePosition--;
      }
      if (holePosition != i) {
         numlist[holePosition] = valueToInsert;
      }
   }
   return numlist;
}
console.log('insertion Sort: ' + insertionSort());


//Selection Sort
function selectionSort() {
   var indexMin, i, j;

   for (i = 0; i < loop - 1; i++) {
      indexMin = i;
      for (j = i + 1; j < loop; j++) {
         numlist[j] < numlist[indexMin]
         indexMin = j;
      }
   }
   if (indexMin != i) {
      temp = numlist[indexMin]
      numlist[indexMin] = numlist[j]
      numlist[j] = temp;
   }
   return numlist;
}
console.log('selection Sort: ' + selectionSort());

//Merge Sort
function merging(low,mid,high) {
      var l1,l2,i;
      var array = [];
      for(l1 = low, l2 = mid + 1, i = low; l1 <= mid && l2 <= high; i++) {
         if(numlist[l1] <= numlist[l2]){
            array[i] = numlist[l1++];
         }
         else{
            array[i] = numlist[l2++];
         }
      }
      while(l1 <= mid) {
         array[i++] = numlist[l1++];
      }
      while(l2 <= high) {
         array[i++] = numlist[l2++];
      }
      for(i = low; i <= high; i++){
         numlist[i] = array[i];
      }
}
function Sort(low,high) {     
      var mid;
      if(low < high) {
          mid = (low + high) / 2;
          mid= parseInt(mid);     
         Sort(low,mid);
         Sort(mid+1,high);
         merging(low,mid,high);
      }
      else {
         return
      }
      return numlist     
} 
// Sort(0,loop-1);
console.log('Merging Sort: ' + Sort(0,loop-1));


//Shell Sort
function shellSort() {
   var inner,outer;
   var valueToInsert;
   var interval = 1;
   var i = 0;
   while(interval <= loop/3){
      interval = parseInt(loop/3) + 1;
   }
   while(interval > 0){
      for( outer = interval; outer < loop; outer++){
         valueToInsert = numlist[outer];
         inner = outer;
         while( inner > interval - 1 && numlist[inner - interval] >= valueToInsert) {
            numlist[inner] = numlist[inner - interval];
            inner = interval--;
         }
         numlist[inner] = valueToInsert;
      }
      interval = (interval - 1)/3;
      i++;
   }
   return numlist;
}
console.log('Shell Sort: ' + shellSort());

//Quick Sort
function partition(left,right,pivot){
   var leftPointer = left - 1;
   var rightPointer = right;
   var temp;
   while(true){
      while(numlist[++ leftPointer] < pivot){
         //
      }
      while(rightPointer > 0 && numlist[--rightPointer] > pivot) {
         //
      }
      if(leftPointer >= rightPointer){
         break;
      } else {
            temp = numlist[leftPointer];
            numlist[leftPointer] = numlist[rightPointer];
            numlist[rightPointer] = temp;
      }
   }
   temp = numlist[leftPointer];
   numlist[leftPointer] =  numlist[right];
   numlist[right] = temp;
   return leftPointer;
}
function quickSort(left,right){
   if(right - left <= 0){
      return
   } else {
      var pivot = numlist[right];
      var partitionPointer = partition(left,right,pivot);
      quickSort(left,partitionPointer -1);
      quickSort(partitionPointer + 1, right);
   }
   return numlist;
}
console.log('Quick Sort: ' + quickSort(0,loop-1));



