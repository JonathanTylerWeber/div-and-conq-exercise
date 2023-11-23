// findRotatedIndex
// Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. The function should return the index of num in the array. If the value is not found, return -1.
// Constraints:
// Time Complexity: O(log N)
// Examples:
// findRotatedIndex([3,4,1,2],4) // 1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
// findRotatedIndex([37,44,66,102,10,22],14) // -1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1

function findRotatedIndex(arr, num) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === num) {
            return mid;
        }

        // If the left half is sorted
        if (arr[start] <= arr[mid]) {
            // Check if the number is within the left sorted half
            if (num >= arr[start] && num < arr[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        // If the right half is sorted
        else {
            // Check if the number is within the right sorted half
            if (num > arr[mid] && num <= arr[end]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }

    return -1; // Number not found
}



module.exports = findRotatedIndex