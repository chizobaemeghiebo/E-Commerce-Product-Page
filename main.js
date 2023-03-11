// const images = document.querySelectorAll('.mini-img')
// const mainImg = document.querySelector('.main-img')
// const mainImage = document.querySelectorAll('.main-image')
const minus = document.querySelector('.minus')
const add = document.querySelector('.add')
const addCart = document.querySelector('.addToCart')
let sum = document.querySelector('.sum')

// EVENT LISTENERS
minus.addEventListener('click', minusOne)
add.addEventListener('click', addOne)
addCart.addEventListener('click', addToCart)

// images.forEach((img) => {
//   img.addEventListener('click', () => {
//     mainImage[0].firstElementChild.src = img.src
//   })
// })

function addToCart() {
  sum.innerHTML++
}

function addOne() {
  sum.innerHTML++
}

function minusOne() {
  sum.innerHTML--

  if (sum.innerHTML < 0) {
    sum.innerHTML = 0
  }
}

// CHOCOLAT
