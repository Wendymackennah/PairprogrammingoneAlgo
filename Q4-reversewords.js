// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. 
// The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

var reverseWords = function(s) {
    let newArr = s.split(" ");
    let reverseArr = []
    for (let i = newArr.length - 1; i >= 0; i--) {
        reverseArr.push(newArr[i])
    }
   
    return reverseArr.join(" "); 
};

console.log(reverseWords("the sky is blue"))