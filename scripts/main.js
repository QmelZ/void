// The start of void (aka obligatory first line comment)
Vars.enableConsole = true;

Events.on(ClientLoadEvent, () => {
    if(!Vars.headless){
        Core.app.post(() => {
            Vars.mods.locateMod("void").meta.displayName = "[#8f00ff]Void[]"
        });
    }
});

// script loader
function load(content){
    for(let i in content){
        content[i].each(e => {
            require("content/" + i.toString() + "/" + e);
        });
    }
}

let content = {
    blocks: Seq.with(
        "voidpad", /* "aqua-shield" */
    ),
    misc: Seq.with(
        "selenia"
    )
}

// this line is not important at all
load(content);
