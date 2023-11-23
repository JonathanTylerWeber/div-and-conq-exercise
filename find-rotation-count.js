// findRotationCount
// Write a function called findRotationCount which accepts an array of distinct numbers sorted in increasing order. The array has been rotated counter-clockwise n number of times. Given such an array, find the value of n.
// Constraints:
// Time Complexity: O(log N)
// Examples:
// findRotationCount([15, 18, 2, 3, 6, 12]) // 2
// findRotationCount([7, 9, 11, 12, 5]) // 4
// findRotationCount([7, 9, 11, 12, 15]) // 0

function findRotationCount(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        // If the array is already sorted, return 0
        if (arr[start] <= arr[end]) {
            return start;
        }

        let mid = Math.floor((start + end) / 2);
        let prev = (mid + arr.length - 1) % arr.length; // Get the previous element
        let next = (mid + 1) % arr.length; // Get the next element

        // Check if the mid element is smaller than both its previous and next elements
        if (arr[mid] <= arr[prev] && arr[mid] <= arr[next]) {
            return mid;
        }
        // If the left half is sorted, the rotation point is in the right half
        else if (arr[start] <= arr[mid]) {
            start = mid + 1;
        }
        // If the right half is sorted, the rotation point is in the left half
        else {
            end = mid - 1;
        }
    }

    return -1; // Indicates an invalid input (array not rotated)
}


module.exports = findRotationCount