

function miniMaxSum(arr: number[]) {
    // Write your code here
    arr.sort((a: number, b: number) => a - b)
    let min = 0
    let max = 0
    
    for(let  i = 0; i < arr.length - 1; i++) {
        min += arr[i]
    }
    
    for(let i = 1; i < arr.length; i++) {
        max += arr[i]
    }
    
    console.log(min, max)
}

miniMaxSum([1,4, 5, 6, 7])

// another way

function minMax(arr: number[]) {

    arr.sort((a: number, b: number) => a - b)

    const lengthOfMyArr = arr.length;

    const minVals = arr.slice(0, lengthOfMyArr - 1);
    const maxVals = arr.slice(1, lengthOfMyArr);

    const min = minVals.reduce((accumilator, num) => {
        return accumilator += num;
    }, 0)

    const max = maxVals.reduce((accumilator, num) => {
        return accumilator += num;
    }, 0)


    console.log(min, max)
}