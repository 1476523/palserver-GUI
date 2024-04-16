export const PalSettingsOptionsKey = [
  'PalCaptureRate',
  'PalSpawnNumRate',
  'PalDamageRateAttack',
  'PalDamageRateDefense',
  'PalStomachDecreaceRate',
  'PalStaminaDecreaceRate',
  'PalAutoHPRegeneRate',
  'PalAutoHpRegeneRateInSleep',
  'PalEggDefaultHatchingTime',
  'WorkSpeedRate',
];

export const PlayerSettingsOptionsKey = [
  'ExpRate',
  'PlayerDamageRateAttack',
  'PlayerDamageRateDefense',
  'PlayerStomachDecreaceRate',
  'PlayerStaminaDecreaceRate',
  'PlayerAutoHPRegeneRate',
  'PlayerAutoHPRegeneRate',
  'bEnablePlayerToPlayerDamage',
  'bEnableFriendlyFire',
  'bIsPvP',
  'bEnableFastTravel',
  'bIsStartLocationSelectByMap',
  'DeathPenalty',
  'CoopPlayerMaxNum',
  'ServerPlayerMaxNum',
  'bShowPlayerList',
];

export const GuildSettingsOptionsKey = [
  'BaseCampMaxNum',
  'BaseCampWorkerMaxNum',
  'GuildPlayerMaxNum',
  'bAutoResetGuildNoOnlinePlayers',
  'AutoResetGuildTimeNoOnlinePlayers',
  'bEnableDefenseOtherGuildPlayer',
  'bCanPickupOtherGuildDeathPenaltyDrop',
];

export const OthersSettingsOptionsKey = [
  'DayTimeSpeedRate',
  'NightTimeSpeedRate',
  'BuildObjectDamageRate',
  'BuildObjectDeteriorationDamageRate',
  'DropItemMaxNum',
  'CollectionObjectHpRate',
  'CollectionObjectRespawnSpeedRate',
  'CollectionDropRate',
  'EnemyDropItemRate',
  'bEnableInvaderEnemy',
  'bEnableAimAssistPad',
  'bEnableAimAssistKeyboard',
  'DropItemAliveMaxHours',
  'bIsMultiplay',
  'bEnableNonLoginPenalty',
  'bExistPlayerAfterLogout',
  'RCONEnabled',
  'RESTAPIEnabled',
];

export const worldSettingsOptions: any = {
  DayTimeSpeedRate: { range: [1, 50], type: 'num_10' },
  NightTimeSpeedRate: { range: [1, 50], type: 'num_10' },
  ExpRate: { range: [1, 200], type: 'num_10' },
  PalCaptureRate: { range: [5, 20], type: 'num_10' },
  PalSpawnNumRate: { range: [5, 30], type: 'num_10' },
  PalDamageRateAttack: { range: [1, 50], type: 'num_10' },
  PalDamageRateDefense: { range: [1, 50], type: 'num_10' },
  PalStomachDecreaceRate: { range: [1, 50], type: 'num_10' },
  PalStaminaDecreaceRate: { range: [1, 50], type: 'num_10' },
  PalAutoHPRegeneRate: { range: [1, 50], type: 'num_10' },
  PalAutoHpRegeneRateInSleep: { range: [1, 50], type: 'num_10' },
  PlayerDamageRateAttack: { range: [1, 50], type: 'num_10' },
  PlayerDamageRateDefense: { range: [1, 50], type: 'num_10' },
  PlayerStomachDecreaceRate: { range: [1, 50], type: 'num_10' },
  PlayerStaminaDecreaceRate: { range: [1, 50], type: 'num_10' },
  PlayerAutoHPRegeneRate: { range: [1, 50], type: 'num_10' },
  PlayerAutoHpRegeneRateInSleep: { range: [1, 50], type: 'num_10' },
  BuildObjectDamageRate: { range: [1, 50], type: 'num_10' },
  BuildObjectDeteriorationDamageRate: { range: [0, 50], type: 'num_10' },
  DropItemMaxNum: { range: [0, 5000], type: 'num' },
  CollectionObjectHpRate: { range: [5, 30], type: 'num_10' },
  CollectionObjectRespawnSpeedRate: { range: [5, 30], type: 'num_10' },
  CollectionDropRate: { range: [5, 30], type: 'num_10' },
  EnemyDropItemRate: { range: [5, 30], type: 'num_10' },
  PalEggDefaultHatchingTime: { range: [0, 100], type: 'num' },
  GuildPlayerMaxNum: { range: [1, 100], type: 'num' },

  DeathPenalty: {
    range: ['All', 'None', 'Item', 'ItemAndEquipment'],
    type: 'options',
  },
  bEnablePlayerToPlayerDamage: { type: 'switch' },
  bEnableFriendlyFire: { type: 'switch' },
  bEnableInvaderEnemy: { type: 'switch' },
  bEnableAimAssistPad: { type: 'switch' },
  bEnableAimAssistKeyboard: { type: 'switch' },

  BaseCampMaxNum: { range: [0, 1024], type: 'num' },
  BaseCampWorkerMaxNum: { range: [1, 20], type: 'num' },
  DropItemAliveMaxHours: { range: [0, 50], type: 'num_10' },
  bAutoResetGuildNoOnlinePlayers: { type: 'switch' },
  AutoResetGuildTimeNoOnlinePlayers: { range: [0, 24 * 7], type: 'num' },
  WorkSpeedRate: { range: [1, 100], type: 'num_10' },
  bIsMultiplay: { type: 'switch' },
  bIsPvP: { type: 'switch' },
  bCanPickupOtherGuildDeathPenaltyDrop: { type: 'switch' },
  bEnableNonLoginPenalty: { type: 'switch' },
  bEnableFastTravel: { type: 'switch' },
  bIsStartLocationSelectByMap: { type: 'switch' },
  bExistPlayerAfterLogout: { type: 'switch' },
  bEnableDefenseOtherGuildPlayer: { type: 'switch' },
  CoopPlayerMaxNum: { range: [1, 32], type: 'num' },
  ServerPlayerMaxNum: { range: [1, 32], type: 'num' },
  RCONEnabled: { type: 'switch' },
  RESTAPIEnabled: { type: 'switch' },
  bShowPlayerList: { type: 'switch' },
};
