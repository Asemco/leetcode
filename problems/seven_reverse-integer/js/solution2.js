/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    var reversed = Math.abs((Math.abs(x)+"").split("").reverse().join(""));
    reversed *= (x < 0) ? -1 : 1;
    
    return ((reversed == undefined || reversed < -(Math.pow(2, 31)) || reversed > (Math.pow(2, 31)-1)) ? 0 : reversed);
    
};

// 03/29/2021 19:18	Accepted	100 ms	40.6 MB	javascript
// 03/29/2021 19:18	Accepted	104 ms	40.6 MB	javascript
// 03/29/2021 19:18	Accepted	96 ms	40.7 MB	javascript
// 03/29/2021 19:17	Accepted	92 ms	40.5 MB	javascript
// 03/29/2021 19:16	Accepted	96 ms	40.5 MB	javascript
// 03/29/2021 19:15	Accepted	104 ms	40.7 MB	javascript
// 03/29/2021 19:15	Accepted	112 ms	40.6 MB	javascript
// 03/29/2021 19:15	Accepted	92 ms	40.6 MB	javascript
// 03/29/2021 19:14	Accepted	104 ms	40.9 MB	javascript
// 03/29/2021 19:14	Accepted	96 ms	40.7 MB	javascript