package seven_reverse_integer.kt

import kotlin.math.abs

//Runtime: 156 ms, faster than 36.71% of Kotlin online submissions for Reverse Integer.
//Memory Usage: 35.4 MB, less than 23.00% of Kotlin online submissions for Reverse Integer.
fun reverse(x: Int): Int {

    val reverseValue = abs(x).toString().reversed().toIntOrNull() ?: 0

    return if (x > 0) {
        reverseValue
    } else {
        reverseValue * -1
    }

}

//Per solution
//Runtime: 152 ms, faster than 43.86% of Kotlin online submissions for Reverse Integer.
//Memory Usage: 33.1 MB, less than 98.57% of Kotlin online submissions for Reverse Integer.
fun reverse2(x: Int): Int {
    var rev = 0
    var tempCopy = x

    while (tempCopy !=0){
        val pop = tempCopy % 10
        tempCopy /= 10
        if (rev > Int.MAX_VALUE/10 || (rev == Int.MAX_VALUE / 10 && pop > 7)) return 0
        if (rev < Int.MIN_VALUE/10 || (rev == Int.MIN_VALUE / 10 && pop < -8)) return 0
        rev = rev * 10 + pop
    }

    return rev
}