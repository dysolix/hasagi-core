export namespace LCUTypes {
	export type AggregationType = "average" | "sum" | "none"
	
	export interface AlertDTO {
		alertTime: number
	}
	
	export interface BannedChampion {
		championId: number
		teamId: number
		pickTurn: number
	}
	
	export interface BasePlayerDTO {
		code: number
		message: string
		data: LCUTypes.MatchedPlayerDTO
	}
	
	export interface BindingAsyncCancelEvent {
		asyncToken: number
	}
	
	export interface BindingAsyncFailureEvent {
		asyncToken: number
		error: string
	}
	
	export type BindingAsyncState = "Failed" | "Succeeded" | "Cancelled" | "Cancelling" | "Running" | "None"
	
	export interface BindingCallbackEvent {
		id: number
		parameters: unknown[]
	}
	
	export interface BindingFullApiHelp {
		functions: LCUTypes.BindingFullFunctionHelp[]
		types: LCUTypes.BindingFullTypeHelp[]
		events: LCUTypes.BindingFullEventHelp[]
	}
	
	export interface BindingFullArgumentHelp {
		name: string
		description: string
		type: LCUTypes.BindingFullTypeIdentifier
		optional: boolean
	}
	
	export interface BindingFullEnumValueHelp {
		name: string
		description: string
		value: number
	}
	
	export interface BindingFullEventHelp {
		name: string
		nameSpace: string
		type: LCUTypes.BindingFullTypeIdentifier
		description: string
		tags: string[]
	}
	
	export interface BindingFullFieldHelp {
		name: string
		description: string
		offset: number
		type: LCUTypes.BindingFullTypeIdentifier
		optional: boolean
	}
	
	export interface BindingFullFunctionHelp {
		name: string
		nameSpace: string
		arguments: LCUTypes.BindingFullArgumentHelp[]
		returns: LCUTypes.BindingFullTypeIdentifier
		description: string
		help: string
		threadSafe: boolean
		async: string
		tags: string[]
	}
	
	export interface BindingFullTypeHelp {
		name: string
		nameSpace: string
		size: number
		description: string
		tags: string[]
		fields: LCUTypes.BindingFullFieldHelp[]
		values: LCUTypes.BindingFullEnumValueHelp[]
	}
	
	export interface BindingFullTypeIdentifier {
		type: string
		elementType: string
	}
	
	export interface BindingGenericAsyncEvent {
		asyncToken: number
		data: unknown
	}
	
	export interface BindingGenericEvent {
		data: unknown
	}
	
	export type BindingHelpFormat = "Epytext" | "Full"
	
	export interface BoostTeamSkinRentalDTO {
		summonerName: string
		skinUnlockMode: string
		price: number
		ipReward: number
		ipRewardForPurchaser: number
		availableSkins: number[]
		unlocked: boolean
	}
	
	export interface Bracket {
		version: number
		tournamentId: number
		phaseId: number
		id: number
		size: number
		matches: LCUTypes.BracketMatch[]
		rosters: LCUTypes.BracketRoster[]
	}
	
	export interface BracketMatch {
		id: number
		round: number
		order: number
		rosterId1: number
		rosterId2: number
		resultHistory: string
		lowestPossiblePosition: number
		highestPossiblePosition: number
		roundStartTime: number
		gameStartTime: number
		status: LCUTypes.ClientBracketMatchStatus
		winnerId: number
		gameId: number
		loserBracket: boolean
		forfeitRosterId: number
		failRosterStatus: number
	}
	
	export interface BracketRoster {
		rosterId: number
		name: string
		shortName: string
		logo: number
		logoColor: number
	}
	
	export interface BuildInfo {
		branch: string
		patchline: string
		version: string
		patchlineVisibleName: string
	}
	
	export type CapacityEnum = "FULL" | "HIGH" | "MEDIUM" | "LOW"
	
	export interface ChampSelectLcdsGameDTO {
		id: number
		gameState: string
		queueTypeName: string
		roomName: string
		roomPassword: string
		mucJwtDto: LCUTypes.MucJwtDto
		name: string
		playerChampionSelections: LCUTypes.ChampSelectLcdsPlayerChampionSelectionDTO[]
		bannedChampions: LCUTypes.BannedChampion[]
		teamOne: unknown[]
		teamTwo: unknown[]
		statusOfParticipants: string
		optimisticLock: number
		pickTurn: number
		spectatorDelay: number
		gameMutators: string[]
	}
	
	export interface ChampSelectLcdsGameTimerDTO {
		currentGameState: string
		remainingTimeInMillis: number
	}
	
	export interface ChampSelectLcdsObfuscatedParticipant {
		gameUniqueId: number
	}
	
	export interface ChampSelectLcdsPlayerChampionSelectionDTO {
		summonerInternalName: string
		championId: number
		selectedSkinIndex: number
		spell1Id: number
		spell2Id: number
	}
	
	export interface ChampSelectLcdsPlayerParticipant {
		summonerName: string
		summonerInternalName: string
		summonerId: number
		pickMode: number
		pickTurn: number
	}
	
	export interface ChampSelectLcdsPointSummary {
		pointsToNextRoll: number
		currentPoints: number
		numberOfRolls: number
		maxRolls: number
		pointsCostToRoll: number
	}
	
	export interface ChampSelectLcdsPotentialTradersDTO {
		potentialTraders: string[]
	}
	
	export interface ChampSelectLcdsRollResult {
		championId: number
		pointSummary: LCUTypes.ChampSelectLcdsPointSummary
	}
	
	export interface ChampSelectLcdsTradeContractDTO {
		requesterInternalSummonerName: string
		responderInternalSummonerName: string
		requesterChampionId: number
		responderChampionId: number
		state: string
	}
	
	export interface ChampionMasteryPublicDTO {
		championId: number
		championLevel: number
		championPoints: number
	}
	
	export interface ChampionScoutingDTO {
		championId: number
		winCount: number
		gameCount: number
		kda: number
	}
	
	export interface ClashEventData {
		earnedDate: string
		rewardType: string
		tournamentId: number
		tournamentName: string
		tier: string
		bracket: number
		seasonId: number
		theme: string
		rosterId: number
		teamName: string
		teamShortName: string
		teamLogoName: string
		teamLogoChromaId: string
		playerUUIDs: string[]
		rewardSpec: LCUTypes.ClashRewardSpec
	}
	
	export interface ClashOfflineNotification {
		tournamentId: number
		reason: string
		metaData: Record<string, string>
	}
	
	export interface ClashRewardConfigClient {
		name: string
		keyDef: LCUTypes.ClashRewardKeyType[]
		entries: LCUTypes.ClashRewardConfigEntry[]
	}
	
	export interface ClashRewardConfigEntry {
		key: string
		vals: LCUTypes.ClashRewardOutput[]
	}
	
	export interface ClashRewardDefinition {
		rewardType: LCUTypes.ClashRewardType
		rewardSpec: LCUTypes.ClashRewardSpec
	}
	
	export type ClashRewardKeyType = "TOC_STATE" | "SEASON_FLAG_COUNT" | "SEASON_VP" | "THEME_VP" | "POINTS" | "WINS" | "TOURNAMENT_WIN_POS" | "LOWEST_POSITION" | "TICKET_TYPE" | "TICKET_COUNT" | "CUP" | "TIER"
	
	export interface ClashRewardOutput {
		primary: LCUTypes.ClashRewardDefinition
		alternative: LCUTypes.ClashRewardDefinition
		grant: LCUTypes.ClashRewardTime
		show: LCUTypes.ClashRewardTime
	}
	
	export interface ClashRewardSpec {
		pedestal: string
		cup: string
		gem: string
		tier: string
		bracket: string
		theme: string
		level: string
		seasonId: string
		name: string
		quantity: string
	}
	
	export type ClashRewardTime = "EOT" | "EOB" | "EOG" | "NONE"
	
	export type ClashRewardType = "TOC" | "VP" | "LOOT" | "LOGO" | "FRAME" | "FLAG" | "TROPHY"
	
	export interface ClashSeasonRewardResult {
		playerId: number
		seasonId: number
		seasonVp: number
		banned: boolean
		honorLevel: number
		eligible: boolean
		rewards: LCUTypes.ClashRewardDefinition[]
	}
	
	export type ClientBracketMatchStatus = "COMPLETED" | "STARTED" | "UPCOMING"
	
	export interface ClientConfigAuthenticatedConnection {
		connectionId: number
		subscribed: boolean
		authToken: string
	}
	
	export interface ClientConfigBuildInfo {
		contentBuildId: number
		codeBuildId: number
		gameDataBuildId: number
		branch: string
		branchFull: string
		gameBranch: string
		gameBranchFull: string
		patchline: string
		version: string
		patchlineVisibleName: string
	}
	
	export interface ClientConfigClientConfig {
		params: LCUTypes.ClientConfigConfigParams
		data: Record<string, unknown>
		updateTime: number
	}
	
	export interface ClientConfigConfigNamespaceUpdate {
		public: string[]
		player: string[]
	}
	
	export interface ClientConfigConfigParams {
		type: LCUTypes.ClientConfigConfigType
		appName: string
		version: string
		patchline: string
		region: string
		namespace: string
	}
	
	export type ClientConfigConfigReadinessEnum = "Disabled" | "Ready" | "NotReady"
	
	export interface ClientConfigConfigStatus {
		readiness: LCUTypes.ClientConfigConfigReadinessEnum
		updateId: number
	}
	
	export type ClientConfigConfigType = "player" | "public"
	
	export interface ClientConfigDataPaths {
		userDataRoot: string
		configRoot: string
		dataRoot: string
		localSettingsPath: string
		privateSettingsPath: string
	}
	
	export interface ClientConfigDepInjectorEntitlements {
		accessToken: string
		token: string
		subject: string
		issuer: string
		entitlements: string[]
	}
	
	export interface ClientConfigDepInjectorEntitlementsUpdate {
		EntitlementsUpdateType: LCUTypes.ClientConfigDepInjectorEntitlementsUpdateType
		EntitlementsTokenResource: LCUTypes.ClientConfigDepInjectorEntitlements
	}
	
	export type ClientConfigDepInjectorEntitlementsUpdateType = "Delete" | "Update" | "Create"
	
	export interface ClientConfigEntitlements {
		accessToken: string
		token: string
		subject: string
		issuer: string
		entitlements: string[]
	}
	
	export interface ClientConfigEntitlementsUpdate {
		UpdateType: LCUTypes.ClientConfigUpdateType
		EntitlementsTokenResource: LCUTypes.ClientConfigEntitlements
	}
	
	export interface ClientConfigSession {
		productId: string
		patchlineId: string
		version: string
		isInternal: boolean
		connections: LCUTypes.ClientConfigAuthenticatedConnection[]
	}
	
	export type ClientConfigUpdateType = "Delete" | "Update" | "Create"
	
	export interface ClientDynamicConfig {
		configs: string
		delta: boolean
		compressed: boolean
	}
	
	export type ClientRequestError = "WITHDRAW_LOCKOUT" | "WITHDRAW_CANCEL_NOT_ALLOWED" | "WITHDRAW_NOT_ALLOWED" | "VOICE_NOT_AVAILABLE" | "TICKET_NOT_SET" | "TICKET_OFFER_INVALID_COUNT" | "TICKET_OFFER_NOT_EXIST" | "TICKET_ALREADY_SET" | "SMS_NOT_VERIFIED" | "SUMMONER_LEVEL_REQUIREMENT_NOT_MET" | "SUGGEST_INVITEE_NOT_EXIST" | "ROSTER_DISBAND_NOT_ALLOWED" | "ROSTER_ELIMINATED" | "PHASE_FULL" | "PHASE_CANCELLED" | "PENDING_ROSTER_CLOSE" | "PENDING_ROSTER_FULL" | "PENDING_ROSTER_NOT_READY" | "OVER_INVITE" | "OVER_SUGGESTION_INVITE" | "NO_MORE_RECOMMEND" | "NO_PERMISSION" | "NOT_ALLOWED_DELETE_TOURNAMENT_REWARD_CONFIG" | "NOT_ALLOWED_DELETE_TOURNAMENT" | "NOT_ENOUGH_TICKETS" | "NOT_SEED_INTO_LEAGUE" | "NOT_INVITEE" | "NOT_MEMBER" | "NOT_CAPTAIN" | "NO_AVAILABLE_PHASE" | "NO_SAME_PLAYER" | "MAX_ROSTER_FETCHSIZE" | "MAX_INVITED" | "INVALID_SEASON" | "INVALID_REWARD_CONFIG_NAME" | "INVALID_MATCHSTATUS_FORGAMEEND" | "INVALID_WITHDRAW" | "INVALID_Tier" | "INVALID_PLAYER" | "INVALID_MATCHID" | "INVALID_BRACKET" | "INVALID_CHECKELIGIBILITY_SIZE" | "INVALID_SHORTNAME" | "INVALID_NAME" | "INVALID_LOGOCOLOR" | "INVALID_LOGO" | "INVALID_POSITION" | "INVALID_ROSTER_MEMBER_SIZE" | "INVALID_INVITEE" | "INVALID_PHASE" | "INVALID_TOURNAMENT" | "INVALID_BUY_BACK" | "INVALID_ROSTER" | "INTERNAL_ERROR" | "INACTIVE_PHASE" | "INACTIVE_REGISTRATION" | "IN_OTHER_PHASE_OF_PERIOD" | "IN_OTHER_PENDINGROSTER" | "IN_OTHER_ROSTER" | "LOGOCOLOR_NOT_ALLOWED" | "LOGO_NOT_ALLOWED" | "HONOR_INELIGIBILITY" | "FAIL_SUGGESTINVITE" | "FAIL_INVITE" | "ELIGIBILITY_SERVER_ERROR" | "CLASH_BANNED_INVITEE" | "CLASH_BANNED" | "CAPTAIN_NOT_ALLOWED" | "ALREADY_IN_PHASE" | "ALREADY_VOTE_WITHDRAW" | "ALREADY_DECLINED" | "ALREADY_DECLINE_WITHDRAW" | "ALREADY_SUGGESTED" | "ALREADY_INVITED" | "ALREADY_MEMBER" | "ALREADY_IN_GAME"
	
	export interface CollectionsLcdsChampionDTO {
		endDate: number
		purchaseDate: number
		winCountRemaining: number
		sources: string[]
		active: boolean
		botEnabled: boolean
		championId: number
		championSkins: LCUTypes.CollectionsLcdsChampionSkinDTO[]
		freeToPlay: boolean
		freeToPlayReward: boolean
		f2pRewardSources: string[]
		owned: boolean
		purchased: number
		rankedPlayEnabled: boolean
	}
	
	export interface CollectionsLcdsChampionSkinDTO {
		endDate: number
		purchaseDate: number
		winCountRemaining: number
		sources: string[]
		championId: number
		freeToPlayReward: boolean
		f2pRewardSources: string[]
		lastSelected: boolean
		owned: boolean
		skinId: number
		stillObtainable: boolean
	}
	
	export interface CollectionsLcdsClientDynamicConfigurationNotification {
		configs: string
		delta: boolean
	}
	
	export interface CollectionsLcdsRentalUpdateNotification {
		inventoryType: string
		data: unknown
	}
	
	export interface CollectionsLcdsStoreFulfillmentNotification {
		inventoryType: string
		data: unknown
	}
	
	export interface ContentItemIdentifier {
		itemId: number
		inventoryType: string
	}
	
	export interface CraftLootDTO {
		recipeName: string
		lootNames: string[]
		repeat: number
	}
	
	export interface CraftLootRefTransactionDTO {
		clientId: string
		transactionId: string
		recipeName: string
		lootNameRefIds: LCUTypes.LootNameRefId[]
		repeat: number
	}
	
	export interface CrashReportingEnvironment {
		environment: string
		userName: string
		userId: string
	}
	
	export interface CriticalFlowCapture {
		timestampInUs: number
		expected: boolean
		succeeded: boolean
		idChain: string
		qualifierChain: string
		payloadString: string
	}
	
	export interface CriticalFlowExpectation {
		idChain: string
		qualifierChain: string
	}
	
	export interface CriticalFlowSummary {
		activeFlows: string[]
		activeFlowEvents: LCUTypes.CriticalFlowExpectation[]
		events: LCUTypes.CriticalFlowCapture[]
		errors: string[]
	}
	
	export interface DownloadUrlRequestV2 {
		platformId: string
		gameId: number
	}
	
	export interface DownloadUrlResponseV2 {
		url: string
	}
	
	export type ElevationAction = "FixBrokenPermissions"
	
	export interface ElevationRequest {
		action: LCUTypes.ElevationAction
	}
	
	export interface EndOfGameLcdsClientReportV1 {
		offenderSummonerId: number
		gameId: number
		offenses: string
		comments: string
	}
	
	export interface EndOfGameLcdsEndOfGameStats {
		difficulty: string
		gameId: number
		gameLength: number
		gameMode: string
		gameMutators: string[]
		gameType: string
		invalid: boolean
		queueType: string
		ranked: boolean
		reportGameId: number
		roomName: string
		roomPassword: string
		mucJwtDto: LCUTypes.MucJwtDto
		myTeamInfo: LCUTypes.EndOfGameLcdsTeamInfo
		otherTeamInfo: LCUTypes.EndOfGameLcdsTeamInfo
		teamPlayerParticipantStats: LCUTypes.EndOfGameLcdsPlayerParticipantStatsSummary[]
		otherTeamPlayerParticipantStats: LCUTypes.EndOfGameLcdsPlayerParticipantStatsSummary[]
		myTeamStatus: string
		leveledUp: boolean
		newSpells: LCUTypes.EndOfGameLcdsSpell[]
		previousLevel: number
		rpEarned: number
		skinIndex: number
		skinId: number
		summonerName: string
		userId: number
		basePoints: number
		battleBoostIpEarned: number
		boostIpEarned: number
		firstWinBonus: number
		ipEarned: number
		ipTotal: number
		boostXpEarned: number
		experienceEarned: number
		experienceTotal: number
		loyaltyBoostXpEarned: number
		previousXpTotal: number
		timeUntilNextFirstWinBonus: number
		causedEarlySurrender: boolean
		earlySurrenderAccomplice: boolean
		teamEarlySurrendered: boolean
		gameEndedInEarlySurrender: boolean
	}
	
	export interface EndOfGameLcdsHarassmentReport {
		gameId: number
		reportSource: string
		reportingSummonerId: number
		reportedSummonerId: number
		offense: string
		comment: string
	}
	
	export interface EndOfGameLcdsPlayerParticipantStatsSummary {
		puuid: string
		level: number
		userId: number
		teamId: number
		gameId: number
		leaver: boolean
		summonerName: string
		skinName: string
		profileIconId: number
		wins: number
		leaves: number
		losses: number
		botPlayer: boolean
		spell1Id: number
		spell2Id: number
		championId: number
		skinIndex: number
		selectedPosition: string
		detectedTeamPosition: string
		statistics: LCUTypes.EndOfGameLcdsRawStatDTO[]
	}
	
	export interface EndOfGameLcdsPointsPenalty {
		type: string
		penalty: number
	}
	
	export interface EndOfGameLcdsRawStatDTO {
		value: number
		statTypeName: string
	}
	
	export interface EndOfGameLcdsSpell {
		spellId: number
	}
	
	export interface EndOfGameLcdsTeamId {
		fullId: string
	}
	
	export interface EndOfGameLcdsTeamInfo {
		teamId: LCUTypes.EndOfGameLcdsTeamId
		name: string
		tag: string
		secondsUntilEligibleForDeletion: number
		memberStatusString: string
	}
	
	export interface EntitlementsToken {
		accessToken: string
		token: string
		subject: string
		issuer: string
		entitlements: string[]
	}
	
	export interface EogLcdsGameDTO {
		id: number
		gameState: string
		teamOne: LCUTypes.PlayerParticipant[]
		teamTwo: LCUTypes.PlayerParticipant[]
		bannedChampions: LCUTypes.BannedChampion[]
	}
	
	export type ExternalPluginsAvailability = "Error" | "Recovering" | "Connected" | "Preparing" | "NotAvailable"
	
	export interface ExternalPluginsResource {
		state: LCUTypes.ExternalPluginsAvailability
		errorString: string
	}
	
	export interface FailedInvite {
		playerId: number
		exception: LCUTypes.ClientRequestError
	}
	
	export type GameQueuesLcdsAllowSpectators = "ALL" | "DROPINONLY" | "LOBBYONLY" | "NONE"
	
	export interface GameQueuesLcdsGameQueueConfig {
		disallowFreeChampions: boolean
		gameMode: string
		gameMutators: string[]
		gameTypeConfigId: number
		id: number
		mapId: number
		maximumParticipantListSize: number
		minLevel: number
		minimumParticipantListSize: number
		numPlayersPerTeam: number
		queueState: string
		ranked: boolean
		supportedMapIds: number[]
		type: string
		lastToggledOffTime: number
		lastToggledOnTime: number
		removalFromGameAllowed: boolean
		removalFromGameDelayMinutes: number
	}
	
	export interface GameflowLcdsGameDTO {
		id: number
		mapId: number
		gameState: string
		queueTypeName: string
		gameMode: string
		gameTypeConfigId: number
		maxNumPlayers: number
		gameType: string
		spectatorDelay: number
		gameQueueConfigId: number
		teamOne: unknown[]
		teamTwo: unknown[]
		playerChampionSelections: unknown[]
	}
	
	export interface GameflowLcdsPlayerCredentialsDto {
		gameId: number
		serverIp: string
		serverPort: number
		encryptionKey: string
		observer: boolean
		observerServerIp: string
		observerServerPort: number
		observerEncryptionKey: string
		summonerId: number
	}
	
	export interface GameflowLcdsReconnectInfoDto {
		playerCredentials: LCUTypes.GameflowLcdsPlayerCredentialsDto
		game: LCUTypes.GameflowLcdsGameDTO
		reconnectDelay: number
	}
	
	export interface IdsDTO {
		missionIds: string[]
		seriesIds: string[]
	}
	
	export type InviteType = "NONE" | "SELFJOIN" | "SUGGEST" | "FRIEND" | "FREEAGENT"
	
	export interface LCDSBroadcastNotification {
		broadcastMessages: LCUTypes.LolServiceStatusBroadcastMessage[]
	}
	
	export interface LCDSChampionReward {
		championId: number
		skins: number[]
	}
	
	export interface LCDSGlobalRewards {
		allChampions: boolean
	}
	
	export interface LCDSLoyaltyRewards {
		champions: LCUTypes.LCDSChampionReward[]
		global: LCUTypes.LCDSGlobalRewards
		ipBoost: number
		xpBoost: number
	}
	
	export interface LCDSLoyaltyStateChangeNotification {
		accountId: number
		notificationCategory: LCUTypes.LCDSLoyaltyStateChangeNotificationCategory
		rewards: LCUTypes.LCDSLoyaltyRewards
	}
	
	export type LCDSLoyaltyStateChangeNotificationCategory = "disabled" | "revoke" | "change" | "expiry" | "grant" | "legacy"
	
	export interface LCDSPlayerMessagingSimpleMessage {
		accountId: number
		msgId: string
		type: string
		titleCode: string
		bodyCode: string
		params: string[]
	}
	
	export interface LCDSPlayerMessagingSimpleMessageResponse {
		accountId: number
		msgId: string
		command: string
	}
	
	export interface LcdsAcceptGameInvitationRequestDto {
		invitationId: string
		gameVersion: string
		champSelectInventoryJwt: string
		playerGcoTokens: LCUTypes.LcdsPlayerGcoTokens
	}
	
	export interface LcdsBotParticipant {
		summonerId: number
		summonerName: string
		summonerInternalName: string
		botSkillLevel: number
		teamId: string
	}
	
	export interface LcdsCreatePracticeGameRequestDto {
		practiceGameConfig: LCUTypes.LcdsPracticeGameConfig
		simpleInventoryJwt: string
		playerGcoTokens: LCUTypes.LcdsPlayerGcoTokens
	}
	
	export interface LcdsFailedJoinPlayer {
		summoner: LCUTypes.LcdsSummoner
		reasonFailed: string
	}
	
	export interface LcdsGameDTO {
		id: number
		name: string
		mapId: number
		gameTypeConfigId: number
		gameType: string
		gameMode: string
		maxNumPlayers: number
		spectatorsAllowed: string
		ownerSummary: LCUTypes.LcdsPlayerParticipant
		teamOne: LCUTypes.LcdsPlayerParticipant[]
		teamTwo: LCUTypes.LcdsPlayerParticipant[]
		observers: LCUTypes.LcdsPlayerParticipant[]
		practiceGameRewardsDisabledReasons: string[]
		gameMutators: string[]
		roomName: string
		roomPassword: string
		mucJwtDto: LCUTypes.MucJwtDto
		passbackUrl: string
		passbackDataPacket: string
		optimisticLock: number
		gameState: string
	}
	
	export interface LcdsGameInviteBaseRuntimeException {
		rootCauseClassname: string
	}
	
	export interface LcdsGameMap {
		mapId: number
		name: string
		displayName: string
		description: string
		minCustomPlayers: number
		totalPlayers: number
	}
	
	export interface LcdsGameNotification {
		type: string
		messageCode: string
		messageArgument: string
	}
	
	export interface LcdsInvitationRequest {
		invitationId: string
		owner: LCUTypes.LcdsPlayer
		inviter: LCUTypes.LcdsInviter
		invitationState: LCUTypes.LcdsInvitationState
		gameMetaData: string
		inviteType: string
		invitePayload: string
	}
	
	export type LcdsInvitationState = "REVOKED" | "ON_HOLD" | "ACTIVE"
	
	export interface LcdsInviteFailed {
		summonerId: number
		summonerName: string
		exception: LCUTypes.LcdsGameInviteBaseRuntimeException
	}
	
	export interface LcdsInvitePrivileges {
		canInvite: boolean
	}
	
	export interface LcdsInvitee {
		summonerId: number
		summonerName: string
		inviteeState: LCUTypes.LcdsInviteeState
	}
	
	export type LcdsInviteeState = "BANNED" | "KICKED" | "QUIT" | "JOINED" | "ACCEPT_FAILED" | "ACCEPTED" | "DECLINED" | "PENDING" | "CREATOR"
	
	export interface LcdsInviter {
		summonerId: number
		summonerName: string
		previousSeasonHighestTier: string
	}
	
	export interface LcdsJoinGameRequestDto {
		gameId: number
		password?: string
		gameVersion: string
		simpleInventoryJwt: string
		playerGcoTokens: LCUTypes.LcdsPlayerGcoTokens
	}
	
	export interface LcdsJoinOrCreatePracticeGameRequestDto {
		practiceGameConfig: LCUTypes.LcdsPracticeGameConfig
		simpleInventoryJwt: string
		playerGcoTokens: LCUTypes.LcdsPlayerGcoTokens
	}
	
	export interface LcdsLobbyStatus {
		invitationId: string
		owner: LCUTypes.LcdsPlayer
		chatKey: string
		members: LCUTypes.LcdsMember[]
		invitees: LCUTypes.LcdsInvitee[]
		gameMetaData: string
	}
	
	export interface LcdsMember {
		summonerId: number
		summonerName: string
		hasDelegatedInvitePower: boolean
	}
	
	export interface LcdsObserveGameRequestDto {
		gameId: number
		password?: string
		gameVersion: string
		champSelectInventoryJwt: string
		playerGcoTokens: LCUTypes.LcdsPlayerGcoTokens
	}
	
	export interface LcdsPayloadDto {
		method: string
		headers: Record<string, string>
		path: string
		body: string
	}
	
	export interface LcdsPlayer {
		summonerId: number
		summonerName: string
	}
	
	export interface LcdsPlayerGcoTokens {
		idToken: string
		summonerToken: string
		userInfoJwt: string
	}
	
	export interface LcdsPlayerParticipant {
		summonerId: number
		summonerName: string
		summonerInternalName: string
		botSkillLevel: number
	}
	
	export interface LcdsPracticeGameConfig {
		gameName: string
		gameMode: string
		gameMap: LCUTypes.LcdsGameMap
		maxNumPlayers: number
		gameTypeConfig: number
		gamePassword: string
		allowSpectators: string
		passbackUrl?: string
		passbackDataPacket?: string
		gameMutators: string[]
		region: string
		gameVersion: string
	}
	
	export interface LcdsPracticeGameSearchResult {
		id: number
		name: string
		owner: LCUTypes.LcdsPlayerParticipant
		maxNumPlayers: number
		privateGame: boolean
		team1Count: number
		team2Count: number
		spectatorCount: number
		gameMap: LCUTypes.LcdsGameMap
		gameMapId: number
		gameMode: string
		pickType: string
		allowSpectators: string
	}
	
	export type LcdsRemovalReason = "PROGRESSED" | "DESTROYED" | "KICKED"
	
	export interface LcdsRemovedFromLobbyNotification {
		removalReason: LCUTypes.LcdsRemovalReason
	}
	
	export interface LcdsSimpleMessage {
		accountId: number
		msgId: string
		type: string
		params: string[]
	}
	
	export interface LcdsSimpleMessageResponse {
		accountId: number
		msgId: string
		command: string
	}
	
	export interface LcdsStartChampSelectDto {
		invalidPlayers: LCUTypes.LcdsFailedJoinPlayer[]
	}
	
	export interface LcdsSummoner {
		sumId: number
		name: string
	}
	
	export interface LcdsSwitchObserverToPlayerRequestDto {
		gameId: number
		teamId: number
		playerGcoTokens: LCUTypes.LcdsPlayerGcoTokens
	}
	
	export interface LcdsSwitchPlayerToObserverRequestDto {
		gameId: number
		playerGcoTokens: LCUTypes.LcdsPlayerGcoTokens
	}
	
	export interface LcdsSwitchTeamsRequestDto {
		gameId: number
		playerGcoTokens: LCUTypes.LcdsPlayerGcoTokens
	}
	
	export interface LobbyClientDynamicConfigurationNotification {
		configs: string
		delta: boolean
	}
	
	export interface LogEvent {
		severity: LCUTypes.LogSeverityLevels
		message: string
	}
	
	export type LogSeverityLevels = "Always" | "Error" | "Warning" | "Okay"
	
	export interface LolAccountVerificationAVSConfig {
		Enabled: boolean
		DisableGetActivePhoneNumberCall: boolean
	}
	
	export interface LolAccountVerificationConfirmActivationPinRequest {
		oneTimePin: string
	}
	
	export interface LolAccountVerificationConfirmActivationPinResponse {
		data: LCUTypes.LolAccountVerificationPinResponseData
		clientMessageId: string
	}
	
	export interface LolAccountVerificationConfirmDeactivationPinRequest {
		oneTimePin: string
	}
	
	export interface LolAccountVerificationConfirmDeactivationPinResponse {
		data: LCUTypes.LolAccountVerificationPinResponseData
		clientMessageId: string
	}
	
	export interface LolAccountVerificationIsVerifiedResponse {
		success: boolean
		message: string
		status: number
	}
	
	export interface LolAccountVerificationLoginSession {
		state: LCUTypes.LolAccountVerificationLoginSessionState
		summonerId: number
		accountId: number
		username: string
	}
	
	export type LolAccountVerificationLoginSessionState = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"
	
	export interface LolAccountVerificationPhoneNumberObfuscated {
		countryCode: string
		endsWith: string
		length: number
	}
	
	export interface LolAccountVerificationPhoneNumberResponse {
		data: LCUTypes.LolAccountVerificationPhoneNumberResponseData
		error: LCUTypes.LolAccountVerificationResponseError
		clientMessageId: string
	}
	
	export interface LolAccountVerificationPhoneNumberResponseData {
		phoneNumberObfuscated: LCUTypes.LolAccountVerificationPhoneNumberObfuscated
	}
	
	export interface LolAccountVerificationPinResponseData {
		status: string
	}
	
	export interface LolAccountVerificationResponseError {
		errorCode: string
		message: string
	}
	
	export interface LolAccountVerificationSendActivationPinRequest {
		phoneNumber: string
		locale: string
	}
	
	export interface LolAccountVerificationSendActivationPinResponse {
		data: LCUTypes.LolAccountVerificationSendActivationPinResponseData
		error: LCUTypes.LolAccountVerificationResponseError
		clientMessageId: string
	}
	
	export interface LolAccountVerificationSendActivationPinResponseData {
		pinExpiresAtEpochMillis: number
	}
	
	export interface LolAccountVerificationSendDeactivationPinRequest {
		locale: string
	}
	
	export interface LolAccountVerificationSendDeactivationPinResponse {
		data: LCUTypes.LolAccountVerificationSendActivationPinResponseData
		error: LCUTypes.LolAccountVerificationResponseError
		clientMessageId: string
	}
	
	export interface LolActiveBoostsActiveBoosts {
		xpBoostEndDate: string
		xpBoostPerWinCount: number
		xpLoyaltyBoost: number
		firstWinOfTheDayStartTime: string
	}
	
	export interface LolActiveBoostsEndOfGameStats {
		timeUntilNextFirstWinBonus: number
	}
	
	export interface LolActiveBoostsInventoryItem {
		uuid: string
		itemId: number
		inventoryType: string
		purchaseDate: string
		quantity: number
		ownershipType: LCUTypes.LolActiveBoostsItemOwnershipType
		expirationDate: string
		wins: number
	}
	
	export interface LolActiveBoostsInventoryItemDTO {
		itemId: number
		inventoryType: string
		expirationDate: string
		purchaseDate: string
		quantity: number
		ownedQuantity: number
		usedInGameDate: string
		entitlementId: string
		entitlementTypeId: string
		instanceId: string
		instanceTypeId: string
		payload: unknown
		f2p: boolean
		rental: boolean
		loyalty: boolean
		loyaltySources: string[]
		lsb: boolean
		wins: number
	}
	
	export interface LolActiveBoostsInventoryItemWithPayload {
		uuid: string
		itemId: number
		inventoryType: string
		purchaseDate: string
		quantity: number
		ownershipType: LCUTypes.LolActiveBoostsItemOwnershipType
		expirationDate: string
		f2p: boolean
		rental: boolean
		loyalty: boolean
		loyaltySources: string[]
		owned: boolean
		wins: number
		payload: unknown
	}
	
	export type LolActiveBoostsItemOwnershipType = "F2P" | "LOYALTY" | "RENTED" | "OWNED"
	
	export interface LolActiveBoostsLoginDataPacket {
		timeUntilFirstWinOfDay: number
	}
	
	export interface LolActiveBoostsLoyaltyRewardsSimplified {
		xpBoost: number
	}
	
	export type LolActiveBoostsLoyaltyStatus = "DISABLED" | "REVOKE" | "CHANGE" | "EXPIRY" | "REWARDS_GRANT" | "LEGACY"
	
	export interface LolActiveBoostsLoyaltyStatusNotification {
		status: LCUTypes.LolActiveBoostsLoyaltyStatus
		rewards: LCUTypes.LolActiveBoostsLoyaltyRewardsSimplified
	}
	
	export interface LolAntiAddictionAntiAddictionState {
		policyType: LCUTypes.LolAntiAddictionPolicyType
		localizationKey: string
		antiAddictionToken: string
	}
	
	export interface LolAntiAddictionAntiAddictionToken {
		antiAddictionToken: string
	}
	
	export type LolAntiAddictionPolicyType = "antiAddictionHeartbeat" | "antiAddictionShutdown" | "antiAddictionWarning"
	
	export interface LolBannersBannerFlag {
		itemId: number
		theme: string
		level: number
		seasonId: number
		earnedDateIso8601: string
	}
	
	export interface LolBannersBannerFrame {
		level: number
	}
	
	export interface LolBannersCapClashFlagEntitlementPayload {
		rewardSpec: LCUTypes.LolBannersClashV2FlagRewardSpec
		rewardType: string
	}
	
	export interface LolBannersCapClashFrameEntitlementPayload {
		rewardSpec: LCUTypes.LolBannersClashV2FrameRewardSpec
		rewardType: string
	}
	
	export interface LolBannersClashV2FlagRewardSpec {
		theme: string
		level: string
		seasonId: string
	}
	
	export interface LolBannersClashV2FrameRewardSpec {
		level: string
		seasonId: string
	}
	
	export interface LolBannersInventoryItemWithPayload {
		uuid: string
		itemId: number
		inventoryType: string
		purchaseDate: string
		payload: unknown
	}
	
	export interface LolBannersInventoryItemsByType {
		TOURNAMENT_FLAG: LCUTypes.LolBannersTournamentFlagInventoryItem[]
		TOURNAMENT_FRAME: LCUTypes.LolBannersTournamentFrameInventoryItem[]
	}
	
	export interface LolBannersInventoryResponse {
		items: LCUTypes.LolBannersInventoryItemsByType
	}
	
	export interface LolBannersLoadout {
		id: string
		name: string
		scope: string
		loadout: Record<string, LCUTypes.LolBannersLoadoutsSlot>
	}
	
	export interface LolBannersLoadoutsSlot {
		itemId: number
		inventoryType: string
	}
	
	export interface LolBannersSummonerProfileUpdate {
		key: string
		value: unknown
	}
	
	export interface LolBannersTournamentFlagInventoryItem {
		itemId: number
		payload: LCUTypes.LolBannersCapClashFlagEntitlementPayload
		purchaseDate: string
	}
	
	export interface LolBannersTournamentFrameInventoryItem {
		payload: LCUTypes.LolBannersCapClashFrameEntitlementPayload
		purchaseDate: string
	}
	
	export type LolCareerStatsCareerStatsQueueType = "other" | "rank3flex" | "blind3" | "aram" | "blind5" | "rank5solo" | "rank5flex" | "draft5"
	
	export interface LolCareerStatsChampionQueueStatsResponse {
		championId: number
		queueType: LCUTypes.LolCareerStatsCareerStatsQueueType
		position: LCUTypes.LolCareerStatsSummonersRiftPosition
		rankTier: string
		stats: unknown
	}
	
	export interface LolCareerStatsChampionStatistics {
		championId: number
		experts: LCUTypes.LolCareerStatsExpertPlayer[]
		queueStats: LCUTypes.LolCareerStatsStatisticsByQueue[]
	}
	
	export interface LolCareerStatsEntitlementsToken {
		entitlements: string[]
	}
	
	export interface LolCareerStatsExpertPlayer {
		championId: number
		position: LCUTypes.LolCareerStatsSummonersRiftPosition
		summonerId: number
		summonerName: string
		numOfGames: number
		winRate: number
		expertRank: number
	}
	
	export interface LolCareerStatsPositionStatistics {
		position: LCUTypes.LolCareerStatsSummonersRiftPosition
		experts: LCUTypes.LolCareerStatsExpertPlayer[]
		queueStats: LCUTypes.LolCareerStatsStatisticsByQueue[]
	}
	
	export interface LolCareerStatsPositionStatsQueryRequest {
		queueType: LCUTypes.LolCareerStatsCareerStatsQueueType
		position: LCUTypes.LolCareerStatsSummonersRiftPosition
		rankTier: string
		season: number
	}
	
	export interface LolCareerStatsStatisticsByQueue {
		queueType: LCUTypes.LolCareerStatsCareerStatsQueueType
		stats: unknown
	}
	
	export interface LolCareerStatsStatisticsPercentilesResponse {
		championId: number
		queueType: LCUTypes.LolCareerStatsCareerStatsQueueType
		position: LCUTypes.LolCareerStatsSummonersRiftPosition
		rankTier: string
		season: number
		stats: unknown
	}
	
	export interface LolCareerStatsStatsQueryRequest {
		championId: number
		queueType: LCUTypes.LolCareerStatsCareerStatsQueueType
		position: LCUTypes.LolCareerStatsSummonersRiftPosition
		rankTier: string
		season: number
	}
	
	export type LolCareerStatsSummonersRiftPosition = "SUPPORT" | "BOTTOM" | "MID" | "JUNGLE" | "TOP" | "UNKNOWN" | "ALL"
	
	export interface LolCatalogBundled {
		flexible: boolean
		items: LCUTypes.LolCatalogBundledItem[]
		minimumPrices: LCUTypes.LolCatalogBundledItemCost[]
	}
	
	export interface LolCatalogBundledItem {
		inventoryType: string
		itemId: number
		quantity: number
		discountPrices: LCUTypes.LolCatalogBundledItemCost[]
	}
	
	export interface LolCatalogBundledItemCost {
		currency: string
		cost: number
		discount?: number
		costType: string
	}
	
	export interface LolCatalogCatalogItem {
		itemId: number
		itemInstanceId: string
		active: boolean
		inventoryType: string
		inactiveDate: string
		prices: LCUTypes.LolCatalogItemCost[]
		releaseDate: string
		sale?: LCUTypes.LolCatalogSale
		subInventoryType?: string
		tags?: string[]
		iconUrl: string
		localizations: Record<string, LCUTypes.LolCatalogItemLocalization>
		bundled?: LCUTypes.LolCatalogBundled
		itemRequirements?: LCUTypes.LolCatalogItemKey[]
		metadata?: LCUTypes.LolCatalogItemMetadataEntry[]
		offerId?: string
	}
	
	export interface LolCatalogCatalogPluginItem {
		itemId: number
		itemInstanceId: string
		owned: boolean
		ownershipType?: LCUTypes.LolCatalogInventoryOwnership
		inventoryType: string
		subInventoryType: string
		name: string
		subTitle: string
		description: string
		imagePath: string
		purchaseDate: number
		releaseDate: number
		inactiveDate: number
		prices: LCUTypes.LolCatalogCatalogPluginPrice[]
		tags?: string[]
		metadata?: LCUTypes.LolCatalogItemMetadataEntry[]
		active: boolean
		sale?: LCUTypes.LolCatalogSale
		questSkinInfo?: LCUTypes.LolCatalogSkinLineInfo
		offerId?: string
	}
	
	export interface LolCatalogCatalogPluginItemAssets {
		splashPath: string
		iconPath: string
		tilePath: string
		emblems: LCUTypes.LolCatalogChampionSkinEmblem[]
		colors: string[]
	}
	
	export interface LolCatalogCatalogPluginItemWithDetails {
		item: LCUTypes.LolCatalogCatalogPluginItem
		quantity: number
		requiredItems?: LCUTypes.LolCatalogCatalogPluginItemWithDetails[]
		bundledItems?: LCUTypes.LolCatalogCatalogPluginItemWithDetails[]
		minimumBundlePrices?: LCUTypes.LolCatalogCatalogPluginPrice[]
		bundledDiscountPrices?: LCUTypes.LolCatalogCatalogPluginPrice[]
		assets: LCUTypes.LolCatalogCatalogPluginItemAssets
		metadata: LCUTypes.LolCatalogItemMetadataEntry[]
	}
	
	export interface LolCatalogCatalogPluginPrice {
		currency: string
		cost: number
		costType?: string
		sale?: LCUTypes.LolCatalogCatalogPluginRetailDiscount
	}
	
	export interface LolCatalogCatalogPluginRetailDiscount {
		startDate: string
		endDate: string
		discount?: number
		cost: number
	}
	
	export interface LolCatalogChampionSkinEmblem {
		name: string
		emblemPath: LCUTypes.LolCatalogChampionSkinEmblemPath
		emblemPosition: LCUTypes.LolCatalogChampionSkinEmblemPosition
	}
	
	export interface LolCatalogChampionSkinEmblemPath {
		large: string
		small: string
	}
	
	export interface LolCatalogChampionSkinEmblemPosition {
		vertical: string
		horizontal: string
	}
	
	export interface LolCatalogGameDataChampion {
		skins: LCUTypes.LolCatalogGameDataChampionSkin[]
	}
	
	export interface LolCatalogGameDataChampionChroma {
		id: number
		name: string
		chromaPath: string
		colors: string[]
	}
	
	export interface LolCatalogGameDataChampionSkin {
		id: number
		name: string
		splashPath: string
		chromas: LCUTypes.LolCatalogGameDataChampionChroma[]
		emblems: LCUTypes.LolCatalogChampionSkinEmblem[]
		uncenteredSplashPath: string
		tilePath: string
		chromaPath: string
		questSkinInfo?: LCUTypes.LolCatalogSkinLineInfo
		colors: string[]
	}
	
	export interface LolCatalogGameDataChampionSummary {
		id: number
		name: string
		squarePortraitPath: string
		skins: LCUTypes.LolCatalogGameDataChampionSkin[]
	}
	
	export interface LolCatalogGameDataItemReference {
		itemId: number
		inventoryType: string
		contentId: string
	}
	
	export interface LolCatalogGameDataSkinBorder {
		itemId: number
		image: string
	}
	
	export interface LolCatalogGameDataStatstone {
		name: string
		contentId: string
		itemId: number
		isRetired: boolean
		isDuration: boolean
		isEpic: boolean
		category: string
		description: string
		iconFull: string
	}
	
	export interface LolCatalogGameDataStatstonePack {
		name: string
		description: string
		itemId: number
		contentId: string
	}
	
	export interface LolCatalogGameDataStatstoneSet {
		name: string
		statstones: LCUTypes.LolCatalogGameDataStatstone[]
	}
	
	export interface LolCatalogGameDataStatstonesInfo {
		statstoneData: LCUTypes.LolCatalogGameDataStatstoneSet[]
		packData: LCUTypes.LolCatalogGameDataStatstonePack[]
		packIdToStatStonesIds: unknown
		seriesIdToStatStoneIds: unknown
		packIdToSubPackIds: unknown
		collectionIdToStatStoneIds: unknown
		packIdToChampIds: unknown
		champIdToPackIds: unknown
	}
	
	export interface LolCatalogGameDataSummonerEmote {
		id: number
		name: string
		inventoryIcon: string
		description: string
	}
	
	export interface LolCatalogGameDataSummonerIcon {
		id: number
		title: string
		imagePath: string
	}
	
	export interface LolCatalogGameDataWardSkin {
		id: number
		name: string
		description: string
		wardImagePath: string
	}
	
	export interface LolCatalogInventoryContent {
		itemId: number
		ownershipType: LCUTypes.LolCatalogInventoryOwnership
		purchaseDate: string
	}
	
	export type LolCatalogInventoryOwnership = "F2P" | "LOYALTY" | "RENTED" | "OWNED"
	
	export interface LolCatalogItemChoiceDetails {
		item: LCUTypes.LolCatalogCatalogPluginItem
		backgroundImage: string
		contents: LCUTypes.LolCatalogItemDetails[]
		discount: string
		fullPrice: number
		displayType: string
		metadata: unknown
	}
	
	export interface LolCatalogItemCost {
		currency: string
		cost: number
		discount?: number
	}
	
	export interface LolCatalogItemDetails {
		title: string
		subTitle: string
		description: string
		iconUrl: string
	}
	
	export interface LolCatalogItemKey {
		inventoryType: string
		itemId: number
	}
	
	export interface LolCatalogItemLocalization {
		language: string
		name: string
		description: string
	}
	
	export interface LolCatalogItemMetadataEntry {
		type: string
		value: string
	}
	
	export interface LolCatalogSale {
		startDate: string
		endDate: string
		prices: LCUTypes.LolCatalogItemCost[]
	}
	
	export interface LolCatalogSkinLineDescriptionInfo {
		title: string
		description: string
		iconPath: string
	}
	
	export interface LolCatalogSkinLineInfo {
		name: string
		descriptionInfo: LCUTypes.LolCatalogSkinLineDescriptionInfo[]
		splashPath: string
		tilePath: string
		collectionCardPath: string
		uncenteredSplashPath: string
		collectionDescription: string
		tiers: LCUTypes.LolCatalogSkinLineTier[]
	}
	
	export interface LolCatalogSkinLineTier {
		id: number
		name: string
		stage: number
		description?: string
		splashPath: string
		uncenteredSplashPath: string
		tilePath: string
		loadScreenPath: string
		shortName: string
		splashVideoPath?: string
		collectionSplashVideoPath?: string
	}
	
	export interface LolChallengesChallengeData {
		id: number
		category: string
		legacy: boolean
		percentile: number
		position: number
		playersInLevel: number
		initValue: number
		previousLevel: string
		previousValue: number
		previousThreshold: number
		newLevels: string[]
		currentLevel: string
		currentValue: number
		currentThreshold: number
		currentLevelAchievedTime: number
		nextLevel: string
		nextThreshold: number
		friendsAtLevels: LCUTypes.LolChallengesFriendLevelsData[]
		idListType: LCUTypes.LolChallengesChallengeRequirementMappingName
		availableIds: number[]
		completedIds: number[]
	}
	
	export interface LolChallengesChallengeLevelData {
		level: string
	}
	
	export interface LolChallengesChallengePlayerData {
		id: string
		puuid: string
		source: LCUTypes.LolChallengesSource
		tags: Record<string, string>
		totalPoints: LCUTypes.LolChallengesChallengePoints
		categoryPoints: Record<string, LCUTypes.LolChallengesChallengePoints>
		playerChallenges: LCUTypes.LolChallengesChallengeData[]
		levelPoints: Record<string, number>
		preferences: LCUTypes.LolChallengesChallengesPlayerPreferences
		apexLaderUpdateTime: number
	}
	
	export interface LolChallengesChallengePoints {
		current: number
		max: number
		level: string
		percentile: number
		position: number
	}
	
	export type LolChallengesChallengeRequirementMappingName = "ITEM" | "CHAMPION_SKIN" | "CHAMPION" | "NONE"
	
	export interface LolChallengesChallengeSeason {
		seasonId: number
		seasonStart: number
		seasonEnd: number
		isActive: boolean
	}
	
	export interface LolChallengesChallengeSignedUpdatePayload {
		tokensByType: Record<string, unknown>
	}
	
	export interface LolChallengesChallengeThreshold {
		value: number
		rewards: LCUTypes.LolChallengesChallengeThresholdReward[]
		rewardGroupId: string
	}
	
	export interface LolChallengesChallengeThresholdReward {
		category: string
		id: string
		quantity: number
	}
	
	export interface LolChallengesChallengesPlayerPreferences {
		bannerAccent: string
		title: string
		challengeIds: number[]
		crestBorder: string
		prestigeCrestBorderLevel: number
		signedJWTPayload: LCUTypes.LolChallengesChallengeSignedUpdatePayload
	}
	
	export interface LolChallengesChallengesRMSNotification {
		ackRequired: boolean
		payload: string
	}
	
	export interface LolChallengesChallengesRMSPayload {
		puuid: string
		id: string
	}
	
	export type LolChallengesClientState = "Enabled" | "DarkDisabled" | "DarkHidden" | "Disabled" | "Hidden"
	
	export interface LolChallengesEndOfGameStats {
		gameId: number
	}
	
	export interface LolChallengesFriendLevelsData {
		level: string
		friends: string[]
	}
	
	export interface LolChallengesFriendResource {
		puuid: string
	}
	
	export interface LolChallengesGameDataChallengeConfig {
		name: string
		description: string
		descriptionShort: string
		iconPath: string
		tags: Record<string, string>
		source: string
		queueIds: number[]
		levelToIconPath: Record<string, string>
		thresholds: Record<string, LCUTypes.LolChallengesChallengeThreshold>
		leaderboard: boolean
		reverseDirection: boolean
		endTimestamp: number
		seasons: number[]
	}
	
	export interface LolChallengesGameDataChallengeTitle {
		name: string
		itemId: number
	}
	
	export interface LolChallengesGameDataChallengesData {
		challenges: Record<string, LCUTypes.LolChallengesGameDataChallengeConfig>
		titles: Record<string, LCUTypes.LolChallengesGameDataChallengeTitle>
	}
	
	export interface LolChallengesGameflowGameData {
		queue: LCUTypes.LolChallengesQueue
	}
	
	export type LolChallengesGameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"
	
	export interface LolChallengesGameflowSession {
		phase: LCUTypes.LolChallengesGameflowPhase
		gameData: LCUTypes.LolChallengesGameflowGameData
	}
	
	export interface LolChallengesInventoryItem {
		itemId: number
		uuid: string
		purchaseDate: string
	}
	
	export interface LolChallengesLcuChallengeNotification {
		id: number
		msgId: string
		level: string
		updateReason: string
		challengeId: number
		categoryChallenges: Record<string, LCUTypes.LolChallengesUIChallenge>
		displayType: LCUTypes.LolChallengesNotificationDisplayType
		challengeName: string
		iconPath: string
	}
	
	export interface LolChallengesLoginPlayerData {
		clientPlayerDataList: LCUTypes.LolChallengesChallengePlayerData[]
		seasons: LCUTypes.LolChallengesChallengeSeason[]
	}
	
	export type LolChallengesNotificationDisplayType = "VIGNETTE" | "TOAST" | "NONE"
	
	export interface LolChallengesQueue {
		id: number
		gameMode: string
	}
	
	export interface LolChallengesSequenceEvent {
		name: string
		priority: number
	}
	
	export type LolChallengesSource = "NONE" | "SUMMONER_SERVICE" | "ETERNALS" | "LOOT" | "CLASH" | "RANKED_LEAGUES" | "CHAMPION_MASTERY" | "HONOR" | "CAP_INVENTORY" | "EOGD" | "CHALLENGES"
	
	export interface LolChallengesUICategoryProgress {
		level: string
		category: string
		positionPercentile: number
		current: number
		max: number
	}
	
	export interface LolChallengesUIChallenge {
		id: number
		name: string
		description: string
		descriptionShort: string
		iconPath: string
		category: string
		nextLevelIconPath: string
		currentLevel: string
		nextLevel: string
		previousLevel: string
		previousValue: number
		currentValue: number
		currentThreshold: number
		nextThreshold: number
		pointsAwarded: number
		percentile: number
		currentLevelAchievedTime: number
		position: number
		playersInLevel: number
		isApex: boolean
		isCapstone: boolean
		gameModes: string[]
		friendsAtLevels: LCUTypes.LolChallengesFriendLevelsData[]
		parentId: number
		parentName: string
		childrenIds: number[]
		capstoneGroupId: number
		capstoneGroupName: string
		source: string
		thresholds: Record<string, LCUTypes.LolChallengesUIChallengeThreshold>
		levelToIconPath: Record<string, string>
		valueMapping: string
		hasLeaderboard: boolean
		isReverseDirection: boolean
		priority: number
		idListType: LCUTypes.LolChallengesChallengeRequirementMappingName
		availableIds: number[]
		completedIds: number[]
		retireTimestamp: number
	}
	
	export interface LolChallengesUIChallengePenalty {
		reason: string
	}
	
	export interface LolChallengesUIChallengeReward {
		category: string
		quantity: number
		name: string
		asset: string
	}
	
	export interface LolChallengesUIChallengeThreshold {
		value: number
		rewards: LCUTypes.LolChallengesUIChallengeReward[]
	}
	
	export interface LolChallengesUIPlayerSummary {
		totalChallengeScore: number
		pointsUntilNextRank: number
		overallChallengeLevel: string
		positionPercentile: number
		isApex: boolean
		apexLeaderboardPosition: number
		title: LCUTypes.LolChallengesUITitle
		bannerId: string
		crestId: string
		prestigeCrestBorderLevel: number
		categoryProgress: LCUTypes.LolChallengesUICategoryProgress[]
		topChallenges: LCUTypes.LolChallengesUIChallenge[]
		apexLadderUpdateTime: number
		selectedChallengesString: string
	}
	
	export interface LolChallengesUITitle {
		itemId: number
		contentId: string
		name: string
		challengeId: number
		challengeName: string
		challengeDescription: string
		level: string
		levelToIconPath: Record<string, string>
		purchaseDate: string
	}
	
	export interface LolChallengesUserResource {
		lol: Record<string, string>
	}
	
	export interface LolChampSelectBenchChampion {
		championId: number
		isPriority: boolean
	}
	
	export interface LolChampSelectChampGridChampion {
		id: number
		name: string
		squarePortraitPath: string
		freeToPlay: boolean
		loyaltyReward: boolean
		xboxGPReward: boolean
		freeToPlayForQueue: boolean
		owned: boolean
		rented: boolean
		disabled: boolean
		roles: string[]
		masteryPoints: number
		masteryLevel: number
		masteryChestGranted: boolean
		selectionStatus: LCUTypes.LolChampSelectChampionSelection
		positionsFavorited: string[]
	}
	
	export interface LolChampSelectChampSelectAction {
		id: number
		actorCellId: number
		championId: number
		type: string
		completed: boolean
		isAllyAction: boolean
	}
	
	export interface LolChampSelectChampSelectBannedChampions {
		myTeamBans: number[]
		theirTeamBans: number[]
		numBans: number
	}
	
	export interface LolChampSelectChampSelectChatRoomDetails {
		multiUserChatId: string
		multiUserChatPassword: string
		mucJwtDto: LCUTypes.LolChampSelectMucJwtDto
	}
	
	export interface LolChampSelectChampSelectMySelection {
		selectedSkinId?: number
		spell1Id?: number
		spell2Id?: number
		wardSkinId?: number
	}
	
	export interface LolChampSelectChampSelectPinDropNotification {
		pinDropSummoners: LCUTypes.LolChampSelectChampSelectPinDropSummoner[]
		mapSide: string
	}
	
	export interface LolChampSelectChampSelectPinDropSummoner {
		slotId: number
		position: string
		lane: string
		lanePosition: number
		isLocalSummoner: boolean
		isPlaceholder: boolean
	}
	
	export interface LolChampSelectChampSelectPlayerSelection {
		cellId: number
		championId: number
		selectedSkinId: number
		wardSkinId: number
		spell1Id: number
		spell2Id: number
		team: number
		assignedPosition: string
		championPickIntent: number
		summonerId: number
		puuid: string
		nameVisibilityType: string
		obfuscatedSummonerId: number
		obfuscatedPuuid: string
	}
	
	export interface LolChampSelectChampSelectSession {
		gameId: number
		timer: LCUTypes.LolChampSelectChampSelectTimer
		chatDetails: LCUTypes.LolChampSelectChampSelectChatRoomDetails
		myTeam: LCUTypes.LolChampSelectChampSelectPlayerSelection[]
		theirTeam: LCUTypes.LolChampSelectChampSelectPlayerSelection[]
		trades: LCUTypes.LolChampSelectChampSelectTradeContract[]
		pickOrderSwaps: LCUTypes.LolChampSelectChampSelectSwapContract[]
		actions: unknown[]
		bans: LCUTypes.LolChampSelectChampSelectBannedChampions
		localPlayerCellId: number
		isSpectating: boolean
		allowSkinSelection: boolean
		allowDuplicatePicks: boolean
		allowBattleBoost: boolean
		boostableSkinCount: number
		allowRerolling: boolean
		rerollsRemaining: number
		allowLockedEvents: boolean
		lockedEventIndex: number
		benchEnabled: boolean
		benchChampions: LCUTypes.LolChampSelectBenchChampion[]
		counter: number
		recoveryCounter: number
		skipChampionSelect: boolean
		hasSimultaneousBans: boolean
		hasSimultaneousPicks: boolean
		isCustomGame: boolean
	}
	
	export interface LolChampSelectChampSelectSummoner {
		cellId: number
		slotId: number
		spell1IconPath: string
		spell2IconPath: string
		assignedPosition: string
		summonerId: number
		puuid: string
		nameVisibilityType: string
		obfuscatedSummonerId: number
		obfuscatedPuuid: string
		activeActionType: string
		championIconStyle: string
		skinSplashPath: string
		actingBackgroundAnimationState: string
		statusMessageKey: string
		championId: number
		championName: string
		pickSnipedClass: string
		currentChampionVotePercentInteger: number
		skinId: number
		banIntentSquarePortratPath: string
		isOnPlayersTeam: boolean
		shouldShowSelectedSkin: boolean
		shouldShowExpanded: boolean
		isActingNow: boolean
		shouldShowActingBar: boolean
		isSelf: boolean
		shouldShowBanIntentIcon: boolean
		isPickIntenting: boolean
		isDonePicking: boolean
		isPlaceholder: boolean
		shouldShowSpells: boolean
		shouldShowRingAnimations: boolean
		areSummonerActionsComplete: boolean
		tradeId: number
		swapId: number
		showTrades: boolean
		showSwaps: boolean
		showMuted: boolean
	}
	
	export interface LolChampSelectChampSelectSwapContract {
		id: number
		cellId: number
		state: LCUTypes.LolChampSelectChampSelectSwapState
	}
	
	export interface LolChampSelectChampSelectSwapNotification {
		id: number
		requestorIndex: number
		responderIndex: number
		state: LCUTypes.LolChampSelectChampSelectSwapState
		otherSummonerIndex: number
		initiatedByLocalPlayer: boolean
	}
	
	export type LolChampSelectChampSelectSwapState = "ACCEPTED" | "CANCELLED" | "DECLINED" | "SENT" | "RECEIVED" | "INVALID" | "BUSY" | "AVAILABLE"
	
	export interface LolChampSelectChampSelectTimer {
		adjustedTimeLeftInPhase: number
		totalTimeInPhase: number
		phase: string
		isInfinite: boolean
		internalNowInEpochMs: number
	}
	
	export interface LolChampSelectChampSelectTradeContract {
		id: number
		cellId: number
		state: LCUTypes.LolChampSelectChampSelectTradeState
	}
	
	export interface LolChampSelectChampSelectTradeNotification {
		id: number
		responderIndex: number
		state: LCUTypes.LolChampSelectChampSelectTradeState
		otherSummonerIndex: number
		responderChampionName: string
		requesterChampionName: string
		requesterChampionSplashPath: string
		initiatedByLocalPlayer: boolean
	}
	
	export type LolChampSelectChampSelectTradeState = "ACCEPTED" | "CANCELLED" | "DECLINED" | "SENT" | "RECEIVED" | "INVALID" | "BUSY" | "AVAILABLE"
	
	export interface LolChampSelectChampionQuestSkinInfo {
		splashPath: string
		tilePath: string
		tiers: LCUTypes.LolChampSelectCollectionsChampionQuestSkin[]
	}
	
	export interface LolChampSelectChampionSelection {
		selectedByMe: boolean
		banIntentedByMe: boolean
		banIntented: boolean
		isBanned: boolean
		pickIntented: boolean
		pickIntentedByMe: boolean
		pickIntentedPosition: string
		pickedByOtherOrBanned: boolean
	}
	
	export interface LolChampSelectCollectionsChampionChroma {
		championId: number
		chromaPath?: string
		id: number
		name: string
		ownership: LCUTypes.LolChampSelectCollectionsOwnership
		disabled: boolean
		stillObtainable: boolean
		colors: string[]
	}
	
	export interface LolChampSelectCollectionsChampionMastery {
		championId: number
		championLevel: number
		championPoints: number
		chestGranted: boolean
	}
	
	export interface LolChampSelectCollectionsChampionMinimal {
		banVoPath: string
		chooseVoPath: string
		disabledQueues: string[]
		id: number
		name: string
		ownership: LCUTypes.LolChampSelectCollectionsOwnership
		roles: string[]
		squarePortraitPath: string
		stingerSfxPath: string
		baseSplashPath: string
		freeToPlay: boolean
	}
	
	export interface LolChampSelectCollectionsChampionQuestSkin {
		championId: number
		chromaPath?: string
		id: number
		name: string
		ownership: LCUTypes.LolChampSelectCollectionsOwnership
		isBase: boolean
		disabled: boolean
		stillObtainable: boolean
		splashPath: string
		tilePath: string
		stage: number
		shortName: string
		splashVideoPath: string
	}
	
	export interface LolChampSelectCollectionsChampionSkin {
		championId: number
		chromaPath?: string
		id: number
		name: string
		ownership: LCUTypes.LolChampSelectCollectionsOwnership
		isBase: boolean
		disabled: boolean
		stillObtainable: boolean
		splashPath: string
		tilePath: string
		chromas: LCUTypes.LolChampSelectCollectionsChampionChroma[]
		questSkinInfo: LCUTypes.LolChampSelectChampionQuestSkinInfo
		emblems: LCUTypes.LolChampSelectCollectionsChampionSkinEmblem[]
		rarityGemPath: string
		splashVideoPath?: string
	}
	
	export interface LolChampSelectCollectionsChampionSkinEmblem {
		name: string
		emblemPath: LCUTypes.LolChampSelectCollectionsChampionSkinEmblemPath
		positions: LCUTypes.LolChampSelectCollectionsChampionSkinEmblemPosition
	}
	
	export interface LolChampSelectCollectionsChampionSkinEmblemPath {
		large: string
		small: string
	}
	
	export interface LolChampSelectCollectionsChampionSkinEmblemPosition {
		vertical: string
		horizontal: string
	}
	
	export interface LolChampSelectCollectionsChampionSkinMinimal {
		championId: number
		chromaPath?: string
		id: number
		name: string
		ownership: LCUTypes.LolChampSelectCollectionsOwnership
		isBase: boolean
		disabled: boolean
		stillObtainable: boolean
		splashPath: string
		tilePath: string
	}
	
	export interface LolChampSelectCollectionsOwnership {
		loyaltyReward: boolean
		xboxGPReward: boolean
		owned: boolean
		rental: LCUTypes.LolChampSelectCollectionsRental
	}
	
	export interface LolChampSelectCollectionsRental {
		rented: boolean
	}
	
	export interface LolChampSelectGameDataSummonerSpell {
		id: number
		iconPath: string
	}
	
	export interface LolChampSelectLegacyChampSelectAction {
		id: number
		actorCellId: number
		championId: number
		type: string
		completed: boolean
		isAllyAction: boolean
		isInProgress: boolean
		pickTurn: number
	}
	
	export interface LolChampSelectLegacyChampSelectBannedChampions {
		myTeamBans: number[]
		theirTeamBans: number[]
		numBans: number
	}
	
	export interface LolChampSelectLegacyChampSelectChatRoomDetails {
		multiUserChatId: string
		multiUserChatPassword: string
		mucJwtDto: LCUTypes.LolChampSelectLegacyMucJwtDto
	}
	
	export interface LolChampSelectLegacyChampSelectMySelection {
		selectedSkinId?: number
		spell1Id?: number
		spell2Id?: number
		wardSkinId?: number
	}
	
	export interface LolChampSelectLegacyChampSelectPlayerSelection {
		cellId: number
		championId: number
		selectedSkinId: number
		wardSkinId: number
		spell1Id: number
		spell2Id: number
		team: number
		assignedPosition: string
		championPickIntent: number
		playerType: string
		summonerId: number
	}
	
	export interface LolChampSelectLegacyChampSelectSession {
		timer: LCUTypes.LolChampSelectLegacyChampSelectTimer
		chatDetails: LCUTypes.LolChampSelectLegacyChampSelectChatRoomDetails
		myTeam: LCUTypes.LolChampSelectLegacyChampSelectPlayerSelection[]
		theirTeam: LCUTypes.LolChampSelectLegacyChampSelectPlayerSelection[]
		trades: LCUTypes.LolChampSelectLegacyChampSelectTradeContract[]
		actions: unknown[]
		bans: LCUTypes.LolChampSelectLegacyChampSelectBannedChampions
		localPlayerCellId: number
		isSpectating: boolean
		allowSkinSelection: boolean
		allowBattleBoost: boolean
		allowRerolling: boolean
		rerollsRemaining: number
		hasSimultaneousBans: boolean
		hasSimultaneousPicks: boolean
		isCustomGame: boolean
	}
	
	export interface LolChampSelectLegacyChampSelectTimer {
		adjustedTimeLeftInPhase: number
		totalTimeInPhase: number
		phase: string
		isInfinite: boolean
		internalNowInEpochMs: number
	}
	
	export interface LolChampSelectLegacyChampSelectTradeContract {
		id: number
		cellId: number
		state: LCUTypes.LolChampSelectLegacyChampSelectTradeState
	}
	
	export type LolChampSelectLegacyChampSelectTradeState = "SENT" | "RECEIVED" | "INVALID" | "BUSY" | "AVAILABLE"
	
	export interface LolChampSelectLegacyChampionSelectPreferences {
		skins: Record<string, number>
		spells: Record<string, unknown>
	}
	
	export interface LolChampSelectLegacyCollectionsChampion {
		disabledQueues: string[]
		freeToPlay: boolean
		id: number
		ownership: LCUTypes.LolChampSelectLegacyCollectionsOwnership
		active: boolean
	}
	
	export interface LolChampSelectLegacyCollectionsOwnership {
		loyaltyReward: boolean
		xboxGPReward: boolean
		owned: boolean
		rental: LCUTypes.LolChampSelectLegacyCollectionsRental
	}
	
	export interface LolChampSelectLegacyCollectionsRental {
		rented: boolean
	}
	
	export interface LolChampSelectLegacyGameflowGameClient {
		running: boolean
		visible: boolean
	}
	
	export interface LolChampSelectLegacyGameflowGameData {
		queue: LCUTypes.LolChampSelectLegacyQueue
	}
	
	export interface LolChampSelectLegacyGameflowGameDodge {
		state: LCUTypes.LolChampSelectLegacyGameflowGameDodgeState
		dodgeIds: number[]
	}
	
	export type LolChampSelectLegacyGameflowGameDodgeState = "TournamentDodged" | "StrangerDodged" | "PartyDodged" | "Invalid"
	
	export type LolChampSelectLegacyGameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"
	
	export interface LolChampSelectLegacyGameflowSession {
		phase: LCUTypes.LolChampSelectLegacyGameflowPhase
		gameClient: LCUTypes.LolChampSelectLegacyGameflowGameClient
		gameData: LCUTypes.LolChampSelectLegacyGameflowGameData
	}
	
	export interface LolChampSelectLegacyInventoryItemWithPayload {
		itemId: number
		payload: unknown
	}
	
	export interface LolChampSelectLegacyLobbyStatus {
		queueId: number
		isCustom: boolean
		isLeader: boolean
		isSpectator: boolean
		allowedPlayAgain: boolean
		memberSummonerIds: number[]
	}
	
	export interface LolChampSelectLegacyLoginSession {
		state: LCUTypes.LolChampSelectLegacyLoginSessionStates
		summonerId: number
		connected: boolean
	}
	
	export type LolChampSelectLegacyLoginSessionStates = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"
	
	export interface LolChampSelectLegacyMucJwtDto {
		jwt: string
		channelClaim: string
		domain: string
		targetRegion: string
	}
	
	export interface LolChampSelectLegacyPlayerStatus {
		currentLobbyStatus?: LCUTypes.LolChampSelectLegacyLobbyStatus
		lastQueuedLobbyStatus?: LCUTypes.LolChampSelectLegacyLobbyStatus
	}
	
	export interface LolChampSelectLegacyQueue {
		gameTypeConfig: LCUTypes.LolChampSelectLegacyQueueGameTypeConfig
		areFreeChampionsAllowed: boolean
	}
	
	export interface LolChampSelectLegacyQueueGameTypeConfig {
		maxAllowableBans: number
		allowTrades: boolean
		battleBoost: boolean
		name: string
	}
	
	export interface LolChampSelectLegacySettingCategoryResource {
		schemaVersion: number
		data: LCUTypes.LolChampSelectLegacyChampionSelectPreferences
	}
	
	export interface LolChampSelectLegacySummoner {
		summonerId: number
		summonerLevel: number
	}
	
	export interface LolChampSelectLegacyTeamBoost {
		summonerName: string
		skinUnlockMode: string
		price: number
		ipReward: number
		ipRewardForPurchaser: number
		availableSkins: number[]
		unlocked: boolean
	}
	
	export interface LolChampSelectLoginSession {
		puuid: string
		summonerId?: number
	}
	
	export interface LolChampSelectMucJwtDto {
		jwt: string
		channelClaim: string
		domain: string
		targetRegion: string
	}
	
	export interface LolChampSelectMutedPlayerInfo {
		puuid: string
		summonerId: number
		obfuscatedPuuid: string
		obfuscatedSummonerId: number
	}
	
	export interface LolChampSelectSettingsResource {
		data: unknown
		schemaVersion: number
	}
	
	export interface LolChampSelectSfxNotification {
		delayMillis: number
		path: string
		eventType: string
	}
	
	export interface LolChampSelectSkinSelectorChildSkin {
		championId: number
		chromaPreviewPath?: string
		id: number
		name: string
		ownership: LCUTypes.LolChampSelectCollectionsOwnership
		isBase: boolean
		disabled: boolean
		stillObtainable: boolean
		isChampionUnlocked: boolean
		splashPath: string
		splashVideoPath?: string
		tilePath: string
		unlocked: boolean
		parentSkinId: number
		colors: string[]
		stage: number
		shortName: string
	}
	
	export interface LolChampSelectSkinSelectorInfo {
		selectedSkinId: number
		isSkinGrantedFromBoost: boolean
		selectedChampionId: number
		championName: string
		skinSelectionDisabled: boolean
		showSkinSelector: boolean
	}
	
	export interface LolChampSelectSkinSelectorSkin {
		championId: number
		chromaPreviewPath?: string
		id: number
		name: string
		ownership: LCUTypes.LolChampSelectCollectionsOwnership
		isBase: boolean
		disabled: boolean
		stillObtainable: boolean
		isChampionUnlocked: boolean
		splashPath: string
		splashVideoPath?: string
		tilePath: string
		unlocked: boolean
		childSkins: LCUTypes.LolChampSelectSkinSelectorChildSkin[]
		emblems: LCUTypes.LolChampSelectCollectionsChampionSkinEmblem[]
		rarityGemPath: string
		groupSplash: string
	}
	
	export interface LolChampSelectTeamBoost {
		summonerId: number
		skinUnlockMode: string
		price: number
		ipReward: number
		ipRewardForPurchaser: number
		availableSkins: number[]
		unlocked: boolean
	}
	
	export interface LolChampionsChampionQuestSkinInfo {
		name: string
		descriptionInfo: LCUTypes.LolChampionsQuestSkinDescriptionInfo[]
		splashPath: string
		uncenteredSplashPath: string
		tilePath: string
		collectionCardPath: string
		collectionDescription: string
		tiers: LCUTypes.LolChampionsCollectionsChampionQuestSkin[]
		productType: LCUTypes.LolChampionsQuestSkinProductType
	}
	
	export interface LolChampionsCollectionsChampion {
		alias: string
		title: string
		banVoPath: string
		chooseVoPath: string
		disabledQueues: string[]
		id: number
		name: string
		ownership: LCUTypes.LolChampionsCollectionsOwnership
		purchased: number
		roles: string[]
		squarePortraitPath: string
		stingerSfxPath: string
		baseLoadScreenPath: string
		baseSplashPath: string
		active: boolean
		botEnabled: boolean
		freeToPlay: boolean
		rankedPlayEnabled: boolean
		passive: LCUTypes.LolChampionsCollectionsChampionSpell
		skins: LCUTypes.LolChampionsCollectionsChampionSkin[]
		spells: LCUTypes.LolChampionsCollectionsChampionSpell[]
		tacticalInfo: LCUTypes.LolChampionsCollectionsChampionTacticalInfo
	}
	
	export interface LolChampionsCollectionsChampionChroma {
		championId: number
		chromaPath?: string
		id: number
		name: string
		ownership: LCUTypes.LolChampionsCollectionsOwnership
		disabled: boolean
		stillObtainable: boolean
		lastSelected: boolean
		colors: string[]
	}
	
	export interface LolChampionsCollectionsChampionMinimal {
		alias: string
		title: string
		banVoPath: string
		chooseVoPath: string
		disabledQueues: string[]
		id: number
		name: string
		ownership: LCUTypes.LolChampionsCollectionsOwnership
		purchased: number
		roles: string[]
		squarePortraitPath: string
		stingerSfxPath: string
		baseLoadScreenPath: string
		baseSplashPath: string
		active: boolean
		botEnabled: boolean
		freeToPlay: boolean
		rankedPlayEnabled: boolean
	}
	
	export interface LolChampionsCollectionsChampionPlayableCounts {
		championsOwned: number
		championsRented: number
		championsFreeToPlay: number
		championsLoyaltyReward: number
		championsXboxGPReward: number
	}
	
	export interface LolChampionsCollectionsChampionQuestSkin {
		championId: number
		chromaPath?: string
		id: number
		name: string
		ownership: LCUTypes.LolChampionsCollectionsOwnership
		isBase: boolean
		disabled: boolean
		stillObtainable: boolean
		lastSelected: boolean
		splashPath: string
		tilePath: string
		stage: number
		description: string
		uncenteredSplashPath: string
		loadScreenPath: string
		shortName: string
		splashVideoPath: string
		collectionSplashVideoPath: string
	}
	
	export interface LolChampionsCollectionsChampionSkin {
		championId: number
		chromaPath?: string
		id: number
		name: string
		ownership: LCUTypes.LolChampionsCollectionsOwnership
		isBase: boolean
		disabled: boolean
		stillObtainable: boolean
		lastSelected: boolean
		splashPath: string
		tilePath: string
		chromas: LCUTypes.LolChampionsCollectionsChampionChroma[]
		questSkinInfo: LCUTypes.LolChampionsChampionQuestSkinInfo
		emblems: LCUTypes.LolChampionsCollectionsChampionSkinEmblem[]
		uncenteredSplashPath: string
		loadScreenPath: string
		rarityGemPath: string
		splashVideoPath?: string
		collectionSplashVideoPath?: string
		skinType?: string
		featuresText?: string
	}
	
	export interface LolChampionsCollectionsChampionSkinEmblem {
		name: string
		emblemPath: LCUTypes.LolChampionsCollectionsChampionSkinEmblemPath
		positions: LCUTypes.LolChampionsCollectionsChampionSkinEmblemPosition
	}
	
	export interface LolChampionsCollectionsChampionSkinEmblemPath {
		large: string
		small: string
	}
	
	export interface LolChampionsCollectionsChampionSkinEmblemPosition {
		vertical: string
		horizontal: string
	}
	
	export interface LolChampionsCollectionsChampionSkinMinimal {
		championId: number
		chromaPath?: string
		id: number
		name: string
		ownership: LCUTypes.LolChampionsCollectionsOwnership
		isBase: boolean
		disabled: boolean
		stillObtainable: boolean
		lastSelected: boolean
		splashPath: string
		tilePath: string
	}
	
	export interface LolChampionsCollectionsChampionSpell {
		name: string
		description: string
	}
	
	export interface LolChampionsCollectionsChampionTacticalInfo {
		style: number
		difficulty: number
		damageType: string
	}
	
	export interface LolChampionsCollectionsOwnership {
		loyaltyReward: boolean
		xboxGPReward: boolean
		owned: boolean
		rental: LCUTypes.LolChampionsCollectionsRental
	}
	
	export interface LolChampionsCollectionsRental {
		endDate: number
		purchaseDate: number
		winCountRemaining: number
		rented: boolean
	}
	
	export interface LolChampionsGameDataChampion {
		id: number
		alias: string
		title: string
		banVoPath: string
		chooseVoPath: string
		name: string
		squarePortraitPath: string
		stingerSfxPath: string
		passive: LCUTypes.LolChampionsGameDataChampionSpell
		roles: string[]
		skins: LCUTypes.LolChampionsGameDataChampionSkin[]
		spells: LCUTypes.LolChampionsGameDataChampionSpell[]
		tacticalInfo: LCUTypes.LolChampionsGameDataChampionTacticalInfo
	}
	
	export interface LolChampionsGameDataChampionChroma {
		id: number
		colors: string[]
		chromaPath: string
	}
	
	export interface LolChampionsGameDataChampionQuestSkin {
		id: number
		name: string
		stage: number
		description: string
		splashPath: string
		splashVideoPath: string
		collectionSplashVideoPath: string
		uncenteredSplashPath: string
		tilePath: string
		loadScreenPath: string
		shortName: string
	}
	
	export interface LolChampionsGameDataChampionSkin {
		id: number
		name: string
		chromas: LCUTypes.LolChampionsGameDataChampionChroma[]
		questSkinInfo: LCUTypes.LolChampionsGameDataQuestSkinInfo
		emblems: LCUTypes.LolChampionsCollectionsChampionSkinEmblem[]
		splashPath: string
		uncenteredSplashPath: string
		tilePath: string
		loadScreenPath: string
		rarityGemPath: string
		splashVideoPath?: string
		collectionSplashVideoPath?: string
		chromaPath?: string
		skinType?: string
		featuresText?: string
	}
	
	export interface LolChampionsGameDataChampionSpell {
		name: string
		description: string
	}
	
	export interface LolChampionsGameDataChampionSummary {
		id: number
	}
	
	export interface LolChampionsGameDataChampionTacticalInfo {
		style: number
		difficulty: number
		damageType: string
	}
	
	export interface LolChampionsGameDataQuestSkinDescriptionInfo {
		title: string
		description: string
		iconPath: string
	}
	
	export interface LolChampionsGameDataQuestSkinInfo {
		name: string
		descriptionInfo: LCUTypes.LolChampionsGameDataQuestSkinDescriptionInfo[]
		splashPath: string
		uncenteredSplashPath: string
		tilePath: string
		collectionCardPath: string
		collectionDescription: string
		tiers: LCUTypes.LolChampionsGameDataChampionQuestSkin[]
		productType: LCUTypes.LolChampionsQuestSkinProductType
	}
	
	export interface LolChampionsInventoryItemWithPayload {
		uuid: string
		itemId: number
		inventoryType: string
		purchaseDate: string
		quantity: number
		expirationDate: string
		f2p: boolean
		rental: boolean
		loyalty: boolean
		loyaltySources: string[]
		owned: boolean
		payload: unknown
	}
	
	export interface LolChampionsLcdsDynamicClientConfig {
		DisabledChampions: unknown
	}
	
	export interface LolChampionsLoginSession {
		state: LCUTypes.LolChampionsLoginSessionStates
		summonerId: number
		connected: boolean
	}
	
	export type LolChampionsLoginSessionStates = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"
	
	export type LolChampionsLoyaltyStatus = "DISABLED" | "REVOKE" | "CHANGE" | "EXPIRY" | "REWARDS_GRANT" | "LEGACY"
	
	export interface LolChampionsLoyaltyStatusNotification {
		status: LCUTypes.LolChampionsLoyaltyStatus
		reloadInventory: boolean
	}
	
	export interface LolChampionsPlayerNotification {
		backgroundUrl: string
		critical: boolean
		data: Record<string, string>
		detailKey: string
		iconUrl: string
		id: number
		source: string
		state: string
		titleKey: string
		type: string
	}
	
	export interface LolChampionsQuestSkinDescriptionInfo {
		title: string
		description: string
		iconPath: string
	}
	
	export type LolChampionsQuestSkinProductType = "kTieredSkin" | "kQuestSkin"
	
	export interface LolChampionsSummoner {
		summonerId: number
		summonerLevel: number
	}
	
	export type LolChatAccountState = "dnd" | "chat" | "away" | "mobile" | "offline"
	
	export interface LolChatActiveConversationResource {
		id: string
	}
	
	export interface LolChatAuthResourceRsoAccessToken {
		token: string
		scopes: string[]
		expiry: number
	}
	
	export type LolChatAuthType = "rsoRefresh" | "rsoCreate"
	
	export interface LolChatBlocked {
		pid: string
		name: string
		game_name: string
		game_tag: string
	}
	
	export interface LolChatBlockedList {
		blocked: LCUTypes.LolChatBlocked[]
	}
	
	export interface LolChatBlockedPlayerResource {
		summonerId: number
		icon: number
		id: string
		name: string
		pid: string
		puuid: string
		gameName: string
		gameTag: string
	}
	
	export interface LolChatChampSelection {
		summonerInternalName: string
		championId: number
		selectedSkinIndex: number
	}
	
	export interface LolChatChatDomainConfig {
		P2PDomainName?: string
		CustomGameDomainName?: string
		ChampSelectDomainName?: string
		PostGameDomainName?: string
		ClubDomainName?: string
	}
	
	export interface LolChatChatFriendUpdate {
		pid: string
		group: string
		note: string
	}
	
	export interface LolChatChatMessage {
		type: LCUTypes.LolChatMessageType
		id: string
		cid: string
		pid: string
		mid: string
		name: string
		game_name: string
		game_tag: string
		time: string
		body: string
		read: boolean
	}
	
	export interface LolChatChatMessageList {
		messages: LCUTypes.LolChatChatMessage[]
	}
	
	export interface LolChatChatPlatformLoginSession {
		state: LCUTypes.LolChatChatPlatformLoginSessionState
		accountId: number
		username: string
		userAuthToken: string
		gasToken: unknown
		summonerId?: number
		idToken: string
		puuid: string
		isNewPlayer: boolean
	}
	
	export type LolChatChatPlatformLoginSessionState = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"
	
	export interface LolChatChatServiceDynamicClientConfig {
		LcuSocial?: LCUTypes.LolChatLcuSocialConfig
		ChatDomain?: LCUTypes.LolChatChatDomainConfig
	}
	
	export type LolChatChatSessionState = "connected" | "connecting" | "disconnected"
	
	export interface LolChatChatSettings {
		chatGroupMobile: boolean
		chatGroupOffline: boolean
		chatGBG: boolean
		recentlyPlayedOpen: boolean
		recentlyPlayedFirstOpen: boolean
		chatFilterDisabled: boolean
		friendRequestToastsDisabled: boolean
		linkClickWarningEnabled: boolean
		moreUnreadsEnabled: boolean
		showWhenTypingEnabled: boolean
		bounceDockIconEnabled: boolean
		messageNotificationsEnabled: boolean
		usePlayerPreferences: boolean
		chatWindowDockedHeight: number
		sortBy: string
		"chat-status-message": string
		"closed-conversations": Record<string, number>
		"hidden-conversations": Record<string, number>
		"muted-conversations": Record<string, number>
		"roster-group-collapsed": Record<string, boolean>
		chatWindow: LCUTypes.LolChatChatWindowSettings
	}
	
	export interface LolChatChatSummoner {
		summonerId: number
		profileIconId: number
		displayName: string
		summonerLevel: number
		puuid: string
		unnamed: boolean
	}
	
	export interface LolChatChatWindowSettings {
		detached: boolean
		height: number
		left: number
		top: number
		width: number
	}
	
	export interface LolChatCidBody {
		cid: string
	}
	
	export type LolChatConfigReadinessEnum = "Disabled" | "Ready" | "NotReady"
	
	export interface LolChatConfigStatus {
		readiness: LCUTypes.LolChatConfigReadinessEnum
	}
	
	export type LolChatConfigType = "player" | "public"
	
	export interface LolChatContentCookies {
		content_id: string
		content_path: string
		cookies: LCUTypes.LolChatcookie[]
	}
	
	export interface LolChatConversation {
		cid: string
		type: string
		mid: string
		unread_count: number
		muted: boolean
	}
	
	export interface LolChatConversationJoinFederated {
		id: string
		password: string
		type: string
		domain: string
		targetRegion: string
		hidden?: boolean
	}
	
	export interface LolChatConversationList {
		conversations: LCUTypes.LolChatConversation[]
	}
	
	export interface LolChatConversationMessageResource {
		id: string
		type: string
		fromSummonerId: number
		fromId: string
		fromPid: string
		fromObfuscatedSummonerId: number
		body: string
		timestamp: string
		isHistorical: boolean
	}
	
	export interface LolChatConversationResource {
		id: string
		name: string
		pid: string
		gameName: string
		gameTag: string
		type: string
		inviterId: string
		password: string
		targetRegion: string
		isMuted: boolean
		unreadMessageCount: number
		lastMessage?: LCUTypes.LolChatConversationMessageResource
		mucJwtDto: LCUTypes.LolChatMucJwtDto
	}
	
	export interface LolChatConversationUpdate {
		cid: string
		muted: boolean
		hidden: boolean
	}
	
	export interface LolChatDebugResource {
		isXMPPLoggingEnabled?: boolean
		keepAliveInterval?: number
		asyncWaitInterval?: number
		minReconnectInterval?: number
		maxReconnectInterval?: number
		triggerChatDisconnect?: boolean
		failNextKeepAlive?: boolean
		failNextChatLogin?: boolean
		failNextChatLogout?: boolean
		failAllChatLogin?: boolean
		enableChatFiltering?: boolean
		silenceChatWhileInGame?: boolean
	}
	
	export interface LolChatEndOfGamePlayer {
		puuid: string
		summonerId: number
		isLocalPlayer: boolean
	}
	
	export interface LolChatEndOfGameStats {
		teams: LCUTypes.LolChatEndOfGameTeam[]
		localPlayer: LCUTypes.LolChatEndOfGamePlayer
	}
	
	export interface LolChatEndOfGameTeam {
		players: LCUTypes.LolChatEndOfGamePlayer[]
		isPlayerTeam: boolean
	}
	
	export interface LolChatError {
		cid: string
		class: string
		code: string
		id: string
		pid: string
		subtype: string
		text: string
		ts: string
		type: string
	}
	
	export interface LolChatErrorList {
		errors: LCUTypes.LolChatError[]
	}
	
	export interface LolChatErrorResource {
		id: number
		from: string
		code: number
		message: string
		text: string
	}
	
	export interface LolChatFriend {
		pid: string
		group: string
		displayGroup: string
		name: string
		game_name: string
		game_tag: string
		note: string
		puuid: string
		region: string
	}
	
	export interface LolChatFriendCountsResource {
		numFriends: number
		numFriendsOnline: number
		numFriendsAvailable: number
		numFriendsAway: number
		numFriendsInQueue: number
		numFriendsInChampSelect: number
		numFriendsInGame: number
		numFriendsMobile: number
	}
	
	export interface LolChatFriendGroup {
		name: string
		collapsed: boolean
		isMetaGroup: boolean
	}
	
	export interface LolChatFriendGroupCreate {
		name: string
		collapsed: boolean
	}
	
	export interface LolChatFriendGroupList {
		groups: LCUTypes.LolChatFriendGroup[]
	}
	
	export interface LolChatFriendGroupOrder {
		groups: string[]
	}
	
	export interface LolChatFriendGroupUpdate {
		name: string
		new_name: string
		collapsed: boolean
	}
	
	export interface LolChatFriendList {
		friends: LCUTypes.LolChatFriend[]
	}
	
	export interface LolChatFriendRequest {
		pid: string
		name: string
		game_name: string
		game_tag: string
		subscription: LCUTypes.LolChatFriendSubscriptionType
		note: string
		puuid: string
		region: string
	}
	
	export interface LolChatFriendRequestAdd {
		pid: string
		name: string
		game_name: string
		game_tag: string
		note: string
		puuid: string
		region: string
	}
	
	export type LolChatFriendRequestDirection = "both" | "out" | "in"
	
	export interface LolChatFriendRequestList {
		requests: LCUTypes.LolChatFriendRequest[]
	}
	
	export interface LolChatFriendRequestResource {
		summonerId: number
		icon: number
		id: string
		name: string
		pid: string
		puuid: string
		gameName: string
		gameTag: string
		note: string
		direction: LCUTypes.LolChatFriendRequestDirection
	}
	
	export interface LolChatFriendResource {
		summonerId: number
		id: string
		name: string
		pid: string
		puuid: string
		gameName: string
		gameTag: string
		icon: number
		availability: string
		platformId: string
		patchline: string
		product: string
		productName: string
		summary: string
		time: number
		statusMessage: string
		note: string
		lastSeenOnlineTimestamp?: string
		isP2PConversationMuted: boolean
		groupId: number
		displayGroupId: number
		groupName: string
		displayGroupName: string
		lol: Record<string, string>
	}
	
	export type LolChatFriendSubscriptionType = "pending_in" | "pending_out"
	
	export interface LolChatGameDataChampionSummary {
		id: number
		alias: string
	}
	
	export interface LolChatGameflowGameData {
		gameId: number
		queue: LCUTypes.LolChatQueue
		teamOne: LCUTypes.LolChatTeamPlayerEntry[]
		teamTwo: LCUTypes.LolChatTeamPlayerEntry[]
		playerChampionSelections: LCUTypes.LolChatChampSelection[]
	}
	
	export interface LolChatGameflowGameMap {
		id: number
	}
	
	export type LolChatGameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"
	
	export interface LolChatGameflowSession {
		phase: LCUTypes.LolChatGameflowPhase
		gameData: LCUTypes.LolChatGameflowGameData
		map: LCUTypes.LolChatGameflowGameMap
	}
	
	export interface LolChatGroupResource {
		id: number
		name: string
		isMetaGroup: boolean
		isLocalized: boolean
		priority: number
		collapsed: boolean
	}
	
	export interface LolChatIdBody {
		id: string
	}
	
	export interface LolChatLcuSocialConfig {
		ForceChatFilter: boolean
		QueueJobGraceSeconds: number
		SilenceChatWhileInGame: boolean
		AggressiveScanning: boolean
		ReplaceRichMessages: boolean
		gameNameTaglineEnabled: boolean
		allowGroupByGame: boolean
		platformToRegionMap: Record<string, string>
	}
	
	export type LolChatLeagueDivision = "NA" | "V" | "IV" | "III" | "II" | "I"
	
	export type LolChatLeagueQueueType = "RANKED_TFT" | "RANKED_FLEX_TT" | "RANKED_FLEX_SR" | "RANKED_SOLO_5x5" | "NONE"
	
	export interface LolChatLobbyMember {
		id: number
		isOwner: boolean
	}
	
	export interface LolChatLobbyPlayerStatus {
		currentLobbyStatus?: LCUTypes.LolChatLobbyStatus
		lastQueuedLobbyStatus?: LCUTypes.LolChatLobbyStatus
	}
	
	export interface LolChatLobbyStatus {
		queueId: number
		isCustom: boolean
		isPracticeTool: boolean
		isLeader: boolean
		memberSummonerIds: number[]
		customSpectatorPolicy: LCUTypes.LolChatQueueCustomGameSpectatorPolicy
	}
	
	export interface LolChatMessage {
		type: string
		id: string
		cid: string
		pid: string
		mid: string
		name: string
		game_name: string
		game_tag: string
		time: string
		body: string
		read: boolean
	}
	
	export interface LolChatMessageList {
		messages: LCUTypes.LolChatMessage[]
	}
	
	export interface LolChatMessagePost {
		cid: string
		message: string
		type: LCUTypes.LolChatMessageType
	}
	
	export interface LolChatMessageSend {
		message: string
		type: string
	}
	
	export type LolChatMessageType = "system" | "dm" | "groupchat" | "chat"
	
	export interface LolChatMucJwtDto {
		jwt: string
		channelClaim: string
		domain: string
		targetRegion: string
	}
	
	export interface LolChatMultiGamePresence {
		state: LCUTypes.LolChatAccountState
		msg?: string
		pid: string
		puuid: string
		region: string
		name: string
		game_name: string
		game_tag: string
		resource: string
		product: string
		summary: string
		patchline?: string
		platform?: string
		location?: string
		details?: string
		actor?: string
		time?: number
		privateJwt?: string
		private?: string
	}
	
	export interface LolChatMultiGamePresenceList {
		presences: LCUTypes.LolChatMultiGamePresence[]
	}
	
	export interface LolChatMultiGamePresenceSharedPayload {
		product?: string
		patchline?: string
		platform?: string
		location?: string
		details?: string
		actor?: string
		time?: number
	}
	
	export interface LolChatMultiGamePresenceUpdate {
		state: LCUTypes.LolChatAccountState
		msg?: string
		privateJwt?: string
		private?: string
		sharedJwt?: string
		shared?: LCUTypes.LolChatMultiGamePresenceSharedPayload
	}
	
	export type LolChatMuteType = "SYSTEM_MUTE" | "SETTINGS_MUTE" | "PLAYER_MUTE"
	
	export interface LolChatMutedPlayerInfo {
		puuid: string
		summonerId: number
		obfuscatedPuuid: string
		obfuscatedSummonerId: number
	}
	
	export interface LolChatNameBody {
		name: string
	}
	
	export interface LolChatParticipant {
		cid: string
		pid: string
		name: string
		game_name: string
		game_tag: string
		muted: boolean
		puuid: string
		region: string
	}
	
	export interface LolChatParticipantList {
		participants: LCUTypes.LolChatParticipant[]
	}
	
	export interface LolChatPatchlineMetadata {
		product_id: string
		id: string
		content_paths: Record<string, string>
		content_cookies: LCUTypes.LolChatContentCookies[]
	}
	
	export interface LolChatPidBody {
		pid: string
	}
	
	export interface LolChatPlayerMuteStatus {
		puuid: string
		obfuscatedPuuid: string
		isPlayerMuted: boolean
		isSettingsMuted: boolean
		isSystemMuted: boolean
	}
	
	export interface LolChatPlayerMuteUpdate {
		puuids: string[]
		isMuted: boolean
	}
	
	export interface LolChatPlayerPreferences {
		data: string
		type: string
		modified: number
	}
	
	export interface LolChatPluginRegionLocaleChangedEvent {
		region: string
		locale: string
	}
	
	export interface LolChatPresenceProduct {
		product: string
	}
	
	export interface LolChatProductMetadata {
		id: string
		name: string
		patchlines: Record<string, LCUTypes.LolChatPatchlineMetadata>
	}
	
	export interface LolChatProductMetadataMap {
		products: Record<string, LCUTypes.LolChatProductMetadata>
	}
	
	export interface LolChatQueue {
		id: number
		type: string
		gameMode: string
		gameTypeConfig: LCUTypes.LolChatQueueGameTypeConfig
	}
	
	export type LolChatQueueCustomGameSpectatorPolicy = "AllAllowed" | "FriendsAllowed" | "LobbyAllowed" | "NotAllowed"
	
	export interface LolChatQueueGameTypeConfig {
		id: number
		name: string
	}
	
	export interface LolChatRankedQueueStats {
		queueType: LCUTypes.LolChatLeagueQueueType
		isProvisional: boolean
		tier: string
		division: LCUTypes.LolChatLeagueDivision
		wins: number
		games: number
	}
	
	export interface LolChatRankedStats {
		highestRankedEntry?: LCUTypes.LolChatRankedQueueStats
		rankedRegaliaLevel: number
		highestPreviousSeasonAchievedTier: string
		highestPreviousSeasonAchievedDivision: LCUTypes.LolChatLeagueDivision
	}
	
	export interface LolChatRsoAuthorization {
		currentPlatformId: string
		currentAccountId: number
		subject: string
	}
	
	export interface LolChatSanitizeRequest {
		texts: string[]
		level?: number
		aggressiveScan?: boolean
	}
	
	export interface LolChatSanitizeResponse {
		texts?: string[]
		modified: boolean
	}
	
	export interface LolChatSanitizerStatus {
		ready: boolean
		platformID: string
		locale: string
	}
	
	export interface LolChatSession {
		state: LCUTypes.LolChatChatSessionState
		pid: string
		name: string
		game_name: string
		game_tag: string
		resource: string
		loaded: boolean
	}
	
	export interface LolChatSessionResource {
		sessionState: LCUTypes.LolChatSessionState
		sessionExpire: number
	}
	
	export type LolChatSessionState = "shuttingdown" | "disconnected" | "loaded" | "connected" | "initializing"
	
	export interface LolChatSettingsResource {
		data: unknown
	}
	
	export interface LolChatSpectateGameInfoResource {
		dropInSpectateGameId: string
		gameQueueType: string
		allowObserveMode: string
		puuid: string
	}
	
	export interface LolChatSummonerStatus {
		ready: boolean
	}
	
	export interface LolChatTeamPlayerEntry {
		summonerId: number
		summonerInternalName: string
		summonerName: string
	}
	
	export interface LolChatTranslateRequest {
		keys: string[]
		product_id: string
		locale: string
		patchline: string
		blocking: boolean
	}
	
	export interface LolChatTranslateResponse {
		results: LCUTypes.LolChatTranslateResult[]
	}
	
	export interface LolChatTranslateResult {
		found: boolean
		key: string
		product_id: string
		value: string
	}
	
	export interface LolChatUserResource {
		summonerId: number
		id: string
		name: string
		pid: string
		puuid: string
		obfuscatedSummonerId: number
		gameName: string
		gameTag: string
		icon: number
		availability: string
		platformId: string
		patchline: string
		product: string
		productName: string
		summary: string
		time: number
		statusMessage?: string
		lastSeenOnlineTimestamp?: string
		lol: Record<string, string>
	}
	
	export interface LolChatcookie {
		url: string
		name: string
		value: string
		domain: string
		path: string
		secure: boolean
		httponly: boolean
		expires?: number
	}
	
	export interface LolClashAlias {
		gameName: string
		tagLine: string
	}
	
	export interface LolClashBlockedPlayerResource {
		summonerId: number
		name: string
		gameName: string
		gameTag: string
	}
	
	export interface LolClashBracket {
		tournamentId: number
		id: number
		size: number
		matches: LCUTypes.BracketMatch[]
		rosters: LCUTypes.BracketRoster[]
		version: number
		period: number
		isComplete: boolean
	}
	
	export interface LolClashBracketReadyNotification {
		tournamentId: number
		bracketId: number
	}
	
	export interface LolClashBracketUpdateNotification {
		tournamentId: number
		bracketId: number
		currentMatchId: number
		notifyReason: LCUTypes.LolClashRosterNotifyReason
	}
	
	export interface LolClashChangeIconRequest {
		iconId: number
		iconColorId: number
	}
	
	export interface LolClashChangeNameRequest {
		name: string
	}
	
	export interface LolClashClashConfig {
		Visibility: LCUTypes.LolClashClashVisibility
		EnabledState: LCUTypes.LolClashClashState
		DisabledReason: string
		EstimatedEnableTimeMillis: number
		IconConfig: string
		HonorLevelRequired: number
		IsPlaymodeRestrictionEnabled: boolean
		VoiceRetryDelaySeconds: number
		VoiceRetryCountLimit: number
		VoiceNoDelayAutoStartSeconds: number
		VoiceRandomStartMinSeconds: number
		VoiceRandomStartMaxSeconds: number
		VoiceEobQuitDelaySeconds: number
		RewardGrantRetryIntervalSeconds: number
		MaxTimeBeforeLockinNotifySeconds: number
		HonorRefreshRetrySeconds: number
		EventSendingEnabled: boolean
		DisabledEvents: string[]
		MinClashSummonerLevel: number
		MinClashNotificationsSummonerLevel: number
		CheckPartiesRegistration: boolean
	}
	
	export interface LolClashClashDisabledConfig {
		disabledReason: string
		estimatedEnableTimeMillis: number
	}
	
	export interface LolClashClashSettingCategory {
		simpleStateFlagIds?: string[]
	}
	
	export type LolClashClashState = "Enabled" | "Disabled"
	
	export type LolClashClashVisibility = "Visible" | "Hidden"
	
	export interface LolClashClientFailedInvite {
		playerId: number
		exception: string
	}
	
	export interface LolClashClubsSummoner {
		summonerId: number
		displayName: string
		profileIconId: number
		summonerLevel: number
	}
	
	export interface LolClashEogPlayerUpdateDTO {
		tournamentId: number
		gameId: number
		winner: boolean
		themeVp: number
		seasonVp: number
		lowestPosition: number
		bracketSize: number
		bid: number
		tier: number
		earnedRewards: LCUTypes.ClashRewardDefinition[]
		rewardProgress: LCUTypes.ClashRewardDefinition[]
	}
	
	export interface LolClashFindPlayers {
		invitationId: string
		memberId: number
		page: number
		count: number
	}
	
	export interface LolClashFindTeams {
		tournamentId: number
		page: number
		count: number
	}
	
	export type LolClashFoundationError = "INVALID_SIMPLE_STATE_FLAG" | "LOL_INVENTORY_NOT_READY" | "GAMEFLOW_UNAVAILABLE" | "DESERIALIZATION_FAILED" | "CLASH_DISABLED" | "CLASH_NOT_INITIALIZED"
	
	export interface LolClashGameflowAvailability {
		isAvailable: boolean
	}
	
	export interface LolClashGameflowGameDodge {
		state: LCUTypes.LolClashMatchmakingDodgeState
		dodgeIds: number[]
	}
	
	export interface LolClashGameflowPartiesRegistrationStatus {
		complete: boolean
		errorCodes: string[]
	}
	
	export type LolClashGameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"
	
	export interface LolClashGameflowSession {
		phase: LCUTypes.LolClashGameflowPhase
	}
	
	export type LolClashKdaClassification = "HIGH" | "AVERAGE" | "LOW"
	
	export interface LolClashKickRequest {
		summonerId: number
	}
	
	export interface LolClashLftState {
		lft: boolean
		primaryPos: string
		secondaryPos: string
	}
	
	export interface LolClashLoginSession {
		state: LCUTypes.LolClashLoginSessionState
		summonerId?: number
	}
	
	export type LolClashLoginSessionState = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"
	
	export interface LolClashMatchmakingDodgeData {
		state: LCUTypes.LolClashMatchmakingDodgeState
		dodgerId: number
	}
	
	export type LolClashMatchmakingDodgeState = "TournamentDodged" | "StrangerDodged" | "PartyDodged" | "Invalid"
	
	export type LolClashMatchmakingDodgeWarning = "Penalty" | "Warning" | "None"
	
	export interface LolClashMatchmakingReadyCheckResource {
		state: LCUTypes.LolClashMatchmakingReadyCheckState
		playerResponse: LCUTypes.LolClashMatchmakingReadyCheckResponse
		dodgeWarning: LCUTypes.LolClashMatchmakingDodgeWarning
		timer: number
		declinerIds: number[]
	}
	
	export type LolClashMatchmakingReadyCheckResponse = "Declined" | "Accepted" | "None"
	
	export type LolClashMatchmakingReadyCheckState = "Error" | "PartyNotReady" | "StrangerNotReady" | "EveryoneReady" | "InProgress" | "Invalid"
	
	export interface LolClashMatchmakingSearchResource {
		queueId: number
		readyCheck: LCUTypes.LolClashMatchmakingReadyCheckResource
		dodgeData: LCUTypes.LolClashMatchmakingDodgeData
	}
	
	export interface LolClashMemberBanUnbanNotification {
		playerId: number
		notifyPlayerId: number
		notifyPuuid: string
		reason: string
		notifyReason: LCUTypes.LolClashNotifyReason
		tournaments: LCUTypes.MemberBanUnbanTournament[]
	}
	
	export interface LolClashMucJwtDto {
		jwt: string
		channelClaim: string
		domain: string
		targetRegion: string
	}
	
	export interface LolClashNoShowPingDTO {
		tournamentId: number
		matchId: number
		dodgeTime: number
	}
	
	export interface LolClashNoShowPingResponse {
		tournamentId: number
		matchId: number
		dodgeTime: number
		data: string
	}
	
	export interface LolClashNoShowPingResponseData {
		loginTime: number
		dodgeTime: number
		gameflowState: LCUTypes.LolClashGameflowPhase
		isPlaymodeRestricted: boolean
		readyCheckInfo: LCUTypes.LolClashReadyCheckInfo
	}
	
	export type LolClashNotifyReason = "TEAMMATE_UNBAN" | "TEAMMATE_BAN" | "MEMBER_BAN" | "UNBAN" | "BAN" | "REVERTED_REGISTRATION" | "REWARD_GRANT_RETRY" | "REWARD_GRANT_FAILED" | "ACCEPT_TICKET" | "DECLINE_TICKET" | "REVOKED_TICKET" | "OFFER_TICKET" | "SET_TICKET" | "KICK" | "CAPTAIN_LEAVE" | "LEAVE" | "REVOKE_INVITE" | "ACCEPT_INVITE" | "DECLINE_INVITE" | "RESENT_INVITE" | "INVITE" | "CHANGE_LFT" | "CHANGE_NAMETAGLOGO" | "CHANGE_POSITION" | "CHANGE_SHORTNAME" | "CHANGE_NAME" | "CHANGE_LOGO" | "OWNER_TRANSFER" | "ROSTER_DELETE" | "DISMISS" | "OWNER_CLOSE" | "UNREADY" | "READY" | "SELFJOIN" | "REVOKE_SELFJOIN" | "ACCEPT_SELFJOIN" | "DECLINE_SELFJOIN" | "REVOKE_SUGGESTION" | "ACCEPT_SUGGESTION" | "DECLINE_SUGGESTION" | "SUGGESTION"
	
	export interface LolClashOfferTicketRequest {
		ticketAmount: number
		ticketType: LCUTypes.TicketType
	}
	
	export interface LolClashPendingRosterNotification {
		pendingRoster: LCUTypes.PendingRosterDTO
		notifyReason: LCUTypes.LolClashNotifyReason
		sourcePlayerId: number
		targetPlayerId: number
	}
	
	export interface LolClashPlayerChatRoster {
		tournamentId: number
		startTimeMs: number
		endTimeMs: number
		tournamentState: LCUTypes.LolClashTournamentState
		playerState: LCUTypes.LolClashPlayerState
		isRegistered: boolean
		name: string
		shortName: string
		iconId: number
		iconColorId: number
		logoUrl: string
		invitationId: string
		multiUserChatId: string
		multiUserChatPassword: string
		mucJwtDto: LCUTypes.LolClashMucJwtDto
	}
	
	export interface LolClashPlayerData {
		tickets: Record<string, number>
		isClashBanned: boolean
		tier: number
		lft: boolean
		primaryPos: string
		secondaryPos: string
	}
	
	export interface LolClashPlayerNotification {
		source: string
		type: string
		id: number
		backgroundUrl: string
		data: Record<string, string>
		state: string
		iconUrl: string
		titleKey: string
		detailKey: string
		created: string
		expires: string
		critical: boolean
		dismissible: boolean
	}
	
	export interface LolClashPlayerNotificationData {
		notifyReason: LCUTypes.LolClashNotifyReason
		rosterNotifyReason: LCUTypes.LolClashRosterNotifyReason
		tournamentNotifyReason: LCUTypes.LolClashTournamentNotifyReason
		sourceSummonerId: number
		targetSummonerId: number
		notification: LCUTypes.LolClashPlayerNotification
		keySuffix: string
	}
	
	export interface LolClashPlayerRewards {
		seasonVp: number
		themeVp: LCUTypes.LolClashThemeVp[]
	}
	
	export type LolClashPlayerState = "ELIMINATED" | "BRACKET_ROSTER" | "REGISTERED_ROSTER" | "PENDING_ROSTER" | "NO_ROSTER"
	
	export interface LolClashPlayerTournamentData {
		state: LCUTypes.LolClashPlayerState
		rosterId: string
		bracketId: number
	}
	
	export interface LolClashPlayerUpdateNotification {
		player: LCUTypes.PlayerDTO
		notifyReason: LCUTypes.LolClashNotifyReason
	}
	
	export interface LolClashPlaymodeRestrictedInfo {
		isRestricted: boolean
		tournamentId: number
		presenceState: LCUTypes.LolClashPresenceState
		rosterId: string
		phaseId: number
		readyForVoice: boolean
	}
	
	export type LolClashPresenceState = "SCOUTING" | "LOCKED_IN" | "NONE"
	
	export interface LolClashProfileInfo {
		honorLevel: number
	}
	
	export interface LolClashQueue {
		id: number
		mapId: number
		name: string
		shortName: string
		description: string
		detailedDescription: string
		type: string
		gameMode: string
		category: LCUTypes.LolClashQueueGameCategory
		gameTypeConfig: LCUTypes.LolClashQueueGameTypeConfig
		numPlayersPerTeam: number
		minimumParticipantListSize: number
		maximumParticipantListSize: number
		minLevel: number
		isRanked: boolean
		areFreeChampionsAllowed: boolean
		isTeamBuilderManaged: boolean
		queueAvailability: LCUTypes.LolClashQueueAvailability
		queueRewards: LCUTypes.LolClashQueueReward
		spectatorEnabled: boolean
	}
	
	export type LolClashQueueAvailability = "DoesntMeetRequirements" | "PlatformDisabled" | "Available"
	
	export type LolClashQueueGameCategory = "Alpha" | "VersusAi" | "PvP" | "Custom" | "None"
	
	export interface LolClashQueueGameTypeConfig {
		id: number
		name: string
		maxAllowableBans: number
		allowTrades: boolean
		exclusivePick: boolean
		duplicatePick: boolean
		teamChampionPool: boolean
		crossTeamChampionPool: boolean
		advancedLearningQuests: boolean
		battleBoost: boolean
		deathMatch: boolean
		doNotRemove: boolean
		learningQuests: boolean
		onboardCoopBeginner: boolean
		reroll: boolean
		mainPickTimerDuration: number
		postPickTimerDuration: number
		banTimerDuration: number
		pickMode: string
		banMode: string
	}
	
	export interface LolClashQueueReward {
		isIpEnabled: boolean
		isXpEnabled: boolean
		isChampionPointsEnabled: boolean
		partySizeIpRewards: number[]
	}
	
	export interface LolClashRankedScoutingMember {
		playerId: number
		championScoutingData: LCUTypes.LolClashRankedScoutingTopChampion[]
	}
	
	export interface LolClashRankedScoutingTopChampion {
		championId: number
		rank: number
		winCount: number
		gameCount: number
		winRate: number
		kda: string
		kdaClassification: LCUTypes.LolClashKdaClassification
	}
	
	export interface LolClashReadyCheckInfo {
		timestampReceived: number
		timestampResponseComplete: number
		timestampLastClashGameflowDodge: number
		queueId: number
		isAcceptSuccessful: boolean
		acceptError: string
		readyCheckResource: LCUTypes.LolClashMatchmakingReadyCheckResource
	}
	
	export interface LolClashRegisteredRosterNotification {
		roster: LCUTypes.RosterDTO
		notifyReason: LCUTypes.LolClashRosterNotifyReason
	}
	
	export interface LolClashRoster {
		tournamentId: number
		invitationId: string
		id: string
		name: string
		shortName: string
		iconId: number
		iconColorId: number
		captainSummonerId: number
		tier: number
		points: number
		wins: number
		losses: number
		currentBracketWins: number
		numCompletedPeriods: number
		isEliminated: boolean
		isRegistered: boolean
		isActiveInCurrentPhase: boolean
		isCurrentBracketComplete: boolean
		highTierVariance: boolean
		members: LCUTypes.LolClashRosterMember[]
		availableLogos: LCUTypes.RewardLogo[]
		suggestedInvites: LCUTypes.LolClashSuggestedInvite[]
		phaseInfos: LCUTypes.LolClashRosterPhaseInfo[]
		withdraw?: LCUTypes.RosterWithdraw
		isClashBanned: boolean
		lft: boolean
	}
	
	export interface LolClashRosterDetails {
		name: string
		shortName: string
		iconId: number
		iconColorId: number
	}
	
	export interface LolClashRosterDynamicStateNotification {
		rosterDynamicState: LCUTypes.RosterDynamicStateDTO
		notifyReason: LCUTypes.LolClashRosterNotifyReason
		sourcePlayerId: number
	}
	
	export interface LolClashRosterMatchAggregatedStats {
		round: number
		durationMs: number
		opponentShortName: string
		opponentIconId: number
		opponentIconColorId: number
		win: boolean
		loserBracket: boolean
		gameId: number
		kills: number
		opponentKills: number
		playerChampionIds: Record<string, number>
	}
	
	export interface LolClashRosterMember {
		summonerId: number
		state: LCUTypes.LolClashRosterMemberState
		currentBuyin: number
		buyinType: LCUTypes.TicketType
		previousBuyin: number
		incomingOffers: LCUTypes.LolClashTicketOffer[]
		position: LCUTypes.Position
		replacedSummonerId: number
		tier: number
		inviteType: LCUTypes.InviteType
		inviterId: number
	}
	
	export type LolClashRosterMemberState = "READY" | "FORCED_NOT_READY" | "NOT_READY" | "PENDING" | "DECLINED"
	
	export type LolClashRosterNotifyReason = "GAME_RESCHEDULED" | "GAME_START_FAILED_OPPONENT" | "GAME_START_FAILED_SUMMONERS" | "GAME_START_FAILED" | "GAME_START_RETRY_OPPONENT" | "GAME_START_RETRY_SUMMONERS" | "GAME_START_RETRY" | "TICKET_COULD_NOT_BE_CHARGED" | "TICKET_REFUNDED" | "TICKET_CHARGED" | "BANNED_SMURF_OPPONENT" | "BANNED_SMURF_TEAMMATE" | "BANNED_SMURF" | "CANNOT_FIND_MATCH" | "BRACKET_ROSTER_REPLACED" | "BRACKET_ROSTER_REMOVED" | "TIER_CHANGED" | "NO_SHOW_PING" | "ROUND_COMPLETE" | "WITHDRAW" | "VOTE_WITHDRAW_DISMISS" | "VOTE_WITHDRAW_UPDATE" | "OWNER_TRANSFER" | "QUEUE_DODGE" | "GAME_END_ERROR" | "GAME_STARTED_ERROR" | "GAME_STARTED" | "GAME_SCHEDULED" | "GAME_COMPLETED" | "PERIOD_SPLIT" | "PERIOD_CANCEL" | "PHASE_BACKOUT" | "PHASE_CHECKIN" | "PHASE_READY" | "PHASE_UNREADY" | "RESTRICTION_AUTO_WIN" | "REGISTERED" | "EOG_PLAYER_UPDATE" | "CHANGE_POSITION" | "BRACKET_READY" | "BYE_AUTO_WIN" | "ROSTER_REVOKED_TICKET" | "ROSTER_DECLINE_TICKET" | "ROSTER_ACCEPT_TICKET" | "ROSTER_OFFER_TICKET" | "ROSTER_SET_TICKET"
	
	export interface LolClashRosterPeriodAggregatedStats {
		period: number
		bracketSize: number
		time: number
		matchStats: LCUTypes.LolClashRosterMatchAggregatedStats[]
		playerBids: Record<string, number>
	}
	
	export interface LolClashRosterPhaseInfo {
		phaseId: number
		period: number
		checkinTime: number
		isBracketComplete: boolean
	}
	
	export interface LolClashRosterPlayerAggregatedStats {
		rawStatsSum: Record<string, number>
		rawStatsMax: Record<string, number>
	}
	
	export interface LolClashRosterPlayerNotification {
		roster: LCUTypes.RosterDTO
		notifyReason: LCUTypes.LolClashRosterNotifyReason
		playerNotificationDTO: LCUTypes.PlayerDTO
		sourcePlayerId: number
	}
	
	export interface LolClashRosterStats {
		rosterId: number
		tournamentThemeId: number
		tournamentNameLocKey: string
		tournamentNameLocKeySecondary: string
		startTimeMs: number
		endTimeMs: number
		tournamentPeriods: number
		tier: number
		rosterName: string
		rosterShortName: string
		rosterIconId: number
		rosterIconColorId: number
		periodStats: LCUTypes.LolClashRosterPeriodAggregatedStats[]
		playerStats: Record<string, LCUTypes.LolClashRosterPlayerAggregatedStats>
	}
	
	export interface LolClashRosterWithdrawNotification {
		version: number
		tournamentId: number
		rosterId: number
		withdraw: LCUTypes.RosterWithdraw
		notifyReason: LCUTypes.LolClashRosterNotifyReason
		sourcePlayerId: number
	}
	
	export interface LolClashScoutingChampionMastery {
		championId: number
		championLevel: number
		championPoints: number
	}
	
	export interface LolClashScoutingChampions {
		playerId: number
		totalMasteryScore: number
		topMasteries: LCUTypes.LolClashScoutingChampionMastery[]
		topSeasonChampions: LCUTypes.LolClashScoutingSeasonChampion[]
	}
	
	export interface LolClashScoutingSeasonChampion {
		championId: number
		winCount: number
		gameCount: number
		winRate: number
		kda: string
		kdaClassification: LCUTypes.LolClashKdaClassification
	}
	
	export interface LolClashSetPositionRequest {
		position: LCUTypes.Position
	}
	
	export interface LolClashSetTicketRequest {
		ticketAmount: number
		ticketType: LCUTypes.TicketType
	}
	
	export interface LolClashSettingCategory {
		schemaVersion: number
		data: unknown
	}
	
	export interface LolClashSimpleStateFlag {
		id: string
		status: LCUTypes.LolClashSimpleStateStatus
	}
	
	export type LolClashSimpleStateStatus = "ACKNOWLEDGED" | "UNACKNOWLEDGED"
	
	export interface LolClashSuggestedInvite {
		summonerId: number
		suggesterSummonerId: number
	}
	
	export interface LolClashSuggestionInvite {
		inviterId: number
		inviteePlayers: number[]
	}
	
	export interface LolClashSuggestionInvitee {
		captainId: number
		inviteeId: number
	}
	
	export interface LolClashTeamOpenState {
		invitationId: string
		captainId: number
		openTeam: boolean
	}
	
	export interface LolClashThemeVp {
		themeId: number
		vp: number
	}
	
	export interface LolClashThirdPartyApiPlayer {
		summonerId: number
		role: string
	}
	
	export interface LolClashThirdPartyApiRoster {
		captain: LCUTypes.LolClashThirdPartyApiPlayer
		members: LCUTypes.LolClashThirdPartyApiPlayer[]
	}
	
	export interface LolClashTicketOffer {
		summonerId: number
		amount: number
		ticketType: LCUTypes.TicketType
		isAccepted: boolean
	}
	
	export interface LolClashTournament {
		id: number
		themeId: number
		nameLocKey: string
		nameLocKeySecondary: string
		buyInOptions: number[]
		buyInOptionsPremium: number[]
		entryFee: number
		rosterSize: number
		allowRosterCreation: boolean
		rosterCreateDeadline: number
		scoutingDurationMs: number
		startTimeMs: number
		endTimeMs: number
		lastThemeOfSeason: boolean
		bracketSize: string
		queueId: number
		isSmsRestrictionEnabled: boolean
		isHonorRestrictionEnabled: boolean
		isRankedRestrictionEnabled: boolean
		phases: LCUTypes.LolClashTournamentPhase[]
		rewardConfig: LCUTypes.ClashRewardConfigClient[]
		tierConfigs: LCUTypes.TierConfig[]
		bracketFormationInitDelayMs: number
		bracketFormationIntervalMs: number
		status: LCUTypes.TournamentStatusEnum
		resumeTime: number
		lft: boolean
		maxInvites: number
		maxSuggestionsPerPlayer: number
	}
	
	export interface LolClashTournamentGameEnd {
		tournamentId: number
		tournamentNameLocKey: string
		tournamentNameLocKeySecondary: string
		bracketId: number
		oldBracket?: LCUTypes.LolClashBracket
	}
	
	export interface LolClashTournamentHistoryAndWinners {
		tournamentHistory: LCUTypes.LolClashTournament[]
		tournamentWinners: LCUTypes.LolClashTournamentWinnerHistory
	}
	
	export type LolClashTournamentNotifyReason = "UPDATE_STATUS" | "REVERT_PHASE" | "UPDATE_PHASE" | "ADD_PHASE" | "CANCEL_PERIOD" | "CANCEL_TOURNAMENT" | "UPDATE_TOURNAMENT" | "NEW_TOURNAMENT"
	
	export interface LolClashTournamentPhase {
		id: number
		tournamentId: number
		period: number
		lockinStartTime: number
		scoutingStartTime: number
		cancelled: boolean
		limitTiers: number[]
		capacityStatus: LCUTypes.CapacityEnum
	}
	
	export interface LolClashTournamentPhaseProgressNotificationDTO {
		tournamentId: number
		phaseId: number
		capacityStatus: LCUTypes.CapacityEnum
	}
	
	export type LolClashTournamentState = "RESULTS" | "IN_GAME" | "SCOUTING" | "LOCK_IN" | "IDLE" | "UPCOMING"
	
	export interface LolClashTournamentStateInfo {
		tournamentId: number
		state: LCUTypes.LolClashTournamentState
		currentPhaseId: number
		nextPhaseId: number
		nextStateChangeTime: number
		numRemainingPeriods: number
	}
	
	export interface LolClashTournamentSummary {
		state: LCUTypes.LolClashTournamentState
		tournamentId: number
		rosterId: string
		bracketId: number
	}
	
	export interface LolClashTournamentUpdatedNotification {
		missingPlayerIds: number[]
		currentRetry: number
		maxRetry: number
		retrySeconds: number
		notifyReason: LCUTypes.LolClashRosterNotifyReason
	}
	
	export interface LolClashTournamentUpdatedNotificationDTO {
		reason: LCUTypes.LolClashTournamentNotifyReason
		tournamentId: number
		tournament?: LCUTypes.TournamentDTO
		relevantPhaseId?: number
	}
	
	export interface LolClashTournamentWinnerHistory {
		tournamentId: number
		winners: LCUTypes.LolClashTournamentWinnerInfo[]
	}
	
	export interface LolClashTournamentWinnerInfo {
		rosterId: number
		tier: number
		shortName: string
		name: string
		logo: number
		logoColor: number
		createTime: number
		averageWinDuration: number
		playerIds: number[]
	}
	
	export interface LolClashUserResource {
		summonerId: number
		lol: Record<string, string>
	}
	
	export interface LolCollectionsAccountIdAndSummonerId {
		summonerId: number
	}
	
	export interface LolCollectionsCollectionsChampionMastery {
		puuid: string
		playerId: number
		championId: number
		championLevel: number
		championPoints: number
		formattedChampionPoints: string
		lastPlayTime: number
		championPointsSinceLastLevel: number
		championPointsUntilNextLevel: number
		tokensEarned: number
		chestGranted: boolean
		highestGrade: string
		formattedMasteryGoal: string
	}
	
	export interface LolCollectionsCollectionsChestEligibility {
		earnableChests: number
		maximumChests: number
		nextChestRechargeTime: number
	}
	
	export interface LolCollectionsCollectionsOwnership {
		loyaltyReward: boolean
		xboxGPReward: boolean
		owned: boolean
		rental: LCUTypes.LolCollectionsCollectionsRental
	}
	
	export interface LolCollectionsCollectionsRental {
		endDate: number
		purchaseDate: number
		winCountRemaining: number
		rented: boolean
	}
	
	export interface LolCollectionsCollectionsSummonerBackdrop {
		summonerId: number
		accountId: number
		profileIconId: number
		championId: number
		backdropType: LCUTypes.LolCollectionsCollectionsSummonerBackdropType
		backdropImage: string
		backdropVideo: string
		backdropMaskColor: string
		puuid: string
	}
	
	export type LolCollectionsCollectionsSummonerBackdropType = "specified-skin" | "highest-mastery" | "summoner-icon" | "default"
	
	export interface LolCollectionsCollectionsSummonerSpells {
		summonerId: number
		spells: number[]
	}
	
	export interface LolCollectionsCollectionsTopChampionMasteries {
		puuid: string
		summonerId: number
		score: number
		masteries: LCUTypes.LolCollectionsCollectionsChampionMastery[]
	}
	
	export interface LolCollectionsCollectionsWardSkin {
		id: number
		name: string
		description: string
		ownership: LCUTypes.LolCollectionsCollectionsOwnership
		wardImagePath: string
		wardShadowImagePath: string
	}
	
	export interface LolCollectionsCollectionsWardSkinList {
		wardSkinList: number[]
	}
	
	export interface LolCollectionsGameDataChampionMasteries {
		tree: LCUTypes.LolCollectionsGameDataChampionMasteryTree
	}
	
	export interface LolCollectionsGameDataChampionMasteryGroup {
		id: number
		rows: LCUTypes.LolCollectionsGameDataChampionMasteryRow[]
	}
	
	export interface LolCollectionsGameDataChampionMasteryRow {
		masteries: number[]
	}
	
	export interface LolCollectionsGameDataChampionMasteryTree {
		groups: LCUTypes.LolCollectionsGameDataChampionMasteryGroup[]
	}
	
	export interface LolCollectionsGameDataChampionQuestSkin {
		id: number
		name: string
		splashPath: string
		splashVideoPath: string
	}
	
	export interface LolCollectionsGameDataChampionSkin {
		id: number
		isBase: boolean
		name: string
		questSkinInfo: LCUTypes.LolCollectionsGameDataQuestSkinInfo
		splashPath: string
		splashVideoPath?: string
	}
	
	export interface LolCollectionsGameDataChampionSummary {
		id: number
	}
	
	export interface LolCollectionsGameDataQuestSkinInfo {
		tiers: LCUTypes.LolCollectionsGameDataChampionQuestSkin[]
	}
	
	export interface LolCollectionsGameDataSplashMetadata {
		CalculatedColor: string
		OverrideColor: string
	}
	
	export interface LolCollectionsInventoryItem {
		uuid: string
		itemId: number
		inventoryType: string
		purchaseDate: string
		quantity: number
		ownershipType: LCUTypes.LolCollectionsItemOwnershipType
	}
	
	export interface LolCollectionsInventoryItemDTO {
		itemId: number
		inventoryType: string
		expirationDate: string
		purchaseDate: string
		quantity: number
		ownedQuantity: number
		usedInGameDate: string
		entitlementId: string
		entitlementTypeId: string
		instanceId: string
		instanceTypeId: string
		payload: unknown
		f2p: boolean
		rental: boolean
		loyalty: boolean
		lsb: boolean
		wins: number
	}
	
	export interface LolCollectionsInventoryItemWithPayload {
		uuid: string
		itemId: number
		inventoryType: string
		purchaseDate: string
		quantity: number
		ownershipType: LCUTypes.LolCollectionsItemOwnershipType
		payload: unknown
	}
	
	export type LolCollectionsItemOwnershipType = "F2P" | "LOYALTY" | "RENTED" | "OWNED"
	
	export interface LolCollectionsLcdsDynamicClientConfig {
		DisabledChampions: unknown
	}
	
	export interface LolCollectionsLoginSession {
		state: LCUTypes.LolCollectionsLoginSessionStates
		summonerId: number
		puuid: string
		connected: boolean
	}
	
	export type LolCollectionsLoginSessionStates = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"
	
	export interface LolCollectionsNumberFormattingBehavior {
		digitsForThousandsSeperator: number
		trimTrailingZerosAfterDecimal: boolean
		westernNumberGrouping: boolean
	}
	
	export interface LolCollectionsNumberFormattingData {
		decimalSeperator: string
		thousandSeperator: string
		thousandAbbreviation: string
		tenThousandAbbreviation: string
		millionAbbreviation: string
		oneHundredMillionAbbreviation: string
		billionAbbreviation: string
		trillionAbbreviation: string
		secondAbbreviation: string
		minuteAbbreviation: string
		hourAbbreviation: string
		metersAbbreviation: string
		kilometersAbbreviation: string
		percentageFormat: string
		numberFormattingBehavior: LCUTypes.LolCollectionsNumberFormattingBehavior
	}
	
	export interface LolCollectionsPlayerNotification {
		backgroundUrl: string
		critical: boolean
		data: Record<string, string>
		detailKey: string
		iconUrl: string
		id: number
		source: string
		state: string
		titleKey: string
		type: string
	}
	
	export interface LolCollectionsSummoner {
		summonerId: number
		accountId: number
		summonerLevel: number
		profileIconId: number
		puuid: string
	}
	
	export interface LolCollectionsSummonerProfile {
		backgroundSkinId?: number
	}
	
	export interface LolCollectionsSummonerProfileUpdate {
		key: string
		value: unknown
	}
	
	export interface LolContentTargetingAccountIdAndSummonerId {
		summonerId: number
	}
	
	export interface LolContentTargetingCollectionsChampionMastery {
		playerId: number
		championId: number
		championLevel: number
		championPoints: number
		lastPlayTime: number
	}
	
	export interface LolContentTargetingContentTargetingFilterResponse {
		filters: string[]
	}
	
	export interface LolContentTargetingContentTargetingLocaleResponse {
		locale: string
	}
	
	export interface LolContentTargetingDataModelResponse {
		responseCode: number
		modelData: unknown
	}
	
	export interface LolContentTargetingGameflowGameData {
		gameId: number
		queue: LCUTypes.LolContentTargetingQueue
	}
	
	export type LolContentTargetingGameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"
	
	export interface LolContentTargetingGameflowSession {
		phase: LCUTypes.LolContentTargetingGameflowPhase
		gameData: LCUTypes.LolContentTargetingGameflowGameData
	}
	
	export interface LolContentTargetingGeoInfo {
		country: string
		city: string
		region: string
	}
	
	export interface LolContentTargetingGeoInfoResponse {
		success: boolean
		geoInfo: LCUTypes.LolContentTargetingGeoInfo
		errorMessage: string
		isLatest: boolean
		isInitialized: boolean
	}
	
	export interface LolContentTargetingLoginSession {
		state: LCUTypes.LolContentTargetingLoginSessionState
		summonerId: number
		puuid: string
		idToken: string
	}
	
	export type LolContentTargetingLoginSessionState = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"
	
	export interface LolContentTargetingMission {
		id: string
		status: string
		completedDate: number
		internalName: string
	}
	
	export interface LolContentTargetingPlatformConfig {
		Enabled: boolean
		Mapping: string
		LevelFilterEnabled: boolean
		RankedFilterEnabled: boolean
		LocationFiltersEnabled: boolean
		RankFilterEnabled: boolean
		ABTestFilterEnabled: boolean
		ABTestFilterGroups: number
		ABTestFilterSalt: number
		EntitlementsFilterEnabled: boolean
		MasteryFilterEnabled: boolean
		MasteryFilterLevelThreshold: number
		MasteryFilterDaysSinceLastPlayed: number
		MasteryFilterChampionLimit: number
		MainFilterEnabled: boolean
		EntitlementsPrefix: string
		TargetingAttributeStorageEnabled: boolean
		TargetingAttributeStorageBaseUri: string
		MissionsFilterEnabled: boolean
		SummonerIconFilterEnabled: boolean
		AsynchronousEventHandlerSetupDelayInSeconds: number
		TasIngestionDelayInSeconds: number
	}
	
	export interface LolContentTargetingQueue {
		id: number
		mapId: number
		gameMode: string
		category: LCUTypes.LolContentTargetingQueueGameCategory
	}
	
	export type LolContentTargetingQueueGameCategory = "Alpha" | "VersusAi" | "PvP" | "Custom" | "None"
	
	export type LolContentTargetingRankedDivision = "V" | "IV" | "III" | "II" | "I" | "NA"
	
	export type LolContentTargetingRankedQueue = "RANKED_TFT_DOUBLE_UP" | "RANKED_TFT_PAIRS" | "RANKED_TFT_TURBO" | "RANKED_TFT" | "RANKED_FLEX_TT" | "RANKED_FLEX_SR" | "RANKED_SOLO_5x5" | "NONE"
	
	export interface LolContentTargetingRankedQueueStats {
		queueType: LCUTypes.LolContentTargetingRankedQueue
		tier: string
		division: LCUTypes.LolContentTargetingRankedDivision
		isProvisional: boolean
	}
	
	export interface LolContentTargetingRankedStats {
		queues: LCUTypes.LolContentTargetingRankedQueueStats[]
		highestRankedEntry?: LCUTypes.LolContentTargetingRankedQueueStats
	}
	
	export interface LolContentTargetingRegionLocale {
		locale: string
	}
	
	export interface LolContentTargetingSettingsResource {
		data: unknown
	}
	
	export interface LolContentTargetingSummoner {
		summonerLevel: number
		profileIconId: number
	}
	
	export interface LolContentTargetingTargetingAttributes {
		result: Record<string, unknown>
	}
	
	export interface LolContentTargetingToken {
		entitlements: string[]
	}
	
	export interface LolCosmeticsAccountSettingsCategoryDataResource {
		typeToLastOpenedDate: Record<string, number>
	}
	
	export interface LolCosmeticsCapOffer {
		id: string
		typeId: string
		label: string
		productId: string
		merchantId: string
		payload: unknown[]
		active: boolean
		startDate: string
		createdDate: string
	}
	
	export interface LolCosmeticsCompanionsGroupViewModel {
		groupName: string
		groupId: number
		numOwned: number
		numAvailable: number
		items: LCUTypes.LolCosmeticsCosmeticsCompanionViewModel[]
	}
	
	export interface LolCosmeticsCompanionsGroupedViewModel {
		selectedLoadoutItem: LCUTypes.LolCosmeticsCosmeticsCompanionViewModel
		defaultItemId: number
		groups: LCUTypes.LolCosmeticsCompanionsGroupViewModel[]
	}
	
	export interface LolCosmeticsCosmeticSettingsResource {
		data?: LCUTypes.LolCosmeticsAccountSettingsCategoryDataResource
		schemaVersion: number
	}
	
	export interface LolCosmeticsCosmeticsCompanion {
		contentId: string
		itemId: number
		name: string
		description: string
		loadoutsIcon: string
		owned: boolean
		selected: boolean
		loyalty: boolean
		f2p: boolean
		rarityValue: number
		purchaseDate: string
		species: string
		groupId: number
		color: string
		level: number
		upgrades: string[]
	}
	
	export interface LolCosmeticsCosmeticsCompanionViewModel {
		contentId: string
		itemId: number
		name: string
		description: string
		loadoutsIcon: string
		owned: boolean
		selected: boolean
		loyalty: boolean
		f2p: boolean
		rarityValue: number
		purchaseDate: string
		isRecentItem: boolean
		species: string
		groupId: number
		color: string
		level: number
		upgrades: LCUTypes.LolCosmeticsCosmeticsCompanionViewModel[]
		offerData?: LCUTypes.LolCosmeticsCapOffer
		starShardsPrice: LCUTypes.LolCosmeticsCosmeticsOfferPrice
	}
	
	export interface LolCosmeticsCosmeticsOfferPrice {
		offerId: string
		price: number
	}
	
	export interface LolCosmeticsCosmeticsTFTDamageSkin {
		contentId: string
		itemId: number
		name: string
		description: string
		loadoutsIcon: string
		owned: boolean
		selected: boolean
		loyalty: boolean
		f2p: boolean
		rarityValue: number
		purchaseDate: string
		level: number
		groupId: number
		groupName: string
		upgrades: string[]
	}
	
	export interface LolCosmeticsCosmeticsTFTDamageSkinViewModel {
		contentId: string
		itemId: number
		name: string
		description: string
		loadoutsIcon: string
		owned: boolean
		selected: boolean
		loyalty: boolean
		f2p: boolean
		rarityValue: number
		purchaseDate: string
		isRecentItem: boolean
		level: number
		groupId: number
		groupName: string
		upgrades: LCUTypes.LolCosmeticsCosmeticsTFTDamageSkinViewModel[]
	}
	
	export interface LolCosmeticsCosmeticsTFTMapSkin {
		contentId: string
		itemId: number
		name: string
		description: string
		loadoutsIcon: string
		owned: boolean
		selected: boolean
		loyalty: boolean
		f2p: boolean
		rarityValue: number
		purchaseDate: string
		groupId: number
		groupName: string
	}
	
	export interface LolCosmeticsCosmeticsTFTMapSkinViewModel {
		contentId: string
		itemId: number
		name: string
		description: string
		loadoutsIcon: string
		owned: boolean
		selected: boolean
		loyalty: boolean
		f2p: boolean
		rarityValue: number
		purchaseDate: string
		isRecentItem: boolean
		groupId: number
		groupName: string
	}
	
	export interface LolCosmeticsCosmeticsTFTPlaybook {
		contentId: string
		itemId: number
		name: string
		description: string
		loadoutsIcon: string
		owned: boolean
		selected: boolean
		loyalty: boolean
		f2p: boolean
		rarityValue: number
		purchaseDate: string
		iconPath: string
		iconPathSmall: string
		splashPath: string
		earlyAugments: LCUTypes.LolCosmeticsCosmeticsTFTPlaybookAugment[]
		midAugments: LCUTypes.LolCosmeticsCosmeticsTFTPlaybookAugment[]
		lateAugments: LCUTypes.LolCosmeticsCosmeticsTFTPlaybookAugment[]
		isDisabledInDoubleUp: boolean
	}
	
	export interface LolCosmeticsCosmeticsTFTPlaybookAugment {
		name: string
		description: string
		iconPath: string
		effectAmounts: LCUTypes.LolCosmeticsCosmeticsTFTPlaybookAugmentEffectAmount[]
	}
	
	export interface LolCosmeticsCosmeticsTFTPlaybookAugmentEffectAmount {
		name: string
		value: number
		formatString: string
	}
	
	export interface LolCosmeticsCosmeticsTFTPlaybookViewModel {
		contentId: string
		itemId: number
		name: string
		description: string
		loadoutsIcon: string
		owned: boolean
		selected: boolean
		loyalty: boolean
		f2p: boolean
		rarityValue: number
		purchaseDate: string
		isRecentItem: boolean
		iconPath: string
		iconPathSmall: string
		splashPath: string
		earlyAugments: LCUTypes.LolCosmeticsCosmeticsTFTPlaybookAugment[]
		midAugments: LCUTypes.LolCosmeticsCosmeticsTFTPlaybookAugment[]
		lateAugments: LCUTypes.LolCosmeticsCosmeticsTFTPlaybookAugment[]
		isDisabledInDoubleUp: boolean
	}
	
	export interface LolCosmeticsGameDataCompanion {
		contentId: string
		itemId: number
		name: string
		loadoutsIcon: string
		description: string
		speciesName: string
		speciesId: number
		colorName: string
		level: number
		rarityValue: number
		upgrades: string[]
		TFTOnly: boolean
	}
	
	export interface LolCosmeticsGameDataTFTCosmeticsDefaults {
		playbook: unknown
	}
	
	export interface LolCosmeticsGameDataTFTDamageSkin {
		contentId: string
		itemId: number
		name: string
		description: string
		loadoutsIcon: string
		groupId: number
		groupName: string
		rarityValue: number
		level: number
	}
	
	export interface LolCosmeticsGameDataTFTMapSkin {
		contentId: string
		itemId: number
		name: string
		description: string
		loadoutsIcon: string
		groupId: number
		groupName: string
		rarityValue: number
	}
	
	export interface LolCosmeticsGameDataTFTPlaybook {
		contentId: string
		itemId: number
		name: string
		description: string
		translatedName: string
		translatedDescription: string
		loadoutsIcon: string
		iconPath: string
		iconPathSmall: string
		splashPath: string
		enabled: boolean
		earlyAugments: LCUTypes.LolCosmeticsCosmeticsTFTPlaybookAugment[]
		midAugments: LCUTypes.LolCosmeticsCosmeticsTFTPlaybookAugment[]
		lateAugments: LCUTypes.LolCosmeticsCosmeticsTFTPlaybookAugment[]
		isDisabledInDoubleUp: boolean
	}
	
	export interface LolCosmeticsLoadout {
		id: string
		name: string
		scope: string
		itemId: number
		loadout: Record<string, LCUTypes.LolCosmeticsLoadoutItem>
	}
	
	export interface LolCosmeticsLoadoutItem {
		inventoryType: string
		contentId: string
		itemId: number
	}
	
	export interface LolCosmeticsLoadoutUpdateDto {
		loadout: Record<string, LCUTypes.LolCosmeticsLoadoutItem>
	}
	
	export interface LolCosmeticsTFTDamageSkinGroupViewModel {
		groupName: string
		groupId: number
		numOwned: number
		numAvailable: number
		items: LCUTypes.LolCosmeticsCosmeticsTFTDamageSkinViewModel[]
	}
	
	export interface LolCosmeticsTFTDamageSkinGroupedViewModel {
		selectedLoadoutItem: LCUTypes.LolCosmeticsCosmeticsTFTDamageSkinViewModel
		defaultItemId: number
		groups: LCUTypes.LolCosmeticsTFTDamageSkinGroupViewModel[]
	}
	
	export interface LolCosmeticsTFTMapSkinGroupViewModel {
		groupName: string
		groupId: number
		numOwned: number
		numAvailable: number
		items: LCUTypes.LolCosmeticsCosmeticsTFTMapSkinViewModel[]
	}
	
	export interface LolCosmeticsTFTMapSkinGroupedViewModel {
		selectedLoadoutItem: LCUTypes.LolCosmeticsCosmeticsTFTMapSkinViewModel
		defaultItemId: number
		groups: LCUTypes.LolCosmeticsTFTMapSkinGroupViewModel[]
	}
	
	export interface LolCosmeticsTFTPlaybookGroupViewModel {
		groupName: string
		groupId: number
		numOwned: number
		numAvailable: number
		items: LCUTypes.LolCosmeticsCosmeticsTFTPlaybookViewModel[]
	}
	
	export interface LolCosmeticsTFTPlaybookGroupedViewModel {
		selectedLoadoutItem: LCUTypes.LolCosmeticsCosmeticsTFTPlaybookViewModel
		defaultItemId: number
		groups: LCUTypes.LolCosmeticsTFTPlaybookGroupViewModel[]
	}
	
	export interface LolCosmeticsTFTSettingsDataResource {
		iconOverride: string
	}
	
	export interface LolCosmeticsTFTSettingsResource {
		data?: LCUTypes.LolCosmeticsTFTSettingsDataResource
		schemaVersion: number
	}
	
	export interface LolCosmeticsUserResource {
		summonerId: number
		lol: Record<string, string>
	}
	
	export interface LolDiscordRpGameDataChampionSummary {
		id: number
		name: string
		alias: string
	}
	
	export interface LolDiscordRpPartyPresenceData {
		partyId: string
		queueId: number
		summoners: number[]
		maxPlayers: number
	}
	
	export interface LolDropsCapDropsDropTablePityInfo {
		pityLimit: number
		chaseContentIds: string[]
	}
	
	export interface LolDropsCapDropsDropTableWithPityDTO {
		id: string
		sourceId: string
		productId: string
		startDate: string
		endDate: string
		currencyId: string
		rollOffer: string
		pityInfo: LCUTypes.LolDropsCapDropsDropTablePityInfo
	}
	
	export interface LolDropsCapDropsOddsListEntryDTO {
		contentId: string
		nodeId: string
		odds: number
	}
	
	export interface LolDropsCapDropsOddsTreeNodeDTO {
		nodeId: string
		odds: number
		children: LCUTypes.LolDropsCapDropsOddsTreeNodeDTO[]
	}
	
	export interface LolDropsCapDropsPityCountDTO {
		dropTableId: string
		count: number
	}
	
	export interface LolEmailVerificationAccessToken {
		token: string
		expiry: number
	}
	
	export interface LolEmailVerificationEmailUpdate {
		email: string
		password: string
	}
	
	export interface LolEmailVerificationEmailVerificationSession {
		email: string
		emailVerified: boolean
		fatalError: boolean
	}
	
	export interface LolEmailVerificationRegionLocale {
		region: string
		locale: string
		webRegion: string
		webLanguage: string
	}
	
	export interface LolEmailVerificationRemoteEmailVerificationSession {
		email: string
		emailVerified: boolean
	}
	
	export interface LolEmailVerificationValidationStatus {
		emailStatus: string
	}
	
	export interface LolEndOfGameChampionMasteryGrade {
		puuid: string
		championId: number
		grade: string
	}
	
	export interface LolEndOfGameChampionMasteryMini {
		puuid: string
		championId: number
		championLevel: number
	}
	
	export interface LolEndOfGameChampionMasteryUpdate {
		id: string
		gameId: number
		puuid: string
		championId: number
		hasLeveledUp: boolean
		level: number
		pointsBeforeGame: number
		pointsGained: number
		pointsGainedIndividualContribution: number
		bonusPointsGained: number
		pointsSinceLastLevelBeforeGame: number
		pointsUntilNextLevelBeforeGame: number
		pointsUntilNextLevelAfterGame: number
		tokensEarned: number
		tokenEarnedAfterGame: boolean
		grade: string
		score: number
		levelUpList: LCUTypes.LolEndOfGameChampionMasteryMini[]
		memberGrades: LCUTypes.LolEndOfGameChampionMasteryGrade[]
	}
	
	export interface LolEndOfGameEndOfGamePlayer {
		stats: unknown
		items: number[]
		puuid: string
		botPlayer: boolean
		championId: number
		gameId: number
		leaver: boolean
		leaves: number
		level: number
		losses: number
		profileIconId: number
		spell1Id: number
		spell2Id: number
		summonerName: string
		teamId: number
		wins: number
		summonerId: number
		selectedPosition: string
		detectedTeamPosition: string
		skinSplashPath: string
		skinTilePath: string
		skinEmblemPaths: string[]
		championName: string
		championSquarePortraitPath: string
		isLocalPlayer: boolean
	}
	
	export interface LolEndOfGameEndOfGamePoints {
		pointChangeFromChampionsOwned: number
		pointChangeFromGameplay: number
		pointsUsed: number
		previousPoints: number
		pointsUntilNextReroll: number
		rerollCount: number
		totalPoints: number
	}
	
	export interface LolEndOfGameEndOfGameStats {
		difficulty: string
		gameId: number
		gameLength: number
		gameMode: string
		gameMutators: string[]
		gameType: string
		invalid: boolean
		queueType: string
		ranked: boolean
		reportGameId: number
		multiUserChatId: string
		multiUserChatPassword: string
		mucJwtDto: LCUTypes.LolEndOfGameMucJwtDto
		teams: LCUTypes.LolEndOfGameEndOfGameTeam[]
		localPlayer: LCUTypes.LolEndOfGameEndOfGamePlayer
		myTeamStatus: string
		leveledUp: boolean
		newSpells: number[]
		previousLevel: number
		rpEarned: number
		basePoints: number
		battleBoostIpEarned: number
		boostIpEarned: number
		firstWinBonus: number
		ipEarned: number
		ipTotal: number
		boostXpEarned: number
		experienceEarned: number
		experienceTotal: number
		globalBoostXpEarned: number
		loyaltyBoostXpEarned: number
		xbgpBoostXpEarned: number
		missionsXpEarned: number
		previousXpTotal: number
		nextLevelXp: number
		currentLevel: number
		preLevelUpExperienceTotal: number
		preLevelUpNextLevelXp: number
		timeUntilNextFirstWinBonus: number
		causedEarlySurrender: boolean
		earlySurrenderAccomplice: boolean
		teamEarlySurrendered: boolean
		gameEndedInEarlySurrender: boolean
		rerollData: LCUTypes.LolEndOfGameEndOfGamePoints
		teamBoost?: LCUTypes.LolEndOfGameEndOfGameTeamBoost
	}
	
	export interface LolEndOfGameEndOfGameTeam {
		stats: unknown
		players: LCUTypes.LolEndOfGameEndOfGamePlayer[]
		memberStatusString: string
		name: string
		tag: string
		fullId: string
		teamId: number
		isBottomTeam: boolean
		isPlayerTeam: boolean
		isWinningTeam: boolean
	}
	
	export interface LolEndOfGameEndOfGameTeamBoost {
		summonerName: string
		skinUnlockMode: string
		price: number
		ipReward: number
		ipRewardForPurchaser: number
		availableSkins: number[]
		unlocked: boolean
	}
	
	export interface LolEndOfGameGameClientEndOfGame {
		gameClientEOG: LCUTypes.LolEndOfGameGameClientEndOfGameStats
	}
	
	export interface LolEndOfGameGameClientEndOfGameStats {
		gameId: number
		gameMode: string
		statsBlock: unknown
		queueId: number
		queueType: string
		isRanked: boolean
	}
	
	export interface LolEndOfGameGameDataChampion {
		id: number
		skins: LCUTypes.LolEndOfGameGameDataChampionSkin[]
	}
	
	export interface LolEndOfGameGameDataChampionQuestSkin {
		id: number
		splashPath: string
		tilePath: string
	}
	
	export interface LolEndOfGameGameDataChampionSkin {
		id: number
		splashPath: string
		tilePath: string
		chromas: LCUTypes.LolEndOfGameGameDataSkinChroma[]
		questSkinInfo: LCUTypes.LolEndOfGameGameDataQuestSkinInfo
	}
	
	export interface LolEndOfGameGameDataChampionSummary {
		id: number
		alias: string
		name: string
		squarePortraitPath: string
	}
	
	export interface LolEndOfGameGameDataCompanion {
		contentId: string
		loadoutsIcon: string
		speciesName: string
		colorName: string
	}
	
	export interface LolEndOfGameGameDataQuestSkinInfo {
		tiers: LCUTypes.LolEndOfGameGameDataChampionQuestSkin[]
	}
	
	export interface LolEndOfGameGameDataSkinChroma {
		id: number
	}
	
	export interface LolEndOfGameGameDataTFTChampion {
		name: string
		character_record: LCUTypes.LolEndOfGameGameDataTFTCharacterRecord
	}
	
	export interface LolEndOfGameGameDataTFTCharacterRecord {
		path: string
		character_id: string
		rarity: number
		display_name: string
		squareIconPath: string
		traits: LCUTypes.LolEndOfGameGameDataTftTrait[]
	}
	
	export interface LolEndOfGameGameDataTftItem {
		name: string
		id: number
		loadoutsIcon: string
		nameId: string
	}
	
	export interface LolEndOfGameGameDataTftPlaybook {
		itemId: number
		name: string
		translatedName: string
		iconPathSmall: string
		enabled: boolean
	}
	
	export interface LolEndOfGameGameDataTftRegionPortal {
		nameId: string
		iconPath: string
		displayName: string
		description: string
	}
	
	export interface LolEndOfGameGameDataTftTrait {
		id: string
		name: string
	}
	
	export interface LolEndOfGameGameflowAvailability {
		state: string
	}
	
	export interface LolEndOfGameGameflowClient {
		observerServerIp: string
		observerServerPort: number
		running: boolean
	}
	
	export interface LolEndOfGameGameflowGameData {
		gameId: number
		queue: LCUTypes.LolEndOfGameQueue
	}
	
	export type LolEndOfGameGameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"
	
	export interface LolEndOfGameGameflowSession {
		phase: LCUTypes.LolEndOfGameGameflowPhase
		gameClient: LCUTypes.LolEndOfGameGameflowClient
		gameData: LCUTypes.LolEndOfGameGameflowGameData
	}
	
	export interface LolEndOfGameLobbyInvitation {
		state: string
	}
	
	export interface LolEndOfGameLoginDataPacket {
		platformId: string
		simpleMessages: LCUTypes.LolEndOfGameSimpleMessage[]
	}
	
	export interface LolEndOfGameLoginSession {
		state: LCUTypes.LolEndOfGameLoginSessionStates
		summonerId: number
		accountId: number
	}
	
	export type LolEndOfGameLoginSessionStates = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"
	
	export interface LolEndOfGameMucJwtDto {
		jwt: string
		channelClaim: string
		domain: string
		targetRegion: string
	}
	
	export interface LolEndOfGamePlayerReport {
		offenderPuuid: string
		offenderSummonerId: number
		gameId: number
		categories: string[]
		comment: string
	}
	
	export interface LolEndOfGameQueue {
		id: number
		type: string
		isRanked: boolean
	}
	
	export interface LolEndOfGameRerollDataBagForClientV1 {
		pointsGainedLastGame: number
		pointsUntilNextReroll: number
		rerollCount: number
		totalPoints: number
		maximumRerolls: number
		pointCostOfReroll: number
	}
	
	export interface LolEndOfGameSimpleMessage {
		accountId: number
		msgId: string
		type: string
		params: string[]
	}
	
	export interface LolEndOfGameSummoner {
		summonerId: number
		summonerLevel: number
		xpSinceLastLevel: number
		xpUntilNextLevel: number
		puuid: string
	}
	
	export interface LolEndOfGameTFTEndOfGameCompanionViewModel {
		speciesName: string
		colorName: string
		icon: string
	}
	
	export interface LolEndOfGameTFTEndOfGameCustomAugmentContainerViewModel {
		nameId: string
		iconPath: string
		displayName: string
		description: string
	}
	
	export interface LolEndOfGameTFTEndOfGameItemViewModel {
		name: string
		icon: string
		id: number
		nameId: string
	}
	
	export interface LolEndOfGameTFTEndOfGamePieceViewModel {
		name: string
		icon: string
		level: number
		price: number
		items: LCUTypes.LolEndOfGameTFTEndOfGameItemViewModel[]
		traits: LCUTypes.LolEndOfGameTFTEndOfGameTraitViewModel[]
	}
	
	export interface LolEndOfGameTFTEndOfGamePlaybookViewModel {
		itemId: number
		name: string
		iconSmall: string
	}
	
	export interface LolEndOfGameTFTEndOfGamePlayerViewModel {
		summonerId: number
		summonerName: string
		riotIdGameName: string
		riotIdTagLine: string
		iconId: number
		puuid: string
		ffaStanding: number
		health: number
		rank: number
		isLocalPlayer: boolean
		isInteractable: boolean
		partnerGroupId: number
		boardPieces: LCUTypes.LolEndOfGameTFTEndOfGamePieceViewModel[]
		augments: LCUTypes.LolEndOfGameTFTEndOfGameItemViewModel[]
		companion: LCUTypes.LolEndOfGameTFTEndOfGameCompanionViewModel
		playbook: LCUTypes.LolEndOfGameTFTEndOfGamePlaybookViewModel
		customAugmentContainer: LCUTypes.LolEndOfGameTFTEndOfGameCustomAugmentContainerViewModel
	}
	
	export interface LolEndOfGameTFTEndOfGameTraitViewModel {
		id: string
		name: string
	}
	
	export interface LolEndOfGameTFTEndOfGameViewModel {
		players: LCUTypes.LolEndOfGameTFTEndOfGamePlayerViewModel[]
		localPlayer?: LCUTypes.LolEndOfGameTFTEndOfGamePlayerViewModel
		gameLength: number
		gameId: number
		queueId: number
		queueType: string
		isRanked: boolean
	}
	
	export interface LolEsportStreamNotificationsESportStreamNotificationsConfig {
		notificationsEnabled: boolean
		notificationsServiceEndpoint: string
		notificationsStreamURL: string
		notificationsStreamGroupSlug: string
		notificationsAssetMagickURL: string
		useServiceEndpointV2: boolean
		notificationsServiceEndpointV2: string
		notificationsShortPollMinutes: number
		notificationsLongPollMinutes: number
		beappFailureLongPollMinutes: number
	}
	
	export interface LolEsportStreamNotificationsESportsAPI_streamgroups {
		id: number
		slug: string
		title: string
		live: boolean
		content: string
	}
	
	export interface LolEsportStreamNotificationsESportsAPI_streamgroups_root {
		streamgroups: LCUTypes.LolEsportStreamNotificationsESportsAPI_streamgroups[]
		highlanderTournaments: LCUTypes.LolEsportStreamNotificationsEsportsAPI_highlanderTournaments[]
		teams: LCUTypes.LolEsportStreamNotificationsEsportsAPI_teams[]
	}
	
	export interface LolEsportStreamNotificationsESportsLiveStreams {
		liveStreams: LCUTypes.LolEsportStreamNotificationsESportsStreams[]
	}
	
	export interface LolEsportStreamNotificationsESportsStreams {
		title: string
		tournamentDescription: string
		teamAGuid: string
		teamAId: number
		teamBGuid: string
		teamBId: number
		teamAName: string
		teamBName: string
		teamAAcronym: string
		teamBAcronym: string
		teamALogoUrl: string
		teamBLogoUrl: string
	}
	
	export interface LolEsportStreamNotificationsEsportsAPI_highlanderTournaments {
		id: string
		description: string
		title: string
		brackets: Record<string, LCUTypes.LolEsportStreamNotificationsEsportsAPI_highlanderTournaments_brackets>
		rosters: Record<string, LCUTypes.LolEsportStreamNotificationsEsportsAPI_highlanderTournaments_rosters>
	}
	
	export interface LolEsportStreamNotificationsEsportsAPI_highlanderTournaments_brackets {
		id: string
		matches: Record<string, LCUTypes.LolEsportStreamNotificationsEsportsAPI_highlanderTournaments_matches>
	}
	
	export interface LolEsportStreamNotificationsEsportsAPI_highlanderTournaments_matches {
		id: string
		input: LCUTypes.LolEsportStreamNotificationsEsportsAPI_highlanderTournaments_roster[]
	}
	
	export interface LolEsportStreamNotificationsEsportsAPI_highlanderTournaments_roster {
		roster: string
	}
	
	export interface LolEsportStreamNotificationsEsportsAPI_highlanderTournaments_rosters {
		id: string
		name: string
		team: number
	}
	
	export interface LolEsportStreamNotificationsEsportsAPI_teams {
		id: number
		guid: string
		slug: string
		name: string
		logoUrl: string
		acronym: string
	}
	
	export type LolEsportStreamNotificationsGameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"
	
	export interface LolEsportStreamNotificationsGameflowSession {
		phase: LCUTypes.LolEsportStreamNotificationsGameflowPhase
	}
	
	export interface LolEsportStreamNotificationsLiveMatch {
		id: string
		streamGroup: string
		title: string
		tournamentDescription: string
		teams: LCUTypes.LolEsportStreamNotificationsLiveMatchTeam[]
	}
	
	export interface LolEsportStreamNotificationsLiveMatchTeam {
		guid: string
		name: string
		acronym: string
		logoUrl: string
	}
	
	export interface LolEsportStreamNotificationsPlayerNotificationResource {
		backgroundUrl: string
		critical: boolean
		data: Record<string, string>
		detailKey: string
		expires: string
		iconUrl: string
		id: number
		source: string
		state: string
		titleKey: string
		type: string
	}
	
	export interface LolEventShopAccessTokenResource {
		token: string
		scopes: string[]
		expiry: number
	}
	
	export interface LolEventShopBalance {
		currencyType: string
		amount: number
	}
	
	export interface LolEventShopBaseSkinLineDto {
		items: LCUTypes.LolEventShopSkinLineItemDto[]
		localizedName: string
		skinLineDescriptions: LCUTypes.LolEventShopSkinLineDescriptionDto[]
		pricingOptions: LCUTypes.LolEventShopPriceOptionDto[]
		splashPath: string
		uncenteredSplashPath: string
		collectionCardPath: string
		collectionDescription: string
		tilePath: string
	}
	
	export interface LolEventShopBundleOfferUIData {
		details: LCUTypes.LolEventShopBundledItemUIData
		initialPrice: number
		finalPrice: number
		futureBalance: number
		isPurchasable: boolean
		discountPercentage: number
		bundledItems: LCUTypes.LolEventShopBundledItemUIData[]
	}
	
	export interface LolEventShopBundledItemPricingInfo {
		discountPrices: LCUTypes.LolEventShopDiscountPricingInfo[]
		inventoryType: string
		itemId: number
		quantity: number
	}
	
	export interface LolEventShopBundledItemUIData {
		name: string
		itemId: number
		description: string
		inventoryType: string
		subInventoryType: string
		splashImage: string
		owned: boolean
	}
	
	export interface LolEventShopCapOffer {
		id: string
		typeId: string
		label: string
		productId: string
		merchantId: string
		payload: LCUTypes.LolEventShopCapOfferPayloadEntry[]
		active: boolean
		startDate: string
		createdDate: string
	}
	
	export interface LolEventShopCapOfferPayloadEntry {
		itemPriceMap: Record<string, number>
		itemInstanceId: string
		fulfillmentTypeId: string
		inventoryTypeUUID: string
	}
	
	export interface LolEventShopCapOrdersDataDto {
		id: string
		subOrders: LCUTypes.LolEventShopCapOrdersSubOrderDto[]
		purchaser: LCUTypes.LolEventShopCapOrdersTypedIdentifierDto
		location: string
		source: string
	}
	
	export interface LolEventShopCapOrdersMetaDto {
		xid: string
	}
	
	export interface LolEventShopCapOrdersOfferContextDto {
		quantity: number
		paymentOption: string
	}
	
	export interface LolEventShopCapOrdersOfferDto {
		id: string
		productId: string
	}
	
	export interface LolEventShopCapOrdersOrderDto {
		data: LCUTypes.LolEventShopCapOrdersDataDto
		meta: LCUTypes.LolEventShopCapOrdersMetaDto
	}
	
	export interface LolEventShopCapOrdersSubOrderDto {
		recipientId: string
		offerContext: LCUTypes.LolEventShopCapOrdersOfferContextDto
		offer: LCUTypes.LolEventShopCapOrdersOfferDto
	}
	
	export interface LolEventShopCapOrdersTypedIdentifierDto {
		id: string
		typeId: string
	}
	
	export interface LolEventShopCatalogEntry {
		contentId: string
		itemId: number
		offerId: string
		typeId: string
	}
	
	export interface LolEventShopCatalogItem {
		itemId: number
		inventoryType: string
		itemInstanceId?: string
	}
	
	export interface LolEventShopCatalogPluginItem {
		itemId: number
		itemInstanceId: string
		owned: boolean
		inventoryType: string
		subInventoryType: string
		name: string
		subTitle: string
		description: string
		imagePath: string
		purchaseDate: number
		releaseDate: number
		inactiveDate: number
		prices: LCUTypes.LolEventShopCatalogPluginPrice[]
		tags?: string[]
		metadata?: LCUTypes.LolEventShopItemMetadataEntry[]
		questSkinInfo?: LCUTypes.LolEventShopSkinLineInfo
		active: boolean
		ownershipType?: LCUTypes.LolEventShopInventoryOwnership
	}
	
	export interface LolEventShopCatalogPluginItemAssets {
		splashPath: string
		iconPath: string
		tilePath: string
		emblems: LCUTypes.LolEventShopChampionSkinEmblem[]
		colors: string[]
	}
	
	export interface LolEventShopCatalogPluginItemWithDetails {
		item: LCUTypes.LolEventShopCatalogPluginItem
		quantity: number
		requiredItems?: LCUTypes.LolEventShopCatalogPluginItemWithDetails[]
		bundledItems?: LCUTypes.LolEventShopCatalogPluginItemWithDetails[]
		minimumBundlePrices?: LCUTypes.LolEventShopCatalogPluginPrice[]
		bundledDiscountPrices?: LCUTypes.LolEventShopCatalogPluginPrice[]
		assets: LCUTypes.LolEventShopCatalogPluginItemAssets
	}
	
	export interface LolEventShopCatalogPluginPrice {
		currency: string
		cost: number
		costType?: string
		sale?: LCUTypes.LolEventShopCatalogPluginSale
	}
	
	export interface LolEventShopCatalogPluginSale {
		startDate: string
		endDate: string
		discount?: number
		cost: number
	}
	
	export interface LolEventShopCategoryOffersUIData {
		category: LCUTypes.LolEventShopOfferCategory
		categoryIconPath: string
		offers: LCUTypes.LolEventShopOfferUIData[]
	}
	
	export type LolEventShopCelebrationType = "FULLSCREEN" | "TOAST" | "NONE"
	
	export interface LolEventShopCelebrationUIData {
		rewardTrackItems: LCUTypes.LolEventShopRewardTrackItem[]
	}
	
	export interface LolEventShopChampionSkinEmblem {
		name: string
		emblemPath: LCUTypes.LolEventShopChampionSkinEmblemPath
		emblemPosition: LCUTypes.LolEventShopChampionSkinEmblemPosition
	}
	
	export interface LolEventShopChampionSkinEmblemPath {
		large: string
		small: string
	}
	
	export interface LolEventShopChampionSkinEmblemPosition {
		vertical: string
		horizontal: string
	}
	
	export interface LolEventShopClaimSelectUIData {
		selectedRewardTrackItem: LCUTypes.LolEventShopRewardTrackItem
		unclaimedRewardCount: number
	}
	
	export interface LolEventShopClientCacheClearMessageDTO {
		regions: string[]
		clearAll: boolean
		inventoryTypes: string[]
	}
	
	export interface LolEventShopClientConfigContentDrop {
		Patch: string
		ActivationDate: string
	}
	
	export interface LolEventShopContentDrop {
		patch: string
		activationDate: string
		offers: LCUTypes.LolEventShopOffer[]
	}
	
	export interface LolEventShopCounter {
		id: string
		name: string
		groupId: string
		direction: string
		startValue: number
	}
	
	export interface LolEventShopCounterInstance {
		ownerId: string
		productId: string
		groupId: string
		counterId: string
		counterValue: number
	}
	
	export interface LolEventShopCurrencyDTO {
		amount: number
		subCurrencies: Record<string, number>
	}
	
	export interface LolEventShopDiscountPricingInfo {
		cost: number
		costType: string
		currency: string
		discount: number
	}
	
	export interface LolEventShopEndOfGameXp {
		PER_WIN: number
	}
	
	export interface LolEventShopEndOfGameXpNotification {
		xp: LCUTypes.LolEventShopEndOfGameXp
	}
	
	export interface LolEventShopEntityInstance {
		groupId: string
		counters: LCUTypes.LolEventShopCounterInstance[]
		milestones: LCUTypes.LolEventShopMilestoneInstance[]
	}
	
	export interface LolEventShopEventBackgroundUIData {
		backgroundImagePath: string
	}
	
	export interface LolEventShopEventDetailsUIData {
		eventIconPath: string
		eventName: string
		progressEndDate: string
		shopEndDate: string
		helpModalImagePath: string
	}
	
	export interface LolEventShopEventShop {
		eventId: string
		localizedName: string
		backgroundImage: string
		navbarIconImage: string
		headerIconImage: string
		startDate: string
		progressEndDate: string
		shopEndDate: string
		localizedUpsellTitle: string
		localizedUpsellTooltipTitle: string
		localizedUpsellTooltipDescription: string
		localizedUpsellButtonText: string
		upsellBackgroundImageUrl: string
		upsellTooltipBackgroundImageUrl: string
		helpModalImage: string
		eventPassBundlesCatalogEntry: LCUTypes.LolEventShopCatalogEntry[]
		tokenShop: LCUTypes.LolEventShopTokenShop
		rewardTrack: LCUTypes.LolEventShopRewardTrack
	}
	
	export interface LolEventShopEventShopClientConfig {
		Enabled: boolean
		ActiveEventId: string
		StartDate: string
		ProgressEndDate: string
		ShopEndDate: string
		DisabledOfferIds: string[]
		ContentDrops: LCUTypes.LolEventShopClientConfigContentDrop[]
		ActivationSpreadSeconds: number
		FirstActivationThresholdSeconds: number
	}
	
	export interface LolEventShopEventShopError {
		errorMessage: string
		errorId: string
	}
	
	export interface LolEventShopEventShopInfoUIData {
		eventId: string
		eventName: string
		eventIcon: string
		eventTokenImage: string
		currentTokenBalance?: number
		lockedTokenCount?: number
		unclaimedRewardCount?: number
		isPassPurchased: boolean
		isEventActive: boolean
		showPip: boolean
		eventPassBundles: LCUTypes.LolEventShopCatalogEntry[]
		tokenBundles: LCUTypes.LolEventShopCatalogEntry[]
	}
	
	export type LolEventShopExternalCatalogInventoryOwnership = "F2P" | "LOYALTY" | "RENTED" | "OWNED"
	
	export interface LolEventShopExternalCatalogItemCost {
		currency: string
		cost: number
		discount?: number
	}
	
	export interface LolEventShopExternalCatalogItemKey {
		inventoryType: string
		itemId: number
	}
	
	export interface LolEventShopExternalCatalogPluginItem {
		itemId: number
		itemInstanceId: string
		owned: boolean
		ownershipType?: LCUTypes.LolEventShopExternalCatalogInventoryOwnership
		inventoryType: string
		subInventoryType: string
		name: string
		subTitle: string
		description: string
		imagePath: string
		purchaseDate: number
		releaseDate: number
		inactiveDate: number
		prices: LCUTypes.LolEventShopExternalCatalogPluginPrice[]
		tags?: string[]
		active: boolean
		sale?: LCUTypes.LolEventShopExternalCatalogSale
		offerId?: string
	}
	
	export interface LolEventShopExternalCatalogPluginItemAssets {
		splashPath: string
		iconPath: string
		tilePath: string
		colors: string[]
	}
	
	export interface LolEventShopExternalCatalogPluginItemWithDetails {
		item: LCUTypes.LolEventShopExternalCatalogPluginItem
		quantity: number
		requiredItems?: LCUTypes.LolEventShopExternalCatalogPluginItemWithDetails[]
		bundledItems?: LCUTypes.LolEventShopExternalCatalogPluginItemWithDetails[]
		minimumBundlePrices?: LCUTypes.LolEventShopExternalCatalogPluginPrice[]
		bundledDiscountPrices?: LCUTypes.LolEventShopExternalCatalogPluginPrice[]
		metadata: LCUTypes.LolEventShopExternalItemMetadataEntry[]
	}
	
	export interface LolEventShopExternalCatalogPluginPrice {
		currency: string
		cost: number
		costType?: string
	}
	
	export interface LolEventShopExternalCatalogPluginRetailDiscount {
		startDate: string
		endDate: string
		discount?: number
		cost: number
	}
	
	export interface LolEventShopExternalCatalogSale {
		startDate: string
		endDate: string
		prices: LCUTypes.LolEventShopExternalCatalogItemCost[]
	}
	
	export interface LolEventShopExternalItemMetadataEntry {
		type: string
		value: string
	}
	
	export type LolEventShopGrantStatus = "FAILED" | "FULFILLED" | "PENDING_SELECTION" | "PENDING_FULFILLMENT"
	
	export interface LolEventShopGrantorDescription {
		appName: string
		entityId: string
	}
	
	export interface LolEventShopGroup {
		id: string
		productId: string
		name: string
		repeat: LCUTypes.LolEventShopRepeat
		counters: LCUTypes.LolEventShopCounter[]
		milestones: LCUTypes.LolEventShopMilestone[]
	}
	
	export interface LolEventShopInventoryCacheEntry {
		signedInventoryJwt: string
		expirationMS: number
		issuedAtMS: number
		receivedAtMS: number
		valid: boolean
	}
	
	export interface LolEventShopInventoryDTO {
		puuid: string
		accountId: number
		summonerId: number
		items: Record<string, unknown>
		expires: string
		itemsJwt: string
	}
	
	export interface LolEventShopInventoryItem {
		uuid: string
		itemId: number
		inventoryType: string
		purchaseDate: string
		quantity: number
		ownershipType: LCUTypes.LolEventShopItemOwnershipType
		expirationDate: string
		wins: number
	}
	
	export interface LolEventShopInventoryItemDTO {
		itemId: number
		inventoryType: string
		expirationDate: string
		purchaseDate: string
		quantity: number
		ownedQuantity: number
		usedInGameDate: string
		entitlementId: string
		entitlementTypeId: string
		instanceId: string
		instanceTypeId: string
		payload: unknown
		f2p: boolean
		rental: boolean
		loyalty: boolean
		loyaltySources: string[]
		lsb: boolean
		wins: number
	}
	
	export interface LolEventShopInventoryItemWithPayload {
		uuid: string
		itemId: number
		inventoryType: string
		purchaseDate: string
		quantity: number
		ownershipType: LCUTypes.LolEventShopItemOwnershipType
		expirationDate: string
		f2p: boolean
		rental: boolean
		loyalty: boolean
		loyaltySources: string[]
		owned: boolean
		wins: number
		payload: unknown
	}
	
	export interface LolEventShopInventoryNotification {
		id: number
		itemId: number
		inventoryType: string
		type: string
		acknowledged: boolean
	}
	
	export type LolEventShopInventoryOwnership = "F2P" | "LOYALTY" | "RENTED" | "OWNED"
	
	export interface LolEventShopInventoryResponseDTO {
		data: LCUTypes.LolEventShopInventoryDTO
	}
	
	export interface LolEventShopItem {
		itemId: string
		inventoryType: string
		price: number
		quantity: number
	}
	
	export interface LolEventShopItemChoiceDetails {
		item: LCUTypes.LolEventShopCatalogPluginItem
		backgroundImage: string
		contents: LCUTypes.LolEventShopItemDetails[]
		discount: string
		fullPrice: number
		displayType: string
		purchaseOptions: LCUTypes.LolEventShopPurchaseOption[]
	}
	
	export interface LolEventShopItemChoices {
		choices: LCUTypes.LolEventShopItemChoiceDetails[]
		validationErrors: LCUTypes.LolEventShopValidationErrorEntry[]
	}
	
	export interface LolEventShopItemCost {
		currency: string
		cost: number
		discount?: number
	}
	
	export interface LolEventShopItemDefinition {
		itemId: number
		inventoryType: string
		subInventoryType: string
		name: string
		description: string
		subTitle: string
		owned: boolean
		assets: LCUTypes.LolEventShopCatalogPluginItemAssets
		tags: string[]
		metadata: LCUTypes.LolEventShopItemMetadataEntry[]
		bundledItemPrice?: LCUTypes.LolEventShopBundledItemPricingInfo
		loyaltyUnlocked: boolean
	}
	
	export interface LolEventShopItemDetails {
		title: string
		subTitle: string
		description: string
		iconUrl: string
	}
	
	export interface LolEventShopItemKey {
		inventoryType: string
		itemId: number
	}
	
	export interface LolEventShopItemMetadataEntry {
		type: string
		value: string
	}
	
	export interface LolEventShopItemOrderDTO {
		inventoryType: string
		itemId: number
		quantity: number
		rpCost: number
	}
	
	export interface LolEventShopItemOwnership {
		itemKey: LCUTypes.LolEventShopItemKey
		quantity: number
	}
	
	export type LolEventShopItemOwnershipType = "F2P" | "LOYALTY" | "RENTED" | "OWNED"
	
	export interface LolEventShopItemPrice {
		currencyType: string
		price: number
		purchasable: boolean
	}
	
	export interface LolEventShopItemSale {
		startDate: string
		endDate: string
		discount?: number
	}
	
	export interface LolEventShopItemUIData {
		itemId: string
		inventoryType: string
		price: number
		quantity: number
	}
	
	export interface LolEventShopLargeSelectionDisplayUIData {
		selectedRewardTrackItem: LCUTypes.LolEventShopRewardTrackItem
	}
	
	export interface LolEventShopLevelBoostPurchaseUIData {
		offerId: string
		rewardTrackItems: LCUTypes.LolEventShopRewardTrackItem[]
	}
	
	export interface LolEventShopLoginSession {
		puuid?: string
		state: LCUTypes.LolEventShopLoginSessionStates
		summonerId: number
		accountId: number
		idToken: string
	}
	
	export type LolEventShopLoginSessionStates = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"
	
	export interface LolEventShopLoyaltyRewards {
		freeRewardedChampionsCount: number
		championIds: number[]
		freeRewardedSkinsCount: number
		skinIds: number[]
		ipBoost: number
		xpBoost: Record<string, number>
		loyaltyTFTMapSkinCount: number
		loyaltyTFTCompanionCount: number
		loyaltyTFTDamageSkinCount: number
		loyaltySources: Record<string, boolean>
	}
	
	export interface LolEventShopLoyaltyRewardsSimplified {
		freeRewardedChampionsCount: number
		championIds: number[]
		freeRewardedSkinsCount: number
		skinIds: number[]
		ipBoost: number
		xpBoost: number
		loyaltyTFTMapSkinCount: number
		loyaltyTFTCompanionCount: number
		loyaltyTFTDamageSkinCount: number
		loyaltySources: Record<string, boolean>
	}
	
	export type LolEventShopLoyaltyStatus = "DISABLED" | "REVOKE" | "CHANGE" | "EXPIRY" | "REWARDS_GRANT" | "LEGACY"
	
	export interface LolEventShopLoyaltyStatusNotification {
		status: LCUTypes.LolEventShopLoyaltyStatus
		rewards: LCUTypes.LolEventShopLoyaltyRewardsSimplified
		reloadInventory: boolean
	}
	
	export interface LolEventShopMilestone {
		id: string
		name: string
		groupId: string
		counterId: string
		triggerValue: number
		properties: Record<string, string>
	}
	
	export interface LolEventShopMilestoneInstance {
		milestoneId: string
		ownerId: string
		productId: string
		groupId: string
		counterId: string
		triggerValue: number
		repeatSequence: number
		triggered: boolean
	}
	
	export interface LolEventShopNavigationButtonUIData {
		activeEventId: string
		showPip: boolean
		showGlow: boolean
		iconPath: string
	}
	
	export interface LolEventShopOffer {
		id: string
		localizedTitle: string
		localizedDescription: string
		image: string
		promotionType: LCUTypes.LolEventShopOfferPromotionType
		offerCategory: LCUTypes.LolEventShopOfferCategory
		items: LCUTypes.LolEventShopItem[]
	}
	
	export type LolEventShopOfferCategory = "Currencies" | "Tft" | "Loot" | "Borders" | "Skins" | "Chromas" | "Featured"
	
	export type LolEventShopOfferPromotionType = "kFeaturedHighlighted" | "kFeatured" | "kNone"
	
	export type LolEventShopOfferStates = "kPurchasing" | "kUnrevealed" | "kUnavailable" | "kAvailable" | "kOwned"
	
	export interface LolEventShopOfferUIData {
		id: string
		localizedTitle: string
		localizedDescription: string
		image: string
		highlighted: boolean
		offerState: LCUTypes.LolEventShopOfferStates
		price: number
		maxQuantity: number
		items: LCUTypes.LolEventShopItemUIData[]
	}
	
	export interface LolEventShopOrderNotificationResource {
		eventTypeId: string
		eventType: string
		status: string
	}
	
	export type LolEventShopPassOwnershipTypes = "Purchased" | "Unowned"
	
	export interface LolEventShopPlayerNotification {
		critical: boolean
		detailKey: string
		source: string
		state: string
		titleKey: string
		type: string
		iconUrl: string
	}
	
	export interface LolEventShopPlayerSettingsData {
		lastTimeSeen: string
		lastSeenTokenBalance: number
		lastSeenTokenShopOffersVersion: number
	}
	
	export interface LolEventShopPriceDetail {
		itemKey: LCUTypes.LolEventShopItemKey
		price: LCUTypes.LolEventShopItemPrice
	}
	
	export interface LolEventShopPriceOptionDto {
		price: number
		currencyType: string
		currencyPaymentOption?: string
		currencyName?: string
		currencyImagePath?: string
	}
	
	export interface LolEventShopProgressInfoUIData {
		tokenImage: string
		passPurchased: boolean
		eventPassBundlesCatalogEntry: LCUTypes.LolEventShopCatalogEntry[]
	}
	
	export interface LolEventShopPurchasableItem {
		item: LCUTypes.LolEventShopItemDefinition
		dependencies: LCUTypes.LolEventShopItemDefinition[]
		bundledItems: LCUTypes.LolEventShopItemDefinition[]
		sale?: LCUTypes.LolEventShopItemSale
		purchaseOptions: LCUTypes.LolEventShopPurchaseOption[]
		validationErrors: LCUTypes.LolEventShopValidationErrorEntry[]
	}
	
	export interface LolEventShopPurchaseItem {
		itemKey: LCUTypes.LolEventShopItemKey
		quantity: number
		source: string
		purchaseCurrencyInfo: LCUTypes.LolEventShopItemPrice
	}
	
	export type LolEventShopPurchaseOfferOrderStates = "SUCCESS" | "FAIL" | "IN_PROGRESS" | "NOT_STARTED"
	
	export interface LolEventShopPurchaseOfferOrderStatus {
		orderState: LCUTypes.LolEventShopPurchaseOfferOrderStates
		message: string
	}
	
	export interface LolEventShopPurchaseOfferOrderStatuses {
		statuses: Record<string, LCUTypes.LolEventShopPurchaseOfferOrderStatus>
	}
	
	export interface LolEventShopPurchaseOfferRequest {
		offerId: string
		purchaseQuantity: number
	}
	
	export interface LolEventShopPurchaseOfferRequestV3 {
		offerId: string
		currencyType: string
		quantity: number
		price: number
	}
	
	export interface LolEventShopPurchaseOfferResponseV3 {
		legacy: boolean
		orderDto?: LCUTypes.LolEventShopCapOrdersOrderDto
	}
	
	export interface LolEventShopPurchaseOption {
		priceDetails: LCUTypes.LolEventShopPriceDetail[]
	}
	
	export interface LolEventShopPurchaseOrderRequestDTO {
		accountId: number
		items: LCUTypes.LolEventShopItemOrderDTO[]
	}
	
	export interface LolEventShopPurchaseOrderResponseDTO {
		rpBalance: number
		ipBalance: number
		transactions: LCUTypes.LolEventShopTransactionResponseDTO[]
	}
	
	export interface LolEventShopPurchaseRequest {
		items: LCUTypes.LolEventShopPurchaseItem[]
	}
	
	export interface LolEventShopPurchaseResponse {
		items: LCUTypes.LolEventShopPurchaseItem[]
		transactions: LCUTypes.LolEventShopTransaction[]
		useRMSConfirmation: boolean
	}
	
	export interface LolEventShopPurchaseWidgetConfig {
		enabled: boolean
		nonRefundableDisclaimerEnabled: boolean
		alwaysShowPurchaseDisclaimer: boolean
	}
	
	export interface LolEventShopRMSPayload {
		productId: string
		affinities: string[]
	}
	
	export interface LolEventShopRegionLocale {
		region: string
		locale: string
	}
	
	export interface LolEventShopRepeat {
		count: number
		scope: number
		multiplier: number
	}
	
	export interface LolEventShopRequestDTO_SelectionRequestDTO {
		data: LCUTypes.LolEventShopSelectionRequestDTO
		metadata: LCUTypes.LolEventShopRequestMetadataDTO
	}
	
	export interface LolEventShopRequestDTO_vector_SelectionRequestDTO {
		data: LCUTypes.LolEventShopSelectionRequestDTO[]
		metadata: LCUTypes.LolEventShopRequestMetadataDTO
	}
	
	export interface LolEventShopRequestMetadataDTO {
		transactionId?: string
	}
	
	export interface LolEventShopResponseDTO_SvcRewardGrant {
		data: LCUTypes.LolEventShopSvcRewardGrant
		metadata: LCUTypes.LolEventShopResponseMetadataDTO
	}
	
	export interface LolEventShopResponseDTO_map_RewardGroupId_SelectGrantStatus {
		data: Record<string, LCUTypes.LolEventShopSelectGrantStatusResponse>
		metadata: LCUTypes.LolEventShopResponseMetadataDTO
	}
	
	export interface LolEventShopResponseDTO_vector_SvcRewardGrant {
		data: LCUTypes.LolEventShopSvcRewardGrant[]
		metadata: LCUTypes.LolEventShopResponseMetadataDTO
	}
	
	export interface LolEventShopResponseDTO_vector_SvcRewardGroup {
		data: LCUTypes.LolEventShopSvcRewardGroup[]
		metadata: LCUTypes.LolEventShopResponseMetadataDTO
	}
	
	export interface LolEventShopResponseMetadataDTO {
		[key: string | number]: any
	}
	
	export interface LolEventShopReward {
		id: string
		itemId: string
		itemType: string
		quantity: number
		fulfillmentSource: string
		media: Record<string, string>
		localizations: Record<string, string>
	}
	
	export interface LolEventShopRewardChoiceUIData {
		rewardTrackItems: LCUTypes.LolEventShopRewardTrackItem[]
	}
	
	export interface LolEventShopRewardGrant {
		info: LCUTypes.LolEventShopSvcRewardGrant
		rewardGroup: LCUTypes.LolEventShopSvcRewardGroup
	}
	
	export type LolEventShopRewardStatus = "FAILED" | "FULFILLED" | "PENDING"
	
	export type LolEventShopRewardStrategy = "SELECTION" | "RANDOM" | "ALL"
	
	export interface LolEventShopRewardTrack {
		trackConfig: LCUTypes.LolEventShopRewardTrackConfiguration
	}
	
	export interface LolEventShopRewardTrackConfiguration {
		id: string
		premiumEntitlementId: string
	}
	
	export interface LolEventShopRewardTrackItem {
		state: LCUTypes.LolEventShopRewardTrackItemStates
		rewardOptions: LCUTypes.LolEventShopRewardTrackItemOption[]
		rewardTags: LCUTypes.LolEventShopRewardTrackItemTag[]
		progressRequired: number
		threshold: string
	}
	
	export type LolEventShopRewardTrackItemHeaderType = "NONE" | "FREE" | "PREMIUM"
	
	export interface LolEventShopRewardTrackItemOption {
		state: LCUTypes.LolEventShopRewardTrackItemStates
		thumbIconPath: string
		largeDisplayImagePath: string
		selected: boolean
		overrideFooter: string
		headerType: LCUTypes.LolEventShopRewardTrackItemHeaderType
		rewardName: string
		rewardDescription: string
	}
	
	export type LolEventShopRewardTrackItemStates = "Selected" | "Unselected" | "Unlocked" | "Locked"
	
	export type LolEventShopRewardTrackItemTag = "Multiple" | "Choice" | "Instant" | "Free" | "Rare"
	
	export interface LolEventShopRewardTrackProgress {
		level: number
		levelProgress: number
		futureLevelProgress: number
		passProgress: number
		currentLevelXP: number
		totalLevelXP: number
		iteration: number
	}
	
	export interface LolEventShopRewardTrackXP {
		currentLevel: number
		currentLevelXP: number
		totalLevelXP: number
		isBonusPhase: boolean
		iteration: number
	}
	
	export interface LolEventShopRewardsConfig {
		GrantFiltering: boolean
	}
	
	export interface LolEventShopRiotMessagingServiceMessage {
		resource: string
		service: string
		version: string
		timestamp: number
		payload: string
	}
	
	export interface LolEventShopRmsEntitlementPayload {
		itemId: string
		itemTypeId: string
		entitlementTypeId: string
		resourceOperation: string
	}
	
	export interface LolEventShopRmsStoreEntitlementItem {
		inventoryType: string
		itemId: string
	}
	
	export interface LolEventShopRmsStoreEntitlementPayload {
		transactionId: string
		items: LCUTypes.LolEventShopRmsStoreEntitlementItem[]
	}
	
	export interface LolEventShopRmsWalletPayload {
		[key: string | number]: any
	}
	
	export interface LolEventShopRmsXboxSubscriptionChange {
		puuid: string
		subscriptionId: string
		active: string
		identityProvider: string[]
	}
	
	export interface LolEventShopSale {
		startDate: string
		endDate: string
		prices: LCUTypes.LolEventShopItemCost[]
	}
	
	export type LolEventShopSelectGrantStatusResponse = "FAILED" | "SELECTED"
	
	export interface LolEventShopSelectionRequestDTO {
		grantId: string
		rewardGroupId: string
		selections: string[]
	}
	
	export interface LolEventShopSelectionStrategyConfig {
		minSelectionsAllowed: number
		maxSelectionsAllowed: number
	}
	
	export interface LolEventShopSettingsResource {
		data: LCUTypes.LolEventShopPlayerSettingsData
		schemaVersion: number
	}
	
	export interface LolEventShopSimpleInventoryDTO {
		items: Record<string, unknown>
		itemsJwt: string
		expires: string
	}
	
	export interface LolEventShopSimpleInventoryResponseDTO {
		data: LCUTypes.LolEventShopSimpleInventoryDTO
	}
	
	export interface LolEventShopSkinLineDescriptionDto {
		title: string
		description: string
		iconImagePath: string
	}
	
	export interface LolEventShopSkinLineDescriptionInfo {
		title: string
		description: string
		iconPath: string
	}
	
	export interface LolEventShopSkinLineInfo {
		name: string
		descriptionInfo: LCUTypes.LolEventShopSkinLineDescriptionInfo[]
		splashPath: string
		tilePath: string
		collectionCardPath: string
		uncenteredSplashPath: string
		collectionDescription: string
		tiers: LCUTypes.LolEventShopSkinLineTier[]
	}
	
	export interface LolEventShopSkinLineItemDto {
		thumbnailImagePath: string
		largeImagePath?: string
		localizedLongName: string
		localizedShortName: string
		largeVideoPath?: string
	}
	
	export interface LolEventShopSkinLineTier {
		id: number
		name: string
		stage: number
		description?: string
		splashPath: string
		uncenteredSplashPath: string
		tilePath: string
		loadScreenPath: string
		shortName: string
		splashVideoPath?: string
		collectionSplashVideoPath?: string
	}
	
	export interface LolEventShopSummonerIcon {
		itemId: number
	}
	
	export interface LolEventShopSvcRewardGrant {
		id: string
		granteeId: string
		rewardGroupId: string
		dateCreated: string
		status: LCUTypes.LolEventShopGrantStatus
		grantElements: LCUTypes.LolEventShopSvcRewardGrantElement[]
		selectedIds: string[]
		viewed: boolean
		grantorDescription: LCUTypes.LolEventShopGrantorDescription
		messageParameters: Record<string, unknown>
	}
	
	export interface LolEventShopSvcRewardGrantElement {
		elementId: string
		itemId: string
		itemType: string
		fulfillmentSource: string
		status: LCUTypes.LolEventShopRewardStatus
		quantity: number
		media: Record<string, string>
		localizations: Record<string, string>
	}
	
	export interface LolEventShopSvcRewardGroup {
		id: string
		productId: string
		types: string[]
		rewards: LCUTypes.LolEventShopReward[]
		childRewardGroupIds: string[]
		rewardStrategy: LCUTypes.LolEventShopRewardStrategy
		selectionStrategyConfig?: LCUTypes.LolEventShopSelectionStrategyConfig
		active: boolean
		media: Record<string, string>
		localizations: Record<string, string>
		celebrationType: LCUTypes.LolEventShopCelebrationType
	}
	
	export interface LolEventShopTokenShop {
		tokenImage: string
		tokenName: string
		tokenUuid: string
		offers: LCUTypes.LolEventShopOffer[]
		contentDrops: LCUTypes.LolEventShopContentDrop[]
		tokenBundlesCatalogEntry: LCUTypes.LolEventShopCatalogEntry[]
	}
	
	export interface LolEventShopTokenShopUIData {
		tokenName: string
		tokenImage: string
		tokenUuid: string
		offersVersion: number
		tokenBundlesCatalogEntry: LCUTypes.LolEventShopCatalogEntry[]
	}
	
	export interface LolEventShopTokenUpsell {
		id: string
		internalName: string
		title: string
		buttonText: string
		tooltipTitle: string
		tooltipDescription: string
		purchaseUrl: string
		tooltipBackgroundUrl: string
		backgroundUrl: string
		currencyUrl: string
		premiumCurrencyName: string
		dependentInventoryType: string
		dependentInventoryId: number
		currentlyLocked: LCUTypes.LolEventShopTokenUpsellLockedType
		lockedCount: number
		startDate: string
		endDate: string
	}
	
	export type LolEventShopTokenUpsellLockedType = "LOCKED" | "UNLOCKED" | "UNASSIGNED"
	
	export interface LolEventShopTransaction {
		transactionId: string
		itemKey: LCUTypes.LolEventShopItemKey
		itemName: string
		iconUrl: string
	}
	
	export interface LolEventShopTransactionResponseDTO {
		id: string
		inventoryType: string
		itemId: number
	}
	
	export interface LolEventShopUnclaimedRewardsUIData {
		rewardsCount: number
		lockedTokensCount: number
	}
	
	export interface LolEventShopValidateOfferError {
		errorKey: string
		meta: string
	}
	
	export interface LolEventShopValidateOfferRequestV3 {
		offerId: string
	}
	
	export interface LolEventShopValidateOfferResponseV3 {
		validationErrors: LCUTypes.LolEventShopValidateOfferError[]
	}
	
	export interface LolEventShopValidationError {
		errorCode: string
		message: string
		errorDetails: Record<string, string>
		responseItems: string[]
	}
	
	export interface LolEventShopValidationErrorEntry {
		id: string
	}
	
	export interface LolEventShopValidationRequest {
		items: LCUTypes.LolEventShopValidationRequestItem[]
		ownedItems: LCUTypes.LolEventShopItemOwnership[]
	}
	
	export interface LolEventShopValidationRequestItem {
		itemKey: LCUTypes.LolEventShopItemKey
		quantity: number
	}
	
	export interface LolEventShopValidationResponse {
		items: LCUTypes.LolEventShopValidationResponseItem[]
		valid: boolean
	}
	
	export interface LolEventShopValidationResponseItem {
		itemKey: LCUTypes.LolEventShopItemKey
		quantity: number
		validationCurrencyInfo: LCUTypes.LolEventShopItemPrice[]
		sale?: LCUTypes.LolEventShopSale
		name?: string
		description?: string
	}
	
	export interface LolEventShopWallet {
		accountId: number
		balances: LCUTypes.LolEventShopBalance[]
		version: number
	}
	
	export interface LolEventShopWalletCacheEntry {
		signedBalancesJwt: string
		expirationMS: number
		issuedAtMS: number
		receivedAtMS: number
		valid: boolean
	}
	
	export interface LolEventShopWalletDTO {
		puuid: string
		accountId: number
		expires: string
		balances: Record<string, number>
		balancesJwt: string
	}
	
	export interface LolEventShopWalletResponseDTO {
		data: LCUTypes.LolEventShopWalletDTO
	}
	
	export interface LolEventShopXboxSubscriptionStatus {
		active: string
		subscriptionId: string
	}
	
	export interface LolFeaturedModesAccountIdAndSummonerId {
		summonerId: number
	}
	
	export interface LolFeaturedModesCollectionsOwnership {
		loyaltyReward: boolean
		xboxGPReward: boolean
		owned: boolean
	}
	
	export interface LolFeaturedModesCollectionsSummonerIcon {
		iconId: number
		ownership: LCUTypes.LolFeaturedModesCollectionsOwnership
	}
	
	export interface LolFeaturedModesEligibility {
		queueId: number
		eligible: boolean
		restrictions: LCUTypes.LolFeaturedModesEligibilityRestriction[]
	}
	
	export interface LolFeaturedModesEligibilityRestriction {
		restrictionCode: LCUTypes.LolFeaturedModesEligibilityRestrictionCode
		restrictionArgs: Record<string, string>
		expiredTimestamp: number
		summonerIds: number[]
	}
	
	export type LolFeaturedModesEligibilityRestrictionCode = "UnknownRestriction" | "QueueEntryNotEntitledRestriction" | "GameVersionNotSupported" | "GameVersionMissing" | "GameVersionMismatch" | "PrerequisiteQueuesNotPlayedRestriction" | "TeamSizeRestriction" | "TeamHighMMRMaxSizeRestriction" | "PlayerRankedSuspensionRestriction" | "PlayerMinorRestriction" | "PlayerMinLevelRestriction" | "PlayerMaxLevelRestriction" | "PlayerLeaverTaintedWarningRestriction" | "PlayerLeaverQueueLockoutRestriction" | "PlayerLeaverBustedRestriction" | "PlayerInGameRestriction" | "PlayerDodgeRestriction" | "PlayerBingeRestriction" | "TeamMinSizeRestriction" | "TeamMaxSizeRestriction" | "TeamSkillRestriction" | "TeamDivisionRestriction" | "PlayerAvailableChampionRestriction" | "PlayerBannedRestriction" | "PlayerTimedRestriction" | "PlayerLevelRestriction" | "QueueUnsupported" | "QueueDisabled"
	
	export interface LolFeaturedModesFeaturedModesConfig {
		NotificationsEnabled: boolean
		QueueToggleNotificationMinutesThreshold: number
		MaxNotificationSaveDelayMinutes: number
	}
	
	export interface LolFeaturedModesGameflowAvailability {
		isAvailable: boolean
		state: LCUTypes.LolFeaturedModesGameflowAvailabilityState
	}
	
	export type LolFeaturedModesGameflowAvailabilityState = "Configuration" | "InGameFlow" | "PlayerBanned" | "EligibilityInfoMissing" | "Patching" | "Initializing" | "Available"
	
	export type LolFeaturedModesGameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"
	
	export interface LolFeaturedModesGameflowSession {
		phase: LCUTypes.LolFeaturedModesGameflowPhase
	}
	
	export interface LolFeaturedModesLoginSession {
		state: LCUTypes.LolFeaturedModesLoginSessionStates
		summonerId: number
	}
	
	export type LolFeaturedModesLoginSessionStates = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"
	
	export interface LolFeaturedModesMaps {
		gameModeName: string
		isRGM: boolean
		assets: Record<string, string>
	}
	
	export interface LolFeaturedModesPlayerNotificationResource {
		backgroundUrl: string
		critical: boolean
		data: Record<string, string>
		detailKey: string
		expires: string
		iconUrl: string
		id: number
		source: string
		state: string
		titleKey: string
		type: string
	}
	
	export interface LolFeaturedModesQueue {
		id: number
		mapId: number
		name: string
		gameMode: string
		category: LCUTypes.LolFeaturedModesQueueGameCategory
		lastToggledOffTime: number
		lastToggledOnTime: number
		queueAvailability: LCUTypes.LolFeaturedModesQueueAvailability
	}
	
	export type LolFeaturedModesQueueAvailability = "DoesntMeetRequirements" | "PlatformDisabled" | "Available"
	
	export type LolFeaturedModesQueueGameCategory = "Alpha" | "VersusAi" | "PvP" | "Custom" | "None"
	
	export interface LolGameClientChatBuddy {
		gameName: string
		tagLine: string
		puuid: string
		summonerId: number
	}
	
	export interface LolGameClientChatConversationMessageResource {
		type: string
		fromSummonerId: number
		fromId: string
		body: string
		timestamp: string
	}
	
	export interface LolGameClientChatConversationResource {
		id: string
		type: string
		name: string
		gameName: string
		gameTag: string
	}
	
	export interface LolGameClientChatFriendResource {
		summonerId: number
		id: string
		puuid: string
		gameName: string
		gameTag: string
		name: string
	}
	
	export interface LolGameClientChatGameClientChatMessageResource {
		fromSummonerName: string
		body: string
	}
	
	export interface LolGameClientChatMessageToPlayer {
		gameName: string
		tagLine: string
		body: string
	}
	
	export interface LolGameClientChatMutedPlayerInfo {
		puuid: string
		summonerId: number
		obfuscatedPuuid: string
		obfuscatedSummonerId: number
	}
	
	export interface LolGameQueuesLoginDataPacket {
		gameTypeConfigs: LCUTypes.LolGameQueuesQueueGameTypeConfig[]
	}
	
	export interface LolGameQueuesLoginSession {
		state: LCUTypes.LolGameQueuesLoginSessionStates
		summonerId: number
		accountId: number
		connected: boolean
	}
	
	export type LolGameQueuesLoginSessionStates = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"
	
	export interface LolGameQueuesPlatformConfigEnabledMap {
		gameMapId: number
		minPlayers: number
	}
	
	export interface LolGameQueuesQueue {
		id: number
		mapId: number
		name: string
		shortName: string
		description: string
		detailedDescription: string
		type: string
		gameMode: string
		assetMutator: string
		maxTierForPremadeSize2: string
		maxDivisionForPremadeSize2: string
		category: LCUTypes.LolGameQueuesQueueGameCategory
		gameTypeConfig: LCUTypes.LolGameQueuesQueueGameTypeConfig
		numPlayersPerTeam: number
		minimumParticipantListSize: number
		maximumParticipantListSize: number
		minLevel: number
		isRanked: boolean
		areFreeChampionsAllowed: boolean
		isTeamBuilderManaged: boolean
		queueAvailability: LCUTypes.LolGameQueuesQueueAvailability
		queueRewards: LCUTypes.LolGameQueuesQueueReward
		spectatorEnabled: boolean
		championsRequiredToPlay: number
		allowablePremadeSizes: number[]
		showPositionSelector: boolean
		showQuickPlaySlotSelection: boolean
		lastToggledOffTime: number
		lastToggledOnTime: number
		removalFromGameAllowed: boolean
		removalFromGameDelayMinutes: number
	}
	
	export type LolGameQueuesQueueAvailability = "DoesntMeetRequirements" | "PlatformDisabled" | "Available"
	
	export interface LolGameQueuesQueueCustomGame {
		subcategories: LCUTypes.LolGameQueuesQueueCustomGameSubcategory[]
		queueAvailability: LCUTypes.LolGameQueuesQueueAvailability
		spectatorPolicies: LCUTypes.LolGameQueuesQueueCustomGameSpectatorPolicy[]
		spectatorSlotLimit: number
		gameServerRegions?: string[]
	}
	
	export type LolGameQueuesQueueCustomGameSpectatorPolicy = "AllAllowed" | "FriendsAllowed" | "LobbyAllowed" | "NotAllowed"
	
	export interface LolGameQueuesQueueCustomGameSubcategory {
		mapId: number
		gameMode: string
		mutators: LCUTypes.LolGameQueuesQueueGameTypeConfig[]
		numPlayersPerTeam: number
		minimumParticipantListSize: number
		maximumParticipantListSize: number
		maxPlayerCount: number
		minLevel: number
		queueAvailability: LCUTypes.LolGameQueuesQueueAvailability
		customSpectatorPolicies: LCUTypes.LolGameQueuesQueueCustomGameSpectatorPolicy[]
	}
	
	export type LolGameQueuesQueueGameCategory = "Alpha" | "VersusAi" | "PvP" | "Custom" | "None"
	
	export interface LolGameQueuesQueueGameTypeConfig {
		id: number
		name: string
		maxAllowableBans: number
		allowTrades: boolean
		exclusivePick: boolean
		duplicatePick: boolean
		teamChampionPool: boolean
		crossTeamChampionPool: boolean
		advancedLearningQuests: boolean
		battleBoost: boolean
		deathMatch: boolean
		doNotRemove: boolean
		learningQuests: boolean
		onboardCoopBeginner: boolean
		reroll: boolean
		mainPickTimerDuration: number
		postPickTimerDuration: number
		banTimerDuration: number
		pickMode: string
		banMode: string
		gameModeOverride?: string
		numPlayersPerTeamOverride?: number
	}
	
	export interface LolGameQueuesQueueReward {
		isIpEnabled: boolean
		isXpEnabled: boolean
		isChampionPointsEnabled: boolean
		partySizeIpRewards: number[]
	}
	
	export interface LolGameQueuesQueueTranslation {
		name: string
		shortName: string
		description: string
		detailedDescription: string
	}
	
	export interface LolGameSettingsLoginSession {
		state: LCUTypes.LolGameSettingsLoginSessionStates
		summonerId: number
		accountId: number
	}
	
	export type LolGameSettingsLoginSessionStates = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"
	
	export interface LolGameSettingsgamesettingsgameclient {
		running: boolean
	}
	
	export interface LolGameSettingsgamesettingsgameflowsession {
		gameClient: LCUTypes.LolGameSettingsgamesettingsgameclient
	}
	
	export interface LolGameflowCrashReportingSettings {
		type: string
		enabled: boolean
	}
	
	export interface LolGameflowGameModeSpellList {
		spells: number[]
	}
	
	export interface LolGameflowGameStateUpdate {
		id: number
		gameState: string
		gameType: string
		errorMessage: string
	}
	
	export interface LolGameflowGameflowAvailability {
		isAvailable: boolean
		state: LCUTypes.LolGameflowGameflowAvailabilityState
	}
	
	export type LolGameflowGameflowAvailabilityState = "EligibilityInfoMissing" | "Configuration" | "InGameFlow" | "PlayerBanned" | "Patching" | "Initializing" | "Available"
	
	export interface LolGameflowGameflowGameClient {
		serverIp: string
		serverPort: number
		observerServerIp: string
		observerServerPort: number
		running: boolean
		visible: boolean
	}
	
	export interface LolGameflowGameflowGameData {
		gameId: number
		queue: LCUTypes.LolGameflowQueue
		isCustomGame: boolean
		gameName: string
		password: string
		teamOne: unknown[]
		teamTwo: unknown[]
		playerChampionSelections: unknown[]
		spectatorsAllowed: boolean
	}
	
	export interface LolGameflowGameflowGameDodge {
		state: LCUTypes.LolGameflowGameflowGameDodgeState
		dodgeIds: number[]
		phase: LCUTypes.LolGameflowGameflowPhase
	}
	
	export type LolGameflowGameflowGameDodgeState = "TournamentDodged" | "StrangerDodged" | "PartyDodged" | "Invalid"
	
	export interface LolGameflowGameflowGameMap {
		id: number
		name: string
		mapStringId: string
		gameMode: string
		gameModeName: string
		gameModeShortName: string
		gameMutator: string
		isRGM: boolean
		description: string
		platformId: string
		platformName: string
		assets: unknown
		categorizedContentBundles: unknown
		properties: unknown
		perPositionRequiredSummonerSpells: Record<string, LCUTypes.LolGameflowGameModeSpellList>
		perPositionDisallowedSummonerSpells: Record<string, LCUTypes.LolGameflowGameModeSpellList>
	}
	
	export type LolGameflowGameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"
	
	export interface LolGameflowGameflowProcessInfo {
		pid: number
		rawArgs: string[]
		standalone: boolean
	}
	
	export interface LolGameflowGameflowSession {
		phase: LCUTypes.LolGameflowGameflowPhase
		gameData: LCUTypes.LolGameflowGameflowGameData
		gameClient: LCUTypes.LolGameflowGameflowGameClient
		map: LCUTypes.LolGameflowGameflowGameMap
		gameDodge: LCUTypes.LolGameflowGameflowGameDodge
	}
	
	export type LolGameflowGameflowWatchPhase = "WatchFailedToLaunch" | "WatchInProgress" | "WatchStarted" | "None"
	
	export interface LolGameflowInstallPaths {
		gameInstallRoot: string
		gameExecutablePath: string
	}
	
	export interface LolGameflowLobbyStatus {
		queueId: number
		isCustom: boolean
		isPracticeTool: boolean
		isLeader: boolean
		isSpectator: boolean
		allowedPlayAgain: boolean
		memberSummonerIds: number[]
		invitedSummonerIds: number[]
		lobbyId?: string
		customSpectatorPolicy: LCUTypes.LolGameflowQueueCustomGameSpectatorPolicy
	}
	
	export interface LolGameflowLoginSession {
		state: LCUTypes.LolGameflowLoginSessionStates
		summonerId: number
		accountId: number
		connected: boolean
	}
	
	export type LolGameflowLoginSessionStates = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"
	
	export interface LolGameflowPatcherProductState {
		isCorrupted: boolean
		isStopped: boolean
		isUpToDate: boolean
		isUpdateAvailable: boolean
		action: LCUTypes.LolGameflowPatcherProductStateAction
	}
	
	export type LolGameflowPatcherProductStateAction = "Migrating" | "Repairing" | "Patching" | "CheckingForUpdates" | "Idle"
	
	export interface LolGameflowPlayerStatus {
		currentLobbyStatus?: LCUTypes.LolGameflowLobbyStatus
		lastQueuedLobbyStatus?: LCUTypes.LolGameflowLobbyStatus
		canInviteOthersAtEog: boolean
	}
	
	export interface LolGameflowQueue {
		id: number
		mapId: number
		name: string
		shortName: string
		description: string
		detailedDescription: string
		type: string
		gameMode: string
		assetMutator: string
		category: LCUTypes.LolGameflowQueueGameCategory
		gameTypeConfig: LCUTypes.LolGameflowQueueGameTypeConfig
		numPlayersPerTeam: number
		minimumParticipantListSize: number
		maximumParticipantListSize: number
		minLevel: number
		isRanked: boolean
		areFreeChampionsAllowed: boolean
		isTeamBuilderManaged: boolean
		queueAvailability: LCUTypes.LolGameflowQueueAvailability
		queueRewards: LCUTypes.LolGameflowQueueReward
		spectatorEnabled: boolean
		championsRequiredToPlay: number
		allowablePremadeSizes: number[]
		showPositionSelector: boolean
		lastToggledOffTime: number
		lastToggledOnTime: number
		removalFromGameAllowed: boolean
		removalFromGameDelayMinutes: number
	}
	
	export type LolGameflowQueueAvailability = "DoesntMeetRequirements" | "PlatformDisabled" | "Available"
	
	export type LolGameflowQueueCustomGameSpectatorPolicy = "AllAllowed" | "FriendsAllowed" | "LobbyAllowed" | "NotAllowed"
	
	export type LolGameflowQueueGameCategory = "Alpha" | "VersusAi" | "PvP" | "Custom" | "None"
	
	export interface LolGameflowQueueGameTypeConfig {
		id: number
		name: string
		maxAllowableBans: number
		allowTrades: boolean
		exclusivePick: boolean
		duplicatePick: boolean
		teamChampionPool: boolean
		crossTeamChampionPool: boolean
		advancedLearningQuests: boolean
		battleBoost: boolean
		deathMatch: boolean
		doNotRemove: boolean
		learningQuests: boolean
		onboardCoopBeginner: boolean
		reroll: boolean
		mainPickTimerDuration: number
		postPickTimerDuration: number
		banTimerDuration: number
		pickMode: string
		banMode: string
	}
	
	export interface LolGameflowQueueReward {
		isIpEnabled: boolean
		isXpEnabled: boolean
		isChampionPointsEnabled: boolean
		partySizeIpRewards: number[]
	}
	
	export interface LolGameflowRegionLocale {
		region: string
		locale: string
	}
	
	export interface LolGameflowRegistrationStatus {
		complete: boolean
		errorCodes: string[]
	}
	
	export interface LolGameflowReplaysSettingsData {
		"highlights-folder-path": string
	}
	
	export interface LolGameflowReplaysSettingsResource {
		data: LCUTypes.LolGameflowReplaysSettingsData
	}
	
	export interface LolGameflowSpectateGameInfoResource {
		dropInSpectateGameId: string
		gameQueueType: string
		allowObserveMode: string
		puuid: string
	}
	
	export interface LolGeoinfoGeoInfo {
		country: string
		city: string
		region: string
	}
	
	export interface LolGeoinfoGeoInfoConfig {
		Enabled: boolean
	}
	
	export interface LolGeoinfoGeoInfoResponse {
		success: boolean
		geoInfo: LCUTypes.LolGeoinfoGeoInfo
		errorMessage: string
		isLatest: boolean
		isInitialized: boolean
	}
	
	export interface LolGeoinfoLoginSession {
		state: LCUTypes.LolGeoinfoLoginSessionState
		summonerId: number
		accountId: number
	}
	
	export type LolGeoinfoLoginSessionState = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"
	
	export interface LolGeoinfoWhereAmIRequest {
		ipAddress: string
	}
	
	export interface LolGeoinfoWhereAmIResponse {
		country: string
		city: string
		region: string
	}
	
	export interface LolHeartbeatLoginSession {
		state: LCUTypes.LolHeartbeatLoginSessionStates
		summonerId: number
		accountId: number
	}
	
	export type LolHeartbeatLoginSessionStates = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"
	
	export interface LolHighlightsHighlight {
		id: number
		name: string
		filepath: string
		url: string
		mtimeMsUtc: number
		mtimeIso8601: string
		fileSizeBytes: number
	}
	
	export interface LolHighlightsHighlightsConfig {
		isHighlightsEnabled: boolean
		invalidHighlightNameCharacters: string
	}
	
	export interface LolHighlightsHighlightsDynamicConfig {
		Enabled: boolean
	}
	
	export interface LolHighlightsHighlightsSettingsData {
		"highlights-folder-path": string
	}
	
	export interface LolHighlightsHighlightsSettingsResource {
		data: LCUTypes.LolHighlightsHighlightsSettingsData
	}
	
	export interface LolHoneyfruitAccountClaimStatus {
		linking_status?: LCUTypes.LolHoneyfruitHoneyfruitLinkingServiceResponse
		migration_status?: string
	}
	
	export interface LolHoneyfruitAccountDetails {
		puuid: string
		platformId: string
		summonerName: string
		summonerIconId: number
		summonerLevel: number
	}
	
	export interface LolHoneyfruitGAMHSMatchHistoryData {
		[key: string | number]: any
	}
	
	export interface LolHoneyfruitGAMHSMatchHistoryList {
		games: LCUTypes.LolHoneyfruitGAMHSMatchHistoryData[]
		active_puuid: string
	}
	
	export type LolHoneyfruitGameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"
	
	export interface LolHoneyfruitGarenaRegionLeagueAccount {
		garena_puuid: string
		platform_id: string
		summoner_name: string
		summoner_level: number
		summoner_icon_id: number
		garena_id: number
		is_reserved_summoner_name: boolean
		has_played_a_game: boolean
	}
	
	export type LolHoneyfruitHoneyfruitActionType = "link" | "dismiss_permanently" | "dismiss_temporarily" | "dismiss"
	
	export interface LolHoneyfruitHoneyfruitAuthRedirectMock {
		redirectLatency: number
		redirectStatusCode: number
		redirectURL: string
	}
	
	export interface LolHoneyfruitHoneyfruitLinkingAction {
		action: LCUTypes.LolHoneyfruitHoneyfruitActionType
		target: string
	}
	
	export type LolHoneyfruitHoneyfruitLinkingFailureReason = "UNHANDLED_SERVER_SIDE_ERROR" | "REQUEST_FAILURE" | "NOT_LINKED" | "DISABLED" | "DEGRADED" | "BAD_AUTHORIZATION_PARAM" | "ACCESS_TOKEN_EXPIRED" | "ALREADY_LINKED"
	
	export interface LolHoneyfruitHoneyfruitLinkingNotification {
		linkedAccount: string
	}
	
	export interface LolHoneyfruitHoneyfruitLinkingServiceResponse {
		eligible: boolean
		reason_code: LCUTypes.LolHoneyfruitHoneyfruitLinkingFailureReason
		email: string
		account_details?: LCUTypes.LolHoneyfruitGarenaRegionLeagueAccount
	}
	
	export type LolHoneyfruitHoneyfruitLinkingState = "linked" | "linking_complete" | "in_progress" | "error" | "confirm_snooze" | "prompt" | "snoozed" | "hidden"
	
	export interface LolHoneyfruitHoneyfruitLinkingStatus {
		state: LCUTypes.LolHoneyfruitHoneyfruitLinkingState
		linkedAccount: string
		error: LCUTypes.LolHoneyfruitHoneyfruitLinkingStatusError
	}
	
	export type LolHoneyfruitHoneyfruitLinkingStatusError = "unknown_error" | "service_unavailable" | "not_signed_in" | "no_error"
	
	export type LolHoneyfruitHoneyfruitPublisher = "vng" | "twm" | "tencent" | "riot" | "garena"
	
	export interface LolHoneyfruitHoneyfruitRegionLocale {
		region: string
		locale: string
	}
	
	export interface LolHoneyfruitHoneyfruitSettingCategoryResource {
		schemaVersion: number
		data: LCUTypes.LolHoneyfruitHoneyfruitSettings
	}
	
	export interface LolHoneyfruitHoneyfruitSettingCategoryResourceAccountClaim {
		schemaVersion: number
		data: LCUTypes.LolHoneyfruitHoneyfruitSettingsAccountClaim
	}
	
	export interface LolHoneyfruitHoneyfruitSettings {
		snoozeUntilMS: number
		isSnoozedPermanently: boolean
	}
	
	export interface LolHoneyfruitHoneyfruitSettingsAccountClaim {
		isAccountClaimAutoDismiss: boolean
	}
	
	export interface LolHoneyfruitHoneyfruitVNGPublisherSettings {
		visible: boolean
	}
	
	export interface LolHoneyfruitMatchHistoryGame {
		[key: string | number]: any
	}
	
	export interface LolHoneyfruitMatchHistoryGameList {
		gameIndexBegin: number
		gameIndexEnd: number
		gameBeginDate: string
		gameEndDate: string
		gameCount: number
		games: LCUTypes.LolHoneyfruitMatchHistoryGame[]
	}
	
	export interface LolHoneyfruitMatchHistoryList {
		platformId: string
		accountId: number
		games: LCUTypes.LolHoneyfruitMatchHistoryGameList
	}
	
	export interface LolHoneyfruitSummoner {
		summonerId: number
		accountId: number
		displayName: string
		internalName: string
		profileIconId: number
		summonerLevel: number
		xpSinceLastLevel: number
		xpUntilNextLevel: number
		percentCompleteForNextLevel: number
		puuid: string
		nameChangeFlag: boolean
		unnamed: boolean
	}
	
	export interface LolHoneyfruitV1AuthenticationRedirectInput {
		redirect_uri: string
		language: string
	}
	
	export interface LolHoneyfruitV1AuthenticationResponse {
		type: LCUTypes.LolHoneyfruitV1ResponseType
		success: LCUTypes.LolHoneyfruitV1SuccessResponseDetails
		country: string
		error: string
	}
	
	export type LolHoneyfruitV1ResponseType = "error" | "success" | "multifactor" | "signup" | "healup" | "auth"
	
	export interface LolHoneyfruitV1SuccessResponseDetails {
		login_token: string
		redirect_url: string
		linked: string
	}
	
	export interface LolHoneyfruitVNGStatusResponse {
		action_required: boolean
		action_url: string
		action_url_raw: string
	}
	
	export interface LolHonorV2AccountIdAndSummonerId {
		accountId: number
		summonerId: number
	}
	
	export interface LolHonorV2ApiHonorPlayerServerRequest {
		summonerId: number
		puuid: string
		honorType: string
		gameId: number
	}
	
	export interface LolHonorV2Ballot {
		eligiblePlayers: LCUTypes.LolHonorV2EligiblePlayer[]
		gameId: number
	}
	
	export interface LolHonorV2DynamicHonorMessage {
		messageId: string
		value: number
	}
	
	export interface LolHonorV2EligiblePlayer {
		puuid: string
		summonerId: number
		summonerName: string
		championName: string
		skinSplashPath: string
	}
	
	export interface LolHonorV2EndOfGamePlayer {
		puuid: string
		botPlayer: boolean
		gameId: number
		leaver: boolean
		summonerName: string
		summonerId: number
		skinSplashPath: string
		championName: string
	}
	
	export interface LolHonorV2EndOfGameStats {
		gameId: number
		gameType: string
		invalid: boolean
		queueType: string
		ranked: boolean
		reportGameId: number
		teams: LCUTypes.LolHonorV2EndOfGameTeam[]
		localPlayer: LCUTypes.LolHonorV2EndOfGamePlayer
		gameEndedInEarlySurrender: boolean
	}
	
	export interface LolHonorV2EndOfGameTeam {
		players: LCUTypes.LolHonorV2EndOfGamePlayer[]
		isPlayerTeam: boolean
	}
	
	export interface LolHonorV2GameflowGameData {
		gameId: number
		queue: LCUTypes.LolHonorV2Queue
	}
	
	export type LolHonorV2GameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"
	
	export interface LolHonorV2GameflowSession {
		phase: LCUTypes.LolHonorV2GameflowPhase
		gameData: LCUTypes.LolHonorV2GameflowGameData
	}
	
	export interface LolHonorV2Honor {
		honorCategory: string
		voterRelationship: string
		senderPuuid: string
	}
	
	export interface LolHonorV2HonorConfig {
		Enabled: boolean
		SecondsToVote: number
		RecallRewardEnabled: boolean
		HonorVisibilityEnabled: boolean
		HonorSuggestionsEnabled: boolean
		honorEndpointsV2Enabled: boolean
	}
	
	export interface LolHonorV2HonorInteraction {
		puuid: string
		displayName: string
		gameId: number
	}
	
	export interface LolHonorV2HonorRecipient {
		puuid: string
		gameId: number
		honors: LCUTypes.LolHonorV2Honor[]
	}
	
	export interface LolHonorV2HonorSummoner {
		puuid: string
		displayName: string
	}
	
	export interface LolHonorV2LoginSession {
		state: LCUTypes.LolHonorV2LoginSessionStates
	}
	
	export type LolHonorV2LoginSessionStates = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"
	
	export interface LolHonorV2MutualHonor {
		gameId: number
		summoners: LCUTypes.LolHonorV2MutualHonorPlayer[]
	}
	
	export interface LolHonorV2MutualHonorPlayer {
		summonerId: number
		championId: number
		skinId: number
	}
	
	export interface LolHonorV2ProfileInfo {
		honorLevel: number
		checkpoint: number
		rewardsLocked: boolean
	}
	
	export interface LolHonorV2Queue {
		id: number
		mapId: number
		type: string
		gameMode: string
		removalFromGameAllowed: boolean
		removalFromGameDelayMinutes: number
	}
	
	export interface LolHonorV2RetrieveProfileResponse {
		honorLevel: number
		checkpoint: number
		rewardsLocked: boolean
	}
	
	export interface LolHonorV2Reward {
		rewardType: string
		quantity: number
	}
	
	export interface LolHonorV2SequenceEvent {
		name: string
		priority: number
	}
	
	export interface LolHonorV2VendedHonorChange {
		actionType: string
		previousState: LCUTypes.LolHonorV2VendedHonorState
		currentState: LCUTypes.LolHonorV2VendedHonorState
		reward: LCUTypes.LolHonorV2Reward
		dynamicHonorMessage: LCUTypes.LolHonorV2DynamicHonorMessage
	}
	
	export interface LolHonorV2VendedHonorState {
		level: number
		checkpoint: number
		rewardsLocked: boolean
	}
	
	export interface LolHonorV2VendedReward {
		rewardType: string
		quantity: number
		dynamicHonorMessage: LCUTypes.LolHonorV2DynamicHonorMessage
	}
	
	export interface LolHonorV2VoteCompletion {
		gameId: number
		fullTeamVote: boolean
	}
	
	export interface LolHovercardAlias {
		gameName: string
		tagLine: string
	}
	
	export interface LolHovercardChatSession {
		sessionState: string
	}
	
	export interface LolHovercardContentCookies {
		content_id: string
		content_path: string
		cookies: LCUTypes.LolHovercardcookie[]
	}
	
	export interface LolHovercardFriendResult {
		id: string
		puuid: string
		summonerId: number
		name: string
		accountId: number
		icon: number
		gameName: string
		gameTag: string
		availability: string
		note: string
		score: number
		patchline: string
		platformId: string
		product: string
		productName: string
		statusMessage: string
		lol: Record<string, string>
	}
	
	export interface LolHovercardHovercardUserInfo {
		id: string
		puuid: string
		summonerId: number
		name: string
		accountId: number
		icon: number
		gameName: string
		gameTag: string
		availability: string
		note: string
		masteryScore: number
		patchline: string
		platformId: string
		product: string
		productName: string
		statusMessage: string
		summonerIcon: number
		summonerLevel: number
		remoteProduct: boolean
		remotePlatform: boolean
		remoteProductIconUrl: string
		remoteProductBackdropUrl: string
		partySummoners: string[]
		lol: Record<string, string>
	}
	
	export interface LolHovercardPartyInfo {
		summoners?: number[]
	}
	
	export interface LolHovercardPatchlineMetadata {
		product_id: string
		id: string
		content_paths: Record<string, string>
		content_cookies: LCUTypes.LolHovercardContentCookies[]
	}
	
	export interface LolHovercardProductMetadata {
		id: string
		name: string
		patchlines: Record<string, LCUTypes.LolHovercardPatchlineMetadata>
	}
	
	export interface LolHovercardProductMetadataMap {
		products: Record<string, LCUTypes.LolHovercardProductMetadata>
	}
	
	export interface LolHovercardSummoner {
		summonerId: number
		displayName: string
		accountId: number
		summonerLevel: number
		puuid: string
	}
	
	export interface LolHovercardSummonerIdAndIcon {
		profileIconId: number
	}
	
	export interface LolHovercardSummonerIdAndName {
		summonerId: number
		displayName: string
	}
	
	export interface LolHovercardTopChampionMastery {
		score: number
	}
	
	export interface LolHovercardcookie {
		name: string
		value: string
	}
	
	export interface LolInventoryAccessTokenResource {
		token: string
		scopes: string[]
		expiry: number
	}
	
	export interface LolInventoryCatalogItem {
		itemId: number
		inventoryType: string
		itemInstanceId?: string
	}
	
	export interface LolInventoryClientCacheClearMessageDTO {
		regions: string[]
		clearAll: boolean
		inventoryTypes: string[]
	}
	
	export interface LolInventoryCurrencyDTO {
		amount: number
		subCurrencies: Record<string, number>
	}
	
	export interface LolInventoryEndOfGameXp {
		PER_WIN: number
	}
	
	export interface LolInventoryEndOfGameXpNotification {
		xp: LCUTypes.LolInventoryEndOfGameXp
	}
	
	export interface LolInventoryInventoryCacheEntry {
		signedInventoryJwt: string
		expirationMS: number
		issuedAtMS: number
		receivedAtMS: number
		valid: boolean
	}
	
	export interface LolInventoryInventoryDTO {
		puuid: string
		accountId: number
		summonerId: number
		items: Record<string, unknown>
		expires: string
		itemsJwt: string
	}
	
	export interface LolInventoryInventoryItem {
		uuid: string
		itemId: number
		inventoryType: string
		purchaseDate: string
		quantity: number
		ownershipType: LCUTypes.LolInventoryItemOwnershipType
		expirationDate: string
		wins: number
	}
	
	export interface LolInventoryInventoryItemDTO {
		itemId: number
		inventoryType: string
		expirationDate: string
		purchaseDate: string
		quantity: number
		ownedQuantity: number
		usedInGameDate: string
		entitlementId: string
		entitlementTypeId: string
		instanceId: string
		instanceTypeId: string
		payload: unknown
		f2p: boolean
		rental: boolean
		loyalty: boolean
		loyaltySources: string[]
		lsb: boolean
		wins: number
	}
	
	export interface LolInventoryInventoryItemWithPayload {
		uuid: string
		itemId: number
		inventoryType: string
		purchaseDate: string
		quantity: number
		ownershipType: LCUTypes.LolInventoryItemOwnershipType
		expirationDate: string
		f2p: boolean
		rental: boolean
		loyalty: boolean
		loyaltySources: string[]
		owned: boolean
		wins: number
		payload: unknown
	}
	
	export interface LolInventoryInventoryNotification {
		id: number
		itemId: number
		inventoryType: string
		type: string
		acknowledged: boolean
	}
	
	export interface LolInventoryInventoryResponseDTO {
		data: LCUTypes.LolInventoryInventoryDTO
	}
	
	export interface LolInventoryItemKey {
		inventoryType: string
		itemId: number
	}
	
	export type LolInventoryItemOwnershipType = "F2P" | "LOYALTY" | "RENTED" | "OWNED"
	
	export interface LolInventoryLoginSession {
		state: LCUTypes.LolInventoryLoginSessionStates
		summonerId: number
		accountId: number
		idToken: string
		puuid: string
	}
	
	export type LolInventoryLoginSessionStates = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"
	
	export interface LolInventoryLoyaltyRewards {
		freeRewardedChampionsCount: number
		championIds: number[]
		freeRewardedSkinsCount: number
		skinIds: number[]
		ipBoost: number
		xpBoost: Record<string, number>
		loyaltyTFTMapSkinCount: number
		loyaltyTFTCompanionCount: number
		loyaltyTFTDamageSkinCount: number
		loyaltySources: Record<string, boolean>
	}
	
	export interface LolInventoryLoyaltyRewardsSimplified {
		freeRewardedChampionsCount: number
		championIds: number[]
		freeRewardedSkinsCount: number
		skinIds: number[]
		ipBoost: number
		xpBoost: number
		loyaltyTFTMapSkinCount: number
		loyaltyTFTCompanionCount: number
		loyaltyTFTDamageSkinCount: number
		loyaltySources: Record<string, boolean>
	}
	
	export type LolInventoryLoyaltyStatus = "DISABLED" | "REVOKE" | "CHANGE" | "EXPIRY" | "REWARDS_GRANT" | "LEGACY"
	
	export interface LolInventoryLoyaltyStatusNotification {
		status: LCUTypes.LolInventoryLoyaltyStatus
		rewards: LCUTypes.LolInventoryLoyaltyRewardsSimplified
		reloadInventory: boolean
	}
	
	export interface LolInventoryPlayerNotification {
		critical: boolean
		detailKey: string
		source: string
		state: string
		titleKey: string
		type: string
		iconUrl: string
	}
	
	export interface LolInventoryRiotMessagingServiceMessage {
		resource: string
		service: string
		version: string
		timestamp: number
		payload: string
	}
	
	export interface LolInventoryRmsEntitlementPayload {
		itemId: string
		itemTypeId: string
		entitlementTypeId: string
		resourceOperation: string
	}
	
	export interface LolInventoryRmsStoreEntitlementItem {
		inventoryType: string
		itemId: string
	}
	
	export interface LolInventoryRmsStoreEntitlementPayload {
		transactionId: string
		items: LCUTypes.LolInventoryRmsStoreEntitlementItem[]
	}
	
	export interface LolInventoryRmsWalletPayload {
		[key: string | number]: any
	}
	
	export interface LolInventoryRmsXboxSubscriptionChange {
		puuid: string
		subscriptionId: string
		active: string
		identityProvider: string[]
	}
	
	export interface LolInventorySimpleInventoryDTO {
		items: Record<string, unknown>
		itemsJwt: string
		expires: string
	}
	
	export interface LolInventorySimpleInventoryResponseDTO {
		data: LCUTypes.LolInventorySimpleInventoryDTO
	}
	
	export interface LolInventorySummonerIcon {
		itemId: number
	}
	
	export interface LolInventoryWallet {
		ip: number
		rp: number
	}
	
	export interface LolInventoryWalletCacheEntry {
		signedBalancesJwt: string
		expirationMS: number
		issuedAtMS: number
		receivedAtMS: number
		valid: boolean
	}
	
	export interface LolInventoryWalletDTO {
		puuid: string
		accountId: number
		expires: string
		balances: Record<string, number>
		balancesJwt: string
	}
	
	export interface LolInventoryWalletResponseDTO {
		data: LCUTypes.LolInventoryWalletDTO
	}
	
	export interface LolInventoryXboxSubscriptionStatus {
		active: string
		subscriptionId: string
	}
	
	export interface LolItemSetsGameDataChampion {
		alias: string
	}
	
	export interface LolItemSetsItemSet {
		uid: string
		title: string
		mode: string
		map: string
		type: string
		sortrank: number
		startedFrom: string
		associatedChampions: number[]
		associatedMaps: number[]
		blocks: LCUTypes.LolItemSetsItemSetBlock[]
		preferredItemSlots: LCUTypes.LolItemSetsPreferredItemSlot[]
	}
	
	export interface LolItemSetsItemSetBlock {
		type: string
		hideIfSummonerSpell: string
		showIfSummonerSpell: string
		items: LCUTypes.LolItemSetsItemSetItem[]
	}
	
	export interface LolItemSetsItemSetItem {
		id: string
		count: number
	}
	
	export interface LolItemSetsItemSets {
		timestamp: number
		accountId: number
		itemSets: LCUTypes.LolItemSetsItemSet[]
	}
	
	export interface LolItemSetsLoginSession {
		state: LCUTypes.LolItemSetsLoginSessionStates
		summonerId: number
		accountId: number
	}
	
	export type LolItemSetsLoginSessionStates = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"
	
	export interface LolItemSetsNamecheckAuthorization {
		subject: string
	}
	
	export interface LolItemSetsNamecheckLoginDataPacket {
		platformId: string
	}
	
	export interface LolItemSetsNamecheckPayload {
		name: string
		nameValidationContext: string
		puuid: string
		shard: string
	}
	
	export interface LolItemSetsNamecheckResponse {
		errors: string[]
	}
	
	export interface LolItemSetsPreferredItemSlot {
		id: string
		preferredItemSlot: number
	}
	
	export interface LolItemSetsValidateItemSetNameInput {
		name: string
	}
	
	export interface LolItemSetsValidateItemSetNameResponse {
		success: boolean
		nameCheckResponse: LCUTypes.LolItemSetsNamecheckResponse
	}
	
	export interface LolKickoutKickoutMessage {
		message: string
	}
	
	export interface LolKrPlaytimeReminderPlaytimeReminder {
		hours: number
	}
	
	export interface LolKrShutdownLawAllQueueShutdownStatus {
		isAllQueuesDisabled: boolean
	}
	
	export interface LolKrShutdownLawAntiAddictionState {
		policyType: LCUTypes.LolKrShutdownLawPolicyType
	}
	
	export type LolKrShutdownLawPolicyType = "disableMatchMaking" | "warningMessage" | "playTime" | "shutdown"
	
	export interface LolKrShutdownLawQueueShutdownStatus {
		isDisabled: boolean
	}
	
	export interface LolKrShutdownLawRatingScreenInfo {
		shown: boolean
	}
	
	export interface LolKrShutdownLawShutdownLawNotification {
		type: LCUTypes.LolKrShutdownLawShutdownLawStatus
	}
	
	export type LolKrShutdownLawShutdownLawStatus = "CUT_OFF" | "WARNING" | "NONE"
	
	export interface LolL10nRegionLocale {
		region: string
		locale: string
		webRegion: string
		webLanguage: string
	}
	
	export interface LolLeagueSessionAntiAddictionTokenEnvelope {
		antiAddictionToken: string
	}
	
	export interface LolLeagueSessionLeagueSessionRMSNotification {
		product: string
		puuid: string
		sessionId: string
		state: string
		sessionInitiatedAt: number
	}
	
	export type LolLeagueSessionLeagueSessionStatus = "ANTI_ADDICTION_EXPIRED" | "DUPLICATED" | "EXPIRED" | "INITIALIZED" | "UNINITIALIZED"
	
	export interface LolLeagueSessionLeagueSessionTokenEnvelope {
		token?: string
		logoutOnFailure: boolean
	}
	
	export interface LolLeaverBusterAllSummonerData {
		summoner: LCUTypes.LolLeaverBusterSummoner
	}
	
	export interface LolLeaverBusterLeaverBusterEntryDto {
		puuid: string
		tainted: boolean
		preLockoutAckNeeded: boolean
		onLockoutAckNeeded: boolean
		leaverScore: number
		leaverLevel: number
		warnSentMillis: number
		warnAckedMillis: number
		leaverPenalty: LCUTypes.LolLeaverBusterLeaverBusterPenaltyResponse
	}
	
	export interface LolLeaverBusterLeaverBusterNotificationResource {
		id: number
		msgId: string
		accountId: number
		type: LCUTypes.LolLeaverBusterLeaverBusterNotificationType
		punishedGamesRemaining: number
		queueLockoutTimerExpiryUtcMillisDiff: number
		fromRms: boolean
	}
	
	export type LolLeaverBusterLeaverBusterNotificationType = "RankedRestrictedGames" | "OnLockoutWarning" | "PreLockoutWarning" | "Reforming" | "PunishedGamesRemaining" | "PunishmentIncurred" | "TaintedWarning" | "Invalid"
	
	export interface LolLeaverBusterLeaverBusterPenaltyResponse {
		puuid: string
		hasActivePenalty: boolean
		punishmentTimerType: LCUTypes.LolLeaverBusterLeaverPenaltyType
		queueLockoutTimerExpiryUtcMillis: number
	}
	
	export type LolLeaverBusterLeaverPenaltyType = "QUEUE_LOCKOUT_TIMER" | "QUEUE_DELAY_TIMER" | "NO_PENALTY"
	
	export interface LolLeaverBusterLoginDataPacket {
		allSummonerData: LCUTypes.LolLeaverBusterAllSummonerData
		simpleMessages: LCUTypes.LolLeaverBusterSimpleMessage[]
	}
	
	export interface LolLeaverBusterMatchmakingSearchErrorResource {
		id: number
		errorType: string
		penalizedSummonerId: number
		penaltyTimeRemaining: number
		message: string
	}
	
	export interface LolLeaverBusterMatchmakingSearchResource {
		queueId: number
		errors: LCUTypes.LolLeaverBusterMatchmakingSearchErrorResource[]
	}
	
	export interface LolLeaverBusterPlayerNotificationResource {
		backgroundUrl: string
		created: string
		critical: boolean
		data: Record<string, string>
		detailKey: string
		expires: string
		iconUrl: string
		id: number
		source: string
		state: string
		titleKey: string
		type: string
	}
	
	export interface LolLeaverBusterRankedRestriction {
		punishedGamesRemaining: number
	}
	
	export interface LolLeaverBusterRankedRestrictionEntryDto {
		puuid: string
		restrictedGamesRemaining: number
		restrictedGamesOriginal: number
		rankedRestrictionAckNeeded: boolean
	}
	
	export interface LolLeaverBusterRankedRestrictionGamesUpdate {
		punishedGamesRemaining: number
	}
	
	export interface LolLeaverBusterRankedRestrictionInfo {
		punishedGamesRemaining: number
		needsAck: boolean
	}
	
	export interface LolLeaverBusterRestrictionInfoDto {
		puuid: string
		leaverBusterEntryDto: LCUTypes.LolLeaverBusterLeaverBusterEntryDto
		rankedRestrictionEntryDto: LCUTypes.LolLeaverBusterRankedRestrictionEntryDto
	}
	
	export interface LolLeaverBusterSimpleMessage {
		accountId: number
		msgId: string
		type: string
		params: string[]
	}
	
	export interface LolLeaverBusterSummoner {
		acctId: number
		sumId: number
	}
	
	export interface LolLicenseAgreementLicenseAgreement {
		id: string
		licenseType: LCUTypes.LolLicenseAgreementLicenseAgreementType
		text: string
	}
	
	export type LolLicenseAgreementLicenseAgreementType = "TermsOfUse" | "PrivacyNotice"
	
	export type LolLicenseAgreementLicenseServeLocation = "External" | "Local" | "Preparing"
	
	export interface LolLicenseAgreementPluginRegionLocaleChangedEvent {
		region: string
		locale: string
	}
	
	export interface LolLoadoutsAccessTokenResource {
		token: string
		scopes: string[]
		expiry: number
	}
	
	export interface LolLoadoutsCreateLoadoutDTO {
		scope: string
		itemId?: number
		name: string
		loadout: Record<string, LCUTypes.LolLoadoutsItemKey>
		refreshTime: string
	}
	
	export interface LolLoadoutsCreateLoadoutRequestDTO {
		serviceToJwtsMap: Record<string, unknown>
		loadout: LCUTypes.LolLoadoutsCreateLoadoutDTO
	}
	
	export interface LolLoadoutsCreateOrUpdateItemsRequest {
		id: number
		items: Record<string, unknown>
		inventoryJWTs: string[]
	}
	
	export interface LolLoadoutsFrontendInventoryResponse {
		entitlements: LCUTypes.LolLoadoutsItemKey[]
	}
	
	export interface LolLoadoutsGameflowGameData {
		queue: LCUTypes.LolLoadoutsQueue
	}
	
	export type LolLoadoutsGameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"
	
	export interface LolLoadoutsGameflowSession {
		phase: LCUTypes.LolLoadoutsGameflowPhase
		gameData: LCUTypes.LolLoadoutsGameflowGameData
	}
	
	export interface LolLoadoutsGetItemsRequest {
		id: number
		inventoryTypes: string[]
		inventoryJWTs: string[]
	}
	
	export interface LolLoadoutsInventoryDTO {
		puuid: string
		accountId: number
		summonerId: number
		items: Record<string, unknown>
		expires: string
		itemsJwt?: string
	}
	
	export interface LolLoadoutsInventoryItemDTO {
		itemId: number
		inventoryType: string
		expirationDate: string
		purchaseDate: string
		quantity: number
		usedInGameDate: string
		entitlementId: string
		entitlementTypeId: string
		instanceId: string
		instanceTypeId: string
		f2p: boolean
		rental: boolean
		lsb: boolean
		wins: number
	}
	
	export interface LolLoadoutsInventoryResponseDTO {
		data: LCUTypes.LolLoadoutsInventoryDTO
	}
	
	export interface LolLoadoutsItemKey {
		inventoryType: string
		contentId: string
		itemId: number
	}
	
	export interface LolLoadoutsLoadout {
		id: number
		name: string
		items: Record<string, unknown>
	}
	
	export interface LolLoadoutsLoadoutRequestDTOBase {
		serviceToJwtsMap: Record<string, unknown>
	}
	
	export interface LolLoadoutsLoginSession {
		state: LCUTypes.LolLoadoutsLoginSessionStates
		summonerId: number
		accountId: number
		idToken: string
		puuid: string
	}
	
	export type LolLoadoutsLoginSessionStates = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"
	
	export interface LolLoadoutsQueue {
		isTeamBuilderManaged: boolean
	}
	
	export interface LolLoadoutsScopedLoadout {
		scope: string
		itemId?: number
		name: string
		loadout: Record<string, LCUTypes.LolLoadoutsItemKey>
		refreshTime: string
		id: string
	}
	
	export interface LolLoadoutsSignGCORequestDTO {
		serviceToJwtsMap: Record<string, unknown>
		loadout: Record<string, LCUTypes.LolLoadoutsItemKey>
	}
	
	export interface LolLoadoutsUpdateLoadoutDTO {
		id: string
		name: string
		loadout: Record<string, LCUTypes.LolLoadoutsItemKey>
	}
	
	export interface LolLoadoutsUpdateLoadoutRequestDTO {
		serviceToJwtsMap: Record<string, unknown>
		loadout: LCUTypes.LolLoadoutsUpdateLoadoutDTO
	}
	
	export interface LolLobbyAccountIdAndSummonerId {
		accountId: number
		summonerId: number
	}
	
	export interface LolLobbyAmbassadorMessage {
		httpStatus: number
		errorCode: string
		message: string
		implementationDetails: string
		payload: unknown
	}
	
	export interface LolLobbyAutoFillQueueDto {
		queueId: number
		autoFillEligible: boolean
		autoFillProtectedForStreaking: boolean
		autoFillProtectedForPromos: boolean
	}
	
	export interface LolLobbyBotParticipantDto {
		championId: number
		botSkillLevel: number
		team: string
	}
	
	export interface LolLobbyChampionSkinSelection {
		championId: number
		skinId?: number
	}
	
	export interface LolLobbyChatBlockedPlayerResource {
		summonerId: number
		name: string
	}
	
	export interface LolLobbyChatFriend {
		summonerId: number
		lol: Record<string, string>
	}
	
	export interface LolLobbyChatFriendCounts {
		numFriends: number
		numFriendsOnline: number
		numFriendsAvailable: number
		numFriendsAway: number
		numFriendsInQueue: number
		numFriendsInChampSelect: number
		numFriendsInGame: number
		numFriendsMobile: number
	}
	
	export interface LolLobbyCollectionsChampion {
		active: boolean
		botEnabled: boolean
		id: number
		name: string
	}
	
	export interface LolLobbyCollectionsChampionMinimal {
		disabledQueues: string[]
		id: number
		ownership: LCUTypes.LolLobbyCollectionsOwnership
		active: boolean
		freeToPlay: boolean
	}
	
	export interface LolLobbyCollectionsOwnership {
		loyaltyReward: boolean
		xboxGPReward: boolean
		owned: boolean
		rental: LCUTypes.LolLobbyCollectionsRental
	}
	
	export interface LolLobbyCollectionsRental {
		[key: string | number]: any
	}
	
	export interface LolLobbyCustomEligibilityDto {
		eligible: boolean
		restrictions: LCUTypes.LolLobbyGatekeeperRestrictionDto[]
	}
	
	export interface LolLobbyCustomGameDto {
		partyId: string
		gameType: string
		mapId: number
		ownerPuuid: string
		allowSpectators: string
		spectatorCount: number
		team1Count: number
		team2Count: number
		maxNumPlayers: number
		lobbyName: string
		privateGame: boolean
	}
	
	export interface LolLobbyCustomGameSettingsDto {
		lobbyName: string
		lobbyPassword: string
		gameId: number
	}
	
	export interface LolLobbyCustomJoinOptionsDto {
		lobbyPassword: string
		team?: string
	}
	
	export interface LolLobbyEligibility {
		queueId: number
		eligible: boolean
		restrictions: LCUTypes.LolLobbyEligibilityRestriction[]
	}
	
	export interface LolLobbyEligibilityRestriction {
		restrictionCode: LCUTypes.LolLobbyEligibilityRestrictionCode
		restrictionArgs: Record<string, string>
		expiredTimestamp: number
		summonerIds: number[]
		summonerIdsString: string
	}
	
	export type LolLobbyEligibilityRestrictionCode = "MmrStandardDeviationTooLarge" | "InventoryQueuesInfoNotAvailable" | "InventoryChampsInfoNotAvailable" | "LeaguesInfoNotAvailable" | "SummonerInfoNotAvailable" | "MinorInfoNotAvailable" | "BanInfoNotAvailable" | "TooManyIncompleteSubteamsRestriction" | "QPScarcePositionsNotAvailableRestriction" | "QPNonUniquePrimarySlotRestriction" | "QPInvalidChampionSelectionRestriction" | "QPInvalidPositionSelectionRestriction" | "QPInvalidNumberOfPlayerSlotsRestriction" | "QPPlayerChampionCoverageRestriction" | "QPPartyChampionCoverageRestriction" | "QPPlayerPositionCoverageRestriction" | "QPPartyPositionCoverageRestriction" | "QPPlayerScarcePositionCoverageRestriction" | "UnknownRestriction" | "TFTNewPlayerRestriction" | "QueueEntryNotEntitledRestriction" | "GameVersionNotSupported" | "GameVersionMissing" | "GameVersionMismatch" | "PrerequisiteQueuesNotPlayedRestriction" | "TeamSizeRestriction" | "TeamHighMMRMaxSizeRestriction" | "PlayerRankedSuspensionRestriction" | "PlayerRankSoloOnlyRestriction" | "PlayerTimePlayedRestriction" | "PlayerMinorRestriction" | "PlayerMinLevelRestriction" | "PlayerMaxLevelRestriction" | "PlayerTimeBasedRankRestriction" | "PlayerGameBasedRankRestriction" | "PlayerLeaverTaintedWarningRestriction" | "PlayerLeaverQueueLockoutRestriction" | "PlayerLeaverBustedRestriction" | "PlayerInGameRestriction" | "PlayerDodgeRestriction" | "PlayerBingeRestriction" | "TeamMinSizeRestriction" | "TeamMaxSizeRestriction" | "TeamSkillRestriction" | "TeamDivisionRestriction" | "PlayerAvailableChampionRestriction" | "PlayerBannedRestriction" | "PlayerTimedRestriction" | "PlayerLevelRestriction" | "QueueUnsupported" | "QueueDisabled"
	
	export interface LolLobbyFriendAvailabilityAnalytics {
		puuid: string
		summonerId: number
		platformId: string
		eventType: string
		eventData: unknown
		eventTimestamp: number
		numFriends: number
		numFriendsOnline: number
		numFriendsAvailable: number
		numFriendsAway: number
		numFriendsInGame: number
		numFriendsMobile: number
		numFriendsInChampSelect: number
		numFriendsInQueue: number
		partyType: string
	}
	
	export interface LolLobbyGameDataChampionSummary {
		id: number
		alias: string
	}
	
	export interface LolLobbyGameModeDto {
		gameType: string
		maxTeamSize: number
		maxPartySize: number
		botDifficulty?: string
		queueId?: number
		gameCustomization?: Record<string, string>
		customsSettings?: LCUTypes.LolLobbyCustomGameSettingsDto
		gameTypeConfigId?: number
		mapId?: number
		allowSpectators?: string
	}
	
	export interface LolLobbyGameflowGameClient {
		running: boolean
	}
	
	export interface LolLobbyGameflowGameData {
		queue: LCUTypes.LolLobbyQueue
	}
	
	export interface LolLobbyGameflowGameDodge {
		state: LCUTypes.LolLobbyMatchmakingDodgeState
		dodgeIds: number[]
		phase: LCUTypes.LolLobbyGameflowPhase
	}
	
	export type LolLobbyGameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"
	
	export interface LolLobbyGameflowSampleDto {
		state: string
		probability: number
		intervalSecs: number
		tags: LCUTypes.LolLobbyGameflowSampleTag[]
	}
	
	export type LolLobbyGameflowSampleTag = "InventoryTokenMissing" | "RankedTokenMissing" | "SummonerTokenMissing" | "UserInfoTokenMissing" | "GameVersionMissing" | "Unregistered"
	
	export interface LolLobbyGameflowSession {
		phase: LCUTypes.LolLobbyGameflowPhase
		gameData: LCUTypes.LolLobbyGameflowGameData
		gameClient: LCUTypes.LolLobbyGameflowGameClient
		gameDodge: LCUTypes.LolLobbyGameflowGameDodge
	}
	
	export interface LolLobbyGatekeeperRestrictionDto {
		accountId: number
		reason: string
		remainingMillis: number
		payload: string
		queueId: number
		puuid: string
		details: Record<string, string>
	}
	
	export interface LolLobbyInventoryCacheEntry {
		signedInventoryJwt: string
		expirationMS: number
		valid: boolean
	}
	
	export interface LolLobbyInventoryItem {
		itemId: number
	}
	
	export type LolLobbyInvitationType = "party" | "lobby" | "invalid"
	
	export interface LolLobbyJoinPartyAnalytics {
		partyId: string
		platformId: string
		eventType: string
		eventData: unknown
		eventTimestamp: number
		numOpenParties: number
		numOpenFriends: number
		numPartyInvites: number
		numOtherInvites: number
		numTotalInvites: number
		numFriendsOnline: number
		partySize: number
		gameMode: string
	}
	
	export interface LolLobbyLcdsDynamicClientConfig {
		PartyRewards: LCUTypes.LolLobbyLcdsPartyRewardsConfig
	}
	
	export interface LolLobbyLcdsGameMetaData {
		gameId: number
		mapId: number
	}
	
	export interface LolLobbyLcdsPartyRewardsConfig {
		Enabled: boolean
	}
	
	export interface LolLobbyLobby {
		queueId: number
		mapId: number
		gameMode: string
		invitationId: string
		multiUserChatId: string
		multiUserChatPassword: string
		mucJwtDto: LCUTypes.LolLobbyMucJwtDto
		members: LCUTypes.LolLobbyLobbyMember[]
		localMember: LCUTypes.LolLobbyLobbyMember
		invitations: LCUTypes.LolLobbyLobbyInvitation[]
		wasKicked: boolean
		removalReason: LCUTypes.LolLobbyLobbyRemovedFromGameReason
		canStartMatchmaking: boolean
		showPositionSelector: boolean
		showPositionExcluder: boolean
		specifiablePositionPreferences: string[]
		autoFillEligible: boolean
		customGameLobby?: LCUTypes.LolLobbyLobbyCustomGameLobby
		isCustom: boolean
		autoFillProtectedForStreaking: boolean
		autoFillProtectedForPromos: boolean
		isTeamBuilderManaged: boolean
		maximumParticipantListSize: number
		premadeSizeAllowed: boolean
		requiredPositionCoverageMet: boolean
		allowablePremadeSizes: number[]
		queueAvailability: LCUTypes.LolLobbyQueueAvailability
	}
	
	export interface LolLobbyLobbyBotChampion {
		active: boolean
		id: number
		name: string
		botDifficulties: LCUTypes.LolLobbyLobbyBotDifficulty[]
	}
	
	export type LolLobbyLobbyBotDifficulty = "RIOTSCRIPT" | "INTRO" | "TUTORIAL" | "UBER" | "HARD" | "MEDIUM" | "EASY" | "NONE"
	
	export interface LolLobbyLobbyBotParams {
		championId: number
		botDifficulty: LCUTypes.LolLobbyLobbyBotDifficulty
		teamId: string
	}
	
	export interface LolLobbyLobbyChangeGameDto {
		queueId: number
		isCustom: boolean
		customGameLobby?: LCUTypes.LolLobbyLobbyCustomGameLobby
		gameCustomization?: Record<string, string>
	}
	
	export interface LolLobbyLobbyChangeQueue {
		queueId: number
		isCustom: boolean
		customGameLobby?: LCUTypes.LolLobbyLobbyCustomGameLobby
	}
	
	export interface LolLobbyLobbyCustomChampSelectStartResponse {
		success: boolean
		failedPlayers: LCUTypes.LolLobbyLobbyCustomFailedPlayer[]
	}
	
	export interface LolLobbyLobbyCustomFailedPlayer {
		summonerId: number
		summonerName: string
		reason: string
	}
	
	export interface LolLobbyLobbyCustomGame {
		id: number
		gameType: string
		mapId: number
		ownerDisplayName: string
		spectatorPolicy: string
		filledSpectatorSlots: number
		maxSpectatorSlots: number
		filledPlayerSlots: number
		maxPlayerSlots: number
		lobbyName: string
		hasPassword: boolean
		passbackUrl: string
		partyId: string
	}
	
	export interface LolLobbyLobbyCustomGameConfiguration {
		mapId: number
		gameMode: string
		mutators: LCUTypes.LolLobbyQueueGameTypeConfig
		gameTypeConfig: LCUTypes.LolLobbyQueueGameTypeConfig
		spectatorPolicy: LCUTypes.LolLobbyQueueCustomGameSpectatorPolicy
		teamSize: number
		maxPlayerCount: number
		tournamentGameMode: string
		tournamentPassbackUrl: string
		tournamentPassbackDataPacket: string
		gameServerRegion: string
	}
	
	export interface LolLobbyLobbyCustomGameLobby {
		lobbyName: string
		lobbyPassword: string
		configuration: LCUTypes.LolLobbyLobbyCustomGameConfiguration
		teamOne: LCUTypes.LolLobbyLobbyMember[]
		teamTwo: LCUTypes.LolLobbyLobbyMember[]
		spectators: LCUTypes.LolLobbyLobbyMember[]
		practiceGameRewardsDisabledReasons: string[]
		gameId: number
	}
	
	export interface LolLobbyLobbyCustomJoinParameters {
		password?: string
		asSpectator?: boolean
	}
	
	export interface LolLobbyLobbyDto {
		partyId: string
		partyType: string
		members: LCUTypes.LolLobbyLobbyParticipantDto[]
		localMember: LCUTypes.LolLobbyLobbyParticipantDto
		invitations: LCUTypes.LolLobbyLobbyInvitationDto[]
		canStartActivity: boolean
		restrictions?: LCUTypes.LolLobbyEligibilityRestriction[]
		warnings?: LCUTypes.LolLobbyEligibilityRestriction[]
		gameConfig: LCUTypes.LolLobbyLobbyGameConfigDto
		multiUserChatId: string
		multiUserChatPassword: string
		mucJwtDto: LCUTypes.LolLobbyMucJwtDto
		scarcePositions: string[]
	}
	
	export interface LolLobbyLobbyGameConfigDto {
		gameMode: string
		mapId: number
		queueId: number
		pickType: string
		maxTeamSize: number
		maxLobbySize: number
		maxHumanPlayers: number
		allowablePremadeSizes: number[]
		premadeSizeAllowed: boolean
		isTeamBuilderManaged: boolean
		isCustom: boolean
		showPositionSelector: boolean
		showQuickPlaySlotSelection: boolean
		isLobbyFull: boolean
		shouldForceScarcePositionSelection: boolean
		customLobbyName: string
		customMutatorName: string
		customTeam100: LCUTypes.LolLobbyLobbyParticipantDto[]
		customTeam200: LCUTypes.LolLobbyLobbyParticipantDto[]
		customSpectators: LCUTypes.LolLobbyLobbyParticipantDto[]
		customSpectatorPolicy: LCUTypes.LolLobbyQueueCustomGameSpectatorPolicy
		customRewardsDisabledReasons: string[]
	}
	
	export interface LolLobbyLobbyInvitation {
		id: string
		fromSummonerId: number
		toSummonerId: number
		state: LCUTypes.LolLobbyLobbyInvitationState
		errorType: string
		timestamp: string
		invitationMetaData: unknown
		eligibility: LCUTypes.LolLobbyEligibility
		fromSummonerName: string
		toSummonerName: string
	}
	
	export interface LolLobbyLobbyInvitationDto {
		invitationId: string
		toSummonerId: number
		state: LCUTypes.LolLobbyLobbyInvitationState
		timestamp: string
		toSummonerName: string
		invitationType: LCUTypes.LolLobbyInvitationType
	}
	
	export type LolLobbyLobbyInvitationState = "Error" | "OnHold" | "Kicked" | "Declined" | "Joined" | "Accepted" | "Pending" | "Requested"
	
	export interface LolLobbyLobbyLastQueuedLobby {
		queueId: number
		wasOwner: boolean
		canPlayAgain: boolean
		members: LCUTypes.LolLobbyLobbyLastQueuedMember[]
	}
	
	export interface LolLobbyLobbyLastQueuedMember {
		id: number
	}
	
	export interface LolLobbyLobbyMatchmakingLowPriorityDataResource {
		penalizedSummonerIds: number[]
		penaltyTime: number
		penaltyTimeRemaining: number
		bustedLeaverAccessToken: string
		reason: string
	}
	
	export interface LolLobbyLobbyMatchmakingSearchErrorResource {
		id: number
		errorType: string
		penalizedSummonerId: number
		penaltyTimeRemaining: number
		message: string
	}
	
	export interface LolLobbyLobbyMatchmakingSearchResource {
		searchState: LCUTypes.LolLobbyLobbyMatchmakingSearchState
		lowPriorityData: LCUTypes.LolLobbyLobbyMatchmakingLowPriorityDataResource
		errors: LCUTypes.LolLobbyLobbyMatchmakingSearchErrorResource[]
	}
	
	export type LolLobbyLobbyMatchmakingSearchState = "ServiceShutdown" | "ServiceError" | "Error" | "Found" | "Searching" | "Canceled" | "AbandonedLowPriorityQueue" | "Invalid"
	
	export interface LolLobbyLobbyMember {
		id: number
		isOwner: boolean
		isSpectator: boolean
		canInviteOthers: boolean
		positionPreferences: LCUTypes.LolLobbyLobbyPositionPreferences
		excludedPositionPreference?: string
		summonerInternalName: string
		showPositionExcluder: boolean
		autoFillEligible: boolean
		autoFillProtectedForStreaking: boolean
		autoFillProtectedForPromos: boolean
		autoFillProtectedForSoloing: boolean
		isBot: boolean
		botDifficulty: LCUTypes.LolLobbyLobbyBotDifficulty
		botChampionId: number
	}
	
	export interface LolLobbyLobbyNotification {
		notificationId: string
		notificationReason: string
		summonerIds: number[]
		timestamp: number
	}
	
	export interface LolLobbyLobbyParticipantDto {
		summonerId: number
		summonerIconId: number
		summonerName: string
		summonerInternalName: string
		puuid: string
		summonerLevel: number
		allowedStartActivity: boolean
		allowedChangeActivity: boolean
		allowedToggleInvite: boolean
		allowedKickOthers: boolean
		allowedInviteOthers: boolean
		isLeader: boolean
		isSpectator: boolean
		teamId: number
		firstPositionPreference: string
		secondPositionPreference: string
		subteamIndex?: number
		intraSubteamPosition?: number
		tftNPEQueueBypass?: boolean
		playerSlots: LCUTypes.LolLobbyQuickPlayPresetSlotDto[]
		ready: boolean
		showGhostedBanner: boolean
		autoFillEligible: boolean
		autoFillProtectedForStreaking: boolean
		autoFillProtectedForPromos: boolean
		autoFillProtectedForSoloing: boolean
		isBot: boolean
		botId: string
		botDifficulty: LCUTypes.LolLobbyLobbyBotDifficulty
		botChampionId: number
	}
	
	export type LolLobbyLobbyPartyRewardType = "None" | "Icon" | "Ip"
	
	export interface LolLobbyLobbyPartyRewards {
		isEnabled: boolean
		queueId: number
		isCustom: boolean
		partyRewards: LCUTypes.LolLobbyPartyReward[]
	}
	
	export interface LolLobbyLobbyPositionPreferences {
		firstPreference: string
		secondPreference: string
	}
	
	export type LolLobbyLobbyRemovedFromGameReason = "ServiceShutdown" | "GameStartError" | "Timeout" | "Other" | "ServiceError" | "Left" | "Disbanded" | "Kicked" | "None"
	
	export interface LolLobbyLobbyStatus {
		queueId: number
		isCustom: boolean
		isPracticeTool: boolean
		isLeader: boolean
		isSpectator: boolean
		allowedPlayAgain: boolean
		memberSummonerIds: number[]
		invitedSummonerIds: number[]
		lobbyId?: string
		customSpectatorPolicy: LCUTypes.LolLobbyQueueCustomGameSpectatorPolicy
	}
	
	export interface LolLobbyLobbyTimer {
		enabled: boolean
		countdown: number
	}
	
	export interface LolLobbyLoginSession {
		state: LCUTypes.LolLobbyLoginSessionStates
		username: string
		userAuthToken: string
		accountId: number
		summonerId: number
		idToken: string
		puuid: string
		connected: boolean
	}
	
	export type LolLobbyLoginSessionStates = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"
	
	export type LolLobbyMatchmakingDodgeState = "StrangerDodged" | "PartyDodged" | "Invalid"
	
	export interface LolLobbyMucJwtDto {
		jwt: string
		channelClaim: string
		domain: string
		targetRegion: string
	}
	
	export interface LolLobbyOpenPartyToggleAnalytics {
		partyId: string
		platformId: string
		eventType: string
		eventData: unknown
		eventTimestamp: number
		playerId: string
		initialState: string
		finalState: string
		numOfToggles: number
		startTimestamp: number
		endTimestamp: number
		elapsedTime: number
		startTransition: string
		endTransition: string
		gameMode: string
	}
	
	export interface LolLobbyPartiesInvitationAnalytics {
		partyId: string
		platformId: string
		eventType: string
		eventData: unknown
		eventTimestamp: number
		players: LCUTypes.LolLobbyPartiesInvitationPlayerAnalytics[]
	}
	
	export interface LolLobbyPartiesInvitationPlayerAnalytics {
		puuid: string
		summonerId: number
		role: string
	}
	
	export interface LolLobbyPartyChatDto {
		jid: string
		mucJwtDto: LCUTypes.LolLobbyMucJwtDto
	}
	
	export interface LolLobbyPartyDto {
		partyId: string
		platformId: string
		players: LCUTypes.LolLobbyPartyMemberDto[]
		chat: LCUTypes.LolLobbyPartyChatDto
		maxPartySize: number
		partyType: string
		gameMode: LCUTypes.LolLobbyGameModeDto
		activityLocked: boolean
		version: number
		activityStartedUtcMillis: number
		activityResumeUtcMillis: number
		activeRestrictions: LCUTypes.LolLobbyQueueRestrictionDto
		eligibilityHash: number
		eligibilityRestrictions?: LCUTypes.LolLobbyGatekeeperRestrictionDto[]
		eligibilityWarnings?: LCUTypes.LolLobbyGatekeeperRestrictionDto[]
		botParticipants?: LCUTypes.LolLobbyBotParticipantDto[]
	}
	
	export type LolLobbyPartyEogStatusCategory = "kOnEog" | "kPlayAgain" | "kLeft"
	
	export interface LolLobbyPartyInviteAnalytics {
		partyId: string
		platformId: string
		eventType: string
		eventData: unknown
		eventTimestamp: number
		fromSummonerId: number
		toSummonerId: number
		partyType: string
		gameMode: string
	}
	
	export interface LolLobbyPartyMemberDto {
		platformId: string
		puuid: string
		accountId: number
		summonerId: number
		partyId: string
		partyVersion: number
		role: LCUTypes.LolLobbyPartyMemberRoleEnum
		gameMode?: LCUTypes.LolLobbyGameModeDto
		ready?: boolean
		metadata: LCUTypes.LolLobbyPartyMemberMetadataDto
		invitedBySummonerId?: number
		inviteTimestamp?: number
		canInvite?: boolean
		team: string
	}
	
	export interface LolLobbyPartyMemberMetadataDto {
		positionPref: string[]
		properties?: unknown
		playerSlots: LCUTypes.LolLobbyQuickPlayPresetSlotDto[]
		subteamData?: LCUTypes.LolLobbySubteamDataDto
		tftNPEQueueBypass?: boolean
	}
	
	export type LolLobbyPartyMemberRoleEnum = "NONE" | "DECLINED" | "KICKED" | "HOLD" | "INVITED" | "MEMBER" | "LEADER"
	
	export interface LolLobbyPartyNotificationEnvelopeDto {
		player?: LCUTypes.LolLobbyPlayerDto
		queueRestriction?: LCUTypes.LolLobbyQueueRestrictionDto
	}
	
	export interface LolLobbyPartyPresenceData {
		partyId: string
		queueId: number
		summoners: number[]
		maxPlayers: number
	}
	
	export interface LolLobbyPartyQueueEligibilityDto {
		partyRestrictions: LCUTypes.LolLobbyGatekeeperRestrictionDto[]
		availableQueueIds: number[]
	}
	
	export interface LolLobbyPartyReward {
		premadeSize: number
		type: LCUTypes.LolLobbyLobbyPartyRewardType
		value: string
	}
	
	export interface LolLobbyPartyStatusDto {
		readyPlayers: string[]
		leftPlayers: string[]
		eogPlayers: string[]
		partySize: number
	}
	
	export interface LolLobbyPlatformStats {
		playerStatSummaries: LCUTypes.LolLobbyPlayerStatSummaryContainer
	}
	
	export interface LolLobbyPlayerCollectionDto {
		players: LCUTypes.LolLobbyPlayerDto[]
	}
	
	export interface LolLobbyPlayerDto {
		puuid: string
		platformId: string
		accountId: number
		summonerId: number
		eligibilityHash: number
		serverUtcMillis: number
		parties?: LCUTypes.LolLobbyPartyMemberDto[]
		currentParty?: LCUTypes.LolLobbyPartyDto
		tftGamesPlayed: number
		tftGamesWon: number
		registration: LCUTypes.LolLobbyRegistrationCredentials
		createdAt: number
		version: number
	}
	
	export interface LolLobbyPlayerStatSummary {
		playerStatSummaryType: string
		wins: number
		gamesPlayed: number
	}
	
	export interface LolLobbyPlayerStatSummaryContainer {
		playerStatSummarySet: LCUTypes.LolLobbyPlayerStatSummary[]
	}
	
	export interface LolLobbyPlayerStatus {
		currentLobbyStatus?: LCUTypes.LolLobbyLobbyStatus
		lastQueuedLobbyStatus?: LCUTypes.LolLobbyLobbyStatus
		canInviteOthersAtEog: boolean
	}
	
	export type LolLobbyPlayerUpdateType = "RMS" | "ServiceProxy" | "Direct" | "None"
	
	export interface LolLobbyPremadeMemberDto {
		displayName: string
		gameName: string
		tagLine: string
		puuid: string
		partyId: string
		summonerId: number
		role: LCUTypes.LolLobbyPartyMemberRoleEnum
	}
	
	export interface LolLobbyPremadePartyDto {
		partyId: string
		commsEnabled: boolean
		players: Record<string, LCUTypes.LolLobbyPremadeMemberDto>
	}
	
	export interface LolLobbyPremadeRelationshipAnalytics {
		puuid: string
		summonerId: number
		platformId: string
		eventType: string
		eventData: unknown
		eventTimestamp: number
		premadePlayers: string[]
		friendPlayers: string[]
	}
	
	export interface LolLobbyQueue {
		id: number
		mapId: number
		name: string
		shortName: string
		description: string
		detailedDescription: string
		type: string
		gameMode: string
		assetMutator: string
		maxTierForPremadeSize2: string
		maxDivisionForPremadeSize2: string
		category: LCUTypes.LolLobbyQueueGameCategory
		gameTypeConfig: LCUTypes.LolLobbyQueueGameTypeConfig
		numPlayersPerTeam: number
		minimumParticipantListSize: number
		maximumParticipantListSize: number
		minLevel: number
		isRanked: boolean
		areFreeChampionsAllowed: boolean
		isTeamBuilderManaged: boolean
		queueAvailability: LCUTypes.LolLobbyQueueAvailability
		queueRewards: LCUTypes.LolLobbyQueueReward
		spectatorEnabled: boolean
		championsRequiredToPlay: number
		allowablePremadeSizes: number[]
		showPositionSelector: boolean
		showQuickPlaySlotSelection: boolean
		lastToggledOffTime: number
		lastToggledOnTime: number
		removalFromGameAllowed: boolean
		removalFromGameDelayMinutes: number
	}
	
	export type LolLobbyQueueAvailability = "DoesntMeetRequirements" | "PlatformDisabled" | "Available"
	
	export interface LolLobbyQueueCustomGame {
		queueAvailability: LCUTypes.LolLobbyQueueAvailability
	}
	
	export type LolLobbyQueueCustomGameSpectatorPolicy = "AllAllowed" | "FriendsAllowed" | "LobbyAllowed" | "NotAllowed"
	
	export type LolLobbyQueueGameCategory = "Alpha" | "VersusAi" | "PvP" | "Custom" | "None"
	
	export interface LolLobbyQueueGameTypeConfig {
		id: number
		name: string
		maxAllowableBans: number
		allowTrades: boolean
		exclusivePick: boolean
		duplicatePick: boolean
		teamChampionPool: boolean
		crossTeamChampionPool: boolean
		advancedLearningQuests: boolean
		battleBoost: boolean
		deathMatch: boolean
		doNotRemove: boolean
		learningQuests: boolean
		onboardCoopBeginner: boolean
		reroll: boolean
		mainPickTimerDuration: number
		postPickTimerDuration: number
		banTimerDuration: number
		pickMode: string
		banMode: string
		gameModeOverride?: string
		numPlayersPerTeamOverride?: number
	}
	
	export interface LolLobbyQueueRestrictionDto {
		gatekeeperRestrictions: LCUTypes.LolLobbyGatekeeperRestrictionDto[]
	}
	
	export interface LolLobbyQueueReward {
		isIpEnabled: boolean
		isXpEnabled: boolean
		isChampionPointsEnabled: boolean
		partySizeIpRewards: number[]
	}
	
	export interface LolLobbyQuickPlayPresetSlotDto {
		championId: number
		skinId: number
		positionPreference: string
		perks: string
		spell1: number
		spell2: number
	}
	
	export interface LolLobbyRankedPositionInfoDTO {
		queue: string
		tier: string
		rank: string
	}
	
	export interface LolLobbyRankedRestrictionInfo {
		punishedGamesRemaining: number
		needsAck: boolean
	}
	
	export interface LolLobbyRankedStatsUnsignedDTO {
		queues: LCUTypes.LolLobbyRankedPositionInfoDTO[]
		highestPreviousSeasonEndTier: string
		highestPreviousSeasonEndRank: string
		jwt: string
	}
	
	export interface LolLobbyReadyDto {
		ready: boolean
	}
	
	export interface LolLobbyReceivedInvitationDto {
		invitationId: string
		fromSummonerId: number
		state: LCUTypes.LolLobbyLobbyInvitationState
		timestamp: string
		fromSummonerName: string
		canAcceptInvitation: boolean
		restrictions: LCUTypes.LolLobbyEligibilityRestriction[]
		gameConfig: LCUTypes.LolLobbyReceivedInvitationGameConfigDto
		invitationType: LCUTypes.LolLobbyInvitationType
	}
	
	export interface LolLobbyReceivedInvitationGameConfigDto {
		gameMode: string
		queueId: number
		mapId: number
		inviteGameType: string
	}
	
	export interface LolLobbyRegistrationCredentials {
		summonerToken?: string
		inventoryToken?: string
		inventoryTokens?: string[]
		simpleInventoryToken?: string
		rankedOverviewToken?: string
		gameClientVersion?: string
		playerTokens?: Record<string, string>
	}
	
	export interface LolLobbyRegistrationStatus {
		complete: boolean
		errorCodes: string[]
	}
	
	export interface LolLobbyRiotMessagingServiceMessage {
		resource: string
		service: string
		version: string
		timestamp: number
		payload: string
	}
	
	export interface LolLobbyServiceProxyPayload {
		method: string
		url: string
		body: string
	}
	
	export interface LolLobbySubteamDataDto {
		subteamIndex: number
		intraSubteamPosition: number
	}
	
	export interface LolLobbySummoner {
		summonerId: number
		summonerLevel: number
		accountId: number
		puuid: string
		profileIconId: number
		displayName: string
		internalName: string
		gameName: string
		tagLine: string
	}
	
	export interface LolLobbyTFTNPESettings {
		data?: LCUTypes.LolLobbyTFTNPESettingsResource
		schemaVersion: number
	}
	
	export interface LolLobbyTFTNPESettingsResource {
		gamesPlayed: number
		gamesWon: number
	}
	
	export interface LolLobbyTFTNewPlayerDto {
		tftGamesPlayed: number
		tftGamesWon: number
	}
	
	export interface LolLobbyTeamBuilderActionV1 {
		actionId: number
		actorCellId: number
		type: string
		championId: number
		completed: boolean
		duration: number
	}
	
	export interface LolLobbyTeamBuilderAfkCheckStateV1 {
		maxAfkMillis: number
		remainingAfkMillis: number
		afkReady: boolean
		inventoryDraft: LCUTypes.LolLobbyTeamBuilderTbdInventory
		additionalInventoryTypes: string[]
		compressAfkCheckPayload: boolean
		mucJwtDto: LCUTypes.LolLobbyTeamBuilderMucJwtDto
	}
	
	export interface LolLobbyTeamBuilderBackwardsTransitionInfoV1 {
		backwardsTransitionReason: string
		initiatorSummonerIds: number[]
	}
	
	export interface LolLobbyTeamBuilderBenchChampion {
		championId: number
		isPriority: boolean
	}
	
	export interface LolLobbyTeamBuilderCellV1 {
		teamId: number
		cellId: number
		championPickIntent: number
		championId: number
		skinId: number
		assignedPosition: string
		spell1Id: number
		spell2Id: number
		summonerId: number
		puuid: string
		nameVisibilityType: string
		obfuscatedSummonerId: number
		obfuscatedPuuid: string
	}
	
	export interface LolLobbyTeamBuilderCellsV1 {
		alliedTeam: LCUTypes.LolLobbyTeamBuilderCellV1[]
		enemyTeam: LCUTypes.LolLobbyTeamBuilderCellV1[]
	}
	
	export interface LolLobbyTeamBuilderCeremonyV1 {
		name: string
		duration: number
	}
	
	export interface LolLobbyTeamBuilderChampSelectAction {
		id: number
		actorCellId: number
		championId: number
		type: string
		completed: boolean
		isAllyAction: boolean
		isInProgress: boolean
	}
	
	export interface LolLobbyTeamBuilderChampSelectChatRoomDetails {
		multiUserChatId: string
		multiUserChatPassword: string
		mucJwtDto: LCUTypes.LolLobbyTeamBuilderMucJwtDto
	}
	
	export interface LolLobbyTeamBuilderChampSelectDevPanelData {
		counter: number
		dtoIndex: number
		queueId: number
		teamIdSuffix: number
	}
	
	export interface LolLobbyTeamBuilderChampSelectMySelection {
		selectedSkinId?: number
		spell1Id?: number
		spell2Id?: number
		wardSkinId?: number
	}
	
	export interface LolLobbyTeamBuilderChampSelectPlayerSelection {
		cellId: number
		championId: number
		selectedSkinId: number
		wardSkinId: number
		spell1Id: number
		spell2Id: number
		team: number
		assignedPosition: string
		championPickIntent: number
		playerType: string
		summonerId: number
		puuid: string
		nameVisibilityType: string
		obfuscatedSummonerId: number
		obfuscatedPuuid: string
	}
	
	export interface LolLobbyTeamBuilderChampSelectSession {
		gameId: number
		timer: LCUTypes.LolLobbyTeamBuilderChampSelectTimer
		chatDetails: LCUTypes.LolLobbyTeamBuilderChampSelectChatRoomDetails
		myTeam: LCUTypes.LolLobbyTeamBuilderChampSelectPlayerSelection[]
		theirTeam: LCUTypes.LolLobbyTeamBuilderChampSelectPlayerSelection[]
		trades: LCUTypes.LolLobbyTeamBuilderChampSelectTradeContract[]
		pickOrderSwaps: LCUTypes.LolLobbyTeamBuilderChampSelectSwapContract[]
		actions: unknown[]
		localPlayerCellId: number
		allowSkinSelection: boolean
		allowDuplicatePicks: boolean
		allowBattleBoost: boolean
		boostableSkinCount: number
		allowRerolling: boolean
		rerollsRemaining: number
		allowLockedEvents: boolean
		lockedEventIndex: number
		benchEnabled: boolean
		benchChampions: LCUTypes.LolLobbyTeamBuilderBenchChampion[]
		counter: number
		recoveryCounter: number
		skipChampionSelect: boolean
		isSpectating: boolean
		hasSimultaneousBans: boolean
		hasSimultaneousPicks: boolean
	}
	
	export interface LolLobbyTeamBuilderChampSelectSwapContract {
		id: number
		cellId: number
		state: LCUTypes.LolLobbyTeamBuilderChampSelectSwapState
	}
	
	export type LolLobbyTeamBuilderChampSelectSwapState = "SENT" | "RECEIVED" | "INVALID" | "BUSY" | "AVAILABLE"
	
	export interface LolLobbyTeamBuilderChampSelectTimer {
		adjustedTimeLeftInPhase: number
		totalTimeInPhase: number
		phase: string
		isInfinite: boolean
		internalNowInEpochMs: number
	}
	
	export interface LolLobbyTeamBuilderChampSelectTradeContract {
		id: number
		cellId: number
		state: LCUTypes.LolLobbyTeamBuilderChampSelectTradeState
	}
	
	export type LolLobbyTeamBuilderChampSelectTradeState = "SENT" | "RECEIVED" | "INVALID" | "BUSY" | "AVAILABLE"
	
	export interface LolLobbyTeamBuilderChampionBenchChampionV1 {
		championId: number
		isPriority: boolean
	}
	
	export interface LolLobbyTeamBuilderChampionBenchStateV1 {
		benchEnabled: boolean
		championIds: number[]
		benchChampions: LCUTypes.LolLobbyTeamBuilderChampionBenchChampionV1[]
	}
	
	export interface LolLobbyTeamBuilderChampionSelectPreferences {
		skins: Record<string, number>
		spells: Record<string, unknown>
	}
	
	export interface LolLobbyTeamBuilderChampionSelectStateV1 {
		teamId: string
		teamChatRoomId: string
		subphase: string
		actionSetList: unknown[]
		ceremoniesByActionSetIndex: Record<string, unknown>
		currentActionSetIndex: number
		cells: LCUTypes.LolLobbyTeamBuilderCellsV1
		localPlayerCellId: number
		currentTotalTimeMillis: number
		currentTimeRemainingMillis: number
		trades: LCUTypes.LolLobbyTeamBuilderTradeV1[]
		pickOrderSwaps: LCUTypes.LolLobbyTeamBuilderPickOrderSwapV1[]
		pickIntentClearedReason: string
		allowOptingOutOfBanning: boolean
		allowSkinSelection: boolean
		allowDuplicatePicks: boolean
		lcuSkipsSendingLoadoutsGco: boolean
		rerollState: LCUTypes.LolLobbyTeamBuilderRerollStateV1
		lockedEventsState: LCUTypes.LolLobbyTeamBuilderLockedEventsStateV1
		battleBoostState: LCUTypes.LolLobbyTeamBuilderTeamBuilderBoostInfo
		championBenchState: LCUTypes.LolLobbyTeamBuilderChampionBenchStateV1
		inventoryDraft: LCUTypes.LolLobbyTeamBuilderTbdInventory
		skipChampionSelect: boolean
		isSpectating: boolean
	}
	
	export interface LolLobbyTeamBuilderCountdownTimer {
		phaseName: string
		timer: number
		counter: number
	}
	
	export interface LolLobbyTeamBuilderGameModeSpellList {
		spells: number[]
	}
	
	export interface LolLobbyTeamBuilderGameflowGameClient {
		running: boolean
	}
	
	export interface LolLobbyTeamBuilderGameflowGameMap {
		perPositionRequiredSummonerSpells: Record<string, LCUTypes.LolLobbyTeamBuilderGameModeSpellList>
		perPositionDisallowedSummonerSpells: Record<string, LCUTypes.LolLobbyTeamBuilderGameModeSpellList>
	}
	
	export interface LolLobbyTeamBuilderGameflowSession {
		gameClient: LCUTypes.LolLobbyTeamBuilderGameflowGameClient
		map: LCUTypes.LolLobbyTeamBuilderGameflowGameMap
	}
	
	export interface LolLobbyTeamBuilderGatekeeperRestricted {
		gatekeeperRestrictions: LCUTypes.LolLobbyTeamBuilderGatekeeperRestriction[]
	}
	
	export interface LolLobbyTeamBuilderGatekeeperRestriction {
		summonerId: number
		reason: string
		remainingMillis: number
		payload: string
		queueId: number
	}
	
	export interface LolLobbyTeamBuilderLeaverBusterAbandoned {
		abandonerName: string
	}
	
	export interface LolLobbyTeamBuilderLobby {
		queueId: number
		invitationId: string
		multiUserChatId: string
		multiUserChatPassword: string
		mucJwtDto: LCUTypes.LolLobbyTeamBuilderMucJwtDto
		members: LCUTypes.LolLobbyTeamBuilderLobbyMember[]
		localMember: LCUTypes.LolLobbyTeamBuilderLobbyMember
		invitations: LCUTypes.LolLobbyTeamBuilderLobbyInvitation[]
		wasKicked: boolean
		removalReason: LCUTypes.LolLobbyTeamBuilderLobbyRemovedFromGameReason
		canStartMatchmaking: boolean
		showPositionSelector: boolean
		showPositionExcluder: boolean
		specifiablePositionPreferences: string[]
		autoFillEligible: boolean
		autoFillProtectedForStreaking: boolean
		autoFillProtectedForPromos: boolean
		isTeamBuilderManaged: boolean
		premadeSizeAllowed: boolean
		requiredPositionCoverageMet: boolean
		allowablePremadeSizes: number[]
	}
	
	export interface LolLobbyTeamBuilderLobbyCountdownTimer {
		phaseName: string
		timer: number
		counter: number
	}
	
	export interface LolLobbyTeamBuilderLobbyInvitation {
		invitationMetaData: unknown
	}
	
	export interface LolLobbyTeamBuilderLobbyMember {
		id: number
		isOwner: boolean
		canInviteOthers: boolean
		positionPreferences: LCUTypes.LolLobbyTeamBuilderLobbyPositionPreferences
		excludedPositionPreference?: string
		showPositionExcluder: boolean
		autoFillEligible: boolean
		autoFillProtectedForStreaking: boolean
		autoFillProtectedForPromos: boolean
		autoFillProtectedForSoloing: boolean
	}
	
	export interface LolLobbyTeamBuilderLobbyPositionPreferences {
		firstPreference: string
		secondPreference: string
	}
	
	export interface LolLobbyTeamBuilderLobbyPositionPreferencesV2 {
		firstPreference: string
		secondPreference: string
		excludedPreference: string
	}
	
	export type LolLobbyTeamBuilderLobbyRemovedFromGameReason = "ServiceShutdown" | "GameStartError" | "Timeout" | "Other" | "ServiceError" | "Left" | "Disbanded" | "Kicked" | "None"
	
	export interface LolLobbyTeamBuilderLockedEventsStateV1 {
		allowLockedEvents: boolean
		lockedEventIndex: number
	}
	
	export interface LolLobbyTeamBuilderLoginSession {
		state: LCUTypes.LolLobbyTeamBuilderLoginSessionState
		summonerId: number
		accountId: number
		connected: boolean
	}
	
	export type LolLobbyTeamBuilderLoginSessionState = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"
	
	export interface LolLobbyTeamBuilderMatchmakingDodgeData {
		state: LCUTypes.LolLobbyTeamBuilderMatchmakingDodgeState
		dodgerId: number
	}
	
	export type LolLobbyTeamBuilderMatchmakingDodgeState = "TournamentDodged" | "StrangerDodged" | "PartyDodged" | "Invalid"
	
	export type LolLobbyTeamBuilderMatchmakingDodgeWarning = "Penalty" | "Warning" | "None"
	
	export interface LolLobbyTeamBuilderMatchmakingLowPriorityData {
		penalizedSummonerIds: number[]
		penaltyTime: number
		penaltyTimeRemaining: number
		bustedLeaverAccessToken: string
	}
	
	export interface LolLobbyTeamBuilderMatchmakingReadyCheckResource {
		state: LCUTypes.LolLobbyTeamBuilderMatchmakingReadyCheckState
		playerResponse: LCUTypes.LolLobbyTeamBuilderMatchmakingReadyCheckResponse
		dodgeWarning: LCUTypes.LolLobbyTeamBuilderMatchmakingDodgeWarning
		timer: number
		declinerIds: number[]
	}
	
	export type LolLobbyTeamBuilderMatchmakingReadyCheckResponse = "Declined" | "Accepted" | "None"
	
	export type LolLobbyTeamBuilderMatchmakingReadyCheckState = "Error" | "PartyNotReady" | "StrangerNotReady" | "EveryoneReady" | "InProgress" | "Invalid"
	
	export interface LolLobbyTeamBuilderMatchmakingSearch {
		searchState: LCUTypes.LolLobbyTeamBuilderMatchmakingSearchState
	}
	
	export interface LolLobbyTeamBuilderMatchmakingSearchErrorResource {
		id: number
		errorType: string
		penalizedSummonerId: number
		penaltyTimeRemaining: number
		message: string
	}
	
	export interface LolLobbyTeamBuilderMatchmakingSearchResource {
		queueId: number
		isCurrentlyInQueue: boolean
		lobbyId: string
		searchState: LCUTypes.LolLobbyTeamBuilderMatchmakingSearchState
		timeInQueue: number
		estimatedQueueTime: number
		readyCheck: LCUTypes.LolLobbyTeamBuilderMatchmakingReadyCheckResource
		dodgeData: LCUTypes.LolLobbyTeamBuilderMatchmakingDodgeData
		lowPriorityData: LCUTypes.LolLobbyTeamBuilderMatchmakingLowPriorityData
		errors: LCUTypes.LolLobbyTeamBuilderMatchmakingSearchErrorResource[]
	}
	
	export type LolLobbyTeamBuilderMatchmakingSearchState = "ServiceShutdown" | "ServiceError" | "Error" | "Found" | "Searching" | "Canceled" | "AbandonedLowPriorityQueue" | "Invalid"
	
	export interface LolLobbyTeamBuilderMucJwtDto {
		jwt: string
		channelClaim: string
		domain: string
		targetRegion: string
	}
	
	export interface LolLobbyTeamBuilderPickOrderSwapV1 {
		id: number
		cellId: number
		state: string
	}
	
	export interface LolLobbyTeamBuilderQueue {
		id: number
		mapId: number
		name: string
		shortName: string
		description: string
		detailedDescription: string
		type: string
		gameMode: string
		assetMutator: string
		category: LCUTypes.LolLobbyTeamBuilderQueueGameCategory
		gameTypeConfig: LCUTypes.LolLobbyTeamBuilderQueueGameTypeConfig
		numPlayersPerTeam: number
		minimumParticipantListSize: number
		maximumParticipantListSize: number
		minLevel: number
		isRanked: boolean
		areFreeChampionsAllowed: boolean
		isTeamBuilderManaged: boolean
		queueAvailability: LCUTypes.LolLobbyTeamBuilderQueueAvailability
		queueRewards: LCUTypes.LolLobbyTeamBuilderQueueReward
		spectatorEnabled: boolean
		championsRequiredToPlay: number
		allowablePremadeSizes: number[]
		showPositionSelector: boolean
		showQuickPlaySlotSelection: boolean
		lastToggledOffTime: number
		lastToggledOnTime: number
		removalFromGameAllowed: boolean
		removalFromGameDelayMinutes: number
	}
	
	export type LolLobbyTeamBuilderQueueAvailability = "DoesntMeetRequirements" | "PlatformDisabled" | "Available"
	
	export type LolLobbyTeamBuilderQueueGameCategory = "Alpha" | "VersusAi" | "PvP" | "Custom" | "None"
	
	export interface LolLobbyTeamBuilderQueueGameTypeConfig {
		id: number
		name: string
		maxAllowableBans: number
		allowTrades: boolean
		allowPickOrderSwaps: boolean
		exclusivePick: boolean
		duplicatePick: boolean
		teamChampionPool: boolean
		crossTeamChampionPool: boolean
		advancedLearningQuests: boolean
		battleBoost: boolean
		deathMatch: boolean
		doNotRemove: boolean
		learningQuests: boolean
		onboardCoopBeginner: boolean
		reroll: boolean
		mainPickTimerDuration: number
		postPickTimerDuration: number
		banTimerDuration: number
		pickMode: string
		banMode: string
	}
	
	export interface LolLobbyTeamBuilderQueueReward {
		isIpEnabled: boolean
		isXpEnabled: boolean
		isChampionPointsEnabled: boolean
		partySizeIpRewards: number[]
	}
	
	export interface LolLobbyTeamBuilderRerollStateV1 {
		allowRerolling: boolean
		rerollsRemaining: number
	}
	
	export interface LolLobbyTeamBuilderSettingCategoryResource {
		schemaVersion: number
		data: LCUTypes.LolLobbyTeamBuilderChampionSelectPreferences
	}
	
	export interface LolLobbyTeamBuilderTBDMatchmakingState {
		estimatedMatchmakingTimeMillis: number
		timeInMatchmakingMillis: number
		backwardsTransitionReason: string
	}
	
	export interface LolLobbyTeamBuilderTbLobbyStateResource {
		counter: number
		recoveryCounter: number
		phaseName: string
		queueId: number
		gameId: number
		matchmakingState?: LCUTypes.LolLobbyTeamBuilderTBDMatchmakingState
		afkCheckState?: LCUTypes.LolLobbyTeamBuilderAfkCheckStateV1
		championSelectState?: LCUTypes.LolLobbyTeamBuilderChampionSelectStateV1
	}
	
	export interface LolLobbyTeamBuilderTbRemovedFromServiceNotification {
		reason: string
		backwardsTransitionInfo: LCUTypes.LolLobbyTeamBuilderBackwardsTransitionInfoV1
	}
	
	export interface LolLobbyTeamBuilderTbdInventory {
		lastSelectedSkinIdByChampionId: Record<string, number>
		skinIds: number[]
		spellIds: number[]
		initialSpellIds: number[]
		allChampionIds: number[]
		disabledChampionIds: number[]
	}
	
	export interface LolLobbyTeamBuilderTeamBoost {
		summonerId: number
		skinUnlockMode: string
		price: number
		ipReward: number
		ipRewardForPurchaser: number
		availableSkins: number[]
		unlocked: boolean
	}
	
	export interface LolLobbyTeamBuilderTeamBuilderBoostInfo {
		allowBattleBoost: boolean
		boostableSkinCount: number
		activatorCellId: number
		battleBoostActivated: boolean
		cost: number
		unlockedSkinIds: number[]
	}
	
	export interface LolLobbyTeamBuilderTeambuilderLeagueEdgeResponse {
		payload: LCUTypes.LolLobbyTeamBuilderTbLobbyStateResource
		status: string
	}
	
	export interface LolLobbyTeamBuilderTradeV1 {
		id: number
		cellId: number
		state: string
	}
	
	export interface LolLobbyUserInfoToken {
		userInfo: string
	}
	
	export interface LolLobbyUserResource {
		summonerId: number
		lol: Record<string, string>
	}
	
	export interface LolLoginAccessToken {
		token: string
		scopes: string[]
		expiry: number
	}
	
	export interface LolLoginAccountStateResource {
		state: LCUTypes.LolLoginAccountStateType
	}
	
	export type LolLoginAccountStateType = "GENERATING" | "TRANSFERRED_OUT" | "TRANSFERRING_IN" | "TRANSFERRING_OUT" | "ENABLED" | "CREATING"
	
	export interface LolLoginAuthorization {
		currentPlatformId: string
		currentAccountId: number
		subject: string
	}
	
	export type LolLoginConfigReadinessEnum = "Disabled" | "Ready" | "NotReady"
	
	export interface LolLoginConfigStatus {
		readiness: LCUTypes.LolLoginConfigReadinessEnum
	}
	
	export type LolLoginConfigType = "player" | "public"
	
	export interface LolLoginCrashReportingEnvironment {
		environment: string
		userName: string
		userId: string
	}
	
	export interface LolLoginIdToken {
		token: string
		expiry: number
	}
	
	export interface LolLoginLcdsResponse {
		typeName: string
		body: unknown
	}
	
	export interface LolLoginLcdsServiceProxyResponse {
		serviceName: string
		methodName: string
		messageId: string
		status: string
		payload: string
		compressedPayload: boolean
	}
	
	export type LolLoginLeagueSessionStatus = "ANTI_ADDICTION_EXPIRED" | "DUPLICATED" | "EXPIRED" | "INITIALIZED" | "UNINITIALIZED"
	
	export interface LolLoginLeagueSessionTokenEnvelope {
		token?: string
		logoutOnFailure: boolean
	}
	
	export type LolLoginLoginConnectionMode = "RiotClient" | "Partner" | "Legacy" | "Preparing"
	
	export interface LolLoginLoginConnectionState {
		mode: LCUTypes.LolLoginLoginConnectionMode
		isUsingDeveloperAuthToken: boolean
		isPartnerRiotClient: boolean
	}
	
	export interface LolLoginLoginError {
		id: string
		messageId: string
		description: string
	}
	
	export interface LolLoginLoginQueue {
		estimatedPositionInQueue: number
		approximateWaitTimeSeconds?: number
		maxDisplayedPosition?: number
		maxDisplayedWaitTimeSeconds?: number
	}
	
	export interface LolLoginLoginSession {
		state: LCUTypes.LolLoginLoginSessionStates
		username: string
		userAuthToken: string
		accountId: number
		summonerId?: number
		isInLoginQueue: boolean
		error?: LCUTypes.LolLoginLoginError
		idToken: string
		puuid: string
		isNewPlayer: boolean
		connected: boolean
	}
	
	export type LolLoginLoginSessionStates = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"
	
	export interface LolLoginLoginSessionWallet {
		ip: number
		rp: number
	}
	
	export interface LolLoginPlatformGeneratedCredentials {
		username: string
		password: string
	}
	
	export interface LolLoginRSOConfigReadyState {
		ready: boolean
	}
	
	export interface LolLoginRSOPlayerCredentials {
		username: string
		password: string
		platformId: string
	}
	
	export interface LolLoginSummonerCreatedResource {
		summonerId: number
	}
	
	export interface LolLoginSummonerSessionResource {
		summonerId: number
		displayName: string
		isNewPlayer: boolean
	}
	
	export interface LolLoginUsernameAndPassword {
		username: string
		password: string
	}
	
	export type LolLootCelebrationType = "FULLSCREEN" | "TOAST" | "NONE"
	
	export interface LolLootCollectionsChampionMinimal {
		id: number
		ownership: LCUTypes.LolLootCollectionsOwnership
	}
	
	export interface LolLootCollectionsChampionSkinMinimal {
		championId: number
		id: number
		name: string
		ownership: LCUTypes.LolLootCollectionsOwnership
		splashPath: string
		tilePath: string
	}
	
	export interface LolLootCollectionsEmote {
		itemId: number
		ownershipType: LCUTypes.LolLootInventoryOwnership
	}
	
	export interface LolLootCollectionsOwnership {
		loyaltyReward: boolean
		xboxGPReward: boolean
		owned: boolean
		rental: LCUTypes.LolLootCollectionsRental
	}
	
	export interface LolLootCollectionsRental {
		rented: boolean
	}
	
	export interface LolLootCollectionsStatstone {
		itemId: number
		ownershipType: LCUTypes.LolLootInventoryOwnership
	}
	
	export interface LolLootCollectionsSummonerIcon {
		itemId: number
	}
	
	export interface LolLootCollectionsWardSkin {
		id: number
		name: string
		ownership: LCUTypes.LolLootCollectionsOwnership
		wardImagePath: string
		wardShadowImagePath: string
	}
	
	export interface LolLootContextMenu {
		name: string
		actionType: string
		recipeDescription: string
		recipeContextMenuAction: string
		enabled: boolean
		essenceType: string
		essenceQuantity: number
		requiredTokens: string
		requiredOthers: string
		requiredOthersName: string
		requiredOthersCount: number
	}
	
	export interface LolLootCosmeticsTFTDamageSkin {
		contentId: string
		itemId: number
		name: string
		description: string
		loadoutsIcon: string
		owned: boolean
		selected: boolean
		loyalty: boolean
		f2p: boolean
		rarityValue: number
		purchaseDate: string
		level: number
		groupId: number
		groupName: string
		upgrades: string[]
	}
	
	export interface LolLootCosmeticsTFTDamageSkinViewModel {
		contentId: string
		itemId: number
		name: string
		description: string
		loadoutsIcon: string
		owned: boolean
		selected: boolean
		loyalty: boolean
		f2p: boolean
		rarityValue: number
		purchaseDate: string
		isRecentItem: boolean
		level: number
		groupId: number
		groupName: string
		upgrades: LCUTypes.LolLootCosmeticsTFTDamageSkinViewModel[]
	}
	
	export interface LolLootCosmeticsTFTMapSkinViewModel {
		itemId: number
		name: string
		description: string
		loadoutsIcon: string
		owned: boolean
		selected: boolean
		loyalty: boolean
		f2p: boolean
	}
	
	export interface LolLootCounter {
		id: string
		name: string
		groupId: string
		direction: string
		startValue: number
	}
	
	export interface LolLootCounterInstance {
		ownerId: string
		productId: string
		groupId: string
		counterId: string
		counterValue: number
	}
	
	export interface LolLootCurrencyConfiguration {
		currenciesUsingCapWallets: string[]
	}
	
	export interface LolLootEntityInstance {
		groupId: string
		counters: LCUTypes.LolLootCounterInstance[]
		milestones: LCUTypes.LolLootMilestoneInstance[]
	}
	
	export interface LolLootGameDataSummonerEmote {
		id: number
		name: string
		inventoryIcon: string
		description: string
	}
	
	export interface LolLootGameDataSummonerIcon {
		id: number
		title: string
		imagePath: string
	}
	
	export type LolLootGameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"
	
	export interface LolLootGameflowSession {
		phase: LCUTypes.LolLootGameflowPhase
	}
	
	export type LolLootGrantStatus = "FAILED" | "FULFILLED" | "PENDING_SELECTION" | "PENDING_FULFILLMENT"
	
	export interface LolLootGrantorDescription {
		appName: string
		entityId: string
	}
	
	export interface LolLootGroup {
		id: string
		productId: string
		name: string
		repeat: LCUTypes.LolLootRepeat
		counters: LCUTypes.LolLootCounter[]
		milestones: LCUTypes.LolLootMilestone[]
	}
	
	export type LolLootInventoryOwnership = "F2P" | "RENTED" | "OWNED"
	
	export interface LolLootItemKey {
		inventoryType: string
		itemId: number
	}
	
	export type LolLootItemOwnershipStatus = "OWNED" | "RENTAL" | "FREE" | "NONE"
	
	export interface LolLootLoginDataPacket {
		simpleMessages: LCUTypes.LolLootLoginSimpleMessage[]
	}
	
	export interface LolLootLoginSession {
		state: LCUTypes.LolLootLoginSessionStates
		summonerId: number
		accountId: number
	}
	
	export type LolLootLoginSessionStates = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"
	
	export interface LolLootLoginSimpleMessage {
		accountId: number
		msgId: string
		type: string
		params: string[]
	}
	
	export interface LolLootLootBundleContentGdsResource {
		localizedDescription: string
	}
	
	export interface LolLootLootBundleGdsResource {
		id: string
		description: string
		descriptionLong: string
		image: string
		contents: LCUTypes.LolLootLootBundleContentGdsResource[]
	}
	
	export interface LolLootLootDataGdsResource {
		LootItems: LCUTypes.LolLootLootItemGdsResource[]
		LootRecipes: LCUTypes.LolLootLootRecipeGdsResource[]
		LootTables: LCUTypes.LolLootLootTableGdsResource[]
		LootBundles: LCUTypes.LolLootLootBundleGdsResource[]
	}
	
	export interface LolLootLootDescription {
		lootName: string
		localizedDescription: string
		localizedDescriptionLong: string
		imagePath: string
		childLootTableNames: string[]
		childrenDescriptions: LCUTypes.LolLootLootDescription[]
	}
	
	export interface LolLootLootDropTableEntryGdsResource {
		lootId: string
		localizedDescription: string
	}
	
	export interface LolLootLootGrantNotification {
		id: number
		gameId: number
		playerId: number
		championId: number
		playerGrade: string
		lootName: string
		messageKey: string
		msgId: string
		accountId: number
	}
	
	export interface LolLootLootItem {
		lootName: string
		asset: string
		type: string
		rarity: string
		value: number
		storeItemId: number
		upgradeLootName: string
		expiryTime: number
		tags: string
		displayCategories: string
		rentalSeconds: number
		rentalGames: number
	}
	
	export interface LolLootLootItemGdsResource {
		id: string
		name: string
		description: string
		image: string
		startDate: string
		endDate: string
		recipeMenuTitle: string
		recipeMenuSubtitle: string
		mappedStoreId: number
		lifetimeMax: number
		autoRedeem: boolean
		recipeMenuActive: boolean
		rarity: LCUTypes.LolLootLootRarity
		type: LCUTypes.LolLootLootType
	}
	
	export interface LolLootLootMilestone {
		id: string
		threshold: number
		rewards: LCUTypes.LolLootLootMilestoneReward[]
	}
	
	export type LolLootLootMilestoneClaimStatus = "FAILED" | "COMPLETED" | "IN_PROGRESS" | "NOT_STARTED"
	
	export interface LolLootLootMilestoneRepeat {
		repeatCount: number
		repeatScope: number
		multiplier: number
	}
	
	export interface LolLootLootMilestoneReward {
		rewardGroupId: string
		rewardType: string
		itemInstanceId: string
		inventoryType: string
		itemId: number
		quantity: number
		lootItem?: LCUTypes.LolLootPlayerLoot
	}
	
	export interface LolLootLootMilestones {
		id: string
		progressionConfigId: string
		active: boolean
		startDate: string
		endDate: string
		storeGroupTitle: string
		repeat: LCUTypes.LolLootLootMilestoneRepeat
		lootItems: string[]
		recipes: string[]
		milestones: LCUTypes.LolLootLootMilestone[]
		errorCachingMilestoneSet: boolean
	}
	
	export interface LolLootLootMilestonesClaimResponse {
		lootMilestoneSetId: string
		claimedMilestones: string[]
		status: LCUTypes.LolLootLootMilestoneClaimStatus
	}
	
	export interface LolLootLootMilestonesCounter {
		lootMilestonesId: string
		counterValue: number
		completedLoops: number
		readyToClaimMilestones: string[]
	}
	
	export interface LolLootLootMilestonesDataGdsResource {
		id: string
		storeGroupTitle: string
		startDate: string
		endDate: string
		recipes: LCUTypes.LolLootMilestonesRecipeGdsResource[]
		progressTrack: LCUTypes.LolLootProgressionConfigGdsResource
	}
	
	export interface LolLootLootOddsResponse {
		lootId: string
		parentId: string
		dropRate: number
		quantity: number
		label: string
		query: string
		lootOrder: number
		children: LCUTypes.LolLootLootOddsResponse[]
	}
	
	export interface LolLootLootOutputGdsResource {
		lootId: string
		localizedDescription: string
	}
	
	export type LolLootLootRarity = "Ultimate" | "Mythic" | "Legendary" | "Epic" | "Default"
	
	export interface LolLootLootRecipeGdsResource {
		id: string
		description: string
		contextMenuText: string
		requirementText: string
		imagePath: string
		introVideoPath: string
		loopVideoPath: string
		outroVideoPath: string
		hasVisibleLootOdds: boolean
		outputs: LCUTypes.LolLootLootOutputGdsResource[]
	}
	
	export interface LolLootLootTableGdsResource {
		id: string
		description: string
		descriptionLong: string
		image: string
		dropChance: LCUTypes.LolLootLootDropTableEntryGdsResource[]
	}
	
	export type LolLootLootType = "TFT_Damage_Skin" | "TFT_Map_Skin" | "SkinBorder" | "Boost" | "Statstone_Shard" | "Statstone" | "Egg_Color" | "Egg" | "Companion" | "SummonerIcon" | "Skin_Rental" | "Skin" | "WardSkin" | "Material" | "Currency" | "Chest"
	
	export interface LolLootMassDisenchantClientConfig {
		maxLootItemsSizeMassCraft: number
		enabled: boolean
	}
	
	export interface LolLootMilestone {
		id: string
		name: string
		groupId: string
		counterId: string
		triggerValue: number
		properties: Record<string, string>
	}
	
	export interface LolLootMilestoneInstance {
		milestoneId: string
		ownerId: string
		productId: string
		groupId: string
		counterId: string
		triggerValue: number
		repeatSequence: number
		triggered: boolean
	}
	
	export interface LolLootMilestoneLootItemRewardGdsResource {
		internalName: string
	}
	
	export interface LolLootMilestonesProgressionConfigRepeatGdsResource {
		name: LCUTypes.LolLootMilestonesProgressionGroupRepeatGdsResource
	}
	
	export interface LolLootMilestonesProgressionCounterGdsResource {
		id: string
		name: string
		direction: string
		startValue: number
	}
	
	export interface LolLootMilestonesProgressionGroupRepeatGdsResource {
		Count: number
		Scope: number
		Multiplier: number
	}
	
	export interface LolLootMilestonesRecipeGdsResource {
		name: string
	}
	
	export interface LolLootPlayerLoot {
		lootName: string
		lootId: string
		refId: string
		localizedName: string
		localizedDescription: string
		itemDesc: string
		displayCategories: string
		rarity: string
		tags: string
		type: string
		asset: string
		tilePath: string
		splashPath: string
		shadowPath: string
		upgradeLootName: string
		upgradeEssenceName: string
		disenchantLootName: string
		localizedRecipeTitle: string
		localizedRecipeSubtitle: string
		itemStatus: LCUTypes.LolLootItemOwnershipStatus
		parentItemStatus: LCUTypes.LolLootItemOwnershipStatus
		redeemableStatus: LCUTypes.LolLootRedeemableStatus
		count: number
		rentalGames: number
		storeItemId: number
		parentStoreItemId: number
		value: number
		upgradeEssenceValue: number
		disenchantValue: number
		disenchantRecipeName: string
		expiryTime: number
		rentalSeconds: number
		isNew: boolean
		isRental: boolean
	}
	
	export interface LolLootPlayerLootDelta {
		deltaCount: number
		playerLoot: LCUTypes.LolLootPlayerLoot
	}
	
	export interface LolLootPlayerLootMap {
		version: number
		playerLoot: Record<string, LCUTypes.LolLootPlayerLoot>
	}
	
	export interface LolLootPlayerLootNotification {
		id: string
		count: number
		acknowledged: boolean
	}
	
	export interface LolLootPlayerLootUpdate {
		added: LCUTypes.LolLootPlayerLootDelta[]
		removed: LCUTypes.LolLootPlayerLootDelta[]
		redeemed: LCUTypes.LolLootPlayerLootDelta[]
	}
	
	export interface LolLootProgressionConfigGdsResource {
		id: string
		name: string
		repeat: LCUTypes.LolLootMilestonesProgressionConfigRepeatGdsResource
		counters: LCUTypes.LolLootMilestonesProgressionCounterGdsResource[]
		milestones: LCUTypes.LolLootProgressionConfigMilestoneGdsResource[]
	}
	
	export interface LolLootProgressionConfigMilestoneGdsResource {
		id: string
		name: string
		triggerValue: number
		properties: LCUTypes.LolLootProgressionConfigMilestonePropertiesGdsResource[]
		counter: LCUTypes.LolLootMilestonesProgressionCounterGdsResource
	}
	
	export interface LolLootProgressionConfigMilestonePropertiesGdsResource {
		id: string
		name: string
		description: string
		rewardStrategy: string
		rewards: LCUTypes.LolLootProgressionConfigMilestoneRewardGdsResource[]
	}
	
	export interface LolLootProgressionConfigMilestoneRewardGdsResource {
		id: string
		rewardType: string
		quantity: number
		lootItemToGrant?: LCUTypes.LolLootMilestoneLootItemRewardGdsResource
		legacyLootItem: string
	}
	
	export interface LolLootQueryEvaluatedLootItem {
		lootName: string
		localizedName: string
	}
	
	export interface LolLootRMSPayload {
		productId: string
		affinities: string[]
	}
	
	export interface LolLootRecipeMenuConfig {
		enabled: boolean
		lootItemsUsingBreakoutRecipeMenu: string[]
		alwaysShowLootIds: string[]
	}
	
	export interface LolLootRecipeMetadata {
		guaranteedDescriptions: LCUTypes.LolLootLootDescription[]
		bonusDescriptions: LCUTypes.LolLootLootDescription[]
		tooltipsDisabled: boolean
	}
	
	export interface LolLootRecipeOutput {
		lootName: string
		quantity: number
	}
	
	export interface LolLootRecipeSlot {
		slotNumber: number
		lootIds: string[]
		tags: string
		quantity: number
	}
	
	export interface LolLootRecipeWithMilestones {
		recipeName: string
		type: string
		description: string
		contextMenuText: string
		requirementText: string
		imagePath: string
		introVideoPath: string
		loopVideoPath: string
		outroVideoPath: string
		displayCategories: string
		crafterName: string
		slots: LCUTypes.LolLootRecipeSlot[]
		outputs: LCUTypes.LolLootRecipeOutput[]
		metadata: LCUTypes.LolLootRecipeMetadata
		lootMilestoneIds: string[]
	}
	
	export type LolLootRedeemableStatus = "SKIN_NOT_OWNED" | "CHAMPION_NOT_OWNED" | "ALREADY_RENTED" | "ALREADY_OWNED" | "NOT_REDEEMABLE_RENTAL" | "NOT_REDEEMABLE" | "REDEEMABLE_RENTAL" | "REDEEMABLE" | "UNKNOWN"
	
	export interface LolLootRegionLocale {
		region: string
		locale: string
	}
	
	export interface LolLootRepeat {
		count: number
		scope: number
		multiplier: number
	}
	
	export interface LolLootRequestDTO_SelectionRequestDTO {
		data: LCUTypes.LolLootSelectionRequestDTO
		metadata: LCUTypes.LolLootRequestMetadataDTO
	}
	
	export interface LolLootRequestDTO_vector_SelectionRequestDTO {
		data: LCUTypes.LolLootSelectionRequestDTO[]
		metadata: LCUTypes.LolLootRequestMetadataDTO
	}
	
	export interface LolLootRequestMetadataDTO {
		transactionId?: string
	}
	
	export interface LolLootResponseDTO_SvcRewardGrant {
		data: LCUTypes.LolLootSvcRewardGrant
		metadata: LCUTypes.LolLootResponseMetadataDTO
	}
	
	export interface LolLootResponseDTO_map_RewardGroupId_SelectGrantStatus {
		data: Record<string, LCUTypes.LolLootSelectGrantStatusResponse>
		metadata: LCUTypes.LolLootResponseMetadataDTO
	}
	
	export interface LolLootResponseDTO_vector_SvcRewardGrant {
		data: LCUTypes.LolLootSvcRewardGrant[]
		metadata: LCUTypes.LolLootResponseMetadataDTO
	}
	
	export interface LolLootResponseDTO_vector_SvcRewardGroup {
		data: LCUTypes.LolLootSvcRewardGroup[]
		metadata: LCUTypes.LolLootResponseMetadataDTO
	}
	
	export interface LolLootResponseMetadataDTO {
		[key: string | number]: any
	}
	
	export interface LolLootReward {
		id: string
		itemId: string
		itemType: string
		quantity: number
		fulfillmentSource: string
		media: Record<string, string>
		localizations: Record<string, string>
	}
	
	export interface LolLootRewardGrant {
		info: LCUTypes.LolLootSvcRewardGrant
		rewardGroup: LCUTypes.LolLootSvcRewardGroup
	}
	
	export type LolLootRewardStatus = "FAILED" | "FULFILLED" | "PENDING"
	
	export type LolLootRewardStrategy = "SELECTION" | "RANDOM" | "ALL"
	
	export interface LolLootRewardsConfig {
		GrantFiltering: boolean
	}
	
	export type LolLootSelectGrantStatusResponse = "FAILED" | "SELECTED"
	
	export interface LolLootSelectionRequestDTO {
		grantId: string
		rewardGroupId: string
		selections: string[]
	}
	
	export interface LolLootSelectionStrategyConfig {
		minSelectionsAllowed: number
		maxSelectionsAllowed: number
	}
	
	export interface LolLootSvcRewardGrant {
		id: string
		granteeId: string
		rewardGroupId: string
		dateCreated: string
		status: LCUTypes.LolLootGrantStatus
		grantElements: LCUTypes.LolLootSvcRewardGrantElement[]
		selectedIds: string[]
		viewed: boolean
		grantorDescription: LCUTypes.LolLootGrantorDescription
		messageParameters: Record<string, unknown>
	}
	
	export interface LolLootSvcRewardGrantElement {
		elementId: string
		itemId: string
		itemType: string
		fulfillmentSource: string
		status: LCUTypes.LolLootRewardStatus
		quantity: number
		media: Record<string, string>
		localizations: Record<string, string>
	}
	
	export interface LolLootSvcRewardGroup {
		id: string
		productId: string
		types: string[]
		rewards: LCUTypes.LolLootReward[]
		childRewardGroupIds: string[]
		rewardStrategy: LCUTypes.LolLootRewardStrategy
		selectionStrategyConfig?: LCUTypes.LolLootSelectionStrategyConfig
		active: boolean
		media: Record<string, string>
		localizations: Record<string, string>
		celebrationType: LCUTypes.LolLootCelebrationType
	}
	
	export interface LolLootTFTDamageSkinGroupViewModel {
		groupName: string
		groupId: number
		numOwned: number
		numAvailable: number
		items: LCUTypes.LolLootCosmeticsTFTDamageSkinViewModel[]
	}
	
	export interface LolLootTFTDamageSkinGroupedViewModel {
		selectedLoadoutItem: LCUTypes.LolLootCosmeticsTFTDamageSkinViewModel
		defaultItemId: number
		groups: LCUTypes.LolLootTFTDamageSkinGroupViewModel[]
	}
	
	export interface LolLootTFTMapSkinGroupViewModel {
		items: LCUTypes.LolLootCosmeticsTFTMapSkinViewModel[]
	}
	
	export interface LolLootTFTMapSkinGroupedViewModel {
		selectedLoadoutItem: LCUTypes.LolLootCosmeticsTFTMapSkinViewModel
		defaultItemId: number
		groups: LCUTypes.LolLootTFTMapSkinGroupViewModel[]
	}
	
	export interface LolLootVerboseLootOddsResponse {
		recipeName: string
		chanceToContain: LCUTypes.LolLootLootOddsResponse[]
		guaranteedToContain: LCUTypes.LolLootLootOddsResponse[]
		lootItem: LCUTypes.LolLootPlayerLoot
		hasPityRules: boolean
		checksOwnership: boolean
	}
	
	export interface LolLoyaltyAccessToken {
		token: string
	}
	
	export interface LolLoyaltyGlobalRewards {
		allChampions: boolean
	}
	
	export interface LolLoyaltyInventoryDTO {
		items: Record<string, unknown>
	}
	
	export interface LolLoyaltyInventoryItemDTO {
		inventoryType: string
		loyalty: boolean
	}
	
	export interface LolLoyaltyInventoryResponseDTO {
		data: LCUTypes.LolLoyaltyInventoryDTO
	}
	
	export interface LolLoyaltyLoginSession {
		state: LCUTypes.LolLoyaltyLoginSessionStates
		summonerId: number
		accountId: number
		puuid: string
	}
	
	export type LolLoyaltyLoginSessionStates = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"
	
	export interface LolLoyaltyLoyaltyRewards {
		freeRewardedChampionsCount: number
		championIds: number[]
		freeRewardedSkinsCount: number
		skinIds: number[]
		global: LCUTypes.LolLoyaltyGlobalRewards
		ipBoost: number
		xpBoost: Record<string, number>
		loyaltyTFTMapSkinCount: number
		loyaltyTFTCompanionCount: number
		loyaltyTFTDamageSkinCount: number
		loyaltySources: Record<string, boolean>
	}
	
	export interface LolLoyaltyLoyaltyRewardsSimplified {
		freeRewardedChampionsCount: number
		championIds: number[]
		freeRewardedSkinsCount: number
		skinIds: number[]
		global: LCUTypes.LolLoyaltyGlobalRewards
		ipBoost: number
		xpBoost: number
		loyaltyTFTMapSkinCount: number
		loyaltyTFTCompanionCount: number
		loyaltyTFTDamageSkinCount: number
		loyaltySources: Record<string, boolean>
	}
	
	export type LolLoyaltyLoyaltyStatus = "DISABLED" | "REVOKE" | "CHANGE" | "EXPIRY" | "REWARDS_GRANT" | "LEGACY"
	
	export interface LolLoyaltyLoyaltyStatusNotification {
		status: LCUTypes.LolLoyaltyLoyaltyStatus
		rewards: LCUTypes.LolLoyaltyLoyaltyRewardsSimplified
		reloadInventory: boolean
	}
	
	export interface LolLoyaltyPlayerNotification {
		critical: boolean
		detailKey: string
		source: string
		state: string
		titleKey: string
		type: string
		iconUrl: string
	}
	
	export interface LolLoyaltyRiotMessagingServiceMessage {
		resource: string
		service: string
		version: string
		timestamp: number
		payload: string
	}
	
	export interface LolLoyaltyRmsEntitlementPayload {
		itemId: string
		itemTypeId: string
		entitlementTypeId: string
		resourceOperation: string
	}
	
	export interface LolMapsGameModeSpellList {
		spells: number[]
	}
	
	export interface LolMapsMaps {
		id: number
		isDefault: boolean
		gameMode: string
		gameModeName: string
		gameModeShortName: string
		gameModeDescription: string
		gameMutator: string
		isRGM: boolean
		name: string
		description: string
		mapStringId: string
		platformId: string
		platformName: string
		assets: Record<string, string>
		locStrings: Record<string, string>
		categorizedContentBundles: unknown
		tutorialCards: LCUTypes.LolMapsTutorialCard[]
		properties: unknown
		perPositionRequiredSummonerSpells: Record<string, LCUTypes.LolMapsGameModeSpellList>
		perPositionDisallowedSummonerSpells: Record<string, LCUTypes.LolMapsGameModeSpellList>
	}
	
	export interface LolMapsTutorialCard {
		header?: string
		footer?: string
		description?: string
		imagePath: string
	}
	
	export interface LolMatchHistoryAcsEndPoint {
		url: string
	}
	
	export interface LolMatchHistoryAcsPlayer {
		platformId: string
		accountId: number
	}
	
	export interface LolMatchHistoryAlias {
		gameName: string
		tagLine: string
	}
	
	export interface LolMatchHistoryGAMHSMatchHistoryData {
		metadata: LCUTypes.LolMatchHistoryGAMHSMatchHistoryMetadata
		json: unknown
	}
	
	export interface LolMatchHistoryGAMHSMatchHistoryList {
		games: LCUTypes.LolMatchHistoryGAMHSMatchHistoryData[]
		active_puuid: string
	}
	
	export interface LolMatchHistoryGAMHSMatchHistoryMetadata {
		product: string
		data_version: number
		info_type: string
		match_id: string
		tags: string[]
		participants: string[]
		timestamp: number
		private: boolean
	}
	
	export interface LolMatchHistoryLoginSession {
		state: LCUTypes.LolMatchHistoryLoginSessionStates
		summonerId: number
		accountId: number
		idToken: string
	}
	
	export type LolMatchHistoryLoginSessionStates = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"
	
	export interface LolMatchHistoryMHSummoner {
		summonerId: number
		accountId: number
		displayName: string
		puuid: string
	}
	
	export interface LolMatchHistoryMatchHistoryEvent {
		type: string
		timestamp: number
		participantId: number
		teamId: number
		itemId: number
		killerId: number
		victimId: number
		skillSlot: number
		position: LCUTypes.LolMatchHistoryMatchHistoryPosition
		assistingParticipantIds: number[]
		buildingType: string
		laneType: string
		towerType: string
		monsterType: string
		monsterSubType: string
	}
	
	export interface LolMatchHistoryMatchHistoryGame {
		gameId: number
		platformId: string
		gameCreation: number
		gameCreationDate: string
		gameDuration: number
		queueId: number
		mapId: number
		seasonId: number
		gameVersion: string
		gameMode: string
		gameType: string
		teams: LCUTypes.LolMatchHistoryMatchHistoryTeam[]
		participants: LCUTypes.LolMatchHistoryMatchHistoryParticipant[]
		participantIdentities: LCUTypes.LolMatchHistoryMatchHistoryParticipantIdentities[]
	}
	
	export interface LolMatchHistoryMatchHistoryGameList {
		gameIndexBegin: number
		gameIndexEnd: number
		gameBeginDate: string
		gameEndDate: string
		gameCount: number
		games: LCUTypes.LolMatchHistoryMatchHistoryGame[]
	}
	
	export interface LolMatchHistoryMatchHistoryList {
		platformId: string
		accountId: number
		games: LCUTypes.LolMatchHistoryMatchHistoryGameList
	}
	
	export interface LolMatchHistoryMatchHistoryParticipant {
		participantId: number
		teamId: number
		championId: number
		spell1Id: number
		spell2Id: number
		highestAchievedSeasonTier: string
		stats: LCUTypes.LolMatchHistoryMatchHistoryParticipantStatistics
		timeline: LCUTypes.LolMatchHistoryMatchHistoryTimeline
	}
	
	export interface LolMatchHistoryMatchHistoryParticipantFrame {
		participantId: number
		position: LCUTypes.LolMatchHistoryMatchHistoryPosition
		currentGold: number
		totalGold: number
		level: number
		xp: number
		minionsKilled: number
		jungleMinionsKilled: number
		dominionScore: number
		teamScore: number
	}
	
	export interface LolMatchHistoryMatchHistoryParticipantIdentities {
		participantId: number
		player: LCUTypes.LolMatchHistoryMatchHistoryParticipantIdentityPlayer
	}
	
	export interface LolMatchHistoryMatchHistoryParticipantIdentityPlayer {
		puuid: string
		platformId: string
		accountId: number
		summonerId: number
		summonerName: string
		gameName: string
		tagLine: string
		currentPlatformId: string
		currentAccountId: number
		matchHistoryUri: string
		profileIcon: number
	}
	
	export interface LolMatchHistoryMatchHistoryParticipantStatistics {
		participantId: number
		win: boolean
		item0: number
		item1: number
		item2: number
		item3: number
		item4: number
		item5: number
		item6: number
		kills: number
		deaths: number
		assists: number
		largestKillingSpree: number
		largestMultiKill: number
		killingSprees: number
		longestTimeSpentLiving: number
		doubleKills: number
		tripleKills: number
		quadraKills: number
		pentaKills: number
		unrealKills: number
		totalDamageDealt: number
		magicDamageDealt: number
		physicalDamageDealt: number
		trueDamageDealt: number
		largestCriticalStrike: number
		totalDamageDealtToChampions: number
		magicDamageDealtToChampions: number
		physicalDamageDealtToChampions: number
		trueDamageDealtToChampions: number
		totalHeal: number
		totalUnitsHealed: number
		totalDamageTaken: number
		magicalDamageTaken: number
		physicalDamageTaken: number
		trueDamageTaken: number
		goldEarned: number
		goldSpent: number
		turretKills: number
		inhibitorKills: number
		totalMinionsKilled: number
		neutralMinionsKilled: number
		neutralMinionsKilledTeamJungle: number
		neutralMinionsKilledEnemyJungle: number
		totalTimeCrowdControlDealt: number
		champLevel: number
		visionWardsBoughtInGame: number
		sightWardsBoughtInGame: number
		wardsPlaced: number
		wardsKilled: number
		firstBloodKill: boolean
		firstBloodAssist: boolean
		firstTowerKill: boolean
		firstTowerAssist: boolean
		firstInhibitorKill: boolean
		firstInhibitorAssist: boolean
		gameEndedInEarlySurrender: boolean
		gameEndedInSurrender: boolean
		causedEarlySurrender: boolean
		earlySurrenderAccomplice: boolean
		teamEarlySurrendered: boolean
		combatPlayerScore: number
		objectivePlayerScore: number
		totalPlayerScore: number
		totalScoreRank: number
		damageSelfMitigated: number
		damageDealtToObjectives: number
		damageDealtToTurrets: number
		visionScore: number
		timeCCingOthers: number
		playerScore0: number
		playerScore1: number
		playerScore2: number
		playerScore3: number
		playerScore4: number
		playerScore5: number
		playerScore6: number
		playerScore7: number
		playerScore8: number
		playerScore9: number
		perkPrimaryStyle: number
		perkSubStyle: number
		perk0: number
		perk0Var1: number
		perk0Var2: number
		perk0Var3: number
		perk1: number
		perk1Var1: number
		perk1Var2: number
		perk1Var3: number
		perk2: number
		perk2Var1: number
		perk2Var2: number
		perk2Var3: number
		perk3: number
		perk3Var1: number
		perk3Var2: number
		perk3Var3: number
		perk4: number
		perk4Var1: number
		perk4Var2: number
		perk4Var3: number
		perk5: number
		perk5Var1: number
		perk5Var2: number
		perk5Var3: number
		playerAugment1: number
		playerAugment2: number
		playerAugment3: number
		playerAugment4: number
		playerSubteamId: number
		subteamPlacement: number
	}
	
	export interface LolMatchHistoryMatchHistoryPlayerChampMasteryDelta {
		grade: string
	}
	
	export interface LolMatchHistoryMatchHistoryPlayerDelta {
		originalAccountId: number
		originalPlatformId: string
		deltas: LCUTypes.LolMatchHistoryMatchHistoryPlayerGameDelta[]
	}
	
	export interface LolMatchHistoryMatchHistoryPlayerGameDelta {
		gamePlatformId: string
		gameId: number
		platformDelta: LCUTypes.LolMatchHistoryMatchHistoryPlayerPlatformDelta
		leagueDelta: LCUTypes.LolMatchHistoryMatchHistoryPlayerLeagueDelta
		champMastery: LCUTypes.LolMatchHistoryMatchHistoryPlayerChampMasteryDelta
	}
	
	export interface LolMatchHistoryMatchHistoryPlayerLeagueDelta {
		leaguePointDelta: number
		reason: string
		miniSeriesProgress: string[]
		timestamp: number
	}
	
	export interface LolMatchHistoryMatchHistoryPlayerPlatformDelta {
		xpDelta: number
		ipDelta: number
		compensationModeEnabled: boolean
		timestamp: number
	}
	
	export interface LolMatchHistoryMatchHistoryPosition {
		x: number
		y: number
	}
	
	export interface LolMatchHistoryMatchHistoryTeam {
		teamId: number
		win: string
		firstBlood: boolean
		firstTower: boolean
		firstInhibitor: boolean
		firstBaron: boolean
		firstDargon: boolean
		towerKills: number
		inhibitorKills: number
		baronKills: number
		dragonKills: number
		vilemawKills: number
		riftHeraldKills: number
		dominionVictoryScore: number
		bans: LCUTypes.LolMatchHistoryMatchHistoryTeamBan[]
	}
	
	export interface LolMatchHistoryMatchHistoryTeamBan {
		championId: number
		pickTurn: number
	}
	
	export interface LolMatchHistoryMatchHistoryTimeline {
		participantId: number
		role: string
		lane: string
		creepsPerMinDeltas: Record<string, number>
		xpPerMinDeltas: Record<string, number>
		goldPerMinDeltas: Record<string, number>
		csDiffPerMinDeltas: Record<string, number>
		xpDiffPerMinDeltas: Record<string, number>
		damageTakenPerMinDeltas: Record<string, number>
		damageTakenDiffPerMinDeltas: Record<string, number>
	}
	
	export interface LolMatchHistoryMatchHistoryTimelineFrame {
		participantFrames: Record<string, LCUTypes.LolMatchHistoryMatchHistoryParticipantFrame>
		events: LCUTypes.LolMatchHistoryMatchHistoryEvent[]
		timestamp: number
	}
	
	export interface LolMatchHistoryMatchHistoryTimelineFrames {
		frames: LCUTypes.LolMatchHistoryMatchHistoryTimelineFrame[]
	}
	
	export interface LolMatchHistoryRecentlyPlayedSummoner {
		summonerId: number
		summonerName: string
		gameName: string
		tagLine: string
		gameId: number
		gameCreationDate: string
		championId: number
		teamId: number
		puuid: string
	}
	
	export interface LolMatchHistorySummoner {
		displayName: string
		gameName: string
		tagLine: string
		puuid: string
	}
	
	export interface LolMatchmakingGameflowGameData {
		queue: LCUTypes.LolMatchmakingGameflowQueue
	}
	
	export interface LolMatchmakingGameflowGameDodge {
		state: LCUTypes.LolMatchmakingMatchmakingDodgeState
		dodgeIds: number[]
	}
	
	export interface LolMatchmakingGameflowGameTypeConfig {
		reroll: boolean
	}
	
	export type LolMatchmakingGameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"
	
	export interface LolMatchmakingGameflowQueue {
		gameTypeConfig: LCUTypes.LolMatchmakingGameflowGameTypeConfig
	}
	
	export interface LolMatchmakingGameflowSession {
		phase: LCUTypes.LolMatchmakingGameflowPhase
		gameData: LCUTypes.LolMatchmakingGameflowGameData
		gameDodge: LCUTypes.LolMatchmakingGameflowGameDodge
	}
	
	export interface LolMatchmakingLobbyStatus {
		queueId: number
		isCustom: boolean
		isLeader: boolean
		isSpectator: boolean
		allowedPlayAgain: boolean
		memberSummonerIds: number[]
		lobbyId?: string
		customSpectatorPolicy: LCUTypes.LolMatchmakingQueueCustomGameSpectatorPolicy
	}
	
	export interface LolMatchmakingLoginSession {
		state: LCUTypes.LolMatchmakingLoginSessionState
		summonerId: number
		accountId: number
		connected: boolean
	}
	
	export type LolMatchmakingLoginSessionState = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"
	
	export interface LolMatchmakingMatchmakingDodgeData {
		state: LCUTypes.LolMatchmakingMatchmakingDodgeState
		dodgerId: number
	}
	
	export type LolMatchmakingMatchmakingDodgeState = "TournamentDodged" | "StrangerDodged" | "PartyDodged" | "Invalid"
	
	export type LolMatchmakingMatchmakingDodgeWarning = "Penalty" | "Warning" | "None"
	
	export interface LolMatchmakingMatchmakingLowPriorityData {
		penalizedSummonerIds: number[]
		penaltyTime: number
		penaltyTimeRemaining: number
		bustedLeaverAccessToken: string
		reason: string
	}
	
	export interface LolMatchmakingMatchmakingReadyCheckResource {
		state: LCUTypes.LolMatchmakingMatchmakingReadyCheckState
		playerResponse: LCUTypes.LolMatchmakingMatchmakingReadyCheckResponse
		dodgeWarning: LCUTypes.LolMatchmakingMatchmakingDodgeWarning
		timer: number
		declinerIds: number[]
		suppressUx: boolean
	}
	
	export type LolMatchmakingMatchmakingReadyCheckResponse = "Declined" | "Accepted" | "None"
	
	export type LolMatchmakingMatchmakingReadyCheckState = "Error" | "PartyNotReady" | "StrangerNotReady" | "EveryoneReady" | "InProgress" | "Invalid"
	
	export interface LolMatchmakingMatchmakingSearchErrorResource {
		id: number
		errorType: string
		penalizedSummonerId: number
		penaltyTimeRemaining: number
		message: string
	}
	
	export interface LolMatchmakingMatchmakingSearchResource {
		queueId: number
		isCurrentlyInQueue: boolean
		lobbyId: string
		searchState: LCUTypes.LolMatchmakingMatchmakingSearchState
		timeInQueue: number
		estimatedQueueTime: number
		readyCheck: LCUTypes.LolMatchmakingMatchmakingReadyCheckResource
		dodgeData: LCUTypes.LolMatchmakingMatchmakingDodgeData
		lowPriorityData: LCUTypes.LolMatchmakingMatchmakingLowPriorityData
		errors: LCUTypes.LolMatchmakingMatchmakingSearchErrorResource[]
	}
	
	export type LolMatchmakingMatchmakingSearchState = "ServiceShutdown" | "ServiceError" | "Error" | "Found" | "Searching" | "Canceled" | "AbandonedLowPriorityQueue" | "Invalid"
	
	export interface LolMatchmakingPlayerStatus {
		currentLobbyStatus?: LCUTypes.LolMatchmakingLobbyStatus
		lastQueuedLobbyStatus?: LCUTypes.LolMatchmakingLobbyStatus
	}
	
	export interface LolMatchmakingQueue {
		id: number
		isTeamBuilderManaged: boolean
	}
	
	export type LolMatchmakingQueueCustomGameSpectatorPolicy = "AllAllowed" | "FriendsAllowed" | "LobbyAllowed" | "NotAllowed"
	
	export interface LolMissionsCollectionsChampion {
		id: number
		freeToPlay: boolean
		ownership: LCUTypes.LolMissionsCollectionsOwnership
		skins: LCUTypes.LolMissionsCollectionsChampionSkin[]
	}
	
	export interface LolMissionsCollectionsChampionSkin {
		championId: number
		id: number
		ownership: LCUTypes.LolMissionsCollectionsOwnership
	}
	
	export interface LolMissionsCollectionsOwnership {
		loyaltyReward: boolean
		xboxGPReward: boolean
		owned: boolean
		rental: LCUTypes.LolMissionsCollectionsRental
	}
	
	export interface LolMissionsCollectionsRental {
		rented: boolean
	}
	
	export interface LolMissionsCollectionsSummoner {
		summonerLevel: number
	}
	
	export interface LolMissionsCollectionsSummonerIcons {
		icons: number[]
	}
	
	export interface LolMissionsCollectionsWardSkin {
		id: number
		ownership: LCUTypes.LolMissionsCollectionsOwnership
	}
	
	export type LolMissionsGameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"
	
	export interface LolMissionsGameflowSession {
		phase: LCUTypes.LolMissionsGameflowPhase
	}
	
	export type LolMissionsGrantStatus = "FULFILLED" | "PENDING_SELECTION" | "PENDING_FULFILLMENT"
	
	export interface LolMissionsInventoryItemWithPayload {
		itemId: number
	}
	
	export interface LolMissionsLoginSession {
		accountId: number
		summonerId: number
		puuid: string
		platformId: string
	}
	
	export type LolMissionsLoyaltyStatus = "DISABLED" | "REVOKE" | "CHANGE" | "EXPIRY" | "REWARDS_GRANT" | "LEGACY"
	
	export interface LolMissionsLoyaltyStatusNotification {
		status: LCUTypes.LolMissionsLoyaltyStatus
	}
	
	export interface LolMissionsMissionAsset {
		internalName: string
		path: string
		iconNeedsFrame: boolean
	}
	
	export interface LolMissionsMissionsNotificationResource {
		backgroundUrl: string
		created: string
		critical: boolean
		data: Record<string, string>
		detailKey: string
		expires: string
		iconUrl: string
		id: number
		source: string
		state: string
		titleKey: string
		type: string
	}
	
	export interface LolMissionsMissionsSettingsDataResource {
		selected_series: string
	}
	
	export interface LolMissionsPlayerUpdateResponse {
		playerMissions: LCUTypes.PlayerMissionDTO[]
		playerSeries: LCUTypes.SeriesDTO[]
	}
	
	export interface LolMissionsPluginRegionLocaleChangedEvent {
		locale: string
	}
	
	export interface LolMissionsRewardGrant {
		info: LCUTypes.LolMissionsRewardGrantInfo
		rewardGroup: LCUTypes.LolMissionsRewardGroup
	}
	
	export interface LolMissionsRewardGrantElement {
		id: string
		itemId: string
		itemType: string
		fulfillmentSource: string
		rewardStatus: LCUTypes.LolMissionsRewardStatus
		quantity: number
		media: Record<string, string>
		localizations: Record<string, string>
	}
	
	export interface LolMissionsRewardGrantInfo {
		id: string
		granteeId: string
		rewardGroupId: string
		status: LCUTypes.LolMissionsGrantStatus
		grantElements: LCUTypes.LolMissionsRewardGrantElement[]
		selectedIds: string[]
		viewed: boolean
	}
	
	export interface LolMissionsRewardGroup {
		id: string
		internalName: string
		productId: string
		types: string[]
		rewards: LCUTypes.LolMissionsSvcReward[]
		childRewardGroupIds: string[]
		rewardStrategy: LCUTypes.LolMissionsRewardStrategy
		selectionStrategyConfig: LCUTypes.LolMissionsSelectionStrategyConfig
		active: boolean
		media: Record<string, string>
		localizations: Record<string, string>
	}
	
	export interface LolMissionsRewardGroupsSelection {
		rewardGroups: string[]
	}
	
	export type LolMissionsRewardStatus = "FULFILLED" | "PENDING"
	
	export type LolMissionsRewardStrategy = "SELECTION" | "RANDOM" | "ALL"
	
	export interface LolMissionsRewardsProductConfig {
		enabled: boolean
		serviceUrl: string
	}
	
	export interface LolMissionsSelectionStrategyConfig {
		minSelectionsAllowed: number
		maxSelectionsAllowed: number
	}
	
	export interface LolMissionsSeriesOpt {
		seriesId: string
		option: string
	}
	
	export interface LolMissionsSvcReward {
		id: string
		itemId: string
		quantity: number
		fulfillmentSource: string
		media: Record<string, string>
		localizations: Record<string, string>
	}
	
	export interface LolMissionsTftOrb {
		missionId: string
		status: string
		unlockTime: number
		rewardLevel: number
		rewards: LCUTypes.PlayerMissionRewardDTO[]
	}
	
	export interface LolMissionsTftPaidBattlepass {
		totalPointsEarned: number
		milestones: LCUTypes.LolMissionsTftPaidBattlepassMilestone[]
		bonuses: LCUTypes.LolMissionsTftPaidBattlepassMilestone[]
		activeMilestone: LCUTypes.LolMissionsTftPaidBattlepassMilestone
		info: LCUTypes.LolMissionsTftPaidBattlepassInfo
		lastViewedProgress: number
		lastViewedMilestone: LCUTypes.LolMissionsTftPaidBattlepassMilestone
		progressMissionId: string
		currentLevel: number
	}
	
	export interface LolMissionsTftPaidBattlepassInfo {
		title: string
		description: string
		startDate: number
		endDate: number
		premium: boolean
		premiumTitle: string
		premiumEntitlementId: string
		pcPurchaseRequirement: string
		media: Record<string, string>
	}
	
	export interface LolMissionsTftPaidBattlepassMilestone {
		missionId: string
		internalName: string
		title: string
		description: string
		state: string
		status: string
		pointsNeededForMilestone: number
		pointsEarnedForMilestone: number
		totalPointsForMilestone: number
		level: number
		iconImageUrl: string
		iconNeedsFrame: boolean
		rewards: LCUTypes.LolMissionsTftPaidBattlepassReward[]
		isPaid: boolean
		isLocked: boolean
		isKeystone: boolean
		isBonus: boolean
	}
	
	export interface LolMissionsTftPaidBattlepassReward {
		rewardGroup: string
		description: string
		iconUrl: string
		iconNeedsFrame: boolean
	}
	
	export interface LolMissionsTftWeeklyMissions {
		missions: LCUTypes.PlayerMissionDTO[]
	}
	
	export interface LolMissionsUserInfo {
		userInfo: string
	}
	
	export interface LolModeProgressionInventoryRewardItem {
		itemId: number
		uuid: string
	}
	
	export interface LolModeProgressionLoadout {
		id: string
		name: string
		scope: string
		loadout: Record<string, LCUTypes.LolModeProgressionLoadoutsSlot>
	}
	
	export interface LolModeProgressionLoadoutsSlot {
		contentId: string
		inventoryType: string
		itemId: number
	}
	
	export interface LolNpeRewardsAccountSettingsData {
		login: LCUTypes.LolNpeRewardsLoginSeriesSettings
		challenges: LCUTypes.LolNpeRewardsChallengesSettings
	}
	
	export interface LolNpeRewardsAccountSettingsPayload {
		data: LCUTypes.LolNpeRewardsAccountSettingsData
		schemaVersion: number
	}
	
	export interface LolNpeRewardsAllRewards {
		level: LCUTypes.LolNpeRewardsRewardSeries
		login: LCUTypes.LolNpeRewardsRewardSeries
	}
	
	export interface LolNpeRewardsChallengesProgress {
		progress: LCUTypes.LolNpeRewardsProgress
	}
	
	export interface LolNpeRewardsChallengesSettings {
		allMissionsCompleted: boolean
		totalCount: number
	}
	
	export interface LolNpeRewardsLoginSeriesSettings {
		allRewardsClaimed: boolean
		lastCompletedMissionInternalName: string
		lastCompletedMissionDate: number
	}
	
	export interface LolNpeRewardsMission {
		completedDate: number
		status: string
		seriesName: string
		internalName: string
		metadata: LCUTypes.LolNpeRewardsMissionsRewardPackMetaData
		display: LCUTypes.LolNpeRewardsMissionDisplay
		objectives: LCUTypes.LolNpeRewardsObjective[]
	}
	
	export interface LolNpeRewardsMissionDisplay {
		locations: string[]
	}
	
	export interface LolNpeRewardsMissionSeries {
		internalName: string
		status: string
		id: string
	}
	
	export interface LolNpeRewardsMissionSeriesOptIn {
		seriesId: string
		option: string
	}
	
	export interface LolNpeRewardsMissionsRewardPackMetaData {
		npeRewardPack: LCUTypes.LolNpeRewardsRewardPack
	}
	
	export interface LolNpeRewardsObjective {
		progress: LCUTypes.LolNpeRewardsProgress
	}
	
	export interface LolNpeRewardsProgress {
		lastViewedProgress: number
		currentProgress: number
		totalCount: number
	}
	
	export interface LolNpeRewardsRequirements {
		level: number
		day: number
		missionInternalName: string
	}
	
	export interface LolNpeRewardsReward {
		renderer: string
		data: unknown
	}
	
	export interface LolNpeRewardsRewardPack {
		index: number
		type: string
		requirements: LCUTypes.LolNpeRewardsRequirements
		state: string
		premiumReward: boolean
		rewardKey: string
		majorReward: LCUTypes.LolNpeRewardsReward
		minorRewards: LCUTypes.LolNpeRewardsReward[]
		delay: number
		unlockTime: number
	}
	
	export interface LolNpeRewardsRewardSeries {
		rewardPacks: LCUTypes.LolNpeRewardsRewardPack[]
	}
	
	export interface LolNpeRewardsRewardSeriesState {
		allRewardsClaimed: boolean
	}
	
	export interface LolNpeRewardsSummoner {
		summonerLevel: number
	}
	
	export interface LolNpeTutorialPathAccountSettingsCategoryResource {
		data?: LCUTypes.LolNpeTutorialPathAccountSettingsTutorial
		schemaVersion: number
	}
	
	export interface LolNpeTutorialPathAccountSettingsTutorial {
		hasSeenTutorialPath: boolean
		hasSkippedTutorialPath: boolean
		shouldSeeNewPlayerExperience: boolean
	}
	
	export interface LolNpeTutorialPathCollectionsChampion {
		alias: string
		banVoPath: string
		chooseVoPath: string
		id: number
		name: string
		roles: string[]
		squarePortraitPath: string
		stingerSfxPath: string
		passive: LCUTypes.LolNpeTutorialPathCollectionsChampionSpell
		spells: LCUTypes.LolNpeTutorialPathCollectionsChampionSpell[]
	}
	
	export interface LolNpeTutorialPathCollectionsChampionSpell {
		name: string
		description: string
	}
	
	export interface LolNpeTutorialPathExpiringWarning {
		type: string
		message: string
		alertTime: number
	}
	
	export type LolNpeTutorialPathGameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"
	
	export interface LolNpeTutorialPathGameflowSession {
		phase: LCUTypes.LolNpeTutorialPathGameflowPhase
	}
	
	export interface LolNpeTutorialPathIds {
		missionIds: string[]
		seriesIds: string[]
	}
	
	export interface LolNpeTutorialPathLobbyChangeQueue {
		queueId: number
		isCustom: boolean
	}
	
	export interface LolNpeTutorialPathLobbyDto {
		partyId: string
		gameConfig: LCUTypes.LolNpeTutorialPathLobbyGameConfigDto
	}
	
	export interface LolNpeTutorialPathLobbyGameConfigDto {
		queueId: number
	}
	
	export interface LolNpeTutorialPathMission {
		id: string
		title: string
		helperText: string
		description: string
		backgroundImageUrl: string
		iconImageUrl: string
		seriesName: string
		locale: string
		metadata: LCUTypes.LolNpeTutorialPathMissionMetadata
		startTime: number
		endTime: number
		lastUpdatedTimestamp: number
		objectives: LCUTypes.LolNpeTutorialPathObjective[]
		rewards: LCUTypes.LolNpeTutorialPathReward[]
		expiringWarnings: LCUTypes.LolNpeTutorialPathExpiringWarning[]
		requirements: string[]
		rewardStrategy: LCUTypes.LolNpeTutorialPathRewardStrategy
		display: LCUTypes.LolNpeTutorialPathMissionDisplay
		completionExpression: string
		viewed: boolean
		isNew: boolean
		status: string
		missionType: string
		displayType: string
		completedDate: number
		cooldownTimeMillis: number
		celebrationType: string
		clientNotifyLevel: string
		internalName: string
	}
	
	export interface LolNpeTutorialPathMissionDisplay {
		attributes: string[]
	}
	
	export interface LolNpeTutorialPathMissionMetadata {
		tutorial: LCUTypes.LolNpeTutorialPathTutorialMetadata
	}
	
	export interface LolNpeTutorialPathObjective {
		type: string
		description: string
		progress: LCUTypes.LolNpeTutorialPathProgress
		sequence: number
		rewardGroups: string[]
	}
	
	export interface LolNpeTutorialPathProgress {
		lastViewedProgress: number
		currentProgress: number
		totalCount: number
	}
	
	export interface LolNpeTutorialPathRequirement {
		expression: string
	}
	
	export interface LolNpeTutorialPathReward {
		rewardType: string
		rewardGroup: string
		description: string
		iconUrl: string
		itemId: string
		uniqueName: string
		rewardFulfilled: boolean
		rewardGroupSelected: boolean
		sequence: number
		quantity: number
	}
	
	export interface LolNpeTutorialPathRewardStrategy {
		groupStrategy: string
		selectMaxGroupCount: number
		selectMinGroupCount: number
	}
	
	export interface LolNpeTutorialPathSeries {
		id: string
		internalName: string
		status: string
	}
	
	export interface LolNpeTutorialPathSeriesOpt {
		seriesId: string
		option: string
	}
	
	export interface LolNpeTutorialPathSummoner {
		summonerId: number
		accountId: number
		displayName: string
		profileIconId: number
		summonerLevel: number
		xpSinceLastLevel: number
		xpUntilNextLevel: number
		percentCompleteForNextLevel: number
		nameChangeFlag: boolean
		unnamed: boolean
	}
	
	export interface LolNpeTutorialPathSummonerIcon {
		profileIconId: number
	}
	
	export interface LolNpeTutorialPathTutorial {
		id: string
		stepNumber: number
		title: string
		description: string
		backgroundUrl: string
		queueId: string
		useQuickSearchMatchmaking: boolean
		useChosenChampion: boolean
		status: LCUTypes.LolNpeTutorialPathTutorialStatus
		isViewed: boolean
		type: LCUTypes.LolNpeTutorialPathTutorialType
		rewards: LCUTypes.LolNpeTutorialPathTutorialReward[]
	}
	
	export interface LolNpeTutorialPathTutorialMetadata {
		stepNumber: number
		queueId: string
		displayRewards: Record<string, string>
		useQuickSearchMatchmaking: boolean
		useChosenChampion: boolean
	}
	
	export interface LolNpeTutorialPathTutorialReward {
		rewardType: string
		description: string
		rewardFulfilled: boolean
		iconUrl: string
		itemId: string
		sequence: number
		uniqueName: string
	}
	
	export type LolNpeTutorialPathTutorialStatus = "COMPLETED" | "UNLOCKED" | "LOCKED"
	
	export type LolNpeTutorialPathTutorialType = "REWARD" | "CARD"
	
	export interface LolPatchChunkingPatcherEnvironment {
		game_patcher_available: boolean
		game_patcher_enabled: boolean
	}
	
	export interface LolPatchComponentActionProgress {
		currentItem: string
		total: LCUTypes.LolPatchComponentStateProgress
		network: LCUTypes.LolPatchComponentStateProgress
		primaryWork: LCUTypes.LolPatchComponentStateWorkType
	}
	
	export interface LolPatchComponentState {
		id: string
		action: LCUTypes.LolPatchComponentStateAction
		isUpToDate: boolean
		isUpdateAvailable: boolean
		timeOfLastUpToDateCheckISO8601?: string
		isCorrupted: boolean
		progress?: LCUTypes.LolPatchComponentActionProgress
	}
	
	export type LolPatchComponentStateAction = "Migrating" | "Repairing" | "Patching" | "CheckingForUpdates" | "Idle"
	
	export interface LolPatchComponentStateProgress {
		bytesComplete: number
		bytesRequired: number
		bytesPerSecond: number
	}
	
	export type LolPatchComponentStateWorkType = "Disk" | "Network" | "Scanning"
	
	export interface LolPatchEntitlementsTokenResource {
		accessToken: string
		token: string
		entitlements: string[]
	}
	
	export interface LolPatchInstallPaths {
		gameInstallRoot: string
		gameExecutablePath: string
	}
	
	export interface LolPatchNotification {
		id: string
		notificationId: LCUTypes.LolPatchNotificationId
		data: Record<string, unknown>
	}
	
	export type LolPatchNotificationId = "BrokenPermissions" | "NotEnoughDiskSpace" | "DidRestoreClientBackup" | "FailedToWriteError" | "MissingFilesError" | "ConnectionError" | "UnspecifiedError"
	
	export interface LolPatchPatchSieveCompatVersion {
		id: string
	}
	
	export interface LolPatchPatchSieveDownload {
		url: string
		scd_required: boolean
	}
	
	export interface LolPatchPatchSieveLabelValue {
		values: string[]
	}
	
	export interface LolPatchPatchSieveQueryResponse {
		releases: LCUTypes.LolPatchPatchSieveRelease[]
	}
	
	export interface LolPatchPatchSieveRelease {
		release: LCUTypes.LolPatchPatchSieveReleaseInfo
		compat_version: LCUTypes.LolPatchPatchSieveCompatVersion
		download: LCUTypes.LolPatchPatchSieveDownload
	}
	
	export interface LolPatchPatchSieveReleaseInfo {
		product: string
		id: string
		labels: Record<string, LCUTypes.LolPatchPatchSieveLabelValue>
	}
	
	export interface LolPatchPatcherInstallSettings {
		game_patcher?: string
		game_patch_url: string
		game_patcher_available: boolean
		max_download_speed_mbps: number
		locales: string[]
	}
	
	export interface LolPatchPatcherRegionSettings {
		patchline: string
		game_patcher: string
	}
	
	export interface LolPatchPatcherSelfUpdateSettings {
		restart_delay: number
	}
	
	export interface LolPatchPatcherSettings {
		product_refresh_period: number
		channel: string
		headers: Record<string, string>
		self_update: LCUTypes.LolPatchPatcherSelfUpdateSettings
		patchsieve_url: string
	}
	
	export interface LolPatchProductState {
		id: string
		action: LCUTypes.LolPatchComponentStateAction
		isUpToDate: boolean
		isUpdateAvailable: boolean
		isCorrupted: boolean
		isStopped: boolean
		percentPatched: number
		components: LCUTypes.LolPatchComponentState[]
	}
	
	export interface LolPatchRegionLocale {
		region: string
		locale: string
	}
	
	export interface LolPatchScdCookie {
		domain: string
		path: string
		cookie: string
	}
	
	export interface LolPatchScdCookies {
		cookies: LCUTypes.LolPatchScdCookie[]
	}
	
	export type LolPatchScdEnabled = "On" | "Off"
	
	export interface LolPatchStatus {
		connectedToPatchServer: boolean
	}
	
	export interface LolPatchSupportedGameRelease {
		artifact_id: string
		download: LCUTypes.LolPatchPatchSieveDownload
		selected: boolean
	}
	
	export interface LolPatchSupportedGameReleases {
		supported_game_releases: LCUTypes.LolPatchSupportedGameRelease[]
	}
	
	export interface LolPatchUxResource {
		visible: boolean
	}
	
	export interface LolPerksChampSelectAction {
		id: number
		actorCellId: number
		championId: number
		type: string
		completed: boolean
	}
	
	export interface LolPerksChampSelectBannedChampions {
		myTeamBans: number[]
		theirTeamBans: number[]
		numBans: number
	}
	
	export interface LolPerksChampSelectChatRoomDetails {
		multiUserChatId: string
		multiUserChatPassword: string
		mucJwtDto: LCUTypes.LolPerksMucJwtDto
	}
	
	export interface LolPerksChampSelectMySelection {
		selectedSkinId?: number
		spell1Id?: number
		spell2Id?: number
		wardSkinId?: number
	}
	
	export interface LolPerksChampSelectPlayerSelection {
		cellId: number
		championId: number
		selectedSkinId: number
		wardSkinId: number
		spell1Id: number
		spell2Id: number
		team: number
		assignedPosition: string
		championPickIntent: number
		summonerId: number
	}
	
	export interface LolPerksChampSelectSession {
		timer: LCUTypes.LolPerksChampSelectTimer
		chatDetails: LCUTypes.LolPerksChampSelectChatRoomDetails
		myTeam: LCUTypes.LolPerksChampSelectPlayerSelection[]
		theirTeam: LCUTypes.LolPerksChampSelectPlayerSelection[]
		trades: LCUTypes.LolPerksChampSelectTradeContract[]
		actions: unknown[]
		bans: LCUTypes.LolPerksChampSelectBannedChampions
		localPlayerCellId: number
		isSpectating: boolean
	}
	
	export interface LolPerksChampSelectTimer {
		adjustedTimeLeftInPhase: number
		totalTimeInPhase: number
		phase: string
		isInfinite: boolean
		internalNowInEpochMs: number
	}
	
	export interface LolPerksChampSelectTradeContract {
		id: number
		cellId: number
		state: LCUTypes.LolPerksChampSelectTradeState
	}
	
	export type LolPerksChampSelectTradeState = "SENT" | "RECEIVED" | "INVALID" | "BUSY" | "AVAILABLE"
	
	export interface LolPerksChampionPreferredStyle {
		championName: string
		style: number
		championId: number
	}
	
	export interface LolPerksChampionRuneRecommendationsGDSResource {
		championId: number
		isOverride: boolean
		runeRecommendations: LCUTypes.LolPerksRuneRecommendationGDSResource[]
	}
	
	export interface LolPerksDefaultStatModsPerSubStyle {
		id: number
		perks: number[]
	}
	
	export interface LolPerksGameCustomizationDTO {
		category: string
		content: string
		queueType: number
		isTeambuilder: boolean
	}
	
	export interface LolPerksGameDataChampionSummary {
		id: number
		name: string
	}
	
	export interface LolPerksGameflowGameData {
		queue: LCUTypes.LolPerksQueue
		isCustomGame: boolean
		gameId: number
	}
	
	export type LolPerksGameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"
	
	export interface LolPerksGameflowSession {
		phase: LCUTypes.LolPerksGameflowPhase
		gameData: LCUTypes.LolPerksGameflowGameData
	}
	
	export interface LolPerksGetGameCustomizationDTO {
		queueType: string
	}
	
	export interface LolPerksInventoryRunePageCount {
		quantity: number
	}
	
	export interface LolPerksLobbyDto {
		localMember: LCUTypes.LolPerksLobbyParticipantDto
	}
	
	export interface LolPerksLobbyParticipantDto {
		playerSlots: LCUTypes.LolPerksQuickPlayPresetSlotDto[]
	}
	
	export interface LolPerksLoginSession {
		state: LCUTypes.LolPerksLoginSessionState
		summonerId: number
		accountId: number
	}
	
	export type LolPerksLoginSessionState = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"
	
	export interface LolPerksMucJwtDto {
		jwt: string
		channelClaim: string
		domain: string
		targetRegion: string
	}
	
	export interface LolPerksNamecheckAuthorization {
		subject: string
	}
	
	export interface LolPerksNamecheckLoginDataPacket {
		platformId: string
	}
	
	export interface LolPerksNamecheckPayload {
		name: string
		nameValidationContext: string
		puuid: string
		shard: string
	}
	
	export interface LolPerksNamecheckResponse {
		errors: string[]
	}
	
	export interface LolPerksPerkBook {
		currentPageId: number
		pages: LCUTypes.LolPerksPerkPageResource[]
	}
	
	export interface LolPerksPerkGDSResource {
		iconPath: string
		id: number
		longDesc: string
		name: string
		shortDesc: string
		tooltip: string
		recommendationDescriptor: string
		majorChangePatchVersion: string
		recommendationDescriptorAttributes: Record<string, number>
	}
	
	export interface LolPerksPerkIdListResource {
		perkIds: number[]
	}
	
	export interface LolPerksPerkPageResource {
		current: boolean
		id: number
		isActive: boolean
		isValid: boolean
		isEditable: boolean
		isDeletable: boolean
		isTemporary: boolean
		name: string
		order: number
		primaryStyleId: number
		selectedPerkIds: number[]
		subStyleId: number
		autoModifiedSelections: number[]
		lastModified: number
		runeRecommendationId: string
		recommendationIndex: number
		isRecommendationOverride: boolean
		recommendationChampionId: number
		quickPlayChampionIds: number[]
		primaryStyleName: string
		secondaryStyleName: string
		primaryStyleIconPath: string
		secondaryStyleIconPath: string
		tooltipBgPath: string
		pageKeystone: LCUTypes.LolPerksUIPerkMinimal
		uiPerks: LCUTypes.LolPerksUIPerkMinimal[]
	}
	
	export interface LolPerksPerkSettingResource {
		perkIds: number[]
		perkStyle: number
		perkSubStyle: number
	}
	
	export interface LolPerksPerkSettings {
		pages: LCUTypes.LolPerksPerkPageResource[]
		perShardPerkBooks: Record<string, LCUTypes.LolPerksPerkBook>
		settings: LCUTypes.LolPerksUISettings
	}
	
	export interface LolPerksPerkStyleResource {
		allowedSubStyles: number[]
		iconPath: string
		assetMap: Record<string, string>
		isAdvanced: boolean
		id: number
		name: string
		slots: LCUTypes.LolPerksPerkStyleSlotResource[]
		subStyleBonus: LCUTypes.LolPerksPerkSubStyleBonusResource[]
		tooltip: string
		defaultSubStyle: number
		defaultPerks: number[]
		defaultPageName: string
		defaultPerksWhenSplashed: number[]
		defaultStatModsPerSubStyle: LCUTypes.LolPerksDefaultStatModsPerSubStyle[]
	}
	
	export interface LolPerksPerkStyleSlotResource {
		perks: number[]
		type: string
		slotLabel: string
	}
	
	export interface LolPerksPerkSubStyleBonusResource {
		perkId: number
		styleId: number
	}
	
	export interface LolPerksPerkUIPerk {
		iconPath: string
		id: number
		styleId: number
		styleIdName: string
		longDesc: string
		name: string
		shortDesc: string
		tooltip: string
		recommendationDescriptor: string
		slotType: string
	}
	
	export interface LolPerksPerkUIRecommendedPage {
		position: string
		isDefaultPosition: boolean
		keystone: LCUTypes.LolPerksPerkUIPerk
		perks: LCUTypes.LolPerksPerkUIPerk[]
		primaryPerkStyleId: number
		secondaryPerkStyleId: number
		primaryRecommendationAttribute: string
		secondaryRecommendationAttribute: string
		summonerSpellIds: number[]
		recommendationId: string
		isRecommendationOverride: boolean
		recommendationChampionId: number
	}
	
	export interface LolPerksPerkUISlot {
		perks: number[]
		type: string
		slotLabel: string
	}
	
	export interface LolPerksPerkUIStyle {
		allowedSubStyles: number[]
		iconPath: string
		assetMap: Record<string, string>
		id: number
		name: string
		slots: LCUTypes.LolPerksPerkUISlot[]
		subStyleBonus: LCUTypes.LolPerksPerkSubStyleBonusResource[]
		tooltip: string
		defaultSubStyle: number
		defaultPerks: number[]
		defaultPageName: string
		idName: string
	}
	
	export interface LolPerksPerksConfigDTO {
		styles: LCUTypes.LolPerksPerkStyleResource[]
	}
	
	export interface LolPerksPlatformConfig {
		PerksEnabled: boolean
		AutoRepairPagesEnabled: boolean
	}
	
	export interface LolPerksPlayerInventory {
		ownedPageCount: number
		customPageCount: number
		canAddCustomPage: boolean
		isCustomPageCreationUnlocked: boolean
	}
	
	export interface LolPerksQueue {
		id: number
		mapId: number
		isTeamBuilderManaged: boolean
	}
	
	export interface LolPerksQuickPlayPresetSlotDto {
		championId: number
		positionPreference: string
		perks: string
	}
	
	export interface LolPerksRuneRecommendationGDSResource {
		position: string
		mapId: number
		isDefaultPosition: boolean
		minSummonerLevel: number
		perkIds: number[]
		primaryPerkStyleId: number
		secondaryPerkStyleId: number
		summonerSpellIds: number[]
		recommendationId: string
	}
	
	export interface LolPerksSettingsStorageContainer {
		data: LCUTypes.LolPerksPerkSettings
		schemaVersion: number
	}
	
	export interface LolPerksSummoner {
		summonerId: number
		accountId: number
		displayName: string
		internalName: string
		profileIconId: number
		summonerLevel: number
		xpSinceLastLevel: number
		xpUntilNextLevel: number
		percentCompleteForNextLevel: number
		rerollPoints: LCUTypes.LolPerksSummonerRerollPoints
		puuid: string
	}
	
	export interface LolPerksSummonerRerollPoints {
		pointsToReroll: number
		currentPoints: number
		numberOfRolls: number
		maxRolls: number
		pointsCostToRoll: number
	}
	
	export interface LolPerksUIPerkMinimal {
		id: number
		styleId: number
		name: string
		slotType: string
		iconPath: string
	}
	
	export interface LolPerksUISettings {
		showLongDescriptions: boolean
		gridModeEnabled: boolean
		showPresetPages: boolean
		gameplayPatchVersionSeen: string
		gameplayUpdatedPerksSeen: number[]
	}
	
	export interface LolPerksUpdatePageOrderRequest {
		targetPageId: number
		destinationPageId: number
		offset: number
	}
	
	export interface LolPerksValidateItemSetNameResponse {
		success: boolean
		nameCheckResponse: LCUTypes.LolPerksNamecheckResponse
	}
	
	export interface LolPerksValidatePageNameData {
		id: number
		name: string
	}
	
	export interface LolPftGameClientEndOfGameStats {
		gameId: number
		gameMode: string
		statsBlock: unknown
		queueId: number
		isRanked: boolean
	}
	
	export interface LolPftGameflowGameDodge {
		state: LCUTypes.LolPftGameflowGameDodgeState
		dodgeIds: number[]
	}
	
	export type LolPftGameflowGameDodgeState = "TournamentDodged" | "StrangerDodged" | "PartyDodged" | "Invalid"
	
	export type LolPftGameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"
	
	export interface LolPftGameflowSession {
		phase: LCUTypes.LolPftGameflowPhase
		gameDodge: LCUTypes.LolPftGameflowGameDodge
	}
	
	export interface LolPftLoginSession {
		state: LCUTypes.LolPftLoginSessionStates
		idToken: string
	}
	
	export type LolPftLoginSessionStates = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"
	
	export interface LolPftPFTEndOfGamePlayer {
		stats: unknown
		items: number[]
		botPlayer: boolean
		championId: number
		gameId: number
		leaver: boolean
		leaves: number
		level: number
		losses: number
		profileIconId: number
		spell1Id: number
		spell2Id: number
		summonerName: string
		teamId: number
		wins: number
		summonerId: number
	}
	
	export interface LolPftPFTEndOfGamePoints {
		pointChangeFromChampionsOwned: number
		pointChangeFromGameplay: number
		pointsUsed: number
		previousPoints: number
		pointsUntilNextReroll: number
		rerollCount: number
		totalPoints: number
	}
	
	export interface LolPftPFTEndOfGameStats {
		difficulty: string
		gameId: number
		gameLength: number
		gameMode: string
		gameMutators: string[]
		gameType: string
		invalid: boolean
		queueType: string
		ranked: boolean
		reportGameId: number
		teams: LCUTypes.LolPftPFTEndOfGameTeam[]
		localPlayer: LCUTypes.LolPftPFTEndOfGamePlayer
		myTeamStatus: string
		leveledUp: boolean
		newSpells: number[]
		previousLevel: number
		rpEarned: number
		accountId: number
		basePoints: number
		battleBoostIpEarned: number
		boostIpEarned: number
		firstWinBonus: number
		ipEarned: number
		ipTotal: number
		boostXpEarned: number
		experienceEarned: number
		experienceTotal: number
		loyaltyBoostXpEarned: number
		previousXpTotal: number
		timeUntilNextFirstWinBonus: number
		causedEarlySurrender: boolean
		earlySurrenderAccomplice: boolean
		teamEarlySurrendered: boolean
		gameEndedInEarlySurrender: boolean
		isAramGame: boolean
		rerollData: LCUTypes.LolPftPFTEndOfGamePoints
	}
	
	export interface LolPftPFTEndOfGameTeam {
		stats: unknown
		players: LCUTypes.LolPftPFTEndOfGamePlayer[]
		memberStatusString: string
		name: string
		tag: string
		fullId: string
		teamId: number
		isBottomTeam: boolean
		isPlayerTeam: boolean
		isWinningTeam: boolean
	}
	
	export interface LolPftPFTEvent {
		playerSurveyId: number
		action: string
		data: unknown[]
	}
	
	export interface LolPftPFTMetadata {
		accountId: number
		env: string
		webRegion: string
		locale: string
		appName: string
		appVersion: string
		systemOs: string
		stats: LCUTypes.LolPftPFTEndOfGameStats
		homepageTimer: number
	}
	
	export interface LolPftPFTQuestionResponse {
		questionId: number
		responseData: unknown
	}
	
	export interface LolPftPFTSurvey {
		id: number
		title: string
		caption: string
		type: string
		display: string
		data: Record<string, unknown>
	}
	
	export interface LolPftPFTSurveyResults {
		questionResponses: LCUTypes.LolPftPFTQuestionResponse[]
		actions: LCUTypes.LolPftPFTEvent[]
	}
	
	export interface LolPftPFTSurveyV1 {
		id: number
		title: string
		caption: string
		type: string
		url: string
	}
	
	export interface LolPftSummoner {
		puuid: string
		summonerId: number
		accountId: number
		summonerLevel: number
		unnamed: boolean
	}
	
	export interface LolPlayerBehaviorBanNotification {
		id: number
		source: LCUTypes.LolPlayerBehaviorNotificationSource
		reason: string
		timeUntilBanExpires: number
		isPermaBan: boolean
		displayReformCard: boolean
	}
	
	export interface LolPlayerBehaviorCodeOfConductNotification {
		message: string
	}
	
	export type LolPlayerBehaviorGameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"
	
	export type LolPlayerBehaviorNotificationSource = "Message" | "ForcedShutdown" | "Login" | "Invalid"
	
	export interface LolPlayerBehaviorPlayerBehaviorConfig {
		IsLoaded: boolean
		CodeOfConductEnabled: boolean
	}
	
	export interface LolPlayerBehaviorPlayerBehavior_GameflowSessionResource {
		phase: LCUTypes.LolPlayerBehaviorGameflowPhase
	}
	
	export interface LolPlayerBehaviorPlayerBehavior_SimpleMessage {
		accountId: number
		msgId: string
		type: string
		params: string[]
	}
	
	export interface LolPlayerBehaviorPlayerNotificationResource {
		backgroundUrl: string
		created: string
		critical: boolean
		data: Record<string, string>
		detailKey: string
		expires: string
		iconUrl: string
		id: number
		source: string
		state: string
		titleKey: string
		type: string
	}
	
	export interface LolPlayerBehaviorReformCard {
		id: number
		punishmentType: string
		reason: string
		timeWhenPunishmentExpires: number
		punishmentLengthTime: number
		punishmentLengthGames: number
		restrictedChatGamesRemaining: number
		chatLogs: string[]
		gameIds: number[]
		playerFacingMessage: string
	}
	
	export interface LolPlayerBehaviorReformCardChatLogs {
		preGameChatLogs: string[]
		inGameChatLogs: string[]
		postGameChatLogs: string[]
	}
	
	export interface LolPlayerBehaviorReformCardV2 {
		id: number
		punishmentType: string
		punishmentReason: string
		punishedUntilDateMillis: number
		punishmentLengthMillis: number
		punishmentLengthGames: number
		punishedForReformCardChatLogs: LCUTypes.LolPlayerBehaviorReformCardChatLogs[]
		punishedForGameIds: number[]
		playerFacingMessage: string
	}
	
	export interface LolPlayerBehaviorReporterFeedback {
		id: number
		accountId: number
		messageId: string
		type: string
	}
	
	export interface LolPlayerBehaviorReporterFeedbackMessage {
		title: string
		message: string
		category: string
		locale: string
		key: string
	}
	
	export interface LolPlayerBehaviorRestrictionNotification {
		id: number
		source: LCUTypes.LolPlayerBehaviorNotificationSource
		gamesRemaining: number
		expirationMillis: number
		displayReformCard: boolean
	}
	
	export interface LolPlayerBehaviorSettingsResource {
		data: unknown
		schemaVersion: number
	}
	
	export interface LolPlayerBehaviorUserInfo {
		userInfo: string
	}
	
	export interface LolPlayerBehaviorUserInfoBanData {
		restrictions: LCUTypes.LolPlayerBehaviorUserInfoRestriction[]
	}
	
	export interface LolPlayerBehaviorUserInfoRestriction {
		type: string
		reason: string
		scope: string
		dat: LCUTypes.LolPlayerBehaviorUserInfoRestrictionData
	}
	
	export interface LolPlayerBehaviorUserInfoRestrictionData {
		expirationMillis: number
		gameData: LCUTypes.LolPlayerBehaviorUserInfoRestrictionGameData
		gameLocation: string
	}
	
	export interface LolPlayerBehaviorUserInfoRestrictionGameData {
		productName: string
		gameLocation: string
		triggerGameId: string
		additionalGameIds: string[]
	}
	
	export interface LolPlayerBehaviorUserInfoToken {
		ban: LCUTypes.LolPlayerBehaviorUserInfoBanData
	}
	
	export interface LolPlayerLevelUpEndOfGameStats {
		gameMode: string
		gameMutators: string[]
		gameType: string
		queueType: string
		leveledUp: boolean
		newSpells: number[]
		previousLevel: number
		rpEarned: number
	}
	
	export interface LolPlayerLevelUpGameDataSummonerSpell {
		id: number
		summonerLevel: number
	}
	
	export interface LolPlayerLevelUpLoginSession {
		state: LCUTypes.LolPlayerLevelUpLoginSessionStates
		summonerId: number
		accountId: number
	}
	
	export type LolPlayerLevelUpLoginSessionStates = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"
	
	export interface LolPlayerLevelUpPlayerLevelUpEvent {
		switchedToStandardFreeToPlayChampRotation: boolean
		nowHasAccessToPublicChatRooms: boolean
		nowHasAccessToLoot: boolean
		leveledUp: boolean
		newSummonerLevel: number
		newRuneSlotUnlocked: boolean
		rpEarned: number
		newSpells: number[]
		newQueues: number[]
	}
	
	export interface LolPlayerLevelUpPlayerLevelUpEventAck {
		seenThisEvent: boolean
		newSummonerLevel: number
	}
	
	export interface LolPlayerLevelUpQueue {
		id: number
		minLevel: number
	}
	
	export interface LolPlayerMessagingDynamicCelebrationMessagingNotificationResource {
		id: number
		accountId: number
		msgId: string
		celebrationTitle: string
		celebrationBody: string
		celebrationMessage: string
		inventoryType: string
		itemId: string
		itemQuantity: string
		celebrationType: string
		status: number
	}
	
	export interface LolPlayerMessagingLoginDataPacket {
		simpleMessages: LCUTypes.LolPlayerMessagingSimpleMessage[]
	}
	
	export interface LolPlayerMessagingPlayerMessagingNotificationResource {
		id: number
		accountId: number
		msgId: string
		title: string
		body: string
		status: number
	}
	
	export interface LolPlayerMessagingSimpleMessage {
		accountId: number
		msgId: string
		type: string
		titleCode: string
		bodyCode: string
		params: string[]
	}
	
	export interface LolPlayerNameTransitionAuthenticationResponse {
		type: LCUTypes.LolPlayerNameTransitionResponseType
		success: LCUTypes.LolPlayerNameTransitionSuccessResponseDetails
		country: string
		error: string
	}
	
	export interface LolPlayerNameTransitionPlayerNameTransitionModal {
		modalState: LCUTypes.LolPlayerNameTransitionPlayerNameTransitionModalState
		riotIdLaunchDate: string
		riotIdChangeUrl: string
		faqUrl: string
	}
	
	export interface LolPlayerNameTransitionPlayerNameTransitionModalClientConfig {
		dialogEnabled: boolean
		dialogActivationDate: string
		riotIdLaunchDate: string
		riotIdChangeUrl: string
		faqUrl: string
	}
	
	export interface LolPlayerNameTransitionPlayerNameTransitionModalSettingCategoryResource {
		schemaVersion: number
		data: LCUTypes.LolPlayerNameTransitionPlayerNameTransitionModalSettings
	}
	
	export interface LolPlayerNameTransitionPlayerNameTransitionModalSettings {
		mHasSeenRiotIdPreTransitionDialog: boolean
		mHasSeenRiotIdPostTransitionDialog: boolean
	}
	
	export type LolPlayerNameTransitionPlayerNameTransitionModalState = "DISMISSED" | "POST_LAUNCH" | "PRE_LAUNCH" | "DISABLED" | "FOUNDATION_NOT_READY"
	
	export interface LolPlayerNameTransitionRegionLocale {
		region: string
		locale: string
	}
	
	export type LolPlayerNameTransitionResponseType = "error" | "success" | "multifactor" | "signup" | "healup" | "auth"
	
	export interface LolPlayerNameTransitionSuccessResponseDetails {
		login_token: string
		redirect_url: string
		linked: string
	}
	
	export interface LolPlayerNameTransitionV1AuthenticationRedirectInput {
		redirect_uri: string
		language: string
	}
	
	export interface LolPlayerPreferencesLoginSession {
		state: LCUTypes.LolPlayerPreferencesLoginSessionStates
		summonerId: number
		accountId: number
		idToken: string
	}
	
	export type LolPlayerPreferencesLoginSessionStates = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"
	
	export interface LolPlayerPreferencesPlayerPreferences {
		type: string
		version: string
		data: string
	}
	
	export interface LolPlayerPreferencesPlayerPreferencesEndpoint {
		Enabled: boolean
		EnforceHttps: boolean
		ServiceEndpoint: string
		Version: string
		Retries: number
	}
	
	export interface LolPlayerReportSenderGameAgnosticReportPayload {
		offenderId: string
		categories: string[]
		location: string
		comment: string
		tokenType: string
		token: string
	}
	
	export interface LolPlayerReportSenderGameflowGameData {
		gameId: number
	}
	
	export type LolPlayerReportSenderGameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"
	
	export interface LolPlayerReportSenderGameflowSession {
		phase: LCUTypes.LolPlayerReportSenderGameflowPhase
		gameData: LCUTypes.LolPlayerReportSenderGameflowGameData
	}
	
	export interface LolPlayerReportSenderPlayerReport {
		offenderPuuid: string
		obfuscatedOffenderPuuid: string
		categories: string[]
		gameId: number
		offenderSummonerId: number
		comment: string
	}
	
	export type LolPlayerReportSenderReportRecipientMode = "Combined" | "Game-Agnostic" | "Legacy"
	
	export interface LolPlayerReportSenderSummoner {
		summonerId: number
		summonerLevel: number
		xpSinceLastLevel: number
		xpUntilNextLevel: number
		puuid: string
	}
	
	export type LolPreEndOfGameGameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"
	
	export interface LolPreEndOfGameSequenceEvent {
		name: string
		priority: number
	}
	
	export interface LolPremadeVoiceAccountSettingsCategoryDataResource {
		autoJoin: boolean
		muteOnConnect: boolean
		inputMode: LCUTypes.LolPremadeVoiceInputMode
		pushToTalkKey: string
		showFirstExperienceInLCU: boolean
		showFirstExperienceInGame: boolean
	}
	
	export interface LolPremadeVoiceAccountSettingsCategoryResource {
		data?: LCUTypes.LolPremadeVoiceAccountSettingsCategoryDataResource
		schemaVersion: number
	}
	
	export interface LolPremadeVoiceAudioPropertiesResource {
		isLoopbackEnabled: boolean
		micEnergy: number
	}
	
	export type LolPremadeVoiceConfigReadinessEnum = "Disabled" | "Ready" | "NotReady"
	
	export interface LolPremadeVoiceConfigStatus {
		readiness: LCUTypes.LolPremadeVoiceConfigReadinessEnum
	}
	
	export type LolPremadeVoiceConfigType = "player" | "public"
	
	export interface LolPremadeVoiceDeviceResource {
		handle: string
		name: string
		usable: boolean
		is_current_device: boolean
		is_default: boolean
	}
	
	export interface LolPremadeVoiceDeviceResourceRiotClient {
		handle: string
		name: string
		is_effective_device: boolean
		is_current_device: boolean
		is_default: boolean
	}
	
	export interface LolPremadeVoiceEntitlementsToken {
		entitlements: string[]
	}
	
	export interface LolPremadeVoiceExternalSession {
		patchlineFullName: string
		patchlineId: string
		productId: string
	}
	
	export interface LolPremadeVoiceFirstExperience {
		showFirstExperienceInLCU: boolean
		showFirstExperienceInGame: boolean
	}
	
	export interface LolPremadeVoiceGameEventHotkeys {
		evtPushToTalk?: string
	}
	
	export interface LolPremadeVoiceGameInputSettings {
		GameEvents: LCUTypes.LolPremadeVoiceGameEventHotkeys
	}
	
	export interface LolPremadeVoiceGameflowGameClient {
		running: boolean
	}
	
	export type LolPremadeVoiceGameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"
	
	export interface LolPremadeVoiceGameflowSession {
		phase: LCUTypes.LolPremadeVoiceGameflowPhase
		gameClient: LCUTypes.LolPremadeVoiceGameflowGameClient
	}
	
	export type LolPremadeVoiceInputMode = "pushToTalk" | "voiceActivity"
	
	export interface LolPremadeVoiceKeyCombo {
		keyBindings: LCUTypes.LolPremadeVoicePushToTalkKey[]
	}
	
	export interface LolPremadeVoiceKeycodePushToTalkResource {
		enabled: boolean
		keyCombos?: LCUTypes.LolPremadeVoiceKeyCombo[]
	}
	
	export interface LolPremadeVoiceLocalSettingsCategoryDataResource {
		currentCaptureDeviceHandle: string
		inputVolume: number
		vadSensitivity: number
	}
	
	export interface LolPremadeVoiceLocalSettingsCategoryResource {
		data?: LCUTypes.LolPremadeVoiceLocalSettingsCategoryDataResource
		schemaVersion: number
	}
	
	export interface LolPremadeVoiceLoginSession {
		connected: boolean
	}
	
	export interface LolPremadeVoiceParticipantResource {
		id: string
		name: string
		volume: number
		energy: number
		isMuted: boolean
		isSpeaking: boolean
	}
	
	export interface LolPremadeVoicePartyDto {
		partyId: string
		commsEnabled: boolean
		players: Record<string, LCUTypes.LolPremadeVoicePlayerDto>
	}
	
	export type LolPremadeVoicePartyMemberRoleEnum = "DECLINED" | "KICKED" | "HOLD" | "INVITED" | "MEMBER" | "LEADER"
	
	export interface LolPremadeVoicePlayerDto {
		displayName: string
		puuid: string
		partyId: string
		summonerId: number
		role: LCUTypes.LolPremadeVoicePartyMemberRoleEnum
	}
	
	export interface LolPremadeVoicePremadeVoiceParticipantDto {
		participantId: string
		summonerId: number
		puuid: string
		displayName: string
		volume: number
		energy: number
		isMuted: boolean
		isSpeaking: boolean
	}
	
	export interface LolPremadeVoicePushToTalkKey {
		key: number
	}
	
	export interface LolPremadeVoicePushToTalkResource {
		pttEnabled: boolean
		pttKeyBinding?: string
	}
	
	export interface LolPremadeVoiceSessionResource {
		id: string
		status: LCUTypes.LolPremadeVoiceSessionStatus
		participants: LCUTypes.LolPremadeVoiceParticipantResource[]
		volume: number
		isMuted: boolean
		isTransmitEnabled: boolean
	}
	
	export type LolPremadeVoiceSessionStatus = "onHold" | "active"
	
	export interface LolPremadeVoiceSettingsResource {
		currentCaptureDeviceHandle: string
		vadHangoverTime: number
		vadSensitivity: number
		micLevel: number
		localMicMuted: boolean
		loopbackEnabled: boolean
		autoJoin: boolean
		muteOnConnect: boolean
		vadActive: boolean
		pttActive: boolean
		inputMode: LCUTypes.LolPremadeVoiceInputMode
		pttKey?: string
	}
	
	export interface LolPremadeVoiceStateResource {
		connected: boolean
	}
	
	export interface LolPremadeVoiceSummoner {
		accountId: number
		puuid: string
	}
	
	export interface LolPremadeVoiceVoiceAvailability {
		enabled: boolean
		connectedToVoiceServer: boolean
		voiceChannelAvailable: boolean
		disabledAfterLogin: boolean
		showUI: boolean
		showDisconnectedState: boolean
	}
	
	export interface LolProgressionCounter {
		id: string
		name: string
		groupId: string
		direction: string
		startValue: number
	}
	
	export interface LolProgressionCounterInstance {
		ownerId: string
		productId: string
		groupId: string
		counterId: string
		counterValue: number
	}
	
	export interface LolProgressionEntityInstance {
		groupId: string
		counters: LCUTypes.LolProgressionCounterInstance[]
		milestones: LCUTypes.LolProgressionMilestoneInstance[]
	}
	
	export interface LolProgressionGroup {
		id: string
		productId: string
		name: string
		repeat: LCUTypes.LolProgressionRepeat
		counters: LCUTypes.LolProgressionCounter[]
		milestones: LCUTypes.LolProgressionMilestone[]
	}
	
	export interface LolProgressionMilestone {
		id: string
		name: string
		groupId: string
		counterId: string
		triggerValue: number
		properties: Record<string, string>
	}
	
	export interface LolProgressionMilestoneInstance {
		milestoneId: string
		ownerId: string
		productId: string
		groupId: string
		counterId: string
		triggerValue: number
		repeatSequence: number
		triggered: boolean
	}
	
	export interface LolProgressionRepeat {
		count: number
		scope: number
		multiplier: number
	}
	
	export interface LolPublishingContentAccountData {
		puuid: string
		accountId: string
		summonerLevel: string
		displayName: string
	}
	
	export interface LolPublishingContentBuildInfo {
		version: string
		patchline: string
	}
	
	export interface LolPublishingContentClientData {
		puuid: string
		account_id: number
		env: string
		web_region: string
		locale: string
		summoner_level: number
		summoner_name: string
		app_name: string
		app_version: string
		system_os: string
		protocol: string
		port: number
		assetUrls: Record<string, string>
	}
	
	export interface LolPublishingContentPubHubConfig {
		edge: LCUTypes.LolPublishingContentPubHubConfigEdge
		appContext: LCUTypes.LolPublishingContentPubHubConfigAppContext
	}
	
	export interface LolPublishingContentPubHubConfigAppContext {
		userId: string
		userRegion: string
		deviceCategory: string
		deviceOperatingSystem: string
		deviceOperatingSystemVersion: string
		appId: string
		appVersion: string
		appLocale: string
		appLanguage: string
		publishingLocale: string
		appSessionId: string
	}
	
	export interface LolPublishingContentPubHubConfigEdge {
		clientId: string
		clientRegion: string
	}
	
	export interface LolPublishingContentPublishingLocaleSetting {
		data: LCUTypes.LolPublishingContentPublishingLocaleSettingData
	}
	
	export interface LolPublishingContentPublishingLocaleSettingData {
		publishingLocale: string
	}
	
	export interface LolPublishingContentPublishingSettings {
		region: string
		locale: string
		webRegion: string
		webLocale: string
		publishingLocale: string
		rsoPlatformId: string
	}
	
	export interface LolPublishingContentRegionLocale {
		region: string
		locale: string
		webRegion: string
	}
	
	export interface LolPublishingContentSummonerInfo {
		displayName: string
		summonerLevel: number
	}
	
	export interface LolPublishingContentSystemInfo {
		operatingSystem: LCUTypes.LolPublishingContentSystemInfoOperatingSystem
	}
	
	export interface LolPublishingContentSystemInfoOperatingSystem {
		platform: string
		versionMajor: string
	}
	
	export interface LolPurchaseWidgetBalance {
		currencyType: string
		amount: number
	}
	
	export interface LolPurchaseWidgetBaseSkinLineDto {
		items: LCUTypes.LolPurchaseWidgetSkinLineItemDto[]
		localizedName: string
		skinLineDescriptions: LCUTypes.LolPurchaseWidgetSkinLineDescriptionDto[]
		pricingOptions: LCUTypes.LolPurchaseWidgetPriceOptionDto[]
		splashPath: string
		uncenteredSplashPath: string
		collectionCardPath: string
		collectionDescription: string
		tilePath: string
	}
	
	export interface LolPurchaseWidgetBundledItemPricingInfo {
		discountPrices: LCUTypes.LolPurchaseWidgetDiscountPricingInfo[]
		inventoryType: string
		itemId: number
		quantity: number
	}
	
	export interface LolPurchaseWidgetCapOffer {
		id: string
		typeId: string
		label: string
		productId: string
		merchantId: string
		payload: LCUTypes.LolPurchaseWidgetCapOfferPayloadEntry[]
		active: boolean
		startDate: string
		createdDate: string
	}
	
	export interface LolPurchaseWidgetCapOfferPayloadEntry {
		itemPriceMap: Record<string, number>
		itemInstanceId: string
		fulfillmentTypeId: string
		inventoryTypeUUID: string
	}
	
	export interface LolPurchaseWidgetCapOrdersDataDto {
		id: string
		subOrders: LCUTypes.LolPurchaseWidgetCapOrdersSubOrderDto[]
		purchaser: LCUTypes.LolPurchaseWidgetCapOrdersTypedIdentifierDto
		location: string
		source: string
	}
	
	export interface LolPurchaseWidgetCapOrdersMetaDto {
		xid: string
	}
	
	export interface LolPurchaseWidgetCapOrdersOfferContextDto {
		quantity: number
		paymentOption: string
	}
	
	export interface LolPurchaseWidgetCapOrdersOfferDto {
		id: string
		productId: string
	}
	
	export interface LolPurchaseWidgetCapOrdersOrderDto {
		data: LCUTypes.LolPurchaseWidgetCapOrdersDataDto
		meta: LCUTypes.LolPurchaseWidgetCapOrdersMetaDto
	}
	
	export interface LolPurchaseWidgetCapOrdersSubOrderDto {
		recipientId: string
		offerContext: LCUTypes.LolPurchaseWidgetCapOrdersOfferContextDto
		offer: LCUTypes.LolPurchaseWidgetCapOrdersOfferDto
	}
	
	export interface LolPurchaseWidgetCapOrdersTypedIdentifierDto {
		id: string
		typeId: string
	}
	
	export interface LolPurchaseWidgetCatalogPluginItem {
		itemId: number
		itemInstanceId: string
		owned: boolean
		inventoryType: string
		subInventoryType: string
		name: string
		subTitle: string
		description: string
		imagePath: string
		purchaseDate: number
		releaseDate: number
		inactiveDate: number
		prices: LCUTypes.LolPurchaseWidgetCatalogPluginPrice[]
		tags?: string[]
		metadata?: LCUTypes.LolPurchaseWidgetItemMetadataEntry[]
		questSkinInfo?: LCUTypes.LolPurchaseWidgetSkinLineInfo
		active: boolean
		ownershipType?: LCUTypes.LolPurchaseWidgetInventoryOwnership
	}
	
	export interface LolPurchaseWidgetCatalogPluginItemAssets {
		splashPath: string
		iconPath: string
		tilePath: string
		emblems: LCUTypes.LolPurchaseWidgetChampionSkinEmblem[]
		colors: string[]
	}
	
	export interface LolPurchaseWidgetCatalogPluginItemWithDetails {
		item: LCUTypes.LolPurchaseWidgetCatalogPluginItem
		quantity: number
		requiredItems?: LCUTypes.LolPurchaseWidgetCatalogPluginItemWithDetails[]
		bundledItems?: LCUTypes.LolPurchaseWidgetCatalogPluginItemWithDetails[]
		minimumBundlePrices?: LCUTypes.LolPurchaseWidgetCatalogPluginPrice[]
		bundledDiscountPrices?: LCUTypes.LolPurchaseWidgetCatalogPluginPrice[]
		assets: LCUTypes.LolPurchaseWidgetCatalogPluginItemAssets
	}
	
	export interface LolPurchaseWidgetCatalogPluginPrice {
		currency: string
		cost: number
		costType?: string
		sale?: LCUTypes.LolPurchaseWidgetCatalogPluginSale
	}
	
	export interface LolPurchaseWidgetCatalogPluginSale {
		startDate: string
		endDate: string
		discount?: number
		cost: number
	}
	
	export interface LolPurchaseWidgetChampionSkinEmblem {
		name: string
		emblemPath: LCUTypes.LolPurchaseWidgetChampionSkinEmblemPath
		emblemPosition: LCUTypes.LolPurchaseWidgetChampionSkinEmblemPosition
	}
	
	export interface LolPurchaseWidgetChampionSkinEmblemPath {
		large: string
		small: string
	}
	
	export interface LolPurchaseWidgetChampionSkinEmblemPosition {
		vertical: string
		horizontal: string
	}
	
	export interface LolPurchaseWidgetDiscountPricingInfo {
		cost: number
		costType: string
		currency: string
		discount: number
	}
	
	export type LolPurchaseWidgetInventoryOwnership = "F2P" | "LOYALTY" | "RENTED" | "OWNED"
	
	export interface LolPurchaseWidgetItemChoiceDetails {
		item: LCUTypes.LolPurchaseWidgetCatalogPluginItem
		backgroundImage: string
		contents: LCUTypes.LolPurchaseWidgetItemDetails[]
		discount: string
		fullPrice: number
		displayType: string
		purchaseOptions: LCUTypes.LolPurchaseWidgetPurchaseOption[]
	}
	
	export interface LolPurchaseWidgetItemChoices {
		choices: LCUTypes.LolPurchaseWidgetItemChoiceDetails[]
		validationErrors: LCUTypes.LolPurchaseWidgetValidationErrorEntry[]
	}
	
	export interface LolPurchaseWidgetItemCost {
		currency: string
		cost: number
		discount?: number
	}
	
	export interface LolPurchaseWidgetItemDefinition {
		itemId: number
		inventoryType: string
		subInventoryType: string
		name: string
		description: string
		subTitle: string
		owned: boolean
		assets: LCUTypes.LolPurchaseWidgetCatalogPluginItemAssets
		tags: string[]
		metadata: LCUTypes.LolPurchaseWidgetItemMetadataEntry[]
		bundledItemPrice?: LCUTypes.LolPurchaseWidgetBundledItemPricingInfo
		loyaltyUnlocked: boolean
	}
	
	export interface LolPurchaseWidgetItemDetails {
		title: string
		subTitle: string
		description: string
		iconUrl: string
	}
	
	export interface LolPurchaseWidgetItemKey {
		inventoryType: string
		itemId: number
	}
	
	export interface LolPurchaseWidgetItemMetadataEntry {
		type: string
		value: string
	}
	
	export interface LolPurchaseWidgetItemOwnership {
		itemKey: LCUTypes.LolPurchaseWidgetItemKey
		quantity: number
	}
	
	export interface LolPurchaseWidgetItemPrice {
		currencyType: string
		price: number
		purchasable: boolean
	}
	
	export interface LolPurchaseWidgetItemSale {
		startDate: string
		endDate: string
		discount?: number
	}
	
	export interface LolPurchaseWidgetLoginSession {
		puuid?: string
		state: LCUTypes.LolPurchaseWidgetLoginSessionStates
		summonerId: number
		accountId: number
		idToken: string
	}
	
	export type LolPurchaseWidgetLoginSessionStates = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"
	
	export interface LolPurchaseWidgetOrderNotificationResource {
		eventTypeId: string
		eventType: string
		status: string
	}
	
	export interface LolPurchaseWidgetPriceDetail {
		itemKey: LCUTypes.LolPurchaseWidgetItemKey
		price: LCUTypes.LolPurchaseWidgetItemPrice
	}
	
	export interface LolPurchaseWidgetPriceOptionDto {
		price: number
		currencyType: string
		currencyPaymentOption?: string
		currencyName?: string
		currencyImagePath?: string
	}
	
	export interface LolPurchaseWidgetPurchasableItem {
		item: LCUTypes.LolPurchaseWidgetItemDefinition
		dependencies: LCUTypes.LolPurchaseWidgetItemDefinition[]
		bundledItems: LCUTypes.LolPurchaseWidgetItemDefinition[]
		sale?: LCUTypes.LolPurchaseWidgetItemSale
		purchaseOptions: LCUTypes.LolPurchaseWidgetPurchaseOption[]
		validationErrors: LCUTypes.LolPurchaseWidgetValidationErrorEntry[]
	}
	
	export interface LolPurchaseWidgetPurchaseItem {
		itemKey: LCUTypes.LolPurchaseWidgetItemKey
		quantity: number
		source: string
		purchaseCurrencyInfo: LCUTypes.LolPurchaseWidgetItemPrice
	}
	
	export type LolPurchaseWidgetPurchaseOfferOrderStates = "SUCCESS" | "FAIL" | "IN_PROGRESS" | "NOT_STARTED"
	
	export interface LolPurchaseWidgetPurchaseOfferOrderStatus {
		orderState: LCUTypes.LolPurchaseWidgetPurchaseOfferOrderStates
		message: string
	}
	
	export interface LolPurchaseWidgetPurchaseOfferOrderStatuses {
		statuses: Record<string, LCUTypes.LolPurchaseWidgetPurchaseOfferOrderStatus>
	}
	
	export interface LolPurchaseWidgetPurchaseOfferRequestV3 {
		offerId: string
		currencyType: string
		quantity: number
		price: number
	}
	
	export interface LolPurchaseWidgetPurchaseOfferResponseV3 {
		legacy: boolean
		orderDto?: LCUTypes.LolPurchaseWidgetCapOrdersOrderDto
	}
	
	export interface LolPurchaseWidgetPurchaseOption {
		priceDetails: LCUTypes.LolPurchaseWidgetPriceDetail[]
	}
	
	export interface LolPurchaseWidgetPurchaseRequest {
		items: LCUTypes.LolPurchaseWidgetPurchaseItem[]
	}
	
	export interface LolPurchaseWidgetPurchaseResponse {
		items: LCUTypes.LolPurchaseWidgetPurchaseItem[]
		transactions: LCUTypes.LolPurchaseWidgetTransaction[]
		useRMSConfirmation: boolean
	}
	
	export interface LolPurchaseWidgetPurchaseWidgetConfig {
		enabled: boolean
		nonRefundableDisclaimerEnabled: boolean
		alwaysShowPurchaseDisclaimer: boolean
	}
	
	export interface LolPurchaseWidgetRiotMessagingServiceMessage {
		resource: string
		service: string
		version: string
		timestamp: number
		payload: string
	}
	
	export interface LolPurchaseWidgetSale {
		startDate: string
		endDate: string
		prices: LCUTypes.LolPurchaseWidgetItemCost[]
	}
	
	export interface LolPurchaseWidgetSkinLineDescriptionDto {
		title: string
		description: string
		iconImagePath: string
	}
	
	export interface LolPurchaseWidgetSkinLineDescriptionInfo {
		title: string
		description: string
		iconPath: string
	}
	
	export interface LolPurchaseWidgetSkinLineInfo {
		name: string
		descriptionInfo: LCUTypes.LolPurchaseWidgetSkinLineDescriptionInfo[]
		splashPath: string
		tilePath: string
		collectionCardPath: string
		uncenteredSplashPath: string
		collectionDescription: string
		tiers: LCUTypes.LolPurchaseWidgetSkinLineTier[]
	}
	
	export interface LolPurchaseWidgetSkinLineItemDto {
		thumbnailImagePath: string
		largeImagePath?: string
		localizedLongName: string
		localizedShortName: string
		largeVideoPath?: string
	}
	
	export interface LolPurchaseWidgetSkinLineTier {
		id: number
		name: string
		stage: number
		description?: string
		splashPath: string
		uncenteredSplashPath: string
		tilePath: string
		loadScreenPath: string
		shortName: string
		splashVideoPath?: string
		collectionSplashVideoPath?: string
	}
	
	export interface LolPurchaseWidgetTransaction {
		transactionId: string
		itemKey: LCUTypes.LolPurchaseWidgetItemKey
		itemName: string
		iconUrl: string
	}
	
	export interface LolPurchaseWidgetValidateOfferError {
		errorKey: string
		meta: string
	}
	
	export interface LolPurchaseWidgetValidateOfferRequestV3 {
		offerId: string
	}
	
	export interface LolPurchaseWidgetValidateOfferResponseV3 {
		validationErrors: LCUTypes.LolPurchaseWidgetValidateOfferError[]
	}
	
	export interface LolPurchaseWidgetValidationError {
		errorCode: string
		message: string
		errorDetails: Record<string, string>
		responseItems: string[]
	}
	
	export interface LolPurchaseWidgetValidationErrorEntry {
		id: string
	}
	
	export interface LolPurchaseWidgetValidationRequest {
		items: LCUTypes.LolPurchaseWidgetValidationRequestItem[]
		ownedItems: LCUTypes.LolPurchaseWidgetItemOwnership[]
	}
	
	export interface LolPurchaseWidgetValidationRequestItem {
		itemKey: LCUTypes.LolPurchaseWidgetItemKey
		quantity: number
	}
	
	export interface LolPurchaseWidgetValidationResponse {
		items: LCUTypes.LolPurchaseWidgetValidationResponseItem[]
		valid: boolean
	}
	
	export interface LolPurchaseWidgetValidationResponseItem {
		itemKey: LCUTypes.LolPurchaseWidgetItemKey
		quantity: number
		validationCurrencyInfo: LCUTypes.LolPurchaseWidgetItemPrice[]
		sale?: LCUTypes.LolPurchaseWidgetSale
		name?: string
		description?: string
	}
	
	export interface LolPurchaseWidgetWallet {
		accountId: number
		balances: LCUTypes.LolPurchaseWidgetBalance[]
		version: number
	}
	
	export interface LolRankedAchievedTier {
		queueType: LCUTypes.LolRankedLeagueQueueType
		tier: string
		division: number
	}
	
	export interface LolRankedEndOfGameStatsBlock {
		gameId: number
	}
	
	export interface LolRankedEosNotificationResource {
		notificationName: string
		notificationType: string
		seasonEndTime: number
		queue: string
		tier: string
		division: string
	}
	
	export type LolRankedEosNotificationType = "SEASON_ENDED" | "SECOND_WARNING" | "FIRST_WARNING"
	
	export interface LolRankedEosNotificationsConfig {
		config: LCUTypes.LolRankedEosNotificationsConfigEntry[]
	}
	
	export interface LolRankedEosNotificationsConfigEntry {
		name: string
		offsetTime1: number
		offsetTime2: number
		offsetTime3: number
	}
	
	export interface LolRankedEosRewardData {
		id: string
		type: string
		overrideImagePath: string
	}
	
	export interface LolRankedEosRewardGroupsConfig {
		rewardGroups: Record<string, LCUTypes.LolRankedEosRewardGroupsRewardsList>
	}
	
	export interface LolRankedEosRewardGroupsRewardsList {
		rewards: string[]
	}
	
	export interface LolRankedEosRewardsConfig {
		seasons: Record<string, LCUTypes.LolRankedEosRewardsConfigEntry>
	}
	
	export interface LolRankedEosRewardsConfigEntry {
		rewards: Record<string, LCUTypes.LolRankedEosRewardData>
	}
	
	export interface LolRankedEosSettingsData {
		notificationShown: boolean
	}
	
	export interface LolRankedEosSettingsResource {
		data: LCUTypes.LolRankedEosSettingsData
		schemaVersion: number
	}
	
	export interface LolRankedGameflowGameData {
		queue: LCUTypes.LolRankedQueue
	}
	
	export type LolRankedGameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"
	
	export interface LolRankedGameflowSession {
		phase: LCUTypes.LolRankedGameflowPhase
		gameData: LCUTypes.LolRankedGameflowGameData
	}
	
	export interface LolRankedGlobalNotification {
		notifyReason: string
		participantId: string
		queueType: string
		tier: string
		position: number
	}
	
	export interface LolRankedLcuLeagueNotification {
		id: number
		msgId: string
		displayType: LCUTypes.LolRankedNotificationDisplayType
		notifyReason: string
		changeReason: string
		queueType: LCUTypes.LolRankedLeagueQueueType
		gameId: number
		provisionalGamesRemaining: number
		tier: string
		division: LCUTypes.LolRankedLeagueDivision
		numberOfPromotions: number
		miniseriesProgress: string
		leaguePoints: number
		leaguePointsDelta: number
		ratedTier: LCUTypes.LolRankedRatedTier
		ratedRating: number
		ratedRatingDelta: number
		eligibleForPromoHelper: boolean
		miniseriesWins: number
		timeUntilInactivityStatusChanges: number
		rewardEarnedId: string
		rewardEarnedType: string
		rewardOverrideImagePath: string
		splitPointsNotification?: LCUTypes.LolRankedSplitPointsNotification
		promoSeriesForRanksEnabled: boolean
		consolationLpUsed: number
		afkLpPenaltyAmount: number
		afkLpPenaltyLevel: number
		wasAfkOrLeaver: boolean
		canDemoteFromTier: boolean
		winStreak: number
		wins: number
		losses: number
	}
	
	export type LolRankedLeagueDivision = "NA" | "V" | "IV" | "III" | "II" | "I"
	
	export interface LolRankedLeagueDivisionInfo {
		tier: string
		division: LCUTypes.LolRankedLeagueDivision
		maxLeagueSize: number
		apexUnlockTimeMillis: number
		minLpForApexTier: number
		topNumberOfPlayers: number
		standings: LCUTypes.LolRankedLeagueStanding[]
	}
	
	export interface LolRankedLeagueLadderDTO {
		queueType: string
		tier: string
		provisionalGameThreshold: number
		entries: LCUTypes.LolRankedLeagueLadderEntryDTO[]
		maxLeagueSize: number
		nextApexUpdate: number
		apexUnlockTimeMillis: number
		minLpForTier: number
		topNumberOfPlayers: number
	}
	
	export interface LolRankedLeagueLadderEntryDTO {
		summonerId: number
		puuid: string
		summonerName: string
		tier: string
		rank: string
		leaguePoints: number
		miniSeriesProgress: string
		wins: number
		losses: number
		provisionalGamesRemaining: number
		previousDayLeaguePosition: number
		previousSeasonAchievedTier: string
		previousSeasonAchievedRank: string
		earnedRegaliaRewardIds: string[]
	}
	
	export interface LolRankedLeagueLadderInfo {
		queueType: LCUTypes.LolRankedLeagueQueueType
		tier: string
		provisionalGameThreshold: number
		divisions: LCUTypes.LolRankedLeagueDivisionInfo[]
		nextApexUpdateMillis: number
		requestedRankedEntry?: LCUTypes.LolRankedLeagueStanding
	}
	
	export interface LolRankedLeagueNotification {
		notifyReason: string
		changeReason: string
		queueType: string
		gameId: number
		provisionalGamesRemaining: number
		tier: string
		rank: string
		miniseriesProgress: string
		leaguePoints: number
		leaguePointsDelta: number
		splitPoints: number
		splitPointsBreakdown: Record<string, number>
		ratedTier: string
		ratedRating: number
		ratedRatingDelta: number
		eligibleForPromoHelper?: boolean
		promoSeriesForRanksEnabled: boolean
		consolationLpUsed: number
		afkLpPenaltyAmount: number
		afkLpPenaltyLevel: number
		wasAfkOrLeaver: boolean
		canDemoteFromTier: boolean
		winStreak: number
		wins: number
		losses: number
	}
	
	export interface LolRankedLeagueNotifications {
		leagueNotifications: LCUTypes.LolRankedLeagueNotification[]
		globalNotifications: LCUTypes.LolRankedGlobalNotification[]
		rewardNotifications: LCUTypes.LolRankedRewardNotification[]
	}
	
	export type LolRankedLeagueQueueType = "RANKED_TFT_DOUBLE_UP" | "RANKED_TFT_PAIRS" | "RANKED_TFT_TURBO" | "RANKED_TFT" | "RANKED_FLEX_TT" | "CHERRY" | "RANKED_FLEX_SR" | "RANKED_SOLO_5x5" | "NONE"
	
	export interface LolRankedLeagueStanding {
		summonerId: number
		puuid: string
		summonerName: string
		position: number
		positionDelta: number
		previousPosition: number
		tier: string
		division: LCUTypes.LolRankedLeagueDivision
		leaguePoints: number
		miniseriesResults: LCUTypes.LolRankedMiniseries[]
		wins: number
		losses: number
		provisionalGamesRemaining: number
		isProvisional: boolean
		previousSeasonAchievedTier: string
		previousSeasonAchievedDivision: LCUTypes.LolRankedLeagueDivision
		earnedRegaliaRewardIds: string[]
		rankedRegaliaLevel: number
		pendingPromotion: boolean
		pendingDemotion: boolean
	}
	
	export interface LolRankedLeagueTierAndRankDTO {
		playerOrTeamId: string
		playerOrTeamName: string
		queueType: string
		tier: string
		rank: string
	}
	
	export interface LolRankedLeaguesSeasonRewardConfig {
		QualificationWarningEnabled: boolean
	}
	
	export interface LolRankedLoginSession {
		state: LCUTypes.LolRankedLoginSessionStates
		summonerId: number
		accountId: number
	}
	
	export type LolRankedLoginSessionStates = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"
	
	export type LolRankedMiniseries = "N" | "L" | "W"
	
	export type LolRankedNotificationDisplayType = "VIGNETTE" | "MODAL" | "TOAST" | "NONE"
	
	export interface LolRankedParticipantTiers {
		summonerId: number
		achievedTiers: LCUTypes.LolRankedAchievedTier[]
	}
	
	export interface LolRankedQueue {
		type: unknown
	}
	
	export interface LolRankedQueuesAndPuuidsPayload {
		queueTypes: LCUTypes.LolRankedLeagueQueueType[]
		summonerIds: number[]
	}
	
	export interface LolRankedRankedQueueStats {
		queueType: LCUTypes.LolRankedLeagueQueueType
		provisionalGameThreshold: number
		provisionalGamesRemaining: number
		isProvisional: boolean
		tier: string
		division: LCUTypes.LolRankedLeagueDivision
		leaguePoints: number
		miniSeriesProgress: string
		ratedTier: LCUTypes.LolRankedRatedTier
		ratedRating: number
		wins: number
		losses: number
		highestTier: string
		highestDivision: LCUTypes.LolRankedLeagueDivision
		previousSeasonEndTier: string
		previousSeasonEndDivision: LCUTypes.LolRankedLeagueDivision
		previousSeasonAchievedTier: string
		previousSeasonAchievedDivision: LCUTypes.LolRankedLeagueDivision
		warnings?: LCUTypes.LolRankedRankedQueueWarnings
	}
	
	export interface LolRankedRankedQueueStatsDTO {
		queueType: string
		provisionalGameThreshold: number
		provisionalGamesRemaining: number
		tier: string
		rank: string
		leaguePoints: number
		miniSeriesProgress: string
		ratedTier: string
		ratedRating: number
		wins: number
		losses: number
		highestTier: string
		highestRank: string
		previousSeasonEndTier: string
		previousSeasonEndRank: string
		previousSeasonAchievedTier: string
		previousSeasonAchievedRank: string
		warnings?: LCUTypes.LolRankedRankedQueueWarningsDTO
	}
	
	export interface LolRankedRankedQueueWarnings {
		displayDecayWarning: boolean
		timeUntilInactivityStatusChanges: number
		demotionWarning: number
		daysUntilDecay: number
	}
	
	export interface LolRankedRankedQueueWarningsDTO {
		displayDecayWarning: boolean
		timeUntilInactivityStatusChanges: number
		demotionWarning: number
		apexDaysUntilDecay: number
		daysUntilDecay: number
	}
	
	export interface LolRankedRankedStats {
		queues: LCUTypes.LolRankedRankedQueueStats[]
		queueMap: Record<string, LCUTypes.LolRankedRankedQueueStats>
		highestRankedEntry?: LCUTypes.LolRankedRankedQueueStats
		highestRankedEntrySR?: LCUTypes.LolRankedRankedQueueStats
		earnedRegaliaRewardIds: string[]
		rankedRegaliaLevel: number
		highestCurrentSeasonReachedTierSR: string
		highestPreviousSeasonEndTier: string
		highestPreviousSeasonEndDivision: LCUTypes.LolRankedLeagueDivision
		highestPreviousSeasonAchievedTier: string
		highestPreviousSeasonAchievedDivision: LCUTypes.LolRankedLeagueDivision
		splitsProgress: Record<string, number>
		seasons: Record<string, LCUTypes.LolRankedSeasonDTO>
	}
	
	export interface LolRankedRankedStatsDTO {
		queues: LCUTypes.LolRankedRankedQueueStatsDTO[]
		earnedRegaliaRewardIds: string[]
		highestPreviousSeasonEndTier: string
		highestPreviousSeasonEndRank: string
		highestPreviousSeasonAchievedTier: string
		highestPreviousSeasonAchievedRank: string
		splitsProgress: Record<string, number>
		seasons: Record<string, LCUTypes.LolRankedSeasonDTO>
	}
	
	export interface LolRankedRatedLadderEntryDTO {
		summonerId: number
		puuid: string
		summonerName: string
		ratedTier: string
		ratedRating: number
		wins: number
		previousUpdateLadderPosition: number
	}
	
	export interface LolRankedRatedLadderInfo {
		queueType: LCUTypes.LolRankedLeagueQueueType
		standings: LCUTypes.LolRankedRatedLadderStanding[]
	}
	
	export interface LolRankedRatedLadderStanding {
		summonerId: number
		puuid: string
		summonerName: string
		ratedTier: LCUTypes.LolRankedRatedTier
		leaguePoints: number
		wins: number
		position: number
		positionDelta: number
		previousPosition: number
	}
	
	export type LolRankedRatedTier = "ORANGE" | "PURPLE" | "BLUE" | "GREEN" | "GRAY" | "NONE"
	
	export interface LolRankedRewardNotification {
		rewardGroupId: string
		seasonId: number
	}
	
	export interface LolRankedRewardsInfo {
		splits: LCUTypes.LolRankedSeasonSplit[]
		currentSplit?: LCUTypes.LolRankedSeasonSplit
		rewardInfoByRewardId: Record<string, LCUTypes.LolRankedSplitReward>
		currentSplitId: number
		currentSeasonId: number
	}
	
	export interface LolRankedSeasonDTO {
		currentSeasonId: number
		currentSeasonEnd: number
		nextSeasonStart: number
	}
	
	export interface LolRankedSeasonSplit {
		splitId: number
		seasonId: number
		startTimeMillis: number
		endTimeMillis: number
		rewardTrack: LCUTypes.LolRankedSplitRewardGroup[]
		victoriousSkinRewardGroup: LCUTypes.LolRankedVictoriousSkin
	}
	
	export interface LolRankedSeasonSplitDTO {
		splitId: number
		seasonId: number
		startTime: number
		endTime: number
		rewardTrack: LCUTypes.LolRankedSplitRewardGroupDTO[]
		victoriousSkinRewardGroup: LCUTypes.LolRankedVictoriousSkinDTO
	}
	
	export interface LolRankedSequenceEvent {
		name: string
		priority: number
	}
	
	export type LolRankedSeverity = "ALERT" | "WARNING"
	
	export interface LolRankedSignedRankedStatsDTO {
		queues: LCUTypes.LolRankedRankedQueueStatsDTO[]
		earnedRegaliaRewardIds: string[]
		highestPreviousSeasonEndTier: string
		highestPreviousSeasonEndRank: string
		highestPreviousSeasonAchievedTier: string
		highestPreviousSeasonAchievedRank: string
		splitsProgress: Record<string, number>
		seasons: Record<string, LCUTypes.LolRankedSeasonDTO>
		jwt: string
	}
	
	export interface LolRankedSocialLeaderboardRankedQueueStats {
		queueType: LCUTypes.LolRankedLeagueQueueType
		provisionalGameThreshold: number
		provisionalGamesRemaining: number
		isProvisional: boolean
		tier: string
		division: LCUTypes.LolRankedLeagueDivision
		leaguePoints: number
		miniSeriesProgress: string
		ratedTier: LCUTypes.LolRankedRatedTier
		ratedRating: number
		wins: number
		losses: number
	}
	
	export interface LolRankedSocialLeaderboardRankedQueueStatsDTO {
		queueType: string
		provisionalGameThreshold: number
		provisionalGamesRemaining: number
		tier: string
		rank: string
		leaguePoints: number
		miniSeriesProgress: string
		ratedTier: string
		ratedRating: number
		wins: number
		losses: number
	}
	
	export interface LolRankedSplitPointsNotification {
		splitPointsDelta: number
		splitPointsBeforeGame: number
		splitPointsAfterGame: number
		previousSplitPointsRequired: number
		splitPointsRequired: number
		nextRewardId: string
		nextRewardType: string
		splitPointsBreakdown: Record<string, number>
	}
	
	export interface LolRankedSplitReward {
		rewardType: string
		quantity: number
		description: string
		id: string
		regaliaLevel?: number
		pointsRequired: number
		splitId: number
		championId: number
	}
	
	export interface LolRankedSplitRewardDTO {
		rewardType: string
		metadata: LCUTypes.LolRankedSplitRewardsMetaData
		defaultRewardId: string
		tieredRewardIds: Record<string, string>
	}
	
	export interface LolRankedSplitRewardGroup {
		splitPoints: number
		rewards: LCUTypes.LolRankedSplitReward[]
	}
	
	export interface LolRankedSplitRewardGroupDTO {
		splitPoints: number
		rewards: LCUTypes.LolRankedSplitRewardDTO[]
	}
	
	export interface LolRankedSplitRewardsMetaData {
		quantity: number
		description: string
		championId: number
	}
	
	export interface LolRankedSummoner {
		summonerId: number
		puuid: string
	}
	
	export interface LolRankedVictoriousSkin {
		splitPointsByHighestAchievedTier: Record<string, number>
		itemInstanceId: string
	}
	
	export interface LolRankedVictoriousSkinDTO {
		splitPointsByHighestAchievedTier: Record<string, number>
		itemInstanceId: string
	}
	
	export interface LolRegaliaAccountIdAndSummonerId {
		summonerId?: number
	}
	
	export interface LolRegaliaChatPresence {
		summonerId: number
		icon: number
		lol: LCUTypes.LolRegaliaChatPresenceLolData
	}
	
	export interface LolRegaliaChatPresenceExternal {
		id: string
		summonerId: number
		icon: number
		lol: Record<string, string>
	}
	
	export interface LolRegaliaChatPresenceLolData {
		level: number
		rankedLeagueTier?: string
		rankedLeagueDivision: LCUTypes.LolRegaliaLeagueDivision
		rankedLeagueQueue: LCUTypes.LolRegaliaLeagueQueueType
		rankedSplitRewardLevel: number
		rankedPrevSeasonTier?: string
		rankedPrevSeasonDivision: LCUTypes.LolRegaliaLeagueDivision
		regalia?: LCUTypes.LolRegaliaRegaliaSettings
	}
	
	export interface LolRegaliaGameDataRegalia {
		id: string
		idSecondary: string
		assetPath: string
		isSelectable: boolean
		regaliaType: string
		localizedName: string
		localizedDescription: string
	}
	
	export interface LolRegaliaInventoryItem {
		itemId: number
		uuid: string
		purchaseDate: string
	}
	
	export interface LolRegaliaItemKey {
		inventoryType: string
		itemId: number
	}
	
	export type LolRegaliaLeagueDivision = "NA" | "V" | "IV" | "III" | "II" | "I"
	
	export type LolRegaliaLeagueQueueType = "RANKED_TFT_DOUBLE_UP" | "RANKED_TFT_PAIRS" | "RANKED_TFT_TURBO" | "RANKED_TFT" | "RANKED_FLEX_TT" | "CHERRY" | "RANKED_FLEX_SR" | "RANKED_SOLO_5x5" | "NONE"
	
	export interface LolRegaliaLoadout {
		id: string
		name: string
		scope: string
		loadout: LCUTypes.LolRegaliaRegaliaLoadout
	}
	
	export interface LolRegaliaRankedQueueStats {
		queueType: LCUTypes.LolRegaliaLeagueQueueType
		isProvisional: boolean
		tier: string
		division: LCUTypes.LolRegaliaLeagueDivision
	}
	
	export interface LolRegaliaRankedStats {
		queues: LCUTypes.LolRegaliaRankedQueueStats[]
		highestRankedEntry?: LCUTypes.LolRegaliaRankedQueueStats
		rankedRegaliaLevel: number
		highestPreviousSeasonAchievedTier: string
	}
	
	export interface LolRegaliaRegalia {
		profileIconId: number
		crestType: string
		bannerType: string
		summonerLevel: number
		lastSeasonHighestRank?: string
		highestRankedEntry?: LCUTypes.LolRegaliaRegaliaRankedEntry
		selectedPrestigeCrest: number
	}
	
	export interface LolRegaliaRegaliaAsync {
		md5: string
	}
	
	export type LolRegaliaRegaliaBannerType = "lastSeasonHighestRank" | "blank"
	
	export type LolRegaliaRegaliaCrestType = "ranked" | "prestige" | "none"
	
	export interface LolRegaliaRegaliaFrontendConfig {
		hovercardEnabled: boolean
		selectionsEnabled: boolean
	}
	
	export interface LolRegaliaRegaliaInventoryItem {
		items: LCUTypes.LolRegaliaGameDataRegalia[]
		isOwned: boolean
	}
	
	export interface LolRegaliaRegaliaLoadout {
		REGALIA_CREST_SLOT: LCUTypes.LolRegaliaItemKey
		REGALIA_BANNER_SLOT: LCUTypes.LolRegaliaItemKey
	}
	
	export interface LolRegaliaRegaliaPlatformConfig {
		HovercardEnabled: boolean
		SelectionsEnabled: boolean
	}
	
	export interface LolRegaliaRegaliaPreferences {
		preferredCrestType: string
		preferredBannerType: string
		selectedPrestigeCrest: number
	}
	
	export interface LolRegaliaRegaliaRankedEntry {
		queueType: LCUTypes.LolRegaliaLeagueQueueType
		tier: string
		division: LCUTypes.LolRegaliaLeagueDivision
		splitRewardLevel: number
	}
	
	export interface LolRegaliaRegaliaSettings {
		crestType: LCUTypes.LolRegaliaRegaliaCrestType
		bannerType: LCUTypes.LolRegaliaRegaliaBannerType
		selectedPrestigeCrest: number
	}
	
	export interface LolRegaliaRegaliaSettingsExternal {
		crestType: number
		bannerType: number
		selectedPrestigeCrest: number
	}
	
	export interface LolRegaliaRegaliaWithPreferences {
		profileIconId: number
		crestType: string
		bannerType: string
		preferredCrestType: string
		preferredBannerType: string
		selectedPrestigeCrest: number
		summonerLevel: number
		lastSeasonHighestRank?: string
		highestRankedEntry?: LCUTypes.LolRegaliaRegaliaRankedEntry
	}
	
	export interface LolRegaliaSummoner {
		summonerId: number
		profileIconId: number
		summonerLevel: number
		puuid: string
	}
	
	export interface LolRegaliaSummonerProfile {
		regalia: string
	}
	
	export interface LolRegaliaSummonerProfileUpdate {
		key: string
		value: string
	}
	
	export interface LolReplaysClashPlaymodeRestrictedInfo {
		isRestricted: boolean
	}
	
	export interface LolReplaysGameflowAvailability {
		state: string
	}
	
	export interface LolReplaysGameflowGameClient {
		running: boolean
	}
	
	export type LolReplaysGameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"
	
	export interface LolReplaysGameflowSession {
		phase: LCUTypes.LolReplaysGameflowPhase
		gameClient: LCUTypes.LolReplaysGameflowGameClient
	}
	
	export type LolReplaysGameflowWatchPhase = "WatchFailedToLaunch" | "WatchInProgress" | "WatchStarted" | "None"
	
	export interface LolReplaysInstallPaths {
		gameInstallRoot: string
		gameExecutablePath: string
	}
	
	export type LolReplaysMetadataState = "error" | "unsupported" | "lost" | "retryDownload" | "missingOrExpired" | "incompatible" | "downloading" | "download" | "watch" | "found" | "checking"
	
	export interface LolReplaysReplayContextData {
		componentType: string
	}
	
	export interface LolReplaysReplayCreateMetadata {
		gameVersion: string
		gameType: string
		queueId: number
		gameEnd: number
	}
	
	export interface LolReplaysReplayMetadata {
		state: LCUTypes.LolReplaysMetadataState
		gameId: number
		downloadProgress: number
	}
	
	export interface LolReplaysReplaysConfiguration {
		isReplaysEnabled: boolean
		isReplaysForEndOfGameEnabled: boolean
		isReplaysForMatchHistoryEnabled: boolean
		isPatching: boolean
		isInTournament: boolean
		isPlayingGame: boolean
		isPlayingReplay: boolean
		isLoggedIn: boolean
		gameVersion: string
		minServerVersion: string
		minutesUntilReplayConsideredLost: number
	}
	
	export interface LolReplaysReplaysDynamicConfig {
		MinSupportedGameServerVersion: string
		MinutesUntilReplayConsideredLost: number
	}
	
	export interface LolReplaysReplaysSettingsData {
		"replays-folder-path": string
		"highlights-folder-path": string
	}
	
	export interface LolReplaysReplaysSettingsResource {
		data: LCUTypes.LolReplaysReplaysSettingsData
	}
	
	export interface LolReplaysRoflFileMetadata {
		gameLength: number
		gameVersion: string
		lastGameChunkId: number
		lastKeyFrameId: number
	}
	
	export type LolRewardsCelebrationType = "FULLSCREEN" | "TOAST" | "NONE"
	
	export type LolRewardsGrantStatus = "FAILED" | "FULFILLED" | "PENDING_SELECTION" | "PENDING_FULFILLMENT"
	
	export interface LolRewardsGrantorDescription {
		appName: string
		entityId: string
	}
	
	export interface LolRewardsRMSPayload {
		productId: string
		affinities: string[]
	}
	
	export interface LolRewardsRegionLocale {
		region: string
		locale: string
	}
	
	export interface LolRewardsRequestDTO_SelectionRequestDTO {
		data: LCUTypes.LolRewardsSelectionRequestDTO
		metadata: LCUTypes.LolRewardsRequestMetadataDTO
	}
	
	export interface LolRewardsRequestDTO_vector_SelectionRequestDTO {
		data: LCUTypes.LolRewardsSelectionRequestDTO[]
		metadata: LCUTypes.LolRewardsRequestMetadataDTO
	}
	
	export interface LolRewardsRequestMetadataDTO {
		transactionId?: string
	}
	
	export interface LolRewardsResponseDTO_SvcRewardGrant {
		data: LCUTypes.LolRewardsSvcRewardGrant
		metadata: LCUTypes.LolRewardsResponseMetadataDTO
	}
	
	export interface LolRewardsResponseDTO_map_RewardGroupId_SelectGrantStatus {
		data: Record<string, LCUTypes.LolRewardsSelectGrantStatusResponse>
		metadata: LCUTypes.LolRewardsResponseMetadataDTO
	}
	
	export interface LolRewardsResponseDTO_vector_SvcRewardGrant {
		data: LCUTypes.LolRewardsSvcRewardGrant[]
		metadata: LCUTypes.LolRewardsResponseMetadataDTO
	}
	
	export interface LolRewardsResponseDTO_vector_SvcRewardGroup {
		data: LCUTypes.LolRewardsSvcRewardGroup[]
		metadata: LCUTypes.LolRewardsResponseMetadataDTO
	}
	
	export interface LolRewardsResponseMetadataDTO {
		[key: string | number]: any
	}
	
	export interface LolRewardsReward {
		id: string
		itemId: string
		itemType: string
		quantity: number
		fulfillmentSource: string
		media: Record<string, string>
		localizations: Record<string, string>
	}
	
	export interface LolRewardsRewardGrant {
		info: LCUTypes.LolRewardsSvcRewardGrant
		rewardGroup: LCUTypes.LolRewardsSvcRewardGroup
	}
	
	export type LolRewardsRewardStatus = "FAILED" | "FULFILLED" | "PENDING"
	
	export type LolRewardsRewardStrategy = "SELECTION" | "RANDOM" | "ALL"
	
	export interface LolRewardsRewardsConfig {
		GrantFiltering: boolean
	}
	
	export type LolRewardsSelectGrantStatusResponse = "FAILED" | "SELECTED"
	
	export interface LolRewardsSelectionRequestDTO {
		grantId: string
		rewardGroupId: string
		selections: string[]
	}
	
	export interface LolRewardsSelectionStrategyConfig {
		minSelectionsAllowed: number
		maxSelectionsAllowed: number
	}
	
	export interface LolRewardsSvcRewardGrant {
		id: string
		granteeId: string
		rewardGroupId: string
		dateCreated: string
		status: LCUTypes.LolRewardsGrantStatus
		grantElements: LCUTypes.LolRewardsSvcRewardGrantElement[]
		selectedIds: string[]
		viewed: boolean
		grantorDescription: LCUTypes.LolRewardsGrantorDescription
		messageParameters: Record<string, unknown>
	}
	
	export interface LolRewardsSvcRewardGrantElement {
		elementId: string
		itemId: string
		itemType: string
		fulfillmentSource: string
		status: LCUTypes.LolRewardsRewardStatus
		quantity: number
		media: Record<string, string>
		localizations: Record<string, string>
	}
	
	export interface LolRewardsSvcRewardGroup {
		id: string
		productId: string
		types: string[]
		rewards: LCUTypes.LolRewardsReward[]
		childRewardGroupIds: string[]
		rewardStrategy: LCUTypes.LolRewardsRewardStrategy
		selectionStrategyConfig?: LCUTypes.LolRewardsSelectionStrategyConfig
		active: boolean
		media: Record<string, string>
		localizations: Record<string, string>
		celebrationType: LCUTypes.LolRewardsCelebrationType
	}
	
	export interface LolRiotMessagingServiceChampionMasteryLevelUp {
		id: number
		puuid: string
		championId: number
		hasLeveledUp: boolean
		championLevel: number
	}
	
	export type LolRiotMessagingServiceGameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"
	
	export interface LolRiotMessagingServiceGameflowSession {
		phase: LCUTypes.LolRiotMessagingServiceGameflowPhase
	}
	
	export interface LolRiotclientUpgraderGameflowAvailability {
		isAvailable: boolean
		state: string
	}
	
	export interface LolRsoAuthAccessToken {
		token: string
		scopes: string[]
		expiry: number
	}
	
	export interface LolRsoAuthAuthError {
		error: string
		errorDescription: string
	}
	
	export interface LolRsoAuthAuthorization {
		currentPlatformId: string
		currentAccountId: number
		subject: string
	}
	
	export interface LolRsoAuthAuthorizationRequest {
		scope: string[]
		trustLevels: LCUTypes.LolRsoAuthRSOAuthorizationTrustLevel[]
		clientId: string
		claims: string[]
	}
	
	export interface LolRsoAuthAuthorizationResponse {
		type: string
		authorization: LCUTypes.LolRsoAuthImplicitAuthorization
	}
	
	export type LolRsoAuthConfigReadinessEnum = "Disabled" | "Ready" | "NotReady"
	
	export interface LolRsoAuthConfigStatus {
		readiness: LCUTypes.LolRsoAuthConfigReadinessEnum
	}
	
	export type LolRsoAuthConfigType = "player" | "public"
	
	export interface LolRsoAuthDeviceId {
		collectorServerName: string
		merchantId: string
		sessionId: string
		installId: string
		frameUrl: string
	}
	
	export interface LolRsoAuthEntitlementsToken {
		token: string
		entitlements: string[]
		expiry: number
	}
	
	export interface LolRsoAuthIdToken {
		token: string
		expiry: number
	}
	
	export interface LolRsoAuthImplicitAuthorization {
		accessToken: LCUTypes.LolRsoAuthAccessToken
		idToken: LCUTypes.LolRsoAuthIdToken
	}
	
	export interface LolRsoAuthPublicClientConfig {
		url: string
		clientId: string
	}
	
	export type LolRsoAuthRSOAuthorizationTrustLevel = "always_verify" | "trusted_device" | "always_trusted"
	
	export interface LolRsoAuthRSOConfigReadyState {
		ready: boolean
	}
	
	export interface LolRsoAuthRSOJWTConfig {
		token?: string
	}
	
	export interface LolRsoAuthRSOPlayerCredentials {
		username: string
		password: string
		platformId: string
	}
	
	export interface LolRsoAuthRegionStatus {
		platformId: string
		enabled: boolean
		isLQFallbackAllowed: boolean
		isUserInfoEnabled: boolean
	}
	
	export interface LolRsoAuthSessionResponse {
		type: string
		error: string
	}
	
	export interface LolRsoAuthUserInfo {
		userInfo: string
	}
	
	export interface LolSeasonsAllProductSeasonQuery {
		lastNYears: number
	}
	
	export interface LolSeasonsAllSeasonsProduct {
		seasonId: number
		seasonStart: number
		seasonEnd: number
		act: boolean
		metadata: LCUTypes.LolSeasonsSeasonMetaData
	}
	
	export interface LolSeasonsSeasonMetaData {
		locKey: string
		publicName: string
		currentSplit: number
		totalSplit: number
	}
	
	export interface LolServiceStatusBroadcastMessage {
		content: string
		messageKey: string
		severity: string
	}
	
	export interface LolServiceStatusBroadcastNotification {
		broadcastMessages: LCUTypes.LolServiceStatusBroadcastMessage[]
	}
	
	export interface LolServiceStatusLegacyServiceStatusMessage {
		created_at: string
		updated_at: string
		severity: string
		heading: string
		content: string
		translations: LCUTypes.LolServiceStatusLegacyServiceStatusTranslation[]
	}
	
	export interface LolServiceStatusLegacyServiceStatusResponse {
		status: string
		messages: LCUTypes.LolServiceStatusLegacyServiceStatusMessage[]
	}
	
	export interface LolServiceStatusLegacyServiceStatusTranslation {
		locale: string
		heading?: string
		content?: string
	}
	
	export interface LolServiceStatusLoginDataPacket {
		broadcastNotification: LCUTypes.LolServiceStatusBroadcastNotification
	}
	
	export interface LolServiceStatusRegionLocaleResource {
		region: string
		locale: string
	}
	
	export interface LolServiceStatusRiotStatusIncident {
		id: number
		archive_at?: string
		incident_severity: string
		titles: LCUTypes.LolServiceStatusRiotStatusTitle[]
		platforms: string[]
		updated_at?: string
		created_at: string
		updates: LCUTypes.LolServiceStatusRiotStatusUpdate[]
	}
	
	export interface LolServiceStatusRiotStatusMaintenance {
		id: number
		archive_at?: string
		updates: LCUTypes.LolServiceStatusRiotStatusUpdate[]
		created_at: string
		platforms: string[]
		updated_at?: string
		maintenance_status: string
		titles: LCUTypes.LolServiceStatusRiotStatusTitle[]
	}
	
	export interface LolServiceStatusRiotStatusResource {
		id: string
		name: string
		locales: string[]
		maintenances: LCUTypes.LolServiceStatusRiotStatusMaintenance[]
		incidents: LCUTypes.LolServiceStatusRiotStatusIncident[]
	}
	
	export interface LolServiceStatusRiotStatusTitle {
		locale: string
		content: string
	}
	
	export interface LolServiceStatusRiotStatusTranslation {
		locale: string
		content: string
	}
	
	export interface LolServiceStatusRiotStatusUpdate {
		id: number
		updated_at?: string
		publish: boolean
		author: string
		created_at: string
		translations: LCUTypes.LolServiceStatusRiotStatusTranslation[]
		publish_locations: string[]
	}
	
	export interface LolServiceStatusServiceStatusResource {
		status: string
		humanReadableUrl: string
	}
	
	export interface LolServiceStatusTickerMessage {
		severity: string
		createdAt: string
		updatedAt: string
		heading: string
		message: string
	}
	
	export interface LolSettingsLCUGameSettingsConfig {
		HotkeysEnabled: boolean
		SoundEnabled: boolean
		InterfaceEnabled: boolean
		GameplayEnabled: boolean
		ReplaysEnabled: boolean
	}
	
	export interface LolSettingsLoginSession {
		state: LCUTypes.LolSettingsLoginSessionStates
		summonerId: number
		accountId: number
	}
	
	export type LolSettingsLoginSessionStates = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"
	
	export type LolSettingsPublisher = "vng" | "twm" | "tencent" | "garena" | "riot"
	
	export interface LolSettingsRegionLocale {
		region: string
		locale: string
	}
	
	export interface LolSettingsReplaysConfig {
		replayServiceEnabled: boolean
	}
	
	export interface LolSettingsSettingCategory {
		schemaVersion: number
		data: unknown
	}
	
	export interface LolSettingsSettingsConfig {
		isHotkeysEnabled: boolean
		isSoundEnabled: boolean
		isInterfaceEnabled: boolean
		isGameplayEnabled: boolean
		isReplaysEnabled: boolean
		isPrivacyNoticeEnabled: boolean
		isTermsEnabled: boolean
		isLegalStatementsEnabled: boolean
		localizedLicensesURL: string
	}
	
	export interface LolShutdownShutdownNotification {
		reason: LCUTypes.LolShutdownShutdownReason
		countdown: number
		additionalInfo: string
	}
	
	export type LolShutdownShutdownReason = "PlayerBanned" | "LcuAlphaDisabled" | "PlatformMaintenance" | "Invalid"
	
	export type LolSimpleDialogMessagesGameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"
	
	export interface LolSimpleDialogMessagesGameflowSession {
		phase: LCUTypes.LolSimpleDialogMessagesGameflowPhase
	}
	
	export interface LolSimpleDialogMessagesLocalMessageRequest {
		msgType: string
		msgBody: string[]
	}
	
	export interface LolSimpleDialogMessagesLoginDataPacket {
		simpleMessages: LCUTypes.LolSimpleDialogMessagesSimpleMessage[]
	}
	
	export interface LolSimpleDialogMessagesMessage {
		id: number
		type: string
		body: unknown
	}
	
	export interface LolSimpleDialogMessagesSimpleMessage {
		accountId: number
		msgId: string
		type: string
		params: string[]
	}
	
	export interface LolSocialLeaderboardFriendResource {
		summonerId: number
		name: string
		gameName: string
		gameTag: string
		puuid: string
		icon: number
		availability: string
	}
	
	export interface LolSocialLeaderboardGiftingFriend {
		summonerId: number
	}
	
	export type LolSocialLeaderboardLeagueDivision = "NA" | "V" | "IV" | "III" | "II" | "I"
	
	export type LolSocialLeaderboardLeagueQueueType = "RANKED_TFT_DOUBLE_UP" | "RANKED_TFT_PAIRS" | "RANKED_TFT_TURBO" | "RANKED_TFT" | "RANKED_FLEX_TT" | "RANKED_FLEX_SR" | "RANKED_SOLO_5x5" | "NONE"
	
	export type LolSocialLeaderboardLeagueTierNumValue = "CHALLENGER" | "GRANDMASTER" | "MASTER" | "DIAMOND" | "EMERALD" | "PLATINUM" | "GOLD" | "SILVER" | "BRONZE" | "IRON" | "NONE"
	
	export interface LolSocialLeaderboardRankedQueueStats {
		queueType: LCUTypes.LolSocialLeaderboardLeagueQueueType
		provisionalGamesRemaining: number
		isProvisional: boolean
		tier: string
		division: LCUTypes.LolSocialLeaderboardLeagueDivision
		leaguePoints: number
		wins: number
	}
	
	export interface LolSocialLeaderboardRankedStats {
		queueMap: Record<string, LCUTypes.LolSocialLeaderboardRankedQueueStats>
	}
	
	export interface LolSocialLeaderboardSocialLeaderboardData {
		rowData: LCUTypes.LolSocialLeaderboardSocialLeaderboardRowData[]
		nextUpdateTime: number
	}
	
	export interface LolSocialLeaderboardSocialLeaderboardRowData {
		puuid: string
		summonerId: number
		summonerName: string
		gameName: string
		tagLine: string
		provisionalGamesRemaining: number
		isProvisional: boolean
		tier: string
		division: LCUTypes.LolSocialLeaderboardLeagueDivision
		leaguePoints: number
		wins: number
		summonerLevel: number
		profileIconId: number
		availability: string
		leaderboardPosition: number
		isGiftable: boolean
	}
	
	export interface LolSocialLeaderboardSummoner {
		summonerId: number
		accountId: number
		displayName: string
		internalName: string
		gameName: string
		tagLine: string
		summonerLevel: number
		puuid: string
		profileIconId: number
	}
	
	export interface LolSpectatorSpectateAvailabilityResponseDto {
		availableForWatching: string[]
	}
	
	export interface LolSpectatorSpectateAvailabilityResponseDtoV2 {
		availableForWatching: number[]
	}
	
	export interface LolSpectatorSpectateGameInfo {
		dropInSpectateGameId: string
		gameQueueType: string
		allowObserveMode: string
		puuid: string
	}
	
	export interface LolSpectatorSummonerIdAvailability {
		availableForWatching: number[]
	}
	
	export interface LolSpectatorSummonerOrTeamAvailabilty {
		availableForWatching: string[]
	}
	
	export interface LolStatstonesCatalogBundle {
		item: LCUTypes.LolStatstonesCatalogItemDetails
	}
	
	export interface LolStatstonesCatalogBundlePrice {
		currency: string
		cost: number
	}
	
	export interface LolStatstonesCatalogItemDetails {
		itemId: number
		inventoryType: string
		subInventoryType: string
		prices: LCUTypes.LolStatstonesCatalogBundlePrice[]
		releaseDate: string
		itemInstanceId: string
	}
	
	export interface LolStatstonesChampionStatstoneSetSummary {
		name: string
		stonesAvailable: number
		stonesOwned: number
		stonesIlluminated: number
		milestonesPassed: number
	}
	
	export interface LolStatstonesChampionStatstoneSummary {
		championId: number
		stonesAvailable: number
		stonesOwned: number
		stonesIlluminated: number
		milestonesPassed: number
		sets: LCUTypes.LolStatstonesChampionStatstoneSetSummary[]
	}
	
	export interface LolStatstonesCollectionsChampion {
		name: string
		squarePortraitPath: string
		id: number
	}
	
	export interface LolStatstonesEogNotificationEnvelope {
		selfStatstoneProgress: LCUTypes.LolStatstonesStatstoneProgress[]
		selfPersonalBests: LCUTypes.LolStatstonesPersonalBestNotification[]
		selfMilestoneProgress: LCUTypes.LolStatstonesMilestoneProgressNotification[]
		othersPersonalBests: LCUTypes.LolStatstonesPersonalBestNotification[]
	}
	
	export interface LolStatstonesGameDataItemReference {
		itemId: number
		inventoryType: string
		contentId: string
	}
	
	export interface LolStatstonesGameDataStatstone {
		name: string
		contentId: string
		itemId: number
		trackingType: number
		isRetired: boolean
		isEpic: boolean
		boundChampion: LCUTypes.LolStatstonesGameDataItemReference
		milestones: number[]
		category: string
		description: string
		iconUnowned: string
		iconUnlit: string
		iconLit: string
		iconFull: string
	}
	
	export interface LolStatstonesGameDataStatstonePack {
		name: string
		description: string
		contentId: string
		itemId: number
	}
	
	export interface LolStatstonesGameDataStatstoneSet {
		name: string
		itemId: number
		inventoryType: string
		contentId: string
		statstones: LCUTypes.LolStatstonesGameDataStatstone[]
		price: number
	}
	
	export interface LolStatstonesGameDataStatstonesInfo {
		statstoneData: LCUTypes.LolStatstonesGameDataStatstoneSet[]
		packData: LCUTypes.LolStatstonesGameDataStatstonePack[]
		packIdToStatStonesIds: unknown
		seriesIdToStatStoneIds: unknown
		packIdToSubPackIds: unknown
		collectionIdToStatStoneIds: unknown
		packIdToChampIds: unknown
		champIdToPackIds: unknown
	}
	
	export interface LolStatstonesLoadout {
		id: string
		name: string
		scope: string
		itemId: number
		loadout: Record<string, unknown>
	}
	
	export interface LolStatstonesLoadoutItem {
		inventoryType: string
		contentId: string
		itemId: number
	}
	
	export interface LolStatstonesMilestoneNotificationDto {
		statstoneId: string
		level: number
		threshold: number
		isCompleted: boolean
	}
	
	export interface LolStatstonesMilestoneProgressNotification {
		statstoneId: string
		statstoneName: string
		threshold: number
		imageUrl: string
		level: string
	}
	
	export interface LolStatstonesNumberFormattingBehavior {
		digitsForThousandsSeperator: number
		trimTrailingZerosAfterDecimal: boolean
		westernNumberGrouping: boolean
	}
	
	export interface LolStatstonesNumberFormattingData {
		decimalSeperator: string
		thousandSeperator: string
		thousandAbbreviation: string
		tenThousandAbbreviation: string
		millionAbbreviation: string
		oneHundredMillionAbbreviation: string
		billionAbbreviation: string
		trillionAbbreviation: string
		secondAbbreviation: string
		minuteAbbreviation: string
		hourAbbreviation: string
		metersAbbreviation: string
		kilometersAbbreviation: string
		percentageFormat: string
		numberFormattingBehavior: LCUTypes.LolStatstonesNumberFormattingBehavior
	}
	
	export interface LolStatstonesPersonalBestNotification {
		summoner: LCUTypes.LolStatstonesSummoner
		statstoneId: string
		statstoneName: string
		personalBest: string
		imageUrl: string
	}
	
	export interface LolStatstonesPriceInfo {
		currency: string
		price: number
	}
	
	export interface LolStatstonesProfileStatstoneSummary {
		championId: number
		name: string
		value: string
		imageUrl: string
		category: string
	}
	
	export interface LolStatstonesStatstone {
		name: string
		statstoneId: string
		boundChampionItemId: number
		nextMilestone: string
		completionValue: number
		isComplete: boolean
		isFeatured: boolean
		isEpic: boolean
		isRetired: boolean
		category: string
		imageUrl: string
		description: string
		formattedValue: string
		formattedPersonalBest: string
		formattedMilestoneLevel: string
		playerRecord?: LCUTypes.LolStatstonesStatstonePlayerRecord
	}
	
	export interface LolStatstonesStatstoneCompletion {
		statstoneName: string
		category: string
		isEpic: boolean
	}
	
	export interface LolStatstonesStatstoneFeaturedRequest {
		index: number
		existingFeatured: LCUTypes.LolStatstonesStatstone[]
	}
	
	export interface LolStatstonesStatstoneMasteryVignette {
		numSetsCompleted: number
		masteryLevel: number
		completedSetUuids: string[]
		puuid: string
	}
	
	export interface LolStatstonesStatstoneNotificationDto {
		statstoneId: string
		puuid: string
		delta: number
		value: number
		level: number
		best: number
		isNewBest: boolean
	}
	
	export interface LolStatstonesStatstoneNotificationEnvelopeDto {
		gameId: number
		updates: LCUTypes.LolStatstonesStatstoneNotificationDto[]
		milestones: LCUTypes.LolStatstonesMilestoneNotificationDto[]
	}
	
	export interface LolStatstonesStatstonePlayerRecord {
		puuid: string
		statstoneId: string
		value: number
		personalBest: number
		milestoneLevel: number
		dateAcquired: string
		dateModified: string
		dateCompleted: string
		dateArchived: string
		entitled: boolean
	}
	
	export interface LolStatstonesStatstoneProgress {
		statstoneId: string
		statstoneName: string
		description: string
		imageUrl: string
		delta: string
		value: string
		nextMilestone: string
		existingProgressPercent: string
		newProgressPercent: string
		newMilestoneDifference: string
		totalProgressPercent: string
		category: string
		level: number
		best: number
		isNewBest: boolean
	}
	
	export interface LolStatstonesStatstoneRekindledVignette {
		portraitPath: string
		statstone: LCUTypes.LolStatstonesStatstoneCompletion
	}
	
	export interface LolStatstonesStatstoneSet {
		name: string
		statstones: LCUTypes.LolStatstonesStatstone[]
		stonesOwned: number
		milestonesPassed: number
		itemId: number
		inventoryType: string
		subInventoryType: string
		itemInstanceID: string
		prices: LCUTypes.LolStatstonesPriceInfo[]
		ownedFromPacks: LCUTypes.LolStatstonesGameDataStatstonePack[]
	}
	
	export interface LolStatstonesStatstoneSetCompleteVignette {
		statstones: LCUTypes.LolStatstonesStatstoneCompletion[]
	}
	
	export interface LolStatstonesStatstoneVignetteNotificationEnvelopeDto {
		champName: string
		champId: number
		masteryVignetteNotifications: LCUTypes.LolStatstonesStatstoneMasteryVignette[]
		rekindledVignetteNotifications: LCUTypes.LolStatstonesStatstoneRekindledVignette[]
		setCompleteVignetteNotifications: LCUTypes.LolStatstonesStatstoneSetCompleteVignette[]
	}
	
	export interface LolStatstonesSummoner {
		summonerId: number
		puuid: string
		displayName: string
	}
	
	export interface LolStoreAccessTokenResource {
		token: string
		scopes: string[]
		expiry: number
	}
	
	export interface LolStoreAllSummonerData {
		summoner: LCUTypes.LolStoreSummoner
		summonerLevelAndPoints: LCUTypes.LolStoreSummonerLevelAndPoints
	}
	
	export interface LolStoreBundleItemDTO {
		inventoryType: string
		itemId: number
		iconUrl: string
		quantity: number
		name: string
		description: string
		owned: boolean
		rp: number
		discountedRp: number
		ip: number
	}
	
	export interface LolStoreBundled {
		flexible: boolean
		items: LCUTypes.LolStoreBundledItem[]
		minimumPrices: LCUTypes.LolStoreBundledItemCost[]
	}
	
	export interface LolStoreBundledItem {
		inventoryType: string
		itemId: number
		quantity: number
		discountPrices: LCUTypes.LolStoreBundledItemCost[]
	}
	
	export interface LolStoreBundledItemCost {
		currency: string
		cost: number
		discount?: number
		costType: string
	}
	
	export interface LolStoreCapOffer {
		id: string
		typeId: string
		label: string
		productId: string
		merchantId: string
		payload: unknown
		active: boolean
		startDate: string
		createdDate: string
	}
	
	export interface LolStoreCatalogInstanceToItemKeyMap {
		platformIds: Record<string, LCUTypes.LolStoreItemKey>
	}
	
	export interface LolStoreCatalogItem {
		itemId: number
		inventoryType: string
		iconUrl?: string
		localizations?: Record<string, LCUTypes.LolStoreItemLocalization>
		active?: boolean
		bundled?: LCUTypes.LolStoreBundled
		inactiveDate?: string
		maxQuantity?: number
		prices?: LCUTypes.LolStoreItemCost[]
		releaseDate?: string
		sale?: LCUTypes.LolStoreSale
		subInventoryType?: string
		tags?: string[]
		itemRequirements?: LCUTypes.LolStoreItemKey[]
		metadata?: LCUTypes.LolStoreItemMetadataEntry[]
		itemInstanceId?: string
		offerId?: string
	}
	
	export interface LolStoreFeaturedPageDTO {
		Player: LCUTypes.LolStorePlayer
	}
	
	export interface LolStoreGetPlatformIdsFromInstanceIdsRequest {
		instanceIds: string[]
	}
	
	export interface LolStoreGiftableResult {
		config: LCUTypes.LolStoreGiftingConfig
		friends: LCUTypes.LolStoreGiftingFriend[]
	}
	
	export interface LolStoreGiftingConfig {
		recipientLevelLimitItem: number
		recipientLevelLimitRp: number
		giftingRestrictionFlagRioter: number
		giftingItemMinLevelSend: number
		giftingRpMinLevelSend: number
		giftingRpMaxDailyGiftsSend: number
		giftingRpMaxDailyGiftsReceive: number
		giftingItemMaxDailyGiftsSend: number
		giftingItemMaxDailyGiftsReceive: number
		giftingHextechMaxDailyGiftsSend: number
		giftingHextecMaxDailyGiftsReceive: number
		requiresIdentityVerification: boolean
	}
	
	export interface LolStoreGiftingFriend {
		friendsSince: string
		oldFriends: boolean
		summonerId: number
		nick: string
	}
	
	export interface LolStoreItemCost {
		currency: string
		cost: number
		discount?: number
	}
	
	export interface LolStoreItemKey {
		inventoryType: string
		itemId: number
	}
	
	export interface LolStoreItemLocalization {
		language: string
		name: string
		description: string
	}
	
	export interface LolStoreItemMetadataEntry {
		type: string
		value: string
	}
	
	export interface LolStoreItemOrderDTO {
		inventoryType: string
		itemId: number
		quantity: number
		rpCost: number
	}
	
	export interface LolStoreItemSale {
		id: number
		active: boolean
		item: LCUTypes.LolStoreItemKey
		sale: LCUTypes.LolStoreSale
	}
	
	export interface LolStoreLoginDataPacket {
		allSummonerData: LCUTypes.LolStoreAllSummonerData
		simpleMessages: LCUTypes.LolStoreSimpleDialogMessage[]
	}
	
	export interface LolStoreLoginSession {
		state: LCUTypes.LolStoreLoginSessionStates
		summonerId: number
		accountId: number
		idToken: string
	}
	
	export type LolStoreLoginSessionStates = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"
	
	export interface LolStoreNotification {
		backgroundUrl: string
		created: string
		critical: boolean
		dismissible: boolean
		data: Record<string, string>
		detailKey: string
		expires: string
		iconUrl: string
		id: number
		source: string
		state: string
		titleKey: string
		type: string
	}
	
	export interface LolStoreOrderNotificationResource {
		id: number
		eventTypeId: string
		eventType: string
		status: string
	}
	
	export interface LolStorePageDTO {
		Player: LCUTypes.LolStorePlayer
		catalog: LCUTypes.LolStoreCatalogItem[]
		groupOrder: string[]
		itemGroups: Record<string, LCUTypes.LolStorePageGroupingDTO>
	}
	
	export interface LolStorePageGroupingDTO {
		items: LCUTypes.LolStoreItemKey[]
		hidden: boolean
		grouped: boolean
	}
	
	export interface LolStorePlayer {
		accountId: number
		rp: number
		ip: number
		summonerLevel: number
	}
	
	export interface LolStorePurchaseOrderRequestDTO {
		accountId: number
		items: LCUTypes.LolStoreItemOrderDTO[]
	}
	
	export interface LolStorePurchaseOrderResponseDTO {
		rpBalance: number
		ipBalance: number
		transactions: LCUTypes.LolStoreTransactionResponseDTO[]
	}
	
	export interface LolStoreRiotMessagingServiceMessage {
		resource: string
		service: string
		version: string
		timestamp: number
		payload: string
	}
	
	export interface LolStoreSale {
		startDate: string
		endDate: string
		prices: LCUTypes.LolStoreItemCost[]
	}
	
	export interface LolStoreServiceBalance {
		currency: string
		amount: number
	}
	
	export interface LolStoreServiceWallet {
		accountId: number
		balances: LCUTypes.LolStoreServiceBalance[]
	}
	
	export interface LolStoreSimpleDialogMessage {
		accountId: number
		msgId: string
		type: string
		params: string[]
	}
	
	export interface LolStoreStoreStatus {
		storefrontIsRunning: boolean
	}
	
	export interface LolStoreSummoner {
		acctId: number
		sumId: number
	}
	
	export interface LolStoreSummonerLevelAndPoints {
		summonerLevel: number
	}
	
	export interface LolStoreTransactionResponseDTO {
		id: string
		inventoryType: string
		itemId: number
	}
	
	export interface LolStoreWallet {
		ip: number
		rp: number
	}
	
	export interface LolSuggestedPlayersEndOfGamePlayer {
		summonerName: string
		summonerId: number
	}
	
	export interface LolSuggestedPlayersEndOfGameStats {
		teams: LCUTypes.LolSuggestedPlayersEndOfGameTeam[]
	}
	
	export interface LolSuggestedPlayersEndOfGameTeam {
		players: LCUTypes.LolSuggestedPlayersEndOfGamePlayer[]
		isWinningTeam: boolean
	}
	
	export type LolSuggestedPlayersGameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"
	
	export interface LolSuggestedPlayersHonorInteraction {
		summonerId: number
		displayName: string
		gameId: number
	}
	
	export interface LolSuggestedPlayersSuggestedPlayersConfig {
		Enabled: boolean
		FriendsOfFriendsEnabled: boolean
		MaxNumSuggestedPlayers: number
		MaxNumReplacements: number
		PreviousPremadesLimit: number
		OnlineFriendsLimit: number
		FriendsOfFriendsLimit: number
		VicoriousComradesLimit: number
		MaxHonorInteractionPlayers: number
	}
	
	export interface LolSuggestedPlayersSuggestedPlayersDynamicClientConfig {
		SuggestedPlayers: LCUTypes.LolSuggestedPlayersSuggestedPlayersConfig
	}
	
	export interface LolSuggestedPlayersSuggestedPlayersFriend {
		summonerId: number
		name: string
		availability: string
	}
	
	export interface LolSuggestedPlayersSuggestedPlayersKudoedPlayer {
		kudoedSummonerId: number
		kudoedSummonerName: string
	}
	
	export interface LolSuggestedPlayersSuggestedPlayersLobbyStatus {
		queueId: number
		memberSummonerIds: number[]
		invitedSummonerIds: number[]
	}
	
	export interface LolSuggestedPlayersSuggestedPlayersPlayerStatus {
		currentLobbyStatus?: LCUTypes.LolSuggestedPlayersSuggestedPlayersLobbyStatus
		lastQueuedLobbyStatus?: LCUTypes.LolSuggestedPlayersSuggestedPlayersLobbyStatus
	}
	
	export interface LolSuggestedPlayersSuggestedPlayersQueue {
		id: number
		minLevel: number
	}
	
	export type LolSuggestedPlayersSuggestedPlayersReason = "LegacyPlayAgain" | "HonorInteractions" | "VictoriousComrade" | "FriendOfFriend" | "OnlineFriend" | "PreviousPremade"
	
	export interface LolSuggestedPlayersSuggestedPlayersReportedPlayer {
		reportedSummonerId: number
	}
	
	export interface LolSuggestedPlayersSuggestedPlayersSuggestedPlayer {
		summonerName: string
		summonerId: number
		commonFriendName: string
		commonFriendId: number
		reason: LCUTypes.LolSuggestedPlayersSuggestedPlayersReason
		gameId: number
	}
	
	export interface LolSuggestedPlayersSuggestedPlayersSummoner {
		summonerId: number
		displayName: string
		summonerLevel: number
	}
	
	export interface LolSuggestedPlayersSuggestedPlayersVictoriousComrade {
		summonerId: number
		summonerName: string
	}
	
	export interface LolSummonerAccountIdAndSummonerId {
		accountId: number
		summonerId: number
	}
	
	export interface LolSummonerAlias {
		gameName: string
		tagLine: string
	}
	
	export interface LolSummonerAliasAvailability {
		alias: LCUTypes.LolSummonerAlias
		errorCode: LCUTypes.LolSummonerAliasAvailabilityCode
		errorMessage: string
		isSuccess: boolean
	}
	
	export type LolSummonerAliasAvailabilityCode = "server_error" | "rate_limited" | "name_not_available" | "name_change_forbidden" | "no_error"
	
	export interface LolSummonerAliasDTO {
		error: string
		providerId: string
		puuid: string
		gnt: LCUTypes.LolSummonerAlias
		playstationNameset: LCUTypes.LolSummonerConsoleNameset
		switchNameset: LCUTypes.LolSummonerConsoleNameset
		xboxNameset: LCUTypes.LolSummonerConsoleNameset
	}
	
	export interface LolSummonerAliasLookupDTO {
		game_name: string
		tag_line: string
	}
	
	export interface LolSummonerAliasLookupResponse {
		alias: LCUTypes.LolSummonerAlias
		puuid: string
	}
	
	export interface LolSummonerAliasLookupResponseDTO {
		alias: LCUTypes.LolSummonerAliasLookupDTO
		puuid: string
	}
	
	export interface LolSummonerAutoFillQueueDto {
		queueId: number
		autoFillEligible: boolean
		autoFillProtectedForStreaking: boolean
		autoFillProtectedForPromos: boolean
	}
	
	export interface LolSummonerConsoleNameset {
		name: string
	}
	
	export interface LolSummonerGameloopPlayerInfoV2 {
		autoFillDataBags: LCUTypes.LolSummonerAutoFillQueueDto[]
		rerollDataBags: LCUTypes.LolSummonerRerollDataBagForClientV1[]
	}
	
	export interface LolSummonerLevelField {
		initialLevel: number
		finalLevel: number
		progress: LCUTypes.LolSummonerLevelProgression
	}
	
	export interface LolSummonerLevelProgression {
		initialXp: number
		finalXp: number
		initialLevelBoundary: number
		finalLevelBoundary: number
	}
	
	export interface LolSummonerLoginSession {
		state: LCUTypes.LolSummonerLoginSessionStates
		summonerId: number
		accountId: number
		puuid: string
		connected: boolean
	}
	
	export type LolSummonerLoginSessionStates = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"
	
	export interface LolSummonerNamesetsResponse {
		namesets: LCUTypes.LolSummonerAliasDTO[]
	}
	
	export type LolSummonerPlayerNameMode = "ALIAS" | "DARKMODE" | "SUMMONER"
	
	export interface LolSummonerPlayerNameState {
		isAliasChangeRequired: boolean
		isAliasMissing: boolean
		isTaglineCustomizable: boolean
	}
	
	export interface LolSummonerProfilePrivacy {
		enabledState: LCUTypes.LolSummonerProfilePrivacyEnabledState
		setting: LCUTypes.LolSummonerProfilePrivacySetting
	}
	
	export type LolSummonerProfilePrivacyEnabledState = "DISABLED" | "ENABLED" | "UNKNOWN"
	
	export type LolSummonerProfilePrivacySetting = "PUBLIC" | "PRIVATE"
	
	export interface LolSummonerRerollDataBagForClientV1 {
		queueId: number
		pointsUntilNextReroll: number
		rerollCount: number
		totalPoints: number
		maximumRerolls: number
		pointCostOfReroll: number
	}
	
	export interface LolSummonerStatus {
		ready: boolean
	}
	
	export interface LolSummonerSummoner {
		summonerId: number
		accountId: number
		displayName: string
		internalName: string
		profileIconId: number
		summonerLevel: number
		xpSinceLastLevel: number
		xpUntilNextLevel: number
		percentCompleteForNextLevel: number
		rerollPoints: LCUTypes.LolSummonerSummonerRerollPoints
		puuid: string
		nameChangeFlag: boolean
		unnamed: boolean
		privacy: LCUTypes.LolSummonerProfilePrivacySetting
		gameName: string
		tagLine: string
	}
	
	export interface LolSummonerSummonerCacheData {
		summoner?: LCUTypes.LolSummonerSummoner
		summonerIcon?: number
		privacy?: LCUTypes.LolSummonerProfilePrivacySetting
	}
	
	export interface LolSummonerSummonerCreateRequest {
		summonerName: string
	}
	
	export interface LolSummonerSummonerCreatedId {
		summonerId: number
	}
	
	export interface LolSummonerSummonerDTO {
		id: number
		accountId: number
		puuid: string
		name: string
		partnerId: string
		profileIconId: number
		level: number
		expPoints: number
		expToNextLevel: number
		nameChangeFlag: boolean
		unnamed: boolean
		privacy: LCUTypes.LolSummonerProfilePrivacySetting
	}
	
	export interface LolSummonerSummonerIcon {
		profileIconId: number
		inventoryToken: string
	}
	
	export interface LolSummonerSummonerIdAndIcon {
		summonerId: number
		profileIconId: number
	}
	
	export interface LolSummonerSummonerIdAndName {
		summonerId: number
		displayName: string
		puuid: string
	}
	
	export interface LolSummonerSummonerProfileUpdate {
		key: string
		value: unknown
		inventory: string
	}
	
	export interface LolSummonerSummonerRequestedName {
		name: string
	}
	
	export interface LolSummonerSummonerRerollPoints {
		pointsToReroll: number
		currentPoints: number
		numberOfRolls: number
		maxRolls: number
		pointsCostToRoll: number
	}
	
	export interface LolSummonerSummonerSession {
		summonerId: number
		displayName: string
		isNewPlayer: boolean
	}
	
	export interface LolSummonerUserInfo {
		userInfo: string
	}
	
	export interface LolSummonerXpAndLevelMessage {
		xp: unknown
		level: LCUTypes.LolSummonerLevelField
	}
	
	export interface LolTastesDataModelResponse {
		responseCode: number
		modelData: unknown
	}
	
	export interface LolTftDataModelResponse {
		responseCode: number
		modelData: unknown
	}
	
	export interface LolTftGameflowGameData {
		gameId: number
		queue: LCUTypes.LolTftQueue
	}
	
	export type LolTftGameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"
	
	export interface LolTftGameflowSession {
		phase: LCUTypes.LolTftGameflowPhase
		gameData: LCUTypes.LolTftGameflowGameData
	}
	
	export interface LolTftLolTftBattlePassHub {
		battlePassXPBoosted: boolean
	}
	
	export interface LolTftLolTftEvent {
		titleTranslationKey: string
		enabled: boolean
		url: string
		urlFaq: string
		startDate: string
		endDate: string
		seriesId: string
		queueIds: number[]
		defaultLandingPage: boolean
	}
	
	export interface LolTftLolTftEvents {
		subNavTabs: LCUTypes.LolTftLolTftEvent[]
	}
	
	export interface LolTftLolTftHomeHub {
		enabled: boolean
		storePromoOfferIds: string[]
		tacticianPromoOfferIds: string[]
		battlePassOfferIds: string[]
		fallbackStorePromoOfferIds: string[]
		primeGamingPromoOffer?: LCUTypes.LolTftLolTftPrimeGaming
		overrideUrl: string
	}
	
	export interface LolTftLolTftNewsHub {
		enabled: boolean
		url: string
	}
	
	export interface LolTftLolTftPrimeGaming {
		url: string
		assetId: string
	}
	
	export interface LolTftLolTftPromoButton {
		enabled: boolean
		showTimerWhileEventActive: boolean
		eventAssetId: string
		eventKey: string
		url: string
	}
	
	export interface LolTftLolTftPromoButtons {
		promoButtons: LCUTypes.LolTftLolTftPromoButton[]
	}
	
	export interface LolTftPassAccessTokenResource {
		token: string
		scopes: string[]
		expiry: number
	}
	
	export interface LolTftPassCatalogItem {
		itemId: number
		inventoryType: string
		itemInstanceId?: string
	}
	
	export interface LolTftPassClientCacheClearMessageDTO {
		regions: string[]
		clearAll: boolean
		inventoryTypes: string[]
	}
	
	export interface LolTftPassCounter {
		id: string
		name: string
		groupId: string
		direction: string
		startValue: number
	}
	
	export interface LolTftPassCounterInstance {
		ownerId: string
		productId: string
		groupId: string
		counterId: string
		counterValue: number
	}
	
	export interface LolTftPassCurrencyDTO {
		amount: number
		subCurrencies: Record<string, number>
	}
	
	export interface LolTftPassEndOfGameXp {
		PER_WIN: number
	}
	
	export interface LolTftPassEndOfGameXpNotification {
		xp: LCUTypes.LolTftPassEndOfGameXp
	}
	
	export interface LolTftPassEntityInstance {
		groupId: string
		counters: LCUTypes.LolTftPassCounterInstance[]
		milestones: LCUTypes.LolTftPassMilestoneInstance[]
	}
	
	export interface LolTftPassGroup {
		id: string
		productId: string
		name: string
		repeat: LCUTypes.LolTftPassRepeat
		counters: LCUTypes.LolTftPassCounter[]
		milestones: LCUTypes.LolTftPassMilestone[]
	}
	
	export interface LolTftPassInventoryCacheEntry {
		signedInventoryJwt: string
		expirationMS: number
		issuedAtMS: number
		receivedAtMS: number
		valid: boolean
	}
	
	export interface LolTftPassInventoryDTO {
		puuid: string
		accountId: number
		summonerId: number
		items: Record<string, unknown>
		expires: string
		itemsJwt: string
	}
	
	export interface LolTftPassInventoryItem {
		uuid: string
		itemId: number
		inventoryType: string
		purchaseDate: string
		quantity: number
		ownershipType: LCUTypes.LolTftPassItemOwnershipType
		expirationDate: string
		wins: number
	}
	
	export interface LolTftPassInventoryItemDTO {
		itemId: number
		inventoryType: string
		expirationDate: string
		purchaseDate: string
		quantity: number
		ownedQuantity: number
		usedInGameDate: string
		entitlementId: string
		entitlementTypeId: string
		instanceId: string
		instanceTypeId: string
		payload: unknown
		f2p: boolean
		rental: boolean
		loyalty: boolean
		loyaltySources: string[]
		lsb: boolean
		wins: number
	}
	
	export interface LolTftPassInventoryItemWithPayload {
		uuid: string
		itemId: number
		inventoryType: string
		purchaseDate: string
		quantity: number
		ownershipType: LCUTypes.LolTftPassItemOwnershipType
		expirationDate: string
		f2p: boolean
		rental: boolean
		loyalty: boolean
		loyaltySources: string[]
		owned: boolean
		wins: number
		payload: unknown
	}
	
	export interface LolTftPassInventoryNotification {
		id: number
		itemId: number
		inventoryType: string
		type: string
		acknowledged: boolean
	}
	
	export interface LolTftPassInventoryResponseDTO {
		data: LCUTypes.LolTftPassInventoryDTO
	}
	
	export interface LolTftPassItemKey {
		inventoryType: string
		itemId: number
	}
	
	export type LolTftPassItemOwnershipType = "F2P" | "LOYALTY" | "RENTED" | "OWNED"
	
	export interface LolTftPassLoginSession {
		state: LCUTypes.LolTftPassLoginSessionStates
		summonerId: number
		accountId: number
		idToken: string
		puuid: string
	}
	
	export type LolTftPassLoginSessionStates = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"
	
	export interface LolTftPassLoyaltyRewards {
		freeRewardedChampionsCount: number
		championIds: number[]
		freeRewardedSkinsCount: number
		skinIds: number[]
		ipBoost: number
		xpBoost: Record<string, number>
		loyaltyTFTMapSkinCount: number
		loyaltyTFTCompanionCount: number
		loyaltyTFTDamageSkinCount: number
		loyaltySources: Record<string, boolean>
	}
	
	export interface LolTftPassLoyaltyRewardsSimplified {
		freeRewardedChampionsCount: number
		championIds: number[]
		freeRewardedSkinsCount: number
		skinIds: number[]
		ipBoost: number
		xpBoost: number
		loyaltyTFTMapSkinCount: number
		loyaltyTFTCompanionCount: number
		loyaltyTFTDamageSkinCount: number
		loyaltySources: Record<string, boolean>
	}
	
	export type LolTftPassLoyaltyStatus = "DISABLED" | "REVOKE" | "CHANGE" | "EXPIRY" | "REWARDS_GRANT" | "LEGACY"
	
	export interface LolTftPassLoyaltyStatusNotification {
		status: LCUTypes.LolTftPassLoyaltyStatus
		rewards: LCUTypes.LolTftPassLoyaltyRewardsSimplified
		reloadInventory: boolean
	}
	
	export interface LolTftPassMilestone {
		id: string
		name: string
		groupId: string
		counterId: string
		triggerValue: number
		properties: Record<string, string>
	}
	
	export interface LolTftPassMilestoneInstance {
		milestoneId: string
		ownerId: string
		productId: string
		groupId: string
		counterId: string
		triggerValue: number
		repeatSequence: number
		triggered: boolean
	}
	
	export interface LolTftPassPlayerNotification {
		critical: boolean
		detailKey: string
		source: string
		state: string
		titleKey: string
		type: string
		iconUrl: string
	}
	
	export interface LolTftPassRMSRequest {
		resource: string
		service: string
		version: string
		recipients: string[]
		payload: string
	}
	
	export interface LolTftPassRMSRewardsNotificationPayload {
		purchaserId: string
		recipientId: string
		transactionId: string
		milestoneId: string
		milestoneInstanceId: string
		status: string
	}
	
	export interface LolTftPassRepeat {
		count: number
		scope: number
		multiplier: number
	}
	
	export interface LolTftPassRiotMessagingServiceMessage {
		resource: string
		service: string
		version: string
		timestamp: number
		payload: string
	}
	
	export interface LolTftPassRmsEntitlementPayload {
		itemId: string
		itemTypeId: string
		entitlementTypeId: string
		resourceOperation: string
	}
	
	export interface LolTftPassRmsStoreEntitlementItem {
		inventoryType: string
		itemId: string
	}
	
	export interface LolTftPassRmsStoreEntitlementPayload {
		transactionId: string
		items: LCUTypes.LolTftPassRmsStoreEntitlementItem[]
	}
	
	export interface LolTftPassRmsWalletPayload {
		[key: string | number]: any
	}
	
	export interface LolTftPassRmsXboxSubscriptionChange {
		puuid: string
		subscriptionId: string
		active: string
		identityProvider: string[]
	}
	
	export interface LolTftPassSimpleInventoryDTO {
		items: Record<string, unknown>
		itemsJwt: string
		expires: string
	}
	
	export interface LolTftPassSimpleInventoryResponseDTO {
		data: LCUTypes.LolTftPassSimpleInventoryDTO
	}
	
	export interface LolTftPassSummonerIcon {
		itemId: number
	}
	
	export interface LolTftPassTFTPassClientConfig {
		enabled: boolean
		battlePassId: string
		eventPassId: string
	}
	
	export interface LolTftPassTFTPassDTO {
		id: string
		counterID: string
		productID: string
		playerID: string
		title: string
		premiumTitle: string
		description: string
		activiationTimeMS: number
		deactivationTimeMS: number
		assetID: string
		currentLevel: number
		totalPointsEarned: number
		premiumEntitlementID: string
		storePurchaseIDs: Record<string, string>
		milestones: LCUTypes.LolTftPassTFTPassMilestoneDTO[]
		status: string
	}
	
	export interface LolTftPassTFTPassMilestoneDTO {
		id: string
		title: string
		description: string
		iconURL: string
		keystone: boolean
		bonus: boolean
		level: number
		pointsNeededForMilestone: number
		totalPointsNeededForMilestone: number
		pointsEarnedForMilestone: number
		status: string
		rewards: LCUTypes.LolTftPassTFTPassRewardDTO[]
	}
	
	export interface LolTftPassTFTPassRewardDTO {
		title: string
		description: string
		iconURL: string
		framedIcon: boolean
		premium: boolean
	}
	
	export interface LolTftPassTFTPassRewardNotification {
		title: string
		description: string
		iconURL: string
		framedIcon: boolean
	}
	
	export interface LolTftPassTftPaidBattlepass {
		totalPointsEarned: number
		milestones: LCUTypes.LolTftPassTftPaidBattlepassMilestone[]
		bonuses: LCUTypes.LolTftPassTftPaidBattlepassMilestone[]
		activeMilestone: LCUTypes.LolTftPassTftPaidBattlepassMilestone
		info: LCUTypes.LolTftPassTftPaidBattlepassInfo
		lastViewedProgress: number
		lastViewedMilestone: LCUTypes.LolTftPassTftPaidBattlepassMilestone
		progressMissionId: string
		currentLevel: number
	}
	
	export interface LolTftPassTftPaidBattlepassInfo {
		title: string
		description: string
		startDate: number
		endDate: number
		premium: boolean
		premiumTitle: string
		premiumEntitlementId: string
		pcPurchaseRequirement: string
		media: Record<string, string>
	}
	
	export interface LolTftPassTftPaidBattlepassMilestone {
		missionId: string
		internalName: string
		title: string
		description: string
		state: string
		status: string
		pointsNeededForMilestone: number
		pointsEarnedForMilestone: number
		totalPointsForMilestone: number
		level: number
		iconImageUrl: string
		iconNeedsFrame: boolean
		rewards: LCUTypes.LolTftPassTftPaidBattlepassReward[]
		isPaid: boolean
		isLocked: boolean
		isKeystone: boolean
		isBonus: boolean
	}
	
	export interface LolTftPassTftPaidBattlepassReward {
		rewardGroup: string
		description: string
		iconUrl: string
		iconNeedsFrame: boolean
	}
	
	export interface LolTftPassWallet {
		ip: number
		rp: number
	}
	
	export interface LolTftPassWalletCacheEntry {
		signedBalancesJwt: string
		expirationMS: number
		issuedAtMS: number
		receivedAtMS: number
		valid: boolean
	}
	
	export interface LolTftPassWalletDTO {
		puuid: string
		accountId: number
		expires: string
		balances: Record<string, number>
		balancesJwt: string
	}
	
	export interface LolTftPassWalletResponseDTO {
		data: LCUTypes.LolTftPassWalletDTO
	}
	
	export interface LolTftPassXboxSubscriptionStatus {
		active: string
		subscriptionId: string
	}
	
	export interface LolTftPublishingSettings {
		publishingLocale: string
	}
	
	export interface LolTftQueue {
		id: number
		mapId: number
		gameMode: string
		category: LCUTypes.LolTftQueueGameCategory
	}
	
	export type LolTftQueueGameCategory = "Alpha" | "VersusAi" | "PvP" | "Custom" | "None"
	
	export interface LolTftSettingsResource {
		data: unknown
	}
	
	export interface LolTftTeamPlannerChampion {
		championId: string
	}
	
	export interface LolTftTeamPlannerGameDataTFTSets {
		LCTFTModeData: LCUTypes.LolTftTeamPlannerTFTModeData
	}
	
	export interface LolTftTeamPlannerGameflowGameData {
		queue: LCUTypes.LolTftTeamPlannerQueue
	}
	
	export type LolTftTeamPlannerGameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"
	
	export interface LolTftTeamPlannerGameflowSession {
		phase: LCUTypes.LolTftTeamPlannerGameflowPhase
		gameData: LCUTypes.LolTftTeamPlannerGameflowGameData
	}
	
	export interface LolTftTeamPlannerQueue {
		gameMode: string
	}
	
	export interface LolTftTeamPlannerSettingsStorageContainer {
		data: LCUTypes.LolTftTeamPlannerTeamSettings
		schemaVersion: number
	}
	
	export interface LolTftTeamPlannerTFTMapSetData {
		SetCoreName: string
	}
	
	export interface LolTftTeamPlannerTFTModeData {
		mDefaultSet: LCUTypes.LolTftTeamPlannerTFTMapSetData
	}
	
	export interface LolTftTeamPlannerTFTTeamPlannerConfig {
		enabled: boolean
		remindersEnabled: boolean
	}
	
	export interface LolTftTeamPlannerTeamPlan {
		champions: LCUTypes.LolTftTeamPlannerChampion[]
		setName: string
	}
	
	export interface LolTftTeamPlannerTeamSettings {
		teams: LCUTypes.LolTftTeamPlannerTeamPlan[]
		remindersEnabled: boolean
		registeredTeamIndex: number
		hasViewedTeamPlanner: boolean
	}
	
	export interface LolTftTrovesCapCounterBalanceDto {
		amount: number
		version: number
		active: boolean
	}
	
	export interface LolTftTrovesCapOrdersRequestDTO {
		data: unknown
		meta: LCUTypes.LolTftTrovesCapOrdersRequestMetaDTO
	}
	
	export interface LolTftTrovesCapOrdersRequestMetaDTO {
		correlationId: string
		jwt: string
		xid: string
	}
	
	export interface LolTftTrovesCapOrdersResponseDTO {
		data: unknown
	}
	
	export interface LolTftTrovesCounterNotificationResource {
		balances: Record<string, LCUTypes.LolTftTrovesCapCounterBalanceDto>
		deltas: Record<string, LCUTypes.LolTftTrovesCapCounterBalanceDto>
	}
	
	export interface LolTftTrovesDropsDropTablePityInfo {
		pityLimit: number
		chaseContentIds: string[]
	}
	
	export interface LolTftTrovesDropsDropTableWithPityDTO {
		id: string
		sourceId: string
		productId: string
		startDate: string
		endDate: string
		currencyId: string
		rollOffer: string
		pityInfo: LCUTypes.LolTftTrovesDropsDropTablePityInfo
	}
	
	export interface LolTftTrovesDropsOddsListEntryDTO {
		contentId: string
	}
	
	export interface LolTftTrovesDropsOddsTreeNodeDTO {
		nodeId: string
		odds: number
		children: LCUTypes.LolTftTrovesDropsOddsTreeNodeDTO[]
	}
	
	export interface LolTftTrovesDropsPityCountDTO {
		dropTableId: string
		count: number
	}
	
	export interface LolTftTrovesGameDataTrovesBanner {
		id: string
		activationTime: string
		deactivationTime: string
		pityCounterId: string
		mythicTokenOfferId: string
		pityThreshold: number
		bannerTexture: string
		thumbnailTexture: string
		name: string
		description: string
		celebrationTheme: LCUTypes.LolTftTrovesTrovesCelebrationThemeData
		rootTable: LCUTypes.LolTftTrovesGameDataTrovesBannerTable
		chaseTable: LCUTypes.LolTftTrovesGameDataTrovesBannerTable
	}
	
	export interface LolTftTrovesGameDataTrovesBannerReward {
		id: string
		name: string
		quantity: number
		rarity: LCUTypes.LolTftTrovesLootRarity
		currencyId: string
		loadoutsItem: LCUTypes.LolTftTrovesLoadoutsItem
		rewardTexturePath: string
		highlightRewardAssetPath: string
		isChaseReward: boolean
	}
	
	export interface LolTftTrovesGameDataTrovesBannerTable {
		id: string
		key: string
		name: string
		loadoutsItem?: LCUTypes.LolTftTrovesLoadoutsItem
		children?: LCUTypes.LolTftTrovesGameDataTrovesBannerTableEntry[]
	}
	
	export interface LolTftTrovesGameDataTrovesBannerTableEntry {
		bannerNode: LCUTypes.LolTftTrovesGameDataTrovesBannerTable
	}
	
	export interface LolTftTrovesInventoryItem {
		uuid: string
		inventoryType: string
		owned: boolean
	}
	
	export interface LolTftTrovesLoadoutsItem {
		itemInstanceId: string
		itemTypeId: string
		name: string
		starLevel: number
	}
	
	export interface LolTftTrovesLoginSession {
		state: LCUTypes.LolTftTrovesLoginSessionStates
		summonerId: number
		accountId: number
		idToken: string
		puuid: string
	}
	
	export type LolTftTrovesLoginSessionStates = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"
	
	export interface LolTftTrovesLootOddsResponse {
		lootId: string
		parentId: string
		dropRate: number
		quantity: number
		label: string
		query: string
		displayPriority: number
		children: LCUTypes.LolTftTrovesLootOddsResponse[]
	}
	
	export type LolTftTrovesLootRarity = "Ultimate" | "Mythic" | "Legendary" | "Epic" | "Default"
	
	export interface LolTftTrovesOrderNotificationResource {
		eventTypeId: string
		eventType: string
		status: string
	}
	
	export interface LolTftTrovesPlayerLoot {
		lootName: string
		localizedName: string
		itemDesc: string
	}
	
	export interface LolTftTrovesRiotMessagingServiceMessage {
		resource: string
		service: string
		version: string
		timestamp: number
		payload: string
	}
	
	export interface LolTftTrovesTrovePurchaseResponse {
		orderId: string
		status: string
		errorCode: number
		data: unknown
	}
	
	export interface LolTftTrovesTroves {
		enabled: boolean
		bannerList?: LCUTypes.LolTftTrovesTrovesActiveBanner[]
	}
	
	export interface LolTftTrovesTrovesActiveBanner {
		id: string
	}
	
	export interface LolTftTrovesTrovesBanner {
		id: string
		sourceId: string
		startDate: string
		endDate: string
		pityLimit: number
		rollOffer: string
		mythicOffer: string
		bannerTexture: string
		thumbnailTexture: string
		name: string
		description: string
		pityCounterId: string
		celebrationTheme: LCUTypes.LolTftTrovesTrovesCelebrationThemeData
		status: LCUTypes.LolTftTrovesTrovesStatus
	}
	
	export interface LolTftTrovesTrovesCelebrationCurrencySegmentData {
		lottieJsonPath: string
		singlePullSoundPath: string
		multiPullSoundPath: string
		mythicPullSoundPath: string
	}
	
	export interface LolTftTrovesTrovesCelebrationHighlightSegmentData {
		lottieJsonPath: string
		revealSoundPath: string
		transitionWipeSoundPath: string
		promiseTokenTitle: string
		promiseTokenDescription: string
	}
	
	export interface LolTftTrovesTrovesCelebrationPortalSegmentData {
		singlePullRareWebmPath: string
		singlePullEpicWebmPath: string
		singlePullLegendaryWebmPath: string
		singlePullMythicWebmPath: string
		singlePullSoundPath: string
		multiPullRareWebmPath: string
		multiPullEpicWebmPath: string
		multiPullLegendaryWebmPath: string
		multiPullMythicWebmPath: string
		multiPullSoundPath: string
	}
	
	export interface LolTftTrovesTrovesCelebrationStandardSegmentData {
		FirstItemTimingOffset: number
		InterItemTimingOffset: number
		PCHeaderText: string
		PCButtonText: string
		PCBackgroundPath: string
		PCRewardFramePath: string
		PCRewardOneStarPath: string
		PCRewardTwoStarPath: string
		PCRewardThreeStarPath: string
		PCRewardRareGemPath: string
		PCRewardEpicGemPath: string
		PCRewardLegendaryGemPath: string
		PCRewardMythicGemPath: string
		pullSingleIndividualGlintSoundPath: string
		pullSingleIndividualGlintLegendarySoundPath: string
		revealGlobalSoundPath: string
		revealEpicSoundPath: string
		revealMythicSoundPath: string
		revealRareSoundPath: string
		PCRewardFadeInDuration: number
		PCRewardFadeInDelay: number
		PCThumbnailFadeInDuration: number
		PCThumbnailFadeInDelay: number
		PCRewardSheenPath: string
		PCRewardSheenDuration: number
		PCRewardSheenDelay: number
		PCGlintSprite: LCUTypes.LolTftTrovesTrovesPCSpriteAnimation
		PCLegendarySparkSprite: LCUTypes.LolTftTrovesTrovesPCSpriteAnimation
		PCLegendaryHitSprite: LCUTypes.LolTftTrovesTrovesPCSpriteAnimation
	}
	
	export interface LolTftTrovesTrovesCelebrationThemeData {
		currencySegmentData: LCUTypes.LolTftTrovesTrovesCelebrationCurrencySegmentData
		portalSegmentData: LCUTypes.LolTftTrovesTrovesCelebrationPortalSegmentData
		highlightSegmentData: LCUTypes.LolTftTrovesTrovesCelebrationHighlightSegmentData
		standardSegmentData: LCUTypes.LolTftTrovesTrovesCelebrationStandardSegmentData
	}
	
	export interface LolTftTrovesTrovesPCSpriteAnimation {
		spritesheetPath: string
		duration: number
		delay: number
		numRows: number
		numCols: number
		numFrames: number
		startFrame: number
		fps: number
		maxPlayCount: number
		playAtInsert: boolean
	}
	
	export interface LolTftTrovesTrovesPurchaseRequest {
		offerId: string
		quantity: number
		paymentOption: string
	}
	
	export interface LolTftTrovesTrovesReward {
		name: string
		itemId: string
		itemTypeId: string
		quantity: number
		rarity: LCUTypes.LolTftTrovesLootRarity
		rewardTexturePath: string
		highlightRewardAssetPath: string
		starLevel: number
	}
	
	export interface LolTftTrovesTrovesRewards {
		highlight: LCUTypes.LolTftTrovesTrovesReward[]
		standard: LCUTypes.LolTftTrovesTrovesReward[]
	}
	
	export interface LolTftTrovesTrovesRewardsResponse {
		pullType: number
		rewards: LCUTypes.LolTftTrovesTrovesRewards
	}
	
	export interface LolTftTrovesTrovesRollRequest {
		offerId: string
		numberOfRolls: number
		isMythic: boolean
		dropTableId: string
	}
	
	export interface LolTftTrovesTrovesStatus {
		owned: boolean
		availableContents: number
		pityCount: number
		dropTableId: string
		hasPullError: boolean
	}
	
	export interface LolTftTrovesVerboseLootOddsResponse {
		recipeName: string
		chanceToContain: LCUTypes.LolTftTrovesLootOddsResponse[]
		guaranteedToContain: LCUTypes.LolTftTrovesLootOddsResponse[]
		lootItem: LCUTypes.LolTftTrovesPlayerLoot
		hasPityRules: boolean
		checksOwnership: boolean
	}
	
	export interface LolTrophiesCapClashTrophyEntitlementPayload {
		rewardSpec: LCUTypes.LolTrophiesClashV2TrophyRewardSpec
		rewardType: string
	}
	
	export interface LolTrophiesClashV2TrophyRewardSpec {
		pedestal: string
		cup: string
		gem: string
		theme: string
		tier: string
		bracket: string
		seasonId: string
	}
	
	export interface LolTrophiesInventoryItemsByType {
		TOURNAMENT_TROPHY: LCUTypes.LolTrophiesTournamentTrophyInventoryItem[]
	}
	
	export interface LolTrophiesInventoryResponse {
		items: LCUTypes.LolTrophiesInventoryItemsByType
	}
	
	export interface LolTrophiesLoadout {
		id: string
		name: string
		scope: string
		loadout: Record<string, LCUTypes.LolTrophiesLoadoutItem>
	}
	
	export interface LolTrophiesLoadoutItem {
		itemId: number
		inventoryType: string
		data: Record<string, string>
	}
	
	export interface LolTrophiesOtherPlayerTrophyInventoryItem {
		uuid: string
		itemId: number
		inventoryType: string
		purchaseDate: string
		payload: LCUTypes.LolTrophiesCapClashTrophyEntitlementPayload
	}
	
	export interface LolTrophiesTournamentTrophyInventoryItem {
		payload: LCUTypes.LolTrophiesCapClashTrophyEntitlementPayload
		purchaseDate: string
	}
	
	export interface LolTrophiesTrophyProfileData {
		theme: string
		tier: number
		bracket: number
		seasonId: number
		pedestal: string
		cup: string
		gem: string
	}
	
	export type LolUserExperienceGameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"
	
	export interface LolUserExperienceGameflowSession {
		phase: LCUTypes.LolUserExperienceGameflowPhase
	}
	
	export interface LolYourshopAccessTokenResource {
		token: string
		scopes: string[]
		expiry: number
	}
	
	export interface LolYourshopCatalogItem {
		itemId: number
		inventoryType: string
		itemInstanceId?: string
	}
	
	export interface LolYourshopClientCacheClearMessageDTO {
		regions: string[]
		clearAll: boolean
		inventoryTypes: string[]
	}
	
	export interface LolYourshopCurrencyDTO {
		amount: number
		subCurrencies: Record<string, number>
	}
	
	export interface LolYourshopEndOfGameXp {
		PER_WIN: number
	}
	
	export interface LolYourshopEndOfGameXpNotification {
		xp: LCUTypes.LolYourshopEndOfGameXp
	}
	
	export interface LolYourshopInventoryCacheEntry {
		signedInventoryJwt: string
		expirationMS: number
		issuedAtMS: number
		receivedAtMS: number
		valid: boolean
	}
	
	export interface LolYourshopInventoryDTO {
		puuid: string
		accountId: number
		summonerId: number
		items: Record<string, unknown>
		expires: string
		itemsJwt: string
	}
	
	export interface LolYourshopInventoryItem {
		uuid: string
		itemId: number
		inventoryType: string
		purchaseDate: string
		quantity: number
		ownershipType: LCUTypes.LolYourshopItemOwnershipType
		expirationDate: string
		wins: number
	}
	
	export interface LolYourshopInventoryItemDTO {
		itemId: number
		inventoryType: string
		expirationDate: string
		purchaseDate: string
		quantity: number
		ownedQuantity: number
		usedInGameDate: string
		entitlementId: string
		entitlementTypeId: string
		instanceId: string
		instanceTypeId: string
		payload: unknown
		f2p: boolean
		rental: boolean
		loyalty: boolean
		loyaltySources: string[]
		lsb: boolean
		wins: number
	}
	
	export interface LolYourshopInventoryItemWithPayload {
		uuid: string
		itemId: number
		inventoryType: string
		purchaseDate: string
		quantity: number
		ownershipType: LCUTypes.LolYourshopItemOwnershipType
		expirationDate: string
		f2p: boolean
		rental: boolean
		loyalty: boolean
		loyaltySources: string[]
		owned: boolean
		wins: number
		payload: unknown
	}
	
	export interface LolYourshopInventoryNotification {
		id: number
		itemId: number
		inventoryType: string
		type: string
		acknowledged: boolean
	}
	
	export interface LolYourshopInventoryResponseDTO {
		data: LCUTypes.LolYourshopInventoryDTO
	}
	
	export interface LolYourshopItemKey {
		inventoryType: string
		itemId: number
	}
	
	export type LolYourshopItemOwnershipType = "F2P" | "LOYALTY" | "RENTED" | "OWNED"
	
	export interface LolYourshopLoginSession {
		state: LCUTypes.LolYourshopLoginSessionStates
		summonerId: number
		accountId: number
		idToken: string
		puuid: string
	}
	
	export type LolYourshopLoginSessionStates = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"
	
	export interface LolYourshopLoyaltyRewards {
		freeRewardedChampionsCount: number
		championIds: number[]
		freeRewardedSkinsCount: number
		skinIds: number[]
		ipBoost: number
		xpBoost: Record<string, number>
		loyaltyTFTMapSkinCount: number
		loyaltyTFTCompanionCount: number
		loyaltyTFTDamageSkinCount: number
		loyaltySources: Record<string, boolean>
	}
	
	export interface LolYourshopLoyaltyRewardsSimplified {
		freeRewardedChampionsCount: number
		championIds: number[]
		freeRewardedSkinsCount: number
		skinIds: number[]
		ipBoost: number
		xpBoost: number
		loyaltyTFTMapSkinCount: number
		loyaltyTFTCompanionCount: number
		loyaltyTFTDamageSkinCount: number
		loyaltySources: Record<string, boolean>
	}
	
	export type LolYourshopLoyaltyStatus = "DISABLED" | "REVOKE" | "CHANGE" | "EXPIRY" | "REWARDS_GRANT" | "LEGACY"
	
	export interface LolYourshopLoyaltyStatusNotification {
		status: LCUTypes.LolYourshopLoyaltyStatus
		rewards: LCUTypes.LolYourshopLoyaltyRewardsSimplified
		reloadInventory: boolean
	}
	
	export interface LolYourshopOffer {
		offerId: string
		inventoryType: string
		itemId: number
		originalPrice: number
		discountPrice: number
		name: string
		owned: boolean
		revealed: boolean
		expirationDate: string
		spotIndex: number
	}
	
	export interface LolYourshopOfferData {
		offers: LCUTypes.LolYourshopOffer[]
		promotion: LCUTypes.LolYourshopPromotion
	}
	
	export interface LolYourshopOfferId {
		offerId: string
	}
	
	export interface LolYourshopOfferIds {
		offers: LCUTypes.LolYourshopOfferId[]
	}
	
	export interface LolYourshopOfferRequest {
		offerId: string
	}
	
	export interface LolYourshopOfferRequests {
		offers: LCUTypes.LolYourshopOfferRequest[]
	}
	
	export interface LolYourshopPlayerNotification {
		critical: boolean
		detailKey: string
		source: string
		state: string
		titleKey: string
		type: string
		iconUrl: string
	}
	
	export interface LolYourshopPlayerPermissions {
		useData: string
	}
	
	export interface LolYourshopPromotion {
		name: string
		startTime: string
		endTime: string
	}
	
	export interface LolYourshopPurchaseItem {
		offerId: string
		inventoryType: string
		itemId: number
		pricePaid: number
		orderId: string
	}
	
	export type LolYourshopPurchaseOfferOrderStates = "SUCCESS" | "FAIL" | "IN_PROGRESS" | "NOT_STARTED"
	
	export interface LolYourshopPurchaseOfferOrderStatus {
		orderState: LCUTypes.LolYourshopPurchaseOfferOrderStates
		message: string
	}
	
	export interface LolYourshopPurchaseOfferOrderStatuses {
		statuses: Record<string, LCUTypes.LolYourshopPurchaseOfferOrderStatus>
	}
	
	export interface LolYourshopPurchaseResponse {
		items: LCUTypes.LolYourshopPurchaseItem[]
		wallet: LCUTypes.LolYourshopWallet
	}
	
	export interface LolYourshopRiotMessagingServiceMessage {
		resource: string
		service: string
		version: string
		timestamp: number
		payload: string
	}
	
	export interface LolYourshopRmsEntitlementPayload {
		itemId: string
		itemTypeId: string
		entitlementTypeId: string
		resourceOperation: string
	}
	
	export interface LolYourshopRmsStoreEntitlementItem {
		inventoryType: string
		itemId: string
	}
	
	export interface LolYourshopRmsStoreEntitlementPayload {
		transactionId: string
		items: LCUTypes.LolYourshopRmsStoreEntitlementItem[]
	}
	
	export interface LolYourshopRmsWalletPayload {
		[key: string | number]: any
	}
	
	export interface LolYourshopRmsXboxSubscriptionChange {
		puuid: string
		subscriptionId: string
		active: string
		identityProvider: string[]
	}
	
	export interface LolYourshopSimpleInventoryDTO {
		items: Record<string, unknown>
		itemsJwt: string
		expires: string
	}
	
	export interface LolYourshopSimpleInventoryResponseDTO {
		data: LCUTypes.LolYourshopSimpleInventoryDTO
	}
	
	export interface LolYourshopSummonerIcon {
		itemId: number
	}
	
	export interface LolYourshopUIOffer {
		id: string
		originalPrice: number
		discountPrice: number
		type: string
		skinName: string
		championId: number
		skinId: number
		owned: boolean
		revealed: boolean
		purchasing: boolean
		expirationDate: string
	}
	
	export interface LolYourshopUIStatus {
		hubEnabled: boolean
		name: string
		startTime: string
		endTime: string
	}
	
	export interface LolYourshopWallet {
		rp: number
	}
	
	export interface LolYourshopWalletCacheEntry {
		signedBalancesJwt: string
		expirationMS: number
		issuedAtMS: number
		receivedAtMS: number
		valid: boolean
	}
	
	export interface LolYourshopWalletDTO {
		puuid: string
		accountId: number
		expires: string
		balances: Record<string, number>
		balancesJwt: string
	}
	
	export interface LolYourshopWalletResponseDTO {
		data: LCUTypes.LolYourshopWalletDTO
	}
	
	export interface LolYourshopXboxSubscriptionStatus {
		active: string
		subscriptionId: string
	}
	
	export interface LolYourshopYourshopConfig {
		Active: boolean
		ThemedBackground: boolean
		PromotionName: string
		PromotionStartDate: string
		PromotionEndDate: string
	}
	
	export interface LootItemClientDTO {
		lootName: string
		asset: string
		type: string
		rarity: string
		value: number
		storeItemId: number
		upgradeLootName: string
		expiryTime: number
		tags: string
		displayCategories: string
		rentalSeconds: number
		rentalGames: number
	}
	
	export interface LootItemListClientDTO {
		lootItems: LCUTypes.LootItemClientDTO[]
		lastUpdate: number
	}
	
	export interface LootLcdsClientConfigurationDTO {
		lootItemsUsingBreakoutRecipeMenu: string[]
		lootMaterialsToAlwaysRender: string[]
		currenciesUsingCapWallets: string[]
		disabledRedemptions: string[]
	}
	
	export interface LootLcdsLootDescriptionDTO {
		lootName: string
		childLootTableNames: string[]
		localizationMap: Record<string, string>
		localizationLongDescriptionMap: Record<string, string>
	}
	
	export interface LootLcdsRecipeClientDTO {
		recipeName: string
		type: string
		displayCategories: string
		crafterName: string
		slots: LCUTypes.LootLcdsRecipeSlotClientDTO[]
		outputs: LCUTypes.LootLcdsRecipeOutputDTO[]
		metadata: LCUTypes.LootLcdsRecipeMetadata
	}
	
	export interface LootLcdsRecipeListClientDTO {
		recipes: LCUTypes.LootLcdsRecipeClientDTO[]
		lastUpdate: number
	}
	
	export interface LootLcdsRecipeMetadata {
		guaranteedDescriptions: LCUTypes.LootLcdsLootDescriptionDTO[]
		bonusDescriptions: LCUTypes.LootLcdsLootDescriptionDTO[]
		tooltipsDisabled: boolean
	}
	
	export interface LootLcdsRecipeOutputDTO {
		lootName: string
		quantityExpression: string
		probability: number
		allowDuplicates: boolean
	}
	
	export interface LootLcdsRecipeSlotClientDTO {
		slotNumber: number
		query: string
		quantityExpression: string
	}
	
	export interface LootNameRefId {
		lootName: string
		refId: string
	}
	
	export interface LootOddsDTO {
		lootId: string
		parentId: string
		dropRate: number
		quantity: number
		label: string
		lootOrder: number
		children: LCUTypes.LootOddsDTO[]
	}
	
	export interface LootProgressionRecipeConfiguration {
		active: boolean
		progressionUuid: string
		recipeName: string
		activationTime: string
		deactivationTime: string
		counterUuid: string
	}
	
	export interface LootSimpleDialogMessageResponse {
		accountId: number
		msgId: string
		command: string
	}
	
	export interface MassCraftLootDTO {
		clientId: string
		transactionId: string
		lootItems: LCUTypes.CraftLootDTO[]
	}
	
	export interface MatchedPlayerDTO {
		rosterId: string
		captain: LCUTypes.PlayerInfoDTO
		players: LCUTypes.PlayerInfoDTO[]
	}
	
	export interface MatchmakingLcdsBustedLeaver {
		summoner: LCUTypes.MatchmakingLcdsSummoner
		reasonFailed: string
		accessToken: string
		leaverPenaltyMillisRemaining: number
	}
	
	export interface MatchmakingLcdsFailedJoinPlayer {
		summoner: LCUTypes.MatchmakingLcdsSummoner
		reasonFailed: string
	}
	
	export interface MatchmakingLcdsGameDTO {
		gameState: string
		statusOfParticipants: string
		terminatedCondition: string
		teamOne: LCUTypes.MatchmakingLcdsPlayerParticipant[]
		teamTwo: LCUTypes.MatchmakingLcdsPlayerParticipant[]
	}
	
	export interface MatchmakingLcdsGameNotification {
		type: string
		messageCode: string
		messageArgument: string
	}
	
	export interface MatchmakingLcdsMatchMakerParams {
		queueIds: number[]
		team: number[]
		invitationId?: string
		lastMaestroMessage: string
		languages?: string
		botDifficulty: string
		teamId: number
	}
	
	export interface MatchmakingLcdsMatchMakerPayload {
		LEAVER_BUSTER_ACCESS_TOKEN: string
	}
	
	export interface MatchmakingLcdsPlayerParticipant {
		summonerId: number
	}
	
	export interface MatchmakingLcdsQueueDisabled {
		summoner: LCUTypes.MatchmakingLcdsSummoner
		reasonFailed: string
		queueId: number
		message: string
	}
	
	export interface MatchmakingLcdsQueueDodger {
		summoner: LCUTypes.MatchmakingLcdsSummoner
		reasonFailed: string
		dodgePenaltyRemainingTime: number
	}
	
	export interface MatchmakingLcdsQueueInfo {
		queueId: number
		waitTime: number
	}
	
	export interface MatchmakingLcdsQueueRestricted {
		summoner: LCUTypes.MatchmakingLcdsSummoner
		reasonFailed: string
		queueId: number
		message: string
	}
	
	export interface MatchmakingLcdsQueueThrottled {
		summoner: LCUTypes.MatchmakingLcdsSummoner
		reasonFailed: string
		queueId: number
		message: string
	}
	
	export interface MatchmakingLcdsSearchingForMatchNotification {
		joinedQueues: LCUTypes.MatchmakingLcdsQueueInfo[]
		playerJoinFailures: unknown[]
	}
	
	export interface MatchmakingLcdsSummoner {
		sumId: number
		name: string
	}
	
	export interface MemberBanUnbanTournament {
		tournamentId: number
		tournamentnameLocKey: string
		tournamentnameLocKeySecondary: string
		tournamentPhaseLockInTime: number
	}
	
	export type MetricDataType = "string" | "bool" | "float" | "uint" | "int" | "unknown"
	
	export interface MetricMetadata {
		sample_window_ms: number
		type: LCUTypes.MetricType
		data_type: LCUTypes.MetricDataType
		alerts: LCUTypes.MetricMetadataAlert[]
		notify: LCUTypes.MetricMetadataNotify
		units: string
		pretty_name: string
		category: string
		description: string
		destination: string
		info: string
		transientAggregation: LCUTypes.AggregationType
		priority: LCUTypes.MetricPriority
		period: number
	}
	
	export interface MetricMetadataAlert {
		level: string
		min: number
		max: number
		notify: LCUTypes.MetricMetadataNotify
		pretty_name: string
		description: string
		info: string
	}
	
	export interface MetricMetadataHipchatNotification {
		roomid: string
		tags: string
	}
	
	export interface MetricMetadataNotify {
		email: string[]
		hipchat: LCUTypes.MetricMetadataHipchatNotification[]
		pagerduty: LCUTypes.MetricMetadataPagerDutyNotification[]
	}
	
	export interface MetricMetadataPagerDutyNotification {
		apikey: string
	}
	
	export type MetricPriority = "high" | "medium" | "low"
	
	export type MetricType = "rate" | "duration" | "count" | "percentage" | "unknown"
	
	export interface MissionAlertDTO {
		type: string
		message: string
		alertTime: number
	}
	
	export interface MissionDisplay {
		attributes: string[]
		locations: string[]
	}
	
	export interface MissionMetadata {
		tutorial: LCUTypes.TutorialMetadata
		npeRewardPack: LCUTypes.NpeRewardPackMetadata
		level: number
	}
	
	export interface MissionProgressDTO {
		lastViewedProgress: number
		currentProgress: number
		totalCount: number
	}
	
	export interface MissionRequirementDTO {
		expression: string
	}
	
	export interface MissionsCompressedPayloadDTO {
		missionsCompressed: string
	}
	
	export interface MucJwtDto {
		jwt: string
		channelClaim: string
		domain: string
		targetRegion: string
	}
	
	export interface MultipleReplayMetadataRequestV2 {
		platformId: string
		gameIds: number[]
	}
	
	export interface MultipleReplayMetadataResponseItemV2 {
		gameId: number
		status: LCUTypes.ReplayResponseStatus
		metadata: LCUTypes.ReplayMetadataV2
	}
	
	export interface MultipleReplayMetadataResponseV2 {
		metadataResponses: LCUTypes.MultipleReplayMetadataResponseItemV2[]
	}
	
	export interface NonTimingEventV1 {
		when: number
		eventName: string
		value: string
		unit: string
	}
	
	export interface NotifyFailureRequest {
		availabilityItemName: string
		failureInfo: string
	}
	
	export interface NotifySuccessRequest {
		availabilityItemName: string
	}
	
	export interface NpeReward {
		renderer: string
		data: unknown
	}
	
	export interface NpeRewardPackMetadata {
		index: number
		premiumReward: boolean
		rewardKey: string
		majorReward: LCUTypes.NpeReward
		minorRewards: LCUTypes.NpeReward[]
	}
	
	export interface OpenedTeamDTO {
		name: string
		shortName: string
		logo: number
		logoColor: number
		invitationId: string
		captainId: number
		tier: number
		members: LCUTypes.OpenedTeamMemberDTO[]
		invitees: LCUTypes.PendingRosterInviteeDTO[]
		openPositions: LCUTypes.Position[]
	}
	
	export interface OpenedTeamMemberDTO {
		playerId: number
		position: LCUTypes.Position
		tier: number
		friendship: number
	}
	
	export interface PartiesVoiceDTO {
		jwt: string
	}
	
	export interface PatcherChunkingPatcherEnvironment {
		game_patcher_available: boolean
		game_patcher_enabled: boolean
	}
	
	export interface PatcherComponentActionProgress {
		currentItem: string
		total: LCUTypes.PatcherComponentStateProgress
		network: LCUTypes.PatcherComponentStateProgress
		primaryWork: LCUTypes.PatcherComponentStateWorkType
	}
	
	export interface PatcherComponentState {
		id: string
		action: LCUTypes.PatcherComponentStateAction
		isUpToDate: boolean
		isUpdateAvailable: boolean
		timeOfLastUpToDateCheckISO8601?: string
		isCorrupted: boolean
		progress?: LCUTypes.PatcherComponentActionProgress
	}
	
	export type PatcherComponentStateAction = "Migrating" | "Repairing" | "Patching" | "CheckingForUpdates" | "Idle"
	
	export interface PatcherComponentStateProgress {
		bytesComplete: number
		bytesRequired: number
		bytesPerSecond: number
	}
	
	export type PatcherComponentStateWorkType = "Disk" | "Network" | "Scanning"
	
	export interface PatcherNotification {
		id: string
		notificationId: LCUTypes.PatcherNotificationId
		data: Record<string, unknown>
	}
	
	export type PatcherNotificationId = "BrokenPermissions" | "NotEnoughDiskSpace" | "DidRestoreClientBackup" | "FailedToWriteError" | "MissingFilesError" | "ConnectionError" | "UnspecifiedError"
	
	export interface PatcherP2PStatus {
		isEnabledForPatchline: boolean
		isAllowedByUser: boolean
		requiresRestart: boolean
	}
	
	export interface PatcherP2PStatusUpdate {
		isAllowedByUser: boolean
	}
	
	export interface PatcherProductResource {
		id: string
	}
	
	export interface PatcherProductState {
		id: string
		action: LCUTypes.PatcherComponentStateAction
		isUpToDate: boolean
		isUpdateAvailable: boolean
		isCorrupted: boolean
		isStopped: boolean
		percentPatched: number
		components: LCUTypes.PatcherComponentState[]
	}
	
	export interface PatcherStatus {
		connectedToPatchServer: boolean
		successfullyInstalledVersion?: number
	}
	
	export interface PatcherUxResource {
		visible: boolean
	}
	
	export interface PaymentsCurrencyDTO {
		amount: number
		subCurrencies: Record<string, number>
	}
	
	export interface PaymentsFrontEndRequest {
		isPrepaid: boolean
		localeId: string
		summonerLevel: number
		gifteeAccountId: string
		gifteeMessage: string
		rsoToken: string
		usePmcSessions: boolean
		game: string
		openedFrom: string
	}
	
	export interface PaymentsFrontEndResult {
		url: string
	}
	
	export interface PaymentsPMCStartUrlRequest {
		isPrepaid: boolean
		localeId: string
		summonerLevel: number
		gifteeAccountId: string
		gifteeMessage: string
		game: string
	}
	
	export interface PaymentsPMCStartUrlResult {
		id: string
		localeId: string
		userId: string
		summonerLevel: number
		playerFacingId: string
		pmcStartUrl: string
		createdAt: string
	}
	
	export type PaymentsPaymentsTelemetryState = "PMCClosed" | "PMCComplete" | "PMCOpen" | "Idle"
	
	export type PaymentsPaymentsTelemetryTransitions = "PMCCompleteToIdle" | "PMCClosedToIdle" | "PMCOpenToPMCComplete" | "PMCOpenToPMCClose" | "IdleToPMCOpen"
	
	export interface PaymentsRiotMessagingServiceMessage {
		resource: string
		service: string
		version: string
		timestamp: number
		payload: string
	}
	
	export interface PendingOpenedTeamDTO {
		invitationId: string
		name: string
		shortName: string
		logo: number
		logoColor: number
		tier: number
	}
	
	export interface PendingRosterDTO {
		version: number
		tournamentId: number
		invitationId: string
		name: string
		shortName: string
		logo: number
		logoColor: number
		rewardLogos: LCUTypes.RewardLogo[]
		tier: number
		captainId: number
		highTierVariance: boolean
		members: LCUTypes.PendingRosterMemberDTO[]
		invitees: LCUTypes.PendingRosterInviteeDTO[]
		ticketOffers: LCUTypes.TicketOfferDTO[]
		inviteFaileds: LCUTypes.FailedInvite[]
		lft: boolean
		mucJwtDto: LCUTypes.MucJwtDto
	}
	
	export interface PendingRosterInviteeDTO {
		inviteeId: number
		inviteeState: LCUTypes.PendingRosterInviteeState
		inviter: number
		inviteTime: number
		inviteType: LCUTypes.InviteType
	}
	
	export type PendingRosterInviteeState = "SELFJOIN_REVOKED" | "SELFJOIN_DECLINED" | "SELFJOIN" | "ACCEPTED" | "SUGGEST_REVOKED" | "SUGGEST_DECLINED" | "REVOKED" | "DECLINED" | "PENDING" | "SUGGESTED"
	
	export interface PendingRosterMemberDTO {
		playerId: number
		memberState: LCUTypes.PendingRosterMemberState
		bet: number
		betType: LCUTypes.TicketType
		position: LCUTypes.Position
		joinTime: number
		pendingPay: number
		pendingPremiumPay: number
		selfBet: number
		tier: number
	}
	
	export type PendingRosterMemberState = "KICK" | "LEFT" | "READY" | "FORCED_NOT_READY" | "NOT_READY"
	
	export interface PhaseInMember {
		playerId: number
		bet: number
		pendingPay: number
		selfBet: number
	}
	
	export interface PhaseRosterDTO {
		phaseId: number
		period: number
		bracketId: number
		checkinTime: number
		bracketDTO?: LCUTypes.Bracket
	}
	
	export type PickModes = "DONE" | "IN_PROGRESS" | "NOT_PICKING"
	
	export interface PlayerBehaviorLcdsForcedClientShutdown {
		reason: string
		additionalInfo: string
	}
	
	export interface PlayerBehaviorLcdsSimpleMessage {
		accountId: number
		msgId: string
		type: string
		params: string[]
	}
	
	export interface PlayerBehaviorSimpleMessageResponse {
		accountId: number
		msgId: string
		command: string
	}
	
	export interface PlayerDTO {
		banned: boolean
		tmntWins: number
		tmntLosses: number
		notifications: LCUTypes.ClashOfflineNotification[]
		lft: boolean
		primaryPos: string
		secondaryPos: string
	}
	
	export interface PlayerFinderDTO {
		playerId: number
		tier: number
		primaryPos: LCUTypes.Position
		secondaryPos: LCUTypes.Position
		type: LCUTypes.PlayerFinderEnum
		friendId: number
	}
	
	export type PlayerFinderEnum = "FRIEND" | "FREEAGENT"
	
	export interface PlayerInfoDTO {
		playerId: number
		teamId: string
		position: string
		role: LCUTypes.Role
	}
	
	export interface PlayerInventory {
		wardSkins: number[]
		champions: number[]
		skins: number[]
		icons: number[]
		inventoryJwts: string[]
	}
	
	export interface PlayerLootDTO {
		lootName: string
		refId: string
		count: number
		expiryTime: number
	}
	
	export interface PlayerLootDefinitionsDTO {
		lootItemList: LCUTypes.LootItemListClientDTO
		recipeList: LCUTypes.LootLcdsRecipeListClientDTO
		queryResult: LCUTypes.QueryResultDTO
		playerLoot: LCUTypes.PlayerLootDTO[]
	}
	
	export interface PlayerLootResultDTO {
		status: string
		details: string
		added: LCUTypes.PlayerLootDTO[]
		removed: LCUTypes.PlayerLootDTO[]
		redeemed: string[]
		failed: string[]
	}
	
	export interface PlayerMissionDTO {
		id: string
		title: string
		helperText: string
		description: string
		backgroundImageUrl: string
		iconImageUrl: string
		seriesName: string
		locale: string
		sequence: number
		metadata: LCUTypes.MissionMetadata
		startTime: number
		endTime: number
		lastUpdatedTimestamp: number
		objectives: LCUTypes.PlayerMissionObjectiveDTO[]
		rewards: LCUTypes.PlayerMissionRewardDTO[]
		expiringWarnings: LCUTypes.MissionAlertDTO[]
		requirements: string[]
		rewardStrategy: LCUTypes.RewardStrategy
		display: LCUTypes.MissionDisplay
		completionExpression: string
		viewed: boolean
		isNew: boolean
		status: string
		missionType: string
		displayType: string
		earnedDate: number
		completedDate: number
		cooldownTimeMillis: number
		celebrationType: string
		clientNotifyLevel: string
		internalName: string
		media: Record<string, string>
	}
	
	export interface PlayerMissionEligibilityData {
		level: number
		loyaltyEnabled: boolean
		playerInventory: LCUTypes.PlayerInventory
		userInfoToken?: string
	}
	
	export interface PlayerMissionObjectiveDTO {
		type: string
		description: string
		progress: LCUTypes.MissionProgressDTO
		sequence: number
		rewardGroups: string[]
		hasObjectiveBasedReward: boolean
		status: string
		requirements: string[]
	}
	
	export interface PlayerMissionRewardDTO {
		rewardType: string
		rewardGroup: string
		description: string
		iconUrl: string
		smallIconUrl: string
		itemId: string
		uniqueName: string
		rewardFulfilled: boolean
		rewardGroupSelected: boolean
		sequence: number
		quantity: number
		isObjectiveBasedReward: boolean
		media: Record<string, string>
		iconNeedsFrame: boolean
	}
	
	export interface PlayerNotificationsPlayerNotificationConfigResource {
		ExpirationCheckFrequency?: number
	}
	
	export interface PlayerNotificationsPlayerNotificationResource {
		backgroundUrl: string
		created: string
		critical: boolean
		data: Record<string, string>
		detailKey: string
		expires: string
		iconUrl: string
		id: number
		source: string
		state: string
		titleKey: string
		type: string
		dismissible: boolean
	}
	
	export interface PlayerNotificationsRiotMessagingServiceMessage {
		resource: string
		service: string
		version: string
		timestamp: number
		payload: string
	}
	
	export interface PlayerParticipant {
		summonerId: number
	}
	
	export interface PlayerRosterHistoryDTO {
		rosters: LCUTypes.RosterMemberDTO[]
	}
	
	export interface PlayerTierDTO {
		playerId: number
		tier: number
		primaryPos: LCUTypes.Position
		secondPos: LCUTypes.Position
	}
	
	export interface PluginDescriptionResource {
		name: string
		version: string
		riotMeta: LCUTypes.PluginMetadataResource
		pluginDependencies: Record<string, string>
	}
	
	export interface PluginLcdsEvent {
		clientId: string
		subtopic: string
		typeName: string
		body: unknown
	}
	
	export interface PluginLcdsResponse {
		typeName: string
		body: unknown
	}
	
	export interface PluginManagerResource {
		state: LCUTypes.PluginManagerState
	}
	
	export type PluginManagerState = "PluginsInitialized" | "NotReady"
	
	export interface PluginMetadataResource {
		type: string
		subtype: string
		app: string
		feature: string
		mock: string
		hasBundledAssets: boolean
		globalAssetBundles: string[]
		perLocaleAssetBundles: Record<string, unknown>
		implements: Record<string, string>
		threading: LCUTypes.PluginThreadingModel
	}
	
	export interface PluginRegionLocaleChangedEvent {
		region: string
		locale: string
	}
	
	export interface PluginResource {
		fullName: string
		shortName: string
		supertype: string
		subtype: string
		app: string
		feature: string
		threadingModel: string
		assetBundleNames: string[]
		mountedAssetBundles: Record<string, string>
		orderWadFileMounted: number
		dependencies: LCUTypes.PluginResourceContract[]
		implementedContracts: LCUTypes.PluginResourceContract[]
	}
	
	export interface PluginResourceContract {
		fullName: string
	}
	
	export interface PluginResourceEvent<DataType = unknown> {
		uri: string
		eventType: LCUTypes.PluginResourceEventType
		data: DataType
	}
	
	export type PluginResourceEventType = "Delete" | "Update" | "Create"
	
	export interface PluginServiceProxyResponse {
		uuid: string
		serviceName: string
		methodName: string
		payload: string
		status: string
		error: string
	}
	
	export type PluginThreadingModel = "parallel" | "concurrent" | "sequential" | "dedicated"
	
	export type Position = "UNSELECTED" | "FILL" | "UTILITY" | "JUNGLE" | "BOTTOM" | "MIDDLE" | "TOP"
	
	export interface ProcessControlProcess {
		status: string
	}
	
	export interface PublicRosterDTO {
		id: number
		tournamentId: number
		name: string
		shortName: string
		logo: number
		logoColor: number
		memberIds: number[]
	}
	
	export interface Punishment {
		punishedForChatLogs: string[]
		punishedForGameIds: number[]
		punishmentReason: string
		punishmentType: string
		punishedUntilDateMillis: number
		punishmentLengthMillis: number
		permaBan: boolean
		punishmentLengthGames: number
		playerFacingMessage: string
	}
	
	export interface QueryEvaluationRequestDTO {
		query: string
	}
	
	export interface QueryEvaluationResultDTO {
		lootItemNames: string[]
	}
	
	export interface QueryResultDTO {
		queryToLootNames: unknown
		lastUpdate: number
	}
	
	export interface RankedScoutingDTO {
		playerId: number
		puuid: string
		totalMasteryScore: number
		topMasteries: LCUTypes.ChampionMasteryPublicDTO[]
		topSeasonChampions: LCUTypes.ChampionScoutingDTO[]
	}
	
	export interface RankedScoutingMemberDTO {
		playerId: number
		championScoutingData: LCUTypes.RankedScoutingTopChampionDTO[]
	}
	
	export interface RankedScoutingTopChampionDTO {
		championId: number
		rank: number
		winCount: number
		gameCount: number
		kda: number
	}
	
	export interface RedeemLootTransactionDTO {
		clientId: string
		transactionId: string
		lootName: string
	}
	
	export type RemotingHelpFormat = "Console" | "Brief" | "Epytext" | "Full"
	
	export type RemotingPrivilege = "Local" | "Admin" | "User" | "None"
	
	export type RemotingSerializedFormat = "MsgPack" | "YAML" | "JSON"
	
	export interface ReplayMetadataV2 {
		gameVersion: string
		fileSize: number
	}
	
	export type ReplayResponseStatus = "INTERNAL_SERVER_ERROR" | "BAD_REQUEST" | "EXPIRED" | "NOT_FOUND" | "OK"
	
	export interface RewardDetails {
		tournamentId: number
		rosterId: number
		teamMemberIds: number[]
	}
	
	export interface RewardLogo {
		logo: number
		memberOwnedCount: number
	}
	
	export interface RewardStrategy {
		groupStrategy: string
		selectMaxGroupCount: number
		selectMinGroupCount: number
	}
	
	export interface RiotMessagingServiceAcknowledgeBody {
		id: string
	}
	
	export interface RiotMessagingServiceEntitlementsToken {
		accessToken: string
		token: string
		subject: string
		issuer: string
		entitlements: string[]
	}
	
	export interface RiotMessagingServicePluginRegionLocaleChangedEvent {
		region: string
		locale: string
	}
	
	export interface RiotMessagingServiceSession {
		state: LCUTypes.RiotMessagingServiceState
		token: string
		tokenType: LCUTypes.RiotMessagingServiceTokenType
	}
	
	export type RiotMessagingServiceState = "Connected" | "Connecting" | "Disconnected" | "Disconnecting"
	
	export type RiotMessagingServiceTokenType = "Identity" | "Access" | "Unavailable"
	
	export interface RmsMessage {
		id: string
		resource: string
		service: string
		version: string
		timestamp: number
		payload: string
		ackRequired: boolean
	}
	
	export type Role = "NONE" | "MEMBER" | "CAPTAIN"
	
	export interface RosterAggregatedStatsDTO {
		periodStats: LCUTypes.RosterPeriodAggregatedStatsDTO[]
		playerStats: Record<string, LCUTypes.RosterPlayerAggregatedStatsDTO>
	}
	
	export interface RosterDTO {
		version: number
		id: number
		tournamentId: number
		invitationId: string
		name: string
		shortName: string
		logo: number
		logoColor: number
		tier: number
		points: number
		wins: number
		losses: number
		eliminated: boolean
		captainId: number
		members: LCUTypes.RosterMemberDTO[]
		phases: LCUTypes.PhaseRosterDTO[]
		dynamicState: LCUTypes.RosterDynamicStateDTO
		banned: boolean
		mucJwtDto: LCUTypes.MucJwtDto
	}
	
	export interface RosterDynamicStateDTO {
		version: number
		tournamentId: number
		rosterId: number
		phaseCheckinStates: number[]
		members: LCUTypes.PhaseInMember[]
		ticketOffers: LCUTypes.TicketOfferDTO[]
		withdraw: LCUTypes.RosterWithdraw
	}
	
	export interface RosterMatchAggregatedStatsDTO {
		round: number
		duration: number
		opponentShortName: string
		opponentLogo: number
		opponentLogoColor: number
		win: boolean
		loserBracket: boolean
		gameId: number
		kills: number
		opponentKills: number
		playerChampionIds: Record<string, number>
	}
	
	export interface RosterMemberDTO {
		rosterId: number
		playerId: number
		tournamentId: number
		currentBid: number
		bidType: LCUTypes.TicketType
		pendingSpend: number
		pendingPremiumSpend: number
		position: LCUTypes.Position
		joinTime: number
		tier: number
	}
	
	export interface RosterPeriodAggregatedStatsDTO {
		period: number
		bracketSize: number
		time: number
		matchStats: LCUTypes.RosterMatchAggregatedStatsDTO[]
		playerBids: Record<string, number>
	}
	
	export interface RosterPlayerAggregatedStatsDTO {
		rawStatsSum: Record<string, number>
		rawStatsMax: Record<string, number>
	}
	
	export interface RosterStatsDTO {
		rosterId: number
		tournamentThemeId: number
		tournamentNameLocKey: string
		tournamentNameLocKeySecondary: string
		scheduleTime: number
		scheduleEndTime: number
		tournamentPeriods: number
		tier: number
		rosterName: string
		rosterShortName: string
		rosterLogo: number
		rosterLogoColor: number
		stats: LCUTypes.RosterAggregatedStatsDTO
	}
	
	export interface RosterWithdraw {
		initVoteTime: number
		initVoteMember: number
		voteTimeoutMs: number
		lockoutTimeMs: number
		gameStartBufferMs: number
		voteWithdrawMembers: number[]
		declineWithdrawMembers: number[]
	}
	
	export interface SLIBoolDiagnostic {
		key: string
		value: boolean
	}
	
	export interface SLICount {
		sliName: string
		idempotencyKey: string
		successes: number
		failures: number
		startTimeEpochMs: number
		endTimeEpochMs: number
		labels: Record<string, string>
		boolDiagnostics: Record<string, boolean>
		doubleDiagnostics: Record<string, number>
		intDiagnostics: Record<string, number>
		stringDiagnostics: Record<string, string>
	}
	
	export interface SLIDoubleDiagnostic {
		key: string
		value: number
	}
	
	export interface SLIIntDiagnostic {
		key: string
		value: number
	}
	
	export interface SLILabel {
		key: string
		value: string
	}
	
	export interface SLIStringDiagnostic {
		key: string
		value: string
	}
	
	export interface SanitizerContainsSanitizedRequest {
		text: string
		level?: number
		aggressiveScan?: boolean
	}
	
	export interface SanitizerContainsSanitizedResponse {
		contains: boolean
	}
	
	export interface SanitizerSanitizeRequest {
		texts?: string[]
		text?: string
		level?: number
		aggressiveScan?: boolean
	}
	
	export interface SanitizerSanitizeResponse {
		texts?: string[]
		text?: string
		modified: boolean
	}
	
	export interface SanitizerSanitizerStatus {
		ready: boolean
		region: string
		locale: string
		filteredWordCountsByLevel: Record<string, number>
		whitelistedWordCountsByLevel: Record<string, number>
		breakingCharsCount: number
		projectedCharsCount: number
	}
	
	export interface SeriesDTO {
		id: string
		internalName: string
		parentInternalName: string
		type: string
		eligibilityType: string
		displayType: string
		title: string
		description: string
		optInButtonText: string
		optOutButtonText: string
		status: string
		startDate: number
		endDate: number
		createdDate: number
		lastUpdatedTimestamp: number
		viewed: boolean
		media: LCUTypes.SeriesMediaDTO
		tags: string[]
		warnings: LCUTypes.AlertDTO[]
	}
	
	export interface SeriesMediaDTO {
		backgroundUrl: string
		backgroundImageLargeUrl: string
		backgroundImageSmallUrl: string
		trackerIconUrl: string
		trackerIcon: string
		accentColor: string
	}
	
	export interface ShutdownLcdsForcedClientShutdown {
		reason: string
		additionalInfo: string
	}
	
	export interface SimpleDialogMessage {
		accountId: number
		msgId: string
		type: string
		params: string[]
	}
	
	export interface SimpleDialogMessageResponse {
		accountId: number
		msgId: string
		command: string
	}
	
	export interface StoreLcdsChampionDTO {
		endDate: number
		purchaseDate: number
		winCountRemaining: number
		sources: string[]
		active: boolean
		botEnabled: boolean
		championId: number
		championSkins: LCUTypes.StoreLcdsChampionSkinDTO[]
		freeToPlay: boolean
		freeToPlayReward: boolean
		f2pRewardSources: string[]
		owned: boolean
		rankedPlayEnabled: boolean
	}
	
	export interface StoreLcdsChampionSkinDTO {
		endDate: number
		purchaseDate: number
		winCountRemaining: number
		sources: string[]
		championId: number
		freeToPlayReward: boolean
		f2pRewardSources: string[]
		lastSelected: boolean
		owned: boolean
		skinId: number
		stillObtainable: boolean
	}
	
	export interface StoreLcdsSimpleDialogMessage {
		accountId: number
		msgId: string
		type: string
		params: string[]
	}
	
	export interface StoreLcdsSimpleDialogMessageResponse {
		accountId: number
		msgId: string
		command: string
	}
	
	export interface StoreLcdsStoreAccountBalanceNotification {
		ip: number
		rp: number
	}
	
	export interface StoreLcdsStoreFulfillmentNotification {
		inventoryType: string
		rp: number
		ip: number
		data: unknown
	}
	
	export interface ThemeVp {
		themeId: number
		themeVp: number
	}
	
	export interface TicketOfferDTO {
		offerPlayerId: number
		receivePlayerId: number
		count: number
		type: LCUTypes.TicketType
		ticketOfferState: LCUTypes.TicketOfferState
	}
	
	export type TicketOfferState = "REVOKED" | "REJECTED" | "ACCEPTED" | "ACTIVE"
	
	export type TicketType = "PREMIUM" | "BASIC"
	
	export interface TierConfig {
		tier: number
		delayTime: number
		estimateTime: number
	}
	
	export interface TimeSeriesEventBeginV1 {
		when: number
		eventName: string
	}
	
	export interface TimeSeriesEventEndV1 {
		when: number
		eventName: string
		suffix?: string
	}
	
	export interface TimeSeriesEventMarkerV1 {
		when: number
		eventName: string
		markerName: string
	}
	
	export interface TournamentDTO {
		id: number
		scheduleTime: number
		scheduleEndTime: number
		rosterCreateDeadline: number
		entryFee: number
		rosterSize: number
		themeId: number
		nameLocKey: string
		nameLocKeySecondary: string
		buyInOptions: number[]
		buyInOptionsPremium: number[]
		queueId: number
		scoutingTimeMs: number
		lastThemeOfSeason: boolean
		bracketSize: string
		minGames: number
		smsRestriction: boolean
		honorRestriction: boolean
		rankRestriction: boolean
		voiceEnabled: boolean
		phases: LCUTypes.TournamentPhaseDTO[]
		rewardConfig: LCUTypes.ClashRewardConfigClient[]
		tierConfigs: LCUTypes.TierConfig[]
		bracketFormationInitDelayMs: number
		bracketFormationIntervalMs: number
		status: LCUTypes.TournamentStatusEnum
		resumeTime: number
		lft: boolean
		maxInvites: number
		maxSuggestionsPerPlayer: number
	}
	
	export interface TournamentHistoryAndWinnersDTO {
		tournamentHistory: LCUTypes.TournamentDTO[]
		tournamentWinnersCompressed: string
	}
	
	export interface TournamentInfoDTO {
		tournament: LCUTypes.TournamentDTO
		roster?: LCUTypes.RosterDTO
		pendingRoster?: LCUTypes.PendingRosterDTO
		inviteePendingRosters: LCUTypes.PendingRosterDTO[]
		themeVp: number
	}
	
	export interface TournamentInfoMinimalDTO {
		tournamentInfo: LCUTypes.TournamentInfoDTO[]
		time: number
	}
	
	export interface TournamentPhaseDTO {
		id: number
		tournamentId: number
		registrationTime: number
		startTime: number
		period: number
		cancelled: boolean
		limitTiers: number[]
		capacityStatus: LCUTypes.CapacityEnum
	}
	
	export interface TournamentPlayerInfoDTO {
		tournamentInfo: LCUTypes.TournamentInfoDTO[]
		rosterStats: LCUTypes.RosterStatsDTO[]
		player: LCUTypes.PlayerDTO
		seasonVp: number
		themeVps: LCUTypes.ThemeVp[]
		time: number
		tier: number
	}
	
	export type TournamentStatusEnum = "PRERESUME" | "PAUSED" | "CANCELLED" | "DEFAULT"
	
	export interface TracingCriticalFlowEventV1 {
		when: number
		eventId: string
		succeeded: boolean
		payloadString: string
	}
	
	export interface TracingEventV1 {
		when: number
		name: string
		src: string
		dest: string
		tags: string
		details: string
	}
	
	export type TracingModuleThreadingModelV1 = "kParallel" | "kConcurrent" | "kSequential" | "kDedicated" | "kMainThread" | "kNone"
	
	export type TracingModuleTypeV1 = "kRemotingSource" | "kFrontEndPlugin" | "kBackendOther" | "kBackEndPlugin" | "kRemoteAppModule" | "kUnknown"
	
	export interface TracingModuleV1 {
		moduleId: number
		name: string
		type: LCUTypes.TracingModuleTypeV1
		threadingModel: LCUTypes.TracingModuleThreadingModelV1
	}
	
	export interface TracingPhaseBeginV1 {
		when: number
		name: string
		importance: LCUTypes.TracingPhaseImportanceV1
	}
	
	export interface TracingPhaseEndV1 {
		when: number
		name: string
	}
	
	export type TracingPhaseImportanceV1 = "major" | "minor" | "trivial"
	
	export interface TutorialMetadata {
		stepNumber: number
		queueId: string
		displayRewards: Record<string, string>
		useQuickSearchMatchmaking: boolean
		useChosenChampion: boolean
	}
	
	export interface VerboseLootOddsDTO {
		recipeName: string
		lastUpdated: string
		chanceToContain: LCUTypes.LootOddsDTO[]
		guaranteedToContain: LCUTypes.LootOddsDTO[]
		hasPityRules: boolean
		checksOwnership: boolean
	}
	
	export interface YourshopLcdsChampionDTO {
		championId: number
		owned: boolean
	}
	
	export interface YourshopLcdsChampionSkinDTO {
		championId: number
		owned: boolean
		skinId: number
	}
	
	export interface YourshopLcdsClientDynamicConfigurationNotification {
		configs: string
		delta: boolean
	}
	
	export interface YourshopStoreFulfillmentNotification {
		inventoryType: string
		data: unknown
	}
	
	export interface basicOperatingSystemInfo {
		edition: string
		platform: string
		versionMajor: string
		versionMinor: string
	}
	
	export interface basicSystemInfo {
		operatingSystem: LCUTypes.basicOperatingSystemInfo
		physicalMemory: number
		physicalProcessorCores: number
	}
	
	export interface cookie {
		url: string
		name: string
		value: string
		domain: string
		path: string
		secure: boolean
		httponly: boolean
		expires?: number
	}
}