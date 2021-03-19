let voidpad = extend(StorageBlock, "void-pad", {
    localizedName: "Void Pad",
    description: "Can send/receive items to/from the core",
    buildVisibility: BuildVisibility.shown,
    destructible: true,
    update: true,
    size: 2,
    itemCapacity: 1,
    hasPower: true,
    consumesPower: true,
    configrations: ObjectMap.of()
});
voidpad.consumes.power(240 / 60);

voidpad.buildType = () => extend(StorageBlock.StorageBuild, voidpad, {
    
    // configuration
    isSender: true,
    tapped(){
        print(this.isSender);
        this.isSender = !this.isSender;
    },
    
    // function
    send(){
        let core = this.closestCore();
        let total = core.storageCapacity;
        Vars.content.items().each(e => {
            if(this.items.get(e) > 0){
                if(core.items.get(e) < total){
                    this.items.remove(e, 1);
                    core.items.add(e, 1);
                }
            }
        });
    },
    receive(){
        let core = this.closestCore();
        let total = this.block.itemCapacity;
        Vars.content.items().each(e => {
            this.dump(e);
            if(this.items.get(e) < total){
                if(core.items.get(e) > 0){
                    core.items.remove(e, 1);
                    this.items.add(e, 1);
                }
            }
        });
    },
    updateTile(){
        this.super$updateTile();
        
        if(this.enabled && this.power.status === 1){
            if(this.isSender){
                this.send();
            }else{
                this.receive();
            }
        }
    },
    
    // draws
    draw(){
        this.super$draw();
        
        if(this.enabled){
            Draw.color(this.team.color)
            Draw.alpha(((0.5 - Math.abs((Time.time / 100 % 1) - 0.5)) * 2));
            Draw.rect(
                this.isSender ? Icon.upOpen.getRegion() : Icon.downOpen.getRegion(),
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
    drawTeam(){}
});
