let voidpad;

voidpad = extend(StorageBlock, "void-pad", {
    localizedName: "Void Pad",
    description: "Can send/receive items to/from the core",
    buildVisibility: BuildVisibility.shown,
    destructible: true,
    update: true,
    size: 2,
    itemCapacity: 0,
    configurable: true
});

voidpad.buildType = () => extend(StorageBlock.StorageBuild, voidpad, {
    sender: true,
    
    shouldShowConfigure: () => true,
    shouldHideConfigure: () => true,
    
    buildConfiguration(){
        this.sender = !this.sender;
    },
    draw(){
        this.super$draw();
        
        if(!this.disabled){
            Draw.color(this.team.color)
            Draw.alpha(((0.5 - Math.abs((Time.time / 100 % 1) - 0.5)) * 2));
            Draw.rect(
                this.sender ? Icon.upOpen.getRegion() : Icon.downOpen.getRegion(),
                this.x, this.y
            );
        }
    },
    drawDisabled(){
        Draw.color(Color.red.cpy().shiftHue(Time.time * 2));
        Lines.line(
            this.x + 2, this.y + 2,
            this.x - 2, this.y - 2
        );
        Lines.line(
            this.x + 2, this.y - 2,
            this.x - 2, this.y + 2
        );
    },
    
    drawTeam(){},
    drawConfigure(){}
});
