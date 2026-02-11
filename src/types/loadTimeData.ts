export interface LoadTimeData {
  data_: {
    actionBack: string;
    actionCancel: string;
    actionClose: string;
    actionNext: string;
    actionPause: string;
    actionPlay: string;
    actionPrev: string;
    actionSave: string;
    code: string;
    codeCheat: string;
    codeScoring: string;
    editPlayerBody: string;
    editPlayerColor: string;
    editPlayerExtras: string;
    editPlayerHair: string;
    editPlayerOutfit: string;
    fontfamily: string;
    fontfamilyMd: string;
    fontsize: string;
    gameEditPlayer: string;
    gameEditTheme: string;
    gameSettings: string;
    gameShare: string;
    genericEvent: string;
    genericMode: string;
    genericSeasonal: string;
    genericTheme: string;
    is_windows_xbox_sku: string;
    language: string;
    menuMainButton: string;
    menuOverButton: string;
    menuOverTitle: string;
    menuOverTitleAlt: string;
    menuOverTitleHighScore: string;
    menuPauseButton: string;
    menuPauseTitle: string;
    modeCollectorHowToPlay: string;
    modeCollectorTitle: string;
    modeEndlessHowToPlay: string;
    modeEndlessTitle: string;
    modeTimetrialHowToPlay: string;
    modeTimetrialTitle: string;
    modeZigzagHowToPlay: string;
    modeZigzagTitle: string;
    newHighScore: string;
    old_buoy_high_score: number;
    old_classic_high_score: number;
    old_speed_high_score: number;
    settingsCredits: string;
    settingsCreditsDesign: string;
    settingsCreditsEngineering: string;
    settingsHighVisiblityToggle: string;
    settingsOff: string;
    settingsOn: string;
    settingsReducedMotionToggle: string;
    settingsReducedSpeedToggle: string;
    settingsResetAllStats: string;
    settingsResetAllStatsDialogText: string;
    settingsResetAllStatsDialogTitle: string;
    settingsSpecialThanks: string;
    share: string;
    shareCopy: string;
    shareCopySuccess: string;
    shareGamesMenu: string;
    shareHeadline: string;
    shareLink: string;
    shareMessage: string;
    shareMobile: string;
    textdirection: string;
    themeBikeTitle: string;
    themeHorizonTitle: string;
    themeMenuSubtitle: string;
    themeSkiTitle: string;
    themeSurfTitle: string;
  };
}

declare global {
  interface Window {
    loadTimeData: LoadTimeData;
  }
}
