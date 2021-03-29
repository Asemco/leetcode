/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    var negative = false;
    var reversed = [];
    var numStr = (x+"").split("");
   
   // Is this integer negative?
   if ((numStr)[0] == "-") {
       negative = true;
   }
       
   for (var i = numStr.length; i > (negative ? 1 : 0); i--) {
       reversed += numStr.pop();
   }
   
   if (negative) {
       reversed = "-" + reversed;
   }
   
   reversed = Number.parseInt(reversed);
   
   return ((reversed == undefined || reversed < -(Math.pow(2, 31)) || reversed > (Math.pow(2, 31)-1)) ? 0 : reversed)
   
};

// 03/29/2021 19:05	Accepted	104 ms	40.3 MB	javascript
// 03/29/2021 19:04	Accepted	96 ms	40.5 MB	javascript
// 03/29/2021 19:04	Accepted	112 ms	40.3 MB	javascript
// 03/29/2021 18:58	Accepted	88 ms	40.4 MB	javascript