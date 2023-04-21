let searchForm = document.querySelector('.search-form')

document.getElementById('search-btn').onclick = () => {

    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    nav.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart')

document.querySelector('#cart-btn').onclick = () => {

    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    nav.classList.remove('active');
}

let loginForm = document.querySelector('.login-form')

document.querySelector('#login-btn').onclick = () => {

    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    nav.classList.remove('active');
}

let nav = document.querySelector('.nav')

document.querySelector('#menu-btn').onclick = () => {

    nav.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}


window.onscroll = () => {
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    nav.classList.remove('active');
}