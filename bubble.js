function bubbleSort(nums) {
    // Base case: if the array is empty or has only one element, it is already sorted
    if (nums.length < 2) {
      return nums;
    }
  
    let sorted = false;
  
    // Keep iterating until the array is fully sorted
    while (!sorted) {
      sorted = true;
  
      // Iterate over the array, swapping adjacent elements if they are out of order
      for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
          [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
          sorted = false;
        }
      }
    }
  
    return nums;
  }

module.exports = bubbleSort;