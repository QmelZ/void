Events.on(ClientLoadEvent, () => {
    if(!Vars.headless){
        Core.app.post(() => {
            Vars.mods.locateMod("void").meta.displayName = "[#8f00ff]Void[]"
        });
    }
});
