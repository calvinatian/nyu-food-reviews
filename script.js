let dining_halls = new Set();

dining_halls.add("Bridgeview Market");
dining_halls.add("Café 370");
dining_halls.add("Market at Third North");
dining_halls.add("Market at Palladium");
dining_halls.add("The Marketplace at Kimmel");
dining_halls.add("BRKFST & CO at UHALL");
dining_halls.add("18 Below");
dining_halls.add("Dunkin'");
dining_halls.add("Jasper Kane Cafe");
dining_halls.add("Kosher Eatery");
dining_halls.add("Market at Lipton");
dining_halls.add("Market at Sidestein");
dining_halls.add("Market at UHall");
dining_halls.add("NYU EATS at Downstein");
dining_halls.add("NYU EATS at Lipton");
dining_halls.add("Palladium");
dining_halls.add("Peet's Coffee");
dining_halls.add("Starbucks");
dining_halls.add("Upstein Daily Press");
dining_halls.add("Upstein The Egg Shoppe");

window.onload = function (event) {
  for (let location of dining_halls) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(location);
    node.appendChild(textnode);
    document.getElementById("dining_halls").appendChild(node);
  }
};
