export type AggregationType = "average" | "sum" | "none"

export interface AlertDTO {
	/** @format int64 */
	alertTime: number
}

export interface BannedChampion {
	/** @format int32 */
	championId: number
	/** @format int32 */
	teamId: number
	/** @format int32 */
	pickTurn: number
}

export interface BasePlayerDTO {
	/** @format int32 */
	code: number
	message: string
	data: MatchedPlayerDTO
}

/** Represents a cancelled asynchronous operation. */
export interface BindingAsyncCancelEvent {
	/** @format uint32 */
	asyncToken: number
}

/** Represents a failed asynchronous operation. */
export interface BindingAsyncFailureEvent {
	/** @format uint32 */
	asyncToken: number
	error: string
}

/** Possible states of an asynchronous operation. */
export type BindingAsyncState = "Failed" | "Succeeded" | "Cancelled" | "Cancelling" | "Running" | "None"

/** Represents the parameters of a call to a provided callback. */
export interface BindingCallbackEvent {
	/** @format uint32 */
	id: number
	parameters: unknown[]
}

/** Describes the exposed native API. */
export interface BindingFullApiHelp {
	functions: BindingFullFunctionHelp[]
	types: BindingFullTypeHelp[]
	events: BindingFullEventHelp[]
}

/** Describes a function parameter. */
export interface BindingFullArgumentHelp {
	name: string
	description: string
	type: BindingFullTypeIdentifier
	optional: boolean
}

/** Describes an enumerator. */
export interface BindingFullEnumValueHelp {
	name: string
	description: string
	/** @format int32 */
	value: number
}

/** Describes an event. */
export interface BindingFullEventHelp {
	name: string
	nameSpace: string
	type: BindingFullTypeIdentifier
	description: string
	tags: string[]
}

/** Describes a member of a struct. */
export interface BindingFullFieldHelp {
	name: string
	description: string
	/** @format uint32 */
	offset: number
	type: BindingFullTypeIdentifier
	optional: boolean
}

/** Describes a function. */
export interface BindingFullFunctionHelp {
	name: string
	nameSpace: string
	arguments: BindingFullArgumentHelp[]
	returns: BindingFullTypeIdentifier
	description: string
	help: string
	threadSafe: boolean
	async: string
	tags: string[]
}

/** Describes a struct or enum type. */
export interface BindingFullTypeHelp {
	name: string
	nameSpace: string
	/** @format uint32 */
	size: number
	description: string
	tags: string[]
	fields: BindingFullFieldHelp[]
	values: BindingFullEnumValueHelp[]
}

/** Describes the type of a value. */
export interface BindingFullTypeIdentifier {
	type: string
	elementType: string
}

/** Represents generic data for an asynchronous event. */
export interface BindingGenericAsyncEvent {
	/** @format uint32 */
	asyncToken: number
	data: unknown
}

/** Represents generic data for an event. */
export interface BindingGenericEvent {
	data: unknown
}

/** Help format for binding functions and types. */
export type BindingHelpFormat = "Epytext" | "Full"

export interface BoostTeamSkinRentalDTO {
	summonerName: string
	/** @format uint64 */
	summonerId: number
	puuid: string
	skinUnlockMode: string
	/** @format int64 */
	price: number
	/** @format int64 */
	ipReward: number
	/** @format int64 */
	ipRewardForPurchaser: number
	availableSkins: number[]
	unlocked: boolean
}

export interface Bracket {
	/** @format int32 */
	version: number
	/** @format int64 */
	tournamentId: number
	/** @format int64 */
	phaseId: number
	/** @format int64 */
	id: number
	/** @format int32 */
	size: number
	matches: BracketMatch[]
	rosters: BracketRoster[]
}

export interface BracketMatch {
	/** @format int64 */
	id: number
	/** @format int32 */
	round: number
	/** @format int32 */
	order: number
	/** @format int64 */
	"rosterId1": number
	/** @format int64 */
	"rosterId2": number
	resultHistory: string
	/** @format int32 */
	lowestPossiblePosition: number
	/** @format int32 */
	highestPossiblePosition: number
	/** @format int64 */
	roundStartTime: number
	/** @format int64 */
	gameStartTime: number
	status: ClientBracketMatchStatus
	/** @format int64 */
	winnerId: number
	/** @format int64 */
	gameId: number
	loserBracket: boolean
	/** @format int64 */
	forfeitRosterId: number
	/** @format int32 */
	failRosterStatus: number
}

export interface BracketRoster {
	/** @format int64 */
	rosterId: number
	name: string
	shortName: string
	/** @format int32 */
	logo: number
	/** @format int32 */
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
	/** @format uint64 */
	id: number
	gameState: string
	queueTypeName: string
	roomName: string
	roomPassword: string
	mucJwtDto: MucJwtDto
	name: string
	playerChampionSelections: ChampSelectLcdsPlayerChampionSelectionDTO[]
	bannedChampions: BannedChampion[]
	teamOne: unknown[]
	teamTwo: unknown[]
	statusOfParticipants: string
	/** @format int64 */
	optimisticLock: number
	/** @format int32 */
	pickTurn: number
	/** @format int64 */
	spectatorDelay: number
	gameMutators: string[]
}

export interface ChampSelectLcdsGameTimerDTO {
	currentGameState: string
	/** @format double */
	remainingTimeInMillis: number
}

export interface ChampSelectLcdsObfuscatedParticipant {
	/** @format uint64 */
	gameUniqueId: number
}

export interface ChampSelectLcdsPlayerChampionSelectionDTO {
	summonerInternalName: string
	/** @format uint64 */
	summonerId: number
	puuid: string
	/** @format int32 */
	championId: number
	/** @format int32 */
	selectedSkinIndex: number
	/** @format int32 */
	"spell1Id": number
	/** @format int32 */
	"spell2Id": number
}

export interface ChampSelectLcdsPlayerParticipant {
	summonerName: string
	summonerInternalName: string
	/** @format uint64 */
	summonerId: number
	puuid: string
	/** @format int32 */
	pickMode: number
	/** @format int32 */
	pickTurn: number
}

export interface ChampSelectLcdsPointSummary {
	/** @format int32 */
	pointsToNextRoll: number
	/** @format int32 */
	currentPoints: number
	/** @format int32 */
	numberOfRolls: number
	/** @format int32 */
	maxRolls: number
	/** @format int32 */
	pointsCostToRoll: number
}

export interface ChampSelectLcdsPotentialTradersDTO {
	potentialTraders: string[]
}

export interface ChampSelectLcdsRollResult {
	/** @format int32 */
	championId: number
	pointSummary: ChampSelectLcdsPointSummary
}

export interface ChampSelectLcdsTradeContractDTO {
	requesterInternalSummonerName: string
	/** @format uint64 */
	requesterSummonerId: number
	requesterPuuid: string
	responderInternalSummonerName: string
	/** @format uint64 */
	responderSummonerId: number
	responderPuuid: string
	/** @format int32 */
	requesterChampionId: number
	/** @format int32 */
	responderChampionId: number
	state: string
}

export interface ChampionMasteryPublicDTO {
	/** @format int32 */
	championId: number
	/** @format int32 */
	championLevel: number
	/** @format int32 */
	championPoints: number
}

export interface ChampionScoutingDTO {
	/** @format int32 */
	championId: number
	/** @format int32 */
	winCount: number
	/** @format int32 */
	gameCount: number
	/** @format float */
	kda: number
}

export interface ClashEventData {
	earnedDate: string
	rewardType: string
	/** @format int64 */
	tournamentId: number
	tournamentName: string
	tier: string
	/** @format int64 */
	bracket: number
	/** @format int32 */
	seasonId: number
	theme: string
	/** @format int64 */
	rosterId: number
	teamName: string
	teamShortName: string
	teamLogoName: string
	teamLogoChromaId: string
	playerUUIDs: string[]
	rewardSpec: ClashRewardSpec
}

export interface ClashOfflineNotification {
	/** @format int64 */
	tournamentId: number
	reason: string
	metaData: Record<string, string>
}

export interface ClashRewardConfigClient {
	name: string
	keyDef: ClashRewardKeyType[]
	entries: ClashRewardConfigEntry[]
}

export interface ClashRewardConfigEntry {
	key: string
	vals: ClashRewardOutput[]
}

export interface ClashRewardDefinition {
	rewardType: ClashRewardType
	rewardSpec: ClashRewardSpec
}

export type ClashRewardKeyType = "TOC_STATE" | "SEASON_FLAG_COUNT" | "SEASON_VP" | "THEME_VP" | "POINTS" | "WINS" | "TOURNAMENT_WIN_POS" | "LOWEST_POSITION" | "TICKET_TYPE" | "TICKET_COUNT" | "CUP" | "TIER"

export interface ClashRewardOutput {
	primary: ClashRewardDefinition
	alternative: ClashRewardDefinition
	grant: ClashRewardTime
	show: ClashRewardTime
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
	/** @format uint64 */
	playerId: number
	/** @format int32 */
	seasonId: number
	/** @format int32 */
	seasonVp: number
	banned: boolean
	/** @format int32 */
	honorLevel: number
	eligible: boolean
	rewards: ClashRewardDefinition[]
}

export type ClientBracketMatchStatus = "COMPLETED" | "STARTED" | "UPCOMING"

export interface ClientConfigAuthenticatedConnection {
	/** @format uint32 */
	connectionId: number
	subscribed: boolean
	authToken: string
}

export interface ClientConfigBuildInfo {
	/** @format int32 */
	contentBuildId: number
	/** @format int32 */
	codeBuildId: number
	/** @format int32 */
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
	params: ClientConfigConfigParams
	data: Record<string, unknown>
	/** @format int64 */
	updateTime: number
}

export interface ClientConfigConfigNamespaceUpdate {
	public: string[]
	player: string[]
}

export interface ClientConfigConfigParams {
	type: ClientConfigConfigType
	appName: string
	version: string
	patchline: string
	region: string
	namespace: string
}

export type ClientConfigConfigReadinessEnum = "Disabled" | "Ready" | "NotReady"

export interface ClientConfigConfigStatus {
	readiness: ClientConfigConfigReadinessEnum
	/** @format uint64 */
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
	EntitlementsUpdateType: ClientConfigDepInjectorEntitlementsUpdateType
	EntitlementsTokenResource: ClientConfigDepInjectorEntitlements
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
	UpdateType: ClientConfigUpdateType
	EntitlementsTokenResource: ClientConfigEntitlements
}

export interface ClientConfigSession {
	productId: string
	patchlineId: string
	version: string
	isInternal: boolean
	connections: ClientConfigAuthenticatedConnection[]
}

export type ClientConfigUpdateType = "Delete" | "Update" | "Create"

export interface ClientDynamicConfig {
	configs: string
	delta: boolean
	compressed: boolean
}

export type ClientRequestError = "WITHDRAW_LOCKOUT" | "WITHDRAW_CANCEL_NOT_ALLOWED" | "WITHDRAW_NOT_ALLOWED" | "VOICE_NOT_AVAILABLE" | "TICKET_NOT_SET" | "TICKET_OFFER_INVALID_COUNT" | "TICKET_OFFER_NOT_EXIST" | "TICKET_ALREADY_SET" | "SMS_NOT_VERIFIED" | "SUMMONER_LEVEL_REQUIREMENT_NOT_MET" | "SUGGEST_INVITEE_NOT_EXIST" | "ROSTER_DISBAND_NOT_ALLOWED" | "ROSTER_ELIMINATED" | "PHASE_FULL" | "PHASE_CANCELLED" | "PENDING_ROSTER_CLOSE" | "PENDING_ROSTER_FULL" | "PENDING_ROSTER_NOT_READY" | "OVER_INVITE" | "OVER_SUGGESTION_INVITE" | "NO_MORE_RECOMMEND" | "NO_PERMISSION" | "NOT_ALLOWED_DELETE_TOURNAMENT_REWARD_CONFIG" | "NOT_ALLOWED_DELETE_TOURNAMENT" | "NOT_ENOUGH_TICKETS" | "NOT_SEED_INTO_LEAGUE" | "NOT_INVITEE" | "NOT_MEMBER" | "NOT_CAPTAIN" | "NO_AVAILABLE_PHASE" | "NO_SAME_PLAYER" | "MAX_ROSTER_FETCHSIZE" | "MAX_INVITED" | "INVALID_SEASON" | "INVALID_REWARD_CONFIG_NAME" | "INVALID_MATCHSTATUS_FORGAMEEND" | "INVALID_WITHDRAW" | "INVALID_Tier" | "INVALID_PLAYER" | "INVALID_MATCHID" | "INVALID_BRACKET" | "INVALID_CHECKELIGIBILITY_SIZE" | "INVALID_SHORTNAME" | "INVALID_NAME" | "INVALID_LOGOCOLOR" | "INVALID_LOGO" | "INVALID_POSITION" | "INVALID_ROSTER_MEMBER_SIZE" | "INVALID_INVITEE" | "INVALID_PHASE" | "INVALID_TOURNAMENT" | "INVALID_BUY_BACK" | "INVALID_ROSTER" | "INTERNAL_ERROR" | "INACTIVE_PHASE" | "INACTIVE_REGISTRATION" | "IN_OTHER_PHASE_OF_PERIOD" | "IN_OTHER_PENDINGROSTER" | "IN_OTHER_ROSTER" | "LOGOCOLOR_NOT_ALLOWED" | "LOGO_NOT_ALLOWED" | "HONOR_INELIGIBILITY" | "FAIL_SUGGESTINVITE" | "FAIL_INVITE" | "ELIGIBILITY_SERVER_ERROR" | "CLASH_BANNED_INVITEE" | "CLASH_BANNED" | "CAPTAIN_NOT_ALLOWED" | "ALREADY_IN_PHASE" | "ALREADY_VOTE_WITHDRAW" | "ALREADY_DECLINED" | "ALREADY_DECLINE_WITHDRAW" | "ALREADY_SUGGESTED" | "ALREADY_INVITED" | "ALREADY_MEMBER" | "ALREADY_IN_GAME"

export interface CollectionsLcdsChampionDTO {
	/** @format uint64 */
	endDate: number
	/** @format uint64 */
	purchaseDate: number
	/** @format int32 */
	winCountRemaining: number
	sources: string[]
	active: boolean
	botEnabled: boolean
	/** @format int32 */
	championId: number
	championSkins: CollectionsLcdsChampionSkinDTO[]
	freeToPlay: boolean
	freeToPlayReward: boolean
	"f2pRewardSources": string[]
	owned: boolean
	/** @format uint64 */
	purchased: number
	rankedPlayEnabled: boolean
}

export interface CollectionsLcdsChampionSkinDTO {
	/** @format uint64 */
	endDate: number
	/** @format uint64 */
	purchaseDate: number
	/** @format int32 */
	winCountRemaining: number
	sources: string[]
	/** @format int32 */
	championId: number
	freeToPlayReward: boolean
	"f2pRewardSources": string[]
	lastSelected: boolean
	owned: boolean
	/** @format int32 */
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
	/** @format int32 */
	itemId: number
	inventoryType: string
}

export interface CraftLootDTO {
	recipeName: string
	lootNames: string[]
	/** @format int32 */
	repeat: number
}

export interface CraftLootRefTransactionDTO {
	clientId: string
	transactionId: string
	recipeName: string
	lootNameRefIds: LootNameRefId[]
	/** @format int32 */
	repeat: number
}

export interface CrashReportingEnvironment {
	environment: string
	userName: string
	userId: string
}

export interface CriticalFlowCapture {
	/** @format uint64 */
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
	activeFlowEvents: CriticalFlowExpectation[]
	events: CriticalFlowCapture[]
	errors: string[]
}

export interface DeepLinksClientConfigDeepLinksValue {
	launchLorEnabled: boolean
	launchLorUrl: string
}

export interface DeepLinksDeepLinksSettings {
	isSchemeReady: boolean
	externalClientScheme: string
	launchLorEnabled: boolean
	launchLorUrl: string
}

export interface DownloadUrlRequestV2 {
	platformId: string
	/** @format uint64 */
	gameId: number
}

export interface DownloadUrlResponseV2 {
	url: string
}

export type ElevationAction = "FixBrokenPermissions"

export interface ElevationRequest {
	action: ElevationAction
}

export interface EndOfGameLcdsEndOfGameStats {
	difficulty: string
	/** @format uint64 */
	gameId: number
	/** @format uint32 */
	gameLength: number
	gameMode: string
	gameMutators: string[]
	gameType: string
	invalid: boolean
	queueType: string
	ranked: boolean
	/** @format uint64 */
	reportGameId: number
	roomName: string
	roomPassword: string
	mucJwtDto: MucJwtDto
	myTeamInfo: EndOfGameLcdsTeamInfo
	otherTeamInfo: EndOfGameLcdsTeamInfo
	teamPlayerParticipantStats: EndOfGameLcdsPlayerParticipantStatsSummary[]
	otherTeamPlayerParticipantStats: EndOfGameLcdsPlayerParticipantStatsSummary[]
	myTeamStatus: string
	leveledUp: boolean
	newSpells: EndOfGameLcdsSpell[]
	/** @format uint64 */
	previousLevel: number
	/** @format int32 */
	rpEarned: number
	/** @format int32 */
	skinIndex: number
	/** @format int32 */
	skinId: number
	summonerName: string
	/** @format uint64 */
	userId: number
	/** @format int32 */
	basePoints: number
	/** @format int32 */
	battleBoostIpEarned: number
	/** @format int32 */
	boostIpEarned: number
	/** @format int32 */
	firstWinBonus: number
	/** @format int32 */
	ipEarned: number
	/** @format int32 */
	ipTotal: number
	/** @format int32 */
	boostXpEarned: number
	/** @format int32 */
	experienceEarned: number
	/** @format int32 */
	experienceTotal: number
	/** @format int32 */
	loyaltyBoostXpEarned: number
	/** @format uint64 */
	previousXpTotal: number
	/** @format int32 */
	timeUntilNextFirstWinBonus: number
	causedEarlySurrender: boolean
	earlySurrenderAccomplice: boolean
	teamEarlySurrendered: boolean
	gameEndedInEarlySurrender: boolean
}

export interface EndOfGameLcdsHarassmentReport {
	/** @format uint64 */
	gameId: number
	reportSource: string
	/** @format uint64 */
	reportingSummonerId: number
	/** @format uint64 */
	reportedSummonerId: number
	offense: string
	comment: string
}

export interface EndOfGameLcdsPlayerParticipantStatsSummary {
	puuid: string
	/** @format int32 */
	level: number
	/** @format uint64 */
	userId: number
	/** @format int32 */
	teamId: number
	/** @format uint64 */
	gameId: number
	leaver: boolean
	summonerName: string
	skinName: string
	/** @format int32 */
	profileIconId: number
	/** @format int32 */
	wins: number
	/** @format int32 */
	leaves: number
	/** @format int32 */
	losses: number
	botPlayer: boolean
	/** @format int32 */
	"spell1Id": number
	/** @format int32 */
	"spell2Id": number
	/** @format int32 */
	championId: number
	/** @format int32 */
	skinIndex: number
	selectedPosition: string
	detectedTeamPosition: string
	statistics: EndOfGameLcdsRawStatDTO[]
}

export interface EndOfGameLcdsPointsPenalty {
	type: string
	/** @format double */
	penalty: number
}

export interface EndOfGameLcdsRawStatDTO {
	/** @format int64 */
	value: number
	statTypeName: string
}

export interface EndOfGameLcdsSpell {
	/** @format int32 */
	spellId: number
}

export interface EndOfGameLcdsTeamId {
	fullId: string
}

export interface EndOfGameLcdsTeamInfo {
	teamId: EndOfGameLcdsTeamId
	name: string
	tag: string
	/** @format int64 */
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
	/** @format uint64 */
	id: number
	gameState: string
	teamOne: PlayerParticipant[]
	teamTwo: PlayerParticipant[]
	bannedChampions: BannedChampion[]
}

export type ExternalPluginsAvailability = "Error" | "Recovering" | "Connected" | "Preparing" | "NotAvailable"

export interface ExternalPluginsResource {
	state: ExternalPluginsAvailability
	errorString: string
}

export interface FailedInvite {
	/** @format uint64 */
	playerId: number
	exception: ClientRequestError
}

export type GameQueuesLcdsAllowSpectators = "ALL" | "DROPINONLY" | "LOBBYONLY" | "NONE"

export interface GameQueuesLcdsGameQueueConfig {
	disallowFreeChampions: boolean
	gameMode: string
	gameMutators: string[]
	/** @format int32 */
	gameTypeConfigId: number
	/** @format int32 */
	id: number
	/** @format int32 */
	mapId: number
	/** @format uint32 */
	maximumParticipantListSize: number
	/** @format uint32 */
	minLevel: number
	/** @format uint32 */
	minimumParticipantListSize: number
	/** @format uint32 */
	numPlayersPerTeam: number
	queueState: string
	ranked: boolean
	supportedMapIds: number[]
	type: string
	/** @format uint64 */
	lastToggledOffTime: number
	/** @format uint64 */
	lastToggledOnTime: number
	removalFromGameAllowed: boolean
	/** @format int32 */
	removalFromGameDelayMinutes: number
}

export interface GameflowLcdsGameDTO {
	/** @format uint64 */
	id: number
	/** @format int32 */
	mapId: number
	gameState: string
	queueTypeName: string
	gameMode: string
	/** @format int32 */
	gameTypeConfigId: number
	/** @format int32 */
	maxNumPlayers: number
	gameType: string
	/** @format int32 */
	spectatorDelay: number
	/** @format int32 */
	gameQueueConfigId: number
	teamOne: unknown[]
	teamTwo: unknown[]
	playerChampionSelections: unknown[]
}

export interface GameflowLcdsPlayerCredentialsDto {
	/** @format uint64 */
	gameId: number
	serverIp: string
	/** @format uint16 */
	serverPort: number
	encryptionKey: string
	observer: boolean
	observerServerIp: string
	/** @format uint16 */
	observerServerPort: number
	observerEncryptionKey: string
	/** @format uint64 */
	summonerId: number
	packetCopMetadata: string
}

export interface GameflowLcdsReconnectInfoDto {
	playerCredentials: GameflowLcdsPlayerCredentialsDto
	game: GameflowLcdsGameDTO
	/** @format uint32 */
	reconnectDelay: number
}

export interface IdsDTO {
	missionIds: string[]
	seriesIds: string[]
}

export type InviteType = "NONE" | "SELFJOIN" | "SUGGEST" | "FRIEND" | "FREEAGENT"

export interface LCDSBroadcastNotification {
	broadcastMessages: LolServiceStatusBroadcastMessage[]
}

export interface LCDSChampionReward {
	/** @format int32 */
	championId: number
	skins: number[]
}

export interface LCDSGlobalRewards {
	allChampions: boolean
}

export interface LCDSLoyaltyRewards {
	champions: LCDSChampionReward[]
	global: LCDSGlobalRewards
	/** @format int32 */
	ipBoost: number
	/** @format int32 */
	xpBoost: number
}

export interface LCDSLoyaltyStateChangeNotification {
	/** @format uint64 */
	accountId: number
	notificationCategory: LCDSLoyaltyStateChangeNotificationCategory
	rewards: LCDSLoyaltyRewards
}

export type LCDSLoyaltyStateChangeNotificationCategory = "disabled" | "revoke" | "change" | "expiry" | "grant" | "legacy"

export interface LCDSPlayerMessagingSimpleMessage {
	/** @format uint64 */
	accountId: number
	msgId: string
	type: string
	titleCode: string
	bodyCode: string
	params: string[]
}

export interface LCDSPlayerMessagingSimpleMessageResponse {
	/** @format uint64 */
	accountId: number
	msgId: string
	command: string
}

export interface LcdsAcceptGameInvitationRequestDto {
	invitationId: string
	gameVersion: string
	champSelectInventoryJwt: string
	playerGcoTokens: LcdsPlayerGcoTokens
}

export interface LcdsBotParticipant {
	/** @format uint64 */
	summonerId: number
	summonerName: string
	summonerInternalName: string
	/** @format int32 */
	botSkillLevel: number
	position: string
	teamId: string
}

export interface LcdsCreatePracticeGameRequestDto {
	practiceGameConfig: LcdsPracticeGameConfig
	simpleInventoryJwt: string
	playerGcoTokens: LcdsPlayerGcoTokens
}

export interface LcdsFailedJoinPlayer {
	summoner: LcdsSummoner
	reasonFailed: string
}

export interface LcdsGameDTO {
	/** @format int64 */
	id: number
	name: string
	/** @format int32 */
	mapId: number
	/** @format int32 */
	gameTypeConfigId: number
	gameType: string
	gameMode: string
	/** @format int32 */
	maxNumPlayers: number
	spectatorsAllowed: string
	ownerSummary: LcdsPlayerParticipant
	teamOne: LcdsPlayerParticipant[]
	teamTwo: LcdsPlayerParticipant[]
	observers: LcdsPlayerParticipant[]
	practiceGameRewardsDisabledReasons: string[]
	gameMutators: string[]
	roomName: string
	roomPassword: string
	mucJwtDto: MucJwtDto
	passbackUrl: string
	passbackDataPacket: string
	/** @format int64 */
	optimisticLock: number
	gameState: string
}

export interface LcdsGameInviteBaseRuntimeException {
	rootCauseClassname: string
}

export interface LcdsGameMap {
	/** @format int32 */
	mapId: number
	name: string
	displayName: string
	description: string
	/** @format int32 */
	minCustomPlayers: number
	/** @format int32 */
	totalPlayers: number
}

export interface LcdsGameNotification {
	type: string
	messageCode: string
	messageArgument: string
}

export interface LcdsInvitationRequest {
	invitationId: string
	owner: LcdsPlayer
	inviter: LcdsInviter
	invitationState: LcdsInvitationState
	gameMetaData: string
	inviteType: string
	invitePayload: string
}

export type LcdsInvitationState = "REVOKED" | "ON_HOLD" | "ACTIVE"

export interface LcdsInviteFailed {
	/** @format uint64 */
	summonerId: number
	summonerName: string
	exception: LcdsGameInviteBaseRuntimeException
}

export interface LcdsInvitePrivileges {
	canInvite: boolean
}

export interface LcdsInvitee {
	/** @format uint64 */
	summonerId: number
	summonerName: string
	inviteeState: LcdsInviteeState
}

export type LcdsInviteeState = "BANNED" | "KICKED" | "QUIT" | "JOINED" | "ACCEPT_FAILED" | "ACCEPTED" | "DECLINED" | "PENDING" | "CREATOR"

export interface LcdsInviter {
	/** @format uint64 */
	summonerId: number
	summonerName: string
	previousSeasonHighestTier: string
}

export interface LcdsJoinGameRequestDto {
	/** @format uint64 */
	gameId: number
	password?: string
	gameVersion: string
	simpleInventoryJwt: string
	playerGcoTokens: LcdsPlayerGcoTokens
}

export interface LcdsJoinOrCreatePracticeGameRequestDto {
	practiceGameConfig: LcdsPracticeGameConfig
	simpleInventoryJwt: string
	playerGcoTokens: LcdsPlayerGcoTokens
}

export interface LcdsLobbyStatus {
	invitationId: string
	owner: LcdsPlayer
	chatKey: string
	members: LcdsMember[]
	invitees: LcdsInvitee[]
	gameMetaData: string
}

export interface LcdsMember {
	/** @format uint64 */
	summonerId: number
	summonerName: string
	hasDelegatedInvitePower: boolean
}

export interface LcdsObserveGameRequestDto {
	/** @format uint64 */
	gameId: number
	password?: string
	gameVersion: string
	champSelectInventoryJwt: string
	playerGcoTokens: LcdsPlayerGcoTokens
}

export interface LcdsPayloadDto {
	method: string
	headers: Record<string, string>
	path: string
	body: string
}

export interface LcdsPlayer {
	/** @format uint64 */
	summonerId: number
	summonerName: string
}

export interface LcdsPlayerGcoTokens {
	idToken: string
	summonerToken: string
	userInfoJwt: string
}

export interface LcdsPlayerParticipant {
	/** @format uint64 */
	summonerId: number
	summonerName: string
	summonerInternalName: string
	/** @format int32 */
	botSkillLevel: number
	position: string
}

export interface LcdsPracticeGameConfig {
	gameName: string
	gameMode: string
	gameMap: LcdsGameMap
	/** @format int32 */
	maxNumPlayers: number
	/** @format int32 */
	gameTypeConfig: number
	gamePassword: string
	allowSpectators: string
	passbackUrl?: string
	passbackDataPacket?: string
	gameMutators: string[]
	region: string
	gameVersion: string
	spectatorDelayEnabled: boolean
}

export interface LcdsPracticeGameSearchResult {
	/** @format uint64 */
	id: number
	name: string
	owner: LcdsPlayerParticipant
	/** @format int32 */
	maxNumPlayers: number
	privateGame: boolean
	/** @format int32 */
	"team1Count": number
	/** @format int32 */
	"team2Count": number
	/** @format int32 */
	spectatorCount: number
	gameMap: LcdsGameMap
	/** @format int32 */
	gameMapId: number
	gameMode: string
	pickType: string
	allowSpectators: string
}

export type LcdsRemovalReason = "PROGRESSED" | "DESTROYED" | "KICKED"

export interface LcdsRemovedFromLobbyNotification {
	removalReason: LcdsRemovalReason
}

export interface LcdsSimpleMessage {
	/** @format uint64 */
	accountId: number
	msgId: string
	type: string
	params: string[]
}

export interface LcdsSimpleMessageResponse {
	/** @format uint64 */
	accountId: number
	msgId: string
	command: string
}

export interface LcdsStartChampSelectDto {
	invalidPlayers: LcdsFailedJoinPlayer[]
}

export interface LcdsSummoner {
	/** @format uint64 */
	sumId: number
	name: string
}

export interface LcdsSwitchObserverToPlayerRequestDto {
	/** @format uint64 */
	gameId: number
	/** @format int32 */
	teamId: number
	playerGcoTokens: LcdsPlayerGcoTokens
}

export interface LcdsSwitchPlayerToObserverRequestDto {
	/** @format uint64 */
	gameId: number
	playerGcoTokens: LcdsPlayerGcoTokens
}

export interface LcdsSwitchTeamsRequestDto {
	/** @format uint64 */
	gameId: number
	playerGcoTokens: LcdsPlayerGcoTokens
}

export interface LobbyClientDynamicConfigurationNotification {
	configs: string
	delta: boolean
}

/** Describes a log entry. */
export interface LogEvent {
	severity: LogSeverityLevels
	message: string
}

/** Allowable severity levels for log events. */
export type LogSeverityLevels = "Always" | "Error" | "Warning" | "Okay"

export interface LolAccountVerificationAVSConfig {
	Enabled: boolean
	DisableGetActivePhoneNumberCall: boolean
}

export interface LolAccountVerificationConfirmActivationPinRequest {
	oneTimePin: string
}

export interface LolAccountVerificationConfirmActivationPinResponse {
	data: LolAccountVerificationPinResponseData
	clientMessageId: string
}

export interface LolAccountVerificationConfirmDeactivationPinRequest {
	oneTimePin: string
}

export interface LolAccountVerificationConfirmDeactivationPinResponse {
	data: LolAccountVerificationPinResponseData
	clientMessageId: string
}

export interface LolAccountVerificationIsVerifiedResponse {
	success: boolean
	message: string
	/** @format int32 */
	status: number
}

export interface LolAccountVerificationLoginSession {
	state: LolAccountVerificationLoginSessionState
	/** @format uint64 */
	summonerId: number
	/** @format uint64 */
	accountId: number
	username: string
}

export type LolAccountVerificationLoginSessionState = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"

export interface LolAccountVerificationPhoneNumberObfuscated {
	countryCode: string
	endsWith: string
	/** @format int32 */
	length: number
}

export interface LolAccountVerificationPhoneNumberResponse {
	data: LolAccountVerificationPhoneNumberResponseData
	error: LolAccountVerificationResponseError
	clientMessageId: string
}

export interface LolAccountVerificationPhoneNumberResponseData {
	phoneNumberObfuscated: LolAccountVerificationPhoneNumberObfuscated
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
	data: LolAccountVerificationSendActivationPinResponseData
	error: LolAccountVerificationResponseError
	clientMessageId: string
}

export interface LolAccountVerificationSendActivationPinResponseData {
	/** @format int64 */
	pinExpiresAtEpochMillis: number
}

export interface LolAccountVerificationSendDeactivationPinRequest {
	locale: string
}

export interface LolAccountVerificationSendDeactivationPinResponse {
	data: LolAccountVerificationSendActivationPinResponseData
	error: LolAccountVerificationResponseError
	clientMessageId: string
}

export interface LolActiveBoostsActiveBoosts {
	xpBoostEndDate: string
	/** @format uint64 */
	xpBoostPerWinCount: number
	/** @format int32 */
	xpLoyaltyBoost: number
	firstWinOfTheDayStartTime: string
}

export interface LolActiveBoostsEndOfGameStats {
	/** @format uint64 */
	timeUntilNextFirstWinBonus: number
}

export interface LolActiveBoostsInventoryItem {
	uuid: string
	/** @format int32 */
	itemId: number
	inventoryType: string
	purchaseDate: string
	/** @format uint64 */
	quantity: number
	ownershipType: LolActiveBoostsItemOwnershipType
	expirationDate: string
	/** @format uint64 */
	wins: number
}

export interface LolActiveBoostsInventoryItemDTO {
	/** @format int32 */
	itemId: number
	inventoryType: string
	expirationDate: string
	purchaseDate: string
	/** @format uint64 */
	quantity: number
	/** @format uint64 */
	ownedQuantity: number
	usedInGameDate: string
	entitlementId: string
	entitlementTypeId: string
	instanceId: string
	instanceTypeId: string
	payload: unknown
	"f2p": boolean
	rental: boolean
	loyalty: boolean
	loyaltySources: string[]
	lsb: boolean
	/** @format uint64 */
	wins: number
}

export interface LolActiveBoostsInventoryItemWithPayload {
	uuid: string
	/** @format int32 */
	itemId: number
	inventoryType: string
	purchaseDate: string
	/** @format uint64 */
	quantity: number
	ownershipType: LolActiveBoostsItemOwnershipType
	expirationDate: string
	"f2p": boolean
	rental: boolean
	loyalty: boolean
	loyaltySources: string[]
	owned: boolean
	/** @format uint64 */
	wins: number
	payload: unknown
}

export type LolActiveBoostsItemOwnershipType = "F2P" | "LOYALTY" | "RENTED" | "OWNED"

export interface LolActiveBoostsLoginDataPacket {
	/** @format uint64 */
	timeUntilFirstWinOfDay: number
}

export interface LolActiveBoostsLoyaltyRewardsSimplified {
	/** @format int32 */
	xpBoost: number
}

export type LolActiveBoostsLoyaltyStatus = "DISABLED" | "REVOKE" | "CHANGE" | "EXPIRY" | "REWARDS_GRANT" | "LEGACY"

export interface LolActiveBoostsLoyaltyStatusNotification {
	status: LolActiveBoostsLoyaltyStatus
	rewards: LolActiveBoostsLoyaltyRewardsSimplified
}

export interface LolAntiAddictionAntiAddictionState {
	policyType: LolAntiAddictionPolicyType
	localizationKey: string
	antiAddictionToken: string
}

export interface LolAntiAddictionAntiAddictionToken {
	antiAddictionToken: string
}

export type LolAntiAddictionPolicyType = "antiAddictionHeartbeat" | "antiAddictionShutdown" | "antiAddictionWarning"

export interface LolBannersBannerFlag {
	/** @format int32 */
	itemId: number
	theme: string
	/** @format int64 */
	level: number
	/** @format int64 */
	seasonId: number
	"earnedDateIso8601": string
}

export interface LolBannersBannerFrame {
	/** @format int64 */
	level: number
}

export interface LolBannersCapClashFlagEntitlementPayload {
	rewardSpec: LolBannersClashV2FlagRewardSpec
	rewardType: string
}

export interface LolBannersCapClashFrameEntitlementPayload {
	rewardSpec: LolBannersClashV2FrameRewardSpec
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
	/** @format int32 */
	itemId: number
	inventoryType: string
	purchaseDate: string
	payload: unknown
}

export interface LolBannersInventoryItemsByType {
	TOURNAMENT_FLAG: LolBannersTournamentFlagInventoryItem[]
	TOURNAMENT_FRAME: LolBannersTournamentFrameInventoryItem[]
}

export interface LolBannersInventoryResponse {
	items: LolBannersInventoryItemsByType
}

export interface LolBannersLoadout {
	id: string
	name: string
	scope: string
	loadout: Record<string, LolBannersLoadoutsSlot>
}

export interface LolBannersLoadoutsSlot {
	/** @format int32 */
	itemId: number
	inventoryType: string
}

export interface LolBannersSummonerProfileUpdate {
	key: string
	value: unknown
}

export interface LolBannersTournamentFlagInventoryItem {
	/** @format int32 */
	itemId: number
	payload: LolBannersCapClashFlagEntitlementPayload
	purchaseDate: string
}

export interface LolBannersTournamentFrameInventoryItem {
	payload: LolBannersCapClashFrameEntitlementPayload
	purchaseDate: string
}

export type LolCareerStatsCareerStatsQueueType = "other" | "quickplay5" | "rank3flex" | "blind3" | "aram" | "blind5" | "rank5solo" | "rank5flex" | "draft5"

export interface LolCareerStatsChampionQueueStatsResponse {
	/** @format int32 */
	championId: number
	queueType: LolCareerStatsCareerStatsQueueType
	position: LolCareerStatsSummonersRiftPosition
	rankTier: string
	stats: unknown
}

export interface LolCareerStatsChampionStatistics {
	/** @format int32 */
	championId: number
	experts: LolCareerStatsExpertPlayer[]
	queueStats: LolCareerStatsStatisticsByQueue[]
}

export interface LolCareerStatsEntitlementsToken {
	entitlements: string[]
}

export interface LolCareerStatsExpertPlayer {
	/** @format int32 */
	championId: number
	position: LolCareerStatsSummonersRiftPosition
	/** @format uint64 */
	summonerId: number
	summonerName: string
	/** @format int32 */
	numOfGames: number
	/** @format float */
	winRate: number
	/** @format int32 */
	expertRank: number
}

export interface LolCareerStatsPositionStatistics {
	position: LolCareerStatsSummonersRiftPosition
	experts: LolCareerStatsExpertPlayer[]
	queueStats: LolCareerStatsStatisticsByQueue[]
}

export interface LolCareerStatsPositionStatsQueryRequest {
	queueType: LolCareerStatsCareerStatsQueueType
	position: LolCareerStatsSummonersRiftPosition
	rankTier: string
	/** @format uint32 */
	season: number
}

export interface LolCareerStatsStatisticsByQueue {
	queueType: LolCareerStatsCareerStatsQueueType
	stats: unknown
}

export interface LolCareerStatsStatisticsPercentilesResponse {
	/** @format int32 */
	championId: number
	queueType: LolCareerStatsCareerStatsQueueType
	position: LolCareerStatsSummonersRiftPosition
	rankTier: string
	/** @format uint32 */
	season: number
	stats: unknown
}

export interface LolCareerStatsStatsQueryRequest {
	/** @format int32 */
	championId: number
	queueType: LolCareerStatsCareerStatsQueueType
	position: LolCareerStatsSummonersRiftPosition
	rankTier: string
	/** @format uint32 */
	season: number
}

export type LolCareerStatsSummonersRiftPosition = "SUPPORT" | "BOTTOM" | "MID" | "JUNGLE" | "TOP" | "UNKNOWN" | "ALL"

export interface LolCatalogBundled {
	flexible: boolean
	items: LolCatalogBundledItem[]
	minimumPrices: LolCatalogBundledItemCost[]
}

export interface LolCatalogBundledItem {
	inventoryType: string
	/** @format int32 */
	itemId: number
	/** @format uint32 */
	quantity: number
	discountPrices: LolCatalogBundledItemCost[]
}

export interface LolCatalogBundledItemCost {
	currency: string
	/** @format int64 */
	cost: number
	/** @format float */
	discount?: number
	costType: string
}

export interface LolCatalogCatalogItem {
	/** @format int32 */
	itemId: number
	itemInstanceId: string
	active: boolean
	inventoryType: string
	inactiveDate: string
	prices: LolCatalogItemCost[]
	releaseDate: string
	sale?: LolCatalogSale
	subInventoryType?: string
	tags?: string[]
	iconUrl: string
	localizations: Record<string, LolCatalogItemLocalization>
	bundled?: LolCatalogBundled
	itemRequirements?: LolCatalogItemKey[]
	metadata?: LolCatalogItemMetadataEntry[]
	offerId?: string
}

export interface LolCatalogCatalogPluginItem {
	/** @format int32 */
	itemId: number
	itemInstanceId: string
	owned: boolean
	ownershipType?: LolCatalogInventoryOwnership
	inventoryType: string
	subInventoryType: string
	name: string
	subTitle: string
	description: string
	imagePath: string
	/** @format uint64 */
	purchaseDate: number
	/** @format uint64 */
	releaseDate: number
	/** @format uint64 */
	inactiveDate: number
	prices: LolCatalogCatalogPluginPrice[]
	tags?: string[]
	metadata?: LolCatalogItemMetadataEntry[]
	active: boolean
	sale?: LolCatalogSale
	questSkinInfo?: LolCatalogSkinLineInfo
	offerId?: string
}

export interface LolCatalogCatalogPluginItemAssets {
	splashPath: string
	iconPath: string
	tilePath: string
	emblems: LolCatalogChampionSkinEmblem[]
	colors: string[]
}

export interface LolCatalogCatalogPluginItemWithDetails {
	item: LolCatalogCatalogPluginItem
	/** @format uint32 */
	quantity: number
	requiredItems?: LolCatalogCatalogPluginItemWithDetails[]
	bundledItems?: LolCatalogCatalogPluginItemWithDetails[]
	minimumBundlePrices?: LolCatalogCatalogPluginPrice[]
	bundledDiscountPrices?: LolCatalogCatalogPluginPrice[]
	assets: LolCatalogCatalogPluginItemAssets
	metadata: LolCatalogItemMetadataEntry[]
}

export interface LolCatalogCatalogPluginPrice {
	currency: string
	/** @format int64 */
	cost: number
	costType?: string
	sale?: LolCatalogCatalogPluginRetailDiscount
}

export interface LolCatalogCatalogPluginRetailDiscount {
	startDate: string
	endDate: string
	/** @format float */
	discount?: number
	/** @format int64 */
	cost: number
}

export interface LolCatalogChampionSkinEmblem {
	name: string
	emblemPath: LolCatalogChampionSkinEmblemPath
	emblemPosition: LolCatalogChampionSkinEmblemPosition
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
	skins: LolCatalogGameDataChampionSkin[]
}

export interface LolCatalogGameDataChampionChroma {
	/** @format int64 */
	id: number
	name: string
	chromaPath: string
	colors: string[]
}

export interface LolCatalogGameDataChampionSkin {
	/** @format int64 */
	id: number
	name: string
	splashPath: string
	chromas: LolCatalogGameDataChampionChroma[]
	emblems: LolCatalogChampionSkinEmblem[]
	uncenteredSplashPath: string
	tilePath: string
	chromaPath: string
	questSkinInfo?: LolCatalogSkinLineInfo
	colors: string[]
}

export interface LolCatalogGameDataChampionSummary {
	/** @format int64 */
	id: number
	name: string
	squarePortraitPath: string
	skins: LolCatalogGameDataChampionSkin[]
}

export interface LolCatalogGameDataItemReference {
	/** @format int32 */
	itemId: number
	inventoryType: string
	contentId: string
}

export interface LolCatalogGameDataSkinAugment {
	/** @format int32 */
	itemId: number
	capType: string
	image: string
}

export interface LolCatalogGameDataStatstone {
	name: string
	contentId: string
	/** @format int32 */
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
	/** @format int32 */
	itemId: number
	contentId: string
}

export interface LolCatalogGameDataStatstoneSet {
	name: string
	statstones: LolCatalogGameDataStatstone[]
}

export interface LolCatalogGameDataStatstonesInfo {
	statstoneData: LolCatalogGameDataStatstoneSet[]
	packData: LolCatalogGameDataStatstonePack[]
	packIdToStatStonesIds: unknown
	seriesIdToStatStoneIds: unknown
	packIdToSubPackIds: unknown
	collectionIdToStatStoneIds: unknown
	packIdToChampIds: unknown
	champIdToPackIds: unknown
}

export interface LolCatalogGameDataSummonerEmote {
	/** @format int64 */
	id: number
	name: string
	inventoryIcon: string
	description: string
}

export interface LolCatalogGameDataSummonerIcon {
	/** @format int64 */
	id: number
	title: string
	imagePath: string
}

export interface LolCatalogGameDataWardSkin {
	/** @format int64 */
	id: number
	name: string
	description: string
	wardImagePath: string
}

export interface LolCatalogInventoryContent {
	/** @format int64 */
	itemId: number
	ownershipType: LolCatalogInventoryOwnership
	purchaseDate: string
}

export type LolCatalogInventoryOwnership = "F2P" | "LOYALTY" | "RENTED" | "OWNED"

export interface LolCatalogItemChoiceDetails {
	item: LolCatalogCatalogPluginItem
	backgroundImage: string
	contents: LolCatalogItemDetails[]
	discount: string
	/** @format int64 */
	fullPrice: number
	displayType: string
	metadata: unknown
}

export interface LolCatalogItemCost {
	currency: string
	/** @format int64 */
	cost: number
	/** @format float */
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
	/** @format int32 */
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
	prices: LolCatalogItemCost[]
}

export interface LolCatalogSkinLineDescriptionInfo {
	title: string
	description: string
	iconPath: string
}

export interface LolCatalogSkinLineInfo {
	name: string
	descriptionInfo: LolCatalogSkinLineDescriptionInfo[]
	splashPath: string
	tilePath: string
	collectionCardPath: string
	uncenteredSplashPath: string
	collectionDescription: string
	tiers: LolCatalogSkinLineTier[]
}

export interface LolCatalogSkinLineTier {
	/** @format int64 */
	id: number
	name: string
	/** @format int64 */
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
	/** @format int64 */
	id: number
	category: string
	legacy: boolean
	/** @format double */
	percentile: number
	/** @format int32 */
	position: number
	/** @format int32 */
	playersInLevel: number
	/** @format double */
	initValue: number
	previousLevel: string
	/** @format double */
	previousValue: number
	/** @format double */
	previousThreshold: number
	newLevels: string[]
	currentLevel: string
	/** @format double */
	currentValue: number
	/** @format double */
	currentThreshold: number
	/** @format int64 */
	currentLevelAchievedTime: number
	nextLevel: string
	/** @format double */
	nextThreshold: number
	friendsAtLevels: LolChallengesFriendLevelsData[]
	idListType: LolChallengesChallengeRequirementMappingName
	availableIds: number[]
	completedIds: number[]
}

export interface LolChallengesChallengeLevelData {
	level: string
}

export interface LolChallengesChallengePlayerData {
	id: string
	puuid: string
	source: LolChallengesSource
	tags: Record<string, string>
	totalPoints: LolChallengesChallengePoints
	categoryPoints: Record<string, LolChallengesChallengePoints>
	playerChallenges: LolChallengesChallengeData[]
	levelPoints: Record<string, number>
	preferences: LolChallengesChallengesPlayerPreferences
	/** @format uint64 */
	apexLaderUpdateTime: number
}

export interface LolChallengesChallengePoints {
	/** @format int32 */
	current: number
	/** @format int32 */
	max: number
	level: string
	/** @format double */
	percentile: number
	/** @format int32 */
	position: number
}

export type LolChallengesChallengeRequirementMappingName = "ITEM" | "CHAMPION_SKIN" | "CHAMPION" | "NONE"

export interface LolChallengesChallengeSeason {
	/** @format int32 */
	seasonId: number
	/** @format int64 */
	seasonStart: number
	/** @format int64 */
	seasonEnd: number
	isActive: boolean
}

export interface LolChallengesChallengeSignedUpdatePayload {
	tokensByType: Record<string, unknown>
}

export interface LolChallengesChallengeThreshold {
	/** @format double */
	value: number
	rewards: LolChallengesChallengeThresholdReward[]
	rewardGroupId: string
}

export interface LolChallengesChallengeThresholdReward {
	category: string
	id: string
	/** @format uint32 */
	quantity: number
}

export interface LolChallengesChallengeTitleData {
	/** @format int64 */
	challengeId: number
	challengeName: string
	challengeDescription: string
	level: string
	levelToIconPath: Record<string, string>
}

export interface LolChallengesChallengesPlayerPreferences {
	bannerAccent: string
	title: string
	challengeIds: number[]
	crestBorder: string
	/** @format int32 */
	prestigeCrestBorderLevel: number
	signedJWTPayload: LolChallengesChallengeSignedUpdatePayload
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
	/** @format uint64 */
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
	thresholds: Record<string, LolChallengesChallengeThreshold>
	leaderboard: boolean
	reverseDirection: boolean
	/** @format int64 */
	endTimestamp: number
	seasons: number[]
}

export interface LolChallengesGameDataChallengeTitle {
	name: string
	/** @format int32 */
	itemId: number
	titleAcquisitionType: string
	isPermanentTitle: boolean
	titleAcquisitionName: string
	titleRequirementDescription: string
	iconPath: string
	backgroundImagePath: string
}

export interface LolChallengesGameDataChallengesData {
	challenges: Record<string, LolChallengesGameDataChallengeConfig>
	titles: Record<string, LolChallengesGameDataChallengeTitle>
}

export interface LolChallengesGameflowGameData {
	queue: LolChallengesQueue
}

export type LolChallengesGameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"

export interface LolChallengesGameflowSession {
	phase: LolChallengesGameflowPhase
	gameData: LolChallengesGameflowGameData
}

export interface LolChallengesInventoryItem {
	/** @format int32 */
	itemId: number
	uuid: string
	purchaseDate: string
}

export interface LolChallengesLcuChallengeNotification {
	/** @format uint64 */
	id: number
	msgId: string
	level: string
	updateReason: string
	/** @format int64 */
	challengeId: number
	categoryChallenges: Record<string, LolChallengesUIChallenge>
	displayType: LolChallengesNotificationDisplayType
	challengeName: string
	iconPath: string
}

export interface LolChallengesLoginPlayerData {
	clientPlayerDataList: LolChallengesChallengePlayerData[]
	seasons: LolChallengesChallengeSeason[]
}

export type LolChallengesNotificationDisplayType = "VIGNETTE" | "TOAST" | "NONE"

export interface LolChallengesQueue {
	/** @format int32 */
	id: number
	gameMode: string
}

export interface LolChallengesSequenceEvent {
	name: string
	/** @format int32 */
	priority: number
}

export type LolChallengesSource = "NONE" | "SUMMONER_SERVICE" | "ETERNALS" | "LOOT" | "CLASH" | "RANKED_LEAGUES" | "CHAMPION_MASTERY" | "HONOR" | "CAP_INVENTORY" | "EOGD" | "CHALLENGES"

export interface LolChallengesUICategoryProgress {
	level: string
	category: string
	/** @format double */
	positionPercentile: number
	/** @format int32 */
	current: number
	/** @format int32 */
	max: number
}

export interface LolChallengesUIChallenge {
	/** @format int64 */
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
	/** @format double */
	previousValue: number
	/** @format double */
	currentValue: number
	/** @format double */
	currentThreshold: number
	/** @format double */
	nextThreshold: number
	/** @format int64 */
	pointsAwarded: number
	/** @format double */
	percentile: number
	/** @format int64 */
	currentLevelAchievedTime: number
	/** @format int32 */
	position: number
	/** @format int32 */
	playersInLevel: number
	isApex: boolean
	isCapstone: boolean
	gameModes: string[]
	friendsAtLevels: LolChallengesFriendLevelsData[]
	/** @format int64 */
	parentId: number
	parentName: string
	childrenIds: number[]
	/** @format int64 */
	capstoneGroupId: number
	capstoneGroupName: string
	source: string
	thresholds: Record<string, LolChallengesUIChallengeThreshold>
	levelToIconPath: Record<string, string>
	valueMapping: string
	hasLeaderboard: boolean
	isReverseDirection: boolean
	/** @format double */
	priority: number
	idListType: LolChallengesChallengeRequirementMappingName
	availableIds: number[]
	completedIds: number[]
	/** @format int64 */
	retireTimestamp: number
}

export interface LolChallengesUIChallengePenalty {
	reason: string
}

export interface LolChallengesUIChallengeReward {
	category: string
	/** @format uint64 */
	quantity: number
	name: string
	asset: string
}

export interface LolChallengesUIChallengeThreshold {
	/** @format double */
	value: number
	rewards: LolChallengesUIChallengeReward[]
}

export interface LolChallengesUIPlayerSummary {
	/** @format int64 */
	totalChallengeScore: number
	/** @format int64 */
	pointsUntilNextRank: number
	overallChallengeLevel: string
	/** @format double */
	positionPercentile: number
	isApex: boolean
	/** @format int32 */
	apexLeaderboardPosition: number
	title: LolChallengesUITitle
	bannerId: string
	crestId: string
	/** @format int32 */
	prestigeCrestBorderLevel: number
	categoryProgress: LolChallengesUICategoryProgress[]
	topChallenges: LolChallengesUIChallenge[]
	/** @format int64 */
	apexLadderUpdateTime: number
	selectedChallengesString: string
}

export interface LolChallengesUITitle {
	/** @format int32 */
	itemId: number
	contentId: string
	name: string
	purchaseDate: string
	titleAcquisitionType: string
	titleAcquisitionName?: string
	titleRequirementDescription?: string
	isPermanentTitle?: boolean
	challengeTitleData?: LolChallengesChallengeTitleData
	iconPath?: string
	backgroundImagePath?: string
}

export interface LolChallengesUserResource {
	lol: Record<string, string>
}

export interface LolChampSelectBenchChampion {
	/** @format int32 */
	championId: number
	isPriority: boolean
}

export interface LolChampSelectChampGridChampion {
	/** @format int32 */
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
	/** @format int32 */
	masteryPoints: number
	/** @format int32 */
	masteryLevel: number
	masteryChestGranted: boolean
	selectionStatus: LolChampSelectChampionSelection
	positionsFavorited: string[]
}

export interface LolChampSelectChampSelectAction {
	/** @format int64 */
	id: number
	/** @format int64 */
	actorCellId: number
	/** @format int32 */
	championId: number
	type: string
	completed: boolean
	isAllyAction: boolean
}

export interface LolChampSelectChampSelectBannedChampions {
	myTeamBans: number[]
	theirTeamBans: number[]
	/** @format int32 */
	numBans: number
}

export interface LolChampSelectChampSelectChatRoomDetails {
	multiUserChatId: string
	multiUserChatPassword: string
	mucJwtDto: LolChampSelectMucJwtDto
}

export interface LolChampSelectChampSelectMySelection {
	/** @format int32 */
	selectedSkinId?: number
	/** @format uint64 */
	"spell1Id"?: number
	/** @format uint64 */
	"spell2Id"?: number
	/** @format int64 */
	wardSkinId?: number
}

export interface LolChampSelectChampSelectPinDropNotification {
	pinDropSummoners: LolChampSelectChampSelectPinDropSummoner[]
	mapSide: string
}

export interface LolChampSelectChampSelectPinDropSummoner {
	/** @format uint64 */
	slotId: number
	position: string
	lane: string
	/** @format uint64 */
	lanePosition: number
	isLocalSummoner: boolean
	isPlaceholder: boolean
}

export interface LolChampSelectChampSelectPlayerSelection {
	/** @format int64 */
	cellId: number
	/** @format int32 */
	championId: number
	/** @format int32 */
	selectedSkinId: number
	/** @format int64 */
	wardSkinId: number
	/** @format uint64 */
	"spell1Id": number
	/** @format uint64 */
	"spell2Id": number
	/** @format int32 */
	team: number
	assignedPosition: string
	/** @format int32 */
	championPickIntent: number
	/** @format uint64 */
	summonerId: number
	puuid: string
	nameVisibilityType: string
	/** @format uint64 */
	obfuscatedSummonerId: number
	obfuscatedPuuid: string
}

export interface LolChampSelectChampSelectSession {
	/** @format uint64 */
	gameId: number
	timer: LolChampSelectChampSelectTimer
	chatDetails: LolChampSelectChampSelectChatRoomDetails
	myTeam: LolChampSelectChampSelectPlayerSelection[]
	theirTeam: LolChampSelectChampSelectPlayerSelection[]
	trades: LolChampSelectChampSelectTradeContract[]
	pickOrderSwaps: LolChampSelectChampSelectSwapContract[]
	actions: unknown[]
	bans: LolChampSelectChampSelectBannedChampions
	/** @format int64 */
	localPlayerCellId: number
	isSpectating: boolean
	allowSkinSelection: boolean
	allowDuplicatePicks: boolean
	allowBattleBoost: boolean
	/** @format int32 */
	boostableSkinCount: number
	allowRerolling: boolean
	/** @format uint64 */
	rerollsRemaining: number
	allowLockedEvents: boolean
	/** @format int32 */
	lockedEventIndex: number
	benchEnabled: boolean
	benchChampions: LolChampSelectBenchChampion[]
	/** @format int64 */
	counter: number
	/** @format int64 */
	recoveryCounter: number
	skipChampionSelect: boolean
	hasSimultaneousBans: boolean
	hasSimultaneousPicks: boolean
	isCustomGame: boolean
}

export interface LolChampSelectChampSelectSummoner {
	/** @format int64 */
	cellId: number
	/** @format uint64 */
	slotId: number
	"spell1IconPath": string
	"spell2IconPath": string
	assignedPosition: string
	/** @format uint64 */
	summonerId: number
	puuid: string
	nameVisibilityType: string
	/** @format uint64 */
	obfuscatedSummonerId: number
	obfuscatedPuuid: string
	activeActionType: string
	championIconStyle: string
	skinSplashPath: string
	actingBackgroundAnimationState: string
	statusMessageKey: string
	/** @format int32 */
	championId: number
	championName: string
	pickSnipedClass: string
	/** @format int32 */
	currentChampionVotePercentInteger: number
	/** @format int32 */
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
	/** @format int64 */
	tradeId: number
	/** @format int64 */
	swapId: number
	showTrades: boolean
	showSwaps: boolean
	showMuted: boolean
}

export interface LolChampSelectChampSelectSwapContract {
	/** @format int64 */
	id: number
	/** @format int64 */
	cellId: number
	state: LolChampSelectChampSelectSwapState
}

export interface LolChampSelectChampSelectSwapNotification {
	/** @format int64 */
	id: number
	/** @format int64 */
	requestorIndex: number
	/** @format int64 */
	responderIndex: number
	state: LolChampSelectChampSelectSwapState
	/** @format int64 */
	otherSummonerIndex: number
	initiatedByLocalPlayer: boolean
}

export type LolChampSelectChampSelectSwapState = "ACCEPTED" | "CANCELLED" | "DECLINED" | "SENT" | "RECEIVED" | "INVALID" | "BUSY" | "AVAILABLE"

export interface LolChampSelectChampSelectTimer {
	/** @format int64 */
	adjustedTimeLeftInPhase: number
	/** @format int64 */
	totalTimeInPhase: number
	phase: string
	isInfinite: boolean
	/** @format uint64 */
	internalNowInEpochMs: number
}

export interface LolChampSelectChampSelectTradeContract {
	/** @format int64 */
	id: number
	/** @format int64 */
	cellId: number
	state: LolChampSelectChampSelectTradeState
}

export interface LolChampSelectChampSelectTradeNotification {
	/** @format int64 */
	id: number
	/** @format int64 */
	responderIndex: number
	state: LolChampSelectChampSelectTradeState
	/** @format int64 */
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
	tiers: LolChampSelectCollectionsChampionQuestSkin[]
	productType?: LolChampSelectQuestSkinProductType
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

export interface LolChampSelectChampionSkinAugment {
	contentId: string
	overlays: LolChampSelectChampionSkinAugmentOverlays[]
}

export interface LolChampSelectChampionSkinAugmentOverlays {
	centeredLCOverlayPath: string
	socialCardLCOverlayPath: string
	tileLCOverlayPath: string
	uncenteredLCOverlayPath: string
}

export interface LolChampSelectChampionSkinAugments {
	augments: LolChampSelectChampionSkinAugment[]
}

export interface LolChampSelectCollectionsChampionChroma {
	/** @format int32 */
	championId: number
	chromaPath?: string
	/** @format int32 */
	id: number
	name: string
	ownership: LolChampSelectCollectionsOwnership
	disabled: boolean
	stillObtainable: boolean
	colors: string[]
}

export interface LolChampSelectCollectionsChampionMastery {
	/** @format int32 */
	championId: number
	/** @format int32 */
	championLevel: number
	/** @format int32 */
	championPoints: number
	chestGranted: boolean
}

export interface LolChampSelectCollectionsChampionMinimal {
	banVoPath: string
	chooseVoPath: string
	disabledQueues: string[]
	/** @format int32 */
	id: number
	name: string
	ownership: LolChampSelectCollectionsOwnership
	roles: string[]
	squarePortraitPath: string
	stingerSfxPath: string
	baseSplashPath: string
	freeToPlay: boolean
}

export interface LolChampSelectCollectionsChampionQuestSkin {
	/** @format int32 */
	championId: number
	chromaPath?: string
	/** @format int32 */
	id: number
	name: string
	ownership: LolChampSelectCollectionsOwnership
	isBase: boolean
	disabled: boolean
	stillObtainable: boolean
	splashPath: string
	tilePath: string
	skinAugments: LolChampSelectChampionSkinAugments
	/** @format uint64 */
	stage: number
	shortName: string
	splashVideoPath: string
}

export interface LolChampSelectCollectionsChampionSkin {
	/** @format int32 */
	championId: number
	chromaPath?: string
	/** @format int32 */
	id: number
	name: string
	ownership: LolChampSelectCollectionsOwnership
	isBase: boolean
	disabled: boolean
	stillObtainable: boolean
	splashPath: string
	tilePath: string
	skinAugments: LolChampSelectChampionSkinAugments
	chromas: LolChampSelectCollectionsChampionChroma[]
	questSkinInfo: LolChampSelectChampionQuestSkinInfo
	emblems: LolChampSelectCollectionsChampionSkinEmblem[]
	rarityGemPath: string
	splashVideoPath?: string
}

export interface LolChampSelectCollectionsChampionSkinEmblem {
	name: string
	emblemPath: LolChampSelectCollectionsChampionSkinEmblemPath
	positions: LolChampSelectCollectionsChampionSkinEmblemPosition
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
	/** @format int32 */
	championId: number
	chromaPath?: string
	/** @format int32 */
	id: number
	name: string
	ownership: LolChampSelectCollectionsOwnership
	isBase: boolean
	disabled: boolean
	stillObtainable: boolean
	splashPath: string
	tilePath: string
	skinAugments: LolChampSelectChampionSkinAugments
}

export interface LolChampSelectCollectionsOwnership {
	loyaltyReward: boolean
	xboxGPReward: boolean
	owned: boolean
	rental: LolChampSelectCollectionsRental
}

export interface LolChampSelectCollectionsRental {
	rented: boolean
}

export interface LolChampSelectGameDataSummonerSpell {
	/** @format uint64 */
	id: number
	iconPath: string
}

export interface LolChampSelectLegacyChampSelectAction {
	/** @format int64 */
	id: number
	/** @format int64 */
	actorCellId: number
	/** @format int32 */
	championId: number
	type: string
	completed: boolean
	isAllyAction: boolean
	isInProgress: boolean
	/** @format int32 */
	pickTurn: number
}

export interface LolChampSelectLegacyChampSelectBannedChampions {
	myTeamBans: number[]
	theirTeamBans: number[]
	/** @format int32 */
	numBans: number
}

export interface LolChampSelectLegacyChampSelectChatRoomDetails {
	multiUserChatId: string
	multiUserChatPassword: string
	mucJwtDto: LolChampSelectLegacyMucJwtDto
}

export interface LolChampSelectLegacyChampSelectMySelection {
	/** @format int32 */
	selectedSkinId?: number
	/** @format uint64 */
	"spell1Id"?: number
	/** @format uint64 */
	"spell2Id"?: number
	/** @format int64 */
	wardSkinId?: number
}

export interface LolChampSelectLegacyChampSelectPlayerSelection {
	/** @format int64 */
	cellId: number
	/** @format int32 */
	championId: number
	/** @format int32 */
	selectedSkinId: number
	/** @format int64 */
	wardSkinId: number
	/** @format uint64 */
	"spell1Id": number
	/** @format uint64 */
	"spell2Id": number
	/** @format int32 */
	team: number
	assignedPosition: string
	/** @format int32 */
	championPickIntent: number
	playerType: string
	/** @format uint64 */
	summonerId: number
	puuid: string
}

export interface LolChampSelectLegacyChampSelectSession {
	timer: LolChampSelectLegacyChampSelectTimer
	chatDetails: LolChampSelectLegacyChampSelectChatRoomDetails
	myTeam: LolChampSelectLegacyChampSelectPlayerSelection[]
	theirTeam: LolChampSelectLegacyChampSelectPlayerSelection[]
	trades: LolChampSelectLegacyChampSelectTradeContract[]
	actions: unknown[]
	bans: LolChampSelectLegacyChampSelectBannedChampions
	/** @format int64 */
	localPlayerCellId: number
	isSpectating: boolean
	allowSkinSelection: boolean
	allowBattleBoost: boolean
	allowRerolling: boolean
	/** @format uint64 */
	rerollsRemaining: number
	hasSimultaneousBans: boolean
	hasSimultaneousPicks: boolean
	isCustomGame: boolean
}

export interface LolChampSelectLegacyChampSelectTimer {
	/** @format int64 */
	adjustedTimeLeftInPhase: number
	/** @format int64 */
	totalTimeInPhase: number
	phase: string
	isInfinite: boolean
	/** @format uint64 */
	internalNowInEpochMs: number
}

export interface LolChampSelectLegacyChampSelectTradeContract {
	/** @format int64 */
	id: number
	/** @format int64 */
	cellId: number
	state: LolChampSelectLegacyChampSelectTradeState
}

export type LolChampSelectLegacyChampSelectTradeState = "SENT" | "RECEIVED" | "INVALID" | "BUSY" | "AVAILABLE"

export interface LolChampSelectLegacyChampionSelectPreferences {
	skins: Record<string, number>
	spells: Record<string, unknown>
}

export interface LolChampSelectLegacyCollectionsChampion {
	disabledQueues: string[]
	freeToPlay: boolean
	/** @format int32 */
	id: number
	ownership: LolChampSelectLegacyCollectionsOwnership
	active: boolean
}

export interface LolChampSelectLegacyCollectionsOwnership {
	loyaltyReward: boolean
	xboxGPReward: boolean
	owned: boolean
	rental: LolChampSelectLegacyCollectionsRental
}

export interface LolChampSelectLegacyCollectionsRental {
	rented: boolean
}

export interface LolChampSelectLegacyGameflowGameClient {
	running: boolean
	visible: boolean
}

export interface LolChampSelectLegacyGameflowGameData {
	queue: LolChampSelectLegacyQueue
}

export interface LolChampSelectLegacyGameflowGameDodge {
	state: LolChampSelectLegacyGameflowGameDodgeState
	dodgeIds: number[]
}

export type LolChampSelectLegacyGameflowGameDodgeState = "TournamentDodged" | "StrangerDodged" | "PartyDodged" | "Invalid"

export type LolChampSelectLegacyGameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"

export interface LolChampSelectLegacyGameflowSession {
	phase: LolChampSelectLegacyGameflowPhase
	gameClient: LolChampSelectLegacyGameflowGameClient
	gameData: LolChampSelectLegacyGameflowGameData
}

export interface LolChampSelectLegacyInventoryItemWithPayload {
	/** @format int64 */
	itemId: number
	payload: unknown
}

export interface LolChampSelectLegacyLobbyStatus {
	/** @format int32 */
	queueId: number
	isCustom: boolean
	isLeader: boolean
	isSpectator: boolean
	allowedPlayAgain: boolean
	memberSummonerIds: number[]
}

export interface LolChampSelectLegacyLoginSession {
	state: LolChampSelectLegacyLoginSessionStates
	/** @format uint64 */
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
	currentLobbyStatus?: LolChampSelectLegacyLobbyStatus
	lastQueuedLobbyStatus?: LolChampSelectLegacyLobbyStatus
}

export interface LolChampSelectLegacyQueue {
	gameTypeConfig: LolChampSelectLegacyQueueGameTypeConfig
	areFreeChampionsAllowed: boolean
}

export interface LolChampSelectLegacyQueueGameTypeConfig {
	/** @format int32 */
	maxAllowableBans: number
	allowTrades: boolean
	battleBoost: boolean
	name: string
}

export interface LolChampSelectLegacySettingCategoryResource {
	/** @format int32 */
	schemaVersion: number
	data: LolChampSelectLegacyChampionSelectPreferences
}

export interface LolChampSelectLegacySummoner {
	/** @format uint64 */
	summonerId: number
	/** @format uint32 */
	summonerLevel: number
}

export interface LolChampSelectLegacyTeamBoost {
	/** @format int64 */
	summonerId: number
	puuid: string
	skinUnlockMode: string
	/** @format int64 */
	price: number
	/** @format int64 */
	ipReward: number
	/** @format int64 */
	ipRewardForPurchaser: number
	availableSkins: number[]
	unlocked: boolean
}

export interface LolChampSelectLoginSession {
	puuid: string
	/** @format uint64 */
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
	/** @format uint64 */
	summonerId: number
	obfuscatedPuuid: string
	/** @format uint64 */
	obfuscatedSummonerId: number
}

export type LolChampSelectQuestSkinProductType = "kTieredSkin" | "kQuestSkin"

export interface LolChampSelectSettingsResource {
	data: unknown
	/** @format int64 */
	schemaVersion: number
}

export interface LolChampSelectSfxNotification {
	/** @format int64 */
	delayMillis: number
	path: string
	eventType: string
}

export interface LolChampSelectSkinSelectorChildSkin {
	/** @format int32 */
	championId: number
	chromaPreviewPath?: string
	/** @format int32 */
	id: number
	name: string
	ownership: LolChampSelectCollectionsOwnership
	isBase: boolean
	disabled: boolean
	stillObtainable: boolean
	isChampionUnlocked: boolean
	splashPath: string
	splashVideoPath?: string
	tilePath: string
	unlocked: boolean
	skinAugments: Record<string, LolChampSelectChampionSkinAugmentOverlays>
	/** @format int32 */
	parentSkinId: number
	colors: string[]
	/** @format uint64 */
	stage: number
	shortName: string
}

export interface LolChampSelectSkinSelectorInfo {
	/** @format int32 */
	selectedSkinId: number
	isSkinGrantedFromBoost: boolean
	/** @format int32 */
	selectedChampionId: number
	championName: string
	skinSelectionDisabled: boolean
	showSkinSelector: boolean
}

export interface LolChampSelectSkinSelectorSkin {
	/** @format int32 */
	championId: number
	chromaPreviewPath?: string
	/** @format int32 */
	id: number
	name: string
	ownership: LolChampSelectCollectionsOwnership
	isBase: boolean
	disabled: boolean
	stillObtainable: boolean
	isChampionUnlocked: boolean
	splashPath: string
	splashVideoPath?: string
	tilePath: string
	unlocked: boolean
	skinAugments: Record<string, LolChampSelectChampionSkinAugmentOverlays>
	childSkins: LolChampSelectSkinSelectorChildSkin[]
	emblems: LolChampSelectCollectionsChampionSkinEmblem[]
	rarityGemPath: string
	groupSplash: string
	productType?: LolChampSelectQuestSkinProductType
}

export interface LolChampSelectTeamBoost {
	/** @format int64 */
	summonerId: number
	puuid: string
	skinUnlockMode: string
	/** @format int64 */
	price: number
	/** @format int64 */
	ipReward: number
	/** @format int64 */
	ipRewardForPurchaser: number
	availableSkins: number[]
	unlocked: boolean
}

export interface LolChampionMasteryAllChampionMasterySetReward {
	championMasteries: LolChampionMasteryChampionMastery[]
	championSet: LolChampionMasteryChampionSet
	championSetRewards: Record<string, LolChampionMasterySetRewardEntry>
	seasonMilestoneRequireAndRewards: Record<string, LolChampionMasterySeasonMilestoneRequireAndRewards>
	newChampionNextLevel: LolChampionMasteryLevelMark
	/** @format int32 */
	totalScore: number
}

export interface LolChampionMasteryChampionMastery {
	puuid: string
	/** @format int32 */
	championId: number
	/** @format int32 */
	championLevel: number
	/** @format int32 */
	championPoints: number
	/** @format uint64 */
	lastPlayTime: number
	/** @format int32 */
	championPointsSinceLastLevel: number
	/** @format int32 */
	championPointsUntilNextLevel: number
	/** @format int32 */
	markRequiredForNextLevel: number
	chestGranted: boolean
	/** @format int32 */
	tokensEarned: number
	/** @format int32 */
	championSeasonMilestone: number
	milestoneGrades: string[]
	nextSeasonMilestone: LolChampionMasterySeasonMilestoneRequireAndRewards
	highestGrade: string
}

export interface LolChampionMasteryChampionMasteryChangeNotification {
	/** @format int64 */
	gameId: number
	puuid: string
	/** @format int32 */
	championId: number
	/** @format int32 */
	championLevel: number
	/** @format int32 */
	championPointsBeforeGame: number
	/** @format int32 */
	championPointsGained: number
	/** @format int32 */
	championPointsGainedIndividualContribution: number
	/** @format int32 */
	bonusChampionPointsGained: number
	playerGrade: string
	/** @format int32 */
	championPointsSinceLastLevelBeforeGame: number
	/** @format int32 */
	championPointsUntilNextLevelBeforeGame: number
	/** @format int32 */
	championPointsUntilNextLevelAfterGame: number
	championLevelUp: boolean
	/** @format int32 */
	score: number
	levelUpList: LolChampionMasteryChampionMasteryMini[]
	memberGrades: LolChampionMasteryChampionMasteryGrade[]
	win: boolean
	/** @format int32 */
	mapId: number
	/** @format int32 */
	tokensEarned: number
	tokenEarnedAfterGame: boolean
	/** @format int32 */
	markRequiredForNextLevel: number
	/** @format int32 */
	championSeasonMilestone: number
	championSeasonMilestoneUp: boolean
	milestoneGrades: string[]
	seasonMilestone: LolChampionMasterySeasonMilestoneRequireAndRewards
}

export interface LolChampionMasteryChampionMasteryGrade {
	puuid: string
	/** @format int32 */
	championId: number
	grade: string
}

export interface LolChampionMasteryChampionMasteryMini {
	puuid: string
	/** @format int32 */
	championId: number
	/** @format int32 */
	championLevel: number
}

export interface LolChampionMasteryChampionMasteryRewardGrantNotification {
	id: string
	/** @format int64 */
	gameId: number
	puuid: string
	/** @format int32 */
	championId: number
	playerGrade: string
	messageKey: string
}

export interface LolChampionMasteryChampionSet {
	champions: number[]
	/** @format int32 */
	totalMilestone: number
	completed: boolean
}

export interface LolChampionMasteryLevelMark {
	/** @format int32 */
	level: number
	/** @format int32 */
	championPoints: number
	/** @format int32 */
	marks: number
}

export interface LolChampionMasteryLoginSession {
	state: LolChampionMasteryLoginSessionStates
	/** @format uint64 */
	summonerId: number
	puuid: string
	connected: boolean
}

export type LolChampionMasteryLoginSessionStates = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"

export interface LolChampionMasteryRewardConfigurationEntry {
	rewardValue: string
	/** @format int32 */
	maximumReward: number
}

export interface LolChampionMasterySeasonMilestoneRequireAndRewards {
	requireGradeCounts: Record<string, number>
	/** @format uint16 */
	rewardMarks: number
	bonus: boolean
	rewardConfig: LolChampionMasteryRewardConfigurationEntry
}

export interface LolChampionMasterySetRewardEntry {
	id: string
	type: string
}

export interface LolChampionMasteryTopChampionMasteries {
	puuid: string
	/** @format uint64 */
	summonerId: number
	/** @format uint64 */
	score: number
	masteries: LolChampionMasteryChampionMastery[]
}

export interface LolChampionMasteryUIAllChampionMasteryWithSets {
	championMasteries: LolChampionMasteryChampionMastery[]
	championSet: LolChampionMasteryChampionSet
	championSetRewards: Record<string, LolChampionMasterySetRewardEntry>
	seasonMilestoneRequireAndRewards: Record<string, LolChampionMasterySeasonMilestoneRequireAndRewards>
	defaultChampionMastery: LolChampionMasteryChampionMastery
	customRewards: LolChampionMasteryUIChampionMasteryCustomReward[]
	/** @format int32 */
	totalScore: number
	championCountByMilestone: Record<string, number>
}

export interface LolChampionMasteryUIChampionMasteryCustomReward {
	type: string
	/** @format int32 */
	level: number
	rewardValue: string
	/** @format int32 */
	quantity: number
}

export interface LolChampionsChampionQuestSkinInfo {
	name: string
	descriptionInfo: LolChampionsQuestSkinDescriptionInfo[]
	splashPath: string
	uncenteredSplashPath: string
	tilePath: string
	collectionCardPath: string
	collectionDescription: string
	tiers: LolChampionsCollectionsChampionQuestSkin[]
	productType?: LolChampionsQuestSkinProductType
}

export interface LolChampionsCollectionsChampion {
	alias: string
	title: string
	banVoPath: string
	chooseVoPath: string
	disabledQueues: string[]
	/** @format int32 */
	id: number
	name: string
	ownership: LolChampionsCollectionsOwnership
	/** @format uint64 */
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
	passive: LolChampionsCollectionsChampionSpell
	skins: LolChampionsCollectionsChampionSkin[]
	spells: LolChampionsCollectionsChampionSpell[]
	tacticalInfo: LolChampionsCollectionsChampionTacticalInfo
}

export interface LolChampionsCollectionsChampionChroma {
	/** @format int32 */
	championId: number
	chromaPath?: string
	/** @format int32 */
	id: number
	name: string
	ownership: LolChampionsCollectionsOwnership
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
	/** @format int32 */
	id: number
	name: string
	ownership: LolChampionsCollectionsOwnership
	/** @format uint64 */
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
	/** @format uint32 */
	championsOwned: number
	/** @format uint32 */
	championsRented: number
	/** @format uint32 */
	championsFreeToPlay: number
	/** @format uint32 */
	championsLoyaltyReward: number
	/** @format uint32 */
	championsXboxGPReward: number
}

export interface LolChampionsCollectionsChampionQuestSkin {
	/** @format int32 */
	championId: number
	chromaPath?: string
	/** @format int32 */
	id: number
	name: string
	ownership: LolChampionsCollectionsOwnership
	isBase: boolean
	disabled: boolean
	stillObtainable: boolean
	lastSelected: boolean
	splashPath: string
	tilePath: string
	skinAugments: LolChampionsCollectionsChampionSkinAugments
	/** @format uint64 */
	stage: number
	description: string
	uncenteredSplashPath: string
	loadScreenPath: string
	shortName: string
	splashVideoPath: string
	collectionSplashVideoPath: string
}

export interface LolChampionsCollectionsChampionSkin {
	/** @format int32 */
	championId: number
	chromaPath?: string
	/** @format int32 */
	id: number
	name: string
	ownership: LolChampionsCollectionsOwnership
	isBase: boolean
	disabled: boolean
	stillObtainable: boolean
	lastSelected: boolean
	splashPath: string
	tilePath: string
	skinAugments: LolChampionsCollectionsChampionSkinAugments
	chromas: LolChampionsCollectionsChampionChroma[]
	questSkinInfo: LolChampionsChampionQuestSkinInfo
	emblems: LolChampionsCollectionsChampionSkinEmblem[]
	uncenteredSplashPath: string
	loadScreenPath: string
	rarityGemPath: string
	splashVideoPath?: string
	collectionSplashVideoPath?: string
	skinType?: string
	featuresText?: string
}

export interface LolChampionsCollectionsChampionSkinAugment {
	contentId: string
	overlays: LolChampionsCollectionsChampionSkinAugmentOverlays[]
}

export interface LolChampionsCollectionsChampionSkinAugmentOverlays {
	centeredLCOverlayPath: string
	socialCardLCOverlayPath: string
	tileLCOverlayPath: string
	uncenteredLCOverlayPath: string
}

export interface LolChampionsCollectionsChampionSkinAugments {
	augments: LolChampionsCollectionsChampionSkinAugment[]
}

export interface LolChampionsCollectionsChampionSkinEmblem {
	name: string
	emblemPath: LolChampionsCollectionsChampionSkinEmblemPath
	positions: LolChampionsCollectionsChampionSkinEmblemPosition
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
	/** @format int32 */
	championId: number
	chromaPath?: string
	/** @format int32 */
	id: number
	name: string
	ownership: LolChampionsCollectionsOwnership
	isBase: boolean
	disabled: boolean
	stillObtainable: boolean
	lastSelected: boolean
	splashPath: string
	tilePath: string
	skinAugments: LolChampionsCollectionsChampionSkinAugments
}

export interface LolChampionsCollectionsChampionSpell {
	name: string
	description: string
}

export interface LolChampionsCollectionsChampionTacticalInfo {
	/** @format uint32 */
	style: number
	/** @format uint32 */
	difficulty: number
	damageType: string
}

export interface LolChampionsCollectionsOwnership {
	loyaltyReward: boolean
	xboxGPReward: boolean
	owned: boolean
	rental: LolChampionsCollectionsRental
}

export interface LolChampionsCollectionsRental {
	/** @format uint64 */
	endDate: number
	/** @format uint64 */
	purchaseDate: number
	/** @format int32 */
	winCountRemaining: number
	rented: boolean
}

export interface LolChampionsGameDataChampion {
	/** @format int32 */
	id: number
	alias: string
	title: string
	banVoPath: string
	chooseVoPath: string
	name: string
	squarePortraitPath: string
	stingerSfxPath: string
	passive: LolChampionsGameDataChampionSpell
	roles: string[]
	skins: LolChampionsGameDataChampionSkin[]
	spells: LolChampionsGameDataChampionSpell[]
	tacticalInfo: LolChampionsGameDataChampionTacticalInfo
}

export interface LolChampionsGameDataChampionChroma {
	/** @format int32 */
	id: number
	colors: string[]
	chromaPath: string
}

export interface LolChampionsGameDataChampionQuestSkin {
	/** @format int32 */
	id: number
	name: string
	/** @format uint64 */
	stage: number
	description: string
	splashPath: string
	splashVideoPath: string
	collectionSplashVideoPath: string
	uncenteredSplashPath: string
	tilePath: string
	loadScreenPath: string
	shortName: string
	skinAugments: LolChampionsCollectionsChampionSkinAugments
}

export interface LolChampionsGameDataChampionSkin {
	/** @format int32 */
	id: number
	name: string
	chromas: LolChampionsGameDataChampionChroma[]
	questSkinInfo: LolChampionsGameDataQuestSkinInfo
	emblems: LolChampionsCollectionsChampionSkinEmblem[]
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
	skinAugments: LolChampionsCollectionsChampionSkinAugments
}

export interface LolChampionsGameDataChampionSpell {
	name: string
	description: string
}

export interface LolChampionsGameDataChampionSummary {
	/** @format int32 */
	id: number
}

export interface LolChampionsGameDataChampionTacticalInfo {
	/** @format uint32 */
	style: number
	/** @format uint32 */
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
	descriptionInfo: LolChampionsGameDataQuestSkinDescriptionInfo[]
	splashPath: string
	uncenteredSplashPath: string
	tilePath: string
	collectionCardPath: string
	collectionDescription: string
	tiers: LolChampionsGameDataChampionQuestSkin[]
	productType?: LolChampionsQuestSkinProductType
}

export interface LolChampionsInventoryItemWithPayload {
	uuid: string
	/** @format int32 */
	itemId: number
	inventoryType: string
	purchaseDate: string
	/** @format uint64 */
	quantity: number
	expirationDate: string
	"f2p": boolean
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
	state: LolChampionsLoginSessionStates
	/** @format uint64 */
	summonerId: number
	connected: boolean
}

export type LolChampionsLoginSessionStates = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"

export type LolChampionsLoyaltyStatus = "DISABLED" | "REVOKE" | "CHANGE" | "EXPIRY" | "REWARDS_GRANT" | "LEGACY"

export interface LolChampionsLoyaltyStatusNotification {
	status: LolChampionsLoyaltyStatus
	reloadInventory: boolean
}

export interface LolChampionsPlayerNotification {
	backgroundUrl: string
	critical: boolean
	data: Record<string, string>
	detailKey: string
	iconUrl: string
	/** @format uint64 */
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
	/** @format uint64 */
	summonerId: number
	/** @format uint32 */
	summonerLevel: number
}

export type LolChatAccountState = "dnd" | "chat" | "away" | "mobile" | "offline"

export interface LolChatActiveConversationResource {
	id: string
}

export interface LolChatAuthResourceRsoAccessToken {
	token: string
	scopes: string[]
	/** @format uint64 */
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
	blocked: LolChatBlocked[]
}

export interface LolChatBlockedPlayerResource {
	/** @format uint64 */
	summonerId: number
	/** @format int32 */
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
	/** @format int32 */
	championId: number
	/** @format int32 */
	selectedSkinIndex: number
}

export interface LolChatChatDomainConfig {
	"P2PDomainName"?: string
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
	type: LolChatMessageType
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
	messages: LolChatChatMessage[]
}

export interface LolChatChatPlatformLoginSession {
	state: LolChatChatPlatformLoginSessionState
	/** @format uint64 */
	accountId: number
	username: string
	userAuthToken: string
	gasToken: unknown
	/** @format uint64 */
	summonerId?: number
	idToken: string
	puuid: string
	isNewPlayer: boolean
}

export type LolChatChatPlatformLoginSessionState = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"

export interface LolChatChatServiceDynamicClientConfig {
	LcuSocial?: LolChatLcuSocialConfig
	ChatDomain?: LolChatChatDomainConfig
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
	/** @format uint32 */
	chatWindowDockedHeight: number
	sortBy: string
	"chat-status-message": string
	"closed-conversations": Record<string, number>
	"hidden-conversations": Record<string, number>
	"muted-conversations": Record<string, number>
	"roster-group-collapsed": Record<string, boolean>
	chatWindow: LolChatChatWindowSettings
}

export interface LolChatChatSummoner {
	/** @format uint64 */
	summonerId: number
	/** @format int32 */
	profileIconId: number
	displayName: string
	/** @format uint32 */
	summonerLevel: number
	puuid: string
	unnamed: boolean
	gameName: string
	tagLine: string
}

export interface LolChatChatWindowSettings {
	detached: boolean
	/** @format uint32 */
	height: number
	/** @format int32 */
	left: number
	/** @format int32 */
	top: number
	/** @format uint32 */
	width: number
}

export interface LolChatCidBody {
	cid: string
}

export type LolChatConfigReadinessEnum = "Disabled" | "Ready" | "NotReady"

export interface LolChatConfigStatus {
	readiness: LolChatConfigReadinessEnum
}

export type LolChatConfigType = "player" | "public"

export interface LolChatContentCookies {
	content_id: string
	content_path: string
	cookies: LolChatcookie[]
}

export interface LolChatConversation {
	cid: string
	type: string
	mid: string
	/** @format uint64 */
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
	conversations: LolChatConversation[]
}

export interface LolChatConversationMessageResource {
	id: string
	type: string
	/** @format uint64 */
	fromSummonerId: number
	fromId: string
	fromPid: string
	/** @format uint64 */
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
	/** @format uint64 */
	unreadMessageCount: number
	lastMessage?: LolChatConversationMessageResource
	mucJwtDto: LolChatMucJwtDto
}

export interface LolChatConversationUpdate {
	cid: string
	muted: boolean
	hidden: boolean
}

export interface LolChatDebugResource {
	isXMPPLoggingEnabled?: boolean
	/** @format uint32 */
	keepAliveInterval?: number
	/** @format uint32 */
	asyncWaitInterval?: number
	/** @format uint32 */
	minReconnectInterval?: number
	/** @format uint32 */
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
	/** @format uint64 */
	summonerId: number
	isLocalPlayer: boolean
}

export interface LolChatEndOfGameStats {
	teams: LolChatEndOfGameTeam[]
	localPlayer: LolChatEndOfGamePlayer
}

export interface LolChatEndOfGameTeam {
	players: LolChatEndOfGamePlayer[]
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
	errors: LolChatError[]
}

export interface LolChatErrorResource {
	/** @format uint64 */
	id: number
	from: string
	/** @format uint64 */
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
	/** @format uint32 */
	numFriends: number
	/** @format uint32 */
	numFriendsOnline: number
	/** @format uint32 */
	numFriendsAvailable: number
	/** @format uint32 */
	numFriendsAway: number
	/** @format uint32 */
	numFriendsInQueue: number
	/** @format uint32 */
	numFriendsInChampSelect: number
	/** @format uint32 */
	numFriendsInGame: number
	/** @format uint32 */
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
	groups: LolChatFriendGroup[]
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
	friends: LolChatFriend[]
}

export interface LolChatFriendRequest {
	pid: string
	name: string
	gameName: string
	tagLine: string
	subscription: LolChatFriendSubscriptionType
	note: string
	puuid: string
	region: string
}

export interface LolChatFriendRequestAdd {
	pid: string
	name: string
	gameName: string
	tagLine: string
	note: string
	puuid: string
	region: string
}

export type LolChatFriendRequestDirection = "both" | "out" | "in"

export interface LolChatFriendRequestList {
	requests: LolChatFriendRequest[]
}

export interface LolChatFriendRequestResource {
	/** @format uint64 */
	summonerId: number
	/** @format int32 */
	icon: number
	id: string
	name: string
	pid: string
	puuid: string
	gameName: string
	tagLine: string
	note: string
	direction: LolChatFriendRequestDirection
}

export interface LolChatFriendResource {
	/** @format uint64 */
	summonerId: number
	id: string
	name: string
	pid: string
	puuid: string
	gameName: string
	gameTag: string
	/** @format int32 */
	icon: number
	availability: string
	platformId: string
	patchline: string
	product: string
	productName: string
	summary: string
	/** @format uint64 */
	time: number
	statusMessage: string
	note: string
	lastSeenOnlineTimestamp?: string
	"isP2PConversationMuted": boolean
	/** @format uint32 */
	groupId: number
	/** @format uint32 */
	displayGroupId: number
	groupName: string
	displayGroupName: string
	lol: Record<string, string>
}

export type LolChatFriendSubscriptionType = "pending_in" | "pending_out"

export interface LolChatGameDataChampionSummary {
	/** @format int32 */
	id: number
	alias: string
}

export interface LolChatGameflowGameData {
	/** @format uint64 */
	gameId: number
	queue: LolChatQueue
	teamOne: LolChatTeamPlayerEntry[]
	teamTwo: LolChatTeamPlayerEntry[]
	playerChampionSelections: LolChatChampSelection[]
}

export interface LolChatGameflowGameMap {
	/** @format int64 */
	id: number
}

export type LolChatGameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"

export interface LolChatGameflowSession {
	phase: LolChatGameflowPhase
	gameData: LolChatGameflowGameData
	map: LolChatGameflowGameMap
}

export interface LolChatGroupResource {
	/** @format uint32 */
	id: number
	name: string
	isMetaGroup: boolean
	isLocalized: boolean
	/** @format int32 */
	priority: number
	collapsed: boolean
}

export interface LolChatIdBody {
	id: string
}

export interface LolChatLcuSocialConfig {
	ForceChatFilter: boolean
	/** @format uint64 */
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
	/** @format uint64 */
	id: number
	isOwner: boolean
}

export interface LolChatLobbyPlayerStatus {
	currentLobbyStatus?: LolChatLobbyStatus
	lastQueuedLobbyStatus?: LolChatLobbyStatus
}

export interface LolChatLobbyStatus {
	/** @format int32 */
	queueId: number
	isCustom: boolean
	isPracticeTool: boolean
	isLeader: boolean
	memberSummonerIds: number[]
	customSpectatorPolicy: LolChatQueueCustomGameSpectatorPolicy
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
	messages: LolChatMessage[]
}

export interface LolChatMessagePost {
	cid: string
	message: string
	type: LolChatMessageType
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
	state: LolChatAccountState
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
	/** @format uint64 */
	time?: number
	privateJwt?: string
	private?: string
}

export interface LolChatMultiGamePresenceList {
	presences: LolChatMultiGamePresence[]
}

export interface LolChatMultiGamePresenceSharedPayload {
	product?: string
	patchline?: string
	platform?: string
	location?: string
	details?: string
	actor?: string
	/** @format uint64 */
	time?: number
}

export interface LolChatMultiGamePresenceUpdate {
	state: LolChatAccountState
	msg?: string
	privateJwt?: string
	private?: string
	sharedJwt?: string
	shared?: LolChatMultiGamePresenceSharedPayload
}

export type LolChatMuteType = "SYSTEM_MUTE" | "SETTINGS_MUTE" | "PLAYER_MUTE"

export interface LolChatMutedPlayerInfo {
	puuid: string
	/** @format uint64 */
	summonerId: number
	obfuscatedPuuid: string
	/** @format uint64 */
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
	participants: LolChatParticipant[]
}

export interface LolChatPatchlineMetadata {
	product_id: string
	id: string
	content_paths: Record<string, string>
	content_cookies: LolChatContentCookies[]
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
	/** @format uint64 */
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
	patchlines: Record<string, LolChatPatchlineMetadata>
}

export interface LolChatProductMetadataMap {
	products: Record<string, LolChatProductMetadata>
}

export interface LolChatPuuidBody {
	puuid: string
}

export interface LolChatQueue {
	/** @format int32 */
	id: number
	type: string
	gameMode: string
	gameTypeConfig: LolChatQueueGameTypeConfig
}

export type LolChatQueueCustomGameSpectatorPolicy = "AllAllowed" | "FriendsAllowed" | "LobbyAllowed" | "NotAllowed"

export interface LolChatQueueGameTypeConfig {
	/** @format int64 */
	id: number
	name: string
}

export interface LolChatRankedQueueStats {
	queueType: LolChatLeagueQueueType
	isProvisional: boolean
	tier: string
	division: LolChatLeagueDivision
	/** @format int32 */
	wins: number
	/** @format int32 */
	games: number
}

export interface LolChatRankedStats {
	highestRankedEntry?: LolChatRankedQueueStats
	/** @format int32 */
	rankedRegaliaLevel: number
	highestPreviousSeasonEndTier: string
	highestPreviousSeasonEndDivision: LolChatLeagueDivision
}

export interface LolChatRsoAuthorization {
	currentPlatformId: string
	/** @format uint64 */
	currentAccountId: number
	subject: string
}

export interface LolChatSanitizeRequest {
	texts: string[]
	/** @format uint32 */
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
	state: LolChatChatSessionState
	pid: string
	name: string
	game_name: string
	game_tag: string
	resource: string
	loaded: boolean
}

export interface LolChatSessionResource {
	sessionState: LolChatSessionState
	/** @format uint32 */
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
	/** @format uint64 */
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
	results: LolChatTranslateResult[]
}

export interface LolChatTranslateResult {
	found: boolean
	key: string
	product_id: string
	value: string
}

export interface LolChatUserResource {
	/** @format uint64 */
	summonerId: number
	id: string
	name: string
	pid: string
	puuid: string
	/** @format uint64 */
	obfuscatedSummonerId: number
	gameName: string
	gameTag: string
	/** @format int32 */
	icon: number
	availability: string
	platformId: string
	patchline: string
	product: string
	productName: string
	summary: string
	/** @format uint64 */
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
	/** @format int64 */
	expires?: number
}

export interface LolClashAlias {
	gameName: string
	tagLine: string
}

export interface LolClashBlockedPlayerResource {
	/** @format uint64 */
	summonerId: number
	name: string
	gameName: string
	gameTag: string
}

export interface LolClashBracket {
	/** @format int64 */
	tournamentId: number
	/** @format int64 */
	id: number
	/** @format int32 */
	size: number
	matches: BracketMatch[]
	rosters: BracketRoster[]
	/** @format int32 */
	version: number
	/** @format int32 */
	period: number
	isComplete: boolean
}

export interface LolClashBracketReadyNotification {
	/** @format int64 */
	tournamentId: number
	/** @format int64 */
	bracketId: number
}

export interface LolClashBracketUpdateNotification {
	/** @format int64 */
	tournamentId: number
	/** @format int64 */
	bracketId: number
	/** @format int64 */
	currentMatchId: number
	/** @format int64 */
	winnerRosterId: number
	notifyReason: LolClashRosterNotifyReason
}

export interface LolClashChangeIconRequest {
	/** @format int32 */
	iconId: number
	/** @format int32 */
	iconColorId: number
}

export interface LolClashChangeNameRequest {
	name: string
}

export interface LolClashClashConfig {
	Visibility: LolClashClashVisibility
	EnabledState: LolClashClashState
	DisabledReason: string
	/** @format uint64 */
	EstimatedEnableTimeMillis: number
	IconConfig: string
	/** @format int32 */
	HonorLevelRequired: number
	IsPlaymodeRestrictionEnabled: boolean
	/** @format int32 */
	VoiceRetryDelaySeconds: number
	/** @format int32 */
	VoiceRetryCountLimit: number
	/** @format int32 */
	VoiceNoDelayAutoStartSeconds: number
	/** @format int32 */
	VoiceRandomStartMinSeconds: number
	/** @format int32 */
	VoiceRandomStartMaxSeconds: number
	/** @format int32 */
	VoiceEobQuitDelaySeconds: number
	/** @format int32 */
	RewardGrantRetryIntervalSeconds: number
	/** @format int32 */
	MaxTimeBeforeLockinNotifySeconds: number
	/** @format int32 */
	HonorRefreshRetrySeconds: number
	EventSendingEnabled: boolean
	DisabledEvents: string[]
	/** @format uint32 */
	MinClashSummonerLevel: number
	/** @format uint32 */
	MinClashNotificationsSummonerLevel: number
	CheckPartiesRegistration: boolean
}

export interface LolClashClashDisabledConfig {
	disabledReason: string
	/** @format uint64 */
	estimatedEnableTimeMillis: number
}

export interface LolClashClashSettingCategory {
	simpleStateFlagIds?: string[]
}

export type LolClashClashState = "Enabled" | "Disabled"

export type LolClashClashVisibility = "Visible" | "Hidden"

export interface LolClashClientFailedInvite {
	/** @format uint64 */
	playerId: number
	exception: string
}

export interface LolClashClubsSummoner {
	/** @format uint64 */
	summonerId: number
	displayName: string
	/** @format int32 */
	profileIconId: number
	/** @format uint32 */
	summonerLevel: number
}

export interface LolClashEogPlayerUpdateDTO {
	/** @format int64 */
	tournamentId: number
	/** @format int64 */
	gameId: number
	winner: boolean
	/** @format int32 */
	themeVp: number
	/** @format int32 */
	seasonVp: number
	/** @format int32 */
	lowestPosition: number
	/** @format int32 */
	bracketSize: number
	/** @format int32 */
	bid: number
	/** @format int32 */
	tier: number
	earnedRewards: ClashRewardDefinition[]
	rewardProgress: ClashRewardDefinition[]
}

export interface LolClashFindPlayers {
	invitationId: string
	/** @format int64 */
	memberId: number
	/** @format int32 */
	page: number
	/** @format int32 */
	count: number
}

export interface LolClashFindTeams {
	/** @format int64 */
	tournamentId: number
	/** @format int32 */
	page: number
	/** @format int32 */
	count: number
}

export type LolClashFoundationError = "INVALID_SIMPLE_STATE_FLAG" | "LOL_INVENTORY_NOT_READY" | "GAMEFLOW_UNAVAILABLE" | "DESERIALIZATION_FAILED" | "CLASH_DISABLED" | "CLASH_NOT_INITIALIZED"

export interface LolClashGameflowAvailability {
	isAvailable: boolean
}

export interface LolClashGameflowGameDodge {
	state: LolClashMatchmakingDodgeState
	dodgeIds: number[]
}

export interface LolClashGameflowPartiesRegistrationStatus {
	complete: boolean
	errorCodes: string[]
}

export type LolClashGameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"

export interface LolClashGameflowSession {
	phase: LolClashGameflowPhase
}

export type LolClashKdaClassification = "HIGH" | "AVERAGE" | "LOW"

export interface LolClashKickRequest {
	/** @format uint64 */
	summonerId: number
}

export interface LolClashLftState {
	lft: boolean
	primaryPos: string
	secondaryPos: string
}

export interface LolClashLoginSession {
	state: LolClashLoginSessionState
	/** @format uint64 */
	summonerId?: number
}

export type LolClashLoginSessionState = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"

export interface LolClashMatchmakingDodgeData {
	state: LolClashMatchmakingDodgeState
	/** @format uint64 */
	dodgerId: number
}

export type LolClashMatchmakingDodgeState = "TournamentDodged" | "StrangerDodged" | "PartyDodged" | "Invalid"

export type LolClashMatchmakingDodgeWarning = "Penalty" | "Warning" | "None"

export interface LolClashMatchmakingReadyCheckResource {
	state: LolClashMatchmakingReadyCheckState
	playerResponse: LolClashMatchmakingReadyCheckResponse
	dodgeWarning: LolClashMatchmakingDodgeWarning
	/** @format float */
	timer: number
	declinerIds: number[]
}

export type LolClashMatchmakingReadyCheckResponse = "Declined" | "Accepted" | "None"

export type LolClashMatchmakingReadyCheckState = "Error" | "PartyNotReady" | "StrangerNotReady" | "EveryoneReady" | "InProgress" | "Invalid"

export interface LolClashMatchmakingSearchResource {
	/** @format int32 */
	queueId: number
	readyCheck: LolClashMatchmakingReadyCheckResource
	dodgeData: LolClashMatchmakingDodgeData
}

export interface LolClashMemberBanUnbanNotification {
	/** @format int64 */
	playerId: number
	/** @format int64 */
	notifyPlayerId: number
	notifyPuuid: string
	reason: string
	notifyReason: LolClashNotifyReason
	tournaments: MemberBanUnbanTournament[]
}

export interface LolClashMucJwtDto {
	jwt: string
	channelClaim: string
	domain: string
	targetRegion: string
}

export interface LolClashNoShowPingDTO {
	/** @format int64 */
	tournamentId: number
	/** @format int64 */
	matchId: number
	/** @format int64 */
	dodgeTime: number
}

export interface LolClashNoShowPingResponse {
	/** @format int64 */
	tournamentId: number
	/** @format int64 */
	matchId: number
	/** @format int64 */
	dodgeTime: number
	data: string
}

export interface LolClashNoShowPingResponseData {
	/** @format int64 */
	loginTime: number
	/** @format int64 */
	dodgeTime: number
	gameflowState: LolClashGameflowPhase
	isPlaymodeRestricted: boolean
	readyCheckInfo: LolClashReadyCheckInfo
}

export type LolClashNotifyReason = "TEAMMATE_UNBAN" | "TEAMMATE_BAN" | "MEMBER_BAN" | "UNBAN" | "BAN" | "REVERTED_REGISTRATION" | "REWARD_GRANT_RETRY" | "REWARD_GRANT_FAILED" | "ACCEPT_TICKET" | "DECLINE_TICKET" | "REVOKED_TICKET" | "OFFER_TICKET" | "SET_TICKET" | "KICK" | "CAPTAIN_LEAVE" | "LEAVE" | "REVOKE_INVITE" | "ACCEPT_INVITE" | "DECLINE_INVITE" | "RESENT_INVITE" | "INVITE" | "CHANGE_LFT" | "CHANGE_NAMETAGLOGO" | "CHANGE_POSITION" | "CHANGE_SHORTNAME" | "CHANGE_NAME" | "CHANGE_LOGO" | "OWNER_TRANSFER" | "ROSTER_DELETE" | "DISMISS" | "OWNER_CLOSE" | "UNREADY" | "READY" | "SELFJOIN" | "REVOKE_SELFJOIN" | "ACCEPT_SELFJOIN" | "DECLINE_SELFJOIN" | "REVOKE_SUGGESTION" | "ACCEPT_SUGGESTION" | "DECLINE_SUGGESTION" | "SUGGESTION"

export interface LolClashOfferTicketRequest {
	/** @format int32 */
	ticketAmount: number
	ticketType: TicketType
}

export interface LolClashPendingRosterNotification {
	pendingRoster: PendingRosterDTO
	notifyReason: LolClashNotifyReason
	/** @format uint64 */
	sourcePlayerId: number
	/** @format uint64 */
	targetPlayerId: number
}

export interface LolClashPlayerChatRoster {
	/** @format int64 */
	tournamentId: number
	/** @format int64 */
	startTimeMs: number
	/** @format int64 */
	endTimeMs: number
	tournamentState: LolClashTournamentState
	playerState: LolClashPlayerState
	isRegistered: boolean
	name: string
	shortName: string
	/** @format int32 */
	iconId: number
	/** @format int32 */
	iconColorId: number
	logoUrl: string
	invitationId: string
	multiUserChatId: string
	multiUserChatPassword: string
	mucJwtDto: LolClashMucJwtDto
}

export interface LolClashPlayerData {
	tickets: Record<string, number>
	isClashBanned: boolean
	/** @format int32 */
	tier: number
	lft: boolean
	primaryPos: string
	secondaryPos: string
}

export interface LolClashPlayerNotification {
	source: string
	type: string
	/** @format uint64 */
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
	notifyReason: LolClashNotifyReason
	rosterNotifyReason: LolClashRosterNotifyReason
	tournamentNotifyReason: LolClashTournamentNotifyReason
	/** @format uint64 */
	sourceSummonerId: number
	/** @format uint64 */
	targetSummonerId: number
	notification: LolClashPlayerNotification
	keySuffix: string
}

export interface LolClashPlayerRewards {
	/** @format int32 */
	seasonVp: number
	themeVp: LolClashThemeVp[]
}

export type LolClashPlayerState = "ELIMINATED" | "BRACKET_ROSTER" | "REGISTERED_ROSTER" | "PENDING_ROSTER" | "NO_ROSTER"

export interface LolClashPlayerTournamentData {
	state: LolClashPlayerState
	rosterId: string
	/** @format int64 */
	bracketId: number
}

export interface LolClashPlayerUpdateNotification {
	player: PlayerDTO
	notifyReason: LolClashNotifyReason
}

export interface LolClashPlaymodeRestrictedInfo {
	isRestricted: boolean
	/** @format int64 */
	tournamentId: number
	presenceState: LolClashPresenceState
	rosterId: string
	/** @format int64 */
	phaseId: number
	readyForVoice: boolean
}

export type LolClashPresenceState = "SCOUTING" | "LOCKED_IN" | "NONE"

export interface LolClashProfileInfo {
	/** @format int32 */
	honorLevel: number
}

export interface LolClashQueue {
	/** @format int32 */
	id: number
	/** @format int32 */
	mapId: number
	name: string
	shortName: string
	description: string
	detailedDescription: string
	type: string
	gameMode: string
	category: LolClashQueueGameCategory
	gameTypeConfig: LolClashQueueGameTypeConfig
	/** @format int32 */
	numPlayersPerTeam: number
	/** @format int32 */
	minimumParticipantListSize: number
	/** @format int32 */
	maximumParticipantListSize: number
	/** @format uint32 */
	minLevel: number
	isRanked: boolean
	areFreeChampionsAllowed: boolean
	isTeamBuilderManaged: boolean
	queueAvailability: LolClashQueueAvailability
	queueRewards: LolClashQueueReward
	spectatorEnabled: boolean
}

export type LolClashQueueAvailability = "DoesntMeetRequirements" | "PlatformDisabled" | "Available"

export type LolClashQueueGameCategory = "Alpha" | "VersusAi" | "PvP" | "Custom" | "None"

export interface LolClashQueueGameTypeConfig {
	/** @format int64 */
	id: number
	name: string
	/** @format int32 */
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
	/** @format int32 */
	mainPickTimerDuration: number
	/** @format int32 */
	postPickTimerDuration: number
	/** @format int32 */
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
	/** @format uint64 */
	playerId: number
	championScoutingData: LolClashRankedScoutingTopChampion[]
}

export interface LolClashRankedScoutingTopChampion {
	/** @format int32 */
	championId: number
	/** @format int32 */
	rank: number
	/** @format int32 */
	winCount: number
	/** @format int32 */
	gameCount: number
	/** @format int32 */
	winRate: number
	kda: string
	kdaClassification: LolClashKdaClassification
}

export interface LolClashReadyCheckInfo {
	/** @format int64 */
	timestampReceived: number
	/** @format int64 */
	timestampResponseComplete: number
	/** @format int64 */
	timestampLastClashGameflowDodge: number
	/** @format int32 */
	queueId: number
	isAcceptSuccessful: boolean
	acceptError: string
	readyCheckResource: LolClashMatchmakingReadyCheckResource
}

export interface LolClashRegisteredRosterNotification {
	roster: RosterDTO
	notifyReason: LolClashRosterNotifyReason
}

export interface LolClashRoster {
	/** @format int64 */
	tournamentId: number
	invitationId: string
	id: string
	name: string
	shortName: string
	/** @format int32 */
	iconId: number
	/** @format int32 */
	iconColorId: number
	/** @format uint64 */
	captainSummonerId: number
	/** @format int32 */
	tier: number
	/** @format int32 */
	points: number
	/** @format int32 */
	wins: number
	/** @format int32 */
	losses: number
	/** @format int32 */
	currentBracketWins: number
	/** @format int32 */
	numCompletedPeriods: number
	isEliminated: boolean
	isRegistered: boolean
	isActiveInCurrentPhase: boolean
	isCurrentBracketComplete: boolean
	highTierVariance: boolean
	members: LolClashRosterMember[]
	availableLogos: RewardLogo[]
	suggestedInvites: LolClashSuggestedInvite[]
	phaseInfos: LolClashRosterPhaseInfo[]
	withdraw?: RosterWithdraw
	isClashBanned: boolean
	lft: boolean
}

export interface LolClashRosterDetails {
	name: string
	shortName: string
	/** @format int32 */
	iconId: number
	/** @format int32 */
	iconColorId: number
}

export interface LolClashRosterDynamicStateNotification {
	rosterDynamicState: RosterDynamicStateDTO
	notifyReason: LolClashRosterNotifyReason
	/** @format uint64 */
	sourcePlayerId: number
}

export interface LolClashRosterMatchAggregatedStats {
	/** @format int32 */
	round: number
	/** @format int64 */
	durationMs: number
	opponentShortName: string
	/** @format int32 */
	opponentIconId: number
	/** @format int32 */
	opponentIconColorId: number
	win: boolean
	loserBracket: boolean
	/** @format int64 */
	gameId: number
	/** @format int32 */
	kills: number
	/** @format int32 */
	opponentKills: number
	playerChampionIds: Record<string, number>
}

export interface LolClashRosterMember {
	/** @format uint64 */
	summonerId: number
	state: LolClashRosterMemberState
	/** @format int32 */
	currentBuyin: number
	buyinType: TicketType
	/** @format int32 */
	previousBuyin: number
	incomingOffers: LolClashTicketOffer[]
	position: Position
	/** @format uint64 */
	replacedSummonerId: number
	/** @format int32 */
	tier: number
	inviteType: InviteType
	/** @format uint64 */
	inviterId: number
}

export type LolClashRosterMemberState = "READY" | "FORCED_NOT_READY" | "NOT_READY" | "PENDING" | "DECLINED"

export type LolClashRosterNotifyReason = "GAME_RESCHEDULED" | "GAME_START_FAILED_OPPONENT" | "GAME_START_FAILED_SUMMONERS" | "GAME_START_FAILED" | "GAME_START_RETRY_OPPONENT" | "GAME_START_RETRY_SUMMONERS" | "GAME_START_RETRY" | "TICKET_COULD_NOT_BE_CHARGED" | "TICKET_REFUNDED" | "TICKET_CHARGED" | "BANNED_SMURF_OPPONENT" | "BANNED_SMURF_TEAMMATE" | "BANNED_SMURF" | "CANNOT_FIND_MATCH" | "BRACKET_ROSTER_REPLACED" | "BRACKET_ROSTER_REMOVED" | "TIER_CHANGED" | "NO_SHOW_PING" | "ROUND_COMPLETE" | "WITHDRAW" | "VOTE_WITHDRAW_DISMISS" | "VOTE_WITHDRAW_UPDATE" | "OWNER_TRANSFER" | "QUEUE_DODGE" | "GAME_END_ERROR" | "GAME_STARTED_ERROR" | "GAME_STARTED" | "GAME_SCHEDULED" | "GAME_COMPLETED" | "PERIOD_SPLIT" | "PERIOD_CANCEL" | "PHASE_BACKOUT" | "PHASE_CHECKIN" | "PHASE_READY" | "PHASE_UNREADY" | "RESTRICTION_AUTO_WIN" | "REGISTERED" | "EOG_PLAYER_UPDATE" | "CHEATER_DETECT" | "CHANGE_POSITION" | "BRACKET_READY" | "BYE_AUTO_WIN" | "ROSTER_REVOKED_TICKET" | "ROSTER_DECLINE_TICKET" | "ROSTER_ACCEPT_TICKET" | "ROSTER_OFFER_TICKET" | "ROSTER_SET_TICKET"

export interface LolClashRosterPeriodAggregatedStats {
	/** @format int32 */
	period: number
	/** @format int32 */
	bracketSize: number
	/** @format int64 */
	time: number
	matchStats: LolClashRosterMatchAggregatedStats[]
	playerBids: Record<string, number>
}

export interface LolClashRosterPhaseInfo {
	/** @format int64 */
	phaseId: number
	/** @format int32 */
	period: number
	/** @format int64 */
	checkinTime: number
	isBracketComplete: boolean
}

export interface LolClashRosterPlayerAggregatedStats {
	rawStatsSum: Record<string, number>
	rawStatsMax: Record<string, number>
}

export interface LolClashRosterPlayerNotification {
	roster: RosterDTO
	notifyReason: LolClashRosterNotifyReason
	playerNotificationDTO: PlayerDTO
	/** @format uint64 */
	sourcePlayerId: number
}

export interface LolClashRosterStats {
	/** @format int64 */
	rosterId: number
	/** @format int32 */
	tournamentThemeId: number
	tournamentNameLocKey: string
	tournamentNameLocKeySecondary: string
	/** @format int64 */
	startTimeMs: number
	/** @format int64 */
	endTimeMs: number
	/** @format int32 */
	tournamentPeriods: number
	/** @format int32 */
	tier: number
	rosterName: string
	rosterShortName: string
	/** @format int32 */
	rosterIconId: number
	/** @format int32 */
	rosterIconColorId: number
	periodStats: LolClashRosterPeriodAggregatedStats[]
	playerStats: Record<string, LolClashRosterPlayerAggregatedStats>
}

export interface LolClashRosterWithdrawNotification {
	/** @format int32 */
	version: number
	/** @format int64 */
	tournamentId: number
	/** @format int64 */
	rosterId: number
	withdraw: RosterWithdraw
	notifyReason: LolClashRosterNotifyReason
	/** @format uint64 */
	sourcePlayerId: number
}

export interface LolClashScoutingChampionMastery {
	/** @format int32 */
	championId: number
	/** @format int32 */
	championLevel: number
	/** @format int32 */
	championPoints: number
}

export interface LolClashScoutingChampions {
	/** @format uint64 */
	playerId: number
	/** @format uint64 */
	totalMasteryScore: number
	topMasteries: LolClashScoutingChampionMastery[]
	topSeasonChampions: LolClashScoutingSeasonChampion[]
}

export interface LolClashScoutingSeasonChampion {
	/** @format int32 */
	championId: number
	/** @format int32 */
	winCount: number
	/** @format int32 */
	gameCount: number
	/** @format int32 */
	winRate: number
	kda: string
	kdaClassification: LolClashKdaClassification
}

export interface LolClashSetPositionRequest {
	position: Position
}

export interface LolClashSetTicketRequest {
	/** @format int32 */
	ticketAmount: number
	ticketType: TicketType
}

export interface LolClashSettingCategory {
	/** @format int32 */
	schemaVersion: number
	data: unknown
}

export interface LolClashSimpleStateFlag {
	id: string
	status: LolClashSimpleStateStatus
}

export type LolClashSimpleStateStatus = "ACKNOWLEDGED" | "UNACKNOWLEDGED"

export interface LolClashSuggestedInvite {
	/** @format uint64 */
	summonerId: number
	/** @format uint64 */
	suggesterSummonerId: number
}

export interface LolClashSuggestionInvite {
	/** @format uint64 */
	inviterId: number
	inviteePlayers: number[]
}

export interface LolClashSuggestionInvitee {
	/** @format uint64 */
	captainId: number
	/** @format uint64 */
	inviteeId: number
}

export interface LolClashTeamOpenState {
	invitationId: string
	/** @format int64 */
	captainId: number
	openTeam: boolean
}

export interface LolClashThemeVp {
	/** @format int32 */
	themeId: number
	/** @format int32 */
	vp: number
}

export interface LolClashThirdPartyApiPlayer {
	/** @format uint64 */
	summonerId: number
	role: string
}

export interface LolClashThirdPartyApiRoster {
	captain: LolClashThirdPartyApiPlayer
	members: LolClashThirdPartyApiPlayer[]
}

export interface LolClashTicketOffer {
	/** @format uint64 */
	summonerId: number
	/** @format int32 */
	amount: number
	ticketType: TicketType
	isAccepted: boolean
}

export interface LolClashTournament {
	/** @format int64 */
	id: number
	/** @format int32 */
	themeId: number
	nameLocKey: string
	nameLocKeySecondary: string
	buyInOptions: number[]
	buyInOptionsPremium: number[]
	/** @format int32 */
	entryFee: number
	/** @format int32 */
	rosterSize: number
	allowRosterCreation: boolean
	/** @format int64 */
	rosterCreateDeadline: number
	/** @format int64 */
	scoutingDurationMs: number
	/** @format int64 */
	startTimeMs: number
	/** @format int64 */
	endTimeMs: number
	lastThemeOfSeason: boolean
	bracketSize: string
	/** @format int32 */
	queueId: number
	isSmsRestrictionEnabled: boolean
	isHonorRestrictionEnabled: boolean
	isRankedRestrictionEnabled: boolean
	phases: LolClashTournamentPhase[]
	rewardConfig: ClashRewardConfigClient[]
	tierConfigs: TierConfig[]
	/** @format int64 */
	bracketFormationInitDelayMs: number
	/** @format int64 */
	bracketFormationIntervalMs: number
	status: TournamentStatusEnum
	/** @format int64 */
	resumeTime: number
	lft: boolean
	/** @format int32 */
	maxInvites: number
	/** @format int32 */
	maxSuggestionsPerPlayer: number
}

export interface LolClashTournamentGameEnd {
	/** @format int64 */
	tournamentId: number
	tournamentNameLocKey: string
	tournamentNameLocKeySecondary: string
	/** @format int64 */
	bracketId: number
	oldBracket?: LolClashBracket
}

export interface LolClashTournamentHistoryAndWinners {
	tournamentHistory: LolClashTournament[]
	tournamentWinners: LolClashTournamentWinnerHistory
}

export type LolClashTournamentNotifyReason = "UPDATE_STATUS" | "REVERT_PHASE" | "UPDATE_PHASE" | "ADD_PHASE" | "CANCEL_PERIOD" | "CANCEL_TOURNAMENT" | "UPDATE_TOURNAMENT" | "NEW_TOURNAMENT"

export interface LolClashTournamentPhase {
	/** @format int64 */
	id: number
	/** @format int64 */
	tournamentId: number
	/** @format int32 */
	period: number
	/** @format int64 */
	lockinStartTime: number
	/** @format int64 */
	scoutingStartTime: number
	cancelled: boolean
	limitTiers: number[]
	capacityStatus: CapacityEnum
}

export interface LolClashTournamentPhaseProgressNotificationDTO {
	/** @format int64 */
	tournamentId: number
	/** @format int64 */
	phaseId: number
	capacityStatus: CapacityEnum
}

export type LolClashTournamentState = "RESULTS" | "IN_GAME" | "SCOUTING" | "LOCK_IN" | "IDLE" | "UPCOMING"

export interface LolClashTournamentStateInfo {
	/** @format int64 */
	tournamentId: number
	state: LolClashTournamentState
	/** @format int64 */
	currentPhaseId: number
	/** @format int64 */
	nextPhaseId: number
	/** @format int64 */
	nextStateChangeTime: number
	/** @format int32 */
	numRemainingPeriods: number
}

export interface LolClashTournamentSummary {
	state: LolClashTournamentState
	/** @format int64 */
	tournamentId: number
	rosterId: string
	/** @format int64 */
	bracketId: number
}

export interface LolClashTournamentUpdatedNotification {
	missingPlayerIds: number[]
	/** @format int32 */
	currentRetry: number
	/** @format int32 */
	maxRetry: number
	/** @format int64 */
	retrySeconds: number
	notifyReason: LolClashRosterNotifyReason
}

export interface LolClashTournamentUpdatedNotificationDTO {
	reason: LolClashTournamentNotifyReason
	/** @format int64 */
	tournamentId: number
	tournament?: TournamentDTO
	/** @format int64 */
	relevantPhaseId?: number
}

export interface LolClashTournamentWinnerHistory {
	/** @format int64 */
	tournamentId: number
	winners: LolClashTournamentWinnerInfo[]
}

export interface LolClashTournamentWinnerInfo {
	/** @format int64 */
	rosterId: number
	/** @format int32 */
	tier: number
	shortName: string
	name: string
	/** @format int32 */
	logo: number
	/** @format int32 */
	logoColor: number
	/** @format int64 */
	createTime: number
	/** @format int64 */
	averageWinDuration: number
	playerIds: number[]
}

export interface LolClashUserResource {
	/** @format uint64 */
	summonerId: number
	lol: Record<string, string>
}

export interface LolCollectionsAccountIdAndSummonerId {
	/** @format uint64 */
	summonerId: number
}

export interface LolCollectionsCollectionsChampionMastery {
	puuid: string
	/** @format uint64 */
	playerId: number
	/** @format int32 */
	championId: number
	/** @format int32 */
	championLevel: number
	/** @format int32 */
	championPoints: number
	formattedChampionPoints: string
	/** @format uint64 */
	lastPlayTime: number
	/** @format int32 */
	championPointsSinceLastLevel: number
	/** @format int32 */
	championPointsUntilNextLevel: number
	/** @format int32 */
	tokensEarned: number
	chestGranted: boolean
	highestGrade: string
	formattedMasteryGoal: string
}

export interface LolCollectionsCollectionsChestEligibility {
	/** @format uint32 */
	earnableChests: number
	/** @format uint32 */
	maximumChests: number
	/** @format uint64 */
	nextChestRechargeTime: number
}

export interface LolCollectionsCollectionsOwnership {
	loyaltyReward: boolean
	xboxGPReward: boolean
	owned: boolean
	rental: LolCollectionsCollectionsRental
}

export interface LolCollectionsCollectionsRental {
	/** @format uint64 */
	endDate: number
	/** @format uint64 */
	purchaseDate: number
	/** @format int32 */
	winCountRemaining: number
	rented: boolean
}

export interface LolCollectionsCollectionsSummonerBackdrop {
	/** @format uint64 */
	summonerId: number
	/** @format uint64 */
	accountId: number
	/** @format int32 */
	profileIconId: number
	/** @format int32 */
	championId: number
	backdropType: LolCollectionsCollectionsSummonerBackdropType
	backdropImage: string
	backdropAugments: LolCollectionsCollectionsSummonerBackdropAugments[]
	backdropVideo: string
	backdropMaskColor: string
	puuid: string
}

export interface LolCollectionsCollectionsSummonerBackdropAugments {
	centeredLCOverlayPath: string
	socialCardLCOverlayPath: string
}

export type LolCollectionsCollectionsSummonerBackdropType = "specified-skin" | "highest-mastery" | "summoner-icon" | "default"

export interface LolCollectionsCollectionsSummonerSpells {
	/** @format uint64 */
	summonerId: number
	spells: number[]
}

export interface LolCollectionsCollectionsTopChampionMasteries {
	puuid: string
	/** @format uint64 */
	summonerId: number
	/** @format uint64 */
	score: number
	masteries: LolCollectionsCollectionsChampionMastery[]
}

export interface LolCollectionsCollectionsWardSkin {
	/** @format int64 */
	id: number
	name: string
	description: string
	ownership: LolCollectionsCollectionsOwnership
	wardImagePath: string
	wardShadowImagePath: string
}

export interface LolCollectionsCollectionsWardSkinList {
	wardSkinList: number[]
}

export interface LolCollectionsGameDataChampionMasteries {
	tree: LolCollectionsGameDataChampionMasteryTree
}

export interface LolCollectionsGameDataChampionMasteryGroup {
	/** @format uint32 */
	id: number
	rows: LolCollectionsGameDataChampionMasteryRow[]
}

export interface LolCollectionsGameDataChampionMasteryRow {
	masteries: number[]
}

export interface LolCollectionsGameDataChampionMasteryTree {
	groups: LolCollectionsGameDataChampionMasteryGroup[]
}

export interface LolCollectionsGameDataChampionQuestSkin {
	/** @format int32 */
	id: number
	name: string
	splashPath: string
	splashVideoPath: string
	skinAugments: LolCollectionsGameDataChampionSkinAugments
}

export interface LolCollectionsGameDataChampionSkin {
	/** @format int32 */
	id: number
	isBase: boolean
	name: string
	questSkinInfo: LolCollectionsGameDataQuestSkinInfo
	splashPath: string
	splashVideoPath?: string
	skinAugments: LolCollectionsGameDataChampionSkinAugments
}

export interface LolCollectionsGameDataChampionSkinAugment {
	contentId: string
	overlays: LolCollectionsGameDataChampionSkinAugmentOverlays[]
}

export interface LolCollectionsGameDataChampionSkinAugmentOverlays {
	centeredLCOverlayPath: string
	socialCardLCOverlayPath: string
	tileLCOverlayPath: string
	uncenteredLCOverlayPath: string
}

export interface LolCollectionsGameDataChampionSkinAugments {
	augments: LolCollectionsGameDataChampionSkinAugment[]
}

export interface LolCollectionsGameDataChampionSummary {
	/** @format int32 */
	id: number
}

export interface LolCollectionsGameDataQuestSkinInfo {
	tiers: LolCollectionsGameDataChampionQuestSkin[]
}

export interface LolCollectionsGameDataSplashMetadata {
	CalculatedColor: string
	OverrideColor: string
}

export interface LolCollectionsInventoryItem {
	uuid: string
	/** @format int32 */
	itemId: number
	inventoryType: string
	purchaseDate: string
	/** @format uint64 */
	quantity: number
	ownershipType: LolCollectionsItemOwnershipType
}

export interface LolCollectionsInventoryItemDTO {
	/** @format int32 */
	itemId: number
	inventoryType: string
	expirationDate: string
	purchaseDate: string
	/** @format uint64 */
	quantity: number
	/** @format uint64 */
	ownedQuantity: number
	usedInGameDate: string
	entitlementId: string
	entitlementTypeId: string
	instanceId: string
	instanceTypeId: string
	payload: unknown
	"f2p": boolean
	rental: boolean
	loyalty: boolean
	lsb: boolean
	/** @format uint64 */
	wins: number
}

export interface LolCollectionsInventoryItemWithPayload {
	uuid: string
	/** @format int32 */
	itemId: number
	inventoryType: string
	purchaseDate: string
	/** @format uint64 */
	quantity: number
	ownershipType: LolCollectionsItemOwnershipType
	payload: unknown
}

export type LolCollectionsItemOwnershipType = "F2P" | "LOYALTY" | "RENTED" | "OWNED"

export interface LolCollectionsLcdsDynamicClientConfig {
	DisabledChampions: unknown
}

export interface LolCollectionsLoginSession {
	state: LolCollectionsLoginSessionStates
	/** @format uint64 */
	summonerId: number
	puuid: string
	connected: boolean
}

export type LolCollectionsLoginSessionStates = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"

export interface LolCollectionsNumberFormattingBehavior {
	/** @format uint32 */
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
	numberFormattingBehavior: LolCollectionsNumberFormattingBehavior
}

export interface LolCollectionsPlayerNotification {
	backgroundUrl: string
	critical: boolean
	data: Record<string, string>
	detailKey: string
	iconUrl: string
	/** @format uint64 */
	id: number
	source: string
	state: string
	titleKey: string
	type: string
}

export interface LolCollectionsSummoner {
	/** @format uint64 */
	summonerId: number
	/** @format uint64 */
	accountId: number
	/** @format uint32 */
	summonerLevel: number
	/** @format int32 */
	profileIconId: number
	puuid: string
}

export interface LolCollectionsSummonerProfile {
	/** @format int32 */
	backgroundSkinId?: number
	backgroundSkinAugments?: string
}

export interface LolCollectionsSummonerProfileUpdate {
	key: string
	value: unknown
}

export interface LolContentTargetingAccountIdAndSummonerId {
	/** @format uint64 */
	summonerId: number
}

export interface LolContentTargetingCollectionsChampionMastery {
	/** @format uint64 */
	playerId: number
	/** @format int32 */
	championId: number
	/** @format int32 */
	championLevel: number
	/** @format int32 */
	championPoints: number
	/** @format uint64 */
	lastPlayTime: number
}

export interface LolContentTargetingContentTargetingFilterResponse {
	filters: string[]
}

export interface LolContentTargetingContentTargetingLocaleResponse {
	locale: string
}

export interface LolContentTargetingDataModelResponse {
	/** @format int64 */
	responseCode: number
	modelData: unknown
}

export interface LolContentTargetingGameflowGameData {
	/** @format uint64 */
	gameId: number
	queue: LolContentTargetingQueue
}

export type LolContentTargetingGameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"

export interface LolContentTargetingGameflowSession {
	phase: LolContentTargetingGameflowPhase
	gameData: LolContentTargetingGameflowGameData
}

export interface LolContentTargetingGeoInfo {
	country: string
	city: string
	region: string
}

export interface LolContentTargetingGeoInfoResponse {
	success: boolean
	geoInfo: LolContentTargetingGeoInfo
	errorMessage: string
	isLatest: boolean
	isInitialized: boolean
}

export interface LolContentTargetingLoginSession {
	state: LolContentTargetingLoginSessionState
	/** @format uint64 */
	summonerId: number
	puuid: string
	idToken: string
}

export type LolContentTargetingLoginSessionState = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"

export interface LolContentTargetingMission {
	id: string
	status: string
	/** @format int64 */
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
	/** @format uint64 */
	ABTestFilterGroups: number
	/** @format uint64 */
	ABTestFilterSalt: number
	EntitlementsFilterEnabled: boolean
	MasteryFilterEnabled: boolean
	/** @format uint32 */
	MasteryFilterLevelThreshold: number
	/** @format uint32 */
	MasteryFilterDaysSinceLastPlayed: number
	/** @format uint32 */
	MasteryFilterChampionLimit: number
	MainFilterEnabled: boolean
	EntitlementsPrefix: string
	TargetingAttributeStorageEnabled: boolean
	TargetingAttributeStorageBaseUri: string
	MissionsFilterEnabled: boolean
	SummonerIconFilterEnabled: boolean
	/** @format uint32 */
	AsynchronousEventHandlerSetupDelayInSeconds: number
	/** @format uint32 */
	TasIngestionDelayInSeconds: number
}

export interface LolContentTargetingQueue {
	/** @format int32 */
	id: number
	/** @format int32 */
	mapId: number
	gameMode: string
	category: LolContentTargetingQueueGameCategory
}

export type LolContentTargetingQueueGameCategory = "Alpha" | "VersusAi" | "PvP" | "Custom" | "None"

export type LolContentTargetingRankedDivision = "V" | "IV" | "III" | "II" | "I" | "NA"

export type LolContentTargetingRankedQueue = "RANKED_TFT_DOUBLE_UP" | "RANKED_TFT_PAIRS" | "RANKED_TFT_TURBO" | "RANKED_TFT" | "RANKED_FLEX_TT" | "RANKED_FLEX_SR" | "RANKED_SOLO_5x5" | "NONE"

export interface LolContentTargetingRankedQueueStats {
	queueType: LolContentTargetingRankedQueue
	tier: string
	division: LolContentTargetingRankedDivision
	isProvisional: boolean
}

export interface LolContentTargetingRankedStats {
	queues: LolContentTargetingRankedQueueStats[]
	highestRankedEntry?: LolContentTargetingRankedQueueStats
}

export interface LolContentTargetingRegionLocale {
	locale: string
}

export interface LolContentTargetingSettingsResource {
	data: unknown
}

export interface LolContentTargetingSummoner {
	/** @format uint32 */
	summonerLevel: number
	/** @format int32 */
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

export interface LolCosmeticsCompanionsFavoritesViewModel {
	favoriteItems: LolCosmeticsCosmeticsCompanionViewModel[]
}

export interface LolCosmeticsCompanionsGroupViewModel {
	groupName: string
	/** @format uint32 */
	groupId: number
	/** @format uint32 */
	numOwned: number
	/** @format uint32 */
	numAvailable: number
	items: LolCosmeticsCosmeticsCompanionViewModel[]
}

export interface LolCosmeticsCompanionsGroupedViewModel {
	selectedLoadoutItem: LolCosmeticsCosmeticsCompanionViewModel
	/** @format int32 */
	defaultItemId: number
	groups: LolCosmeticsCompanionsGroupViewModel[]
}

export interface LolCosmeticsCosmeticSettingsResource {
	data?: LolCosmeticsAccountSettingsCategoryDataResource
	/** @format uint32 */
	schemaVersion: number
}

export interface LolCosmeticsCosmeticsCompanion {
	contentId: string
	/** @format int32 */
	itemId: number
	name: string
	description: string
	loadoutsIcon: string
	owned: boolean
	selected: boolean
	loyalty: boolean
	"f2p": boolean
	/** @format uint32 */
	rarityValue: number
	purchaseDate: string
	species: string
	/** @format uint32 */
	groupId: number
	color: string
	/** @format uint32 */
	level: number
	upgrades: string[]
}

export interface LolCosmeticsCosmeticsCompanionViewModel {
	contentId: string
	/** @format int32 */
	itemId: number
	name: string
	description: string
	loadoutsIcon: string
	owned: boolean
	selected: boolean
	favorited: boolean
	loyalty: boolean
	"f2p": boolean
	/** @format uint32 */
	rarityValue: number
	purchaseDate: string
	isRecentItem: boolean
	species: string
	/** @format uint32 */
	groupId: number
	color: string
	/** @format uint32 */
	level: number
	upgrades: LolCosmeticsCosmeticsCompanionViewModel[]
	offerData?: LolCosmeticsCapOffer
	starShardsPrice: LolCosmeticsCosmeticsOfferPrice
}

export interface LolCosmeticsCosmeticsOfferPrice {
	offerId: string
	/** @format uint64 */
	price: number
}

export interface LolCosmeticsCosmeticsSettings {
	favorites: LolCosmeticsFavoriteCosmetics
}

export interface LolCosmeticsCosmeticsTFTDamageSkin {
	contentId: string
	/** @format int32 */
	itemId: number
	name: string
	description: string
	loadoutsIcon: string
	owned: boolean
	selected: boolean
	loyalty: boolean
	"f2p": boolean
	/** @format uint32 */
	rarityValue: number
	purchaseDate: string
	/** @format uint32 */
	level: number
	/** @format uint32 */
	groupId: number
	groupName: string
	upgrades: string[]
}

export interface LolCosmeticsCosmeticsTFTDamageSkinViewModel {
	contentId: string
	/** @format int32 */
	itemId: number
	name: string
	description: string
	loadoutsIcon: string
	owned: boolean
	selected: boolean
	favorited: boolean
	loyalty: boolean
	"f2p": boolean
	/** @format uint32 */
	rarityValue: number
	purchaseDate: string
	isRecentItem: boolean
	/** @format uint32 */
	level: number
	/** @format uint32 */
	groupId: number
	groupName: string
	upgrades: LolCosmeticsCosmeticsTFTDamageSkinViewModel[]
}

export interface LolCosmeticsCosmeticsTFTMapSkin {
	contentId: string
	/** @format int32 */
	itemId: number
	name: string
	description: string
	loadoutsIcon: string
	owned: boolean
	selected: boolean
	loyalty: boolean
	"f2p": boolean
	/** @format uint32 */
	rarityValue: number
	purchaseDate: string
	/** @format uint32 */
	groupId: number
	groupName: string
}

export interface LolCosmeticsCosmeticsTFTMapSkinViewModel {
	contentId: string
	/** @format int32 */
	itemId: number
	name: string
	description: string
	loadoutsIcon: string
	owned: boolean
	selected: boolean
	favorited: boolean
	loyalty: boolean
	"f2p": boolean
	/** @format uint32 */
	rarityValue: number
	purchaseDate: string
	isRecentItem: boolean
	/** @format uint32 */
	groupId: number
	groupName: string
}

export interface LolCosmeticsCosmeticsTFTPlaybook {
	contentId: string
	/** @format int32 */
	itemId: number
	name: string
	description: string
	loadoutsIcon: string
	owned: boolean
	selected: boolean
	loyalty: boolean
	"f2p": boolean
	/** @format uint32 */
	rarityValue: number
	purchaseDate: string
	iconPath: string
	iconPathSmall: string
	splashPath: string
	earlyAugments: LolCosmeticsCosmeticsTFTPlaybookAugment[]
	midAugments: LolCosmeticsCosmeticsTFTPlaybookAugment[]
	lateAugments: LolCosmeticsCosmeticsTFTPlaybookAugment[]
	isDisabledInDoubleUp: boolean
}

export interface LolCosmeticsCosmeticsTFTPlaybookAugment {
	name: string
	description: string
	iconPath: string
	effectAmounts: LolCosmeticsCosmeticsTFTPlaybookAugmentEffectAmount[]
}

export interface LolCosmeticsCosmeticsTFTPlaybookAugmentEffectAmount {
	name: string
	/** @format float */
	value: number
	formatString: string
}

export interface LolCosmeticsCosmeticsTFTPlaybookViewModel {
	contentId: string
	/** @format int32 */
	itemId: number
	name: string
	description: string
	loadoutsIcon: string
	owned: boolean
	selected: boolean
	loyalty: boolean
	"f2p": boolean
	/** @format uint32 */
	rarityValue: number
	purchaseDate: string
	isRecentItem: boolean
	iconPath: string
	iconPathSmall: string
	splashPath: string
	earlyAugments: LolCosmeticsCosmeticsTFTPlaybookAugment[]
	midAugments: LolCosmeticsCosmeticsTFTPlaybookAugment[]
	lateAugments: LolCosmeticsCosmeticsTFTPlaybookAugment[]
	isDisabledInDoubleUp: boolean
}

export interface LolCosmeticsFavoriteCosmetics {
	companions: string[]
	tft_map_skins: string[]
	tft_damage_skins: string[]
}

export interface LolCosmeticsGameDataCompanion {
	contentId: string
	/** @format int32 */
	itemId: number
	name: string
	loadoutsIcon: string
	description: string
	speciesName: string
	/** @format uint32 */
	speciesId: number
	colorName: string
	/** @format uint32 */
	level: number
	/** @format uint32 */
	rarityValue: number
	upgrades: string[]
	TFTOnly: boolean
}

export interface LolCosmeticsGameDataTFTCosmeticsDefaults {
	playbook: unknown
}

export interface LolCosmeticsGameDataTFTDamageSkin {
	contentId: string
	/** @format int32 */
	itemId: number
	name: string
	description: string
	loadoutsIcon: string
	/** @format uint32 */
	groupId: number
	groupName: string
	/** @format uint32 */
	rarityValue: number
	/** @format uint32 */
	level: number
}

export interface LolCosmeticsGameDataTFTMapSkin {
	contentId: string
	/** @format int32 */
	itemId: number
	name: string
	description: string
	loadoutsIcon: string
	/** @format uint32 */
	groupId: number
	groupName: string
	/** @format uint32 */
	rarityValue: number
}

export interface LolCosmeticsGameDataTFTPlaybook {
	contentId: string
	/** @format int32 */
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
	earlyAugments: LolCosmeticsCosmeticsTFTPlaybookAugment[]
	midAugments: LolCosmeticsCosmeticsTFTPlaybookAugment[]
	lateAugments: LolCosmeticsCosmeticsTFTPlaybookAugment[]
	isDisabledInDoubleUp: boolean
}

export interface LolCosmeticsLoadout {
	id: string
	name: string
	scope: string
	/** @format int32 */
	itemId: number
	loadout: Record<string, LolCosmeticsLoadoutItem>
}

export interface LolCosmeticsLoadoutItem {
	inventoryType: string
	contentId: string
	/** @format int32 */
	itemId: number
}

export interface LolCosmeticsLoadoutUpdateDto {
	loadout: Record<string, LolCosmeticsLoadoutItem>
}

export interface LolCosmeticsSettingsStorageContainer {
	data: LolCosmeticsCosmeticsSettings
	/** @format uint16 */
	schemaVersion: number
}

export interface LolCosmeticsTFTDamageSkinFavoritesViewModel {
	favoriteItems: LolCosmeticsCosmeticsTFTDamageSkinViewModel[]
}

export interface LolCosmeticsTFTDamageSkinGroupViewModel {
	groupName: string
	/** @format uint32 */
	groupId: number
	/** @format uint32 */
	numOwned: number
	/** @format uint32 */
	numAvailable: number
	items: LolCosmeticsCosmeticsTFTDamageSkinViewModel[]
}

export interface LolCosmeticsTFTDamageSkinGroupedViewModel {
	selectedLoadoutItem: LolCosmeticsCosmeticsTFTDamageSkinViewModel
	/** @format int32 */
	defaultItemId: number
	groups: LolCosmeticsTFTDamageSkinGroupViewModel[]
}

export interface LolCosmeticsTFTMapSkinFavoritesViewModel {
	favoriteItems: LolCosmeticsCosmeticsTFTMapSkinViewModel[]
}

export interface LolCosmeticsTFTMapSkinGroupViewModel {
	groupName: string
	/** @format uint32 */
	groupId: number
	/** @format uint32 */
	numOwned: number
	/** @format uint32 */
	numAvailable: number
	items: LolCosmeticsCosmeticsTFTMapSkinViewModel[]
}

export interface LolCosmeticsTFTMapSkinGroupedViewModel {
	selectedLoadoutItem: LolCosmeticsCosmeticsTFTMapSkinViewModel
	/** @format int32 */
	defaultItemId: number
	groups: LolCosmeticsTFTMapSkinGroupViewModel[]
}

export interface LolCosmeticsTFTPlaybookGroupViewModel {
	groupName: string
	/** @format uint32 */
	groupId: number
	/** @format uint32 */
	numOwned: number
	/** @format uint32 */
	numAvailable: number
	items: LolCosmeticsCosmeticsTFTPlaybookViewModel[]
}

export interface LolCosmeticsTFTPlaybookGroupedViewModel {
	selectedLoadoutItem: LolCosmeticsCosmeticsTFTPlaybookViewModel
	/** @format int32 */
	defaultItemId: number
	groups: LolCosmeticsTFTPlaybookGroupViewModel[]
}

export interface LolCosmeticsTFTSettingsDataResource {
	iconOverride: string
}

export interface LolCosmeticsTFTSettingsResource {
	data?: LolCosmeticsTFTSettingsDataResource
	/** @format uint32 */
	schemaVersion: number
}

export interface LolCosmeticsUserResource {
	/** @format uint64 */
	summonerId: number
	lol: Record<string, string>
}

export interface LolDiscordRpGameDataChampionSummary {
	/** @format int32 */
	id: number
	name: string
	alias: string
}

export interface LolDiscordRpPartyPresenceData {
	partyId: string
	/** @format int32 */
	queueId: number
	summoners: number[]
	/** @format uint64 */
	maxPlayers: number
}

export interface LolDropsCapDropTableCounterDTO {
	dropTableId: string
	/** @format uint8 */
	count: number
}

export interface LolDropsCapDropsDropTableDisplayMetadata {
	isCollectorsBounty: boolean
	dataAssetId: string
	nameTraKey: string
	mythicOfferId: string
	progressionId: string
	/** @format uint8 */
	priority: number
	tables: Record<string, LolDropsOddsTableDisplayMetadata>
	/** @format uint8 */
	version: number
	chaseContentId: string
	oddsTree: LolDropsCapDropsOddsTreeNodeDTO
}

export interface LolDropsCapDropsDropTablePityInfo {
	/** @format uint8 */
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
	/** @format uint16 */
	cost: number
	totalRollsInfo: LolDropsTotalRollsInfoDTO
	pityInfo: LolDropsCapDropsDropTablePityInfo
	displayMetadata: LolDropsCapDropsDropTableDisplayMetadata
}

export interface LolDropsCapDropsOddsListEntryDTO {
	contentId: string
	nodeId: string
	/** @format float */
	odds: number
}

export interface LolDropsCapDropsOddsTreeNodeDTO {
	nodeId: string
	/** @format float */
	odds: number
	children: LolDropsCapDropsOddsTreeNodeDTO[]
	/** @format uint16 */
	quantity: number
	nameTraKey: string
	/** @format uint8 */
	priority: number
}

export interface LolDropsOddsTableDisplayMetadata {
	nameTraKey: string
	/** @format uint8 */
	priority: number
}

export interface LolDropsTotalRollsInfoDTO {
	totalRollsCounterId: string
	/** @format uint8 */
	maxTotalRolls: number
}

export type LolDx9DeprecationDx9DeprecationNotificationType = "TURN_OFF_DX9_LEGACY_MODE" | "HARDWARE_UPGRADE" | "NONE"

export interface LolDx9DeprecationLocalSettingsCategory {
	data: unknown
	/** @format int32 */
	schemaVersion: number
}

export interface LolEmailVerificationAccessToken {
	token: string
	/** @format uint64 */
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
	/** @format int32 */
	championId: number
	grade: string
}

export interface LolEndOfGameChampionMasteryMini {
	puuid: string
	/** @format int32 */
	championId: number
	/** @format int64 */
	championLevel: number
}

export interface LolEndOfGameChampionMasteryUpdate {
	id: string
	/** @format uint64 */
	gameId: number
	puuid: string
	/** @format int32 */
	championId: number
	hasLeveledUp: boolean
	/** @format int64 */
	level: number
	/** @format int64 */
	pointsBeforeGame: number
	/** @format int64 */
	pointsGained: number
	/** @format int64 */
	pointsGainedIndividualContribution: number
	/** @format int64 */
	bonusPointsGained: number
	/** @format int64 */
	pointsSinceLastLevelBeforeGame: number
	/** @format int64 */
	pointsUntilNextLevelBeforeGame: number
	/** @format int64 */
	pointsUntilNextLevelAfterGame: number
	/** @format int64 */
	tokensEarned: number
	tokenEarnedAfterGame: boolean
	grade: string
	/** @format int64 */
	score: number
	levelUpList: LolEndOfGameChampionMasteryMini[]
	memberGrades: LolEndOfGameChampionMasteryGrade[]
}

export interface LolEndOfGameEndOfGamePlayer {
	stats: unknown
	items: number[]
	puuid: string
	botPlayer: boolean
	/** @format int32 */
	championId: number
	/** @format uint64 */
	gameId: number
	leaver: boolean
	/** @format int32 */
	leaves: number
	/** @format int32 */
	level: number
	/** @format int32 */
	losses: number
	/** @format int32 */
	profileIconId: number
	/** @format int32 */
	"spell1Id": number
	/** @format int32 */
	"spell2Id": number
	summonerName: string
	/** @format int32 */
	teamId: number
	/** @format int32 */
	wins: number
	/** @format uint64 */
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
	/** @format int32 */
	pointChangeFromChampionsOwned: number
	/** @format int32 */
	pointChangeFromGameplay: number
	/** @format int32 */
	pointsUsed: number
	/** @format int32 */
	previousPoints: number
	/** @format int32 */
	pointsUntilNextReroll: number
	/** @format int32 */
	rerollCount: number
	/** @format int32 */
	totalPoints: number
}

export interface LolEndOfGameEndOfGameStats {
	difficulty: string
	/** @format uint64 */
	gameId: number
	/** @format int32 */
	gameLength: number
	gameMode: string
	gameMutators: string[]
	gameType: string
	invalid: boolean
	queueType: string
	ranked: boolean
	/** @format uint64 */
	reportGameId: number
	multiUserChatId: string
	multiUserChatPassword: string
	mucJwtDto: LolEndOfGameMucJwtDto
	teams: LolEndOfGameEndOfGameTeam[]
	localPlayer: LolEndOfGameEndOfGamePlayer
	myTeamStatus: string
	leveledUp: boolean
	newSpells: number[]
	/** @format uint64 */
	previousLevel: number
	/** @format int32 */
	rpEarned: number
	/** @format int32 */
	basePoints: number
	/** @format int32 */
	battleBoostIpEarned: number
	/** @format int32 */
	boostIpEarned: number
	/** @format int32 */
	firstWinBonus: number
	/** @format int32 */
	ipEarned: number
	/** @format int32 */
	ipTotal: number
	/** @format int32 */
	boostXpEarned: number
	/** @format int32 */
	experienceEarned: number
	/** @format int32 */
	experienceTotal: number
	/** @format int32 */
	globalBoostXpEarned: number
	/** @format int32 */
	loyaltyBoostXpEarned: number
	/** @format int32 */
	xbgpBoostXpEarned: number
	/** @format int32 */
	missionsXpEarned: number
	/** @format uint64 */
	previousXpTotal: number
	/** @format uint64 */
	nextLevelXp: number
	/** @format uint64 */
	currentLevel: number
	/** @format uint64 */
	preLevelUpExperienceTotal: number
	/** @format uint64 */
	preLevelUpNextLevelXp: number
	/** @format int32 */
	timeUntilNextFirstWinBonus: number
	causedEarlySurrender: boolean
	earlySurrenderAccomplice: boolean
	teamEarlySurrendered: boolean
	gameEndedInEarlySurrender: boolean
	rerollData: LolEndOfGameEndOfGamePoints
	teamBoost?: LolEndOfGameEndOfGameTeamBoost
}

export interface LolEndOfGameEndOfGameTeam {
	stats: unknown
	players: LolEndOfGameEndOfGamePlayer[]
	memberStatusString: string
	name: string
	tag: string
	fullId: string
	/** @format int32 */
	teamId: number
	isBottomTeam: boolean
	isPlayerTeam: boolean
	isWinningTeam: boolean
}

export interface LolEndOfGameEndOfGameTeamBoost {
	summonerName: string
	skinUnlockMode: string
	/** @format int64 */
	price: number
	/** @format int64 */
	ipReward: number
	/** @format int64 */
	ipRewardForPurchaser: number
	availableSkins: number[]
	unlocked: boolean
}

export interface LolEndOfGameGameClientEndOfGame {
	gameClientEOG: LolEndOfGameGameClientEndOfGameStats
}

export interface LolEndOfGameGameClientEndOfGameStats {
	/** @format uint64 */
	gameId: number
	gameMode: string
	statsBlock: unknown
	/** @format int32 */
	queueId: number
	queueType: string
	isRanked: boolean
}

export interface LolEndOfGameGameDataChampion {
	/** @format int32 */
	id: number
	skins: LolEndOfGameGameDataChampionSkin[]
}

export interface LolEndOfGameGameDataChampionQuestSkin {
	/** @format int32 */
	id: number
	splashPath: string
	tilePath: string
}

export interface LolEndOfGameGameDataChampionSkin {
	/** @format int32 */
	id: number
	splashPath: string
	tilePath: string
	chromas: LolEndOfGameGameDataSkinChroma[]
	questSkinInfo: LolEndOfGameGameDataQuestSkinInfo
}

export interface LolEndOfGameGameDataChampionSummary {
	/** @format int32 */
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
	tiers: LolEndOfGameGameDataChampionQuestSkin[]
}

export interface LolEndOfGameGameDataSkinChroma {
	/** @format int32 */
	id: number
}

export interface LolEndOfGameGameDataTFTChampion {
	name: string
	character_record: LolEndOfGameGameDataTFTCharacterRecord
}

export interface LolEndOfGameGameDataTFTCharacterRecord {
	path: string
	character_id: string
	/** @format int32 */
	rarity: number
	display_name: string
	squareIconPath: string
	traits: LolEndOfGameGameDataTftTrait[]
}

export interface LolEndOfGameGameDataTftItem {
	name: string
	/** @format int32 */
	id: number
	squareIconPath: string
	nameId: string
}

export interface LolEndOfGameGameDataTftPlaybook {
	/** @format int32 */
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
	/** @format uint16 */
	observerServerPort: number
	running: boolean
}

export interface LolEndOfGameGameflowGameData {
	/** @format uint64 */
	gameId: number
	queue: LolEndOfGameQueue
}

export type LolEndOfGameGameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"

export interface LolEndOfGameGameflowSession {
	phase: LolEndOfGameGameflowPhase
	gameClient: LolEndOfGameGameflowClient
	gameData: LolEndOfGameGameflowGameData
}

export interface LolEndOfGameLobbyInvitation {
	state: string
}

export interface LolEndOfGameLoginDataPacket {
	platformId: string
	simpleMessages: LolEndOfGameSimpleMessage[]
}

export interface LolEndOfGameLoginSession {
	state: LolEndOfGameLoginSessionStates
	/** @format uint64 */
	summonerId: number
	/** @format uint64 */
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
	/** @format uint64 */
	offenderSummonerId: number
	/** @format uint64 */
	gameId: number
	categories: string[]
	comment: string
}

export interface LolEndOfGameQueue {
	/** @format int32 */
	id: number
	type: string
	isRanked: boolean
}

export interface LolEndOfGameRerollDataBagForClientV1 {
	/** @format int32 */
	pointsGainedLastGame: number
	/** @format int32 */
	pointsUntilNextReroll: number
	/** @format int32 */
	rerollCount: number
	/** @format int32 */
	totalPoints: number
	/** @format int32 */
	maximumRerolls: number
	/** @format int32 */
	pointCostOfReroll: number
}

export interface LolEndOfGameSimpleMessage {
	/** @format uint64 */
	accountId: number
	msgId: string
	type: string
	params: string[]
}

export interface LolEndOfGameSummoner {
	/** @format uint64 */
	summonerId: number
	/** @format uint32 */
	summonerLevel: number
	/** @format uint64 */
	xpSinceLastLevel: number
	/** @format uint64 */
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
	/** @format int32 */
	id: number
	nameId: string
}

export interface LolEndOfGameTFTEndOfGamePieceViewModel {
	name: string
	icon: string
	/** @format uint32 */
	level: number
	/** @format uint32 */
	price: number
	items: LolEndOfGameTFTEndOfGameItemViewModel[]
	traits: LolEndOfGameTFTEndOfGameTraitViewModel[]
}

export interface LolEndOfGameTFTEndOfGamePlaybookViewModel {
	/** @format uint32 */
	itemId: number
	name: string
	iconSmall: string
}

export interface LolEndOfGameTFTEndOfGamePlayerViewModel {
	/** @format uint64 */
	summonerId: number
	summonerName: string
	riotIdGameName: string
	riotIdTagLine: string
	/** @format int32 */
	iconId: number
	puuid: string
	/** @format uint8 */
	ffaStanding: number
	/** @format uint8 */
	health: number
	/** @format uint8 */
	rank: number
	isLocalPlayer: boolean
	isInteractable: boolean
	/** @format uint8 */
	partnerGroupId: number
	boardPieces: LolEndOfGameTFTEndOfGamePieceViewModel[]
	augments: LolEndOfGameTFTEndOfGameItemViewModel[]
	companion: LolEndOfGameTFTEndOfGameCompanionViewModel
	playbook: LolEndOfGameTFTEndOfGamePlaybookViewModel
	customAugmentContainer: LolEndOfGameTFTEndOfGameCustomAugmentContainerViewModel
	setCoreName: string
}

export interface LolEndOfGameTFTEndOfGameTraitViewModel {
	id: string
	name: string
}

export interface LolEndOfGameTFTEndOfGameViewModel {
	players: LolEndOfGameTFTEndOfGamePlayerViewModel[]
	localPlayer?: LolEndOfGameTFTEndOfGamePlayerViewModel
	/** @format uint32 */
	gameLength: number
	/** @format uint64 */
	gameId: number
	/** @format int32 */
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
	"useServiceEndpointV2": boolean
	"notificationsServiceEndpointV2": string
	/** @format int64 */
	notificationsShortPollMinutes: number
	/** @format int64 */
	notificationsLongPollMinutes: number
	/** @format int64 */
	beappFailureLongPollMinutes: number
}

export interface LolEsportStreamNotificationsESportsAPI_streamgroups {
	/** @format int64 */
	id: number
	slug: string
	title: string
	live: boolean
	content: string
}

export interface LolEsportStreamNotificationsESportsAPI_streamgroups_root {
	streamgroups: LolEsportStreamNotificationsESportsAPI_streamgroups[]
	highlanderTournaments: LolEsportStreamNotificationsEsportsAPI_highlanderTournaments[]
	teams: LolEsportStreamNotificationsEsportsAPI_teams[]
}

export interface LolEsportStreamNotificationsESportsLiveStreams {
	liveStreams: LolEsportStreamNotificationsESportsStreams[]
}

export interface LolEsportStreamNotificationsESportsStreams {
	title: string
	tournamentDescription: string
	teamAGuid: string
	/** @format int64 */
	teamAId: number
	teamBGuid: string
	/** @format int64 */
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
	brackets: Record<string, LolEsportStreamNotificationsEsportsAPI_highlanderTournaments_brackets>
	rosters: Record<string, LolEsportStreamNotificationsEsportsAPI_highlanderTournaments_rosters>
}

export interface LolEsportStreamNotificationsEsportsAPI_highlanderTournaments_brackets {
	id: string
	matches: Record<string, LolEsportStreamNotificationsEsportsAPI_highlanderTournaments_matches>
}

export interface LolEsportStreamNotificationsEsportsAPI_highlanderTournaments_matches {
	id: string
	input: LolEsportStreamNotificationsEsportsAPI_highlanderTournaments_roster[]
}

export interface LolEsportStreamNotificationsEsportsAPI_highlanderTournaments_roster {
	roster: string
}

export interface LolEsportStreamNotificationsEsportsAPI_highlanderTournaments_rosters {
	id: string
	name: string
	/** @format int64 */
	team: number
}

export interface LolEsportStreamNotificationsEsportsAPI_teams {
	/** @format int64 */
	id: number
	guid: string
	slug: string
	name: string
	logoUrl: string
	acronym: string
}

export type LolEsportStreamNotificationsGameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"

export interface LolEsportStreamNotificationsGameflowSession {
	phase: LolEsportStreamNotificationsGameflowPhase
}

export interface LolEsportStreamNotificationsLiveMatch {
	id: string
	streamGroup: string
	title: string
	tournamentDescription: string
	teams: LolEsportStreamNotificationsLiveMatchTeam[]
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
	/** @format uint64 */
	id: number
	source: string
	state: string
	titleKey: string
	type: string
}

export interface LolEventHubAccessTokenResource {
	token: string
	scopes: string[]
	/** @format uint64 */
	expiry: number
}

export interface LolEventHubActivationClientConfig {
	hubEnabled: boolean
	/** @format double */
	activationSpreadSeconds: number
	/** @format double */
	firstActivationThresholdSeconds: number
	activeEventId: string
	startDate: string
	progressEndDate: string
	endDate: string
}

export interface LolEventHubActiveEventUIData {
	eventId: string
	eventInfo: LolEventHubEventInfoUIData
}

export interface LolEventHubBalance {
	currencyType: string
	/** @format int32 */
	amount: number
}

export interface LolEventHubBaseSkinLineDto {
	items: LolEventHubSkinLineItemDto[]
	localizedName: string
	skinLineDescriptions: LolEventHubSkinLineDescriptionDto[]
	pricingOptions: LolEventHubPriceOptionDto[]
	splashPath: string
	uncenteredSplashPath: string
	collectionCardPath: string
	collectionDescription: string
	tilePath: string
}

export interface LolEventHubBundleOfferUIData {
	details: LolEventHubBundledItemUIData
	/** @format int64 */
	initialPrice: number
	/** @format int64 */
	finalPrice: number
	/** @format int64 */
	futureBalance: number
	isPurchasable: boolean
	/** @format double */
	discountPercentage: number
	bundledItems: LolEventHubBundledItemUIData[]
}

export interface LolEventHubBundledItemPricingInfo {
	discountPrices: LolEventHubDiscountPricingInfo[]
	inventoryType: string
	/** @format int32 */
	itemId: number
	/** @format int32 */
	quantity: number
}

export interface LolEventHubBundledItemUIData {
	name: string
	/** @format int32 */
	itemId: number
	description: string
	inventoryType: string
	subInventoryType: string
	splashImage: string
	owned: boolean
	/** @format uint32 */
	quantity: number
}

export interface LolEventHubCapOffer {
	id: string
	typeId: string
	label: string
	productId: string
	merchantId: string
	payload: LolEventHubCapOfferPayloadEntry[]
	active: boolean
	startDate: string
	createdDate: string
}

export interface LolEventHubCapOfferPayloadEntry {
	itemPriceMap: Record<string, number>
	itemInstanceId: string
	fulfillmentTypeId: string
	inventoryTypeUUID: string
}

export interface LolEventHubCapOrdersDataDto {
	id: string
	subOrders: LolEventHubCapOrdersSubOrderDto[]
	purchaser: LolEventHubCapOrdersTypedIdentifierDto
	location: string
	source: string
}

export interface LolEventHubCapOrdersMetaDto {
	xid: string
}

export interface LolEventHubCapOrdersOfferContextDto {
	/** @format uint32 */
	quantity: number
	paymentOption: string
}

export interface LolEventHubCapOrdersOfferDto {
	id: string
	productId: string
}

export interface LolEventHubCapOrdersOrderDto {
	data: LolEventHubCapOrdersDataDto
	meta: LolEventHubCapOrdersMetaDto
}

export interface LolEventHubCapOrdersSubOrderDto {
	recipientId: string
	offerContext: LolEventHubCapOrdersOfferContextDto
	offer: LolEventHubCapOrdersOfferDto
}

export interface LolEventHubCapOrdersTypedIdentifierDto {
	id: string
	typeId: string
}

export interface LolEventHubCatalogEntry {
	contentId: string
	/** @format int32 */
	itemId: number
	offerId: string
	typeId: string
}

export interface LolEventHubCatalogItem {
	/** @format int32 */
	itemId: number
	inventoryType: string
	itemInstanceId?: string
}

export interface LolEventHubCatalogPluginItem {
	/** @format int32 */
	itemId: number
	itemInstanceId: string
	owned: boolean
	inventoryType: string
	subInventoryType: string
	name: string
	subTitle: string
	description: string
	imagePath: string
	/** @format uint64 */
	purchaseDate: number
	/** @format uint64 */
	releaseDate: number
	/** @format uint64 */
	inactiveDate: number
	prices: LolEventHubCatalogPluginPrice[]
	tags?: string[]
	metadata?: LolEventHubItemMetadataEntry[]
	questSkinInfo?: LolEventHubSkinLineInfo
	active: boolean
	ownershipType?: LolEventHubInventoryOwnership
}

export interface LolEventHubCatalogPluginItemAssets {
	splashPath: string
	iconPath: string
	tilePath: string
	emblems: LolEventHubChampionSkinEmblem[]
	colors: string[]
}

export interface LolEventHubCatalogPluginItemWithDetails {
	item: LolEventHubCatalogPluginItem
	/** @format uint32 */
	quantity: number
	requiredItems?: LolEventHubCatalogPluginItemWithDetails[]
	bundledItems?: LolEventHubCatalogPluginItemWithDetails[]
	minimumBundlePrices?: LolEventHubCatalogPluginPrice[]
	bundledDiscountPrices?: LolEventHubCatalogPluginPrice[]
	assets: LolEventHubCatalogPluginItemAssets
}

export interface LolEventHubCatalogPluginPrice {
	currency: string
	/** @format int64 */
	cost: number
	costType?: string
	sale?: LolEventHubCatalogPluginSale
}

export interface LolEventHubCatalogPluginSale {
	startDate: string
	endDate: string
	/** @format float */
	discount?: number
	/** @format int64 */
	cost: number
}

export interface LolEventHubCategoryOffersUIData {
	category: LolEventHubOfferCategory
	categoryIconPath: string
	offers: LolEventHubOfferUIData[]
}

export type LolEventHubCelebrationType = "FULLSCREEN" | "TOAST" | "NONE"

export interface LolEventHubChampionSkinEmblem {
	name: string
	emblemPath: LolEventHubChampionSkinEmblemPath
	emblemPosition: LolEventHubChampionSkinEmblemPosition
}

export interface LolEventHubChampionSkinEmblemPath {
	large: string
	small: string
}

export interface LolEventHubChampionSkinEmblemPosition {
	vertical: string
	horizontal: string
}

export interface LolEventHubClientCacheClearMessageDTO {
	regions: string[]
	clearAll: boolean
	inventoryTypes: string[]
}

export interface LolEventHubContentDrop {
	patch: string
	activationDate: string
	offers: LolEventHubOffer[]
}

export interface LolEventHubContentDropClientConfig {
	patch: string
	activationDate: string
}

export interface LolEventHubCounter {
	id: string
	name: string
	groupId: string
	direction: string
	/** @format int64 */
	startValue: number
}

export interface LolEventHubCounterInstance {
	ownerId: string
	productId: string
	groupId: string
	counterId: string
	/** @format int64 */
	counterValue: number
}

export interface LolEventHubCurrencyDTO {
	/** @format int32 */
	amount: number
	subCurrencies: Record<string, number>
}

export interface LolEventHubDiscountPricingInfo {
	/** @format int32 */
	cost: number
	/** @format int32 */
	originalCost: number
	costType: string
	currency: string
	/** @format float */
	discount: number
}

export interface LolEventHubEndOfGameXp {
	/** @format uint32 */
	PER_WIN: number
}

export interface LolEventHubEndOfGameXpNotification {
	xp: LolEventHubEndOfGameXp
}

export interface LolEventHubEntityInstance {
	groupId: string
	counters: LolEventHubCounterInstance[]
	milestones: LolEventHubMilestoneInstance[]
}

export interface LolEventHubEventBackgroundUIData {
	backgroundImagePath: string
}

export interface LolEventHubEventDetailsUIData {
	eventIconPath: string
	eventName: string
	headerTitleImagePath: string
	progressEndDate: string
	shopEndDate: string
	eventStartDate: string
	helpModalImagePath: string
	inducteeName: string
	promotionBannerImage: string
}

export interface LolEventHubEventHubError {
	errorMessage: string
	errorId: string
}

export type LolEventHubEventHubType = "HallOfLegends" | "EventShop"

export interface LolEventHubEventInfoUIData {
	eventId: string
	eventName: string
	eventType: string
	eventIcon: string
	eventTokenImage: string
	/** @format int32 */
	currentTokenBalance: number
	/** @format int32 */
	lockedTokenCount: number
	/** @format int32 */
	unclaimedRewardCount: number
	/** @format int64 */
	timeOfLastUnclaimedReward: number
	isPassPurchased: boolean
	eventPassBundles: LolEventHubCatalogEntry[]
	tokenBundles: LolEventHubCatalogEntry[]
}

export interface LolEventHubEventPassInfo {
	eventId: string
	isPassPurchased: boolean
}

export interface LolEventHubEventShop {
	eventId: string
	eventHubType: string
	localizedName: string
	backgroundImage: string
	navbarIconImage: string
	headerIconImage: string
	startDate: string
	progressEndDate: string
	endDate: string
	localizedUpsellTitle: string
	localizedUpsellTooltipTitle: string
	localizedUpsellTooltipDescription: string
	localizedUpsellButtonText: string
	upsellBackgroundImageUrl: string
	upsellTooltipBackgroundImageUrl: string
	helpModalImage: string
	eventPassBundlesCatalogEntry: LolEventHubCatalogEntry[]
	tokenShop: LolEventHubTokenShop
	rewardTrack: LolEventHubRewardTrack
}

export interface LolEventHubEventShopClientConfig {
	disabledOfferIds: string[]
	contentDrops: LolEventHubContentDropClientConfig[]
}

export type LolEventHubExternalCatalogInventoryOwnership = "F2P" | "LOYALTY" | "RENTED" | "OWNED"

export interface LolEventHubExternalCatalogItemCost {
	currency: string
	/** @format int64 */
	cost: number
	/** @format float */
	discount?: number
}

export interface LolEventHubExternalCatalogItemKey {
	inventoryType: string
	/** @format int32 */
	itemId: number
}

export interface LolEventHubExternalCatalogPluginItem {
	/** @format int32 */
	itemId: number
	itemInstanceId: string
	owned: boolean
	ownershipType?: LolEventHubExternalCatalogInventoryOwnership
	inventoryType: string
	subInventoryType: string
	name: string
	subTitle: string
	description: string
	imagePath: string
	/** @format uint64 */
	purchaseDate: number
	/** @format uint64 */
	releaseDate: number
	/** @format uint64 */
	inactiveDate: number
	prices: LolEventHubExternalCatalogPluginPrice[]
	tags?: string[]
	active: boolean
	sale?: LolEventHubExternalCatalogSale
	offerId?: string
}

export interface LolEventHubExternalCatalogPluginItemAssets {
	splashPath: string
	iconPath: string
	tilePath: string
	colors: string[]
}

export interface LolEventHubExternalCatalogPluginItemWithDetails {
	item: LolEventHubExternalCatalogPluginItem
	/** @format uint32 */
	quantity: number
	requiredItems?: LolEventHubExternalCatalogPluginItemWithDetails[]
	bundledItems?: LolEventHubExternalCatalogPluginItemWithDetails[]
	minimumBundlePrices?: LolEventHubExternalCatalogPluginPrice[]
	bundledDiscountPrices?: LolEventHubExternalCatalogPluginPrice[]
	metadata: LolEventHubExternalItemMetadataEntry[]
}

export interface LolEventHubExternalCatalogPluginPrice {
	currency: string
	/** @format int64 */
	cost: number
	costType?: string
	sale?: LolEventHubExternalCatalogPluginRetailDiscount
}

export interface LolEventHubExternalCatalogPluginRetailDiscount {
	startDate: string
	endDate: string
	/** @format float */
	discount?: number
	/** @format int64 */
	cost: number
}

export interface LolEventHubExternalCatalogSale {
	startDate: string
	endDate: string
	prices: LolEventHubExternalCatalogItemCost[]
}

export interface LolEventHubExternalItemMetadataEntry {
	type: string
	value: string
}

export type LolEventHubGrantStatus = "FAILED" | "FULFILLED" | "PENDING_SELECTION" | "PENDING_FULFILLMENT"

export interface LolEventHubGrantorDescription {
	appName: string
	entityId: string
}

export interface LolEventHubGroup {
	id: string
	productId: string
	name: string
	repeat: LolEventHubRepeat
	counters: LolEventHubCounter[]
	milestones: LolEventHubMilestone[]
}

export interface LolEventHubHallOfLegends {
	eventId: string
	eventHubType: string
	localizedName: string
	navbarIconImage: string
	headerIconImage: string
	headerTitleImage: string
	startDate: string
	progressEndDate: string
	endDate: string
	helpModalImage: string
	inducteeName: string
	promotionBannerImage: string
	eventPassBundlesCatalogEntry: LolEventHubCatalogEntry[]
	progressionPurchaseCatalogEntry: LolEventHubCatalogEntry
	skinIds: string[]
	rewardTrack: LolEventHubRewardTrack
	narrativeElements: LolEventHubNarrativeElement[]
	localizedUpsellTitle: string
	localizedUpsellTooltipTitle: string
	localizedUpsellTooltipDescription: string
	localizedUpsellButtonText: string
	upsellBackgroundImageUrl: string
	upsellTooltipBackgroundImageUrl: string
	upsellIconUrl: string
}

export interface LolEventHubHallOfLegendsClientConfig {
	narrativeElements: LolEventHubNarrativeElement[]
}

export interface LolEventHubInventoryCacheEntry {
	signedInventoryJwt: string
	/** @format uint64 */
	expirationMS: number
	/** @format uint64 */
	issuedAtMS: number
	/** @format uint64 */
	receivedAtMS: number
	valid: boolean
}

export interface LolEventHubInventoryDTO {
	puuid: string
	/** @format uint64 */
	accountId: number
	/** @format uint64 */
	summonerId: number
	items: Record<string, unknown>
	expires: string
	itemsJwt: string
}

export interface LolEventHubInventoryItem {
	uuid: string
	/** @format int32 */
	itemId: number
	inventoryType: string
	purchaseDate: string
	/** @format uint64 */
	quantity: number
	ownershipType: LolEventHubItemOwnershipType
	expirationDate: string
	/** @format uint64 */
	wins: number
}

export interface LolEventHubInventoryItemDTO {
	/** @format int32 */
	itemId: number
	inventoryType: string
	expirationDate: string
	purchaseDate: string
	/** @format uint64 */
	quantity: number
	/** @format uint64 */
	ownedQuantity: number
	usedInGameDate: string
	entitlementId: string
	entitlementTypeId: string
	instanceId: string
	instanceTypeId: string
	payload: unknown
	"f2p": boolean
	rental: boolean
	loyalty: boolean
	loyaltySources: string[]
	lsb: boolean
	/** @format uint64 */
	wins: number
}

export interface LolEventHubInventoryItemWithPayload {
	uuid: string
	/** @format int32 */
	itemId: number
	inventoryType: string
	purchaseDate: string
	/** @format uint64 */
	quantity: number
	ownershipType: LolEventHubItemOwnershipType
	expirationDate: string
	"f2p": boolean
	rental: boolean
	loyalty: boolean
	loyaltySources: string[]
	owned: boolean
	/** @format uint64 */
	wins: number
	payload: unknown
}

export interface LolEventHubInventoryNotification {
	/** @format int64 */
	id: number
	/** @format int32 */
	itemId: number
	inventoryType: string
	type: string
	acknowledged: boolean
}

export type LolEventHubInventoryOwnership = "F2P" | "LOYALTY" | "RENTED" | "OWNED"

export interface LolEventHubInventoryResponseDTO {
	data: LolEventHubInventoryDTO
}

export interface LolEventHubItem {
	itemId: string
	inventoryType: string
	/** @format uint32 */
	price: number
	/** @format uint32 */
	quantity: number
}

export interface LolEventHubItemChoiceDetails {
	item: LolEventHubCatalogPluginItem
	backgroundImage: string
	contents: LolEventHubItemDetails[]
	discount: string
	/** @format uint32 */
	fullPrice: number
	displayType: string
	purchaseOptions: LolEventHubPurchaseOption[]
}

export interface LolEventHubItemChoices {
	choices: LolEventHubItemChoiceDetails[]
	validationErrors: LolEventHubValidationErrorEntry[]
}

export interface LolEventHubItemCost {
	currency: string
	/** @format int64 */
	cost: number
	/** @format float */
	discount?: number
}

export interface LolEventHubItemDefinition {
	/** @format int32 */
	itemId: number
	inventoryType: string
	subInventoryType: string
	name: string
	description: string
	subTitle: string
	imagePath: string
	owned: boolean
	assets: LolEventHubCatalogPluginItemAssets
	tags: string[]
	metadata: LolEventHubItemMetadataEntry[]
	bundledItemPrice?: LolEventHubBundledItemPricingInfo
	loyaltyUnlocked: boolean
	hasVisibleLootOdds: boolean
}

export interface LolEventHubItemDetails {
	title: string
	subTitle: string
	description: string
	iconUrl: string
}

export interface LolEventHubItemKey {
	inventoryType: string
	/** @format int32 */
	itemId: number
}

export interface LolEventHubItemMetadataEntry {
	type: string
	value: string
}

export interface LolEventHubItemOrderDTO {
	inventoryType: string
	/** @format int32 */
	itemId: number
	/** @format uint32 */
	quantity: number
	/** @format uint32 */
	rpCost: number
}

export interface LolEventHubItemOwnership {
	itemKey: LolEventHubItemKey
	/** @format int32 */
	quantity: number
}

export type LolEventHubItemOwnershipType = "F2P" | "LOYALTY" | "RENTED" | "OWNED"

export interface LolEventHubItemPrice {
	currencyType: string
	/** @format int64 */
	price: number
	purchasable: boolean
}

export interface LolEventHubItemSale {
	startDate: string
	endDate: string
	/** @format float */
	discount?: number
}

export interface LolEventHubItemUIData {
	itemId: string
	inventoryType: string
	/** @format uint32 */
	price: number
	/** @format uint32 */
	quantity: number
}

export interface LolEventHubLoginSession {
	puuid?: string
	state: LolEventHubLoginSessionStates
	/** @format uint64 */
	summonerId: number
	/** @format uint64 */
	accountId: number
	idToken: string
}

export type LolEventHubLoginSessionStates = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"

export interface LolEventHubLoyaltyRewards {
	/** @format int32 */
	freeRewardedChampionsCount: number
	championIds: number[]
	/** @format int32 */
	freeRewardedSkinsCount: number
	skinIds: number[]
	/** @format int32 */
	ipBoost: number
	xpBoost: Record<string, number>
	/** @format int32 */
	loyaltyTFTMapSkinCount: number
	/** @format int32 */
	loyaltyTFTCompanionCount: number
	/** @format int32 */
	loyaltyTFTDamageSkinCount: number
	loyaltySources: Record<string, boolean>
}

export interface LolEventHubLoyaltyRewardsSimplified {
	/** @format int32 */
	freeRewardedChampionsCount: number
	championIds: number[]
	/** @format int32 */
	freeRewardedSkinsCount: number
	skinIds: number[]
	/** @format int32 */
	ipBoost: number
	/** @format int32 */
	xpBoost: number
	/** @format int32 */
	loyaltyTFTMapSkinCount: number
	/** @format int32 */
	loyaltyTFTCompanionCount: number
	/** @format int32 */
	loyaltyTFTDamageSkinCount: number
	loyaltySources: Record<string, boolean>
}

export type LolEventHubLoyaltyStatus = "DISABLED" | "REVOKE" | "CHANGE" | "EXPIRY" | "REWARDS_GRANT" | "LEGACY"

export interface LolEventHubLoyaltyStatusNotification {
	status: LolEventHubLoyaltyStatus
	rewards: LolEventHubLoyaltyRewardsSimplified
	reloadInventory: boolean
}

export interface LolEventHubMilestone {
	id: string
	name: string
	groupId: string
	counterId: string
	/** @format int64 */
	triggerValue: number
	properties: Record<string, string>
}

export interface LolEventHubMilestoneInstance {
	milestoneId: string
	instanceId: string
	ownerId: string
	productId: string
	groupId: string
	counterId: string
	/** @format int64 */
	triggerValue: number
	/** @format uint32 */
	repeatSequence: number
	triggered: boolean
	triggeredTimestamp: string
	triggers: LolEventHubTrigger[]
}

export interface LolEventHubNarrativeElement {
	localizedNarrativeTitle: string
	localizedNarrativeDescription: string
	narrativeBackgroundImage: string
	/** @format uint16 */
	narrativeStartingTrackLevel: number
	narrativeVideo: LolEventHubNarrativeVideo
}

export interface LolEventHubNarrativeVideo {
	localizedNarrativeVideoUrl: string
	localizedPlayNarrativeButtonLabel: string
	narrativeVideoIsLockedOnLevel?: boolean
}

export interface LolEventHubNavigationButtonUIData {
	activeEventId: string
	showPip: boolean
	showGlow: boolean
	iconPath: string
}

export interface LolEventHubOffer {
	id: string
	localizedTitle: string
	localizedDescription: string
	image: string
	promotionType: LolEventHubOfferPromotionType
	offerCategory: LolEventHubOfferCategory
	items: LolEventHubItem[]
}

export type LolEventHubOfferCategory = "Currencies" | "Tft" | "Loot" | "Borders" | "Skins" | "Chromas" | "Featured"

export type LolEventHubOfferPromotionType = "kFeaturedHighlighted" | "kFeatured" | "kNone"

export type LolEventHubOfferStates = "kPurchasing" | "kUnrevealed" | "kUnavailable" | "kAvailable" | "kOwned"

export interface LolEventHubOfferUIData {
	id: string
	localizedTitle: string
	localizedDescription: string
	image: string
	highlighted: boolean
	offerState: LolEventHubOfferStates
	/** @format uint32 */
	price: number
	/** @format uint32 */
	maxQuantity: number
	items: LolEventHubItemUIData[]
}

export interface LolEventHubOrderNotificationResource {
	eventTypeId: string
	eventType: string
	status: string
}

export interface LolEventHubPlayerNotification {
	critical: boolean
	detailKey: string
	source: string
	state: string
	titleKey: string
	type: string
	iconUrl: string
}

export interface LolEventHubPlayerSettingsData {
	lastTimeSeen: string
	/** @format int64 */
	lastSeenTokenBalance: number
	/** @format uint32 */
	lastSeenTokenShopOffersVersion: number
}

export interface LolEventHubPriceDetail {
	itemKey: LolEventHubItemKey
	price: LolEventHubItemPrice
}

export interface LolEventHubPriceOptionDto {
	/** @format int64 */
	price: number
	currencyType: string
	currencyPaymentOption?: string
	currencyName?: string
	currencyImagePath?: string
}

export interface LolEventHubProgressInfoUIData {
	tokenImage: string
	passPurchased: boolean
	eventPassBundlesCatalogEntry: LolEventHubCatalogEntry[]
}

export interface LolEventHubProgressionPurchaseUIData {
	offerId: string
	/** @format int64 */
	pricePerLevel: number
	/** @format int64 */
	rpBalance: number
}

export interface LolEventHubPurchasableItem {
	item: LolEventHubItemDefinition
	dependencies: LolEventHubItemDefinition[]
	bundledItems: LolEventHubItemDefinition[]
	sale?: LolEventHubItemSale
	purchaseOptions: LolEventHubPurchaseOption[]
	validationErrors: LolEventHubValidationErrorEntry[]
}

export interface LolEventHubPurchaseItem {
	itemKey: LolEventHubItemKey
	/** @format int32 */
	quantity: number
	source: string
	purchaseCurrencyInfo: LolEventHubItemPrice
}

export type LolEventHubPurchaseOfferOrderStates = "SUCCESS" | "FAIL" | "IN_PROGRESS" | "NOT_STARTED"

export interface LolEventHubPurchaseOfferOrderStatus {
	orderState: LolEventHubPurchaseOfferOrderStates
	message: string
}

export interface LolEventHubPurchaseOfferOrderStatuses {
	statuses: Record<string, LolEventHubPurchaseOfferOrderStatus>
}

export interface LolEventHubPurchaseOfferRequest {
	offerId: string
	/** @format uint32 */
	purchaseQuantity: number
}

export interface LolEventHubPurchaseOfferRequestV3 {
	offerId: string
	currencyType: string
	/** @format uint32 */
	quantity: number
	/** @format uint32 */
	price: number
}

export interface LolEventHubPurchaseOfferResponseV3 {
	legacy: boolean
	orderDto?: LolEventHubCapOrdersOrderDto
}

export interface LolEventHubPurchaseOption {
	priceDetails: LolEventHubPriceDetail[]
}

export interface LolEventHubPurchaseOrderResponseDTO {
	/** @format int64 */
	rpBalance: number
	/** @format int64 */
	ipBalance: number
	transactions: LolEventHubTransactionResponseDTO[]
}

export interface LolEventHubPurchaseRequest {
	items: LolEventHubPurchaseItem[]
}

export interface LolEventHubPurchaseResponse {
	items: LolEventHubPurchaseItem[]
	transactions: LolEventHubTransaction[]
	useRMSConfirmation: boolean
}

export interface LolEventHubPurchaseWidgetConfig {
	enabled: boolean
	nonRefundableDisclaimerEnabled: boolean
	alwaysShowPurchaseDisclaimer: boolean
}

export interface LolEventHubRMSPayload {
	productId: string
	affinities: string[]
}

export interface LolEventHubRegionLocale {
	region: string
	locale: string
}

export interface LolEventHubRepeat {
	/** @format int32 */
	count: number
	/** @format uint32 */
	scope: number
	/** @format float */
	multiplier: number
	milestones: LolEventHubMilestone[]
	repeatTriggers: LolEventHubRepeatGroupTrigger[]
}

export interface LolEventHubRepeatGroupTrigger {
	type: string
	counterId: string
	/** @format uint16 */
	startTriggerValue: number
	/** @format uint16 */
	increaseBy: number
	/** @format float */
	multiplier: number
}

export interface LolEventHubRequestDTO_SelectionRequestDTO {
	data: LolEventHubSelectionRequestDTO
	metadata: LolEventHubRequestMetadataDTO
}

export interface LolEventHubRequestDTO_vector_SelectionRequestDTO {
	data: LolEventHubSelectionRequestDTO[]
	metadata: LolEventHubRequestMetadataDTO
}

export interface LolEventHubRequestDTO_vector_string {
	data: string[]
	metadata: LolEventHubRequestMetadataDTO
}

export interface LolEventHubRequestMetadataDTO {
	transactionId?: string
}

export interface LolEventHubResponseDTO_SvcRewardGrant {
	data: LolEventHubSvcRewardGrant
	metadata: LolEventHubResponseMetadataDTO
}

export interface LolEventHubResponseDTO_map_RewardGroupId_SelectGrantStatus {
	data: Record<string, LolEventHubSelectGrantStatusResponse>
	metadata: LolEventHubResponseMetadataDTO
}

export interface LolEventHubResponseDTO_vector_SvcRewardGrant {
	data: LolEventHubSvcRewardGrant[]
	metadata: LolEventHubResponseMetadataDTO
}

export interface LolEventHubResponseDTO_vector_SvcRewardGroup {
	data: LolEventHubSvcRewardGroup[]
	metadata: LolEventHubResponseMetadataDTO
}

export interface LolEventHubResponseMetadataDTO {
	[key: string | number]: any
}

export interface LolEventHubReward {
	id: string
	itemId: string
	itemType: string
	/** @format int32 */
	quantity: number
	fulfillmentSource: string
	media: Record<string, string>
	localizations: Record<string, string>
}

export interface LolEventHubRewardGrant {
	info: LolEventHubSvcRewardGrant
	rewardGroup: LolEventHubSvcRewardGroup
}

export type LolEventHubRewardStatus = "FAILED" | "FULFILLED" | "PENDING"

export type LolEventHubRewardStrategy = "SELECTION" | "RANDOM" | "ALL"

export interface LolEventHubRewardTrack {
	trackConfig: LolEventHubRewardTrackConfiguration
}

export interface LolEventHubRewardTrackConfiguration {
	id: string
	premiumEntitlementId: string
}

export interface LolEventHubRewardTrackItem {
	state: LolEventHubRewardTrackItemStates
	rewardOptions: LolEventHubRewardTrackItemOption[]
	rewardTags: LolEventHubRewardTrackItemTag[]
	/** @format int64 */
	progressRequired: number
	threshold: string
}

export type LolEventHubRewardTrackItemHeaderType = "NONE" | "FREE" | "PREMIUM"

export interface LolEventHubRewardTrackItemOption {
	state: LolEventHubRewardTrackItemStates
	thumbIconPath: string
	splashImagePath: string
	selected: boolean
	overrideFooter: string
	headerType: LolEventHubRewardTrackItemHeaderType
	rewardName: string
	rewardDescription: string
	cardSize: string
	rewardGroupId: string
	celebrationType: LolEventHubCelebrationType
}

export type LolEventHubRewardTrackItemStates = "Selected" | "Unselected" | "Unlocked" | "Locked"

export type LolEventHubRewardTrackItemTag = "Multiple" | "Choice" | "Instant" | "Free" | "Rare"

export interface LolEventHubRewardTrackProgress {
	/** @format int16 */
	level: number
	/** @format int16 */
	totalLevels: number
	/** @format uint16 */
	levelProgress: number
	/** @format uint16 */
	futureLevelProgress: number
	/** @format int64 */
	passProgress: number
	/** @format int64 */
	currentLevelXP: number
	/** @format int64 */
	totalLevelXP: number
	/** @format uint32 */
	iteration: number
}

export interface LolEventHubRewardTrackXP {
	/** @format int64 */
	currentLevel: number
	/** @format int64 */
	currentLevelXP: number
	/** @format int64 */
	totalLevelXP: number
	isBonusPhase: boolean
	/** @format uint32 */
	iteration: number
}

export interface LolEventHubRewardsConfig {
	GrantFiltering: boolean
}

export interface LolEventHubRiotMessagingServiceMessage {
	resource: string
	service: string
	version: string
	/** @format int64 */
	timestamp: number
	payload: string
}

export interface LolEventHubRmsEntitlementPayload {
	itemId: string
	itemTypeId: string
	entitlementTypeId: string
	resourceOperation: string
}

export interface LolEventHubRmsStoreEntitlementItem {
	inventoryType: string
	itemId: string
}

export interface LolEventHubRmsStoreEntitlementPayload {
	transactionId: string
	items: LolEventHubRmsStoreEntitlementItem[]
}

export interface LolEventHubRmsWalletPayload {
	[key: string | number]: any
}

export interface LolEventHubRmsXboxSubscriptionChange {
	puuid: string
	subscriptionId: string
	active: string
	identityProvider: string[]
}

export interface LolEventHubSale {
	startDate: string
	endDate: string
	prices: LolEventHubItemCost[]
}

export type LolEventHubSelectGrantStatusResponse = "FAILED" | "SELECTED"

export interface LolEventHubSelectionRequestDTO {
	grantId: string
	rewardGroupId: string
	selections: string[]
}

export interface LolEventHubSelectionStrategyConfig {
	/** @format uint32 */
	minSelectionsAllowed: number
	/** @format uint32 */
	maxSelectionsAllowed: number
}

export interface LolEventHubSettingsResource {
	data: LolEventHubPlayerSettingsData
	/** @format int16 */
	schemaVersion: number
}

export interface LolEventHubSimpleInventoryDTO {
	items: Record<string, unknown>
	itemsJwt: string
	expires: string
}

export interface LolEventHubSimpleInventoryResponseDTO {
	data: LolEventHubSimpleInventoryDTO
}

export interface LolEventHubSkinLineDescriptionDto {
	title: string
	description: string
	iconImagePath: string
}

export interface LolEventHubSkinLineDescriptionInfo {
	title: string
	description: string
	iconPath: string
}

export interface LolEventHubSkinLineInfo {
	name: string
	descriptionInfo: LolEventHubSkinLineDescriptionInfo[]
	splashPath: string
	tilePath: string
	collectionCardPath: string
	uncenteredSplashPath: string
	collectionDescription: string
	tiers: LolEventHubSkinLineTier[]
}

export interface LolEventHubSkinLineItemDto {
	thumbnailImagePath: string
	largeImagePath?: string
	localizedLongName: string
	localizedShortName: string
	largeVideoPath?: string
}

export interface LolEventHubSkinLineTier {
	/** @format int64 */
	id: number
	name: string
	/** @format int64 */
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

export interface LolEventHubSummonerIcon {
	/** @format int32 */
	itemId: number
}

export interface LolEventHubSvcRewardGrant {
	id: string
	granteeId: string
	rewardGroupId: string
	dateCreated: string
	status: LolEventHubGrantStatus
	grantElements: LolEventHubSvcRewardGrantElement[]
	selectedIds: string[]
	viewed: boolean
	grantorDescription: LolEventHubGrantorDescription
	messageParameters: Record<string, unknown>
}

export interface LolEventHubSvcRewardGrantElement {
	elementId: string
	itemId: string
	itemType: string
	fulfillmentSource: string
	status: LolEventHubRewardStatus
	/** @format int32 */
	quantity: number
	media: Record<string, string>
	localizations: Record<string, string>
}

export interface LolEventHubSvcRewardGroup {
	id: string
	productId: string
	types: string[]
	rewards: LolEventHubReward[]
	childRewardGroupIds: string[]
	rewardStrategy: LolEventHubRewardStrategy
	selectionStrategyConfig?: LolEventHubSelectionStrategyConfig
	active: boolean
	media: Record<string, string>
	localizations: Record<string, string>
	celebrationType: LolEventHubCelebrationType
}

export interface LolEventHubTokenShop {
	tokenImage: string
	tokenName: string
	tokenUuid: string
	offers: LolEventHubOffer[]
	contentDrops: LolEventHubContentDrop[]
	tokenBundlesCatalogEntry: LolEventHubCatalogEntry[]
}

export interface LolEventHubTokenShopUIData {
	tokenName: string
	tokenImage: string
	tokenUuid: string
	/** @format uint32 */
	offersVersion: number
	tokenBundlesCatalogEntry: LolEventHubCatalogEntry[]
}

export interface LolEventHubTokenUpsell {
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
	/** @format int32 */
	dependentInventoryId: number
	currentlyLocked: LolEventHubTokenUpsellLockedType
	/** @format int32 */
	lockedCount: number
	startDate: string
	endDate: string
}

export type LolEventHubTokenUpsellLockedType = "UNLOCKED" | "LOCKED" | "UNASSIGNED"

export interface LolEventHubTransaction {
	transactionId: string
	itemKey: LolEventHubItemKey
	itemName: string
	iconUrl: string
}

export interface LolEventHubTransactionResponseDTO {
	id: string
	inventoryType: string
	/** @format int32 */
	itemId: number
}

export interface LolEventHubTrigger {
	type: string
	counterId: string
	/** @format uint64 */
	triggerValue: number
}

export interface LolEventHubUnclaimedRewardsUIData {
	/** @format int32 */
	rewardsCount: number
	/** @format int32 */
	lockedTokensCount: number
	/** @format int64 */
	timeOfLastUnclaimedReward: number
}

export interface LolEventHubValidateOfferError {
	errorKey: string
	meta: string
}

export interface LolEventHubValidateOfferRequestV3 {
	offerId: string
}

export interface LolEventHubValidateOfferResponseV3 {
	validationErrors: LolEventHubValidateOfferError[]
}

export interface LolEventHubValidationError {
	errorCode: string
	message: string
	errorDetails: Record<string, string>
	responseItems: string[]
}

export interface LolEventHubValidationErrorEntry {
	id: string
}

export interface LolEventHubValidationRequest {
	items: LolEventHubValidationRequestItem[]
	ownedItems: LolEventHubItemOwnership[]
}

export interface LolEventHubValidationRequestItem {
	itemKey: LolEventHubItemKey
	/** @format int32 */
	quantity: number
}

export interface LolEventHubValidationResponse {
	items: LolEventHubValidationResponseItem[]
	valid: boolean
}

export interface LolEventHubValidationResponseItem {
	itemKey: LolEventHubItemKey
	/** @format int32 */
	quantity: number
	validationCurrencyInfo: LolEventHubItemPrice[]
	sale?: LolEventHubSale
	name?: string
	description?: string
}

export interface LolEventHubWallet {
	/** @format uint64 */
	accountId: number
	balances: LolEventHubBalance[]
	/** @format int32 */
	version: number
}

export interface LolEventHubWalletCacheEntry {
	signedBalancesJwt: string
	/** @format uint64 */
	expirationMS: number
	/** @format uint64 */
	issuedAtMS: number
	/** @format uint64 */
	receivedAtMS: number
	valid: boolean
}

export interface LolEventHubWalletDTO {
	puuid: string
	/** @format int64 */
	accountId: number
	expires: string
	balances: Record<string, number>
	balancesJwt: string
}

export interface LolEventHubWalletResponseDTO {
	data: LolEventHubWalletDTO
}

export interface LolEventHubXboxSubscriptionStatus {
	active: string
	subscriptionId: string
}

export interface LolFeaturedModesAccountIdAndSummonerId {
	/** @format uint64 */
	summonerId: number
}

export interface LolFeaturedModesCollectionsOwnership {
	loyaltyReward: boolean
	xboxGPReward: boolean
	owned: boolean
}

export interface LolFeaturedModesCollectionsSummonerIcon {
	/** @format int32 */
	iconId: number
	ownership: LolFeaturedModesCollectionsOwnership
}

export interface LolFeaturedModesEligibility {
	/** @format int32 */
	queueId: number
	eligible: boolean
	restrictions: LolFeaturedModesEligibilityRestriction[]
}

export interface LolFeaturedModesEligibilityRestriction {
	restrictionCode: LolFeaturedModesEligibilityRestrictionCode
	restrictionArgs: Record<string, string>
	/** @format uint64 */
	expiredTimestamp: number
	summonerIds: number[]
}

export type LolFeaturedModesEligibilityRestrictionCode = "UnknownRestriction" | "QueueEntryNotEntitledRestriction" | "GameVersionNotSupported" | "GameVersionMissing" | "GameVersionMismatch" | "PrerequisiteQueuesNotPlayedRestriction" | "TeamSizeRestriction" | "TeamHighMMRMaxSizeRestriction" | "PlayerRankedSuspensionRestriction" | "PlayerMinorRestriction" | "PlayerMinLevelRestriction" | "PlayerMaxLevelRestriction" | "PlayerLeaverTaintedWarningRestriction" | "PlayerLeaverQueueLockoutRestriction" | "PlayerLeaverBustedRestriction" | "PlayerInGameRestriction" | "PlayerDodgeRestriction" | "PlayerBingeRestriction" | "TeamMinSizeRestriction" | "TeamMaxSizeRestriction" | "TeamSkillRestriction" | "TeamDivisionRestriction" | "PlayerAvailableChampionRestriction" | "PlayerBannedRestriction" | "PlayerTimedRestriction" | "PlayerLevelRestriction" | "QueueUnsupported" | "QueueDisabled"

export interface LolFeaturedModesFeaturedModesConfig {
	NotificationsEnabled: boolean
	/** @format uint32 */
	QueueToggleNotificationMinutesThreshold: number
	/** @format uint32 */
	MaxNotificationSaveDelayMinutes: number
}

export interface LolFeaturedModesGameflowAvailability {
	isAvailable: boolean
	state: LolFeaturedModesGameflowAvailabilityState
}

export type LolFeaturedModesGameflowAvailabilityState = "Configuration" | "InGameFlow" | "PlayerBanned" | "EligibilityInfoMissing" | "Patching" | "Initializing" | "Available"

export type LolFeaturedModesGameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"

export interface LolFeaturedModesGameflowSession {
	phase: LolFeaturedModesGameflowPhase
}

export interface LolFeaturedModesLoginSession {
	state: LolFeaturedModesLoginSessionStates
	/** @format uint64 */
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
	/** @format uint64 */
	id: number
	source: string
	state: string
	titleKey: string
	type: string
}

export interface LolFeaturedModesQueue {
	/** @format int32 */
	id: number
	/** @format int32 */
	mapId: number
	name: string
	gameMode: string
	category: LolFeaturedModesQueueGameCategory
	/** @format uint64 */
	lastToggledOffTime: number
	/** @format uint64 */
	lastToggledOnTime: number
	queueAvailability: LolFeaturedModesQueueAvailability
}

export type LolFeaturedModesQueueAvailability = "DoesntMeetRequirements" | "PlatformDisabled" | "Available"

export type LolFeaturedModesQueueGameCategory = "Alpha" | "VersusAi" | "PvP" | "Custom" | "None"

export interface LolGameClientChatBuddy {
	gameName: string
	tagLine: string
	puuid: string
	/** @format uint64 */
	summonerId: number
}

export interface LolGameClientChatConversationMessageResource {
	type: string
	/** @format uint64 */
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
	/** @format uint64 */
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
	/** @format uint64 */
	summonerId: number
	obfuscatedPuuid: string
	/** @format uint64 */
	obfuscatedSummonerId: number
}

export interface LolGameQueuesLoginDataPacket {
	gameTypeConfigs: LolGameQueuesQueueGameTypeConfig[]
}

export interface LolGameQueuesLoginSession {
	state: LolGameQueuesLoginSessionStates
	/** @format uint64 */
	summonerId: number
	/** @format uint64 */
	accountId: number
	connected: boolean
}

export type LolGameQueuesLoginSessionStates = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"

export interface LolGameQueuesOperationalQueueConfig {
	/** @format int32 */
	queueId: number
	isEnabled: boolean
	mutators: string
	isVisibleInClient: boolean
	isSpectatable: boolean
}

export interface LolGameQueuesOperationalSpectatorConfig {
	isEnabled: boolean
	isUsingOperationalConfig: boolean
}

export interface LolGameQueuesPlatformConfigEnabledMap {
	/** @format int32 */
	gameMapId: number
	/** @format int32 */
	minPlayers: number
}

export interface LolGameQueuesQueue {
	/** @format int32 */
	id: number
	/** @format int32 */
	mapId: number
	name: string
	shortName: string
	description: string
	detailedDescription: string
	type: string
	gameMode: string
	assetMutator: string
	"maxTierForPremadeSize2": string
	"maxDivisionForPremadeSize2": string
	category: LolGameQueuesQueueGameCategory
	gameTypeConfig: LolGameQueuesQueueGameTypeConfig
	/** @format int32 */
	numPlayersPerTeam: number
	/** @format int32 */
	minimumParticipantListSize: number
	/** @format int32 */
	maximumParticipantListSize: number
	/** @format uint32 */
	minLevel: number
	isRanked: boolean
	areFreeChampionsAllowed: boolean
	isTeamBuilderManaged: boolean
	queueAvailability: LolGameQueuesQueueAvailability
	isVisible: boolean
	queueRewards: LolGameQueuesQueueReward
	spectatorEnabled: boolean
	/** @format uint32 */
	championsRequiredToPlay: number
	allowablePremadeSizes: number[]
	showPositionSelector: boolean
	showQuickPlaySlotSelection: boolean
	/** @format uint64 */
	lastToggledOffTime: number
	/** @format uint64 */
	lastToggledOnTime: number
	removalFromGameAllowed: boolean
	/** @format int32 */
	removalFromGameDelayMinutes: number
}

export type LolGameQueuesQueueAvailability = "DoesntMeetRequirements" | "PlatformDisabled" | "Available"

export interface LolGameQueuesQueueCustomGame {
	subcategories: LolGameQueuesQueueCustomGameSubcategory[]
	queueAvailability: LolGameQueuesQueueAvailability
	spectatorPolicies: LolGameQueuesQueueCustomGameSpectatorPolicy[]
	/** @format uint32 */
	spectatorSlotLimit: number
	gameServerRegions?: string[]
}

export type LolGameQueuesQueueCustomGameSpectatorPolicy = "AllAllowed" | "FriendsAllowed" | "LobbyAllowed" | "NotAllowed"

export interface LolGameQueuesQueueCustomGameSubcategory {
	/** @format int32 */
	mapId: number
	gameMode: string
	mutators: LolGameQueuesQueueGameTypeConfig[]
	/** @format int32 */
	numPlayersPerTeam: number
	/** @format int32 */
	minimumParticipantListSize: number
	/** @format int32 */
	maximumParticipantListSize: number
	/** @format int32 */
	maxPlayerCount: number
	/** @format uint32 */
	minLevel: number
	queueAvailability: LolGameQueuesQueueAvailability
	customSpectatorPolicies: LolGameQueuesQueueCustomGameSpectatorPolicy[]
}

export type LolGameQueuesQueueGameCategory = "Alpha" | "VersusAi" | "PvP" | "Custom" | "None"

export interface LolGameQueuesQueueGameTypeConfig {
	/** @format int64 */
	id: number
	name: string
	/** @format int32 */
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
	/** @format int32 */
	mainPickTimerDuration: number
	/** @format int32 */
	postPickTimerDuration: number
	/** @format int32 */
	banTimerDuration: number
	pickMode: string
	banMode: string
	gameModeOverride?: string
	/** @format int32 */
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
	state: LolGameSettingsLoginSessionStates
	/** @format uint64 */
	summonerId: number
	/** @format uint64 */
	accountId: number
}

export type LolGameSettingsLoginSessionStates = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"

export interface LolGameSettingsgamesettingsgameclient {
	running: boolean
}

export interface LolGameSettingsgamesettingsgameflowsession {
	gameClient: LolGameSettingsgamesettingsgameclient
}

export interface LolGameflowCrashReportingSettings {
	type: string
	enabled: boolean
}

export interface LolGameflowGameModeSpellList {
	spells: number[]
}

export interface LolGameflowGameStateUpdate {
	/** @format uint64 */
	id: number
	gameState: string
	gameType: string
	errorMessage: string
}

export interface LolGameflowGameflowAvailability {
	isAvailable: boolean
	state: LolGameflowGameflowAvailabilityState
}

export type LolGameflowGameflowAvailabilityState = "EligibilityInfoMissing" | "Configuration" | "InGameFlow" | "PlayerBanned" | "Patching" | "Initializing" | "Available"

export interface LolGameflowGameflowGameClient {
	serverIp: string
	/** @format uint16 */
	serverPort: number
	observerServerIp: string
	/** @format uint16 */
	observerServerPort: number
	running: boolean
	visible: boolean
}

export interface LolGameflowGameflowGameData {
	/** @format uint64 */
	gameId: number
	queue: LolGameflowQueue
	isCustomGame: boolean
	gameName: string
	password: string
	teamOne: unknown[]
	teamTwo: unknown[]
	playerChampionSelections: unknown[]
	spectatorsAllowed: boolean
}

export interface LolGameflowGameflowGameDodge {
	state: LolGameflowGameflowGameDodgeState
	dodgeIds: number[]
	phase: LolGameflowGameflowPhase
}

export type LolGameflowGameflowGameDodgeState = "TournamentDodged" | "StrangerDodged" | "PartyDodged" | "Invalid"

export interface LolGameflowGameflowGameMap {
	/** @format int64 */
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
	perPositionRequiredSummonerSpells: Record<string, LolGameflowGameModeSpellList>
	perPositionDisallowedSummonerSpells: Record<string, LolGameflowGameModeSpellList>
}

export type LolGameflowGameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"

export interface LolGameflowGameflowProcessInfo {
	/** @format uint32 */
	pid: number
	rawArgs: string[]
	standalone: boolean
}

export interface LolGameflowGameflowSession {
	phase: LolGameflowGameflowPhase
	gameData: LolGameflowGameflowGameData
	gameClient: LolGameflowGameflowGameClient
	map: LolGameflowGameflowGameMap
	gameDodge: LolGameflowGameflowGameDodge
}

export type LolGameflowGameflowWatchPhase = "WatchFailedToLaunch" | "WatchInProgress" | "WatchStarted" | "None"

export interface LolGameflowInstallPaths {
	gameInstallRoot: string
	gameExecutablePath: string
}

export interface LolGameflowLobbyStatus {
	/** @format int32 */
	queueId: number
	isCustom: boolean
	isPracticeTool: boolean
	isLeader: boolean
	isSpectator: boolean
	allowedPlayAgain: boolean
	memberSummonerIds: number[]
	invitedSummonerIds: number[]
	lobbyId?: string
	customSpectatorPolicy: LolGameflowQueueCustomGameSpectatorPolicy
}

export interface LolGameflowLoginSession {
	state: LolGameflowLoginSessionStates
	/** @format uint64 */
	summonerId: number
	/** @format uint64 */
	accountId: number
	connected: boolean
}

export type LolGameflowLoginSessionStates = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"

export interface LolGameflowPatcherProductState {
	isCorrupted: boolean
	isStopped: boolean
	isUpToDate: boolean
	isUpdateAvailable: boolean
	action: LolGameflowPatcherProductStateAction
}

export type LolGameflowPatcherProductStateAction = "Migrating" | "Repairing" | "Patching" | "CheckingForUpdates" | "Idle"

export interface LolGameflowPlayerStatus {
	currentLobbyStatus?: LolGameflowLobbyStatus
	lastQueuedLobbyStatus?: LolGameflowLobbyStatus
	canInviteOthersAtEog: boolean
}

export interface LolGameflowQueue {
	/** @format int32 */
	id: number
	/** @format int32 */
	mapId: number
	name: string
	shortName: string
	description: string
	detailedDescription: string
	type: string
	gameMode: string
	assetMutator: string
	category: LolGameflowQueueGameCategory
	gameTypeConfig: LolGameflowQueueGameTypeConfig
	/** @format int32 */
	numPlayersPerTeam: number
	/** @format int32 */
	minimumParticipantListSize: number
	/** @format int32 */
	maximumParticipantListSize: number
	/** @format uint32 */
	minLevel: number
	isRanked: boolean
	areFreeChampionsAllowed: boolean
	isTeamBuilderManaged: boolean
	queueAvailability: LolGameflowQueueAvailability
	queueRewards: LolGameflowQueueReward
	spectatorEnabled: boolean
	/** @format uint32 */
	championsRequiredToPlay: number
	allowablePremadeSizes: number[]
	showPositionSelector: boolean
	/** @format uint64 */
	lastToggledOffTime: number
	/** @format uint64 */
	lastToggledOnTime: number
	removalFromGameAllowed: boolean
	/** @format int32 */
	removalFromGameDelayMinutes: number
}

export type LolGameflowQueueAvailability = "DoesntMeetRequirements" | "PlatformDisabled" | "Available"

export type LolGameflowQueueCustomGameSpectatorPolicy = "AllAllowed" | "FriendsAllowed" | "LobbyAllowed" | "NotAllowed"

export type LolGameflowQueueGameCategory = "Alpha" | "VersusAi" | "PvP" | "Custom" | "None"

export interface LolGameflowQueueGameTypeConfig {
	/** @format int64 */
	id: number
	name: string
	/** @format int32 */
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
	/** @format int32 */
	mainPickTimerDuration: number
	/** @format int32 */
	postPickTimerDuration: number
	/** @format int32 */
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
	data: LolGameflowReplaysSettingsData
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
	geoInfo: LolGeoinfoGeoInfo
	errorMessage: string
	isLatest: boolean
	isInitialized: boolean
}

export interface LolGeoinfoLoginSession {
	state: LolGeoinfoLoginSessionState
	/** @format uint64 */
	summonerId: number
	/** @format uint64 */
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
	state: LolHeartbeatLoginSessionStates
	/** @format uint64 */
	summonerId: number
	/** @format uint64 */
	accountId: number
}

export type LolHeartbeatLoginSessionStates = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"

export interface LolHighlightsHighlight {
	/** @format uint64 */
	id: number
	name: string
	filepath: string
	url: string
	/** @format uint64 */
	mtimeMsUtc: number
	"mtimeIso8601": string
	/** @format uint64 */
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
	data: LolHighlightsHighlightsSettingsData
}

export interface LolHoneyfruitAccountClaimStatus {
	linking_status?: LolHoneyfruitHoneyfruitLinkingServiceResponse
	migration_status?: string
}

export interface LolHoneyfruitAccountDetails {
	puuid: string
	platformId: string
	summonerName: string
	/** @format int32 */
	summonerIconId: number
	/** @format uint32 */
	summonerLevel: number
}

export interface LolHoneyfruitGAMHSMatchHistoryData {
	[key: string | number]: any
}

export interface LolHoneyfruitGAMHSMatchHistoryList {
	games: LolHoneyfruitGAMHSMatchHistoryData[]
	active_puuid: string
}

export type LolHoneyfruitGameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"

export interface LolHoneyfruitGarenaRegionLeagueAccount {
	garena_puuid: string
	platform_id: string
	summoner_name: string
	/** @format uint32 */
	summoner_level: number
	/** @format int32 */
	summoner_icon_id: number
	/** @format uint64 */
	garena_id: number
	is_reserved_summoner_name: boolean
	has_played_a_game: boolean
}

export type LolHoneyfruitHoneyfruitActionType = "link" | "dismiss_permanently" | "dismiss_temporarily" | "dismiss"

export interface LolHoneyfruitHoneyfruitAuthRedirectMock {
	/** @format uint32 */
	redirectLatency: number
	/** @format uint32 */
	redirectStatusCode: number
	redirectURL: string
}

export interface LolHoneyfruitHoneyfruitLinkingAction {
	action: LolHoneyfruitHoneyfruitActionType
	target: string
}

export type LolHoneyfruitHoneyfruitLinkingFailureReason = "UNHANDLED_SERVER_SIDE_ERROR" | "REQUEST_FAILURE" | "NOT_LINKED" | "DISABLED" | "DEGRADED" | "BAD_AUTHORIZATION_PARAM" | "ACCESS_TOKEN_EXPIRED" | "ALREADY_LINKED"

export interface LolHoneyfruitHoneyfruitLinkingNotification {
	linkedAccount: string
}

export interface LolHoneyfruitHoneyfruitLinkingServiceResponse {
	eligible: boolean
	reason_code: LolHoneyfruitHoneyfruitLinkingFailureReason
	email: string
	account_details?: LolHoneyfruitGarenaRegionLeagueAccount
}

export type LolHoneyfruitHoneyfruitLinkingState = "linked" | "linking_complete" | "in_progress" | "error" | "confirm_snooze" | "prompt" | "snoozed" | "hidden"

export interface LolHoneyfruitHoneyfruitLinkingStatus {
	state: LolHoneyfruitHoneyfruitLinkingState
	linkedAccount: string
	error: LolHoneyfruitHoneyfruitLinkingStatusError
}

export type LolHoneyfruitHoneyfruitLinkingStatusError = "unknown_error" | "service_unavailable" | "not_signed_in" | "no_error"

export type LolHoneyfruitHoneyfruitPublisher = "vng" | "twm" | "tencent" | "riot" | "garena"

export interface LolHoneyfruitHoneyfruitRegionLocale {
	region: string
	locale: string
}

export interface LolHoneyfruitHoneyfruitSettingCategoryResource {
	/** @format uint32 */
	schemaVersion: number
	data: LolHoneyfruitHoneyfruitSettings
}

export interface LolHoneyfruitHoneyfruitSettingCategoryResourceAccountClaim {
	/** @format uint32 */
	schemaVersion: number
	data: LolHoneyfruitHoneyfruitSettingsAccountClaim
}

export interface LolHoneyfruitHoneyfruitSettings {
	/** @format uint64 */
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
	/** @format uint64 */
	gameIndexBegin: number
	/** @format uint64 */
	gameIndexEnd: number
	gameBeginDate: string
	gameEndDate: string
	/** @format uint64 */
	gameCount: number
	games: LolHoneyfruitMatchHistoryGame[]
}

export interface LolHoneyfruitMatchHistoryList {
	platformId: string
	/** @format uint64 */
	accountId: number
	games: LolHoneyfruitMatchHistoryGameList
}

export interface LolHoneyfruitSummoner {
	/** @format uint64 */
	summonerId: number
	/** @format uint64 */
	accountId: number
	displayName: string
	internalName: string
	/** @format int32 */
	profileIconId: number
	/** @format uint32 */
	summonerLevel: number
	/** @format uint64 */
	xpSinceLastLevel: number
	/** @format uint64 */
	xpUntilNextLevel: number
	/** @format uint32 */
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
	type: LolHoneyfruitV1ResponseType
	success: LolHoneyfruitV1SuccessResponseDetails
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
	/** @format uint64 */
	accountId: number
	/** @format uint64 */
	summonerId: number
}

export interface LolHonorV2ApiHonorPlayerServerRequest {
	/** @format uint64 */
	summonerId: number
	puuid: string
	honorType: string
	/** @format uint64 */
	gameId: number
}

export interface LolHonorV2Ballot {
	eligiblePlayers: LolHonorV2EligiblePlayer[]
	/** @format uint64 */
	gameId: number
}

export interface LolHonorV2DynamicHonorMessage {
	messageId: string
	/** @format int32 */
	value: number
}

export interface LolHonorV2EligiblePlayer {
	puuid: string
	/** @format uint64 */
	summonerId: number
	summonerName: string
	championName: string
	skinSplashPath: string
}

export interface LolHonorV2EndOfGamePlayer {
	puuid: string
	botPlayer: boolean
	/** @format uint64 */
	gameId: number
	leaver: boolean
	summonerName: string
	/** @format uint64 */
	summonerId: number
	skinSplashPath: string
	championName: string
}

export interface LolHonorV2EndOfGameStats {
	/** @format uint64 */
	gameId: number
	gameType: string
	invalid: boolean
	queueType: string
	ranked: boolean
	/** @format uint64 */
	reportGameId: number
	teams: LolHonorV2EndOfGameTeam[]
	localPlayer: LolHonorV2EndOfGamePlayer
	gameEndedInEarlySurrender: boolean
}

export interface LolHonorV2EndOfGameTeam {
	players: LolHonorV2EndOfGamePlayer[]
	isPlayerTeam: boolean
}

export interface LolHonorV2GameflowGameData {
	/** @format uint64 */
	gameId: number
	queue: LolHonorV2Queue
}

export type LolHonorV2GameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"

export interface LolHonorV2GameflowSession {
	phase: LolHonorV2GameflowPhase
	gameData: LolHonorV2GameflowGameData
}

export interface LolHonorV2Honor {
	honorCategory: string
	voterRelationship: string
	senderPuuid: string
}

export interface LolHonorV2HonorConfig {
	Enabled: boolean
	/** @format int32 */
	SecondsToVote: number
	HonorVisibilityEnabled: boolean
	HonorSuggestionsEnabled: boolean
	"honorEndpointsV2Enabled": boolean
}

export interface LolHonorV2HonorInteraction {
	puuid: string
	displayName: string
	/** @format uint64 */
	gameId: number
	/** @format uint64 */
	summonerId: number
}

export interface LolHonorV2HonorRecipient {
	puuid: string
	/** @format uint64 */
	gameId: number
	honors: LolHonorV2Honor[]
}

export interface LolHonorV2HonorSummoner {
	puuid: string
	displayName: string
	/** @format uint64 */
	summonerId: number
}

export interface LolHonorV2LoginSession {
	state: LolHonorV2LoginSessionStates
}

export type LolHonorV2LoginSessionStates = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"

export interface LolHonorV2MutualHonor {
	/** @format uint64 */
	gameId: number
	summoners: LolHonorV2MutualHonorPlayer[]
}

export interface LolHonorV2MutualHonorPlayer {
	/** @format uint64 */
	summonerId: number
	/** @format int32 */
	championId: number
	/** @format int32 */
	skinId: number
}

export interface LolHonorV2ProfileInfo {
	/** @format int32 */
	honorLevel: number
	/** @format int32 */
	checkpoint: number
	rewardsLocked: boolean
}

export interface LolHonorV2Queue {
	/** @format int32 */
	id: number
	/** @format int32 */
	mapId: number
	type: string
	gameMode: string
	removalFromGameAllowed: boolean
	/** @format int32 */
	removalFromGameDelayMinutes: number
}

export interface LolHonorV2RetrieveProfileResponse {
	/** @format int32 */
	honorLevel: number
	/** @format int32 */
	checkpoint: number
	rewardsLocked: boolean
}

export interface LolHonorV2Reward {
	rewardType: string
	/** @format int32 */
	quantity: number
}

export interface LolHonorV2SequenceEvent {
	name: string
	/** @format int32 */
	priority: number
}

export interface LolHonorV2VendedHonorChange {
	actionType: string
	previousState: LolHonorV2VendedHonorState
	currentState: LolHonorV2VendedHonorState
	reward: LolHonorV2Reward
	dynamicHonorMessage: LolHonorV2DynamicHonorMessage
}

export interface LolHonorV2VendedHonorState {
	/** @format int32 */
	level: number
	/** @format int32 */
	checkpoint: number
	rewardsLocked: boolean
}

export interface LolHonorV2VendedReward {
	rewardType: string
	/** @format int32 */
	quantity: number
	dynamicHonorMessage: LolHonorV2DynamicHonorMessage
}

export interface LolHonorV2VoteCompletion {
	/** @format uint64 */
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
	cookies: LolHovercardcookie[]
}

export interface LolHovercardFriendResult {
	id: string
	puuid: string
	/** @format uint64 */
	summonerId: number
	name: string
	/** @format uint64 */
	accountId: number
	/** @format int32 */
	icon: number
	gameName: string
	gameTag: string
	availability: string
	note: string
	/** @format uint64 */
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
	/** @format uint64 */
	summonerId: number
	name: string
	/** @format uint64 */
	accountId: number
	/** @format int32 */
	icon: number
	gameName: string
	gameTag: string
	availability: string
	note: string
	/** @format uint64 */
	masteryScore: number
	/** @format uint64 */
	legendaryMasteryScore: number
	patchline: string
	platformId: string
	product: string
	productName: string
	statusMessage: string
	/** @format int32 */
	summonerIcon: number
	/** @format uint32 */
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
	content_cookies: LolHovercardContentCookies[]
}

export interface LolHovercardProductMetadata {
	id: string
	name: string
	patchlines: Record<string, LolHovercardPatchlineMetadata>
}

export interface LolHovercardProductMetadataMap {
	products: Record<string, LolHovercardProductMetadata>
}

export interface LolHovercardSummoner {
	/** @format uint64 */
	summonerId: number
	displayName: string
	/** @format uint64 */
	accountId: number
	/** @format uint32 */
	summonerLevel: number
	puuid: string
	gameName: string
	tagLine: string
}

export interface LolHovercardSummonerIdAndIcon {
	/** @format int32 */
	profileIconId: number
}

export interface LolHovercardSummonerIdAndName {
	/** @format uint64 */
	summonerId: number
	displayName: string
}

export interface LolHovercardTopChampionMastery {
	/** @format uint64 */
	score: number
}

export interface LolHovercardcookie {
	name: string
	value: string
}

export interface LolInventoryAccessTokenResource {
	token: string
	scopes: string[]
	/** @format uint64 */
	expiry: number
}

export interface LolInventoryCatalogItem {
	/** @format int32 */
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
	/** @format int32 */
	amount: number
	subCurrencies: Record<string, number>
}

export interface LolInventoryEndOfGameXp {
	/** @format uint32 */
	PER_WIN: number
}

export interface LolInventoryEndOfGameXpNotification {
	xp: LolInventoryEndOfGameXp
}

export interface LolInventoryInventoryCacheEntry {
	signedInventoryJwt: string
	/** @format uint64 */
	expirationMS: number
	/** @format uint64 */
	issuedAtMS: number
	/** @format uint64 */
	receivedAtMS: number
	valid: boolean
}

export interface LolInventoryInventoryDTO {
	puuid: string
	/** @format uint64 */
	accountId: number
	/** @format uint64 */
	summonerId: number
	items: Record<string, unknown>
	expires: string
	itemsJwt: string
}

export interface LolInventoryInventoryItem {
	uuid: string
	/** @format int32 */
	itemId: number
	inventoryType: string
	purchaseDate: string
	/** @format uint64 */
	quantity: number
	ownershipType: LolInventoryItemOwnershipType
	expirationDate: string
	/** @format uint64 */
	wins: number
}

export interface LolInventoryInventoryItemDTO {
	/** @format int32 */
	itemId: number
	inventoryType: string
	expirationDate: string
	purchaseDate: string
	/** @format uint64 */
	quantity: number
	/** @format uint64 */
	ownedQuantity: number
	usedInGameDate: string
	entitlementId: string
	entitlementTypeId: string
	instanceId: string
	instanceTypeId: string
	payload: unknown
	"f2p": boolean
	rental: boolean
	loyalty: boolean
	loyaltySources: string[]
	lsb: boolean
	/** @format uint64 */
	wins: number
}

export interface LolInventoryInventoryItemWithPayload {
	uuid: string
	/** @format int32 */
	itemId: number
	inventoryType: string
	purchaseDate: string
	/** @format uint64 */
	quantity: number
	ownershipType: LolInventoryItemOwnershipType
	expirationDate: string
	"f2p": boolean
	rental: boolean
	loyalty: boolean
	loyaltySources: string[]
	owned: boolean
	/** @format uint64 */
	wins: number
	payload: unknown
}

export interface LolInventoryInventoryNotification {
	/** @format int64 */
	id: number
	/** @format int32 */
	itemId: number
	inventoryType: string
	type: string
	acknowledged: boolean
}

export interface LolInventoryInventoryResponseDTO {
	data: LolInventoryInventoryDTO
}

export interface LolInventoryItemKey {
	inventoryType: string
	/** @format int32 */
	itemId: number
}

export type LolInventoryItemOwnershipType = "F2P" | "LOYALTY" | "RENTED" | "OWNED"

export interface LolInventoryLoginSession {
	state: LolInventoryLoginSessionStates
	/** @format uint64 */
	summonerId: number
	/** @format uint64 */
	accountId: number
	idToken: string
	puuid: string
}

export type LolInventoryLoginSessionStates = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"

export interface LolInventoryLoyaltyRewards {
	/** @format int32 */
	freeRewardedChampionsCount: number
	championIds: number[]
	/** @format int32 */
	freeRewardedSkinsCount: number
	skinIds: number[]
	/** @format int32 */
	ipBoost: number
	xpBoost: Record<string, number>
	/** @format int32 */
	loyaltyTFTMapSkinCount: number
	/** @format int32 */
	loyaltyTFTCompanionCount: number
	/** @format int32 */
	loyaltyTFTDamageSkinCount: number
	loyaltySources: Record<string, boolean>
}

export interface LolInventoryLoyaltyRewardsSimplified {
	/** @format int32 */
	freeRewardedChampionsCount: number
	championIds: number[]
	/** @format int32 */
	freeRewardedSkinsCount: number
	skinIds: number[]
	/** @format int32 */
	ipBoost: number
	/** @format int32 */
	xpBoost: number
	/** @format int32 */
	loyaltyTFTMapSkinCount: number
	/** @format int32 */
	loyaltyTFTCompanionCount: number
	/** @format int32 */
	loyaltyTFTDamageSkinCount: number
	loyaltySources: Record<string, boolean>
}

export type LolInventoryLoyaltyStatus = "DISABLED" | "REVOKE" | "CHANGE" | "EXPIRY" | "REWARDS_GRANT" | "LEGACY"

export interface LolInventoryLoyaltyStatusNotification {
	status: LolInventoryLoyaltyStatus
	rewards: LolInventoryLoyaltyRewardsSimplified
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
	/** @format int64 */
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
	items: LolInventoryRmsStoreEntitlementItem[]
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
	data: LolInventorySimpleInventoryDTO
}

export interface LolInventorySummonerIcon {
	/** @format int32 */
	itemId: number
}

export interface LolInventoryWallet {
	/** @format int64 */
	ip: number
	/** @format int64 */
	rp: number
}

export interface LolInventoryWalletCacheEntry {
	signedBalancesJwt: string
	/** @format uint64 */
	expirationMS: number
	/** @format uint64 */
	issuedAtMS: number
	/** @format uint64 */
	receivedAtMS: number
	valid: boolean
}

export interface LolInventoryWalletDTO {
	puuid: string
	/** @format int64 */
	accountId: number
	expires: string
	balances: Record<string, number>
	balancesJwt: string
}

export interface LolInventoryWalletResponseDTO {
	data: LolInventoryWalletDTO
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
	/** @format int32 */
	sortrank: number
	startedFrom: string
	associatedChampions: number[]
	associatedMaps: number[]
	blocks: LolItemSetsItemSetBlock[]
	preferredItemSlots: LolItemSetsPreferredItemSlot[]
}

export interface LolItemSetsItemSetBlock {
	type: string
	hideIfSummonerSpell: string
	showIfSummonerSpell: string
	items: LolItemSetsItemSetItem[]
}

export interface LolItemSetsItemSetItem {
	id: string
	/** @format uint16 */
	count: number
}

export interface LolItemSetsItemSets {
	/** @format uint64 */
	timestamp: number
	/** @format uint64 */
	accountId: number
	itemSets: LolItemSetsItemSet[]
}

export interface LolItemSetsLoginSession {
	state: LolItemSetsLoginSessionStates
	/** @format uint64 */
	summonerId: number
	/** @format uint64 */
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
	/** @format int16 */
	preferredItemSlot: number
}

export interface LolItemSetsValidateItemSetNameInput {
	name: string
}

export interface LolItemSetsValidateItemSetNameResponse {
	success: boolean
	nameCheckResponse: LolItemSetsNamecheckResponse
}

export interface LolKickoutKickoutMessage {
	message: string
}

export interface LolKrShutdownLawAllQueueShutdownStatus {
	isAllQueuesDisabled: boolean
}

export interface LolKrShutdownLawAntiAddictionState {
	policyType: LolKrShutdownLawPolicyType
}

export type LolKrShutdownLawPolicyType = "disableMatchMaking" | "warningMessage" | "playTime" | "shutdown"

export interface LolKrShutdownLawQueueShutdownStatus {
	isDisabled: boolean
}

export interface LolKrShutdownLawRatingScreenInfo {
	shown: boolean
}

export interface LolKrShutdownLawShutdownLawNotification {
	type: LolKrShutdownLawShutdownLawStatus
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
	/** @format uint64 */
	sessionInitiatedAt: number
}

export type LolLeagueSessionLeagueSessionStatus = "ANTI_ADDICTION_EXPIRED" | "DUPLICATED" | "EXPIRED" | "INITIALIZED" | "UNINITIALIZED"

export interface LolLeagueSessionLeagueSessionTokenEnvelope {
	token?: string
	logoutOnFailure: boolean
}

export interface LolLeaverBusterAllSummonerData {
	summoner: LolLeaverBusterSummoner
}

export interface LolLeaverBusterLeaverBusterEntryDto {
	puuid: string
	tainted: boolean
	preLockoutAckNeeded: boolean
	onLockoutAckNeeded: boolean
	/** @format int32 */
	leaverScore: number
	/** @format int32 */
	leaverLevel: number
	/** @format int64 */
	warnSentMillis: number
	/** @format int64 */
	warnAckedMillis: number
	leaverPenalty: LolLeaverBusterLeaverBusterPenaltyResponse
}

export interface LolLeaverBusterLeaverBusterNotificationResource {
	/** @format uint32 */
	id: number
	msgId: string
	/** @format uint64 */
	accountId: number
	type: LolLeaverBusterLeaverBusterNotificationType
	/** @format int32 */
	punishedGamesRemaining: number
	/** @format uint64 */
	queueLockoutTimerExpiryUtcMillisDiff: number
	fromRms: boolean
}

export type LolLeaverBusterLeaverBusterNotificationType = "RankedRestrictedGames" | "OnLockoutWarning" | "PreLockoutWarning" | "Reforming" | "PunishedGamesRemaining" | "PunishmentIncurred" | "TaintedWarning" | "Invalid"

export interface LolLeaverBusterLeaverBusterPenaltyResponse {
	puuid: string
	hasActivePenalty: boolean
	punishmentTimerType: LolLeaverBusterLeaverPenaltyType
	/** @format int64 */
	queueLockoutTimerExpiryUtcMillis: number
}

export type LolLeaverBusterLeaverPenaltyType = "QUEUE_LOCKOUT_TIMER" | "QUEUE_DELAY_TIMER" | "NO_PENALTY"

export interface LolLeaverBusterLoginDataPacket {
	allSummonerData: LolLeaverBusterAllSummonerData
	simpleMessages: LolLeaverBusterSimpleMessage[]
}

export interface LolLeaverBusterMatchmakingSearchErrorResource {
	/** @format int32 */
	id: number
	errorType: string
	/** @format uint64 */
	penalizedSummonerId: number
	/** @format double */
	penaltyTimeRemaining: number
	message: string
}

export interface LolLeaverBusterMatchmakingSearchResource {
	/** @format int32 */
	queueId: number
	errors: LolLeaverBusterMatchmakingSearchErrorResource[]
}

export interface LolLeaverBusterPlayerNotificationResource {
	backgroundUrl: string
	created: string
	critical: boolean
	data: Record<string, string>
	detailKey: string
	expires: string
	iconUrl: string
	/** @format uint64 */
	id: number
	source: string
	state: string
	titleKey: string
	type: string
}

export interface LolLeaverBusterRankedRestriction {
	/** @format int32 */
	punishedGamesRemaining: number
}

export interface LolLeaverBusterRankedRestrictionEntryDto {
	puuid: string
	/** @format int32 */
	restrictedGamesRemaining: number
	/** @format int32 */
	restrictedGamesOriginal: number
	rankedRestrictionAckNeeded: boolean
}

export interface LolLeaverBusterRankedRestrictionGamesUpdate {
	/** @format int32 */
	punishedGamesRemaining: number
}

export interface LolLeaverBusterRankedRestrictionInfo {
	/** @format int32 */
	punishedGamesRemaining: number
	needsAck: boolean
}

export interface LolLeaverBusterRestrictionInfoDto {
	puuid: string
	leaverBusterEntryDto: LolLeaverBusterLeaverBusterEntryDto
	rankedRestrictionEntryDto: LolLeaverBusterRankedRestrictionEntryDto
}

export interface LolLeaverBusterSimpleMessage {
	/** @format uint64 */
	accountId: number
	msgId: string
	type: string
	params: string[]
}

export interface LolLeaverBusterSummoner {
	/** @format uint64 */
	acctId: number
	/** @format uint64 */
	sumId: number
}

export interface LolLicenseAgreementLicenseAgreement {
	id: string
	licenseType: LolLicenseAgreementLicenseAgreementType
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
	/** @format uint64 */
	expiry: number
}

export interface LolLoadoutsCreateLoadoutDTO {
	scope: string
	/** @format uint32 */
	itemId?: number
	name: string
	loadout: Record<string, LolLoadoutsItemKey>
	refreshTime: string
}

export interface LolLoadoutsCreateLoadoutRequestDTO {
	serviceToJwtsMap: Record<string, unknown>
	loadout: LolLoadoutsCreateLoadoutDTO
}

export interface LolLoadoutsCreateOrUpdateItemsRequest {
	/** @format uint32 */
	id: number
	items: Record<string, unknown>
	inventoryJWTs: string[]
}

export interface LolLoadoutsFrontendInventoryResponse {
	entitlements: LolLoadoutsItemKey[]
}

export interface LolLoadoutsGameflowGameData {
	queue: LolLoadoutsQueue
}

export type LolLoadoutsGameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"

export interface LolLoadoutsGameflowSession {
	phase: LolLoadoutsGameflowPhase
	gameData: LolLoadoutsGameflowGameData
}

export interface LolLoadoutsGetItemsRequest {
	/** @format uint32 */
	id: number
	inventoryTypes: string[]
	inventoryJWTs: string[]
}

export interface LolLoadoutsInventoryDTO {
	puuid: string
	/** @format uint64 */
	accountId: number
	/** @format uint64 */
	summonerId: number
	items: Record<string, unknown>
	expires: string
	itemsJwt?: string
}

export interface LolLoadoutsInventoryItemDTO {
	/** @format int32 */
	itemId: number
	inventoryType: string
	expirationDate: string
	purchaseDate: string
	/** @format uint64 */
	quantity: number
	usedInGameDate: string
	entitlementId: string
	entitlementTypeId: string
	instanceId: string
	instanceTypeId: string
	"f2p": boolean
	rental: boolean
	lsb: boolean
	/** @format uint64 */
	wins: number
}

export interface LolLoadoutsInventoryResponseDTO {
	data: LolLoadoutsInventoryDTO
}

export interface LolLoadoutsItemKey {
	inventoryType: string
	contentId: string
	/** @format int32 */
	itemId: number
}

export interface LolLoadoutsLoadout {
	/** @format uint32 */
	id: number
	name: string
	items: Record<string, unknown>
}

export interface LolLoadoutsLoadoutRequestDTOBase {
	serviceToJwtsMap: Record<string, unknown>
}

export interface LolLoadoutsLoginSession {
	state: LolLoadoutsLoginSessionStates
	/** @format uint64 */
	summonerId: number
	/** @format uint64 */
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
	/** @format uint32 */
	itemId?: number
	name: string
	loadout: Record<string, LolLoadoutsItemKey>
	refreshTime: string
	id: string
}

export interface LolLoadoutsSignGCORequestDTO {
	serviceToJwtsMap: Record<string, unknown>
	loadout: Record<string, LolLoadoutsItemKey>
}

export interface LolLoadoutsUpdateLoadoutDTO {
	id: string
	name: string
	loadout: Record<string, LolLoadoutsItemKey>
}

export interface LolLoadoutsUpdateLoadoutRequestDTO {
	serviceToJwtsMap: Record<string, unknown>
	loadout: LolLoadoutsUpdateLoadoutDTO
}

export interface LolLobbyAccountIdAndSummonerId {
	/** @format uint64 */
	accountId: number
	/** @format uint64 */
	summonerId: number
}

export interface LolLobbyAmbassadorMessage {
	/** @format int32 */
	httpStatus: number
	errorCode: string
	message: string
	implementationDetails: string
	payload: unknown
}

export interface LolLobbyAutoFillQueueDto {
	/** @format int32 */
	queueId: number
	autoFillEligible: boolean
	autoFillProtectedForStreaking: boolean
	autoFillProtectedForPromos: boolean
	autoFillProtectedForRemedy: boolean
}

export interface LolLobbyBotParticipantDto {
	/** @format int32 */
	championId: number
	/** @format int32 */
	botSkillLevel: number
	team: string
}

export interface LolLobbyChampionSkinSelection {
	/** @format int32 */
	championId: number
	/** @format int32 */
	skinId?: number
}

export interface LolLobbyChatBlockedPlayerResource {
	/** @format uint64 */
	summonerId: number
	name: string
}

export interface LolLobbyChatFriend {
	/** @format uint64 */
	summonerId: number
	lol: Record<string, string>
}

export interface LolLobbyChatFriendCounts {
	/** @format uint32 */
	numFriends: number
	/** @format uint32 */
	numFriendsOnline: number
	/** @format uint32 */
	numFriendsAvailable: number
	/** @format uint32 */
	numFriendsAway: number
	/** @format uint32 */
	numFriendsInQueue: number
	/** @format uint32 */
	numFriendsInChampSelect: number
	/** @format uint32 */
	numFriendsInGame: number
	/** @format uint32 */
	numFriendsMobile: number
}

export interface LolLobbyCollectionsChampion {
	active: boolean
	botEnabled: boolean
	/** @format int32 */
	id: number
	name: string
}

export interface LolLobbyCollectionsChampionMinimal {
	disabledQueues: string[]
	/** @format int32 */
	id: number
	ownership: LolLobbyCollectionsOwnership
	active: boolean
	freeToPlay: boolean
}

export interface LolLobbyCollectionsOwnership {
	loyaltyReward: boolean
	xboxGPReward: boolean
	owned: boolean
	rental: LolLobbyCollectionsRental
}

export interface LolLobbyCollectionsRental {
	[key: string | number]: any
}

export type LolLobbyConfigReadinessEnum = "Disabled" | "Ready" | "NotReady"

export interface LolLobbyConfigStatus {
	readiness: LolLobbyConfigReadinessEnum
}

export type LolLobbyConfigType = "player" | "public"

export interface LolLobbyCustomEligibilityDto {
	eligible: boolean
	restrictions: LolLobbyGatekeeperRestrictionDto[]
}

export interface LolLobbyCustomGameDto {
	partyId: string
	gameType: string
	/** @format int32 */
	mapId: number
	ownerPuuid: string
	allowSpectators: string
	/** @format int32 */
	spectatorCount: number
	/** @format int32 */
	"team1Count": number
	/** @format int32 */
	"team2Count": number
	/** @format int32 */
	maxNumPlayers: number
	lobbyName: string
	privateGame: boolean
}

export interface LolLobbyCustomGameSettingsDto {
	lobbyName: string
	lobbyPassword: string
	/** @format uint64 */
	gameId: number
}

export interface LolLobbyCustomJoinOptionsDto {
	lobbyPassword: string
	team?: string
}

export interface LolLobbyEligibility {
	/** @format int32 */
	queueId: number
	eligible: boolean
	restrictions: LolLobbyEligibilityRestriction[]
}

export interface LolLobbyEligibilityRestriction {
	restrictionCode: LolLobbyEligibilityRestrictionCode
	restrictionArgs: Record<string, string>
	/** @format uint64 */
	expiredTimestamp: number
	summonerIds: number[]
	summonerIdsString: string
}

export type LolLobbyEligibilityRestrictionCode = "MmrStandardDeviationTooLarge" | "UserInfoNotAvailable" | "InventoryQueuesInfoNotAvailable" | "InventoryChampsInfoNotAvailable" | "LeaguesInfoNotAvailable" | "SummonerInfoNotAvailable" | "MinorInfoNotAvailable" | "BanInfoNotAvailable" | "TooManyIncompleteSubteamsRestriction" | "QPScarcePositionsNotAvailableRestriction" | "QPNonUniquePrimarySlotRestriction" | "QPInvalidChampionSelectionRestriction" | "QPInvalidPositionSelectionRestriction" | "QPInvalidNumberOfPlayerSlotsRestriction" | "QPPlayerChampionCoverageRestriction" | "QPPartyChampionCoverageRestriction" | "QPPlayerPositionCoverageRestriction" | "QPPartyPositionCoverageRestriction" | "QPPlayerScarcePositionCoverageRestriction" | "UnknownRestriction" | "SeasonVersionLockout" | "TFTNewPlayerRestriction" | "QueueEntryNotEntitledRestriction" | "GameVersionNotSupported" | "GameVersionMissing" | "GameVersionMismatch" | "PrerequisiteQueuesNotPlayedRestriction" | "TeamSizeRestriction" | "TeamHighMMRMaxSizeRestriction" | "PlayerRankedSuspensionRestriction" | "PlayerRankSoloOnlyRestriction" | "PlayerTimePlayedRestriction" | "PlayerMinorRestriction" | "PlayerMinLevelRestriction" | "PlayerMaxLevelRestriction" | "PlayerTimeBasedRankRestriction" | "PlayerGameBasedRankRestriction" | "PlayerLeaverTaintedWarningRestriction" | "PlayerLeaverQueueLockoutRestriction" | "PlayerLeaverBustedRestriction" | "PlayerInGameRestriction" | "PlayerDodgeRestriction" | "PlayerBingeRestriction" | "TeamMinSizeRestriction" | "TeamMaxSizeRestriction" | "TeamSkillRestriction" | "TeamDivisionRestriction" | "PlayerAvailableChampionRestriction" | "PlayerBannedRestriction" | "PlayerTimedRestriction" | "PlayerLevelRestriction" | "QueueUnsupported" | "QueueDisabled"

export interface LolLobbyFriendAvailabilityAnalytics {
	puuid: string
	/** @format uint64 */
	summonerId: number
	platformId: string
	eventType: string
	eventData: unknown
	/** @format uint64 */
	eventTimestamp: number
	/** @format uint32 */
	numFriends: number
	/** @format uint32 */
	numFriendsOnline: number
	/** @format uint32 */
	numFriendsAvailable: number
	/** @format uint32 */
	numFriendsAway: number
	/** @format uint32 */
	numFriendsInGame: number
	/** @format uint32 */
	numFriendsMobile: number
	/** @format uint32 */
	numFriendsInChampSelect: number
	/** @format uint32 */
	numFriendsInQueue: number
	partyType: string
}

export interface LolLobbyGameDataChampionSummary {
	/** @format int32 */
	id: number
	alias: string
}

export interface LolLobbyGameModeDto {
	gameType: string
	/** @format int32 */
	maxTeamSize: number
	/** @format int32 */
	maxPartySize: number
	botDifficulty?: string
	/** @format int32 */
	queueId?: number
	gameCustomization?: Record<string, string>
	customsSettings?: LolLobbyCustomGameSettingsDto
	/** @format int64 */
	gameTypeConfigId?: number
	/** @format int32 */
	mapId?: number
	allowSpectators?: string
}

export interface LolLobbyGameflowGameClient {
	running: boolean
}

export interface LolLobbyGameflowGameData {
	queue: LolLobbyQueue
}

export interface LolLobbyGameflowGameDodge {
	state: LolLobbyMatchmakingDodgeState
	dodgeIds: number[]
	phase: LolLobbyGameflowPhase
}

export type LolLobbyGameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"

export interface LolLobbyGameflowSampleDto {
	state: string
	/** @format double */
	probability: number
	/** @format double */
	intervalSecs: number
	tags: LolLobbyGameflowSampleTag[]
}

export type LolLobbyGameflowSampleTag = "InventoryTokenMissing" | "RankedTokenMissing" | "SummonerTokenMissing" | "UserInfoTokenMissing" | "GameVersionMissing" | "Unregistered"

export interface LolLobbyGameflowSession {
	phase: LolLobbyGameflowPhase
	gameData: LolLobbyGameflowGameData
	gameClient: LolLobbyGameflowGameClient
	gameDodge: LolLobbyGameflowGameDodge
}

export interface LolLobbyGatekeeperRestrictionDto {
	/** @format uint64 */
	accountId: number
	reason: string
	/** @format int64 */
	remainingMillis: number
	payload: string
	/** @format int32 */
	queueId: number
	puuid: string
	details: Record<string, string>
}

export interface LolLobbyInventoryCacheEntry {
	signedInventoryJwt: string
	/** @format uint64 */
	expirationMS: number
	valid: boolean
}

export interface LolLobbyInventoryItem {
	/** @format int32 */
	itemId: number
}

export type LolLobbyInvitationType = "party" | "lobby" | "invalid"

export interface LolLobbyJoinPartyAnalytics {
	partyId: string
	platformId: string
	eventType: string
	eventData: unknown
	/** @format uint64 */
	eventTimestamp: number
	/** @format int32 */
	numOpenParties: number
	/** @format int32 */
	numOpenFriends: number
	/** @format int32 */
	numPartyInvites: number
	/** @format int32 */
	numOtherInvites: number
	/** @format int32 */
	numTotalInvites: number
	/** @format int32 */
	numFriendsOnline: number
	/** @format int32 */
	partySize: number
	gameMode: string
}

export interface LolLobbyLcdsDynamicClientConfig {
	PartyRewards: LolLobbyLcdsPartyRewardsConfig
}

export interface LolLobbyLcdsGameMetaData {
	/** @format uint64 */
	gameId: number
	/** @format int32 */
	mapId: number
}

export interface LolLobbyLcdsPartyRewardsConfig {
	Enabled: boolean
}

export interface LolLobbyLobby {
	/** @format int32 */
	queueId: number
	/** @format int32 */
	mapId: number
	gameMode: string
	invitationId: string
	multiUserChatId: string
	multiUserChatPassword: string
	mucJwtDto: LolLobbyMucJwtDto
	members: LolLobbyLobbyMember[]
	localMember: LolLobbyLobbyMember
	invitations: LolLobbyLobbyInvitation[]
	wasKicked: boolean
	removalReason: LolLobbyLobbyRemovedFromGameReason
	canStartMatchmaking: boolean
	showPositionSelector: boolean
	showPositionExcluder: boolean
	specifiablePositionPreferences: string[]
	autoFillEligible: boolean
	customGameLobby?: LolLobbyLobbyCustomGameLobby
	isCustom: boolean
	autoFillProtectedForStreaking: boolean
	autoFillProtectedForPromos: boolean
	isTeamBuilderManaged: boolean
	/** @format uint32 */
	maximumParticipantListSize: number
	premadeSizeAllowed: boolean
	requiredPositionCoverageMet: boolean
	allowablePremadeSizes: number[]
	queueAvailability: LolLobbyQueueAvailability
}

export interface LolLobbyLobbyBotChampion {
	active: boolean
	/** @format int32 */
	id: number
	name: string
	botDifficulties: LolLobbyLobbyBotDifficulty[]
}

export type LolLobbyLobbyBotDifficulty = "RSINTERMEDIATE" | "RSBEGINNER" | "RSINTRO" | "INTRO" | "TUTORIAL" | "UBER" | "HARD" | "MEDIUM" | "EASY" | "NONE"

export interface LolLobbyLobbyBotParams {
	/** @format int32 */
	championId: number
	botDifficulty: LolLobbyLobbyBotDifficulty
	teamId: string
	position: string
}

export interface LolLobbyLobbyChangeGameDto {
	/** @format int32 */
	queueId: number
	isCustom: boolean
	customGameLobby?: LolLobbyLobbyCustomGameLobby
	gameCustomization?: Record<string, string>
}

export interface LolLobbyLobbyChangeQueue {
	/** @format int32 */
	queueId: number
	isCustom: boolean
	customGameLobby?: LolLobbyLobbyCustomGameLobby
}

export interface LolLobbyLobbyCustomChampSelectStartResponse {
	success: boolean
	failedPlayers: LolLobbyLobbyCustomFailedPlayer[]
}

export interface LolLobbyLobbyCustomFailedPlayer {
	/** @format uint64 */
	summonerId: number
	summonerName: string
	reason: string
}

export interface LolLobbyLobbyCustomGame {
	/** @format uint64 */
	id: number
	gameType: string
	/** @format int32 */
	mapId: number
	ownerDisplayName: string
	spectatorPolicy: string
	/** @format int32 */
	filledSpectatorSlots: number
	/** @format uint64 */
	maxSpectatorSlots: number
	/** @format int32 */
	filledPlayerSlots: number
	/** @format int32 */
	maxPlayerSlots: number
	lobbyName: string
	hasPassword: boolean
	passbackUrl: string
	partyId: string
}

export interface LolLobbyLobbyCustomGameConfiguration {
	/** @format int32 */
	mapId: number
	gameMode: string
	mutators: LolLobbyQueueGameTypeConfig
	gameTypeConfig: LolLobbyQueueGameTypeConfig
	spectatorPolicy: LolLobbyQueueCustomGameSpectatorPolicy
	/** @format int32 */
	teamSize: number
	/** @format uint32 */
	maxPlayerCount: number
	tournamentGameMode: string
	tournamentPassbackUrl: string
	tournamentPassbackDataPacket: string
	gameServerRegion: string
	spectatorDelayEnabled: boolean
}

export interface LolLobbyLobbyCustomGameLobby {
	lobbyName: string
	lobbyPassword: string
	configuration: LolLobbyLobbyCustomGameConfiguration
	teamOne: LolLobbyLobbyMember[]
	teamTwo: LolLobbyLobbyMember[]
	spectators: LolLobbyLobbyMember[]
	practiceGameRewardsDisabledReasons: string[]
	/** @format uint64 */
	gameId: number
}

export interface LolLobbyLobbyCustomJoinParameters {
	password?: string
	asSpectator?: boolean
}

export interface LolLobbyLobbyDto {
	partyId: string
	partyType: string
	members: LolLobbyLobbyParticipantDto[]
	localMember: LolLobbyLobbyParticipantDto
	invitations: LolLobbyLobbyInvitationDto[]
	canStartActivity: boolean
	restrictions?: LolLobbyEligibilityRestriction[]
	warnings?: LolLobbyEligibilityRestriction[]
	gameConfig: LolLobbyLobbyGameConfigDto
	multiUserChatId: string
	multiUserChatPassword: string
	mucJwtDto: LolLobbyMucJwtDto
	scarcePositions: string[]
}

export interface LolLobbyLobbyGameConfigDto {
	gameMode: string
	/** @format int32 */
	mapId: number
	/** @format int32 */
	queueId: number
	pickType: string
	/** @format int32 */
	maxTeamSize: number
	/** @format int32 */
	maxLobbySize: number
	/** @format int32 */
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
	"customTeam100": LolLobbyLobbyParticipantDto[]
	"customTeam200": LolLobbyLobbyParticipantDto[]
	customSpectators: LolLobbyLobbyParticipantDto[]
	customSpectatorPolicy: LolLobbyQueueCustomGameSpectatorPolicy
	customRewardsDisabledReasons: string[]
}

export interface LolLobbyLobbyInvitation {
	id: string
	/** @format uint64 */
	fromSummonerId: number
	/** @format uint64 */
	toSummonerId: number
	state: LolLobbyLobbyInvitationState
	errorType: string
	timestamp: string
	invitationMetaData: unknown
	eligibility: LolLobbyEligibility
	fromSummonerName: string
	toSummonerName: string
}

export interface LolLobbyLobbyInvitationDto {
	invitationId: string
	/** @format uint64 */
	toSummonerId: number
	state: LolLobbyLobbyInvitationState
	timestamp: string
	toSummonerName: string
	invitationType: LolLobbyInvitationType
}

export type LolLobbyLobbyInvitationState = "Error" | "OnHold" | "Kicked" | "Declined" | "Joined" | "Accepted" | "Pending" | "Requested"

export interface LolLobbyLobbyLastQueuedLobby {
	/** @format int32 */
	queueId: number
	wasOwner: boolean
	canPlayAgain: boolean
	members: LolLobbyLobbyLastQueuedMember[]
}

export interface LolLobbyLobbyLastQueuedMember {
	/** @format uint64 */
	id: number
}

export interface LolLobbyLobbyMatchmakingLowPriorityDataResource {
	penalizedSummonerIds: number[]
	/** @format double */
	penaltyTime: number
	/** @format double */
	penaltyTimeRemaining: number
	bustedLeaverAccessToken: string
	reason: string
}

export interface LolLobbyLobbyMatchmakingSearchErrorResource {
	/** @format int32 */
	id: number
	errorType: string
	/** @format uint64 */
	penalizedSummonerId: number
	/** @format double */
	penaltyTimeRemaining: number
	message: string
}

export interface LolLobbyLobbyMatchmakingSearchResource {
	searchState: LolLobbyLobbyMatchmakingSearchState
	lowPriorityData: LolLobbyLobbyMatchmakingLowPriorityDataResource
	errors: LolLobbyLobbyMatchmakingSearchErrorResource[]
}

export type LolLobbyLobbyMatchmakingSearchState = "ServiceShutdown" | "ServiceError" | "Error" | "Found" | "Searching" | "Canceled" | "AbandonedLowPriorityQueue" | "Invalid"

export interface LolLobbyLobbyMember {
	/** @format uint64 */
	id: number
	isOwner: boolean
	isSpectator: boolean
	canInviteOthers: boolean
	positionPreferences: LolLobbyLobbyPositionPreferences
	excludedPositionPreference?: string
	summonerInternalName: string
	showPositionExcluder: boolean
	autoFillEligible: boolean
	autoFillProtectedForStreaking: boolean
	autoFillProtectedForPromos: boolean
	autoFillProtectedForSoloing: boolean
	isBot: boolean
	botDifficulty: LolLobbyLobbyBotDifficulty
	/** @format int32 */
	botChampionId: number
	position: string
}

export interface LolLobbyLobbyNotification {
	notificationId: string
	notificationReason: string
	summonerIds: number[]
	/** @format uint64 */
	timestamp: number
}

export interface LolLobbyLobbyParticipantDto {
	/** @format uint64 */
	summonerId: number
	/** @format int32 */
	summonerIconId: number
	summonerName: string
	summonerInternalName: string
	puuid: string
	/** @format uint32 */
	summonerLevel: number
	allowedStartActivity: boolean
	allowedChangeActivity: boolean
	allowedToggleInvite: boolean
	allowedKickOthers: boolean
	allowedInviteOthers: boolean
	isLeader: boolean
	isSpectator: boolean
	/** @format int32 */
	teamId: number
	firstPositionPreference: string
	secondPositionPreference: string
	/** @format int8 */
	subteamIndex?: number
	/** @format int8 */
	intraSubteamPosition?: number
	tftNPEQueueBypass?: boolean
	quickplayPlayerState?: string
	playerSlots: LolLobbyQuickPlayPresetSlotDto[]
	ready: boolean
	showGhostedBanner: boolean
	autoFillEligible: boolean
	autoFillProtectedForStreaking: boolean
	autoFillProtectedForPromos: boolean
	autoFillProtectedForSoloing: boolean
	autoFillProtectedForRemedy: boolean
	isBot: boolean
	botId: string
	botDifficulty: LolLobbyLobbyBotDifficulty
	/** @format int32 */
	botChampionId: number
	botPosition: string
}

export type LolLobbyLobbyPartyRewardType = "None" | "Icon" | "Ip"

export interface LolLobbyLobbyPartyRewards {
	isEnabled: boolean
	/** @format int32 */
	queueId: number
	isCustom: boolean
	partyRewards: LolLobbyPartyReward[]
}

export interface LolLobbyLobbyPositionPreferences {
	firstPreference: string
	secondPreference: string
}

export type LolLobbyLobbyRemovedFromGameReason = "ServiceShutdown" | "GameStartError" | "Timeout" | "Other" | "ServiceError" | "Left" | "Disbanded" | "Kicked" | "None"

export interface LolLobbyLobbyStatus {
	/** @format int32 */
	queueId: number
	isCustom: boolean
	isPracticeTool: boolean
	isLeader: boolean
	isSpectator: boolean
	allowedPlayAgain: boolean
	memberSummonerIds: number[]
	invitedSummonerIds: number[]
	lobbyId?: string
	customSpectatorPolicy: LolLobbyQueueCustomGameSpectatorPolicy
}

export interface LolLobbyLobbyTimer {
	enabled: boolean
	/** @format int64 */
	countdown: number
}

export interface LolLobbyLoginSession {
	state: LolLobbyLoginSessionStates
	username: string
	userAuthToken: string
	/** @format uint64 */
	accountId: number
	/** @format uint64 */
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
	/** @format uint64 */
	eventTimestamp: number
	playerId: string
	initialState: string
	finalState: string
	/** @format int32 */
	numOfToggles: number
	/** @format uint64 */
	startTimestamp: number
	/** @format uint64 */
	endTimestamp: number
	/** @format uint64 */
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
	/** @format uint64 */
	eventTimestamp: number
	players: LolLobbyPartiesInvitationPlayerAnalytics[]
}

export interface LolLobbyPartiesInvitationPlayerAnalytics {
	puuid: string
	/** @format uint64 */
	summonerId: number
	role: string
}

export interface LolLobbyPartyChatDto {
	jid: string
	mucJwtDto: LolLobbyMucJwtDto
}

export interface LolLobbyPartyDto {
	partyId: string
	platformId: string
	players: LolLobbyPartyMemberDto[]
	chat: LolLobbyPartyChatDto
	/** @format int32 */
	maxPartySize: number
	partyType: string
	gameMode: LolLobbyGameModeDto
	activityLocked: boolean
	/** @format uint64 */
	version: number
	/** @format uint64 */
	activityStartedUtcMillis: number
	/** @format uint64 */
	activityResumeUtcMillis: number
	activeRestrictions: LolLobbyQueueRestrictionDto
	/** @format int64 */
	eligibilityHash: number
	eligibilityRestrictions?: LolLobbyGatekeeperRestrictionDto[]
	eligibilityWarnings?: LolLobbyGatekeeperRestrictionDto[]
	botParticipants?: LolLobbyBotParticipantDto[]
}

export type LolLobbyPartyEogStatusCategory = "kOnEog" | "kPlayAgain" | "kLeft"

export interface LolLobbyPartyInviteAnalytics {
	partyId: string
	platformId: string
	eventType: string
	eventData: unknown
	/** @format uint64 */
	eventTimestamp: number
	/** @format uint64 */
	fromSummonerId: number
	/** @format uint64 */
	toSummonerId: number
	partyType: string
	gameMode: string
}

export interface LolLobbyPartyMemberDto {
	platformId: string
	puuid: string
	/** @format uint64 */
	accountId: number
	/** @format uint64 */
	summonerId: number
	partyId: string
	/** @format int64 */
	partyVersion: number
	role: LolLobbyPartyMemberRoleEnum
	gameMode?: LolLobbyGameModeDto
	ready?: boolean
	metadata: LolLobbyPartyMemberMetadataDto
	/** @format uint64 */
	invitedBySummonerId?: number
	/** @format uint64 */
	inviteTimestamp?: number
	canInvite?: boolean
	team: string
}

export interface LolLobbyPartyMemberMetadataDto {
	positionPref: string[]
	properties?: unknown
	playerSlots: LolLobbyQuickPlayPresetSlotDto[]
	subteamData?: LolLobbySubteamDataDto
	tftNPEQueueBypass?: boolean
	quickplayPlayerState?: string
}

export type LolLobbyPartyMemberRoleEnum = "NONE" | "DECLINED" | "KICKED" | "HOLD" | "INVITED" | "MEMBER" | "LEADER"

export interface LolLobbyPartyNotificationEnvelopeDto {
	player?: LolLobbyPlayerDto
	queueRestriction?: LolLobbyQueueRestrictionDto
}

export interface LolLobbyPartyPresenceData {
	partyId: string
	/** @format int32 */
	queueId: number
	summoners: number[]
	/** @format uint64 */
	maxPlayers: number
}

export interface LolLobbyPartyQueueEligibilityDto {
	partyRestrictions: LolLobbyGatekeeperRestrictionDto[]
	availableQueueIds: number[]
}

export interface LolLobbyPartyReward {
	/** @format int32 */
	premadeSize: number
	type: LolLobbyLobbyPartyRewardType
	value: string
}

export interface LolLobbyPartyStatusDto {
	readyPlayers: string[]
	leftPlayers: string[]
	eogPlayers: string[]
	/** @format int32 */
	partySize: number
}

export interface LolLobbyPlatformStats {
	playerStatSummaries: LolLobbyPlayerStatSummaryContainer
}

export interface LolLobbyPlayerCollectionDto {
	players: LolLobbyPlayerDto[]
}

export interface LolLobbyPlayerDto {
	puuid: string
	platformId: string
	/** @format uint64 */
	accountId: number
	/** @format uint64 */
	summonerId: number
	/** @format int64 */
	eligibilityHash: number
	/** @format int64 */
	serverUtcMillis: number
	parties?: LolLobbyPartyMemberDto[]
	currentParty?: LolLobbyPartyDto
	/** @format int64 */
	tftGamesPlayed: number
	/** @format int64 */
	tftGamesWon: number
	registration: LolLobbyRegistrationCredentials
	/** @format uint64 */
	createdAt: number
	/** @format uint64 */
	version: number
}

export interface LolLobbyPlayerStatSummary {
	playerStatSummaryType: string
	/** @format int32 */
	wins: number
	/** @format int32 */
	gamesPlayed: number
}

export interface LolLobbyPlayerStatSummaryContainer {
	playerStatSummarySet: LolLobbyPlayerStatSummary[]
}

export interface LolLobbyPlayerStatus {
	currentLobbyStatus?: LolLobbyLobbyStatus
	lastQueuedLobbyStatus?: LolLobbyLobbyStatus
	canInviteOthersAtEog: boolean
}

export type LolLobbyPlayerUpdateType = "RMS" | "ServiceProxy" | "Direct" | "None"

export interface LolLobbyPremadeMemberDto {
	displayName: string
	gameName: string
	tagLine: string
	puuid: string
	partyId: string
	/** @format uint64 */
	summonerId: number
	role: LolLobbyPartyMemberRoleEnum
}

export interface LolLobbyPremadePartyDto {
	partyId: string
	commsEnabled: boolean
	players: Record<string, LolLobbyPremadeMemberDto>
}

export interface LolLobbyPremadeRelationshipAnalytics {
	puuid: string
	/** @format uint64 */
	summonerId: number
	platformId: string
	eventType: string
	eventData: unknown
	/** @format uint64 */
	eventTimestamp: number
	premadePlayers: string[]
	friendPlayers: string[]
}

export interface LolLobbyQueue {
	/** @format int32 */
	id: number
	/** @format int32 */
	mapId: number
	name: string
	shortName: string
	description: string
	detailedDescription: string
	type: string
	gameMode: string
	assetMutator: string
	"maxTierForPremadeSize2": string
	"maxDivisionForPremadeSize2": string
	category: LolLobbyQueueGameCategory
	gameTypeConfig: LolLobbyQueueGameTypeConfig
	/** @format int32 */
	numPlayersPerTeam: number
	/** @format int32 */
	minimumParticipantListSize: number
	/** @format int32 */
	maximumParticipantListSize: number
	/** @format uint32 */
	minLevel: number
	isRanked: boolean
	areFreeChampionsAllowed: boolean
	isTeamBuilderManaged: boolean
	queueAvailability: LolLobbyQueueAvailability
	queueRewards: LolLobbyQueueReward
	spectatorEnabled: boolean
	/** @format uint32 */
	championsRequiredToPlay: number
	allowablePremadeSizes: number[]
	showPositionSelector: boolean
	showQuickPlaySlotSelection: boolean
	/** @format uint64 */
	lastToggledOffTime: number
	/** @format uint64 */
	lastToggledOnTime: number
	removalFromGameAllowed: boolean
	/** @format int32 */
	removalFromGameDelayMinutes: number
}

export type LolLobbyQueueAvailability = "DoesntMeetRequirements" | "PlatformDisabled" | "Available"

export interface LolLobbyQueueCustomGame {
	queueAvailability: LolLobbyQueueAvailability
}

export type LolLobbyQueueCustomGameSpectatorPolicy = "AllAllowed" | "FriendsAllowed" | "LobbyAllowed" | "NotAllowed"

export type LolLobbyQueueGameCategory = "Alpha" | "VersusAi" | "PvP" | "Custom" | "None"

export interface LolLobbyQueueGameTypeConfig {
	/** @format int64 */
	id: number
	name: string
	/** @format int32 */
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
	/** @format int32 */
	mainPickTimerDuration: number
	/** @format int32 */
	postPickTimerDuration: number
	/** @format int32 */
	banTimerDuration: number
	pickMode: string
	banMode: string
	gameModeOverride?: string
	/** @format int32 */
	numPlayersPerTeamOverride?: number
}

export interface LolLobbyQueueRestrictionDto {
	gatekeeperRestrictions: LolLobbyGatekeeperRestrictionDto[]
}

export interface LolLobbyQueueReward {
	isIpEnabled: boolean
	isXpEnabled: boolean
	isChampionPointsEnabled: boolean
	partySizeIpRewards: number[]
}

export interface LolLobbyQuickPlayPresetSlotDto {
	/** @format int32 */
	championId: number
	/** @format int32 */
	skinId: number
	positionPreference: string
	perks: string
	/** @format uint64 */
	"spell1": number
	/** @format uint64 */
	"spell2": number
}

export interface LolLobbyRankedPositionInfoDTO {
	queue: string
	tier: string
	rank: string
}

export interface LolLobbyRankedRestrictionInfo {
	/** @format int32 */
	punishedGamesRemaining: number
	needsAck: boolean
}

export interface LolLobbyRankedStatsUnsignedDTO {
	queues: LolLobbyRankedPositionInfoDTO[]
	highestPreviousSeasonEndTier: string
	highestPreviousSeasonEndRank: string
	jwt: string
}

export interface LolLobbyReadyDto {
	ready: boolean
}

export interface LolLobbyReceivedInvitationDto {
	invitationId: string
	/** @format uint64 */
	fromSummonerId: number
	state: LolLobbyLobbyInvitationState
	timestamp: string
	fromSummonerName: string
	canAcceptInvitation: boolean
	restrictions: LolLobbyEligibilityRestriction[]
	gameConfig: LolLobbyReceivedInvitationGameConfigDto
	invitationType: LolLobbyInvitationType
}

export interface LolLobbyReceivedInvitationGameConfigDto {
	gameMode: string
	/** @format int32 */
	queueId: number
	/** @format int32 */
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
	experiments?: Record<string, string>
}

export interface LolLobbyRegistrationStatus {
	complete: boolean
	errorCodes: string[]
}

export interface LolLobbyRiotMessagingServiceMessage {
	resource: string
	service: string
	version: string
	/** @format int64 */
	timestamp: number
	payload: string
}

export interface LolLobbyServiceProxyPayload {
	method: string
	url: string
	body: string
}

export interface LolLobbySubteamDataDto {
	/** @format int8 */
	subteamIndex: number
	/** @format int8 */
	intraSubteamPosition: number
}

export interface LolLobbySummoner {
	/** @format uint64 */
	summonerId: number
	/** @format uint32 */
	summonerLevel: number
	/** @format uint64 */
	accountId: number
	puuid: string
	/** @format int32 */
	profileIconId: number
	displayName: string
	internalName: string
	gameName: string
	tagLine: string
}

export interface LolLobbyTFTNPESettings {
	data?: LolLobbyTFTNPESettingsResource
	/** @format uint32 */
	schemaVersion: number
}

export interface LolLobbyTFTNPESettingsResource {
	/** @format int32 */
	gamesPlayed: number
	/** @format int32 */
	gamesWon: number
}

export interface LolLobbyTFTNewPlayerDto {
	/** @format int32 */
	tftGamesPlayed: number
	/** @format int32 */
	tftGamesWon: number
}

export interface LolLobbyTeamBuilderActionV1 {
	/** @format int32 */
	actionId: number
	/** @format int32 */
	actorCellId: number
	type: string
	/** @format int32 */
	championId: number
	completed: boolean
	/** @format int64 */
	duration: number
}

export interface LolLobbyTeamBuilderAfkCheckStateV1 {
	/** @format uint32 */
	maxAfkMillis: number
	/** @format int32 */
	remainingAfkMillis: number
	afkReady: boolean
	inventoryDraft: LolLobbyTeamBuilderTbdInventory
	additionalInventoryTypes: string[]
	compressAfkCheckPayload: boolean
	mucJwtDto: LolLobbyTeamBuilderMucJwtDto
}

export interface LolLobbyTeamBuilderBackwardsTransitionInfoV1 {
	backwardsTransitionReason: string
	initiatorSummonerIds: number[]
}

export interface LolLobbyTeamBuilderBenchChampion {
	/** @format int32 */
	championId: number
	isPriority: boolean
}

export interface LolLobbyTeamBuilderCellV1 {
	/** @format int32 */
	teamId: number
	/** @format int32 */
	cellId: number
	/** @format int32 */
	championPickIntent: number
	/** @format int32 */
	championId: number
	/** @format int32 */
	skinId: number
	assignedPosition: string
	/** @format int32 */
	"spell1Id": number
	/** @format int32 */
	"spell2Id": number
	/** @format uint64 */
	summonerId: number
	puuid: string
	nameVisibilityType: string
	/** @format uint64 */
	obfuscatedSummonerId: number
	obfuscatedPuuid: string
}

export interface LolLobbyTeamBuilderCellsV1 {
	alliedTeam: LolLobbyTeamBuilderCellV1[]
	enemyTeam: LolLobbyTeamBuilderCellV1[]
}

export interface LolLobbyTeamBuilderCeremonyV1 {
	name: string
	/** @format int64 */
	duration: number
}

export interface LolLobbyTeamBuilderChampSelectAction {
	/** @format int64 */
	id: number
	/** @format int64 */
	actorCellId: number
	/** @format int32 */
	championId: number
	type: string
	completed: boolean
	isAllyAction: boolean
	isInProgress: boolean
}

export interface LolLobbyTeamBuilderChampSelectChatRoomDetails {
	multiUserChatId: string
	multiUserChatPassword: string
	mucJwtDto: LolLobbyTeamBuilderMucJwtDto
}

export interface LolLobbyTeamBuilderChampSelectDevPanelData {
	/** @format int64 */
	counter: number
	/** @format int64 */
	dtoIndex: number
	/** @format int32 */
	queueId: number
	/** @format int64 */
	teamIdSuffix: number
}

export interface LolLobbyTeamBuilderChampSelectMySelection {
	/** @format int32 */
	selectedSkinId?: number
	/** @format uint64 */
	"spell1Id"?: number
	/** @format uint64 */
	"spell2Id"?: number
	/** @format int64 */
	wardSkinId?: number
}

export interface LolLobbyTeamBuilderChampSelectPlayerSelection {
	/** @format int64 */
	cellId: number
	/** @format int32 */
	championId: number
	/** @format int32 */
	selectedSkinId: number
	/** @format int64 */
	wardSkinId: number
	/** @format uint64 */
	"spell1Id": number
	/** @format uint64 */
	"spell2Id": number
	/** @format int32 */
	team: number
	assignedPosition: string
	/** @format int32 */
	championPickIntent: number
	playerType: string
	/** @format uint64 */
	summonerId: number
	puuid: string
	nameVisibilityType: string
	/** @format uint64 */
	obfuscatedSummonerId: number
	obfuscatedPuuid: string
}

export interface LolLobbyTeamBuilderChampSelectSession {
	/** @format uint64 */
	gameId: number
	timer: LolLobbyTeamBuilderChampSelectTimer
	chatDetails: LolLobbyTeamBuilderChampSelectChatRoomDetails
	myTeam: LolLobbyTeamBuilderChampSelectPlayerSelection[]
	theirTeam: LolLobbyTeamBuilderChampSelectPlayerSelection[]
	trades: LolLobbyTeamBuilderChampSelectTradeContract[]
	pickOrderSwaps: LolLobbyTeamBuilderChampSelectSwapContract[]
	actions: unknown[]
	/** @format int64 */
	localPlayerCellId: number
	allowSkinSelection: boolean
	allowDuplicatePicks: boolean
	allowBattleBoost: boolean
	/** @format int32 */
	boostableSkinCount: number
	allowRerolling: boolean
	/** @format uint64 */
	rerollsRemaining: number
	allowLockedEvents: boolean
	/** @format int32 */
	lockedEventIndex: number
	benchEnabled: boolean
	benchChampions: LolLobbyTeamBuilderBenchChampion[]
	/** @format int64 */
	counter: number
	/** @format int64 */
	recoveryCounter: number
	skipChampionSelect: boolean
	isSpectating: boolean
	hasSimultaneousBans: boolean
	hasSimultaneousPicks: boolean
}

export interface LolLobbyTeamBuilderChampSelectSwapContract {
	/** @format int64 */
	id: number
	/** @format int64 */
	cellId: number
	state: LolLobbyTeamBuilderChampSelectSwapState
}

export type LolLobbyTeamBuilderChampSelectSwapState = "SENT" | "RECEIVED" | "INVALID" | "BUSY" | "AVAILABLE"

export interface LolLobbyTeamBuilderChampSelectTimer {
	/** @format int64 */
	adjustedTimeLeftInPhase: number
	/** @format int64 */
	totalTimeInPhase: number
	phase: string
	isInfinite: boolean
	/** @format uint64 */
	internalNowInEpochMs: number
}

export interface LolLobbyTeamBuilderChampSelectTradeContract {
	/** @format int64 */
	id: number
	/** @format int64 */
	cellId: number
	state: LolLobbyTeamBuilderChampSelectTradeState
}

export type LolLobbyTeamBuilderChampSelectTradeState = "SENT" | "RECEIVED" | "INVALID" | "BUSY" | "AVAILABLE"

export interface LolLobbyTeamBuilderChampionBenchChampionV1 {
	/** @format int32 */
	championId: number
	isPriority: boolean
}

export interface LolLobbyTeamBuilderChampionBenchStateV1 {
	benchEnabled: boolean
	championIds: number[]
	benchChampions: LolLobbyTeamBuilderChampionBenchChampionV1[]
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
	/** @format int32 */
	currentActionSetIndex: number
	cells: LolLobbyTeamBuilderCellsV1
	/** @format int32 */
	localPlayerCellId: number
	/** @format int64 */
	currentTotalTimeMillis: number
	/** @format int64 */
	currentTimeRemainingMillis: number
	trades: LolLobbyTeamBuilderTradeV1[]
	pickOrderSwaps: LolLobbyTeamBuilderPickOrderSwapV1[]
	pickIntentClearedReason: string
	allowOptingOutOfBanning: boolean
	allowSkinSelection: boolean
	allowDuplicatePicks: boolean
	lcuSkipsSendingLoadoutsGco: boolean
	rerollState: LolLobbyTeamBuilderRerollStateV1
	lockedEventsState: LolLobbyTeamBuilderLockedEventsStateV1
	battleBoostState: LolLobbyTeamBuilderTeamBuilderBoostInfo
	championBenchState: LolLobbyTeamBuilderChampionBenchStateV1
	inventoryDraft: LolLobbyTeamBuilderTbdInventory
	skipChampionSelect: boolean
	isSpectating: boolean
}

export interface LolLobbyTeamBuilderCountdownTimer {
	phaseName: string
	/** @format int64 */
	timer: number
	/** @format int32 */
	counter: number
}

export interface LolLobbyTeamBuilderGameModeSpellList {
	spells: number[]
}

export interface LolLobbyTeamBuilderGameflowGameClient {
	running: boolean
}

export interface LolLobbyTeamBuilderGameflowGameMap {
	perPositionRequiredSummonerSpells: Record<string, LolLobbyTeamBuilderGameModeSpellList>
	perPositionDisallowedSummonerSpells: Record<string, LolLobbyTeamBuilderGameModeSpellList>
}

export interface LolLobbyTeamBuilderGameflowSession {
	gameClient: LolLobbyTeamBuilderGameflowGameClient
	map: LolLobbyTeamBuilderGameflowGameMap
}

export interface LolLobbyTeamBuilderGatekeeperRestricted {
	gatekeeperRestrictions: LolLobbyTeamBuilderGatekeeperRestriction[]
}

export interface LolLobbyTeamBuilderGatekeeperRestriction {
	/** @format uint64 */
	summonerId: number
	reason: string
	/** @format uint32 */
	remainingMillis: number
	payload: string
	/** @format int32 */
	queueId: number
}

export interface LolLobbyTeamBuilderLeaverBusterAbandoned {
	abandonerName: string
}

export interface LolLobbyTeamBuilderLobby {
	/** @format int32 */
	queueId: number
	invitationId: string
	multiUserChatId: string
	multiUserChatPassword: string
	mucJwtDto: LolLobbyTeamBuilderMucJwtDto
	members: LolLobbyTeamBuilderLobbyMember[]
	localMember: LolLobbyTeamBuilderLobbyMember
	invitations: LolLobbyTeamBuilderLobbyInvitation[]
	wasKicked: boolean
	removalReason: LolLobbyTeamBuilderLobbyRemovedFromGameReason
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
	/** @format int64 */
	timer: number
	/** @format int32 */
	counter: number
}

export interface LolLobbyTeamBuilderLobbyInvitation {
	invitationMetaData: unknown
}

export interface LolLobbyTeamBuilderLobbyMember {
	/** @format uint64 */
	id: number
	isOwner: boolean
	canInviteOthers: boolean
	positionPreferences: LolLobbyTeamBuilderLobbyPositionPreferences
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
	/** @format int32 */
	lockedEventIndex: number
}

export interface LolLobbyTeamBuilderLoginSession {
	state: LolLobbyTeamBuilderLoginSessionState
	/** @format uint64 */
	summonerId: number
	/** @format uint64 */
	accountId: number
	connected: boolean
}

export type LolLobbyTeamBuilderLoginSessionState = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"

export interface LolLobbyTeamBuilderMatchmakingDodgeData {
	state: LolLobbyTeamBuilderMatchmakingDodgeState
	/** @format uint64 */
	dodgerId: number
}

export type LolLobbyTeamBuilderMatchmakingDodgeState = "TournamentDodged" | "StrangerDodged" | "PartyDodged" | "Invalid"

export type LolLobbyTeamBuilderMatchmakingDodgeWarning = "Penalty" | "Warning" | "None"

export interface LolLobbyTeamBuilderMatchmakingLowPriorityData {
	penalizedSummonerIds: number[]
	/** @format double */
	penaltyTime: number
	/** @format double */
	penaltyTimeRemaining: number
	bustedLeaverAccessToken: string
}

export interface LolLobbyTeamBuilderMatchmakingReadyCheckResource {
	state: LolLobbyTeamBuilderMatchmakingReadyCheckState
	playerResponse: LolLobbyTeamBuilderMatchmakingReadyCheckResponse
	dodgeWarning: LolLobbyTeamBuilderMatchmakingDodgeWarning
	/** @format float */
	timer: number
	declinerIds: number[]
}

export type LolLobbyTeamBuilderMatchmakingReadyCheckResponse = "Declined" | "Accepted" | "None"

export type LolLobbyTeamBuilderMatchmakingReadyCheckState = "Error" | "PartyNotReady" | "StrangerNotReady" | "EveryoneReady" | "InProgress" | "Invalid"

export interface LolLobbyTeamBuilderMatchmakingSearch {
	searchState: LolLobbyTeamBuilderMatchmakingSearchState
}

export interface LolLobbyTeamBuilderMatchmakingSearchErrorResource {
	/** @format int32 */
	id: number
	errorType: string
	/** @format uint64 */
	penalizedSummonerId: number
	/** @format double */
	penaltyTimeRemaining: number
	message: string
}

export interface LolLobbyTeamBuilderMatchmakingSearchResource {
	/** @format int32 */
	queueId: number
	isCurrentlyInQueue: boolean
	lobbyId: string
	searchState: LolLobbyTeamBuilderMatchmakingSearchState
	/** @format float */
	timeInQueue: number
	/** @format float */
	estimatedQueueTime: number
	readyCheck: LolLobbyTeamBuilderMatchmakingReadyCheckResource
	dodgeData: LolLobbyTeamBuilderMatchmakingDodgeData
	lowPriorityData: LolLobbyTeamBuilderMatchmakingLowPriorityData
	errors: LolLobbyTeamBuilderMatchmakingSearchErrorResource[]
}

export type LolLobbyTeamBuilderMatchmakingSearchState = "ServiceShutdown" | "ServiceError" | "Error" | "Found" | "Searching" | "Canceled" | "AbandonedLowPriorityQueue" | "Invalid"

export interface LolLobbyTeamBuilderMucJwtDto {
	jwt: string
	channelClaim: string
	domain: string
	targetRegion: string
}

export interface LolLobbyTeamBuilderPickOrderSwapV1 {
	/** @format int32 */
	id: number
	/** @format int32 */
	cellId: number
	state: string
}

export interface LolLobbyTeamBuilderQueue {
	/** @format int32 */
	id: number
	/** @format int32 */
	mapId: number
	name: string
	shortName: string
	description: string
	detailedDescription: string
	type: string
	gameMode: string
	assetMutator: string
	category: LolLobbyTeamBuilderQueueGameCategory
	gameTypeConfig: LolLobbyTeamBuilderQueueGameTypeConfig
	/** @format int32 */
	numPlayersPerTeam: number
	/** @format int32 */
	minimumParticipantListSize: number
	/** @format int32 */
	maximumParticipantListSize: number
	/** @format uint32 */
	minLevel: number
	isRanked: boolean
	areFreeChampionsAllowed: boolean
	isTeamBuilderManaged: boolean
	queueAvailability: LolLobbyTeamBuilderQueueAvailability
	queueRewards: LolLobbyTeamBuilderQueueReward
	spectatorEnabled: boolean
	/** @format uint32 */
	championsRequiredToPlay: number
	allowablePremadeSizes: number[]
	showPositionSelector: boolean
	showQuickPlaySlotSelection: boolean
	/** @format uint64 */
	lastToggledOffTime: number
	/** @format uint64 */
	lastToggledOnTime: number
	removalFromGameAllowed: boolean
	/** @format int32 */
	removalFromGameDelayMinutes: number
}

export type LolLobbyTeamBuilderQueueAvailability = "DoesntMeetRequirements" | "PlatformDisabled" | "Available"

export type LolLobbyTeamBuilderQueueGameCategory = "Alpha" | "VersusAi" | "PvP" | "Custom" | "None"

export interface LolLobbyTeamBuilderQueueGameTypeConfig {
	/** @format int64 */
	id: number
	name: string
	/** @format int32 */
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
	/** @format int32 */
	mainPickTimerDuration: number
	/** @format int32 */
	postPickTimerDuration: number
	/** @format int32 */
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
	/** @format uint64 */
	rerollsRemaining: number
}

export interface LolLobbyTeamBuilderSettingCategoryResource {
	/** @format int32 */
	schemaVersion: number
	data: LolLobbyTeamBuilderChampionSelectPreferences
}

export interface LolLobbyTeamBuilderTBDMatchmakingState {
	/** @format int64 */
	estimatedMatchmakingTimeMillis: number
	/** @format int64 */
	timeInMatchmakingMillis: number
	backwardsTransitionReason: string
}

export interface LolLobbyTeamBuilderTbLobbyStateResource {
	/** @format int32 */
	counter: number
	/** @format int32 */
	recoveryCounter: number
	phaseName: string
	/** @format int32 */
	queueId: number
	/** @format uint64 */
	gameId: number
	matchmakingState?: LolLobbyTeamBuilderTBDMatchmakingState
	afkCheckState?: LolLobbyTeamBuilderAfkCheckStateV1
	championSelectState?: LolLobbyTeamBuilderChampionSelectStateV1
}

export interface LolLobbyTeamBuilderTbRemovedFromServiceNotification {
	reason: string
	backwardsTransitionInfo: LolLobbyTeamBuilderBackwardsTransitionInfoV1
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
	/** @format int64 */
	summonerId: number
	puuid: string
	skinUnlockMode: string
	/** @format int64 */
	price: number
	/** @format int64 */
	ipReward: number
	/** @format int64 */
	ipRewardForPurchaser: number
	availableSkins: number[]
	unlocked: boolean
}

export interface LolLobbyTeamBuilderTeamBuilderBoostInfo {
	allowBattleBoost: boolean
	/** @format int32 */
	boostableSkinCount: number
	/** @format int64 */
	activatorCellId: number
	battleBoostActivated: boolean
	/** @format int64 */
	cost: number
	unlockedSkinIds: number[]
}

export interface LolLobbyTeamBuilderTeambuilderLeagueEdgeResponse {
	payload: LolLobbyTeamBuilderTbLobbyStateResource
	status: string
}

export interface LolLobbyTeamBuilderTradeV1 {
	/** @format int32 */
	id: number
	/** @format int32 */
	cellId: number
	state: string
}

export interface LolLobbyUserInfoToken {
	userInfo: string
}

export interface LolLobbyUserResource {
	/** @format uint64 */
	summonerId: number
	lol: Record<string, string>
}

export interface LolLoginAccessToken {
	token: string
	scopes: string[]
	/** @format uint64 */
	expiry: number
}

export interface LolLoginAccountStateResource {
	state: LolLoginAccountStateType
}

export type LolLoginAccountStateType = "GENERATING" | "TRANSFERRED_OUT" | "TRANSFERRING_IN" | "TRANSFERRING_OUT" | "ENABLED" | "CREATING"

export interface LolLoginAuthorization {
	currentPlatformId: string
	/** @format uint64 */
	currentAccountId: number
	subject: string
}

export type LolLoginConfigReadinessEnum = "Disabled" | "Ready" | "NotReady"

export interface LolLoginConfigStatus {
	readiness: LolLoginConfigReadinessEnum
}

export type LolLoginConfigType = "player" | "public"

export interface LolLoginCrashReportingEnvironment {
	environment: string
	userName: string
	userId: string
}

export interface LolLoginIdToken {
	token: string
	/** @format uint64 */
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
	mode: LolLoginLoginConnectionMode
	isUsingDeveloperAuthToken: boolean
	isPartnerRiotClient: boolean
}

export interface LolLoginLoginError {
	id: string
	messageId: string
	description: string
}

export interface LolLoginLoginQueue {
	/** @format uint64 */
	estimatedPositionInQueue: number
	/** @format uint64 */
	approximateWaitTimeSeconds?: number
	/** @format uint64 */
	maxDisplayedPosition?: number
	/** @format uint64 */
	maxDisplayedWaitTimeSeconds?: number
}

export interface LolLoginLoginSession {
	state: LolLoginLoginSessionStates
	username: string
	userAuthToken: string
	/** @format uint64 */
	accountId: number
	/** @format uint64 */
	summonerId?: number
	isInLoginQueue: boolean
	error?: LolLoginLoginError
	idToken: string
	puuid: string
	isNewPlayer: boolean
	connected: boolean
}

export type LolLoginLoginSessionStates = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"

export interface LolLoginLoginSessionWallet {
	/** @format int64 */
	ip: number
	/** @format int64 */
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
	/** @format uint64 */
	summonerId: number
}

export interface LolLoginSummonerSessionResource {
	/** @format uint64 */
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
	/** @format int32 */
	id: number
	ownership: LolLootCollectionsOwnership
}

export interface LolLootCollectionsChampionSkinMinimal {
	/** @format int32 */
	championId: number
	/** @format int32 */
	id: number
	name: string
	ownership: LolLootCollectionsOwnership
	splashPath: string
	tilePath: string
}

export interface LolLootCollectionsEmote {
	/** @format int64 */
	itemId: number
	ownershipType: LolLootInventoryOwnership
}

export interface LolLootCollectionsOwnership {
	loyaltyReward: boolean
	xboxGPReward: boolean
	owned: boolean
	rental: LolLootCollectionsRental
}

export interface LolLootCollectionsRental {
	rented: boolean
}

export interface LolLootCollectionsStatstone {
	/** @format int64 */
	itemId: number
	ownershipType: LolLootInventoryOwnership
}

export interface LolLootCollectionsSummonerIcon {
	/** @format int32 */
	itemId: number
}

export interface LolLootCollectionsWardSkin {
	/** @format int64 */
	id: number
	name: string
	ownership: LolLootCollectionsOwnership
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
	/** @format int32 */
	essenceQuantity: number
	requiredTokens: string
	requiredOthers: string
	requiredOthersName: string
	/** @format int32 */
	requiredOthersCount: number
}

export interface LolLootCosmeticsTFTDamageSkin {
	contentId: string
	/** @format int32 */
	itemId: number
	name: string
	description: string
	loadoutsIcon: string
	owned: boolean
	selected: boolean
	loyalty: boolean
	"f2p": boolean
	/** @format uint32 */
	rarityValue: number
	purchaseDate: string
	/** @format uint32 */
	level: number
	/** @format uint32 */
	groupId: number
	groupName: string
	upgrades: string[]
}

export interface LolLootCosmeticsTFTDamageSkinViewModel {
	contentId: string
	/** @format int32 */
	itemId: number
	name: string
	description: string
	loadoutsIcon: string
	owned: boolean
	selected: boolean
	loyalty: boolean
	"f2p": boolean
	/** @format uint32 */
	rarityValue: number
	purchaseDate: string
	isRecentItem: boolean
	/** @format uint32 */
	level: number
	/** @format uint32 */
	groupId: number
	groupName: string
	upgrades: LolLootCosmeticsTFTDamageSkinViewModel[]
}

export interface LolLootCosmeticsTFTMapSkinViewModel {
	/** @format int32 */
	itemId: number
	name: string
	description: string
	loadoutsIcon: string
	owned: boolean
	selected: boolean
	loyalty: boolean
	"f2p": boolean
}

export interface LolLootCounter {
	id: string
	name: string
	groupId: string
	direction: string
	/** @format int64 */
	startValue: number
}

export interface LolLootCounterInstance {
	ownerId: string
	productId: string
	groupId: string
	counterId: string
	/** @format int64 */
	counterValue: number
}

export interface LolLootCurrencyConfiguration {
	currenciesUsingCapWallets: string[]
}

export interface LolLootEntityInstance {
	groupId: string
	counters: LolLootCounterInstance[]
	milestones: LolLootMilestoneInstance[]
}

export interface LolLootGameDataSummonerEmote {
	/** @format int64 */
	id: number
	name: string
	inventoryIcon: string
	description: string
}

export interface LolLootGameDataSummonerIcon {
	/** @format int32 */
	id: number
	title: string
	imagePath: string
}

export type LolLootGameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"

export interface LolLootGameflowSession {
	phase: LolLootGameflowPhase
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
	repeat: LolLootRepeat
	counters: LolLootCounter[]
	milestones: LolLootMilestone[]
}

export type LolLootInventoryOwnership = "F2P" | "RENTED" | "OWNED"

export interface LolLootItemKey {
	inventoryType: string
	/** @format int32 */
	itemId: number
}

export type LolLootItemOwnershipStatus = "OWNED" | "RENTAL" | "FREE" | "NONE"

export interface LolLootLoginDataPacket {
	simpleMessages: LolLootLoginSimpleMessage[]
}

export interface LolLootLoginSession {
	state: LolLootLoginSessionStates
	/** @format uint64 */
	summonerId: number
	/** @format uint64 */
	accountId: number
}

export type LolLootLoginSessionStates = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"

export interface LolLootLoginSimpleMessage {
	/** @format uint64 */
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
	contents: LolLootLootBundleContentGdsResource[]
}

export interface LolLootLootDataGdsResource {
	LootItems: LolLootLootItemGdsResource[]
	LootRecipes: LolLootLootRecipeGdsResource[]
	LootTables: LolLootLootTableGdsResource[]
	LootBundles: LolLootLootBundleGdsResource[]
}

export interface LolLootLootDescription {
	lootName: string
	localizedDescription: string
	localizedDescriptionLong: string
	imagePath: string
	childLootTableNames: string[]
	childrenDescriptions: LolLootLootDescription[]
}

export interface LolLootLootDropTableEntryGdsResource {
	lootId: string
	localizedDescription: string
}

export interface LolLootLootGrantNotification {
	/** @format int64 */
	id: number
	/** @format uint64 */
	gameId: number
	/** @format uint64 */
	playerId: number
	/** @format int32 */
	championId: number
	playerGrade: string
	lootName: string
	messageKey: string
	msgId: string
	/** @format uint64 */
	accountId: number
}

export interface LolLootLootItem {
	lootName: string
	asset: string
	type: string
	rarity: string
	/** @format int32 */
	value: number
	/** @format int32 */
	storeItemId: number
	upgradeLootName: string
	/** @format int64 */
	expiryTime: number
	tags: string
	displayCategories: string
	/** @format int64 */
	rentalSeconds: number
	/** @format int32 */
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
	/** @format int32 */
	mappedStoreId: number
	/** @format int32 */
	lifetimeMax: number
	autoRedeem: boolean
	recipeMenuActive: boolean
	rarity: LolLootLootRarity
	type: LolLootLootType
}

export interface LolLootLootMilestone {
	id: string
	/** @format uint64 */
	threshold: number
	rewards: LolLootLootMilestoneReward[]
}

export type LolLootLootMilestoneClaimStatus = "FAILED" | "COMPLETED" | "IN_PROGRESS" | "NOT_STARTED"

export interface LolLootLootMilestoneRepeat {
	/** @format int32 */
	repeatCount: number
	/** @format int32 */
	repeatScope: number
	/** @format float */
	multiplier: number
}

export interface LolLootLootMilestoneReward {
	rewardGroupId: string
	rewardType: string
	itemInstanceId: string
	inventoryType: string
	/** @format int32 */
	itemId: number
	/** @format int32 */
	quantity: number
	lootItem?: LolLootPlayerLoot
}

export interface LolLootLootMilestones {
	id: string
	progressionConfigId: string
	active: boolean
	startDate: string
	endDate: string
	storeGroupTitle: string
	repeat: LolLootLootMilestoneRepeat
	lootItems: string[]
	recipes: string[]
	milestones: LolLootLootMilestone[]
	errorCachingMilestoneSet: boolean
}

export interface LolLootLootMilestonesClaimResponse {
	lootMilestoneSetId: string
	claimedMilestones: string[]
	status: LolLootLootMilestoneClaimStatus
}

export interface LolLootLootMilestonesCounter {
	lootMilestonesId: string
	/** @format int64 */
	counterValue: number
	/** @format int64 */
	completedLoops: number
	readyToClaimMilestones: string[]
}

export interface LolLootLootMilestonesDataGdsResource {
	id: string
	storeGroupTitle: string
	startDate: string
	endDate: string
	recipes: LolLootMilestonesRecipeGdsResource[]
	progressTrack: LolLootProgressionConfigGdsResource
}

export interface LolLootLootOddsResponse {
	lootId: string
	parentId: string
	/** @format double */
	dropRate: number
	/** @format int32 */
	quantity: number
	label: string
	query: string
	/** @format int32 */
	lootOrder: number
	children: LolLootLootOddsResponse[]
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
	outputs: LolLootLootOutputGdsResource[]
	singleOpen: boolean
}

export interface LolLootLootTableGdsResource {
	id: string
	description: string
	descriptionLong: string
	image: string
	dropChance: LolLootLootDropTableEntryGdsResource[]
}

export type LolLootLootType = "TFT_Damage_Skin" | "TFT_Map_Skin" | "SkinBorder" | "Boost" | "Statstone_Shard" | "Statstone" | "Egg_Color" | "Egg" | "Companion" | "SummonerIcon" | "Skin_Rental" | "Skin" | "WardSkin" | "Material" | "Currency" | "Chest"

export interface LolLootMassDisenchantClientConfig {
	/** @format int16 */
	maxLootItemsSizeMassCraft: number
	enabled: boolean
}

export interface LolLootMilestone {
	id: string
	name: string
	groupId: string
	counterId: string
	/** @format int64 */
	triggerValue: number
	properties: Record<string, string>
}

export interface LolLootMilestoneInstance {
	milestoneId: string
	instanceId: string
	ownerId: string
	productId: string
	groupId: string
	counterId: string
	/** @format int64 */
	triggerValue: number
	/** @format uint32 */
	repeatSequence: number
	triggered: boolean
	triggeredTimestamp: string
	triggers: LolLootTrigger[]
}

export interface LolLootMilestoneLootItemRewardGdsResource {
	internalName: string
}

export interface LolLootMilestonesProgressionConfigRepeatGdsResource {
	name: LolLootMilestonesProgressionGroupRepeatGdsResource
}

export interface LolLootMilestonesProgressionCounterGdsResource {
	id: string
	name: string
	direction: string
	/** @format int32 */
	startValue: number
}

export interface LolLootMilestonesProgressionGroupRepeatGdsResource {
	/** @format int32 */
	Count: number
	/** @format int32 */
	Scope: number
	/** @format float */
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
	itemStatus: LolLootItemOwnershipStatus
	parentItemStatus: LolLootItemOwnershipStatus
	redeemableStatus: LolLootRedeemableStatus
	/** @format int32 */
	count: number
	/** @format int32 */
	rentalGames: number
	/** @format int32 */
	storeItemId: number
	/** @format int32 */
	parentStoreItemId: number
	/** @format int32 */
	value: number
	/** @format int32 */
	upgradeEssenceValue: number
	/** @format int32 */
	disenchantValue: number
	disenchantRecipeName: string
	/** @format int64 */
	expiryTime: number
	/** @format int64 */
	rentalSeconds: number
	isNew: boolean
	isRental: boolean
}

export interface LolLootPlayerLootDelta {
	/** @format int32 */
	deltaCount: number
	playerLoot: LolLootPlayerLoot
}

export interface LolLootPlayerLootMap {
	/** @format int64 */
	version: number
	playerLoot: Record<string, LolLootPlayerLoot>
}

export interface LolLootPlayerLootNotification {
	id: string
	/** @format int32 */
	count: number
	acknowledged: boolean
}

export interface LolLootPlayerLootUpdate {
	added: LolLootPlayerLootDelta[]
	removed: LolLootPlayerLootDelta[]
	redeemed: LolLootPlayerLootDelta[]
}

export interface LolLootProgressionConfigGdsResource {
	id: string
	name: string
	repeat: LolLootMilestonesProgressionConfigRepeatGdsResource
	counters: LolLootMilestonesProgressionCounterGdsResource[]
	milestones: LolLootProgressionConfigMilestoneGdsResource[]
}

export interface LolLootProgressionConfigMilestoneGdsResource {
	id: string
	name: string
	/** @format uint64 */
	triggerValue: number
	properties: LolLootProgressionConfigMilestonePropertiesGdsResource[]
	counter: LolLootMilestonesProgressionCounterGdsResource
}

export interface LolLootProgressionConfigMilestonePropertiesGdsResource {
	id: string
	name: string
	description: string
	rewardStrategy: string
	rewards: LolLootProgressionConfigMilestoneRewardGdsResource[]
}

export interface LolLootProgressionConfigMilestoneRewardGdsResource {
	id: string
	rewardType: string
	/** @format int32 */
	quantity: number
	lootItemToGrant?: LolLootMilestoneLootItemRewardGdsResource
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
	guaranteedDescriptions: LolLootLootDescription[]
	bonusDescriptions: LolLootLootDescription[]
	tooltipsDisabled: boolean
}

export interface LolLootRecipeOutput {
	lootName: string
	/** @format int32 */
	quantity: number
}

export interface LolLootRecipeSlot {
	/** @format int32 */
	slotNumber: number
	lootIds: string[]
	tags: string
	/** @format int32 */
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
	slots: LolLootRecipeSlot[]
	outputs: LolLootRecipeOutput[]
	metadata: LolLootRecipeMetadata
	singleOpen: boolean
	lootMilestoneIds: string[]
}

export type LolLootRedeemableStatus = "SKIN_NOT_OWNED" | "CHAMPION_NOT_OWNED" | "ALREADY_RENTED" | "ALREADY_OWNED" | "NOT_REDEEMABLE_RENTAL" | "NOT_REDEEMABLE" | "REDEEMABLE_RENTAL" | "REDEEMABLE" | "UNKNOWN"

export interface LolLootRegionLocale {
	region: string
	locale: string
}

export interface LolLootRepeat {
	/** @format int32 */
	count: number
	/** @format uint32 */
	scope: number
	/** @format float */
	multiplier: number
	milestones: LolLootMilestone[]
	repeatTriggers: LolLootRepeatGroupTrigger[]
}

export interface LolLootRepeatGroupTrigger {
	type: string
	counterId: string
	/** @format uint16 */
	startTriggerValue: number
	/** @format uint16 */
	increaseBy: number
	/** @format float */
	multiplier: number
}

export interface LolLootRequestDTO_SelectionRequestDTO {
	data: LolLootSelectionRequestDTO
	metadata: LolLootRequestMetadataDTO
}

export interface LolLootRequestDTO_vector_SelectionRequestDTO {
	data: LolLootSelectionRequestDTO[]
	metadata: LolLootRequestMetadataDTO
}

export interface LolLootRequestDTO_vector_string {
	data: string[]
	metadata: LolLootRequestMetadataDTO
}

export interface LolLootRequestMetadataDTO {
	transactionId?: string
}

export interface LolLootResponseDTO_SvcRewardGrant {
	data: LolLootSvcRewardGrant
	metadata: LolLootResponseMetadataDTO
}

export interface LolLootResponseDTO_map_RewardGroupId_SelectGrantStatus {
	data: Record<string, LolLootSelectGrantStatusResponse>
	metadata: LolLootResponseMetadataDTO
}

export interface LolLootResponseDTO_vector_SvcRewardGrant {
	data: LolLootSvcRewardGrant[]
	metadata: LolLootResponseMetadataDTO
}

export interface LolLootResponseDTO_vector_SvcRewardGroup {
	data: LolLootSvcRewardGroup[]
	metadata: LolLootResponseMetadataDTO
}

export interface LolLootResponseMetadataDTO {
	[key: string | number]: any
}

export interface LolLootReward {
	id: string
	itemId: string
	itemType: string
	/** @format int32 */
	quantity: number
	fulfillmentSource: string
	media: Record<string, string>
	localizations: Record<string, string>
}

export interface LolLootRewardGrant {
	info: LolLootSvcRewardGrant
	rewardGroup: LolLootSvcRewardGroup
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
	/** @format uint32 */
	minSelectionsAllowed: number
	/** @format uint32 */
	maxSelectionsAllowed: number
}

export interface LolLootSvcRewardGrant {
	id: string
	granteeId: string
	rewardGroupId: string
	dateCreated: string
	status: LolLootGrantStatus
	grantElements: LolLootSvcRewardGrantElement[]
	selectedIds: string[]
	viewed: boolean
	grantorDescription: LolLootGrantorDescription
	messageParameters: Record<string, unknown>
}

export interface LolLootSvcRewardGrantElement {
	elementId: string
	itemId: string
	itemType: string
	fulfillmentSource: string
	status: LolLootRewardStatus
	/** @format int32 */
	quantity: number
	media: Record<string, string>
	localizations: Record<string, string>
}

export interface LolLootSvcRewardGroup {
	id: string
	productId: string
	types: string[]
	rewards: LolLootReward[]
	childRewardGroupIds: string[]
	rewardStrategy: LolLootRewardStrategy
	selectionStrategyConfig?: LolLootSelectionStrategyConfig
	active: boolean
	media: Record<string, string>
	localizations: Record<string, string>
	celebrationType: LolLootCelebrationType
}

export interface LolLootTFTDamageSkinGroupViewModel {
	groupName: string
	/** @format uint32 */
	groupId: number
	/** @format uint32 */
	numOwned: number
	/** @format uint32 */
	numAvailable: number
	items: LolLootCosmeticsTFTDamageSkinViewModel[]
}

export interface LolLootTFTDamageSkinGroupedViewModel {
	selectedLoadoutItem: LolLootCosmeticsTFTDamageSkinViewModel
	/** @format int32 */
	defaultItemId: number
	groups: LolLootTFTDamageSkinGroupViewModel[]
}

export interface LolLootTFTMapSkinGroupViewModel {
	items: LolLootCosmeticsTFTMapSkinViewModel[]
}

export interface LolLootTFTMapSkinGroupedViewModel {
	selectedLoadoutItem: LolLootCosmeticsTFTMapSkinViewModel
	/** @format int32 */
	defaultItemId: number
	groups: LolLootTFTMapSkinGroupViewModel[]
}

export interface LolLootTrigger {
	type: string
	counterId: string
	/** @format uint64 */
	triggerValue: number
}

export interface LolLootVerboseLootOddsResponse {
	recipeName: string
	chanceToContain: LolLootLootOddsResponse[]
	guaranteedToContain: LolLootLootOddsResponse[]
	lootItem: LolLootPlayerLoot
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
	data: LolLoyaltyInventoryDTO
}

export interface LolLoyaltyLoginSession {
	state: LolLoyaltyLoginSessionStates
	/** @format uint64 */
	summonerId: number
	/** @format uint64 */
	accountId: number
	puuid: string
}

export type LolLoyaltyLoginSessionStates = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"

export interface LolLoyaltyLoyaltyRewards {
	/** @format int32 */
	freeRewardedChampionsCount: number
	championIds: number[]
	/** @format int32 */
	freeRewardedSkinsCount: number
	skinIds: number[]
	global: LolLoyaltyGlobalRewards
	/** @format int32 */
	ipBoost: number
	xpBoost: Record<string, number>
	/** @format int32 */
	loyaltyTFTMapSkinCount: number
	/** @format int32 */
	loyaltyTFTCompanionCount: number
	/** @format int32 */
	loyaltyTFTDamageSkinCount: number
	loyaltySources: Record<string, boolean>
}

export interface LolLoyaltyLoyaltyRewardsSimplified {
	/** @format int32 */
	freeRewardedChampionsCount: number
	championIds: number[]
	/** @format int32 */
	freeRewardedSkinsCount: number
	skinIds: number[]
	global: LolLoyaltyGlobalRewards
	/** @format int32 */
	ipBoost: number
	/** @format int32 */
	xpBoost: number
	/** @format int32 */
	loyaltyTFTMapSkinCount: number
	/** @format int32 */
	loyaltyTFTCompanionCount: number
	/** @format int32 */
	loyaltyTFTDamageSkinCount: number
	loyaltySources: Record<string, boolean>
}

export type LolLoyaltyLoyaltyStatus = "DISABLED" | "REVOKE" | "CHANGE" | "EXPIRY" | "REWARDS_GRANT" | "LEGACY"

export interface LolLoyaltyLoyaltyStatusNotification {
	status: LolLoyaltyLoyaltyStatus
	rewards: LolLoyaltyLoyaltyRewardsSimplified
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
	/** @format int64 */
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
	/** @format int64 */
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
	tutorialCards: LolMapsTutorialCard[]
	properties: unknown
	perPositionRequiredSummonerSpells: Record<string, LolMapsGameModeSpellList>
	perPositionDisallowedSummonerSpells: Record<string, LolMapsGameModeSpellList>
}

export interface LolMapsTutorialCard {
	header?: string
	footer?: string
	description?: string
	imagePath: string
}

export interface LolMarketplaceCatalogEntryDto {
	id: string
	productId: string
	name: string
	description: string
	endTime: string
	purchaseUnits: LolMarketplacePurchaseUnitDto[]
	displayMetadata: unknown
}

export interface LolMarketplaceFinalPurchaseUnitDto {
	payments: LolMarketplacePaymentDto[]
	fulfillment: LolMarketplaceFulfillmentDto
}

export interface LolMarketplaceFulfillmentDto {
	/** @format int64 */
	delta: number
	/** @format int64 */
	finalDelta: number
	name: string
	/** @format int64 */
	maxQuantity: number
	/** @format uint64 */
	ownedQuantity: number
	itemTypeId: string
	itemId: string
	currencyId: string
	subCurrencyDeltas: Record<string, number>
}

export interface LolMarketplacePagination {
	/** @format uint32 */
	offset: number
	/** @format uint32 */
	limit: number
	/** @format uint32 */
	maxLimit: number
	/** @format uint32 */
	total: number
	previous: string
	next: string
}

export interface LolMarketplacePaymentDto {
	/** @format int64 */
	delta: number
	/** @format int64 */
	finalDelta: number
	name: string
	/** @format int64 */
	discountedDelta: number
	/** @format double */
	discountPercent: number
	itemTypeId: string
	itemId: string
	currencyId: string
}

export interface LolMarketplacePaymentOptionDto {
	key: string
	payments: LolMarketplacePaymentDto[]
}

export interface LolMarketplacePurchaseDto {
	id: string
	productId: string
	storeId: string
	catalogEntryId: string
	purchaserId: string
	recipientId: string
	purchaseUnits: LolMarketplaceFinalPurchaseUnitDto[]
	createdTime: string
	completedTime: string
	isReverted: boolean
	revertedTime: string
	purchaseState: string
}

export interface LolMarketplacePurchaseRequest {
	storeId: string
	catalogEntryId: string
	paymentOptionsKeys: string[]
}

export interface LolMarketplacePurchaseRequestDto {
	storeId: string
	catalogEntryId: string
	paymentOptionsKeys: string[]
	idempotencyId: string
}

export interface LolMarketplacePurchaseResponse {
	data: LolMarketplacePurchaseDto
	paging: LolMarketplacePagination
	stats: LolMarketplaceResponseStats
	notes: string[]
	errors: LolMarketplaceResponseError[]
}

export interface LolMarketplacePurchaseTransaction {
	purchaseId: string
	productId: string
	storeId: string
	catalogEntryId: string
	purchaseState: string
}

export interface LolMarketplacePurchaseUnitDto {
	paymentOptions: LolMarketplacePaymentOptionDto[]
	payment: LolMarketplacePaymentDto[]
	fulfillment: LolMarketplaceFulfillmentDto
}

export interface LolMarketplaceRegionLocale {
	region: string
	locale: string
	webRegion: string
}

export interface LolMarketplaceResponseError {
	message: string
	type: string
	/** @format uint32 */
	code: number
}

export interface LolMarketplaceResponseStats {
	/** @format uint32 */
	durationMs: number
}

export interface LolMarketplaceRiotMessagingServiceMessage {
	resource: string
	service: string
	version: string
	/** @format int64 */
	timestamp: number
	payload: string
}

export interface LolMarketplaceStoreDto {
	id: string
	productId: string
	name: string
	catalogEntries: LolMarketplaceCatalogEntryDto[]
	displayMetadata: unknown
}

export interface LolMarketplaceStoresResponse {
	data: LolMarketplaceStoreDto[]
	paging: LolMarketplacePagination
	stats: LolMarketplaceResponseStats
	notes: string[]
	errors: LolMarketplaceResponseError[]
}

export interface LolMarketplaceTraKeyName {
	nameTraKey: string
	translatedName: string
}

export interface LolMatchHistoryAcsEndPoint {
	url: string
}

export interface LolMatchHistoryAcsPlayer {
	platformId: string
	/** @format uint64 */
	accountId: number
}

export interface LolMatchHistoryAlias {
	gameName: string
	tagLine: string
}

export interface LolMatchHistoryGAMHSMatchHistoryData {
	metadata: LolMatchHistoryGAMHSMatchHistoryMetadata
	json: unknown
}

export interface LolMatchHistoryGAMHSMatchHistoryList {
	games: LolMatchHistoryGAMHSMatchHistoryData[]
	active_puuid: string
}

export interface LolMatchHistoryGAMHSMatchHistoryMetadata {
	product: string
	/** @format uint8 */
	data_version: number
	info_type: string
	match_id: string
	tags: string[]
	participants: string[]
	/** @format uint64 */
	timestamp: number
	private: boolean
}

export interface LolMatchHistoryLoginSession {
	state: LolMatchHistoryLoginSessionStates
	/** @format uint64 */
	summonerId: number
	/** @format uint64 */
	accountId: number
	idToken: string
}

export type LolMatchHistoryLoginSessionStates = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"

export interface LolMatchHistoryMHSummoner {
	/** @format uint64 */
	summonerId: number
	/** @format uint64 */
	accountId: number
	displayName: string
	puuid: string
}

export interface LolMatchHistoryMatchHistoryEvent {
	type: string
	/** @format uint64 */
	timestamp: number
	/** @format uint16 */
	participantId: number
	/** @format uint16 */
	teamId: number
	/** @format uint16 */
	itemId: number
	/** @format uint16 */
	killerId: number
	/** @format uint16 */
	victimId: number
	/** @format uint16 */
	skillSlot: number
	position: LolMatchHistoryMatchHistoryPosition
	assistingParticipantIds: number[]
	buildingType: string
	laneType: string
	towerType: string
	monsterType: string
	monsterSubType: string
}

export interface LolMatchHistoryMatchHistoryGame {
	endOfGameResult: string
	/** @format uint64 */
	gameId: number
	platformId: string
	/** @format uint64 */
	gameCreation: number
	gameCreationDate: string
	/** @format uint32 */
	gameDuration: number
	/** @format int32 */
	queueId: number
	/** @format uint16 */
	mapId: number
	/** @format uint16 */
	seasonId: number
	gameVersion: string
	gameMode: string
	gameType: string
	teams: LolMatchHistoryMatchHistoryTeam[]
	participants: LolMatchHistoryMatchHistoryParticipant[]
	participantIdentities: LolMatchHistoryMatchHistoryParticipantIdentities[]
}

export interface LolMatchHistoryMatchHistoryGameList {
	/** @format uint64 */
	gameIndexBegin: number
	/** @format uint64 */
	gameIndexEnd: number
	gameBeginDate: string
	gameEndDate: string
	/** @format uint64 */
	gameCount: number
	games: LolMatchHistoryMatchHistoryGame[]
}

export interface LolMatchHistoryMatchHistoryList {
	platformId: string
	/** @format uint64 */
	accountId: number
	games: LolMatchHistoryMatchHistoryGameList
}

export interface LolMatchHistoryMatchHistoryParticipant {
	/** @format uint16 */
	participantId: number
	/** @format uint16 */
	teamId: number
	/** @format int32 */
	championId: number
	/** @format uint16 */
	"spell1Id": number
	/** @format uint16 */
	"spell2Id": number
	highestAchievedSeasonTier: string
	stats: LolMatchHistoryMatchHistoryParticipantStatistics
	timeline: LolMatchHistoryMatchHistoryTimeline
}

export interface LolMatchHistoryMatchHistoryParticipantFrame {
	/** @format uint16 */
	participantId: number
	position: LolMatchHistoryMatchHistoryPosition
	/** @format int32 */
	currentGold: number
	/** @format int32 */
	totalGold: number
	/** @format uint16 */
	level: number
	/** @format uint32 */
	xp: number
	/** @format uint16 */
	minionsKilled: number
	/** @format uint16 */
	jungleMinionsKilled: number
	/** @format uint16 */
	dominionScore: number
	/** @format uint16 */
	teamScore: number
}

export interface LolMatchHistoryMatchHistoryParticipantIdentities {
	/** @format uint16 */
	participantId: number
	player: LolMatchHistoryMatchHistoryParticipantIdentityPlayer
}

export interface LolMatchHistoryMatchHistoryParticipantIdentityPlayer {
	puuid: string
	platformId: string
	/** @format uint64 */
	accountId: number
	/** @format uint64 */
	summonerId: number
	summonerName: string
	gameName: string
	tagLine: string
	currentPlatformId: string
	/** @format uint64 */
	currentAccountId: number
	matchHistoryUri: string
	/** @format int32 */
	profileIcon: number
}

export interface LolMatchHistoryMatchHistoryParticipantStatistics {
	/** @format uint16 */
	participantId: number
	win: boolean
	/** @format int32 */
	"item0": number
	/** @format int32 */
	"item1": number
	/** @format int32 */
	"item2": number
	/** @format int32 */
	"item3": number
	/** @format int32 */
	"item4": number
	/** @format int32 */
	"item5": number
	/** @format int32 */
	"item6": number
	/** @format int64 */
	kills: number
	/** @format int64 */
	deaths: number
	/** @format int64 */
	assists: number
	/** @format int64 */
	largestKillingSpree: number
	/** @format int64 */
	largestMultiKill: number
	/** @format int64 */
	killingSprees: number
	/** @format int64 */
	longestTimeSpentLiving: number
	/** @format int64 */
	doubleKills: number
	/** @format int64 */
	tripleKills: number
	/** @format int64 */
	quadraKills: number
	/** @format int64 */
	pentaKills: number
	/** @format int64 */
	unrealKills: number
	/** @format int64 */
	totalDamageDealt: number
	/** @format int64 */
	magicDamageDealt: number
	/** @format int64 */
	physicalDamageDealt: number
	/** @format int64 */
	trueDamageDealt: number
	/** @format int64 */
	largestCriticalStrike: number
	/** @format int64 */
	totalDamageDealtToChampions: number
	/** @format int64 */
	magicDamageDealtToChampions: number
	/** @format int64 */
	physicalDamageDealtToChampions: number
	/** @format int64 */
	trueDamageDealtToChampions: number
	/** @format int64 */
	totalHeal: number
	/** @format int64 */
	totalUnitsHealed: number
	/** @format int64 */
	totalDamageTaken: number
	/** @format int64 */
	magicalDamageTaken: number
	/** @format int64 */
	physicalDamageTaken: number
	/** @format int64 */
	trueDamageTaken: number
	/** @format int64 */
	goldEarned: number
	/** @format int64 */
	goldSpent: number
	/** @format int64 */
	turretKills: number
	/** @format int64 */
	inhibitorKills: number
	/** @format int64 */
	totalMinionsKilled: number
	/** @format int64 */
	neutralMinionsKilled: number
	/** @format int64 */
	neutralMinionsKilledTeamJungle: number
	/** @format int64 */
	neutralMinionsKilledEnemyJungle: number
	/** @format int64 */
	totalTimeCrowdControlDealt: number
	/** @format int64 */
	champLevel: number
	/** @format int64 */
	visionWardsBoughtInGame: number
	/** @format int64 */
	sightWardsBoughtInGame: number
	/** @format int64 */
	wardsPlaced: number
	/** @format int64 */
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
	/** @format int64 */
	combatPlayerScore: number
	/** @format int64 */
	objectivePlayerScore: number
	/** @format int64 */
	totalPlayerScore: number
	/** @format int64 */
	totalScoreRank: number
	/** @format int64 */
	damageSelfMitigated: number
	/** @format int64 */
	damageDealtToObjectives: number
	/** @format int64 */
	damageDealtToTurrets: number
	/** @format int64 */
	visionScore: number
	/** @format int64 */
	timeCCingOthers: number
	/** @format int64 */
	"playerScore0": number
	/** @format int64 */
	"playerScore1": number
	/** @format int64 */
	"playerScore2": number
	/** @format int64 */
	"playerScore3": number
	/** @format int64 */
	"playerScore4": number
	/** @format int64 */
	"playerScore5": number
	/** @format int64 */
	"playerScore6": number
	/** @format int64 */
	"playerScore7": number
	/** @format int64 */
	"playerScore8": number
	/** @format int64 */
	"playerScore9": number
	/** @format int64 */
	perkPrimaryStyle: number
	/** @format int64 */
	perkSubStyle: number
	/** @format int64 */
	"perk0": number
	/** @format int64 */
	"perk0Var1": number
	/** @format int64 */
	"perk0Var2": number
	/** @format int64 */
	"perk0Var3": number
	/** @format int64 */
	"perk1": number
	/** @format int64 */
	"perk1Var1": number
	/** @format int64 */
	"perk1Var2": number
	/** @format int64 */
	"perk1Var3": number
	/** @format int64 */
	"perk2": number
	/** @format int64 */
	"perk2Var1": number
	/** @format int64 */
	"perk2Var2": number
	/** @format int64 */
	"perk2Var3": number
	/** @format int64 */
	"perk3": number
	/** @format int64 */
	"perk3Var1": number
	/** @format int64 */
	"perk3Var2": number
	/** @format int64 */
	"perk3Var3": number
	/** @format int64 */
	"perk4": number
	/** @format int64 */
	"perk4Var1": number
	/** @format int64 */
	"perk4Var2": number
	/** @format int64 */
	"perk4Var3": number
	/** @format int64 */
	"perk5": number
	/** @format int64 */
	"perk5Var1": number
	/** @format int64 */
	"perk5Var2": number
	/** @format int64 */
	"perk5Var3": number
	/** @format int32 */
	"playerAugment1": number
	/** @format int32 */
	"playerAugment2": number
	/** @format int32 */
	"playerAugment3": number
	/** @format int32 */
	"playerAugment4": number
	/** @format int32 */
	playerSubteamId: number
	/** @format int32 */
	subteamPlacement: number
}

export interface LolMatchHistoryMatchHistoryPlayerChampMasteryDelta {
	grade: string
}

export interface LolMatchHistoryMatchHistoryPlayerDelta {
	/** @format uint64 */
	originalAccountId: number
	originalPlatformId: string
	deltas: LolMatchHistoryMatchHistoryPlayerGameDelta[]
}

export interface LolMatchHistoryMatchHistoryPlayerGameDelta {
	gamePlatformId: string
	/** @format uint64 */
	gameId: number
	platformDelta: LolMatchHistoryMatchHistoryPlayerPlatformDelta
	leagueDelta: LolMatchHistoryMatchHistoryPlayerLeagueDelta
	champMastery: LolMatchHistoryMatchHistoryPlayerChampMasteryDelta
}

export interface LolMatchHistoryMatchHistoryPlayerLeagueDelta {
	/** @format uint64 */
	leaguePointDelta: number
	reason: string
	miniSeriesProgress: string[]
	/** @format uint64 */
	timestamp: number
}

export interface LolMatchHistoryMatchHistoryPlayerPlatformDelta {
	/** @format uint64 */
	xpDelta: number
	/** @format uint64 */
	ipDelta: number
	compensationModeEnabled: boolean
	/** @format uint64 */
	timestamp: number
}

export interface LolMatchHistoryMatchHistoryPosition {
	/** @format int16 */
	x: number
	/** @format int16 */
	y: number
}

export interface LolMatchHistoryMatchHistoryTeam {
	/** @format uint16 */
	teamId: number
	win: string
	firstBlood: boolean
	firstTower: boolean
	firstInhibitor: boolean
	firstBaron: boolean
	firstDargon: boolean
	/** @format uint32 */
	towerKills: number
	/** @format uint32 */
	inhibitorKills: number
	/** @format uint32 */
	baronKills: number
	/** @format uint32 */
	dragonKills: number
	/** @format uint32 */
	vilemawKills: number
	/** @format uint32 */
	riftHeraldKills: number
	/** @format uint32 */
	hordeKills: number
	/** @format uint32 */
	dominionVictoryScore: number
	bans: LolMatchHistoryMatchHistoryTeamBan[]
}

export interface LolMatchHistoryMatchHistoryTeamBan {
	/** @format int32 */
	championId: number
	/** @format uint16 */
	pickTurn: number
}

export interface LolMatchHistoryMatchHistoryTimeline {
	/** @format uint16 */
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
	participantFrames: Record<string, LolMatchHistoryMatchHistoryParticipantFrame>
	events: LolMatchHistoryMatchHistoryEvent[]
	/** @format uint64 */
	timestamp: number
}

export interface LolMatchHistoryMatchHistoryTimelineFrames {
	frames: LolMatchHistoryMatchHistoryTimelineFrame[]
}

export interface LolMatchHistoryRecentlyPlayedSummoner {
	/** @format uint64 */
	summonerId: number
	summonerName: string
	gameName: string
	tagLine: string
	/** @format uint64 */
	gameId: number
	gameCreationDate: string
	/** @format uint64 */
	championId: number
	/** @format uint64 */
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
	queue: LolMatchmakingGameflowQueue
}

export interface LolMatchmakingGameflowGameDodge {
	state: LolMatchmakingMatchmakingDodgeState
	dodgeIds: number[]
}

export interface LolMatchmakingGameflowGameTypeConfig {
	reroll: boolean
}

export type LolMatchmakingGameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"

export interface LolMatchmakingGameflowQueue {
	gameTypeConfig: LolMatchmakingGameflowGameTypeConfig
}

export interface LolMatchmakingGameflowSession {
	phase: LolMatchmakingGameflowPhase
	gameData: LolMatchmakingGameflowGameData
	gameDodge: LolMatchmakingGameflowGameDodge
}

export interface LolMatchmakingLobbyStatus {
	/** @format int32 */
	queueId: number
	isCustom: boolean
	isLeader: boolean
	isSpectator: boolean
	allowedPlayAgain: boolean
	memberSummonerIds: number[]
	lobbyId?: string
	customSpectatorPolicy: LolMatchmakingQueueCustomGameSpectatorPolicy
}

export interface LolMatchmakingLoginSession {
	state: LolMatchmakingLoginSessionState
	/** @format uint64 */
	summonerId: number
	/** @format uint64 */
	accountId: number
	connected: boolean
}

export type LolMatchmakingLoginSessionState = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"

export interface LolMatchmakingMatchmakingDodgeData {
	state: LolMatchmakingMatchmakingDodgeState
	/** @format uint64 */
	dodgerId: number
}

export type LolMatchmakingMatchmakingDodgeState = "TournamentDodged" | "StrangerDodged" | "PartyDodged" | "Invalid"

export type LolMatchmakingMatchmakingDodgeWarning = "Penalty" | "Warning" | "None"

export interface LolMatchmakingMatchmakingLowPriorityData {
	penalizedSummonerIds: number[]
	/** @format double */
	penaltyTime: number
	/** @format double */
	penaltyTimeRemaining: number
	bustedLeaverAccessToken: string
	reason: string
}

export interface LolMatchmakingMatchmakingReadyCheckResource {
	state: LolMatchmakingMatchmakingReadyCheckState
	playerResponse: LolMatchmakingMatchmakingReadyCheckResponse
	dodgeWarning: LolMatchmakingMatchmakingDodgeWarning
	/** @format float */
	timer: number
	declinerIds: number[]
	suppressUx: boolean
}

export type LolMatchmakingMatchmakingReadyCheckResponse = "Declined" | "Accepted" | "None"

export type LolMatchmakingMatchmakingReadyCheckState = "Error" | "PartyNotReady" | "StrangerNotReady" | "EveryoneReady" | "InProgress" | "Invalid"

export interface LolMatchmakingMatchmakingSearchErrorResource {
	/** @format int32 */
	id: number
	errorType: string
	/** @format uint64 */
	penalizedSummonerId: number
	/** @format double */
	penaltyTimeRemaining: number
	message: string
}

export interface LolMatchmakingMatchmakingSearchResource {
	/** @format int32 */
	queueId: number
	isCurrentlyInQueue: boolean
	lobbyId: string
	searchState: LolMatchmakingMatchmakingSearchState
	/** @format float */
	timeInQueue: number
	/** @format float */
	estimatedQueueTime: number
	readyCheck: LolMatchmakingMatchmakingReadyCheckResource
	dodgeData: LolMatchmakingMatchmakingDodgeData
	lowPriorityData: LolMatchmakingMatchmakingLowPriorityData
	errors: LolMatchmakingMatchmakingSearchErrorResource[]
}

export type LolMatchmakingMatchmakingSearchState = "ServiceShutdown" | "ServiceError" | "Error" | "Found" | "Searching" | "Canceled" | "AbandonedLowPriorityQueue" | "Invalid"

export interface LolMatchmakingPlayerStatus {
	currentLobbyStatus?: LolMatchmakingLobbyStatus
	lastQueuedLobbyStatus?: LolMatchmakingLobbyStatus
}

export interface LolMatchmakingQueue {
	/** @format int32 */
	id: number
	isTeamBuilderManaged: boolean
}

export type LolMatchmakingQueueCustomGameSpectatorPolicy = "AllAllowed" | "FriendsAllowed" | "LobbyAllowed" | "NotAllowed"

export interface LolMissionsCollectionsChampion {
	/** @format int32 */
	id: number
	freeToPlay: boolean
	ownership: LolMissionsCollectionsOwnership
	skins: LolMissionsCollectionsChampionSkin[]
}

export interface LolMissionsCollectionsChampionSkin {
	/** @format int32 */
	championId: number
	/** @format int32 */
	id: number
	ownership: LolMissionsCollectionsOwnership
}

export interface LolMissionsCollectionsOwnership {
	loyaltyReward: boolean
	xboxGPReward: boolean
	owned: boolean
	rental: LolMissionsCollectionsRental
}

export interface LolMissionsCollectionsRental {
	rented: boolean
}

export interface LolMissionsCollectionsSummoner {
	/** @format int32 */
	summonerLevel: number
}

export interface LolMissionsCollectionsSummonerIcons {
	icons: number[]
}

export interface LolMissionsCollectionsWardSkin {
	/** @format int64 */
	id: number
	ownership: LolMissionsCollectionsOwnership
}

export type LolMissionsGameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"

export interface LolMissionsGameflowSession {
	phase: LolMissionsGameflowPhase
}

export type LolMissionsGrantStatus = "FULFILLED" | "PENDING_SELECTION" | "PENDING_FULFILLMENT"

export interface LolMissionsInventoryItemWithPayload {
	/** @format int32 */
	itemId: number
}

export interface LolMissionsLoginSession {
	/** @format uint64 */
	accountId: number
	/** @format uint64 */
	summonerId: number
	puuid: string
	platformId: string
}

export type LolMissionsLoyaltyStatus = "DISABLED" | "REVOKE" | "CHANGE" | "EXPIRY" | "REWARDS_GRANT" | "LEGACY"

export interface LolMissionsLoyaltyStatusNotification {
	status: LolMissionsLoyaltyStatus
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
	/** @format uint64 */
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
	playerMissions: PlayerMissionDTO[]
	playerSeries: SeriesDTO[]
}

export interface LolMissionsPluginRegionLocaleChangedEvent {
	locale: string
}

export interface LolMissionsRewardGrant {
	info: LolMissionsRewardGrantInfo
	rewardGroup: LolMissionsRewardGroup
}

export interface LolMissionsRewardGrantElement {
	id: string
	itemId: string
	itemType: string
	fulfillmentSource: string
	rewardStatus: LolMissionsRewardStatus
	/** @format int32 */
	quantity: number
	media: Record<string, string>
	localizations: Record<string, string>
}

export interface LolMissionsRewardGrantInfo {
	id: string
	granteeId: string
	rewardGroupId: string
	status: LolMissionsGrantStatus
	grantElements: LolMissionsRewardGrantElement[]
	selectedIds: string[]
	viewed: boolean
}

export interface LolMissionsRewardGroup {
	id: string
	internalName: string
	productId: string
	types: string[]
	rewards: LolMissionsSvcReward[]
	childRewardGroupIds: string[]
	rewardStrategy: LolMissionsRewardStrategy
	selectionStrategyConfig: LolMissionsSelectionStrategyConfig
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
	/** @format uint32 */
	minSelectionsAllowed: number
	/** @format uint32 */
	maxSelectionsAllowed: number
}

export interface LolMissionsSeriesOpt {
	seriesId: string
	option: string
}

export interface LolMissionsSvcReward {
	id: string
	itemId: string
	/** @format int32 */
	quantity: number
	fulfillmentSource: string
	media: Record<string, string>
	localizations: Record<string, string>
}

export interface LolMissionsTftOrb {
	missionId: string
	status: string
	/** @format int64 */
	unlockTime: number
	/** @format uint8 */
	rewardLevel: number
	rewards: PlayerMissionRewardDTO[]
}

export interface LolMissionsTftPaidBattlepass {
	/** @format int32 */
	totalPointsEarned: number
	milestones: LolMissionsTftPaidBattlepassMilestone[]
	bonuses: LolMissionsTftPaidBattlepassMilestone[]
	activeMilestone: LolMissionsTftPaidBattlepassMilestone
	info: LolMissionsTftPaidBattlepassInfo
	/** @format int32 */
	lastViewedProgress: number
	lastViewedMilestone: LolMissionsTftPaidBattlepassMilestone
	progressMissionId: string
	/** @format int32 */
	currentLevel: number
}

export interface LolMissionsTftPaidBattlepassInfo {
	title: string
	description: string
	/** @format uint64 */
	startDate: number
	/** @format uint64 */
	endDate: number
	premium: boolean
	premiumTitle: string
	premiumEntitlementId: string
	pcPurchaseRequirement: string
	passId: string
	media: Record<string, string>
}

export interface LolMissionsTftPaidBattlepassMilestone {
	missionId: string
	internalName: string
	title: string
	description: string
	state: string
	status: string
	/** @format int32 */
	pointsNeededForMilestone: number
	/** @format int32 */
	pointsEarnedForMilestone: number
	/** @format int32 */
	totalPointsForMilestone: number
	/** @format int32 */
	level: number
	iconImageUrl: string
	iconNeedsFrame: boolean
	rewards: LolMissionsTftPaidBattlepassReward[]
	isPaid: boolean
	isLocked: boolean
	isKeystone: boolean
	isBonus: boolean
	isClaimRequestPending: boolean
}

export interface LolMissionsTftPaidBattlepassReward {
	rewardGroup: string
	description: string
	iconUrl: string
	iconNeedsFrame: boolean
}

export interface LolMissionsTftWeeklyMissions {
	missions: PlayerMissionDTO[]
}

export interface LolMissionsUserInfo {
	userInfo: string
}

export interface LolModeProgressionInventoryRewardItem {
	/** @format int32 */
	itemId: number
	uuid: string
}

export interface LolModeProgressionLoadout {
	id: string
	name: string
	scope: string
	loadout: Record<string, LolModeProgressionLoadoutsSlot>
}

export interface LolModeProgressionLoadoutsSlot {
	contentId: string
	inventoryType: string
	/** @format int32 */
	itemId: number
}

export interface LolNpeRewardsAccountSettingsData {
	login: LolNpeRewardsLoginSeriesSettings
	challenges: LolNpeRewardsChallengesSettings
}

export interface LolNpeRewardsAccountSettingsPayload {
	data: LolNpeRewardsAccountSettingsData
	/** @format uint64 */
	schemaVersion: number
}

export interface LolNpeRewardsAllRewards {
	level: LolNpeRewardsRewardSeries
	login: LolNpeRewardsRewardSeries
}

export interface LolNpeRewardsChallengesProgress {
	progress: LolNpeRewardsProgress
}

export interface LolNpeRewardsChallengesSettings {
	allMissionsCompleted: boolean
	/** @format int8 */
	totalCount: number
}

export interface LolNpeRewardsLoginSeriesSettings {
	allRewardsClaimed: boolean
	lastCompletedMissionInternalName: string
	/** @format int64 */
	lastCompletedMissionDate: number
}

export interface LolNpeRewardsMission {
	/** @format int64 */
	completedDate: number
	status: string
	seriesName: string
	internalName: string
	metadata: LolNpeRewardsMissionsRewardPackMetaData
	display: LolNpeRewardsMissionDisplay
	objectives: LolNpeRewardsObjective[]
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
	npeRewardPack: LolNpeRewardsRewardPack
}

export interface LolNpeRewardsObjective {
	progress: LolNpeRewardsProgress
}

export interface LolNpeRewardsProgress {
	/** @format int32 */
	lastViewedProgress: number
	/** @format int32 */
	currentProgress: number
	/** @format int32 */
	totalCount: number
}

export interface LolNpeRewardsRequirements {
	/** @format uint32 */
	level: number
	/** @format uint32 */
	day: number
	missionInternalName: string
}

export interface LolNpeRewardsReward {
	renderer: string
	data: unknown
}

export interface LolNpeRewardsRewardPack {
	/** @format int32 */
	index: number
	type: string
	requirements: LolNpeRewardsRequirements
	state: string
	premiumReward: boolean
	rewardKey: string
	majorReward: LolNpeRewardsReward
	minorRewards: LolNpeRewardsReward[]
	/** @format int64 */
	delay: number
	/** @format int64 */
	unlockTime: number
}

export interface LolNpeRewardsRewardSeries {
	rewardPacks: LolNpeRewardsRewardPack[]
}

export interface LolNpeRewardsRewardSeriesState {
	allRewardsClaimed: boolean
}

export interface LolNpeRewardsSummoner {
	/** @format uint32 */
	summonerLevel: number
}

export interface LolNpeTutorialPathAccountSettingsCategoryResource {
	data?: LolNpeTutorialPathAccountSettingsTutorial
	/** @format uint32 */
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
	/** @format int32 */
	id: number
	name: string
	roles: string[]
	squarePortraitPath: string
	stingerSfxPath: string
	passive: LolNpeTutorialPathCollectionsChampionSpell
	spells: LolNpeTutorialPathCollectionsChampionSpell[]
}

export interface LolNpeTutorialPathCollectionsChampionSpell {
	name: string
	description: string
}

export interface LolNpeTutorialPathExpiringWarning {
	type: string
	message: string
	/** @format int64 */
	alertTime: number
}

export type LolNpeTutorialPathGameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"

export interface LolNpeTutorialPathGameflowSession {
	phase: LolNpeTutorialPathGameflowPhase
}

export interface LolNpeTutorialPathIds {
	missionIds: string[]
	seriesIds: string[]
}

export interface LolNpeTutorialPathLobbyChangeQueue {
	/** @format int32 */
	queueId: number
	isCustom: boolean
}

export interface LolNpeTutorialPathLobbyDto {
	partyId: string
	gameConfig: LolNpeTutorialPathLobbyGameConfigDto
}

export interface LolNpeTutorialPathLobbyGameConfigDto {
	/** @format int32 */
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
	metadata: LolNpeTutorialPathMissionMetadata
	/** @format int64 */
	startTime: number
	/** @format int64 */
	endTime: number
	/** @format int64 */
	lastUpdatedTimestamp: number
	objectives: LolNpeTutorialPathObjective[]
	rewards: LolNpeTutorialPathReward[]
	expiringWarnings: LolNpeTutorialPathExpiringWarning[]
	requirements: string[]
	rewardStrategy: LolNpeTutorialPathRewardStrategy
	display: LolNpeTutorialPathMissionDisplay
	completionExpression: string
	viewed: boolean
	isNew: boolean
	status: string
	missionType: string
	displayType: string
	/** @format int64 */
	completedDate: number
	/** @format int64 */
	cooldownTimeMillis: number
	celebrationType: string
	clientNotifyLevel: string
	internalName: string
}

export interface LolNpeTutorialPathMissionDisplay {
	attributes: string[]
}

export interface LolNpeTutorialPathMissionMetadata {
	tutorial: LolNpeTutorialPathTutorialMetadata
}

export interface LolNpeTutorialPathObjective {
	type: string
	description: string
	progress: LolNpeTutorialPathProgress
	/** @format int32 */
	sequence: number
	rewardGroups: string[]
}

export interface LolNpeTutorialPathProgress {
	/** @format int32 */
	lastViewedProgress: number
	/** @format int32 */
	currentProgress: number
	/** @format int32 */
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
	/** @format int32 */
	sequence: number
	/** @format int32 */
	quantity: number
}

export interface LolNpeTutorialPathRewardStrategy {
	groupStrategy: string
	/** @format int16 */
	selectMaxGroupCount: number
	/** @format int16 */
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
	/** @format uint64 */
	summonerId: number
	/** @format uint64 */
	accountId: number
	displayName: string
	/** @format int32 */
	profileIconId: number
	/** @format uint32 */
	summonerLevel: number
	/** @format uint64 */
	xpSinceLastLevel: number
	/** @format uint64 */
	xpUntilNextLevel: number
	/** @format uint32 */
	percentCompleteForNextLevel: number
	nameChangeFlag: boolean
	unnamed: boolean
}

export interface LolNpeTutorialPathSummonerIcon {
	/** @format int32 */
	profileIconId: number
}

export interface LolNpeTutorialPathTutorial {
	id: string
	/** @format int32 */
	stepNumber: number
	title: string
	description: string
	backgroundUrl: string
	queueId: string
	useQuickSearchMatchmaking: boolean
	useChosenChampion: boolean
	status: LolNpeTutorialPathTutorialStatus
	isViewed: boolean
	type: LolNpeTutorialPathTutorialType
	rewards: LolNpeTutorialPathTutorialReward[]
}

export interface LolNpeTutorialPathTutorialMetadata {
	/** @format int32 */
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
	/** @format int32 */
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
	total: LolPatchComponentStateProgress
	network: LolPatchComponentStateProgress
	primaryWork: LolPatchComponentStateWorkType
}

export interface LolPatchComponentState {
	id: string
	action: LolPatchComponentStateAction
	isUpToDate: boolean
	isUpdateAvailable: boolean
	"timeOfLastUpToDateCheckISO8601"?: string
	isCorrupted: boolean
	progress?: LolPatchComponentActionProgress
}

export type LolPatchComponentStateAction = "Migrating" | "Repairing" | "Patching" | "CheckingForUpdates" | "Idle"

export interface LolPatchComponentStateProgress {
	/** @format uint64 */
	bytesComplete: number
	/** @format uint64 */
	bytesRequired: number
	/** @format double */
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
	notificationId: LolPatchNotificationId
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
	releases: LolPatchPatchSieveRelease[]
}

export interface LolPatchPatchSieveRelease {
	release: LolPatchPatchSieveReleaseInfo
	compat_version: LolPatchPatchSieveCompatVersion
	download: LolPatchPatchSieveDownload
}

export interface LolPatchPatchSieveReleaseInfo {
	product: string
	id: string
	labels: Record<string, LolPatchPatchSieveLabelValue>
}

export interface LolPatchPatcherInstallSettings {
	game_patcher?: string
	game_patch_url: string
	game_patcher_available: boolean
	/** @format uint32 */
	max_download_speed_mbps: number
	locales: string[]
}

export interface LolPatchPatcherRegionSettings {
	patchline: string
	game_patcher: string
}

export interface LolPatchPatcherSelfUpdateSettings {
	/** @format int32 */
	restart_delay: number
}

export interface LolPatchPatcherSettings {
	/** @format double */
	product_refresh_period: number
	channel: string
	headers: Record<string, string>
	self_update: LolPatchPatcherSelfUpdateSettings
	patchsieve_url: string
}

export interface LolPatchProductState {
	id: string
	action: LolPatchComponentStateAction
	isUpToDate: boolean
	isUpdateAvailable: boolean
	isCorrupted: boolean
	isStopped: boolean
	/** @format double */
	percentPatched: number
	components: LolPatchComponentState[]
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
	cookies: LolPatchScdCookie[]
}

export type LolPatchScdEnabled = "On" | "Off"

export interface LolPatchStatus {
	connectedToPatchServer: boolean
}

export interface LolPatchSupportedGameRelease {
	artifact_id: string
	download: LolPatchPatchSieveDownload
	selected: boolean
}

export interface LolPatchSupportedGameReleases {
	supported_game_releases: LolPatchSupportedGameRelease[]
}

export interface LolPatchUxResource {
	visible: boolean
}

export interface LolPerksChampSelectAction {
	/** @format int64 */
	id: number
	/** @format int64 */
	actorCellId: number
	/** @format int32 */
	championId: number
	type: string
	completed: boolean
}

export interface LolPerksChampSelectBannedChampions {
	myTeamBans: number[]
	theirTeamBans: number[]
	/** @format int32 */
	numBans: number
}

export interface LolPerksChampSelectChatRoomDetails {
	multiUserChatId: string
	multiUserChatPassword: string
	mucJwtDto: LolPerksMucJwtDto
}

export interface LolPerksChampSelectMySelection {
	/** @format int32 */
	selectedSkinId?: number
	/** @format uint64 */
	"spell1Id"?: number
	/** @format uint64 */
	"spell2Id"?: number
	/** @format int64 */
	wardSkinId?: number
}

export interface LolPerksChampSelectPlayerSelection {
	/** @format int64 */
	cellId: number
	/** @format int32 */
	championId: number
	/** @format int32 */
	selectedSkinId: number
	/** @format int64 */
	wardSkinId: number
	/** @format uint64 */
	"spell1Id": number
	/** @format uint64 */
	"spell2Id": number
	/** @format int32 */
	team: number
	assignedPosition: string
	/** @format int32 */
	championPickIntent: number
	/** @format uint64 */
	summonerId: number
}

export interface LolPerksChampSelectSession {
	timer: LolPerksChampSelectTimer
	chatDetails: LolPerksChampSelectChatRoomDetails
	myTeam: LolPerksChampSelectPlayerSelection[]
	theirTeam: LolPerksChampSelectPlayerSelection[]
	trades: LolPerksChampSelectTradeContract[]
	actions: unknown[]
	bans: LolPerksChampSelectBannedChampions
	/** @format int64 */
	localPlayerCellId: number
	isSpectating: boolean
}

export interface LolPerksChampSelectTimer {
	/** @format int64 */
	adjustedTimeLeftInPhase: number
	/** @format int64 */
	totalTimeInPhase: number
	phase: string
	isInfinite: boolean
	/** @format uint64 */
	internalNowInEpochMs: number
}

export interface LolPerksChampSelectTradeContract {
	/** @format int64 */
	id: number
	/** @format int64 */
	cellId: number
	state: LolPerksChampSelectTradeState
}

export type LolPerksChampSelectTradeState = "SENT" | "RECEIVED" | "INVALID" | "BUSY" | "AVAILABLE"

export interface LolPerksChampionPreferredStyle {
	championName: string
	/** @format int32 */
	style: number
	/** @format uint32 */
	championId: number
}

export interface LolPerksChampionRuneRecommendationsGDSResource {
	/** @format int32 */
	championId: number
	isOverride: boolean
	runeRecommendations: LolPerksRuneRecommendationGDSResource[]
}

export interface LolPerksDefaultStatModsPerSubStyle {
	/** @format int32 */
	id: number
	perks: number[]
}

export interface LolPerksGameCustomizationDTO {
	category: string
	content: string
	/** @format uint64 */
	queueType: number
	isTeambuilder: boolean
}

export interface LolPerksGameDataChampionSummary {
	/** @format int32 */
	id: number
	name: string
}

export interface LolPerksGameflowGameData {
	queue: LolPerksQueue
	isCustomGame: boolean
	/** @format uint64 */
	gameId: number
}

export type LolPerksGameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"

export interface LolPerksGameflowSession {
	phase: LolPerksGameflowPhase
	gameData: LolPerksGameflowGameData
}

export interface LolPerksGetGameCustomizationDTO {
	queueType: string
}

export interface LolPerksInventoryRunePageCount {
	/** @format uint32 */
	quantity: number
}

export interface LolPerksLobbyDto {
	localMember: LolPerksLobbyParticipantDto
}

export interface LolPerksLobbyParticipantDto {
	playerSlots: LolPerksQuickPlayPresetSlotDto[]
}

export interface LolPerksLoginSession {
	state: LolPerksLoginSessionState
	/** @format uint64 */
	summonerId: number
	/** @format uint64 */
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
	/** @format int32 */
	currentPageId: number
	pages: LolPerksPerkPageResource[]
}

export interface LolPerksPerkGDSResource {
	iconPath: string
	/** @format int32 */
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
	/** @format int32 */
	id: number
	isActive: boolean
	isValid: boolean
	isEditable: boolean
	isDeletable: boolean
	isTemporary: boolean
	name: string
	/** @format int32 */
	order: number
	/** @format int32 */
	primaryStyleId: number
	selectedPerkIds: number[]
	/** @format int32 */
	subStyleId: number
	autoModifiedSelections: number[]
	/** @format uint64 */
	lastModified: number
	runeRecommendationId: string
	/** @format int32 */
	recommendationIndex: number
	isRecommendationOverride: boolean
	/** @format int32 */
	recommendationChampionId: number
	quickPlayChampionIds: number[]
	primaryStyleName: string
	secondaryStyleName: string
	primaryStyleIconPath: string
	secondaryStyleIconPath: string
	tooltipBgPath: string
	pageKeystone: LolPerksUIPerkMinimal
	uiPerks: LolPerksUIPerkMinimal[]
}

export interface LolPerksPerkSettingResource {
	perkIds: number[]
	/** @format int32 */
	perkStyle: number
	/** @format int32 */
	perkSubStyle: number
}

export interface LolPerksPerkSettings {
	pages: LolPerksPerkPageResource[]
	perShardPerkBooks: Record<string, LolPerksPerkBook>
	settings: LolPerksUISettings
}

export interface LolPerksPerkStyleResource {
	allowedSubStyles: number[]
	iconPath: string
	assetMap: Record<string, string>
	isAdvanced: boolean
	/** @format int32 */
	id: number
	name: string
	slots: LolPerksPerkStyleSlotResource[]
	subStyleBonus: LolPerksPerkSubStyleBonusResource[]
	tooltip: string
	/** @format int32 */
	defaultSubStyle: number
	defaultPerks: number[]
	defaultPageName: string
	defaultPerksWhenSplashed: number[]
	defaultStatModsPerSubStyle: LolPerksDefaultStatModsPerSubStyle[]
}

export interface LolPerksPerkStyleSlotResource {
	perks: number[]
	type: string
	slotLabel: string
}

export interface LolPerksPerkSubStyleBonusResource {
	/** @format int32 */
	perkId: number
	/** @format int32 */
	styleId: number
}

export interface LolPerksPerkUIPerk {
	iconPath: string
	/** @format int32 */
	id: number
	/** @format int32 */
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
	keystone: LolPerksPerkUIPerk
	perks: LolPerksPerkUIPerk[]
	/** @format int32 */
	primaryPerkStyleId: number
	/** @format int32 */
	secondaryPerkStyleId: number
	primaryRecommendationAttribute: string
	secondaryRecommendationAttribute: string
	summonerSpellIds: number[]
	recommendationId: string
	isRecommendationOverride: boolean
	/** @format int32 */
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
	/** @format int32 */
	id: number
	name: string
	slots: LolPerksPerkUISlot[]
	subStyleBonus: LolPerksPerkSubStyleBonusResource[]
	tooltip: string
	/** @format int32 */
	defaultSubStyle: number
	defaultPerks: number[]
	defaultPageName: string
	idName: string
}

export interface LolPerksPerksConfigDTO {
	styles: LolPerksPerkStyleResource[]
}

export interface LolPerksPlatformConfig {
	PerksEnabled: boolean
	AutoRepairPagesEnabled: boolean
}

export interface LolPerksPlayerInventory {
	/** @format uint32 */
	ownedPageCount: number
	/** @format uint32 */
	customPageCount: number
	canAddCustomPage: boolean
	isCustomPageCreationUnlocked: boolean
}

export interface LolPerksQueue {
	/** @format int32 */
	id: number
	/** @format int32 */
	mapId: number
	isTeamBuilderManaged: boolean
}

export interface LolPerksQuickPlayPresetSlotDto {
	/** @format int32 */
	championId: number
	positionPreference: string
	perks: string
}

export interface LolPerksRuneRecommendationGDSResource {
	position: string
	/** @format int32 */
	mapId: number
	isDefaultPosition: boolean
	/** @format uint32 */
	minSummonerLevel: number
	perkIds: number[]
	/** @format int32 */
	primaryPerkStyleId: number
	/** @format int32 */
	secondaryPerkStyleId: number
	summonerSpellIds: number[]
	recommendationId: string
}

export interface LolPerksSettingsStorageContainer {
	data: LolPerksPerkSettings
	/** @format uint32 */
	schemaVersion: number
}

export interface LolPerksSummoner {
	/** @format uint64 */
	summonerId: number
	/** @format uint64 */
	accountId: number
	displayName: string
	internalName: string
	/** @format int32 */
	profileIconId: number
	/** @format uint32 */
	summonerLevel: number
	/** @format uint64 */
	xpSinceLastLevel: number
	/** @format uint64 */
	xpUntilNextLevel: number
	/** @format uint32 */
	percentCompleteForNextLevel: number
	rerollPoints: LolPerksSummonerRerollPoints
	puuid: string
}

export interface LolPerksSummonerRerollPoints {
	/** @format uint32 */
	pointsToReroll: number
	/** @format uint32 */
	currentPoints: number
	/** @format uint32 */
	numberOfRolls: number
	/** @format uint32 */
	maxRolls: number
	/** @format uint32 */
	pointsCostToRoll: number
}

export interface LolPerksUIPerkMinimal {
	/** @format int32 */
	id: number
	/** @format int32 */
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
	/** @format int32 */
	targetPageId: number
	/** @format int32 */
	destinationPageId: number
	/** @format int32 */
	offset: number
}

export interface LolPerksValidateItemSetNameResponse {
	success: boolean
	nameCheckResponse: LolPerksNamecheckResponse
}

export interface LolPerksValidatePageNameData {
	/** @format int32 */
	id: number
	name: string
}

export interface LolPftGameClientEndOfGameStats {
	/** @format uint64 */
	gameId: number
	gameMode: string
	statsBlock: unknown
	/** @format int32 */
	queueId: number
	isRanked: boolean
}

export interface LolPftGameflowGameDodge {
	state: LolPftGameflowGameDodgeState
	dodgeIds: number[]
}

export type LolPftGameflowGameDodgeState = "TournamentDodged" | "StrangerDodged" | "PartyDodged" | "Invalid"

export type LolPftGameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"

export interface LolPftGameflowSession {
	phase: LolPftGameflowPhase
	gameDodge: LolPftGameflowGameDodge
}

export interface LolPftLoginSession {
	state: LolPftLoginSessionStates
	idToken: string
}

export type LolPftLoginSessionStates = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"

export interface LolPftPFTEndOfGamePlayer {
	stats: unknown
	items: number[]
	botPlayer: boolean
	/** @format int32 */
	championId: number
	/** @format uint64 */
	gameId: number
	leaver: boolean
	/** @format int32 */
	leaves: number
	/** @format int32 */
	level: number
	/** @format int32 */
	losses: number
	/** @format int32 */
	profileIconId: number
	/** @format int32 */
	"spell1Id": number
	/** @format int32 */
	"spell2Id": number
	summonerName: string
	/** @format int32 */
	teamId: number
	/** @format int32 */
	wins: number
	/** @format uint64 */
	summonerId: number
}

export interface LolPftPFTEndOfGamePoints {
	/** @format int32 */
	pointChangeFromChampionsOwned: number
	/** @format int32 */
	pointChangeFromGameplay: number
	/** @format int32 */
	pointsUsed: number
	/** @format int32 */
	previousPoints: number
	/** @format int32 */
	pointsUntilNextReroll: number
	/** @format int32 */
	rerollCount: number
	/** @format int32 */
	totalPoints: number
}

export interface LolPftPFTEndOfGameStats {
	difficulty: string
	/** @format uint64 */
	gameId: number
	/** @format int32 */
	gameLength: number
	gameMode: string
	gameMutators: string[]
	gameType: string
	invalid: boolean
	queueType: string
	ranked: boolean
	/** @format uint64 */
	reportGameId: number
	teams: LolPftPFTEndOfGameTeam[]
	localPlayer: LolPftPFTEndOfGamePlayer
	myTeamStatus: string
	leveledUp: boolean
	newSpells: number[]
	/** @format uint64 */
	previousLevel: number
	/** @format int32 */
	rpEarned: number
	/** @format uint64 */
	accountId: number
	/** @format int32 */
	basePoints: number
	/** @format int32 */
	battleBoostIpEarned: number
	/** @format int32 */
	boostIpEarned: number
	/** @format int32 */
	firstWinBonus: number
	/** @format int32 */
	ipEarned: number
	/** @format int32 */
	ipTotal: number
	/** @format int32 */
	boostXpEarned: number
	/** @format int32 */
	experienceEarned: number
	/** @format int32 */
	experienceTotal: number
	/** @format int32 */
	loyaltyBoostXpEarned: number
	/** @format uint64 */
	previousXpTotal: number
	/** @format int32 */
	timeUntilNextFirstWinBonus: number
	causedEarlySurrender: boolean
	earlySurrenderAccomplice: boolean
	teamEarlySurrendered: boolean
	gameEndedInEarlySurrender: boolean
	isAramGame: boolean
	rerollData: LolPftPFTEndOfGamePoints
}

export interface LolPftPFTEndOfGameTeam {
	stats: unknown
	players: LolPftPFTEndOfGamePlayer[]
	memberStatusString: string
	name: string
	tag: string
	fullId: string
	/** @format int32 */
	teamId: number
	isBottomTeam: boolean
	isPlayerTeam: boolean
	isWinningTeam: boolean
}

export interface LolPftPFTEvent {
	/** @format uint64 */
	playerSurveyId: number
	action: string
	data: unknown[]
}

export interface LolPftPFTMetadata {
	/** @format uint64 */
	accountId: number
	env: string
	webRegion: string
	locale: string
	appName: string
	appVersion: string
	systemOs: string
	stats: LolPftPFTEndOfGameStats
	/** @format double */
	homepageTimer: number
}

export interface LolPftPFTQuestionResponse {
	/** @format uint64 */
	questionId: number
	responseData: unknown
}

export interface LolPftPFTSurvey {
	/** @format uint64 */
	id: number
	title: string
	caption: string
	type: string
	display: string
	data: Record<string, unknown>
}

export interface LolPftPFTSurveyResults {
	questionResponses: LolPftPFTQuestionResponse[]
	actions: LolPftPFTEvent[]
}

export interface LolPftPFTSurveyV1 {
	/** @format uint64 */
	id: number
	title: string
	caption: string
	type: string
	url: string
}

export interface LolPftSummoner {
	puuid: string
	/** @format uint64 */
	summonerId: number
	/** @format uint64 */
	accountId: number
	/** @format uint32 */
	summonerLevel: number
	unnamed: boolean
}

export interface LolPlayerBehaviorBanNotification {
	/** @format uint64 */
	id: number
	source: LolPlayerBehaviorNotificationSource
	reason: string
	/** @format uint64 */
	timeUntilBanExpires: number
	isPermaBan: boolean
	displayReformCard: boolean
}

export interface LolPlayerBehaviorCodeOfConductNotification {
	message: string
}

export type LolPlayerBehaviorGameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"

export interface LolPlayerBehaviorMail {
	mailId: string
	message: string
	state: string
	/** @format uint64 */
	createdAt: number
}

export type LolPlayerBehaviorNotificationSource = "Message" | "ForcedShutdown" | "Login" | "Invalid"

export interface LolPlayerBehaviorPlayerBehaviorConfig {
	IsLoaded: boolean
	CodeOfConductEnabled: boolean
}

export interface LolPlayerBehaviorPlayerBehavior_GameflowSessionResource {
	phase: LolPlayerBehaviorGameflowPhase
}

export interface LolPlayerBehaviorPlayerBehavior_SimpleMessage {
	/** @format uint64 */
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
	/** @format uint64 */
	id: number
	source: string
	state: string
	titleKey: string
	type: string
}

export interface LolPlayerBehaviorReformCard {
	/** @format uint64 */
	id: number
	punishmentType: string
	reason: string
	/** @format uint64 */
	timeWhenPunishmentExpires: number
	/** @format uint64 */
	punishmentLengthTime: number
	/** @format int64 */
	punishmentLengthGames: number
	/** @format int64 */
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
	/** @format uint64 */
	id: number
	punishmentType: string
	punishmentReason: string
	/** @format uint64 */
	punishedUntilDateMillis: number
	/** @format uint64 */
	punishmentLengthMillis: number
	/** @format int64 */
	punishmentLengthGames: number
	punishedForReformCardChatLogs: LolPlayerBehaviorReformCardChatLogs[]
	punishedForGameIds: number[]
	playerFacingMessage: string
}

export interface LolPlayerBehaviorReporterFeedback {
	/** @format uint64 */
	id: number
	/** @format uint64 */
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
	/** @format uint64 */
	id: number
	source: LolPlayerBehaviorNotificationSource
	/** @format int64 */
	gamesRemaining: number
	/** @format uint64 */
	expirationMillis: number
	displayReformCard: boolean
}

export interface LolPlayerBehaviorSettingsResource {
	data: unknown
	/** @format int64 */
	schemaVersion: number
}

export interface LolPlayerBehaviorUserInfo {
	userInfo: string
}

export interface LolPlayerBehaviorUserInfoBanData {
	restrictions: LolPlayerBehaviorUserInfoRestriction[]
}

export interface LolPlayerBehaviorUserInfoRestriction {
	type: string
	reason: string
	scope: string
	dat: LolPlayerBehaviorUserInfoRestrictionData
}

export interface LolPlayerBehaviorUserInfoRestrictionData {
	/** @format uint64 */
	expirationMillis: number
	gameData: LolPlayerBehaviorUserInfoRestrictionGameData
	gameLocation: string
}

export interface LolPlayerBehaviorUserInfoRestrictionGameData {
	productName: string
	gameLocation: string
	triggerGameId: string
	additionalGameIds: string[]
}

export interface LolPlayerBehaviorUserInfoToken {
	ban: LolPlayerBehaviorUserInfoBanData
}

export interface LolPlayerLevelUpEndOfGameStats {
	gameMode: string
	gameMutators: string[]
	gameType: string
	queueType: string
	leveledUp: boolean
	newSpells: number[]
	/** @format uint32 */
	previousLevel: number
	/** @format int32 */
	rpEarned: number
}

export interface LolPlayerLevelUpGameDataSummonerSpell {
	/** @format uint64 */
	id: number
	/** @format uint32 */
	summonerLevel: number
}

export interface LolPlayerLevelUpLoginSession {
	state: LolPlayerLevelUpLoginSessionStates
	/** @format uint64 */
	summonerId: number
	/** @format uint64 */
	accountId: number
}

export type LolPlayerLevelUpLoginSessionStates = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"

export interface LolPlayerLevelUpPlayerLevelUpEvent {
	switchedToStandardFreeToPlayChampRotation: boolean
	nowHasAccessToPublicChatRooms: boolean
	nowHasAccessToLoot: boolean
	leveledUp: boolean
	/** @format uint32 */
	newSummonerLevel: number
	newRuneSlotUnlocked: boolean
	/** @format int32 */
	rpEarned: number
	newSpells: number[]
	newQueues: number[]
}

export interface LolPlayerLevelUpPlayerLevelUpEventAck {
	seenThisEvent: boolean
	/** @format uint32 */
	newSummonerLevel: number
}

export interface LolPlayerLevelUpQueue {
	/** @format int32 */
	id: number
	/** @format uint32 */
	minLevel: number
}

export interface LolPlayerMessagingDynamicCelebrationMessagingNotificationResource {
	/** @format int32 */
	id: number
	/** @format uint64 */
	accountId: number
	msgId: string
	celebrationTitle: string
	celebrationBody: string
	celebrationMessage: string
	inventoryType: string
	itemId: string
	itemQuantity: string
	celebrationType: string
	/** @format int32 */
	status: number
}

export interface LolPlayerMessagingLoginDataPacket {
	simpleMessages: LolPlayerMessagingSimpleMessage[]
}

export interface LolPlayerMessagingPlayerMessagingNotificationResource {
	/** @format int32 */
	id: number
	/** @format uint64 */
	accountId: number
	msgId: string
	title: string
	body: string
	/** @format int32 */
	status: number
}

export interface LolPlayerMessagingSimpleMessage {
	/** @format uint64 */
	accountId: number
	msgId: string
	type: string
	titleCode: string
	bodyCode: string
	params: string[]
}

export interface LolPlayerPreferencesLoginSession {
	state: LolPlayerPreferencesLoginSessionStates
	/** @format uint64 */
	summonerId: number
	/** @format uint64 */
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
	/** @format int64 */
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
	/** @format uint64 */
	gameId: number
}

export type LolPlayerReportSenderGameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"

export interface LolPlayerReportSenderGameflowSession {
	phase: LolPlayerReportSenderGameflowPhase
	gameData: LolPlayerReportSenderGameflowGameData
}

export interface LolPlayerReportSenderPlayerReport {
	offenderPuuid: string
	obfuscatedOffenderPuuid: string
	categories: string[]
	/** @format uint64 */
	gameId: number
	/** @format uint64 */
	offenderSummonerId: number
	comment: string
}

export interface LolPlayerReportSenderSummoner {
	/** @format uint64 */
	summonerId: number
	/** @format uint32 */
	summonerLevel: number
	/** @format uint64 */
	xpSinceLastLevel: number
	/** @format uint64 */
	xpUntilNextLevel: number
	puuid: string
}

export type LolPreEndOfGameGameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"

export interface LolPreEndOfGameSequenceEvent {
	name: string
	/** @format int32 */
	priority: number
}

export interface LolPremadeVoiceAccountSettingsCategoryDataResource {
	autoJoin: boolean
	muteOnConnect: boolean
	inputMode: LolPremadeVoiceInputMode
	pushToTalkKey: string
	showFirstExperienceInLCU: boolean
	showFirstExperienceInGame: boolean
}

export interface LolPremadeVoiceAccountSettingsCategoryResource {
	data?: LolPremadeVoiceAccountSettingsCategoryDataResource
	/** @format uint32 */
	schemaVersion: number
}

export interface LolPremadeVoiceAudioPropertiesResource {
	isLoopbackEnabled: boolean
	/** @format uint32 */
	micEnergy: number
}

export type LolPremadeVoiceConfigReadinessEnum = "Disabled" | "Ready" | "NotReady"

export interface LolPremadeVoiceConfigStatus {
	readiness: LolPremadeVoiceConfigReadinessEnum
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
	GameEvents: LolPremadeVoiceGameEventHotkeys
}

export interface LolPremadeVoiceGameflowGameClient {
	running: boolean
}

export type LolPremadeVoiceGameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"

export interface LolPremadeVoiceGameflowSession {
	phase: LolPremadeVoiceGameflowPhase
	gameClient: LolPremadeVoiceGameflowGameClient
}

export type LolPremadeVoiceInputMode = "pushToTalk" | "voiceActivity"

export interface LolPremadeVoiceKeyCombo {
	keyBindings: LolPremadeVoicePushToTalkKey[]
}

export interface LolPremadeVoiceKeycodePushToTalkResource {
	enabled: boolean
	keyCombos?: LolPremadeVoiceKeyCombo[]
}

export interface LolPremadeVoiceLocalSettingsCategoryDataResource {
	currentCaptureDeviceHandle: string
	/** @format uint32 */
	inputVolume: number
	/** @format uint32 */
	vadSensitivity: number
}

export interface LolPremadeVoiceLocalSettingsCategoryResource {
	data?: LolPremadeVoiceLocalSettingsCategoryDataResource
	/** @format uint32 */
	schemaVersion: number
}

export interface LolPremadeVoiceLoginSession {
	connected: boolean
}

export interface LolPremadeVoiceParticipantResource {
	id: string
	name: string
	/** @format uint32 */
	volume: number
	/** @format uint32 */
	energy: number
	isMuted: boolean
	isSpeaking: boolean
}

export interface LolPremadeVoicePartyDto {
	partyId: string
	commsEnabled: boolean
	players: Record<string, LolPremadeVoicePlayerDto>
}

export type LolPremadeVoicePartyMemberRoleEnum = "DECLINED" | "KICKED" | "HOLD" | "INVITED" | "MEMBER" | "LEADER"

export interface LolPremadeVoicePlayerDto {
	displayName: string
	puuid: string
	partyId: string
	/** @format uint64 */
	summonerId: number
	role: LolPremadeVoicePartyMemberRoleEnum
}

export interface LolPremadeVoicePremadeVoiceParticipantDto {
	participantId: string
	/** @format uint64 */
	summonerId: number
	puuid: string
	displayName: string
	/** @format uint32 */
	volume: number
	/** @format uint32 */
	energy: number
	isMuted: boolean
	isSpeaking: boolean
}

export interface LolPremadeVoicePushToTalkKey {
	/** @format uint32 */
	key: number
}

export interface LolPremadeVoicePushToTalkResource {
	pttEnabled: boolean
	pttKeyBinding?: string
}

export interface LolPremadeVoiceSessionResource {
	id: string
	status: LolPremadeVoiceSessionStatus
	participants: LolPremadeVoiceParticipantResource[]
	/** @format uint32 */
	volume: number
	isMuted: boolean
	isTransmitEnabled: boolean
}

export type LolPremadeVoiceSessionStatus = "onHold" | "active"

export interface LolPremadeVoiceSettingsResource {
	currentCaptureDeviceHandle: string
	/** @format uint32 */
	vadHangoverTime: number
	/** @format uint32 */
	vadSensitivity: number
	/** @format uint32 */
	micLevel: number
	localMicMuted: boolean
	loopbackEnabled: boolean
	autoJoin: boolean
	muteOnConnect: boolean
	vadActive: boolean
	pttActive: boolean
	inputMode: LolPremadeVoiceInputMode
	pttKey?: string
}

export interface LolPremadeVoiceStateResource {
	connected: boolean
}

export interface LolPremadeVoiceSummoner {
	/** @format uint64 */
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
	/** @format int64 */
	startValue: number
}

export interface LolProgressionCounterInstance {
	ownerId: string
	productId: string
	groupId: string
	counterId: string
	/** @format int64 */
	counterValue: number
}

export interface LolProgressionEntityInstance {
	groupId: string
	counters: LolProgressionCounterInstance[]
	milestones: LolProgressionMilestoneInstance[]
}

export interface LolProgressionGroup {
	id: string
	productId: string
	name: string
	repeat: LolProgressionRepeat
	counters: LolProgressionCounter[]
	milestones: LolProgressionMilestone[]
}

export interface LolProgressionMilestone {
	id: string
	name: string
	groupId: string
	counterId: string
	/** @format int64 */
	triggerValue: number
	properties: Record<string, string>
}

export interface LolProgressionMilestoneInstance {
	milestoneId: string
	instanceId: string
	ownerId: string
	productId: string
	groupId: string
	counterId: string
	/** @format int64 */
	triggerValue: number
	/** @format uint32 */
	repeatSequence: number
	triggered: boolean
	triggeredTimestamp: string
	triggers: LolProgressionTrigger[]
}

export interface LolProgressionRepeat {
	/** @format int32 */
	count: number
	/** @format uint32 */
	scope: number
	/** @format float */
	multiplier: number
	milestones: LolProgressionMilestone[]
	repeatTriggers: LolProgressionRepeatGroupTrigger[]
}

export interface LolProgressionRepeatGroupTrigger {
	type: string
	counterId: string
	/** @format uint16 */
	startTriggerValue: number
	/** @format uint16 */
	increaseBy: number
	/** @format float */
	multiplier: number
}

export interface LolProgressionTrigger {
	type: string
	counterId: string
	/** @format uint64 */
	triggerValue: number
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
	/** @format uint64 */
	account_id: number
	env: string
	web_region: string
	locale: string
	/** @format uint16 */
	summoner_level: number
	summoner_name: string
	app_name: string
	app_version: string
	system_os: string
	protocol: string
	/** @format uint16 */
	port: number
	assetUrls: Record<string, string>
}

export interface LolPublishingContentPubHubConfig {
	edge: LolPublishingContentPubHubConfigEdge
	appContext: LolPublishingContentPubHubConfigAppContext
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
	data: LolPublishingContentPublishingLocaleSettingData
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
	/** @format uint16 */
	summonerLevel: number
}

export interface LolPublishingContentSystemInfo {
	operatingSystem: LolPublishingContentSystemInfoOperatingSystem
}

export interface LolPublishingContentSystemInfoOperatingSystem {
	platform: string
	versionMajor: string
}

export interface LolPurchaseWidgetBalance {
	currencyType: string
	/** @format int32 */
	amount: number
}

export interface LolPurchaseWidgetBaseSkinLineDto {
	items: LolPurchaseWidgetSkinLineItemDto[]
	localizedName: string
	skinLineDescriptions: LolPurchaseWidgetSkinLineDescriptionDto[]
	pricingOptions: LolPurchaseWidgetPriceOptionDto[]
	splashPath: string
	uncenteredSplashPath: string
	collectionCardPath: string
	collectionDescription: string
	tilePath: string
}

export interface LolPurchaseWidgetBundledItemPricingInfo {
	discountPrices: LolPurchaseWidgetDiscountPricingInfo[]
	inventoryType: string
	/** @format int32 */
	itemId: number
	/** @format int32 */
	quantity: number
}

export interface LolPurchaseWidgetCapOffer {
	id: string
	typeId: string
	label: string
	productId: string
	merchantId: string
	payload: LolPurchaseWidgetCapOfferPayloadEntry[]
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
	subOrders: LolPurchaseWidgetCapOrdersSubOrderDto[]
	purchaser: LolPurchaseWidgetCapOrdersTypedIdentifierDto
	location: string
	source: string
}

export interface LolPurchaseWidgetCapOrdersMetaDto {
	xid: string
}

export interface LolPurchaseWidgetCapOrdersOfferContextDto {
	/** @format uint32 */
	quantity: number
	paymentOption: string
}

export interface LolPurchaseWidgetCapOrdersOfferDto {
	id: string
	productId: string
}

export interface LolPurchaseWidgetCapOrdersOrderDto {
	data: LolPurchaseWidgetCapOrdersDataDto
	meta: LolPurchaseWidgetCapOrdersMetaDto
}

export interface LolPurchaseWidgetCapOrdersSubOrderDto {
	recipientId: string
	offerContext: LolPurchaseWidgetCapOrdersOfferContextDto
	offer: LolPurchaseWidgetCapOrdersOfferDto
}

export interface LolPurchaseWidgetCapOrdersTypedIdentifierDto {
	id: string
	typeId: string
}

export interface LolPurchaseWidgetCatalogPluginItem {
	/** @format int32 */
	itemId: number
	itemInstanceId: string
	owned: boolean
	inventoryType: string
	subInventoryType: string
	name: string
	subTitle: string
	description: string
	imagePath: string
	/** @format uint64 */
	purchaseDate: number
	/** @format uint64 */
	releaseDate: number
	/** @format uint64 */
	inactiveDate: number
	prices: LolPurchaseWidgetCatalogPluginPrice[]
	tags?: string[]
	metadata?: LolPurchaseWidgetItemMetadataEntry[]
	questSkinInfo?: LolPurchaseWidgetSkinLineInfo
	active: boolean
	ownershipType?: LolPurchaseWidgetInventoryOwnership
}

export interface LolPurchaseWidgetCatalogPluginItemAssets {
	splashPath: string
	iconPath: string
	tilePath: string
	emblems: LolPurchaseWidgetChampionSkinEmblem[]
	colors: string[]
}

export interface LolPurchaseWidgetCatalogPluginItemWithDetails {
	item: LolPurchaseWidgetCatalogPluginItem
	/** @format uint32 */
	quantity: number
	requiredItems?: LolPurchaseWidgetCatalogPluginItemWithDetails[]
	bundledItems?: LolPurchaseWidgetCatalogPluginItemWithDetails[]
	minimumBundlePrices?: LolPurchaseWidgetCatalogPluginPrice[]
	bundledDiscountPrices?: LolPurchaseWidgetCatalogPluginPrice[]
	assets: LolPurchaseWidgetCatalogPluginItemAssets
}

export interface LolPurchaseWidgetCatalogPluginPrice {
	currency: string
	/** @format int64 */
	cost: number
	costType?: string
	sale?: LolPurchaseWidgetCatalogPluginSale
}

export interface LolPurchaseWidgetCatalogPluginSale {
	startDate: string
	endDate: string
	/** @format float */
	discount?: number
	/** @format int64 */
	cost: number
}

export interface LolPurchaseWidgetChampionSkinEmblem {
	name: string
	emblemPath: LolPurchaseWidgetChampionSkinEmblemPath
	emblemPosition: LolPurchaseWidgetChampionSkinEmblemPosition
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
	/** @format int32 */
	cost: number
	/** @format int32 */
	originalCost: number
	costType: string
	currency: string
	/** @format float */
	discount: number
}

export type LolPurchaseWidgetInventoryOwnership = "F2P" | "LOYALTY" | "RENTED" | "OWNED"

export interface LolPurchaseWidgetItemChoiceDetails {
	item: LolPurchaseWidgetCatalogPluginItem
	backgroundImage: string
	contents: LolPurchaseWidgetItemDetails[]
	discount: string
	/** @format uint32 */
	fullPrice: number
	displayType: string
	purchaseOptions: LolPurchaseWidgetPurchaseOption[]
}

export interface LolPurchaseWidgetItemChoices {
	choices: LolPurchaseWidgetItemChoiceDetails[]
	validationErrors: LolPurchaseWidgetValidationErrorEntry[]
}

export interface LolPurchaseWidgetItemCost {
	currency: string
	/** @format int64 */
	cost: number
	/** @format float */
	discount?: number
}

export interface LolPurchaseWidgetItemDefinition {
	/** @format int32 */
	itemId: number
	inventoryType: string
	subInventoryType: string
	name: string
	description: string
	subTitle: string
	imagePath: string
	owned: boolean
	assets: LolPurchaseWidgetCatalogPluginItemAssets
	tags: string[]
	metadata: LolPurchaseWidgetItemMetadataEntry[]
	bundledItemPrice?: LolPurchaseWidgetBundledItemPricingInfo
	loyaltyUnlocked: boolean
	hasVisibleLootOdds: boolean
}

export interface LolPurchaseWidgetItemDetails {
	title: string
	subTitle: string
	description: string
	iconUrl: string
}

export interface LolPurchaseWidgetItemKey {
	inventoryType: string
	/** @format int32 */
	itemId: number
}

export interface LolPurchaseWidgetItemMetadataEntry {
	type: string
	value: string
}

export interface LolPurchaseWidgetItemOwnership {
	itemKey: LolPurchaseWidgetItemKey
	/** @format int32 */
	quantity: number
}

export interface LolPurchaseWidgetItemPrice {
	currencyType: string
	/** @format int64 */
	price: number
	purchasable: boolean
}

export interface LolPurchaseWidgetItemSale {
	startDate: string
	endDate: string
	/** @format float */
	discount?: number
}

export interface LolPurchaseWidgetLoginSession {
	puuid?: string
	state: LolPurchaseWidgetLoginSessionStates
	/** @format uint64 */
	summonerId: number
	/** @format uint64 */
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
	itemKey: LolPurchaseWidgetItemKey
	price: LolPurchaseWidgetItemPrice
}

export interface LolPurchaseWidgetPriceOptionDto {
	/** @format int64 */
	price: number
	currencyType: string
	currencyPaymentOption?: string
	currencyName?: string
	currencyImagePath?: string
}

export interface LolPurchaseWidgetPurchasableItem {
	item: LolPurchaseWidgetItemDefinition
	dependencies: LolPurchaseWidgetItemDefinition[]
	bundledItems: LolPurchaseWidgetItemDefinition[]
	sale?: LolPurchaseWidgetItemSale
	purchaseOptions: LolPurchaseWidgetPurchaseOption[]
	validationErrors: LolPurchaseWidgetValidationErrorEntry[]
}

export interface LolPurchaseWidgetPurchaseItem {
	itemKey: LolPurchaseWidgetItemKey
	/** @format int32 */
	quantity: number
	source: string
	purchaseCurrencyInfo: LolPurchaseWidgetItemPrice
}

export type LolPurchaseWidgetPurchaseOfferOrderStates = "SUCCESS" | "FAIL" | "IN_PROGRESS" | "NOT_STARTED"

export interface LolPurchaseWidgetPurchaseOfferOrderStatus {
	orderState: LolPurchaseWidgetPurchaseOfferOrderStates
	message: string
}

export interface LolPurchaseWidgetPurchaseOfferOrderStatuses {
	statuses: Record<string, LolPurchaseWidgetPurchaseOfferOrderStatus>
}

export interface LolPurchaseWidgetPurchaseOfferRequestV3 {
	offerId: string
	currencyType: string
	/** @format uint32 */
	quantity: number
	/** @format uint32 */
	price: number
}

export interface LolPurchaseWidgetPurchaseOfferResponseV3 {
	legacy: boolean
	orderDto?: LolPurchaseWidgetCapOrdersOrderDto
}

export interface LolPurchaseWidgetPurchaseOption {
	priceDetails: LolPurchaseWidgetPriceDetail[]
}

export interface LolPurchaseWidgetPurchaseRequest {
	items: LolPurchaseWidgetPurchaseItem[]
}

export interface LolPurchaseWidgetPurchaseResponse {
	items: LolPurchaseWidgetPurchaseItem[]
	transactions: LolPurchaseWidgetTransaction[]
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
	/** @format int64 */
	timestamp: number
	payload: string
}

export interface LolPurchaseWidgetSale {
	startDate: string
	endDate: string
	prices: LolPurchaseWidgetItemCost[]
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
	descriptionInfo: LolPurchaseWidgetSkinLineDescriptionInfo[]
	splashPath: string
	tilePath: string
	collectionCardPath: string
	uncenteredSplashPath: string
	collectionDescription: string
	tiers: LolPurchaseWidgetSkinLineTier[]
}

export interface LolPurchaseWidgetSkinLineItemDto {
	thumbnailImagePath: string
	largeImagePath?: string
	localizedLongName: string
	localizedShortName: string
	largeVideoPath?: string
}

export interface LolPurchaseWidgetSkinLineTier {
	/** @format int64 */
	id: number
	name: string
	/** @format int64 */
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
	itemKey: LolPurchaseWidgetItemKey
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
	validationErrors: LolPurchaseWidgetValidateOfferError[]
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
	items: LolPurchaseWidgetValidationRequestItem[]
	ownedItems: LolPurchaseWidgetItemOwnership[]
}

export interface LolPurchaseWidgetValidationRequestItem {
	itemKey: LolPurchaseWidgetItemKey
	/** @format int32 */
	quantity: number
}

export interface LolPurchaseWidgetValidationResponse {
	items: LolPurchaseWidgetValidationResponseItem[]
	valid: boolean
}

export interface LolPurchaseWidgetValidationResponseItem {
	itemKey: LolPurchaseWidgetItemKey
	/** @format int32 */
	quantity: number
	validationCurrencyInfo: LolPurchaseWidgetItemPrice[]
	sale?: LolPurchaseWidgetSale
	name?: string
	description?: string
}

export interface LolPurchaseWidgetWallet {
	/** @format uint64 */
	accountId: number
	balances: LolPurchaseWidgetBalance[]
	/** @format int32 */
	version: number
}

export interface LolRankedAchievedTier {
	queueType: LolRankedLeagueQueueType
	tier: string
	/** @format uint64 */
	division: number
}

export interface LolRankedEndOfGameStatsBlock {
	/** @format uint64 */
	gameId: number
}

export interface LolRankedEosNotificationResource {
	notificationName: string
	notificationType: string
	/** @format int64 */
	seasonEndTime: number
	queue: string
	tier: string
	division: string
}

export type LolRankedEosNotificationType = "SEASON_ENDED" | "SECOND_WARNING" | "FIRST_WARNING"

export interface LolRankedEosNotificationsConfig {
	config: LolRankedEosNotificationsConfigEntry[]
}

export interface LolRankedEosNotificationsConfigEntry {
	name: string
	/** @format int64 */
	"offsetTime1": number
	/** @format int64 */
	"offsetTime2": number
	/** @format int64 */
	"offsetTime3": number
}

export interface LolRankedEosRewardData {
	id: string
	type: string
	overrideImagePath: string
}

export interface LolRankedEosRewardGroupsConfig {
	rewardGroups: Record<string, LolRankedEosRewardGroupsRewardsList>
}

export interface LolRankedEosRewardGroupsRewardsList {
	rewards: string[]
}

export interface LolRankedEosRewardsConfig {
	seasons: Record<string, LolRankedEosRewardsConfigEntry>
}

export interface LolRankedEosRewardsConfigEntry {
	rewards: Record<string, LolRankedEosRewardData>
}

export interface LolRankedEosSettingsData {
	notificationShown: boolean
}

export interface LolRankedEosSettingsResource {
	data: LolRankedEosSettingsData
	/** @format int32 */
	schemaVersion: number
}

export interface LolRankedGameflowGameData {
	queue: LolRankedQueue
}

export type LolRankedGameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"

export interface LolRankedGameflowSession {
	phase: LolRankedGameflowPhase
	gameData: LolRankedGameflowGameData
}

export interface LolRankedGlobalNotification {
	notifyReason: string
	participantId: string
	queueType: string
	tier: string
	/** @format int32 */
	position: number
}

export interface LolRankedLcuLeagueNotification {
	/** @format uint64 */
	id: number
	msgId: string
	displayType: LolRankedNotificationDisplayType
	notifyReason: string
	changeReason: string
	queueType: LolRankedLeagueQueueType
	/** @format uint64 */
	gameId: number
	/** @format int32 */
	provisionalGamesRemaining: number
	tier: string
	division: LolRankedLeagueDivision
	/** @format uint64 */
	numberOfPromotions: number
	miniseriesProgress: string
	/** @format int32 */
	leaguePoints: number
	/** @format int32 */
	leaguePointsDelta: number
	ratedTier: LolRankedRatedTier
	/** @format int32 */
	ratedRating: number
	/** @format int32 */
	ratedRatingDelta: number
	eligibleForPromoHelper: boolean
	/** @format int32 */
	miniseriesWins: number
	/** @format int64 */
	timeUntilInactivityStatusChanges: number
	rewardEarnedId: string
	rewardEarnedType: string
	rewardOverrideImagePath: string
	splitPointsNotification?: LolRankedSplitPointsNotification
	promoSeriesForRanksEnabled: boolean
	/** @format int32 */
	consolationLpUsed: number
	/** @format int32 */
	afkLpPenaltyAmount: number
	/** @format int32 */
	afkLpPenaltyLevel: number
	wasAfkOrLeaver: boolean
	canDemoteFromTier: boolean
	/** @format int32 */
	winStreak: number
	/** @format int32 */
	wins: number
	/** @format int32 */
	losses: number
}

export type LolRankedLeagueDivision = "NA" | "V" | "IV" | "III" | "II" | "I"

export interface LolRankedLeagueDivisionInfo {
	tier: string
	division: LolRankedLeagueDivision
	/** @format int32 */
	maxLeagueSize: number
	/** @format int64 */
	apexUnlockTimeMillis: number
	/** @format int32 */
	minLpForApexTier: number
	/** @format int64 */
	topNumberOfPlayers: number
	standings: LolRankedLeagueStanding[]
}

export interface LolRankedLeagueLadderDTO {
	queueType: string
	tier: string
	/** @format int32 */
	provisionalGameThreshold: number
	entries: LolRankedLeagueLadderEntryDTO[]
	/** @format int32 */
	maxLeagueSize: number
	/** @format int64 */
	nextApexUpdate: number
	/** @format int64 */
	apexUnlockTimeMillis: number
	/** @format int32 */
	minLpForTier: number
	/** @format int32 */
	topNumberOfPlayers: number
}

export interface LolRankedLeagueLadderEntryDTO {
	/** @format uint64 */
	summonerId: number
	puuid: string
	summonerName: string
	tier: string
	rank: string
	/** @format int32 */
	leaguePoints: number
	miniSeriesProgress: string
	/** @format int32 */
	wins: number
	/** @format int32 */
	losses: number
	/** @format int32 */
	provisionalGamesRemaining: number
	/** @format int32 */
	previousDayLeaguePosition: number
	previousSeasonEndTier: string
	previousSeasonEndRank: string
	earnedRegaliaRewardIds: string[]
}

export interface LolRankedLeagueLadderInfo {
	queueType: LolRankedLeagueQueueType
	tier: string
	/** @format int32 */
	provisionalGameThreshold: number
	divisions: LolRankedLeagueDivisionInfo[]
	/** @format int64 */
	nextApexUpdateMillis: number
	requestedRankedEntry?: LolRankedLeagueStanding
}

export interface LolRankedLeagueNotification {
	notifyReason: string
	changeReason: string
	queueType: string
	/** @format uint64 */
	gameId: number
	/** @format int32 */
	provisionalGamesRemaining: number
	tier: string
	rank: string
	miniseriesProgress: string
	/** @format int32 */
	leaguePoints: number
	/** @format int32 */
	leaguePointsDelta: number
	/** @format int32 */
	splitPoints: number
	splitPointsBreakdown: Record<string, number>
	ratedTier: string
	/** @format int32 */
	ratedRating: number
	/** @format int32 */
	ratedRatingDelta: number
	eligibleForPromoHelper?: boolean
	promoSeriesForRanksEnabled: boolean
	/** @format int32 */
	consolationLpUsed: number
	/** @format int32 */
	afkLpPenaltyAmount: number
	/** @format int32 */
	afkLpPenaltyLevel: number
	wasAfkOrLeaver: boolean
	canDemoteFromTier: boolean
	/** @format int32 */
	winStreak: number
	/** @format int32 */
	wins: number
	/** @format int32 */
	losses: number
}

export interface LolRankedLeagueNotifications {
	leagueNotifications: LolRankedLeagueNotification[]
	globalNotifications: LolRankedGlobalNotification[]
	rewardNotifications: LolRankedRewardNotification[]
}

export type LolRankedLeagueQueueType = "RANKED_TFT_DOUBLE_UP" | "RANKED_TFT_PAIRS" | "RANKED_TFT_TURBO" | "RANKED_TFT" | "RANKED_FLEX_TT" | "CHERRY" | "RANKED_FLEX_SR" | "RANKED_SOLO_5x5" | "NONE"

export interface LolRankedLeagueStanding {
	/** @format uint64 */
	summonerId: number
	puuid: string
	summonerName: string
	/** @format int32 */
	position: number
	/** @format int32 */
	positionDelta: number
	/** @format int32 */
	previousPosition: number
	tier: string
	division: LolRankedLeagueDivision
	/** @format int64 */
	leaguePoints: number
	miniseriesResults: LolRankedMiniseries[]
	/** @format uint64 */
	wins: number
	/** @format uint64 */
	losses: number
	/** @format int32 */
	provisionalGamesRemaining: number
	isProvisional: boolean
	previousSeasonEndTier: string
	previousSeasonEndDivision: LolRankedLeagueDivision
	earnedRegaliaRewardIds: string[]
	/** @format int32 */
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
	state: LolRankedLoginSessionStates
	/** @format uint64 */
	summonerId: number
	/** @format uint64 */
	accountId: number
}

export type LolRankedLoginSessionStates = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"

export type LolRankedMiniseries = "N" | "L" | "W"

export type LolRankedNotificationDisplayType = "VIGNETTE" | "MODAL" | "TOAST" | "NONE"

export interface LolRankedParticipantTiers {
	/** @format uint64 */
	summonerId: number
	achievedTiers: LolRankedAchievedTier[]
}

export interface LolRankedQueue {
	type: unknown
}

export interface LolRankedQueuesAndPuuidsPayload {
	queueTypes: LolRankedLeagueQueueType[]
	summonerIds: number[]
}

export interface LolRankedRankedQueueStats {
	queueType: LolRankedLeagueQueueType
	/** @format int32 */
	provisionalGameThreshold: number
	/** @format int32 */
	provisionalGamesRemaining: number
	isProvisional: boolean
	tier: string
	division: LolRankedLeagueDivision
	/** @format int32 */
	leaguePoints: number
	miniSeriesProgress: string
	ratedTier: LolRankedRatedTier
	/** @format int32 */
	ratedRating: number
	/** @format int32 */
	wins: number
	/** @format int32 */
	losses: number
	highestTier: string
	highestDivision: LolRankedLeagueDivision
	previousSeasonEndTier: string
	previousSeasonEndDivision: LolRankedLeagueDivision
	previousSeasonHighestTier: string
	previousSeasonHighestDivision: LolRankedLeagueDivision
	warnings?: LolRankedRankedQueueWarnings
}

export interface LolRankedRankedQueueStatsDTO {
	queueType: string
	/** @format int32 */
	provisionalGameThreshold: number
	/** @format int32 */
	provisionalGamesRemaining: number
	tier: string
	rank: string
	/** @format int32 */
	leaguePoints: number
	miniSeriesProgress: string
	ratedTier: string
	/** @format int32 */
	ratedRating: number
	/** @format int32 */
	wins: number
	/** @format int32 */
	losses: number
	highestTier: string
	highestRank: string
	previousSeasonEndTier: string
	previousSeasonEndRank: string
	previousSeasonHighestTier: string
	previousSeasonHighestRank: string
	warnings?: LolRankedRankedQueueWarningsDTO
}

export interface LolRankedRankedQueueWarnings {
	displayDecayWarning: boolean
	/** @format int64 */
	timeUntilInactivityStatusChanges: number
	/** @format int32 */
	demotionWarning: number
	/** @format int32 */
	daysUntilDecay: number
}

export interface LolRankedRankedQueueWarningsDTO {
	displayDecayWarning: boolean
	/** @format int64 */
	timeUntilInactivityStatusChanges: number
	/** @format int32 */
	demotionWarning: number
	/** @format int32 */
	apexDaysUntilDecay: number
	/** @format int32 */
	daysUntilDecay: number
}

export interface LolRankedRankedStats {
	queues: LolRankedRankedQueueStats[]
	queueMap: Record<string, LolRankedRankedQueueStats>
	highestRankedEntry?: LolRankedRankedQueueStats
	highestRankedEntrySR?: LolRankedRankedQueueStats
	earnedRegaliaRewardIds: string[]
	/** @format int32 */
	rankedRegaliaLevel: number
	highestCurrentSeasonReachedTierSR: string
	highestPreviousSeasonEndTier: string
	highestPreviousSeasonEndDivision: LolRankedLeagueDivision
	splitsProgress: Record<string, number>
	/** @format int32 */
	currentSeasonSplitPoints: number
	/** @format int32 */
	previousSeasonSplitPoints: number
	seasons: Record<string, LolRankedSeasonDTO>
}

export interface LolRankedRankedStatsDTO {
	queues: LolRankedRankedQueueStatsDTO[]
	earnedRegaliaRewardIds: string[]
	highestPreviousSeasonEndTier: string
	highestPreviousSeasonEndRank: string
	splitsProgress: Record<string, number>
	/** @format int32 */
	currentSeasonSplitPoints: number
	/** @format int32 */
	previousSeasonSplitPoints: number
	seasons: Record<string, LolRankedSeasonDTO>
}

export interface LolRankedRatedLadderEntryDTO {
	/** @format uint64 */
	summonerId: number
	puuid: string
	summonerName: string
	ratedTier: string
	/** @format int32 */
	ratedRating: number
	/** @format int32 */
	wins: number
	/** @format int32 */
	previousUpdateLadderPosition: number
}

export interface LolRankedRatedLadderInfo {
	queueType: LolRankedLeagueQueueType
	standings: LolRankedRatedLadderStanding[]
}

export interface LolRankedRatedLadderStanding {
	/** @format uint64 */
	summonerId: number
	puuid: string
	summonerName: string
	ratedTier: LolRankedRatedTier
	/** @format int32 */
	leaguePoints: number
	/** @format int32 */
	wins: number
	/** @format int32 */
	position: number
	/** @format int32 */
	positionDelta: number
	/** @format int32 */
	previousPosition: number
}

export type LolRankedRatedTier = "ORANGE" | "PURPLE" | "BLUE" | "GREEN" | "GRAY" | "NONE"

export interface LolRankedRewardNotification {
	rewardGroupId: string
	/** @format int32 */
	seasonId: number
}

export interface LolRankedRewardsInfo {
	splits: LolRankedSeasonSplit[]
	currentSplit?: LolRankedSeasonSplit
	rewardInfoByRewardId: Record<string, LolRankedSplitReward>
	/** @format int32 */
	currentSplitId: number
	/** @format int32 */
	currentSeasonId: number
}

export interface LolRankedSeasonDTO {
	/** @format int32 */
	currentSeasonId: number
	/** @format int64 */
	currentSeasonEnd: number
	/** @format int64 */
	nextSeasonStart: number
}

export interface LolRankedSeasonSplit {
	/** @format int32 */
	splitId: number
	/** @format int32 */
	seasonId: number
	/** @format uint64 */
	startTimeMillis: number
	/** @format uint64 */
	endTimeMillis: number
	rewardTrack: LolRankedSplitRewardGroup[]
	victoriousSkinRewardGroup: LolRankedVictoriousSkin
}

export interface LolRankedSeasonSplitDTO {
	/** @format int32 */
	splitId: number
	/** @format int32 */
	seasonId: number
	/** @format uint64 */
	startTime: number
	/** @format uint64 */
	endTime: number
	rewardTrack: LolRankedSplitRewardGroupDTO[]
	victoriousSkinRewardGroup: LolRankedVictoriousSkinDTO
}

export interface LolRankedSequenceEvent {
	name: string
	/** @format int32 */
	priority: number
}

export type LolRankedSeverity = "ALERT" | "WARNING"

export interface LolRankedSignedRankedStatsDTO {
	queues: LolRankedRankedQueueStatsDTO[]
	earnedRegaliaRewardIds: string[]
	highestPreviousSeasonEndTier: string
	highestPreviousSeasonEndRank: string
	splitsProgress: Record<string, number>
	/** @format int32 */
	currentSeasonSplitPoints: number
	/** @format int32 */
	previousSeasonSplitPoints: number
	seasons: Record<string, LolRankedSeasonDTO>
	jwt: string
}

export interface LolRankedSocialLeaderboardRankedQueueStats {
	queueType: LolRankedLeagueQueueType
	/** @format int32 */
	provisionalGameThreshold: number
	/** @format int32 */
	provisionalGamesRemaining: number
	isProvisional: boolean
	tier: string
	division: LolRankedLeagueDivision
	/** @format int32 */
	leaguePoints: number
	miniSeriesProgress: string
	ratedTier: LolRankedRatedTier
	/** @format int32 */
	ratedRating: number
	/** @format int32 */
	wins: number
	/** @format int32 */
	losses: number
}

export interface LolRankedSocialLeaderboardRankedQueueStatsDTO {
	queueType: string
	/** @format int32 */
	provisionalGameThreshold: number
	/** @format int32 */
	provisionalGamesRemaining: number
	tier: string
	rank: string
	/** @format int32 */
	leaguePoints: number
	miniSeriesProgress: string
	ratedTier: string
	/** @format int32 */
	ratedRating: number
	/** @format int32 */
	wins: number
	/** @format int32 */
	losses: number
}

export interface LolRankedSplitPointsNotification {
	/** @format int32 */
	splitPointsDelta: number
	/** @format int32 */
	splitPointsBeforeGame: number
	/** @format int32 */
	splitPointsAfterGame: number
	/** @format int32 */
	previousSplitPointsRequired: number
	/** @format int32 */
	splitPointsRequired: number
	nextRewardId: string
	nextRewardType: string
	splitPointsBreakdown: Record<string, number>
}

export interface LolRankedSplitReward {
	rewardType: string
	/** @format int32 */
	quantity: number
	description: string
	id: string
	/** @format int32 */
	regaliaLevel?: number
	/** @format int32 */
	pointsRequired: number
	/** @format int32 */
	splitId: number
	/** @format int32 */
	championId: number
}

export interface LolRankedSplitRewardDTO {
	rewardType: string
	metadata: LolRankedSplitRewardsMetaData
	defaultRewardId: string
	tieredRewardIds: Record<string, string>
}

export interface LolRankedSplitRewardGroup {
	/** @format int32 */
	splitPoints: number
	rewards: LolRankedSplitReward[]
}

export interface LolRankedSplitRewardGroupDTO {
	/** @format int32 */
	splitPoints: number
	rewards: LolRankedSplitRewardDTO[]
}

export interface LolRankedSplitRewardsMetaData {
	/** @format int32 */
	quantity: number
	description: string
	/** @format int32 */
	championId: number
}

export interface LolRankedSummoner {
	/** @format uint64 */
	summonerId: number
	puuid: string
}

export interface LolRankedVictoriousSkin {
	splitPointsByHighestSeasonEndTier: Record<string, number>
	itemInstanceId: string
}

export interface LolRankedVictoriousSkinDTO {
	splitPointsByHighestSeasonEndTier: Record<string, number>
	itemInstanceId: string
}

export interface LolRegaliaAccountIdAndSummonerId {
	/** @format uint64 */
	summonerId?: number
}

export interface LolRegaliaChatPresence {
	/** @format uint64 */
	summonerId: number
	/** @format int32 */
	icon: number
	lol: LolRegaliaChatPresenceLolData
}

export interface LolRegaliaChatPresenceExternal {
	id: string
	/** @format uint64 */
	summonerId: number
	/** @format int32 */
	icon: number
	lol: Record<string, string>
}

export interface LolRegaliaChatPresenceLolData {
	/** @format uint32 */
	level: number
	rankedLeagueTier?: string
	rankedLeagueDivision: LolRegaliaLeagueDivision
	rankedLeagueQueue: LolRegaliaLeagueQueueType
	/** @format int32 */
	rankedSplitRewardLevel: number
	rankedPrevSeasonTier?: string
	rankedPrevSeasonDivision: LolRegaliaLeagueDivision
	regalia?: LolRegaliaRegaliaSettings
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
	/** @format int32 */
	itemId: number
	uuid: string
	purchaseDate: string
}

export interface LolRegaliaItemKey {
	inventoryType: string
	/** @format int32 */
	itemId: number
}

export type LolRegaliaLeagueDivision = "NA" | "V" | "IV" | "III" | "II" | "I"

export type LolRegaliaLeagueQueueType = "RANKED_TFT_DOUBLE_UP" | "RANKED_TFT_PAIRS" | "RANKED_TFT_TURBO" | "RANKED_TFT" | "RANKED_FLEX_TT" | "CHERRY" | "RANKED_FLEX_SR" | "RANKED_SOLO_5x5" | "NONE"

export interface LolRegaliaLoadout {
	id: string
	name: string
	scope: string
	loadout: LolRegaliaRegaliaLoadout
}

export interface LolRegaliaRankedQueueStats {
	queueType: LolRegaliaLeagueQueueType
	isProvisional: boolean
	tier: string
	division: LolRegaliaLeagueDivision
}

export interface LolRegaliaRankedStats {
	queues: LolRegaliaRankedQueueStats[]
	highestRankedEntry?: LolRegaliaRankedQueueStats
	/** @format int32 */
	rankedRegaliaLevel: number
	highestPreviousSeasonEndTier: string
}

export interface LolRegaliaRegalia {
	/** @format int32 */
	profileIconId: number
	crestType: string
	bannerType: string
	/** @format uint32 */
	summonerLevel: number
	lastSeasonHighestRank?: string
	highestRankedEntry?: LolRegaliaRegaliaRankedEntry
	/** @format uint8 */
	selectedPrestigeCrest: number
}

export interface LolRegaliaRegaliaAsync {
	"md5": string
}

export type LolRegaliaRegaliaBannerType = "lastSeasonHighestRank" | "blank"

export type LolRegaliaRegaliaCrestType = "ranked" | "prestige" | "none"

export interface LolRegaliaRegaliaFrontendConfig {
	hovercardEnabled: boolean
	selectionsEnabled: boolean
}

export interface LolRegaliaRegaliaInventoryItem {
	items: LolRegaliaGameDataRegalia[]
	isOwned: boolean
}

export interface LolRegaliaRegaliaLoadout {
	REGALIA_CREST_SLOT: LolRegaliaItemKey
	REGALIA_BANNER_SLOT: LolRegaliaItemKey
}

export interface LolRegaliaRegaliaPlatformConfig {
	HovercardEnabled: boolean
	SelectionsEnabled: boolean
}

export interface LolRegaliaRegaliaPreferences {
	preferredCrestType: string
	preferredBannerType: string
	/** @format uint8 */
	selectedPrestigeCrest: number
}

export interface LolRegaliaRegaliaRankedEntry {
	queueType: LolRegaliaLeagueQueueType
	tier: string
	division: LolRegaliaLeagueDivision
	/** @format int32 */
	splitRewardLevel: number
}

export interface LolRegaliaRegaliaSettings {
	crestType: LolRegaliaRegaliaCrestType
	bannerType: LolRegaliaRegaliaBannerType
	/** @format uint8 */
	selectedPrestigeCrest: number
}

export interface LolRegaliaRegaliaSettingsExternal {
	/** @format int32 */
	crestType: number
	/** @format int32 */
	bannerType: number
	/** @format uint8 */
	selectedPrestigeCrest: number
}

export interface LolRegaliaRegaliaWithPreferences {
	/** @format int32 */
	profileIconId: number
	crestType: string
	bannerType: string
	preferredCrestType: string
	preferredBannerType: string
	/** @format uint8 */
	selectedPrestigeCrest: number
	/** @format uint32 */
	summonerLevel: number
	lastSeasonHighestRank?: string
	highestRankedEntry?: LolRegaliaRegaliaRankedEntry
}

export interface LolRegaliaSummoner {
	/** @format uint64 */
	summonerId: number
	/** @format int32 */
	profileIconId: number
	/** @format uint32 */
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

export interface LolRemedyMail {
	mailId: string
	message: string
	state: string
	/** @format uint64 */
	createdAt: number
}

export interface LolReplaysClashPlaymodeRestrictedInfo {
	isRestricted: boolean
}

export interface LolReplaysGAMHSEvent {
	type: string
	/** @format uint64 */
	timestamp: number
	/** @format uint16 */
	participantId: number
	/** @format uint16 */
	teamId: number
	/** @format uint16 */
	itemId: number
	/** @format uint16 */
	killerId: number
	/** @format uint16 */
	victimId: number
	/** @format uint16 */
	skillSlot: number
	position: LolReplaysGAMHSPosition
	assistingParticipantIds: number[]
	buildingType: string
	laneType: string
	towerType: string
	monsterType: string
	monsterSubType: string
}

export interface LolReplaysGAMHSGame {
	endOfGameResult: string
	/** @format uint64 */
	gameCreation: number
	/** @format uint32 */
	gameDuration: number
	/** @format uint64 */
	gameEndTimestamp: number
	/** @format uint64 */
	gameId: number
	gameMode: string
	gameName: string
	/** @format uint64 */
	gameStartTimestamp: number
	gameType: string
	gameVersion: string
	/** @format uint16 */
	mapId: number
	platformId: string
	/** @format int32 */
	queueId: number
	/** @format uint16 */
	seasonId: number
	tournamentCode: string
}

export interface LolReplaysGAMHSMatchHistoryData {
	metadata: LolReplaysGAMHSMatchHistoryMetadata
	json: unknown
}

export interface LolReplaysGAMHSMatchHistoryMetadata {
	product: string
	/** @format uint8 */
	data_version: number
	info_type: string
	match_id: string
	tags: string[]
	participants: string[]
	/** @format uint64 */
	timestamp: number
	private: boolean
}

export interface LolReplaysGAMHSParticipant {
	/** @format uint16 */
	participantId: number
	/** @format uint16 */
	teamId: number
	/** @format int32 */
	championId: number
	/** @format uint16 */
	"spell1Id": number
	/** @format uint16 */
	"spell2Id": number
	highestAchievedSeasonTier: string
	stats: LolReplaysGAMHSParticipantStatistics
	timeline: LolReplaysGAMHSTimeline
}

export interface LolReplaysGAMHSParticipantFrame {
	/** @format uint16 */
	participantId: number
	position: LolReplaysGAMHSPosition
	/** @format int32 */
	currentGold: number
	/** @format int32 */
	totalGold: number
	/** @format uint16 */
	level: number
	/** @format uint32 */
	xp: number
	/** @format uint16 */
	minionsKilled: number
	/** @format uint16 */
	jungleMinionsKilled: number
	/** @format uint16 */
	dominionScore: number
	/** @format uint16 */
	teamScore: number
}

export interface LolReplaysGAMHSParticipantIdentities {
	/** @format uint16 */
	participantId: number
	player: LolReplaysGAMHSParticipantIdentityPlayer
}

export interface LolReplaysGAMHSParticipantIdentityPlayer {
	puuid: string
	platformId: string
	/** @format uint64 */
	accountId: number
	/** @format uint64 */
	summonerId: number
	summonerName: string
	gameName: string
	tagLine: string
	currentPlatformId: string
	/** @format uint64 */
	currentAccountId: number
	matchHistoryUri: string
	/** @format int32 */
	profileIcon: number
}

export interface LolReplaysGAMHSParticipantStatistics {
	/** @format uint16 */
	participantId: number
	win: boolean
	/** @format int32 */
	"item0": number
	/** @format int32 */
	"item1": number
	/** @format int32 */
	"item2": number
	/** @format int32 */
	"item3": number
	/** @format int32 */
	"item4": number
	/** @format int32 */
	"item5": number
	/** @format int32 */
	"item6": number
	/** @format int64 */
	kills: number
	/** @format int64 */
	deaths: number
	/** @format int64 */
	assists: number
	/** @format int64 */
	largestKillingSpree: number
	/** @format int64 */
	largestMultiKill: number
	/** @format int64 */
	killingSprees: number
	/** @format int64 */
	longestTimeSpentLiving: number
	/** @format int64 */
	doubleKills: number
	/** @format int64 */
	tripleKills: number
	/** @format int64 */
	quadraKills: number
	/** @format int64 */
	pentaKills: number
	/** @format int64 */
	unrealKills: number
	/** @format int64 */
	totalDamageDealt: number
	/** @format int64 */
	magicDamageDealt: number
	/** @format int64 */
	physicalDamageDealt: number
	/** @format int64 */
	trueDamageDealt: number
	/** @format int64 */
	largestCriticalStrike: number
	/** @format int64 */
	totalDamageDealtToChampions: number
	/** @format int64 */
	magicDamageDealtToChampions: number
	/** @format int64 */
	physicalDamageDealtToChampions: number
	/** @format int64 */
	trueDamageDealtToChampions: number
	/** @format int64 */
	totalHeal: number
	/** @format int64 */
	totalUnitsHealed: number
	/** @format int64 */
	totalDamageTaken: number
	/** @format int64 */
	magicalDamageTaken: number
	/** @format int64 */
	physicalDamageTaken: number
	/** @format int64 */
	trueDamageTaken: number
	/** @format int64 */
	goldEarned: number
	/** @format int64 */
	goldSpent: number
	/** @format int64 */
	turretKills: number
	/** @format int64 */
	inhibitorKills: number
	/** @format int64 */
	totalMinionsKilled: number
	/** @format int64 */
	neutralMinionsKilled: number
	/** @format int64 */
	neutralMinionsKilledTeamJungle: number
	/** @format int64 */
	neutralMinionsKilledEnemyJungle: number
	/** @format int64 */
	totalTimeCrowdControlDealt: number
	/** @format int64 */
	champLevel: number
	/** @format int64 */
	visionWardsBoughtInGame: number
	/** @format int64 */
	sightWardsBoughtInGame: number
	/** @format int64 */
	wardsPlaced: number
	/** @format int64 */
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
	/** @format int64 */
	combatPlayerScore: number
	/** @format int64 */
	objectivePlayerScore: number
	/** @format int64 */
	totalPlayerScore: number
	/** @format int64 */
	totalScoreRank: number
	/** @format int64 */
	damageSelfMitigated: number
	/** @format int64 */
	damageDealtToObjectives: number
	/** @format int64 */
	damageDealtToTurrets: number
	/** @format int64 */
	visionScore: number
	/** @format int64 */
	timeCCingOthers: number
	/** @format int64 */
	"playerScore0": number
	/** @format int64 */
	"playerScore1": number
	/** @format int64 */
	"playerScore2": number
	/** @format int64 */
	"playerScore3": number
	/** @format int64 */
	"playerScore4": number
	/** @format int64 */
	"playerScore5": number
	/** @format int64 */
	"playerScore6": number
	/** @format int64 */
	"playerScore7": number
	/** @format int64 */
	"playerScore8": number
	/** @format int64 */
	"playerScore9": number
	/** @format int64 */
	perkPrimaryStyle: number
	/** @format int64 */
	perkSubStyle: number
	/** @format int64 */
	"perk0": number
	/** @format int64 */
	"perk0Var1": number
	/** @format int64 */
	"perk0Var2": number
	/** @format int64 */
	"perk0Var3": number
	/** @format int64 */
	"perk1": number
	/** @format int64 */
	"perk1Var1": number
	/** @format int64 */
	"perk1Var2": number
	/** @format int64 */
	"perk1Var3": number
	/** @format int64 */
	"perk2": number
	/** @format int64 */
	"perk2Var1": number
	/** @format int64 */
	"perk2Var2": number
	/** @format int64 */
	"perk2Var3": number
	/** @format int64 */
	"perk3": number
	/** @format int64 */
	"perk3Var1": number
	/** @format int64 */
	"perk3Var2": number
	/** @format int64 */
	"perk3Var3": number
	/** @format int64 */
	"perk4": number
	/** @format int64 */
	"perk4Var1": number
	/** @format int64 */
	"perk4Var2": number
	/** @format int64 */
	"perk4Var3": number
	/** @format int64 */
	"perk5": number
	/** @format int64 */
	"perk5Var1": number
	/** @format int64 */
	"perk5Var2": number
	/** @format int64 */
	"perk5Var3": number
	/** @format int32 */
	"playerAugment1": number
	/** @format int32 */
	"playerAugment2": number
	/** @format int32 */
	"playerAugment3": number
	/** @format int32 */
	"playerAugment4": number
	/** @format int32 */
	playerSubteamId: number
	/** @format int32 */
	subteamPlacement: number
}

export interface LolReplaysGAMHSPosition {
	/** @format int16 */
	x: number
	/** @format int16 */
	y: number
}

export interface LolReplaysGAMHSTeam {
	/** @format uint16 */
	teamId: number
	win: string
	firstBlood: boolean
	firstTower: boolean
	firstInhibitor: boolean
	firstBaron: boolean
	firstDargon: boolean
	/** @format uint32 */
	towerKills: number
	/** @format uint32 */
	inhibitorKills: number
	/** @format uint32 */
	baronKills: number
	/** @format uint32 */
	dragonKills: number
	/** @format uint32 */
	vilemawKills: number
	/** @format uint32 */
	riftHeraldKills: number
	/** @format uint32 */
	hordeKills: number
	/** @format uint32 */
	dominionVictoryScore: number
	bans: LolReplaysGAMHSTeamBan[]
}

export interface LolReplaysGAMHSTeamBan {
	/** @format int32 */
	championId: number
	/** @format uint16 */
	pickTurn: number
}

export interface LolReplaysGAMHSTimeline {
	/** @format uint16 */
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

export interface LolReplaysGameflowAvailability {
	state: string
}

export interface LolReplaysGameflowGameClient {
	running: boolean
}

export type LolReplaysGameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"

export interface LolReplaysGameflowSession {
	phase: LolReplaysGameflowPhase
	gameClient: LolReplaysGameflowGameClient
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
	/** @format int32 */
	queueId: number
	/** @format uint64 */
	gameEnd: number
}

export interface LolReplaysReplayMetadata {
	state: LolReplaysMetadataState
	/** @format uint64 */
	gameId: number
	/** @format uint32 */
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
	/** @format double */
	minutesUntilReplayConsideredLost: number
}

export interface LolReplaysReplaysDynamicConfig {
	MinSupportedGameServerVersion: string
	/** @format double */
	MinutesUntilReplayConsideredLost: number
}

export interface LolReplaysReplaysSettingsData {
	"replays-folder-path": string
	"highlights-folder-path": string
}

export interface LolReplaysReplaysSettingsResource {
	data: LolReplaysReplaysSettingsData
}

export interface LolReplaysRoflFileMetadata {
	/** @format uint32 */
	gameLength: number
	gameVersion: string
	/** @format uint32 */
	lastGameChunkId: number
	/** @format uint32 */
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
	data: LolRewardsSelectionRequestDTO
	metadata: LolRewardsRequestMetadataDTO
}

export interface LolRewardsRequestDTO_vector_SelectionRequestDTO {
	data: LolRewardsSelectionRequestDTO[]
	metadata: LolRewardsRequestMetadataDTO
}

export interface LolRewardsRequestDTO_vector_string {
	data: string[]
	metadata: LolRewardsRequestMetadataDTO
}

export interface LolRewardsRequestMetadataDTO {
	transactionId?: string
}

export interface LolRewardsResponseDTO_SvcRewardGrant {
	data: LolRewardsSvcRewardGrant
	metadata: LolRewardsResponseMetadataDTO
}

export interface LolRewardsResponseDTO_map_RewardGroupId_SelectGrantStatus {
	data: Record<string, LolRewardsSelectGrantStatusResponse>
	metadata: LolRewardsResponseMetadataDTO
}

export interface LolRewardsResponseDTO_vector_SvcRewardGrant {
	data: LolRewardsSvcRewardGrant[]
	metadata: LolRewardsResponseMetadataDTO
}

export interface LolRewardsResponseDTO_vector_SvcRewardGroup {
	data: LolRewardsSvcRewardGroup[]
	metadata: LolRewardsResponseMetadataDTO
}

export interface LolRewardsResponseMetadataDTO {
	[key: string | number]: any
}

export interface LolRewardsReward {
	id: string
	itemId: string
	itemType: string
	/** @format int32 */
	quantity: number
	fulfillmentSource: string
	media: Record<string, string>
	localizations: Record<string, string>
}

export interface LolRewardsRewardGrant {
	info: LolRewardsSvcRewardGrant
	rewardGroup: LolRewardsSvcRewardGroup
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
	/** @format uint32 */
	minSelectionsAllowed: number
	/** @format uint32 */
	maxSelectionsAllowed: number
}

export interface LolRewardsSvcRewardGrant {
	id: string
	granteeId: string
	rewardGroupId: string
	dateCreated: string
	status: LolRewardsGrantStatus
	grantElements: LolRewardsSvcRewardGrantElement[]
	selectedIds: string[]
	viewed: boolean
	grantorDescription: LolRewardsGrantorDescription
	messageParameters: Record<string, unknown>
}

export interface LolRewardsSvcRewardGrantElement {
	elementId: string
	itemId: string
	itemType: string
	fulfillmentSource: string
	status: LolRewardsRewardStatus
	/** @format int32 */
	quantity: number
	media: Record<string, string>
	localizations: Record<string, string>
}

export interface LolRewardsSvcRewardGroup {
	id: string
	productId: string
	types: string[]
	rewards: LolRewardsReward[]
	childRewardGroupIds: string[]
	rewardStrategy: LolRewardsRewardStrategy
	selectionStrategyConfig?: LolRewardsSelectionStrategyConfig
	active: boolean
	media: Record<string, string>
	localizations: Record<string, string>
	celebrationType: LolRewardsCelebrationType
}

export interface LolRiotMessagingServiceChampionMasteryLevelUp {
	/** @format uint64 */
	id: number
	puuid: string
	/** @format int32 */
	championId: number
	hasLeveledUp: boolean
	/** @format int64 */
	championLevel: number
}

export type LolRiotMessagingServiceGameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"

export interface LolRiotMessagingServiceGameflowSession {
	phase: LolRiotMessagingServiceGameflowPhase
}

export interface LolRiotclientUpgraderGameflowAvailability {
	isAvailable: boolean
	state: string
}

export interface LolRsoAuthAccessToken {
	token: string
	scopes: string[]
	/** @format uint64 */
	expiry: number
}

export interface LolRsoAuthAuthError {
	error: string
	errorDescription: string
}

export interface LolRsoAuthAuthorization {
	currentPlatformId: string
	/** @format uint64 */
	currentAccountId: number
	subject: string
}

export interface LolRsoAuthAuthorizationRequest {
	scope: string[]
	trustLevels: LolRsoAuthRSOAuthorizationTrustLevel[]
	clientId: string
	claims: string[]
}

export interface LolRsoAuthAuthorizationResponse {
	type: string
	authorization: LolRsoAuthImplicitAuthorization
	country: string
}

export type LolRsoAuthConfigReadinessEnum = "Disabled" | "Ready" | "NotReady"

export interface LolRsoAuthConfigStatus {
	readiness: LolRsoAuthConfigReadinessEnum
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
	/** @format uint64 */
	expiry: number
}

export interface LolRsoAuthIdToken {
	token: string
	/** @format uint64 */
	expiry: number
}

export interface LolRsoAuthImplicitAuthorization {
	accessToken: LolRsoAuthAccessToken
	idToken: LolRsoAuthIdToken
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
	/** @format uint16 */
	lastNYears: number
}

export interface LolSeasonsAllSeasonsProduct {
	/** @format int32 */
	seasonId: number
	/** @format int64 */
	seasonStart: number
	/** @format int64 */
	seasonEnd: number
	act: boolean
	metadata: LolSeasonsSeasonMetaData
}

export interface LolSeasonsSeasonMetaData {
	/** @format uint16 */
	year: number
	locKey: string
	publicName: string
	/** @format int32 */
	currentSplit: number
	/** @format int32 */
	totalSplit: number
}

export interface LolServiceStatusBroadcastMessage {
	content: string
	messageKey: string
	severity: string
}

export interface LolServiceStatusBroadcastNotification {
	broadcastMessages: LolServiceStatusBroadcastMessage[]
}

export interface LolServiceStatusLegacyServiceStatusMessage {
	created_at: string
	updated_at: string
	severity: string
	heading: string
	content: string
	translations: LolServiceStatusLegacyServiceStatusTranslation[]
}

export interface LolServiceStatusLegacyServiceStatusResponse {
	status: string
	messages: LolServiceStatusLegacyServiceStatusMessage[]
}

export interface LolServiceStatusLegacyServiceStatusTranslation {
	locale: string
	heading?: string
	content?: string
}

export interface LolServiceStatusLoginDataPacket {
	broadcastNotification: LolServiceStatusBroadcastNotification
}

export interface LolServiceStatusRegionLocaleResource {
	region: string
	locale: string
}

export interface LolServiceStatusRiotStatusIncident {
	/** @format int64 */
	id: number
	archive_at?: string
	incident_severity: string
	titles: LolServiceStatusRiotStatusTitle[]
	platforms: string[]
	updated_at?: string
	created_at: string
	updates: LolServiceStatusRiotStatusUpdate[]
}

export interface LolServiceStatusRiotStatusMaintenance {
	/** @format int64 */
	id: number
	archive_at?: string
	updates: LolServiceStatusRiotStatusUpdate[]
	created_at: string
	platforms: string[]
	updated_at?: string
	maintenance_status: string
	titles: LolServiceStatusRiotStatusTitle[]
}

export interface LolServiceStatusRiotStatusResource {
	id: string
	name: string
	locales: string[]
	maintenances: LolServiceStatusRiotStatusMaintenance[]
	incidents: LolServiceStatusRiotStatusIncident[]
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
	/** @format int64 */
	id: number
	updated_at?: string
	publish: boolean
	author: string
	created_at: string
	translations: LolServiceStatusRiotStatusTranslation[]
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
	state: LolSettingsLoginSessionStates
	/** @format uint64 */
	summonerId: number
	/** @format uint64 */
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
	/** @format int32 */
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
	reason: LolShutdownShutdownReason
	/** @format float */
	countdown: number
	additionalInfo: string
}

export type LolShutdownShutdownReason = "PlayerBanned" | "LcuAlphaDisabled" | "PlatformMaintenance" | "Invalid"

export type LolSimpleDialogMessagesGameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"

export interface LolSimpleDialogMessagesGameflowSession {
	phase: LolSimpleDialogMessagesGameflowPhase
}

export interface LolSimpleDialogMessagesLocalMessageRequest {
	msgType: string
	msgBody: string[]
}

export interface LolSimpleDialogMessagesLoginDataPacket {
	simpleMessages: LolSimpleDialogMessagesSimpleMessage[]
}

export interface LolSimpleDialogMessagesMessage {
	/** @format int64 */
	id: number
	type: string
	body: unknown
}

export interface LolSimpleDialogMessagesSimpleMessage {
	/** @format uint64 */
	accountId: number
	msgId: string
	type: string
	params: string[]
}

export interface LolSocialLeaderboardFriendResource {
	/** @format uint64 */
	summonerId: number
	name: string
	gameName: string
	gameTag: string
	puuid: string
	/** @format int32 */
	icon: number
	availability: string
}

export interface LolSocialLeaderboardGiftingFriend {
	/** @format uint64 */
	summonerId: number
}

export type LolSocialLeaderboardLeagueDivision = "NA" | "V" | "IV" | "III" | "II" | "I"

export type LolSocialLeaderboardLeagueQueueType = "RANKED_TFT_DOUBLE_UP" | "RANKED_TFT_PAIRS" | "RANKED_TFT_TURBO" | "RANKED_TFT" | "RANKED_FLEX_TT" | "RANKED_FLEX_SR" | "RANKED_SOLO_5x5" | "NONE"

export type LolSocialLeaderboardLeagueTierNumValue = "CHALLENGER" | "GRANDMASTER" | "MASTER" | "DIAMOND" | "EMERALD" | "PLATINUM" | "GOLD" | "SILVER" | "BRONZE" | "IRON" | "NONE"

export interface LolSocialLeaderboardRankedQueueStats {
	queueType: LolSocialLeaderboardLeagueQueueType
	/** @format int32 */
	provisionalGamesRemaining: number
	isProvisional: boolean
	tier: string
	division: LolSocialLeaderboardLeagueDivision
	/** @format int32 */
	leaguePoints: number
	/** @format int32 */
	wins: number
}

export interface LolSocialLeaderboardRankedStats {
	queueMap: Record<string, LolSocialLeaderboardRankedQueueStats>
}

export interface LolSocialLeaderboardSocialLeaderboardData {
	rowData: LolSocialLeaderboardSocialLeaderboardRowData[]
	/** @format int64 */
	nextUpdateTime: number
}

export interface LolSocialLeaderboardSocialLeaderboardRowData {
	puuid: string
	/** @format uint64 */
	summonerId: number
	summonerName: string
	gameName: string
	tagLine: string
	/** @format int32 */
	provisionalGamesRemaining: number
	isProvisional: boolean
	tier: string
	division: LolSocialLeaderboardLeagueDivision
	/** @format int32 */
	leaguePoints: number
	/** @format int32 */
	wins: number
	/** @format int32 */
	summonerLevel: number
	/** @format int32 */
	profileIconId: number
	availability: string
	/** @format int32 */
	leaderboardPosition: number
	isGiftable: boolean
}

export interface LolSocialLeaderboardSummoner {
	/** @format uint64 */
	summonerId: number
	/** @format uint64 */
	accountId: number
	displayName: string
	internalName: string
	gameName: string
	tagLine: string
	/** @format uint32 */
	summonerLevel: number
	puuid: string
	/** @format int32 */
	profileIconId: number
}

export interface LolSpectatorQueue {
	spectatorEnabled: boolean
	/** @format uint32 */
	id: number
}

export interface LolSpectatorSpectateAvailabilityResponseDto {
	availableForWatching: string[]
}

export interface LolSpectatorSpectateAvailabilityResponseDtoV2 {
	availableForWatching: number[]
}

export interface LolSpectatorSpectateAvailabilityResponseDtoV3 {
	availableForWatching: string[]
}

export interface LolSpectatorSpectateGameInfo {
	dropInSpectateGameId: string
	gameQueueType: string
	allowObserveMode: string
	puuid: string
}

export interface LolSpectatorSpectateResource {
	availableForWatching: string[]
}

export interface LolSpectatorSpectatorConfig {
	isEnabled: boolean
	isSpectatorDelayConfigurable: boolean
	isBracketSpectatingEnabled: boolean
	spectatableQueues: number[]
}

export interface LolSpectatorSpectatorDynamicConfiguration {
	isEnabled: boolean
	isSpectatorDelayConfigurable: boolean
}

export interface LolSpectatorSummonerIdAvailability {
	availableForWatching: number[]
}

export interface LolSpectatorSummonerOrTeamAvailabilty {
	availableForWatching: string[]
}

export interface LolSpectatorSummonerPuuidsSpectateResource {
	availableForWatching: string[]
}

export interface LolStatstonesCatalogBundle {
	item: LolStatstonesCatalogItemDetails
}

export interface LolStatstonesCatalogBundlePrice {
	currency: string
	/** @format int32 */
	cost: number
}

export interface LolStatstonesCatalogItemDetails {
	/** @format int32 */
	itemId: number
	inventoryType: string
	subInventoryType: string
	prices: LolStatstonesCatalogBundlePrice[]
	releaseDate: string
	itemInstanceId: string
}

export interface LolStatstonesChampionStatstoneSetSummary {
	name: string
	/** @format uint32 */
	stonesAvailable: number
	/** @format uint32 */
	stonesOwned: number
	/** @format uint32 */
	stonesIlluminated: number
	/** @format uint32 */
	milestonesPassed: number
}

export interface LolStatstonesChampionStatstoneSummary {
	/** @format int32 */
	championId: number
	/** @format uint32 */
	stonesAvailable: number
	/** @format uint32 */
	stonesOwned: number
	/** @format uint32 */
	stonesIlluminated: number
	/** @format uint32 */
	milestonesPassed: number
	sets: LolStatstonesChampionStatstoneSetSummary[]
}

export interface LolStatstonesCollectionsChampion {
	name: string
	squarePortraitPath: string
	/** @format int32 */
	id: number
}

export interface LolStatstonesEogNotificationEnvelope {
	selfStatstoneProgress: LolStatstonesStatstoneProgress[]
	selfPersonalBests: LolStatstonesPersonalBestNotification[]
	selfMilestoneProgress: LolStatstonesMilestoneProgressNotification[]
	othersPersonalBests: LolStatstonesPersonalBestNotification[]
}

export interface LolStatstonesGameDataItemReference {
	/** @format int32 */
	itemId: number
	inventoryType: string
	contentId: string
}

export interface LolStatstonesGameDataStatstone {
	name: string
	contentId: string
	/** @format int32 */
	itemId: number
	/** @format uint32 */
	trackingType: number
	isRetired: boolean
	isEpic: boolean
	boundChampion: LolStatstonesGameDataItemReference
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
	/** @format int32 */
	itemId: number
}

export interface LolStatstonesGameDataStatstoneSet {
	name: string
	/** @format int32 */
	itemId: number
	inventoryType: string
	contentId: string
	statstones: LolStatstonesGameDataStatstone[]
	/** @format int32 */
	price: number
}

export interface LolStatstonesGameDataStatstonesInfo {
	statstoneData: LolStatstonesGameDataStatstoneSet[]
	packData: LolStatstonesGameDataStatstonePack[]
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
	/** @format int32 */
	itemId: number
	loadout: Record<string, unknown>
}

export interface LolStatstonesLoadoutItem {
	inventoryType: string
	contentId: string
	/** @format int32 */
	itemId: number
}

export interface LolStatstonesMilestoneNotificationDto {
	statstoneId: string
	/** @format int32 */
	level: number
	/** @format int32 */
	threshold: number
	isCompleted: boolean
}

export interface LolStatstonesMilestoneProgressNotification {
	statstoneId: string
	statstoneName: string
	/** @format int32 */
	threshold: number
	imageUrl: string
	level: string
}

export interface LolStatstonesNumberFormattingBehavior {
	/** @format uint32 */
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
	numberFormattingBehavior: LolStatstonesNumberFormattingBehavior
}

export interface LolStatstonesPersonalBestNotification {
	summoner: LolStatstonesSummoner
	statstoneId: string
	statstoneName: string
	personalBest: string
	imageUrl: string
}

export interface LolStatstonesPriceInfo {
	currency: string
	/** @format uint32 */
	price: number
}

export interface LolStatstonesProfileStatstoneSummary {
	/** @format int32 */
	championId: number
	name: string
	value: string
	imageUrl: string
	category: string
}

export interface LolStatstonesStatstone {
	name: string
	statstoneId: string
	/** @format uint32 */
	boundChampionItemId: number
	nextMilestone: string
	/** @format float */
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
	playerRecord?: LolStatstonesStatstonePlayerRecord
}

export interface LolStatstonesStatstoneCompletion {
	statstoneName: string
	category: string
	isEpic: boolean
}

export interface LolStatstonesStatstoneFeaturedRequest {
	/** @format int32 */
	index: number
	existingFeatured: LolStatstonesStatstone[]
}

export interface LolStatstonesStatstoneMasteryVignette {
	/** @format uint32 */
	numSetsCompleted: number
	/** @format uint32 */
	masteryLevel: number
	completedSetUuids: string[]
	puuid: string
}

export interface LolStatstonesStatstoneNotificationDto {
	statstoneId: string
	puuid: string
	/** @format int32 */
	delta: number
	/** @format int32 */
	value: number
	/** @format int32 */
	level: number
	/** @format int32 */
	best: number
	isNewBest: boolean
}

export interface LolStatstonesStatstoneNotificationEnvelopeDto {
	/** @format uint64 */
	gameId: number
	updates: LolStatstonesStatstoneNotificationDto[]
	milestones: LolStatstonesMilestoneNotificationDto[]
}

export interface LolStatstonesStatstonePlayerRecord {
	puuid: string
	statstoneId: string
	/** @format uint32 */
	value: number
	/** @format uint32 */
	personalBest: number
	/** @format uint32 */
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
	/** @format int32 */
	level: number
	/** @format int32 */
	best: number
	isNewBest: boolean
}

export interface LolStatstonesStatstoneRekindledVignette {
	portraitPath: string
	statstone: LolStatstonesStatstoneCompletion
}

export interface LolStatstonesStatstoneSet {
	name: string
	statstones: LolStatstonesStatstone[]
	/** @format uint32 */
	stonesOwned: number
	/** @format uint32 */
	milestonesPassed: number
	/** @format uint32 */
	itemId: number
	inventoryType: string
	subInventoryType: string
	itemInstanceID: string
	prices: LolStatstonesPriceInfo[]
	ownedFromPacks: LolStatstonesGameDataStatstonePack[]
}

export interface LolStatstonesStatstoneSetCompleteVignette {
	statstones: LolStatstonesStatstoneCompletion[]
}

export interface LolStatstonesStatstoneVignetteNotificationEnvelopeDto {
	champName: string
	/** @format int32 */
	champId: number
	masteryVignetteNotifications: LolStatstonesStatstoneMasteryVignette[]
	rekindledVignetteNotifications: LolStatstonesStatstoneRekindledVignette[]
	setCompleteVignetteNotifications: LolStatstonesStatstoneSetCompleteVignette[]
}

export interface LolStatstonesSummoner {
	/** @format uint64 */
	summonerId: number
	puuid: string
	displayName: string
}

export interface LolStoreAccessTokenResource {
	token: string
	scopes: string[]
	/** @format uint64 */
	expiry: number
}

export interface LolStoreAliasChangeNotificationResource {
	/** @format uint64 */
	id: number
	type: string
	details: LolStoreAliasDetail
}

export interface LolStoreAliasDetail {
	field: string
	old_value: string
	new_value: string
}

export interface LolStoreAllSummonerData {
	summoner: LolStoreSummoner
	summonerLevelAndPoints: LolStoreSummonerLevelAndPoints
}

export interface LolStoreBundleItemDTO {
	inventoryType: string
	/** @format int32 */
	itemId: number
	iconUrl: string
	/** @format uint32 */
	quantity: number
	name: string
	description: string
	owned: boolean
	/** @format int64 */
	rp: number
	/** @format int64 */
	discountedRp: number
	/** @format int64 */
	ip: number
}

export interface LolStoreBundled {
	flexible: boolean
	items: LolStoreBundledItem[]
	minimumPrices: LolStoreBundledItemCost[]
}

export interface LolStoreBundledItem {
	inventoryType: string
	/** @format int32 */
	itemId: number
	/** @format uint32 */
	quantity: number
	discountPrices: LolStoreBundledItemCost[]
}

export interface LolStoreBundledItemCost {
	currency: string
	/** @format int64 */
	cost: number
	/** @format float */
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
	platformIds: Record<string, LolStoreItemKey>
}

export interface LolStoreCatalogItem {
	/** @format int32 */
	itemId: number
	inventoryType: string
	iconUrl?: string
	localizations?: Record<string, LolStoreItemLocalization>
	active?: boolean
	bundled?: LolStoreBundled
	inactiveDate?: string
	/** @format int32 */
	maxQuantity?: number
	prices?: LolStoreItemCost[]
	releaseDate?: string
	sale?: LolStoreSale
	subInventoryType?: string
	tags?: string[]
	itemRequirements?: LolStoreItemKey[]
	metadata?: LolStoreItemMetadataEntry[]
	itemInstanceId?: string
	offerId?: string
}

export interface LolStoreFeaturedPageDTO {
	Player: LolStorePlayer
}

export interface LolStoreGetPlatformIdsFromInstanceIdsRequest {
	instanceIds: string[]
}

export interface LolStoreGiftableResult {
	config: LolStoreGiftingConfig
	friends: LolStoreGiftingFriend[]
}

export interface LolStoreGiftingConfig {
	/** @format uint32 */
	recipientLevelLimitItem: number
	/** @format uint32 */
	recipientLevelLimitRp: number
	/** @format uint32 */
	giftingRestrictionFlagRioter: number
	/** @format uint32 */
	giftingItemMinLevelSend: number
	/** @format uint32 */
	giftingRpMinLevelSend: number
	/** @format uint32 */
	giftingRpMaxDailyGiftsSend: number
	/** @format uint32 */
	giftingRpMaxDailyGiftsReceive: number
	/** @format uint32 */
	giftingItemMaxDailyGiftsSend: number
	/** @format uint32 */
	giftingItemMaxDailyGiftsReceive: number
	/** @format uint32 */
	giftingHextechMaxDailyGiftsSend: number
	/** @format uint32 */
	giftingHextecMaxDailyGiftsReceive: number
	requiresIdentityVerification: boolean
}

export interface LolStoreGiftingFriend {
	friendsSince: string
	oldFriends: boolean
	/** @format uint64 */
	summonerId: number
	nick: string
}

export interface LolStoreItemCost {
	currency: string
	/** @format int64 */
	cost: number
	/** @format float */
	discount?: number
}

export interface LolStoreItemKey {
	inventoryType: string
	/** @format int32 */
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
	/** @format int32 */
	itemId: number
	/** @format uint32 */
	quantity: number
	/** @format uint32 */
	rpCost: number
}

export interface LolStoreItemSale {
	/** @format uint64 */
	id: number
	active: boolean
	item: LolStoreItemKey
	sale: LolStoreSale
}

export interface LolStoreLoginDataPacket {
	allSummonerData: LolStoreAllSummonerData
	simpleMessages: LolStoreSimpleDialogMessage[]
}

export interface LolStoreLoginSession {
	state: LolStoreLoginSessionStates
	/** @format uint64 */
	summonerId: number
	/** @format uint64 */
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
	/** @format uint64 */
	id: number
	source: string
	state: string
	titleKey: string
	type: string
}

export interface LolStoreOrderNotificationResource {
	/** @format uint64 */
	id: number
	eventTypeId: string
	eventType: string
	status: string
}

export interface LolStorePageDTO {
	Player: LolStorePlayer
	catalog: LolStoreCatalogItem[]
	groupOrder: string[]
	itemGroups: Record<string, LolStorePageGroupingDTO>
}

export interface LolStorePageGroupingDTO {
	items: LolStoreItemKey[]
	hidden: boolean
	grouped: boolean
}

export interface LolStorePlayer {
	/** @format uint64 */
	accountId: number
	/** @format int64 */
	rp: number
	/** @format int64 */
	ip: number
	/** @format uint32 */
	summonerLevel: number
}

export interface LolStorePurchaseOrderRequestDTO {
	/** @format uint64 */
	accountId: number
	items: LolStoreItemOrderDTO[]
}

export interface LolStorePurchaseOrderResponseDTO {
	/** @format int64 */
	rpBalance: number
	/** @format int64 */
	ipBalance: number
	transactions: LolStoreTransactionResponseDTO[]
}

export interface LolStoreRiotMessagingServiceMessage {
	resource: string
	service: string
	version: string
	/** @format int64 */
	timestamp: number
	payload: string
}

export interface LolStoreSale {
	startDate: string
	endDate: string
	prices: LolStoreItemCost[]
}

export interface LolStoreServiceBalance {
	currency: string
	/** @format int64 */
	amount: number
}

export interface LolStoreServiceWallet {
	/** @format uint64 */
	accountId: number
	balances: LolStoreServiceBalance[]
}

export interface LolStoreSimpleDialogMessage {
	/** @format uint64 */
	accountId: number
	msgId: string
	type: string
	params: string[]
}

export interface LolStoreStoreStatus {
	storefrontIsRunning: boolean
}

export interface LolStoreSummoner {
	/** @format uint64 */
	acctId: number
	/** @format uint64 */
	sumId: number
}

export interface LolStoreSummonerLevelAndPoints {
	/** @format uint32 */
	summonerLevel: number
}

export interface LolStoreTransactionResponseDTO {
	id: string
	inventoryType: string
	/** @format int32 */
	itemId: number
}

export interface LolStoreWallet {
	/** @format int64 */
	ip: number
	/** @format int64 */
	rp: number
}

export interface LolSuggestedPlayersEndOfGamePlayer {
	summonerName: string
	/** @format uint64 */
	summonerId: number
}

export interface LolSuggestedPlayersEndOfGameStats {
	teams: LolSuggestedPlayersEndOfGameTeam[]
}

export interface LolSuggestedPlayersEndOfGameTeam {
	players: LolSuggestedPlayersEndOfGamePlayer[]
	isWinningTeam: boolean
}

export type LolSuggestedPlayersGameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"

export interface LolSuggestedPlayersHonorInteraction {
	/** @format uint64 */
	summonerId: number
	displayName: string
	/** @format uint64 */
	gameId: number
}

export interface LolSuggestedPlayersSuggestedPlayersConfig {
	Enabled: boolean
	FriendsOfFriendsEnabled: boolean
	/** @format uint64 */
	MaxNumSuggestedPlayers: number
	/** @format uint64 */
	MaxNumReplacements: number
	/** @format uint64 */
	PreviousPremadesLimit: number
	/** @format uint64 */
	OnlineFriendsLimit: number
	/** @format uint64 */
	FriendsOfFriendsLimit: number
	/** @format uint64 */
	VicoriousComradesLimit: number
	/** @format uint64 */
	MaxHonorInteractionPlayers: number
}

export interface LolSuggestedPlayersSuggestedPlayersDynamicClientConfig {
	SuggestedPlayers: LolSuggestedPlayersSuggestedPlayersConfig
}

export interface LolSuggestedPlayersSuggestedPlayersFriend {
	/** @format uint64 */
	summonerId: number
	name: string
	availability: string
}

export interface LolSuggestedPlayersSuggestedPlayersKudoedPlayer {
	/** @format uint64 */
	kudoedSummonerId: number
	kudoedSummonerName: string
}

export interface LolSuggestedPlayersSuggestedPlayersLobbyStatus {
	/** @format int32 */
	queueId: number
	memberSummonerIds: number[]
	invitedSummonerIds: number[]
}

export interface LolSuggestedPlayersSuggestedPlayersPlayerStatus {
	currentLobbyStatus?: LolSuggestedPlayersSuggestedPlayersLobbyStatus
	lastQueuedLobbyStatus?: LolSuggestedPlayersSuggestedPlayersLobbyStatus
}

export interface LolSuggestedPlayersSuggestedPlayersQueue {
	/** @format int32 */
	id: number
	/** @format uint32 */
	minLevel: number
}

export type LolSuggestedPlayersSuggestedPlayersReason = "LegacyPlayAgain" | "HonorInteractions" | "VictoriousComrade" | "FriendOfFriend" | "OnlineFriend" | "PreviousPremade"

export interface LolSuggestedPlayersSuggestedPlayersReportedPlayer {
	/** @format uint64 */
	reportedSummonerId: number
}

export interface LolSuggestedPlayersSuggestedPlayersSuggestedPlayer {
	summonerName: string
	/** @format uint64 */
	summonerId: number
	commonFriendName: string
	/** @format uint64 */
	commonFriendId: number
	reason: LolSuggestedPlayersSuggestedPlayersReason
	/** @format uint64 */
	gameId: number
}

export interface LolSuggestedPlayersSuggestedPlayersSummoner {
	/** @format uint64 */
	summonerId: number
	displayName: string
	/** @format uint32 */
	summonerLevel: number
}

export interface LolSuggestedPlayersSuggestedPlayersVictoriousComrade {
	/** @format uint64 */
	summonerId: number
	summonerName: string
}

export interface LolSummonerAccountIdAndSummonerId {
	/** @format uint64 */
	accountId: number
	/** @format uint64 */
	summonerId: number
}

export interface LolSummonerAlias {
	gameName: string
	tagLine: string
}

export interface LolSummonerAliasAvailability {
	alias: LolSummonerAlias
	errorCode: LolSummonerAliasAvailabilityCode
	errorMessage: string
	isSuccess: boolean
}

export type LolSummonerAliasAvailabilityCode = "server_error" | "rate_limited" | "name_not_available" | "name_change_forbidden" | "no_error"

export interface LolSummonerAliasDTO {
	error: string
	providerId: string
	puuid: string
	gnt: LolSummonerAlias
	playstationNameset: LolSummonerConsoleNameset
	switchNameset: LolSummonerConsoleNameset
	xboxNameset: LolSummonerConsoleNameset
}

export interface LolSummonerAliasLookupDTO {
	game_name: string
	tag_line: string
}

export interface LolSummonerAliasLookupResponse {
	alias: LolSummonerAlias
	puuid: string
}

export interface LolSummonerAliasLookupResponseDTO {
	alias: LolSummonerAliasLookupDTO
	puuid: string
}

export interface LolSummonerAutoFillQueueDto {
	/** @format int32 */
	queueId: number
	autoFillEligible: boolean
	autoFillProtectedForStreaking: boolean
	autoFillProtectedForPromos: boolean
	autoFillProtectedForRemedy: boolean
}

export interface LolSummonerConsoleNameset {
	name: string
}

export interface LolSummonerGameloopPlayerInfoV2 {
	autoFillDataBags: LolSummonerAutoFillQueueDto[]
	rerollDataBags: LolSummonerRerollDataBagForClientV1[]
}

export interface LolSummonerLevelField {
	/** @format uint32 */
	initialLevel: number
	/** @format uint32 */
	finalLevel: number
	progress: LolSummonerLevelProgression
}

export interface LolSummonerLevelProgression {
	/** @format uint64 */
	initialXp: number
	/** @format uint64 */
	finalXp: number
	/** @format uint64 */
	initialLevelBoundary: number
	/** @format uint64 */
	finalLevelBoundary: number
}

export interface LolSummonerLoginSession {
	state: LolSummonerLoginSessionStates
	/** @format uint64 */
	summonerId: number
	/** @format uint64 */
	accountId: number
	puuid: string
	connected: boolean
}

export type LolSummonerLoginSessionStates = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"

export interface LolSummonerNamesetsResponse {
	namesets: LolSummonerAliasDTO[]
}

export type LolSummonerPlayerNameMode = "ALIAS" | "DARKMODE" | "SUMMONER"

export interface LolSummonerPlayerNameState {
	isAliasChangeRequired: boolean
	isAliasMissing: boolean
	isTaglineCustomizable: boolean
}

export interface LolSummonerProfilePrivacy {
	enabledState: LolSummonerProfilePrivacyEnabledState
	setting: LolSummonerProfilePrivacySetting
}

export type LolSummonerProfilePrivacyEnabledState = "DISABLED" | "ENABLED" | "UNKNOWN"

export type LolSummonerProfilePrivacySetting = "PUBLIC" | "PRIVATE"

export interface LolSummonerRerollDataBagForClientV1 {
	/** @format int32 */
	queueId: number
	/** @format int32 */
	pointsUntilNextReroll: number
	/** @format int32 */
	rerollCount: number
	/** @format int32 */
	totalPoints: number
	/** @format int32 */
	maximumRerolls: number
	/** @format int32 */
	pointCostOfReroll: number
}

export interface LolSummonerStatus {
	ready: boolean
}

export interface LolSummonerSummoner {
	/** @format uint64 */
	summonerId: number
	/** @format uint64 */
	accountId: number
	displayName: string
	internalName: string
	/** @format int32 */
	profileIconId: number
	/** @format uint32 */
	summonerLevel: number
	/** @format uint64 */
	xpSinceLastLevel: number
	/** @format uint64 */
	xpUntilNextLevel: number
	/** @format uint32 */
	percentCompleteForNextLevel: number
	rerollPoints: LolSummonerSummonerRerollPoints
	puuid: string
	nameChangeFlag: boolean
	unnamed: boolean
	privacy: LolSummonerProfilePrivacySetting
	gameName: string
	tagLine: string
}

export interface LolSummonerSummonerCacheData {
	summoner?: LolSummonerSummoner
	/** @format int32 */
	summonerIcon?: number
	privacy?: LolSummonerProfilePrivacySetting
}

export interface LolSummonerSummonerCreateRequest {
	summonerName: string
}

export interface LolSummonerSummonerCreatedId {
	/** @format uint64 */
	summonerId: number
}

export interface LolSummonerSummonerDTO {
	/** @format uint64 */
	id: number
	/** @format uint64 */
	accountId: number
	puuid: string
	name: string
	partnerId: string
	/** @format int32 */
	profileIconId: number
	/** @format uint32 */
	level: number
	/** @format uint32 */
	expPoints: number
	/** @format uint32 */
	expToNextLevel: number
	nameChangeFlag: boolean
	unnamed: boolean
	privacy: LolSummonerProfilePrivacySetting
}

export interface LolSummonerSummonerIcon {
	/** @format int32 */
	profileIconId: number
	inventoryToken: string
}

export interface LolSummonerSummonerIdAndIcon {
	/** @format uint64 */
	summonerId: number
	/** @format int32 */
	profileIconId: number
	puuid: string
}

export interface LolSummonerSummonerIdAndName {
	/** @format uint64 */
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
	/** @format uint32 */
	pointsToReroll: number
	/** @format uint32 */
	currentPoints: number
	/** @format uint32 */
	numberOfRolls: number
	/** @format uint32 */
	maxRolls: number
	/** @format uint32 */
	pointsCostToRoll: number
}

export interface LolSummonerSummonerSession {
	/** @format uint64 */
	summonerId: number
	displayName: string
	isNewPlayer: boolean
}

export interface LolSummonerUserInfo {
	userInfo: string
}

export interface LolSummonerXpAndLevelMessage {
	xp: unknown
	level: LolSummonerLevelField
}

export interface LolTastesDataModelResponse {
	/** @format int64 */
	responseCode: number
	modelData: unknown
}

export interface LolTftDataModelResponse {
	/** @format int64 */
	responseCode: number
	modelData: unknown
}

export interface LolTftEventCollectionsChampion {
	/** @format int32 */
	id: number
	freeToPlay: boolean
	ownership: LolTftEventCollectionsOwnership
	skins: LolTftEventCollectionsChampionSkin[]
}

export interface LolTftEventCollectionsChampionSkin {
	/** @format int32 */
	championId: number
	/** @format int32 */
	id: number
	ownership: LolTftEventCollectionsOwnership
}

export interface LolTftEventCollectionsOwnership {
	loyaltyReward: boolean
	xboxGPReward: boolean
	owned: boolean
	rental: LolTftEventCollectionsRental
}

export interface LolTftEventCollectionsRental {
	rented: boolean
}

export interface LolTftEventCollectionsSummoner {
	/** @format int32 */
	summonerLevel: number
}

export interface LolTftEventCollectionsSummonerIcons {
	icons: number[]
}

export interface LolTftEventCollectionsWardSkin {
	/** @format int64 */
	id: number
	ownership: LolTftEventCollectionsOwnership
}

export interface LolTftEventDataModelResponse {
	/** @format int64 */
	responseCode: number
	modelData: unknown
}

export interface LolTftEventGameflowGameData {
	/** @format uint64 */
	gameId: number
	queue: LolTftEventQueue
}

export type LolTftEventGameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"

export interface LolTftEventGameflowSession {
	phase: LolTftEventGameflowPhase
}

export type LolTftEventGrantStatus = "FULFILLED" | "PENDING_SELECTION" | "PENDING_FULFILLMENT"

export interface LolTftEventInventoryItemWithPayload {
	/** @format int32 */
	itemId: number
}

export interface LolTftEventLoginSession {
	/** @format uint64 */
	accountId: number
	/** @format uint64 */
	summonerId: number
	puuid: string
	platformId: string
}

export interface LolTftEventLolTftBackgrounds {
	backgrounds: Record<string, string>
}

export interface LolTftEventLolTftBattlePassHub {
	battlePassXPBoosted: boolean
}

export interface LolTftEventLolTftEvent {
	titleTranslationKey: string
	enabled: boolean
	url: string
	urlFaq: string
	startDate: string
	endDate: string
	seriesId: string
	queueIds: number[]
	defaultLandingPage: boolean
	eventHubTemplateType: string
}

export interface LolTftEventLolTftEvents {
	subNavTabs: LolTftEventLolTftEvent[]
}

export interface LolTftEventLolTftHomeHub {
	enabled: boolean
	storePromoOfferIds: string[]
	tacticianPromoOfferIds: string[]
	battlePassOfferIds: string[]
	fallbackStorePromoOfferIds: string[]
	primeGamingPromoOffer?: LolTftEventLolTftPrimeGaming
	overrideUrl: string
	headerButtonsOverrideUrl: string
}

export interface LolTftEventLolTftNewsHub {
	enabled: boolean
	url: string
}

export interface LolTftEventLolTftPrimeGaming {
	url: string
	assetId: string
}

export interface LolTftEventLolTftPromoButton {
	enabled: boolean
	showTimerWhileEventActive: boolean
	eventAssetId: string
	eventKey: string
	url: string
}

export interface LolTftEventLolTftPromoButtons {
	promoButtons: LolTftEventLolTftPromoButton[]
}

export interface LolTftEventLolTftTencentEventHubConfig {
	troveAssetId: string
	troveURL: string
	logoAssetId: string
}

export interface LolTftEventLolTftTencentEventHubConfigs {
	tencentEventhubConfigs: LolTftEventLolTftTencentEventHubConfig[]
}

export type LolTftEventLoyaltyStatus = "DISABLED" | "REVOKE" | "CHANGE" | "EXPIRY" | "REWARDS_GRANT" | "LEGACY"

export interface LolTftEventLoyaltyStatusNotification {
	status: LolTftEventLoyaltyStatus
}

export interface LolTftEventMissionAsset {
	internalName: string
	path: string
	iconNeedsFrame: boolean
}

export interface LolTftEventMissionsNotificationResource {
	backgroundUrl: string
	created: string
	critical: boolean
	data: Record<string, string>
	detailKey: string
	expires: string
	iconUrl: string
	/** @format uint64 */
	id: number
	source: string
	state: string
	titleKey: string
	type: string
}

export interface LolTftEventMissionsSettingsDataResource {
	selected_series: string
}

export interface LolTftEventPlayerUpdateResponse {
	playerMissions: PlayerMissionDTO[]
	playerSeries: SeriesDTO[]
}

export interface LolTftEventPluginRegionLocaleChangedEvent {
	locale: string
}

export interface LolTftEventPublishingSettings {
	publishingLocale: string
}

export interface LolTftEventQueue {
	/** @format int32 */
	id: number
	/** @format int32 */
	mapId: number
	gameMode: string
	category: LolTftEventQueueGameCategory
}

export type LolTftEventQueueGameCategory = "Alpha" | "VersusAi" | "PvP" | "Custom" | "None"

export interface LolTftEventRewardGrant {
	info: LolTftEventRewardGrantInfo
	rewardGroup: LolTftEventRewardGroup
}

export interface LolTftEventRewardGrantElement {
	id: string
	itemId: string
	itemType: string
	fulfillmentSource: string
	rewardStatus: LolTftEventRewardStatus
	/** @format int32 */
	quantity: number
	media: Record<string, string>
	localizations: Record<string, string>
}

export interface LolTftEventRewardGrantInfo {
	id: string
	granteeId: string
	rewardGroupId: string
	status: LolTftEventGrantStatus
	grantElements: LolTftEventRewardGrantElement[]
	selectedIds: string[]
	viewed: boolean
}

export interface LolTftEventRewardGroup {
	id: string
	internalName: string
	productId: string
	types: string[]
	rewards: LolTftEventSvcReward[]
	childRewardGroupIds: string[]
	rewardStrategy: LolTftEventRewardStrategy
	selectionStrategyConfig: LolTftEventSelectionStrategyConfig
	active: boolean
	media: Record<string, string>
	localizations: Record<string, string>
}

export interface LolTftEventRewardGroupsSelection {
	rewardGroups: string[]
}

export type LolTftEventRewardStatus = "FULFILLED" | "PENDING"

export type LolTftEventRewardStrategy = "SELECTION" | "RANDOM" | "ALL"

export interface LolTftEventRewardsProductConfig {
	enabled: boolean
	serviceUrl: string
}

export interface LolTftEventSelectionStrategyConfig {
	/** @format uint32 */
	minSelectionsAllowed: number
	/** @format uint32 */
	maxSelectionsAllowed: number
}

export interface LolTftEventSeriesOpt {
	seriesId: string
	option: string
}

export interface LolTftEventSettingsResource {
	data: unknown
}

export interface LolTftEventSvcReward {
	id: string
	itemId: string
	/** @format int32 */
	quantity: number
	fulfillmentSource: string
	media: Record<string, string>
	localizations: Record<string, string>
}

export interface LolTftEventTFTEventMissionChain {
	/** @format int32 */
	chainIndex: number
	/** @format uint32 */
	chainSize: number
	missions: PlayerMissionDTO[]
}

export interface LolTftEventTftOrb {
	missionId: string
	status: string
	/** @format int64 */
	unlockTime: number
	/** @format uint8 */
	rewardLevel: number
	rewards: PlayerMissionRewardDTO[]
}

export interface LolTftEventTftPaidBattlepass {
	/** @format int32 */
	totalPointsEarned: number
	milestones: LolTftEventTftPaidBattlepassMilestone[]
	bonuses: LolTftEventTftPaidBattlepassMilestone[]
	activeMilestone: LolTftEventTftPaidBattlepassMilestone
	info: LolTftEventTftPaidBattlepassInfo
	/** @format int32 */
	lastViewedProgress: number
	lastViewedMilestone: LolTftEventTftPaidBattlepassMilestone
	progressMissionId: string
	/** @format int32 */
	currentLevel: number
}

export interface LolTftEventTftPaidBattlepassInfo {
	title: string
	description: string
	/** @format uint64 */
	startDate: number
	/** @format uint64 */
	endDate: number
	premium: boolean
	premiumTitle: string
	premiumEntitlementId: string
	pcPurchaseRequirement: string
	passId: string
	media: Record<string, string>
}

export interface LolTftEventTftPaidBattlepassMilestone {
	missionId: string
	internalName: string
	title: string
	description: string
	state: string
	status: string
	/** @format int32 */
	pointsNeededForMilestone: number
	/** @format int32 */
	pointsEarnedForMilestone: number
	/** @format int32 */
	totalPointsForMilestone: number
	/** @format int32 */
	level: number
	iconImageUrl: string
	iconNeedsFrame: boolean
	rewards: LolTftEventTftPaidBattlepassReward[]
	isPaid: boolean
	isLocked: boolean
	isKeystone: boolean
	isBonus: boolean
	isClaimRequestPending: boolean
}

export interface LolTftEventTftPaidBattlepassReward {
	rewardGroup: string
	description: string
	iconUrl: string
	iconNeedsFrame: boolean
}

export interface LolTftEventTftWeeklyMissions {
	missions: PlayerMissionDTO[]
}

export interface LolTftEventUserInfo {
	userInfo: string
}

export interface LolTftGameflowGameData {
	/** @format uint64 */
	gameId: number
	queue: LolTftQueue
}

export type LolTftGameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"

export interface LolTftGameflowSession {
	phase: LolTftGameflowPhase
	gameData: LolTftGameflowGameData
}

export interface LolTftLolTftBackgrounds {
	backgrounds: Record<string, string>
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
	eventHubTemplateType: string
}

export interface LolTftLolTftEvents {
	subNavTabs: LolTftLolTftEvent[]
}

export interface LolTftLolTftHomeHub {
	enabled: boolean
	storePromoOfferIds: string[]
	tacticianPromoOfferIds: string[]
	battlePassOfferIds: string[]
	fallbackStorePromoOfferIds: string[]
	primeGamingPromoOffer?: LolTftLolTftPrimeGaming
	overrideUrl: string
	headerButtonsOverrideUrl: string
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
	promoButtons: LolTftLolTftPromoButton[]
}

export interface LolTftLolTftTencentEventHubConfig {
	troveAssetId: string
	troveURL: string
	logoAssetId: string
}

export interface LolTftLolTftTencentEventHubConfigs {
	tencentEventhubConfigs: LolTftLolTftTencentEventHubConfig[]
}

export interface LolTftPassAccessTokenResource {
	token: string
	scopes: string[]
	/** @format uint64 */
	expiry: number
}

export interface LolTftPassCatalogItem {
	/** @format int32 */
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
	/** @format int64 */
	startValue: number
}

export interface LolTftPassCounterInstance {
	ownerId: string
	productId: string
	groupId: string
	counterId: string
	/** @format int64 */
	counterValue: number
}

export interface LolTftPassCurrencyDTO {
	/** @format int32 */
	amount: number
	subCurrencies: Record<string, number>
}

export interface LolTftPassEndOfGameXp {
	/** @format uint32 */
	PER_WIN: number
}

export interface LolTftPassEndOfGameXpNotification {
	xp: LolTftPassEndOfGameXp
}

export interface LolTftPassEntityInstance {
	groupId: string
	counters: LolTftPassCounterInstance[]
	milestones: LolTftPassMilestoneInstance[]
}

export interface LolTftPassGroup {
	id: string
	productId: string
	name: string
	repeat: LolTftPassRepeat
	counters: LolTftPassCounter[]
	milestones: LolTftPassMilestone[]
}

export interface LolTftPassInventoryCacheEntry {
	signedInventoryJwt: string
	/** @format uint64 */
	expirationMS: number
	/** @format uint64 */
	issuedAtMS: number
	/** @format uint64 */
	receivedAtMS: number
	valid: boolean
}

export interface LolTftPassInventoryDTO {
	puuid: string
	/** @format uint64 */
	accountId: number
	/** @format uint64 */
	summonerId: number
	items: Record<string, unknown>
	expires: string
	itemsJwt: string
}

export interface LolTftPassInventoryItem {
	uuid: string
	/** @format int32 */
	itemId: number
	inventoryType: string
	purchaseDate: string
	/** @format uint64 */
	quantity: number
	ownershipType: LolTftPassItemOwnershipType
	expirationDate: string
	/** @format uint64 */
	wins: number
}

export interface LolTftPassInventoryItemDTO {
	/** @format int32 */
	itemId: number
	inventoryType: string
	expirationDate: string
	purchaseDate: string
	/** @format uint64 */
	quantity: number
	/** @format uint64 */
	ownedQuantity: number
	usedInGameDate: string
	entitlementId: string
	entitlementTypeId: string
	instanceId: string
	instanceTypeId: string
	payload: unknown
	"f2p": boolean
	rental: boolean
	loyalty: boolean
	loyaltySources: string[]
	lsb: boolean
	/** @format uint64 */
	wins: number
}

export interface LolTftPassInventoryItemWithPayload {
	uuid: string
	/** @format int32 */
	itemId: number
	inventoryType: string
	purchaseDate: string
	/** @format uint64 */
	quantity: number
	ownershipType: LolTftPassItemOwnershipType
	expirationDate: string
	"f2p": boolean
	rental: boolean
	loyalty: boolean
	loyaltySources: string[]
	owned: boolean
	/** @format uint64 */
	wins: number
	payload: unknown
}

export interface LolTftPassInventoryNotification {
	/** @format int64 */
	id: number
	/** @format int32 */
	itemId: number
	inventoryType: string
	type: string
	acknowledged: boolean
}

export interface LolTftPassInventoryResponseDTO {
	data: LolTftPassInventoryDTO
}

export interface LolTftPassItemKey {
	inventoryType: string
	/** @format int32 */
	itemId: number
}

export type LolTftPassItemOwnershipType = "F2P" | "LOYALTY" | "RENTED" | "OWNED"

export interface LolTftPassLoginSession {
	state: LolTftPassLoginSessionStates
	/** @format uint64 */
	summonerId: number
	/** @format uint64 */
	accountId: number
	idToken: string
	puuid: string
}

export type LolTftPassLoginSessionStates = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"

export interface LolTftPassLoyaltyRewards {
	/** @format int32 */
	freeRewardedChampionsCount: number
	championIds: number[]
	/** @format int32 */
	freeRewardedSkinsCount: number
	skinIds: number[]
	/** @format int32 */
	ipBoost: number
	xpBoost: Record<string, number>
	/** @format int32 */
	loyaltyTFTMapSkinCount: number
	/** @format int32 */
	loyaltyTFTCompanionCount: number
	/** @format int32 */
	loyaltyTFTDamageSkinCount: number
	loyaltySources: Record<string, boolean>
}

export interface LolTftPassLoyaltyRewardsSimplified {
	/** @format int32 */
	freeRewardedChampionsCount: number
	championIds: number[]
	/** @format int32 */
	freeRewardedSkinsCount: number
	skinIds: number[]
	/** @format int32 */
	ipBoost: number
	/** @format int32 */
	xpBoost: number
	/** @format int32 */
	loyaltyTFTMapSkinCount: number
	/** @format int32 */
	loyaltyTFTCompanionCount: number
	/** @format int32 */
	loyaltyTFTDamageSkinCount: number
	loyaltySources: Record<string, boolean>
}

export type LolTftPassLoyaltyStatus = "DISABLED" | "REVOKE" | "CHANGE" | "EXPIRY" | "REWARDS_GRANT" | "LEGACY"

export interface LolTftPassLoyaltyStatusNotification {
	status: LolTftPassLoyaltyStatus
	rewards: LolTftPassLoyaltyRewardsSimplified
	reloadInventory: boolean
}

export interface LolTftPassMilestone {
	id: string
	name: string
	groupId: string
	counterId: string
	/** @format int64 */
	triggerValue: number
	properties: Record<string, string>
}

export interface LolTftPassMilestoneInstance {
	milestoneId: string
	instanceId: string
	ownerId: string
	productId: string
	groupId: string
	counterId: string
	/** @format int64 */
	triggerValue: number
	/** @format uint32 */
	repeatSequence: number
	triggered: boolean
	triggeredTimestamp: string
	triggers: LolTftPassTrigger[]
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
	rewardId: string
	rewardInstanceId: string
	status: string
}

export interface LolTftPassRepeat {
	/** @format int32 */
	count: number
	/** @format uint32 */
	scope: number
	/** @format float */
	multiplier: number
	milestones: LolTftPassMilestone[]
	repeatTriggers: LolTftPassRepeatGroupTrigger[]
}

export interface LolTftPassRepeatGroupTrigger {
	type: string
	counterId: string
	/** @format uint16 */
	startTriggerValue: number
	/** @format uint16 */
	increaseBy: number
	/** @format float */
	multiplier: number
}

export interface LolTftPassRiotMessagingServiceMessage {
	resource: string
	service: string
	version: string
	/** @format int64 */
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
	items: LolTftPassRmsStoreEntitlementItem[]
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
	data: LolTftPassSimpleInventoryDTO
}

export interface LolTftPassSummonerIcon {
	/** @format int32 */
	itemId: number
}

export interface LolTftPassTFTPassAsset {
	internalName: string
	iconTexturePath: string
	iconNeedsFrame: boolean
}

export interface LolTftPassTFTPassClientConfig {
	enabled: boolean
	battlePassId: string
	eventPassId: string
	dailyLoginPassId: string
}

export interface LolTftPassTFTPassDTO {
	id: string
	counterID: string
	productID: string
	playerID: string
	title: string
	premiumTitle: string
	description: string
	/** @format int64 */
	activiationTimeMS: number
	/** @format int64 */
	deactivationTimeMS: number
	assetID: string
	/** @format int32 */
	currentLevel: number
	/** @format int32 */
	totalPointsEarned: number
	premiumEntitlementID: string
	storePurchaseIDs: Record<string, string>
	milestones: LolTftPassTFTPassMilestoneDTO[]
	status: string
}

export interface LolTftPassTFTPassMilestoneDTO {
	id: string
	title: string
	description: string
	assetInternalName: string
	keystone: boolean
	bonus: boolean
	/** @format int32 */
	level: number
	/** @format int32 */
	pointsNeededForMilestone: number
	/** @format int32 */
	totalPointsNeededForMilestone: number
	/** @format int32 */
	pointsEarnedForMilestone: number
	status: string
	rewards: LolTftPassTFTPassRewardDTO[]
}

export interface LolTftPassTFTPassRewardDTO {
	title: string
	description: string
	assetInternalName: string
	premium: boolean
}

export interface LolTftPassTFTPassRewardNotification {
	title: string
	description: string
	iconURL: string
	framedIcon: boolean
}

export interface LolTftPassTftPaidBattlepass {
	/** @format int32 */
	totalPointsEarned: number
	milestones: LolTftPassTftPaidBattlepassMilestone[]
	bonuses: LolTftPassTftPaidBattlepassMilestone[]
	activeMilestone: LolTftPassTftPaidBattlepassMilestone
	info: LolTftPassTftPaidBattlepassInfo
	/** @format int32 */
	lastViewedProgress: number
	lastViewedMilestone: LolTftPassTftPaidBattlepassMilestone
	progressMissionId: string
	/** @format int32 */
	currentLevel: number
}

export interface LolTftPassTftPaidBattlepassInfo {
	title: string
	description: string
	/** @format uint64 */
	startDate: number
	/** @format uint64 */
	endDate: number
	premium: boolean
	premiumTitle: string
	premiumEntitlementId: string
	pcPurchaseRequirement: string
	passId: string
	media: Record<string, string>
}

export interface LolTftPassTftPaidBattlepassMilestone {
	missionId: string
	internalName: string
	title: string
	description: string
	state: string
	status: string
	/** @format int32 */
	pointsNeededForMilestone: number
	/** @format int32 */
	pointsEarnedForMilestone: number
	/** @format int32 */
	totalPointsForMilestone: number
	/** @format int32 */
	level: number
	iconImageUrl: string
	iconNeedsFrame: boolean
	rewards: LolTftPassTftPaidBattlepassReward[]
	isPaid: boolean
	isLocked: boolean
	isKeystone: boolean
	isBonus: boolean
	isClaimRequestPending: boolean
}

export interface LolTftPassTftPaidBattlepassReward {
	rewardGroup: string
	description: string
	iconUrl: string
	iconNeedsFrame: boolean
}

export interface LolTftPassTrigger {
	type: string
	counterId: string
	/** @format uint64 */
	triggerValue: number
}

export interface LolTftPassWallet {
	/** @format int64 */
	ip: number
	/** @format int64 */
	rp: number
}

export interface LolTftPassWalletCacheEntry {
	signedBalancesJwt: string
	/** @format uint64 */
	expirationMS: number
	/** @format uint64 */
	issuedAtMS: number
	/** @format uint64 */
	receivedAtMS: number
	valid: boolean
}

export interface LolTftPassWalletDTO {
	puuid: string
	/** @format int64 */
	accountId: number
	expires: string
	balances: Record<string, number>
	balancesJwt: string
}

export interface LolTftPassWalletResponseDTO {
	data: LolTftPassWalletDTO
}

export interface LolTftPassXboxSubscriptionStatus {
	active: string
	subscriptionId: string
}

export interface LolTftPublishingSettings {
	publishingLocale: string
}

export interface LolTftQueue {
	/** @format int32 */
	id: number
	/** @format int32 */
	mapId: number
	gameMode: string
	category: LolTftQueueGameCategory
}

export type LolTftQueueGameCategory = "Alpha" | "VersusAi" | "PvP" | "Custom" | "None"

export interface LolTftSettingsResource {
	data: unknown
}

export interface LolTftTeamPlannerChampion {
	championId: string
}

export interface LolTftTeamPlannerGameDataTFTSets {
	LCTFTModeData: LolTftTeamPlannerTFTModeData
}

export interface LolTftTeamPlannerGameflowGameData {
	queue: LolTftTeamPlannerQueue
}

export type LolTftTeamPlannerGameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"

export interface LolTftTeamPlannerGameflowSession {
	phase: LolTftTeamPlannerGameflowPhase
	gameData: LolTftTeamPlannerGameflowGameData
}

export interface LolTftTeamPlannerQueue {
	gameMode: string
}

export interface LolTftTeamPlannerSettingsStorageContainer {
	data: LolTftTeamPlannerTeamSettings
	/** @format uint32 */
	schemaVersion: number
}

export interface LolTftTeamPlannerTFTMapSetData {
	SetCoreName: string
}

export interface LolTftTeamPlannerTFTModeData {
	mDefaultSet: LolTftTeamPlannerTFTMapSetData
}

export interface LolTftTeamPlannerTFTTeamPlannerConfig {
	enabled: boolean
	multipleSetsEnabled: boolean
}

export interface LolTftTeamPlannerTeamPlan {
	champions: LolTftTeamPlannerChampion[]
	setName: string
}

export interface LolTftTeamPlannerTeamSettings {
	teams: LolTftTeamPlannerTeamPlan[]
	remindersEnabled: boolean
	/** @format uint64 */
	registeredTeamIndex: number
	hasViewedTeamPlanner: boolean
}

export interface LolTftTeamPlannerTeamsForSet {
	teams: LolTftTeamPlannerTeamPlan[]
	/** @format uint64 */
	registeredTeamIndex: number
}

export interface LolTftTrovesCapCounterBalanceDto {
	/** @format int32 */
	amount: number
	/** @format int32 */
	version: number
	active: boolean
}

export interface LolTftTrovesCapDropsDropTableDisplayMetadata {
	isCollectorsBounty: boolean
	dataAssetId: string
	nameTraKey: string
	mythicOfferId: string
	progressionId: string
	/** @format uint8 */
	priority: number
	tables: Record<string, LolTftTrovesOddsTableDisplayMetadata>
	/** @format uint8 */
	version: number
	chaseContentId: string
	oddsTree: LolTftTrovesDropsOddsTreeNodeDTO
}

export interface LolTftTrovesCapOrdersRequestDTO {
	data: unknown
	meta: LolTftTrovesCapOrdersRequestMetaDTO
}

export interface LolTftTrovesCapOrdersRequestMetaDTO {
	correlationId: string
	jwt: string
	xid: string
}

export interface LolTftTrovesCapOrdersResponseDTO {
	data: unknown
}

export interface LolTftTrovesCounter {
	id: string
	name: string
	groupId: string
	direction: string
	/** @format int64 */
	startValue: number
}

export interface LolTftTrovesCounterInstance {
	ownerId: string
	productId: string
	groupId: string
	counterId: string
	/** @format int64 */
	counterValue: number
}

export interface LolTftTrovesCounterNotificationResource {
	balances: Record<string, LolTftTrovesCapCounterBalanceDto>
	deltas: Record<string, LolTftTrovesCapCounterBalanceDto>
}

export interface LolTftTrovesDropCounterDTO {
	dropTableId: string
	/** @format uint16 */
	count: number
}

export interface LolTftTrovesDropsDropTablePityInfo {
	/** @format int32 */
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
	/** @format int32 */
	cost: number
	totalRollsInfo: LolTftTrovesTotalRollsInfoDTO
	pityInfo: LolTftTrovesDropsDropTablePityInfo
	displayMetadata: LolTftTrovesCapDropsDropTableDisplayMetadata
}

export interface LolTftTrovesDropsOddsListEntryDTO {
	contentId: string
	nodeId: string
}

export interface LolTftTrovesDropsOddsTreeNodeDTO {
	nodeId: string
	/** @format float */
	odds: number
	children: LolTftTrovesDropsOddsTreeNodeDTO[]
	/** @format uint16 */
	quantity: number
	nameTraKey: string
	/** @format uint8 */
	priority: number
}

export interface LolTftTrovesEntitlementNotificationResource {
	itemId: string
	itemTypeId: string
	entitlementTypeId: string
	resourceOperation: string
}

export interface LolTftTrovesEntityInstance {
	groupId: string
	counters: LolTftTrovesCounterInstance[]
	milestones: LolTftTrovesMilestoneInstance[]
}

export interface LolTftTrovesGameDataTFTContent {
	name: string
	nameTraKey: string
}

export interface LolTftTrovesGameDataTrovesBanner {
	id: string
	activationTime: string
	deactivationTime: string
	pityCounterId: string
	mythicTokenOfferId: string
	/** @format uint32 */
	pityThreshold: number
	bannerTexture: string
	thumbnailTexture: string
	backgroundTexture: string
	platformTexture: string
	eventHubBannerTexture: string
	name: string
	description: string
	isCollectorBounty: boolean
	celebrationTheme: LolTftTrovesTrovesCelebrationThemeData
	rootTable: LolTftTrovesGameDataTrovesBannerTable
	chaseTable: LolTftTrovesGameDataTrovesBannerTable
}

export interface LolTftTrovesGameDataTrovesBannerReward {
	itemInstanceId: string
	itemTypeId: string
	/** @format uint32 */
	starLevel: number
	name: string
	/** @format uint32 */
	quantity: number
	rarity: LolTftTrovesLootRarity
	currencyId: string
	rewardTexturePath: string
	highlightRewardAssetPath: string
}

export interface LolTftTrovesGameDataTrovesBannerTable {
	id: string
	key: string
	name: string
	loadoutsItem?: LolTftTrovesLoadoutsItem
	children?: LolTftTrovesGameDataTrovesBannerTableEntry[]
	/** @format uint32 */
	priority: number
}

export interface LolTftTrovesGameDataTrovesBannerTableEntry {
	bannerNode: LolTftTrovesGameDataTrovesBannerTable
}

export interface LolTftTrovesGroup {
	id: string
	productId: string
	name: string
	repeat: LolTftTrovesRepeat
	counters: LolTftTrovesCounter[]
	milestones: LolTftTrovesMilestone[]
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
	/** @format uint32 */
	starLevel: number
}

export interface LolTftTrovesLoginSession {
	state: LolTftTrovesLoginSessionStates
	/** @format uint64 */
	summonerId: number
	/** @format uint64 */
	accountId: number
	idToken: string
	puuid: string
}

export type LolTftTrovesLoginSessionStates = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"

export interface LolTftTrovesLootOddsResponse {
	lootId: string
	parentId: string
	/** @format double */
	dropRate: number
	/** @format int32 */
	quantity: number
	label: string
	query: string
	/** @format int32 */
	displayPriority: number
	children: LolTftTrovesLootOddsResponse[]
}

export type LolTftTrovesLootRarity = "Ultimate" | "Mythic" | "Legendary" | "Epic" | "Default"

export interface LolTftTrovesMilestone {
	id: string
	name: string
	groupId: string
	counterId: string
	/** @format int64 */
	triggerValue: number
	properties: Record<string, string>
}

export interface LolTftTrovesMilestoneInstance {
	milestoneId: string
	instanceId: string
	ownerId: string
	productId: string
	groupId: string
	counterId: string
	/** @format int64 */
	triggerValue: number
	/** @format uint32 */
	repeatSequence: number
	triggered: boolean
	triggeredTimestamp: string
	triggers: LolTftTrovesTrigger[]
}

export interface LolTftTrovesOddsTableDisplayMetadata {
	nameTraKey: string
	/** @format uint8 */
	priority: number
}

export interface LolTftTrovesOrderNotificationResource {
	eventTypeId: string
	eventType: string
	status: string
}

export interface LolTftTrovesPityCounterDTO {
	dropTableId: string
	/** @format uint8 */
	count: number
}

export interface LolTftTrovesPlayerLoot {
	lootName: string
	localizedName: string
	itemDesc: string
}

export interface LolTftTrovesRepeat {
	/** @format int32 */
	count: number
	/** @format uint32 */
	scope: number
	/** @format float */
	multiplier: number
	milestones: LolTftTrovesMilestone[]
	repeatTriggers: LolTftTrovesRepeatGroupTrigger[]
}

export interface LolTftTrovesRepeatGroupTrigger {
	type: string
	counterId: string
	/** @format uint16 */
	startTriggerValue: number
	/** @format uint16 */
	increaseBy: number
	/** @format float */
	multiplier: number
}

export interface LolTftTrovesRewardsNotificationResource {
	purchaserId: string
	recipientId: string
	transactionId: string
	rewardId: string
	rewardInstanceId: string
	status: string
}

export interface LolTftTrovesRiotMessagingServiceMessage {
	resource: string
	service: string
	version: string
	/** @format int64 */
	timestamp: number
	payload: string
}

export interface LolTftTrovesTotalRollsInfoDTO {
	totalRollsCounterId: string
	/** @format uint16 */
	maxTotalRolls: number
}

export interface LolTftTrovesTrigger {
	type: string
	counterId: string
	/** @format uint64 */
	triggerValue: number
}

export interface LolTftTrovesTrovePurchaseResponse {
	orderId: string
	status: string
	/** @format uint32 */
	errorCode: number
	data: unknown
}

export interface LolTftTrovesTroves {
	enabled: boolean
	useDisplayMetadata: boolean
	"v2Enabled": boolean
	bannerList?: LolTftTrovesTrovesActiveBanner[]
}

export interface LolTftTrovesTrovesActiveBanner {
	id: string
	/** @format uint8 */
	version: number
}

export interface LolTftTrovesTrovesBanner {
	id: string
	/** @format uint8 */
	version: number
	sourceId: string
	startDate: string
	endDate: string
	/** @format uint32 */
	pityLimit: number
	rollOffer: string
	mythicOffer: string
	bannerTexture: string
	thumbnailTexture: string
	backgroundTexture: string
	platformTexture: string
	eventHubBannerTexture: string
	name: string
	description: string
	pityCounterId: string
	isCollectorBounty: boolean
	/** @format uint32 */
	maxTotalRolls: number
	/** @format uint32 */
	pullCost: number
	chaseContentId: string
	celebrationTheme: LolTftTrovesTrovesCelebrationThemeData
	status: LolTftTrovesTrovesStatus
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
	/** @format float */
	FirstItemTimingOffset: number
	/** @format float */
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
	/** @format float */
	PCRewardFadeInDuration: number
	/** @format float */
	PCRewardFadeInDelay: number
	/** @format float */
	PCThumbnailFadeInDuration: number
	/** @format float */
	PCThumbnailFadeInDelay: number
	PCRewardSheenPath: string
	/** @format float */
	PCRewardSheenDuration: number
	/** @format float */
	PCRewardSheenDelay: number
	PCGlintSprite: LolTftTrovesTrovesPCSpriteAnimation
	PCLegendarySparkSprite: LolTftTrovesTrovesPCSpriteAnimation
	PCLegendaryHitSprite: LolTftTrovesTrovesPCSpriteAnimation
}

export interface LolTftTrovesTrovesCelebrationThemeData {
	currencySegmentData: LolTftTrovesTrovesCelebrationCurrencySegmentData
	portalSegmentData: LolTftTrovesTrovesCelebrationPortalSegmentData
	highlightSegmentData: LolTftTrovesTrovesCelebrationHighlightSegmentData
	standardSegmentData: LolTftTrovesTrovesCelebrationStandardSegmentData
}

export interface LolTftTrovesTrovesMilestone {
	milestoneId: string
	currencyId: string
	/** @format uint32 */
	currencyAmount: number
	instanceId: string
	/** @format uint64 */
	triggerValue: number
	/** @format uint32 */
	repeatSequence: number
	triggeredTimestamp: string
	triggered: boolean
	name: string
	iconURL: string
	/** @format uint16 */
	resetValue: number
}

export interface LolTftTrovesTrovesMilestoneCounter {
	counterId: string
	/** @format uint64 */
	counterValue: number
	/** @format uint16 */
	startTriggerValue: number
	/** @format uint16 */
	increaseBy: number
	/** @format float */
	multiplier: number
	/** @format uint16 */
	resetValue: number
}

export interface LolTftTrovesTrovesMilestones {
	groupId: string
	name: string
	milestones: LolTftTrovesTrovesMilestone[]
	counter: LolTftTrovesTrovesMilestoneCounter
}

export interface LolTftTrovesTrovesPCSpriteAnimation {
	spritesheetPath: string
	/** @format float */
	duration: number
	/** @format float */
	delay: number
	/** @format uint32 */
	numRows: number
	/** @format uint32 */
	numCols: number
	/** @format uint32 */
	numFrames: number
	/** @format uint32 */
	startFrame: number
	/** @format uint32 */
	fps: number
	/** @format int32 */
	maxPlayCount: number
	playAtInsert: boolean
}

export interface LolTftTrovesTrovesPurchaseRequest {
	offerId: string
	/** @format uint32 */
	quantity: number
	paymentOption: string
}

export interface LolTftTrovesTrovesReward {
	name: string
	itemId: string
	itemTypeId: string
	/** @format uint32 */
	quantity: number
	rarity: LolTftTrovesLootRarity
	rewardTexturePath: string
	highlightRewardAssetPath: string
	/** @format uint32 */
	starLevel: number
}

export interface LolTftTrovesTrovesRewards {
	highlight: LolTftTrovesTrovesReward[]
	standard: LolTftTrovesTrovesReward[]
}

export interface LolTftTrovesTrovesRewardsResponse {
	orderId: string
	/** @format uint8 */
	pullType: number
	rewards: LolTftTrovesTrovesRewards
}

export interface LolTftTrovesTrovesRollRequest {
	offerId: string
	/** @format uint32 */
	numberOfRolls: number
	isMythic: boolean
	dropTableId: string
}

export interface LolTftTrovesTrovesStatus {
	owned: boolean
	/** @format uint32 */
	availableContents: number
	/** @format uint8 */
	pityCount: number
	dropTableId: string
	hasPullError: boolean
	/** @format uint16 */
	totalRollsCount: number
	isCollectorBountyMaxRollsMet: boolean
}

export interface LolTftTrovesTrovesTable {
	nameTraKey: string
	translatedName: string
}

export interface LolTftTrovesVerboseLootOddsResponse {
	recipeName: string
	chanceToContain: LolTftTrovesLootOddsResponse[]
	guaranteedToContain: LolTftTrovesLootOddsResponse[]
	lootItem: LolTftTrovesPlayerLoot
	hasPityRules: boolean
	checksOwnership: boolean
}

export interface LolTrophiesCapClashTrophyEntitlementPayload {
	rewardSpec: LolTrophiesClashV2TrophyRewardSpec
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
	TOURNAMENT_TROPHY: LolTrophiesTournamentTrophyInventoryItem[]
}

export interface LolTrophiesInventoryResponse {
	items: LolTrophiesInventoryItemsByType
}

export interface LolTrophiesLoadout {
	id: string
	name: string
	scope: string
	loadout: Record<string, LolTrophiesLoadoutItem>
}

export interface LolTrophiesLoadoutItem {
	/** @format int32 */
	itemId: number
	inventoryType: string
	data: Record<string, string>
}

export interface LolTrophiesOtherPlayerTrophyInventoryItem {
	uuid: string
	/** @format int32 */
	itemId: number
	inventoryType: string
	purchaseDate: string
	payload: LolTrophiesCapClashTrophyEntitlementPayload
}

export interface LolTrophiesTournamentTrophyInventoryItem {
	payload: LolTrophiesCapClashTrophyEntitlementPayload
	purchaseDate: string
}

export interface LolTrophiesTrophyProfileData {
	theme: string
	/** @format int64 */
	tier: number
	/** @format int64 */
	bracket: number
	/** @format int64 */
	seasonId: number
	pedestal: string
	cup: string
	gem: string
}

export type LolUserExperienceGameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"

export interface LolUserExperienceGameflowSession {
	phase: LolUserExperienceGameflowPhase
}

export type LolVanguardGameflowPhase = "TerminatedInError" | "EndOfGame" | "PreEndOfGame" | "WaitingForStats" | "Reconnect" | "InProgress" | "FailedToLaunch" | "GameStart" | "ChampSelect" | "ReadyCheck" | "CheckedIntoTournament" | "Matchmaking" | "Lobby" | "None"

export interface LolVanguardGameflowSession {
	phase: LolVanguardGameflowPhase
}

export interface LolVanguardLoginSession {
	state: LolVanguardLoginSessionState
	/** @format uint64 */
	summonerId: number
	/** @format uint64 */
	accountId: number
	puuid: string
}

export type LolVanguardLoginSessionState = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"

export interface LolVanguardVanguardMachineSpecs {
	"tpm2Enabled": boolean
	secureBootEnabled: boolean
}

export interface LolVanguardVanguardSession {
	state: LolVanguardVanguardSessionState
	/** @format int32 */
	vanguardStatus: number
}

export type LolVanguardVanguardSessionState = "ERROR" | "CONNECTED" | "IN_PROGRESS"

export interface LolVanguardVanguardSystemCheckTelemetryEvent {
	passedOsCheck: boolean
	passedSecureFeaturesCheck: boolean
}

export interface LolYourshopAccessTokenResource {
	token: string
	scopes: string[]
	/** @format uint64 */
	expiry: number
}

export interface LolYourshopCatalogItem {
	/** @format int32 */
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
	/** @format int32 */
	amount: number
	subCurrencies: Record<string, number>
}

export interface LolYourshopEndOfGameXp {
	/** @format uint32 */
	PER_WIN: number
}

export interface LolYourshopEndOfGameXpNotification {
	xp: LolYourshopEndOfGameXp
}

export interface LolYourshopInventoryCacheEntry {
	signedInventoryJwt: string
	/** @format uint64 */
	expirationMS: number
	/** @format uint64 */
	issuedAtMS: number
	/** @format uint64 */
	receivedAtMS: number
	valid: boolean
}

export interface LolYourshopInventoryDTO {
	puuid: string
	/** @format uint64 */
	accountId: number
	/** @format uint64 */
	summonerId: number
	items: Record<string, unknown>
	expires: string
	itemsJwt: string
}

export interface LolYourshopInventoryItem {
	uuid: string
	/** @format int32 */
	itemId: number
	inventoryType: string
	purchaseDate: string
	/** @format uint64 */
	quantity: number
	ownershipType: LolYourshopItemOwnershipType
	expirationDate: string
	/** @format uint64 */
	wins: number
}

export interface LolYourshopInventoryItemDTO {
	/** @format int32 */
	itemId: number
	inventoryType: string
	expirationDate: string
	purchaseDate: string
	/** @format uint64 */
	quantity: number
	/** @format uint64 */
	ownedQuantity: number
	usedInGameDate: string
	entitlementId: string
	entitlementTypeId: string
	instanceId: string
	instanceTypeId: string
	payload: unknown
	"f2p": boolean
	rental: boolean
	loyalty: boolean
	loyaltySources: string[]
	lsb: boolean
	/** @format uint64 */
	wins: number
}

export interface LolYourshopInventoryItemWithPayload {
	uuid: string
	/** @format int32 */
	itemId: number
	inventoryType: string
	purchaseDate: string
	/** @format uint64 */
	quantity: number
	ownershipType: LolYourshopItemOwnershipType
	expirationDate: string
	"f2p": boolean
	rental: boolean
	loyalty: boolean
	loyaltySources: string[]
	owned: boolean
	/** @format uint64 */
	wins: number
	payload: unknown
}

export interface LolYourshopInventoryNotification {
	/** @format int64 */
	id: number
	/** @format int32 */
	itemId: number
	inventoryType: string
	type: string
	acknowledged: boolean
}

export interface LolYourshopInventoryResponseDTO {
	data: LolYourshopInventoryDTO
}

export interface LolYourshopItemKey {
	inventoryType: string
	/** @format int32 */
	itemId: number
}

export type LolYourshopItemOwnershipType = "F2P" | "LOYALTY" | "RENTED" | "OWNED"

export interface LolYourshopLoginSession {
	state: LolYourshopLoginSessionStates
	/** @format uint64 */
	summonerId: number
	/** @format uint64 */
	accountId: number
	idToken: string
	puuid: string
}

export type LolYourshopLoginSessionStates = "ERROR" | "LOGGING_OUT" | "SUCCEEDED" | "IN_PROGRESS"

export interface LolYourshopLoyaltyRewards {
	/** @format int32 */
	freeRewardedChampionsCount: number
	championIds: number[]
	/** @format int32 */
	freeRewardedSkinsCount: number
	skinIds: number[]
	/** @format int32 */
	ipBoost: number
	xpBoost: Record<string, number>
	/** @format int32 */
	loyaltyTFTMapSkinCount: number
	/** @format int32 */
	loyaltyTFTCompanionCount: number
	/** @format int32 */
	loyaltyTFTDamageSkinCount: number
	loyaltySources: Record<string, boolean>
}

export interface LolYourshopLoyaltyRewardsSimplified {
	/** @format int32 */
	freeRewardedChampionsCount: number
	championIds: number[]
	/** @format int32 */
	freeRewardedSkinsCount: number
	skinIds: number[]
	/** @format int32 */
	ipBoost: number
	/** @format int32 */
	xpBoost: number
	/** @format int32 */
	loyaltyTFTMapSkinCount: number
	/** @format int32 */
	loyaltyTFTCompanionCount: number
	/** @format int32 */
	loyaltyTFTDamageSkinCount: number
	loyaltySources: Record<string, boolean>
}

export type LolYourshopLoyaltyStatus = "DISABLED" | "REVOKE" | "CHANGE" | "EXPIRY" | "REWARDS_GRANT" | "LEGACY"

export interface LolYourshopLoyaltyStatusNotification {
	status: LolYourshopLoyaltyStatus
	rewards: LolYourshopLoyaltyRewardsSimplified
	reloadInventory: boolean
}

export interface LolYourshopOffer {
	offerId: string
	inventoryType: string
	/** @format int32 */
	itemId: number
	/** @format int64 */
	originalPrice: number
	/** @format int64 */
	discountPrice: number
	name: string
	owned: boolean
	revealed: boolean
	expirationDate: string
	/** @format uint32 */
	spotIndex: number
}

export interface LolYourshopOfferData {
	offers: LolYourshopOffer[]
	promotion: LolYourshopPromotion
}

export interface LolYourshopOfferId {
	offerId: string
}

export interface LolYourshopOfferIds {
	offers: LolYourshopOfferId[]
}

export interface LolYourshopOfferRequest {
	offerId: string
}

export interface LolYourshopOfferRequests {
	offers: LolYourshopOfferRequest[]
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
	/** @format int32 */
	itemId: number
	/** @format int64 */
	pricePaid: number
	orderId: string
}

export type LolYourshopPurchaseOfferOrderStates = "SUCCESS" | "FAIL" | "IN_PROGRESS" | "NOT_STARTED"

export interface LolYourshopPurchaseOfferOrderStatus {
	orderState: LolYourshopPurchaseOfferOrderStates
	message: string
}

export interface LolYourshopPurchaseOfferOrderStatuses {
	statuses: Record<string, LolYourshopPurchaseOfferOrderStatus>
}

export interface LolYourshopPurchaseResponse {
	items: LolYourshopPurchaseItem[]
	wallet: LolYourshopWallet
}

export interface LolYourshopRiotMessagingServiceMessage {
	resource: string
	service: string
	version: string
	/** @format int64 */
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
	items: LolYourshopRmsStoreEntitlementItem[]
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
	data: LolYourshopSimpleInventoryDTO
}

export interface LolYourshopSummonerIcon {
	/** @format int32 */
	itemId: number
}

export interface LolYourshopUIOffer {
	id: string
	/** @format int64 */
	originalPrice: number
	/** @format int64 */
	discountPrice: number
	type: string
	skinName: string
	/** @format int32 */
	championId: number
	/** @format int32 */
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
	/** @format int64 */
	rp: number
}

export interface LolYourshopWalletCacheEntry {
	signedBalancesJwt: string
	/** @format uint64 */
	expirationMS: number
	/** @format uint64 */
	issuedAtMS: number
	/** @format uint64 */
	receivedAtMS: number
	valid: boolean
}

export interface LolYourshopWalletDTO {
	puuid: string
	/** @format int64 */
	accountId: number
	expires: string
	balances: Record<string, number>
	balancesJwt: string
}

export interface LolYourshopWalletResponseDTO {
	data: LolYourshopWalletDTO
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
	/** @format int32 */
	value: number
	/** @format int32 */
	storeItemId: number
	upgradeLootName: string
	/** @format int64 */
	expiryTime: number
	tags: string
	displayCategories: string
	/** @format int64 */
	rentalSeconds: number
	/** @format int32 */
	rentalGames: number
}

export interface LootItemListClientDTO {
	lootItems: LootItemClientDTO[]
	/** @format int64 */
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
	slots: LootLcdsRecipeSlotClientDTO[]
	outputs: LootLcdsRecipeOutputDTO[]
	metadata: LootLcdsRecipeMetadata
	singleOpen: boolean
}

export interface LootLcdsRecipeListClientDTO {
	recipes: LootLcdsRecipeClientDTO[]
	/** @format int64 */
	lastUpdate: number
}

export interface LootLcdsRecipeMetadata {
	guaranteedDescriptions: LootLcdsLootDescriptionDTO[]
	bonusDescriptions: LootLcdsLootDescriptionDTO[]
	tooltipsDisabled: boolean
}

export interface LootLcdsRecipeOutputDTO {
	lootName: string
	quantityExpression: string
	/** @format double */
	probability: number
	allowDuplicates: boolean
}

export interface LootLcdsRecipeSlotClientDTO {
	/** @format int32 */
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
	/** @format double */
	dropRate: number
	/** @format int32 */
	quantity: number
	label: string
	/** @format int32 */
	lootOrder: number
	children: LootOddsDTO[]
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
	/** @format uint64 */
	accountId: number
	msgId: string
	command: string
}

export interface MassCraftLootDTO {
	clientId: string
	transactionId: string
	lootItems: CraftLootDTO[]
}

export interface MatchedPlayerDTO {
	rosterId: string
	captain: PlayerInfoDTO
	players: PlayerInfoDTO[]
}

export interface MatchmakingLcdsBustedLeaver {
	summoner: MatchmakingLcdsSummoner
	reasonFailed: string
	accessToken: string
	/** @format uint64 */
	leaverPenaltyMillisRemaining: number
}

export interface MatchmakingLcdsFailedJoinPlayer {
	summoner: MatchmakingLcdsSummoner
	reasonFailed: string
}

export interface MatchmakingLcdsGameDTO {
	gameState: string
	statusOfParticipants: string
	terminatedCondition: string
	teamOne: MatchmakingLcdsPlayerParticipant[]
	teamTwo: MatchmakingLcdsPlayerParticipant[]
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
	/** @format uint64 */
	teamId: number
}

export interface MatchmakingLcdsMatchMakerPayload {
	LEAVER_BUSTER_ACCESS_TOKEN: string
}

export interface MatchmakingLcdsPlayerParticipant {
	/** @format uint64 */
	summonerId: number
}

export interface MatchmakingLcdsQueueDisabled {
	summoner: MatchmakingLcdsSummoner
	reasonFailed: string
	/** @format int32 */
	queueId: number
	message: string
}

export interface MatchmakingLcdsQueueDodger {
	summoner: MatchmakingLcdsSummoner
	reasonFailed: string
	/** @format uint64 */
	dodgePenaltyRemainingTime: number
}

export interface MatchmakingLcdsQueueInfo {
	/** @format int32 */
	queueId: number
	/** @format uint64 */
	waitTime: number
}

export interface MatchmakingLcdsQueueRestricted {
	summoner: MatchmakingLcdsSummoner
	reasonFailed: string
	/** @format int32 */
	queueId: number
	message: string
}

export interface MatchmakingLcdsQueueThrottled {
	summoner: MatchmakingLcdsSummoner
	reasonFailed: string
	/** @format int32 */
	queueId: number
	message: string
}

export interface MatchmakingLcdsSearchingForMatchNotification {
	joinedQueues: MatchmakingLcdsQueueInfo[]
	playerJoinFailures: unknown[]
}

export interface MatchmakingLcdsSummoner {
	/** @format uint64 */
	sumId: number
	name: string
}

export interface MemberBanUnbanTournament {
	/** @format int64 */
	tournamentId: number
	tournamentnameLocKey: string
	tournamentnameLocKeySecondary: string
	/** @format int64 */
	tournamentPhaseLockInTime: number
}

export type MetricDataType = "string" | "bool" | "float" | "uint" | "int" | "unknown"

export interface MetricMetadata {
	/** @format uint32 */
	sample_window_ms: number
	type: MetricType
	data_type: MetricDataType
	alerts: MetricMetadataAlert[]
	notify: MetricMetadataNotify
	units: string
	pretty_name: string
	category: string
	description: string
	destination: string
	info: string
	transientAggregation: AggregationType
	priority: MetricPriority
	/** @format uint32 */
	period: number
}

export interface MetricMetadataAlert {
	level: string
	/** @format double */
	min: number
	/** @format double */
	max: number
	notify: MetricMetadataNotify
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
	hipchat: MetricMetadataHipchatNotification[]
	pagerduty: MetricMetadataPagerDutyNotification[]
}

export interface MetricMetadataPagerDutyNotification {
	apikey: string
}

export type MetricPriority = "high" | "medium" | "low"

export type MetricType = "rate" | "duration" | "count" | "percentage" | "unknown"

export interface MissionAlertDTO {
	type: string
	message: string
	/** @format int64 */
	alertTime: number
}

export interface MissionDisplay {
	attributes: string[]
	locations: string[]
}

export interface MissionMetadata {
	tutorial: TutorialMetadata
	npeRewardPack: NpeRewardPackMetadata
	missionType: string
	/** @format int32 */
	level: number
	/** @format int32 */
	weekNum: number
	/** @format int32 */
	xpReward: number
	/** @format int32 */
	chain: number
	/** @format int32 */
	order: number
	/** @format int32 */
	chainSize: number
}

export interface MissionProgressDTO {
	/** @format int32 */
	lastViewedProgress: number
	/** @format int32 */
	currentProgress: number
	/** @format int32 */
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
	/** @format uint64 */
	gameId: number
	status: ReplayResponseStatus
	metadata: ReplayMetadataV2
}

export interface MultipleReplayMetadataResponseV2 {
	metadataResponses: MultipleReplayMetadataResponseItemV2[]
}

export interface NonTimingEventV1 {
	/** @format uint64 */
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
	/** @format int32 */
	index: number
	premiumReward: boolean
	rewardKey: string
	majorReward: NpeReward
	minorRewards: NpeReward[]
}

export interface OpenedTeamDTO {
	name: string
	shortName: string
	/** @format int32 */
	logo: number
	/** @format int32 */
	logoColor: number
	invitationId: string
	/** @format uint64 */
	captainId: number
	/** @format int32 */
	tier: number
	members: OpenedTeamMemberDTO[]
	invitees: PendingRosterInviteeDTO[]
	openPositions: Position[]
}

export interface OpenedTeamMemberDTO {
	/** @format int64 */
	playerId: number
	position: Position
	/** @format int32 */
	tier: number
	/** @format int32 */
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
	total: PatcherComponentStateProgress
	network: PatcherComponentStateProgress
	primaryWork: PatcherComponentStateWorkType
}

export interface PatcherComponentState {
	id: string
	action: PatcherComponentStateAction
	isUpToDate: boolean
	isUpdateAvailable: boolean
	"timeOfLastUpToDateCheckISO8601"?: string
	isCorrupted: boolean
	progress?: PatcherComponentActionProgress
}

export type PatcherComponentStateAction = "Migrating" | "Repairing" | "Patching" | "CheckingForUpdates" | "Idle"

export interface PatcherComponentStateProgress {
	/** @format uint64 */
	bytesComplete: number
	/** @format uint64 */
	bytesRequired: number
	/** @format double */
	bytesPerSecond: number
}

export type PatcherComponentStateWorkType = "Disk" | "Network" | "Scanning"

export interface PatcherNotification {
	id: string
	notificationId: PatcherNotificationId
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
	action: PatcherComponentStateAction
	isUpToDate: boolean
	isUpdateAvailable: boolean
	isCorrupted: boolean
	isStopped: boolean
	/** @format double */
	percentPatched: number
	components: PatcherComponentState[]
}

export interface PatcherStatus {
	connectedToPatchServer: boolean
	/** @format uint32 */
	successfullyInstalledVersion?: number
}

export interface PatcherUxResource {
	visible: boolean
}

export interface PaymentsCurrencyDTO {
	/** @format int32 */
	amount: number
	subCurrencies: Record<string, number>
}

export interface PaymentsFrontEndRequest {
	isPrepaid: boolean
	localeId: string
	/** @format int16 */
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
	/** @format int16 */
	summonerLevel: number
	gifteeAccountId: string
	gifteeMessage: string
	game: string
}

export interface PaymentsPMCStartUrlResult {
	id: string
	localeId: string
	userId: string
	/** @format int16 */
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
	/** @format int64 */
	timestamp: number
	payload: string
}

export interface PendingOpenedTeamDTO {
	invitationId: string
	name: string
	shortName: string
	/** @format int32 */
	logo: number
	/** @format int32 */
	logoColor: number
	/** @format int32 */
	tier: number
}

export interface PendingRosterDTO {
	/** @format int32 */
	version: number
	/** @format int64 */
	tournamentId: number
	invitationId: string
	name: string
	shortName: string
	/** @format int32 */
	logo: number
	/** @format int32 */
	logoColor: number
	rewardLogos: RewardLogo[]
	/** @format int32 */
	tier: number
	/** @format uint64 */
	captainId: number
	highTierVariance: boolean
	members: PendingRosterMemberDTO[]
	invitees: PendingRosterInviteeDTO[]
	ticketOffers: TicketOfferDTO[]
	inviteFaileds: FailedInvite[]
	lft: boolean
	mucJwtDto: MucJwtDto
}

export interface PendingRosterInviteeDTO {
	/** @format uint64 */
	inviteeId: number
	inviteeState: PendingRosterInviteeState
	/** @format uint64 */
	inviter: number
	/** @format int64 */
	inviteTime: number
	inviteType: InviteType
}

export type PendingRosterInviteeState = "SELFJOIN_REVOKED" | "SELFJOIN_DECLINED" | "SELFJOIN" | "ACCEPTED" | "SUGGEST_REVOKED" | "SUGGEST_DECLINED" | "REVOKED" | "DECLINED" | "PENDING" | "SUGGESTED"

export interface PendingRosterMemberDTO {
	/** @format uint64 */
	playerId: number
	memberState: PendingRosterMemberState
	/** @format int32 */
	bet: number
	betType: TicketType
	position: Position
	/** @format int64 */
	joinTime: number
	/** @format int32 */
	pendingPay: number
	/** @format int32 */
	pendingPremiumPay: number
	/** @format int32 */
	selfBet: number
	/** @format int32 */
	tier: number
}

export type PendingRosterMemberState = "KICK" | "LEFT" | "READY" | "FORCED_NOT_READY" | "NOT_READY"

export interface PhaseInMember {
	/** @format uint64 */
	playerId: number
	/** @format int32 */
	bet: number
	/** @format int32 */
	pendingPay: number
	/** @format int32 */
	selfBet: number
}

export interface PhaseRosterDTO {
	/** @format int64 */
	phaseId: number
	/** @format int32 */
	period: number
	/** @format int64 */
	bracketId: number
	/** @format int64 */
	checkinTime: number
	bracketDTO?: Bracket
}

export type PickModes = "DONE" | "IN_PROGRESS" | "NOT_PICKING"

export interface PlayerBehaviorLcdsForcedClientShutdown {
	reason: string
	additionalInfo: string
}

export interface PlayerBehaviorLcdsSimpleMessage {
	/** @format uint64 */
	accountId: number
	msgId: string
	type: string
	params: string[]
}

export interface PlayerBehaviorSimpleMessageResponse {
	/** @format uint64 */
	accountId: number
	msgId: string
	command: string
}

export interface PlayerDTO {
	banned: boolean
	/** @format int32 */
	tmntWins: number
	/** @format int32 */
	tmntLosses: number
	notifications: ClashOfflineNotification[]
	lft: boolean
	primaryPos: string
	secondaryPos: string
}

export interface PlayerFinderDTO {
	/** @format uint64 */
	playerId: number
	/** @format int32 */
	tier: number
	primaryPos: Position
	secondaryPos: Position
	type: PlayerFinderEnum
	/** @format int64 */
	friendId: number
}

export type PlayerFinderEnum = "FRIEND" | "FREEAGENT"

export interface PlayerInfoDTO {
	/** @format uint64 */
	playerId: number
	teamId: string
	position: string
	role: Role
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
	/** @format int32 */
	count: number
	/** @format int64 */
	expiryTime: number
}

export interface PlayerLootDefinitionsDTO {
	lootItemList: LootItemListClientDTO
	recipeList: LootLcdsRecipeListClientDTO
	queryResult: QueryResultDTO
	playerLoot: PlayerLootDTO[]
}

export interface PlayerLootResultDTO {
	status: string
	details: string
	added: PlayerLootDTO[]
	removed: PlayerLootDTO[]
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
	/** @format int32 */
	sequence: number
	metadata: MissionMetadata
	/** @format int64 */
	startTime: number
	/** @format int64 */
	endTime: number
	/** @format int64 */
	lastUpdatedTimestamp: number
	objectives: PlayerMissionObjectiveDTO[]
	rewards: PlayerMissionRewardDTO[]
	expiringWarnings: MissionAlertDTO[]
	requirements: string[]
	rewardStrategy: RewardStrategy
	display: MissionDisplay
	completionExpression: string
	viewed: boolean
	isNew: boolean
	status: string
	missionType: string
	displayType: string
	/** @format int64 */
	earnedDate: number
	/** @format int64 */
	completedDate: number
	/** @format int64 */
	cooldownTimeMillis: number
	celebrationType: string
	clientNotifyLevel: string
	internalName: string
	media: Record<string, string>
}

export interface PlayerMissionEligibilityData {
	/** @format int32 */
	level: number
	loyaltyEnabled: boolean
	playerInventory: PlayerInventory
	userInfoToken?: string
}

export interface PlayerMissionObjectiveDTO {
	type: string
	description: string
	progress: MissionProgressDTO
	/** @format int32 */
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
	/** @format int32 */
	sequence: number
	/** @format int32 */
	quantity: number
	isObjectiveBasedReward: boolean
	media: Record<string, string>
	iconNeedsFrame: boolean
}

export interface PlayerNotificationsPlayerNotificationConfigResource {
	/** @format uint64 */
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
	/** @format uint64 */
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
	/** @format int64 */
	timestamp: number
	payload: string
}

export interface PlayerParticipant {
	/** @format uint64 */
	summonerId: number
}

export interface PlayerRosterHistoryDTO {
	rosters: RosterMemberDTO[]
}

export interface PlayerTierDTO {
	/** @format uint64 */
	playerId: number
	/** @format int32 */
	tier: number
	primaryPos: Position
	secondPos: Position
}

export interface PluginDescriptionResource {
	name: string
	riotMeta: PluginMetadataResource
	pluginDependencies: string[]
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
	state: PluginManagerState
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
	implements: string[]
	threading: PluginThreadingModel
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
	/** @format int32 */
	orderWadFileMounted: number
	dependencies: PluginResourceContract[]
	implementedContracts: PluginResourceContract[]
}

export interface PluginResourceContract {
	fullName: string
}

export interface PluginResourceEvent<DataType = unknown> {
	uri: string
	eventType: PluginResourceEventType
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
	/** @format int64 */
	id: number
	/** @format int64 */
	tournamentId: number
	name: string
	shortName: string
	/** @format int32 */
	logo: number
	/** @format int32 */
	logoColor: number
	memberIds: number[]
}

export interface Punishment {
	punishedForChatLogs: string[]
	punishedForGameIds: number[]
	punishmentReason: string
	punishmentType: string
	/** @format uint64 */
	punishedUntilDateMillis: number
	/** @format uint64 */
	punishmentLengthMillis: number
	permaBan: boolean
	/** @format int64 */
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
	/** @format int64 */
	lastUpdate: number
}

export interface RankedScoutingDTO {
	/** @format uint64 */
	playerId: number
	puuid: string
	/** @format uint64 */
	totalMasteryScore: number
	topMasteries: ChampionMasteryPublicDTO[]
	topSeasonChampions: ChampionScoutingDTO[]
}

export interface RankedScoutingMemberDTO {
	/** @format uint64 */
	playerId: number
	championScoutingData: RankedScoutingTopChampionDTO[]
}

export interface RankedScoutingTopChampionDTO {
	/** @format int32 */
	championId: number
	/** @format int32 */
	rank: number
	/** @format int32 */
	winCount: number
	/** @format int32 */
	gameCount: number
	/** @format float */
	kda: number
}

export interface RedeemLootTransactionDTO {
	clientId: string
	transactionId: string
	lootName: string
}

/** Help format for remoting functions and types. */
export type RemotingHelpFormat = "Console" | "Brief" | "Epytext" | "Full"

/** Well-known privilege levels for bindable functions. */
export type RemotingPrivilege = "Local" | "Admin" | "User" | "None"

/** Serialization format for remoting requests and results. */
export type RemotingSerializedFormat = "MsgPack" | "YAML" | "JSON"

export interface ReplayMetadataV2 {
	gameVersion: string
	/** @format uint32 */
	fileSize: number
}

export type ReplayResponseStatus = "INTERNAL_SERVER_ERROR" | "BAD_REQUEST" | "EXPIRED" | "NOT_FOUND" | "OK"

export interface RewardDetails {
	/** @format int64 */
	tournamentId: number
	/** @format int64 */
	rosterId: number
	teamMemberIds: number[]
}

export interface RewardLogo {
	/** @format int32 */
	logo: number
	/** @format int32 */
	memberOwnedCount: number
}

export interface RewardStrategy {
	groupStrategy: string
	/** @format uint16 */
	selectMaxGroupCount: number
	/** @format uint16 */
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
	state: RiotMessagingServiceState
	token: string
	tokenType: RiotMessagingServiceTokenType
}

export type RiotMessagingServiceState = "Connected" | "Connecting" | "Disconnected" | "Disconnecting"

export type RiotMessagingServiceTokenType = "Identity" | "Access" | "Unavailable"

export interface RmsMessage {
	id: string
	resource: string
	service: string
	version: string
	/** @format int64 */
	timestamp: number
	payload: string
	ackRequired: boolean
}

export type Role = "NONE" | "MEMBER" | "CAPTAIN"

export interface RosterAggregatedStatsDTO {
	periodStats: RosterPeriodAggregatedStatsDTO[]
	playerStats: Record<string, RosterPlayerAggregatedStatsDTO>
}

export interface RosterDTO {
	/** @format int32 */
	version: number
	/** @format int64 */
	id: number
	/** @format int64 */
	tournamentId: number
	invitationId: string
	name: string
	shortName: string
	/** @format int32 */
	logo: number
	/** @format int32 */
	logoColor: number
	/** @format int32 */
	tier: number
	/** @format int32 */
	points: number
	/** @format int32 */
	wins: number
	/** @format int32 */
	losses: number
	eliminated: boolean
	/** @format uint64 */
	captainId: number
	members: RosterMemberDTO[]
	phases: PhaseRosterDTO[]
	dynamicState: RosterDynamicStateDTO
	banned: boolean
	mucJwtDto: MucJwtDto
}

export interface RosterDynamicStateDTO {
	/** @format int32 */
	version: number
	/** @format int64 */
	tournamentId: number
	/** @format int64 */
	rosterId: number
	phaseCheckinStates: number[]
	members: PhaseInMember[]
	ticketOffers: TicketOfferDTO[]
	withdraw: RosterWithdraw
}

export interface RosterMatchAggregatedStatsDTO {
	/** @format int32 */
	round: number
	/** @format int64 */
	duration: number
	opponentShortName: string
	/** @format int32 */
	opponentLogo: number
	/** @format int32 */
	opponentLogoColor: number
	win: boolean
	loserBracket: boolean
	/** @format int64 */
	gameId: number
	/** @format int32 */
	kills: number
	/** @format int32 */
	opponentKills: number
	playerChampionIds: Record<string, number>
}

export interface RosterMemberDTO {
	/** @format int64 */
	rosterId: number
	/** @format uint64 */
	playerId: number
	/** @format int64 */
	tournamentId: number
	/** @format int32 */
	currentBid: number
	bidType: TicketType
	/** @format int32 */
	pendingSpend: number
	/** @format int32 */
	pendingPremiumSpend: number
	position: Position
	/** @format int64 */
	joinTime: number
	/** @format int32 */
	tier: number
}

export interface RosterPeriodAggregatedStatsDTO {
	/** @format int32 */
	period: number
	/** @format int32 */
	bracketSize: number
	/** @format int64 */
	time: number
	matchStats: RosterMatchAggregatedStatsDTO[]
	playerBids: Record<string, number>
}

export interface RosterPlayerAggregatedStatsDTO {
	rawStatsSum: Record<string, number>
	rawStatsMax: Record<string, number>
}

export interface RosterStatsDTO {
	/** @format int64 */
	rosterId: number
	/** @format int32 */
	tournamentThemeId: number
	tournamentNameLocKey: string
	tournamentNameLocKeySecondary: string
	/** @format int64 */
	scheduleTime: number
	/** @format int64 */
	scheduleEndTime: number
	/** @format int32 */
	tournamentPeriods: number
	/** @format int32 */
	tier: number
	rosterName: string
	rosterShortName: string
	/** @format int32 */
	rosterLogo: number
	/** @format int32 */
	rosterLogoColor: number
	stats: RosterAggregatedStatsDTO
}

export interface RosterWithdraw {
	/** @format int64 */
	initVoteTime: number
	/** @format uint64 */
	initVoteMember: number
	/** @format int64 */
	voteTimeoutMs: number
	/** @format int64 */
	lockoutTimeMs: number
	/** @format int64 */
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
	/** @format double */
	successes: number
	/** @format double */
	failures: number
	/** @format int64 */
	startTimeEpochMs: number
	/** @format int64 */
	endTimeEpochMs: number
	labels: Record<string, string>
	boolDiagnostics: Record<string, boolean>
	doubleDiagnostics: Record<string, number>
	intDiagnostics: Record<string, number>
	stringDiagnostics: Record<string, string>
}

export interface SLIDoubleDiagnostic {
	key: string
	/** @format double */
	value: number
}

export interface SLIIntDiagnostic {
	key: string
	/** @format int64 */
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
	/** @format uint32 */
	level?: number
	aggressiveScan?: boolean
}

export interface SanitizerContainsSanitizedResponse {
	contains: boolean
}

export interface SanitizerSanitizeRequest {
	texts?: string[]
	text?: string
	/** @format uint32 */
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
	/** @format uint32 */
	breakingCharsCount: number
	/** @format uint32 */
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
	/** @format int64 */
	startDate: number
	/** @format int64 */
	endDate: number
	/** @format int64 */
	createdDate: number
	/** @format int64 */
	lastUpdatedTimestamp: number
	viewed: boolean
	media: SeriesMediaDTO
	tags: string[]
	warnings: AlertDTO[]
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
	/** @format uint64 */
	accountId: number
	msgId: string
	type: string
	params: string[]
}

export interface SimpleDialogMessageResponse {
	/** @format uint64 */
	accountId: number
	msgId: string
	command: string
}

export interface StoreLcdsChampionDTO {
	/** @format uint64 */
	endDate: number
	/** @format uint64 */
	purchaseDate: number
	/** @format uint32 */
	winCountRemaining: number
	sources: string[]
	active: boolean
	botEnabled: boolean
	/** @format int32 */
	championId: number
	championSkins: StoreLcdsChampionSkinDTO[]
	freeToPlay: boolean
	freeToPlayReward: boolean
	"f2pRewardSources": string[]
	owned: boolean
	rankedPlayEnabled: boolean
}

export interface StoreLcdsChampionSkinDTO {
	/** @format uint64 */
	endDate: number
	/** @format uint64 */
	purchaseDate: number
	/** @format int32 */
	winCountRemaining: number
	sources: string[]
	/** @format int32 */
	championId: number
	freeToPlayReward: boolean
	"f2pRewardSources": string[]
	lastSelected: boolean
	owned: boolean
	/** @format int32 */
	skinId: number
	stillObtainable: boolean
}

export interface StoreLcdsSimpleDialogMessage {
	/** @format uint64 */
	accountId: number
	msgId: string
	type: string
	params: string[]
}

export interface StoreLcdsSimpleDialogMessageResponse {
	/** @format uint64 */
	accountId: number
	msgId: string
	command: string
}

export interface StoreLcdsStoreAccountBalanceNotification {
	/** @format int64 */
	ip: number
	/** @format int64 */
	rp: number
}

export interface StoreLcdsStoreFulfillmentNotification {
	inventoryType: string
	/** @format int64 */
	rp: number
	/** @format int64 */
	ip: number
	data: unknown
}

export interface ThemeVp {
	/** @format int32 */
	themeId: number
	/** @format int32 */
	themeVp: number
}

export interface TicketOfferDTO {
	/** @format uint64 */
	offerPlayerId: number
	/** @format uint64 */
	receivePlayerId: number
	/** @format int32 */
	count: number
	type: TicketType
	ticketOfferState: TicketOfferState
}

export type TicketOfferState = "REVOKED" | "REJECTED" | "ACCEPTED" | "ACTIVE"

export type TicketType = "PREMIUM" | "BASIC"

export interface TierConfig {
	/** @format int32 */
	tier: number
	/** @format int64 */
	delayTime: number
	/** @format int64 */
	estimateTime: number
}

export interface TimeSeriesEventBeginV1 {
	/** @format uint64 */
	when: number
	eventName: string
}

export interface TimeSeriesEventEndV1 {
	/** @format uint64 */
	when: number
	eventName: string
	suffix?: string
}

export interface TimeSeriesEventMarkerV1 {
	/** @format uint64 */
	when: number
	eventName: string
	markerName: string
}

export interface TournamentDTO {
	/** @format int64 */
	id: number
	/** @format int64 */
	scheduleTime: number
	/** @format int64 */
	scheduleEndTime: number
	/** @format int64 */
	rosterCreateDeadline: number
	/** @format int32 */
	entryFee: number
	/** @format int32 */
	rosterSize: number
	/** @format int32 */
	themeId: number
	nameLocKey: string
	nameLocKeySecondary: string
	buyInOptions: number[]
	buyInOptionsPremium: number[]
	/** @format int32 */
	queueId: number
	/** @format int64 */
	scoutingTimeMs: number
	lastThemeOfSeason: boolean
	bracketSize: string
	/** @format int32 */
	minGames: number
	smsRestriction: boolean
	honorRestriction: boolean
	rankRestriction: boolean
	voiceEnabled: boolean
	phases: TournamentPhaseDTO[]
	rewardConfig: ClashRewardConfigClient[]
	tierConfigs: TierConfig[]
	/** @format int64 */
	bracketFormationInitDelayMs: number
	/** @format int64 */
	bracketFormationIntervalMs: number
	status: TournamentStatusEnum
	/** @format int64 */
	resumeTime: number
	lft: boolean
	/** @format int32 */
	maxInvites: number
	/** @format int32 */
	maxSuggestionsPerPlayer: number
}

export interface TournamentHistoryAndWinnersDTO {
	tournamentHistory: TournamentDTO[]
	tournamentWinnersCompressed: string
}

export interface TournamentInfoDTO {
	tournament: TournamentDTO
	roster?: RosterDTO
	pendingRoster?: PendingRosterDTO
	inviteePendingRosters: PendingRosterDTO[]
	/** @format int32 */
	themeVp: number
}

export interface TournamentInfoMinimalDTO {
	tournamentInfo: TournamentInfoDTO[]
	/** @format int64 */
	time: number
}

export interface TournamentPhaseDTO {
	/** @format int64 */
	id: number
	/** @format int64 */
	tournamentId: number
	/** @format int64 */
	registrationTime: number
	/** @format int64 */
	startTime: number
	/** @format int32 */
	period: number
	cancelled: boolean
	limitTiers: number[]
	capacityStatus: CapacityEnum
}

export interface TournamentPlayerInfoDTO {
	tournamentInfo: TournamentInfoDTO[]
	rosterStats: RosterStatsDTO[]
	player: PlayerDTO
	/** @format int32 */
	seasonVp: number
	themeVps: ThemeVp[]
	/** @format int64 */
	time: number
	/** @format int32 */
	tier: number
}

export type TournamentStatusEnum = "PRERESUME" | "PAUSED" | "CANCELLED" | "DEFAULT"

export interface TracingCriticalFlowEventV1 {
	/** @format uint64 */
	when: number
	eventId: string
	succeeded: boolean
	payloadString: string
}

export interface TracingEventV1 {
	/** @format uint64 */
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
	/** @format uint32 */
	moduleId: number
	name: string
	type: TracingModuleTypeV1
	threadingModel: TracingModuleThreadingModelV1
}

export interface TracingPhaseBeginV1 {
	/** @format uint64 */
	when: number
	name: string
	importance: TracingPhaseImportanceV1
}

export interface TracingPhaseEndV1 {
	/** @format uint64 */
	when: number
	name: string
}

export type TracingPhaseImportanceV1 = "major" | "minor" | "trivial"

export interface TutorialMetadata {
	/** @format int32 */
	stepNumber: number
	queueId: string
	displayRewards: Record<string, string>
	useQuickSearchMatchmaking: boolean
	useChosenChampion: boolean
}

export interface VerboseLootOddsDTO {
	recipeName: string
	lastUpdated: string
	chanceToContain: LootOddsDTO[]
	guaranteedToContain: LootOddsDTO[]
	hasPityRules: boolean
	checksOwnership: boolean
}

export interface YourshopLcdsChampionDTO {
	/** @format int32 */
	championId: number
	owned: boolean
}

export interface YourshopLcdsChampionSkinDTO {
	/** @format int32 */
	championId: number
	owned: boolean
	/** @format int32 */
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

/** User Experience Settings Operating System Information */
export interface basicOperatingSystemInfo {
	edition: string
	platform: string
	versionMajor: string
	versionMinor: string
	buildNumber: string
}

/** User Experience Settings System Information */
export interface basicSystemInfo {
	operatingSystem: basicOperatingSystemInfo
	/** @format uint64 */
	physicalMemory: number
	/** @format uint64 */
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
	/** @format int64 */
	expires?: number
}