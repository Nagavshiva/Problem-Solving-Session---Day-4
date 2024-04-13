// ................................................problem...........................................//

// 1.Write a function to reverse an array in place

// Pseudo Code:

// 1. Define a function named 'reverseArrayInPlace' that takes a single parameter 'arr'.
// 2. Initialize two pointers, 'start' and 'end', pointing to the first and last elements of the array respectively.
// 3. Loop while 'start' is less than 'end':
//     a. Swap the elements at 'start' and 'end' positions.
//     b. Increment 'start' and decrement 'end'.
// 4. After the loop, return the reversed array.



function reverseArrayInPlace(arr) {
    
    let start = 0;
    let end = arr.length - 1;

    
    while (start < end) {
        
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        
        
        start++;
        end--;
    }

    
    return arr;
}

console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));  // Output: [5, 4, 3, 2, 1]
console.log(reverseArrayInPlace([5, 4, 3, 2, 1]));  // Output: [1, 2, 3, 4, 5]


// 2.Write a function to find the common elements between two arrays.

// Pseudo Code:

// 1. Define a function named 'findCommonElements' that takes two parameters: 'arr1' and 'arr2'.
// 2. Initialize an empty array named 'commonElements' to store the common elements.
// 3. Iterate through each element of 'arr1':
//     a. Check if the current element exists in 'arr2':
//         i. If yes, push the element into 'commonElements'.
// 4. Return 'commonElements'.


function findCommonElements(arr1, arr2) {
    
    let commonElements = [];

    
    for (let i = 0; i < arr1.length; i++) {
        
        if (arr2.includes(arr1[i])) {
            
            commonElements.push(arr1[i]);
        }
    }

    
    return commonElements;
}


console.log(findCommonElements([1, 2, 3, 4, 5], [4, 5, 6, 7, 8]));  // Output: [4, 5]
console.log(findCommonElements([3, 6, 9, 12], [3, 6, 9]));          // Output: [3, 6, 9]
console.log(findCommonElements([10, 20, 30], [40, 50, 60]));       // Output: []


// 3.Write a function to remove duplicates from an array.

// Pseudo Code:

// 1. Define a function named 'removeDuplicates' that takes a single parameter 'arr'.
// 2. Initialize an empty array named 'uniqueArray' to store unique elements.
// 3. Iterate through each element of 'arr':
//     a. If the current element does not exist in 'uniqueArray', push it into 'uniqueArray'.
// 4. Return 'uniqueArray'.



function removeDuplicates(arr) {
    let uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
        
        if (!uniqueArray.includes(arr[i])) {
            uniqueArray.push(arr[i]);
        }
    } 
    return uniqueArray;
}


console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));  // Output: [1, 2, 3, 4, 5]
console.log(removeDuplicates([3, 3, 3, 3, 3]));      // Output: [3]
console.log(removeDuplicates([1, 2, 3, 4, 5]));      // Output: [1, 2, 3, 4, 5]



// 4.Write a function to rotate an array to the right by k steps.

// Pseudo Code:

// 1. Define a function named 'rotateRight' that takes two parameters: 'arr' (the array) and 'k' (number of steps to rotate).
// 2. Calculate the effective rotation steps by taking 'k' modulo the length of the array to handle cases where 'k' is greater than the length of the array.
// 3. Reverse the entire array.
// 4. Reverse the first 'k' elements.
// 5. Reverse the remaining elements after the first 'k' elements.
// 6. Return the rotated array.

// Function to rotate an array to the right by k steps
function rotateRight(arr, k) {
    // Calculate effective rotation steps
    k = k % arr.length;

    // Reverse the entire array
    reverseArray(arr, 0, arr.length - 1);

    // Reverse the first 'k' elements
    reverseArray(arr, 0, k - 1);

    // Reverse the remaining elements after the first 'k' elements
    reverseArray(arr, k, arr.length - 1);

    // Return the rotated array
    return arr;
}


function reverseArray(arr, start, end) {
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}


console.log(rotateRight([1, 2, 3, 4, 5], 2));  // Output: [4, 5, 1, 2, 3]
console.log(rotateRight([1, 2, 3, 4, 5], 3));  // Output: [3, 4, 5, 1, 2]
console.log(rotateRight([1, 2, 3, 4, 5], 7));  // Output: [4, 5, 1, 2, 3]



// 5. Write a function to merge two sorted arrays into a single sorted array.


// Pseudo Code:

// 1. Define a function named 'mergeSortedArrays' that takes two parameters: 'arr1' and 'arr2' (the sorted arrays).
// 2. Initialize an empty array named 'mergedArray' to store the merged result.
// 3. Initialize two pointers, 'i' and 'j', pointing to the start of 'arr1' and 'arr2' respectively.
// 4. Loop while both 'i' and 'j' are less than the lengths of 'arr1' and 'arr2' respectively:
//     a. If the element at 'arr1[i]' is less than or equal to the element at 'arr2[j]', push 'arr1[i]' into 'mergedArray' and increment 'i'.
//     b. Otherwise, push 'arr2[j]' into 'mergedArray' and increment 'j'.
// 5. If there are remaining elements in 'arr1', push them into 'mergedArray'.
// 6. If there are remaining elements in 'arr2', push them into 'mergedArray'.
// 7. Return 'mergedArray'.



function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        }else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }
    return mergedArray;
}


console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));  // Output: [1, 2, 3, 4, 5, 6]
console.log(mergeSortedArrays([1, 2, 4, 6], [3, 5]));  // Output: [1, 2, 3, 4, 5, 6]
