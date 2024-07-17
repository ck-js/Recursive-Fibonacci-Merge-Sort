function iterativeFibonacci(n){
    let array = [0, 1];
    for (let i = 2; i < n; i++) {
        array.push(array[i - 1] + array[i - 2]);
    }
    return array;
}
// console.log(iterativeFibonacci(13))

function recursiveFibonacci(n) {
    if (n <= 2) {
        return [0, 1];
    } else {
        let array = recursiveFibonacci(n - 1);
        array.push(array[array.length - 1] + array[array.length - 2]);
        return array;
    }
}
// console.log(recursiveFibonacci(13));


const sortArray1 = [3, 2, 1, 13, 8, 5, 0, 1], sortArray2 = [105, 79, 100, 110];  

function mergeSort(arr) {
console.log(arr);
// const middle = Math.floor(arr.length / 2);
const middle = arr.length / 2;
console.log(middle);
const left = arr.slice(0, middle)
const right = arr.slice(middle)

console.log(left);

}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
    // return merge(left,right)
}

function merge(left, right) {
    let resultArray = [], leftIndex = 0, rightIndex = 0;

    // Conquer step: Compare elements of `left` and `right` arrays and merge them in sorted order
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++; // Move to the next element in the left array
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++; // Move to the next element in the right array
        }
    }

    // Concatenating the remainder of the left and right arrays
    return resultArray
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}

console.log(mergeSort(sortArray1));
console.log(mergeSort(sortArray2));





 