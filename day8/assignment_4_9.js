
// 9. Intersection of 2 number arrays
let arr1 = [10, 20, 30, 40, 50, 60, 70, 80];
let arr2 = [10, 40, 70, 54, 78];
let intersection = [];

for (let num of arr1) {
    if (arr2.includes(num)) {
        intersection.push(num);
    }
}

console.log(`The intersecting elements are: ${intersection}`);
