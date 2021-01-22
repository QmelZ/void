// The start of void (aka obligatory first line comment)
Vars.enableConsole = true;

if(!Vars.headless){
    Core.app.post(() => {
        Vars.mods.locateMod("void").meta.displayName = "[#8f00ff]Void[]"
    });
};

global.void = {
    content: {}
};

// require stuff
let content = [
    "materials", "blocks", /* "units", "planets" */
];
for(let c of content) require("content/" + c);

// Warning TODO: replace this because its spammy just like hackustry v3
// Vars.ui.showText("", "[#8f00ff]Void[] is unfinished and might do some weird stuff to your game\n\n[scarlet]Use at your own risk[]");
