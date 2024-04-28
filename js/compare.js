const productsc1 = document.querySelector(".productscompare");

// const cartCompareE2 = document.querySelector(".cart-Compare");

function renderProductsCompare() {
    // document.getElementById("products").innerText ="";
    productscompare.forEach((items) => {
        productsc1.innerHTML += `

        <div class=" row p-2 align-items-center gy-3 ">
            <div class="col-3">
                <h4>Product</h4>
            </div>
            <div class="col-9">
                <h3>${items.name}</h3>
            </div>
            <!-- image -->
            <div class="col-3">
                <h4>Image</h4>
            </div>
            <div class="col-9">
                <img src="${items.ImgSrc}" width="90px" height="90px" alt="${items.name}">
            </div>
            <!-- Price -->
            <div class="col-3">
                <h4>Price</h4>
            </div>
            <div class="col-9">
                <h6><small>$</small>${items.Price}</h6>
            </div>
            <!-- Model-->
            <div class="col-3">
                <h4>Model</h4>
            </div>
            <div class="col-9">
                <h6>${items.model}</h6>
            </div>
            <!-- Brand-->
            <div class="col-3">
                <h4>Brand</h4>
            </div>
            <div class="col-9">
                <h6>${items.brand}</h6>
            </div>
            <!--Availability-->
            <div class="col-3">
                <h4>Availability</h4>
            </div>
            <div class="col-9">
                <h6>${items.Availability}</h6>
            </div>

            <!--Rating-->
            <div class="col-3">
                <h4>Rating</h4>
            </div>
            <div class="col-9">
                <h6>Based on <span>${items.rating}</span> reviews</h6>
            </div>

            <!--Summary-->
            <div class="col-3">
                <h4>Summary</h4>
            </div>
            <div class="col-9">
                <h6>${items.summary}</h6>
            </div>

            <!--Weight-->
            <div class="col-3">
                <h4>Weight</h4>
            </div>
            <div class="col-9">
                <h6>${items.weight}</h6>
            </div>

            <!--Dimension-->
            <div class="col-3">
                <h4>Dimensions (L*W*H)</h4>
            </div>
            <div class="col-9">
                <h6>${items.dimensions}</h6>
            </div>

            <h5>PROCESSOR</h5>

            <!--Processor-->
            <div class="col-3">
                <h4>Clockspeed</h4>
            </div>
            <div class="col-9">
                <h6>${items.clockspeed}</h6>
            </div>

            <!--Processor-->
            <div class="d-flex add-remove-cart">
                <div class="col-3">

                </div>
                <div class="col-9 d-flex justify-content-end">
                    <div class="add-cart add-cart-cart text-center" style="flex-grow:1;"></i>ADD TO
                        CART
                    </div>
                    <div class="remove-cart text-center ms-2">
                        REMOVE
                    </div>
                </div>
            </div>
    </div>

`;
    });
}

renderProductsCompare();

















