
// ref: https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/

// To test the function, use Shell in the terminal on the right. Type node W1D1.js


const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function insertionSort(nums) {
  //given an unsorted array, sort the array using insertSort
  // i.e. sort the first element. When it goes the a new element, move the element to the right position. 
    for(let i = 1; i < nums.length; i++){
        let temp = nums[i];
        let j = i-1
        while(j >= 0 && temp < nums[j]){
            nums[j+1] = nums[j];
            j--;
        }
        nums[j+1] = temp;
    }
    return nums;
}

console.log(insertionSort(numsRandomOrder))

const arr1 = [2,4,8,3]
const arr2 = [2,4,8,1]

// [ 2 , 4 , 3 ,8 ]
// [ 2,  3,  4, 8 ]

function insertionHelper(arr){
    // given an array with everything sorted except for the last element
  // insert the last element to the right position
}
