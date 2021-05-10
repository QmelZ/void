require(modName + "/content");

Events.on(ClientLoadEvent, () => {
    Vars.mods.getMod(modName).meta.displayName = "[#8f00ff]Void[]";
    
    let name = "Void", color = "#8f00ff";
    Vars.ui.mods.shown(() => {
        Vars.ui.mods.children.get(1).children.get(3).children.get(0).children.each(e => {
            try{
                let text = e.children.get(0).children.get(1).children.get(0).text;
                if(text.subSequence(8, name.length + 8) === name){
                    text.replace(1, 7, color);
                };
            }catch(c){}
        });
    });
});
