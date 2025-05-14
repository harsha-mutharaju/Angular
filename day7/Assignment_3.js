// Assignment - 3

// 1. write a program to print ccurrence of each character
//input: 'entertainment'
//output: { e:3 , n:2 , t: 3 ....}

let q1_str = 'entertainment'
let q1_obj = {};
for(let i of q1_str){
    if(i !== ' '){
        q1_obj[i] = (q1_obj[i] || 0)+ 1;
    }
}
console.log('1. Occurrence of each character in string : ',q1_obj);

//2. Write a program to print the character which is repeated max number of times
//input: 'hello world'
//output : 'L'

let q2_str = 'hello qqqqqqworld';
let q2_obj = {};
let q2_max = '';
let q2_c = 0;
for(let i of q2_str){
    if(i !== ' '){
        q2_obj[i] = (q2_obj[i] || 0) +1;
    }
}
for(let i in q2_obj){
    if(q2_obj[i] > q2_c){
        q2_c = q2_obj[i];
        q2_max = i;
    }
}
console.log('2. The character which is repeated max number of times  : ',q2_max);

//for (let ch of str) res += ch === ch.toUpperCase() ? ch.toLowerCase() : ch.toUpperCase();

//3. write a program to swap the case for each character in a string

let q3_str = 'hEllo WOrld'
let q3_ans ='';
q3_str = q3_str.split('')
for(let i =0; i<q3_str.length;i++){
    if(q3_str[i] === q3_str[i].toLowerCase()){
        q3_ans += q3_str[i].toUpperCase();
    }
    else{
        q3_ans+=q3_str[i].toLowerCase();
    }
}
console.log('3. Swap case for each character in a string : ',q3_ans);

//4. Abbrevation
let q4_str = 'Rabindra Nath Tagore';
let words = q4_str.trim().split(' ');

let q4_ans = '';

for (let i = 0; i < words.length; i++) {
  if (i < words.length - 1) {
    q4_ans += words[i].charAt(0).toUpperCase() + '. ';
  } else {
    q4_ans += words[i].toLowerCase();
  }
}

console.log(`4. Abbrevation of ${q4_str} is : `+q4_ans);


//5. shifting characters by 1
// code 122 for z , so checking with condition
let q5_str = 'abcxyz'
let q5_ans = '';
for(let i of q5_str){
    q5_ans += i === 'z' ? 'a' : String.fromCharCode(i.charCodeAt(0)+1);
}
console.log('5. Shifting the characters by one : ',q5_ans);


// 6. write a program to validate paranthesis
let q6_str = '([{}])';
let stack = [];
let q6_map = { ')': '(', '}': '{', ']': '[' };
let isValid = true;

for (let ch of q6_str) {
  if ('({['.includes(ch)) {
    stack.push(ch);
  } else if (')}]'.includes(ch)) {
    if (stack.length === 0 || stack.pop() !== q6_map[ch]) {
      isValid = false;
      break;
    }
  }
}

console.log(isValid && stack.length === 0 ? '6. Paranthesis is - valid' : '6. Paranthesis is - not valid');


// 7. write a program to get 3 letter word and print its permutations

let q7_str = 'xyz'
console.log('7. Printing permutations of given string : ');
for(let i = 0 ; i < 3 ; i++){
    for(let j = 0 ; j < 3 ; j++){
        for(let k = 0 ; k < 3 ; k++){
            if(i!== j && j !==k && k!==i){
                console.log(q7_str[i]+q7_str[j]+q7_str[k],'\t');
            }
        }
    }
}

function q7(str, res = '') {
    if (!str.length) {
        console.log(res);
        return;
    }
    
    for (let i = 0; i < str.length; i++) {
        let current = str[i]; 
        let remaining = str.slice(0, i) + str.slice(i + 1);
        q7(remaining, res + current);
    }
}

q7('ABC');


//8. Integer to Roman

function intToRoman(num) {
    const dic = [
        { val: 1000, sym: 'M' },
        { val: 900, sym: 'CM' },
        { val: 500, sym: 'D' },
        { val: 400, sym: 'CD' },
        { val: 100, sym: 'C' },
        { val: 90, sym: 'XC' },
        { val: 50, sym: 'L' },
        { val: 40, sym: 'XL' },
        { val: 10, sym: 'X' },
        { val: 9, sym: 'IX' },
        { val: 5, sym: 'V' },
        { val: 4, sym: 'IV' },
        { val: 1, sym: 'I' }
    ];

    let q8_res = '';
    for (let item of dic) {
        while (num >= item.val) {
            q8_res += item.sym;
            num -= item.val;
        }
    }
    return q8_res;
}

console.log('8. Roman to Integer conversion :', intToRoman(9));   

//9. Roman to Integer
function romanToInt(s) {
    const dic = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let total = 0;
    let prev = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        let current = dic[s[i]];
        if (current < prev) {
            total -= current;
        } else {
            total += current;
        }
        prev = current;
    }
    return total;
}

console.log('9. Roman to Integer :', romanToInt('XL')); 

