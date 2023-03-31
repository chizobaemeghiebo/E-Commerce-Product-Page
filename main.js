// const images = document.querySelectorAll('.mini-img')
const mainImage = document.querySelector('.main-img')
const randDiv = document.querySelectorAll('#chocolat-content-0')
const minus = document.querySelector('.minus')
const add = document.querySelector('.add')
const addCart = document.querySelector('.addToCart')
let sum = document.querySelector('.sum')
let activeCart = document.querySelector('.cart span')

// EVENT LISTENERS
minus.addEventListener('click', minusOne)
add.addEventListener('click', addOne)
addCart.addEventListener('click', addToCart)
mainImage.addEventListener('click', () => {
  // mainImage.classList.add('chocolat-wrapper', 'chocolat-visible')
  randDiv.classList.add('chocolat-wrapper', 'chocolat-visible')
})

// images.forEach((img) => {
//   img.addEventListener('click', () => {
//     mainImage[0].firstElementChild.src = img.src
//   })
// })

function addToCart() {
  sum.innerHTML++
  activeCart.innerHTML = sum.innerHTML
  activeCart.style.opacity = '1'
  // activeCart.style.color = 'blue'
}

function addOne() {
  sum.innerHTML++
  activeCart.innerHTML = sum.innerHTML
  activeCart.style.opacity = '1'
}

function minusOne() {
  sum.innerHTML--
  activeCart.innerHTML = sum.innerHTML
  activeCart.style.opacity = '1'

  if (sum.innerHTML < 0) {
    activeCart.innerHTML = sum.innerHTML
    activeCart.style.opacity = '1'

    sum.innerHTML = 0
  }
}

// CHOCOLAT
