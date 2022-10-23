"use strict";
const arrayS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17.18, 19, 20];
/*
let count = 0;
function binarySearch(array, item) {
    let start = 0;
    let end = array.lenght;
    let middle;
    let found = false;
    let position = -1;
    while (found === false && start <= end) {
        count += 1;
        middle = Math.floor((start + end) / 2);
        if (array[middle] === item) {
            found = true;
            position = middle;
            return position;
        }
        if (item < array[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
    return position;
}
console.log(count);
console.log(binarySearch(array, 10));
*******************************/
let array = [-1,0,3,5,7,9,12];
let search = function(nums,target){

    let left = 0;
    let right = nums.leght-1;
    let mid;
    while(left<=right){
        mid = Math.round((right-left)/2)+left;
        if(target === nums[mid]){
            return mid;
        }else if(target < nums[mid]){
            right = mid - 1 ;
        }else{
            left = mid + 1;
        }
    } 
    return -1;

};
console.log(search(array,9));



