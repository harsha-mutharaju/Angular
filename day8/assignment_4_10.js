// 10. WAP to print the occurrence of each element
let inputNum = [10, 20, 30, 40, 50, 10, 30, 50];
let numfreq = {};

for (let num of inputNum) {
    numfreq[num] = (numfreq[num] || 0) + 1;
}

console.log('Print the number frequency:');
console.log(numfreq);