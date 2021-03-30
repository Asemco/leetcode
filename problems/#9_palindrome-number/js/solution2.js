/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
     // Eliminate all negatives before they become a problem.
    if (x < 0)
        return false;
    
    var reversed = (Math.abs(x)+"").split("").reverse().join("");
    
    return reversed == x+"";
    
};

// 03/29/2021 19:28	Accepted	216 ms	48.2 MB	javascript
// 03/29/2021 19:28	Accepted	240 ms	48.7 MB	javascript
// 03/29/2021 19:28	Accepted	240 ms	48.5 MB	javascript