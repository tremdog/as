import { CHAMPION } from '../model/Champion';

export const UNRELEASED_CHAMPIONS = [
    // Cosmic
    CHAMPION.PHOENIX,
    CHAMPION.PHOENIXDARK,
    CHAMPION.THANOS,
    // Tech
        // Mutant
    CHAMPION.WEAPONX,
    // Skill
    CHAMPION.REDSKULL,
    // Mystic
    CHAMPION.DRSTRANGEMARVELNOW,
    CHAMPION.GHOSTRIDER,
    CHAMPION.SCARLETWITCHULTIMATE,
    // Universal
    CHAMPION.MAESTRO,
].reduce((map, champion) => {
    map[ champion ] = true;
    return map;
}, {});
