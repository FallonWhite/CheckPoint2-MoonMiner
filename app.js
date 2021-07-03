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
    multiplier: 2
  },

  drills: {
    price: 125,
    quantity: 0,
    multiplier: 3
  },

  explosives: {
    price: 250,
    quantity: 0,
    multiplier: 4
  },

  excavators: {
    price: 1000,
    quantity: 0,
    multiplier: 6
  }
};

let automaticUpgrades = {
  lasers: {
    price: 2000,
    quantity: 0,
    multiplier: 10
  }
}

function checkout() {
  cart = []
  drawTotal()
  drawCart()
}


