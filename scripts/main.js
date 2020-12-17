// The start of void (aka obligatory first line comment)
Vars.enableConsole = true;

if(!Vars.headless){
    Core.app.post(() => {
        Vars.mods.locateMod("void").meta.displayName = "[#8f00ff]Void[]"
    });
};

var versionUrl = "https://gist.githubusercontent.com/QmelZ/6f96230874381bcdb57bca00651396ef/raw/41d57b98077b10bd46901e2ac70cf7a01ebd0be0/h";
Core.net.httpGet(versionUrl, (response) => {
    var version = response.getResultAsString();
}, (error) => {
    var version = "[scarlet]Error getting the version info[]";
});
Events.on(ClientLoadEvent, () => {
//     Vars.ui.loadfrag.show();
    
});

// require stuff
require("units/shockwave");
require("blocks/voidron-collider");

/*
    Vars.ui.showText(
        "Update",
        "[#8f00ff]Void[] is still actively developing, so it is highly suggested that you update to the latest version.\n\nThe latest version is: " + version
    );
*/
