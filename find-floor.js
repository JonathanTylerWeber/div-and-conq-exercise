// ## **findFloor**

// Write a function called ***findFloor*** which accepts a sorted array and a value x, and returns the floor of x in the array. The floor of x in an array is the largest element in the array which is smaller than or equal to x. If the floor does not exist, return -1.

// Examples:

// ```jsx
// findFloor([1,2,8,10,10,12,19], 9) // 8
// findFloor([1,2,8,10,10,12,19], 20) // 19
// findFloor([1,2,8,10,10,12,19], 0) // -1
// ```

// **Constraints**

// Time Complexity: O(log N)


function findFloor(arr, x) {
    let start = 0;
    let end = arr.length - 1;
    let floor = -1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === x) {
            return arr[mid]; // Found exact match, return the value
        }
        else if (arr[mid] < x) {
            floor = arr[mid]; // Update floor to the current element
            start = mid + 1; // Search in the right half for a potentially smaller floor
        }
        else {
            end = mid - 1; // Search in the left half
        }
    }

    return floor; // Return the floor value or -1 if not found
}


module.exports = findFloor