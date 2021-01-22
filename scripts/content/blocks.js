// Blocks
let voidron, solidifier;

let materials = global.void.content.materials;

voidron = extend(GenericCrafter, "voidron-collider", {
    localizedName: "Voidron Collider",
    description: "collides stuff to make void",
    outputLiquid: new LiquidStack(materials.liquidVoid, 24),
    craftTime: 120,
    updateEffect: Fx.none,
    updateEffectChance: 0,
    hasItems: true,
    hasLiquids: true,
    hasPower: true,
    outputsLiquid: true,
    consumesPower: true,
    acceptsItems: true,
    itemCapacity: 20,
    liquidCapacity: 20,
    consumes: new Consumers(),
    displayFlow: false,
    destructible: true,
    solid: true,
    breakable: true,
    placeableOn: false,
    floating: true,
    size: 5,
    requirements: ItemStack.with(
        Items.copper, 420,
        Items.phaseFabric, 69
    ),
    category: Category.crafting,
    buildVisibility: BuildVisibility.shown
});

let stack = [];
Vars.content.items().each(e => {
    if(e.minfo.mod === null) stack.push(new ItemStack(e, 1));
});
voidron.consumes.items(new ItemStack.mult(stack, 1));
