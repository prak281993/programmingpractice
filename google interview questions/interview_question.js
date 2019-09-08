/*
   arr1=['a','b','c','d','e'];
   arr2=['x','y',,'e'];

   // find if arr1 contains an item from arr2 in time complexity O(n)
*/

function commonItems(arr1, arr2) {
    let obj = {};
    arr1.forEach(item => {
        if (!obj[item]) {
            obj[item] = true;
        }
    });

    for (let index = 0; index < arr2.length; index++) {
        const element = arr2[index];
        if(obj[element])
        return true;
    }
    return false;
}
