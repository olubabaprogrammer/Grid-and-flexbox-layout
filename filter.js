
const input = document.querySelector('#filterIn');
const filterBtn = document.querySelector('#filterBtn');
const productList = document.querySelector('#productList');

let originalproducts = [
    {name:"laptop", price:5000},
    {name:"powrbank", price:500},
    {name:"phone", price:1200},
    {name:"tablet", price:1000},
];

let products = [...originalproducts];

function displayProduct() {
    productList.innerHTML = '';
    products.forEach(product => {
       const li = document.createElement('li');
       li.textContent = product.name + "-$" + product.price;
       productList.appendChild(li);
    });
};
function filterProducts() {
const filterValue = Number(input.value);
console.log("Input value:", input.value);
console.log("Filter value:", filterValue);
console.log("isNaN?:", isNaN(filterValue));


    if (isNaN(filterValue) || input.value === '') {
            return [...originalproducts];
        }

    return originalproducts.filter(products => products.price >= filterValue); 
};
    filterBtn.addEventListener('click', function () {
        if (input.value === '') {
            alert("type something");
            return;
        };
       products = filterProducts();
       console.log('filtered products:', products );
        displayProduct();
    });
