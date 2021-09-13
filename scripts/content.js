importPackage(Packages.arc.util.async);

const ignored = ["selenia"];

function getModules(){
    const modules = [];
    
    function walk(){
        const scriptDir = Vars.mods.getMod(modName).root.child("scripts");
        
        scriptDir.child("content").walk(e => {
            let path = e.absolutePath();
            if(e.extension().toLowerCase() !== "js") return;
            if(ignored.includes(e.nameWithoutExtension())) return;
            
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
