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
let q6_ans = '';
let q6_map = { ')': '(', '}': '{', ']': '[' };
for (let i of q6_str) {
    if ('({['.includes(i)) {
        q6_ans += i;
    } else if (')}]'.includes(i)) {
        let q6_last = q6_ans[q6_ans.length - 1];
        if (q6_last === q6_map[i]) {
            q6_ans = q6_ans.slice(0, -1);
        } else {
            q6_ans += i; 
            break;
        }
    }
}

console.log(q6_ans === '' ? '6. Paranthesis is - valid' : '6. Paranthesis is - not valid');

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
