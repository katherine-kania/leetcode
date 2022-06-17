/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = []
    
    // loop through each element in s
    for (let i = 0; i < s.length; i++){
        const char = stack[stack.length - 1]

        // if you encounter a starting bracket push it onto the char
        if(s[i] == "(" || s[i] == "{" || s[i] == "["){
            stack.push(s[i])
            // pop the opening bracket off the stack
            // if there is a corresoing closing bracket in string
        }else if ((char == "(" && s[i] == ")") || (char == "{" && s[i] == "}") || (char == "[" && s[i] == "]")){
            stack.pop()
        } else return false    
    }
    //check empty stack
    return stack.length ? false : true
};