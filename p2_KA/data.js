"use strict";
var p2_KA;
(function (p2_KA) {
    let masterswordBlade = { name: "Mastersword", bns: "locks booring", atk: 15 };
    let moonlightTBlade = { name: "Moonlight GS", bns: "Moonlight Blade", atk: 20 };
    let moonlightFBlade = { name: "Moonlight GS", bns: "Moonlight Blade", atk: 10 };
    let frostmourneBlade = { name: "Frostmourne", bns: "Hungers", atk: 18 };
    let irisBlade = { name: "Iris", bns: "Fashionable", atk: 12 };
    let masterswordGuard = { name: "Mastersword", guard: "not utterly horrible", durability: 130 };
    let moonlightTGuard = { name: "Moonlight GS", guard: "bloodborn version works wonders... Its a propper guard", durability: 150 };
    let moonlightFGuard = { name: "Moonlight GS", guard: "bloodborn version works wonders... Its a propper guard", durability: 150 };
    let frostmourneGuard = { name: "Frostmourne", guard: "complicatet and harmfull to your hand", durability: 80 };
    let irisGuard = { name: "Iris", guard: "good and dont think about adding spikes. please", durability: 170 };
    let masterswordHilt = { picture: "../p2_KA/MasterSwordII.png", name: "Mastersword", length: "One Handed", grip: 9 };
    let moonlightTHilt = { picture: "../p2_KA/MoonlightGS.png", name: "Moonlight GS", length: "Two Handed", grip: 11 };
    let moonlightFHilt = { picture: "../p2_KA/MoonlightGS.png", name: "Moonlight GS", length: "Two Handed", grip: 11 };
    let frostmourneHilt = { picture: "../p2_KA/Frostmourne.png", name: "Frostmourne", length: "One handed", grip: 7 };
    let irisHilt = { picture: "../p2_KA/Iris.jpg", name: "Iris", length: "One and a half Handed", grip: 14 };
    p2_KA.arrayBlade = [masterswordBlade, moonlightTBlade, moonlightFBlade, frostmourneBlade, irisBlade];
    p2_KA.arrayGuard = [masterswordGuard, moonlightTGuard, moonlightFGuard, frostmourneGuard, irisGuard];
    p2_KA.arrayHilt = [masterswordHilt, moonlightTHilt, moonlightFHilt, frostmourneHilt, irisHilt];
})(p2_KA || (p2_KA = {}));
//# sourceMappingURL=data.js.map