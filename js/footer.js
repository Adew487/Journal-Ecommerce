const footerl1 = document.querySelector(".renderfooter");

function renderFooter() {
    // document.getElementById("products").innerText ="";
    // HeaderProducts.forEach(() => {
        footerl1.innerHTML += `

        <div class="col-lg-3 col-md-6 col-12">
        <div class="footer-links-menu">
            <h3>Custom Links</h3>
            <ul class="ps-0">
                <li class="menu-item"><a href="">About Us</a></li>
                <li class="menu-item"><a href="">Delivery</a></li>
                <li class="menu-item"><a href="">Privacy Policy</a></li>
                <li class="menu-item"><a href="">Terms & Conditions</a></li>
                <li class="menu-item"><a href="">Custom Links</a></li>
            </ul>
        </div>
    </div>
    <div class="col-lg-2 col-md-6 col-12">
        <div class="footer-links-menu">
            <h3>My Account</h3>
            <ul class="ps-0">
                <li class="menu-item"><a href="">My Account</a></li>
                <li class="menu-item"><a href="">Order History</a></li>
                <li class="menu-item"><a href="">Affiliates</a></li>
                <li class="menu-item"><a href="">Newsletter</a></li>
                <li class="menu-item"><a href="">Gift Certificates</a></li>
            </ul>
        </div>

    </div>
    <div class="col-lg-3 col-md-6 col-12">
        <div class="footer-links-menu">
            <h3>Customer Service</h3>
            <ul class="ps-0">
                <li class="menu-item"><a href="">Contact</a></li>
                <li class="menu-item"><a href="">Returns</a></li>
                <li class="menu-item"><a href="">Site Map</a></li>
                <li class="menu-item"><a href="">Brands</a></li>
                <li class="menu-item"><a href="">Unllimited Links</a></li>
            </ul>
        </div>
    </div>
    <div class="col-lg-4 col-md-6 col-12">
        <div class="footer-links-menu">
            <h3>Newletter</h3>
            <p>
                Don't miss any updates or promotions by signing up to our newsletter.
            </p>
            <div class="search-footer">
                <input type="text" class="form-control" placeholder="Your email">
                <button class="btn "><i class="fa-solid fa-envelope me-2"></i>SEND</button>
            </div>
            <label><input type="checkbox" name="agree" value="1" class=""><a href=""> I have read
                    and agree to
                    the <b>Privacy Policy</b></a></label>
            <div class="footer-menu-icons mt-3">
                <a href="" class="ms-1"><i class="fa-brands fa-facebook-f p-1"></i></a>
                <a href="" class="ms-1"><i class="fa-brands fa-twitter"></i></a>
                <a href="" class="ms-1"><i class="fa-brands fa-instagram"></i></a>
                <a href="" class="ms-1"><i class="fa-brands fa-skype"></i></a>
                <a href="" class="ms-1"><i class="fa-brands fa-whatsapp"></i></a>
            </div>

        </div>
    </div>
    <hr>
    <div id="copyright-footer"
        class="d-lg-flex d-md-flex d-block justify-content-between text-center">
        <p class="d-lg-flex d-md-flex d-block text-center align-items-center">Copyright &#169; 2019,
            Your Store, All Rights Reserved</p>
        <div class="payment-methods mt-lg-0 mt-md-0 mt-2">
            <a href=""><i class="fa-brands fa-cc-visa"></i></a>
            <a href="" class="ms-1"><i class="fa-brands fa-cc-mastercard"></i>
                <a href="" class="ms-1"><i class="fa-brands fa-cc-paypal"></i></a>
                <a href="" class="ms-1"><i class="fa-brands fa-cc-amex"></i></a>
                <a href="" class="ms-1"><i class="fa-brands fa-cc-discover"></i></a>
        </div>

    </div>
    

`;
    // });
}

renderFooter();