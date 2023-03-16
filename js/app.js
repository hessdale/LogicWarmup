let ticket_sold = 90;
let venue_capacity = 100;
let performer = "Bandname";
let is_sold_out = false;
if (is_sold_out === true) {
    console.log("All Sold Out");
} else {
    console.log("Tickets Still Available");
}

if (ticket_sold / venue_capacity >= 0.9) {
    console.log("Almost Sold Out")
} else if (ticket_sold / venue_capacity >= 0.5) {
    console.log("Tickets Selling Fast")
} else {
    console.log("Tickets On Sale Now")
}