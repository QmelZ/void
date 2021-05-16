importPackage(Packages.arc.util.async);

let ignored = [
    "selenia"
];

let scripts = [];
Threads.daemon(() => {
    let dir = Vars.mods.getMod(modName).root.child("scripts");
    dir.child("content").walk(e => {
        if(!e.absolutePath().endsWith(".js")) return;
        let tmp = e.absolutePath().split(modName);
        tmp[0] = "";
        tmp = tmp.join(modName).replace("/scripts", "");
        let path = tmp.substring(0, tmp.length - 3);
        scripts.push(path);
    });
}).join();
scripts.forEach(e => {
    let tmp = e.split("/");
    if(ignored.includes(tmp[tmp.length - 1])) return;
    require(e);
});
