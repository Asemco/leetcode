/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
  
    var reversed = (Math.abs(x)+"").split("").reverse().join("");
    
    return reversed == x+"";
    
};

// 03/29/2021 19:28	Accepted	208 ms	48.6 MB	javascript
// 03/29/2021 19:26	Accepted	236 ms	48.4 MB	javascript
