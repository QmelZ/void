let aquashield = extend(Block, "aqua-shield", {
    localizedName: "Aqua Shield",
    description: "",
    buildVisibility: BuildVisibility.shown,
    category: Category.effect,
    destructible: true,
    update: true,
    size: 3,
    expanded: true,
    
    hasLiquids: true,
    liquidCapacity: 60,
    range: 101.7,
    consumes: extend(Consumers, {
        init(){
            this.super$init();
            
            this.power(4);
            this.liquid(Liquids.water, 1);
        }
    }),
    
    load(){
        this.super$load();
        this.liquidRegion = Core.atlas.find(this.name + "-liquid");
    },
    
    drawPlace(x, y, rot, val){
        this.super$drawPlace(x, y, rot, val);
        
        Draw.z(Layer.floor + 0.01);
        Draw.color(Liquids.water.color);
        Draw.alpha(0.5);
        Fill.poly(x * Vars.tilesize, y * Vars.tilesize, 6, this.range);
        Draw.reset();
    }
});

aquashield.buildType = () => extend(Building, {
    // variables and stuff
    getBlock: () => aquashield,
    
    tiles: [],
    
    // function
    acceptLiquid: (s, liquid) => liquid === Liquids.water,
    isInvalidTile: (x, y) => Vars.world.tile(x, y) === null,
    placed(){
        this.super$placed();
        
        let range = parseInt(this.getBlock().range / Vars.tilesize);
        for(let y = -range; y < range; y++){
            if(this.isInvalidTile(0, this.y + y)) continue;
            for(let x = -range; x < range; x++){
                if(this.isInvalidTile(this.x + x, 0)) continue;
                
                this.tiles.push(Vars.world.tile(this.x + x, this.y + y));
            }
        }
    },
    updateTile(){
        this.super$updateTile();
        
    },
    
    // draw
    shouldDrawShield: true,
    draw(){
        Draw.z(Layer.block);
        this.super$draw();
        
        Draw.z(Layer.block + 0.1);
        Draw.color(Liquids.water.color);
        Draw.alpha(this.liquids.get(Liquids.water) / this.block.liquidCapacity);
        Draw.rect(this.getBlock().liquidRegion, this.x, this.y);
        Draw.reset();
        
//         this.drawShield();
    },
    drawShield(){
        if(!this.shouldDrawShield) return;
        
        Draw.z(Layer.shields);
        Draw.color(Liquids.water.color);
        Lines.stroke(2);
        Lines.swirl(this.x, this.y, this.getBlock().range, 0.2, Time.time * 2);
        Draw.reset();
    }
});
