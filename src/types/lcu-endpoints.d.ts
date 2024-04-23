import * as LCUTypes from "./lcu-types";

export interface LCUEndpoints {
	"/AsyncDelete": {
		post: { path: never, params: never, body: number, response: unknown }
	},
	"/AsyncResult": {
		post: { path: never, params: never, body: number, response: unknown }
	},
	"/AsyncStatus": {
		post: { path: never, params: never, body: number, response: unknown }
	},
	"/Cancel": {
		post: { path: never, params: never, body: number, response: unknown }
	},
	"/lol-chat/v1/blocked-players/{id}": {
		get: { path: [id: string], params: never, body: never, response: LCUTypes.LolChatBlockedPlayerResource }
		delete: { path: [id: string], params: never, body: never, response: unknown }
	},
	"/lol-chat/v1/conversations/active": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolChatActiveConversationResource }
		put: { path: never, params: never, body: LCUTypes.LolChatActiveConversationResource, response: unknown }
		delete: { path: never, params: never, body: never, response: unknown }
	},
	"/lol-chat/v1/conversations/{id}": {
		get: { path: [id: string], params: never, body: never, response: LCUTypes.LolChatConversationResource }
		put: { path: [id: string], params: never, body: LCUTypes.LolChatConversationResource, response: LCUTypes.LolChatConversationResource }
		delete: { path: [id: string], params: never, body: never, response: unknown }
	},
	"/lol-chat/v1/conversations/{id}/messages": {
		get: { path: [id: string], params: never, body: never, response: LCUTypes.LolChatConversationMessageResource[] }
		post: { path: [id: string], params: never, body: LCUTypes.LolChatConversationMessageResource, response: LCUTypes.LolChatConversationMessageResource }
		delete: { path: [id: string], params: never, body: never, response: unknown }
	},
	"/lol-chat/v1/errors/{id}": {
		delete: { path: [id: number], params: never, body: never, response: unknown }
	},
	"/lol-chat/v1/friend-groups/{id}": {
		get: { path: [id: number], params: never, body: never, response: LCUTypes.LolChatGroupResource }
		put: { path: [id: number], params: never, body: LCUTypes.LolChatGroupResource, response: unknown }
		delete: { path: [id: number], params: never, body: never, response: unknown }
	},
	"/lol-chat/v1/friends/{id}": {
		get: { path: [id: string], params: never, body: never, response: LCUTypes.LolChatFriendResource }
		put: { path: [id: string], params: never, body: LCUTypes.LolChatFriendResource, response: unknown }
		delete: { path: [id: string], params: never, body: never, response: unknown }
	},
	"/lol-chat/v1/player-mutes": {
		get: { path: never, params: never, body: never, response: Record<string, LCUTypes.LolChatPlayerMuteStatus> }
		post: { path: never, params: never, body: LCUTypes.LolChatPlayerMuteUpdate, response: unknown }
		delete: { path: never, params: never, body: never, response: unknown }
	},
	"/lol-chat/v2/friend-requests/{id}": {
		put: { path: [id: string], params: never, body: LCUTypes.LolChatFriendRequestResource, response: unknown }
		delete: { path: [id: string], params: never, body: never, response: unknown }
	},
	"/lol-clash/v1/voice": {
		post: { path: never, params: never, body: never, response: unknown }
		delete: { path: never, params: never, body: never, response: unknown }
	},
	"/lol-clash/v1/voice-delay/{delaySeconds}": {
		post: { path: [delaySeconds: number], params: never, body: never, response: unknown }
		delete: { path: [delaySeconds: number], params: never, body: never, response: unknown }
	},
	"/lol-cosmetics/v1/favorites/tft/{cosmeticType}/{contentId}": {
		put: { path: [cosmeticType: string, contentId: string], params: never, body: never, response: unknown }
		delete: { path: [cosmeticType: string, contentId: string], params: never, body: never, response: unknown }
	},
	"/lol-cosmetics/v1/selection/companion": {
		put: { path: never, params: never, body: number, response: unknown }
		delete: { path: never, params: never, body: never, response: unknown }
	},
	"/lol-cosmetics/v1/selection/playbook": {
		put: { path: never, params: never, body: number, response: unknown }
		delete: { path: never, params: never, body: never, response: unknown }
	},
	"/lol-cosmetics/v1/selection/tft-damage-skin": {
		put: { path: never, params: never, body: number, response: unknown }
		delete: { path: never, params: never, body: never, response: unknown }
	},
	"/lol-cosmetics/v1/selection/tft-map-skin": {
		put: { path: never, params: never, body: number, response: unknown }
		delete: { path: never, params: never, body: never, response: unknown }
	},
	"/lol-gameflow/v1/early-exit-notifications/eog": {
		get: { path: never, params: never, body: never, response: unknown[] }
		delete: { path: never, params: never, body: never, response: void }
	},
	"/lol-gameflow/v1/early-exit-notifications/eog/{key}": {
		delete: { path: [key: number], params: never, body: never, response: void }
	},
	"/lol-gameflow/v1/early-exit-notifications/missions": {
		get: { path: never, params: never, body: never, response: unknown[] }
		delete: { path: never, params: never, body: never, response: void }
	},
	"/lol-gameflow/v1/early-exit-notifications/missions/{key}": {
		delete: { path: [key: number], params: never, body: never, response: void }
	},
	"/lol-highlights/v1/highlights/{id}": {
		get: { path: [id: number], params: never, body: never, response: LCUTypes.LolHighlightsHighlight }
		put: { path: [id: number], params: never, body: LCUTypes.LolHighlightsHighlight, response: LCUTypes.LolHighlightsHighlight }
		delete: { path: [id: number], params: never, body: never, response: LCUTypes.LolHighlightsHighlight }
	},
	"/lol-honeyfruit/v1/account-claim/migration": {
		get: { path: never, params: never, body: never, response: string }
		post: { path: never, params: never, body: never, response: string }
		delete: { path: never, params: never, body: never, response: unknown }
	},
	"/lol-leaver-buster/v1/notifications/{id}": {
		get: { path: [id: number], params: never, body: never, response: LCUTypes.LolLeaverBusterLeaverBusterNotificationResource }
		delete: { path: [id: number], params: never, body: never, response: unknown }
	},
	"/lol-loadouts/v4/loadouts/{id}": {
		put: { path: [id: string], params: never, body: LCUTypes.LolLoadoutsUpdateLoadoutDTO, response: LCUTypes.LolLoadoutsScopedLoadout }
		patch: { path: [id: string], params: never, body: LCUTypes.LolLoadoutsUpdateLoadoutDTO, response: LCUTypes.LolLoadoutsScopedLoadout }
		delete: { path: [id: string], params: never, body: never, response: void }
	},
	"/lol-lobby/v1/clash": {
		post: { path: never, params: never, body: string, response: unknown }
		delete: { path: never, params: never, body: never, response: unknown }
	},
	"/lol-lobby/v1/lobby/custom/bots/{summonerInternalName}": {
		post: { path: [summonerInternalName: string], params: never, body: LCUTypes.LolLobbyLobbyBotParams, response: unknown }
		delete: { path: [summonerInternalName: string], params: never, body: never, response: unknown }
	},
	"/lol-lobby/v2/lobby": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolLobbyLobbyDto }
		post: { path: never, params: never, body: LCUTypes.LolLobbyLobbyChangeGameDto, response: LCUTypes.LolLobbyLobbyDto }
		delete: { path: never, params: never, body: never, response: void }
	},
	"/lol-lobby/v2/lobby/matchmaking/search": {
		post: { path: never, params: never, body: never, response: unknown }
		delete: { path: never, params: never, body: never, response: unknown }
	},
	"/lol-lobby/v2/notifications/{notificationId}": {
		delete: { path: [notificationId: string], params: never, body: never, response: unknown }
	},
	"/lol-login/v1/service-proxy-async-requests/{serviceName}/{methodName}": {
		post: { path: [serviceName: string, methodName: string], params: never, body: number, response: void }
		delete: { path: [serviceName: string, methodName: string], params: { "pluginId": number }, body: never, response: void }
	},
	"/lol-login/v1/session": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolLoginLoginSession }
		post: { path: never, params: never, body: LCUTypes.LolLoginUsernameAndPassword, response: LCUTypes.LolLoginLoginSession }
		delete: { path: never, params: never, body: never, response: void }
	},
	"/lol-login/v1/shutdown-locks/{lockName}": {
		put: { path: [lockName: string], params: never, body: never, response: void }
		delete: { path: [lockName: string], params: never, body: never, response: void }
	},
	"/lol-loot/v1/loot-grants/{id}": {
		delete: { path: [id: number], params: never, body: never, response: unknown }
	},
	"/lol-loot/v1/player-loot/{lootId}/new-notification": {
		delete: { path: [lootId: string], params: never, body: never, response: unknown }
	},
	"/lol-matchmaking/v1/search": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolMatchmakingMatchmakingSearchResource }
		post: { path: never, params: never, body: never, response: unknown }
		put: { path: never, params: never, body: LCUTypes.LolMatchmakingMatchmakingSearchResource, response: unknown }
		delete: { path: never, params: never, body: never, response: unknown }
	},
	"/lol-patch/v1/notifications/{id}": {
		delete: { path: [id: string], params: never, body: never, response: void }
	},
	"/lol-perks/v1/pages": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolPerksPerkPageResource[] }
		post: { path: never, params: never, body: LCUTypes.LolPerksPerkPageResource, response: LCUTypes.LolPerksPerkPageResource }
		delete: { path: never, params: never, body: never, response: unknown }
	},
	"/lol-perks/v1/pages/{id}": {
		get: { path: [id: number], params: never, body: never, response: LCUTypes.LolPerksPerkPageResource }
		put: { path: [id: number], params: never, body: LCUTypes.LolPerksPerkPageResource, response: LCUTypes.LolPerksPerkPageResource }
		delete: { path: [id: number], params: never, body: never, response: unknown }
	},
	"/lol-perks/v1/pages/{id}/auto-modified-selections": {
		delete: { path: [id: number], params: never, body: never, response: unknown }
	},
	"/lol-player-behavior/v1/code-of-conduct-notification": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolPlayerBehaviorCodeOfConductNotification }
		delete: { path: never, params: never, body: never, response: unknown }
	},
	"/lol-player-behavior/v1/reporter-feedback/{id}": {
		get: { path: [id: string], params: never, body: never, response: LCUTypes.LolPlayerBehaviorReporterFeedback }
		delete: { path: [id: string], params: never, body: never, response: LCUTypes.LolPlayerBehaviorReporterFeedback }
	},
	"/lol-player-messaging/v1/celebration/notification/{id}/acknowledge": {
		delete: { path: [id: number], params: never, body: never, response: unknown }
	},
	"/lol-player-messaging/v1/notification/{id}/acknowledge": {
		delete: { path: [id: number], params: never, body: never, response: unknown }
	},
	"/lol-player-report-sender/v1/reported-players/gameId/{gameId}": {
		get: { path: [gameId: number], params: never, body: never, response: string[] }
		delete: { path: [gameId: number], params: never, body: never, response: unknown }
	},
	"/lol-pre-end-of-game/v1/registration/{sequenceEventName}": {
		delete: { path: [sequenceEventName: string], params: never, body: never, response: void }
	},
	"/lol-premade-voice/v1/mic-test": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolPremadeVoiceAudioPropertiesResource }
		post: { path: never, params: never, body: never, response: unknown }
		delete: { path: never, params: never, body: never, response: unknown }
	},
	"/lol-premade-voice/v1/session": {
		post: { path: never, params: never, body: never, response: void }
		delete: { path: never, params: never, body: never, response: void }
	},
	"/lol-rms/v1/champion-mastery-leaveup-update/{id}": {
		delete: { path: [id: number], params: never, body: never, response: unknown }
	},
	"/lol-rso-auth/v1/authorization": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolRsoAuthAuthorization }
		delete: { path: never, params: never, body: never, response: void }
	},
	"/lol-rso-auth/v1/session": {
		delete: { path: never, params: never, body: never, response: void }
	},
	"/lol-rso-auth/v2/config": {
		post: { path: never, params: never, body: LCUTypes.LolRsoAuthPublicClientConfig, response: void }
		delete: { path: never, params: never, body: never, response: void }
	},
	"/lol-simple-dialog-messages/v1/messages/{messageId}": {
		delete: { path: [messageId: number], params: never, body: never, response: unknown }
	},
	"/lol-statstones/v1/vignette-notifications": {
		get: { path: never, params: never, body: never, response: unknown[] }
		delete: { path: never, params: never, body: never, response: void }
	},
	"/lol-statstones/v1/vignette-notifications/{key}": {
		delete: { path: [key: number], params: never, body: never, response: void }
	},
	"/lol-suggested-players/v1/suggested-players/{summonerId}": {
		delete: { path: [summonerId: number], params: never, body: never, response: unknown }
	},
	"/lol-tft-team-planner/v1/team/champions": {
		patch: { path: never, params: never, body: number[], response: unknown }
		delete: { path: never, params: never, body: never, response: unknown }
	},
	"/lol-tft-team-planner/v1/team/championsById/{championName}": {
		post: { path: [championName: string], params: never, body: never, response: unknown }
		delete: { path: [championName: string], params: never, body: never, response: unknown }
	},
	"/lol-tft-team-planner/v1/team/champions/{index}": {
		post: { path: [index: number], params: never, body: string, response: unknown }
		delete: { path: [index: number], params: never, body: never, response: unknown }
	},
	"/lol-tft-team-planner/v1/team/dirty": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolTftTeamPlannerTeamPlan }
		delete: { path: never, params: never, body: never, response: void }
	},
	"/lol-tft-troves/v1/roll-rewards": {
		get: { path: never, params: never, body: never, response: void }
		delete: { path: never, params: never, body: never, response: void }
	},
	"/patcher/v1/notifications/{id}": {
		delete: { path: [id: string], params: never, body: never, response: unknown }
	},
	"/patcher/v1/products/{product-id}": {
		delete: { path: [productId: string], params: never, body: never, response: unknown }
	},
	"/player-notifications/v1/notifications/{id}": {
		get: { path: [id: number], params: never, body: never, response: LCUTypes.PlayerNotificationsPlayerNotificationResource }
		put: { path: [id: number], params: never, body: unknown, response: LCUTypes.PlayerNotificationsPlayerNotificationResource }
		delete: { path: [id: number], params: never, body: never, response: unknown }
	},
	"/riot-messaging-service/v1/connect": {
		post: { path: never, params: never, body: string, response: void }
		delete: { path: never, params: never, body: never, response: void }
	},
	"/riot-messaging-service/v1/entitlements": {
		post: { path: never, params: never, body: LCUTypes.RiotMessagingServiceEntitlementsToken, response: void }
		delete: { path: never, params: never, body: never, response: void }
	},
	"/riot-messaging-service/v1/session": {
		get: { path: never, params: never, body: never, response: LCUTypes.RiotMessagingServiceSession }
		delete: { path: never, params: never, body: never, response: void }
	},
	"/riotclient/affinity": {
		get: { path: never, params: never, body: never, response: unknown }
		post: { path: never, params: never, body: string, response: void }
		delete: { path: never, params: never, body: never, response: void }
	},
	"/riotclient/splash": {
		put: { path: never, params: never, body: string, response: void }
		delete: { path: never, params: never, body: never, response: void }
	},
	"/riotclient/v1/auth-tokens/{authToken}": {
		put: { path: [authToken: string], params: never, body: never, response: unknown }
		delete: { path: [authToken: string], params: never, body: never, response: unknown }
	},
	"/tracing/v1/performance/{name}": {
		post: { path: [name: string], params: never, body: never, response: void }
		delete: { path: [name: string], params: never, body: never, response: void }
	},
	"/tracing/v1/trace/time-series-event/{eventName}": {
		post: { path: [eventName: string], params: never, body: number, response: void }
		delete: { path: [eventName: string], params: { "when": number, "suffix"?: string }, body: never, response: void }
	},
	"/Exit": {
		post: { path: never, params: never, body: never, response: unknown }
	},
	"/anti-addiction/v1/policies/{policyType}/anti-addiction-state": {
		get: { path: [policyType: LCUTypes.LolAntiAddictionPolicyType], params: never, body: never, response: LCUTypes.LolAntiAddictionAntiAddictionState }
	},
	"/{plugin}/assets/{+path}": {
		get: { path: [plugin: string, path: string], params: { "if-none-match"?: string }, body: never, response: unknown }
		head: { path: [plugin: string, path: string], params: { "if-none-match"?: string }, body: never, response: unknown }
	},
	"/client-config/v1/config": {
		get: { path: never, params: { "type": LCUTypes.ClientConfigConfigType, "app"?: string, "version"?: string, "patchline"?: string, "region"?: string, "namespace"?: string }, body: never, response: Record<string, unknown> }
	},
	"/client-config/v1/config/{name}": {
		get: { path: [name: string], params: { "type": LCUTypes.ClientConfigConfigType, "app"?: string, "version"?: string, "patchline"?: string, "region"?: string }, body: never, response: unknown }
	},
	"/client-config/v1/status/{type}": {
		get: { path: [type: LCUTypes.ClientConfigConfigType], params: never, body: never, response: LCUTypes.ClientConfigConfigStatus }
	},
	"/client-config/v2/config/{name}": {
		get: { path: [name: string], params: never, body: never, response: unknown }
	},
	"/client-config/v2/namespace/{namespace}": {
		get: { path: [namespace: string], params: never, body: never, response: Record<string, unknown> }
	},
	"/client-config/v2/namespace/{namespace}/player": {
		get: { path: [namespace: string], params: never, body: never, response: Record<string, unknown> }
	},
	"/client-config/v2/namespace/{namespace}/public": {
		get: { path: [namespace: string], params: never, body: never, response: Record<string, unknown> }
	},
	"/config/v1/config": {
		get: { path: never, params: never, body: never, response: unknown }
	},
	"/cookie-jar/v1/cookies": {
		get: { path: never, params: never, body: never, response: LCUTypes.cookie[] }
		post: { path: never, params: never, body: LCUTypes.cookie[], response: unknown }
	},
	"/crash-reporting/v1/crash-status": {
		get: { path: never, params: never, body: never, response: boolean }
	},
	"/data-store/v1/install-dir": {
		get: { path: never, params: never, body: never, response: string }
	},
	"/data-store/v1/install-settings/{+path}": {
		get: { path: [path: string], params: never, body: never, response: unknown }
		post: { path: [path: string], params: never, body: unknown, response: void }
	},
	"/data-store/v1/system-settings/{+path}": {
		get: { path: [path: string], params: never, body: never, response: unknown }
	},
	"/deep-links/v1/settings": {
		get: { path: never, params: never, body: never, response: LCUTypes.DeepLinksDeepLinksSettings }
	},
	"/dx9-deprecation/notification-type": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolDx9DeprecationDx9DeprecationNotificationType }
	},
	"/entitlements/v1/token": {
		get: { path: never, params: never, body: never, response: LCUTypes.EntitlementsToken }
	},
	"/lol-account-verification/v1/is-verified": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolAccountVerificationIsVerifiedResponse }
	},
	"/lol-account-verification/v1/phone-number": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolAccountVerificationPhoneNumberResponse }
	},
	"/lol-active-boosts/v1/active-boosts": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolActiveBoostsActiveBoosts }
	},
	"/lol-anti-addiction/v1/anti-addiction-token": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolAntiAddictionAntiAddictionToken }
	},
	"/lol-banners/v1/current-summoner/flags": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolBannersBannerFlag[] }
	},
	"/lol-banners/v1/current-summoner/flags/equipped": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolBannersBannerFlag }
		put: { path: never, params: never, body: LCUTypes.LolBannersBannerFlag, response: LCUTypes.LolBannersBannerFlag }
	},
	"/lol-banners/v1/current-summoner/frames/equipped": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolBannersBannerFrame }
	},
	"/lol-banners/v1/players/{puuid}/flags/equipped": {
		get: { path: [puuid: string], params: never, body: never, response: LCUTypes.LolBannersBannerFlag }
	},
	"/lol-career-stats/v1/champion-averages/{championId}/{position}/{tier}/{queue}": {
		get: { path: [championId: number, position: LCUTypes.LolCareerStatsSummonersRiftPosition, tier: string, queue: LCUTypes.LolCareerStatsCareerStatsQueueType], params: never, body: never, response: LCUTypes.LolCareerStatsChampionQueueStatsResponse }
	},
	"/lol-career-stats/v1/champion-averages/season/{season}/{championId}/{position}/{tier}/{queue}": {
		get: { path: [season: number, championId: number, position: LCUTypes.LolCareerStatsSummonersRiftPosition, tier: string, queue: LCUTypes.LolCareerStatsCareerStatsQueueType], params: never, body: never, response: LCUTypes.LolCareerStatsChampionQueueStatsResponse }
	},
	"/lol-career-stats/v1/champion-experts/{championId}/{position}": {
		get: { path: [championId: number, position: LCUTypes.LolCareerStatsSummonersRiftPosition], params: never, body: never, response: LCUTypes.LolCareerStatsExpertPlayer[] }
	},
	"/lol-career-stats/v1/champion-experts/season/{season}/{championId}/{position}": {
		get: { path: [season: number, championId: number, position: LCUTypes.LolCareerStatsSummonersRiftPosition], params: never, body: never, response: LCUTypes.LolCareerStatsExpertPlayer[] }
	},
	"/lol-career-stats/v1/position-averages/{position}/{tier}/{queue}": {
		get: { path: [position: LCUTypes.LolCareerStatsSummonersRiftPosition, tier: string, queue: LCUTypes.LolCareerStatsCareerStatsQueueType], params: never, body: never, response: LCUTypes.LolCareerStatsChampionQueueStatsResponse }
	},
	"/lol-career-stats/v1/position-averages/season/{season}/{position}/{tier}/{queue}": {
		get: { path: [season: number, position: LCUTypes.LolCareerStatsSummonersRiftPosition, tier: string, queue: LCUTypes.LolCareerStatsCareerStatsQueueType], params: never, body: never, response: LCUTypes.LolCareerStatsChampionQueueStatsResponse }
	},
	"/lol-career-stats/v1/position-experts/{position}": {
		get: { path: [position: LCUTypes.LolCareerStatsSummonersRiftPosition], params: never, body: never, response: LCUTypes.LolCareerStatsExpertPlayer[] }
	},
	"/lol-career-stats/v1/position-experts/season/{season}/{position}": {
		get: { path: [season: number, position: LCUTypes.LolCareerStatsSummonersRiftPosition], params: never, body: never, response: LCUTypes.LolCareerStatsExpertPlayer[] }
	},
	"/lol-career-stats/v1/summoner-games/{puuid}": {
		get: { path: [puuid: string], params: never, body: never, response: unknown }
	},
	"/lol-career-stats/v1/summoner-games/{puuid}/season/{season}": {
		get: { path: [puuid: string, season: number], params: never, body: never, response: unknown }
	},
	"/lol-career-stats/v1/summoner-stats/{puuid}/{season}/{queue}/{position}": {
		get: { path: [puuid: string, season: number, queue: LCUTypes.LolCareerStatsCareerStatsQueueType, position: LCUTypes.LolCareerStatsSummonersRiftPosition], params: { "championId"?: number }, body: never, response: unknown }
	},
	"/lol-catalog/v1/item-details": {
		get: { path: never, params: { "inventoryType": string, "itemId": number }, body: never, response: LCUTypes.LolCatalogCatalogPluginItemWithDetails }
	},
	"/lol-catalog/v1/items": {
		get: { path: never, params: { "inventoryType": string, "itemIds": number[] }, body: never, response: LCUTypes.LolCatalogItemChoiceDetails[] }
	},
	"/lol-catalog/v1/items/{inventoryType}": {
		get: { path: [inventoryType: string], params: never, body: never, response: LCUTypes.LolCatalogCatalogPluginItem[] }
	},
	"/lol-catalog/v1/items-list-details": {
		get: { path: never, params: { "catalogItemsKeys": LCUTypes.LolCatalogItemKey[] }, body: never, response: LCUTypes.LolCatalogCatalogPluginItemWithDetails[] }
	},
	"/lol-catalog/v1/items-list-details/skip-cache": {
		get: { path: never, params: { "catalogItemsKeys": LCUTypes.LolCatalogItemKey[] }, body: never, response: LCUTypes.LolCatalogCatalogPluginItemWithDetails[] }
	},
	"/lol-challenges/v1/available-queue-ids": {
		get: { path: never, params: never, body: never, response: number[] }
	},
	"/lol-challenges/v1/challenges/category-data": {
		get: { path: never, params: never, body: never, response: Record<string, LCUTypes.LolChallengesUIChallenge> }
	},
	"/lol-challenges/v1/challenges/local-player": {
		get: { path: never, params: never, body: never, response: Record<string, LCUTypes.LolChallengesUIChallenge> }
	},
	"/lol-challenges/v1/client-state": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolChallengesClientState }
	},
	"/lol-challenges/v1/level-points": {
		get: { path: never, params: never, body: never, response: Record<string, number> }
	},
	"/lol-challenges/v1/my-updated-challenges/{gameId}": {
		get: { path: [gameId: number], params: never, body: never, response: Record<string, LCUTypes.LolChallengesUIChallenge> }
	},
	"/lol-challenges/v1/penalty": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolChallengesUIChallengePenalty }
	},
	"/lol-challenges/v1/seasons": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolChallengesChallengeSeason[] }
	},
	"/lol-challenges/v1/summary-player-data/local-player": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolChallengesUIPlayerSummary }
	},
	"/lol-challenges/v1/summary-player-data/player/{puuid}": {
		get: { path: [puuid: string], params: never, body: never, response: LCUTypes.LolChallengesUIPlayerSummary }
	},
	"/lol-challenges/v1/summary-players-data/players": {
		get: { path: never, params: { "puuids": string[] }, body: never, response: Record<string, LCUTypes.LolChallengesUIPlayerSummary> }
	},
	"/lol-challenges/v1/updated-challenges/{gameId}/{puuid}": {
		get: { path: [gameId: number, puuid: string], params: never, body: never, response: Record<string, LCUTypes.LolChallengesUIChallenge> }
	},
	"/lol-challenges/v2/titles/all": {
		get: { path: never, params: never, body: never, response: Record<string, LCUTypes.LolChallengesUITitle> }
	},
	"/lol-challenges/v2/titles/local-player": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolChallengesUITitle[] }
	},
	"/lol-champ-select-legacy/v1/bannable-champion-ids": {
		get: { path: never, params: never, body: never, response: number[] }
	},
	"/lol-champ-select-legacy/v1/current-champion": {
		get: { path: never, params: never, body: never, response: number }
	},
	"/lol-champ-select-legacy/v1/disabled-champion-ids": {
		get: { path: never, params: never, body: never, response: number[] }
	},
	"/lol-champ-select-legacy/v1/implementation-active": {
		get: { path: never, params: never, body: never, response: boolean }
	},
	"/lol-champ-select-legacy/v1/pickable-champion-ids": {
		get: { path: never, params: never, body: never, response: number[] }
	},
	"/lol-champ-select-legacy/v1/pickable-skin-ids": {
		get: { path: never, params: never, body: never, response: number[] }
	},
	"/lol-champ-select-legacy/v1/session": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolChampSelectLegacyChampSelectSession }
	},
	"/lol-champ-select-legacy/v1/session/my-selection": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolChampSelectLegacyChampSelectPlayerSelection }
		patch: { path: never, params: never, body: LCUTypes.LolChampSelectLegacyChampSelectMySelection, response: unknown }
	},
	"/lol-champ-select-legacy/v1/session/timer": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolChampSelectLegacyChampSelectTimer }
	},
	"/lol-champ-select-legacy/v1/session/trades": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolChampSelectLegacyChampSelectTradeContract[] }
	},
	"/lol-champ-select-legacy/v1/session/trades/{id}": {
		get: { path: [id: number], params: never, body: never, response: LCUTypes.LolChampSelectLegacyChampSelectTradeContract }
	},
	"/lol-champ-select-legacy/v1/team-boost": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolChampSelectLegacyTeamBoost }
	},
	"/lol-champ-select/v1/all-grid-champions": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolChampSelectChampGridChampion[] }
	},
	"/lol-champ-select/v1/bannable-champion-ids": {
		get: { path: never, params: never, body: never, response: number[] }
	},
	"/lol-champ-select/v1/current-champion": {
		get: { path: never, params: never, body: never, response: number }
	},
	"/lol-champ-select/v1/disabled-champion-ids": {
		get: { path: never, params: never, body: never, response: number[] }
	},
	"/lol-champ-select/v1/grid-champions/{championId}": {
		get: { path: [championId: number], params: never, body: never, response: LCUTypes.LolChampSelectChampGridChampion }
	},
	"/lol-champ-select/v1/muted-players": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolChampSelectMutedPlayerInfo[] }
	},
	"/lol-champ-select/v1/ongoing-swap": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolChampSelectChampSelectSwapNotification }
	},
	"/lol-champ-select/v1/ongoing-trade": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolChampSelectChampSelectTradeNotification }
	},
	"/lol-champ-select/v1/pickable-champion-ids": {
		get: { path: never, params: never, body: never, response: number[] }
	},
	"/lol-champ-select/v1/pickable-skin-ids": {
		get: { path: never, params: never, body: never, response: number[] }
	},
	"/lol-champ-select/v1/pin-drop-notification": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolChampSelectChampSelectPinDropNotification }
	},
	"/lol-champ-select/v1/session": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolChampSelectChampSelectSession }
	},
	"/lol-champ-select/v1/session/my-selection": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolChampSelectChampSelectPlayerSelection }
		patch: { path: never, params: never, body: LCUTypes.LolChampSelectChampSelectMySelection, response: unknown }
	},
	"/lol-champ-select/v1/session/swaps": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolChampSelectChampSelectSwapContract[] }
	},
	"/lol-champ-select/v1/session/swaps/{id}": {
		get: { path: [id: number], params: never, body: never, response: LCUTypes.LolChampSelectChampSelectSwapContract }
	},
	"/lol-champ-select/v1/session/timer": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolChampSelectChampSelectTimer }
	},
	"/lol-champ-select/v1/session/trades": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolChampSelectChampSelectTradeContract[] }
	},
	"/lol-champ-select/v1/session/trades/{id}": {
		get: { path: [id: number], params: never, body: never, response: LCUTypes.LolChampSelectChampSelectTradeContract }
	},
	"/lol-champ-select/v1/sfx-notifications": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolChampSelectSfxNotification[] }
	},
	"/lol-champ-select/v1/skin-carousel-skins": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolChampSelectSkinSelectorSkin[] }
	},
	"/lol-champ-select/v1/skin-selector-info": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolChampSelectSkinSelectorInfo }
	},
	"/lol-champ-select/v1/summoners/{slotId}": {
		get: { path: [slotId: number], params: never, body: never, response: LCUTypes.LolChampSelectChampSelectSummoner }
	},
	"/lol-champ-select/v1/team-boost": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolChampSelectTeamBoost }
	},
	"/lol-champion-mastery/v1/{puuid}/champion-mastery": {
		get: { path: [puuid: string], params: never, body: never, response: LCUTypes.LolChampionMasteryChampionMastery[] }
	},
	"/lol-champion-mastery/v1/local-player/champion-mastery": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolChampionMasteryChampionMastery[] }
	},
	"/lol-champion-mastery/v1/local-player/champion-mastery-score": {
		get: { path: never, params: never, body: never, response: number }
	},
	"/lol-champion-mastery/v1/local-player/champion-mastery-sets-and-rewards": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolChampionMasteryUIAllChampionMasteryWithSets }
	},
	"/lol-champion-mastery/v1/notifications": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolChampionMasteryChampionMasteryChangeNotification }
	},
	"/lol-champions/v1/inventories/{summonerId}/champions": {
		get: { path: [summonerId: number], params: never, body: never, response: LCUTypes.LolChampionsCollectionsChampion[] }
	},
	"/lol-champions/v1/inventories/{summonerId}/champions/{championId}": {
		get: { path: [summonerId: number, championId: number], params: never, body: never, response: LCUTypes.LolChampionsCollectionsChampion }
	},
	"/lol-champions/v1/inventories/{summonerId}/champions/{championId}/skins": {
		get: { path: [summonerId: number, championId: number], params: never, body: never, response: LCUTypes.LolChampionsCollectionsChampionSkin[] }
	},
	"/lol-champions/v1/inventories/{summonerId}/champions/{championId}/skins/{championSkinId}": {
		get: { path: [summonerId: number, championId: number, championSkinId: number], params: never, body: never, response: LCUTypes.LolChampionsCollectionsChampionSkin }
	},
	"/lol-champions/v1/inventories/{summonerId}/champions/{championId}/skins/{skinId}/chromas": {
		get: { path: [summonerId: number, championId: number, skinId: number], params: never, body: never, response: LCUTypes.LolChampionsCollectionsChampionChroma[] }
	},
	"/lol-champions/v1/inventories/{summonerId}/champions-minimal": {
		get: { path: [summonerId: number], params: never, body: never, response: LCUTypes.LolChampionsCollectionsChampionMinimal[] }
	},
	"/lol-champions/v1/inventories/{summonerId}/champions-playable-count": {
		get: { path: [summonerId: number], params: never, body: never, response: LCUTypes.LolChampionsCollectionsChampionPlayableCounts }
	},
	"/lol-champions/v1/inventories/{summonerId}/skins-minimal": {
		get: { path: [summonerId: number], params: never, body: never, response: LCUTypes.LolChampionsCollectionsChampionSkinMinimal[] }
	},
	"/lol-champions/v1/owned-champions-minimal": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolChampionsCollectionsChampionMinimal[] }
	},
	"/lol-chat/v1/blocked-players": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolChatBlockedPlayerResource[] }
		post: { path: never, params: never, body: LCUTypes.LolChatBlockedPlayerResource, response: unknown }
	},
	"/lol-chat/v1/config": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolChatChatServiceDynamicClientConfig }
	},
	"/lol-chat/v1/conversations": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolChatConversationResource[] }
		post: { path: never, params: never, body: LCUTypes.LolChatConversationResource, response: LCUTypes.LolChatConversationResource }
	},
	"/lol-chat/v1/conversations/{id}/participants": {
		get: { path: [id: string], params: never, body: never, response: LCUTypes.LolChatUserResource[] }
	},
	"/lol-chat/v1/conversations/{id}/participants/{pid}": {
		get: { path: [id: string, pid: string], params: never, body: never, response: LCUTypes.LolChatUserResource }
	},
	"/lol-chat/v1/conversations/notify": {
		get: { path: never, params: never, body: never, response: string }
	},
	"/lol-chat/v1/errors": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolChatErrorResource[] }
	},
	"/lol-chat/v1/friend-counts": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolChatFriendCountsResource }
	},
	"/lol-chat/v1/friend-exists/{summonerId}": {
		get: { path: [summonerId: number], params: never, body: never, response: boolean }
	},
	"/lol-chat/v1/friend-groups": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolChatGroupResource[] }
		post: { path: never, params: never, body: LCUTypes.LolChatGroupResource, response: unknown }
	},
	"/lol-chat/v1/friends": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolChatFriendResource[] }
	},
	"/lol-chat/v1/me": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolChatUserResource }
		put: { path: never, params: never, body: LCUTypes.LolChatUserResource, response: LCUTypes.LolChatUserResource }
	},
	"/lol-chat/v1/resources": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolChatProductMetadataMap }
	},
	"/lol-chat/v1/session": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolChatSessionResource }
	},
	"/lol-chat/v1/settings": {
		get: { path: never, params: never, body: never, response: unknown }
		put: { path: never, params: { "data": unknown, "doAsync"?: boolean }, body: never, response: unknown }
	},
	"/lol-chat/v2/friend-requests": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolChatFriendRequestResource[] }
		post: { path: never, params: never, body: LCUTypes.LolChatFriendRequestResource, response: unknown }
	},
	"/lol-clash/v1/all-tournaments": {
		get: { path: never, params: never, body: never, response: LCUTypes.TournamentDTO[] }
	},
	"/lol-clash/v1/awaiting-resent-eog": {
		get: { path: never, params: never, body: never, response: boolean }
	},
	"/lol-clash/v1/bracket/{bracketId}": {
		get: { path: [bracketId: number], params: never, body: never, response: LCUTypes.LolClashBracket }
	},
	"/lol-clash/v1/checkin-allowed": {
		get: { path: never, params: never, body: never, response: boolean }
	},
	"/lol-clash/v1/currentTournamentIds": {
		get: { path: never, params: never, body: never, response: number[] }
	},
	"/lol-clash/v1/disabled-config": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolClashClashDisabledConfig }
	},
	"/lol-clash/v1/enabled": {
		get: { path: never, params: never, body: never, response: boolean }
	},
	"/lol-clash/v1/eog-player-update": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolClashEogPlayerUpdateDTO }
	},
	"/lol-clash/v1/event/{uuid}": {
		get: { path: [uuid: string], params: never, body: never, response: LCUTypes.ClashEventData }
	},
	"/lol-clash/v1/game-end": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolClashTournamentGameEnd }
	},
	"/lol-clash/v1/historyandwinners": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolClashTournamentHistoryAndWinners }
	},
	"/lol-clash/v1/iconconfig": {
		get: { path: never, params: never, body: never, response: unknown }
	},
	"/lol-clash/v1/invited-roster-ids": {
		get: { path: never, params: never, body: never, response: string[] }
	},
	"/lol-clash/v1/lft/team/requests": {
		get: { path: never, params: never, body: never, response: LCUTypes.PendingOpenedTeamDTO[] }
	},
	"/lol-clash/v1/notifications": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolClashPlayerNotificationData }
	},
	"/lol-clash/v1/ping": {
		get: { path: never, params: never, body: never, response: unknown }
	},
	"/lol-clash/v1/player": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolClashPlayerData }
	},
	"/lol-clash/v1/player/chat-rosters": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolClashPlayerChatRoster[] }
	},
	"/lol-clash/v1/player/history": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolClashRosterStats[] }
	},
	"/lol-clash/v1/playmode-restricted": {
		get: { path: never, params: never, body: never, response: boolean }
	},
	"/lol-clash/v1/ready": {
		get: { path: never, params: never, body: never, response: boolean }
	},
	"/lol-clash/v1/rewards": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolClashPlayerRewards }
	},
	"/lol-clash/v1/roster/{rosterId}": {
		get: { path: [rosterId: string], params: never, body: never, response: LCUTypes.LolClashRoster }
	},
	"/lol-clash/v1/roster/{rosterId}/stats": {
		get: { path: [rosterId: number], params: never, body: never, response: LCUTypes.LolClashRosterStats }
	},
	"/lol-clash/v1/scouting/champions": {
		get: { path: never, params: { "puuids": string[] }, body: never, response: LCUTypes.LolClashScoutingChampions[] }
	},
	"/lol-clash/v1/scouting/matchhistory": {
		get: { path: never, params: { "summonerIds": number[] }, body: never, response: unknown }
	},
	"/lol-clash/v1/season-rewards/{seasonId}": {
		get: { path: [seasonId: number], params: never, body: never, response: LCUTypes.ClashSeasonRewardResult }
	},
	"/lol-clash/v1/simple-state-flags": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolClashSimpleStateFlag[] }
	},
	"/lol-clash/v1/thirdparty/team-data": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolClashThirdPartyApiRoster }
	},
	"/lol-clash/v1/time": {
		get: { path: never, params: never, body: never, response: number }
	},
	"/lol-clash/v1/tournament/{tournamentId}": {
		get: { path: [tournamentId: number], params: never, body: never, response: LCUTypes.LolClashTournament }
	},
	"/lol-clash/v1/tournament/{tournamentId}/get-player-tiers": {
		get: { path: [tournamentId: number], params: { "summonerIds": number[] }, body: never, response: LCUTypes.PlayerTierDTO[] }
	},
	"/lol-clash/v1/tournament/{tournamentId}/player": {
		get: { path: [tournamentId: number], params: never, body: never, response: LCUTypes.LolClashPlayerTournamentData }
	},
	"/lol-clash/v1/tournament/{tournamentId}/player-honor-restricted": {
		get: { path: [tournamentId: number], params: never, body: never, response: boolean }
	},
	"/lol-clash/v1/tournament/{tournamentId}/stateInfo": {
		get: { path: [tournamentId: number], params: never, body: never, response: LCUTypes.LolClashTournamentStateInfo }
	},
	"/lol-clash/v1/tournament/{tournamentId}/winners": {
		get: { path: [tournamentId: number], params: never, body: never, response: LCUTypes.LolClashTournamentWinnerHistory }
	},
	"/lol-clash/v1/tournament/cancelled": {
		get: { path: never, params: never, body: never, response: number[] }
	},
	"/lol-clash/v1/tournament/get-all-player-tiers": {
		get: { path: never, params: never, body: never, response: LCUTypes.PlayerTierDTO[] }
	},
	"/lol-clash/v1/tournament-state-info": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolClashTournamentStateInfo[] }
	},
	"/lol-clash/v1/tournament-summary": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolClashTournamentSummary[] }
	},
	"/lol-clash/v1/visible": {
		get: { path: never, params: never, body: never, response: boolean }
	},
	"/lol-clash/v1/voice-enabled": {
		get: { path: never, params: never, body: never, response: boolean }
	},
	"/lol-clash/v2/playmode-restricted": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolClashPlaymodeRestrictedInfo }
	},
	"/lol-client-config/v3/client-config/{name}": {
		get: { path: [name: string], params: never, body: never, response: unknown }
	},
	"/lol-client-config/v3/client-config/operational/{name}": {
		get: { path: [name: string], params: never, body: never, response: unknown }
	},
	"/lol-collections/v1/inventories/{puuid}/champion-mastery": {
		get: { path: [puuid: string], params: never, body: never, response: LCUTypes.LolCollectionsCollectionsChampionMastery[] }
	},
	"/lol-collections/v1/inventories/{puuid}/champion-mastery/top": {
		get: { path: [puuid: string], params: { "limit": number, "sortRule"?: string }, body: never, response: LCUTypes.LolCollectionsCollectionsTopChampionMasteries }
	},
	"/lol-collections/v1/inventories/{summonerId}/backdrop": {
		get: { path: [summonerId: number], params: never, body: never, response: LCUTypes.LolCollectionsCollectionsSummonerBackdrop }
	},
	"/lol-collections/v1/inventories/{summonerId}/spells": {
		get: { path: [summonerId: number], params: never, body: never, response: LCUTypes.LolCollectionsCollectionsSummonerSpells }
	},
	"/lol-collections/v1/inventories/{summonerId}/ward-skins": {
		get: { path: [summonerId: number], params: never, body: never, response: LCUTypes.LolCollectionsCollectionsWardSkin[] }
	},
	"/lol-collections/v1/inventories/{summonerId}/ward-skins/{wardSkinId}": {
		get: { path: [summonerId: number, wardSkinId: number], params: never, body: never, response: LCUTypes.LolCollectionsCollectionsWardSkin }
	},
	"/lol-collections/v1/inventories/chest-eligibility": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolCollectionsCollectionsChestEligibility }
	},
	"/lol-collections/v1/inventories/local-player/champion-mastery-score": {
		get: { path: never, params: never, body: never, response: number }
	},
	"/lol-collections/v1/inventories/scouting": {
		get: { path: never, params: { "puuids": string[] }, body: never, response: LCUTypes.RankedScoutingDTO[] }
	},
	"/lol-content-targeting/v1/filters": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolContentTargetingContentTargetingFilterResponse }
	},
	"/lol-content-targeting/v1/locale": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolContentTargetingContentTargetingLocaleResponse }
	},
	"/lol-content-targeting/v1/protected_filters": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolContentTargetingContentTargetingFilterResponse }
	},
	"/lol-cosmetics/v1/favorites/tft/companions": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolCosmeticsCompanionsFavoritesViewModel }
	},
	"/lol-cosmetics/v1/favorites/tft/damage-skins": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolCosmeticsTFTDamageSkinFavoritesViewModel }
	},
	"/lol-cosmetics/v1/favorites/tft/map-skins": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolCosmeticsTFTMapSkinFavoritesViewModel }
	},
	"/lol-cosmetics/v1/inventories/{setName}/companions": {
		get: { path: [setName: string], params: never, body: never, response: LCUTypes.LolCosmeticsCompanionsGroupedViewModel }
	},
	"/lol-cosmetics/v1/inventories/{setName}/damage-skins": {
		get: { path: [setName: string], params: never, body: never, response: LCUTypes.LolCosmeticsTFTDamageSkinGroupedViewModel }
	},
	"/lol-cosmetics/v1/inventories/{setName}/map-skins": {
		get: { path: [setName: string], params: never, body: never, response: LCUTypes.LolCosmeticsTFTMapSkinGroupedViewModel }
	},
	"/lol-cosmetics/v1/inventories/{setName}/playbooks": {
		get: { path: [setName: string], params: never, body: never, response: LCUTypes.LolCosmeticsTFTPlaybookGroupedViewModel }
	},
	"/lol-drops/v1/drop-tables": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolDropsCapDropsDropTableWithPityDTO[] }
	},
	"/lol-drops/v1/drop-tables/{dropTableId}": {
		get: { path: [dropTableId: string], params: never, body: never, response: LCUTypes.LolDropsCapDropsDropTableWithPityDTO }
	},
	"/lol-drops/v1/drop-tables/{dropTableId}/odds-list": {
		get: { path: [dropTableId: string], params: never, body: never, response: LCUTypes.LolDropsCapDropsOddsListEntryDTO[] }
	},
	"/lol-drops/v1/drop-tables/{dropTableId}/odds-tree": {
		get: { path: [dropTableId: string], params: never, body: never, response: LCUTypes.LolDropsCapDropsOddsTreeNodeDTO }
	},
	"/lol-drops/v1/drop-tables/{dropTableId}/players/{playerId}/pity-count": {
		get: { path: [dropTableId: string, playerId: string], params: never, body: never, response: LCUTypes.LolDropsCapDropTableCounterDTO }
	},
	"/lol-drops/v1/players/{playerId}/pity-counts": {
		get: { path: [playerId: string], params: never, body: never, response: LCUTypes.LolDropsCapDropTableCounterDTO[] }
	},
	"/lol-drops/v1/players/{playerId}/total-rolls-counts": {
		get: { path: [playerId: string], params: never, body: never, response: LCUTypes.LolDropsCapDropTableCounterDTO[] }
	},
	"/lol-drops/v1/ready": {
		get: { path: never, params: never, body: never, response: boolean }
	},
	"/lol-email-verification/v1/email": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolEmailVerificationEmailVerificationSession }
		put: { path: never, params: never, body: LCUTypes.LolEmailVerificationEmailUpdate, response: unknown }
	},
	"/lol-end-of-game/v1/champion-mastery-updates": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolEndOfGameChampionMasteryUpdate }
	},
	"/lol-end-of-game/v1/eog-stats-block": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolEndOfGameEndOfGameStats }
	},
	"/lol-end-of-game/v1/gameclient-eog-stats-block": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolEndOfGameGameClientEndOfGameStats }
		post: { path: never, params: never, body: LCUTypes.LolEndOfGameGameClientEndOfGameStats, response: unknown }
	},
	"/lol-end-of-game/v1/tft-eog-stats": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolEndOfGameTFTEndOfGameViewModel }
	},
	"/lol-esport-stream-notifications/v1/live-streams": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolEsportStreamNotificationsESportsLiveStreams }
	},
	"/lol-esport-stream-notifications/v1/stream-url": {
		get: { path: never, params: never, body: never, response: string }
	},
	"/lol-event-hub/v1/events": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolEventHubActiveEventUIData[] }
	},
	"/lol-event-hub/v1/events/{eventId}/event-details-data": {
		get: { path: [eventId: string], params: never, body: never, response: LCUTypes.LolEventHubEventDetailsUIData }
	},
	"/lol-event-hub/v1/events/{eventId}/info": {
		get: { path: [eventId: string], params: never, body: never, response: LCUTypes.LolEventHubEventInfoUIData }
	},
	"/lol-event-hub/v1/events/{eventId}/is-grace-period": {
		get: { path: [eventId: string], params: never, body: never, response: boolean }
	},
	"/lol-event-hub/v1/events/{eventId}/narrative": {
		get: { path: [eventId: string], params: never, body: never, response: LCUTypes.LolEventHubNarrativeElement[] }
	},
	"/lol-event-hub/v1/events/{eventId}/pass-background-data": {
		get: { path: [eventId: string], params: never, body: never, response: LCUTypes.LolEventHubEventBackgroundUIData }
	},
	"/lol-event-hub/v1/events/{eventId}/pass-bundles": {
		get: { path: [eventId: string], params: never, body: never, response: LCUTypes.LolEventHubBundleOfferUIData[] }
	},
	"/lol-event-hub/v1/events/{eventId}/progress-info-data": {
		get: { path: [eventId: string], params: never, body: never, response: LCUTypes.LolEventHubProgressInfoUIData }
	},
	"/lol-event-hub/v1/events/{eventId}/progression-purchase-data": {
		get: { path: [eventId: string], params: never, body: never, response: LCUTypes.LolEventHubProgressionPurchaseUIData }
	},
	"/lol-event-hub/v1/events/{eventId}/reward-track/bonus-items": {
		get: { path: [eventId: string], params: never, body: never, response: LCUTypes.LolEventHubRewardTrackItem[] }
	},
	"/lol-event-hub/v1/events/{eventId}/reward-track/bonus-progress": {
		get: { path: [eventId: string], params: never, body: never, response: LCUTypes.LolEventHubRewardTrackProgress }
	},
	"/lol-event-hub/v1/events/{eventId}/reward-track/failure": {
		get: { path: [eventId: string], params: never, body: never, response: LCUTypes.LolEventHubEventHubError }
	},
	"/lol-event-hub/v1/events/{eventId}/reward-track/items": {
		get: { path: [eventId: string], params: never, body: never, response: LCUTypes.LolEventHubRewardTrackItem[] }
	},
	"/lol-event-hub/v1/events/{eventId}/reward-track/progress": {
		get: { path: [eventId: string], params: never, body: never, response: LCUTypes.LolEventHubRewardTrackProgress }
	},
	"/lol-event-hub/v1/events/{eventId}/reward-track/unclaimed-rewards": {
		get: { path: [eventId: string], params: never, body: never, response: LCUTypes.LolEventHubUnclaimedRewardsUIData }
	},
	"/lol-event-hub/v1/events/{eventId}/reward-track/xp": {
		get: { path: [eventId: string], params: never, body: never, response: LCUTypes.LolEventHubRewardTrackXP }
	},
	"/lol-event-hub/v1/events/{eventId}/token-shop": {
		get: { path: [eventId: string], params: never, body: never, response: LCUTypes.LolEventHubTokenShopUIData }
	},
	"/lol-event-hub/v1/events/{eventId}/token-shop/categories-offers": {
		get: { path: [eventId: string], params: never, body: never, response: LCUTypes.LolEventHubCategoryOffersUIData[] }
	},
	"/lol-event-hub/v1/events/{eventId}/token-shop/token-balance": {
		get: { path: [eventId: string], params: never, body: never, response: number }
	},
	"/lol-event-hub/v1/navigation-button-data": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolEventHubNavigationButtonUIData }
	},
	"/lol-event-hub/v1/skins": {
		get: { path: never, params: never, body: never, response: Record<string, LCUTypes.LolEventHubEventPassInfo> }
	},
	"/lol-event-hub/v1/token-upsell": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolEventHubTokenUpsell[] }
	},
	"/lol-event-mission/v1/event-mission": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolTftEventTFTEventMissionChain[] }
	},
	"/lol-game-client-chat/v1/buddies": {
		get: { path: never, params: never, body: never, response: string[] }
	},
	"/lol-game-client-chat/v1/ignored-summoners": {
		get: { path: never, params: never, body: never, response: number[] }
	},
	"/lol-game-client-chat/v1/muted-summoners": {
		get: { path: never, params: never, body: never, response: number[] }
	},
	"/lol-game-client-chat/v2/buddies": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolGameClientChatBuddy[] }
	},
	"/lol-game-client-chat/v2/ignored-players": {
		get: { path: never, params: never, body: never, response: number[] }
	},
	"/lol-game-client-chat/v2/muted-players": {
		get: { path: never, params: never, body: never, response: number[] }
	},
	"/lol-game-queues/v1/custom": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolGameQueuesQueueCustomGame }
	},
	"/lol-game-queues/v1/custom-non-default": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolGameQueuesQueueCustomGame }
	},
	"/lol-game-queues/v1/game-type-config/{gameTypeConfigId}": {
		get: { path: [gameTypeConfigId: number], params: never, body: never, response: LCUTypes.LolGameQueuesQueueGameTypeConfig }
	},
	"/lol-game-queues/v1/game-type-config/{gameTypeConfigId}/map/{mapId}": {
		get: { path: [gameTypeConfigId: number, mapId: number], params: never, body: never, response: LCUTypes.LolGameQueuesQueueGameTypeConfig }
	},
	"/lol-game-queues/v1/queues": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolGameQueuesQueue[] }
	},
	"/lol-game-queues/v1/queues/{id}": {
		get: { path: [id: number], params: never, body: never, response: LCUTypes.LolGameQueuesQueue }
	},
	"/lol-game-queues/v1/queues/type/{queueType}": {
		get: { path: [queueType: string], params: never, body: never, response: LCUTypes.LolGameQueuesQueue }
	},
	"/lol-game-settings/v1/didreset": {
		get: { path: never, params: never, body: never, response: boolean }
	},
	"/lol-game-settings/v1/game-settings": {
		get: { path: never, params: never, body: never, response: unknown }
		patch: { path: never, params: never, body: unknown, response: unknown }
	},
	"/lol-game-settings/v1/game-settings-schema": {
		get: { path: never, params: never, body: never, response: unknown }
	},
	"/lol-game-settings/v1/input-settings": {
		get: { path: never, params: never, body: never, response: unknown }
		patch: { path: never, params: never, body: unknown, response: unknown }
	},
	"/lol-game-settings/v1/input-settings-schema": {
		get: { path: never, params: never, body: never, response: unknown }
	},
	"/lol-game-settings/v1/ready": {
		get: { path: never, params: never, body: never, response: boolean }
	},
	"/lol-gameflow/v1/active-patcher-lock": {
		get: { path: never, params: never, body: never, response: boolean }
	},
	"/lol-gameflow/v1/availability": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolGameflowGameflowAvailability }
	},
	"/lol-gameflow/v1/basic-tutorial": {
		get: { path: never, params: never, body: never, response: boolean }
	},
	"/lol-gameflow/v1/battle-training": {
		get: { path: never, params: never, body: never, response: boolean }
	},
	"/lol-gameflow/v1/early-exit-enabled": {
		get: { path: never, params: never, body: never, response: boolean }
	},
	"/lol-gameflow/v1/early-exit-quit-enabled": {
		get: { path: never, params: never, body: never, response: boolean }
	},
	"/lol-gameflow/v1/extra-game-client-args": {
		get: { path: never, params: never, body: never, response: string[] }
		post: { path: never, params: never, body: string[], response: void }
	},
	"/lol-gameflow/v1/game-exit-early-vanguard": {
		get: { path: never, params: never, body: never, response: number }
	},
	"/lol-gameflow/v1/gameflow-metadata/player-status": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolGameflowPlayerStatus }
		post: { path: never, params: never, body: LCUTypes.LolGameflowPlayerStatus, response: void }
	},
	"/lol-gameflow/v1/gameflow-metadata/registration-status": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolGameflowRegistrationStatus }
		post: { path: never, params: never, body: LCUTypes.LolGameflowRegistrationStatus, response: void }
	},
	"/lol-gameflow/v1/gameflow-phase": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolGameflowGameflowPhase }
	},
	"/lol-gameflow/v1/player-kicked-vanguard": {
		get: { path: never, params: never, body: never, response: boolean }
	},
	"/lol-gameflow/v1/session": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolGameflowGameflowSession }
	},
	"/lol-gameflow/v1/session/per-position-summoner-spells/disallowed": {
		get: { path: never, params: never, body: never, response: Record<string, LCUTypes.LolGameflowGameModeSpellList> }
	},
	"/lol-gameflow/v1/session/per-position-summoner-spells/disallowed/as-string": {
		get: { path: never, params: never, body: never, response: string }
	},
	"/lol-gameflow/v1/session/per-position-summoner-spells/required": {
		get: { path: never, params: never, body: never, response: Record<string, LCUTypes.LolGameflowGameModeSpellList> }
	},
	"/lol-gameflow/v1/session/per-position-summoner-spells/required/as-string": {
		get: { path: never, params: never, body: never, response: string }
	},
	"/lol-gameflow/v1/spectate": {
		get: { path: never, params: never, body: never, response: boolean }
	},
	"/lol-gameflow/v1/spectate/delayed-launch": {
		get: { path: never, params: never, body: never, response: void }
	},
	"/lol-gameflow/v1/watch": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolGameflowGameflowWatchPhase }
	},
	"/lol-geoinfo/v1/getlocation": {
		get: { path: never, params: { "ip_address": string }, body: never, response: LCUTypes.LolGeoinfoGeoInfo }
	},
	"/lol-geoinfo/v1/whereami": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolGeoinfoGeoInfoResponse }
	},
	"/lol-highlights/v1/config": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolHighlightsHighlightsConfig }
	},
	"/lol-highlights/v1/highlights": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolHighlightsHighlight[] }
		post: { path: never, params: never, body: never, response: LCUTypes.LolHighlightsHighlight[] }
	},
	"/lol-highlights/v1/highlights-folder-path": {
		get: { path: never, params: never, body: never, response: string }
	},
	"/lol-highlights/v1/highlights-folder-path/default": {
		get: { path: never, params: never, body: never, response: string }
	},
	"/lol-honeyfruit/v1/account-claim/account-status/{puuid}": {
		get: { path: [puuid: string], params: never, body: never, response: LCUTypes.LolHoneyfruitAccountClaimStatus }
	},
	"/lol-honeyfruit/v1/account-claim/auto-dismiss": {
		get: { path: never, params: never, body: never, response: boolean }
		put: { path: never, params: never, body: boolean, response: unknown }
	},
	"/lol-honeyfruit/v1/linking-settings-button-available": {
		get: { path: never, params: never, body: never, response: boolean }
	},
	"/lol-honeyfruit/v1/vng-publisher-settings": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolHoneyfruitHoneyfruitVNGPublisherSettings }
		post: { path: never, params: never, body: never, response: unknown }
	},
	"/lol-honor-v2/v1/ballot": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolHonorV2Ballot }
	},
	"/lol-honor-v2/v1/config": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolHonorV2HonorConfig }
	},
	"/lol-honor-v2/v1/late-recognition": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolHonorV2Honor[] }
	},
	"/lol-honor-v2/v1/latest-eligible-game": {
		get: { path: never, params: never, body: never, response: number }
	},
	"/lol-honor-v2/v1/level-change": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolHonorV2VendedHonorChange }
	},
	"/lol-honor-v2/v1/mutual-honor": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolHonorV2MutualHonor }
	},
	"/lol-honor-v2/v1/profile": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolHonorV2ProfileInfo }
	},
	"/lol-honor-v2/v1/recognition": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolHonorV2Honor[] }
	},
	"/lol-honor-v2/v1/recognition-history": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolHonorV2HonorInteraction[] }
	},
	"/lol-honor-v2/v1/reward-granted": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolHonorV2VendedReward }
	},
	"/lol-honor-v2/v1/team-choices": {
		get: { path: never, params: never, body: never, response: string[] }
	},
	"/lol-honor-v2/v1/vote-completion": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolHonorV2VoteCompletion }
	},
	"/lol-hovercard/v1/friend-info/{puuid}": {
		get: { path: [puuid: string], params: never, body: never, response: LCUTypes.LolHovercardHovercardUserInfo }
	},
	"/lol-hovercard/v1/friend-info-by-summoner/{summonerId}": {
		get: { path: [summonerId: number], params: never, body: never, response: LCUTypes.LolHovercardHovercardUserInfo }
	},
	"/lol-inventory/v1/champSelectInventory": {
		get: { path: never, params: never, body: never, response: string }
	},
	"/lol-inventory/v1/initial-configuration-complete": {
		get: { path: never, params: never, body: never, response: boolean }
	},
	"/lol-inventory/v1/inventory": {
		get: { path: never, params: { "inventoryTypes": string[] }, body: never, response: LCUTypes.LolInventoryInventoryItemWithPayload[] }
	},
	"/lol-inventory/v1/inventory/emotes": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolInventoryInventoryItemWithPayload[] }
	},
	"/lol-inventory/v1/inventoryWithF2P": {
		get: { path: never, params: { "inventoryTypes": string[] }, body: never, response: LCUTypes.LolInventoryInventoryItemWithPayload[] }
	},
	"/lol-inventory/v1/notifications/{inventoryType}": {
		get: { path: [inventoryType: string], params: never, body: never, response: LCUTypes.LolInventoryInventoryNotification[] }
	},
	"/lol-inventory/v1/players/{puuid}/inventory": {
		get: { path: [puuid: string], params: { "inventoryTypes": string[] }, body: never, response: LCUTypes.LolInventoryInventoryItemWithPayload[] }
	},
	"/lol-inventory/v1/signedInventory": {
		get: { path: never, params: { "inventoryTypes": string[] }, body: never, response: Record<string, string> }
	},
	"/lol-inventory/v1/signedInventoryCache": {
		get: { path: never, params: never, body: never, response: Record<string, LCUTypes.LolInventoryInventoryCacheEntry> }
	},
	"/lol-inventory/v1/signedInventory/simple": {
		get: { path: never, params: { "inventoryTypes": string[], "queryParams"?: Record<string, string> }, body: never, response: string }
	},
	"/lol-inventory/v1/signedInventory/tournamentlogos": {
		get: { path: never, params: never, body: never, response: Record<string, string> }
	},
	"/lol-inventory/v1/signedWallet": {
		get: { path: never, params: { "currencyTypes": string[] }, body: never, response: Record<string, string> }
	},
	"/lol-inventory/v1/signedWallet/{currencyType}": {
		get: { path: [currencyType: string], params: never, body: never, response: Record<string, string> }
	},
	"/lol-inventory/v1/strawberryInventory": {
		get: { path: never, params: never, body: never, response: string }
	},
	"/lol-inventory/v1/wallet": {
		get: { path: never, params: { "currencyTypes": string[] }, body: never, response: Record<string, number> }
	},
	"/lol-inventory/v1/wallet/{currencyType}": {
		get: { path: [currencyType: string], params: never, body: never, response: Record<string, number> }
	},
	"/lol-inventory/v1/xbox-subscription-status": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolInventoryXboxSubscriptionStatus }
	},
	"/lol-inventory/v2/inventory/{inventoryType}": {
		get: { path: [inventoryType: string], params: never, body: never, response: LCUTypes.LolInventoryInventoryItemWithPayload[] }
	},
	"/lol-item-sets/v1/item-sets/{summonerId}/sets": {
		get: { path: [summonerId: number], params: never, body: never, response: LCUTypes.LolItemSetsItemSets }
		post: { path: [summonerId: number], params: never, body: LCUTypes.LolItemSetsItemSet, response: void }
		put: { path: [summonerId: number], params: never, body: LCUTypes.LolItemSetsItemSets, response: void }
	},
	"/lol-kickout/v1/notification": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolKickoutKickoutMessage }
	},
	"/lol-kr-playtime-reminder/v1/hours-played": {
		get: { path: never, params: never, body: never, response: number }
	},
	"/lol-kr-shutdown-law/v1/custom-status": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolKrShutdownLawQueueShutdownStatus }
	},
	"/lol-kr-shutdown-law/v1/disabled-queues": {
		get: { path: never, params: never, body: never, response: number[] }
	},
	"/lol-kr-shutdown-law/v1/is-enabled": {
		get: { path: never, params: never, body: never, response: boolean }
	},
	"/lol-kr-shutdown-law/v1/notification": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolKrShutdownLawShutdownLawNotification }
	},
	"/lol-kr-shutdown-law/v1/queue-status/{queue_id}": {
		get: { path: [queue_id: number], params: never, body: never, response: LCUTypes.LolKrShutdownLawQueueShutdownStatus }
	},
	"/lol-kr-shutdown-law/v1/rating-screen": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolKrShutdownLawRatingScreenInfo }
	},
	"/lol-kr-shutdown-law/v1/status": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolKrShutdownLawAllQueueShutdownStatus }
	},
	"/lol-league-session/v1/league-session-token": {
		get: { path: never, params: never, body: never, response: string }
	},
	"/lol-leaver-buster/v1/notifications": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolLeaverBusterLeaverBusterNotificationResource[] }
	},
	"/lol-leaver-buster/v1/ranked-restriction": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolLeaverBusterRankedRestrictionInfo }
	},
	"/lol-license-agreement/v1/agreement": {
		get: { path: never, params: never, body: never, response: string }
	},
	"/lol-license-agreement/v1/agreements": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolLicenseAgreementLicenseAgreement[] }
	},
	"/lol-license-agreement/v1/all-agreements": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolLicenseAgreementLicenseAgreement[] }
	},
	"/lol-license-agreement/v1/privacy-policy": {
		get: { path: never, params: never, body: never, response: string }
	},
	"/lol-license-agreement/v1/serve-location": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolLicenseAgreementLicenseServeLocation }
	},
	"/lol-loadouts/v1/loadouts-ready": {
		get: { path: never, params: never, body: never, response: boolean }
	},
	"/lol-loadouts/v4/loadouts/{loadoutId}": {
		get: { path: [loadoutId: string], params: never, body: never, response: LCUTypes.LolLoadoutsScopedLoadout }
	},
	"/lol-loadouts/v4/loadouts/scope/account": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolLoadoutsScopedLoadout[] }
	},
	"/lol-loadouts/v4/loadouts/scope/{scope}/{scopeItemId}": {
		get: { path: [scope: string, scopeItemId: number], params: never, body: never, response: LCUTypes.LolLoadoutsScopedLoadout[] }
	},
	"/lol-lobby-team-builder/champ-select/v1/bannable-champion-ids": {
		get: { path: never, params: never, body: never, response: number[] }
	},
	"/lol-lobby-team-builder/champ-select/v1/current-champion": {
		get: { path: never, params: never, body: never, response: number }
	},
	"/lol-lobby-team-builder/champ-select/v1/disabled-champion-ids": {
		get: { path: never, params: never, body: never, response: number[] }
	},
	"/lol-lobby-team-builder/champ-select/v1/has-auto-assigned-smite": {
		get: { path: never, params: never, body: never, response: boolean }
	},
	"/lol-lobby-team-builder/champ-select/v1/implementation-active": {
		get: { path: never, params: never, body: never, response: boolean }
	},
	"/lol-lobby-team-builder/champ-select/v1/pickable-champion-ids": {
		get: { path: never, params: never, body: never, response: number[] }
	},
	"/lol-lobby-team-builder/champ-select/v1/pickable-skin-ids": {
		get: { path: never, params: never, body: never, response: number[] }
	},
	"/lol-lobby-team-builder/champ-select/v1/preferences": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolLobbyTeamBuilderChampionSelectPreferences }
	},
	"/lol-lobby-team-builder/champ-select/v1/sending-loadouts-gcos-enabled": {
		get: { path: never, params: never, body: never, response: boolean }
	},
	"/lol-lobby-team-builder/champ-select/v1/session": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolLobbyTeamBuilderChampSelectSession }
	},
	"/lol-lobby-team-builder/champ-select/v1/session/my-selection": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolLobbyTeamBuilderChampSelectPlayerSelection }
		patch: { path: never, params: never, body: LCUTypes.LolLobbyTeamBuilderChampSelectMySelection, response: unknown }
	},
	"/lol-lobby-team-builder/champ-select/v1/session/obfuscated-summoner-ids": {
		get: { path: never, params: never, body: never, response: number[] }
	},
	"/lol-lobby-team-builder/champ-select/v1/session/swaps": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolLobbyTeamBuilderChampSelectSwapContract[] }
	},
	"/lol-lobby-team-builder/champ-select/v1/session/swaps/{id}": {
		get: { path: [id: number], params: never, body: never, response: LCUTypes.LolLobbyTeamBuilderChampSelectSwapContract }
	},
	"/lol-lobby-team-builder/champ-select/v1/session/timer": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolLobbyTeamBuilderChampSelectTimer }
	},
	"/lol-lobby-team-builder/champ-select/v1/session/trades": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolLobbyTeamBuilderChampSelectTradeContract[] }
	},
	"/lol-lobby-team-builder/champ-select/v1/session/trades/{id}": {
		get: { path: [id: number], params: never, body: never, response: LCUTypes.LolLobbyTeamBuilderChampSelectTradeContract }
	},
	"/lol-lobby-team-builder/champ-select/v1/team-boost": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolLobbyTeamBuilderTeamBoost }
	},
	"/lol-lobby-team-builder/v1/matchmaking": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolLobbyTeamBuilderMatchmakingSearchResource }
	},
	"/lol-lobby/v1/autofill-displayed": {
		get: { path: never, params: never, body: never, response: boolean }
		put: { path: never, params: never, body: never, response: boolean }
	},
	"/lol-lobby/v1/custom-games": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolLobbyLobbyCustomGame[] }
	},
	"/lol-lobby/v1/custom-games/{id}": {
		get: { path: [id: number], params: never, body: never, response: LCUTypes.LolLobbyLobbyCustomGame }
	},
	"/lol-lobby/v1/lobby/availability": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolLobbyQueueAvailability }
	},
	"/lol-lobby/v1/lobby/countdown": {
		get: { path: never, params: never, body: never, response: number }
	},
	"/lol-lobby/v1/lobby/invitations": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolLobbyLobbyInvitation[] }
		post: { path: never, params: never, body: LCUTypes.LolLobbyLobbyInvitation, response: LCUTypes.LolLobbyLobbyInvitation }
	},
	"/lol-lobby/v1/lobby/invitations/{id}": {
		get: { path: [id: string], params: never, body: never, response: LCUTypes.LolLobbyLobbyInvitation }
	},
	"/lol-lobby/v1/lobby/members/localMember/player-slots": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolLobbyQuickPlayPresetSlotDto[] }
		put: { path: never, params: never, body: LCUTypes.LolLobbyQuickPlayPresetSlotDto[], response: unknown }
	},
	"/lol-lobby/v1/lobby/tft-ranked-history": {
		get: { path: never, params: never, body: never, response: boolean }
	},
	"/lol-lobby/v1/parties/gamemode": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolLobbyGameModeDto }
	},
	"/lol-lobby/v1/parties/player": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolLobbyPlayerDto }
	},
	"/lol-lobby/v1/party-rewards": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolLobbyLobbyPartyRewards }
	},
	"/lol-lobby/v2/comms/members": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolLobbyPremadePartyDto }
	},
	"/lol-lobby/v2/comms/token": {
		get: { path: never, params: never, body: never, response: string }
	},
	"/lol-lobby/v2/eligibility/game-select-eligibility-hash": {
		get: { path: never, params: never, body: never, response: number }
	},
	"/lol-lobby/v2/eligibility/initial-configuration-complete": {
		get: { path: never, params: never, body: never, response: boolean }
	},
	"/lol-lobby/v2/lobby/custom/available-bots": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolLobbyLobbyBotChampion[] }
	},
	"/lol-lobby/v2/lobby/custom/bots-enabled": {
		get: { path: never, params: never, body: never, response: boolean }
	},
	"/lol-lobby/v2/lobby/invitations": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolLobbyLobbyInvitationDto[] }
		post: { path: never, params: never, body: LCUTypes.LolLobbyLobbyInvitationDto[], response: LCUTypes.LolLobbyLobbyInvitationDto[] }
	},
	"/lol-lobby/v2/lobby/matchmaking/search-state": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolLobbyLobbyMatchmakingSearchResource }
	},
	"/lol-lobby/v2/lobby/members": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolLobbyLobbyParticipantDto[] }
	},
	"/lol-lobby/v2/notifications": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolLobbyLobbyNotification[] }
		post: { path: never, params: never, body: LCUTypes.LolLobbyLobbyNotification, response: void }
	},
	"/lol-lobby/v2/party-active": {
		get: { path: never, params: never, body: never, response: boolean }
	},
	"/lol-lobby/v2/party/eog-status": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolLobbyPartyStatusDto }
	},
	"/lol-lobby/v2/received-invitations": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolLobbyReceivedInvitationDto[] }
	},
	"/lol-lobby/v2/registration-status": {
		get: { path: never, params: never, body: never, response: unknown }
	},
	"/lol-login/v1/account-state": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolLoginAccountStateResource }
		post: { path: never, params: never, body: never, response: void }
	},
	"/lol-login/v1/login-connection-state": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolLoginLoginConnectionState }
	},
	"/lol-login/v1/login-data-packet": {
		get: { path: never, params: never, body: never, response: unknown }
	},
	"/lol-login/v1/login-in-game-creds": {
		get: { path: never, params: never, body: never, response: unknown }
	},
	"/lol-login/v1/login-platform-credentials": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolLoginPlatformGeneratedCredentials }
	},
	"/lol-login/v1/login-queue-state": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolLoginLoginQueue }
	},
	"/lol-login/v1/wallet": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolLoginLoginSessionWallet }
	},
	"/lol-login/v2/league-session-init-token": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolLoginLeagueSessionTokenEnvelope }
	},
	"/lol-loot/v1/currency-configuration": {
		get: { path: never, params: never, body: never, response: void }
	},
	"/lol-loot/v1/enabled": {
		get: { path: never, params: never, body: never, response: boolean }
	},
	"/lol-loot/v1/loot-grants": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolLootLootGrantNotification[] }
	},
	"/lol-loot/v1/loot-items": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolLootLootItem[] }
	},
	"/lol-loot/v1/loot-odds/{recipeName}": {
		get: { path: [recipeName: string], params: never, body: never, response: LCUTypes.LolLootVerboseLootOddsResponse }
	},
	"/lol-loot/v1/loot-odds/{recipeName}/visibility": {
		get: { path: [recipeName: string], params: never, body: never, response: boolean }
	},
	"/lol-loot/v1/mass-disenchant/configuration": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolLootMassDisenchantClientConfig }
	},
	"/lol-loot/v1/mass-disenchant-recipes": {
		get: { path: never, params: never, body: never, response: LCUTypes.LootLcdsRecipeClientDTO[] }
	},
	"/lol-loot/v1/milestones": {
		get: { path: never, params: { "minimizeResponse": boolean }, body: never, response: LCUTypes.LolLootLootMilestones[] }
	},
	"/lol-loot/v1/milestones/{lootMilestonesId}": {
		get: { path: [lootMilestonesId: string], params: never, body: never, response: LCUTypes.LolLootLootMilestones }
	},
	"/lol-loot/v1/milestones/{lootMilestonesId}/claimProgress": {
		get: { path: [lootMilestonesId: string], params: never, body: never, response: LCUTypes.LolLootLootMilestonesClaimResponse }
	},
	"/lol-loot/v1/milestones/{lootMilestonesId}/counter": {
		get: { path: [lootMilestonesId: string], params: never, body: never, response: LCUTypes.LolLootLootMilestonesCounter }
	},
	"/lol-loot/v1/milestones/counters": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolLootLootMilestonesCounter[] }
	},
	"/lol-loot/v1/milestones/items": {
		get: { path: never, params: never, body: never, response: string[] }
	},
	"/lol-loot/v1/player-display-categories": {
		get: { path: never, params: never, body: never, response: string[] }
	},
	"/lol-loot/v1/player-loot": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolLootPlayerLoot[] }
	},
	"/lol-loot/v1/player-loot/{lootId}": {
		get: { path: [lootId: string], params: never, body: never, response: LCUTypes.LolLootPlayerLoot }
	},
	"/lol-loot/v1/player-loot/{lootId}/context-menu": {
		get: { path: [lootId: string], params: never, body: never, response: LCUTypes.LolLootContextMenu[] }
		post: { path: [lootId: string], params: never, body: never, response: LCUTypes.LolLootContextMenu[] }
	},
	"/lol-loot/v1/player-loot-map": {
		get: { path: never, params: never, body: never, response: Record<string, LCUTypes.LolLootPlayerLoot> }
	},
	"/lol-loot/v1/player-loot-notifications": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolLootPlayerLootNotification[] }
	},
	"/lol-loot/v1/ready": {
		get: { path: never, params: never, body: never, response: boolean }
	},
	"/lol-loot/v1/recipes/configuration": {
		get: { path: never, params: never, body: never, response: void }
	},
	"/lol-loot/v1/recipes/initial-item/{lootId}": {
		get: { path: [lootId: string], params: never, body: never, response: LCUTypes.LolLootRecipeWithMilestones[] }
		post: { path: [lootId: string], params: never, body: never, response: LCUTypes.LolLootRecipeWithMilestones[] }
	},
	"/lol-loot/v2/player-loot-map": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolLootPlayerLootMap }
	},
	"/lol-loyalty/v1/status-notification": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolLoyaltyLoyaltyStatusNotification }
	},
	"/lol-maps/v1/map/{id}": {
		get: { path: [id: number], params: never, body: never, response: LCUTypes.LolMapsMaps }
	},
	"/lol-maps/v1/maps": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolMapsMaps[] }
	},
	"/lol-maps/v2/map/{id}/{gameMode}": {
		get: { path: [id: number, gameMode: string], params: never, body: never, response: LCUTypes.LolMapsMaps }
	},
	"/lol-maps/v2/map/{id}/{gameMode}/{gameMutator}": {
		get: { path: [id: number, gameMode: string, gameMutator: string], params: never, body: never, response: LCUTypes.LolMapsMaps }
	},
	"/lol-maps/v2/maps": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolMapsMaps[] }
	},
	"/lol-marketing-preferences/v1/partition/{partitionKey}": {
		get: { path: [partitionKey: string], params: never, body: never, response: Record<string, string> }
		post: { path: [partitionKey: string], params: never, body: Record<string, string>, response: Record<string, string> }
	},
	"/lol-marketing-preferences/v1/ready": {
		get: { path: never, params: never, body: never, response: boolean }
	},
	"/lol-match-history/v1/delta": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolMatchHistoryMatchHistoryPlayerDelta }
	},
	"/lol-match-history/v1/game-timelines/{gameId}": {
		get: { path: [gameId: number], params: never, body: never, response: LCUTypes.LolMatchHistoryMatchHistoryTimelineFrames }
	},
	"/lol-match-history/v1/games/{gameId}": {
		get: { path: [gameId: number], params: never, body: never, response: LCUTypes.LolMatchHistoryMatchHistoryGame }
	},
	"/lol-match-history/v1/products/lol/{puuid}/matches": {
		get: { path: [puuid: string], params: { "begIndex"?: number, "endIndex"?: number }, body: never, response: LCUTypes.LolMatchHistoryMatchHistoryList }
	},
	"/lol-match-history/v1/products/lol/current-summoner/matches": {
		get: { path: never, params: { "begIndex"?: number, "endIndex"?: number }, body: never, response: LCUTypes.LolMatchHistoryMatchHistoryList }
	},
	"/lol-match-history/v1/products/tft/{puuid}/matches": {
		get: { path: [puuid: string], params: { "begin"?: number, "count"?: number, "tag"?: string }, body: never, response: LCUTypes.LolMatchHistoryGAMHSMatchHistoryList }
	},
	"/lol-match-history/v1/recently-played-summoners": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolMatchHistoryRecentlyPlayedSummoner[] }
	},
	"/lol-match-history/v1/web-url": {
		get: { path: never, params: never, body: never, response: string }
	},
	"/lol-match-history/v3/matchlist/account/{accountId}": {
		get: { path: [accountId: number], params: { "begIndex"?: number, "endIndex"?: number }, body: never, response: LCUTypes.LolMatchHistoryMatchHistoryList }
	},
	"/lol-matchmaking/v1/ready-check": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolMatchmakingMatchmakingReadyCheckResource }
	},
	"/lol-matchmaking/v1/search/errors": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolMatchmakingMatchmakingSearchErrorResource[] }
	},
	"/lol-matchmaking/v1/search/errors/{id}": {
		get: { path: [id: number], params: never, body: never, response: LCUTypes.LolMatchmakingMatchmakingSearchErrorResource }
	},
	"/lol-missions/v1/data": {
		get: { path: never, params: never, body: never, response: LCUTypes.PlayerMissionEligibilityData }
	},
	"/lol-missions/v1/missions": {
		get: { path: never, params: never, body: never, response: LCUTypes.PlayerMissionDTO[] }
	},
	"/lol-missions/v1/series": {
		get: { path: never, params: never, body: never, response: LCUTypes.SeriesDTO[] }
	},
	"/lol-npe-rewards/v1/challenges/progress": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolNpeRewardsChallengesProgress }
	},
	"/lol-npe-rewards/v1/level-rewards": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolNpeRewardsRewardSeries }
	},
	"/lol-npe-rewards/v1/level-rewards/state": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolNpeRewardsRewardSeriesState }
	},
	"/lol-npe-rewards/v1/login-rewards": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolNpeRewardsRewardSeries }
	},
	"/lol-npe-rewards/v1/login-rewards/state": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolNpeRewardsRewardSeriesState }
	},
	"/lol-npe-tutorial-path/v1/rewards/champ": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolNpeTutorialPathCollectionsChampion }
	},
	"/lol-npe-tutorial-path/v1/settings": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolNpeTutorialPathAccountSettingsTutorial }
		put: { path: never, params: never, body: LCUTypes.LolNpeTutorialPathAccountSettingsTutorial, response: void }
	},
	"/lol-npe-tutorial-path/v1/tutorials": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolNpeTutorialPathTutorial[] }
	},
	"/lol-patch/v1/checking-enabled": {
		get: { path: never, params: never, body: never, response: boolean }
	},
	"/lol-patch/v1/environment": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolPatchChunkingPatcherEnvironment }
	},
	"/lol-patch/v1/game-version": {
		get: { path: never, params: never, body: never, response: string }
	},
	"/lol-patch/v1/notifications": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolPatchNotification[] }
	},
	"/lol-patch/v1/products/league_of_legends/install-location": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolPatchInstallPaths }
	},
	"/lol-patch/v1/products/league_of_legends/state": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolPatchProductState }
	},
	"/lol-patch/v1/products/league_of_legends/supported-game-releases": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolPatchSupportedGameReleases }
	},
	"/lol-patch/v1/status": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolPatchStatus }
	},
	"/lol-perks/v1/currentpage": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolPerksPerkPageResource }
		put: { path: never, params: never, body: number, response: unknown }
	},
	"/lol-perks/v1/inventory": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolPerksPlayerInventory }
	},
	"/lol-perks/v1/perks": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolPerksPerkUIPerk[] }
	},
	"/lol-perks/v1/perks/disabled": {
		get: { path: never, params: never, body: never, response: number[] }
	},
	"/lol-perks/v1/perks/gameplay-updated": {
		get: { path: never, params: never, body: never, response: number[] }
	},
	"/lol-perks/v1/quick-play-selections/champion/{championId}/position/{position}": {
		get: { path: [championId: number, position: string], params: never, body: never, response: string }
	},
	"/lol-perks/v1/recommended-pages/champion/{championId}/position/{position}/map/{mapId}": {
		get: { path: [championId: number, position: string, mapId: number], params: never, body: never, response: LCUTypes.LolPerksPerkUIRecommendedPage[] }
	},
	"/lol-perks/v1/recommended-pages-position/champion/{championId}": {
		get: { path: [championId: number], params: never, body: never, response: string }
	},
	"/lol-perks/v1/rune-recommender-auto-select": {
		get: { path: never, params: never, body: never, response: boolean }
		post: { path: never, params: never, body: never, response: unknown }
	},
	"/lol-perks/v1/settings": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolPerksUISettings }
		put: { path: never, params: never, body: LCUTypes.LolPerksUISettings, response: unknown }
	},
	"/lol-perks/v1/show-auto-modified-pages-notification": {
		get: { path: never, params: never, body: never, response: boolean }
		post: { path: never, params: never, body: never, response: unknown }
	},
	"/lol-perks/v1/styles": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolPerksPerkUIStyle[] }
	},
	"/lol-pft/v2/survey": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolPftPFTSurvey }
		post: { path: never, params: never, body: LCUTypes.LolPftPFTSurvey, response: void }
	},
	"/lol-platform-config/v1/initial-configuration-complete": {
		get: { path: never, params: never, body: never, response: boolean }
	},
	"/lol-platform-config/v1/namespaces": {
		get: { path: never, params: never, body: never, response: unknown }
	},
	"/lol-platform-config/v1/namespaces/{ns}": {
		get: { path: [ns: string], params: never, body: never, response: unknown }
	},
	"/lol-platform-config/v1/namespaces/{ns}/{key}": {
		get: { path: [ns: string, key: string], params: never, body: never, response: unknown }
	},
	"/lol-player-behavior/v1/ban": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolPlayerBehaviorBanNotification }
	},
	"/lol-player-behavior/v1/chat-restriction": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolPlayerBehaviorRestrictionNotification }
	},
	"/lol-player-behavior/v1/config": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolPlayerBehaviorPlayerBehaviorConfig }
	},
	"/lol-player-behavior/v1/credibility-behavior-warnings": {
		get: { path: never, params: never, body: never, response: void }
	},
	"/lol-player-behavior/v1/ranked-restriction": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolPlayerBehaviorRestrictionNotification }
	},
	"/lol-player-behavior/v1/reform-card": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolPlayerBehaviorReformCard }
	},
	"/lol-player-behavior/v1/reporter-feedback": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolPlayerBehaviorReporterFeedback[] }
	},
	"/lol-player-behavior/v2/reform-card": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolPlayerBehaviorReformCardV2 }
	},
	"/lol-player-behavior/v2/reporter-feedback": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolPlayerBehaviorReporterFeedbackMessage[] }
	},
	"/lol-player-behavior/v3/reform-cards": {
		get: { path: never, params: never, body: never, response: unknown }
	},
	"/lol-player-level-up/v1/level-up": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolPlayerLevelUpPlayerLevelUpEvent }
	},
	"/lol-player-level-up/v1/level-up-notifications/{pluginName}": {
		get: { path: [pluginName: string], params: never, body: never, response: LCUTypes.LolPlayerLevelUpPlayerLevelUpEventAck }
		post: { path: [pluginName: string], params: never, body: LCUTypes.LolPlayerLevelUpPlayerLevelUpEventAck, response: void }
	},
	"/lol-player-messaging/v1/celebration/notification": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolPlayerMessagingDynamicCelebrationMessagingNotificationResource }
	},
	"/lol-player-messaging/v1/notification": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolPlayerMessagingPlayerMessagingNotificationResource }
	},
	"/lol-player-preferences/v1/player-preferences-ready": {
		get: { path: never, params: never, body: never, response: boolean }
	},
	"/lol-player-preferences/v1/preference/{type}": {
		get: { path: [type: string], params: never, body: never, response: unknown }
	},
	"/lol-player-report-sender/v1/game-ids-with-verbal-abuse-report": {
		get: { path: never, params: never, body: never, response: number[] }
	},
	"/lol-player-report-sender/v1/in-game-reports": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolPlayerReportSenderPlayerReport[] }
		post: { path: never, params: never, body: LCUTypes.LolPlayerReportSenderPlayerReport, response: unknown }
	},
	"/lol-pre-end-of-game/v1/currentSequenceEvent": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolPreEndOfGameSequenceEvent }
	},
	"/lol-premade-voice/v1/availability": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolPremadeVoiceVoiceAvailability }
	},
	"/lol-premade-voice/v1/capturedevices": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolPremadeVoiceDeviceResource[] }
		put: { path: never, params: never, body: string, response: void }
	},
	"/lol-premade-voice/v1/first-experience": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolPremadeVoiceFirstExperience }
	},
	"/lol-premade-voice/v1/participant-records": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolPremadeVoicePremadeVoiceParticipantDto[] }
	},
	"/lol-premade-voice/v1/participants": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolPremadeVoicePremadeVoiceParticipantDto[] }
	},
	"/lol-premade-voice/v1/settings": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolPremadeVoiceSettingsResource }
	},
	"/lol-progression/v1/groups/{groupId}/configuration": {
		get: { path: [groupId: string], params: never, body: never, response: LCUTypes.LolProgressionGroup }
	},
	"/lol-progression/v1/groups/{groupId}/instanceData": {
		get: { path: [groupId: string], params: never, body: never, response: LCUTypes.LolProgressionEntityInstance }
	},
	"/lol-progression/v1/groups/configuration": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolProgressionGroup[] }
	},
	"/lol-progression/v1/ready": {
		get: { path: never, params: never, body: never, response: boolean }
	},
	"/lol-publishing-content/v1/listeners/allow-list/{region}": {
		get: { path: [region: string], params: never, body: never, response: string[] }
	},
	"/lol-publishing-content/v1/listeners/client-data": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolPublishingContentClientData }
	},
	"/lol-publishing-content/v1/listeners/pubhub-config": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolPublishingContentPubHubConfig }
	},
	"/lol-publishing-content/v1/ready": {
		get: { path: never, params: never, body: never, response: boolean }
	},
	"/lol-publishing-content/v1/settings": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolPublishingContentPublishingSettings }
	},
	"/lol-publishing-content/v1/tft-hub-cards": {
		get: { path: never, params: never, body: never, response: unknown }
	},
	"/lol-purchase-widget/v1/configuration": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolPurchaseWidgetPurchaseWidgetConfig }
	},
	"/lol-purchase-widget/v1/order-notifications": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolPurchaseWidgetOrderNotificationResource[] }
	},
	"/lol-purchase-widget/v1/purchasable-item": {
		get: { path: never, params: { "inventoryType": string, "itemId": number }, body: never, response: LCUTypes.LolPurchaseWidgetPurchasableItem }
	},
	"/lol-purchase-widget/v3/base-skin-line-data/{offerId}": {
		get: { path: [offerId: string], params: never, body: never, response: LCUTypes.LolPurchaseWidgetBaseSkinLineDto }
	},
	"/lol-purchase-widget/v3/purchase-offer-order-statuses": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolPurchaseWidgetPurchaseOfferOrderStatuses }
	},
	"/lol-ranked/v1/apex-leagues/{queueType}/{tier}": {
		get: { path: [queueType: LCUTypes.LolRankedLeagueQueueType, tier: string], params: never, body: never, response: LCUTypes.LolRankedLeagueLadderInfo }
	},
	"/lol-ranked/v1/challenger-ladders-enabled": {
		get: { path: never, params: never, body: never, response: string[] }
	},
	"/lol-ranked/v1/current-lp-change-notification": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolRankedLcuLeagueNotification }
	},
	"/lol-ranked/v1/current-ranked-stats": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolRankedRankedStats }
	},
	"/lol-ranked/v1/eligibleTiers/queueType/{queueType}": {
		get: { path: [queueType: LCUTypes.LolRankedLeagueQueueType], params: never, body: never, response: string[] }
	},
	"/lol-ranked/v1/eos-notifications": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolRankedEosNotificationResource[] }
	},
	"/lol-ranked/v1/eos-rewards": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolRankedEosRewardsConfig }
	},
	"/lol-ranked/v1/league-ladders/{puuid}": {
		get: { path: [puuid: string], params: never, body: never, response: LCUTypes.LolRankedLeagueLadderInfo[] }
	},
	"/lol-ranked/v1/notifications": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolRankedLcuLeagueNotification[] }
	},
	"/lol-ranked/v1/ranked-stats/{puuid}": {
		get: { path: [puuid: string], params: never, body: never, response: LCUTypes.LolRankedRankedStats }
	},
	"/lol-ranked/v1/rated-ladder/{queueType}": {
		get: { path: [queueType: LCUTypes.LolRankedLeagueQueueType], params: never, body: never, response: LCUTypes.LolRankedRatedLadderInfo }
	},
	"/lol-ranked/v1/signed-ranked-stats": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolRankedSignedRankedStatsDTO }
	},
	"/lol-ranked/v1/social-leaderboard-ranked-queue-stats-for-puuids": {
		get: { path: never, params: { "queueType": LCUTypes.LolRankedLeagueQueueType, "puuids": string[] }, body: never, response: Record<string, LCUTypes.LolRankedSocialLeaderboardRankedQueueStats> }
	},
	"/lol-ranked/v1/splits-config": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolRankedRewardsInfo }
	},
	"/lol-ranked/v1/top-rated-ladders-enabled": {
		get: { path: never, params: never, body: never, response: string[] }
	},
	"/lol-ranked/v2/tiers": {
		get: { path: never, params: { "summonerIds": number[], "queueTypes": LCUTypes.LolRankedLeagueQueueType[] }, body: never, response: LCUTypes.LolRankedParticipantTiers[] }
	},
	"/lol-regalia/v2/config": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolRegaliaRegaliaFrontendConfig }
	},
	"/lol-regalia/v2/current-summoner/regalia": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolRegaliaRegaliaWithPreferences }
		put: { path: never, params: never, body: LCUTypes.LolRegaliaRegaliaPreferences, response: LCUTypes.LolRegaliaRegaliaWithPreferences }
	},
	"/lol-regalia/v2/summoners/{summonerId}/queues/{queue}/positions/{position}/regalia": {
		get: { path: [summonerId: number, queue: string, position: string], params: never, body: never, response: LCUTypes.LolRegaliaRegalia }
	},
	"/lol-regalia/v2/summoners/{summonerId}/queues/{queue}/regalia": {
		get: { path: [summonerId: number, queue: string], params: never, body: never, response: LCUTypes.LolRegaliaRegalia }
	},
	"/lol-regalia/v2/summoners/{summonerId}/regalia": {
		get: { path: [summonerId: number], params: { "hovercard": boolean }, body: never, response: LCUTypes.LolRegaliaRegalia }
	},
	"/lol-regalia/v2/summoners/{summonerId}/regalia/async": {
		get: { path: [summonerId: number], params: never, body: never, response: LCUTypes.LolRegaliaRegaliaAsync }
	},
	"/lol-regalia/v3/inventory/{inventoryType}": {
		get: { path: [inventoryType: string], params: never, body: never, response: Record<string, LCUTypes.LolRegaliaRegaliaInventoryItem> }
	},
	"/lol-regalia/v3/summoners/{summonerId}/regalia": {
		get: { path: [summonerId: number], params: never, body: never, response: LCUTypes.LolRegaliaRegalia }
	},
	"/lol-remedy/v1/config/is-verbal-abuse-remedy-modal-enabled": {
		get: { path: never, params: never, body: never, response: boolean }
	},
	"/lol-remedy/v1/remedy-notifications": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolRemedyMail[] }
	},
	"/lol-replays/v1/configuration": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolReplaysReplaysConfiguration }
	},
	"/lol-replays/v1/metadata/{gameId}": {
		get: { path: [gameId: number], params: never, body: never, response: LCUTypes.LolReplaysReplayMetadata }
	},
	"/lol-replays/v1/rofls/path": {
		get: { path: never, params: never, body: never, response: string }
	},
	"/lol-replays/v1/rofls/path/default": {
		get: { path: never, params: never, body: never, response: string }
	},
	"/lol-rewards/v1/grants": {
		get: { path: never, params: { "status"?: LCUTypes.LolRewardsGrantStatus }, body: never, response: LCUTypes.LolRewardsRewardGrant[] }
	},
	"/lol-rewards/v1/groups": {
		get: { path: never, params: { "types"?: string[] }, body: never, response: LCUTypes.LolRewardsSvcRewardGroup[] }
	},
	"/lol-rms/v1/champion-mastery-leaveup-update": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolRiotMessagingServiceChampionMasteryLevelUp[] }
	},
	"/lol-rso-auth/configuration/v3/ready-state": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolRsoAuthRSOConfigReadyState }
	},
	"/lol-rso-auth/v1/authorization/access-token": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolRsoAuthAccessToken }
	},
	"/lol-rso-auth/v1/authorization/error": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolRsoAuthAuthError }
	},
	"/lol-rso-auth/v1/authorization/id-token": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolRsoAuthIdToken }
	},
	"/lol-rso-auth/v1/authorization/userinfo": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolRsoAuthUserInfo }
		post: { path: never, params: never, body: never, response: LCUTypes.LolRsoAuthUserInfo }
	},
	"/lol-rso-auth/v1/status/{platformId}": {
		get: { path: [platformId: string], params: never, body: never, response: LCUTypes.LolRsoAuthRegionStatus }
	},
	"/lol-seasons/v1/season/LOL/current-split-seasons": {
		get: { path: never, params: never, body: never, response: number[] }
	},
	"/lol-seasons/v1/season/product/{product}": {
		get: { path: [product: string], params: never, body: never, response: LCUTypes.LolSeasonsAllSeasonsProduct }
	},
	"/lol-seasons/v1/season/recent-final-split": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolSeasonsAllSeasonsProduct }
	},
	"/lol-service-status/v1/lcu-status": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolServiceStatusServiceStatusResource }
	},
	"/lol-service-status/v1/ticker-messages": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolServiceStatusTickerMessage[] }
	},
	"/lol-settings/v1/account/{category}": {
		get: { path: [category: string], params: never, body: never, response: unknown }
		put: { path: [category: string], params: never, body: LCUTypes.LolSettingsSettingCategory, response: unknown }
		patch: { path: [category: string], params: never, body: LCUTypes.LolSettingsSettingCategory, response: unknown }
	},
	"/lol-settings/v1/account/didreset": {
		get: { path: never, params: never, body: never, response: boolean }
	},
	"/lol-settings/v1/local/{category}": {
		get: { path: [category: string], params: never, body: never, response: unknown }
		patch: { path: [category: string], params: never, body: LCUTypes.LolSettingsSettingCategory, response: unknown }
	},
	"/lol-settings/v2/account/{ppType}/{category}": {
		get: { path: [ppType: string, category: string], params: never, body: never, response: unknown }
		put: { path: [ppType: string, category: string], params: never, body: LCUTypes.LolSettingsSettingCategory, response: unknown }
		patch: { path: [ppType: string, category: string], params: never, body: LCUTypes.LolSettingsSettingCategory, response: unknown }
	},
	"/lol-settings/v2/config": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolSettingsSettingsConfig }
	},
	"/lol-settings/v2/didreset/{ppType}": {
		get: { path: [ppType: string], params: never, body: never, response: boolean }
	},
	"/lol-settings/v2/local/{category}": {
		get: { path: [category: string], params: never, body: never, response: unknown }
		patch: { path: [category: string], params: never, body: LCUTypes.LolSettingsSettingCategory, response: unknown }
	},
	"/lol-settings/v2/ready": {
		get: { path: never, params: never, body: never, response: boolean }
	},
	"/lol-shutdown/v1/notification": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolShutdownShutdownNotification }
	},
	"/lol-simple-dialog-messages/v1/messages": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolSimpleDialogMessagesMessage[] }
		post: { path: never, params: never, body: LCUTypes.LolSimpleDialogMessagesLocalMessageRequest, response: unknown }
	},
	"/lol-social-leaderboard/v1/leaderboard-next-update-time": {
		get: { path: never, params: { "queueType"?: LCUTypes.LolSocialLeaderboardLeagueQueueType }, body: never, response: number }
	},
	"/lol-social-leaderboard/v1/social-leaderboard-data": {
		get: { path: never, params: { "queueType"?: LCUTypes.LolSocialLeaderboardLeagueQueueType }, body: never, response: LCUTypes.LolSocialLeaderboardSocialLeaderboardData }
	},
	"/lol-spectator/v1/spectate": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolSpectatorSpectateGameInfo }
	},
	"/lol-spectator/v1/spectate/config": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolSpectatorSpectatorConfig }
	},
	"/lol-spectator/v3/buddy/spectate": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolSpectatorSpectateResource }
		post: { path: never, params: never, body: string[], response: void }
	},
	"/lol-statstones/v1/eog-notifications/{gameId}": {
		get: { path: [gameId: number], params: never, body: never, response: LCUTypes.LolStatstonesEogNotificationEnvelope }
	},
	"/lol-statstones/v1/featured-champion-statstones/{championItemId}": {
		get: { path: [championItemId: number], params: never, body: never, response: LCUTypes.LolStatstonesStatstone[] }
	},
	"/lol-statstones/v1/profile-summary/{puuid}": {
		get: { path: [puuid: string], params: never, body: never, response: LCUTypes.LolStatstonesProfileStatstoneSummary[] }
	},
	"/lol-statstones/v1/statstone/{contentId}/owned": {
		get: { path: [contentId: string], params: never, body: never, response: boolean }
	},
	"/lol-statstones/v1/statstones-enabled-queue-ids": {
		get: { path: never, params: never, body: never, response: number[] }
	},
	"/lol-statstones/v2/player-statstones-self/{championItemId}": {
		get: { path: [championItemId: number], params: never, body: never, response: LCUTypes.LolStatstonesStatstoneSet[] }
	},
	"/lol-statstones/v2/player-summary-self": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolStatstonesChampionStatstoneSummary[] }
	},
	"/lol-store/v1/alias-change-notifications": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolStoreAliasChangeNotificationResource[] }
	},
	"/lol-store/v1/{pageType}": {
		get: { path: [pageType: string], params: never, body: never, response: unknown }
	},
	"/lol-store/v1/catalog": {
		get: { path: never, params: { "inventoryType"?: string[], "itemId"?: number[] }, body: never, response: LCUTypes.LolStoreCatalogItem[] }
	},
	"/lol-store/v1/catalogByInstanceIds": {
		get: { path: never, params: { "instanceIds": string[] }, body: never, response: LCUTypes.LolStoreCatalogItem[] }
	},
	"/lol-store/v1/catalog/{inventoryType}": {
		get: { path: [inventoryType: string], params: { "itemIds": number[] }, body: never, response: LCUTypes.LolStoreCatalogItem[] }
	},
	"/lol-store/v1/catalog/items/skip-cache": {
		get: { path: never, params: { "catalogItemKeys": LCUTypes.LolStoreItemKey[] }, body: never, response: LCUTypes.LolStoreCatalogItem[] }
	},
	"/lol-store/v1/catalog/sales": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolStoreItemSale[] }
	},
	"/lol-store/v1/getStoreUrl": {
		get: { path: never, params: never, body: never, response: string }
	},
	"/lol-store/v1/giftablefriends": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolStoreGiftingFriend[] }
	},
	"/lol-store/v1/itemKeysFromInstanceIds": {
		get: { path: never, params: { "instanceIds": string[] }, body: never, response: Record<string, LCUTypes.LolStoreItemKey> }
	},
	"/lol-store/v1/itemKeysFromOfferIds": {
		get: { path: never, params: { "offerIds": string[] }, body: never, response: Record<string, LCUTypes.LolStoreItemKey> }
	},
	"/lol-store/v1/lastPage": {
		get: { path: never, params: never, body: never, response: string }
		post: { path: never, params: never, body: string, response: void }
	},
	"/lol-store/v1/offers": {
		get: { path: never, params: { "inventoryTypeUUIDs"?: string[] }, body: never, response: LCUTypes.LolStoreCapOffer[] }
	},
	"/lol-store/v1/offers/{offerId}": {
		get: { path: [offerId: string], params: never, body: never, response: LCUTypes.LolStoreCapOffer }
	},
	"/lol-store/v1/order-notifications": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolStoreOrderNotificationResource[] }
	},
	"/lol-store/v1/order-notifications/{id}": {
		get: { path: [id: number], params: never, body: never, response: LCUTypes.LolStoreOrderNotificationResource }
	},
	"/lol-store/v1/paymentDetails": {
		get: { path: never, params: { "action": string, "giftRecipientAccountId"?: number, "giftMessage"?: string }, body: never, response: unknown }
	},
	"/lol-store/v1/skins/{skinId}": {
		get: { path: [skinId: number], params: never, body: never, response: LCUTypes.LolStoreCatalogItem }
	},
	"/lol-store/v1/status": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolStoreStoreStatus }
	},
	"/lol-store/v1/store-ready": {
		get: { path: never, params: never, body: never, response: boolean }
	},
	"/lol-store/v2/offers": {
		get: { path: never, params: { "typeId"?: string }, body: never, response: LCUTypes.LolStoreCapOffer[] }
	},
	"/lol-suggested-players/v1/suggested-players": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolSuggestedPlayersSuggestedPlayersSuggestedPlayer[] }
	},
	"/lol-summoner/v1/alias/lookup": {
		get: { path: never, params: { "gameName": string, "tagLine": string }, body: never, response: LCUTypes.LolSummonerAliasLookupResponse }
	},
	"/lol-summoner/v1/check-name-availability/{name}": {
		get: { path: [name: string], params: never, body: never, response: boolean }
	},
	"/lol-summoner/v1/check-name-availability-new-summoners/{name}": {
		get: { path: [name: string], params: never, body: never, response: boolean }
	},
	"/lol-summoner/v1/current-summoner": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolSummonerSummoner }
	},
	"/lol-summoner/v1/current-summoner/account-and-summoner-ids": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolSummonerAccountIdAndSummonerId }
	},
	"/lol-summoner/v1/current-summoner/autofill": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolSummonerAutoFillQueueDto[] }
	},
	"/lol-summoner/v1/current-summoner/jwt": {
		get: { path: never, params: never, body: never, response: string }
	},
	"/lol-summoner/v1/current-summoner/profile-privacy": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolSummonerProfilePrivacy }
		put: { path: never, params: never, body: LCUTypes.LolSummonerProfilePrivacySetting, response: unknown }
	},
	"/lol-summoner/v1/current-summoner/rerollPoints": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolSummonerSummonerRerollPoints }
	},
	"/lol-summoner/v1/current-summoner/summoner-profile": {
		get: { path: never, params: never, body: never, response: unknown }
		post: { path: never, params: never, body: LCUTypes.LolSummonerSummonerProfileUpdate, response: unknown }
	},
	"/lol-summoner/v1/player-alias-state": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolSummonerPlayerNameState }
	},
	"/lol-summoner/v1/player-name-mode": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolSummonerPlayerNameMode }
	},
	"/lol-summoner/v1/profile-privacy-enabled": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolSummonerProfilePrivacyEnabledState }
	},
	"/lol-summoner/v1/riot-alias-free-eligibility": {
		get: { path: never, params: never, body: never, response: boolean }
	},
	"/lol-summoner/v1/riot-alias-purchase-eligibility": {
		get: { path: never, params: never, body: never, response: boolean }
	},
	"/lol-summoner/v1/status": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolSummonerStatus }
	},
	"/lol-summoner/v1/summoner-profile": {
		get: { path: never, params: { "puuid": string }, body: never, response: unknown }
	},
	"/lol-summoner/v1/summoner-requests-ready": {
		get: { path: never, params: never, body: never, response: boolean }
	},
	"/lol-summoner/v1/summoners": {
		get: { path: never, params: { "name": string }, body: never, response: LCUTypes.LolSummonerSummoner }
		post: { path: never, params: never, body: LCUTypes.LolSummonerSummonerRequestedName, response: LCUTypes.LolSummonerSummoner }
	},
	"/lol-summoner/v1/summoners/{id}": {
		get: { path: [id: number], params: never, body: never, response: LCUTypes.LolSummonerSummoner }
	},
	"/lol-summoner/v1/summoners-by-puuid-cached/{puuid}": {
		get: { path: [puuid: string], params: never, body: never, response: LCUTypes.LolSummonerSummoner }
	},
	"/lol-summoner/v2/summoner-icons": {
		get: { path: never, params: { "ids": number[] }, body: never, response: LCUTypes.LolSummonerSummonerIdAndIcon[] }
	},
	"/lol-summoner/v2/summoner-names": {
		get: { path: never, params: { "ids": number[] }, body: never, response: LCUTypes.LolSummonerSummonerIdAndName[] }
	},
	"/lol-summoner/v2/summoners": {
		get: { path: never, params: { "ids"?: number[] }, body: never, response: LCUTypes.LolSummonerSummoner[] }
	},
	"/lol-summoner/v2/summoners/puuid/{puuid}": {
		get: { path: [puuid: string], params: never, body: never, response: LCUTypes.LolSummonerSummoner }
	},
	"/lol-tastes/v1/ready": {
		get: { path: never, params: never, body: never, response: boolean }
	},
	"/lol-tastes/v1/skins-model": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolTastesDataModelResponse }
	},
	"/lol-tastes/v1/tft-overview-model": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolTastesDataModelResponse }
	},
	"/lol-tft-pass/v1/battle-pass": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolTftPassTftPaidBattlepass }
	},
	"/lol-tft-pass/v1/daily-login-pass": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolTftPassTftPaidBattlepass }
	},
	"/lol-tft-pass/v1/enabled": {
		get: { path: never, params: never, body: never, response: boolean }
	},
	"/lol-tft-pass/v1/event-pass": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolTftPassTftPaidBattlepass }
	},
	"/lol-tft-pass/v1/reward-notification": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolTftPassTFTPassRewardNotification }
	},
	"/lol-tft-team-planner/v1/config": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolTftTeamPlannerTFTTeamPlannerConfig }
	},
	"/lol-tft-team-planner/v1/ftue/hasViewed": {
		get: { path: never, params: never, body: never, response: boolean }
		patch: { path: never, params: never, body: boolean, response: unknown }
	},
	"/lol-tft-team-planner/v1/team/local": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolTftTeamPlannerTeamSettings }
	},
	"/lol-tft-team-planner/v1/team/reminders": {
		get: { path: never, params: never, body: never, response: boolean }
		patch: { path: never, params: never, body: boolean, response: unknown }
	},
	"/lol-tft-troves/v1/banners": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolTftTrovesTrovesBanner[] }
	},
	"/lol-tft-troves/v1/config": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolTftTrovesTroves }
	},
	"/lol-tft-troves/v1/loot-odds/{dropTableId}": {
		get: { path: [dropTableId: string], params: never, body: never, response: LCUTypes.LolTftTrovesVerboseLootOddsResponse }
	},
	"/lol-tft-troves/v1/status-notifications": {
		get: { path: never, params: never, body: never, response: void }
	},
	"/lol-tft/v1/tft/battlePassHub": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolTftLolTftBattlePassHub }
	},
	"/lol-tft/v1/tft/directToHub": {
		get: { path: never, params: never, body: never, response: boolean }
	},
	"/lol-tft/v1/tft/events": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolTftLolTftEvents }
	},
	"/lol-tft/v1/tft/homeHub": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolTftLolTftHomeHub }
	},
	"/lol-tft/v1/tft/newsHub": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolTftLolTftNewsHub }
	},
	"/lol-tft/v1/tft/promoButtons": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolTftLolTftPromoButtons }
	},
	"/lol-tft/v1/tft/tencentEventhubConfigs": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolTftLolTftTencentEventHubConfigs }
	},
	"/lol-tft/v2/tft/battlepass": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolMissionsTftPaidBattlepass }
	},
	"/lol-trophies/v1/current-summoner/trophies/profile": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolTrophiesTrophyProfileData }
	},
	"/lol-trophies/v1/players/{puuid}/trophies/profile": {
		get: { path: [puuid: string], params: never, body: never, response: LCUTypes.LolTrophiesTrophyProfileData }
	},
	"/lol-vanguard/v1/config/days-to-reshow-modal": {
		get: { path: never, params: never, body: never, response: number }
	},
	"/lol-vanguard/v1/config/enabled": {
		get: { path: never, params: never, body: never, response: boolean }
	},
	"/lol-vanguard/v1/is-playing-in-pcb": {
		get: { path: never, params: never, body: never, response: boolean }
	},
	"/lol-vanguard/v1/machine-specs": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolVanguardVanguardMachineSpecs }
	},
	"/lol-vanguard/v1/session": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolVanguardVanguardSession }
	},
	"/lol-yourshop/v1/has-permissions": {
		get: { path: never, params: never, body: never, response: boolean }
	},
	"/lol-yourshop/v1/modal": {
		get: { path: never, params: never, body: never, response: boolean }
	},
	"/lol-yourshop/v1/offers": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolYourshopUIOffer[] }
	},
	"/lol-yourshop/v1/ready": {
		get: { path: never, params: never, body: never, response: boolean }
	},
	"/lol-yourshop/v1/status": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolYourshopUIStatus }
	},
	"/lol-yourshop/v1/themed": {
		get: { path: never, params: never, body: never, response: boolean }
	},
	"/memory/v1/fe-processes-ready": {
		get: { path: never, params: never, body: never, response: boolean }
	},
	"/patcher/v1/notifications": {
		get: { path: never, params: never, body: never, response: LCUTypes.PatcherNotification[] }
		post: { path: never, params: never, body: LCUTypes.PatcherNotificationId, response: void }
	},
	"/patcher/v1/p2p/status": {
		get: { path: never, params: never, body: never, response: LCUTypes.PatcherP2PStatus }
		patch: { path: never, params: never, body: LCUTypes.PatcherP2PStatusUpdate, response: unknown }
	},
	"/patcher/v1/products": {
		get: { path: never, params: never, body: never, response: string[] }
	},
	"/patcher/v1/products/{product-id}/paths": {
		get: { path: [productId: string], params: never, body: never, response: Record<string, string> }
	},
	"/patcher/v1/products/{product-id}/state": {
		get: { path: [productId: string], params: never, body: never, response: LCUTypes.PatcherProductState }
	},
	"/patcher/v1/products/{product-id}/tags": {
		get: { path: [productId: string], params: never, body: never, response: Record<string, string> }
	},
	"/patcher/v1/status": {
		get: { path: never, params: never, body: never, response: LCUTypes.PatcherStatus }
	},
	"/performance/v1/memory": {
		get: { path: never, params: never, body: never, response: unknown }
	},
	"/performance/v1/report": {
		get: { path: never, params: never, body: never, response: unknown[] }
	},
	"/performance/v1/system-info": {
		get: { path: never, params: { "full"?: number }, body: never, response: unknown }
	},
	"/player-notifications/v1/config": {
		get: { path: never, params: never, body: never, response: LCUTypes.PlayerNotificationsPlayerNotificationConfigResource }
		put: { path: never, params: never, body: LCUTypes.PlayerNotificationsPlayerNotificationConfigResource, response: LCUTypes.PlayerNotificationsPlayerNotificationConfigResource }
	},
	"/player-notifications/v1/notifications": {
		get: { path: never, params: never, body: never, response: LCUTypes.PlayerNotificationsPlayerNotificationResource[] }
		post: { path: never, params: never, body: LCUTypes.PlayerNotificationsPlayerNotificationResource, response: LCUTypes.PlayerNotificationsPlayerNotificationResource }
	},
	"/plugin-manager/v1/external-plugins/availability": {
		get: { path: never, params: never, body: never, response: LCUTypes.ExternalPluginsResource }
	},
	"/plugin-manager/v1/status": {
		get: { path: never, params: never, body: never, response: LCUTypes.PluginManagerResource }
	},
	"/plugin-manager/v2/descriptions": {
		get: { path: never, params: never, body: never, response: LCUTypes.PluginDescriptionResource[] }
	},
	"/plugin-manager/v2/descriptions/{plugin}": {
		get: { path: [plugin: string], params: never, body: never, response: LCUTypes.PluginDescriptionResource }
	},
	"/plugin-manager/v2/plugins": {
		get: { path: never, params: never, body: never, response: LCUTypes.PluginResource[] }
	},
	"/plugin-manager/v2/plugins/{plugin}": {
		get: { path: [plugin: string], params: never, body: never, response: LCUTypes.PluginResource }
	},
	"/plugin-manager/v3/plugins-manifest": {
		get: { path: never, params: never, body: never, response: unknown }
	},
	"/process-control/v1/process": {
		get: { path: never, params: never, body: never, response: LCUTypes.ProcessControlProcess }
	},
	"/riot-messaging-service/v1/message/{a}": {
		get: { path: [a: string], params: never, body: never, response: LCUTypes.RmsMessage }
	},
	"/riot-messaging-service/v1/message/{a}/{b}": {
		get: { path: [a: string, b: string], params: never, body: never, response: LCUTypes.RmsMessage }
	},
	"/riot-messaging-service/v1/message/{a}/{b}/{c}": {
		get: { path: [a: string, b: string, c: string], params: never, body: never, response: LCUTypes.RmsMessage }
	},
	"/riot-messaging-service/v1/message/{a}/{b}/{c}/{d}": {
		get: { path: [a: string, b: string, c: string, d: string], params: never, body: never, response: LCUTypes.RmsMessage }
	},
	"/riot-messaging-service/v1/message/{a}/{b}/{c}/{d}/{e}": {
		get: { path: [a: string, b: string, c: string, d: string, e: string], params: never, body: never, response: LCUTypes.RmsMessage }
	},
	"/riot-messaging-service/v1/message/{a}/{b}/{c}/{d}/{e}/{f}": {
		get: { path: [a: string, b: string, c: string, d: string, e: string, f: string], params: never, body: never, response: LCUTypes.RmsMessage }
	},
	"/riot-messaging-service/v1/state": {
		get: { path: never, params: never, body: never, response: LCUTypes.RiotMessagingServiceState }
	},
	"/riotclient/app-name": {
		get: { path: never, params: never, body: never, response: string }
	},
	"/riotclient/app-port": {
		get: { path: never, params: never, body: never, response: number }
	},
	"/riotclient/auth-token": {
		get: { path: never, params: never, body: never, response: string }
	},
	"/riotclient/command-line-args": {
		get: { path: never, params: never, body: never, response: string[] }
	},
	"/riotclient/machine-id": {
		get: { path: never, params: never, body: never, response: string }
	},
	"/riotclient/region-locale": {
		get: { path: never, params: never, body: never, response: LCUTypes.LolL10nRegionLocale }
	},
	"/riotclient/system-info/v1/basic-info": {
		get: { path: never, params: never, body: never, response: LCUTypes.basicSystemInfo }
	},
	"/riotclient/trace": {
		get: { path: never, params: never, body: never, response: unknown }
	},
	"/riotclient/ux-crash-count": {
		get: { path: never, params: never, body: never, response: number }
	},
	"/riotclient/ux-state": {
		get: { path: never, params: never, body: never, response: string }
	},
	"/riotclient/v1/crash-reporting/environment": {
		get: { path: never, params: never, body: never, response: LCUTypes.CrashReportingEnvironment }
		put: { path: never, params: never, body: LCUTypes.CrashReportingEnvironment, response: void }
	},
	"/riotclient/zoom-scale": {
		get: { path: never, params: never, body: never, response: number }
		post: { path: never, params: never, body: number, response: void }
	},
	"/sanitizer/v1/status": {
		get: { path: never, params: never, body: never, response: LCUTypes.SanitizerSanitizerStatus }
	},
	"/system/v1/builds": {
		get: { path: never, params: never, body: never, response: LCUTypes.BuildInfo }
	},
	"/telemetry/v1/application-start-time": {
		get: { path: never, params: never, body: never, response: number }
	},
	"/tracing/v1/trace/payloads/enabled": {
		get: { path: never, params: never, body: never, response: boolean }
	},
	"/Help": {
		post: { path: never, params: { "target"?: string, "format"?: LCUTypes.RemotingHelpFormat }, body: never, response: unknown }
	},
	"/async/v1/status/{asyncToken}": {
		get: { path: [asyncToken: number], params: never, body: never, response: unknown }
		delete: { path: [asyncToken: number], params: never, body: never, response: unknown }
	},
	"/async/v1/result/{asyncToken}": {
		get: { path: [asyncToken: number], params: never, body: never, response: unknown }
	},
	"/LoggingGetEntries": {
		post: { path: never, params: never, body: never, response: LCUTypes.LogEvent[] }
	},
	"/LoggingMetrics": {
		post: { path: never, params: never, body: never, response: unknown }
	},
	"/LoggingMetricsMetadata": {
		post: { path: never, params: never, body: never, response: unknown }
	},
	"/LoggingStart": {
		post: { path: never, params: { "buffered"?: boolean, "severity"?: LCUTypes.LogSeverityLevels }, body: never, response: void }
	},
	"/LoggingStop": {
		post: { path: never, params: never, body: never, response: void }
	},
	"/lol-champ-select-legacy/v1/session/actions/{id}": {
		patch: { path: [id: number], params: never, body: LCUTypes.LolChampSelectLegacyChampSelectAction, response: unknown }
	},
	"/lol-champ-select/v1/session/actions/{id}": {
		patch: { path: [id: number], params: never, body: LCUTypes.LolChampSelectChampSelectAction, response: unknown }
	},
	"/lol-cosmetics/v1/recent/{type}": {
		patch: { path: [type: string], params: never, body: string[], response: unknown }
	},
	"/lol-lobby-team-builder/champ-select/v1/session/actions/{id}": {
		patch: { path: [id: number], params: never, body: LCUTypes.LolLobbyTeamBuilderChampSelectAction, response: unknown }
	},
	"/lol-npe-tutorial-path/v1/tutorials/init": {
		patch: { path: never, params: never, body: never, response: void }
	},
	"/lol-rewards/v1/grants/view": {
		patch: { path: never, params: never, body: string[], response: void }
	},
	"/telemetry/v3/slis/add-bool-diagnostic": {
		patch: { path: never, params: never, body: LCUTypes.SLIBoolDiagnostic, response: void }
	},
	"/telemetry/v3/slis/add-double-diagnostic": {
		patch: { path: never, params: never, body: LCUTypes.SLIDoubleDiagnostic, response: void }
	},
	"/telemetry/v3/slis/add-int-diagnostic": {
		patch: { path: never, params: never, body: LCUTypes.SLIIntDiagnostic, response: void }
	},
	"/telemetry/v3/slis/add-label": {
		patch: { path: never, params: never, body: LCUTypes.SLILabel, response: void }
	},
	"/telemetry/v3/slis/add-string-diagnostic": {
		patch: { path: never, params: never, body: LCUTypes.SLIStringDiagnostic, response: void }
	},
	"/deep-links/v1/launch-lor-link": {
		post: { path: never, params: never, body: never, response: string }
	},
	"/dx9-deprecation/legacy-mode-notification/ack": {
		post: { path: never, params: never, body: never, response: void }
	},
	"/lol-account-verification/v1/confirmActivationPin": {
		post: { path: never, params: never, body: LCUTypes.LolAccountVerificationConfirmActivationPinRequest, response: void }
	},
	"/lol-account-verification/v1/confirmDeactivationPin": {
		post: { path: never, params: never, body: LCUTypes.LolAccountVerificationConfirmDeactivationPinRequest, response: void }
	},
	"/lol-account-verification/v1/sendActivationPin": {
		post: { path: never, params: never, body: LCUTypes.LolAccountVerificationSendActivationPinRequest, response: void }
	},
	"/lol-account-verification/v1/sendDeactivationPin": {
		post: { path: never, params: never, body: void, response: void }
	},
	"/lol-career-stats/v1/champion-stats-percentiles": {
		post: { path: never, params: never, body: LCUTypes.LolCareerStatsStatsQueryRequest[], response: LCUTypes.LolCareerStatsStatisticsPercentilesResponse[] }
	},
	"/lol-career-stats/v1/position-stats-percentiles": {
		post: { path: never, params: never, body: LCUTypes.LolCareerStatsPositionStatsQueryRequest[], response: LCUTypes.LolCareerStatsStatisticsPercentilesResponse[] }
	},
	"/lol-challenges/v1/ack-challenge-update/{id}": {
		post: { path: [id: number], params: never, body: never, response: void }
	},
	"/lol-challenges/v1/update-player-preferences": {
		post: { path: never, params: never, body: LCUTypes.LolChallengesChallengesPlayerPreferences, response: void }
	},
	"/lol-champ-select-legacy/v1/battle-training/launch": {
		post: { path: never, params: never, body: never, response: unknown }
	},
	"/lol-champ-select-legacy/v1/session/actions/{id}/complete": {
		post: { path: [id: number], params: never, body: never, response: unknown }
	},
	"/lol-champ-select-legacy/v1/session/my-selection/reroll": {
		post: { path: never, params: never, body: never, response: unknown }
	},
	"/lol-champ-select-legacy/v1/session/trades/{id}/accept": {
		post: { path: [id: number], params: never, body: never, response: unknown }
	},
	"/lol-champ-select-legacy/v1/session/trades/{id}/cancel": {
		post: { path: [id: number], params: never, body: never, response: unknown }
	},
	"/lol-champ-select-legacy/v1/session/trades/{id}/decline": {
		post: { path: [id: number], params: never, body: never, response: unknown }
	},
	"/lol-champ-select-legacy/v1/session/trades/{id}/request": {
		post: { path: [id: number], params: never, body: never, response: LCUTypes.LolChampSelectLegacyChampSelectTradeContract }
	},
	"/lol-champ-select/v1/battle-training/launch": {
		post: { path: never, params: never, body: never, response: unknown }
	},
	"/lol-champ-select/v1/ongoing-swap/{id}/clear": {
		post: { path: [id: number], params: never, body: never, response: unknown }
	},
	"/lol-champ-select/v1/ongoing-trade/{id}/clear": {
		post: { path: [id: number], params: never, body: never, response: unknown }
	},
	"/lol-champ-select/v1/retrieve-latest-game-dto": {
		post: { path: never, params: never, body: never, response: unknown }
	},
	"/lol-champ-select/v1/session/actions/{id}/complete": {
		post: { path: [id: number], params: never, body: never, response: unknown }
	},
	"/lol-champ-select/v1/session/bench/swap/{championId}": {
		post: { path: [championId: number], params: never, body: never, response: unknown }
	},
	"/lol-champ-select/v1/session/my-selection/reroll": {
		post: { path: never, params: never, body: never, response: unknown }
	},
	"/lol-champ-select/v1/session/simple-inventory": {
		post: { path: never, params: never, body: never, response: unknown }
	},
	"/lol-champ-select/v1/session/swaps/{id}/accept": {
		post: { path: [id: number], params: never, body: never, response: unknown }
	},
	"/lol-champ-select/v1/session/swaps/{id}/cancel": {
		post: { path: [id: number], params: never, body: never, response: unknown }
	},
	"/lol-champ-select/v1/session/swaps/{id}/decline": {
		post: { path: [id: number], params: never, body: never, response: unknown }
	},
	"/lol-champ-select/v1/session/swaps/{id}/request": {
		post: { path: [id: number], params: never, body: never, response: LCUTypes.LolChampSelectChampSelectSwapContract }
	},
	"/lol-champ-select/v1/session/trades/{id}/accept": {
		post: { path: [id: number], params: never, body: never, response: unknown }
	},
	"/lol-champ-select/v1/session/trades/{id}/cancel": {
		post: { path: [id: number], params: never, body: never, response: unknown }
	},
	"/lol-champ-select/v1/session/trades/{id}/decline": {
		post: { path: [id: number], params: never, body: never, response: unknown }
	},
	"/lol-champ-select/v1/session/trades/{id}/request": {
		post: { path: [id: number], params: never, body: never, response: LCUTypes.LolChampSelectChampSelectTradeContract }
	},
	"/lol-champ-select/v1/team-boost/purchase": {
		post: { path: never, params: never, body: never, response: unknown }
	},
	"/lol-champ-select/v1/toggle-favorite/{championId}/{position}": {
		post: { path: [championId: number, position: string], params: never, body: never, response: unknown }
	},
	"/lol-champ-select/v1/toggle-player-muted": {
		post: { path: never, params: never, body: LCUTypes.LolChampSelectMutedPlayerInfo, response: unknown }
	},
	"/lol-champion-mastery/v1/{puuid}/champion-mastery/top": {
		post: { path: [puuid: string], params: never, body: number, response: LCUTypes.LolChampionMasteryTopChampionMasteries }
	},
	"/lol-champion-mastery/v1/notifications/ack": {
		post: { path: never, params: never, body: never, response: void }
	},
	"/lol-champion-mastery/v1/scouting": {
		post: { path: never, params: never, body: string[], response: LCUTypes.RankedScoutingDTO[] }
	},
	"/lol-chat/v1/conversations/eog-chat-toggle": {
		post: { path: never, params: never, body: boolean, response: unknown }
	},
	"/lol-chat/v1/system-mutes": {
		post: { path: never, params: never, body: LCUTypes.LolChatPlayerMuteUpdate, response: unknown }
	},
	"/lol-clash/v1/eog-player-update/acknowledge": {
		post: { path: never, params: never, body: never, response: unknown }
	},
	"/lol-clash/v1/events": {
		post: { path: never, params: never, body: string[], response: Record<string, LCUTypes.ClashEventData> }
	},
	"/lol-clash/v1/game-end/acknowledge": {
		post: { path: never, params: never, body: never, response: unknown }
	},
	"/lol-clash/v1/lft/player": {
		post: { path: never, params: never, body: LCUTypes.LolClashLftState, response: unknown }
	},
	"/lol-clash/v1/lft/player/find": {
		post: { path: never, params: never, body: LCUTypes.LolClashFindPlayers, response: LCUTypes.PlayerFinderDTO[] }
	},
	"/lol-clash/v1/lft/team": {
		post: { path: never, params: never, body: LCUTypes.LolClashTeamOpenState, response: unknown }
	},
	"/lol-clash/v1/lft/team/{rosterId}/request": {
		post: { path: [rosterId: string], params: never, body: never, response: unknown }
	},
	"/lol-clash/v1/lft/team/fetch-requests": {
		post: { path: never, params: never, body: number, response: unknown }
	},
	"/lol-clash/v1/lft/team/find": {
		post: { path: never, params: never, body: LCUTypes.LolClashFindTeams, response: LCUTypes.OpenedTeamDTO[] }
	},
	"/lol-clash/v1/notifications/acknowledge": {
		post: { path: never, params: never, body: never, response: unknown }
	},
	"/lol-clash/v1/refresh": {
		post: { path: never, params: never, body: never, response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/accept": {
		post: { path: [rosterId: string], params: never, body: never, response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/cancel-withdraw": {
		post: { path: [rosterId: string], params: never, body: never, response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/change-all-details": {
		post: { path: [rosterId: string], params: never, body: LCUTypes.LolClashRosterDetails, response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/change-icon": {
		post: { path: [rosterId: string], params: never, body: LCUTypes.LolClashChangeIconRequest, response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/change-name": {
		post: { path: [rosterId: string], params: never, body: LCUTypes.LolClashChangeNameRequest, response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/change-short-name": {
		post: { path: [rosterId: string], params: never, body: LCUTypes.LolClashChangeNameRequest, response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/decline": {
		post: { path: [rosterId: string], params: never, body: never, response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/disband": {
		post: { path: [rosterId: string], params: never, body: never, response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/invite": {
		post: { path: [rosterId: string], params: never, body: number[], response: LCUTypes.LolClashClientFailedInvite[] }
	},
	"/lol-clash/v1/roster/{rosterId}/kick": {
		post: { path: [rosterId: string], params: never, body: LCUTypes.LolClashKickRequest, response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/leave": {
		post: { path: [rosterId: string], params: never, body: never, response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/lockin": {
		post: { path: [rosterId: string], params: never, body: never, response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/set-position": {
		post: { path: [rosterId: string], params: never, body: LCUTypes.LolClashSetPositionRequest, response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/set-ticket": {
		post: { path: [rosterId: string], params: never, body: LCUTypes.LolClashSetTicketRequest, response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/suggest": {
		post: { path: [rosterId: string], params: never, body: number[], response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/suggest/{summonerId}/accept": {
		post: { path: [rosterId: string, summonerId: number], params: never, body: never, response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/suggest/{summonerId}/decline": {
		post: { path: [rosterId: string, summonerId: number], params: never, body: never, response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/suggest/{summonerId}/revoke": {
		post: { path: [rosterId: string, summonerId: number], params: never, body: never, response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/ticket-offer/{summonerId}/accept": {
		post: { path: [rosterId: string, summonerId: number], params: never, body: never, response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/ticket-offer/{summonerId}/decline": {
		post: { path: [rosterId: string, summonerId: number], params: never, body: never, response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/ticket-offer/{summonerId}/offer": {
		post: { path: [rosterId: string, summonerId: number], params: never, body: LCUTypes.LolClashOfferTicketRequest, response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/ticket-offer/{summonerId}/revoke": {
		post: { path: [rosterId: string, summonerId: number], params: never, body: never, response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/transfer-captain": {
		post: { path: [rosterId: string], params: never, body: number, response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/unlockin": {
		post: { path: [rosterId: string], params: never, body: never, response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/unwithdraw": {
		post: { path: [rosterId: string], params: never, body: never, response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/update-logos": {
		post: { path: [rosterId: string], params: never, body: never, response: unknown }
	},
	"/lol-clash/v1/roster/{rosterId}/withdraw": {
		post: { path: [rosterId: string], params: never, body: never, response: unknown }
	},
	"/lol-clash/v1/simple-state-flags/{id}/acknowledge": {
		post: { path: [id: string], params: never, body: never, response: unknown }
	},
	"/lol-clash/v1/tournament/{tournamentId}/create-roster": {
		post: { path: [tournamentId: number], params: never, body: LCUTypes.LolClashRosterDetails, response: unknown }
	},
	"/lol-clash/v1/update-logos": {
		post: { path: never, params: never, body: never, response: unknown }
	},
	"/lol-email-verification/v1/confirm-email": {
		post: { path: never, params: never, body: never, response: unknown }
	},
	"/lol-end-of-game/v1/state/dismiss-stats": {
		post: { path: never, params: never, body: never, response: unknown }
	},
	"/lol-esport-stream-notifications/v1/send-stats": {
		post: { path: never, params: { "eventType": string, "matchId": string }, body: never, response: void }
	},
	"/lol-event-hub/v1/events/{eventId}/purchase-offer": {
		post: { path: [eventId: string], params: never, body: LCUTypes.LolEventHubPurchaseOfferRequest, response: LCUTypes.LolEventHubPurchaseOfferResponseV3 }
	},
	"/lol-event-hub/v1/events/{eventId}/reward-track/claim-all": {
		post: { path: [eventId: string], params: never, body: never, response: void }
	},
	"/lol-event-hub/v1/purchase-item": {
		post: { path: never, params: never, body: LCUTypes.LolEventHubItemOrderDTO, response: LCUTypes.LolEventHubPurchaseOrderResponseDTO }
	},
	"/lol-game-client-chat/v1/instant-messages": {
		post: { path: never, params: { "summonerName": string, "message": string }, body: never, response: void }
	},
	"/lol-game-client-chat/v2/instant-messages": {
		post: { path: never, params: never, body: LCUTypes.LolGameClientChatMessageToPlayer, response: void }
	},
	"/lol-game-settings/v1/reload-post-game": {
		post: { path: never, params: never, body: never, response: void }
	},
	"/lol-game-settings/v1/save": {
		post: { path: never, params: never, body: never, response: boolean }
	},
	"/lol-gameflow/v1/ack-failed-to-launch": {
		post: { path: never, params: never, body: never, response: void }
	},
	"/lol-gameflow/v1/basic-tutorial/start": {
		post: { path: never, params: never, body: never, response: unknown }
	},
	"/lol-gameflow/v1/battle-training/start": {
		post: { path: never, params: never, body: never, response: unknown }
	},
	"/lol-gameflow/v1/battle-training/stop": {
		post: { path: never, params: never, body: never, response: unknown }
	},
	"/lol-gameflow/v1/early-exit": {
		post: { path: never, params: never, body: never, response: unknown }
	},
	"/lol-gameflow/v1/pre-end-game-transition": {
		post: { path: never, params: never, body: boolean, response: void }
	},
	"/lol-gameflow/v1/reconnect": {
		post: { path: never, params: never, body: never, response: unknown }
	},
	"/lol-gameflow/v1/session/champ-select/phase-time-remaining": {
		post: { path: never, params: never, body: number, response: void }
	},
	"/lol-gameflow/v1/session/dodge": {
		post: { path: never, params: never, body: LCUTypes.LolGameflowGameflowGameDodge, response: void }
	},
	"/lol-gameflow/v1/session/event": {
		post: { path: never, params: never, body: string, response: void }
	},
	"/lol-gameflow/v1/session/game-configuration": {
		post: { path: never, params: never, body: LCUTypes.LolGameflowQueue, response: void }
	},
	"/lol-gameflow/v1/session/request-enter-gameflow": {
		post: { path: never, params: never, body: string, response: boolean }
	},
	"/lol-gameflow/v1/session/request-lobby": {
		post: { path: never, params: never, body: never, response: boolean }
	},
	"/lol-gameflow/v1/session/request-tournament-checkin": {
		post: { path: never, params: never, body: never, response: boolean }
	},
	"/lol-gameflow/v1/session/tournament-ended": {
		post: { path: never, params: never, body: never, response: void }
	},
	"/lol-gameflow/v1/spectate/launch": {
		post: { path: never, params: never, body: string, response: unknown }
	},
	"/lol-gameflow/v1/spectate/quit": {
		post: { path: never, params: never, body: never, response: unknown }
	},
	"/lol-gameflow/v1/tick": {
		post: { path: never, params: never, body: never, response: void }
	},
	"/lol-gameflow/v1/watch/launch": {
		post: { path: never, params: never, body: string[], response: unknown }
	},
	"/lol-gameflow/v2/spectate/launch": {
		post: { path: never, params: never, body: LCUTypes.LolGameflowSpectateGameInfoResource, response: unknown }
	},
	"/lol-highlights/v1/file-browser/{highlightId}": {
		post: { path: [highlightId: number], params: never, body: never, response: unknown }
	},
	"/lol-honeyfruit/v1/account-claim/linking-redirect": {
		post: { path: never, params: never, body: never, response: void }
	},
	"/lol-honor-v2/v1/honor-player": {
		post: { path: never, params: never, body: LCUTypes.LolHonorV2ApiHonorPlayerServerRequest, response: string }
	},
	"/lol-honor-v2/v1/late-recognition/ack": {
		post: { path: never, params: never, body: never, response: void }
	},
	"/lol-honor-v2/v1/level-change/ack": {
		post: { path: never, params: never, body: never, response: void }
	},
	"/lol-honor-v2/v1/mutual-honor/ack": {
		post: { path: never, params: never, body: never, response: void }
	},
	"/lol-honor-v2/v1/reward-granted/ack": {
		post: { path: never, params: never, body: never, response: void }
	},
	"/lol-inventory/v1/notification/acknowledge": {
		post: { path: never, params: never, body: number, response: void }
	},
	"/lol-item-sets/v1/item-sets/validate": {
		post: { path: never, params: never, body: LCUTypes.LolItemSetsValidateItemSetNameInput, response: LCUTypes.LolItemSetsValidateItemSetNameResponse }
	},
	"/lol-kr-shutdown-law/v1/rating-screen/acknowledge": {
		post: { path: never, params: never, body: never, response: void }
	},
	"/lol-license-agreement/v1/agreements/{id}/accept": {
		post: { path: [id: string], params: never, body: never, response: unknown }
	},
	"/lol-license-agreement/v1/agreements/{id}/decline": {
		post: { path: [id: string], params: never, body: never, response: unknown }
	},
	"/lol-loadouts/v4/loadouts": {
		post: { path: never, params: never, body: LCUTypes.LolLoadoutsCreateLoadoutDTO, response: LCUTypes.LolLoadoutsScopedLoadout }
	},
	"/lol-lobby-team-builder/champ-select/v1/retrieve-latest-game-dto": {
		post: { path: never, params: never, body: never, response: unknown }
	},
	"/lol-lobby-team-builder/champ-select/v1/session/actions/{id}/complete": {
		post: { path: [id: number], params: never, body: never, response: unknown }
	},
	"/lol-lobby-team-builder/champ-select/v1/session/bench/swap/{championId}": {
		post: { path: [championId: number], params: never, body: never, response: unknown }
	},
	"/lol-lobby-team-builder/champ-select/v1/session/my-selection/reroll": {
		post: { path: never, params: never, body: never, response: unknown }
	},
	"/lol-lobby-team-builder/champ-select/v1/session/swaps/{id}/accept": {
		post: { path: [id: number], params: never, body: never, response: unknown }
	},
	"/lol-lobby-team-builder/champ-select/v1/session/swaps/{id}/cancel": {
		post: { path: [id: number], params: never, body: never, response: unknown }
	},
	"/lol-lobby-team-builder/champ-select/v1/session/swaps/{id}/decline": {
		post: { path: [id: number], params: never, body: never, response: unknown }
	},
	"/lol-lobby-team-builder/champ-select/v1/session/swaps/{id}/request": {
		post: { path: [id: number], params: never, body: never, response: LCUTypes.LolLobbyTeamBuilderChampSelectSwapContract }
	},
	"/lol-lobby-team-builder/champ-select/v1/session/trades/{id}/accept": {
		post: { path: [id: number], params: never, body: never, response: unknown }
	},
	"/lol-lobby-team-builder/champ-select/v1/session/trades/{id}/cancel": {
		post: { path: [id: number], params: never, body: never, response: unknown }
	},
	"/lol-lobby-team-builder/champ-select/v1/session/trades/{id}/decline": {
		post: { path: [id: number], params: never, body: never, response: unknown }
	},
	"/lol-lobby-team-builder/champ-select/v1/session/trades/{id}/request": {
		post: { path: [id: number], params: never, body: never, response: LCUTypes.LolLobbyTeamBuilderChampSelectTradeContract }
	},
	"/lol-lobby-team-builder/champ-select/v1/simple-inventory": {
		post: { path: never, params: never, body: never, response: void }
	},
	"/lol-lobby-team-builder/champ-select/v1/team-boost/purchase": {
		post: { path: never, params: never, body: never, response: unknown }
	},
	"/lol-lobby-team-builder/v1/ready-check/accept": {
		post: { path: never, params: never, body: never, response: unknown }
	},
	"/lol-lobby-team-builder/v1/ready-check/decline": {
		post: { path: never, params: never, body: never, response: unknown }
	},
	"/lol-lobby/v1/custom-games/{id}/join": {
		post: { path: [id: number], params: never, body: LCUTypes.LolLobbyLobbyCustomJoinParameters, response: unknown }
	},
	"/lol-lobby/v1/custom-games/refresh": {
		post: { path: never, params: never, body: never, response: unknown }
	},
	"/lol-lobby/v1/lobby/custom/bots": {
		post: { path: never, params: never, body: LCUTypes.LolLobbyLobbyBotParams, response: unknown }
	},
	"/lol-lobby/v1/lobby/custom/cancel-champ-select": {
		post: { path: never, params: never, body: never, response: unknown }
	},
	"/lol-lobby/v1/lobby/custom/start-champ-select": {
		post: { path: never, params: never, body: never, response: LCUTypes.LolLobbyLobbyCustomChampSelectStartResponse }
	},
	"/lol-lobby/v1/lobby/custom/switch-teams": {
		post: { path: never, params: never, body: string, response: unknown }
	},
	"/lol-lobby/v1/lobby/members/localMember/player-slots/{slotsIndex}/{perksString}": {
		post: { path: [slotsIndex: number, perksString: string], params: never, body: never, response: unknown }
	},
	"/lol-lobby/v1/tournaments/{id}/join": {
		post: { path: [id: string], params: never, body: never, response: unknown }
	},
	"/lol-lobby/v2/eligibility/party": {
		post: { path: never, params: never, body: never, response: LCUTypes.LolLobbyEligibility[] }
	},
	"/lol-lobby/v2/eligibility/self": {
		post: { path: never, params: never, body: never, response: LCUTypes.LolLobbyEligibility[] }
	},
	"/lol-lobby/v2/eog-invitations": {
		post: { path: never, params: never, body: LCUTypes.LolLobbyLobbyInvitationDto[], response: LCUTypes.LolLobbyLobbyInvitationDto[] }
	},
	"/lol-lobby/v2/lobby/members/{summonerId}/grant-invite": {
		post: { path: [summonerId: number], params: never, body: never, response: number }
	},
	"/lol-lobby/v2/lobby/members/{summonerId}/kick": {
		post: { path: [summonerId: number], params: never, body: never, response: number }
	},
	"/lol-lobby/v2/lobby/members/{summonerId}/promote": {
		post: { path: [summonerId: number], params: never, body: never, response: number }
	},
	"/lol-lobby/v2/lobby/members/{summonerId}/revoke-invite": {
		post: { path: [summonerId: number], params: never, body: never, response: number }
	},
	"/lol-lobby/v2/lobby/team/{team}": {
		post: { path: [team: string], params: never, body: never, response: void }
	},
	"/lol-lobby/v2/matchmaking/quick-search": {
		post: { path: never, params: never, body: LCUTypes.LolLobbyLobbyChangeGameDto, response: unknown }
	},
	"/lol-lobby/v2/parties/overrides/EnabledForTeamBuilderQueues": {
		post: { path: never, params: never, body: boolean, response: void }
	},
	"/lol-lobby/v2/party/{partyId}/join": {
		post: { path: [partyId: string], params: never, body: LCUTypes.LolLobbyCustomJoinOptionsDto, response: unknown }
	},
	"/lol-lobby/v2/play-again": {
		post: { path: never, params: never, body: never, response: unknown }
	},
	"/lol-lobby/v2/play-again-decline": {
		post: { path: never, params: never, body: never, response: unknown }
	},
	"/lol-lobby/v2/received-invitations/{invitationId}/accept": {
		post: { path: [invitationId: string], params: never, body: never, response: void }
	},
	"/lol-lobby/v2/received-invitations/{invitationId}/decline": {
		post: { path: [invitationId: string], params: never, body: never, response: void }
	},
	"/lol-login/v1/change-summoner-name": {
		post: { path: never, params: never, body: string, response: unknown }
	},
	"/lol-login/v1/delete-rso-on-close": {
		post: { path: never, params: never, body: never, response: unknown }
	},
	"/lol-login/v1/leagueSessionStatus": {
		post: { path: never, params: never, body: LCUTypes.LolLoginLeagueSessionStatus, response: void }
	},
	"/lol-login/v1/service-proxy-uuid-requests": {
		post: { path: never, params: { "serviceName": string, "methodName": string, "pluginId": number, "timeoutMillis": number, "payload": string }, body: never, response: string }
	},
	"/lol-login/v1/session/invoke": {
		post: { path: never, params: { "destination": string, "method": string, "args": unknown[] }, body: never, response: LCUTypes.LolLoginLcdsResponse }
	},
	"/lol-login/v1/summoner-session": {
		post: { path: never, params: never, body: LCUTypes.LolLoginSummonerSessionResource, response: unknown }
	},
	"/lol-login/v1/summoner-session-failed": {
		post: { path: never, params: never, body: number, response: unknown }
	},
	"/lol-loot/v1/craft/mass": {
		post: { path: never, params: never, body: LCUTypes.CraftLootDTO[], response: LCUTypes.LolLootPlayerLootUpdate }
	},
	"/lol-loot/v1/milestones/{lootMilestonesId}/claim": {
		post: { path: [lootMilestonesId: string], params: never, body: never, response: void }
	},
	"/lol-loot/v1/player-loot/{lootName}/redeem": {
		post: { path: [lootName: string], params: never, body: never, response: LCUTypes.LolLootPlayerLootUpdate }
	},
	"/lol-loot/v1/player-loot-notifications/{id}/acknowledge": {
		post: { path: [id: string], params: never, body: never, response: string }
	},
	"/lol-loot/v1/recipes/{recipeName}/craft": {
		post: { path: [recipeName: string], params: { "playerLootList": string[], "repeat"?: number }, body: never, response: LCUTypes.LolLootPlayerLootUpdate }
	},
	"/lol-loot/v1/refresh": {
		post: { path: never, params: never, body: boolean, response: string }
	},
	"/lol-loyalty/v1/updateLoyaltyInventory": {
		post: { path: never, params: never, body: LCUTypes.LolLoyaltyLoyaltyRewards, response: void }
	},
	"/lol-maps/v1/map": {
		post: { path: never, params: never, body: LCUTypes.LolMapsMaps, response: void }
	},
	"/lol-match-history/v1/acs-endpoint-override": {
		post: { path: never, params: never, body: LCUTypes.LolMatchHistoryAcsEndPoint, response: unknown }
	},
	"/lol-matchmaking/v1/ready-check/accept": {
		post: { path: never, params: never, body: never, response: unknown }
	},
	"/lol-matchmaking/v1/ready-check/decline": {
		post: { path: never, params: never, body: never, response: unknown }
	},
	"/lol-missions/v1/force": {
		post: { path: never, params: never, body: never, response: void }
	},
	"/lol-npe-rewards/v1/challenges/opt": {
		post: { path: never, params: never, body: never, response: void }
	},
	"/lol-patch/v1/products/league_of_legends/detect-corruption-request": {
		post: { path: never, params: never, body: never, response: void }
	},
	"/lol-patch/v1/products/league_of_legends/partial-repair-request": {
		post: { path: never, params: never, body: never, response: void }
	},
	"/lol-patch/v1/products/league_of_legends/start-checking-request": {
		post: { path: never, params: never, body: never, response: void }
	},
	"/lol-patch/v1/products/league_of_legends/start-patching-request": {
		post: { path: never, params: never, body: never, response: void }
	},
	"/lol-patch/v1/products/league_of_legends/stop-checking-request": {
		post: { path: never, params: never, body: never, response: void }
	},
	"/lol-patch/v1/products/league_of_legends/stop-patching-request": {
		post: { path: never, params: never, body: boolean, response: void }
	},
	"/lol-perks/v1/recommended-pages-position/champion/{championId}/position/{position}": {
		post: { path: [championId: number, position: string], params: never, body: never, response: unknown }
	},
	"/lol-perks/v1/update-page-order": {
		post: { path: never, params: never, body: LCUTypes.LolPerksUpdatePageOrderRequest, response: unknown }
	},
	"/lol-pft/v2/events": {
		post: { path: never, params: never, body: LCUTypes.LolPftPFTEvent, response: unknown }
	},
	"/lol-player-behavior/v2/reporter-feedback/{key}": {
		post: { path: [key: string], params: never, body: never, response: void }
	},
	"/lol-player-preferences/v1/player-preferences-endpoint-override": {
		post: { path: never, params: never, body: LCUTypes.LolPlayerPreferencesPlayerPreferencesEndpoint, response: unknown }
	},
	"/lol-player-report-sender/v1/champ-select-reports": {
		post: { path: never, params: never, body: LCUTypes.LolPlayerReportSenderPlayerReport, response: unknown }
	},
	"/lol-player-report-sender/v1/end-of-game-reports": {
		post: { path: never, params: never, body: LCUTypes.LolPlayerReportSenderPlayerReport, response: unknown }
	},
	"/lol-player-report-sender/v1/match-history-reports": {
		post: { path: never, params: never, body: LCUTypes.LolPlayerReportSenderPlayerReport, response: unknown }
	},
	"/lol-pre-end-of-game/v1/complete/{sequenceEventName}": {
		post: { path: [sequenceEventName: string], params: never, body: never, response: void }
	},
	"/lol-pre-end-of-game/v1/registration/{sequenceEventName}/{priority}": {
		post: { path: [sequenceEventName: string, priority: number], params: never, body: never, response: void }
	},
	"/lol-premade-voice/v1/first-experience/game": {
		post: { path: never, params: never, body: never, response: void }
	},
	"/lol-premade-voice/v1/first-experience/lcu": {
		post: { path: never, params: never, body: never, response: void }
	},
	"/lol-premade-voice/v1/first-experience/reset": {
		post: { path: never, params: never, body: never, response: void }
	},
	"/lol-premade-voice/v1/gameClientUpdatedPTTKey": {
		post: { path: never, params: never, body: string, response: void }
	},
	"/lol-premade-voice/v1/push-to-talk/check-available": {
		post: { path: never, params: never, body: number, response: boolean }
	},
	"/lol-premade-voice/v1/settings/reset": {
		post: { path: never, params: never, body: never, response: void }
	},
	"/lol-purchase-widget/v1/purchasable-items/{inventoryType}": {
		post: { path: [inventoryType: string], params: never, body: number[], response: LCUTypes.LolPurchaseWidgetItemChoices }
	},
	"/lol-purchase-widget/v2/purchaseItems": {
		post: { path: never, params: never, body: LCUTypes.LolPurchaseWidgetPurchaseRequest, response: unknown }
	},
	"/lol-purchase-widget/v3/purchaseOffer": {
		post: { path: never, params: never, body: LCUTypes.LolPurchaseWidgetPurchaseOfferRequestV3, response: LCUTypes.LolPurchaseWidgetPurchaseOfferResponseV3 }
	},
	"/lol-purchase-widget/v3/purchaseOfferViaCap": {
		post: { path: never, params: never, body: LCUTypes.LolPurchaseWidgetPurchaseOfferRequestV3, response: LCUTypes.LolPurchaseWidgetPurchaseOfferResponseV3 }
	},
	"/lol-purchase-widget/v3/validateOffer": {
		post: { path: never, params: never, body: LCUTypes.LolPurchaseWidgetValidateOfferRequestV3, response: LCUTypes.LolPurchaseWidgetValidateOfferResponseV3 }
	},
	"/lol-ranked/v1/eos-notifications/{id}/acknowledge": {
		post: { path: [id: string], params: never, body: never, response: unknown }
	},
	"/lol-ranked/v1/notifications/{id}/acknowledge": {
		post: { path: [id: number], params: never, body: never, response: unknown }
	},
	"/lol-replays/v1/metadata/{gameId}/create/gameVersion/{gameVersion}/gameType/{gameType}/queueId/{queueId}": {
		post: { path: [gameId: number, gameVersion: string, gameType: string, queueId: number], params: never, body: never, response: void }
	},
	"/lol-replays/v1/rofls/{gameId}/download": {
		post: { path: [gameId: number], params: never, body: LCUTypes.LolReplaysReplayContextData, response: void }
	},
	"/lol-replays/v1/rofls/{gameId}/download/graceful": {
		post: { path: [gameId: number], params: never, body: LCUTypes.LolReplaysReplayContextData, response: void }
	},
	"/lol-replays/v1/rofls/{gameId}/watch": {
		post: { path: [gameId: number], params: never, body: LCUTypes.LolReplaysReplayContextData, response: void }
	},
	"/lol-replays/v1/rofls/scan": {
		post: { path: never, params: never, body: never, response: void }
	},
	"/lol-replays/v2/metadata/{gameId}/create": {
		post: { path: [gameId: number], params: never, body: LCUTypes.LolReplaysReplayCreateMetadata, response: void }
	},
	"/lol-rewards/v1/grants/{grantId}/select": {
		post: { path: [grantId: string], params: never, body: LCUTypes.LolRewardsSelectionRequestDTO, response: LCUTypes.LolRewardsRewardGrant }
	},
	"/lol-rewards/v1/reward/replay": {
		post: { path: never, params: never, body: string, response: void }
	},
	"/lol-rewards/v1/select-bulk": {
		post: { path: never, params: never, body: LCUTypes.LolRewardsSelectionRequestDTO[], response: Record<string, LCUTypes.LolRewardsSelectGrantStatusResponse> }
	},
	"/lol-rso-auth/v1/authorization/gas": {
		post: { path: never, params: never, body: LCUTypes.LolRsoAuthRSOPlayerCredentials, response: LCUTypes.LolRsoAuthAuthorization }
	},
	"/lol-rso-auth/v1/authorization/refresh": {
		post: { path: never, params: never, body: never, response: LCUTypes.LolRsoAuthAuthorization }
	},
	"/lol-rso-auth/v1/device-id": {
		post: { path: never, params: never, body: never, response: LCUTypes.LolRsoAuthDeviceId }
	},
	"/lol-rso-auth/v1/external-session-config": {
		post: { path: never, params: never, body: unknown, response: unknown }
	},
	"/lol-seasons/v1/allSeasons/product/{product}": {
		post: { path: [product: string], params: never, body: LCUTypes.LolSeasonsAllProductSeasonQuery, response: LCUTypes.LolSeasonsAllSeasonsProduct[] }
	},
	"/lol-settings/v1/account/save": {
		post: { path: never, params: never, body: never, response: void }
	},
	"/lol-settings/v2/reload/{ppType}": {
		post: { path: [ppType: string], params: never, body: never, response: void }
	},
	"/lol-spectator/v1/buddy/spectate": {
		post: { path: never, params: never, body: string[], response: LCUTypes.LolSpectatorSummonerOrTeamAvailabilty }
	},
	"/lol-spectator/v1/spectate/launch": {
		post: { path: never, params: never, body: LCUTypes.LolSpectatorSpectateGameInfo, response: unknown }
	},
	"/lol-spectator/v2/buddy/spectate": {
		post: { path: never, params: never, body: number[], response: LCUTypes.LolSpectatorSummonerIdAvailability }
	},
	"/lol-statstones/v1/featured-champion-statstones/{championItemId}/{statstoneId}": {
		post: { path: [championItemId: number, statstoneId: string], params: never, body: LCUTypes.LolStatstonesStatstoneFeaturedRequest, response: unknown }
	},
	"/lol-store/v1/notifications/acknowledge": {
		post: { path: never, params: never, body: string, response: unknown }
	},
	"/lol-store/v3/purchase": {
		post: { path: never, params: never, body: LCUTypes.LolStoreItemOrderDTO[], response: LCUTypes.LolStorePurchaseOrderResponseDTO }
	},
	"/lol-suggested-players/v1/reported-player": {
		post: { path: never, params: never, body: LCUTypes.LolSuggestedPlayersSuggestedPlayersReportedPlayer, response: void }
	},
	"/lol-suggested-players/v1/victorious-comrade": {
		post: { path: never, params: never, body: LCUTypes.LolSuggestedPlayersSuggestedPlayersVictoriousComrade, response: void }
	},
	"/lol-summoner/v1/current-summoner/name": {
		post: { path: never, params: never, body: string, response: LCUTypes.LolSummonerSummoner }
	},
	"/lol-summoner/v1/save-alias": {
		post: { path: never, params: never, body: LCUTypes.LolSummonerAlias, response: LCUTypes.LolSummonerAliasAvailability }
	},
	"/lol-summoner/v1/summoner-aliases-by-ids": {
		post: { path: never, params: never, body: number[], response: Record<string, LCUTypes.LolSummonerAlias> }
	},
	"/lol-summoner/v1/summoner-aliases-by-puuids": {
		post: { path: never, params: never, body: string[], response: Record<string, LCUTypes.LolSummonerAlias> }
	},
	"/lol-summoner/v1/summoners/aliases": {
		post: { path: never, params: never, body: LCUTypes.LolSummonerAlias[], response: LCUTypes.LolSummonerSummoner[] }
	},
	"/lol-summoner/v1/validate-alias": {
		post: { path: never, params: never, body: LCUTypes.LolSummonerAlias, response: LCUTypes.LolSummonerAliasAvailability }
	},
	"/lol-summoner/v2/summoners/names": {
		post: { path: never, params: never, body: string[], response: LCUTypes.LolSummonerSummoner[] }
	},
	"/lol-summoner/v2/summoners/puuid": {
		post: { path: never, params: never, body: string[], response: LCUTypes.LolSummonerSummoner[] }
	},
	"/lol-tft-pass/v1/pass/{id}": {
		post: { path: [id: string], params: never, body: never, response: void }
	},
	"/lol-tft-pass/v1/passes": {
		post: { path: never, params: never, body: never, response: void }
	},
	"/lol-tft-troves/v1/purchase": {
		post: { path: never, params: never, body: LCUTypes.LolTftTrovesTrovesPurchaseRequest, response: LCUTypes.LolTftTrovesCapOrdersResponseDTO }
	},
	"/lol-tft-troves/v1/roll": {
		post: { path: never, params: never, body: LCUTypes.LolTftTrovesTrovesRollRequest, response: LCUTypes.LolTftTrovesCapOrdersResponseDTO }
	},
	"/lol-tft/v1/tft/homeHub/redirect": {
		post: { path: never, params: never, body: never, response: void }
	},
	"/lol-vanguard/v1/telemetry/system-check": {
		post: { path: never, params: never, body: LCUTypes.LolVanguardVanguardSystemCheckTelemetryEvent, response: unknown }
	},
	"/lol-yourshop/v1/offers/{id}/purchase": {
		post: { path: [id: string], params: never, body: never, response: LCUTypes.LolYourshopPurchaseResponse }
	},
	"/lol-yourshop/v1/offers/{id}/reveal": {
		post: { path: [id: string], params: never, body: never, response: LCUTypes.LolYourshopUIOffer[] }
	},
	"/lol-yourshop/v1/permissions": {
		post: { path: never, params: never, body: LCUTypes.LolYourshopPlayerPermissions, response: LCUTypes.LolYourshopPlayerPermissions }
	},
	"/memory/v1/notify-fe-processes-ready": {
		post: { path: never, params: never, body: never, response: void }
	},
	"/memory/v1/snapshot": {
		post: { path: never, params: { "processIds": number[], "context": string }, body: never, response: void }
	},
	"/patcher/v1/products/{product-id}/detect-corruption-request": {
		post: { path: [productId: string], params: never, body: never, response: LCUTypes.PatcherProductState }
	},
	"/patcher/v1/products/{product-id}/partial-repair-request": {
		post: { path: [productId: string], params: never, body: never, response: unknown }
	},
	"/patcher/v1/products/{product-id}/signal-start-patching-delayed": {
		post: { path: [productId: string], params: never, body: never, response: unknown }
	},
	"/patcher/v1/products/{product-id}/start-checking-request": {
		post: { path: [productId: string], params: never, body: never, response: unknown }
	},
	"/patcher/v1/products/{product-id}/start-patching-request": {
		post: { path: [productId: string], params: never, body: never, response: unknown }
	},
	"/patcher/v1/products/{product-id}/stop-checking-request": {
		post: { path: [productId: string], params: never, body: never, response: unknown }
	},
	"/patcher/v1/products/{product-id}/stop-patching-request": {
		post: { path: [productId: string], params: never, body: never, response: unknown }
	},
	"/payments/v1/pmc-start-url": {
		post: { path: never, params: never, body: LCUTypes.PaymentsFrontEndRequest, response: LCUTypes.PaymentsFrontEndResult }
	},
	"/payments/v1/updatePaymentTelemetryState": {
		post: { path: never, params: never, body: LCUTypes.PaymentsPaymentsTelemetryTransitions, response: void }
	},
	"/performance/v1/process/{processId}": {
		post: { path: [processId: number], params: never, body: never, response: void }
	},
	"/performance/v1/report/restart": {
		post: { path: never, params: { "sampleLength"?: number, "sampleCount"?: number }, body: never, response: unknown[] }
	},
	"/process-control/v1/process/quit": {
		post: { path: never, params: never, body: never, response: void }
	},
	"/riotclient/addorupdatemetric": {
		post: { path: never, params: { "group": string, "object": string, "name": string, "value": number }, body: never, response: void }
	},
	"/riotclient/kill-and-restart-ux": {
		post: { path: never, params: never, body: never, response: void }
	},
	"/riotclient/kill-ux": {
		post: { path: never, params: never, body: never, response: void }
	},
	"/riotclient/launch-ux": {
		post: { path: never, params: never, body: never, response: void }
	},
	"/riotclient/new-args": {
		post: { path: never, params: never, body: string[], response: void }
	},
	"/riotclient/open-url-in-browser": {
		post: { path: never, params: never, body: string, response: void }
	},
	"/riotclient/show-swagger": {
		post: { path: never, params: never, body: never, response: void }
	},
	"/riotclient/unload": {
		post: { path: never, params: never, body: never, response: void }
	},
	"/riotclient/ux-allow-foreground": {
		post: { path: never, params: never, body: never, response: void }
	},
	"/riotclient/ux-flash": {
		post: { path: never, params: never, body: never, response: void }
	},
	"/riotclient/ux-minimize": {
		post: { path: never, params: never, body: never, response: void }
	},
	"/riotclient/ux-show": {
		post: { path: never, params: never, body: never, response: void }
	},
	"/riotclient/v1/crash-reporting/logs": {
		post: { path: never, params: never, body: string, response: void }
	},
	"/riotclient/v1/elevation-requests": {
		post: { path: never, params: never, body: LCUTypes.ElevationRequest, response: void }
	},
	"/sanitizer/v1/containsSanitized": {
		post: { path: never, params: never, body: LCUTypes.SanitizerContainsSanitizedRequest, response: LCUTypes.SanitizerContainsSanitizedResponse }
	},
	"/sanitizer/v1/sanitize": {
		post: { path: never, params: never, body: LCUTypes.SanitizerSanitizeRequest, response: LCUTypes.SanitizerSanitizeResponse }
	},
	"/telemetry/v1/common-data/{key}": {
		post: { path: [key: string], params: never, body: string, response: void }
	},
	"/telemetry/v1/events/{eventType}": {
		post: { path: [eventType: string], params: never, body: Record<string, unknown>, response: void }
	},
	"/telemetry/v1/events-with-perf-info/{eventType}": {
		post: { path: [eventType: string], params: never, body: Record<string, unknown>, response: void }
	},
	"/telemetry/v3/events/{eventType}": {
		post: { path: [eventType: string], params: never, body: Record<string, unknown>, response: void }
	},
	"/telemetry/v3/events-once/{eventType}/{onceTag}": {
		post: { path: [eventType: string, onceTag: string], params: never, body: Record<string, string>, response: void }
	},
	"/telemetry/v3/slis/counts": {
		post: { path: never, params: never, body: LCUTypes.SLICount, response: void }
	},
	"/telemetry/v3/uptime-tracking/notify-failure": {
		post: { path: never, params: never, body: LCUTypes.NotifyFailureRequest, response: void }
	},
	"/telemetry/v3/uptime-tracking/notify-success": {
		post: { path: never, params: never, body: LCUTypes.NotifySuccessRequest, response: void }
	},
	"/tracing/v1/trace/critical-flow": {
		post: { path: never, params: never, body: LCUTypes.TracingCriticalFlowEventV1, response: void }
	},
	"/tracing/v1/trace/event": {
		post: { path: never, params: never, body: LCUTypes.TracingEventV1, response: void }
	},
	"/tracing/v1/trace/module": {
		post: { path: never, params: never, body: LCUTypes.TracingModuleV1, response: void }
	},
	"/tracing/v1/trace/non-timing-event/{eventName}": {
		post: { path: [eventName: string], params: { "when": number, "value": string, "unit": string }, body: never, response: void }
	},
	"/tracing/v1/trace/phase/begin": {
		post: { path: never, params: never, body: LCUTypes.TracingPhaseBeginV1, response: void }
	},
	"/tracing/v1/trace/phase/end": {
		post: { path: never, params: never, body: LCUTypes.TracingPhaseEndV1, response: void }
	},
	"/tracing/v1/trace/step-event": {
		post: { path: never, params: never, body: string, response: void }
	},
	"/tracing/v1/trace/time-series-event/{eventName}/marker/{markerName}": {
		post: { path: [eventName: string, markerName: string], params: never, body: number, response: void }
	},
	"/client-config/v1/entitlements-token": {
		put: { path: never, params: never, body: LCUTypes.ClientConfigEntitlementsUpdate, response: void }
	},
	"/client-config/v1/refresh-config-status": {
		put: { path: never, params: never, body: never, response: void }
	},
	"/client-config/v2/namespace-changes": {
		put: { path: never, params: never, body: LCUTypes.ClientConfigConfigNamespaceUpdate, response: void }
	},
	"/lol-chat/v1/friend-groups/order": {
		put: { path: never, params: never, body: LCUTypes.LolChatFriendGroupOrder, response: unknown }
	},
	"/lol-cosmetics/v1/favorites/tft/save": {
		put: { path: never, params: never, body: never, response: unknown }
	},
	"/lol-lobby/v1/lobby/members/localMember/position-preferences": {
		put: { path: never, params: never, body: LCUTypes.LolLobbyLobbyPositionPreferences, response: unknown }
	},
	"/lol-lobby/v1/lobby/members/localMember/quickplayPlayerState": {
		put: { path: never, params: never, body: string, response: unknown }
	},
	"/lol-lobby/v1/parties/active": {
		put: { path: never, params: never, body: number, response: void }
	},
	"/lol-lobby/v1/parties/{partyId}/members/{puuid}/role": {
		put: { path: [partyId: string, puuid: string], params: never, body: string, response: void }
	},
	"/lol-lobby/v1/parties/metadata": {
		put: { path: never, params: never, body: LCUTypes.LolLobbyPartyMemberMetadataDto, response: void }
	},
	"/lol-lobby/v1/parties/queue": {
		put: { path: never, params: never, body: number, response: void }
	},
	"/lol-lobby/v1/parties/ready": {
		put: { path: never, params: never, body: number, response: void }
	},
	"/lol-lobby/v2/lobby/members/localMember/position-preferences": {
		put: { path: never, params: never, body: LCUTypes.LolLobbyLobbyPositionPreferences, response: unknown }
	},
	"/lol-lobby/v2/lobby/partyType": {
		put: { path: never, params: never, body: string, response: unknown }
	},
	"/lol-lobby/v2/lobby/subteamData": {
		put: { path: never, params: never, body: LCUTypes.LolLobbySubteamDataDto, response: void }
	},
	"/lol-loot/v1/loot-odds/evaluateQuery": {
		put: { path: never, params: never, body: LCUTypes.QueryEvaluationRequestDTO, response: LCUTypes.LolLootQueryEvaluatedLootItem[] }
	},
	"/lol-missions/v1/player": {
		put: { path: never, params: never, body: LCUTypes.IdsDTO, response: void }
	},
	"/lol-missions/v1/player/{missionId}": {
		put: { path: [missionId: string], params: never, body: LCUTypes.LolMissionsRewardGroupsSelection, response: void }
	},
	"/lol-missions/v2/player/opt": {
		put: { path: never, params: never, body: LCUTypes.LolMissionsSeriesOpt, response: void }
	},
	"/lol-npe-tutorial-path/v1/tutorials/{tutorialId}/view": {
		put: { path: [tutorialId: string], params: never, body: never, response: void }
	},
	"/lol-patch/v1/game-patch-url": {
		put: { path: never, params: never, body: string, response: void }
	},
	"/lol-patch/v1/ux": {
		put: { path: never, params: never, body: LCUTypes.LolPatchUxResource, response: void }
	},
	"/lol-perks/v1/pages/validate": {
		put: { path: never, params: never, body: LCUTypes.LolPerksValidatePageNameData, response: LCUTypes.LolPerksValidateItemSetNameResponse }
	},
	"/lol-perks/v1/perks/ack-gameplay-updated": {
		put: { path: never, params: never, body: number[], response: unknown }
	},
	"/lol-player-behavior/v1/ack-credibility-behavior-warning/{mailId}": {
		put: { path: [mailId: string], params: never, body: never, response: void }
	},
	"/lol-player-behavior/v3/reform-card/{id}": {
		put: { path: [id: string], params: never, body: never, response: void }
	},
	"/lol-player-preferences/v1/preference": {
		put: { path: never, params: never, body: LCUTypes.LolPlayerPreferencesPlayerPreferences, response: unknown }
	},
	"/lol-premade-voice/v1/participants/{puuid}/mute": {
		put: { path: [puuid: string], params: never, body: number, response: void }
	},
	"/lol-premade-voice/v1/participants/{puuid}/volume": {
		put: { path: [puuid: string], params: never, body: number, response: void }
	},
	"/lol-premade-voice/v1/self/activationSensitivity": {
		put: { path: never, params: never, body: number, response: void }
	},
	"/lol-premade-voice/v1/self/inputMode": {
		put: { path: never, params: never, body: LCUTypes.LolPremadeVoiceInputMode, response: void }
	},
	"/lol-premade-voice/v1/self/micLevel": {
		put: { path: never, params: never, body: number, response: void }
	},
	"/lol-premade-voice/v1/self/mute": {
		put: { path: never, params: never, body: number, response: void }
	},
	"/lol-remedy/v1/ack-remedy-notification/{mailId}": {
		put: { path: [mailId: string], params: never, body: never, response: void }
	},
	"/lol-summoner/v1/current-summoner/icon": {
		put: { path: never, params: never, body: LCUTypes.LolSummonerSummonerIcon, response: LCUTypes.LolSummonerSummoner }
	},
	"/lol-tft-pass/v1/pass/{id}/milestone/{milestoneId}/reward": {
		put: { path: [id: string, milestoneId: string], params: never, body: never, response: void }
	},
	"/lol-tft-team-planner/v1/team": {
		put: { path: never, params: never, body: never, response: unknown }
	},
	"/lol-tft/v1/tft_experiment_bucket": {
		put: { path: never, params: never, body: number, response: unknown }
	},
	"/patcher/v1/ux": {
		put: { path: never, params: never, body: LCUTypes.PatcherUxResource, response: void }
	},
	"/riotclient/ux-load-complete": {
		put: { path: never, params: never, body: never, response: void }
	},
	"/riotclient/ux-state/ack": {
		put: { path: never, params: never, body: number, response: void }
	},
	"/Subscribe": {
		post: { path: never, params: { "eventName": string, "format"?: LCUTypes.RemotingSerializedFormat }, body: never, response: unknown }
	},
	"/Unsubscribe": {
		post: { path: never, params: never, body: string, response: unknown }
	},
	"/WebSocketFormat": {
		post: { path: never, params: never, body: LCUTypes.RemotingSerializedFormat, response: unknown }
	},
}

export type LCUEndpoint<Method extends HttpMethod, Path extends EndpointsWithMethod<Method>> = (...args: [...(Path extends keyof LCUEndpoints ? Method extends keyof LCUEndpoints[Path] ? "path" extends keyof LCUEndpoints[Path][Method] ? LCUEndpoints[Path][Method]["path"] extends never ? [] : LCUEndpoints[Path][Method]["path"] : [] : [] : []), ...(LCUEndpointBodyType<Method, Path> extends never ? (LCUEndpointParams<Method, Path> extends never ? [] : {} extends LCUEndpointParams<Method, Path> ? [data?: LCUEndpointParams<Method, Path>] : [data: LCUEndpointParams<Method, Path>]) : [data: LCUEndpointBodyType<Method, Path>])]) => Promise<LCUEndpointResponseType<Method, Path>>
export type LCUEndpointResponseType<Method extends string, Path extends string> = Path extends keyof LCUEndpoints ? Method extends keyof LCUEndpoints[Path] ? "response" extends keyof LCUEndpoints[Path][Method] ? LCUEndpoints[Path][Method]["response"] : unknown : unknown : unknown;
export type LCUEndpointBodyType<Method extends string, Path extends string> = Path extends keyof LCUEndpoints ? Method extends keyof LCUEndpoints[Path] ? "body" extends keyof LCUEndpoints[Path][Method] ? LCUEndpoints[Path][Method]["body"] : unknown : unknown : unknown;
export type LCUEndpointParams<Method extends string, Path extends string> = Path extends keyof LCUEndpoints ? Method extends keyof LCUEndpoints[Path] ? "params" extends keyof LCUEndpoints[Path][Method] ? LCUEndpoints[Path][Method]["params"] : unknown : unknown : unknown;
export type EndpointsWithMethod<Method extends HttpMethod> = { [K in keyof LCUEndpoints]: LCUEndpoints[K] extends { [key in Method]: {} } ? K : never }[keyof LCUEndpoints];
export type HttpMethod = "delete" | "get" | "head" | "patch" | "post" | "put";