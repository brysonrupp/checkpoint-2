
let Upgrades = [
    {
        // Position 0
        name: 'pickaxe',
        price: 10,
        quantity: 0,
        multiplier: 1
    },
    {
        name: 'hammer',
        price: 20,
        quantity: 0,
        multiplier: 2
    },
    {
        name: 'drill',
        price: 30,
        quantity: 0,
        multiplier: 3
    }];


let automaticUpgrades = [
    {
        name: 'machine',
        price: 60,
        quantity: 0,
        multiplier: 6
    }
];

// Create a variable that will hold the power of all clicks
let gold = 0
let power = 1
let totalGold = 0
let autoGold = 0
// let autoUpgrades = 1

function update() {
    document.getElementById('mine').innerText = `Gold: ${gold} | Mining Power: ${power} | Auto-Mining: ${autoGold} | Overall Mined: ${totalGold}`
}

function mine() {
    gold += power
    totalGold += power
    // console.log("Gold", gold);
    // console.log("Power", power)

    // MAKE A FUNCTION FOR YOUR UPDATE, THEN UNCOMMENT
    update()
}

function Buy(name) {
    let material = Upgrades.find(m => m.name == name)
    if (gold >= material.price) {
        gold -= material.price
        power += material.multiplier
        material.quantity += 1
        material.price += 20
    }
    document.getElementById(`${material.name}`).innerText = material.quantity
    update()
}

function buyTimer(name) {
    let auto = automaticUpgrades.find(a => a.name == name)
    if (gold >= auto.price) {
        let goldInterval = setInterval(() => {
            gold += auto.multiplier * auto.quantity
            totalGold += auto.multiplier * auto.quantity
            update()
        }, 3000)
        gold -= auto.price
        auto.quantity += 1
        autoGold += auto.quantity * auto.multiplier
        auto.price += 60
        setTimeout(() => {
            clearInterval(goldInterval)
        }, 30000)
    }
    document.getElementById(`${auto.name}`).innerText = auto.quantity
    update()
}

update()


// function buyPickaxe() {
//     if (gold >= Upgrades[0].price) {
//         gold -= Upgrades[0].price;
//         // At the array of Upgrades, grab the object at position [0]. Then target its quantity and increase by 1
//         Upgrades[0].quantity++
//         // Declare an empty variable to store the information below it
//         let pickAxePower = 0
//         // Grab Upgrades array at position 0, then multiply its quantity by its multiplier
//         pickAxePower += Upgrades[0].quantity * Upgrades[0].multiplier
//         // Then set the variable power to equal the value of pickAxePower
//         Upgrades[0].price *= 2
//         power = pickAxePower

//         console.log("Pickaxe Power:", pickAxePower)
//     } else {
//         console.log("You don't have enough gold!")
//     }
//     update()
// }

// function buyHammer() {
//     if (gold >= Upgrades[1].price) {
//         gold -= Upgrades[1].price;
//         // At the array of Upgrades, grab the object at position [0]. Then target its quantity and increase by 1
//         Upgrades[1].quantity++
//         // Declare an empty variable to store the information below it
//         let hammerPower = 0
//         // Grab Upgrades array at position 0, then multiply its quantity by its multiplier
//         hammerPower += Upgrades[1].quantity * Upgrades[1].multiplier
//         // Then set the variable power to equal the value of pickAxePower
//         Upgrades[1].price *= 2
//         power = hammerPower

//         // console.log("Pickaxe Power:", pickAxePower)
//     } else {
//         // console.log("You don't have enough gold!")
//     }
//     update()
// }

// function buyDrill() {
//     if (gold >= Upgrades[2].price) {
//         gold -= Upgrades[2].price;
//         // At the array of Upgrades, grab the object at position [0]. Then target its quantity and increase by 1
//         Upgrades[2].quantity++
//         // Declare an empty variable to store the information below it
//         let drillPower = 0
//         // Grab Upgrades array at position 0, then multiply its quantity by its multiplier
//         drillPower += Upgrades[2].quantity * Upgrades[2].multiplier
//         // Then set the variable power to equal the value of pickAxePower
//         Upgrades[2].price *= 2
//         power = drillPower

//         // console.log("Pickaxe Power:", pickAxePower)
//     } else {
//         // console.log("You don't have enough gold!")
//     }
//     update()
// }

// function buyMachine() {
//     if (gold >= automaticUpgrades[0].price) {
//         gold -= automaticUpgrades[0].price;
//         // At the array of Upgrades, grab the object at position [0]. Then target its quantity and increase by 1
//         automaticUpgrades[0].quantity++
//         // Declare an empty variable to store the information below it
//         let machinePower = 0
//         // Grab Upgrades array at position 0, then multiply its quantity by its multiplier
//         machinePower += automaticUpgrades[0].quantity * automaticUpgrades[0].multiplier
//         // Then set the variable power to equal the value of pickAxePower
//         automaticUpgrades[0].price *= 2
//         power = machinePower

//         // console.log("Pickaxe Power:", pickAxePower)
//     } else {
//         // console.log("You don't have enough gold!")
//     }
//     update()
// }

// setInterval(autoUpgrades, 3000);












