
'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElemArr = [overlay, navOpenBtn, navCloseBtn];

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

/**
 * add active class on header when scrolled 200px from top
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 200 ? header.classList.add("active")
    : header.classList.remove("active");
});

/**
 * product card button functionality
 */

const cartButtons = document.querySelectorAll(".cart-btn");
const likeButtons = document.querySelectorAll(".card-action-btn:not(.cart-btn)");
const cartButton = document.querySelector(".header-action-btn:nth-child(3)"); // Cart button in header
const wishlistButton = document.querySelector(".header-action-btn:nth-child(4)"); // Wishlist button in header
const signInButton = document.querySelector(".header-action-btn:nth-child(1)"); // Sign in button in header
let cart = [];
let wishlist = [];

cartButtons.forEach(button => {
  button.addEventListener("click", function (e) {
    const productCard = e.target.closest(".product-card");
    const productName = productCard.querySelector(".card-title a").textContent;
    const productPrice = productCard.querySelector(".card-price data:first-child").textContent;

    const item = { name: productName, price: productPrice };
    cart.push(item);
    alert(`${productName} has been added to your cart! Total items: ${cart.length}`);
  });
});

likeButtons.forEach(button => {
  button.addEventListener("click", function (e) {
    const productCard = e.target.closest(".product-card");
    const productName = productCard.querySelector(".card-title a").textContent;

    const isLiked = wishlist.some(item => item.name === productName);
    if (isLiked) {
      wishlist = wishlist.filter(item => item.name !== productName);
      alert(`${productName} removed from wishlist!`);
    } else {
      wishlist.push({ name: productName });
      alert(`${productName} added to wishlist!`);
    }
  });
});

/**
 * display cart contents
 */

cartButton.addEventListener("click", function () {
  if (cart.length === 0) {
    alert("Your cart is empty!");
  } else {
    let cartMessage = "Items in your cart:\n";
    cart.forEach((item, index) => {
      cartMessage += `${index + 1}. ${item.name} - ${item.price}\n`;
    });
    alert(cartMessage);
  }
});

/**
 * display wishlist contents
 */

wishlistButton.addEventListener("click", function () {
  if (wishlist.length === 0) {
    alert("Your wishlist is empty!");
  } else {
    let wishlistMessage = "Items in your wishlist:\n";
    wishlist.forEach((item, index) => {
      wishlistMessage += `${index + 1}. ${item.name}\n`;
    });
    alert(wishlistMessage);
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const signInButton = document.querySelector(".header-action-btn ion-icon[name='person-outline']").closest(".header-action-btn");
  if (signInButton) {
    signInButton.addEventListener("click", function (e) {
      console.log("Sign in button clicked");
      window.location.href = "signin.html";
    });
  } else {
    console.error("Sign in button not found. Check HTML structure or selector.");
  }
});