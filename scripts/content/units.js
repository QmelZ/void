// Units
let shockwave, catalyst;

shockwave = extend(UnitType, "shockwave", {
    localizedName: "Shockwave",
    flying: true,
    speed: 4,
    rotateSpeed: 10,
    accel: 1,
    payloadCapacity: 0,
    visualElevation: 1,
    canDrown: false,
    research: "mono",
});
shockwave.constructor = () => extend(UnitEntity, {});
