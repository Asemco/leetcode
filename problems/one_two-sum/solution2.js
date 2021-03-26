/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    
    for (var i = 0; i < nums.length; i++) {
        var temp = target - nums[i];
        var otherNum = nums.indexOf(temp);   
        if (otherNum != -1 && nums.indexOf(temp) != i) {
            return [i, nums.indexOf(temp)];
        }
    }
};

// 03/26/2021 18:42	Accepted	72 ms	38.6 MB	javascript