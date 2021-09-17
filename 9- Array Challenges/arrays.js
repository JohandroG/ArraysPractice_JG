/**=================================================Always hungry====================================================== */
function alwaysHungry(arr) {
    
    let counterfood= 0;
    
    for(i= 0 ; i<arr.length ; i++){
        if(arr[i] === "food"){
            console.log("yummy");
            counterfood = counterfood + 1;
        }
    }
    if(counterfood === 0){
        console.log("I'm hungry");
    }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);

alwaysHungry([4, 1, 5, 7, 2]);


/**================================================= High passs filter ================================================ */

function highPass(arr, cutoff) {
    var filteredArr = [];
    for (let i=0; i<arr.length;i++){
        if(arr[i] > cutoff){
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); 

/**================================================Better than average==================================================== */
function betterThanAverage(arr) {
    
    var sum = 0;
    for(let i=0; i<arr.length;i++){
        var sum = sum + arr[i]
    }
    sum = sum / arr.length /**this part determines de avg */
    
    var count = 0
    for(let i=0; i<arr.length;i++){
        if(arr[i] > sum){
            count = count + 1 /**determines how many values are greater tha the avg */
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result);

/**================================================Array reverse=========================================================== */
function reverse(arr) {
    
let reversearr = []

    for(let i=arr.length-1; i>=0;i--){
        reversearr.push(arr[i])
    }
    return reversearr;
    }

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]


/**==================================================Fibonacci Array======================================================== */

function fibonacciArray(n) {
    
    var fibArr = [0, 1];
    let sum = 0
    
    for(i = 0; i<n-2;i++){
        sum = fibArr[i] + fibArr[i+1]
        fibArr.push(sum);
    }

    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); //we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]