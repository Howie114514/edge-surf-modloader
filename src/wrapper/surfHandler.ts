let defaultStats =
  '{"settings":{"playerBodyColor":5,"playerHairStyle":1,"playerHairColor":5,"playerOutfitStyle":0,"playerOutfitColor":2,"playerExtraStyle":1,"gameSpeed":1,"theme":"horizon","hitbox":false,"reducedMotion":false},"highScore":{"endless":0,"timetrial":0,"zigzag":0,"collector":0}}';

export namespace surfHandler {
  export function saveGameStats(stats: string) {
    localStorage["game-stats"] = stats;
  }
  export function getGameStats() {
    let ss = localStorage["game-stats"];
    if (!ss) saveGameStats(defaultStats);
    return {
      gameStats: ss ?? defaultStats,
    };
  }
}
