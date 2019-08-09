/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    const order = (a, b) => a - b;
    const pureArray = Array.from(new Set(nums));
    pureArray.sort(order);
    return pureArray[pureArray.length -2]
}