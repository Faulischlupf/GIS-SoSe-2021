namespace p2_KA {


    let masterswordBlade: Blade = { name: "Mastersword", bns: "locks booring", atk: 15 };
    let moonlightTBlade: Blade = { name: "Moonlight GS", bns: "Moonlight Blade", atk: 20 };
    let moonlightFBlade: Blade = { name: "Moonlight GS", bns: "Moonlight Blade", atk: 10 };
    let frostmourneBlade: Blade = { name: "Frostmourne", bns: "Hungers", atk: 18 };
    let irisBlade: Blade = { name: "Iris", bns: "Fashionable", atk: 12 };

    let masterswordGuard: CrossGuard = { name: "Mastersword", guard: "not utterly horrible", durability: 130 };
    let moonlightTGuard: CrossGuard = { name: "Moonlight GS", guard: "bloodborn version works wonders... Its a propper guard", durability: 150 };
    let moonlightFGuard: CrossGuard = { name: "Moonlight GS", guard: "bloodborn version works wonders... Its a propper guard", durability: 150 };
    let frostmourneGuard: CrossGuard = { name: "Frostmourne", guard: "complicatet and harmfull to your hand", durability: 80 };
    let irisGuard: CrossGuard = { name: "Iris", guard: "good and dont think about adding spikes. please", durability: 170 };

    let masterswordHilt: Hilt = { picture: "../p2_KA/MasterSwordII.png", name: "Mastersword", length: "One Handed", grip: 9 };
    let moonlightTHilt: Hilt = { picture: "../p2_KA/MoonlightGS.png", name: "Moonlight GS", length: "Two Handed", grip: 11 };
    let moonlightFHilt: Hilt = { picture: "../p2_KA/MoonlightGS.png", name: "Moonlight GS", length: "Two Handed", grip: 11 };
    let frostmourneHilt: Hilt = { picture: "../p2_KA/Frostmourne.png", name: "Frostmourne", length: "One handed", grip: 7 };
    let irisHilt: Hilt = { picture: "../p2_KA/Iris.jpg", name: "Iris", length: "One and a half Handed", grip: 14 };


    export let arrayBlade: Blade[] = [masterswordBlade, moonlightTBlade, moonlightFBlade, frostmourneBlade, irisBlade];
    export let arrayGuard: CrossGuard[] = [masterswordGuard, moonlightTGuard, moonlightFGuard, frostmourneGuard, irisGuard];
    export let arrayHilt: Hilt[] = [masterswordHilt, moonlightTHilt, moonlightFHilt, frostmourneHilt, irisHilt];
}