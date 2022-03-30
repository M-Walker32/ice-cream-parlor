const iceCream = [
  { name: 'Cookie Dough', image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg', price: 1 },
  { name: 'Vanilla', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg', price: 1 },
  { name: 'Strawberry', image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg', price: 2 }]


const vessels = [
  { name: 'Waffle Cone', image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg', price: 2 },
  { name: 'Waffle Bowl', image: 'http://images.wbmason.com/350/L_JOY66050.jpg', price: 4 }]

const toppings = [
  { name: 'Sprinkles', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg', price: 1 },
  { name: 'Peanuts', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Peanutjar.jpg/440px-Peanutjar.jpg', price: 1 }]

let newItem = []
let currentBill = 0

function createNewItem() {
  const index = Math.floor(Math.random() + (newItem))
  newItem.push(index)
  drawNewItem()
}

function drawNewItem() {
  let template = ''
  newItem.forEach(newitem => {
    template +=
      `            
      <div class="col-4">
      <img id ="cream-img" src="">
      <i class="mdi mdi-ice-cream mdi mdi-24px"></i>
      <p id="flavor">Flavor:</p>
      <p id="vessel">Vessel:</p>
      <p id="toppings">Toppings:</p>
      </div>
      </div> `})
  // console.log('template here:', template)
  // console.log('newItem here:', newItem)
  document.getElementById('order-item').innerHTML = template
  setBill()
}


// make the button add the price to the total
// make the button update the price to the new price
// the price keeps increasing if you select a new option...

function cookiedough() {
  document.getElementById('flavor').innerText = ('Flavor: ' + iceCream[0].name)
  currentBill = (currentBill + iceCream[0].price)
  setBill()
  // console.log(currentBill)
}

function strawberry() {
  document.getElementById('flavor').innerText = ('Flavor: ' + iceCream[2].name)
  currentBill = (currentBill + iceCream[2].price)
  setBill()
}

function vanilla() {
  document.getElementById('flavor').innerText = ('Flavor: ' + iceCream[1].name)
  currentBill = (currentBill + iceCream[1].price)
  setBill()
}

function waffleCone() {
  document.getElementById('vessel').innerText = ('Vessel: ' + vessels[0].name)
  currentBill = (currentBill + vessels[0].price)
  setBill()
}

function waffleBowl() {
  document.getElementById('vessel').innerText = ('Vessel: ' + vessels[1].name)
  currentBill = (currentBill + vessels[1].price)
  setBill()
}

function sprinkles() {
  document.getElementById('toppings').innerText = ('Topping: ' + toppings[0].name)
  currentBill = (currentBill + toppings[0].price)
  setBill()
}

function nuts() {
  document.getElementById('toppings').innerText = ('Topping: ' + toppings[1].name)
  currentBill = (currentBill + toppings[1].price)
  setBill()
}

function reset() {
  location.reload();
}

function setBill() {
  document.getElementById('bill').innerText = currentBill
}

createNewItem()