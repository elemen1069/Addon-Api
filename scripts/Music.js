import { system, Player } from "@minecraft/server";

export const MusicList = [];

/**
 * 
 * @param {Player} player 
 * @param {string} music 
 * @param {{loop: number, pitch: number, volume: number}} option { loop : tick }
 * 
 * Play a sound to the player.
 * 플레이어에게 사운드를 재생합니다.
 */
export function playmusic(player = undefined, music = undefined, option = {loop : 0, pitch : 1.0, volume: 1.0}) {

    // _____________________ Error Message

    if (player == undefined) { Error("Player is undefined"); return; };
    
    if (music == undefined) { Error("Music is undefined"); return; };

    if (typeof player !== Player) { Error("Player is not a player type"); return; };

    if (typeof music !== "string") { Error("Music is not a string type"); return; };
    
    if (typeof option !== "object") { Error("option is not a object type"); return; };
    
    if (typeof option.pitch !== "number") { Error("pitch is not a number type"); return; };
    
    if (typeof option.volume !== "number") { Error("volume is not a number type"); return; };

    if (typeof option.loop !== "number") { Error("loop is not a number type"); return; };

    // ________________________________

    const Tick = system.runInterval(() => {

        player.stopMusic();

        player.playSound(music);

        if (option.loop == 0) { system.clearRun(Tick); return; };

        MusicList.push({ player: player.name, Tick : Tick });

    }, option.loop);
    

    return true;
}

/**
 * 
 * @param {Player} player
 * 
 * Stop a sound to the player.
 * 플레이어에게 사운드를 멈추게 합니다.
 */
export function removeMusic(player) {
    const index = MusicList.findIndex(item => item.player === player.name);

    if (index !== -1) {

        player.stopMusic();
        system.clearRun(MusicList[index].run);
        
        MusicList.splice(index, 1);
    }

    return true;
}
