/*Click Upgrades. Dictionary*/
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

let cheese = 0;

function mineMoon() {
  let pickaxesMultiplier = items.pickaxes.quantity * items.pickaxes.multiplier;
  let drillsMultiplier = items.drills.quantity * items.drills.multiplier;
  let explosivesMultiplier = items.explosives.quantity * items.explosives.multiplier;
  cheese += 1 + pickaxesMultiplier + drillsMultiplier + explosivesMultiplier;
  update();
}

function update() {
  document.getElementById('cheese-quantity').innerText = cheese.toString();
  cheesePerClickStat();
}

function buyPickaxes() {
  let price = items.pickaxes.price;
  if (cheese >= price) {
    cheese -= price;
    items.pickaxes.quantity++;
    items.pickaxes.price += Math.floor(price * 0.3);
    // Updates Excavator stuffs
    document.getElementById('pickaxes-quantity').innerText = items.pickaxes.quantity.toString();
    document.getElementById('pickaxes-price').innerText = items.pickaxes.price.toString();
    update();
  } else {
    alert('Get mo cheese, yo!');
  }
}

function buyDrills() {
  let price = items.drills.price;
  if (cheese >= price) {
    cheese -= price;
    items.drills.quantity++;
    items.drills.price += Math.floor(price * 0.3);
    // Updates Excavator stuffs
    document.getElementById('drills-quantity').innerText = items.drills.quantity.toString();
    document.getElementById('drills-price').innerText = items.drills.price.toString();
    update();
  } else {
    alert('Get mo cheese, yo!');
  }
}

function buyExplosives() {
  let price = items.explosives.price;
  if (cheese >= price) {
    cheese -= price;
    items.explosives.quantity++;
    items.explosives.price += Math.floor(price * 0.3);
    // Updates Excavator stuffs
    document.getElementById('drills-quantity').innerText = items.explosives.quantity.toString();
    document.getElementById('drills-price').innerText = items.explosives.price.toString();
    update();
  } else {
    alert('Get mo cheese, yo!');
  }
}

function buyExcavator() {
  let price = itemsAuto.excavators.price;
  if (cheese >= price) {
    cheese -= price;
    itemsAuto.excavators.quantity++;
    itemsAuto.excavators.price += Math.floor(price * 0.3);
    // Updates Rover Template
    document.getElementById('excavators-quantity').innerText = itemsAuto.excavators.quantity.toString();
    document.getElementById('excavators-price').innerText = itemsAuto.excavators.price.toString();
    update();
  } else {
    alert('Get youself mo cheese, yo!');
  }
}

function buyLaser() {
  console.log("purchased laser")
  let price = itemsAuto.laser.price;
  if (cheese >= price) {
    cheese -= price;
    itemsAuto.laser.quantity++;
    itemsAuto.laser.price += Math.floor(price * 0.3);
    // Updates Laser stuffs
    document.getElementById('laser-Quantity').innerText = itemsAuto.laser.quantity.toString();
    document.getElementById('laser-Price').innerText = itemsAuto.laser.price.toString();
    update();
  } else {
    alert('I need more cheese, Captain!');
  }
}
function startInterval() {
  setInterval(collectItemsAuto, 3000);
}

function collectItemsAuto() {
  let welfareCheese = 0;
  for (let key in collectItemsAuto) {
    welfareCheese += itemsAuto[key].quantity * itemsAuto[key].multiplier;
  }
  cheese += welfareCheese;
  document.getElementById('CPS').innerText = welfareCheese.toString();
  update();
}

function cheesePerClickStat() {
  let CPC = 1;
  for (let key in items) {
    CPC += items[key].quantity * items[key].multiplier;
  }
  document.getElementById('CPC').innerText = CPC.toString();
}

startInterval();