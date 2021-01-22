// Items and Liquids
let itemVoid;
let liquidVoid;

itemVoid = extend(Item, "item-void", {
    localizedName: "Item Void",
    description: "???",
    color: Color.valueOf("8f00ff"),
    explosiveness: 1,
    flammability: 1,
    radioactivity: 1,
    hardness: 9,
    cost: 2
});

liquidVoid = extend(Liquid, "liquid-void", {
    localizedName: "Liquid Void",
    description: "void in liquid form",
    color: Color.valueOf("00000000"),
    barColor: Color.valueOf("8f00ff"),
    lightColor: Color.valueOf("000000ff"),
    flammability: 1,
    temperature: 0,
    heatCapacity: 1,
    viscosity: 0,
    explosiveness: 1,
    effect: StatusEffects.overdrive
});

global.void.content.materials = {
    itemVoid: itemVoid,
    liquidVoid: liquidVoid
};
