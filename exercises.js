//variables

const name = "OLUMIDE";
const age = 25;
const verified = true;
let balance = 50000;

console.log(
  `name: ${name} | Age: ${age} | verified: ${verified} | balance: #${balance}`,
);

let productName = "Nike Air Force";
let price = 45000;
let discount = 10;
let instock = true;

let discountedPrice = price - price * (discount / 100);

console.log(`name: ${productName} | originalPrice: #${price} | 
discount: ${discount}% | discountPrice: #${discountedPrice} | Instock ${instock}`);

let userInput = "123";
let expectedPin = 123;
let convertedVariable = Number(userInput);

console.log(typeof userInput);
console.log(typeof expectedPin);
console.log(userInput === expectedPin);
console.log(convertedVariable === expectedPin);

let weightKg = 70;
let heightM = 1.75;
let BMI = weightKg / (heightM * heightM);
let roundedBmi = BMI.toFixed(1);
console.log("your BMI is " + `${roundedBmi}`);
if (roundedBmi <= 18.4) {
  console.log("Underweight");
} else if (roundedBmi <= 24.9) {
  console.log("normal weight");
} else if (roundedBmi <= 29.9) {
  console.log("overWeight");
} else {
  console.log("obese");
}

let accountName = "Olumide Adeyemi";
let accountNumber = "0123456789";
let hisBalance = 25000;
let transactionPin = 1234;

console.log(accountName.toUpperCase());
console.log(accountNumber.slice(6, 10));
console.log(accountName.length);
console.log(accountName.includes("Adeyemi"));
console.log(accountName.replace("Olumide", "***"));

let userAge = 17;
let userName = "tunde";
let minimunAge = 18;
let isPremiumMember = false;

let checkUserAge = userAge >= minimunAge ? "Acess granted" : "Acess Denied";
let checkPremiumMember = isPremiumMember ? "Premium Member" : "Regular Member";

console.log(
  `Name: ${userName} |Age: ${userAge} | Acess:${checkUserAge} |
     Membership:${checkPremiumMember}`,
);

let password = "MyPass123!";

const passLength = password.length >= 8;
const inclNumber = password.includes("1");
const inclSpecial = password.includes("!");
const lowerCase = password.toLowerCase();

if (passLength && inclNumber && inclSpecial) {
  console.log("Strong Password");
} else {
  console.log("Weak Password");
}

let customerName = "Olumide Adeyemi";
let product1 = { name: "laptop", price: 450000 };
let product2 = { name: "mouse", price: 15000 };
let product3 = { name: "keyboard", price: 25000 };
let taxRate = 0.075;

let subTotal = product1.price + product2.price + product3.price;
let taxAmount = (subTotal * taxRate).toFixed(2);
let total = subTotal + parseFloat(taxAmount);

console.log(`customer: ${customerName}
${product1.name}:#${product1.price}
${product2.name}:#${product2.price}
${product3.name}:#${product3.price}
Subtotal:#${subTotal}
TAX (7.5%):#${taxAmount}
TOtal:${total}
        `);

let loanAmount = 500000;
let annualInterestRate = 12; //12%
let loanTermMonths = 24;

let monthlyInterestRate = annualInterestRate / 12 / 100;
let totalInterest = loanAmount * monthlyInterestRate * loanTermMonths;
let totalRepayment = loanAmount + totalInterest;
let monthlyPayment = (totalRepayment / loanTermMonths).toFixed(2);

console.log(`loan amount: #${loanAmount}
interest Rate: ${annualInterestRate}% per year
duration: ${loanTermMonths} months
total interest: #${totalInterest}
total repayment: #${totalRepayment}
monthly payment: #${monthlyPayment}
`);

let studentName = "Olumide";
let subject1 = { name: "mathematics", score: 85 };
let subject2 = { name: "English", score: 72 };
let subject3 = { name: "physics", score: 91 };
let subject4 = { name: "chemistry", score: 68 };
let subject5 = { name: "biology", score: 79 };

let averageScore =
  (subject1.score +
    subject2.score +
    subject3.score +
    subject4.score +
    subject5.score) /
  5;

let higestScore = Math.max(
  subject1.score,
  subject2.score,
  subject3.score,
  subject4.score,
  subject5.score,
);

let lowestScore = Math.min(
  subject1.score,
  subject2.score,
  subject3.score,
  subject4.score,
  subject5.score,
);

let grade;
if (averageScore < 60) {
  grade = "F";
} else if (averageScore <= 69) {
  grade = "C";
} else if (averageScore <= 79) {
  grade = "B";
} else if (averageScore <= 80) {
  grade = "A";
}

let status;
if (averageScore > 59) {
  status = "passed";
} else {
  status = "failed";
}
console.log(`Student: ${studentName} 
${subject1.name}:${subject1.score}        
${subject2.name}:${subject2.score}        
${subject3.name}:${subject3.score}        
${subject4.name}:${subject4.score}        
${subject5.name}:${subject5.score}
Average:${averageScore}
highest score: ${higestScore}
lowest score: ${lowestScore}
Grade:${grade}
Status:${status}
        `);

// conditions
let deliveryTime = "Scheduled";

switch (deliveryTime) {
  case "express":
    console.log("delivery in 30 minutes - Fee: 500");
    break;

  case "Standard":
    console.log("delivery in 2 hours - Fee: 200");
    break;

  case "Scheduled":
    console.log("delivery in 24 hours - Fee: 100");
    break;

  default:
    console.log("Invalid Delivery");

    break;
}

let userNAme = "Olumide";
let passWord = "js2024";

if (userNAme === "Olumide" && passWord === "js2024") {
  console.log(`Login successful. welcome, ${userNAme}`);
} else if (userNAme === "Olumide" && passWord !== "js2024") {
  console.log("Incorrect password. Try again");
} else {
  console.log("User not found");
}

let isMember = true;
let cartTotal = 15000;

let customerAttitude = isMember ? cartTotal - cartTotal * 0.1 : cartTotal;

console.log(`Final price: ${customerAttitude}`);

let timeOfDay = "Night";
let distance = 12;
let isRaining = true;
let baseFare = 500 * distance;

let totalPrice;
if (timeOfDay === "Night") {
  totalPrice = baseFare + baseFare * 0.2;
}
if (isRaining) {
  totalPrice = totalPrice + 500;
}
if (totalPrice > 5000) {
  totalPrice = totalPrice - totalPrice * 0.05;
}
console.log(`Your fare is: #${totalPrice}`);

let accountBalance = 50000;
let transactionAmount = 20000;
let accountStatus = "active";
let dailyLimit = 30000;

if (accountStatus !== "active") {
  console.log("Account suspended");
} else {
  if (transactionAmount > accountBalance) {
    console.log("insufficient funds");
  } else if (transactionAmount > dailyLimit) {
    console.log("dailyLimit exceeded");
  } else {
    accountBalance = accountBalance - transactionAmount;
    console.log(`Transfer Successful: new balance ${accountBalance}`);
  }
}

let numberOfYears = 28;
let monthlyIncome = 80000;
let creditScore = 650;
let existingLoan = false;
let maximumLoanAmount = 12 * monthlyIncome;
let isEligible = true;

if (numberOfYears < "18") {
  console.log("Under Age");
  isEligible = false;
}
if (monthlyIncome < 50000) {
  console.log("monthly income is low for loan eligibility");
  isEligible = false;
}
if (creditScore < 600) {
  console.log("low credit score");
  isEligible = false;
}
if (existingLoan === true) {
  console.log("pay existing loan");
  isEligible = false;
}

if (isEligible) {
  console.log(`Loan Approved! Maximum loan amount: #${maximumLoanAmount}
        `);
}
//numberOfYears >= 18 && monthlyIncome >= 50000 && creditScore >= 600 && existingLoan === false

let pasword = "myPass123";
let strongPassWord = true;

if (pasword.length < 8) {
  console.log("Too short");
  strongPassWord = false;
}
if (!/[A-Z]/.test(pasword)) {
  console.log("Needs Uppercase");
  strongPassWord = false;
}
if (!/[0-9]/.test(pasword)) {
  console.log("needs a number");
  strongPassWord = false;
}

if (strongPassWord) {
  console.log("Strong password");
}

let packageStatus = "in-transit";
let estimateDay = 10;
let isPriority = true;

if (packageStatus === "delivered") {
  console.log("Package delivered! thank you for shopping with us");
} else if (packageStatus === "in-transit") {
  if (isPriority && estimateDay <= 1) {
    console.log("Arriving today! Priority delivery");
  } else if (isPriority && estimateDay > 1) {
    console.log(`Priority Package! Arriving in ${estimateDay} days.`);
  } else if (!isPriority) {
    console.log(`Standard delivery. Arriving in ${estimateDay} days`);
  }
} else if (packageStatus === "pending") {
  console.log("Order Confirmed. Processing will begin shortly");
} else {
  console.log("Unknown status.please contact support");
}

let salary = 150000;
let employmentType = "part-time";
let hasBonus = false;
let bonusAmount = 20000;

let netSalary;
if (hasBonus) {
  netSalary = salary + bonusAmount;
} else {
  netSalary = salary;
}

if (employmentType === "full-time") {
  netSalary = netSalary - netSalary * 0.2;
} else if (employmentType === "part-time") {
  netSalary = netSalary - netSalary * 0.1;
} else {
  console.log("invalid employment type");
}

console.log(`Net salary: #${netSalary}`);

let theCartTotal = 45000;
let isaMember = false;
let voucherCode = "SAVE10";
let itemCount = 3;
let MemberDiscount;
let finalTotal;
let delivery;

if (itemCount === 0) {
  console.log("your Cart is empty");
} else {
  if (isaMember) {
    MemberDiscount = theCartTotal - theCartTotal * 0.05;
  } else {
    MemberDiscount = theCartTotal;
  }

  if (voucherCode === "SAVE10") {
    MemberDiscount = MemberDiscount - MemberDiscount * 0.1;
  }
  if (MemberDiscount > 20000) {
    delivery = 2000;
    finalTotal = MemberDiscount + 2000;
  } else {
    delivery = 0;
    finalTotal = MemberDiscount;
    console.log("free delivery");
  }
  console.log(
    `Total: #${theCartTotal} |  Delivery: #${delivery}  | Final: #${finalTotal}`,
  );
}

// functions

function calculateDeliveryFee(distance) {
  distance = distance * 50;
  if (distance < 500) {
    return 500;
  } else {
    return distance;
  }
}

console.log(calculateDeliveryFee(5));
console.log(calculateDeliveryFee(20));
console.log(calculateDeliveryFee(8));

function generateInvoice(hisName, quantity, pricePerUnit) {
  subTotal = quantity * pricePerUnit;
  VAT = subTotal * 0.075;
  total = subTotal + VAT;
  return `Invoice for ${hisName} | Subtotal: #${subTotal} | VAT:#${VAT} | Total:#${total}
        `;
}

console.log(generateInvoice("john", 100, 100));
console.log(generateInvoice("olumide", 1000, 200));

function greetCustomer(name, timeOfDay = "morning") {
  if (timeOfDay === "morning") {
    return "good morning ," + name;
  } else if (timeOfDay === "afternoon") {
    return "good afternoon ," + name;
  } else if (timeOfDay === "evening") {
    return "good evening ," + name;
  } else {
    return "hello! " + name;
  }
}

console.log(greetCustomer("shola", "evening"));
console.log(greetCustomer("shola"));
console.log(greetCustomer("olumide", ""));

function calculateDiscount(price, discountPercent) {
  return price - price * (discountPercent / 100);
}

function generateOrderSummary(customerName, price, discountPercent) {
  discount = calculateDiscount(price, discountPercent);

  return `Order for ${customerName} | Original: #${price} | Discounted: #${discount} `;
}

console.log(generateOrderSummary("olumide", 20000, 20));
console.log(generateOrderSummary("shola", 10000, 10));

function checkStock(productName, quantity) {
  let minimumStock = 10;
  if (quantity < minimumStock) {
    return `LOW STOCK: reorder ${productName} immediately`;
  } else if (quantity === minimumStock) {
    return `Warning: ${productName} is at minimum stock`;
  } else {
    return `${productName} is well stocked`;
  }
}

console.log(checkStock("Rice", 5));
console.log(checkStock("beans", 10));
console.log(checkStock("garri", 25));
//console.log(minimumStock);

function analyseProduct(productName, unitSold, pricePerUnit) {
  let revenue = unitSold * pricePerUnit;
  let rating;
  if (revenue > 500000) {
    rating = "Excellent";
  } else if (revenue > 200000) {
    rating = "Good";
  } else if (revenue > 50000) {
    rating = "Average";
  } else {
    rating = "poor";
  }

  return {
    product: productName,
    revenue: revenue,
    rating: rating,
  };
}

let result = analyseProduct("laptop", 10, 50000);

console.log(result);
console.log(result.rating);
console.log(result.revenue);

function calculateSavings(principal, rate, years) {
  if (years === 0) {
    return principal;
  }

  return calculateSavings(principal * (1 + rate / 100), rate, years - 1);
}

console.log(calculateSavings(100000, 10, 1).toFixed(1));



    console.log(processPayment(1000, "card"));
    function processPayment(amount, method) {
      if (method === "card") {

        return `Processing #${amount} via card`;

      } else if (method === transfer) {
        
        return `Processing #${amount} via transfer`;
      } else {
              return "Method not supported"
      }
    };


    let theNewCartTotal = 0;

    function addToCartImpure(price) {
      theNewCartTotal += price;
    }

    function addToPure(currentTotal, price) {
      return currentTotal + price;
    }
    
    addToCartImpure(5000)
    console.log(theNewCartTotal);
    
    console.log(addToPure(2, 500));
    
    
    function calculateLoanRepayment(loanAmount, annualInterestRate, months) {
      let totalInterest = loanAmount * (annualInterestRate / 100) * (months / 12);
      let totalRepayment = loanAmount + totalInterest ;
      let monthlyPayment = totalRepayment / months ;

      return {
        interest: totalInterest,
        repayment: totalRepayment ,
        monthlypayment:monthlyPayment
      }
    };

    let loan1 = calculateLoanRepayment(5000, 200, 6);

    console.log(loan1);
    console.log(loan1.interest.toFixed(2));
    console.log(loan1.repayment.toFixed(2));
    console.log(loan1.monthlypayment.toFixed(2));
    
    
  function applyPromo(price, promoFn) {
    let result = promoFn(price);
    return result;  
  };

  function tenPercentOff(price) {
    return price - (price * (10/100))
  };
  
  function flatFiveHundredOff(price) {
    return price - 500;
  };

  function doubleDiscount(price) {
    return price - (price * (20/100))
  };

  console.log(applyPromo(200,  tenPercentOff));
  console.log(applyPromo(20000,  flatFiveHundredOff));
  console.log(applyPromo(100,  doubleDiscount));
  
function createCount(startValue) {
  let counter = startValue;

  return () => {
    counter++
    return counter;
  }
}

let pageVisits = createCount(0);
let buttonClicks = createCount(0);

console.log(pageVisits());
console.log(pageVisits());

console.log(buttonClicks());
console.log(buttonClicks());

function trimText(str) {
 return str.trim()
};

function capitalizeFirst(str) {
  return  str.charAt(0).toUpperCase() + str.slice(1);
};

function removeSpecialChars(str) {
 return str.replace(/[!?#@&]/g, "")
};

function formatText(str) {
  let result = trimText(str);
  result = capitalizeFirst(result);
  result = removeSpecialChars(result); 
  result = result.replace(/\s+/g, ' ')
  return result;
};

let messyText = "hello world!!       @&# son";

console.log(formatText(messyText));


(function() {
  let appName = "shopEase";
  let version = "1.0.0"
  let maxUsers = 100
console.log(`${appName} v${version} initialized. Max users: ${maxUsers}`);

})();

//console.log(appName);


function validateAccount(balance, amount) {
  if (balance >= amount) {
    return true;
  } 
  return false;
};

function applyTransaction(balance, amount, type) {
    if (type === "debit") {
      return balance - amount;
    } else if (type === "credit") {
      return balance + amount;  
    } else {
      return "error";
    }
};

  function generateReceipt(name, amount, type, balance) {
    return ` ${type}!${name} you redrawed #${amount}, your balance is #${balance}.`
  };

  function processTransaction(name, balance, amount, type) {
    let isValid = validateAccount(balance, amount);
    if (!isValid) {
      return "insufficient funds"
    }
    let newbalnce = applyTransaction(balance, amount, type);
 
    return  generateReceipt(name, amount, type, newbalnce);
    
  };

  console.log(processTransaction("olumide", 10000, 1000, "debit"));
  console.log(processTransaction("shola", 50000, 1000, "credit"));
  console.log(processTransaction("tunde", 1000, 10000, "debit"));
  
// mini project

let totalIncome = 0;
let totalExpenses = 0;


function addIncome(amount) {
  totalIncome = amount + totalIncome;
  console.log(`Income added: #${totalIncome}`);
  
};

function addExpense(amount, category) {
  totalExpenses = amount + totalExpenses;
  console.log(`Expense added: #${totalExpenses} for ${category}`);
  
};

function checkBudget() {
  if (totalExpenses > totalIncome) {
    console.log(`WARNING: You are overspending by #${totalExpenses}`);
  } else if (totalExpenses === totalIncome) {
    console.log(`CAUTION: you have spent all your income`);
  } else if (totalExpenses < totalIncome ) {
    console.log(`GOOD: you have #${totalIncome - totalExpenses} remaining`);
  }
};



function getBudgetSummary() {
    let newBalance = totalIncome - totalExpenses ;
  return ` Total Income: #${totalIncome} | Total Expenses: #${totalExpenses}
  Balance: #${newBalance}
  `
}; 

addIncome(5000);
addExpense(1000, "sales");
checkBudget();
console.log(getBudgetSummary());





// loops

let items = [
  {name:"rice", price:3500},
  {name:"oil", price:2200},
  {name:"sugar", price:1800},
  {name:"flour", price:2700},
  {name:"salt", price:500}
];

let totals = 0;
for (let i = 0; i < items.length; i++) {
  console.log(items[i].name + ":#" + items[i].price);
  

totals = totals + items[i].price;
  console.log(totals);

};

function multiplicationTable(number) {


  for (let i = 1; i <=12; i++) {
   let result = number * i;
      console.log(number + 'x' + i + '=' + result);
    
  }
};

multiplicationTable(3);


for (let i = 1; i <= 50; i++) {

  if (i % 3 === 0 && i % 5 === 0  ) {
    console.log("fizzBuzz");
    
  } else  if (i % 3 === 0) {
    console.log("Fizz");
    
  } else if (i % 5 === 0) {
    console.log("buzz");
    
  }
    else{
  console.log(i);
  }

};

function countdown (number) {
  while (number > 0) {
    console.log(number);
    number--
  }
  console.log("go");
  

};

countdown(5);

for (let i = 1; i <= 30; i++) {
  if (i % 4 === 0) 
 {
continue;
  }
    console.log(i);
}

const theProducts = [
  {name:"Pen", price:200},
  {name:"Bag", price:15000},
  {name:"Shoe", price:22000},
  {name:"Watch", price:85000},
  {name:"Phone", price:120000}
];

for (let i = 0; i < theProducts.length; i++) {
   let product = theProducts[i].price
  
  if (product > 50000) {
      console.log( "First expensive item:" + theProducts[i].name + "- #" + product);
    break;
  }
  
};

let guesses = [10, 45, 70, 55, 60];

function checkGuess(secretNumber, guess) {
  if (guess > secretNumber) {
    console.log("Too high!");
    
  } else if (guess < secretNumber) {
   console.log("Too low!");
  }else {
    console.log("correct!! you got it!");
    
  }

};
  for (let i = 0; i < guesses.length; i++) {
    checkGuess(60, guesses[i]);
    if (guesses[i] === 60) {
      break;
    }
  };


for (let row = 1; row <= 5 ; row++){
  let star = '';
  for (let col = 0; col < row; col++) {
    star += '2';
  }
 console.log(star);
 
};

const student = [
  {name: "Ade", score:85},
  {name: "Bisi", score:42},
  {name: "Chuka", score:73},
  {name: "Dami", score:91},
  {name: "Emeka", score:58}
];

  let passed = 0;
  
  let failed = 0;
for (let i = 0; i < student.length; i++) {
  if (student[i].score >= 50) {
   
     console.log(student[i].name + "-" + student[i].score + "-" + passed++ );
     
  } else {   
      console.log(student[i].name + "-" + student[i].score + "-" + failed++);
    
  }




};

  

  console.log("passed: " + passed);
  console.log("failed: " + failed);










function reverseStr(Str) {
  let reversed = '';
for (let i = Str.length - 1; i >= 0; i--) {
  reversed += Str[i];
  
}
return reversed;
;
}

console.log(reverseStr("hello"));


// Arrays

let cart = ["rice", "beans", "garri", ];

cart.push("bread");
console.log(cart);

cart.unshift("Egg");
console.log(cart);

cart.pop();
console.log(cart);

cart.shift();
console.log(cart);

console.log(cart.includes("beans"));


let score = [45, 82, 67, 91, 38, 55, 88];
const bob = score.filter(function (num) {
    return num >= 50;
});
console.log(bob);

console.log(Math.max(...score));
console.log(Math.min(...score));


let doubled = score.map(function (num) {
    return num * 2;
});

console.log(doubled);

let scoreToTal = score.reduce(function (total, items) {
  return total + items
},0 );

console.log(scoreToTal);


let arrayProducts = [
  {name:"laptop", price: 250000, instock:true},
  {name:"Phone", price: 85000, instock:false},
  {name:"tablet", price: 120000, instock:true},
  {name:"watch", price: 45000, instock:false},
  {name:"earbuds", price: 32000, instock:true}
];

let ProductInstock = arrayProducts.filter(function (items) {
  return items.instock
});

console.log(ProductInstock);

let allProductName = arrayProducts.map(function (product) {
  return product.name;
});console.log(allProductName);


let productPrice = arrayProducts
 .filter(function (total) { return total.instock})
  .reduce(function (total, items) { return total + items.price}, 0);
console.log(productPrice);


let mostExpensive = arrayProducts.reduce(function (max, item) {
  return item.price > max.price ? item : max ;
});
console.log(mostExpensive);

let applicants = [
  {name:"Tunde", score:78, experience: 3},
  {name:"Amaka", score:92, experience: 5},
  {name:"Chidi", score:65, experience: 2},
  {name:"Ngozi", score:88, experience: 4},
  {name:"Emeka", score:71, experience: 6}
];

let sorting = applicants.sort(function (a, b) {
  return b.score - a.score;
});
console.log(sorting);

let highExperience = applicants.filter(function (exp) {
  return exp.experience >= 4;
});

console.log(highExperience);

let chidi = applicants.find(function (item) {
  return item.name === "Chidi";
});
console.log(chidi);

let above90 = applicants.some(function (item) {
  return item.score > 90;
});

console.log(above90);

let years = applicants.every(function (item) {
  return item.experience >= 2;
});

console.log(years);

let sales = [
  {name:"laptop", price: 250000,unit: 5 },
  {name:"Phone", price: 85000, unit: 12},
  {name:"tablet", price: 120000, unit: 8},
  {name:"watch", price: 45000, unit: 20},
  {name:"earbuds", price: 32000, unit: 15}
];

let revenue = sales.map(function (item) {
  return item.price * item.unit;
});

console.log(revenue);

let highest = sales.reduce(function (item, max) {
  return item.price > max.price ? item : max ;
},0);

console.log(highest);

let above = sales.filter(function (name) {
  return name.price > 1000000;
});

console.log(above);

let totalRev = sales.reduce(function name(items, total) {
  return items + total.price;
}, 0);

console.log(totalRev);


const newProducts = {
  name: "Laptop",
  price: 150000,
  quantity: 10,
  instock: true,
  describe() {
    return this.name + " cost #" + this.price + " and is currently inStock"
  },
  totalValue () {
    return this.price * this.quantity;
  }
};

console.log(newProducts.describe());
console.log(newProducts.totalValue());

const theUser = {
  firstName: "olumide",
  lastName: "Johnson",
  age:22,
  isLoggedIn: false,
  fullName() {
    return this.lastName + " " + this.firstName;
  },
  greet() {
    if (this.isLoggedIn) {
     return `welcome back, ${this.fullName()}`
    } else {
    return `please log in, ${this.fullName()}`
    }

  }
};

console.log(theUser.fullName());
console.log(theUser.greet());


const acc = {
  owner: "Olumide",
  balance: 50000,
  pin: 1234,
  deposit(amount) {
    this.balance = this.balance + amount ;
    return this.balance;
  },
  withdraw (amount) {
    if (amount > this.balance) {
      return "insufficient funds"
    } else {
    this.balance = this.balance - amount ;
    return this.balance;

    }
  },
  getBalance () {
    return `${this.owner}'s current balance is #${this.balance}`
  }
};

console.log(acc.deposit(500));
console.log(acc.withdraw(5000));
console.log(acc.getBalance());


const cartItems = {
  item: [],
  totalPrice: 0,
  addItem(name, price) {
    
      this.item.push({name,  price});
      this.totalPrice += price ;
  },
  removeItem (name) {
const itemToRemove = this.item.find(itm => itm.name === name);
if (itemToRemove) {
  this.totalPrice = this.totalPrice - itemToRemove.price;
  this.item = this.item.filter(itm => itm.name !== name);
}
  },
  getTotal () {
 return this.totalPrice;
  }
};

cartItems.addItem("shoes", 12000);
cartItems.addItem("T-shirt", 4500);
cartItems.addItem("cap", 2500);

cartItems.removeItem("shoes")
console.log(cartItems.item);

const theStudent = {
name: "Olumide",
scores: [75, 82, 60, 91, 55],
getAverage () {
  return this.scores.reduce(function (total, marks) {
       return total + marks;
  }, 0) /  this.scores.length
},
getGrade () {
  if (this.getAverage() < 60) {
    return "F";
  } else if (this.getAverage() < 69) {
    return "C";
  } else if (this.getAverage() < 79) {
    return "B";
  } else if (this.getAverage() >= 80) {
    return "A";
  }
},
getReport () {
  return `${this.name} scored an average of ${this.getAverage()} and got a Grade 
  ${this.getGrade()}
  `
}

};

console.log(theStudent.getAverage());
console.log(theStudent.getGrade());
console.log(theStudent.getReport());

let h1 = document.querySelector("#title");
let btn = document.querySelector("#btn");

 h1.textContent = "welcome to my page";
 btn.style.backgroundColor = "blue";
 btn.style.color = "white";

/*  let h2 = document.querySelector("#product-name");
 let paragraph = document.querySelector("#product-price");
 let image = document.querySelector("#product-img");
 let productBtn = document.querySelector("#sold-out-btn");
  productBtn.disabled = true;

 h2.textContent ="Wireless Headphones";
 paragraph.textContent = "#25000";
 image.setAttribute("src", "https://i0.wp.com/picjumbo.com/wp-content/uploads/young-man-enjoying-moment-and-looking-over-the-san-francisco.jpg?w=600&quality=80");
 productBtn.textContent = "Sold Out";
 productBtn.style.backgroundColor = "grey";
 */
 let postTitle = document.querySelector("#post-title");
 let postDate = document.querySelector("#post-date");
 let postBody = document.querySelector("#post-body");
 let postBtn = document.querySelector("#read-more");
 let backGround = document.querySelector("#blog-post");

 postTitle.textContent = "this is a day in my life";
postDate.textContent = new Date().toLocaleDateString();
backGround.style.backgroundColor = "navy";
backGround.style.border = "2px solid black";
backGround.style.padding = "5px";


postBtn.addEventListener("click", function () {
  postBtn.style.display = "none";
  postBody.textContent = "an object groups multiply values together";

});


let input = document.querySelector("#task-input");
let addTaskBtn = document.querySelector("#add-btn");
let ul = document.querySelector("#task-list");

addTaskBtn.addEventListener("click", function () {
    
     
    let  taskValue = input.value;
      if (taskValue === "") {
    alert("please type something")
  }

  let li = document.createElement("li");
  li.textContent = taskValue;
  ul.appendChild(li)
    
  let deletebtn = document.createElement("button");
  deletebtn.textContent ="delete";
  li.appendChild(deletebtn);
  deletebtn.addEventListener("click", function () {
    li.remove();
  });


 input.value = "";
});

let textArea = document.querySelector("#tweet-box");
let para = document.querySelector("#char-count");
let thePostBtn = document.querySelector("#post-btn");

textArea.addEventListener("input", function () {
  let tweetBox = textArea.value;
  let remaining = 280 - tweetBox.length;
  para.textContent = remaining + " characters remaining";
if (remaining < 20) {
  para.style.color = "red";
} else if (remaining === 0) {
  thePostBtn.disabled = true;
} else  if (  textArea.value === "") {
  thePostBtn.disabled = true;
}

});

thePostBtn.addEventListener("click", function () {
  alert("Tweet posted");
  textArea.value = "";
   para.textContent = remaining + " characters remaining";
   thePostBtn.disabled = false;
});


/* let gallery = document.querySelector("#gallery");
let main = document.querySelector("#main-img");
let caption = document.querySelector("#img-caption");
let thumbnails = document.querySelector("#thumbnails");

const images = [
  {src: "https://picsum.photos/id/10/400/300", caption: "Nature"},
  {src: "https://picsum.photos/id/20/400/300", caption: "City Lights"},
  {src: "https://picsum.photos/id/30/400/300", caption: "Mountains"},
  {src: "https://picsum.photos/id/40/400/300", caption: "Ocean View"},
  {src: "https://picsum.photos/id/50/400/300", caption: "Ocean View"},
  {src: "https://picsum.photos/id/60/400/300", caption: "Ocean View"},
  {src: "https://picsum.photos/id/70/400/300", caption: "Ocean View"},
  {src: "https://picsum.photos/id/80/400/300", caption: "Ocean View"},
  {src: "https://picsum.photos/id/90/400/300", caption: "Ocean View"},
  {src: "https://picsum.photos/id/100/400/300", caption: "Ocean View"},
];


images.forEach(function (image) {
  let img = document.createElement("img");
  img.setAttribute("src", image.src);
  thumbnails.appendChild(img);

  img.addEventListener('click', function () {
  main.setAttribute("src", image.src)
  caption.textContent = image.caption;
});
}); */


let passwordInput = document.querySelector("#password");
let passwordStrength = document.querySelector("#strength-text");
let passwordBar = document.querySelector("#strength-bar");


function checkStrength () {
  let value = passwordInput.value;
 if (value.length < 6) {
  return "weak password"
} else if (value.length >= 6 && value.length <= 10) {
  return "Meadium"
} else {
  return "strong password"
}

}

passwordInput.addEventListener("input", function () {
  let strength = checkStrength();
  if (strength === "weak password") {
    passwordStrength.textContent = "weak";
    passwordStrength.style.color = "red";
    passwordBar.style.width = "30px";
  } else if (strength === "Meadium") {
    passwordStrength.textContent = "Medium";
    passwordStrength.style.color = "Orange";
    passwordBar.style.backgroundColor = "Orange";
    passwordBar.style.width = "60px";
  } else {
    passwordStrength.textContent = "Strong";
    passwordStrength.style.color = "Green";
    passwordBar.style.backgroundColor = "green";
    passwordBar.style.width = "100px";
  }


});

let theBtn = document.querySelector("#theme-btn");
let heading = document.querySelector("#page-title");
let theText = document.querySelector("#page-text");

theBtn.addEventListener("click", function () {
   document.body.classList.toggle("dark-mode")
  let theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
  localStorage.setItem("theme", theme)
  if (theBtn.textContent === "Toggle Dark Mode") {
    theBtn.textContent = "Toggle light Mode"
  } else {
    theBtn.textContent = "Toggle Dark Mode"
  }
});
let newTheme = localStorage.getItem("theme");

if (newTheme === "dark") {
  document.body.classList.add("dark-mode");
} else {
   document.body.classList.remove("dark-mode"); 
}

let note = document.querySelector("#note-input");
let saveBtn = document.querySelector("#save-btn");
let savedNote = document.querySelector("#saved-note");


saveBtn.addEventListener("click", function () {
  let  value = note.value;
  localStorage.setItem("myNote", value);
  savedNote.textContent = value;
  note.value = "";
});

let stored = localStorage.getItem("myNote");

if (stored) {
    savedNote.textContent = stored;
    

} else {
      savedNote.textContent = null;
}

let username = document.querySelector("#username");
let rememberMe = document.querySelector("#remember-me");
let loginBtn = document.querySelector("#login-btn");

loginBtn.addEventListener("click", function () {
  let value = username.value;
  if (rememberMe.checked) {
    localStorage.setItem("savedUsername", value);
  } else {
    localStorage.removeItem("savedUsername");    
  }

});
 
  let savedUsername = localStorage.getItem("savedUsername");

if (savedUsername) {
  username.value = savedUsername;
  rememberMe.checked = true;
} else {
   username.value = "";
}

let proBtn = document.querySelectorAll("#productBtn");
let recently = document.querySelector("#recently-viewed");

function displayList(arr) {
  recently.textContent = "";
  arr.forEach(function (item) {
    let li = document.createElement("li");
    li.textContent = item;
    recently.appendChild(li);
  })
};
proBtn.forEach(function (button) {
  button.addEventListener("click", function () {
    let product = button.dataset.product
    let viewed = JSON.parse(localStorage.getItem("recentlyViewed")) || [];

    viewed.push(product);
    localStorage.setItem("recentlyViewed", JSON.stringify(viewed));
    displayList(viewed);



  });
});


let counter = document.querySelector("#cart-count")
let cartBtn = document.querySelectorAll(".add-to-cart")

let cartCount = localStorage.getItem("savedCartCount");
let count = 0;
if (cartCount) {
  counter.textContent = cartCount;
  count = Number(cartCount);  
}

cartBtn.forEach(function (button) {
  button.addEventListener("click", function () {
      count = count + 1;
        counter.textContent = count;

      localStorage.setItem("savedCartCount", count);
  })

});


function doTwice(func, name) {
  func(name)
};

function greet(person) {
  console.log("hello " + person);
};

doTwice(greet, "aisha");

function processOrder(order, callback) {
  callback(order)
};

function confirmOrder(order) {
  console.log("Your order has been confirmed: " + order);
  
};

processOrder("jollof Rice", confirmOrder)

function processPayments(amount, onSuccess, onFailure) {
  if (amount > 0) {
    onSuccess(amount);
  } else {
    onFailure(amount);
  }
};

function paymentSuccess(amount) {
  console.log("payment of #" + amount + " was succesful");
};
function paymentFailure(amount) {
  console.log("payment failed. Invalid amount" + amount);
};

processPayments(5000, paymentSuccess, paymentFailure);
processPayments(-100, paymentSuccess, paymentFailure);

function validateInput(value, validationRule) {
  let result = validationRule(value);
  return result;
};

function isNotEmpty(value) {
  if (value !== "") {
    return true;
  } else {
    return false;
  }
};

function isNumber(value) {
  if (typeof value === "number") {
    return true;
  } else {
    return false;
  }
}

console.log(validateInput("olumide", isNotEmpty));
console.log(validateInput("", isNotEmpty));
console.log(validateInput(25, isNumber));
console.log(validateInput("25", isNumber));

function calculateDelivery(distance, feeCalculator) {
  return feeCalculator(distance);
};

function standardFee(distance) {
return distance * 100;  
};

function expressFee(distance) {
  return distance * 250;
};

console.log(calculateDelivery(10,standardFee));
console.log(calculateDelivery(10,expressFee));


function runForEach(items, callback) {
  items.forEach(item => {
    callback(item)
  });
};

function sendNotification(message) {
  console.log("Notification: " + message);
  
};

runForEach(["New message", "Low battery", "payment received"], sendNotification);

