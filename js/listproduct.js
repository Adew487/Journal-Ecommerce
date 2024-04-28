const productsl1 = document.querySelector(".productlist");

function renderProductsList() {
    // document.getElementById("products").innerText ="";
    productlist.forEach((product) => {
        productsl1.innerHTML += `

        <div style="margin-bottom:29px;" class="load item d-flex" data-category="" data-price="" id="listitem">
        <div class="overlay-outer7">
            <div class="d-flex flex-column">
                <div class="d-flex flex-column">
    
                </div>
            </div>
    
            <a href="#" class="d-flex">
                <div class="overlay7"></div>
                <img src="${product.imgSrc}" alt="${product.imgSrc}" width="250px" height="250px" id="id_${product.id}"">
                <div class="content-details7">
                    <a href="" id="circle-plus"><i class="fa-solid fa-circle-plus"></i></a>
                    <!-- <div class="cart_wrapper d-flex justify-content-between"
                    style="margin-top:7.5rem;">
                    <div class="d-flex align-items-center">
                        <input type="number" name="quantity" value="1" data-minimum="1"
                            class="form-control">
                        <a href=""
                            class="ms-4 d-flex align-items-center add-to-cart-btn"
                            style="padding:2px 8px;">
                            <i class="fa-solid fa-bag-shopping" id="shopping-bag"></i>
                            <span class="btn-add ms-1  add-cart pt-1"
                                onclick="addToCart(${product.id})">ADD TO CART</span>
                        </a>
                    </div>
                    <div class="d-flex align-items-center">
                        <i class="fa-solid fa-heart" id="heart"></i>
    
                        <i class="fa-solid fa-sort ms-2 me-2" id="sorting"></i>
                    </div>
    
                </div> -->
                </div>
            </a>
        </div>
    
        <div class="product-caption" style="margin-left: 14px;">
            <div class="product-brand" style="margin-bottom: 10px;"><a href="">Brand:
                    <span class="title">${product.brand}</span></a></div>
                <span class="name product-title title product-name my-2"><a href="">${product.name}</a></span>
                <p  style="margin-top: 8px;">${product.description}</p>
                <div class=" product-price mt-2 mb-3"  style="margin:8px 0px;"><small>$</small>${product.price}
                </div>
    
                <span class="add-cart add-cart-cart"  onclick="addToCart(${product.id})"><i class="fa-solid fa-bag-shopping me-2" id="shopping-bag"
                        style="display:inline-block;"></i>ADD TO CART</span>
    
    
            </div>
        </div>
    </div>
    
    <hr>
    

`;
    });
}

renderProductsList();

