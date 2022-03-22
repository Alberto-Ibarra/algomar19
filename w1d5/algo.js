

const sortedA1 = [];
const sortedB1 = [];
//expected output: [];

const sortedA2 = [5];
const sortedB2 = [2];
//expected output: [2, 5];

const sortedA3 = [2, 3, 4, 7];
const sortedB3 = [5];
//expected output: [2, 3, 4, 5, 7];

const sortedA4 = [1, 2, 4, 6, 9];
const sortedB4 = [3, 7, 8, 10, 11, 12];
//expected output: [1, 2, 3, 4, 6, 7, 8, 9, 10, 11];

function merge(arr1, arr2) {
    let length1 = arr1.length
    let length2 = arr2.length
    let expected = []
    if (length1>length2){
        let length = length1
    }
    else{
        length = length2
    }

    let i = 0
    let j = 0

    while(arr1[i] < arr2[j]){
        expected.push(arr1[i])
        i++
        while(arr2[j] < arr1[i]){
            expected.push(arr2[j])
            j++
        }
    }
    return expected
    
}
console.log(merge(sortedA4, sortedB4))

