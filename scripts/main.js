// The start of void (aka obligatory first line comment)
Vars.enableConsole = true;

if(!Vars.headless){
    Core.app.post(() => {
        Vars.mods.locateMod("void").meta.displayName = "[#8f00ff]Void[]"
    });
};

/*
var versionUrl = "h";
Core.net.httpGet(versionUrl, (response) => {
    var version = response.getResultAsString();
}, (error) => {
    var version = "[scarlet]Error getting the version info[]";
});
Events.on(ClientLoadEvent, () => {
    Vars.ui.loadfrag.show();
});
*/

// require stuff
require("units/shockwave");
require("blocks/voidron-collider");

// Warning
Vars.ui.showText("", "[#8f00ff]Void[] is unfinished and might do some weird stuff to your game\n\n[scarlet]Use at your own risk[]")
