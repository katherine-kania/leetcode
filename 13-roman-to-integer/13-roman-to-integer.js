/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanNum = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    }
    
    interger = 0
    
    for(let i=0; i<s.length; i++){
        if(s[i] === 'I' && s[i+1] === 'V'){
            interger += 4
            i++
        } else if (s[i] === 'I' && s[i+1] === 'X') {
            interger += 9
            i++
        } else if (s[i] === 'X' && s[i+1] === 'L'){
            interger += 40
            i++
        } else if (s[i] === 'X' && s[i+1] === 'C'){
            interger += 90
            i++
        } else if (s[i] === 'C' && s[i+1] === 'D'){
            interger += 400
            i++
        } else if (s[i] === 'C' && s[i+1] === 'M'){
            interger += 900
            i++
        } else {
            interger += romanNum[s[i]]
        }
    } 
    return interger
};

