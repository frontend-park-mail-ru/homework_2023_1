"use strict";

function euclid(...nums) {
    //проверка натуральных чисел
    let correct_input = true;
    nums.forEach(function (item, i, arr){
        if (!Number.isInteger(item) || item <= 0){
            correct_input = false;
        }
    });
    if (!correct_input){
        return null;
    }
    //проверка единственного аргумента
    if (nums.length === 1) {
        return nums.at(0);
    }
    let CountGCD = function(first, second){
        let largest = Math.max(first, second);
        let lowest = Math.min(first, second);
        let temp;
        while(lowest !== 0){
            temp = lowest;
            lowest = largest % lowest;
            largest = temp;
        }
        return largest;
    };
    let pair_GCD = CountGCD(nums.at(0), nums.at(1));
    for (let index = 2; index < nums.length; ++index){
        pair_GCD = CountGCD(pair_GCD, nums.at(index));
    }
    return pair_GCD;
}

