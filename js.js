/* 
const player = {
    name:"john",
    score:40,
    isMember: true
};

function addBonus(user) {
    if (user.isMember) {
        user.score = user.score + 10; 
    }
    return user;
}

function getGrade(user) {
    if (user.score >= 70) {
        return "A";
    }
    else if (user.score >= 60 && user.score <= 69) {
        return "B";
    }
    else if (user.score >= 50) {
        return "C";
    }
    else {
        return "F";
    }
}

function processPlayer (user) {
    let improvement = addBonus(user);
    let improvedGrade = getGrade(improvement);

    return (`${player.name} scored ${improvement.score} ,${improvedGrade}`);
}

console.log(processPlayer(player)); 

function greet() {
    return "hello, olumide!";
}
let message = greet();
console.log(message);

function multiply(a, b) {
    return a * b;
}

let result = multiply(4, 5);
let result2 = multiply;


console.log(result);
console.log(result2);



function greetUser(name) {
    return "hello "+ name;
}

let player1 = "olumide";
greetUser(player1)

console.log(greetUser(player1));


function double(num) {
    return num *2;
}

function tripple(num) {
    return num * 3;
}

function combined(num) {
    let doubleResult = double(num);
    let trippleResult = tripple(num);

    return doubleResult + trippleResult;


}

                                          
console.log(combined(5)); 
 */

/* function addTax (price) {
    return price + (price * 0.1);
}

function formatPrice(price) {
    return `the final price is ${price}`;
}

function proccessPrice(price) {
    const newPrice = addTax(price);
    const involvedTax = formatPrice(newPrice);

    return involvedTax;
}
console.log(proccessPrice(100)) 


function convertToUSD(amount) {
    return amount * 1.5;
}

function addShipping (amount) {
    return amount + 20;
}

function formatOrder (amount) {
    return `Yout total order is USD is $${amount}`;
}

function processOrder(amount) {
    const firstAmount = convertToUSD(amount);
    const shippingFee = addShipping(firstAmount);
    const resultss = formatOrder(shippingFee);

    return resultss;
}

console.log(processOrders (100));
 */


/* 
const car = {
  brand: "toyota",
  speed: 60,
};

function turboBoost(vehicle) {
  vehicle.speed = vehicle.speed + 40;
  return vehicle;
}

console.log(turboBoost(car));

const phone = {
  brand: "samsung",
  battery: 20,
  storage: 64,
};
function chargeBattery(device) {
  device.battery = device.battery + 80;
  return device;
}
function upgradeStorage(device) {
  device.storage = device.storage * 2;
  return device;
}
function upgradePhone(device) {
  const newBattery = chargeBattery(device);
  const newStorage = upgradeStorage(newBattery);
  return newStorage;
}
console.log(upgradePhone(phone));

const student = {
  name: "olumide",
  grade: 40,
  isPremium: true,
};

function addBonus(student) {
  if (student.isPremium) {
    student.grade = student.grade + 20;
  }
  return student;
}

function getResult(student) {
  if (student.grade >= 70) {
    return "pass";
  } else {
    return "fail";
  }
}

function processStudent(student) {
  const newStudent = addBonus(student);
  const newResult = getResult(newStudent);
  return `${student.name} got a ${newResult} because he got ${newStudent.grade}`;
}

console.log(processStudent(student));

const player = {
  name: "olumide",
  xp: 40,
};

function addExperience(player) {
  player.xp = player.xp + 15;
  return player;
}

function getLevel(player) {
  if (player.xp >= 50) {
    return "leveled up!";
  } else {
    return "keep going💪🏻";
  }
  return getLevel;
}

function processGame(player) {
  const newExperience = addExperience(player);
  const newOlumide = getLevel(newExperience);

  return `${player.name} just ${newOlumide} `;
}

console.log(processGame(player));

const cars = {
  brand: "toyota",
  speed: 60,
};

console.log(JSON.stringify(cars));

let parses = JSON.stringify(cars);

console.log(JSON.parse(parses));

localStorage.removeItem("username") 

localStorage.getItem("username", "olumide");
localStorage.getItem("username");

let torage = localStorage.getItem("username");
localStorage.clear() 

console.log(torage);


const button = document.querySelector('#btn');
const box = document.querySelector('#container');

button.addEventListener("click", function () {
  const newElement = document.createElement('p');
  newElement.textContent = "new item added";
  box.appendChild(newElement);
});

const prayer = {
  name: "olumide",
  score: 50,
};
localStorage.setItem("prayer", JSON.stringify(prayer));
console.log(localStorage.getItem("prayer"));

let jsonPrayer = localStorage.getItem("prayer");

console.log(JSON.parse(jsonPrayer));

const oobj = {
  name: "olumide",
  age: 25,
  isLoggedIn: true,
};

JSON.stringify(oobj);
localStorage.setItem("user", JSON.stringify(oobj));

localStorage.getItem("user");

let newUser = localStorage.getItem("user");

let parsedUser = JSON.parse(newUser);

console.log(parsedUser);
 */ 


/* document.body.textContent = 'changed'; */

const getText = document.querySelector('#myInput');
const button = document.querySelector('#btn');
const ulLIst = document.querySelector('#list');



button.addEventListener('click', function () {
button.textContent = "added";
setTimeout(() => {
  document.querySelector('#btn').textContent = "add";
}, 2000);





const newElement = document.createElement('li');
/* newElement.style.backgroundColor = 'red'; */
ulLIst.appendChild(newElement);

const textSpan = document.createElement('span');
textSpan.textContent = getText.value;
newElement.appendChild(textSpan);

const deleteBtn = document.createElement('button')
deleteBtn.textContent = 'delete';
newElement.appendChild(deleteBtn);

const editBtn = document.createElement('button');
editBtn.textContent = 'edit'
newElement.appendChild(editBtn);

getText.value ="";

editBtn.addEventListener('click', function () {
  textSpan.textContent = "edited"
})


deleteBtn.addEventListener ('click', function () {
newElement.remove();
  
});
  
});


const newP = document.querySelector('#messi');

let coaount = 5;

const interval = setInterval(() => {
  newP.textContent = coaount;
  coaount = coaount - 1;

  
    if (coaount < 0) {
      newP.textContent = "time up";
    }

  if (coaount < 0) {
    
    clearInterval(interval);
    
  }

}, 1000);








const newStyle = document.querySelector('#newStyle')

newStyle.addEventListener('click', function () {
  newStyle.textContent = "processing....";

  setTimeout(() => {
    const done = newStyle.textContent = "Done";
    newStyle.textContent = "Done";

  setTimeout(() => {
     newStyle.textContent = "Start";
  }, 2000);


   

 /*  if (interval === done) {
    clearInterval(interval)
  } */

  },3000 );






});






const startBtn = document.querySelector('#startBtn');
const pText = document.querySelector('#pText');


  startBtn.addEventListener('click', function () {
   let count = 5;

    const milan = setInterval(() => {

      if (count < 1) {
      pText.textContent = "time up";
      clearInterval(milan);
   }

   else {
      pText.textContent =  count + ' seconds left';
      count = count - 1;
   }

    }, 1000);



  });





const ppp = [5, 10, 15, 20, 25];

let sum = 0;

for (let i = 0; i < ppp.length; i++) {
  sum = sum + ppp[i];
}

console.log(sum);

const nombers = [2, 4, 6, 8, 10]

let times = 1;

for (let i = 0; i < nombers.length; i++) {
  times = times * nombers[i];
  
}

console.log(times)


const words = ["hello", "world", "javascript"];

for (let i = 0; i < words.length; i++) {
  console.log(words[i].toUpperCase());
  
}

const box = [1, 2, 3, 4, 5];
let count = 0;


for (let i = 0; i < box.length; i++) {
  if (box[i] > 2) {
    count = count + 1
  }
}

console.log(count);

const log = [1, 2, 3, 4];

for (let i = 0; i < log.length; i++) {
  if (log[i] > 20) {
    console.log(log[i]);
  }
}
