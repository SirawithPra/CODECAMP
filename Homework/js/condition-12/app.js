// write code here

const basePrice = 2500;
const priceDecrement = 500;

let ticketPrices = {};

function generateZoneNames() {
    let zones = [];
    for (let i = 0; i < 5; i++) { 
        for (let j = 0; j < 26; j++) {
            let zone = String.fromCharCode(65 + i) + String.fromCharCode(65 + j);
            zones.push(zone)
        }
    }
    return zones;
}

function generateTicketPrices() {
    let zones = generateZoneNames();
    zones.forEach((zone, index) => {
        let price = basePrice - (Math.floor(index/26) * priceDecrement);
        ticketPrices[zone] = price;
    });
}

generateTicketPrices();

let zone = prompt("Enter the concert zone (e.g., AA, AB, AC, ..., EZ):");
let price = ticketPrices[zone.toUpperCase()];

if (price !== undefined) {
    alert("The price of the ticket for zone " + zone.toUpperCase() + " is " + price + " THB.");
} else {
    alert("Invalid zone. Please enter a valid zone.");
}
