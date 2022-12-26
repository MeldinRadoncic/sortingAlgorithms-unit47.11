
function merge(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;
  
    // Compare elements from both arrays and push the smaller one to the result
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        result.push(arr1[i]);
        i++;
      } else {
        result.push(arr2[j]);
        j++;
      }
    }
  
    // Push any remaining elements from arr1 or arr2 to the result
    while (i < arr1.length) {
      result.push(arr1[i]);
      i++;
    }
    while (j < arr2.length) {
      result.push(arr2[j]);
      j++;
    }
  
    return result;
  }
  
  function mergeSort(nums) {
    // Base case: if the array has only one element, it is already sorted
    if (nums.length < 2) {
      return nums;
    }
  
    // Split the array in half
    const mid = Math.floor(nums.length / 2);
    const left = nums.slice(0, mid);
    const right = nums.slice(mid);
  
    // Recursively sort the left and right halves
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);
  
    // Merge the sorted halves and return the result
    return merge(sortedLeft, sortedRight);
  }

module.exports = { merge, mergeSort};