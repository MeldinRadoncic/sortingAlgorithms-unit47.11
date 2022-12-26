function insertionSort(nums) {

     // Iterate over the array, inserting each element into its sorted position
  for (let i = 1; i < nums.length; i++) {
    let j = i;

    // Keep shifting the element to the left until it is in the correct position
    while (j > 0 && nums[j - 1] > nums[j]) {
      [nums[j - 1], nums[j]] = [nums[j], nums[j - 1]];
      j--;
    }
  }

  return nums;
}

module.exports = insertionSort;