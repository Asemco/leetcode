class Solution {
    fun twoSum(nums: IntArray, target: Int): IntArray {
        //two pass

        val mapOfValues = mutableMapOf<Int, Int>()

        for (x in nums.indices) {
            mapOfValues[nums[x]] = x
        }

        for (y in nums.indices) {
            if (mapOfValues.containsKey(target - nums[y]!!) && mapOfValues[target - nums[y]!!]!! != y) {
                indexA = y
                indexB = mapOfValues[target - nums[y]!!]!!
            }
        }

        return intArrayOf(indexA, indexB)
    }
}