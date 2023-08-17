const products = [
    {product: 'Whey Protein', price: 119.99, quantity: 50 ,img:'https://i.ebayimg.com/images/g/K90AAOSwdzdfA1V-/s-l1600.jpg', category: 'protein'},
    {product: 'Creatine', price: 59.99, quantity: 100, img:'https://ca.tc-nutrition.com/cdn/shop/products/tilted_left_1_12_1024x1024.png?v=1653390675', category: 'creatine'},
    {product: 'Multi Vitamins', price: 19.99, quantity: 200, img:'https://m.media-amazon.com/images/I/71w8MAqFzFL._AC_UF1000,1000_QL80_.jpg', category: 'vitamins'},
    {product: 'Caesin', price: 99.99, quantity: 78, img:'https://cdn.dymatize.com/a/products/ELITE_CASEIN_RICH_CHOCOLATE_Product_Thumbnail_Product_Detail_Page_540x678.jpg', category: 'protein'}
];

const next_page = document.querySelector('#nxt');

next_page.addEventListener('click', () =>{
    window.location.href = 'welcome.html';
})

function myFunction(query) {
    const ul = document.getElementById("myUL");
    const productImageContainer = document.getElementById("productImageContainer");
    const productImage = document.getElementById("productImage");

    // Clear the previous list of products
    ul.innerHTML = "";

    const filteredProducts = products.filter(product => {
        const productName = product.product.toUpperCase();
        return productName.includes(query);
    });

    filteredProducts.forEach(product => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.textContent = product.product;
        a.href = "#";
        li.appendChild(a);
        ul.appendChild(li);

        // Add event listener to each product link
        a.addEventListener("click", () => {
            productImage.src = product.img;
            productImage.alt = product.product;
            productImageContainer.style.display = "block";
        });
    });
}

function handleSearch(event) {
    if (event.key === "Enter") {
        const input = document.getElementById("myInput");
        const filter = input.value.toUpperCase();
        myFunction(filter);
    }
}