/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    let longStr = ""

    // if empty
    if(strs == null || strs.length == 0){
        return longstr
    }
    
    let minlength
    
    // loop through the object
    for(let i=0; i < strs.length; i++){
        minlength = Math.min(strs[i].length)
    }
    
    // loop for the minimum length
    for(let i=0; i < minlength; i++){
        // Get the current character from first string
        let current = strs[0][i]
        
        // check if this character is found in all other strings or not
        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] != current) {
                return longStr
            }
        }
        longStr += current
    }
    return longStr
};