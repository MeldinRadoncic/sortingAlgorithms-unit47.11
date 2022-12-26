
  function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
  }
  
  function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  }
  
  function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
      maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
  }
  
  function radixSort(nums) {
    // Find the maximum number of digits in the array
    let maxDigits = mostDigits(nums);
  
    // Loop through the number of digits
    for (let i = 0; i < maxDigits; i++) {
      // Create an array for each digit place (0-9)
      let digitBuckets = Array.from({ length: 10 }, () => []);
  
      // Loop through the input array and place each number into the appropriate digit bucket
      for (let j = 0; j < nums.length; j++) {
        let digit = getDigit(nums[j], i);
        digitBuckets[digit].push(nums[j]);
      }
  
      // Flatten the digit buckets back into the input array
      nums = [].concat(...digitBuckets);
    }
  
    return nums;
  }
module.exports = radixSort;