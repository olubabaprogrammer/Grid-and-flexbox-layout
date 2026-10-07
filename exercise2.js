// destructuring

let user = {name: "Olumide", age: 25, country:"Nigeria"};
//let { name, age, country} = user;
let { name: userName, age: userAge, country: userCountry} = user;

console.log(userName);
console.log(userAge);
console.log(userCountry);

let product = {
    title: "Wireless Headphones",
    price: 15000,
    brand: "sony",
    instock: true
};

let {title, price} = product;

console.log(title);
console.log(price);


let scores = [98, 85, 76, 64, 50];

let [firstPlace, secondPlace, , fourthPlace] = scores;

console.log(firstPlace);
console.log(secondPlace);
console.log(fourthPlace);


let order = {
id: 102,
address: {
    city: "Lagos",
    state: "Lagos state"
}
};

let {address: {city, state} } = order;

console.log(city);
console.log(state);


function setUpPayMent({amount, currency, method}) {
  console.log("Amount: " + amount);
  console.log("Currency: " + currency);
  console.log("Method: " + method);
    
};

setUpPayMent({amount:3000, currency: "Dollars", method:"Transfer"});


// spread operator
let cart = ["Shoes", " Bags"];
let updatedCart = [...cart, "skirts"];

console.log(cart);
console.log(updatedCart);


let playlistA = ["song1", "song2"];
let playlistB = ["song3", "song4"];

let mergedPlaylist = [...playlistA, ...playlistB];

console.log(mergedPlaylist);

let theUser = {
    name: "Olumide",
    email: "old@example.com",
    country: "Nigeria"
};

let theUpdatedUser = {...theUser, email:"new @example.com"};

console.log(theUpdatedUser);


function calculateTotal(...price) {
   return price.reduce(function (total, item) {
    return total + item; 
  });  
};

console.log(calculateTotal(1000, 2000, 500));
console.log(calculateTotal(100, 200, 300, 400));


let basePhone = {
    brand: "Samsung",
    storage: "128GB",
    price: 200000
};

let upgrade = {
    storage: "256GB",
    price: 250000
};
let finalPhone = {...basePhone, ...upgrade};

console.log(finalPhone);


// try and catch

try {
    let age = 25;
    if (age < 18) {
      throw new Error("you must be 18 or older");
      
    } else {
        console.log("Access granted");
        
    }
} catch (error) {
        console.log(error.message);
}

try {
    let data = "{name: Olumide}";
    let result = JSON.parse(data);
    console.log(result);
    

} catch (error) {
    console.log("failure to parse data:" + error.message);
    
}

function safeDivide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
            
        } else {
            return a / b;
        }
    } catch (error) {
        console.log(error.message);
        return null;
        
    }
};

console.log(safeDivide(10, 2));
console.log(safeDivide(10, 0));


function registerUser(username, password) {
  try {
    if (username === "") {
        throw new Error("username required");
        
    } if (password.length < 6) {
        throw new Error("Password must be atleast 6 characters");
        
    } if (username !== "" && password.length >= 6) {
        console.log("Registration successful");
        
    }
  } catch (error) {
    console.log("registration failed!," + error.message);
    
  }  
};

registerUser("Olumide", "123456");
registerUser("", "123456");
registerUser("Olumide", "123");



let products = [
    {id: 1, name: "Laptop"},
    {id: 2, name: "Phones"},
    {id: 3, name: "Headphones"}
];

function getProduct(id) {
  try {
    let items = products.find(function (product) {
    return  product.id === id    
    })
    if (!items) {
        throw new Error("product not found");
        
    } else {
        return items;
    }
  } catch (error) {
    console.log(error.message);
    return null;    
    
  }  
};

console.log(getProduct(3));
/* 

class theProduct {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    displayInfo () {
        console.log("Product:" + this.name + ",Price: #" + this.price);
        
    }
}

let product1 = new theProduct("Laptop", 250000)
let product2 = new theProduct("Phone", 120000)

product1.displayInfo();
product2.displayInfo();



class bankAccount {
    constructor(owner) {
        this.owner = owner;
        this.balance = 0;
    }
    deposit(amount) {
        this.balance = this.balance + amount;
    }

    withDraw(amount) {
        if (amount > this.balance) {
            console.log("insufficient funds");

            
        } else {
        this.balance = this.balance - amount;  
        this.checkBalance();          
        }

    }

    checkBalance () {
        console.log(this.owner + "'s balance: #" + this.balance);
        
    }
}

let account = new bankAccount("olumide");

account.deposit(15000);
account.withDraw(2000);


class Trip {
    constructor(driver, distance) {
        this.driver = driver;
        this.distance = distance;
        this.fare = this.distance * 150;

    }
    tripSummary() {
        console.log("Driver: " + this.driver + ", Distance: " + this.distance + "km, fare: #" + this.fare);
        
    }
}

let instance1 = new Trip("olumide", 20);
let instance2 = new Trip("tunde", 10);

instance1.tripSummary()
instance2.tripSummary()


class student {
    constructor(name) {
        this.name = name;
        this.grade = [];
    }

    addGrade(grade) {
    this.grade.push(grade);
    }
    
    getAverage() {
        let average = this.grade.reduce(function (total, score) {
          return  total + score;
        }, 0) / this.grade.length;
        console.log(this.name + "'s average grade is: " + average.toFixed(1));
    }

    
    
}
let theScores = new student("olumide");

theScores.addGrade(10);
theScores.addGrade(20);
theScores.addGrade(12);
theScores.getAverage();


class Inventory {
    constructor() {
        this.items = [];
    }

    addItem(name, quantity) {
        this.items.push({name, quantity})

    }

    getStock() {
        for (let i = 0; i < this.items.length; i++) {
            console.log(this.items[i].name + ": " + this.items[i].quantity + "units");
            
            
        }
    }

    removeItems (name) {
        this.items = this.items.filter(function (item) {
          return item.name !== name
        })
    }
}

let filter = new Inventory ();
filter.addItem("phone",10);
filter.addItem("laptop",5);
filter.addItem("earpiece",20);

filter.getStock()
filter.removeItems("laptop")
filter.getStock()

let payment = new Promise((resolve, reject) => {
    if (1 > 0) {
        resolve("Payment Successful")
    } else {
        reject("Payment failed")
    }
})

payment
.then(function (result) {
    console.log(result)
})
.catch(function (error) {
    console.log(error)
})


function verifyOrder(orderId) {
  return new Promise((resolve, reject) => {
    if (orderId > 0) {
        resolve("Order " + orderId + " verified successfully")
    } else {
        reject("Invalid order ID: " + orderId)
    }

  })  


};

  verifyOrder(101)
  .then (function (result) {
    console.log(result);
    
  })
  .catch(function (error) {
    console.log(error);
      })

    verifyOrder(-5)
  .then (function (result) {
    console.log(result);
    
  })
  .catch(function (error) {
    console.log(error);
    
  })


  function loginUser(username, password) {
    return new Promise((resolve, reject) => {
        if (username === "Olumide" && password === "1234") {
            resolve("Welcome back, " + username)
        } else {
            reject("Invalid credentials")
        }
    })
  }

  loginUser("Olumide", "1234") 
  .then (function (result) {
    console.log(result);
  })
  .catch (function (error) {
    console.log(error);
    
  })

  loginUser("Omide", "1234") 
  .then (function (result) {
    console.log(result);
  })
  .catch (function (error) {
    console.log(error);
    
  })

  function getTheProduct(id) {
    let products = [
        {id: 1, name: "Laptop", price: 250000},
        {id: 2, name: "Phone", price: 120000},
        {id: 3, name: "Headphones", price: 150000}
    ];
    return new Promise((resolve, reject) => {
        let findings = products.find(function (item) {
          return  item.id === id;
        })
        if (findings) {
            resolve(findings)
        } else {
            reject("Product with ID " + id + " not found")
        }
    })
  }

  getTheProduct(2)
  .then(function (result) {
    console.log(result);
    
  })
  .catch(function (error) {
    console.log(error);
    
  })

  getTheProduct(10)
  .then(function (result) {
    console.log(result);
    
  })
  .catch(function (error) {
    console.log(error);
    
  })



  function checkOrder(orderId) {
    return new Promise((resolve, reject) => {
        if (orderId > 0) {
            resolve("Order " + orderId + " found")
        } else {
            reject("Order not found")
        }
    })
  }

  function checkDelivery(orderMessage) {
    return new Promise((resolve, reject) => {
        resolve(orderMessage + " - Out of delivery")
    })
  }

  checkOrder(0o6)
    .then(function (result) {
    return checkDelivery(result);
    
  })
  .then(function (result) {
    console.log(result);
    
  })
  .catch(function (error) {
    console.log(error);
    
  }) */


  //async
  
  async function processPayment(amount) {
    try {
       let result = await new Promise((resolve, reject) => {
            if (amount > 0) {
                resolve("Payment of #" + amount + " successful")
            } else {
                reject("payment failed. Invalid amount.")
            }
            
        })
          console.log(result);
          
    } catch (error) {
        console.log(error);
        
    }
  };

processPayment(5000)
processPayment(-100)

function getUser(userId) {
    return new Promise((resolve, reject) => {
        if (userId > 0) {
            resolve({id: userId, name: "Olumide", role: "admin"})
        } else {
            reject("User not found")
        }
    })
}

async function loadProfile(userId) {
    try {
        let user = await new getUser(userId);
        console.log("Welcome " + user.name + ", your role is: " + user.role);
        
    } catch (error) {
        console.log(error);
    }
}

loadProfile(1)
loadProfile(-1)

function fetchOrder(orderId) {
    return new Promise((resolve, reject) => {
        resolve({orderId: orderId, item: "Laptop", userId:5})
    })
}

function fetchUser(userId) {
    return new Promise((resolve, reject) => {
        resolve({userId: userId, name: "Olumide"} )
    })
}

async function loadOrderSummary(orderId) {
    try {
        let order = await new fetchOrder(orderId);
        let user = await new fetchUser(order.userId);
        console.log("Order " + order.orderId + " for " + user.name + ": " + order.item);
        
    } catch (error) {
        console.log(error);
        
    }
}

loadOrderSummary(101)

function checkBalance(balance) {
    return new Promise((resolve, reject) => {
        if (balance >= 1000) {
            resolve("Balance confirmed: #" + balance)
        }else{
            reject("Insufficient balance")
        }
    })
}

async function transferFunds(balance, amount) {
    try {
        let confirmation = await new checkBalance(balance);
        console.log(confirmation);
        console.log("Transferring #" + amount + "...");
        console.log("Transer complete");
        console.log("New balance:" +  (balance - amount));
        
        
        
    } catch (error) {
        console.log(error);
        
    }
}

transferFunds(5000, 2000)
transferFunds(500, 2000)

function checkOrderExist(orderId) {
    return new Promise((resolve, reject) => {
        resolve("order " + orderId + " exists")
    })
}

function checkShipment(orderMessage) {
    return new Promise((resolve, reject) => {
        resolve(orderMessage + " - Shipped")
    })
}

function confirmedDelivery(shipmentMessage) {
    return new Promise((resolve, reject) => {
        resolve(shipmentMessage + " - Delivered")
    })
}

async function trackDelivery(orderId) {
    try {
        let exist = await checkOrderExist(orderId);
        let ordermess = await new checkShipment(exist);
        let confirmed = await new confirmedDelivery(ordermess);
        console.log(confirmed);
        
    } catch (error) {
        console.log(error);
        
    }
}

trackDelivery(55);

let name = document.querySelector("#user-name");
let email = document.querySelector("#user-email");
let userCity = document.querySelector("#user-city");
let error = document.querySelector("#error-msg");


async function loadProfile() {
    try  {
    let request = await fetch("https://jsonplaceholder.typicode.com/users/1");
    let data = await request.json();
    console.log(data);
    
    name.textContent = data.name;
    email.textContent = data.email;
    userCity.textContent = data.address.city;
    } catch (error) {
        error.textContent= "failed to load profile: " + error.message;
    }

}

loadProfile();

let postSelect = document.querySelector("#post-select");
let loadBtn = document.querySelector("#load-btn");
let postTitle = document.querySelector("#post-title");
let postBody = document.querySelector("#post-body");
let errorMsg = document.querySelector("#Post-msg");


async function loadPost() {
    try {
        
    let value = postSelect.value;
    let pull = await fetch("https://jsonplaceholder.typicode.com/posts/" + value);
    let received = await pull.json();
    postTitle.textContent = received.title;
    postBody.textContent = received.body;
    


    } catch (error) {
        errorMsg.textContent = "failed to load post."
    }

}

    loadBtn.addEventListener("click", function () {
        loadPost()
    })



    let ulComment = document.querySelector("#comment-list");
    let errorMessage = document.querySelector("#comment-error");

    async function loadComments() {
        try {
            let theUrl = await fetch("https://jsonplaceholder.typicode.com/posts/1/comments");
            let recievedUrl = await theUrl.json(); 
            let arr = recievedUrl.forEach(item => {
            let li = document.createElement("li");
            li.textContent = item.name + " - " + item.email + ": " + item.body;
            ulComment.appendChild(li);

    });
        } catch (error) {
            errorMessage.textContent = "Failed to load comments."
        }
    }

loadComments();

let input = document.querySelector("#user-input");
let searchBtn = document.querySelector("#search-btn");
let resultName = document.querySelector("#result-name");
let resultEmail = document.querySelector("#result-email");
let resultPhone = document.querySelector("#result-phone");
let searchError = document.querySelector("#search-error");


async function searchUser() {
    try {
        let value = input.value;
        if (value === "") {
            searchError.textContent = "Please enter a user ID"
            return;
        }

        let pullRequest = await fetch("https://jsonplaceholder.typicode.com/users/" + value);
        let receivedRequest = await pullRequest.json();

        resultName.textContent = receivedRequest.name;
        resultEmail.textContent = receivedRequest.email;
        resultPhone.textContent = receivedRequest.phone;
        searchError.textContent = "";

    } catch (error) {
        searchError.textContent = "User not found"
    }

}

searchBtn.addEventListener("click", function () {
    searchUser()
})

let dashName = document.querySelector("#dash-name");
let dashPostCount = document.querySelector("#dash-post-count");
let dashboardError = document.querySelector("#dash-error");

async function loadDashboard() {

    const url = [
        "https://jsonplaceholder.typicode.com/users/1",
        "https://jsonplaceholder.typicode.com/users/1/posts"
        
    ];
    try {
        let [userRes, postRes] = await Promise.all([fetch(url[0]), fetch(url[1])]);
        const user = await userRes.json();
        const post = await postRes.json();
        dashName.textContent = user.name;
        dashPostCount.textContent = "Total post " + post.length;


    } catch (error) {
        console.log(error.message);
        
        dashboardError.textContent = "Failed to load dashboard"
    }
}

loadDashboard()