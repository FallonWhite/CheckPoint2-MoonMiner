let cheese = 0

function mineMoon() {
  cheese += 1
  update(cheese)
}

function update(cheese) {
  document.getElementById("displayCheese").innerText = cheese.toString()
}

let clickUpgrades = {
  pickaxes: {
    price: 100,
    quantity: 0,
    multiplier: 1,
    btn btn- primary
},

  drills: {
    price: 125,
    quantity: 0,
    multiplier: 2,
    btn btn - secondary
  },

explosives: {
  price: 250,
    quantity: 0,
      multiplier: 4,
        btn btn - success
},

excavators: {
  price: 1000,
    quantity: 0,
      multiplier: 6,
        btn btn - info
}
};

let automaticUpgrades = {
  lasers: {
    price: 2000,
    quantity: 0,
    multiplier: 20,
    btn btn- warning
}
};

function checkout() {
  cart = []
  drawTotal()
  drawCart()
}



