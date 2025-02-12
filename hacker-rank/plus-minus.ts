// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

function plusMinus(arr: number[]): void {
    // Write your code here
    let countPositive = 0;
    let countNegative = 0;
    let countZero = 0;

    // loop through array to get total positive, negatve and zero vals
    for(let i = 0; i < arr.length; i++) {
        const currentNumber = arr[i]
        if(currentNumber > 0) {
            countPositive++
        } else if(currentNumber < 0) {
            countNegative++
        } else {    
            countZero++
        }
    }


    // calculate ratios and convert to 6 decimal places
    const ratioOfPositives = (countPositive / arr.length).toFixed(6)
    const ratioOfNegatives = (countNegative / arr.length).toFixed(6)
    const ratioOfZero = (countZero / arr.length).toFixed(6)

    console.log(ratioOfPositives)
    console.log(ratioOfNegatives)
    console.log(ratioOfZero)

}


plusMinus([1, 1, 0, -1, -1])