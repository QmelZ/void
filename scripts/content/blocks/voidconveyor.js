let voidConveyor = extend(Conveyor, "void-conveyor", {
    localizedName: "Void Conveyor",
    buildVisibility: BuildVisibility.shown,
    speed: 0.2,
    floating: true,
    canPlaceOn: () => true
});
voidConveyor.buildType = () => extend(Conveyor.ConveyorBuild, voidConveyor, {
    
});
