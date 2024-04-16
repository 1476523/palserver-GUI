/* eslint-disable no-template-curly-in-string */

import game_data_pals_zh_tw from './pal';

/* eslint-disable camelcase */
const zh_tw = {
  ...game_data_pals_zh_tw,
  ServerIsRunning: '伺服器執行中',
  Server: '伺服器',
  BootServer: '啟動伺服器',
  EditServer: '編輯伺服器',
  CreateServer: '建立伺服器',
  DeleteServer: '刪除伺服器',
  DeleteServerDesc: '刪掉伺服器後，存檔和所有資料都會不見。請再三考慮。',
  PleaseEnterServerName: '請輸入伺服器名稱',
  OthersEnterIP: '這是其他玩家輸入的 IP 位址',
  YourselfEnterIP: '這是你自己輸入的 IP 位址',
  HaventSavedYet: '尚未設定',
  LuaMods: 'Lua 模組',
  PakMods: 'Pak 模組',
  Mod: '模組',
  Disabled: '停用',
  Enabled: '啟用',
  Cancel: '取消',
  Confirm: '確定',
  Create: '新增',
  VerifyChange: '確定修改',
  VerifyDelete: '確定刪除',
  EditFromSourceFile: '編輯原始檔',
  SourceCode: '原始碼',
  ServerIsUpdating: '伺服器更新中，請稍候',
  UpdateServerToLatestVersion: '將伺服器更新到最新版',
  ServerUpdateDone: '伺服器更新完的啦!!',
  OpenModsFolder: '開啟模組資料夾',
  HowToImportMods: '如何匯入 ${1} 模組?',
  HowToImportLuaModsDesc1:
    'Lua 模組是幻獸帕魯使用的模組。要安裝已下載的模組請點擊「開啟模組資料夾」按鈕，並將模組放入該資料夾中即可完成安裝。',
  HowToImportLuaModsDesc2:
    '初次安裝的模組預設為「停用」，需對模組點擊右鍵啟用。並且玩家也要安裝才行。',
  HowToImportPakModsDesc1:
    'Pak 模組是幻獸帕魯使用的模組。要安裝已下載的模組請點擊「開啟模組資料夾」按鈕，並將模組放入該資料夾中即可完成安裝。',
  HowToImportPakModsDesc2:
    '請注意，Pal-WindowsServer.pak 不能被修改、刪除或重新命名。另外玩家也需要安裝模組。',
  Difficulty: '難度',
  DayTimeSpeedRate: '白天流逝速度',
  NightTimeSpeedRate: '夜晚流逝速度',
  ExpRate: '經驗值倍率',
  PalCaptureRate: '捕獲機率倍率',
  PalSpawnNumRate: '帕魯出現數量倍率',
  PalDamageRateAttack: '帕魯攻擊傷害倍率',
  PalDamageRateDefense: '帕魯承受傷害倍率',
  PalStomachDecreaceRate: '帕魯飽食度降低倍率',
  PalStaminaDecreaceRate: '帕魯耐力降低倍率',
  PalAutoHPRegeneRate: '帕魯生命值自然回復倍率',
  PalAutoHpRegeneRateInSleep: '帕魯睡眠時自然回復倍率',
  PlayerDamageRateAttack: '玩家攻擊傷害倍率',
  PlayerDamageRateDefense: '玩家承受傷害倍率',
  PlayerStomachDecreaceRate: '玩家飽食度降低倍率',
  PlayerStaminaDecreaceRate: '玩家耐力降低倍率',
  PlayerAutoHPRegeneRate: '玩家生命值自然回復倍率',
  PlayerAutoHpRegeneRateInSleep: '玩家睡眠時自然回復倍率',
  BuildObjectDamageRate: '對建築傷害倍率',
  BuildObjectDeteriorationDamageRate: '建築物的劣化速度倍率',
  DropItemMaxNum: '世界內的掉落物上限',
  // 道具採集量倍率
  CollectionObjectHpRate: '可採集物品生命值倍率',
  CollectionObjectRespawnSpeedRate: '可採集物品的重生間隔',
  CollectionDropRate: '道具掉落量倍率',
  PalEggDefaultHatchingTime: '巨大蛋孵化所需時間',
  // 是否會發生襲擊事件？
  DeathPenalty: '死亡懲罰',
  DeathPenalty_All: '所有',
  DeathPenalty_None: '無',
  DeathPenalty_Item: '僅道具',
  DeathPenalty_ItemAndEquipment: '道具和裝備',
  GuildPlayerMaxNum: '公會人數上限',

  EnemyDropItemRate: '敵人掉落物品倍率',
  bEnablePlayerToPlayerDamage: '是否會對玩家造成傷害',
  bEnableFriendlyFire: '是否會對友軍造成傷害',
  bEnableInvaderEnemy: '是否會發生襲擊事件',
  bActiveUNKO: '',
  bEnableAimAssistPad: '啟動手柄瞄準輔助',
  bEnableAimAssistKeyboard: '啟動鍵盤瞄準輔助',

  DropItemMaxNum_UNKO: '',
  BaseCampMaxNum: '最大據點數量',
  BaseCampWorkerMaxNum: '據點工作帕魯數量上限',

  DropItemAliveMaxHours: '掉落物要持續存在幾個小時',
  bAutoResetGuildNoOnlinePlayers: '是否自動清除公會裡長時間不在線上的玩家',
  AutoResetGuildTimeNoOnlinePlayers: '多少小時就清除公會裡不在線上的玩家',
  WorkSpeedRate: '工作速度倍率',
  bIsMultiplay: '是否開啟多人遊戲',
  bIsPvP: '是否開啟 PVP',
  bCanPickupOtherGuildDeathPenaltyDrop: '是否可以撿其他公會玩家的死亡掉落物',
  bEnableNonLoginPenalty: '啟用都不登入的懲罰',
  bEnableFastTravel: '啟用快速旅行',
  bIsStartLocationSelectByMap: '根據地圖選擇起始位置',
  bExistPlayerAfterLogout: '當伺服器沒人在線上時是否自動關服',
  bEnableDefenseOtherGuildPlayer: '啟用防禦其他公會玩家',
  CoopPlayerMaxNum: '合作玩家數上限',
  ServerPlayerMaxNum: '玩家數上限',
  ServerName: '伺服器名稱',
  ServerDescription: '伺服器描述',
  AdminPassword: '管理員密碼',
  ServerPassword: '伺服器密碼',
  PublicPort: '端口號',
  PublicIP: 'IP 位址',
  LocalIP: '本機 IP',
  RCONEnabled: '啟用 RCON',
  RCONPort: 'RCON 端口',
  RESTAPIEnabled: '啟用 REST API',
  RESTAPIPort: 'REST API 端口',
  bShowPlayerList: '展示玩家列表',
  Region: '地區',
  bUseAuth: '使用身分驗證',
  BanListURL: '封鎖名單網址',
  SwitchOn: '開啟',
  SwitchOff: '關閉',
  //
  ServerSettings: '伺服器管理',
  WorldSettings: '修改世界設定',
  ModsTool: '模組管理器',
  OpenServerFolder: '開啟伺服器資料夾',
  GoBack: '回上一頁',
  OpenServerFolderDesc:
    '特別注意不要動到資料夾內的 .pal 檔案。否則可能造成伺服器無法正確啟動的情況。',
  //
  ExportModsToClientSide: '匯出模組到遊戲',
  ExportModsToClientSideDesc1:
    '遊戲跟伺服器都要安裝模組才行。點擊「匯出」會產生伺服器安裝的模組之客戶端版本。',
  ExportModsToClientSideDesc2:
    '將產生的內容複製貼上到 steam 本機檔案 (點選取代全部) 即可完成安裝。',
  Export: '匯出',
  FAQ: '常見問題',
  NewUpdate: '有新版更新！(請下載最新版 ${1} 補丁)',
  // 20240214
  MigrateDedicatedServer: '遷移專用伺服器',
  MigrateDedicatedServerToGUI: '將專用伺服器遷移到 GUI',
  MigrateDedicatedServerDesc1:
    '您可以將已存在的專用伺服器遷移到 palserver GUI。',
  MigrateDedicatedServerDesc2: '找到原先 steamcmd 的存檔路徑 (圖左上)。',
  MigrateDedicatedServerDesc3:
    '點擊右下角黃色按鈕「開啟伺服器資料夾」，打開 GUI 伺服器路徑 (圖右下)，並將裡面除了 .pal 之外的資料夾或檔案全部刪除。',
  MigrateDedicatedServerDesc4:
    '將 steamcmd 中的內容，複製貼上到 GUI 的伺服器資料夾。',
  MigrateDedicatedServerDesc5: '恭喜完成遷移，啟動伺服器後就可以進去遊玩咯！',
  MigrateFourPlayersSave: '遷移本機存檔 (四人邀請碼)',
  MigrateFourPlayersSaveToGUI: '將本機存檔遷移到 GUI',
  MigrateFourPlayersSaveDesc1: '您可以將遊戲中的存檔遷移到 palserver GUI。',
  MigrateFourPlayersSaveDesc2:
    '進入遊戲後點「開始遊戲」，選中要遷移的存檔，點擊左下角檔案圖示，將裡頭除了 WorldOption.sav 以外的所有檔案複製。',
  MigrateFourPlayersSaveDesc3: '點擊右下角黃色按鈕「開啟存檔資料夾」。',
  MigrateFourPlayersSaveDesc4: '將剛剛複製的內容貼上 (若需要擇點選取代全部)。',
  MigrateFourPlayersSaveDesc5:
    '啟動伺服器遊玩一段時間後關閉，並注意 Players 資料夾中多出來的檔案。',
  MigrateFourPlayersSaveDesc6:
    '安裝 Python 執行環境 (到微軟商店或官網，需點選 add python.exe to path)。',
  MigrateFourPlayersSaveDesc7:
    '下載轉檔工具 https://github.com/Dalufishe/palworld-host-save-fix/archive/refs/heads/main.zip，解壓縮後在該路徑上開啟終端命令視窗 (cmd)，並輸入 pip install palworld-save-tools==0.17.1。',
  MigrateFourPlayersSaveDesc8: `在終端命令行輸入 python fix-host-save.py "這邊輸入存檔路徑 (點開黃色按鈕的路徑) " "多出來的玩家檔案名稱 (忽略 .sav)" "00000000000000000000000000000001" True 並點兩下 Enter 鍵。`,
  MigrateFourPlayersSaveDesc9: '等 Python 腳本執行完畢後，啟動伺服器。',
  MigrateFourPlayersSaveDesc10:
    '恭喜你成功完成遷移，啟動伺服器後就可以進去遊玩咯！',
  MigrateFourPlayersSaveDesc11:
    '四人操作流程相對複雜，若有需要，您可以在 palserver-GUI discord 群提問：https://discord.com/invite/sgMMdUZd3V',
  OpenSaveFolder: '開啟存檔資料夾',
  SupportMe: '支持我的工作',
  SupportMeDesc:
    'palserver GUI 永遠免費並持續維護。您不需要為使用應用程式收費，然而，若您樂意支持我們的工作，不妨考慮請我喝杯咖啡，將是我們莫大的鼓勵。',
  // 20240217
  CloseServer: '關閉伺服器',
  BanList: '黑名單',
  BanListLong: '黑名單列表',
  UnBan: '解除',
  Dashboard: '管理面板',
  Setting: '設定',
  RAM: '記憶體',
  OnlinePlayer: '在線玩家',
  KickPlayer: '踢出',
  KickPlayerDesc: '確定踢出 ${1} (${2})？此舉動將會將 ${3} 從伺服器移除。',
  ConfirmKick: ' 確認踢出',
  Ban: '封鎖',
  BanDesc:
    '確定封鎖 ${1} (${2})？此舉動將會將 ${3} 從伺服器移除，並且該用戶在被解除封鎖前不得再加入伺服器。',
  ConfirmBan: ' 確認封鎖',
  Send: '送出',
  EnterCommandOrBoardCast: '輸入指令或廣播訊息...',
  PlayerName: '玩家名稱',
  PlayerID: '玩家 ID',
  Other: '其他',
  // 20240218
  RCONEnabledDesc: '您需要啟用遠端控制台 (RCON) 才能使用管理面板功能。',
  RCONFirst: '請先啟用 RCON 才能開啟此功能。',
  ServerBackupRecord: '伺服器存檔備份紀錄',
  Open: '開啟',
  // 20240226
  SupportBy: '由 <u>${1}</u> 進行供電',
  // 20240227
  MigrateSaveDesc: '若您需要遷移存檔，請前往設定進行操作。',
  OpenFilePath: '開啟檔案位置',
  //
  Rename: '重新命名',
  DeleteMod: '刪除模組',
  SetTime: '設定時間',
  HourPerTime: '小時一次',
  UpdateLog: '更新日誌',
  OpenToCommunity: '公開到社群選單',
  PalSettings: '帕魯設定',
  PlayerSettings: '玩家設定',
  GuildSettings: '公會設定',
  OthersSettings: '其它設定',
  HasNotASCIIPath:
    '您的 palserver GUI 路徑可能存在中文或非 ASCII 字元，請將其修改才可完成更新。路徑名稱',
  // 20240410
  ChangeIcon: '變更圖示',
  CopyServer: '複製伺服器',
  DuplicateServer: '複製伺服器',
  DuplicateServerDesc: '複製將會包含所有設定檔、模組及世界檔案：',
  ExportServer: '匯出伺服器',
  CreateRemoteServer: '建立遠端連接',
  ChangeServerIcon: '變更伺服器圖示',
  OpenFolder: '其他檔案位置',
  ServerFolder: '伺服器資料夾',
  InstanceFolder: '實例資料夾',
  SaveFolder: '存檔資料夾',
  WorldSaveFolder: '世界檔資料夾',
  PalConfigFolder: '設定檔資料夾',
  ServerInstanceFolder: 'GUI 實例資料夾',
  WorldSettingsFolder: '世界設定檔案',
  ImportServer: '導入伺服器',
  FourPlayerSave: '本機存檔',
  DedicatedServer: '專用伺服器',
  ServerInstance: 'GUI 實例',
  Reset: '重置',
  SwitchToServer: '切換到伺服器',
  SwitchToAll: '切換到整體',
  PlayerLocation: '玩家座標',
  PlayerId: '玩家 ID',
};
export default zh_tw;
