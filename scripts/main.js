// The start of void (aka Obligatory first line comment)
Vars.enableConsole = true;

if(!Vars.headless){
    Core.app.post(() => {
        Vars.mods.locateMod("void").meta.displayName = "[#2700ff]Void[]"
    });
};

// require stuff
require("units/shockwave");
