package `#9_palindrome-number`.kt

import kotlin.math.abs


//Runtime: 252 ms, faster than 15.45% of Kotlin online submissions for Palindrome Number.
//Memory Usage: 35.9 MB, less than 35.45% of Kotlin online submissions for Palindrome Number.
fun isPalindrome(x: Int): Boolean {

    // a negative will always be false
    if (x < 0) {
        return false
    }

    return abs(x).toString().reversed().toInt() == x
}
