const storedProducts = JSON.parse(localStorage.getItem('products'));

const products = storedProducts || [
    {product: 'Whey Protein', price: 119.99, quantity: 50 ,img:'https://i.ebayimg.com/images/g/K90AAOSwdzdfA1V-/s-l1600.jpg', category: 'protein'},
    {product: 'Creatine', price: 59.99, quantity: 100, img:'https://ca.tc-nutrition.com/cdn/shop/products/tilted_left_1_12_1024x1024.png?v=1653390675', category: 'creatine'},
    {product: 'Multi Vitamins', price: 19.99, quantity: 200, img:'https://m.media-amazon.com/images/I/71w8MAqFzFL._AC_UF1000,1000_QL80_.jpg', category: 'vitamins'},
    {product: 'Caesin', price: 99.99, quantity: 78, img:'https://cdn.dymatize.com/a/products/ELITE_CASEIN_RICH_CHOCOLATE_Product_Thumbnail_Product_Detail_Page_540x678.jpg', category: 'protein'},
    {product: 'Multi Vitamins', price: 5.99, quantity: 200, img:'https://m.media-amazon.com/images/I/71mRBRyZwYL._AC_UF1000,1000_QL80_.jpg', category: 'vitamins'} ];


const cartproducts = [];


 
const prod = document.querySelector('#productlist');
const srch_btn = document.querySelector('#srch_btn');
const showCart = document.querySelector('#showCartBtn');
const loginBtn = document.querySelector('#log_btn');
const editBtn = document.querySelector('#editBtn');

loginBtn.addEventListener('click', () =>{
    const urlParamsi = new URLSearchParams(window.location.search);
    const naam = urlParamsi.get('name');
    const userEmail = urlParamsi.get('email');
    console.log(userEmail);

window.location.href = `profile.html?name=${encodeURIComponent(naam)}&email=${encodeURIComponent(userEmail)}`;
   
})



srch_btn.addEventListener('click', () =>{
    window.location.href = 'page1.html';
})
const selectElement = document.querySelector('#counterSelect');
let targetValue = 1;
displayProducts();

selectElement.addEventListener('change', () =>{
    targetValue = parseInt(selectElement.value);
    console.log(targetValue);
    
        displayProducts();
    
    
});


function displayProducts(){
    prod.innerHTML = '';
    for (let {product, price, quantity, img, category} of products){
        
        if(targetValue === 1){
            
            const productElement = document.createElement('div');
            productElement.className = "col";    
            const addCartBtn = document.createElement('button');  
            addCartBtn.className = "btn btn-info";
            addCartBtn.innerText = 'Add to Cart';
        productElement.innerHTML = `<div class="card"><img src="${img}" alt="${product} Image" class="card-img-top"><div class="card-body"><h4 class="card-title">Product is : ${product}</h4>
        <p class="card-text">Price is :${price}</p>
        <p class="card-text">Available quantity: ${quantity}</p>
        </div>
        </div>
        `
        
        // addCartBtn.addEventListener('click', () =>{
            
        //     const index = products.findIndex(item => item.product === product); 

        //     if(index !== -1){
        //         products[index].quantity -=1;
        //         localStorage.setItem('products', JSON.stringify(products));
        //         const quantityElement = productElement.querySelector('.quantity');
        //         if (quantityElement) {
        //             quantityElement.innerText = `Available quantity: ${products[index].quantity}`;
        //           }
        //     }
            
        //     alert(`${product} added to the cart`)
        //     cartproducts.push(product);
            

            
        // });
        addCartBtn.addEventListener('click', () => {
            const index = products.findIndex(item => item.product === product);
        
            if (index !== -1 && products[index].quantity > 0) {
                products[index].quantity -= 1;
        
                const cartIndex = cartproducts.findIndex(item => item.product === product);
                if (cartIndex !== -1) {
                    cartproducts[cartIndex].quantity += 1;
                } else {
                    const cartProduct = { ...products[index], quantity: 1 };
                    cartproducts.push(cartProduct);
                }
        
                localStorage.setItem('products', JSON.stringify(products));
        
                // Display updated quantity in the productElement
                const quantityElement = productElement.querySelector('.quantity');
                if (quantityElement) {
                    quantityElement.innerText = `Available quantity: ${products[index].quantity}`;
                }
        
                alert(`${product} added to the cart`);
            } else {
                alert(`No more ${product} available.`);
            }
        });
        
        
        
        
        productElement.appendChild(addCartBtn);
        prod.appendChild(productElement);
        }else if (targetValue === 3 && category === 'vitamins') {
            // Display products from the "Vitamins & Mineral" category only when targetValue is 3
            const productElement = document.createElement('div');
            productElement.className = "col";    
            const addCartBtn = document.createElement('button');  
            addCartBtn.className = "btn btn-info";
            addCartBtn.innerText = 'Add to Cart';
        productElement.innerHTML = `<div class="card"><img src="${img}" alt="${product} Image" class="card-img-top"><div class="card-body"><h4 class="card-title">Product is : ${product}</h4>
        <p class="card-text">Price is :${price}</p>
        <p class="card-text">Available quantity: ${quantity}</p>
        </div>
        </div>`
            
        addCartBtn.innerText = 'Add to Cart';
        addCartBtn.addEventListener('click', () => {
            const index = products.findIndex(item => item.product === product);
        
            if (index !== -1 && products[index].quantity > 0) {
                products[index].quantity -= 1;
        
                const cartIndex = cartproducts.findIndex(item => item.product === product);
                if (cartIndex !== -1) {
                    cartproducts[cartIndex].quantity += 1;
                } else {
                    const cartProduct = { ...products[index], quantity: 1 };
                    cartproducts.push(cartProduct);
                }
        
                localStorage.setItem('products', JSON.stringify(products));
        
                // Display updated quantity in the productElement
                const quantityElement = productElement.querySelector('.quantity');
                if (quantityElement) {
                    quantityElement.innerText = `Available quantity: ${products[index].quantity}`;
                }
        
                alert(`${product} added to the cart`);
            } else {
                alert(`No more ${product} available.`);
            }
        });


        productElement.appendChild(addCartBtn);;

            prod.appendChild(productElement);
        }else if (targetValue === 2 && category === 'protein') {
            // Display products from the "Vitamins & Mineral" category only when targetValue is 3
            const productElement = document.createElement('div');
            productElement.className = "col";    
            const addCartBtn = document.createElement('button');  
            addCartBtn.className = "btn btn-info";
            addCartBtn.innerText = 'Add to Cart';
        productElement.innerHTML = `<div class="card"><img src="${img}" alt="${product} Image" class="card-img-top"><div class="card-body"><h4 class="card-title">Product is : ${product}</h4>
        <p class="card-text">Price is :${price}</p>
        <p class="card-text">Available quantity: ${quantity}</p>
        </div>
        </div>`
            
        addCartBtn.innerText = 'Add to Cart';
        addCartBtn.addEventListener('click', () => {
            const index = products.findIndex(item => item.product === product);
        
            if (index !== -1 && products[index].quantity > 0) {
                products[index].quantity -= 1;
        
                const cartIndex = cartproducts.findIndex(item => item.product === product);
                if (cartIndex !== -1) {
                    cartproducts[cartIndex].quantity += 1;
                } else {
                    const cartProduct = { ...products[index], quantity: 1 };
                    cartproducts.push(cartProduct);
                }
        
                localStorage.setItem('products', JSON.stringify(products));
        
                // Display updated quantity in the productElement
                const quantityElement = productElement.querySelector('.quantity');
                if (quantityElement) {
                    quantityElement.innerText = `Available quantity: ${products[index].quantity}`;
                }
        
                alert(`${product} added to the cart`);
            } else {
                alert(`No more ${product} available.`);
            }
        });


        productElement.appendChild(addCartBtn);;

            prod.appendChild(productElement);
        }else if (targetValue === 4 && category === 'creatine') {
            // Display products from the "Vitamins & Mineral" category only when targetValue is 3
            const productElement = document.createElement('div');
            productElement.className = "col";    
            const addCartBtn = document.createElement('button');  
            addCartBtn.className = "btn btn-info";
            addCartBtn.innerText = 'Add to Cart';
        productElement.innerHTML = `<div class="card"><img src="${img}" alt="${product} Image" class="card-img-top"><div class="card-body"><h4 class="card-title">Product is : ${product}</h4>
        <p class="card-text">Price is :${price}</p>
        <p class="card-text">Available quantity: ${quantity}</p>
        </div>
        </div>`
            
        addCartBtn.innerText = 'Add to Cart';
        addCartBtn.addEventListener('click', () => {
            const index = products.findIndex(item => item.product === product);
        
            if (index !== -1 && products[index].quantity > 0) {
                products[index].quantity -= 1;
        
                const cartIndex = cartproducts.findIndex(item => item.product === product);
                if (cartIndex !== -1) {
                    cartproducts[cartIndex].quantity += 1;
                } else {
                    const cartProduct = { ...products[index], quantity: 1 };
                    cartproducts.push(cartProduct);
                }
        
                localStorage.setItem('products', JSON.stringify(products));
        
                // Display updated quantity in the productElement
                const quantityElement = productElement.querySelector('.quantity');
                if (quantityElement) {
                    quantityElement.innerText = `Available quantity: ${products[index].quantity}`;
                }
        
                alert(`${product} added to the cart`);
            } else {
                alert(`No more ${product} available.`);
            }
        });


        productElement.appendChild(addCartBtn);;

            prod.appendChild(productElement);
        }
        
        
    }    
}

showCart.addEventListener('click', () => {
    // Save cartproducts to local storage
    localStorage.setItem('cartproducts', JSON.stringify(cartproducts));
    
    // Build the URL with cartproducts as a query parameter
    const queryParams = encodeURIComponent(JSON.stringify(cartproducts));
    window.location.href = `checkout.html?cartproducts=${queryParams}`;
});








