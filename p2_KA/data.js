"use strict";
var p2_KA;
(function (p2_KA) {
    let masterswordBlade = { picture: "../p2_KA/Mastersword_Blade.png", name: "Mastersword", atk: 15, durability: 10, price: 10 };
    let moonlightTBlade = { picture: "../p2_KA/MoonlightGST_Blade.png", name: "Moonlight GS", atk: 15, durability: 10, price: 10 };
    let moonlightFBlade = { picture: "../p2_KA/MoonlightGSF_Blade.png", name: "Moonlight GS", atk: 15, durability: 10, price: 10 };
    let frostmourneBlade = { picture: "../p2_KA/Frostmourne_Blade.png", name: "Frostmourne", atk: 15, durability: 10, price: 10 };
    let irisBlade = { picture: "../p2_KA/Iris_Blade.png", name: "Iris", atk: 15, durability: 10, price: 10 };
    let masterswordGuard = { picture: "../p2_KA/Mastersword_CrossGuard.png", name: "Mastersword", atk: 15, durability: 10, price: 10 };
    let moonlightTGuard = { picture: "../p2_KA/MoonlightGST_CrossGuard.png", name: "Moonlight GS", atk: 15, durability: 10, price: 10 };
    let moonlightFGuard = { picture: "../p2_KA/MoonlightGST_CrossGuard.png", name: "Moonlight GS", atk: 15, durability: 10, price: 10 };
    let frostmourneGuard = { picture: "../p2_KA/Frostmourne_CrossGuard.png", name: "Frostmourne", atk: 15, durability: 10, price: 10 };
    let irisGuard = { picture: "../p2_KA/Iris_CrossGuard.png", name: "Iris", atk: 15, durability: 10, price: 10 };
    let masterswordHilt = { picture: "../p2_KA/Mastersword_Hilt.png", name: "Mastersword", atk: 15, durability: 10, price: 10 };
    let moonlightTHilt = { picture: "../p2_KA/MoonlightGST_Hilt.png", name: "Moonlight GS", atk: 15, durability: 10, price: 10 };
    let moonlightFHilt = { picture: "../p2_KA/MoonlightGST_Hilt.png", name: "Moonlight GS", atk: 15, durability: 10, price: 10 };
    let frostmourneHilt = { picture: "../p2_KA/Frostmourne_Hilt.png", name: "Frostmourne", atk: 15, durability: 10, price: 10 };
    let irisHilt = { picture: "../p2_KA/Iris_Hilt.png", name: "Iris", atk: 15, durability: 10, price: 10 };
    let arrayBlade = [masterswordBlade, moonlightTBlade, moonlightFBlade, frostmourneBlade, irisBlade];
    let arrayGuard = [masterswordGuard, moonlightTGuard, moonlightFGuard, frostmourneGuard, irisGuard];
    let arrayHilt = [masterswordHilt, moonlightTHilt, moonlightFHilt, frostmourneHilt, irisHilt];
    let arraySword = { blade: arrayBlade, guard: arrayGuard, hilt: arrayHilt };
    p2_KA.mySword = JSON.stringify(arraySword);
})(p2_KA || (p2_KA = {}));
//# sourceMappingURL=data.js.map