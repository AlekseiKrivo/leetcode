/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    /*
        I've sorted the given strs array by the length of its strings, so the shortest string is at zero index now.
    */
    let sorted = strs.sort(function(a, b) { 
        if (a.length > b.length) { 
            return 1; 
        } 
        if (a.length < b.length) { 
            return -1; 
        } 
        return 0; 
    });
    
    /*
        Get the shortest string from the array. If there is no string in the array at zero index, set an empty string to 'shortestWord' variable.
    */
    let shortestWord = sorted[0] ? sorted[0] : "";
    
    /*
        In this loop, I take turns checking each element in the sorted array to check if it begins with the characters of 'shortestWord' variable. 
        If it doesn't, I cut off the last character of the 'shortestWord' variable and take checking again.
        The loop is continuing while the 'shortestWord' variable doesn't an empty string, or all elements in the sorted array don't begin with the characters of 'shortestWord' variable.
    */
    for(let i = 0; i < strs.length; i++) {
        if(shortestWord.length === 0) break;
        
        if(!sorted[i].startsWith(shortestWord)) {
            i = 0;
            shortestWord = shortestWord.slice(0, -1);
        }
    }
    return shortestWord;
        
};