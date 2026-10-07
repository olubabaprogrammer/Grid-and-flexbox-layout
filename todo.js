
/* const input = document.querySelector('#todoInput');
const btn = document.querySelector('#addBtn');
const ulList = document.querySelector('#todoList'); */
 /* 
const todos = [];

    function addTodo() {
       const inputValue = input.value;
        
    const todoObj = {
        id:Date.now(),      
        text:inputValue,
        completed:false
    }
    todos.push(todoObj);
    input.value = "";
    displayTodo();
 
    };

       btn.addEventListener("click", function () {
        addTodo();
    });

    function displayTodo() {
        ulList.innerHTML = '';
        todos.forEach(todo => {
            const li  = document.createElement("li");
            li.textContent = todo.text;
            ulList.appendChild(li);
            const deletebtn  = document.createElement("button");
            
            deletebtn.textContent = "delete";
            li.appendChild(deletebtn);

            deletebtn.addEventListener('click', function () {
                li.textContent = '';
            });
        });

    }; */

/* 
    const age = 11;
    if (age >= 18) {
        console.log("adult");
         
    }
    else {
        console.log("minor");   
    }
    console.log(age);
    
    let fruits = ["apple", "banana", "orange"];

    fruits.push("grape") 
    console.log(fruits);
    
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < num.length; i++) {
     console.log(num[i]);
}


const text = document.querySelector('#head');
const btn = document.querySelector('#addBtn');
btn.addEventListener('click', function () {
    text.textContent = "clicked";
})

let arr = [45, 78, 92, 60];
for (let i = 0; i < arr.length; i++) {
    if (arr > 70) {
        console.log(arr);
    };
    
};
console.log(arr);

const car = {
brand:"tesla",
year:2025,
color:"red"};
console.log(car.brand);

const user = [
    {name:"olumide", age:25},
    {name:"adeshola", age:15}];
for (let i = 0; i < user.length; i++) {
    console.log(user[i].name);
}




function doubleNumber(a) {
    return a * a;
}
console.log(doubleNumber(5));


let nomber = 110;

function isEven(nomber) {
    if (nomber % 2 === 0) {
        return true   } 
        else {
        return false;  }

};
console.log(isEven(nomber));






tasks.shift();

console.log(tasks);


const tasks = ["buy milk", "walk dog", "walk babe", "walk baby"];
function showList (tasks) {
    for (let i = 0; i < tasks.length; i++) {
        console.log(tasks[i]);

    }
    return "done";
}
console.log(showList(tasks));
 */ 

 
/*


function dispalyProducts() {
    productArr.forEach(animals => {
        const li = document.querySelector('li');
    });
} */

 const inputBar = document.querySelector('#input');
const searchBar = document.querySelector('#search');
const animalList = document.querySelector('#animalList');


const allProducts = [
    {name:"laptop", price:5000},
    {name:"powrbank", price:500},
    {name:"phone", price:1200},
    {name:"tablet", price:1000}
];

let currentProducts = allProducts;

function displayProduct() {
    animalList.innerHtml = '';
    currentProducts.forEach(product => {
       const li = document.createElement('li');
       li.textContent = `${product.name} -$${product.price}`;
       animalList.appendChild(li);
    });
}

function filterItem(search) {
    const searchText = inputBar.value;
    if (search === '') {
     currentProducts = allProducts
    } else {
        currentProducts = allProducts.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()));
    }
    displayProduct();
};

searchBar.addEventListener('click', filterItem);

