//problem 1: sum zero--------------------------------------------------------------------------
//write a function that takes in an array of numbers, the function should return True if any two numbers in the list sum to zero, and false otherwise

let array = [1,4,11,2,35,4]


function addToZero(array){
    let sum = false
    for (let i=0; i < array.length; i++){
        for(let j = 0; j < array.length; j++){
            if(i !== j){
                if(array[i] = array[j] === 0){
                    sum = true
                }
            }
        }
    return sum
    }
}

console.log(addToZero(array))

//time complexity: O(n^2), quadratic complexity because the function iterates through the array for each loop 
//space complexity: O(1), uses a single variable, doesn't depend on array length, uses same space to store sum

//problem 2: unique characters---------------------------------------------------------------------
//write a function that takes in a single word, as a string. it should return True if that word contains only unique characters, and false otherwise

function checkUniqueString(string){
    let strSet = new Set()
    for(let i=0; i < string.length; i++){
       strSet.add(string[i])
    }
    if (strSet.size === string.length){
        return true
    } else{
        return false
    }
}
console.log(checkUniqueString('moon'))
console.log(checkUniqueString('cat'))
//time complexity: O(n), bc it uses a single loop and a comparison between the set size and string length
//space complexity: O(n), creates a data structure to store characters, space is dependent on size of string in a linear manner

//problem 3: pangram sentence--------------------------------------------------------------------------
//a pangram sentence contains all the letters of the alphabet at least once. write a function to check if a sentence is a pangram or not

function isPangram(string){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let lowerCase = string.toLowerCase()
   
    for(let letter of alphabet){
        if(!lowerCase.includes(letter)){
            return false
        }
    }
    return true
}


console.log(isPangram('The quick brown fox jumps over the lazy dog'))
console.log(isPangram('The quick brown fox jumps over the cat'))
//time complexity: O(n), loop runs a fixed number of times
//space complexity: O(1), size is constant, doesn't change based on input

//problem 4: longest word-----------------------------------------------------------------------
//write a function that takes a list of words and returns the length of the longest one

wordArray = ['cat', 'balloon', 'pony']
function findLongestWord(wordArray){
    let longestWord = 0
    for (let i = 0; i < wordArray.length; i++){
        if (wordArray[i].length > longestWord){
            longestWord = wordArray[i].length
        }
    }
    return longestWord
}

console.log(findLongestWord(wordArray))
//runtime complexity: O(n), comparison and updating variable have a constant time complexity, not affected by input size
//space complexity: O(1) uses constant space, space doesn't depend on the size of the input, function uses one variable