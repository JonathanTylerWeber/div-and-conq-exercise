// sortedFrequency
// Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array
// Constraints:
// Time Complexity: O(log N)
// Examples:
// sortedFrequency([1,1,2,2,2,2,3],2) // 4
// sortedFrequency([1,1,2,2,2,2,3],3) // 1
// sortedFrequency([1,1,2,2,2,2,3],1) // 2
// sortedFrequency([1,1,2,2,2,2,3],4) // -1

function sortedFrequency(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let firstIndex = findFirstIndex(arr, num, left, right);

    if (firstIndex === -1) {
        return -1;
    }

    let lastIndex = findLastIndex(arr, num, firstIndex, right);
    return lastIndex - firstIndex + 1;
}

function findFirstIndex(arr, num, left, right) {
    while (left < right) {
        let middle = Math.floor((left + right) / 2);
        if (arr[middle] < num) {
            left = middle + 1;
        } else {
            right = middle;
        }
    }
    return arr[left] === num ? left : -1;
}
//  l     m     r
//          l m r
//              lr
// [1,1,2,2,2,2,3]

function findLastIndex(arr, num, left, right) {
    while (left < right) {
        let middle = Math.ceil((left + right) / 2);
        if (arr[middle] > num) {
            right = middle - 1;
        } else {
            left = middle;
        }
    }
    return arr[right] === num ? right : -1;
}

// l      m     r
// l  m   r
//    l m r
//      l r 
// [1,1,2,2,2,2,3]

module.exports = sortedFrequency