"use strict";
var p2_KA;
(function (p2_KA) {
    let masterswordBlade = { picture: "../p2_KA/pictures/Mastersword_Blade.png", name: "sword", atk: 20, durability: 120, price: 12 };
    let moonlightTBlade = { picture: "../p2_KA/pictures/MoonlightGST_Blade.png", name: " GS", atk: 40, durability: 100, price: 30 };
    let moonlightFBlade = { picture: "../p2_KA/pictures/MoonlightGSF_Blade.png", name: " GS", atk: 10, durability: 100, price: 9 };
    let frostmourneBlade = { picture: "../p2_KA/pictures/Frostmourne_Blade.png", name: "ne", atk: 25, durability: 50, price: 16 };
    let irisBlade = { picture: "../p2_KA/pictures/Iris_Blade.png", name: "s", atk: 15, durability: 150, price: 10 };
    let masterswordGuard = { picture: "../p2_KA/pictures/Mastersword_CrossGuard.png", name: "ter", atk: 20, durability: 120, price: 12 };
    let moonlightTGuard = { picture: "../p2_KA/pictures/MoonlightGST_CrossGuard.png", name: "light", atk: 15, durability: 100, price: 15 };
    let moonlightFGuard = { picture: "../p2_KA/pictures/MoonlightGST_CrossGuard.png", name: "light", atk: 10, durability: 100, price: 9 };
    let frostmourneGuard = { picture: "../p2_KA/pictures/Frostmourne_CrossGuard.png", name: "Frostmourne", atk: 25, durability: 50, price: 16 };
    let irisGuard = { picture: "../p2_KA/pictures/Iris_CrossGuard.png", name: "ri", atk: 15, durability: 150, price: 10 };
    let masterswordHilt = { picture: "../p2_KA/pictures/Mastersword_Hilt.png", name: "Mas", atk: 20, durability: 120, price: 12 };
    let moonlightTHilt = { picture: "../p2_KA/pictures/MoonlightGST_Hilt.png", name: "Moon", atk: 15, durability: 100, price: 15 };
    let moonlightFHilt = { picture: "../p2_KA/pictures/MoonlightGST_Hilt.png", name: "Moon", atk: 10, durability: 100, price: 9 };
    let frostmourneHilt = { picture: "../p2_KA/pictures/Frostmourne_Hilt.png", name: "Frost", atk: 25, durability: 50, price: 16 };
    let irisHilt = { picture: "../p2_KA/pictures/Iris_Hilt.png", name: "I", atk: 15, durability: 150, price: 10 };
    let arrayBlade = [masterswordBlade, moonlightTBlade, moonlightFBlade, frostmourneBlade, irisBlade];
    let arrayGuard = [masterswordGuard, moonlightTGuard, moonlightFGuard, frostmourneGuard, irisGuard];
    let arrayHilt = [masterswordHilt, moonlightTHilt, moonlightFHilt, frostmourneHilt, irisHilt];
    let arraySword = { blade: arrayBlade, guard: arrayGuard, hilt: arrayHilt };
    p2_KA.mySword = JSON.stringify(arraySword);
})(p2_KA || (p2_KA = {}));
//# sourceMappingURL=data.js.map