const perf = require('execution-time')()

//Why is my runtime changing every time? The results are displayed for just one test.


//1. Sum Zero

function addToZero(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (i !== j) {
                if (array[i] + array[j] === 0) {
                    value = true;
                }
            }
        }
    }
}


//Runtime test
perf.start();
addToZero([1,2,3,4,5]);   //my own array put in
let resultsAddToZero = perf.stop();
console.log('Results for the addToZero');
console.log(resultsAddToZero.preciseWords);

//The runtime results are: 65.6 μs
//Extra Credit: The space complexity is: Linear

////////////////////////////////////////////////////////////////////////////////

//2. Unique Characters

function hasUniqueChars(str) {
    for (let i = 0; i < str.length; i++) {
        const el = str[i];
        if (str.indexOf(el) !== str.lastIndexOf(el)) {
            return false;
        };
    };
    return true;
}


//Runtime test
perf.start();
hasUniqueChars('abc');   //my own string put in
let resultshasUniqueChars = perf.stop();
console.log('Results for the hasUniqueChars');
console.log(resultshasUniqueChars.preciseWords);

//The runtime results are: 55.2 μs
//Extra Credit: The space complexity is: Linear

////////////////////////////////////////////////////////////////////////////////

//3. Pangram Sentence

function pangramSentence(str) {
   str = str.toLowerCase()
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    for (let i = 0; i < alphabet.length; i++) {
        if (str.includes(alphabet[i]) !== true) {
            return false
        }
    }
    return true
}

//Runtime test
perf.start();
pangramSentence("I like cats, but not mice");   //my own string put in
let resultsPangramSentence = perf.stop();
console.log('Results for the pangramSentence');
console.log(resultsPangramSentence.preciseWords);

//The runtime results are: 20.6 μs
//Extra Credit: The space complexity is: Linear

////////////////////////////////////////////////////////////////////////////////

//3. Longest Word

function findLongestWord(str) {
    let longest = '';
    for (let i = 0; i < str.length; i++) {
    if (str[i].length > longest.length)
    longest = str[i];
}
    return longest.length;

}


 //Runtime test
 perf.start();
 findLongestWord(["hi", "hello"]);   //my own list put in
 let resultsfindLongestWord = perf.stop();
 console.log('Results for the findLongestWord');
 console.log(resultsfindLongestWord.preciseWords);
 
 //The runtime results are: 41 μs
 //Extra Credit: The space complexity is: Linear