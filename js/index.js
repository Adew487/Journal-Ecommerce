
//////////////////////////////////////// For Mobile view menus


var sidenav = document.getElementById('sidenav');
var menubar = document.getElementById('menubar');
var closemark = document.getElementById('closemark');

sidenav.style.width = "0px";
menubar.onclick = () => {
  if (sidenav.style.width == "0px") {
    sidenav.style.width = "400px";
    sidenav.style.height = "167vh"
  }
  else {

    sidenav.style.width = "0px";
  }
}

closemark.onclick = () => {
  sidenav.style.width = "0px";
}

//////////////////////////////////////////////////For searchbar


var fa_glass_glass = document.getElementById('fa_glass_glass');
var search = document.getElementById('search');

fa_glass_glass.onclick = () => {
  search.style.display = "block";
  search.style.position = "absolute";
  search.style.width = "99%"
  search.style.left = "0"
  search.style.right = "0"
  search.style.top = "4.5rem"
  search.style.marginLeft = "auto"
  search.style.marginRight = "auto"
  search.style.transition = "0.5s ease-in-out"
  search.style.zIndex = "99"
}


// Cart Working Js

// if (document.readyState == "loading") {
//   document.addEventListener("DOMContentLoaded", ready);
// }
// else {
//   ready();
// }

// Making Function
// function ready() {
// Remove items from cart
//   var removeCartButtons = document.getElementsByClassName('remove-item')
//   console.log(removeCartButtons)
//   for (var i = 0; i < removeCartButtons.length; i++) {
//     var button = removeCartButtons[i]
//     button.addEventListener('click', removeCartItem)
//   }

//   // quantity changes

//   var quantityInputs = document.getElementsByClassName('quantity');
//   for (var i = 0; i < quantityInputs.length; i++) {
//     var input = quantityInputs[i]
//     input.addEventListener('change', quantityChanged)
//   }
//   // Add to cart

//   var addCart = document.getElementsByClassName("add-cart");
//   for (var i = 0; i < addCart.length; i++) {
//     var button = addCart[i];
//     button.addEventListener('click', addCartClicked);
//   }
// }


// remove items from cart

// function removeCartItem(event) {
//   var buttonClicked = event.target;
//   buttonClicked.parentElement.remove();
//   updatetotal();
// }

// quantity Changes

// function quantityChanged(event) {
//   var input = event.target
//   if (isNaN(input.value) || input.value <= 0) {
//     input.value = 1;
//   }
//   updatetotal();

// }

// Add to Cart

// function addCartClicked(event) {
//   var button = event.target;
//   var shopProducts = button.parentElement;
//   var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
//   var price = shopProducts.getElementsByClassName("price")[0].innerText;
//   var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
//   addProductToCart (title, price,productImg);
//   updatetotal();
// }

// function addProductToCart(title, price) {
//   var cartShopBox = document.createElement('div');
//   cartShopBox.classList.add('add-to-cart-drop')
//   var cartItems = document.getElementsByClassName('cart-content')[0];
//   var cartItemsNames = document.getElementsByClassName('cart-product-title');
//   for (var i = 0; i < cartItemsNames.length; i++) {
//     if(cartItemsNames[i].innerText == title) {
//       alert("You have already add this item to cart");
//       return;
//     }

//   }

// }

// var cartBoxContent = ` 
// <div class="d-flex flex-column ms-3">
// <a href="" class="cart-product-title">Samsung</a>
// <div class="d-flex align-items-center">
//     <span
//         class="size">Size:</span><small>&nbsp;S</small>
// </div>
// <div class="d-flex  align-items-center">
//     <span
//         class="color">Color:</span><small>&nbsp;Red</small>
// </div>
// </div>
// <input type="number" value="0"
// class="quantity" id="quantity">
// <span class="price">$60.04</span>

// <i class="fa-solid fa-xmark remove-item"
// id=""></i>
// `;
// cartShopBox.innerHTML = cartBoxContent;
// cartItems.append(cartShopBox);
// cartShopBox.getElementsByClassName('remove-item')[0].addEventListener('click', removeCartItem);
// cartShopBox.getElementsByClassName('quantity')[0].addEventListener('change', quantityChanged);

// // Update Total

// function updatetotal() {
//   var cartContent = document.getElementsByClassName('cart-products')[0];
//   var cartBoxes = cartContent.getElementsByClassName('add-to-cart-drop');
//   var total = 0;
//   for (var i = 0; i < cartBoxes.length; i++) {
//     var cartBox = cartBoxes[i];
//     var priceElement = cartBox.getElementsByClassName('price')[0];
//     var quantityElement = cartBox.getElementsByClassName('quantity')[0];
//     var price = parseFloat(priceElement.innerText.replace("$", ""));
//     var quantity = quantityElement.value;
//     total = total + (price * quantity);
//     // if price contain some cents value
//     total = Math.round(total * 100) / 100;
//     document.getElementsByClassName("total-price")[0].innerText = "$" + total;
//     document.getElementsByClassName("total-price-total")[0].innerText = "$" + total;
//   }
// }
// function setInputError(inputElement, message) {
//   inputElement.classList.add("form_input_error");
//   inputElement.parentElement.querySelector(".form_message_error").textContent = message;
// }

// document.addEventListener("DOMContentLoaded", () => {
//   const loginForm = document.querySelector("#login");
//   const createAccountForm = document.querySelector("#createAccount");

//   loginForm.addEventListener("submit", e => {
//     e.preventDefault();


//     setFormMessage(loginForm, "error", "Invalid username / password combination");
//   });
//   document.querySelectorAll(".form_input").forEach(inputElement => {
//     inputElement.addEventListener("blur", e => {
//       if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
//         setInputError(inputElement, "Username must be at least 10 characters in length");
//       }
//     });
//   });

// });



// function setFormMessage(formElement, type, message) {
//   const messageElement = formElement.querySelector(".form_message");
//   messageElement.textContent = message;
//   messageElement.classList.remove("form_message_success", "form_message_error");
//   messageElement.classList.add(`form_message--${type}`);
// }

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()




// if we want to change the image on click in products page

const Mainimg = document.getElementById("Mainimg");
const smallimg = document.getElementsByClassName("small-img");

smallimg[0].onclick = function () {
  Mainimg.src = smallimg[0].src;

}
smallimg[1].onclick = function () {
  Mainimg.src = smallimg[1].src;

}
smallimg[2].onclick = function () {
  Mainimg.src = smallimg[2].src;

}
smallimg[3].onclick = function () {
  Mainimg.src = smallimg[3].src;

}
smallimg[4].onclick = function () {
  Mainimg.src = smallimg[4].src;

}
smallimg[5].onclick = function () {
  Mainimg.src = smallimg[5].src;

}
smallimg[6].onclick = function () {
  Mainimg.src = smallimg[6].src;

}
smallimg[7].onclick = function () {
  Mainimg.src = smallimg[7].src;

}



