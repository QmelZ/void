// Shockwave
const shockwave = extend(UnitType, "shockwave", {});
shockwave.constructor = () => extend(UnitEntity, {});
// Define shockwave behavior (buggy af, but works)
Timer.schedule(() => {
    if(Vars.player != null){
        if(Vars.player.boosting){
            if(Vars.player.unit().type == shockwave){
                Timer.schedule(() => {
                    shockwave.canBoost = false;
                    Timer.schedule(() => {
                        shockwave.canBoost = true;
                    }, 2);
                }, 1);
            };
            
        };
    };
}, 0, 0.1);
// TODO: Fix autoboosting on blocks
