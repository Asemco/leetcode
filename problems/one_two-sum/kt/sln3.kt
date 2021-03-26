class Solution {
    fun twoSum(nums: IntArray, target: Int): IntArray {
        //one - pass

        val mapOfValues = mutableMapOf<Int, Int>()

        for (z in nums.indices) {
            if  (mapOfValues.containsKey(target - nums[z]!!)) {
                return intArrayOf(mapOfValues[target - nums[z]!!]!!, z)
            }
            mapOfValues[nums[z]] = z
        }
    }
}