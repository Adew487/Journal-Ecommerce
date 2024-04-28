

const productsE1 = document.querySelector(".products");

const cartItemsE1 = document.querySelector(".cart-products");

const subtotalEl = document.querySelector(".subtotal");

const subtotalE2 = document.querySelector(".subtotal2");

const total = document.querySelector(".total");

const totalItemsInCartEl = document.querySelector(".total-items-in-cart");
// Render Products

function renderProducts() {
    // document.getElementById("products").innerText ="";
    products.forEach((product) => {
        productsE1.innerHTML += `
        <div style="width: 33.33333333%; padding:0 12px;" class="load item" data-category="" data-price="">
        <div class="overlay-outer7">
        <a href="" id="circle-plus" data-bs-toggle="tooltip"
        data-bs-placement="top" title="Quickview"><i
            class="fa-solid fa-circle-plus"></i></a>
            <div class="d-flex flex-column">
                <div class="d-flex flex-column">

                </div>
            </div>

            <a href="#">
                <div class="overlay7">
                <img src="${product.imgSrc}" alt="${product.name}" id="id_${product.id}">
               
                <div class="content-details7">
                <div class="cart_wrapper d-flex justify-content-between">
                    <div class="d-flex align-items-center">
                        <input type="number" name="quantity" value="1"
                            data-minimum="1" class="form-control">

                    </div>
                    <div class="d-flex add-to-cart-pro px-2">
                        <a href="" class="d-flex align-items-center">
                            <i class="fa-solid fa-bag-shopping"
                                id="shopping-bag"></i>
                            <span class="btn-add ms-1"  onclick="addToCart(${product.id})">ADD TO CART</span>
                        </a>
                    </div>
                    <div class="d-flex align-items-center">
                        <i class="fa-solid fa-heart" id="heart"></i>

                        <i class="fa-solid fa-sort ms-2 me-2" id="sorting"></i>
                    </div>
                </div></div>
            </div>
            </a>
        </div>

        <div class="product-caption d-flex flex-column text-center">
            <span class="state name title"><a href="">${product.brand}</a></span>
            <span class="name product-title title"><a href="">${product.name}</a></span>
            <span class="price"><small>$</small> ${product.price}</span>

        </div>
    </div>

`;
    });
}


// Remove item from cart

function removeItemFromCart(id) {
    cart = cart.filter((item) => item.id !== id);
    updateCart();
}

renderProducts();


// Cart Array

let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();
// ADD TO CART

function addToCart(id) {
    // check if prodcut already exist in cart
    if (cart.some((item) => item.id === id)) {
        changeNumberOfUnits("plus", id);
    } else {
        const item = products.find((product) => product.id === id);

        cart.push({
            ...item,
            numberOfUnits: 1,
        });
    }

    updateCart();
}


// Update Cart

function updateCart() {
    renderCartItems();
    renderSubtotal();

    //save cart to local storage

    localStorage.setItem("CART", JSON.stringify(cart));
}

// calculate and render subtotal
function renderSubtotal() {
    let totalPrice = 0,
        totalItems = 0;

    cart.forEach((item) => {
        totalPrice += item.price * item.numberOfUnits;
        totalItems += item.numberOfUnits;
    });

    subtotalEl.innerHTML = `Subtotal (${totalItems} items): $${totalPrice.toFixed(2)}`;
    subtotalE2.innerHTML = `${totalItems} item(s) -
    $${totalPrice.toFixed(2)}`;
    total.innerHTML = `Total: ${totalPrice}`;
    totalItemsInCartEl.innerHTML = totalItems;

}


// render cart items

function renderCartItems() {
    cartItemsE1.innerHTML = ""; //clear cart element
    cart.forEach((item) => {
        cartItemsE1.innerHTML += `

            <div class="">
                <div
                    class="d-flex add-to-cart-drop justify-content-between py-2 px-3 ">
                  <div class="col-5 d-flex">
                    <img src="${item.imgSrc}"
                        width="60" height="60" alt="${item.name}">
                        <div class="d-flex flex-column ms-3">
                            <a href="">${item.name}</a>
                            <div class="d-flex align-items-center">
                                <span
                                    class="size"></span>
                            </div>
                            <div class="d-flex  align-items-center">
                                <span
                                    class="color">Color:</span><small>&nbsp;Red</small>
                            </div>
                        </div>
                  </div>


                        <div class="units d-flex col-4 justify-content-center">
                            <div class="btn minus" onclick="changeNumberOfUnits('minus', ${item.id})">-</div>
                            <div class="number mx-2">${item.numberOfUnits}</div>
                            <div class="btn plus" onclick="changeNumberOfUnits('plus', ${item.id})">+</div> 
                        </div>
                        <span class="price col-2 d-flex justify-content-center"><small style="margin-top:2px;">$</small>${item.price}</span>

                        <i class="fa-solid fa-xmark remove-item col-1 d-flex justify-content-center"
                            onclick="removeItemFromCart(${item.id})" style="margin-top:3px;"></i>
                </div>

            </div>
          
            <hr class="mb-0">

            
            `


            ;
    });
}




// change number of units for an item


function changeNumberOfUnits(action, id) {
    cart = cart.map((item) => {
        let numberOfUnits = item.numberOfUnits;

        if (item.id === id) {
            if (action === "minus" && numberOfUnits > 1) {
                numberOfUnits--;
            } else if (action === "plus" && numberOfUnits < item.instock) {
                numberOfUnits++;
            }

        }
        return {
            ...item,
            numberOfUnits,
        };
    });

    updateCart();
}


///////////////////////////////// Search Bar

let grid = document.querySelector(".products");
let filterinput = document.getElementById("filterinput");

filterinput.addEventListener("keyup", filterProducts);
function filterProducts() {
    let filterValue = filterinput.value.toUpperCase();
    // console.log(filterValue);
    let item = grid.querySelectorAll('.item')

    for (let i = 0; i < item.length; i++) {
        let span = item[i].querySelector('.title');
        if (span.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            item[i].style.display = "initial";

        } else {
            item[i].style.display = "none";
        }
    }
}

function displayCart() {
    let carttItems = localStorage.getItem
}