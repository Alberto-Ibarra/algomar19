// ref: https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/

// To test the function, use Shell in the terminal on the right. Type node W1D1.js


const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function selectionSort(nums) {
    for(let i = 0; i < nums.length - 1; i++){
        let minIndex = i;
        for(let j = i + 1; j < nums.length; j++){
            if(nums[j] < nums[minIndex]){
                minIndex = j;
            }
        }
        [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
    }
    return nums;
}
selectionSort(numsRandomOrder)
console.log(selectionSort(numsRandomOrder));



