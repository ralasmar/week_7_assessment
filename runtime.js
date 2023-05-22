const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppendExtraLarge = perf.stop();  // Stops timer and save time results

perf.start();                     
doublerAppend(largeArray);
let resultsAppendLarge = perf.stop();  

perf.start();                     
doublerAppend(mediumArray);
let resultsAppendMedium = perf.stop();  

perf.start();                     
doublerAppend(smallArray);
let resultsAppendSmall = perf.stop();  

perf.start();                     
doublerAppend(tinyArray);
let resultsAppendTiny = perf.stop();  


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsertExtraLarge = perf.stop();

perf.start();
doublerInsert(largeArray);
let resultsInsertLarge = perf.stop();

perf.start();
doublerInsert(mediumArray);
let resultsInsertMedium = perf.stop();

perf.start();
doublerInsert(smallArray);
let resultsInsertSmall = perf.stop();

perf.start();
doublerInsert(tinyArray);
let resultsInsertTiny = perf.stop();

console.log('Results for the extraLargeArray');
console.log("insert", resultsInsertExtraLarge.preciseWords);
console.log("append", resultsAppendExtraLarge.preciseWords);
console.log('---------------------------------------------')

console.log('Results for the largeArray');
console.log('insert:', resultsInsertLarge.preciseWords)
console.log("append", resultsAppendLarge.preciseWords);
console.log('---------------------------------------------')

console.log('Results for the mediumArray');
console.log('insert:', resultsInsertMedium.preciseWords)
console.log("append", resultsAppendMedium.preciseWords);
console.log('---------------------------------------------')

console.log('Results for the smallArray');
console.log('insert:', resultsInsertSmall.preciseWords)
console.log("append", resultsAppendSmall.preciseWords);
console.log('---------------------------------------------')

console.log('Results for the tinyArray');
console.log('insert:', resultsInsertTiny.preciseWords)
console.log("append", resultsAppendTiny.preciseWords);


