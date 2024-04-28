const footertab1 = document.querySelector(".footertabs");

function renderFootertab() {
    // document.getElementById("products").innerText ="";
    // HeaderProducts.forEach(() => {
        footertab1.innerHTML += `

        <div class="tab footer-tab" role="tabpanel">
        <!-- Nav tabs -->
        <ul class="nav nav-tabs nav_nav-tabs" role="tablist">
            <li role="presentation" class="active me-lg-0 me-md-0 me-3"><a href="#footer_section1"
                    aria-controls="home" role="tab" data-toggle="tab">RECENTLY VIEWED</a></li>
            <li role="presentation"><a href="#footer_section2" aria-controls="profile" role="tab"
                    data-toggle="tab">MOST VIEWED</a></li>
        </ul>
        <!-- Tab panes -->
        <div class="tab-content tabs">
            <div role="tabpanel" class="tab-pane  in active mt-3" id="footer_section1">
                <div class="row">
                    <div class="col-lg-3 col-6">
                        <div class="viewed-product p-2 d-lg-flex d-md-flex">

                            <div class="overlay-product">
                                <i class="fa-solid fa-magnifying-glass-plus position-relative"
                                    data-mdb-toggle="tooltip" data-mdb-html="true"
                                    data-title="Quick View" id="search-product"></i>
                            </div>
                            <div class="image">
                                <a href=""><img src="img/Footer-Tabs/fbottom1.jpg"></a>
                            </div>
                            <div
                                class="product-info d-flex flex-column ps-lg-2 ps-md-2 ps-0 mt-lg-0 mt-md-0 mt-2">
                                <a href="">Workout Shoes</a>
                                <span class="product-price">$209.00</span>
                                <div class="icon_group d-flex mt-1">
                                    <i class="fa-solid fa-bag-shopping" id="product-bag"
                                        style="display:block ;"></i>
                                    <i class="fa-solid fa-heart ms-3" id="product-heart"></i>
                                    <i class="fa-solid fa-code-compare ms-3" id="product-compare"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-6">
                        <div class="viewed-product p-2 d-lg-flex d-md-flex">
                            <div class="overlay-product">
                                <i class="fa-solid fa-magnifying-glass-plus position-relative"
                                    data-mdb-toggle="tooltip" data-mdb-html="true"
                                    data-title="Quick View" id="search-product"></i>
                            </div>
                            <div class="image">
                                <a href=""><img src="img/Footer-Tabs/fbottom2.png"></a>
                            </div>
                            <div
                                class="product-info d-flex flex-column ps-lg-2 ps-md-2 ps-0 mt-lg-0 mt-md-0 mt-2">
                                <a href="">Workout Shoes</a>
                                <span class="product-price">$209.00</span>
                                <div class="icon_group d-flex mt-1">
                                    <i class="fa-solid fa-bag-shopping" id="product-bag"
                                        style="display:block ;"></i>
                                    <i class="fa-solid fa-heart ms-3" id="product-heart"></i>
                                    <i class="fa-solid fa-code-compare ms-3" id="product-compare"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <!-- Most Viewed -->

            <div role="tabpanel" class="tab-pane mt-3" id="footer_section2">
                <div class="row">
                    <div class="col-lg-3 col-6">

                        <div class="viewed-product p-2 d-lg-flex d-md-flex">
                            <div class="overlay-product">
                                <i class="fa-solid fa-magnifying-glass-plus position-relative"
                                    data-mdb-toggle="tooltip" data-mdb-html="true"
                                    data-title="Quick View" id="search-product"></i>
                            </div>
                            <div class="image">
                                <a href=""><img src="img/Footer-Tabs/fbottom3.jpg"></a>
                            </div>
                            <div
                                class="product-info d-flex flex-column ps-lg-2 ps-md-2 ps-0 mt-lg-0 mt-md-0 mt-2">
                                <a href="">Workout Shoes</a>
                                <span class="product-price">$209.00</span>
                                <div class="icon_group d-flex mt-1">
                                    <i class="fa-solid fa-bag-shopping" id="product-bag"
                                        style="display:block ;"></i>
                                    <i class="fa-solid fa-heart ms-3" id="product-heart"></i>
                                    <i class="fa-solid fa-code-compare ms-3" id="product-compare"></i>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="col-lg-3 col-6">
                        <div class="viewed-product p-2 d-lg-flex d-md-flex">
                            <div class="overlay-product">
                                <i class="fa-solid fa-magnifying-glass-plus position-relative"
                                    data-mdb-toggle="tooltip" data-mdb-html="true"
                                    data-title="Quick View" id="search-product"></i>
                            </div>
                            <div class="image">
                                <a href=""><img src="img/Footer-Tabs/fbottom4.jpg"></a>
                            </div>
                            <div
                                class="product-info d-flex flex-column ps-lg-2 ps-md-2 ps-0 mt-lg-0 mt-md-0 mt-2">
                                <a href="">Workout Shoes</a>
                                <span class="product-price">$209.00</span>
                                <div class="icon_group d-flex mt-1">
                                    <i class="fa-solid fa-bag-shopping" id="product-bag"
                                        style="display:block ;"></i>
                                    <i class="fa-solid fa-heart ms-3" id="product-heart"></i>
                                    <i class="fa-solid fa-code-compare ms-3" id="product-compare"></i>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="col-lg-3 col-6 mt-lg-0 mt-4">

                        <div class="viewed-product p-2 d-lg-flex d-md-flex">
                            <div class="overlay-product">
                                <i class="fa-solid fa-magnifying-glass-plus position-relative"
                                    data-mdb-toggle="tooltip" data-mdb-html="true"
                                    data-title="Quick View" id="search-product"></i>
                            </div>
                            <div class="image">
                                <a href=""><img src="img/Footer-Tabs/fbottom5.jpg"></a>
                            </div>
                            <div
                                class="product-info d-flex flex-column ps-lg-2 ps-md-2 ps-0 mt-lg-0 mt-md-0 mt-2">
                                <a href="">Workout Shoes</a>
                                <span class="product-price">$209.00</span>
                                <div class="icon_group d-flex mt-1">
                                    <i class="fa-solid fa-bag-shopping" id="product-bag"
                                        style="display:block ;"></i>
                                    <i class="fa-solid fa-heart ms-3" id="product-heart"></i>
                                    <i class="fa-solid fa-code-compare ms-3" id="product-compare"></i>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="col-lg-3 col-6 mt-lg-0 mt-4">

                        <div class="viewed-product p-2 d-lg-flex d-md-flex">

                            <div class="overlay-product">
                                <i class="fa-solid fa-magnifying-glass-plus position-relative"
                                    data-mdb-toggle="tooltip" data-mdb-html="true"
                                    data-title="Quick View" id="search-product"></i>
                            </div>

                            <div class="image">
                                <a href=""><img src="img/Footer-Tabs/fbottom6.jpg"></a>
                            </div>

                            <div
                                class="product-info d-flex flex-column ps-lg-2 ps-md-2 ps-0 mt-lg-0 mt-md-0 mt-2">
                                <a href="">Workout Shoes</a>
                                <span class="product-price">$209.00</span>
                                <div class="icon_group d-flex mt-1">
                                    <i class="fa-solid fa-bag-shopping" id="product-bag"
                                        style="display:block ;"></i>
                                    <i class="fa-solid fa-heart ms-3" id="product-heart"></i>
                                    <i class="fa-solid fa-code-compare ms-3" id="product-compare"></i>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

`;
    // });
}

renderFootertab();