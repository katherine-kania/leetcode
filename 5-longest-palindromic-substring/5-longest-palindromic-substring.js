/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let result = ""
    let current = ""
    
    for (let i=0; i < s.length; i++){
        for(let j=i; j < i+2; j++){
            let start = i
            let end = j
            while(s[start] && s[start] === s[end]){
                current = s.substring(start, end + 1)
                
                if(current.length > result.length) 
                    result = current
                    start--
                    end++   
            }
        }
    }
    return result
    
};