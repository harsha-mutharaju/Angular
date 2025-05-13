let user = {
    name: 'sachin',
    'last name': 'tendulkar',
    age: 35,
    add: 'mumbai'
};

console.log(user.name);
console.log(user['age']); 

console.log(user['last name']); // tendulkar

let x = 'add';
console.log(user.x); 
console.log(user[x]); 

for (key in user) {
    console.log(key + " ====== " + user[key]);
}


let allkeys = Object.keys(user);
console.log(allkeys.length);