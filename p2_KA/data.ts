namespace p2_KA {


    let masterswordBlade: Parts = { picture: "../p2_KA/pictures/Mastersword_Blade.png", name: "sword", atk: 20, durability: 120, price: 12 };
    let moonlightTBlade: Parts = { picture: "../p2_KA/pictures/MoonlightGST_Blade.png", name: " GS", atk: 40, durability: 100, price: 30 };
    let moonlightFBlade: Parts = { picture: "../p2_KA/pictures/MoonlightGSF_Blade.png", name: " GS", atk: 10, durability: 100, price: 9 };
    let frostmourneBlade: Parts = { picture: "../p2_KA/pictures/Frostmourne_Blade.png", name: "ne", atk: 25, durability: 50, price: 16 };
    let irisBlade: Parts = { picture: "../p2_KA/pictures/Iris_Blade.png", name: "s", atk: 15, durability: 150, price: 10 };

    let masterswordGuard: Parts = { picture: "../p2_KA/pictures/Mastersword_CrossGuard.png", name: "ter", atk: 20, durability: 120, price: 12 };
    let moonlightTGuard: Parts = { picture: "../p2_KA/pictures/MoonlightGST_CrossGuard.png", name: "light", atk: 15, durability: 100, price: 15 };
    let moonlightFGuard: Parts = { picture: "../p2_KA/pictures/MoonlightGST_CrossGuard.png", name: "light", atk: 10, durability: 100, price: 9 };
    let frostmourneGuard: Parts = { picture: "../p2_KA/pictures/Frostmourne_CrossGuard.png", name: "Frostmourne", atk: 25, durability: 50, price: 16 };
    let irisGuard: Parts = { picture: "../p2_KA/pictures/Iris_CrossGuard.png", name: "ri", atk: 15, durability: 150, price: 10 };

    let masterswordHilt: Parts = { picture: "../p2_KA/pictures/Mastersword_Hilt.png", name: "Mas", atk: 20, durability: 120, price: 12 };
    let moonlightTHilt: Parts = { picture: "../p2_KA/pictures/MoonlightGST_Hilt.png", name: "Moon", atk: 15, durability: 100, price: 15 };
    let moonlightFHilt: Parts = { picture: "../p2_KA/pictures/MoonlightGST_Hilt.png", name: "Moon", atk: 10, durability: 100, price: 9 };
    let frostmourneHilt: Parts = { picture: "../p2_KA/pictures/Frostmourne_Hilt.png", name: "Frost", atk: 25, durability: 50, price: 16 };
    let irisHilt: Parts = { picture: "../p2_KA/pictures/Iris_Hilt.png", name: "I", atk: 15, durability: 150, price: 10 };


    let arrayBlade: Parts[] = [masterswordBlade, moonlightTBlade, moonlightFBlade, frostmourneBlade, irisBlade];
    let arrayGuard: Parts[] = [masterswordGuard, moonlightTGuard, moonlightFGuard, frostmourneGuard, irisGuard];
    let arrayHilt: Parts[] = [masterswordHilt, moonlightTHilt, moonlightFHilt, frostmourneHilt, irisHilt];
    let arraySword: Sword = { blade: arrayBlade, guard: arrayGuard, hilt: arrayHilt };

    export let mySword: string = JSON.stringify(arraySword);



}
