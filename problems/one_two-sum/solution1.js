/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    
    for (var i = 0; i < nums.length && !quit; i++) {
        for (var d = i+1; d < nums.length && !quit; d++) {
            if (nums[i] + nums[d] == target) {
                quit != quit;
                return [i, d];
            }
        }
    }
    
};

// 03/26/2021 18:30	Accepted	80 ms	39.1 MB	javascript