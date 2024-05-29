
function printOddNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            console.log(arr[i]);
        }
    }
}



function convertToTitleCase(strArray) {
    for (let i = 0; i < strArray.length; i++) {
        // Convert the first character of each word to uppercase and the rest to lowercase
        strArray[i] = strArray[i].toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
    }
    return strArray;
}



function sumOfArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}



function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function findPrimeNumbers(arr) {
    return arr.filter(num => isPrime(num));
}



function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // Check if the string is equal to its reverse
    return cleanStr === cleanStr.split('').reverse().join('');
}

function findPalindromes(arr) {
    return arr.filter(str => isPalindrome(str));
}



function findMedianSortedArrays(nums1, nums2) {
    const mergedArray = mergeSortedArrays(nums1, nums2);
    const length = mergedArray.length;
    if (length % 2 === 0) {
        // If the merged array has an even length, return the average of the middle two elements
        const midIndex1 = length / 2 - 1;
        const midIndex2 = length / 2;
        return (mergedArray[midIndex1] + mergedArray[midIndex2]) / 2;
    } else {
        // If the merged array has an odd length, return the middle element
        const midIndex = Math.floor(length / 2);
        return mergedArray[midIndex];
    }
}

function mergeSortedArrays(nums1, nums2) {
    const mergedArray = [];
    let i = 0, j = 0;

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] <= nums2[j]) {
            mergedArray.push(nums1[i]);
            i++;
        } else {
            mergedArray.push(nums2[j]);
            j++;
        }
    }

    // Push remaining elements from nums1 and nums2, if any
    while (i < nums1.length) {
        mergedArray.push(nums1[i]);
        i++;
    }

    while (j < nums2.length) {
        mergedArray.push(nums2[j]);
        j++;
    }

    return mergedArray;
}



function removeDuplicates(arr) {
    return Array.from(new Set(arr));
}



function rotateArray(arr, k) {
    const n = arr.length;
    // If k is greater than array length, take modulo to avoid unnecessary rotations
    k = k % n;
    
    for (let i = 0; i < k; i++) {
        const lastElement = arr.pop();
        arr.unshift(lastElement);
    }
    
    return arr;
}