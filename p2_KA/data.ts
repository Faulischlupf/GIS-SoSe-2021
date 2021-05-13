namespace p2_KA {


    let masterswordBlade: Parts = { picture: "../p2_KA/Mastersword_Blade.png", name: "Mastersword", atk: 15, durability: 10, price: 10 };
    let moonlightTBlade: Parts = { picture: "../p2_KA/MoonlightGST_Blade.png", name: "Moonlight GS", atk: 15, durability: 10, price: 10 };
    let moonlightFBlade: Parts = { picture: "../p2_KA/MoonlightGSF_Blade.png", name: "Moonlight GS", atk: 15, durability: 10, price: 10 };
    let frostmourneBlade: Parts = { picture: "../p2_KA/Frostmourne_Blade.png", name: "Frostmourne", atk: 15, durability: 10, price: 10 };
    let irisBlade: Parts = { picture: "../p2_KA/Iris_Blade.png", name: "Iris", atk: 15, durability: 10, price: 10 };

    let masterswordGuard: Parts = { picture: "../p2_KA/Mastersword_CrossGuard.png", name: "Mastersword", atk: 15, durability: 10, price: 10 };
    let moonlightTGuard: Parts = { picture: "../p2_KA/MoonlightGST_CrossGuard.png", name: "Moonlight GS", atk: 15, durability: 10, price: 10 };
    let moonlightFGuard: Parts = { picture: "../p2_KA/MoonlightGST_CrossGuard.png", name: "Moonlight GS", atk: 15, durability: 10, price: 10 };
    let frostmourneGuard: Parts = { picture: "../p2_KA/Frostmourne_CrossGuard.png", name: "Frostmourne", atk: 15, durability: 10, price: 10 };
    let irisGuard: Parts = { picture: "../p2_KA/Iris_CrossGuard.png", name: "Iris", atk: 15, durability: 10, price: 10 };

    let masterswordHilt: Parts = { picture: "../p2_KA/Mastersword_Hilt.png", name: "Mastersword", atk: 15, durability: 10, price: 10 };
    let moonlightTHilt: Parts = { picture: "../p2_KA/MoonlightGST_Hilt.png", name: "Moonlight GS", atk: 15, durability: 10, price: 10 };
    let moonlightFHilt: Parts = { picture: "../p2_KA/MoonlightGST_Hilt.png", name: "Moonlight GS", atk: 15, durability: 10, price: 10 };
    let frostmourneHilt: Parts = { picture: "../p2_KA/Frostmourne_Hilt.png", name: "Frostmourne", atk: 15, durability: 10, price: 10 };
    let irisHilt: Parts = { picture: "../p2_KA/Iris_Hilt.png", name: "Iris", atk: 15, durability: 10, price: 10 };


    let arrayBlade: Parts[] = [masterswordBlade, moonlightTBlade, moonlightFBlade, frostmourneBlade, irisBlade];
    let arrayGuard: Parts[] = [masterswordGuard, moonlightTGuard, moonlightFGuard, frostmourneGuard, irisGuard];
    let arrayHilt: Parts[] = [masterswordHilt, moonlightTHilt, moonlightFHilt, frostmourneHilt, irisHilt];
    let arraySword: Sword = { blade: arrayBlade, guard: arrayGuard, hilt: arrayHilt };

    export let mySword: string = JSON.stringify(arraySword);



}
