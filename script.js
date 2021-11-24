let dining_halls_all = new Set();

dining_halls_all.add("Bridgeview Market");
dining_halls_all.add("Café 370");
dining_halls_all.add("Market at Third North");
dining_halls_all.add("Market at Palladium");
dining_halls_all.add("The Marketplace at Kimmel");
dining_halls_all.add("BRKFST & CO at UHALL");
dining_halls_all.add("18 Below");
dining_halls_all.add("Dunkin'");
dining_halls_all.add("Jasper Kane Cafe");
dining_halls_all.add("Kosher Eatery");
dining_halls_all.add("Market at Lipton");
dining_halls_all.add("Market at Sidestein");
dining_halls_all.add("Market at UHall");
dining_halls_all.add("NYU EATS at Downstein");
dining_halls_all.add("NYU EATS at Lipton");
dining_halls_all.add("Palladium");
dining_halls_all.add("Peet's Coffee");
dining_halls_all.add("Starbucks");
dining_halls_all.add("Upstein Daily Press");
dining_halls_all.add("Upstein The Egg Shoppe");

window.onload = function (event) {
  // Create dining halls items
  for (let location of dining_halls_all) {
    document.getElementById("tier0").innerHTML +=
      `<div class="dining-hall-block">${location}</div>`;
  }

  // Create list tiers
  for (let i = 0; i < 7; i = i + 1) {
    Sortable.create(eval(`tier${i}`), {
      animation: 150,
      group: 'dining-halls',
      ghostClass: 'blue-background-class',
    });
  }
}
