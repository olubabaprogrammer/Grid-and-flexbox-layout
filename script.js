

/*  const score = 80;

if (score>=80) {
console.log("very good✅")
} 
 
else if (score>=40) {
console.log("pass")
}
else if (score>=50) {
console.log("credit")
}
else if (score>=60) {
console.log("upper credit")
}
else if (score>=70) {
console.log("good")
}
else  {
console.log("fail")
} */
 




/* let number = 39.99999;

if (number>=40) {
    console.log("Big Number")
}
else {
    console.log("small number")
}
 */




/* function greet(name) {
    console.log ("Hello " + name)
}

greet("olumide");
greet("ibukun");
greet("tunde");
 */ 



/* function add(a, b) {
    return a + b;
}
let result = add(9, 2);
console.log(result) 
 */




/* 
function checkAge(age) {
    if (age >= 60) {
        return "mama"
    } else {return "babe"}
}
console.log(checkAge(90))



function checkAge(age) {
    if (age >= 40) { return "cougar" }
    else { return "no go area" }

} 

console.log(checkAge(20))
console.log(checkAge(45)) 
*/



/* 
function sayHi(greeting) {
    console.log(greeting)
}
sayHi("hello")
sayHi("how are you")
sayHi("omo mi") */
/* 
function olukiki(a, b) {
    return (a+b);
}
const result = olukiki(24, 17)
console.log(result) */ 



/* DomManipulation */

/* let text = document.querySelector("#text");
let btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
    text.textContent = "helloooooo";
    text.style.color = "red";
    document.body.style.backgroundColor = "yellow";
});
 */



/* 
let text = document.querySelector("#text");
let btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
    if (text.textContent === "orrga") {
        text.textContent = "hello baby"
    } else {text.textContent = "orrga"}
}) */


/* let btn = document.querySelector("#btn");
let isBlue = true;

btn.addEventListener("click", function () {
    if (isBlue) {
        document.body.style.backgroundColor = "yellow";
        isBlue = false;
    } else {
        document.body.style.backgroundColor = "blue";
        isBlue = true;
    }
});
 */



/* 
let text = document.querySelector("#text");
let btn = document.querySelector("#btn")
let count = 0;

btn.addEventListener("click", function () {
    count = count + 1;
    text.textContent = count;
}); */




/* let btn = document.querySelector("#btn");
let text = document.querySelector("#text");

btn.addEventListener("click", function () {
    if (text.style.display === "none") {
        text.style.display ="block";
    }
    else {
        text.style.display = "none";
    }
    
}); */


/* classList simply means */

/* let text = document.querySelector("#text");
let button = document.querySelector("#btn");
let isRed = true;

button.addEventListener("click", function () {

    if (isRed) {
        isRed = false;

            text.classList.add("blue");
            text.classList.add("small");
            text.classList.remove("red");
            text.classList.remove("big");

    }
    else {
        isRed = true;

        text.classList.add("red");
        text.classList.add("big");
        text.classList.remove("blue");
        text.classList.remove("small");
    }

});
 */


/* 
let text = document.querySelector("#text");
let btn = document.querySelector("#btn");
isRed = true;

btn.addEventListener("click", function () {
    if (isRed) {
        isRed = false;
        text.classList.add("red");
        text.classList.add("big");
        text.classList.remove("blue");
        text.classList.remove("small");

    }
    else {
        isRed = true;
        text.classList.add("blue");
        text.classList.add("small");
        text.classList.remove("red");
        text.classList.remove("big");
    }
    
}); */


/* 
 let input = document.querySelector("#input");
let button = document.querySelector("#btn");
let text = document.querySelector("#text");


button.addEventListener("click", function () {
    if (input.value === "") {
        text.textContent = "please type something";
    }
    else {
        text.textContent = input.value;
        input.value = "";
    }
    
}); 
 */




/* let button = document.querySelector("#btn");

button.addEventListener("click", function () {
let p = document.createElement("p");
p.textContent ="I was created by JS"
document.body.appendChild(p);
}) */


/* let input = document.querySelector("#input");
let text = document.querySelector("#text");
let btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
if (input.value === "") {
    alert("please stop shebe");
}
else {
    let p = document.createElement("p");
    p.textContent = input.value;
    container.append(p)
    input.value = "";
}
    
}); */


/* 
innerText
textContent
innerHtml */


/* 
let ul = document.querySelector("ul");
let li = document.createElement("li");
li.textContent ="I was created by JS"
ul.appendChild(li)   */

/* project 1; */

/* let greetings = "hello world";
console.log(greetings) */


/* let todo =[];

let input = document.querySelector("#input");
let btn = document.querySelector("#btn");
let list = document.querySelector("#list");

btn.addEventListener("click", function () {
    let value = input.value;
    if (input.value === "") {
        alert("alaye type");
        return;
    }
    todo.push(value);
    input.value = "";
    render();
    });
    function render() {
        list.innerHTML = "";
        for (let i = 0; i < todo.length; i++)
    {
    let li = document.createElement("li");
    li.textContent = todo[i];

    let deletebtn = document.createElement("button");
    deletebtn.textContent = "delete";

    deletebtn.addEventListener("click", function () {
        todo.splice(i, 1);
        render();
    });

    li.appendChild(deletebtn);
    list.appendChild(li);
    input.value = "";
} } 
  */



/* project 2 */


/*  let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let result = document.querySelector("#result");

document.querySelector("#add").addEventListener("click", function () {
    let sum = Number(num1.value) + Number(num2.value);
    result.textContent = sum;
}); 

document.querySelector("#subtract").addEventListener("click", function () {
    let substract = Number(num1.value) - Number(num2.value);
    result.textContent = substract;
}); */

/* project3 */


/* let password = document.querySelector("#password");
let btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
    if (password.type === "password") {
        password.type = "text";
        btn.textContent = "Hide";
    } else {
         password.type = "password";
        btn.textContent = "show";
    }
}); */



/* let password = document.querySelector("#password");
let toggle = document.querySelector("#toggle");

toggle.addEventListener("click", function () {
    if (password.type === "password") {
        password.type = "text";
        toggle.textContent = "Hide";
    } else {
         password.type = "password";
        toggle.textContent = "show";
    }
});
 */






/* Arrays */



/* 

let todo = ["buy food","sleep", "study"];
todo.push("go gym");
todo.pop();
console.log(todo); */

/* let number = [10, 20, 30];
for (let i = 0; i < number.length; i++ )
{console.log(number[i++]);
} */


/* 
let fruit = ["apple", "banana", "mango"];
let list = document.querySelector("#list");

for  (let i =0; i < fruit.length; i++)
{
let li = document.createElement("li");
li.textContent = fruit[i];
list.appendChild(li);
} 

*/

/* document.body.innerHTML = "hey"; */

/* let variable1 = 33;
console.log(variable1);

let calculation = 2 + 2;
console.log(calculation + 2);

let result = calculation + 2;
console.log(result)

result = result + 10 ;
console.log(result) */

/* cart quantity project
let cartQuantity = 0;  */


 


/* const result = false ? 'truthy' : 'falsy';
console.log(result); */










/* 
let hour = 0 && 24;
hour = 1;
let name = 'olumind';

if (hour >= 6 && hour <= 12 ) {
 console.log( `Good Morning ${'olumind'}!`);
}else if (hour >= 13 && hour <= 17) {
    console.log(`Good afternoon ${'olumind'}!`);
}  else {
    console.log(`Good night ${'olumind'}!`);
} 


let age = 6;
const isHoliday = false;

if ((age <= 6 || age >= 65) && !isHoliday ) {

    console.log('qualified for discount');
}else {
     console.log('not qualified for discount');
     
}

let newAge = 18;

if (newAge < 13 || newAge > 60) {
    console.log('Discount ticket');
} else {
    console.log('Regular ticket');
}

let isLoggedIn = true;
let isAdmin = true;
if ((isLoggedIn = true) && isAdmin) {
    console.log ('Full access')
} else {
     console.log ('Limited access')
}

let score = 50;
if (score >= 70) {
    console.log('A');
}
else if (score >= 60 && score < 70) {
    console.log('B');
}
else if (score >= 50 && score < 59) {
    console.log('C');
}
else if (score < 50) {
    console.log('F');
}

let amount = 100;
let isMember = true;

if (amount >= 100 || isMember) {
    console.log('free shipping');
} else {
     console.log('pay for shipping');
}

let username = "";

if (username === "") {
    console.log("Enter Username");
} else {
    console.log("welcome");
}

let isWeekend = false;
let isHolidays = true;

if ( !isWeekend && !isHolidays) {
    console.log('ringing⏰')
} else {
    console.log('sleep more')
} 

let scores = 72;
let hasRecommendation = false;
let isInternational = true;
if ((score >= 80  || (score = 70 && hasRecommendation)) && !isInternational ) {
    console.log('Admitted')
} else {
    console.log('Not Admitted')
} */




/* 
let total =40;
let isMembers = true;
let hasCoupon = true;

if (total >= 50 && (total >= 200 || (isMembers && hasCoupon))) {
     console.log('Discount applied');
}else {
     console.log('No Discount');
}


let age = 18;
let doorOpen = true ;
let hasTicket = true;
let isVip = true;

if (age >= 18 && doorOpen && (hasTicket ||isVip)) {
    console.log('entry granted');
} else {
    console.log('entry not granted');
}





let isRegistered = true;
let orderTotal = 5000;
let hasLoyaltyPoints = 100;
let hasPromocode = true;
let isFirstOrder = true;

if (isRegistered && orderTotal >= 5000 && (hasPromocode || (hasLoyaltyPoints >= 100 || isFirstOrder))) {
    console.log('free delivery');
} else {
    console.log('delivery fee applied');
}


let random = Math.random();

if (random > 0.5) {
    result = 'head';
} else {
    result = 'tails';
}
  
let guess = 'head';

if (guess === result) {
    console.log('you win');
} else {
    console.log('you lose');
} */

/* function one1() {
    console.log('hello');
    console.log(2 + 2);
}
one1 ();
one1 (); */



/* 

 function young(cost, taxPercent = 0.1) {
    console.log(cost * taxPercent);
}
young(200, 0.2);
young(500); 


 

 function covertToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

 console.log(covertToFahrenheit(25)); 

 function covertToCelsius(fahrenheit) {
    return (fahrenheit - 32 ) * 5 / 9;
 }
 console.log(covertToCelsius(77));  



 function convertTemperature(degrees, unit) {
    if (unit === 'C') {
        return covertToFahrenheit(degrees) + 'F'
    } else {
        return covertToCelsius(degrees) + 'C'
    }
 }
 console.log(convertTemperature(77, 'F'));
 console.log(convertTemperature(25, 'C'));
 */




 
/* let cartQuantity = 0;
if (cartQuantity) {
    console.log('cart has product');
} else {
    console.log('cart has no product');
} 

function cartQ() {
    console.log(`cart quantity: ${cartQuantity}`);
    return cartQuantity
}


const product = {
name :'olu', price : 20
};

console.log(product);
console.log(product.name);
console.log(product.price); */




const student = {
    name:'olumide',
    score:90,
    grade: ""
};

function assignGrade(student) {
    if (student.score >= 80) {
        student.grade = 'A';
    } else if (student.score >= 70) {
        student.grade = 'B';
    } else if (student.score >= 60) {
        student.grade = 'C';
    } else if (student.score >= 50) {
        student.grade = 'D';
    } else {
        student.grade = 'F';
    }
    console.log(`${student.name} scored ${student.score} Grade ${student.grade}`);
}/* 
assignGrade(student); */


const account = {
owner:'olumind',

balance: 100
}; 

function deposit(amount) {
 account.balance = account.balance + amount
 console.log(`Deposited ${amount}, Newbalance ${account.balance}`);   
}
function withDraw(amount) {
    if (amount > account.balance) {
        console.log('insufficient fund');
    } else {
        account.balance = account.balance - amount;
        console.log(`Withdraw ${amount}, Newbalance ${account.balance}`);
    }
}

/* 
deposit(80);
withDraw(500); */


/* 

const gameScore = {
    win:0,
    lose:0,
    tie:0
};

function rollDice() {
   let result = Math.floor(Math.random() * 6) +  1;
   return result;
}
function playRound() {
    const myMove = rollDice();
    const computerMove = rollDice();

    if (myMove > computerMove) {
        gameScore.win = gameScore.win + 1
        console.log(`you played ${myMove} ,computer played ${computerMove} - you win!`)
    } else if (computerMove > myMove) {
        gameScore.lose = gameScore.lose + 1
        console.log(`you played ${myMove} ,computer played ${computerMove} - you lose!`)
    } else {
        gameScore.tie = gameScore.tie + 1
         console.log(`you played ${myMove} ,computer played ${computerMove} - tie!`)
    }
    console.log(`wins = ${gameScore.win}, lose = ${gameScore.lose}, tie  ${gameScore.tie}`)
}
 */
/* 
playRound();
playRound();
playRound();
playRound();
playRound();
playRound();
playRound(); */

/* 
let obj = {
    name:'olu',
    greet: function () {
        return "hello";
    }
};
console.log(obj.greet());



let product = {
    name:'basketBall',
    price:2000

};
 product.price = product.price + 500;
 product['delivery-time'] ='3 days';
console.log(product);


 const p1 = {name:'olu', price:5000}
const p2 = {name:'jide', price:1000}

function comparePrice(product1, product2) {
    if (product1.price <= product2.price) {
        return product1;
    } else {
         return product2;
    }

}
console.log(comparePrice(p1, p2));

const project1 = {name:'olu', price:50};
const project2 = {name:'olu', price:50};

function isSameProduct(projec1, project2) {
    if (project1 === project2) {
        return true;
    } else {
        return false;
    }
}
isSameProduct();

console.log(JSON.stringify(product));

JSON.parse(JSON.stringify(product))
let jsonStirng = JSON.parse(JSON.stringify(product));

console.log(jsonStirng);

localStorage.setItem("name", "ifemi womi, awwwwn ");
let name = localStorage.getItem("name");
console.log(name);

let user = {
    name:"john",
    age:25
}
localStorage.setItem("user", JSON.stringify(user));
let ls = localStorage.getItem("user");
console.log(ls);

let a = 10;
let b = a;
 a = 20
console.log(a);
console.log(b);

let user1 = {name: "A"};
let user2 ={ user1};
user2.name = "B";
console.log(user1.name); */

/* const player = {
    name:"john",
    score:40,
    isMember: true
}; 

function checkPass (user) {
    if (user.score >= 50) {
        return "pass";
    } else {
        return "fail";
    }
}

function applyBonus(user) {
    if (user.isMember) {
       user.score = user.score +10 ;
    }
    return user;
}

function getFinalResult(user) {
    const updatedUser = applyBonus(user);
    const result = checkPass(updatedUser);

    return `${player.name}: score = ${updatedUser.score}, result = ${result}`;
} 
console.log(getFinalResult(player));    */



const inputElement = document.querySelector('#jsINPUT');
const jsButton = document.querySelector('#jsButton');
let newText = document.createElement('p');

/* const todoLIst = [];
todoLIst.push(name); */

/* jsButton.addEventListener("click", function addTodo() {
    let name = inputElement.value;
    
    
    newText.textContent = name;

    inputElement.value = '';
});

 */


const no = [1, 1, 3];

let total = 0;

for (let i = 0; i < no.length; i++) {
  total = total + no[i];
  
}

console.log(total);   

const ppp = [5, 10, 15, 20, 25];

let sum = 0;

for (let i = 0; i < ppp.length; i++) {
  sum = sum + ppp[i];
}

console.log(sum);



const crea = [10, 20, 30, 40, 50];
 let largest = crea[0];


for (let i = 0; i < crea.length; i++) {
  if (crea[i] > largest) {
    largest = crea[i];
  }
  
} 

console.log(largest);

const loop = [5, 12, 8, 3, 20, 15];
let smallest = loop[0];

for (let i = 0; i < loop.length; i++) {
    if (loop[i] < smallest) {
        smallest = loop[i]
    }
    
}

console.log(smallest);


const listWord = ["apple", "banana", "cherry", "date"];
let longest = listWord[0];

for (let i = 0; i < listWord.length; i++) {
    if (listWord[i].length > longest.length) {
      longest = listWord[i];  
    }
}

console.log(longest);

const mixed = [10, "hello", beautiful = true, null, undefined, {name:"john"}];
for (let i = 0; i < mixed.length; i++) {
    console.log(mixed[i])
    
}

const nested = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
 console.log(nested[1][1]);

 const pupils = [
    {name:"alice", age:20, score:85},
    {name:"bob", age:19, score:92},
    {name:"charlie", age:21, score:78}
 ];
for (let i = 0; i < pupils.length; i++) {
    console.log(pupils[i].name + ' - ' + pupils[i].score);
    
}




const product = [
    {name:"laptop", price:1000, instock:true},
    {name:"phone", price:500, instock:false},
    {name:"tablet", price:300, instock:true},
    {name:"headphones", price:100, instock:true}
];

let totalValue = 0;
let count = 0;
for (let i = 0; i < product.length; i++) {
    const item = product[i];
    if (item.instock) {
       totalValue = totalValue + item.price;
        console.log(item.name + '-$' + item.price);
        count ++;
        
    }
    
}

console.log("Total value of product in stock: $" +totalValue);
console.log("product instock is " + count);


const nomber = [1, 2, 3, 4, 5];

const doubled = nomber.map(num => num * 2
);

console.log(doubled);

const nombers = [1, 5, 3, 8, 2, 9, 4];

let clean = nombers.filter(items => items > 5);

console.log(clean);


const numbber = [5, 10, 15, 20];

 const news = numbber.reduce((sum, num) => {
    return sum + num;
}, 0);      
console.log(news);



const nombbr = [1, 2, 3, 4, 5];

const times =nombbr.map(items => items * items);

console.log(times);

const nimber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const even = nimber.filter(num => num % 2 === 0);

console.log(even);

const tiimes = [10, 20, 30, 40, 50];

const tottal = tiimes.reduce((sum , num)=> {
    return sum * num;
}, 1);

console.log(tottal);

const students = {
    name:"john",
    age:20,
    grades: [85, 90, 78, 92],
    school:"ABC University"    
};

console.log(students.name);
console.log(students.grades[0]);
console.log(students.grades[3]);

const grades = [85, 90, 78, 92];

let tootal = grades.reduce((sum, num) => {
    return sum + num;
},0)

 console.log(tootal);
 
tootal = tootal / grades.length;

console.log(tootal);

const calculator = {
    add: function (a, b) {
        return a + b;
    }
};

console.log(calculator.add(5, 3));
 
const stuudent = {
    name: "john",
    grades: [85, 90, 78, 92],
    calculateAverage: function () {
        const sum = this.grades.reduce((total, grade) =>  total + grade, 0);
        return sum / this.grades.length;
    }
};

console.log(stuudent.calculateAverage());

const aray = [0, 10, 20, 30];

const fara = aray.map(function (c) {
    return (c * 9/5) + 32;
});
console.log(fara);

const products = [
    {name:"laptop", price:1000},
    {name:"phone", price:500},
    {name:"tablet", price:300},
];

const doThis = products.map(function (products) {
   const newArr = [];
   return products.name.toUpperCase();
});

console.log(doThis);

const newNum = [1, 2, 3, 4, 5];

const square = newNum.map(function (num) {

    return {
          oridinal:num,
          square:num * num
        };


});

console.log(square);

const numb = [10, 25, 30, 45, 50, 60];

const bob = numb.filter(function (num) {
    return num > 40;
});

console.log(bob);   



const producpt = [
    {name:"laptop", price:1000, instock:true},
    {name:"phone", price:500, instock:false},
    {name:"tablet", price:300, instock:true},
    {name:"headphones", price:100, instock:true}
];

const instock = producpt.filter(function (item) {
    return item.instock;
});

console.log(instock);


const pupil = [
    {name:"alice", age:20, gpa:3.8},
    {name:"Bob", age:19, gpa:2.5},
    {name:"charlie", age:21, gpa:3.2},
    {name:"Diana", age:20, gpa:3.9}
];

const outstanding = pupil.filter(function (num) {
   return num.gpa > 3.5; 
});

console.log(outstanding);

const arrr = [2, 3, 4, 5];

const newStuff = arrr.reduce(function (total,item) {
    return total * item;
},1);

console.log(newStuff);

const producs = [
    {name:"laptop", price:1000},
    {name:"phone", price:500},
    {name:"tablet", price:300},
];

const adeshola = producs.reduce( (total, item) => {
    return total + item.price;
},0);

console.log(adeshola);

const worrds = ["hello", "world", "javascript"];

worrds.forEach(word => {
    console.log(word.toUpperCase());
});

const greet =(name) => { return "hello " + name + "!" };

console.log(greet("olumide"));

const addNumber = (a, b) => {return a + b};

console.log(addNumber(5, 5));

const prices = [100, 200, 350, 4450, 1000];

const newPrices = prices.map((price) => {return  price * 1.1});

console.log(newPrices);

const greeet = (name, callback) => {
    const message = "hello " + name;
    callback(message);
};

const shout = (msg) => console.log(msg.toUpperCase());

greeet('OLUMIDE ', shout);


const calculate = (a, b, operation) => {
    return operation (a, b);
};

const add = (a, b) => {
return a + b;
};

const multiply = (a, b) => {
return a * b;
};

console.log(calculate(5, 4, add));
console.log(calculate(5, 4, multiply));

const sendNotification = (message, callback) => {
    callback(message);
};

const sendBySms = (message) => {
    console.log("SMS: " + message);
     
};

const sendByEmail = (message) => {
    console.log("Email: " + message);
};
sendNotification("You are Hired!", sendBySms);
sendNotification("You are Hired!", sendByEmail);

const transactions = [200, -150, 500, -400, 1000, -50];

const processTransactions = (transactions, callback) => {
   return callback(transactions);
}

const getDeposits = (transactions) => {
   return transactions.filter((funds) => funds > 0);
};

const getWithdrawals = (transactions) => {
    return transactions.filter((funds) => funds < 0);
};

console.log(processTransactions(transactions, getDeposits));
console.log(processTransactions(transactions, getWithdrawals));


/* const person = {name:"shola", sex:"female", age:25, 
complexion:"fair"};

const {name, sex, age, complexion} = person;

console.log(name);
console.log(sex);
console.log(age);
console.log(complexion); */

/* const studentScores = [85, 92, 78, 95, 60];

const [first, second, third] = studentScores;

console.log(first);
console.log(second);
console.log(third);
 */

const order = {
    orderId: 1023,
    customer: "Olumide",
    meal: "Jollof Rice",
    price: 3500,
    delivered: false
}

const {customer, meal, price} = order;


console.log(`${customer} ordered ${meal} for #${price}`);

const jss3Students = ["olumide", "tunde", "amaka"];
const ss1Students = ["shola", "mabel", "yinka"];

const allStudents = [...jss3Students, ...ss1Students];

console.log(allStudents);

const user = {name:"Olumide", age:25, city: "lagos"};

const updatedUser = {...user, city: "Abuja", job: "developer"};

console.log(updatedUser);

const cart = ["Rice", "Beans", "Garri"];
const newItems = ["Tomatoes", "Pepper"];
const updatedCart = [...cart, ...newItems];

const orderSummary = {
    items:updatedCart, 
    totalItem:updatedCart.length};

console.log(orderSummary);

try {
    const user = null;
    console.log(user.name);
    
} catch (error) {
    console.log ("error: could not get user name")
}
console.log("program still running");

function registeredUser(age) {
    try {
        if (age < 18) {
            throw new Error("you must be 18 or older to register");   
        }
        else {
            console.log("registration successful");
            
        }
    } catch (error) {
        console.log(error.message);
        
    }
};

registeredUser(15);
registeredUser(25);

function transferMoney(balance, amount) {
    try {
        if (amount > balance) {
            throw new Error("Insufficient funds");
        } else if (amount  <= 0) {
            throw new Error("invalid transfer amount");
        } else if (amount <= balance) {
            console.log("Transfer successful! New balance: #" + (balance - amount));
            
        }


    } catch (error) {
        console.log(error.message);
        
    }
};
transferMoney(5000, 8000);
transferMoney(5000, -200);
transferMoney(5000, 2000);

class PRODUCT {
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
};

const prodocts1 = new PRODUCT ("Laptop", 500000, "Electronics");
const prodocts2 = new PRODUCT ("Rice", 2000, "Food");
const prodocts3 = new PRODUCT ("shoes" , 45000, "Fashion");

console.log(prodocts1);
console.log(prodocts2);
console.log(prodocts3);

class bankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
        
    }
     deposit(amount) {
        this.balance = this.balance + amount;
        console.log(`${this.owner} deposited ${amount}, New balance: #${this.balance}`);
    }
 withDraw(amount) {
     this.balance = this.balance - amount;
      console.log(`${this.owner} withdrew ${amount}, New balance: #${this.balance}`);
}


}

const olumideAcc = new bankAccount ("Olumide", 5000);

olumideAcc.deposit(5000)
olumideAcc.withDraw(1000)


class studernt {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
     getAverage() {
        const total = this.score.reduce((sum, score) => sum + score, 0);
        const average = total / this.score.length;
        console.log(`${this.name} average score is: ${average}`);
        return average;
    }

     getGrade() {
        const average = this.getAverage();
        if (average >= 80) {
            console.log('A');
        } else if (average >= 70) {
            console.log('B');
        } else if (average >= 60) {
            console.log('C+');
        } else if (average >= 50) {
            console.log('C');
        } else if (average >= 40) {
            console.log('D');
        } else {
            console.log('F');
        }

    }
};

const student1 = new studernt ("shola", [20, 15, 40 ,15]);
const student2 = new studernt ("olumide", [10, 23, 50 ,25]);

student1.getGrade();
student2.getGrade();

/* const myPromise = new Promise((resolve, reject) => {
    const isLoggedIn = false;
    if (isLoggedIn) {
        resolve("it worked")
    } else {
        reject("it failed")
    }
});

myPromise
.then((result) => console.log(result))
.catch((error) => console.log(error)); */


/* const deliverOrder = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("your order has been delivered");
    }, 2000);
});

deliverOrder
.then((result) => console.log(result));
 */

const amount = 5000;
const processPayment = new Promise((resolve, reject) => {
    if (amount > 0) {
        resolve(`payment of #${amount}`);
    } else {
        reject("invalid amount")
    }
});

async function recievedPayment() {
    try {
        const result = await processPayment
        console.log(result);
        
    } catch (error) {
        console.log(error);
        
    }
};
recievedPayment();
















/* processPayment
.then((result) => console.log(result))
.catch((error) => console.log(error)) */

async function checkDelivery() {
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("your package has arrived");
        }, 2000);
        
    })
    try {
            const result = await myPromise;
            console.log(result);
            
        } catch (error) {
            console.log(error);
            
        }
}
checkDelivery();

async function transferFunds(senderBalance, amount) {
    const myPromise = new Promise((resolve, reject) => {
        if (amount < senderBalance) {
            resolve(`Transfer successful!, you redrawed #${amount}. New Balance: #${senderBalance - amount}`);
        }else {
            reject("Insufficient funds")
        }
        
    });
    try {
        const result = await myPromise;
        console.log(result);
        
    } catch (error) {
        console.log(error);
        
    }
};

transferFunds(2000, 500);
transferFunds(2000, 5000);

async function getUser() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const data = await response.json();
        console.log(data.name);
        console.log(data.email);
    } catch (error) {
        console.log(error);
        
    }
};


getUser();


async function getPost() {
    try {
        const requestedPosts = await fetch("https://jsonplaceholder.typicode.com/posts");
        const recievedPost = await requestedPosts.json();
        const slicedPost = recievedPost.slice(0, 5);
        slicedPost.forEach(post => {
            console.log(post.title);
            
        });
    } catch (error) {
        console.log("Error: " + error);
    }
};

getPost();

async function displayUser() {
    try {
        const getUser = await fetch("https://jsonplaceholder.typicode.com/users");
        const recievedUser = await getUser.json();
        const firstThreeUser = recievedUser.slice(0, 3);
        firstThreeUser.forEach(user => {
            const div = document.createElement('div');
            div.textContent = "name: " + user.name + " | email: " + user.email;
            document.body.appendChild(div);
        });
    } catch (error) {
         console.log("Error: " + error);
    }
};

displayUser();