let cheese = 0

function mineMoon() {
  cheese += 1
  update(cheese)
}

function update(cheese) {
  document.getElementById("displayCheese").innerText = cheese.toString()
}
/*Click Upgrades*/
let items = {
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
  }
};
/*automaticUpgrades */
let itemsAuto = {
  lasers: {
    price: 2000,
    quantity: 0,
    multiplier: 10
  },

  excavators: {
    price: 1000,
    quantity: 0,
    multiplier: 6
  }
};

function buy(item) {
  if (item == "pickaxes") && (pickaxesPrice <= cheese) {
    cheese = cheese - pickaxesPrice;
    pickaxesCount = pickaxesCount + 1;
    multiplier = multiplier * 2;
  } else if (item == "drills") && (drillsPrice <= cheese) {
    cheese = cheese - drillsPrice;
    drillsCount = drillsCount + 1;
    multiplier = multiplier * 3;
  } else if (item == "explosives") && (explosivesPrice <= cheese) {
    cheese = cheese - explosivesPrice;
    explosivesCount = explosivesCount + 1;
    multiplier = multiplier * 4;
  }