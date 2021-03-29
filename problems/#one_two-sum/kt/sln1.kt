class Solution {
    fun twoSum(nums: IntArray, target: Int): IntArray {
        //brute force
        var indexA = 0
        var indexB = 0

        for (i in nums.indices) {

            for (j in i + 1 until nums.size) {

                if (nums[i] + nums[j] == target) {
                    indexA = i
                    indexB = j
                    break
                }
            }
        }

        return intArrayOf(indexA, indexB)
    }
}