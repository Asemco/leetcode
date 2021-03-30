// "abcabcbb"
// "bbbbb"
// "pwwkew"
// "dvdf"
// "aab"
// "au"
// "a"
// ""

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    if (s.length == 1 || s.length == 0)
        return s.length;
    
    var longest = 0;
    var i = 0;
    var usedCharacters = [];
    
    for (i = 0; i < s.length; i++) {       
        
        if (usedCharacters.indexOf(s[i]) != -1) {
            // Save current string as longest string
            if (usedCharacters.length > longest)
                longest = usedCharacters.length;
            
            // Begin clearing characters out
            var clearing = true;
            while (clearing) {
                // We continue until we find the other occurence of this character.  
                if (usedCharacters[0] == s[i])
                    clearing = !clearing;
                // Otherwise, we remove the initial characters.  They are no longer part of the ship, part of the crew.
                usedCharacters.shift();
            }
        }
        
        usedCharacters.push(s[i]);
        
        if (i == s.length - 1) {
            if (usedCharacters.length > longest)
                longest = usedCharacters.length;
        }
    }
    
    return longest;
};

// 03/29/2021 21:09	Accepted	96 ms	40.3 MB	javascript
// 03/29/2021 21:08	Accepted	100 ms	40.4 MB	javascript
// NO BS; STRAIGHT SHIFTIN'