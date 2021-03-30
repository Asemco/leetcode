/**
 * @param {number} x
 * @return {boolean}
 */
    var isPalindrome = function(x) {
    

    //var reversed = (Math.abs(x)+"").split("").reverse().join("");

    return Number.parseInt((Math.abs(x)+"").split("").reverse().join("")) === x;
    //return reversed == x+"";

};

// 03/29/2021 19:38	Accepted	216 ms	49.2 MB	javascript
// 03/29/2021 19:38	Accepted	196 ms	49.3 MB	javascript