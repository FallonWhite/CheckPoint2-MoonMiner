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
    price: 1,
    quantity: 0,
    multiplier: 1
  }

  drill: {
    price: 4,
    quantity: 0,
    multiplier: 4
  }

  explosives: {
    price: 2,
    quantity: 0,
    multiplier: 3
  }

  excavators: {
    price: 3,
    quantity: 0,
    multiplier: 5
  }
};

let automaticUpgrades = {
  rovers: {
    price: 600,
    quantity: 0,
    multiplier: 20
  }
};