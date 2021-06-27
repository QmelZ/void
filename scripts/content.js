importPackage(Packages.arc.util.async);

const ignored = (function(){
    const ignored = ["selenia"];
    
    return new RegExp("(" + ignored.join("|") + ")\\.js$"); //  /(ignored1|ignored2|...)\.js$/
})();

function getModules(){
    const modules = [];
    
    function walk(){
        const modRoot = Vars.mods.getMod(modName).root;
        const scriptDir = modRoot.child("scripts");
        
        scriptDir.child("content").walk(e => {
            let path = e.absolutePath();
            if(!path.endsWith(".js")) return;
            if(path.match(ignored)) return;
            
            path = path.replace(scriptDir.absolutePath(), "");
            path = path.slice(0, -3);
            path = modName + path;
            
            modules.push(path);
        });
    }
    
    if(Version.number > 6){
        walk(); // if v7+ don't use threads (to make it faster or something idk)
    }else{
        Threads.daemon(walk).join();
    }
    
    return modules;
}

module.exports = getModules();
