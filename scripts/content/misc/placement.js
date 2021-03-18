Blocks.space.placeableOn = true;

let spaceFall = new Effect(60, e => {
    Draw.z(Layer.debris);
    Draw.rect(
        e.data.b.icon(Cicon.large),
        e.x + e.data.b.offset + e.data.rdx * e.fin() * 4,
        e.y + e.data.b.offset + e.data.rdy * e.fin() * 4,
        e.fout() * e.data.b.size * 8,
        e.fout() * e.data.b.size * 8,
        (e.data.b.rotate ? e.rotation : 0) + e.data.rn * e.fin() * 45
    );
});

function fall(e){
    if(e.breaking) return;
    if(e.tile.floor() !== Blocks.space) return;
    // asdf
    let block = e.tile.block() instanceof ConstructBlock ? e.tile.build.cblock : e.tile.block();
    let rot = e.tile.build ? e.tile.build.rotdeg() : 0;
    spaceFall.at(e.tile.x * 8, e.tile.y * 8, rot, {
        b: block,
        rdx: Mathf.randomBoolean() ? 1 : -1,
        rdy: Mathf.randomBoolean() ? 1 : -1,
        rn: Mathf.randomBoolean() ? 1 : -1
    });
    e.tile.setAir();
}

Events.on(ClientLoadEvent, () => {
    Events.on(BlockBuildBeginEvent, e => fall(e));
});
