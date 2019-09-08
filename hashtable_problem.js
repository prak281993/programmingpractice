/*
given an array=[2,1,2,3,2,5,6]

find the first recurring character

*/

function findRecurChar(arr) {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            return arr[i];
        }
        else {
            map.set(arr[i],1)
        }
    }
    return undefined;
}


const arr = [2, 1, 1, 2, 0, 5, 6];
console.log(findRecurChar(arr))

