function reverseString(str) {
    return [...str].reverse().join('');
}


function mergeSortedArrays(arr1, arr2) {
    const mergedArray = [];
    var arr1Item = arr1[0];
    var arr2Item = arr2[0];
    let i = 0, j = 0;
    if (arr1.length === 0 && arr2.length === 0) {
        return 'Empty arrays'
    }
    while (arr1Item || arr2Item) {
        if (shouldPushFirstItem(arr1Item, arr2Item)) {
            mergedArray.push(arr1Item);
            i++;
            arr1Item = arr1[i];
        }
        else {
            mergedArray.push(arr2Item);
            j++;
            arr2Item = arr2[j];
        }
    }
    return mergedArray;
}

function shouldPushFirstItem(arr1Item, arr2Item) {
    return !arr2Item || arr1Item < arr2Item
}


var twoSum = function (nums, target) {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]] !== undefined) {
            return [obj[nums[i]], i]
        }
        obj[target - nums[i]] = i;
    }
}


const maxSubArray = function (nums) {
    let sum = nums[0];
    let maxSum = sum;

    for (let i = 0; i < nums.length; i++) {
        if (sum < sum + nums[i]){
            sum=sum+nums[i];
        }
        else{
            sum=nums[i];
        }
        maxSum=Math.max(sum,maxSum);
    }
    return maxSum;
}

const a=[-2,1,-3,4,-1,2,1,-5,4];

// const a = [2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log(maxSubArray(a));