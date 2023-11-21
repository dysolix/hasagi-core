import { LCUTypes } from "./lcu-types";

export interface LCUEndpoints {
	"/AsyncDelete": {
		post: { Parameters: [], Body: number, Response: unknown }
	},
	"/AsyncResult": {
		post: { Parameters: [], Body: number, Response: unknown }
	},
	"/AsyncStatus": {
		post: { Parameters: [], Body: number, Response: unknown }
	},
	"/Cancel": {
		post: { Parameters: [], Body: number, Response: unknown }
	},
	"/lol-chat/v1/blocked-players/{id}": {
		get: { Parameters: [id: string], Body: never, Response: LCUTypes.LolChatBlockedPlayerResource }
		delete: { Parameters: [id: string], Body: never, Response: unknown }
	},
	"/lol-chat/v1/conversations/active": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolChatActiveConversationResource }
		put: { Parameters: [], Body: LCUTypes.LolChatActiveConversationResource, Response: unknown }
		delete: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-chat/v1/conversations/{id}": {
		get: { Parameters: [id: string], Body: never, Response: LCUTypes.LolChatConversationResource }
		put: { Parameters: [id: string], Body: LCUTypes.LolChatConversationResource, Response: LCUTypes.LolChatConversationResource }
		delete: { Parameters: [id: string], Body: never, Response: unknown }
	},
	"/lol-chat/v1/conversations/{id}/messages": {
		get: { Parameters: [id: string], Body: never, Response: LCUTypes.LolChatConversationMessageResource[] }
		post: { Parameters: [id: string], Body: LCUTypes.LolChatConversationMessageResource, Response: LCUTypes.LolChatConversationMessageResource }
		delete: { Parameters: [id: string], Body: never, Response: unknown }
	},
	"/lol-chat/v1/errors/{id}": {
		delete: { Parameters: [id: number], Body: never, Response: unknown }
	},
	"/lol-chat/v1/friend-groups/{id}": {
		get: { Parameters: [id: number], Body: never, Response: LCUTypes.LolChatGroupResource }
		put: { Parameters: [id: number], Body: LCUTypes.LolChatGroupResource, Response: unknown }
		delete: { Parameters: [id: number], Body: never, Response: unknown }
	},
	"/lol-chat/v1/friends/{id}": {
		get: { Parameters: [id: string], Body: never, Response: LCUTypes.LolChatFriendResource }
		put: { Parameters: [id: string], Body: LCUTypes.LolChatFriendResource, Response: unknown }
		delete: { Parameters: [id: string], Body: never, Response: unknown }
	},
	"/lol-chat/v1/player-mutes": {
		get: { Parameters: [], Body: never, Response: Record<string, LCUTypes.LolChatPlayerMuteStatus> }
		post: { Parameters: [], Body: LCUTypes.LolChatPlayerMuteUpdate, Response: unknown }
		delete: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-chat/v1/session": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolChatSessionResource }
		delete: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-chat/v1/settings/{key}": {
		get: { Parameters: [key: string], Body: never, Response: unknown }
		put: { Parameters: [key: string, params: { "value": unknown, "doAsync"?: boolean }], Body: never, Response: unknown }
		delete: { Parameters: [key: string, params?: { "doAsync"?: boolean }], Body: never, Response: unknown }
	},
	"/lol-chat/v2/friend-requests/{id}": {
		put: { Parameters: [id: string], Body: LCUTypes.LolChatFriendRequestResource, Response: unknown }
		delete: { Parameters: [id: string], Body: never, Response: unknown }
	},
	"/lol-clash/v1/voice": {
		post: { Parameters: [], Body: never, Response: unknown }
		delete: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-clash/v1/voice-delay/{delaySeconds}": {
		post: { Parameters: [delaySeconds: number], Body: never, Response: unknown }
		delete: { Parameters: [delaySeconds: number], Body: never, Response: unknown }
	},
	"/lol-cosmetics/v1/selection/companion": {
		put: { Parameters: [], Body: number, Response: unknown }
		delete: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-cosmetics/v1/selection/playbook": {
		put: { Parameters: [], Body: number, Response: unknown }
		delete: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-cosmetics/v1/selection/tft-damage-skin": {
		put: { Parameters: [], Body: number, Response: unknown }
		delete: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-cosmetics/v1/selection/tft-map-skin": {
		put: { Parameters: [], Body: number, Response: unknown }
		delete: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-gameflow/v1/early-exit-notifications/eog": {
		get: { Parameters: [], Body: never, Response: unknown[] }
		delete: { Parameters: [], Body: never, Response: void }
	},
	"/lol-gameflow/v1/early-exit-notifications/eog/{key}": {
		delete: { Parameters: [key: number], Body: never, Response: void }
	},
	"/lol-gameflow/v1/early-exit-notifications/missions": {
		get: { Parameters: [], Body: never, Response: unknown[] }
		delete: { Parameters: [], Body: never, Response: void }
	},
	"/lol-gameflow/v1/early-exit-notifications/missions/{key}": {
		delete: { Parameters: [key: number], Body: never, Response: void }
	},
	"/lol-highlights/v1/highlights/{id}": {
		get: { Parameters: [id: number], Body: never, Response: LCUTypes.LolHighlightsHighlight }
		put: { Parameters: [id: number], Body: LCUTypes.LolHighlightsHighlight, Response: LCUTypes.LolHighlightsHighlight }
		delete: { Parameters: [id: number], Body: never, Response: LCUTypes.LolHighlightsHighlight }
	},
	"/lol-honeyfruit/v1/account-claim/migration": {
		get: { Parameters: [], Body: never, Response: string }
		post: { Parameters: [], Body: never, Response: string }
		delete: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-leaver-buster/v1/notifications/{id}": {
		get: { Parameters: [id: number], Body: never, Response: LCUTypes.LolLeaverBusterLeaverBusterNotificationResource }
		delete: { Parameters: [id: number], Body: never, Response: unknown }
	},
	"/lol-loadouts/v4/loadouts/{id}": {
		put: { Parameters: [id: string], Body: LCUTypes.LolLoadoutsUpdateLoadoutDTO, Response: LCUTypes.LolLoadoutsScopedLoadout }
		patch: { Parameters: [id: string], Body: LCUTypes.LolLoadoutsUpdateLoadoutDTO, Response: LCUTypes.LolLoadoutsScopedLoadout }
		delete: { Parameters: [id: string], Body: never, Response: void }
	},
	"/lol-lobby/v1/clash": {
		post: { Parameters: [], Body: string, Response: unknown }
		delete: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-lobby/v1/lobby/custom/bots/{summonerInternalName}": {
		post: { Parameters: [summonerInternalName: string], Body: LCUTypes.LolLobbyLobbyBotParams, Response: unknown }
		delete: { Parameters: [summonerInternalName: string], Body: never, Response: unknown }
	},
	"/lol-lobby/v2/lobby": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolLobbyLobbyDto }
		post: { Parameters: [], Body: LCUTypes.LolLobbyLobbyChangeGameDto, Response: LCUTypes.LolLobbyLobbyDto }
		delete: { Parameters: [], Body: never, Response: void }
	},
	"/lol-lobby/v2/lobby/matchmaking/search": {
		post: { Parameters: [], Body: never, Response: unknown }
		delete: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-lobby/v2/notifications/{notificationId}": {
		delete: { Parameters: [notificationId: string], Body: never, Response: unknown }
	},
	"/lol-login/v1/service-proxy-async-requests/{serviceName}/{methodName}": {
		post: { Parameters: [serviceName: string, methodName: string], Body: number, Response: void }
		delete: { Parameters: [serviceName: string, methodName: string, params: { "pluginId": number }], Body: never, Response: void }
	},
	"/lol-login/v1/session": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolLoginLoginSession }
		post: { Parameters: [], Body: LCUTypes.LolLoginUsernameAndPassword, Response: LCUTypes.LolLoginLoginSession }
		delete: { Parameters: [], Body: never, Response: void }
	},
	"/lol-login/v1/shutdown-locks/{lockName}": {
		put: { Parameters: [lockName: string], Body: never, Response: void }
		delete: { Parameters: [lockName: string], Body: never, Response: void }
	},
	"/lol-loot/v1/loot-grants/{id}": {
		delete: { Parameters: [id: number], Body: never, Response: unknown }
	},
	"/lol-loot/v1/player-loot/{lootId}/new-notification": {
		delete: { Parameters: [lootId: string], Body: never, Response: unknown }
	},
	"/lol-matchmaking/v1/search": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolMatchmakingMatchmakingSearchResource }
		post: { Parameters: [], Body: never, Response: unknown }
		put: { Parameters: [], Body: LCUTypes.LolMatchmakingMatchmakingSearchResource, Response: unknown }
		delete: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-patch/v1/notifications/{id}": {
		delete: { Parameters: [id: string], Body: never, Response: void }
	},
	"/lol-perks/v1/pages": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolPerksPerkPageResource[] }
		post: { Parameters: [], Body: LCUTypes.LolPerksPerkPageResource, Response: LCUTypes.LolPerksPerkPageResource }
		delete: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-perks/v1/pages/{id}": {
		get: { Parameters: [id: number], Body: never, Response: LCUTypes.LolPerksPerkPageResource }
		put: { Parameters: [id: number], Body: LCUTypes.LolPerksPerkPageResource, Response: LCUTypes.LolPerksPerkPageResource }
		delete: { Parameters: [id: number], Body: never, Response: unknown }
	},
	"/lol-perks/v1/pages/{id}/auto-modified-selections": {
		delete: { Parameters: [id: number], Body: never, Response: unknown }
	},
	"/lol-player-behavior/v1/code-of-conduct-notification": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolPlayerBehaviorCodeOfConductNotification }
		delete: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-player-behavior/v1/reporter-feedback/{id}": {
		get: { Parameters: [id: string], Body: never, Response: LCUTypes.LolPlayerBehaviorReporterFeedback }
		delete: { Parameters: [id: string], Body: never, Response: LCUTypes.LolPlayerBehaviorReporterFeedback }
	},
	"/lol-player-messaging/v1/celebration/notification/{id}/acknowledge": {
		delete: { Parameters: [id: number], Body: never, Response: unknown }
	},
	"/lol-player-messaging/v1/notification/{id}/acknowledge": {
		delete: { Parameters: [id: number], Body: never, Response: unknown }
	},
	"/lol-player-report-sender/v1/reported-players/gameId/{gameId}": {
		get: { Parameters: [gameId: number], Body: never, Response: string[] }
		delete: { Parameters: [gameId: number], Body: never, Response: unknown }
	},
	"/lol-pre-end-of-game/v1/registration/{sequenceEventName}": {
		delete: { Parameters: [sequenceEventName: string], Body: never, Response: void }
	},
	"/lol-premade-voice/v1/mic-test": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolPremadeVoiceAudioPropertiesResource }
		post: { Parameters: [], Body: never, Response: unknown }
		delete: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-premade-voice/v1/session": {
		post: { Parameters: [], Body: never, Response: void }
		delete: { Parameters: [], Body: never, Response: void }
	},
	"/lol-rms/v1/champion-mastery-leaveup-update/{id}": {
		delete: { Parameters: [id: number], Body: never, Response: unknown }
	},
	"/lol-rso-auth/v1/authorization": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolRsoAuthAuthorization }
		delete: { Parameters: [], Body: never, Response: void }
	},
	"/lol-rso-auth/v1/session": {
		delete: { Parameters: [], Body: never, Response: void }
	},
	"/lol-rso-auth/v2/config": {
		post: { Parameters: [], Body: LCUTypes.LolRsoAuthPublicClientConfig, Response: void }
		delete: { Parameters: [], Body: never, Response: void }
	},
	"/lol-simple-dialog-messages/v1/messages/{messageId}": {
		delete: { Parameters: [messageId: number], Body: never, Response: unknown }
	},
	"/lol-statstones/v1/vignette-notifications": {
		get: { Parameters: [], Body: never, Response: unknown[] }
		delete: { Parameters: [], Body: never, Response: void }
	},
	"/lol-statstones/v1/vignette-notifications/{key}": {
		delete: { Parameters: [key: number], Body: never, Response: void }
	},
	"/lol-suggested-players/v1/suggested-players/{summonerId}": {
		delete: { Parameters: [summonerId: number], Body: never, Response: unknown }
	},
	"/lol-tft-team-planner/v1/team/champions": {
		patch: { Parameters: [], Body: number[], Response: unknown }
		delete: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-tft-team-planner/v1/team/championsById/{championName}": {
		post: { Parameters: [championName: string], Body: never, Response: unknown }
		delete: { Parameters: [championName: string], Body: never, Response: unknown }
	},
	"/lol-tft-team-planner/v1/team/champions/{index}": {
		post: { Parameters: [index: number], Body: string, Response: unknown }
		delete: { Parameters: [index: number], Body: never, Response: unknown }
	},
	"/lol-tft-team-planner/v1/team/dirty": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolTftTeamPlannerTeamPlan }
		delete: { Parameters: [], Body: never, Response: void }
	},
	"/lol-tft-troves/v1/roll-rewards": {
		get: { Parameters: [], Body: never, Response: void }
		delete: { Parameters: [], Body: never, Response: void }
	},
	"/patcher/v1/notifications/{id}": {
		delete: { Parameters: [id: string], Body: never, Response: unknown }
	},
	"/patcher/v1/products/{product-id}": {
		delete: { Parameters: [product_id: string], Body: never, Response: unknown }
	},
	"/player-notifications/v1/notifications/{id}": {
		get: { Parameters: [id: number], Body: never, Response: LCUTypes.PlayerNotificationsPlayerNotificationResource }
		put: { Parameters: [id: number], Body: unknown, Response: LCUTypes.PlayerNotificationsPlayerNotificationResource }
		delete: { Parameters: [id: number], Body: never, Response: unknown }
	},
	"/riot-messaging-service/v1/connect": {
		post: { Parameters: [], Body: string, Response: void }
		delete: { Parameters: [], Body: never, Response: void }
	},
	"/riot-messaging-service/v1/entitlements": {
		post: { Parameters: [], Body: LCUTypes.RiotMessagingServiceEntitlementsToken, Response: void }
		delete: { Parameters: [], Body: never, Response: void }
	},
	"/riot-messaging-service/v1/session": {
		get: { Parameters: [], Body: never, Response: LCUTypes.RiotMessagingServiceSession }
		delete: { Parameters: [], Body: never, Response: void }
	},
	"/riotclient/affinity": {
		get: { Parameters: [], Body: never, Response: unknown }
		post: { Parameters: [], Body: string, Response: void }
		delete: { Parameters: [], Body: never, Response: void }
	},
	"/riotclient/splash": {
		put: { Parameters: [], Body: string, Response: void }
		delete: { Parameters: [], Body: never, Response: void }
	},
	"/riotclient/v1/auth-tokens/{authToken}": {
		put: { Parameters: [authToken: string], Body: never, Response: unknown }
		delete: { Parameters: [authToken: string], Body: never, Response: unknown }
	},
	"/tracing/v1/performance/{name}": {
		post: { Parameters: [name: string], Body: never, Response: void }
		delete: { Parameters: [name: string], Body: never, Response: void }
	},
	"/tracing/v1/trace/time-series-event/{eventName}": {
		post: { Parameters: [eventName: string], Body: number, Response: void }
		delete: { Parameters: [eventName: string, params: { "when": number, "suffix"?: string }], Body: never, Response: void }
	},
	"/Exit": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/anti-addiction/v1/policies/{policyType}/anti-addiction-state": {
		get: { Parameters: [policyType: LCUTypes.LolAntiAddictionPolicyType], Body: never, Response: LCUTypes.LolAntiAddictionAntiAddictionState }
	},
	"/{plugin}/assets/{+path}": {
		get: { Parameters: [plugin: string, path: string, params?: { "if-none-match"?: string }], Body: never, Response: unknown }
		head: { Parameters: [plugin: string, path: string, params?: { "if-none-match"?: string }], Body: never, Response: unknown }
	},
	"/client-config/v1/config": {
		get: { Parameters: [params: { "type": LCUTypes.ClientConfigConfigType, "app"?: string, "version"?: string, "patchline"?: string, "region"?: string, "namespace"?: string }], Body: never, Response: Record<string, unknown> }
	},
	"/client-config/v1/config/{name}": {
		get: { Parameters: [name: string, params: { "type": LCUTypes.ClientConfigConfigType, "app"?: string, "version"?: string, "patchline"?: string, "region"?: string }], Body: never, Response: unknown }
	},
	"/client-config/v1/status/{type}": {
		get: { Parameters: [type: LCUTypes.ClientConfigConfigType], Body: never, Response: LCUTypes.ClientConfigConfigStatus }
	},
	"/client-config/v2/config/{name}": {
		get: { Parameters: [name: string], Body: never, Response: unknown }
	},
	"/client-config/v2/namespace/{namespace}": {
		get: { Parameters: [namespace: string], Body: never, Response: Record<string, unknown> }
	},
	"/client-config/v2/namespace/{namespace}/player": {
		get: { Parameters: [namespace: string], Body: never, Response: Record<string, unknown> }
	},
	"/client-config/v2/namespace/{namespace}/public": {
		get: { Parameters: [namespace: string], Body: never, Response: Record<string, unknown> }
	},
	"/config/v1/config": {
		get: { Parameters: [], Body: never, Response: unknown }
	},
	"/cookie-jar/v1/cookies": {
		get: { Parameters: [], Body: never, Response: LCUTypes.cookie[] }
		post: { Parameters: [], Body: LCUTypes.cookie[], Response: unknown }
	},
	"/crash-reporting/v1/crash-status": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/data-store/v1/install-dir": {
		get: { Parameters: [], Body: never, Response: string }
	},
	"/data-store/v1/install-settings/{+path}": {
		get: { Parameters: [path: string], Body: never, Response: unknown }
		post: { Parameters: [path: string], Body: unknown, Response: void }
	},
	"/data-store/v1/system-settings/{+path}": {
		get: { Parameters: [path: string], Body: never, Response: unknown }
	},
	"/deep-links/v1/settings": {
		get: { Parameters: [], Body: never, Response: LCUTypes.DeepLinksDeepLinksSettings }
	},
	"/entitlements/v1/token": {
		get: { Parameters: [], Body: never, Response: LCUTypes.EntitlementsToken }
	},
	"/lol-account-verification/v1/is-verified": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolAccountVerificationIsVerifiedResponse }
	},
	"/lol-account-verification/v1/phone-number": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolAccountVerificationPhoneNumberResponse }
	},
	"/lol-active-boosts/v1/active-boosts": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolActiveBoostsActiveBoosts }
	},
	"/lol-anti-addiction/v1/anti-addiction-token": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolAntiAddictionAntiAddictionToken }
	},
	"/lol-banners/v1/current-summoner/flags": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolBannersBannerFlag[] }
	},
	"/lol-banners/v1/current-summoner/flags/equipped": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolBannersBannerFlag }
		put: { Parameters: [], Body: LCUTypes.LolBannersBannerFlag, Response: LCUTypes.LolBannersBannerFlag }
	},
	"/lol-banners/v1/current-summoner/frames/equipped": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolBannersBannerFrame }
	},
	"/lol-banners/v1/players/{puuid}/flags/equipped": {
		get: { Parameters: [puuid: string], Body: never, Response: LCUTypes.LolBannersBannerFlag }
	},
	"/lol-career-stats/v1/champion-averages/{championId}/{position}/{tier}/{queue}": {
		get: { Parameters: [championId: number, position: LCUTypes.LolCareerStatsSummonersRiftPosition, tier: string, queue: LCUTypes.LolCareerStatsCareerStatsQueueType], Body: never, Response: LCUTypes.LolCareerStatsChampionQueueStatsResponse }
	},
	"/lol-career-stats/v1/champion-averages/season/{season}/{championId}/{position}/{tier}/{queue}": {
		get: { Parameters: [season: number, championId: number, position: LCUTypes.LolCareerStatsSummonersRiftPosition, tier: string, queue: LCUTypes.LolCareerStatsCareerStatsQueueType], Body: never, Response: LCUTypes.LolCareerStatsChampionQueueStatsResponse }
	},
	"/lol-career-stats/v1/champion-experts/{championId}/{position}": {
		get: { Parameters: [championId: number, position: LCUTypes.LolCareerStatsSummonersRiftPosition], Body: never, Response: LCUTypes.LolCareerStatsExpertPlayer[] }
	},
	"/lol-career-stats/v1/champion-experts/season/{season}/{championId}/{position}": {
		get: { Parameters: [season: number, championId: number, position: LCUTypes.LolCareerStatsSummonersRiftPosition], Body: never, Response: LCUTypes.LolCareerStatsExpertPlayer[] }
	},
	"/lol-career-stats/v1/position-averages/{position}/{tier}/{queue}": {
		get: { Parameters: [position: LCUTypes.LolCareerStatsSummonersRiftPosition, tier: string, queue: LCUTypes.LolCareerStatsCareerStatsQueueType], Body: never, Response: LCUTypes.LolCareerStatsChampionQueueStatsResponse }
	},
	"/lol-career-stats/v1/position-averages/season/{season}/{position}/{tier}/{queue}": {
		get: { Parameters: [season: number, position: LCUTypes.LolCareerStatsSummonersRiftPosition, tier: string, queue: LCUTypes.LolCareerStatsCareerStatsQueueType], Body: never, Response: LCUTypes.LolCareerStatsChampionQueueStatsResponse }
	},
	"/lol-career-stats/v1/position-experts/{position}": {
		get: { Parameters: [position: LCUTypes.LolCareerStatsSummonersRiftPosition], Body: never, Response: LCUTypes.LolCareerStatsExpertPlayer[] }
	},
	"/lol-career-stats/v1/position-experts/season/{season}/{position}": {
		get: { Parameters: [season: number, position: LCUTypes.LolCareerStatsSummonersRiftPosition], Body: never, Response: LCUTypes.LolCareerStatsExpertPlayer[] }
	},
	"/lol-career-stats/v1/summoner-games/{puuid}": {
		get: { Parameters: [puuid: string], Body: never, Response: unknown }
	},
	"/lol-career-stats/v1/summoner-games/{puuid}/season/{season}": {
		get: { Parameters: [puuid: string, season: number], Body: never, Response: unknown }
	},
	"/lol-career-stats/v1/summoner-stats/{puuid}/{season}/{queue}/{position}": {
		get: { Parameters: [puuid: string, season: number, queue: LCUTypes.LolCareerStatsCareerStatsQueueType, position: LCUTypes.LolCareerStatsSummonersRiftPosition, params?: { "championId"?: number }], Body: never, Response: unknown }
	},
	"/lol-catalog/v1/item-details": {
		get: { Parameters: [params: { "inventoryType": string, "itemId": number }], Body: never, Response: LCUTypes.LolCatalogCatalogPluginItemWithDetails }
	},
	"/lol-catalog/v1/items": {
		get: { Parameters: [params: { "inventoryType": string, "itemIds": number[] }], Body: never, Response: LCUTypes.LolCatalogItemChoiceDetails[] }
	},
	"/lol-catalog/v1/items/{inventoryType}": {
		get: { Parameters: [inventoryType: string], Body: never, Response: LCUTypes.LolCatalogCatalogPluginItem[] }
	},
	"/lol-catalog/v1/items-list-details/skip-cache": {
		get: { Parameters: [params: { "catalogItemsKeys": LCUTypes.LolCatalogItemKey[] }], Body: never, Response: LCUTypes.LolCatalogCatalogPluginItemWithDetails[] }
	},
	"/lol-challenges/v1/available-queue-ids": {
		get: { Parameters: [], Body: never, Response: number[] }
	},
	"/lol-challenges/v1/challenges/category-data": {
		get: { Parameters: [], Body: never, Response: Record<string, LCUTypes.LolChallengesUIChallenge> }
	},
	"/lol-challenges/v1/challenges/local-player": {
		get: { Parameters: [], Body: never, Response: Record<string, LCUTypes.LolChallengesUIChallenge> }
	},
	"/lol-challenges/v1/client-state": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolChallengesClientState }
	},
	"/lol-challenges/v1/level-points": {
		get: { Parameters: [], Body: never, Response: Record<string, number> }
	},
	"/lol-challenges/v1/my-updated-challenges/{gameId}": {
		get: { Parameters: [gameId: number], Body: never, Response: Record<string, LCUTypes.LolChallengesUIChallenge> }
	},
	"/lol-challenges/v1/penalty": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolChallengesUIChallengePenalty }
	},
	"/lol-challenges/v1/seasons": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolChallengesChallengeSeason[] }
	},
	"/lol-challenges/v1/summary-player-data/local-player": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolChallengesUIPlayerSummary }
	},
	"/lol-challenges/v1/summary-player-data/player/{puuid}": {
		get: { Parameters: [puuid: string], Body: never, Response: LCUTypes.LolChallengesUIPlayerSummary }
	},
	"/lol-challenges/v1/summary-players-data/players": {
		get: { Parameters: [params: { "puuids": string[] }], Body: never, Response: Record<string, LCUTypes.LolChallengesUIPlayerSummary> }
	},
	"/lol-challenges/v1/updated-challenges/{gameId}/{puuid}": {
		get: { Parameters: [gameId: number, puuid: string], Body: never, Response: Record<string, LCUTypes.LolChallengesUIChallenge> }
	},
	"/lol-challenges/v2/titles/all": {
		get: { Parameters: [], Body: never, Response: Record<string, LCUTypes.LolChallengesUITitle> }
	},
	"/lol-challenges/v2/titles/local-player": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolChallengesUITitle[] }
	},
	"/lol-champ-select-legacy/v1/bannable-champion-ids": {
		get: { Parameters: [], Body: never, Response: number[] }
	},
	"/lol-champ-select-legacy/v1/current-champion": {
		get: { Parameters: [], Body: never, Response: number }
	},
	"/lol-champ-select-legacy/v1/disabled-champion-ids": {
		get: { Parameters: [], Body: never, Response: number[] }
	},
	"/lol-champ-select-legacy/v1/implementation-active": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-champ-select-legacy/v1/pickable-champion-ids": {
		get: { Parameters: [], Body: never, Response: number[] }
	},
	"/lol-champ-select-legacy/v1/pickable-skin-ids": {
		get: { Parameters: [], Body: never, Response: number[] }
	},
	"/lol-champ-select-legacy/v1/session": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolChampSelectLegacyChampSelectSession }
	},
	"/lol-champ-select-legacy/v1/session/my-selection": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolChampSelectLegacyChampSelectPlayerSelection }
		patch: { Parameters: [], Body: LCUTypes.LolChampSelectLegacyChampSelectMySelection, Response: unknown }
	},
	"/lol-champ-select-legacy/v1/session/timer": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolChampSelectLegacyChampSelectTimer }
	},
	"/lol-champ-select-legacy/v1/session/trades": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolChampSelectLegacyChampSelectTradeContract[] }
	},
	"/lol-champ-select-legacy/v1/session/trades/{id}": {
		get: { Parameters: [id: number], Body: never, Response: LCUTypes.LolChampSelectLegacyChampSelectTradeContract }
	},
	"/lol-champ-select-legacy/v1/team-boost": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolChampSelectLegacyTeamBoost }
	},
	"/lol-champ-select/v1/all-grid-champions": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolChampSelectChampGridChampion[] }
	},
	"/lol-champ-select/v1/bannable-champion-ids": {
		get: { Parameters: [], Body: never, Response: number[] }
	},
	"/lol-champ-select/v1/current-champion": {
		get: { Parameters: [], Body: never, Response: number }
	},
	"/lol-champ-select/v1/disabled-champion-ids": {
		get: { Parameters: [], Body: never, Response: number[] }
	},
	"/lol-champ-select/v1/grid-champions/{championId}": {
		get: { Parameters: [championId: number], Body: never, Response: LCUTypes.LolChampSelectChampGridChampion }
	},
	"/lol-champ-select/v1/muted-players": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolChampSelectMutedPlayerInfo[] }
	},
	"/lol-champ-select/v1/ongoing-swap": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolChampSelectChampSelectSwapNotification }
	},
	"/lol-champ-select/v1/ongoing-trade": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolChampSelectChampSelectTradeNotification }
	},
	"/lol-champ-select/v1/pickable-champion-ids": {
		get: { Parameters: [], Body: never, Response: number[] }
	},
	"/lol-champ-select/v1/pickable-skin-ids": {
		get: { Parameters: [], Body: never, Response: number[] }
	},
	"/lol-champ-select/v1/pin-drop-notification": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolChampSelectChampSelectPinDropNotification }
	},
	"/lol-champ-select/v1/session": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolChampSelectChampSelectSession }
	},
	"/lol-champ-select/v1/session/my-selection": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolChampSelectChampSelectPlayerSelection }
		patch: { Parameters: [], Body: LCUTypes.LolChampSelectChampSelectMySelection, Response: unknown }
	},
	"/lol-champ-select/v1/session/swaps": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolChampSelectChampSelectSwapContract[] }
	},
	"/lol-champ-select/v1/session/swaps/{id}": {
		get: { Parameters: [id: number], Body: never, Response: LCUTypes.LolChampSelectChampSelectSwapContract }
	},
	"/lol-champ-select/v1/session/timer": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolChampSelectChampSelectTimer }
	},
	"/lol-champ-select/v1/session/trades": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolChampSelectChampSelectTradeContract[] }
	},
	"/lol-champ-select/v1/session/trades/{id}": {
		get: { Parameters: [id: number], Body: never, Response: LCUTypes.LolChampSelectChampSelectTradeContract }
	},
	"/lol-champ-select/v1/sfx-notifications": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolChampSelectSfxNotification[] }
	},
	"/lol-champ-select/v1/skin-carousel-skins": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolChampSelectSkinSelectorSkin[] }
	},
	"/lol-champ-select/v1/skin-selector-info": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolChampSelectSkinSelectorInfo }
	},
	"/lol-champ-select/v1/summoners/{slotId}": {
		get: { Parameters: [slotId: number], Body: never, Response: LCUTypes.LolChampSelectChampSelectSummoner }
	},
	"/lol-champ-select/v1/team-boost": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolChampSelectTeamBoost }
	},
	"/lol-champions/v1/inventories/{summonerId}/champions": {
		get: { Parameters: [summonerId: number], Body: never, Response: LCUTypes.LolChampionsCollectionsChampion[] }
	},
	"/lol-champions/v1/inventories/{summonerId}/champions/{championId}": {
		get: { Parameters: [summonerId: number, championId: number], Body: never, Response: LCUTypes.LolChampionsCollectionsChampion }
	},
	"/lol-champions/v1/inventories/{summonerId}/champions/{championId}/skins": {
		get: { Parameters: [summonerId: number, championId: number], Body: never, Response: LCUTypes.LolChampionsCollectionsChampionSkin[] }
	},
	"/lol-champions/v1/inventories/{summonerId}/champions/{championId}/skins/{championSkinId}": {
		get: { Parameters: [summonerId: number, championId: number, championSkinId: number], Body: never, Response: LCUTypes.LolChampionsCollectionsChampionSkin }
	},
	"/lol-champions/v1/inventories/{summonerId}/champions/{championId}/skins/{skinId}/chromas": {
		get: { Parameters: [summonerId: number, championId: number, skinId: number], Body: never, Response: LCUTypes.LolChampionsCollectionsChampionChroma[] }
	},
	"/lol-champions/v1/inventories/{summonerId}/champions-minimal": {
		get: { Parameters: [summonerId: number], Body: never, Response: LCUTypes.LolChampionsCollectionsChampionMinimal[] }
	},
	"/lol-champions/v1/inventories/{summonerId}/champions-playable-count": {
		get: { Parameters: [summonerId: number], Body: never, Response: LCUTypes.LolChampionsCollectionsChampionPlayableCounts }
	},
	"/lol-champions/v1/inventories/{summonerId}/skins-minimal": {
		get: { Parameters: [summonerId: number], Body: never, Response: LCUTypes.LolChampionsCollectionsChampionSkinMinimal[] }
	},
	"/lol-champions/v1/owned-champions-minimal": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolChampionsCollectionsChampionMinimal[] }
	},
	"/lol-chat/v1/blocked-players": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolChatBlockedPlayerResource[] }
		post: { Parameters: [], Body: LCUTypes.LolChatBlockedPlayerResource, Response: unknown }
	},
	"/lol-chat/v1/config": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolChatChatServiceDynamicClientConfig }
	},
	"/lol-chat/v1/conversations": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolChatConversationResource[] }
		post: { Parameters: [], Body: LCUTypes.LolChatConversationResource, Response: LCUTypes.LolChatConversationResource }
	},
	"/lol-chat/v1/conversations/{id}/participants": {
		get: { Parameters: [id: string], Body: never, Response: LCUTypes.LolChatUserResource[] }
		post: { Parameters: [id: string], Body: LCUTypes.LolChatUserResource, Response: unknown }
	},
	"/lol-chat/v1/conversations/{id}/participants/{pid}": {
		get: { Parameters: [id: string, pid: string], Body: never, Response: LCUTypes.LolChatUserResource }
	},
	"/lol-chat/v1/conversations/notify": {
		get: { Parameters: [], Body: never, Response: string }
	},
	"/lol-chat/v1/errors": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolChatErrorResource[] }
	},
	"/lol-chat/v1/friend-counts": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolChatFriendCountsResource }
	},
	"/lol-chat/v1/friend-exists/{summonerId}": {
		get: { Parameters: [summonerId: number], Body: never, Response: boolean }
	},
	"/lol-chat/v1/friend-groups": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolChatGroupResource[] }
		post: { Parameters: [], Body: LCUTypes.LolChatGroupResource, Response: unknown }
	},
	"/lol-chat/v1/friend-groups/{id}/friends": {
		get: { Parameters: [id: number], Body: never, Response: LCUTypes.LolChatFriendResource[] }
	},
	"/lol-chat/v1/friends": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolChatFriendResource[] }
	},
	"/lol-chat/v1/me": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolChatUserResource }
		put: { Parameters: [], Body: LCUTypes.LolChatUserResource, Response: LCUTypes.LolChatUserResource }
	},
	"/lol-chat/v1/proxy-mode-enabled": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-chat/v1/resources": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolChatProductMetadataMap }
	},
	"/lol-chat/v1/settings": {
		get: { Parameters: [], Body: never, Response: unknown }
		put: { Parameters: [params: { "data": unknown, "doAsync"?: boolean }], Body: never, Response: unknown }
	},
	"/lol-chat/v2/friend-requests": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolChatFriendRequestResource[] }
		post: { Parameters: [], Body: LCUTypes.LolChatFriendRequestResource, Response: unknown }
	},
	"/lol-clash/v1/all-tournaments": {
		get: { Parameters: [], Body: never, Response: LCUTypes.TournamentDTO[] }
	},
	"/lol-clash/v1/awaiting-resent-eog": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-clash/v1/bracket/{bracketId}": {
		get: { Parameters: [bracketId: number], Body: never, Response: LCUTypes.LolClashBracket }
	},
	"/lol-clash/v1/checkin-allowed": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-clash/v1/currentTournamentIds": {
		get: { Parameters: [], Body: never, Response: number[] }
	},
	"/lol-clash/v1/disabled-config": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolClashClashDisabledConfig }
	},
	"/lol-clash/v1/enabled": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-clash/v1/eog-player-update": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolClashEogPlayerUpdateDTO }
	},
	"/lol-clash/v1/event/{uuid}": {
		get: { Parameters: [uuid: string], Body: never, Response: LCUTypes.ClashEventData }
	},
	"/lol-clash/v1/game-end": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolClashTournamentGameEnd }
	},
	"/lol-clash/v1/historyandwinners": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolClashTournamentHistoryAndWinners }
	},
	"/lol-clash/v1/iconconfig": {
		get: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-clash/v1/invited-roster-ids": {
		get: { Parameters: [], Body: never, Response: string[] }
	},
	"/lol-clash/v1/lft/team/requests": {
		get: { Parameters: [], Body: never, Response: LCUTypes.PendingOpenedTeamDTO[] }
	},
	"/lol-clash/v1/notifications": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolClashPlayerNotificationData }
	},
	"/lol-clash/v1/ping": {
		get: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-clash/v1/player": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolClashPlayerData }
	},
	"/lol-clash/v1/player/chat-rosters": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolClashPlayerChatRoster[] }
	},
	"/lol-clash/v1/player/history": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolClashRosterStats[] }
	},
	"/lol-clash/v1/playmode-restricted": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-clash/v1/ready": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-clash/v1/rewards": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolClashPlayerRewards }
	},
	"/lol-clash/v1/roster/{rosterId}": {
		get: { Parameters: [rosterId: string], Body: never, Response: LCUTypes.LolClashRoster }
	},
	"/lol-clash/v1/roster/{rosterId}/stats": {
		get: { Parameters: [rosterId: number], Body: never, Response: LCUTypes.LolClashRosterStats }
	},
	"/lol-clash/v1/scouting/champions": {
		get: { Parameters: [params: { "puuids": string[] }], Body: never, Response: LCUTypes.LolClashScoutingChampions[] }
	},
	"/lol-clash/v1/scouting/matchhistory": {
		get: { Parameters: [params: { "summonerIds": number[] }], Body: never, Response: unknown }
	},
	"/lol-clash/v1/season-rewards/{seasonId}": {
		get: { Parameters: [seasonId: number], Body: never, Response: LCUTypes.ClashSeasonRewardResult }
	},
	"/lol-clash/v1/simple-state-flags": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolClashSimpleStateFlag[] }
	},
	"/lol-clash/v1/thirdparty/team-data": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolClashThirdPartyApiRoster }
	},
	"/lol-clash/v1/time": {
		get: { Parameters: [], Body: never, Response: number }
	},
	"/lol-clash/v1/tournament/{tournamentId}": {
		get: { Parameters: [tournamentId: number], Body: never, Response: LCUTypes.LolClashTournament }
	},
	"/lol-clash/v1/tournament/{tournamentId}/get-player-tiers": {
		get: { Parameters: [tournamentId: number, params: { "summonerIds": number[] }], Body: never, Response: LCUTypes.PlayerTierDTO[] }
	},
	"/lol-clash/v1/tournament/{tournamentId}/player": {
		get: { Parameters: [tournamentId: number], Body: never, Response: LCUTypes.LolClashPlayerTournamentData }
	},
	"/lol-clash/v1/tournament/{tournamentId}/player-honor-restricted": {
		get: { Parameters: [tournamentId: number], Body: never, Response: boolean }
	},
	"/lol-clash/v1/tournament/{tournamentId}/stateInfo": {
		get: { Parameters: [tournamentId: number], Body: never, Response: LCUTypes.LolClashTournamentStateInfo }
	},
	"/lol-clash/v1/tournament/{tournamentId}/winners": {
		get: { Parameters: [tournamentId: number], Body: never, Response: LCUTypes.LolClashTournamentWinnerHistory }
	},
	"/lol-clash/v1/tournament/cancelled": {
		get: { Parameters: [], Body: never, Response: number[] }
	},
	"/lol-clash/v1/tournament/get-all-player-tiers": {
		get: { Parameters: [], Body: never, Response: LCUTypes.PlayerTierDTO[] }
	},
	"/lol-clash/v1/tournament-state-info": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolClashTournamentStateInfo[] }
	},
	"/lol-clash/v1/tournament-summary": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolClashTournamentSummary[] }
	},
	"/lol-clash/v1/visible": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-clash/v1/voice-enabled": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-clash/v2/playmode-restricted": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolClashPlaymodeRestrictedInfo }
	},
	"/lol-client-config/v3/client-config/{name}": {
		get: { Parameters: [name: string], Body: never, Response: unknown }
	},
	"/lol-collections/v1/inventories/{puuid}/champion-mastery": {
		get: { Parameters: [puuid: string], Body: never, Response: LCUTypes.LolCollectionsCollectionsChampionMastery[] }
	},
	"/lol-collections/v1/inventories/{puuid}/champion-mastery/top": {
		get: { Parameters: [puuid: string, params: { "limit": number, "sortRule"?: string }], Body: never, Response: LCUTypes.LolCollectionsCollectionsTopChampionMasteries }
	},
	"/lol-collections/v1/inventories/{summonerId}/backdrop": {
		get: { Parameters: [summonerId: number], Body: never, Response: LCUTypes.LolCollectionsCollectionsSummonerBackdrop }
	},
	"/lol-collections/v1/inventories/{summonerId}/spells": {
		get: { Parameters: [summonerId: number], Body: never, Response: LCUTypes.LolCollectionsCollectionsSummonerSpells }
	},
	"/lol-collections/v1/inventories/{summonerId}/ward-skins": {
		get: { Parameters: [summonerId: number], Body: never, Response: LCUTypes.LolCollectionsCollectionsWardSkin[] }
	},
	"/lol-collections/v1/inventories/{summonerId}/ward-skins/{wardSkinId}": {
		get: { Parameters: [summonerId: number, wardSkinId: number], Body: never, Response: LCUTypes.LolCollectionsCollectionsWardSkin }
	},
	"/lol-collections/v1/inventories/chest-eligibility": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolCollectionsCollectionsChestEligibility }
	},
	"/lol-collections/v1/inventories/local-player/champion-mastery-score": {
		get: { Parameters: [], Body: never, Response: number }
	},
	"/lol-collections/v1/inventories/scouting": {
		get: { Parameters: [params: { "puuids": string[] }], Body: never, Response: LCUTypes.RankedScoutingDTO[] }
	},
	"/lol-content-targeting/v1/filters": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolContentTargetingContentTargetingFilterResponse }
	},
	"/lol-content-targeting/v1/locale": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolContentTargetingContentTargetingLocaleResponse }
	},
	"/lol-content-targeting/v1/protected_filters": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolContentTargetingContentTargetingFilterResponse }
	},
	"/lol-cosmetics/v1/inventories/{setName}/companions": {
		get: { Parameters: [setName: string], Body: never, Response: LCUTypes.LolCosmeticsCompanionsGroupedViewModel }
	},
	"/lol-cosmetics/v1/inventories/{setName}/damage-skins": {
		get: { Parameters: [setName: string], Body: never, Response: LCUTypes.LolCosmeticsTFTDamageSkinGroupedViewModel }
	},
	"/lol-cosmetics/v1/inventories/{setName}/map-skins": {
		get: { Parameters: [setName: string], Body: never, Response: LCUTypes.LolCosmeticsTFTMapSkinGroupedViewModel }
	},
	"/lol-cosmetics/v1/inventories/{setName}/playbooks": {
		get: { Parameters: [setName: string], Body: never, Response: LCUTypes.LolCosmeticsTFTPlaybookGroupedViewModel }
	},
	"/lol-drops/v1/drop-tables": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolDropsCapDropsDropTableWithPityDTO[] }
	},
	"/lol-drops/v1/drop-tables/{dropTableId}": {
		get: { Parameters: [dropTableId: string], Body: never, Response: LCUTypes.LolDropsCapDropsDropTableWithPityDTO }
	},
	"/lol-drops/v1/drop-tables/{dropTableId}/odds-list": {
		get: { Parameters: [dropTableId: string], Body: never, Response: LCUTypes.LolDropsCapDropsOddsListEntryDTO[] }
	},
	"/lol-drops/v1/drop-tables/{dropTableId}/odds-tree": {
		get: { Parameters: [dropTableId: string], Body: never, Response: LCUTypes.LolDropsCapDropsOddsTreeNodeDTO }
	},
	"/lol-drops/v1/drop-tables/{dropTableId}/players/{playerId}/pity-count": {
		get: { Parameters: [dropTableId: string, playerId: string], Body: never, Response: LCUTypes.LolDropsCapDropsPityCountDTO }
	},
	"/lol-drops/v1/players/{playerId}/pity-counts": {
		get: { Parameters: [playerId: string], Body: never, Response: LCUTypes.LolDropsCapDropsPityCountDTO[] }
	},
	"/lol-drops/v1/ready": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-email-verification/v1/email": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolEmailVerificationEmailVerificationSession }
		put: { Parameters: [], Body: LCUTypes.LolEmailVerificationEmailUpdate, Response: unknown }
	},
	"/lol-end-of-game/v1/champion-mastery-updates": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolEndOfGameChampionMasteryUpdate }
	},
	"/lol-end-of-game/v1/eog-stats-block": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolEndOfGameEndOfGameStats }
	},
	"/lol-end-of-game/v1/gameclient-eog-stats-block": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolEndOfGameGameClientEndOfGameStats }
		post: { Parameters: [], Body: LCUTypes.LolEndOfGameGameClientEndOfGameStats, Response: unknown }
	},
	"/lol-end-of-game/v1/tft-eog-stats": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolEndOfGameTFTEndOfGameViewModel }
	},
	"/lol-esport-stream-notifications/v1/live-streams": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolEsportStreamNotificationsESportsLiveStreams }
	},
	"/lol-esport-stream-notifications/v1/stream-url": {
		get: { Parameters: [], Body: never, Response: string }
	},
	"/lol-event-shop/v1/categories-offers": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolEventShopCategoryOffersUIData[] }
	},
	"/lol-event-shop/v1/event-details-data": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolEventShopEventDetailsUIData }
	},
	"/lol-event-shop/v1/failure-loading-reward-track": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolEventShopEventShopError }
	},
	"/lol-event-shop/v1/failure-loading-token-shop": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolEventShopEventShopError }
	},
	"/lol-event-shop/v1/info": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolEventShopEventShopInfoUIData }
	},
	"/lol-event-shop/v1/is-grace-period": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-event-shop/v1/navigation-button-data": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolEventShopNavigationButtonUIData }
	},
	"/lol-event-shop/v1/pass-background-data": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolEventShopEventBackgroundUIData }
	},
	"/lol-event-shop/v1/pass-bundles": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolEventShopBundleOfferUIData[] }
	},
	"/lol-event-shop/v1/progress-info-data": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolEventShopProgressInfoUIData }
	},
	"/lol-event-shop/v1/reward-track-bonus-items": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolEventShopRewardTrackItem[] }
	},
	"/lol-event-shop/v1/reward-track-bonus-progress": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolEventShopRewardTrackProgress }
	},
	"/lol-event-shop/v1/reward-track-items": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolEventShopRewardTrackItem[] }
	},
	"/lol-event-shop/v1/reward-track-progress": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolEventShopRewardTrackProgress }
	},
	"/lol-event-shop/v1/reward-track-xp": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolEventShopRewardTrackXP }
	},
	"/lol-event-shop/v1/token-balance": {
		get: { Parameters: [], Body: never, Response: number }
	},
	"/lol-event-shop/v1/token-shop-data": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolEventShopTokenShopUIData }
	},
	"/lol-event-shop/v1/token-upsell": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolEventShopTokenUpsell[] }
	},
	"/lol-event-shop/v1/unclaimed-rewards": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolEventShopUnclaimedRewardsUIData }
	},
	"/lol-game-client-chat/v1/buddies": {
		get: { Parameters: [], Body: never, Response: string[] }
	},
	"/lol-game-client-chat/v1/ignored-summoners": {
		get: { Parameters: [], Body: never, Response: number[] }
	},
	"/lol-game-client-chat/v1/muted-summoners": {
		get: { Parameters: [], Body: never, Response: number[] }
	},
	"/lol-game-client-chat/v2/buddies": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolGameClientChatBuddy[] }
	},
	"/lol-game-client-chat/v2/ignored-players": {
		get: { Parameters: [], Body: never, Response: number[] }
	},
	"/lol-game-client-chat/v2/muted-players": {
		get: { Parameters: [], Body: never, Response: number[] }
	},
	"/lol-game-queues/v1/custom": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolGameQueuesQueueCustomGame }
	},
	"/lol-game-queues/v1/custom-non-default": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolGameQueuesQueueCustomGame }
	},
	"/lol-game-queues/v1/game-type-config/{gameTypeConfigId}": {
		get: { Parameters: [gameTypeConfigId: number], Body: never, Response: LCUTypes.LolGameQueuesQueueGameTypeConfig }
	},
	"/lol-game-queues/v1/game-type-config/{gameTypeConfigId}/map/{mapId}": {
		get: { Parameters: [gameTypeConfigId: number, mapId: number], Body: never, Response: LCUTypes.LolGameQueuesQueueGameTypeConfig }
	},
	"/lol-game-queues/v1/queues": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolGameQueuesQueue[] }
	},
	"/lol-game-queues/v1/queues/{id}": {
		get: { Parameters: [id: number], Body: never, Response: LCUTypes.LolGameQueuesQueue }
	},
	"/lol-game-queues/v1/queues/type/{queueType}": {
		get: { Parameters: [queueType: string], Body: never, Response: LCUTypes.LolGameQueuesQueue }
	},
	"/lol-game-settings/v1/didreset": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-game-settings/v1/game-settings": {
		get: { Parameters: [], Body: never, Response: unknown }
		patch: { Parameters: [], Body: unknown, Response: unknown }
	},
	"/lol-game-settings/v1/game-settings-schema": {
		get: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-game-settings/v1/input-settings": {
		get: { Parameters: [], Body: never, Response: unknown }
		patch: { Parameters: [], Body: unknown, Response: unknown }
	},
	"/lol-game-settings/v1/input-settings-schema": {
		get: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-game-settings/v1/ready": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-gameflow/v1/active-patcher-lock": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-gameflow/v1/availability": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolGameflowGameflowAvailability }
	},
	"/lol-gameflow/v1/basic-tutorial": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-gameflow/v1/battle-training": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-gameflow/v1/early-exit-enabled": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-gameflow/v1/early-exit-quit-enabled": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-gameflow/v1/extra-game-client-args": {
		get: { Parameters: [], Body: never, Response: string[] }
		post: { Parameters: [], Body: string[], Response: void }
	},
	"/lol-gameflow/v1/gameflow-metadata/player-status": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolGameflowPlayerStatus }
		post: { Parameters: [], Body: LCUTypes.LolGameflowPlayerStatus, Response: void }
	},
	"/lol-gameflow/v1/gameflow-metadata/registration-status": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolGameflowRegistrationStatus }
		post: { Parameters: [], Body: LCUTypes.LolGameflowRegistrationStatus, Response: void }
	},
	"/lol-gameflow/v1/gameflow-phase": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolGameflowGameflowPhase }
	},
	"/lol-gameflow/v1/session": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolGameflowGameflowSession }
	},
	"/lol-gameflow/v1/session/per-position-summoner-spells/disallowed": {
		get: { Parameters: [], Body: never, Response: Record<string, LCUTypes.LolGameflowGameModeSpellList> }
	},
	"/lol-gameflow/v1/session/per-position-summoner-spells/disallowed/as-string": {
		get: { Parameters: [], Body: never, Response: string }
	},
	"/lol-gameflow/v1/session/per-position-summoner-spells/required": {
		get: { Parameters: [], Body: never, Response: Record<string, LCUTypes.LolGameflowGameModeSpellList> }
	},
	"/lol-gameflow/v1/session/per-position-summoner-spells/required/as-string": {
		get: { Parameters: [], Body: never, Response: string }
	},
	"/lol-gameflow/v1/spectate": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-gameflow/v1/spectate/delayed-launch": {
		get: { Parameters: [], Body: never, Response: void }
	},
	"/lol-gameflow/v1/watch": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolGameflowGameflowWatchPhase }
	},
	"/lol-geoinfo/v1/getlocation": {
		get: { Parameters: [params: { "ip_address": string }], Body: never, Response: LCUTypes.LolGeoinfoGeoInfo }
	},
	"/lol-geoinfo/v1/whereami": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolGeoinfoGeoInfoResponse }
	},
	"/lol-highlights/v1/config": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolHighlightsHighlightsConfig }
	},
	"/lol-highlights/v1/highlights": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolHighlightsHighlight[] }
		post: { Parameters: [], Body: never, Response: LCUTypes.LolHighlightsHighlight[] }
	},
	"/lol-highlights/v1/highlights-folder-path": {
		get: { Parameters: [], Body: never, Response: string }
	},
	"/lol-highlights/v1/highlights-folder-path/default": {
		get: { Parameters: [], Body: never, Response: string }
	},
	"/lol-honeyfruit/v1/account-claim/account-status/{puuid}": {
		get: { Parameters: [puuid: string], Body: never, Response: LCUTypes.LolHoneyfruitAccountClaimStatus }
	},
	"/lol-honeyfruit/v1/account-claim/auto-dismiss": {
		get: { Parameters: [], Body: never, Response: boolean }
		put: { Parameters: [], Body: boolean, Response: unknown }
	},
	"/lol-honeyfruit/v1/linking-settings-button-available": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-honeyfruit/v1/vng-publisher-settings": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolHoneyfruitHoneyfruitVNGPublisherSettings }
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-honor-v2/v1/ballot": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolHonorV2Ballot }
	},
	"/lol-honor-v2/v1/config": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolHonorV2HonorConfig }
	},
	"/lol-honor-v2/v1/late-recognition": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolHonorV2Honor[] }
	},
	"/lol-honor-v2/v1/latest-eligible-game": {
		get: { Parameters: [], Body: never, Response: number }
	},
	"/lol-honor-v2/v1/level-change": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolHonorV2VendedHonorChange }
	},
	"/lol-honor-v2/v1/mutual-honor": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolHonorV2MutualHonor }
	},
	"/lol-honor-v2/v1/profile": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolHonorV2ProfileInfo }
	},
	"/lol-honor-v2/v1/recognition": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolHonorV2Honor[] }
	},
	"/lol-honor-v2/v1/recognition-history": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolHonorV2HonorInteraction[] }
	},
	"/lol-honor-v2/v1/reward-granted": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolHonorV2VendedReward }
	},
	"/lol-honor-v2/v1/team-choices": {
		get: { Parameters: [], Body: never, Response: string[] }
	},
	"/lol-honor-v2/v1/vote-completion": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolHonorV2VoteCompletion }
	},
	"/lol-hovercard/v1/friend-info/{puuid}": {
		get: { Parameters: [puuid: string], Body: never, Response: LCUTypes.LolHovercardHovercardUserInfo }
	},
	"/lol-hovercard/v1/friend-info-by-summoner/{summonerId}": {
		get: { Parameters: [summonerId: number], Body: never, Response: LCUTypes.LolHovercardHovercardUserInfo }
	},
	"/lol-inventory/v1/champSelectInventory": {
		get: { Parameters: [], Body: never, Response: string }
	},
	"/lol-inventory/v1/initial-configuration-complete": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-inventory/v1/inventory": {
		get: { Parameters: [params: { "inventoryTypes": string[] }], Body: never, Response: LCUTypes.LolInventoryInventoryItemWithPayload[] }
	},
	"/lol-inventory/v1/inventory/emotes": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolInventoryInventoryItemWithPayload[] }
	},
	"/lol-inventory/v1/inventoryWithF2P": {
		get: { Parameters: [params: { "inventoryTypes": string[] }], Body: never, Response: LCUTypes.LolInventoryInventoryItemWithPayload[] }
	},
	"/lol-inventory/v1/notifications/{inventoryType}": {
		get: { Parameters: [inventoryType: string], Body: never, Response: LCUTypes.LolInventoryInventoryNotification[] }
	},
	"/lol-inventory/v1/players/{puuid}/inventory": {
		get: { Parameters: [puuid: string, params: { "inventoryTypes": string[] }], Body: never, Response: LCUTypes.LolInventoryInventoryItemWithPayload[] }
	},
	"/lol-inventory/v1/signedInventory": {
		get: { Parameters: [params: { "inventoryTypes": string[] }], Body: never, Response: Record<string, string> }
	},
	"/lol-inventory/v1/signedInventoryCache": {
		get: { Parameters: [], Body: never, Response: Record<string, LCUTypes.LolInventoryInventoryCacheEntry> }
	},
	"/lol-inventory/v1/signedInventory/simple": {
		get: { Parameters: [params: { "inventoryTypes": string[], "queryParams"?: Record<string, string> }], Body: never, Response: string }
	},
	"/lol-inventory/v1/signedInventory/tournamentlogos": {
		get: { Parameters: [], Body: never, Response: Record<string, string> }
	},
	"/lol-inventory/v1/signedWallet": {
		get: { Parameters: [params: { "currencyTypes": string[] }], Body: never, Response: Record<string, string> }
	},
	"/lol-inventory/v1/signedWallet/{currencyType}": {
		get: { Parameters: [currencyType: string], Body: never, Response: Record<string, string> }
	},
	"/lol-inventory/v1/wallet": {
		get: { Parameters: [params: { "currencyTypes": string[] }], Body: never, Response: Record<string, number> }
	},
	"/lol-inventory/v1/wallet/{currencyType}": {
		get: { Parameters: [currencyType: string], Body: never, Response: Record<string, number> }
	},
	"/lol-inventory/v1/xbox-subscription-status": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolInventoryXboxSubscriptionStatus }
	},
	"/lol-inventory/v2/inventory/{inventoryType}": {
		get: { Parameters: [inventoryType: string], Body: never, Response: LCUTypes.LolInventoryInventoryItemWithPayload[] }
	},
	"/lol-item-sets/v1/item-sets/{summonerId}/sets": {
		get: { Parameters: [summonerId: number], Body: never, Response: LCUTypes.LolItemSetsItemSets }
		post: { Parameters: [summonerId: number], Body: LCUTypes.LolItemSetsItemSet, Response: void }
		put: { Parameters: [summonerId: number], Body: LCUTypes.LolItemSetsItemSets, Response: void }
	},
	"/lol-kickout/v1/notification": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolKickoutKickoutMessage }
	},
	"/lol-kr-playtime-reminder/v1/message": {
		get: { Parameters: [], Body: never, Response: string }
	},
	"/lol-kr-playtime-reminder/v1/playtime": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolKrPlaytimeReminderPlaytimeReminder }
	},
	"/lol-kr-shutdown-law/v1/custom-status": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolKrShutdownLawQueueShutdownStatus }
	},
	"/lol-kr-shutdown-law/v1/disabled-queues": {
		get: { Parameters: [], Body: never, Response: number[] }
	},
	"/lol-kr-shutdown-law/v1/is-enabled": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-kr-shutdown-law/v1/notification": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolKrShutdownLawShutdownLawNotification }
	},
	"/lol-kr-shutdown-law/v1/queue-status/{queue_id}": {
		get: { Parameters: [queue_id: number], Body: never, Response: LCUTypes.LolKrShutdownLawQueueShutdownStatus }
	},
	"/lol-kr-shutdown-law/v1/rating-screen": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolKrShutdownLawRatingScreenInfo }
	},
	"/lol-kr-shutdown-law/v1/status": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolKrShutdownLawAllQueueShutdownStatus }
	},
	"/lol-league-session/v1/league-session-token": {
		get: { Parameters: [], Body: never, Response: string }
	},
	"/lol-leaver-buster/v1/notifications": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolLeaverBusterLeaverBusterNotificationResource[] }
	},
	"/lol-leaver-buster/v1/ranked-restriction": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolLeaverBusterRankedRestrictionInfo }
	},
	"/lol-license-agreement/v1/agreement": {
		get: { Parameters: [], Body: never, Response: string }
	},
	"/lol-license-agreement/v1/agreements": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolLicenseAgreementLicenseAgreement[] }
	},
	"/lol-license-agreement/v1/all-agreements": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolLicenseAgreementLicenseAgreement[] }
	},
	"/lol-license-agreement/v1/privacy-policy": {
		get: { Parameters: [], Body: never, Response: string }
	},
	"/lol-license-agreement/v1/serve-location": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolLicenseAgreementLicenseServeLocation }
	},
	"/lol-loadouts/v1/loadouts-ready": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-loadouts/v4/loadouts/{loadoutId}": {
		get: { Parameters: [loadoutId: string], Body: never, Response: LCUTypes.LolLoadoutsScopedLoadout }
	},
	"/lol-loadouts/v4/loadouts/scope/account": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolLoadoutsScopedLoadout[] }
	},
	"/lol-loadouts/v4/loadouts/scope/{scope}/{scopeItemId}": {
		get: { Parameters: [scope: string, scopeItemId: number], Body: never, Response: LCUTypes.LolLoadoutsScopedLoadout[] }
	},
	"/lol-lobby-team-builder/champ-select/v1/bannable-champion-ids": {
		get: { Parameters: [], Body: never, Response: number[] }
	},
	"/lol-lobby-team-builder/champ-select/v1/current-champion": {
		get: { Parameters: [], Body: never, Response: number }
	},
	"/lol-lobby-team-builder/champ-select/v1/disabled-champion-ids": {
		get: { Parameters: [], Body: never, Response: number[] }
	},
	"/lol-lobby-team-builder/champ-select/v1/has-auto-assigned-smite": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-lobby-team-builder/champ-select/v1/implementation-active": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-lobby-team-builder/champ-select/v1/pickable-champion-ids": {
		get: { Parameters: [], Body: never, Response: number[] }
	},
	"/lol-lobby-team-builder/champ-select/v1/pickable-skin-ids": {
		get: { Parameters: [], Body: never, Response: number[] }
	},
	"/lol-lobby-team-builder/champ-select/v1/preferences": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolLobbyTeamBuilderChampionSelectPreferences }
	},
	"/lol-lobby-team-builder/champ-select/v1/sending-loadouts-gcos-enabled": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-lobby-team-builder/champ-select/v1/session": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolLobbyTeamBuilderChampSelectSession }
	},
	"/lol-lobby-team-builder/champ-select/v1/session/my-selection": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolLobbyTeamBuilderChampSelectPlayerSelection }
		patch: { Parameters: [], Body: LCUTypes.LolLobbyTeamBuilderChampSelectMySelection, Response: unknown }
	},
	"/lol-lobby-team-builder/champ-select/v1/session/obfuscated-summoner-ids": {
		get: { Parameters: [], Body: never, Response: number[] }
	},
	"/lol-lobby-team-builder/champ-select/v1/session/swaps": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolLobbyTeamBuilderChampSelectSwapContract[] }
	},
	"/lol-lobby-team-builder/champ-select/v1/session/swaps/{id}": {
		get: { Parameters: [id: number], Body: never, Response: LCUTypes.LolLobbyTeamBuilderChampSelectSwapContract }
	},
	"/lol-lobby-team-builder/champ-select/v1/session/timer": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolLobbyTeamBuilderChampSelectTimer }
	},
	"/lol-lobby-team-builder/champ-select/v1/session/trades": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolLobbyTeamBuilderChampSelectTradeContract[] }
	},
	"/lol-lobby-team-builder/champ-select/v1/session/trades/{id}": {
		get: { Parameters: [id: number], Body: never, Response: LCUTypes.LolLobbyTeamBuilderChampSelectTradeContract }
	},
	"/lol-lobby-team-builder/champ-select/v1/team-boost": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolLobbyTeamBuilderTeamBoost }
	},
	"/lol-lobby-team-builder/v1/matchmaking": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolLobbyTeamBuilderMatchmakingSearchResource }
	},
	"/lol-lobby/v1/autofill-displayed": {
		get: { Parameters: [], Body: never, Response: boolean }
		put: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-lobby/v1/custom-games": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolLobbyLobbyCustomGame[] }
	},
	"/lol-lobby/v1/custom-games/{id}": {
		get: { Parameters: [id: number], Body: never, Response: LCUTypes.LolLobbyLobbyCustomGame }
	},
	"/lol-lobby/v1/lobby/availability": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolLobbyQueueAvailability }
	},
	"/lol-lobby/v1/lobby/countdown": {
		get: { Parameters: [], Body: never, Response: number }
	},
	"/lol-lobby/v1/lobby/invitations": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolLobbyLobbyInvitation[] }
		post: { Parameters: [], Body: LCUTypes.LolLobbyLobbyInvitation, Response: LCUTypes.LolLobbyLobbyInvitation }
	},
	"/lol-lobby/v1/lobby/invitations/{id}": {
		get: { Parameters: [id: string], Body: never, Response: LCUTypes.LolLobbyLobbyInvitation }
	},
	"/lol-lobby/v1/lobby/members/localMember/player-slots": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolLobbyQuickPlayPresetSlotDto[] }
		put: { Parameters: [], Body: LCUTypes.LolLobbyQuickPlayPresetSlotDto[], Response: unknown }
	},
	"/lol-lobby/v1/lobby/tft-ranked-history": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-lobby/v1/parties/gamemode": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolLobbyGameModeDto }
	},
	"/lol-lobby/v1/parties/player": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolLobbyPlayerDto }
	},
	"/lol-lobby/v1/party-rewards": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolLobbyLobbyPartyRewards }
	},
	"/lol-lobby/v2/comms/members": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolLobbyPremadePartyDto }
	},
	"/lol-lobby/v2/comms/token": {
		get: { Parameters: [], Body: never, Response: string }
	},
	"/lol-lobby/v2/eligibility/game-select-eligibility-hash": {
		get: { Parameters: [], Body: never, Response: number }
	},
	"/lol-lobby/v2/eligibility/initial-configuration-complete": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-lobby/v2/lobby/custom/available-bots": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolLobbyLobbyBotChampion[] }
	},
	"/lol-lobby/v2/lobby/custom/bots-enabled": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-lobby/v2/lobby/invitations": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolLobbyLobbyInvitationDto[] }
		post: { Parameters: [], Body: LCUTypes.LolLobbyLobbyInvitationDto[], Response: LCUTypes.LolLobbyLobbyInvitationDto[] }
	},
	"/lol-lobby/v2/lobby/matchmaking/search-state": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolLobbyLobbyMatchmakingSearchResource }
	},
	"/lol-lobby/v2/lobby/members": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolLobbyLobbyParticipantDto[] }
	},
	"/lol-lobby/v2/notifications": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolLobbyLobbyNotification[] }
		post: { Parameters: [], Body: LCUTypes.LolLobbyLobbyNotification, Response: void }
	},
	"/lol-lobby/v2/party-active": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-lobby/v2/party/eog-status": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolLobbyPartyStatusDto }
	},
	"/lol-lobby/v2/received-invitations": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolLobbyReceivedInvitationDto[] }
	},
	"/lol-lobby/v2/registration-status": {
		get: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-login/v1/account-state": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolLoginAccountStateResource }
		post: { Parameters: [], Body: never, Response: void }
	},
	"/lol-login/v1/login-connection-state": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolLoginLoginConnectionState }
	},
	"/lol-login/v1/login-data-packet": {
		get: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-login/v1/login-in-game-creds": {
		get: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-login/v1/login-platform-credentials": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolLoginPlatformGeneratedCredentials }
	},
	"/lol-login/v1/login-queue-state": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolLoginLoginQueue }
	},
	"/lol-login/v1/wallet": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolLoginLoginSessionWallet }
	},
	"/lol-login/v2/league-session-init-token": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolLoginLeagueSessionTokenEnvelope }
	},
	"/lol-loot/v1/currency-configuration": {
		get: { Parameters: [], Body: never, Response: void }
	},
	"/lol-loot/v1/enabled": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-loot/v1/loot-grants": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolLootLootGrantNotification[] }
	},
	"/lol-loot/v1/loot-items": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolLootLootItem[] }
	},
	"/lol-loot/v1/loot-odds/{recipeName}": {
		get: { Parameters: [recipeName: string], Body: never, Response: LCUTypes.LolLootVerboseLootOddsResponse }
	},
	"/lol-loot/v1/mass-disenchant/configuration": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolLootMassDisenchantClientConfig }
	},
	"/lol-loot/v1/mass-disenchant-recipes": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LootLcdsRecipeClientDTO[] }
	},
	"/lol-loot/v1/milestones": {
		get: { Parameters: [params: { "minimizeResponse": boolean }], Body: never, Response: LCUTypes.LolLootLootMilestones[] }
	},
	"/lol-loot/v1/milestones/{lootMilestonesId}": {
		get: { Parameters: [lootMilestonesId: string], Body: never, Response: LCUTypes.LolLootLootMilestones }
	},
	"/lol-loot/v1/milestones/{lootMilestonesId}/claimProgress": {
		get: { Parameters: [lootMilestonesId: string], Body: never, Response: LCUTypes.LolLootLootMilestonesClaimResponse }
	},
	"/lol-loot/v1/milestones/{lootMilestonesId}/counter": {
		get: { Parameters: [lootMilestonesId: string], Body: never, Response: LCUTypes.LolLootLootMilestonesCounter }
	},
	"/lol-loot/v1/milestones/counters": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolLootLootMilestonesCounter[] }
	},
	"/lol-loot/v1/milestones/items": {
		get: { Parameters: [], Body: never, Response: string[] }
	},
	"/lol-loot/v1/player-display-categories": {
		get: { Parameters: [], Body: never, Response: string[] }
	},
	"/lol-loot/v1/player-loot": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolLootPlayerLoot[] }
	},
	"/lol-loot/v1/player-loot/{lootId}": {
		get: { Parameters: [lootId: string], Body: never, Response: LCUTypes.LolLootPlayerLoot }
	},
	"/lol-loot/v1/player-loot/{lootId}/context-menu": {
		get: { Parameters: [lootId: string], Body: never, Response: LCUTypes.LolLootContextMenu[] }
		post: { Parameters: [lootId: string], Body: never, Response: LCUTypes.LolLootContextMenu[] }
	},
	"/lol-loot/v1/player-loot-map": {
		get: { Parameters: [], Body: never, Response: Record<string, LCUTypes.LolLootPlayerLoot> }
	},
	"/lol-loot/v1/player-loot-notifications": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolLootPlayerLootNotification[] }
	},
	"/lol-loot/v1/ready": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-loot/v1/recipes/configuration": {
		get: { Parameters: [], Body: never, Response: void }
	},
	"/lol-loot/v1/recipes/initial-item/{lootId}": {
		get: { Parameters: [lootId: string], Body: never, Response: LCUTypes.LolLootRecipeWithMilestones[] }
		post: { Parameters: [lootId: string], Body: never, Response: LCUTypes.LolLootRecipeWithMilestones[] }
	},
	"/lol-loot/v2/player-loot-map": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolLootPlayerLootMap }
	},
	"/lol-loyalty/v1/status-notification": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolLoyaltyLoyaltyStatusNotification }
	},
	"/lol-maps/v1/map/{id}": {
		get: { Parameters: [id: number], Body: never, Response: LCUTypes.LolMapsMaps }
	},
	"/lol-maps/v1/maps": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolMapsMaps[] }
	},
	"/lol-maps/v2/map/{id}/{gameMode}": {
		get: { Parameters: [id: number, gameMode: string], Body: never, Response: LCUTypes.LolMapsMaps }
	},
	"/lol-maps/v2/map/{id}/{gameMode}/{gameMutator}": {
		get: { Parameters: [id: number, gameMode: string, gameMutator: string], Body: never, Response: LCUTypes.LolMapsMaps }
	},
	"/lol-maps/v2/maps": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolMapsMaps[] }
	},
	"/lol-marketing-preferences/v1/partition/{partitionKey}": {
		get: { Parameters: [partitionKey: string], Body: never, Response: Record<string, string> }
		post: { Parameters: [partitionKey: string], Body: Record<string, string>, Response: Record<string, string> }
	},
	"/lol-marketing-preferences/v1/ready": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-match-history/v1/delta": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolMatchHistoryMatchHistoryPlayerDelta }
	},
	"/lol-match-history/v1/game-timelines/{gameId}": {
		get: { Parameters: [gameId: number], Body: never, Response: LCUTypes.LolMatchHistoryMatchHistoryTimelineFrames }
	},
	"/lol-match-history/v1/games/{gameId}": {
		get: { Parameters: [gameId: number], Body: never, Response: LCUTypes.LolMatchHistoryMatchHistoryGame }
	},
	"/lol-match-history/v1/products/lol/{puuid}/matches": {
		get: { Parameters: [puuid: string, params?: { "begIndex"?: number, "endIndex"?: number }], Body: never, Response: LCUTypes.LolMatchHistoryMatchHistoryList }
	},
	"/lol-match-history/v1/products/lol/current-summoner/matches": {
		get: { Parameters: [params?: { "begIndex"?: number, "endIndex"?: number }], Body: never, Response: LCUTypes.LolMatchHistoryMatchHistoryList }
	},
	"/lol-match-history/v1/products/tft/{puuid}/matches": {
		get: { Parameters: [puuid: string, params?: { "begin"?: number, "count"?: number, "tag"?: string }], Body: never, Response: LCUTypes.LolMatchHistoryGAMHSMatchHistoryList }
	},
	"/lol-match-history/v1/recently-played-summoners": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolMatchHistoryRecentlyPlayedSummoner[] }
	},
	"/lol-match-history/v1/web-url": {
		get: { Parameters: [], Body: never, Response: string }
	},
	"/lol-match-history/v3/matchlist/account/{accountId}": {
		get: { Parameters: [accountId: number, params?: { "begIndex"?: number, "endIndex"?: number }], Body: never, Response: LCUTypes.LolMatchHistoryMatchHistoryList }
	},
	"/lol-matchmaking/v1/ready-check": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolMatchmakingMatchmakingReadyCheckResource }
	},
	"/lol-matchmaking/v1/search/errors": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolMatchmakingMatchmakingSearchErrorResource[] }
	},
	"/lol-matchmaking/v1/search/errors/{id}": {
		get: { Parameters: [id: number], Body: never, Response: LCUTypes.LolMatchmakingMatchmakingSearchErrorResource }
	},
	"/lol-missions/v1/data": {
		get: { Parameters: [], Body: never, Response: LCUTypes.PlayerMissionEligibilityData }
	},
	"/lol-missions/v1/missions": {
		get: { Parameters: [], Body: never, Response: LCUTypes.PlayerMissionDTO[] }
	},
	"/lol-missions/v1/series": {
		get: { Parameters: [], Body: never, Response: LCUTypes.SeriesDTO[] }
	},
	"/lol-npe-rewards/v1/challenges/progress": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolNpeRewardsChallengesProgress }
	},
	"/lol-npe-rewards/v1/level-rewards": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolNpeRewardsRewardSeries }
	},
	"/lol-npe-rewards/v1/level-rewards/state": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolNpeRewardsRewardSeriesState }
	},
	"/lol-npe-rewards/v1/login-rewards": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolNpeRewardsRewardSeries }
	},
	"/lol-npe-rewards/v1/login-rewards/state": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolNpeRewardsRewardSeriesState }
	},
	"/lol-npe-tutorial-path/v1/rewards/champ": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolNpeTutorialPathCollectionsChampion }
	},
	"/lol-npe-tutorial-path/v1/settings": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolNpeTutorialPathAccountSettingsTutorial }
		put: { Parameters: [], Body: LCUTypes.LolNpeTutorialPathAccountSettingsTutorial, Response: void }
	},
	"/lol-npe-tutorial-path/v1/tutorials": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolNpeTutorialPathTutorial[] }
	},
	"/lol-patch/v1/checking-enabled": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-patch/v1/environment": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolPatchChunkingPatcherEnvironment }
	},
	"/lol-patch/v1/game-version": {
		get: { Parameters: [], Body: never, Response: string }
	},
	"/lol-patch/v1/notifications": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolPatchNotification[] }
	},
	"/lol-patch/v1/products/league_of_legends/install-location": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolPatchInstallPaths }
	},
	"/lol-patch/v1/products/league_of_legends/state": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolPatchProductState }
	},
	"/lol-patch/v1/products/league_of_legends/supported-game-releases": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolPatchSupportedGameReleases }
	},
	"/lol-patch/v1/status": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolPatchStatus }
	},
	"/lol-perks/v1/currentpage": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolPerksPerkPageResource }
		put: { Parameters: [], Body: number, Response: unknown }
	},
	"/lol-perks/v1/inventory": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolPerksPlayerInventory }
	},
	"/lol-perks/v1/perks": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolPerksPerkUIPerk[] }
	},
	"/lol-perks/v1/perks/disabled": {
		get: { Parameters: [], Body: never, Response: number[] }
	},
	"/lol-perks/v1/perks/gameplay-updated": {
		get: { Parameters: [], Body: never, Response: number[] }
	},
	"/lol-perks/v1/quick-play-selections/champion/{championId}/position/{position}": {
		get: { Parameters: [championId: number, position: string], Body: never, Response: string }
	},
	"/lol-perks/v1/recommended-pages/champion/{championId}/position/{position}/map/{mapId}": {
		get: { Parameters: [championId: number, position: string, mapId: number], Body: never, Response: LCUTypes.LolPerksPerkUIRecommendedPage[] }
	},
	"/lol-perks/v1/recommended-pages-position/champion/{championId}": {
		get: { Parameters: [championId: number], Body: never, Response: string }
	},
	"/lol-perks/v1/rune-recommender-auto-select": {
		get: { Parameters: [], Body: never, Response: boolean }
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-perks/v1/settings": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolPerksUISettings }
		put: { Parameters: [], Body: LCUTypes.LolPerksUISettings, Response: unknown }
	},
	"/lol-perks/v1/show-auto-modified-pages-notification": {
		get: { Parameters: [], Body: never, Response: boolean }
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-perks/v1/styles": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolPerksPerkUIStyle[] }
	},
	"/lol-pft/v2/survey": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolPftPFTSurvey }
		post: { Parameters: [], Body: LCUTypes.LolPftPFTSurvey, Response: void }
	},
	"/lol-platform-config/v1/initial-configuration-complete": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-platform-config/v1/namespaces": {
		get: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-platform-config/v1/namespaces/{ns}": {
		get: { Parameters: [ns: string], Body: never, Response: unknown }
	},
	"/lol-platform-config/v1/namespaces/{ns}/{key}": {
		get: { Parameters: [ns: string, key: string], Body: never, Response: unknown }
	},
	"/lol-player-behavior/v1/ban": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolPlayerBehaviorBanNotification }
	},
	"/lol-player-behavior/v1/chat-restriction": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolPlayerBehaviorRestrictionNotification }
	},
	"/lol-player-behavior/v1/config": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolPlayerBehaviorPlayerBehaviorConfig }
	},
	"/lol-player-behavior/v1/ranked-restriction": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolPlayerBehaviorRestrictionNotification }
	},
	"/lol-player-behavior/v1/reform-card": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolPlayerBehaviorReformCard }
	},
	"/lol-player-behavior/v1/reporter-feedback": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolPlayerBehaviorReporterFeedback[] }
	},
	"/lol-player-behavior/v2/reform-card": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolPlayerBehaviorReformCardV2 }
	},
	"/lol-player-behavior/v2/reporter-feedback": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolPlayerBehaviorReporterFeedbackMessage[] }
	},
	"/lol-player-behavior/v3/reform-cards": {
		get: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-player-level-up/v1/level-up": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolPlayerLevelUpPlayerLevelUpEvent }
	},
	"/lol-player-level-up/v1/level-up-notifications/{pluginName}": {
		get: { Parameters: [pluginName: string], Body: never, Response: LCUTypes.LolPlayerLevelUpPlayerLevelUpEventAck }
		post: { Parameters: [pluginName: string], Body: LCUTypes.LolPlayerLevelUpPlayerLevelUpEventAck, Response: void }
	},
	"/lol-player-messaging/v1/celebration/notification": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolPlayerMessagingDynamicCelebrationMessagingNotificationResource }
	},
	"/lol-player-messaging/v1/notification": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolPlayerMessagingPlayerMessagingNotificationResource }
	},
	"/lol-player-name-transition/v1/modal-state": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolPlayerNameTransitionPlayerNameTransitionModal }
	},
	"/lol-player-preferences/v1/player-preferences-ready": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-player-preferences/v1/preference/{type}": {
		get: { Parameters: [type: string], Body: never, Response: unknown }
	},
	"/lol-player-report-sender/v1/in-game-reports": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolPlayerReportSenderPlayerReport[] }
		post: { Parameters: [], Body: LCUTypes.LolPlayerReportSenderPlayerReport, Response: unknown }
	},
	"/lol-pre-end-of-game/v1/currentSequenceEvent": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolPreEndOfGameSequenceEvent }
	},
	"/lol-premade-voice/v1/availability": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolPremadeVoiceVoiceAvailability }
	},
	"/lol-premade-voice/v1/capturedevices": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolPremadeVoiceDeviceResource[] }
		put: { Parameters: [], Body: string, Response: void }
	},
	"/lol-premade-voice/v1/first-experience": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolPremadeVoiceFirstExperience }
	},
	"/lol-premade-voice/v1/participant-records": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolPremadeVoicePremadeVoiceParticipantDto[] }
	},
	"/lol-premade-voice/v1/participants": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolPremadeVoicePremadeVoiceParticipantDto[] }
	},
	"/lol-premade-voice/v1/settings": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolPremadeVoiceSettingsResource }
	},
	"/lol-progression/v1/groups/{groupId}/configuration": {
		get: { Parameters: [groupId: string], Body: never, Response: LCUTypes.LolProgressionGroup }
	},
	"/lol-progression/v1/groups/{groupId}/instanceData": {
		get: { Parameters: [groupId: string], Body: never, Response: LCUTypes.LolProgressionEntityInstance }
	},
	"/lol-progression/v1/groups/configuration": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolProgressionGroup[] }
	},
	"/lol-progression/v1/ready": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-publishing-content/v1/listeners/allow-list/{region}": {
		get: { Parameters: [region: string], Body: never, Response: string[] }
	},
	"/lol-publishing-content/v1/listeners/client-data": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolPublishingContentClientData }
	},
	"/lol-publishing-content/v1/listeners/pubhub-config": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolPublishingContentPubHubConfig }
	},
	"/lol-publishing-content/v1/ready": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-publishing-content/v1/settings": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolPublishingContentPublishingSettings }
	},
	"/lol-publishing-content/v1/tft-hub-cards": {
		get: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-purchase-widget/v1/configuration": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolPurchaseWidgetPurchaseWidgetConfig }
	},
	"/lol-purchase-widget/v1/order-notifications": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolPurchaseWidgetOrderNotificationResource[] }
	},
	"/lol-purchase-widget/v1/purchasable-item": {
		get: { Parameters: [params: { "inventoryType": string, "itemId": number }], Body: never, Response: LCUTypes.LolPurchaseWidgetPurchasableItem }
	},
	"/lol-purchase-widget/v3/base-skin-line-data/{offerId}": {
		get: { Parameters: [offerId: string], Body: never, Response: LCUTypes.LolPurchaseWidgetBaseSkinLineDto }
	},
	"/lol-purchase-widget/v3/purchase-offer-order-statuses": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolPurchaseWidgetPurchaseOfferOrderStatuses }
	},
	"/lol-ranked/v1/apex-leagues/{queueType}/{tier}": {
		get: { Parameters: [queueType: LCUTypes.LolRankedLeagueQueueType, tier: string], Body: never, Response: LCUTypes.LolRankedLeagueLadderInfo }
	},
	"/lol-ranked/v1/challenger-ladders-enabled": {
		get: { Parameters: [], Body: never, Response: string[] }
	},
	"/lol-ranked/v1/current-lp-change-notification": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolRankedLcuLeagueNotification }
	},
	"/lol-ranked/v1/current-ranked-stats": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolRankedRankedStats }
	},
	"/lol-ranked/v1/eligibleTiers/queueType/{queueType}": {
		get: { Parameters: [queueType: LCUTypes.LolRankedLeagueQueueType], Body: never, Response: string[] }
	},
	"/lol-ranked/v1/eos-notifications": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolRankedEosNotificationResource[] }
	},
	"/lol-ranked/v1/eos-rewards": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolRankedEosRewardsConfig }
	},
	"/lol-ranked/v1/league-ladders/{puuid}": {
		get: { Parameters: [puuid: string], Body: never, Response: LCUTypes.LolRankedLeagueLadderInfo[] }
	},
	"/lol-ranked/v1/notifications": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolRankedLcuLeagueNotification[] }
	},
	"/lol-ranked/v1/ranked-stats/{puuid}": {
		get: { Parameters: [puuid: string], Body: never, Response: LCUTypes.LolRankedRankedStats }
	},
	"/lol-ranked/v1/rated-ladder/{queueType}": {
		get: { Parameters: [queueType: LCUTypes.LolRankedLeagueQueueType], Body: never, Response: LCUTypes.LolRankedRatedLadderInfo }
	},
	"/lol-ranked/v1/signed-ranked-stats": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolRankedSignedRankedStatsDTO }
	},
	"/lol-ranked/v1/social-leaderboard-ranked-queue-stats-for-puuids": {
		get: { Parameters: [params: { "queueType": LCUTypes.LolRankedLeagueQueueType, "puuids": string[] }], Body: never, Response: Record<string, LCUTypes.LolRankedSocialLeaderboardRankedQueueStats> }
	},
	"/lol-ranked/v1/splits-config": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolRankedRewardsInfo }
	},
	"/lol-ranked/v1/top-rated-ladders-enabled": {
		get: { Parameters: [], Body: never, Response: string[] }
	},
	"/lol-ranked/v2/tiers": {
		get: { Parameters: [params: { "summonerIds": number[], "queueTypes": LCUTypes.LolRankedLeagueQueueType[] }], Body: never, Response: LCUTypes.LolRankedParticipantTiers[] }
	},
	"/lol-regalia/v2/config": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolRegaliaRegaliaFrontendConfig }
	},
	"/lol-regalia/v2/current-summoner/regalia": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolRegaliaRegaliaWithPreferences }
		put: { Parameters: [], Body: LCUTypes.LolRegaliaRegaliaPreferences, Response: LCUTypes.LolRegaliaRegaliaWithPreferences }
	},
	"/lol-regalia/v2/summoners/{summonerId}/queues/{queue}/positions/{position}/regalia": {
		get: { Parameters: [summonerId: number, queue: string, position: string], Body: never, Response: LCUTypes.LolRegaliaRegalia }
	},
	"/lol-regalia/v2/summoners/{summonerId}/queues/{queue}/regalia": {
		get: { Parameters: [summonerId: number, queue: string], Body: never, Response: LCUTypes.LolRegaliaRegalia }
	},
	"/lol-regalia/v2/summoners/{summonerId}/regalia": {
		get: { Parameters: [summonerId: number, params: { "hovercard": boolean }], Body: never, Response: LCUTypes.LolRegaliaRegalia }
	},
	"/lol-regalia/v2/summoners/{summonerId}/regalia/async": {
		get: { Parameters: [summonerId: number], Body: never, Response: LCUTypes.LolRegaliaRegaliaAsync }
	},
	"/lol-regalia/v3/inventory/{inventoryType}": {
		get: { Parameters: [inventoryType: string], Body: never, Response: Record<string, LCUTypes.LolRegaliaRegaliaInventoryItem> }
	},
	"/lol-regalia/v3/summoners/{summonerId}/regalia": {
		get: { Parameters: [summonerId: number], Body: never, Response: LCUTypes.LolRegaliaRegalia }
	},
	"/lol-replays/v1/configuration": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolReplaysReplaysConfiguration }
	},
	"/lol-replays/v1/metadata/{gameId}": {
		get: { Parameters: [gameId: number], Body: never, Response: LCUTypes.LolReplaysReplayMetadata }
	},
	"/lol-replays/v1/rofls/path": {
		get: { Parameters: [], Body: never, Response: string }
	},
	"/lol-replays/v1/rofls/path/default": {
		get: { Parameters: [], Body: never, Response: string }
	},
	"/lol-rewards/v1/grants": {
		get: { Parameters: [params?: { "status"?: LCUTypes.LolRewardsGrantStatus }], Body: never, Response: LCUTypes.LolRewardsRewardGrant[] }
	},
	"/lol-rewards/v1/groups": {
		get: { Parameters: [params?: { "types"?: string[] }], Body: never, Response: LCUTypes.LolRewardsSvcRewardGroup[] }
	},
	"/lol-rms/v1/champion-mastery-leaveup-update": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolRiotMessagingServiceChampionMasteryLevelUp[] }
	},
	"/lol-rso-auth/configuration/v3/ready-state": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolRsoAuthRSOConfigReadyState }
	},
	"/lol-rso-auth/v1/authorization/access-token": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolRsoAuthAccessToken }
	},
	"/lol-rso-auth/v1/authorization/error": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolRsoAuthAuthError }
	},
	"/lol-rso-auth/v1/authorization/id-token": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolRsoAuthIdToken }
	},
	"/lol-rso-auth/v1/authorization/userinfo": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolRsoAuthUserInfo }
		post: { Parameters: [], Body: never, Response: LCUTypes.LolRsoAuthUserInfo }
	},
	"/lol-rso-auth/v1/status/{platformId}": {
		get: { Parameters: [platformId: string], Body: never, Response: LCUTypes.LolRsoAuthRegionStatus }
	},
	"/lol-seasons/v1/season/LOL/current-split-seasons": {
		get: { Parameters: [], Body: never, Response: number[] }
	},
	"/lol-seasons/v1/season/product/{product}": {
		get: { Parameters: [product: string], Body: never, Response: LCUTypes.LolSeasonsAllSeasonsProduct }
	},
	"/lol-seasons/v1/season/recent-final-split": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolSeasonsAllSeasonsProduct }
	},
	"/lol-service-status/v1/lcu-status": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolServiceStatusServiceStatusResource }
	},
	"/lol-service-status/v1/ticker-messages": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolServiceStatusTickerMessage[] }
	},
	"/lol-settings/v1/account/{category}": {
		get: { Parameters: [category: string], Body: never, Response: unknown }
		put: { Parameters: [category: string], Body: LCUTypes.LolSettingsSettingCategory, Response: unknown }
		patch: { Parameters: [category: string], Body: LCUTypes.LolSettingsSettingCategory, Response: unknown }
	},
	"/lol-settings/v1/account/didreset": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-settings/v1/local/{category}": {
		get: { Parameters: [category: string], Body: never, Response: unknown }
		patch: { Parameters: [category: string], Body: LCUTypes.LolSettingsSettingCategory, Response: unknown }
	},
	"/lol-settings/v2/account/{ppType}/{category}": {
		get: { Parameters: [ppType: string, category: string], Body: never, Response: unknown }
		put: { Parameters: [ppType: string, category: string], Body: LCUTypes.LolSettingsSettingCategory, Response: unknown }
		patch: { Parameters: [ppType: string, category: string], Body: LCUTypes.LolSettingsSettingCategory, Response: unknown }
	},
	"/lol-settings/v2/config": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolSettingsSettingsConfig }
	},
	"/lol-settings/v2/didreset/{ppType}": {
		get: { Parameters: [ppType: string], Body: never, Response: boolean }
	},
	"/lol-settings/v2/local/{category}": {
		get: { Parameters: [category: string], Body: never, Response: unknown }
		patch: { Parameters: [category: string], Body: LCUTypes.LolSettingsSettingCategory, Response: unknown }
	},
	"/lol-settings/v2/ready": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-shutdown/v1/notification": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolShutdownShutdownNotification }
	},
	"/lol-simple-dialog-messages/v1/messages": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolSimpleDialogMessagesMessage[] }
		post: { Parameters: [], Body: LCUTypes.LolSimpleDialogMessagesLocalMessageRequest, Response: unknown }
	},
	"/lol-social-leaderboard/v1/leaderboard-next-update-time": {
		get: { Parameters: [params?: { "queueType"?: LCUTypes.LolSocialLeaderboardLeagueQueueType }], Body: never, Response: number }
	},
	"/lol-social-leaderboard/v1/social-leaderboard-data": {
		get: { Parameters: [params?: { "queueType"?: LCUTypes.LolSocialLeaderboardLeagueQueueType }], Body: never, Response: LCUTypes.LolSocialLeaderboardSocialLeaderboardData }
	},
	"/lol-spectator/v1/spectate": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolSpectatorSpectateGameInfo }
	},
	"/lol-statstones/v1/eog-notifications/{gameId}": {
		get: { Parameters: [gameId: number], Body: never, Response: LCUTypes.LolStatstonesEogNotificationEnvelope }
	},
	"/lol-statstones/v1/featured-champion-statstones/{championItemId}": {
		get: { Parameters: [championItemId: number], Body: never, Response: LCUTypes.LolStatstonesStatstone[] }
	},
	"/lol-statstones/v1/profile-summary/{puuid}": {
		get: { Parameters: [puuid: string], Body: never, Response: LCUTypes.LolStatstonesProfileStatstoneSummary[] }
	},
	"/lol-statstones/v1/statstone/{contentId}/owned": {
		get: { Parameters: [contentId: string], Body: never, Response: boolean }
	},
	"/lol-statstones/v1/statstones-enabled-queue-ids": {
		get: { Parameters: [], Body: never, Response: number[] }
	},
	"/lol-statstones/v2/player-statstones-self/{championItemId}": {
		get: { Parameters: [championItemId: number], Body: never, Response: LCUTypes.LolStatstonesStatstoneSet[] }
	},
	"/lol-statstones/v2/player-summary-self": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolStatstonesChampionStatstoneSummary[] }
	},
	"/lol-store/v1/alias-change-notifications": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolStoreAliasChangeNotificationResource[] }
	},
	"/lol-store/v1/{pageType}": {
		get: { Parameters: [pageType: string], Body: never, Response: unknown }
	},
	"/lol-store/v1/catalog": {
		get: { Parameters: [params?: { "inventoryType"?: string[], "itemId"?: number[] }], Body: never, Response: LCUTypes.LolStoreCatalogItem[] }
	},
	"/lol-store/v1/catalogByInstanceIds": {
		get: { Parameters: [params: { "instanceIds": string[] }], Body: never, Response: LCUTypes.LolStoreCatalogItem[] }
	},
	"/lol-store/v1/catalog/{inventoryType}": {
		get: { Parameters: [inventoryType: string, params: { "itemIds": number[] }], Body: never, Response: LCUTypes.LolStoreCatalogItem[] }
	},
	"/lol-store/v1/catalog/items/skip-cache": {
		get: { Parameters: [params: { "catalogItemKeys": LCUTypes.LolStoreItemKey[] }], Body: never, Response: LCUTypes.LolStoreCatalogItem[] }
	},
	"/lol-store/v1/catalog/sales": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolStoreItemSale[] }
	},
	"/lol-store/v1/getStoreUrl": {
		get: { Parameters: [], Body: never, Response: string }
	},
	"/lol-store/v1/giftablefriends": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolStoreGiftingFriend[] }
	},
	"/lol-store/v1/itemKeysFromInstanceIds": {
		get: { Parameters: [params: { "instanceIds": string[] }], Body: never, Response: Record<string, LCUTypes.LolStoreItemKey> }
	},
	"/lol-store/v1/itemKeysFromOfferIds": {
		get: { Parameters: [params: { "offerIds": string[] }], Body: never, Response: Record<string, LCUTypes.LolStoreItemKey> }
	},
	"/lol-store/v1/lastPage": {
		get: { Parameters: [], Body: never, Response: string }
		post: { Parameters: [], Body: string, Response: void }
	},
	"/lol-store/v1/offers": {
		get: { Parameters: [params?: { "inventoryTypeUUIDs"?: string[] }], Body: never, Response: LCUTypes.LolStoreCapOffer[] }
	},
	"/lol-store/v1/offers/{offerId}": {
		get: { Parameters: [offerId: string], Body: never, Response: LCUTypes.LolStoreCapOffer }
	},
	"/lol-store/v1/order-notifications": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolStoreOrderNotificationResource[] }
	},
	"/lol-store/v1/order-notifications/{id}": {
		get: { Parameters: [id: number], Body: never, Response: LCUTypes.LolStoreOrderNotificationResource }
	},
	"/lol-store/v1/paymentDetails": {
		get: { Parameters: [params: { "action": string, "giftRecipientAccountId"?: number, "giftMessage"?: string }], Body: never, Response: unknown }
	},
	"/lol-store/v1/skins/{skinId}": {
		get: { Parameters: [skinId: number], Body: never, Response: LCUTypes.LolStoreCatalogItem }
	},
	"/lol-store/v1/status": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolStoreStoreStatus }
	},
	"/lol-store/v1/store-ready": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-store/v2/offers": {
		get: { Parameters: [params?: { "typeId"?: string }], Body: never, Response: LCUTypes.LolStoreCapOffer[] }
	},
	"/lol-suggested-players/v1/suggested-players": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolSuggestedPlayersSuggestedPlayersSuggestedPlayer[] }
	},
	"/lol-summoner/v1/alias/lookup": {
		get: { Parameters: [params: { "gameName": string, "tagLine": string }], Body: never, Response: LCUTypes.LolSummonerAliasLookupResponse }
	},
	"/lol-summoner/v1/check-name-availability/{name}": {
		get: { Parameters: [name: string], Body: never, Response: boolean }
	},
	"/lol-summoner/v1/check-name-availability-new-summoners/{name}": {
		get: { Parameters: [name: string], Body: never, Response: boolean }
	},
	"/lol-summoner/v1/current-summoner": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolSummonerSummoner }
	},
	"/lol-summoner/v1/current-summoner/account-and-summoner-ids": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolSummonerAccountIdAndSummonerId }
	},
	"/lol-summoner/v1/current-summoner/autofill": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolSummonerAutoFillQueueDto[] }
	},
	"/lol-summoner/v1/current-summoner/jwt": {
		get: { Parameters: [], Body: never, Response: string }
	},
	"/lol-summoner/v1/current-summoner/profile-privacy": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolSummonerProfilePrivacy }
		put: { Parameters: [], Body: LCUTypes.LolSummonerProfilePrivacySetting, Response: unknown }
	},
	"/lol-summoner/v1/current-summoner/rerollPoints": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolSummonerSummonerRerollPoints }
	},
	"/lol-summoner/v1/current-summoner/summoner-profile": {
		get: { Parameters: [], Body: never, Response: unknown }
		post: { Parameters: [], Body: LCUTypes.LolSummonerSummonerProfileUpdate, Response: unknown }
	},
	"/lol-summoner/v1/player-alias-state": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolSummonerPlayerNameState }
	},
	"/lol-summoner/v1/player-name-mode": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolSummonerPlayerNameMode }
	},
	"/lol-summoner/v1/profile-privacy-enabled": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolSummonerProfilePrivacyEnabledState }
	},
	"/lol-summoner/v1/riot-alias-free-eligibility": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-summoner/v1/riot-alias-purchase-eligibility": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-summoner/v1/status": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolSummonerStatus }
	},
	"/lol-summoner/v1/summoner-profile": {
		get: { Parameters: [params: { "puuid": string }], Body: never, Response: unknown }
	},
	"/lol-summoner/v1/summoner-requests-ready": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-summoner/v1/summoners": {
		get: { Parameters: [params: { "name": string }], Body: never, Response: LCUTypes.LolSummonerSummoner }
		post: { Parameters: [], Body: LCUTypes.LolSummonerSummonerRequestedName, Response: LCUTypes.LolSummonerSummoner }
	},
	"/lol-summoner/v1/summoners/{id}": {
		get: { Parameters: [id: number], Body: never, Response: LCUTypes.LolSummonerSummoner }
	},
	"/lol-summoner/v1/summoners-by-puuid-cached/{puuid}": {
		get: { Parameters: [puuid: string], Body: never, Response: LCUTypes.LolSummonerSummoner }
	},
	"/lol-summoner/v2/summoner-icons": {
		get: { Parameters: [params: { "ids": number[] }], Body: never, Response: LCUTypes.LolSummonerSummonerIdAndIcon[] }
	},
	"/lol-summoner/v2/summoner-names": {
		get: { Parameters: [params: { "ids": number[] }], Body: never, Response: LCUTypes.LolSummonerSummonerIdAndName[] }
	},
	"/lol-summoner/v2/summoners": {
		get: { Parameters: [params?: { "ids"?: number[] }], Body: never, Response: LCUTypes.LolSummonerSummoner[] }
	},
	"/lol-summoner/v2/summoners/puuid/{puuid}": {
		get: { Parameters: [puuid: string], Body: never, Response: LCUTypes.LolSummonerSummoner }
	},
	"/lol-tastes/v1/ready": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-tastes/v1/skins-model": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolTastesDataModelResponse }
	},
	"/lol-tastes/v1/tft-overview-model": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolTastesDataModelResponse }
	},
	"/lol-tft-pass/v1/battle-pass": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolTftPassTftPaidBattlepass }
	},
	"/lol-tft-pass/v1/enabled": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-tft-pass/v1/event-pass": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolTftPassTftPaidBattlepass }
	},
	"/lol-tft-pass/v1/reward-notification": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolTftPassTFTPassRewardNotification }
	},
	"/lol-tft-team-planner/v1/config": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolTftTeamPlannerTFTTeamPlannerConfig }
	},
	"/lol-tft-team-planner/v1/ftue/hasViewed": {
		get: { Parameters: [], Body: never, Response: boolean }
		patch: { Parameters: [], Body: boolean, Response: unknown }
	},
	"/lol-tft-team-planner/v1/team/local": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolTftTeamPlannerTeamSettings }
	},
	"/lol-tft-team-planner/v1/team/reminders": {
		get: { Parameters: [], Body: never, Response: boolean }
		patch: { Parameters: [], Body: boolean, Response: unknown }
	},
	"/lol-tft-troves/v1/banners": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolTftTrovesTrovesBanner[] }
	},
	"/lol-tft-troves/v1/config": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolTftTrovesTroves }
	},
	"/lol-tft-troves/v1/loot-odds/{dropTableId}": {
		get: { Parameters: [dropTableId: string], Body: never, Response: LCUTypes.LolTftTrovesVerboseLootOddsResponse }
	},
	"/lol-tft-troves/v1/status-notifications": {
		get: { Parameters: [], Body: never, Response: void }
	},
	"/lol-tft/v1/tft/battlePassHub": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolTftLolTftBattlePassHub }
	},
	"/lol-tft/v1/tft/directToHub": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-tft/v1/tft/events": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolTftLolTftEvents }
	},
	"/lol-tft/v1/tft/homeHub": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolTftLolTftHomeHub }
	},
	"/lol-tft/v1/tft/newsHub": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolTftLolTftNewsHub }
	},
	"/lol-tft/v1/tft/promoButtons": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolTftLolTftPromoButtons }
	},
	"/lol-tft/v2/tft/battlepass": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolMissionsTftPaidBattlepass }
	},
	"/lol-trophies/v1/current-summoner/trophies/profile": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolTrophiesTrophyProfileData }
	},
	"/lol-trophies/v1/players/{puuid}/trophies/profile": {
		get: { Parameters: [puuid: string], Body: never, Response: LCUTypes.LolTrophiesTrophyProfileData }
	},
	"/lol-yourshop/v1/has-permissions": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-yourshop/v1/modal": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-yourshop/v1/offers": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolYourshopUIOffer[] }
	},
	"/lol-yourshop/v1/ready": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-yourshop/v1/status": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolYourshopUIStatus }
	},
	"/lol-yourshop/v1/themed": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/memory/v1/fe-processes-ready": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/patcher/v1/notifications": {
		get: { Parameters: [], Body: never, Response: LCUTypes.PatcherNotification[] }
		post: { Parameters: [], Body: LCUTypes.PatcherNotificationId, Response: void }
	},
	"/patcher/v1/p2p/status": {
		get: { Parameters: [], Body: never, Response: LCUTypes.PatcherP2PStatus }
		patch: { Parameters: [], Body: LCUTypes.PatcherP2PStatusUpdate, Response: unknown }
	},
	"/patcher/v1/products": {
		get: { Parameters: [], Body: never, Response: string[] }
	},
	"/patcher/v1/products/{product-id}/paths": {
		get: { Parameters: [product_id: string], Body: never, Response: Record<string, string> }
	},
	"/patcher/v1/products/{product-id}/state": {
		get: { Parameters: [product_id: string], Body: never, Response: LCUTypes.PatcherProductState }
	},
	"/patcher/v1/products/{product-id}/tags": {
		get: { Parameters: [product_id: string], Body: never, Response: Record<string, string> }
	},
	"/patcher/v1/status": {
		get: { Parameters: [], Body: never, Response: LCUTypes.PatcherStatus }
	},
	"/performance/v1/memory": {
		get: { Parameters: [], Body: never, Response: unknown }
	},
	"/performance/v1/report": {
		get: { Parameters: [], Body: never, Response: unknown[] }
	},
	"/performance/v1/system-info": {
		get: { Parameters: [params?: { "full"?: number }], Body: never, Response: unknown }
	},
	"/player-notifications/v1/config": {
		get: { Parameters: [], Body: never, Response: LCUTypes.PlayerNotificationsPlayerNotificationConfigResource }
		put: { Parameters: [], Body: LCUTypes.PlayerNotificationsPlayerNotificationConfigResource, Response: LCUTypes.PlayerNotificationsPlayerNotificationConfigResource }
	},
	"/player-notifications/v1/notifications": {
		get: { Parameters: [], Body: never, Response: LCUTypes.PlayerNotificationsPlayerNotificationResource[] }
		post: { Parameters: [], Body: LCUTypes.PlayerNotificationsPlayerNotificationResource, Response: LCUTypes.PlayerNotificationsPlayerNotificationResource }
	},
	"/plugin-manager/v1/external-plugins/availability": {
		get: { Parameters: [], Body: never, Response: LCUTypes.ExternalPluginsResource }
	},
	"/plugin-manager/v1/status": {
		get: { Parameters: [], Body: never, Response: LCUTypes.PluginManagerResource }
	},
	"/plugin-manager/v2/descriptions": {
		get: { Parameters: [], Body: never, Response: LCUTypes.PluginDescriptionResource[] }
	},
	"/plugin-manager/v2/descriptions/{plugin}": {
		get: { Parameters: [plugin: string], Body: never, Response: LCUTypes.PluginDescriptionResource }
	},
	"/plugin-manager/v2/plugins": {
		get: { Parameters: [], Body: never, Response: LCUTypes.PluginResource[] }
	},
	"/plugin-manager/v2/plugins/{plugin}": {
		get: { Parameters: [plugin: string], Body: never, Response: LCUTypes.PluginResource }
	},
	"/plugin-manager/v3/plugins-manifest": {
		get: { Parameters: [], Body: never, Response: unknown }
	},
	"/process-control/v1/process": {
		get: { Parameters: [], Body: never, Response: LCUTypes.ProcessControlProcess }
	},
	"/riot-messaging-service/v1/message/{a}": {
		get: { Parameters: [a: string], Body: never, Response: LCUTypes.RmsMessage }
	},
	"/riot-messaging-service/v1/message/{a}/{b}": {
		get: { Parameters: [a: string, b: string], Body: never, Response: LCUTypes.RmsMessage }
	},
	"/riot-messaging-service/v1/message/{a}/{b}/{c}": {
		get: { Parameters: [a: string, b: string, c: string], Body: never, Response: LCUTypes.RmsMessage }
	},
	"/riot-messaging-service/v1/message/{a}/{b}/{c}/{d}": {
		get: { Parameters: [a: string, b: string, c: string, d: string], Body: never, Response: LCUTypes.RmsMessage }
	},
	"/riot-messaging-service/v1/message/{a}/{b}/{c}/{d}/{e}": {
		get: { Parameters: [a: string, b: string, c: string, d: string, e: string], Body: never, Response: LCUTypes.RmsMessage }
	},
	"/riot-messaging-service/v1/message/{a}/{b}/{c}/{d}/{e}/{f}": {
		get: { Parameters: [a: string, b: string, c: string, d: string, e: string, f: string], Body: never, Response: LCUTypes.RmsMessage }
	},
	"/riot-messaging-service/v1/state": {
		get: { Parameters: [], Body: never, Response: LCUTypes.RiotMessagingServiceState }
	},
	"/riotclient/app-name": {
		get: { Parameters: [], Body: never, Response: string }
	},
	"/riotclient/app-port": {
		get: { Parameters: [], Body: never, Response: number }
	},
	"/riotclient/auth-token": {
		get: { Parameters: [], Body: never, Response: string }
	},
	"/riotclient/command-line-args": {
		get: { Parameters: [], Body: never, Response: string[] }
	},
	"/riotclient/machine-id": {
		get: { Parameters: [], Body: never, Response: string }
	},
	"/riotclient/region-locale": {
		get: { Parameters: [], Body: never, Response: LCUTypes.LolL10nRegionLocale }
	},
	"/riotclient/system-info/v1/basic-info": {
		get: { Parameters: [], Body: never, Response: LCUTypes.basicSystemInfo }
	},
	"/riotclient/trace": {
		get: { Parameters: [], Body: never, Response: unknown }
	},
	"/riotclient/ux-crash-count": {
		get: { Parameters: [], Body: never, Response: number }
	},
	"/riotclient/ux-state": {
		get: { Parameters: [], Body: never, Response: string }
	},
	"/riotclient/v1/crash-reporting/environment": {
		get: { Parameters: [], Body: never, Response: LCUTypes.CrashReportingEnvironment }
		put: { Parameters: [], Body: LCUTypes.CrashReportingEnvironment, Response: void }
	},
	"/riotclient/zoom-scale": {
		get: { Parameters: [], Body: never, Response: number }
		post: { Parameters: [], Body: number, Response: void }
	},
	"/sanitizer/v1/status": {
		get: { Parameters: [], Body: never, Response: LCUTypes.SanitizerSanitizerStatus }
	},
	"/system/v1/builds": {
		get: { Parameters: [], Body: never, Response: LCUTypes.BuildInfo }
	},
	"/telemetry/v1/application-start-time": {
		get: { Parameters: [], Body: never, Response: number }
	},
	"/tracing/v1/trace/payloads/enabled": {
		get: { Parameters: [], Body: never, Response: boolean }
	},
	"/Help": {
		post: { Parameters: [params?: { "target"?: string, "format"?: LCUTypes.RemotingHelpFormat }], Body: never, Response: unknown }
	},
	"/async/v1/status/{asyncToken}": {
		get: { Parameters: [asyncToken: number], Body: never, Response: unknown }
		delete: { Parameters: [asyncToken: number], Body: never, Response: unknown }
	},
	"/async/v1/result/{asyncToken}": {
		get: { Parameters: [asyncToken: number], Body: never, Response: unknown }
	},
	"/LoggingGetEntries": {
		post: { Parameters: [], Body: never, Response: LCUTypes.LogEvent[] }
	},
	"/LoggingMetrics": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/LoggingMetricsMetadata": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/LoggingStart": {
		post: { Parameters: [params?: { "buffered"?: boolean, "severity"?: LCUTypes.LogSeverityLevels }], Body: never, Response: void }
	},
	"/LoggingStop": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/lol-champ-select-legacy/v1/session/actions/{id}": {
		patch: { Parameters: [id: number], Body: LCUTypes.LolChampSelectLegacyChampSelectAction, Response: unknown }
	},
	"/lol-champ-select/v1/session/actions/{id}": {
		patch: { Parameters: [id: number], Body: LCUTypes.LolChampSelectChampSelectAction, Response: unknown }
	},
	"/lol-cosmetics/v1/recent/{type}": {
		patch: { Parameters: [type: string], Body: string[], Response: unknown }
	},
	"/lol-lobby-team-builder/champ-select/v1/session/actions/{id}": {
		patch: { Parameters: [id: number], Body: LCUTypes.LolLobbyTeamBuilderChampSelectAction, Response: unknown }
	},
	"/lol-npe-tutorial-path/v1/tutorials/init": {
		patch: { Parameters: [], Body: never, Response: void }
	},
	"/lol-rewards/v1/grants/{grantId}/view": {
		patch: { Parameters: [grantId: string], Body: never, Response: void }
	},
	"/telemetry/v3/slis/add-bool-diagnostic": {
		patch: { Parameters: [], Body: LCUTypes.SLIBoolDiagnostic, Response: void }
	},
	"/telemetry/v3/slis/add-double-diagnostic": {
		patch: { Parameters: [], Body: LCUTypes.SLIDoubleDiagnostic, Response: void }
	},
	"/telemetry/v3/slis/add-int-diagnostic": {
		patch: { Parameters: [], Body: LCUTypes.SLIIntDiagnostic, Response: void }
	},
	"/telemetry/v3/slis/add-label": {
		patch: { Parameters: [], Body: LCUTypes.SLILabel, Response: void }
	},
	"/telemetry/v3/slis/add-string-diagnostic": {
		patch: { Parameters: [], Body: LCUTypes.SLIStringDiagnostic, Response: void }
	},
	"/deep-links/v1/launch-lor-link": {
		post: { Parameters: [], Body: never, Response: string }
	},
	"/lol-account-verification/v1/confirmActivationPin": {
		post: { Parameters: [], Body: LCUTypes.LolAccountVerificationConfirmActivationPinRequest, Response: void }
	},
	"/lol-account-verification/v1/confirmDeactivationPin": {
		post: { Parameters: [], Body: LCUTypes.LolAccountVerificationConfirmDeactivationPinRequest, Response: void }
	},
	"/lol-account-verification/v1/sendActivationPin": {
		post: { Parameters: [], Body: LCUTypes.LolAccountVerificationSendActivationPinRequest, Response: void }
	},
	"/lol-account-verification/v1/sendDeactivationPin": {
		post: { Parameters: [], Body: void, Response: void }
	},
	"/lol-career-stats/v1/champion-stats-percentiles": {
		post: { Parameters: [], Body: LCUTypes.LolCareerStatsStatsQueryRequest[], Response: LCUTypes.LolCareerStatsStatisticsPercentilesResponse[] }
	},
	"/lol-career-stats/v1/position-stats-percentiles": {
		post: { Parameters: [], Body: LCUTypes.LolCareerStatsPositionStatsQueryRequest[], Response: LCUTypes.LolCareerStatsStatisticsPercentilesResponse[] }
	},
	"/lol-challenges/v1/ack-challenge-update/{id}": {
		post: { Parameters: [id: number], Body: never, Response: void }
	},
	"/lol-challenges/v1/update-player-preferences": {
		post: { Parameters: [], Body: LCUTypes.LolChallengesChallengesPlayerPreferences, Response: void }
	},
	"/lol-champ-select-legacy/v1/battle-training/launch": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-champ-select-legacy/v1/session/actions/{id}/complete": {
		post: { Parameters: [id: number], Body: never, Response: unknown }
	},
	"/lol-champ-select-legacy/v1/session/my-selection/reroll": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-champ-select-legacy/v1/session/trades/{id}/accept": {
		post: { Parameters: [id: number], Body: never, Response: unknown }
	},
	"/lol-champ-select-legacy/v1/session/trades/{id}/cancel": {
		post: { Parameters: [id: number], Body: never, Response: unknown }
	},
	"/lol-champ-select-legacy/v1/session/trades/{id}/decline": {
		post: { Parameters: [id: number], Body: never, Response: unknown }
	},
	"/lol-champ-select-legacy/v1/session/trades/{id}/request": {
		post: { Parameters: [id: number], Body: never, Response: LCUTypes.LolChampSelectLegacyChampSelectTradeContract }
	},
	"/lol-champ-select/v1/battle-training/launch": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-champ-select/v1/ongoing-swap/{id}/clear": {
		post: { Parameters: [id: number], Body: never, Response: unknown }
	},
	"/lol-champ-select/v1/ongoing-trade/{id}/clear": {
		post: { Parameters: [id: number], Body: never, Response: unknown }
	},
	"/lol-champ-select/v1/retrieve-latest-game-dto": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-champ-select/v1/session/actions/{id}/complete": {
		post: { Parameters: [id: number], Body: never, Response: unknown }
	},
	"/lol-champ-select/v1/session/bench/swap/{championId}": {
		post: { Parameters: [championId: number], Body: never, Response: unknown }
	},
	"/lol-champ-select/v1/session/my-selection/reroll": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-champ-select/v1/session/simple-inventory": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-champ-select/v1/session/swaps/{id}/accept": {
		post: { Parameters: [id: number], Body: never, Response: unknown }
	},
	"/lol-champ-select/v1/session/swaps/{id}/cancel": {
		post: { Parameters: [id: number], Body: never, Response: unknown }
	},
	"/lol-champ-select/v1/session/swaps/{id}/decline": {
		post: { Parameters: [id: number], Body: never, Response: unknown }
	},
	"/lol-champ-select/v1/session/swaps/{id}/request": {
		post: { Parameters: [id: number], Body: never, Response: LCUTypes.LolChampSelectChampSelectSwapContract }
	},
	"/lol-champ-select/v1/session/trades/{id}/accept": {
		post: { Parameters: [id: number], Body: never, Response: unknown }
	},
	"/lol-champ-select/v1/session/trades/{id}/cancel": {
		post: { Parameters: [id: number], Body: never, Response: unknown }
	},
	"/lol-champ-select/v1/session/trades/{id}/decline": {
		post: { Parameters: [id: number], Body: never, Response: unknown }
	},
	"/lol-champ-select/v1/session/trades/{id}/request": {
		post: { Parameters: [id: number], Body: never, Response: LCUTypes.LolChampSelectChampSelectTradeContract }
	},
	"/lol-champ-select/v1/team-boost/purchase": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-champ-select/v1/toggle-favorite/{championId}/{position}": {
		post: { Parameters: [championId: number, position: string], Body: never, Response: unknown }
	},
	"/lol-champ-select/v1/toggle-player-muted": {
		post: { Parameters: [], Body: LCUTypes.LolChampSelectMutedPlayerInfo, Response: unknown }
	},
	"/lol-chat/v1/conversations/{id}/closed": {
		post: { Parameters: [id: string], Body: never, Response: unknown }
		put: { Parameters: [id: string], Body: never, Response: unknown }
	},
	"/lol-chat/v1/conversations/eog-chat-toggle": {
		post: { Parameters: [], Body: boolean, Response: unknown }
	},
	"/lol-chat/v1/session/rso": {
		post: { Parameters: [], Body: LCUTypes.LolChatAuthResourceRsoAccessToken, Response: LCUTypes.LolChatSessionResource }
	},
	"/lol-chat/v1/system-mutes": {
		post: { Parameters: [], Body: LCUTypes.LolChatPlayerMuteUpdate, Response: unknown }
	},
	"/lol-clash/v1/eog-player-update/acknowledge": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-clash/v1/events": {
		post: { Parameters: [], Body: string[], Response: Record<string, LCUTypes.ClashEventData> }
	},
	"/lol-clash/v1/game-end/acknowledge": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-clash/v1/lft/player": {
		post: { Parameters: [], Body: LCUTypes.LolClashLftState, Response: unknown }
	},
	"/lol-clash/v1/lft/player/find": {
		post: { Parameters: [], Body: LCUTypes.LolClashFindPlayers, Response: LCUTypes.PlayerFinderDTO[] }
	},
	"/lol-clash/v1/lft/team": {
		post: { Parameters: [], Body: LCUTypes.LolClashTeamOpenState, Response: unknown }
	},
	"/lol-clash/v1/lft/team/{rosterId}/request": {
		post: { Parameters: [rosterId: string], Body: never, Response: unknown }
	},
	"/lol-clash/v1/lft/team/fetch-requests": {
		post: { Parameters: [], Body: number, Response: unknown }
	},
	"/lol-clash/v1/lft/team/find": {
		post: { Parameters: [], Body: LCUTypes.LolClashFindTeams, Response: LCUTypes.OpenedTeamDTO[] }
	},
	"/lol-clash/v1/notifications/acknowledge": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-clash/v1/refresh": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/accept": {
		post: { Parameters: [rosterId: string], Body: never, Response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/cancel-withdraw": {
		post: { Parameters: [rosterId: string], Body: never, Response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/change-all-details": {
		post: { Parameters: [rosterId: string], Body: LCUTypes.LolClashRosterDetails, Response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/change-icon": {
		post: { Parameters: [rosterId: string], Body: LCUTypes.LolClashChangeIconRequest, Response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/change-name": {
		post: { Parameters: [rosterId: string], Body: LCUTypes.LolClashChangeNameRequest, Response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/change-short-name": {
		post: { Parameters: [rosterId: string], Body: LCUTypes.LolClashChangeNameRequest, Response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/decline": {
		post: { Parameters: [rosterId: string], Body: never, Response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/disband": {
		post: { Parameters: [rosterId: string], Body: never, Response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/invite": {
		post: { Parameters: [rosterId: string], Body: number[], Response: LCUTypes.LolClashClientFailedInvite[] }
	},
	"/lol-clash/v1/roster/{rosterId}/kick": {
		post: { Parameters: [rosterId: string], Body: LCUTypes.LolClashKickRequest, Response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/leave": {
		post: { Parameters: [rosterId: string], Body: never, Response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/lockin": {
		post: { Parameters: [rosterId: string], Body: never, Response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/set-position": {
		post: { Parameters: [rosterId: string], Body: LCUTypes.LolClashSetPositionRequest, Response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/set-ticket": {
		post: { Parameters: [rosterId: string], Body: LCUTypes.LolClashSetTicketRequest, Response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/suggest": {
		post: { Parameters: [rosterId: string], Body: number[], Response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/suggest/{summonerId}/accept": {
		post: { Parameters: [rosterId: string, summonerId: number], Body: never, Response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/suggest/{summonerId}/decline": {
		post: { Parameters: [rosterId: string, summonerId: number], Body: never, Response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/suggest/{summonerId}/revoke": {
		post: { Parameters: [rosterId: string, summonerId: number], Body: never, Response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/ticket-offer/{summonerId}/accept": {
		post: { Parameters: [rosterId: string, summonerId: number], Body: never, Response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/ticket-offer/{summonerId}/decline": {
		post: { Parameters: [rosterId: string, summonerId: number], Body: never, Response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/ticket-offer/{summonerId}/offer": {
		post: { Parameters: [rosterId: string, summonerId: number], Body: LCUTypes.LolClashOfferTicketRequest, Response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/ticket-offer/{summonerId}/revoke": {
		post: { Parameters: [rosterId: string, summonerId: number], Body: never, Response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/transfer-captain": {
		post: { Parameters: [rosterId: string], Body: number, Response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/unlockin": {
		post: { Parameters: [rosterId: string], Body: never, Response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/unwithdraw": {
		post: { Parameters: [rosterId: string], Body: never, Response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/update-logos": {
		post: { Parameters: [rosterId: string], Body: never, Response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/withdraw": {
		post: { Parameters: [rosterId: string], Body: never, Response: unknown }
	},
	"/lol-clash/v1/simple-state-flags/{id}/acknowledge": {
		post: { Parameters: [id: string], Body: never, Response: unknown }
	},
	"/lol-clash/v1/tournament/{tournamentId}/create-roster": {
		post: { Parameters: [tournamentId: number], Body: LCUTypes.LolClashRosterDetails, Response: unknown }
	},
	"/lol-clash/v1/update-logos": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-email-verification/v1/confirm-email": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-end-of-game/v1/state/dismiss-stats": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-esport-stream-notifications/v1/send-stats": {
		post: { Parameters: [params: { "eventType": string, "matchId": string }], Body: never, Response: void }
	},
	"/lol-event-shop/v1/claim-select-all": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/lol-event-shop/v1/claim-select-bonus-iteration": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/lol-event-shop/v1/purchase-item": {
		post: { Parameters: [], Body: LCUTypes.LolEventShopItemOrderDTO, Response: LCUTypes.LolEventShopPurchaseOrderResponseDTO }
	},
	"/lol-event-shop/v1/purchase-offer": {
		post: { Parameters: [], Body: LCUTypes.LolEventShopPurchaseOfferRequest, Response: LCUTypes.LolEventShopPurchaseOfferResponseV3 }
	},
	"/lol-game-client-chat/v1/instant-messages": {
		post: { Parameters: [params: { "summonerName": string, "message": string }], Body: never, Response: void }
	},
	"/lol-game-client-chat/v2/instant-messages": {
		post: { Parameters: [], Body: LCUTypes.LolGameClientChatMessageToPlayer, Response: void }
	},
	"/lol-game-settings/v1/reload-post-game": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/lol-game-settings/v1/save": {
		post: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-gameflow/v1/ack-failed-to-launch": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/lol-gameflow/v1/basic-tutorial/start": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-gameflow/v1/battle-training/start": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-gameflow/v1/battle-training/stop": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-gameflow/v1/early-exit": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-gameflow/v1/pre-end-game-transition": {
		post: { Parameters: [], Body: boolean, Response: void }
	},
	"/lol-gameflow/v1/reconnect": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-gameflow/v1/session/champ-select/phase-time-remaining": {
		post: { Parameters: [], Body: number, Response: void }
	},
	"/lol-gameflow/v1/session/dodge": {
		post: { Parameters: [], Body: LCUTypes.LolGameflowGameflowGameDodge, Response: void }
	},
	"/lol-gameflow/v1/session/event": {
		post: { Parameters: [], Body: string, Response: void }
	},
	"/lol-gameflow/v1/session/game-configuration": {
		post: { Parameters: [], Body: LCUTypes.LolGameflowQueue, Response: void }
	},
	"/lol-gameflow/v1/session/request-enter-gameflow": {
		post: { Parameters: [], Body: string, Response: boolean }
	},
	"/lol-gameflow/v1/session/request-lobby": {
		post: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-gameflow/v1/session/request-tournament-checkin": {
		post: { Parameters: [], Body: never, Response: boolean }
	},
	"/lol-gameflow/v1/session/tournament-ended": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/lol-gameflow/v1/spectate/launch": {
		post: { Parameters: [], Body: string, Response: unknown }
	},
	"/lol-gameflow/v1/spectate/quit": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-gameflow/v1/tick": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/lol-gameflow/v1/watch/launch": {
		post: { Parameters: [], Body: string[], Response: unknown }
	},
	"/lol-gameflow/v2/spectate/launch": {
		post: { Parameters: [], Body: LCUTypes.LolGameflowSpectateGameInfoResource, Response: unknown }
	},
	"/lol-highlights/v1/file-browser/{highlightId}": {
		post: { Parameters: [highlightId: number], Body: never, Response: unknown }
	},
	"/lol-honeyfruit/v1/account-claim/linking-redirect": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/lol-honor-v2/v1/honor-player": {
		post: { Parameters: [], Body: LCUTypes.LolHonorV2ApiHonorPlayerServerRequest, Response: string }
	},
	"/lol-honor-v2/v1/late-recognition/ack": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/lol-honor-v2/v1/level-change/ack": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/lol-honor-v2/v1/mutual-honor/ack": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/lol-honor-v2/v1/reward-granted/ack": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/lol-inventory/v1/notification/acknowledge": {
		post: { Parameters: [], Body: number, Response: void }
	},
	"/lol-item-sets/v1/item-sets/validate": {
		post: { Parameters: [], Body: LCUTypes.LolItemSetsValidateItemSetNameInput, Response: LCUTypes.LolItemSetsValidateItemSetNameResponse }
	},
	"/lol-kr-shutdown-law/v1/rating-screen/acknowledge": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/lol-license-agreement/v1/agreements/{id}/accept": {
		post: { Parameters: [id: string], Body: never, Response: unknown }
	},
	"/lol-license-agreement/v1/agreements/{id}/decline": {
		post: { Parameters: [id: string], Body: never, Response: unknown }
	},
	"/lol-loadouts/v4/loadouts": {
		post: { Parameters: [], Body: LCUTypes.LolLoadoutsCreateLoadoutDTO, Response: LCUTypes.LolLoadoutsScopedLoadout }
	},
	"/lol-lobby-team-builder/champ-select/v1/retrieve-latest-game-dto": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-lobby-team-builder/champ-select/v1/session/actions/{id}/complete": {
		post: { Parameters: [id: number], Body: never, Response: unknown }
	},
	"/lol-lobby-team-builder/champ-select/v1/session/bench/swap/{championId}": {
		post: { Parameters: [championId: number], Body: never, Response: unknown }
	},
	"/lol-lobby-team-builder/champ-select/v1/session/my-selection/reroll": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-lobby-team-builder/champ-select/v1/session/swaps/{id}/accept": {
		post: { Parameters: [id: number], Body: never, Response: unknown }
	},
	"/lol-lobby-team-builder/champ-select/v1/session/swaps/{id}/cancel": {
		post: { Parameters: [id: number], Body: never, Response: unknown }
	},
	"/lol-lobby-team-builder/champ-select/v1/session/swaps/{id}/decline": {
		post: { Parameters: [id: number], Body: never, Response: unknown }
	},
	"/lol-lobby-team-builder/champ-select/v1/session/swaps/{id}/request": {
		post: { Parameters: [id: number], Body: never, Response: LCUTypes.LolLobbyTeamBuilderChampSelectSwapContract }
	},
	"/lol-lobby-team-builder/champ-select/v1/session/trades/{id}/accept": {
		post: { Parameters: [id: number], Body: never, Response: unknown }
	},
	"/lol-lobby-team-builder/champ-select/v1/session/trades/{id}/cancel": {
		post: { Parameters: [id: number], Body: never, Response: unknown }
	},
	"/lol-lobby-team-builder/champ-select/v1/session/trades/{id}/decline": {
		post: { Parameters: [id: number], Body: never, Response: unknown }
	},
	"/lol-lobby-team-builder/champ-select/v1/session/trades/{id}/request": {
		post: { Parameters: [id: number], Body: never, Response: LCUTypes.LolLobbyTeamBuilderChampSelectTradeContract }
	},
	"/lol-lobby-team-builder/champ-select/v1/simple-inventory": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/lol-lobby-team-builder/champ-select/v1/team-boost/purchase": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-lobby-team-builder/v1/ready-check/accept": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-lobby-team-builder/v1/ready-check/decline": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-lobby/v1/custom-games/{id}/join": {
		post: { Parameters: [id: number], Body: LCUTypes.LolLobbyLobbyCustomJoinParameters, Response: unknown }
	},
	"/lol-lobby/v1/custom-games/refresh": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-lobby/v1/lobby/custom/bots": {
		post: { Parameters: [], Body: LCUTypes.LolLobbyLobbyBotParams, Response: unknown }
	},
	"/lol-lobby/v1/lobby/custom/cancel-champ-select": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-lobby/v1/lobby/custom/start-champ-select": {
		post: { Parameters: [], Body: never, Response: LCUTypes.LolLobbyLobbyCustomChampSelectStartResponse }
	},
	"/lol-lobby/v1/lobby/custom/switch-teams": {
		post: { Parameters: [], Body: string, Response: unknown }
	},
	"/lol-lobby/v1/lobby/members/localMember/player-slots/{slotsIndex}/{perksString}": {
		post: { Parameters: [slotsIndex: number, perksString: string], Body: never, Response: unknown }
	},
	"/lol-lobby/v1/tournaments/{id}/join": {
		post: { Parameters: [id: string], Body: never, Response: unknown }
	},
	"/lol-lobby/v2/eligibility/party": {
		post: { Parameters: [], Body: never, Response: LCUTypes.LolLobbyEligibility[] }
	},
	"/lol-lobby/v2/eligibility/self": {
		post: { Parameters: [], Body: never, Response: LCUTypes.LolLobbyEligibility[] }
	},
	"/lol-lobby/v2/eog-invitations": {
		post: { Parameters: [], Body: LCUTypes.LolLobbyLobbyInvitationDto[], Response: LCUTypes.LolLobbyLobbyInvitationDto[] }
	},
	"/lol-lobby/v2/lobby/members/{summonerId}/grant-invite": {
		post: { Parameters: [summonerId: number], Body: never, Response: number }
	},
	"/lol-lobby/v2/lobby/members/{summonerId}/kick": {
		post: { Parameters: [summonerId: number], Body: never, Response: number }
	},
	"/lol-lobby/v2/lobby/members/{summonerId}/promote": {
		post: { Parameters: [summonerId: number], Body: never, Response: number }
	},
	"/lol-lobby/v2/lobby/members/{summonerId}/revoke-invite": {
		post: { Parameters: [summonerId: number], Body: never, Response: number }
	},
	"/lol-lobby/v2/lobby/team/{team}": {
		post: { Parameters: [team: string], Body: never, Response: void }
	},
	"/lol-lobby/v2/matchmaking/quick-search": {
		post: { Parameters: [], Body: LCUTypes.LolLobbyLobbyChangeGameDto, Response: unknown }
	},
	"/lol-lobby/v2/parties/overrides/EnabledForTeamBuilderQueues": {
		post: { Parameters: [], Body: boolean, Response: void }
	},
	"/lol-lobby/v2/party/{partyId}/join": {
		post: { Parameters: [partyId: string], Body: LCUTypes.LolLobbyCustomJoinOptionsDto, Response: unknown }
	},
	"/lol-lobby/v2/play-again": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-lobby/v2/play-again-decline": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-lobby/v2/received-invitations/{invitationId}/accept": {
		post: { Parameters: [invitationId: string], Body: never, Response: void }
	},
	"/lol-lobby/v2/received-invitations/{invitationId}/decline": {
		post: { Parameters: [invitationId: string], Body: never, Response: void }
	},
	"/lol-login/v1/change-summoner-name": {
		post: { Parameters: [], Body: string, Response: unknown }
	},
	"/lol-login/v1/delete-rso-on-close": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-login/v1/leagueSessionStatus": {
		post: { Parameters: [], Body: LCUTypes.LolLoginLeagueSessionStatus, Response: void }
	},
	"/lol-login/v1/service-proxy-uuid-requests": {
		post: { Parameters: [params: { "serviceName": string, "methodName": string, "pluginId": number, "timeoutMillis": number, "payload": string }], Body: never, Response: string }
	},
	"/lol-login/v1/session/invoke": {
		post: { Parameters: [params: { "destination": string, "method": string, "args": unknown[] }], Body: never, Response: LCUTypes.LolLoginLcdsResponse }
	},
	"/lol-login/v1/summoner-session": {
		post: { Parameters: [], Body: LCUTypes.LolLoginSummonerSessionResource, Response: unknown }
	},
	"/lol-login/v1/summoner-session-failed": {
		post: { Parameters: [], Body: number, Response: unknown }
	},
	"/lol-loot/v1/craft/mass": {
		post: { Parameters: [], Body: LCUTypes.CraftLootDTO[], Response: LCUTypes.LolLootPlayerLootUpdate }
	},
	"/lol-loot/v1/milestones/{lootMilestonesId}/claim": {
		post: { Parameters: [lootMilestonesId: string], Body: never, Response: void }
	},
	"/lol-loot/v1/player-loot/{lootName}/redeem": {
		post: { Parameters: [lootName: string], Body: never, Response: LCUTypes.LolLootPlayerLootUpdate }
	},
	"/lol-loot/v1/player-loot-notifications/{id}/acknowledge": {
		post: { Parameters: [id: string], Body: never, Response: string }
	},
	"/lol-loot/v1/recipes/{recipeName}/craft": {
		post: { Parameters: [recipeName: string, params: { "playerLootList": string[], "repeat"?: number }], Body: never, Response: LCUTypes.LolLootPlayerLootUpdate }
	},
	"/lol-loot/v1/refresh": {
		post: { Parameters: [], Body: boolean, Response: string }
	},
	"/lol-loyalty/v1/updateLoyaltyInventory": {
		post: { Parameters: [], Body: LCUTypes.LolLoyaltyLoyaltyRewards, Response: void }
	},
	"/lol-maps/v1/map": {
		post: { Parameters: [], Body: LCUTypes.LolMapsMaps, Response: void }
	},
	"/lol-match-history/v1/acs-endpoint-override": {
		post: { Parameters: [], Body: LCUTypes.LolMatchHistoryAcsEndPoint, Response: unknown }
	},
	"/lol-matchmaking/v1/ready-check/accept": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-matchmaking/v1/ready-check/decline": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-missions/v1/force": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/lol-npe-rewards/v1/challenges/opt": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/lol-patch/v1/products/league_of_legends/detect-corruption-request": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/lol-patch/v1/products/league_of_legends/partial-repair-request": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/lol-patch/v1/products/league_of_legends/start-checking-request": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/lol-patch/v1/products/league_of_legends/start-patching-request": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/lol-patch/v1/products/league_of_legends/stop-checking-request": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/lol-patch/v1/products/league_of_legends/stop-patching-request": {
		post: { Parameters: [], Body: boolean, Response: void }
	},
	"/lol-perks/v1/quick-play-selections/champion/{championId}/slot/{slotId}": {
		post: { Parameters: [championId: number, slotId: number], Body: LCUTypes.LolPerksPerkPageResource, Response: unknown }
	},
	"/lol-perks/v1/recommended-pages-position/champion/{championId}/position/{position}": {
		post: { Parameters: [championId: number, position: string], Body: never, Response: unknown }
	},
	"/lol-perks/v1/update-page-order": {
		post: { Parameters: [], Body: LCUTypes.LolPerksUpdatePageOrderRequest, Response: unknown }
	},
	"/lol-pft/v2/events": {
		post: { Parameters: [], Body: LCUTypes.LolPftPFTEvent, Response: unknown }
	},
	"/lol-player-behavior/v2/reporter-feedback/{key}": {
		post: { Parameters: [key: string], Body: never, Response: void }
	},
	"/lol-player-name-transition/v1/dismiss": {
		post: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-player-preferences/v1/player-preferences-endpoint-override": {
		post: { Parameters: [], Body: LCUTypes.LolPlayerPreferencesPlayerPreferencesEndpoint, Response: unknown }
	},
	"/lol-player-report-sender/v1/champ-select-reports": {
		post: { Parameters: [], Body: LCUTypes.LolPlayerReportSenderPlayerReport, Response: unknown }
	},
	"/lol-player-report-sender/v1/end-of-game-reports": {
		post: { Parameters: [], Body: LCUTypes.LolPlayerReportSenderPlayerReport, Response: unknown }
	},
	"/lol-player-report-sender/v1/match-history-reports": {
		post: { Parameters: [], Body: LCUTypes.LolPlayerReportSenderPlayerReport, Response: unknown }
	},
	"/lol-pre-end-of-game/v1/complete/{sequenceEventName}": {
		post: { Parameters: [sequenceEventName: string], Body: never, Response: void }
	},
	"/lol-pre-end-of-game/v1/registration/{sequenceEventName}/{priority}": {
		post: { Parameters: [sequenceEventName: string, priority: number], Body: never, Response: void }
	},
	"/lol-premade-voice/v1/first-experience/game": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/lol-premade-voice/v1/first-experience/lcu": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/lol-premade-voice/v1/first-experience/reset": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/lol-premade-voice/v1/gameClientUpdatedPTTKey": {
		post: { Parameters: [], Body: string, Response: void }
	},
	"/lol-premade-voice/v1/push-to-talk/check-available": {
		post: { Parameters: [], Body: number, Response: boolean }
	},
	"/lol-premade-voice/v1/settings/reset": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/lol-purchase-widget/v1/purchasable-items/{inventoryType}": {
		post: { Parameters: [inventoryType: string], Body: number[], Response: LCUTypes.LolPurchaseWidgetItemChoices }
	},
	"/lol-purchase-widget/v2/purchaseItems": {
		post: { Parameters: [], Body: LCUTypes.LolPurchaseWidgetPurchaseRequest, Response: unknown }
	},
	"/lol-purchase-widget/v3/purchaseOffer": {
		post: { Parameters: [], Body: LCUTypes.LolPurchaseWidgetPurchaseOfferRequestV3, Response: LCUTypes.LolPurchaseWidgetPurchaseOfferResponseV3 }
	},
	"/lol-purchase-widget/v3/validateOffer": {
		post: { Parameters: [], Body: LCUTypes.LolPurchaseWidgetValidateOfferRequestV3, Response: LCUTypes.LolPurchaseWidgetValidateOfferResponseV3 }
	},
	"/lol-ranked/v1/eos-notifications/{id}/acknowledge": {
		post: { Parameters: [id: string], Body: never, Response: unknown }
	},
	"/lol-ranked/v1/notifications/{id}/acknowledge": {
		post: { Parameters: [id: number], Body: never, Response: unknown }
	},
	"/lol-replays/v1/metadata/{gameId}/create/gameVersion/{gameVersion}/gameType/{gameType}/queueId/{queueId}": {
		post: { Parameters: [gameId: number, gameVersion: string, gameType: string, queueId: number], Body: never, Response: void }
	},
	"/lol-replays/v1/rofls/{gameId}/download": {
		post: { Parameters: [gameId: number], Body: LCUTypes.LolReplaysReplayContextData, Response: void }
	},
	"/lol-replays/v1/rofls/{gameId}/download/graceful": {
		post: { Parameters: [gameId: number], Body: LCUTypes.LolReplaysReplayContextData, Response: void }
	},
	"/lol-replays/v1/rofls/{gameId}/watch": {
		post: { Parameters: [gameId: number], Body: LCUTypes.LolReplaysReplayContextData, Response: void }
	},
	"/lol-replays/v1/rofls/scan": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/lol-replays/v2/metadata/{gameId}/create": {
		post: { Parameters: [gameId: number], Body: LCUTypes.LolReplaysReplayCreateMetadata, Response: void }
	},
	"/lol-rewards/v1/grants/{grantId}/select": {
		post: { Parameters: [grantId: string], Body: LCUTypes.LolRewardsSelectionRequestDTO, Response: LCUTypes.LolRewardsRewardGrant }
	},
	"/lol-rewards/v1/select-bulk": {
		post: { Parameters: [], Body: LCUTypes.LolRewardsSelectionRequestDTO[], Response: Record<string, LCUTypes.LolRewardsSelectGrantStatusResponse> }
	},
	"/lol-rso-auth/v1/authorization/gas": {
		post: { Parameters: [], Body: LCUTypes.LolRsoAuthRSOPlayerCredentials, Response: LCUTypes.LolRsoAuthAuthorization }
	},
	"/lol-rso-auth/v1/authorization/refresh": {
		post: { Parameters: [], Body: never, Response: LCUTypes.LolRsoAuthAuthorization }
	},
	"/lol-rso-auth/v1/device-id": {
		post: { Parameters: [], Body: never, Response: LCUTypes.LolRsoAuthDeviceId }
	},
	"/lol-rso-auth/v1/external-session-config": {
		post: { Parameters: [], Body: unknown, Response: unknown }
	},
	"/lol-seasons/v1/allSeasons/product/{product}": {
		post: { Parameters: [product: string], Body: LCUTypes.LolSeasonsAllProductSeasonQuery, Response: LCUTypes.LolSeasonsAllSeasonsProduct[] }
	},
	"/lol-settings/v1/account/save": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/lol-settings/v2/reload/{ppType}": {
		post: { Parameters: [ppType: string], Body: never, Response: void }
	},
	"/lol-spectator/v1/buddy/spectate": {
		post: { Parameters: [], Body: string[], Response: LCUTypes.LolSpectatorSummonerOrTeamAvailabilty }
	},
	"/lol-spectator/v1/spectate/launch": {
		post: { Parameters: [], Body: LCUTypes.LolSpectatorSpectateGameInfo, Response: unknown }
	},
	"/lol-spectator/v2/buddy/spectate": {
		post: { Parameters: [], Body: number[], Response: LCUTypes.LolSpectatorSummonerIdAvailability }
	},
	"/lol-statstones/v1/featured-champion-statstones/{championItemId}/{statstoneId}": {
		post: { Parameters: [championItemId: number, statstoneId: string], Body: LCUTypes.LolStatstonesStatstoneFeaturedRequest, Response: unknown }
	},
	"/lol-store/v1/notifications/acknowledge": {
		post: { Parameters: [], Body: string, Response: unknown }
	},
	"/lol-store/v3/purchase": {
		post: { Parameters: [], Body: LCUTypes.LolStoreItemOrderDTO[], Response: LCUTypes.LolStorePurchaseOrderResponseDTO }
	},
	"/lol-suggested-players/v1/reported-player": {
		post: { Parameters: [], Body: LCUTypes.LolSuggestedPlayersSuggestedPlayersReportedPlayer, Response: void }
	},
	"/lol-suggested-players/v1/victorious-comrade": {
		post: { Parameters: [], Body: LCUTypes.LolSuggestedPlayersSuggestedPlayersVictoriousComrade, Response: void }
	},
	"/lol-summoner/v1/current-summoner/name": {
		post: { Parameters: [], Body: string, Response: LCUTypes.LolSummonerSummoner }
	},
	"/lol-summoner/v1/save-alias": {
		post: { Parameters: [], Body: LCUTypes.LolSummonerAlias, Response: LCUTypes.LolSummonerAliasAvailability }
	},
	"/lol-summoner/v1/summoner-aliases-by-ids": {
		post: { Parameters: [], Body: number[], Response: Record<string, LCUTypes.LolSummonerAlias> }
	},
	"/lol-summoner/v1/summoner-aliases-by-puuids": {
		post: { Parameters: [], Body: string[], Response: Record<string, LCUTypes.LolSummonerAlias> }
	},
	"/lol-summoner/v1/summoners/aliases": {
		post: { Parameters: [], Body: LCUTypes.LolSummonerAlias[], Response: LCUTypes.LolSummonerSummoner[] }
	},
	"/lol-summoner/v1/validate-alias": {
		post: { Parameters: [], Body: LCUTypes.LolSummonerAlias, Response: LCUTypes.LolSummonerAliasAvailability }
	},
	"/lol-summoner/v2/summoners/names": {
		post: { Parameters: [], Body: string[], Response: LCUTypes.LolSummonerSummoner[] }
	},
	"/lol-summoner/v2/summoners/puuid": {
		post: { Parameters: [], Body: string[], Response: LCUTypes.LolSummonerSummoner[] }
	},
	"/lol-tft-pass/v1/pass/{id}": {
		post: { Parameters: [id: string], Body: never, Response: void }
	},
	"/lol-tft-pass/v1/passes": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/lol-tft-troves/v1/purchase": {
		post: { Parameters: [], Body: LCUTypes.LolTftTrovesTrovesPurchaseRequest, Response: LCUTypes.LolTftTrovesCapOrdersResponseDTO }
	},
	"/lol-tft-troves/v1/roll": {
		post: { Parameters: [], Body: LCUTypes.LolTftTrovesTrovesRollRequest, Response: LCUTypes.LolTftTrovesCapOrdersResponseDTO }
	},
	"/lol-tft/v1/tft/homeHub/redirect": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/lol-yourshop/v1/offers/{id}/purchase": {
		post: { Parameters: [id: string], Body: never, Response: LCUTypes.LolYourshopPurchaseResponse }
	},
	"/lol-yourshop/v1/offers/{id}/reveal": {
		post: { Parameters: [id: string], Body: never, Response: LCUTypes.LolYourshopUIOffer[] }
	},
	"/lol-yourshop/v1/permissions": {
		post: { Parameters: [], Body: LCUTypes.LolYourshopPlayerPermissions, Response: LCUTypes.LolYourshopPlayerPermissions }
	},
	"/memory/v1/notify-fe-processes-ready": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/memory/v1/snapshot": {
		post: { Parameters: [params: { "processIds": number[], "context": string }], Body: never, Response: void }
	},
	"/patcher/v1/products/{product-id}/detect-corruption-request": {
		post: { Parameters: [product_id: string], Body: never, Response: LCUTypes.PatcherProductState }
	},
	"/patcher/v1/products/{product-id}/partial-repair-request": {
		post: { Parameters: [product_id: string], Body: never, Response: unknown }
	},
	"/patcher/v1/products/{product-id}/signal-start-patching-delayed": {
		post: { Parameters: [product_id: string], Body: never, Response: unknown }
	},
	"/patcher/v1/products/{product-id}/start-checking-request": {
		post: { Parameters: [product_id: string], Body: never, Response: unknown }
	},
	"/patcher/v1/products/{product-id}/start-patching-request": {
		post: { Parameters: [product_id: string], Body: never, Response: unknown }
	},
	"/patcher/v1/products/{product-id}/stop-checking-request": {
		post: { Parameters: [product_id: string], Body: never, Response: unknown }
	},
	"/patcher/v1/products/{product-id}/stop-patching-request": {
		post: { Parameters: [product_id: string], Body: never, Response: unknown }
	},
	"/payments/v1/pmc-start-url": {
		post: { Parameters: [], Body: LCUTypes.PaymentsFrontEndRequest, Response: LCUTypes.PaymentsFrontEndResult }
	},
	"/payments/v1/updatePaymentTelemetryState": {
		post: { Parameters: [], Body: LCUTypes.PaymentsPaymentsTelemetryTransitions, Response: void }
	},
	"/performance/v1/process/{processId}": {
		post: { Parameters: [processId: number], Body: never, Response: void }
	},
	"/performance/v1/report/restart": {
		post: { Parameters: [params?: { "sampleLength"?: number, "sampleCount"?: number }], Body: never, Response: unknown[] }
	},
	"/process-control/v1/process/quit": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/riotclient/addorupdatemetric": {
		post: { Parameters: [params: { "group": string, "object": string, "name": string, "value": number }], Body: never, Response: void }
	},
	"/riotclient/kill-and-restart-ux": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/riotclient/kill-ux": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/riotclient/launch-ux": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/riotclient/new-args": {
		post: { Parameters: [], Body: string[], Response: void }
	},
	"/riotclient/open-url-in-browser": {
		post: { Parameters: [], Body: string, Response: void }
	},
	"/riotclient/show-swagger": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/riotclient/unload": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/riotclient/ux-allow-foreground": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/riotclient/ux-flash": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/riotclient/ux-minimize": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/riotclient/ux-show": {
		post: { Parameters: [], Body: never, Response: void }
	},
	"/riotclient/v1/crash-reporting/logs": {
		post: { Parameters: [], Body: string, Response: void }
	},
	"/riotclient/v1/elevation-requests": {
		post: { Parameters: [], Body: LCUTypes.ElevationRequest, Response: void }
	},
	"/sanitizer/v1/containsSanitized": {
		post: { Parameters: [], Body: LCUTypes.SanitizerContainsSanitizedRequest, Response: LCUTypes.SanitizerContainsSanitizedResponse }
	},
	"/sanitizer/v1/sanitize": {
		post: { Parameters: [], Body: LCUTypes.SanitizerSanitizeRequest, Response: LCUTypes.SanitizerSanitizeResponse }
	},
	"/telemetry/v1/common-data/{key}": {
		post: { Parameters: [key: string], Body: string, Response: void }
	},
	"/telemetry/v1/events/{eventType}": {
		post: { Parameters: [eventType: string], Body: Record<string, unknown>, Response: void }
	},
	"/telemetry/v1/events-with-perf-info/{eventType}": {
		post: { Parameters: [eventType: string], Body: Record<string, unknown>, Response: void }
	},
	"/telemetry/v3/events/{eventType}": {
		post: { Parameters: [eventType: string], Body: Record<string, unknown>, Response: void }
	},
	"/telemetry/v3/events-once/{eventType}/{onceTag}": {
		post: { Parameters: [eventType: string, onceTag: string], Body: Record<string, string>, Response: void }
	},
	"/telemetry/v3/slis/counts": {
		post: { Parameters: [], Body: LCUTypes.SLICount, Response: void }
	},
	"/telemetry/v3/uptime-tracking/notify-failure": {
		post: { Parameters: [], Body: LCUTypes.NotifyFailureRequest, Response: void }
	},
	"/telemetry/v3/uptime-tracking/notify-success": {
		post: { Parameters: [], Body: LCUTypes.NotifySuccessRequest, Response: void }
	},
	"/tracing/v1/trace/critical-flow": {
		post: { Parameters: [], Body: LCUTypes.TracingCriticalFlowEventV1, Response: void }
	},
	"/tracing/v1/trace/event": {
		post: { Parameters: [], Body: LCUTypes.TracingEventV1, Response: void }
	},
	"/tracing/v1/trace/module": {
		post: { Parameters: [], Body: LCUTypes.TracingModuleV1, Response: void }
	},
	"/tracing/v1/trace/non-timing-event/{eventName}": {
		post: { Parameters: [eventName: string, params: { "when": number, "value": string, "unit": string }], Body: never, Response: void }
	},
	"/tracing/v1/trace/phase/begin": {
		post: { Parameters: [], Body: LCUTypes.TracingPhaseBeginV1, Response: void }
	},
	"/tracing/v1/trace/phase/end": {
		post: { Parameters: [], Body: LCUTypes.TracingPhaseEndV1, Response: void }
	},
	"/tracing/v1/trace/step-event": {
		post: { Parameters: [], Body: string, Response: void }
	},
	"/tracing/v1/trace/time-series-event/{eventName}/marker/{markerName}": {
		post: { Parameters: [eventName: string, markerName: string], Body: number, Response: void }
	},
	"/client-config/v1/entitlements-token": {
		put: { Parameters: [], Body: LCUTypes.ClientConfigEntitlementsUpdate, Response: void }
	},
	"/client-config/v1/refresh-config-status": {
		put: { Parameters: [], Body: never, Response: void }
	},
	"/client-config/v2/namespace-changes": {
		put: { Parameters: [], Body: LCUTypes.ClientConfigConfigNamespaceUpdate, Response: void }
	},
	"/lol-chat/v1/friend-groups/order": {
		put: { Parameters: [], Body: LCUTypes.LolChatFriendGroupOrder, Response: unknown }
	},
	"/lol-lobby/v1/lobby/members/localMember/position-preferences": {
		put: { Parameters: [], Body: LCUTypes.LolLobbyLobbyPositionPreferences, Response: unknown }
	},
	"/lol-lobby/v1/parties/active": {
		put: { Parameters: [], Body: number, Response: void }
	},
	"/lol-lobby/v1/parties/{partyId}/members/{puuid}/role": {
		put: { Parameters: [partyId: string, puuid: string], Body: string, Response: void }
	},
	"/lol-lobby/v1/parties/metadata": {
		put: { Parameters: [], Body: LCUTypes.LolLobbyPartyMemberMetadataDto, Response: void }
	},
	"/lol-lobby/v1/parties/queue": {
		put: { Parameters: [], Body: number, Response: void }
	},
	"/lol-lobby/v1/parties/ready": {
		put: { Parameters: [], Body: number, Response: void }
	},
	"/lol-lobby/v2/lobby/members/localMember/position-preferences": {
		put: { Parameters: [], Body: LCUTypes.LolLobbyLobbyPositionPreferences, Response: unknown }
	},
	"/lol-lobby/v2/lobby/partyType": {
		put: { Parameters: [], Body: string, Response: unknown }
	},
	"/lol-lobby/v2/lobby/subteamData": {
		put: { Parameters: [], Body: LCUTypes.LolLobbySubteamDataDto, Response: void }
	},
	"/lol-loot/v1/loot-odds/evaluateQuery": {
		put: { Parameters: [], Body: LCUTypes.QueryEvaluationRequestDTO, Response: LCUTypes.LolLootQueryEvaluatedLootItem[] }
	},
	"/lol-missions/v1/player": {
		put: { Parameters: [], Body: LCUTypes.IdsDTO, Response: void }
	},
	"/lol-missions/v1/player/{missionId}": {
		put: { Parameters: [missionId: string], Body: LCUTypes.LolMissionsRewardGroupsSelection, Response: void }
	},
	"/lol-missions/v2/player/opt": {
		put: { Parameters: [], Body: LCUTypes.LolMissionsSeriesOpt, Response: void }
	},
	"/lol-npe-tutorial-path/v1/tutorials/{tutorialId}/view": {
		put: { Parameters: [tutorialId: string], Body: never, Response: void }
	},
	"/lol-patch/v1/game-patch-url": {
		put: { Parameters: [], Body: string, Response: void }
	},
	"/lol-patch/v1/ux": {
		put: { Parameters: [], Body: LCUTypes.LolPatchUxResource, Response: void }
	},
	"/lol-perks/v1/pages/validate": {
		put: { Parameters: [], Body: LCUTypes.LolPerksValidatePageNameData, Response: LCUTypes.LolPerksValidateItemSetNameResponse }
	},
	"/lol-perks/v1/perks/ack-gameplay-updated": {
		put: { Parameters: [], Body: number[], Response: unknown }
	},
	"/lol-player-behavior/v3/reform-card/{id}": {
		put: { Parameters: [id: string], Body: never, Response: void }
	},
	"/lol-player-preferences/v1/preference": {
		put: { Parameters: [], Body: LCUTypes.LolPlayerPreferencesPlayerPreferences, Response: unknown }
	},
	"/lol-premade-voice/v1/participants/{puuid}/mute": {
		put: { Parameters: [puuid: string], Body: number, Response: void }
	},
	"/lol-premade-voice/v1/participants/{puuid}/volume": {
		put: { Parameters: [puuid: string], Body: number, Response: void }
	},
	"/lol-premade-voice/v1/self/activationSensitivity": {
		put: { Parameters: [], Body: number, Response: void }
	},
	"/lol-premade-voice/v1/self/inputMode": {
		put: { Parameters: [], Body: LCUTypes.LolPremadeVoiceInputMode, Response: void }
	},
	"/lol-premade-voice/v1/self/micLevel": {
		put: { Parameters: [], Body: number, Response: void }
	},
	"/lol-premade-voice/v1/self/mute": {
		put: { Parameters: [], Body: number, Response: void }
	},
	"/lol-summoner/v1/current-summoner/icon": {
		put: { Parameters: [], Body: LCUTypes.LolSummonerSummonerIcon, Response: LCUTypes.LolSummonerSummoner }
	},
	"/lol-tft-team-planner/v1/team": {
		put: { Parameters: [], Body: never, Response: unknown }
	},
	"/lol-tft/v1/tft_experiment_bucket": {
		put: { Parameters: [], Body: number, Response: unknown }
	},
	"/patcher/v1/ux": {
		put: { Parameters: [], Body: LCUTypes.PatcherUxResource, Response: void }
	},
	"/riotclient/ux-load-complete": {
		put: { Parameters: [], Body: never, Response: void }
	},
	"/riotclient/ux-state/ack": {
		put: { Parameters: [], Body: number, Response: void }
	},
	"/Subscribe": {
		post: { Parameters: [params: { "eventName": string, "format"?: LCUTypes.RemotingSerializedFormat }], Body: never, Response: unknown }
	},
	"/Unsubscribe": {
		post: { Parameters: [], Body: string, Response: unknown }
	},
	"/WebSocketFormat": {
		post: { Parameters: [], Body: LCUTypes.RemotingSerializedFormat, Response: unknown }
	},
}

// @ts-expect-error
export type LCUEndpoint<Method extends HttpMethod, Path extends EndpointsWithMethod<Method>> = LCUEndpointBodyType<Method, Path> extends never ? (...args: [...LCUEndpoints[Path][Method]["Parameters"]]) => Promise<LCUEndpointResponseType<Method, Path>> : (...args: [...LCUEndpoints[Path][Method]["Parameters"], body: LCUEndpointBodyType<Method, Path>]) => Promise<LCUEndpointResponseType<Method, Path>>
// @ts-expect-error
export type LCUEndpointResponseType<Method extends HttpMethod, Path extends EndpointsWithMethod<Method>> = LCUEndpoints[Path][Method]["Response"]
// @ts-expect-error
export type LCUEndpointBodyType<Method extends HttpMethod, Path extends EndpointsWithMethod<Method>> = LCUEndpoints[Path][Method]["Body"]

export type EndpointsWithMethod<Method extends HttpMethod> = { [K in keyof LCUEndpoints]: LCUEndpoints[K] extends { [key in Method]: { } } ? K : never }[keyof LCUEndpoints]

export type HttpMethod = "delete" | "get" | "head" | "patch" | "post" | "put";