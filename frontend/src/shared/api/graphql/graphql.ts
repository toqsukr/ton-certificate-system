import { DocumentTypeDecoration } from '@graphql-typed-document-node/core'

/* eslint-disable */
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never
}
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  Date: { input: any; output: any }
}

export type AbsurdDropStatus = {
  __typename?: 'AbsurdDropStatus'
  maxSpots: Scalars['Int']['output']
  todayCheckins: Scalars['Int']['output']
  totalSpots: Scalars['Int']['output']
}

export type ActionButton = ActionButtonEmpty | ActionButtonSubdomain | ActionButtonUrl

export type ActionButtonEmpty = {
  __typename?: 'ActionButtonEmpty'
  name: Scalars['String']['output']
}

export type ActionButtonSubdomain = {
  __typename?: 'ActionButtonSubdomain'
  url: Scalars['String']['output']
}

export type ActionButtonUrl = {
  __typename?: 'ActionButtonUrl'
  title: Scalars['String']['output']
  url: Scalars['String']['output']
}

export type AdminActionsHistoryItem = {
  __typename?: 'AdminActionsHistoryItem'
  changer: Scalars['String']['output']
  createdAt: Scalars['String']['output']
  entityAddress: Scalars['String']['output']
  updatedState: Scalars['String']['output']
}

export type AdminActionsHistoryListResponse = {
  __typename?: 'AdminActionsHistoryListResponse'
  cursor?: Maybe<Scalars['String']['output']>
  items: Array<AdminActionsHistoryItem>
}

export type AnalyticsUtmTags = {
  campaign?: InputMaybe<Scalars['String']['input']>
  content?: InputMaybe<Scalars['String']['input']>
  medium?: InputMaybe<Scalars['String']['input']>
  source?: InputMaybe<Scalars['String']['input']>
  term?: InputMaybe<Scalars['String']['input']>
}

export type AttributesCheckResponse = {
  __typename?: 'AttributesCheckResponse'
  attributes: Array<NftAttribute>
}

export enum AuctionVersion {
  V1 = 'v1',
  V2 = 'v2',
}

export enum AuctionsTopType {
  Getgems = 'getgems',
  Numbers = 'numbers',
  Usernames = 'usernames',
}

export type AuthSession = {
  __typename?: 'AuthSession'
  authSource?: Maybe<AuthSource>
  jwt?: Maybe<Jwt>
}

export type AuthSource = TonConnectAuthSource | TonKeeperAuthSource | WalletExtensionAuthSource

export enum AuthSourceType {
  TonConnect = 'TonConnect',
  Tonkeeper = 'Tonkeeper',
  WalletExtension = 'WalletExtension',
}

export enum BadgeType {
  Common = 'common',
  Epic = 'epic',
  Legendary = 'legendary',
  Rare = 'rare',
}

export type BannerGameInfo = {
  __typename?: 'BannerGameInfo'
  collection: NftCollection
  finishedStats?: Maybe<Array<Maybe<GameStatsItem>>>
  forSaleCount?: Maybe<Scalars['Int']['output']>
  isLastRound: Scalars['Boolean']['output']
  link: Scalars['String']['output']
  roundCalculationStartsAt: Scalars['Int']['output']
  roundEndsAt: Scalars['Int']['output']
  roundNum: Scalars['Int']['output']
  roundStartsAt: Scalars['Int']['output']
  state: GameState
  text: Scalars['String']['output']
}

export type BannerResponse = BannerGameInfo | NoGame

export type BlockchainContent = {
  avatarId?: InputMaybe<Scalars['String']['input']>
  coverId?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  royalty?: InputMaybe<Scalars['Float']['input']>
  royaltyAddress?: InputMaybe<Scalars['String']['input']>
  socialLinks?: InputMaybe<Array<SocialLinkInput>>
}

export type BuyNftEvent = {
  clientTimestampMs: Scalars['Float']['input']
  firstInSession: Scalars['Boolean']['input']
  firstInTab: Scalars['Boolean']['input']
  nftAddress: Scalars['String']['input']
  saleAddress: Scalars['String']['input']
}

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC',
}

export type CartAcceptNftOfferInput = {
  offerAddress: Scalars['String']['input']
}

export type CartBuyNftInput = {
  nftAddress: Scalars['String']['input']
  version: Scalars['String']['input']
}

export type CartCalculationInput = {
  cart: Array<CartCalculationItemInput>
}

export type CartCalculationItemInput = {
  acceptNftOffer?: InputMaybe<CartAcceptNftOfferInput>
  buyNft?: InputMaybe<CartBuyNftInput>
  cancelNftAuction?: InputMaybe<CartCancelNftAuctionInput>
  cancelNftOffer?: InputMaybe<CartCancelNftOfferInput>
  changeSaleNft?: InputMaybe<CartChangeSaleNftInput>
  claimJettonFromNft?: InputMaybe<CartBuyNftInput>
  claimNft?: InputMaybe<CartNftClaimInput>
  createGetGemsDns?: InputMaybe<CartCreateGetGemsDnsInput>
  createNft?: InputMaybe<CartCreateNftInput>
  createNftCollection?: InputMaybe<CartCreateNftCollectionInput>
  createNftComment?: InputMaybe<CartCreateNftCommentInput>
  createNftOffer?: InputMaybe<CartCreateNftOfferInput>
  createSubdomainCollection?: InputMaybe<CartInitSubdomainInput>
  createSubdomainNft?: InputMaybe<CartCreateSubdomainInput>
  finishNftAuction?: InputMaybe<CartFinishNftAuctionInput>
  id: Scalars['String']['input']
  linkNftAddress?: InputMaybe<CartLinkNftAddressInput>
  payLaunchpadBill?: InputMaybe<CartPayLaunchpadBillInput>
  placeNftBid?: InputMaybe<CartPlaceNftBidInput>
  putUpForAuctionNft?: InputMaybe<CartPutUpForAuctionNftInput>
  putUpForSaleNft?: InputMaybe<CartPutUpForSaleNftInput>
  removeNftFromSale?: InputMaybe<CartRemoveNftFromSaleInput>
  transferNft?: InputMaybe<CartTransferNftInput>
  updateNftCollection?: InputMaybe<CartUpdateNftCollectionInput>
}

export type CartCalculationItemPayload = {
  __typename?: 'CartCalculationItemPayload'
  currency: Currency
  /** @deprecated use errorPayload */
  error?: Maybe<Scalars['String']['output']>
  errorPayload?: Maybe<CreateCartTxError>
  id: Scalars['String']['output']
  networkFeeTon: Scalars['String']['output']
  rub: Scalars['String']['output']
  ton: Scalars['String']['output']
  usd: Scalars['String']['output']
  value: Scalars['String']['output']
}

export type CartCancelNftAuctionInput = {
  auctionAddress: Scalars['String']['input']
}

export type CartCancelNftOfferInput = {
  offerAddress: Scalars['String']['input']
}

export type CartChangeSaleNftInput = {
  currency?: InputMaybe<Currency>
  fullPrice: Scalars['String']['input']
  nftAddress: Scalars['String']['input']
}

export type CartCreateGetGemsDnsInput = {
  bidNano: Scalars['String']['input']
  domain: Scalars['String']['input']
}

export type CartCreateNftCollectionInput = {
  avatarId: Scalars['String']['input']
  coverId: Scalars['String']['input']
  description: Scalars['String']['input']
  editableNft?: InputMaybe<Scalars['Boolean']['input']>
  name: Scalars['String']['input']
  royalty?: InputMaybe<Scalars['Float']['input']>
  royaltyStr?: InputMaybe<Scalars['String']['input']>
  socialLinks?: InputMaybe<Array<SocialLinkInput>>
}

export type CartCreateNftCommentInput = {
  collectionAddress?: InputMaybe<Scalars['String']['input']>
  comment: Scalars['String']['input']
  nftAddress?: InputMaybe<Scalars['String']['input']>
  userAddress: Scalars['String']['input']
}

export type CartCreateNftInput = {
  attributes?: InputMaybe<Array<MetadataAttributeInput>>
  collectionAddress?: InputMaybe<Scalars['String']['input']>
  description: Scalars['String']['input']
  imageId: Scalars['String']['input']
  name: Scalars['String']['input']
  royalty?: InputMaybe<Scalars['Int']['input']>
  royaltyStr?: InputMaybe<Scalars['String']['input']>
  videoId?: InputMaybe<Scalars['String']['input']>
}

export type CartCreateNftOfferInput = {
  finishAt: Scalars['Int']['input']
  nftAddress: Scalars['String']['input']
  nftVersion?: InputMaybe<Scalars['String']['input']>
  omitRoyalty?: InputMaybe<Scalars['Boolean']['input']>
  price: Scalars['String']['input']
}

export type CartCreateSubdomainInput = {
  bidNano: Scalars['String']['input']
  collectionAddress: Scalars['String']['input']
  domain: Scalars['String']['input']
}

export type CartFinishNftAuctionInput = {
  auctionAddress: Scalars['String']['input']
}

export type CartInitSubdomainInput = {
  data: SubdomainData
  nftAddress: Scalars['String']['input']
}

export type CartLinkNftAddressInput = {
  newAddress?: InputMaybe<Scalars['String']['input']>
  nftAddress: Scalars['String']['input']
}

export type CartNftClaimInput = {
  nftAddress: Scalars['String']['input']
}

export type CartPayLaunchpadBillInput = {
  billId?: InputMaybe<Scalars['String']['input']>
  count?: InputMaybe<Scalars['Int']['input']>
  launchpadItemId: Scalars['String']['input']
}

export type CartPlaceNftBidInput = {
  amount: Scalars['String']['input']
  saleAddress: Scalars['String']['input']
  version: Scalars['String']['input']
}

export type CartPutUpForAuctionNftInput = {
  currency?: InputMaybe<Currency>
  finishAt: Scalars['Int']['input']
  maxBid?: InputMaybe<Scalars['String']['input']>
  minBid: Scalars['String']['input']
  minPercentStep: Scalars['Int']['input']
  nftAddress: Scalars['String']['input']
  omitRoyalty?: InputMaybe<Scalars['Boolean']['input']>
}

export type CartPutUpForSaleNftInput = {
  currency: Currency
  fullPrice: Scalars['String']['input']
  nftAddress: Scalars['String']['input']
  omitRoyalty?: InputMaybe<Scalars['Boolean']['input']>
}

export type CartRemoveNftFromSaleInput = {
  nftAddress: Scalars['String']['input']
}

export type CartStopNftAuctionInput = {
  auctionAddress: Scalars['String']['input']
}

export type CartTransferNftInput = {
  newOwnerAddress: Scalars['String']['input']
  nftAddress: Scalars['String']['input']
}

export type CartUpdateNftCollectionInput = {
  address: Scalars['String']['input']
  blockchainContent: BlockchainContent
}

export type CheckTxPayload = {
  amount: Scalars['String']['input']
  check: Scalars['String']['input']
  context: Array<TonTxContextItemInput>
  from?: InputMaybe<Scalars['String']['input']>
  to: Scalars['String']['input']
  uuid: Scalars['String']['input']
}

export type CollectionDeployParams = {
  collectionContent: Scalars['String']['input']
  commonContent: Scalars['String']['input']
  ownerAddress: Scalars['String']['input']
  royaltyParams?: InputMaybe<RoyaltyParamsInput>
}

export type CollectionNftsCount = {
  __typename?: 'CollectionNftsCount'
  collection: NftCollection
  count: Scalars['Int']['output']
}

export type CollectionNftsCountConnection = {
  __typename?: 'CollectionNftsCountConnection'
  cursor?: Maybe<Scalars['String']['output']>
  items: Array<CollectionNftsCount>
}

export type CollectionNotificationSetting = {
  __typename?: 'CollectionNotificationSetting'
  availableTypes: Array<FilterType>
  filterType: FilterType
  floorPercent?: Maybe<Scalars['String']['output']>
  gtePrice?: Maybe<Scalars['String']['output']>
  isActive: Scalars['Boolean']['output']
  ltePrice?: Maybe<Scalars['String']['output']>
}

export type CollectionNotificationSettingInput = {
  filterType: FilterType
  floorPercent?: InputMaybe<Scalars['String']['input']>
  gtePrice?: InputMaybe<Scalars['String']['input']>
  isActive: Scalars['Boolean']['input']
  ltePrice?: InputMaybe<Scalars['String']['input']>
}

export type CollectionNotificationSettings = {
  __typename?: 'CollectionNotificationSettings'
  putUpForAuction: CollectionNotificationSetting
  putUpForSale: CollectionNotificationSetting
  sold: CollectionNotificationSetting
}

export type CollectionNotificationSettingsInput = {
  putUpForAuction?: InputMaybe<CollectionNotificationSettingInput>
  putUpForSale?: InputMaybe<CollectionNotificationSettingInput>
  sold?: InputMaybe<CollectionNotificationSettingInput>
}

export type CollectionNotificationsList = {
  __typename?: 'CollectionNotificationsList'
  cursor?: Maybe<Scalars['String']['output']>
  items?: Maybe<Array<NotificationSubscribedCollection>>
}

export type CreateCartTxError = {
  __typename?: 'CreateCartTxError'
  cartItemId: Scalars['String']['output']
  code: Scalars['String']['output']
  message: Scalars['String']['output']
}

export type CreateCartTxPayload = {
  __typename?: 'CreateCartTxPayload'
  errors: Array<CreateCartTxError>
  tx?: Maybe<TonTx>
}

export type CreateCollectionDraftResult = {
  __typename?: 'CreateCollectionDraftResult'
  collection: DraftNftCollection
  /** @deprecated use tx */
  deploy: SmcDeployMessageResponse
  tx: TonTx
}

export type CreateNftDraftResult = {
  __typename?: 'CreateNftDraftResult'
  nft: DraftNftItem
  tx: TonTx
}

export enum Currency {
  Dfc = 'DFC',
  Dogs = 'DOGS',
  Fton = 'FTON',
  Gton = 'GTON',
  Major = 'MAJOR',
  Not = 'NOT',
  Nottest = 'NOTTEST',
  Punk = 'PUNK',
  Px = 'PX',
  Snt = 'SNT',
  Ton = 'TON',
  Usdt = 'USDT',
  Vat = 'VAT',
  Woof = 'WOOF',
}

export type CurrencyInfo = {
  __typename?: 'CurrencyInfo'
  decimals: Scalars['Int']['output']
  icon: Scalars['String']['output']
  id: Currency
  name: Scalars['String']['output']
  toTonRate: Scalars['Float']['output']
}

export enum CurrencyType {
  Rub = 'rub',
  Usd = 'usd',
}

export type CustomNoSchemeEvent = {
  clientTimestampMs: Scalars['Float']['input']
  name: Scalars['String']['input']
  pageHash?: InputMaybe<Scalars['String']['input']>
  pageId?: InputMaybe<Scalars['String']['input']>
  pageTitle: Scalars['String']['input']
  pageType: Scalars['String']['input']
  payload?: InputMaybe<Scalars['String']['input']>
  url: Scalars['String']['input']
}

export type DefinedIcon = {
  __typename?: 'DefinedIcon'
  type: DefinedIconType
}

export enum DefinedIconType {
  AuctionBidMyNft = 'AuctionBidMyNft',
  AuctionCancel = 'AuctionCancel',
  AuctionEndsSoon = 'AuctionEndsSoon',
  AuctionFinish = 'AuctionFinish',
  AuctionOverbid = 'AuctionOverbid',
  AuctionWin = 'AuctionWin',
  CollectionPutUpForAuction = 'CollectionPutUpForAuction',
  CollectionPutUpForSale = 'CollectionPutUpForSale',
  CollectionSold = 'CollectionSold',
  DogSexLinkCreated = 'DogSexLinkCreated',
  DogSexMergeSuccess = 'DogSexMergeSuccess',
  EasterEggsDraw = 'EasterEggsDraw',
  EasterEggsLose = 'EasterEggsLose',
  EasterEggsNextRound = 'EasterEggsNextRound',
  EasterEggsNextSale = 'EasterEggsNextSale',
  EasterEggsWin = 'EasterEggsWin',
  LaunchpadStart = 'LaunchpadStart',
  NftCommentModerationApprove = 'NftCommentModerationApprove',
  NftCommentModerationReject = 'NftCommentModerationReject',
  NftPutUpForAuction = 'NftPutUpForAuction',
  NftPutUpForSale = 'NftPutUpForSale',
  NftSold = 'NftSold',
  OfferAccept = 'OfferAccept',
  OfferDecline = 'OfferDecline',
  OfferExpired = 'OfferExpired',
  OfferMyNft = 'OfferMyNft',
  SellOwnNft = 'SellOwnNft',
}

export type DisabledByCollectionOwning = {
  __typename?: 'DisabledByCollectionOwning'
  isDisabled?: Maybe<Scalars['Boolean']['output']>
}

export type DisabledByWhitelist = {
  __typename?: 'DisabledByWhitelist'
  isDisabled?: Maybe<Scalars['Boolean']['output']>
}

export type DogSexAcceptResult = {
  __typename?: 'DogSexAcceptResult'
  merge: DogSexMerge
  tx?: Maybe<TonTx>
}

export type DogSexMerge = {
  __typename?: 'DogSexMerge'
  id: Scalars['ID']['output']
  leftNft: NftItem
  leftNftChild?: Maybe<NftItem>
  leftUser: User
  link: Scalars['String']['output']
  rightNft?: Maybe<NftItem>
  rightNftChild?: Maybe<NftItem>
  rightUser?: Maybe<User>
  status: DogSexMergeStatus
}

export enum DogSexMergeStatus {
  Done = 'done',
  Indexed = 'indexed',
  Processing = 'processing',
  Wait = 'wait',
}

export type DogSexStartResult = {
  __typename?: 'DogSexStartResult'
  mergeId: Scalars['ID']['output']
  tx: TonTx
}

export type DraftNftCollection = {
  __typename?: 'DraftNftCollection'
  address?: Maybe<Scalars['String']['output']>
  avatar: Scalars['String']['output']
  collectionContent?: Maybe<Scalars['String']['output']>
  commonContent?: Maybe<Scalars['String']['output']>
  cover?: Maybe<Scalars['String']['output']>
  description: Scalars['String']['output']
  id: Scalars['ID']['output']
  name: Scalars['String']['output']
  royaltyParams?: Maybe<RoyaltyParams>
  socialLinks: Array<SocialLink>
}

export type DraftNftCollectionPaginated = {
  __typename?: 'DraftNftCollectionPaginated'
  cursor?: Maybe<Scalars['String']['output']>
  items: Array<DraftNftCollection>
}

export type DraftNftCollectionWithBlocked = {
  __typename?: 'DraftNftCollectionWithBlocked'
  address: Scalars['String']['output']
  createdAt: Scalars['String']['output']
  id: Scalars['ID']['output']
  isBlocked: Scalars['Boolean']['output']
  name: Scalars['String']['output']
  userId: Scalars['Int']['output']
}

export type DraftNftCollectionsByUserId = {
  __typename?: 'DraftNftCollectionsByUserId'
  cursor?: Maybe<Scalars['String']['output']>
  items: Array<DraftNftCollectionWithBlocked>
}

export type DraftNftItem = {
  __typename?: 'DraftNftItem'
  baseContentUri?: Maybe<Scalars['String']['output']>
  collectionId?: Maybe<Scalars['ID']['output']>
  contentUri?: Maybe<Scalars['String']['output']>
  description: Scalars['String']['output']
  fullContentUri?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  image: Scalars['String']['output']
  index?: Maybe<Scalars['Int']['output']>
  name: Scalars['String']['output']
  royalty: Scalars['Int']['output']
  royaltyStr?: Maybe<Scalars['String']['output']>
}

export type DraftNftItemPaginated = {
  __typename?: 'DraftNftItemPaginated'
  cursor?: Maybe<Scalars['String']['output']>
  items: Array<DraftNftItem>
}

export type DraftNftItemWithBlocked = {
  __typename?: 'DraftNftItemWithBlocked'
  address: Scalars['String']['output']
  createdAt: Scalars['String']['output']
  id: Scalars['ID']['output']
  isBlocked: Scalars['Boolean']['output']
  name: Scalars['String']['output']
  userId: Scalars['Int']['output']
}

export type DraftNftItemsByUserId = {
  __typename?: 'DraftNftItemsByUserId'
  cursor?: Maybe<Scalars['String']['output']>
  items: Array<DraftNftItemWithBlocked>
}

export type DrawRound = {
  __typename?: 'DrawRound'
  prevMove: GameMove
  roundEndsAt: Scalars['Int']['output']
  yourMove?: Maybe<GameMove>
}

export type EmptyLayout = {
  __typename?: 'EmptyLayout'
  _?: Maybe<Scalars['Boolean']['output']>
}

export type EventsPayload = {
  acceptOffer?: InputMaybe<Array<BuyNftEvent>>
  buy?: InputMaybe<Array<BuyNftEvent>>
  clientId: Scalars['String']['input']
  nftActionButtonClick?: InputMaybe<Array<NftActionButtonClickEvent>>
  nftClickPromo?: InputMaybe<Array<NftClickPromoEvent>>
  noScheme?: InputMaybe<Array<CustomNoSchemeEvent>>
  pageView?: InputMaybe<Array<PageViewEvent>>
  promotionBannerClick?: InputMaybe<Array<PromotionBannerClick>>
  referer?: InputMaybe<Scalars['String']['input']>
  sessionId: Scalars['String']['input']
  tabId: Scalars['String']['input']
  telemintBidClick?: InputMaybe<Array<FragmentClickEvent>>
  telemintBuyClick?: InputMaybe<Array<FragmentClickEvent>>
  txReady?: InputMaybe<Array<TxReadyEvent>>
  utm: AnalyticsUtmTags
}

export type FeaturedBanner = {
  __typename?: 'FeaturedBanner'
  badge?: Maybe<Scalars['String']['output']>
  description?: Maybe<Scalars['String']['output']>
  gradientColor?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  image: Scalars['String']['output']
  priority?: Maybe<Scalars['Int']['output']>
  title: Scalars['String']['output']
  url: Scalars['String']['output']
  urlName?: Maybe<Scalars['String']['output']>
  video?: Maybe<Scalars['String']['output']>
}

export enum FilterApprove {
  Approved = 'Approved',
  NotApproved = 'NotApproved',
}

export type FilterAttribute = {
  __typename?: 'FilterAttribute'
  traitType: Scalars['String']['output']
  values: Array<FilterAttributeValue>
}

export type FilterAttributeValue = {
  __typename?: 'FilterAttributeValue'
  count: Scalars['Int']['output']
  minPrice?: Maybe<Scalars['String']['output']>
  value?: Maybe<Scalars['String']['output']>
}

export type FilterCurrencyType = {
  __typename?: 'FilterCurrencyType'
  count: Scalars['Int']['output']
  currency: CurrencyInfo
  currencyId: Currency
}

export enum FilterEntity {
  Collection = 'Collection',
  Nft = 'Nft',
}

export type FilterInput = {
  approve?: InputMaybe<FilterApprove>
  entity?: InputMaybe<FilterEntity>
  listType?: InputMaybe<FilterListType>
  nftLocation?: InputMaybe<FilterNftLocation>
  priceRange?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  sort?: InputMaybe<FilterSort>
  status?: InputMaybe<FilterStatus>
  verify?: InputMaybe<FilterVerified>
}

export type FilterIsOnSale = {
  __typename?: 'FilterIsOnSale'
  all: Scalars['Int']['output']
  forSale: Scalars['Int']['output']
  notForSale: Scalars['Int']['output']
}

export enum FilterListType {
  Launched = 'Launched',
  Whitelist = 'Whitelist',
}

export enum FilterNftLocation {
  All = 'All',
  InCollections = 'InCollections',
  SingleNfts = 'SingleNfts',
}

export type FilterSaleType = {
  __typename?: 'FilterSaleType'
  all: Scalars['Int']['output']
  auction: Scalars['Int']['output']
  fixPrice: Scalars['Int']['output']
  none: Scalars['Int']['output']
}

export enum FilterSort {
  AddedAtAsc = 'AddedAtAsc',
  AddedAtDesc = 'AddedAtDesc',
  PriceAsc = 'PriceAsc',
  PriceDesc = 'PriceDesc',
}

export enum FilterStatus {
  All = 'All',
  NotForSale = 'NotForSale',
  OnSale = 'OnSale',
}

export enum FilterType {
  FloorPercent = 'FloorPercent',
  PriceRange = 'PriceRange',
}

export enum FilterVerified {
  NotVerified = 'NotVerified',
  Verified = 'Verified',
}

export type FragmentClickEvent = {
  clientTimestampMs: Scalars['Float']['input']
  nftAddress: Scalars['String']['input']
  pageHash?: InputMaybe<Scalars['String']['input']>
  pageId?: InputMaybe<Scalars['String']['input']>
  pageTitle: Scalars['String']['input']
  pageType: Scalars['String']['input']
  url: Scalars['String']['input']
}

export type GameFinished = {
  __typename?: 'GameFinished'
  finishedAt: Scalars['Int']['output']
  yourNftAddress: Scalars['String']['output']
}

export enum GameMove {
  Paper = 'Paper',
  Rock = 'Rock',
  Scissors = 'Scissors',
}

export type GameReponse = GameFinished | GameRound | GameRoundNotPrepared | GameSale | NoGame

export type GameRound = {
  __typename?: 'GameRound'
  isCounting: Scalars['Boolean']['output']
  opponentNft?: Maybe<NftItem>
  opponentUser?: Maybe<User>
  roundCalculationStartsAt: Scalars['Int']['output']
  roundData: RoundData
  roundNum: Scalars['Int']['output']
  yourNftAddress: Scalars['String']['output']
}

export type GameRoundNotPrepared = {
  __typename?: 'GameRoundNotPrepared'
  roundCalculationStartsAt: Scalars['Int']['output']
  roundEndsAt: Scalars['Int']['output']
  roundNum: Scalars['Int']['output']
  yourNftAddress: Scalars['String']['output']
}

export type GameSale = {
  __typename?: 'GameSale'
  isCounting: Scalars['Boolean']['output']
  nextRoundNum: Scalars['Int']['output']
  nftState?: Maybe<NftStateBeforeSale>
  roundCalculationStartsAt: Scalars['Int']['output']
  roundStartsAt: Scalars['Int']['output']
  yourNftAddress: Scalars['String']['output']
}

export enum GameState {
  Finished = 'Finished',
  Round = 'Round',
  Sale = 'Sale',
}

export type GameStateAwaitPlaying = {
  __typename?: 'GameStateAwaitPlaying'
  finishAt: Scalars['Int']['output']
}

export type GameStateOver = {
  __typename?: 'GameStateOver'
  linkForSome: Scalars['String']['output']
}

export type GameStatePlaying = {
  __typename?: 'GameStatePlaying'
  finishAt: Scalars['Int']['output']
}

export type GameStateTrading = {
  __typename?: 'GameStateTrading'
  finishAt: Scalars['Int']['output']
}

export type GameStatsItem = {
  __typename?: 'GameStatsItem'
  key: Scalars['String']['output']
  value: Scalars['String']['output']
}

export enum GameSwitchState {
  Finish = 'Finish',
  Round = 'Round',
  RoundCalc = 'RoundCalc',
  Sale = 'Sale',
  SaleCalc = 'SaleCalc',
}

export type GemsWallet = {
  __typename?: 'GemsWallet'
  address: Scalars['String']['output']
}

export type GemsWalletAuth = {
  __typename?: 'GemsWalletAuth'
  accountId: Scalars['String']['output']
  freeAvatarNftAddress?: Maybe<Scalars['String']['output']>
  freeAvatarStatus: GemsWalletAvatarStatus
  notificationEnabled: Scalars['Boolean']['output']
  notifyVkGroupId: Scalars['Int']['output']
  type: GemsWalletAuthType
  wallet: GemsWallet
  walletList: Array<GemsWallet>
}

export enum GemsWalletAuthType {
  Tg = 'tg',
  Vk = 'vk',
}

export type GemsWalletAvatarResponse = {
  __typename?: 'GemsWalletAvatarResponse'
  nftAddress: Scalars['String']['output']
}

export enum GemsWalletAvatarStatus {
  Done = 'done',
  Empty = 'empty',
  Loading = 'loading',
}

export type GemsWalletConnectResult = {
  __typename?: 'GemsWalletConnectResult'
  connectPayload: Scalars['String']['output']
  iconUrl: Scalars['String']['output']
  name: Scalars['String']['output']
  returnUrl: Scalars['String']['output']
  url: Scalars['String']['output']
  wallet: Scalars['String']['output']
}

export type GemsWalletDapp = {
  __typename?: 'GemsWalletDapp'
  createdAt: Scalars['Float']['output']
  iconUrl: Scalars['String']['output']
  id: Scalars['ID']['output']
  name: Scalars['String']['output']
  url: Scalars['String']['output']
}

export type GemsWalletDappResponse = {
  __typename?: 'GemsWalletDappResponse'
  cursor?: Maybe<Scalars['String']['output']>
  items: Array<GemsWalletDapp>
}

export type GemsWalletEvent = GemsWalletEventAvatarReady | GemsWalletEventTonConnect

export type GemsWalletEventAvatarReady = {
  __typename?: 'GemsWalletEventAvatarReady'
  nftAddress: Scalars['String']['output']
}

export type GemsWalletEventTonConnect = {
  __typename?: 'GemsWalletEventTonConnect'
  request: GemsWalletRequest
}

export type GemsWalletImage = {
  imageId?: InputMaybe<Scalars['String']['input']>
  imageUrl?: InputMaybe<Scalars['String']['input']>
}

export type GemsWalletRequest = GemsWalletRequestNever | GemsWalletRequestTransaction

export type GemsWalletRequestNever = {
  __typename?: 'GemsWalletRequestNever'
  id: Scalars['ID']['output']
  never: Scalars['Boolean']['output']
}

export type GemsWalletRequestTransaction = {
  __typename?: 'GemsWalletRequestTransaction'
  balanceAfter: Scalars['String']['output']
  balanceBefore: Scalars['String']['output']
  canSend: Scalars['Boolean']['output']
  dapp: GemsWalletDapp
  failReason?: Maybe<GemsWalletRequestTransactionFailReason>
  id: Scalars['ID']['output']
  messages: Array<GemsWalletRequestTransactionMessage>
  totalAmount: Scalars['String']['output']
  wallet: Scalars['String']['output']
}

export enum GemsWalletRequestTransactionFailReason {
  LowBalance = 'lowBalance',
  TxForAnotherWallet = 'txForAnotherWallet',
}

export type GemsWalletRequestTransactionMessage = {
  __typename?: 'GemsWalletRequestTransactionMessage'
  amount: Scalars['String']['output']
  fee: Scalars['String']['output']
  toAddress: Scalars['String']['output']
}

export type GetGemsDnsInfo =
  | GetGemsDnsInfoCollection
  | GetGemsDnsInfoNft
  | GetGemsDnsInfoNotExist
  | GetGemsDnsInfoUser

export type GetGemsDnsInfoCollection = {
  __typename?: 'GetGemsDnsInfoCollection'
  address: Scalars['String']['output']
}

export type GetGemsDnsInfoNft = {
  __typename?: 'GetGemsDnsInfoNft'
  address: Scalars['String']['output']
  collectionAddress?: Maybe<Scalars['String']['output']>
}

export type GetGemsDnsInfoNotExist = {
  __typename?: 'GetGemsDnsInfoNotExist'
  exist: Scalars['Boolean']['output']
}

export type GetGemsDnsInfoUser = {
  __typename?: 'GetGemsDnsInfoUser'
  address: Scalars['String']['output']
}

export type GetGemsDnsNft = {
  __typename?: 'GetGemsDnsNft'
  item: NftItem
  linkedEntity?: Maybe<LinkedGetGemsDnsEntity>
}

export type GetGemsDnsStatus = GetGemsDnsStatusFree | GetGemsDnsStatusOccupied

export type GetGemsDnsStatusFree = {
  __typename?: 'GetGemsDnsStatusFree'
  imageUrl: Scalars['String']['output']
  minBid: Scalars['String']['output']
  name: Scalars['String']['output']
}

export type GetGemsDnsStatusOccupied = {
  __typename?: 'GetGemsDnsStatusOccupied'
  nft: NftItem
}

export type GetGetGemsDnsListResponse = {
  __typename?: 'GetGetGemsDnsListResponse'
  cursor?: Maybe<Scalars['String']['output']>
  items?: Maybe<Array<GetGemsDnsNft>>
}

export type GetLinkedGetGemsDnsResponse = {
  __typename?: 'GetLinkedGetGemsDnsResponse'
  cursor?: Maybe<Scalars['String']['output']>
  items?: Maybe<Array<LinkedGetGemsDnsItem>>
}

export type GroupLayout = {
  __typename?: 'GroupLayout'
  createdAt: Scalars['Int']['output']
  icon: LayoutIconType
  id: Scalars['ID']['output']
  isRead: Scalars['Boolean']['output']
  media: NftContent
  notifications: Array<Layout>
  text: Scalars['String']['output']
}

export type HistoryDefinedIcon = {
  __typename?: 'HistoryDefinedIcon'
  type: HistoryDefinedIconType
}

export enum HistoryDefinedIconType {
  Burn = 'Burn',
  BuyNft = 'BuyNft',
  CancelAuction = 'CancelAuction',
  CancelSale = 'CancelSale',
  MakeAuctionBid = 'MakeAuctionBid',
  MakeOffer = 'MakeOffer',
  MintCollection = 'MintCollection',
  MintNft = 'MintNft',
  NftPutUpForAuction = 'NftPutUpForAuction',
  NftPutUpForSale = 'NftPutUpForSale',
  SellNft = 'SellNft',
  TransferGet = 'TransferGet',
  TransferSend = 'TransferSend',
}

export type HistoryLayoutIconType = HistoryDefinedIcon | UrlIcon

export enum HistoryType {
  Burn = 'Burn',
  CancelAuction = 'CancelAuction',
  CancelSale = 'CancelSale',
  Mint = 'Mint',
  PutUpForAuction = 'PutUpForAuction',
  PutUpForSale = 'PutUpForSale',
  Sold = 'Sold',
  Transfer = 'Transfer',
}

export type HistoryTypeBurn = {
  __typename?: 'HistoryTypeBurn'
  historyType: HistoryType
  newOwner?: Maybe<Scalars['String']['output']>
  newOwnerUser?: Maybe<User>
  oldOwner?: Maybe<Scalars['String']['output']>
  oldOwnerUser?: Maybe<User>
  type: Scalars['String']['output']
}

export type HistoryTypeCancelAuction = {
  __typename?: 'HistoryTypeCancelAuction'
  historyType: HistoryType
  owner?: Maybe<Scalars['String']['output']>
  ownerUser?: Maybe<User>
  type: Scalars['String']['output']
}

export type HistoryTypeCancelSale = {
  __typename?: 'HistoryTypeCancelSale'
  currency: Currency
  historyType: HistoryType
  owner?: Maybe<Scalars['String']['output']>
  ownerUser?: Maybe<User>
  price?: Maybe<Scalars['String']['output']>
  type: Scalars['String']['output']
}

export type HistoryTypeMint = {
  __typename?: 'HistoryTypeMint'
  historyType: HistoryType
  type: Scalars['String']['output']
}

export type HistoryTypePutUpForAuction = {
  __typename?: 'HistoryTypePutUpForAuction'
  historyType: HistoryType
  owner?: Maybe<Scalars['String']['output']>
  ownerUser?: Maybe<User>
  type: Scalars['String']['output']
}

export type HistoryTypePutUpForSale = {
  __typename?: 'HistoryTypePutUpForSale'
  currency: Currency
  historyType: HistoryType
  isPriceChange?: Maybe<Scalars['Boolean']['output']>
  owner?: Maybe<Scalars['String']['output']>
  ownerUser?: Maybe<User>
  price?: Maybe<Scalars['String']['output']>
  type: Scalars['String']['output']
}

export type HistoryTypeSold = {
  __typename?: 'HistoryTypeSold'
  currency: Currency
  historyType: HistoryType
  newOwner?: Maybe<Scalars['String']['output']>
  newOwnerUser?: Maybe<User>
  oldOwner?: Maybe<Scalars['String']['output']>
  oldOwnerUser?: Maybe<User>
  price?: Maybe<Scalars['String']['output']>
  rejectFromGlobalTop: Scalars['Boolean']['output']
  type: Scalars['String']['output']
}

export type HistoryTypeTransfer = {
  __typename?: 'HistoryTypeTransfer'
  historyType: HistoryType
  newOwner?: Maybe<Scalars['String']['output']>
  newOwnerUser?: Maybe<User>
  oldOwner?: Maybe<Scalars['String']['output']>
  oldOwnerUser?: Maybe<User>
  type: Scalars['String']['output']
}

export type Image = {
  __typename?: 'Image'
  /** @deprecated will be never return */
  animation?: Maybe<Scalars['String']['output']>
  baseUrl: Scalars['String']['output']
  /** @deprecated will be always failed */
  hasAnimation: Scalars['Boolean']['output']
  layout: LayoutType
  preview?: Maybe<Scalars['String']['output']>
  sized: Scalars['String']['output']
  /** @deprecated No longer supported */
  video: Scalars['String']['output']
}

export type ImageAnimationArgs = {
  height: Scalars['Int']['input']
  width: Scalars['Int']['input']
}

export type ImagePreviewArgs = {
  height: Scalars['Int']['input']
  width: Scalars['Int']['input']
}

export type ImageSizedArgs = {
  format?: InputMaybe<Scalars['String']['input']>
  height: Scalars['Int']['input']
  width: Scalars['Int']['input']
}

export type ImageVideoArgs = {
  height: Scalars['Int']['input']
  width: Scalars['Int']['input']
}

export enum ImageType {
  /** @deprecated Use UserAvatar or NftCollectionAvatar */
  Avatar = 'Avatar',
  /** @deprecated Use UserCover or NftCollectionCover */
  Cover = 'Cover',
  /** @deprecated Use NftImage or NftCollectionCover or NftCollectionAvatar */
  Nft = 'Nft',
  NftCollectionAvatar = 'NftCollectionAvatar',
  NftCollectionCover = 'NftCollectionCover',
  NftImage = 'NftImage',
  UserAvatar = 'UserAvatar',
  UserCover = 'UserCover',
}

export type Jwt = {
  __typename?: 'JWT'
  payload: JwtPayload
  sign: Scalars['String']['output']
}

export type JwtPayload = {
  __typename?: 'JWTPayload'
  auth: AuthSourceType
  id: Scalars['ID']['output']
  maxMessages: Scalars['Int']['output']
  v: JwtVersion
  wallet: Scalars['String']['output']
}

export enum JwtVersion {
  V1 = 'V1',
  V2 = 'V2',
}

export type LaunchpadBill = {
  __typename?: 'LaunchpadBill'
  addressList: Array<Scalars['String']['output']>
  amountNft: Scalars['Int']['output']
  expireAt: Scalars['Int']['output']
  id: Scalars['String']['output']
  nfts?: Maybe<Array<NftItem>>
  status: LaunchpadBillStatus
  /** @deprecated use create cart */
  tx: TonTx
  value: LaunchpadItemPriceValue
  /** @deprecated use value */
  valueTon: Scalars['String']['output']
}

export enum LaunchpadBillStatus {
  Error = 'ERROR',
  Expired = 'EXPIRED',
  New = 'NEW',
  Processed = 'PROCESSED',
}

export type LaunchpadBills = {
  __typename?: 'LaunchpadBills'
  cursor?: Maybe<Scalars['String']['output']>
  items: Array<LaunchpadBill>
}

export type LaunchpadItem = {
  __typename?: 'LaunchpadItem'
  badges?: Maybe<Array<LaunchpadItemBadge>>
  collectionAddress?: Maybe<Scalars['String']['output']>
  description?: Maybe<Scalars['String']['output']>
  finishAt?: Maybe<Scalars['Int']['output']>
  id: Scalars['ID']['output']
  /** @deprecated use media */
  images?: Maybe<Array<Image>>
  itemsCountTotal?: Maybe<Scalars['Int']['output']>
  markdown?: Maybe<Scalars['String']['output']>
  maxNftCountPerTransaction: Scalars['Int']['output']
  media?: Maybe<Array<Media>>
  price?: Maybe<LaunchpadItemPrice>
  socialLinks?: Maybe<Array<SocialLink>>
  soldCount: Scalars['Int']['output']
  startAt?: Maybe<Scalars['Int']['output']>
  status: LaunchpadItemStatus
  title: Scalars['String']['output']
}

export type LaunchpadItemBadgesArgs = {
  lang?: InputMaybe<UserLang>
}

export type LaunchpadItemDescriptionArgs = {
  lang?: InputMaybe<UserLang>
}

export type LaunchpadItemMarkdownArgs = {
  lang?: InputMaybe<UserLang>
}

export type LaunchpadItemTitleArgs = {
  lang?: InputMaybe<UserLang>
}

export type LaunchpadItemBadge = {
  __typename?: 'LaunchpadItemBadge'
  typeData: LaunchpadItemBadgeTypeData
}

export enum LaunchpadItemBadgeType {
  Custom = 'CUSTOM',
  Limit = 'LIMIT',
  MintType = 'MINT_TYPE',
  Price = 'PRICE',
}

export type LaunchpadItemBadgeTypeData =
  | LaunchpadItemBadgeTypeDataCustom
  | LaunchpadItemBadgeTypeDataLimit
  | LaunchpadItemBadgeTypeDataMintType
  | LaunchpadItemBadgeTypeDataPrice

export type LaunchpadItemBadgeTypeDataCustom = {
  __typename?: 'LaunchpadItemBadgeTypeDataCustom'
  text: Scalars['String']['output']
  type: LaunchpadItemBadgeType
  url?: Maybe<Scalars['String']['output']>
}

export type LaunchpadItemBadgeTypeDataLimit = {
  __typename?: 'LaunchpadItemBadgeTypeDataLimit'
  limit: LaunchpadLimit
  type: LaunchpadItemBadgeType
}

export type LaunchpadItemBadgeTypeDataMintType = {
  __typename?: 'LaunchpadItemBadgeTypeDataMintType'
  mintType: LaunchpadMintType
  type: LaunchpadItemBadgeType
}

export type LaunchpadItemBadgeTypeDataPrice = {
  __typename?: 'LaunchpadItemBadgeTypeDataPrice'
  price: Scalars['String']['output']
  type: LaunchpadItemBadgeType
}

export type LaunchpadItemPrice =
  | DisabledByCollectionOwning
  | DisabledByWhitelist
  | LaunchpadItemPriceValue
  | NeedsAuth

export type LaunchpadItemPriceValue = {
  __typename?: 'LaunchpadItemPriceValue'
  currency: Currency
  value: Scalars['String']['output']
}

export enum LaunchpadItemStatus {
  Finished = 'FINISHED',
  InProgress = 'IN_PROGRESS',
  NotStarted = 'NOT_STARTED',
}

export enum LaunchpadLimit {
  Unlimited = 'UNLIMITED',
}

export enum LaunchpadMintType {
  Public = 'PUBLIC',
  Whitelist = 'WHITELIST',
}

export type Layout = EmptyLayout | SimpleLayout

export type LayoutIconType = DefinedIcon | UrlIcon

export enum LayoutType {
  Default = 'Default',
  WideAsPossible = 'WideAsPossible',
}

export type LinkedGetGemsDnsEntity = NftCollection | NftItem | User

export type LinkedGetGemsDnsItem = {
  __typename?: 'LinkedGetGemsDnsItem'
  domain: Scalars['String']['output']
  id: Scalars['String']['output']
}

export type Login = {
  __typename?: 'Login'
  jwt: Jwt
  token: Scalars['String']['output']
  user: User
}

export type LoginCredentialsInput = {
  loginMessage: Scalars['String']['input']
  publicKey: Scalars['String']['input']
  signedMessage: Scalars['String']['input']
  walletAddress: Scalars['String']['input']
  walletVersion: Scalars['String']['input']
}

export type LosePrevRound = {
  __typename?: 'LosePrevRound'
  loseAtRound: Scalars['Int']['output']
  roundEndsAt: Scalars['Int']['output']
}

export type LoseRound = {
  __typename?: 'LoseRound'
  isRandomWin: Scalars['Boolean']['output']
  opponentMove?: Maybe<GameMove>
  roundEndsAt: Scalars['Int']['output']
  yourMove?: Maybe<GameMove>
}

export type LostDogsWayApplyNotEmptyWalletResponse = {
  __typename?: 'LostDogsWayApplyNotEmptyWalletResponse'
  commonTask?: Maybe<LostDogsWayCommonTask>
  status: LostDogsWayApplyNotEmptyWalletStatus
}

export enum LostDogsWayApplyNotEmptyWalletStatus {
  Highload = 'highload',
  InsufficientFunds = 'insufficientFunds',
  Success = 'success',
  WalletNotConnected = 'walletNotConnected',
}

export enum LostDogsWayBoostType {
  Revote = 'revote',
  X2woof = 'x2woof',
}

export enum LostDogsWayClaimProgress {
  Chain = 'chain',
  Exchange = 'exchange',
  Idle = 'idle',
}

export type LostDogsWayClaimStatusResponse = {
  __typename?: 'LostDogsWayClaimStatusResponse'
  status: LostDogsWayUserClaimStatus
  step: LostDogsWayClaimStep
  userExists: Scalars['Boolean']['output']
}

export enum LostDogsWayClaimStep {
  BeforeClaim = 'beforeClaim',
  Claim = 'claim',
  ExchangeForm = 'exchangeForm',
  KycDone = 'kycDone',
}

export type LostDogsWayCommonTask = {
  __typename?: 'LostDogsWayCommonTask'
  customCheckStrategy?: Maybe<LostDogsWayCustomCheckStrategy>
  description: Scalars['String']['output']
  dogReward: Scalars['Int']['output']
  id: Scalars['ID']['output']
  image: Scalars['String']['output']
  name: Scalars['String']['output']
  url: Scalars['String']['output']
  woofReward: Scalars['String']['output']
}

export type LostDogsWayCommonTasksResponse = {
  __typename?: 'LostDogsWayCommonTasksResponse'
  items: Array<LostDogsWayCommonTask>
}

export type LostDogsWayCompleteAdsGramTasksResponse = {
  __typename?: 'LostDogsWayCompleteAdsGramTasksResponse'
  success: Scalars['Boolean']['output']
  task?: Maybe<LostDogsWayCommonTask>
  watchMore: Scalars['Boolean']['output']
}

export type LostDogsWayCompleteCommonTasksResponse = {
  __typename?: 'LostDogsWayCompleteCommonTasksResponse'
  success: Scalars['Boolean']['output']
  task?: Maybe<LostDogsWayCommonTask>
}

export type LostDogsWayCompleteTasksResponse = {
  __typename?: 'LostDogsWayCompleteTasksResponse'
  success: Scalars['Boolean']['output']
  task?: Maybe<LostDogsWayPersonalTask>
  woofReward?: Maybe<Scalars['String']['output']>
}

export type LostDogsWayCurrentRoundVote = {
  __typename?: 'LostDogsWayCurrentRoundVote'
  id: Scalars['ID']['output']
  /** @deprecated use voteChangeBoostStatus */
  isVoteChangeBoostAvailable: Scalars['Boolean']['output']
  selectedRoundCardValue: Scalars['String']['output']
  spentGameDogsCount: Scalars['String']['output']
}

export enum LostDogsWayCustomCheckStrategy {
  AdsGram = 'adsGram',
  NotEmptyWallet = 'notEmptyWallet',
}

export type LostDogsWayDailyGift = {
  __typename?: 'LostDogsWayDailyGift'
  description: Scalars['String']['output']
  id: Scalars['ID']['output']
  image: Scalars['String']['output']
  isBooster?: Maybe<Scalars['Boolean']['output']>
  isNft?: Maybe<Scalars['Boolean']['output']>
  title: Scalars['String']['output']
  url?: Maybe<Scalars['String']['output']>
}

export type LostDogsWayDailyGiftsResponse = {
  __typename?: 'LostDogsWayDailyGiftsResponse'
  items: Array<LostDogsWayDailyGift>
  tier: LostDogsWayDailyTier
}

export type LostDogsWayDailyTier = {
  __typename?: 'LostDogsWayDailyTier'
  description: Scalars['String']['output']
  image: Scalars['String']['output']
  title: Scalars['String']['output']
  url: Scalars['String']['output']
}

export enum LostDogsWayEventPage {
  Onboarding1 = 'onboarding1',
  Onboarding2 = 'onboarding2',
  Onboarding3 = 'onboarding3',
  Onboarding4 = 'onboarding4',
  Onboarding5 = 'onboarding5',
  Onboarding6 = 'onboarding6',
  Woof = 'woof',
  YourDog = 'yourDog',
}

export type LostDogsWayEvents = LostDogsWayGameDogsInfoResponse | LostDogsWayGameStatusChange

export type LostDogsWayFrontEvent = {
  commonPageView?: InputMaybe<LostDogsWayEventPage>
  launch?: InputMaybe<Scalars['Boolean']['input']>
  mainScreenMyLeague?: InputMaybe<Scalars['Boolean']['input']>
  mainScreenVote?: InputMaybe<Scalars['Boolean']['input']>
  onboardingContinue?: InputMaybe<Scalars['Boolean']['input']>
  profileClaimNot?: InputMaybe<Scalars['String']['input']>
  profileInviteFriendsButton?: InputMaybe<Scalars['Boolean']['input']>
  profileInviteFriendsCopy?: InputMaybe<Scalars['Boolean']['input']>
  profileInviteFriendsShare?: InputMaybe<Scalars['Boolean']['input']>
  profileJoinChannel?: InputMaybe<Scalars['Boolean']['input']>
  profileJoinChat?: InputMaybe<Scalars['Boolean']['input']>
  profilePreviousChoice?: InputMaybe<Scalars['Boolean']['input']>
  timeMs: Scalars['Float']['input']
  voteBuyChangeVote?: InputMaybe<Scalars['Boolean']['input']>
  voteBuyMoreDogs?: InputMaybe<Scalars['Boolean']['input']>
  voteChangeVote?: InputMaybe<Scalars['Boolean']['input']>
  voteConfirmChoice?: InputMaybe<Scalars['Boolean']['input']>
  voteJoinChannel?: InputMaybe<Scalars['Boolean']['input']>
  voteJoinChat?: InputMaybe<Scalars['Boolean']['input']>
  voteReadLore?: InputMaybe<Scalars['Boolean']['input']>
  woofGetFreeDogs?: InputMaybe<Scalars['Boolean']['input']>
  yourDogBoostChangeVoteButton?: InputMaybe<Scalars['Boolean']['input']>
  yourDogBoostChangeVoteBuyButton?: InputMaybe<Scalars['Boolean']['input']>
  yourDogBoostX2WOOFButton?: InputMaybe<Scalars['Boolean']['input']>
  yourDogBoostX2WOOFBuyButton?: InputMaybe<Scalars['Boolean']['input']>
  yourDogBuyDogsBuyButton?: InputMaybe<Scalars['Int']['input']>
  yourDogGetFreeDogs?: InputMaybe<Scalars['Boolean']['input']>
}

export type LostDogsWayFrontEventUtm = {
  campaign?: InputMaybe<Scalars['String']['input']>
  content?: InputMaybe<Scalars['String']['input']>
  medium?: InputMaybe<Scalars['String']['input']>
  source?: InputMaybe<Scalars['String']['input']>
  term?: InputMaybe<Scalars['String']['input']>
}

export type LostDogsWayGameBoost = {
  __typename?: 'LostDogsWayGameBoost'
  description: Scalars['String']['output']
  id: Scalars['ID']['output']
  image: Scalars['String']['output']
  /** @deprecated use voteChangeBoostStatus */
  isBought: Scalars['Boolean']['output']
  name: Scalars['String']['output']
  price: Scalars['String']['output']
  type: LostDogsWayBoostType
  voteChangeBoostStatus: LostDogsWayVoteChangeBoostStatus
}

export type LostDogsWayGameBoostsResponse = {
  __typename?: 'LostDogsWayGameBoostsResponse'
  items: Array<LostDogsWayGameBoost>
}

export type LostDogsWayGameDogsInfo = LostDogsWayGameDogsInfoNotcoin | LostDogsWayGameDogsInfoStar

export type LostDogsWayGameDogsInfoNotcoin = {
  __typename?: 'LostDogsWayGameDogsInfoNotcoin'
  dogPrice: Scalars['String']['output']
  maxDogCountPerTx: Scalars['Int']['output']
}

export type LostDogsWayGameDogsInfoResponse = {
  __typename?: 'LostDogsWayGameDogsInfoResponse'
  data: LostDogsWayGameDogsInfo
}

export type LostDogsWayGameDogsInfoStar = {
  __typename?: 'LostDogsWayGameDogsInfoStar'
  isBought: Scalars['Boolean']['output']
  options: Array<LostDogsWayGameDogsStarOption>
}

export type LostDogsWayGameDogsStarOption = {
  __typename?: 'LostDogsWayGameDogsStarOption'
  count: Scalars['Int']['output']
  dogPrice: Scalars['Int']['output']
}

export type LostDogsWayGameStatus =
  | LostDogsWayGameStatusCalculation
  | LostDogsWayGameStatusFinished
  | LostDogsWayGameStatusInactive
  | LostDogsWayGameStatusRound

export type LostDogsWayGameStatusCalculation = {
  __typename?: 'LostDogsWayGameStatusCalculation'
  calculationEndsAt: Scalars['Int']['output']
  gameEndsAt: Scalars['Int']['output']
}

export type LostDogsWayGameStatusChange = {
  __typename?: 'LostDogsWayGameStatusChange'
  newStatus: LostDogsWayState
}

export type LostDogsWayGameStatusFinished = {
  __typename?: 'LostDogsWayGameStatusFinished'
  _?: Maybe<Scalars['Boolean']['output']>
}

export type LostDogsWayGameStatusInactive = {
  __typename?: 'LostDogsWayGameStatusInactive'
  _?: Maybe<Scalars['Boolean']['output']>
}

export type LostDogsWayGameStatusResponse = {
  __typename?: 'LostDogsWayGameStatusResponse'
  gameState: LostDogsWayGameStatus
}

export type LostDogsWayGameStatusRound = {
  __typename?: 'LostDogsWayGameStatusRound'
  description: Scalars['String']['output']
  gameEndsAt: Scalars['Int']['output']
  id: Scalars['ID']['output']
  isGrandRound?: Maybe<Scalars['Boolean']['output']>
  notcoinBank: Scalars['String']['output']
  roundCards: Array<LostDogsWayRoundCard>
  roundEndsAt: Scalars['Int']['output']
  taskType: LostDogsWayRoundTaskType
}

export type LostDogsWayLeagueInfoResponse = {
  __typename?: 'LostDogsWayLeagueInfoResponse'
  maxWoofCount?: Maybe<Scalars['String']['output']>
  members: Array<LostDogsWayLeagueMember>
  minWoofCount?: Maybe<Scalars['String']['output']>
  name: LostDogsWayLeagueName
}

export type LostDogsWayLeagueMember = {
  __typename?: 'LostDogsWayLeagueMember'
  correctVotesCount: Scalars['Int']['output']
  place: Scalars['Int']['output']
  user: LostDogsWayUser
  woofBalance: Scalars['String']['output']
}

export enum LostDogsWayLeagueName {
  Bone = 'bone',
  Bronze = 'bronze',
  Diamond = 'diamond',
  Gold = 'gold',
  Platinum = 'platinum',
  Silver = 'silver',
}

export enum LostDogsWayMovieBoostType {
  CreditsPlace = 'credits_place',
  RandomPic = 'random_pic',
  Revote = 'revote',
  X2woof = 'x2woof',
}

export type LostDogsWayMovieCurrentRoundVote = {
  __typename?: 'LostDogsWayMovieCurrentRoundVote'
  id: Scalars['ID']['output']
  selectedRoundCardValue: Scalars['String']['output']
  spentNotcoins?: Maybe<Scalars['String']['output']>
}

export type LostDogsWayMovieDailyGiftsResponse = {
  __typename?: 'LostDogsWayMovieDailyGiftsResponse'
  items: Array<LostDogsWayDailyGift>
}

export type LostDogsWayMovieEventClaimNot = {
  notAmount: Scalars['String']['input']
  screen: Scalars['String']['input']
}

export type LostDogsWayMovieEventCommon = {
  screen: Scalars['String']['input']
}

export type LostDogsWayMovieFrontEvent = {
  boostChangeVote?: InputMaybe<LostDogsWayMovieEventCommon>
  boostPlaceInCredits?: InputMaybe<LostDogsWayMovieEventCommon>
  boostRandomFrame?: InputMaybe<LostDogsWayMovieEventCommon>
  boostX2Woof?: InputMaybe<LostDogsWayMovieEventCommon>
  claimNOT?: InputMaybe<LostDogsWayMovieEventClaimNot>
  confirmChoice?: InputMaybe<LostDogsWayMovieEventCommon>
  inviteFriendsCopy?: InputMaybe<LostDogsWayMovieEventCommon>
  inviteFriendsShare?: InputMaybe<LostDogsWayMovieEventCommon>
  launch?: InputMaybe<Scalars['Boolean']['input']>
  onboardingContinue?: InputMaybe<Scalars['Boolean']['input']>
  pageView?: InputMaybe<LostDogsWayMovieEventCommon>
  payForCard?: InputMaybe<LostDogsWayMovieEventCommon>
  timeMs: Scalars['Float']['input']
  watchPreviousEpisodes?: InputMaybe<LostDogsWayMovieEventCommon>
  watchTVonTG?: InputMaybe<LostDogsWayMovieEventCommon>
}

export type LostDogsWayMovieGameBoost = {
  __typename?: 'LostDogsWayMovieGameBoost'
  description: Scalars['String']['output']
  id: Scalars['ID']['output']
  image: Scalars['String']['output']
  isCreditsPlace: Scalars['Boolean']['output']
  name: Scalars['String']['output']
  price: Scalars['String']['output']
  type: LostDogsWayMovieBoostType
  voteChangeBoostStatus: LostDogsWayVoteChangeBoostStatus
}

export type LostDogsWayMovieGameBoostsResponse = {
  __typename?: 'LostDogsWayMovieGameBoostsResponse'
  items: Array<LostDogsWayMovieGameBoost>
}

export type LostDogsWayMovieGameNotcoinInfoResponse = {
  __typename?: 'LostDogsWayMovieGameNotcoinInfoResponse'
  existNotcoinAmount?: Maybe<Scalars['String']['output']>
  maxAmount: Scalars['String']['output']
  woofWinFree: Scalars['String']['output']
  woofWinPaid: Scalars['String']['output']
}

export type LostDogsWayMovieGameStatus =
  | LostDogsWayGameStatusFinished
  | LostDogsWayGameStatusInactive
  | LostDogsWayMovieGameStatusCalculation
  | LostDogsWayMovieGameStatusRound

export type LostDogsWayMovieGameStatusCalculation = {
  __typename?: 'LostDogsWayMovieGameStatusCalculation'
  calculationEndsAt: Scalars['Int']['output']
  gameEndsAt: Scalars['Int']['output']
  isBlockchainSlow: Scalars['Boolean']['output']
  movie: LostDogsWayMovieSeries
  question: Scalars['String']['output']
  tvAppUrl: Scalars['String']['output']
}

export type LostDogsWayMovieGameStatusResponse = {
  __typename?: 'LostDogsWayMovieGameStatusResponse'
  gameState: LostDogsWayMovieGameStatus
}

export type LostDogsWayMovieGameStatusRound = {
  __typename?: 'LostDogsWayMovieGameStatusRound'
  auctionUrl: Scalars['String']['output']
  gameEndsAt: Scalars['Int']['output']
  id: Scalars['ID']['output']
  isBlockchainSlow: Scalars['Boolean']['output']
  notcoinBank: Scalars['String']['output']
  question: Scalars['String']['output']
  roundCards: Array<LostDogsWayRoundCard>
  roundEndsAt: Scalars['Int']['output']
  tvAppUrl: Scalars['String']['output']
}

export type LostDogsWayMovieRoundVote = {
  __typename?: 'LostDogsWayMovieRoundVote'
  date: Scalars['Int']['output']
  roundCards: Array<LostDogsWayRoundMovieCardWithResults>
}

export type LostDogsWayMovieSaveEventPayload = {
  events: Array<LostDogsWayMovieFrontEvent>
  utm?: InputMaybe<LostDogsWayFrontEventUtm>
}

export type LostDogsWayMovieSeries = {
  __typename?: 'LostDogsWayMovieSeries'
  name: Scalars['String']['output']
  preview: Scalars['String']['output']
  seriesNum: Scalars['Int']['output']
  url: Scalars['String']['output']
}

export type LostDogsWayMovieUserChoicesHistoryResponse = {
  __typename?: 'LostDogsWayMovieUserChoicesHistoryResponse'
  cursor?: Maybe<Scalars['String']['output']>
  items: Array<LostDogsWayMovieUserRoundVote>
}

export type LostDogsWayMovieUserInfoResponse = {
  __typename?: 'LostDogsWayMovieUserInfoResponse'
  currentRoundVote?: Maybe<LostDogsWayMovieCurrentRoundVote>
  exchangeDone: Scalars['Boolean']['output']
  prevRoundVote?: Maybe<LostDogsWayMovieUserRoundVote>
  referralLink: Scalars['String']['output']
  storyDone: Scalars['Boolean']['output']
  woofBalance: Scalars['String']['output']
}

export type LostDogsWayMovieUserRoundVote = {
  __typename?: 'LostDogsWayMovieUserRoundVote'
  cards: Array<LostDogsWayRoundMovieCardWithResults>
  date: Scalars['Int']['output']
  notPrize?: Maybe<Scalars['String']['output']>
  possiblePaidReward?: Maybe<LostDogsWayPossiblePaidReward>
  selectedRoundCardValue?: Maybe<Scalars['String']['output']>
  userStatus: LostDogsWayUserRoundVoteStatus
  woofPrize?: Maybe<Scalars['String']['output']>
}

export type LostDogsWayMovieVotesHistoryResponse = {
  __typename?: 'LostDogsWayMovieVotesHistoryResponse'
  items: Array<LostDogsWayMovieRoundVote>
}

export type LostDogsWayPersonalTask = {
  __typename?: 'LostDogsWayPersonalTask'
  description: Scalars['String']['output']
  id: Scalars['ID']['output']
  isCompleted: Scalars['Boolean']['output']
  name: Scalars['String']['output']
  type: LostDogsWayUserTaskType
  url?: Maybe<Scalars['String']['output']>
}

export type LostDogsWayPossiblePaidReward = {
  __typename?: 'LostDogsWayPossiblePaidReward'
  notcoinAmount: Scalars['String']['output']
  notcoinReward: Scalars['String']['output']
}

export type LostDogsWayRoundCard = {
  __typename?: 'LostDogsWayRoundCard'
  id: Scalars['String']['output']
  image: Scalars['String']['output']
  name: Scalars['String']['output']
  number: Scalars['Int']['output']
  value: Scalars['String']['output']
}

export type LostDogsWayRoundCardWithResults = {
  __typename?: 'LostDogsWayRoundCardWithResults'
  card: LostDogsWayRoundCard
  description: Scalars['String']['output']
  dogsCount: Scalars['Int']['output']
  id: Scalars['String']['output']
  isWinner: Scalars['Boolean']['output']
  votesPercent: Scalars['Int']['output']
}

export type LostDogsWayRoundMovieCardWithResults = {
  __typename?: 'LostDogsWayRoundMovieCardWithResults'
  card: LostDogsWayRoundCard
  description: Scalars['String']['output']
  id: Scalars['String']['output']
  isWinner: Scalars['Boolean']['output']
  notcoinAmount: Scalars['String']['output']
  votesPercent: Scalars['Int']['output']
}

export enum LostDogsWayRoundTaskType {
  Average = 'average',
  Biggest = 'biggest',
  Smallest = 'smallest',
}

export type LostDogsWayRoundVote = {
  __typename?: 'LostDogsWayRoundVote'
  date: Scalars['Int']['output']
  roundCards: Array<LostDogsWayRoundCardWithResults>
  taskType: LostDogsWayRoundTaskType
}

export type LostDogsWaySaveEventPayload = {
  events: Array<LostDogsWayFrontEvent>
  utm?: InputMaybe<LostDogsWayFrontEventUtm>
}

export type LostDogsWaySaveExchangeFormPayload = {
  depositAddress?: InputMaybe<Scalars['String']['input']>
  memo?: InputMaybe<Scalars['String']['input']>
  walletAddress?: InputMaybe<Scalars['String']['input']>
}

export type LostDogsWaySaveExchangeFormResponse = {
  __typename?: 'LostDogsWaySaveExchangeFormResponse'
  status: LostDogsWayUserClaimStatus
}

export enum LostDogsWayState {
  Calculation = 'calculation',
  Finished = 'finished',
  Round = 'round',
}

export type LostDogsWayStatus = {
  __typename?: 'LostDogsWayStatus'
  userId: Scalars['ID']['output']
  walletAddress?: Maybe<Scalars['String']['output']>
}

export type LostDogsWayUser = {
  __typename?: 'LostDogsWayUser'
  avatar?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  nickname: Scalars['String']['output']
}

export type LostDogsWayUserChoicesHistoryResponse = {
  __typename?: 'LostDogsWayUserChoicesHistoryResponse'
  cursor?: Maybe<Scalars['String']['output']>
  items: Array<LostDogsWayUserRoundVote>
}

export type LostDogsWayUserClaimStatus = {
  __typename?: 'LostDogsWayUserClaimStatus'
  banReason?: Maybe<Scalars['String']['output']>
  claimProgress: LostDogsWayClaimProgress
  claimedWoofAmount: Scalars['String']['output']
  depositAddress?: Maybe<Scalars['String']['output']>
  exceedsLimit: Scalars['Boolean']['output']
  isBanned: Scalars['Boolean']['output']
  isFromUSA: Scalars['Boolean']['output']
  kyc: Scalars['Boolean']['output']
  memo?: Maybe<Scalars['String']['output']>
  minClaimAmount: Scalars['String']['output']
  walletAddress?: Maybe<Scalars['String']['output']>
  woofBalance: Scalars['String']['output']
}

export type LostDogsWayUserInfoResponse = {
  __typename?: 'LostDogsWayUserInfoResponse'
  currentRoundVote?: Maybe<LostDogsWayCurrentRoundVote>
  exchangeDone: Scalars['Boolean']['output']
  gameDogsBalance: Scalars['String']['output']
  prevRoundVote?: Maybe<LostDogsWayUserRoundVote>
  referralLink: Scalars['String']['output']
  squad?: Maybe<LostDogsWayUserSquad>
  storyDone: Scalars['Boolean']['output']
  woofBalance: Scalars['String']['output']
}

export type LostDogsWayUserLeagueInfoResponse = {
  __typename?: 'LostDogsWayUserLeagueInfoResponse'
  name: LostDogsWayLeagueName
  user?: Maybe<LostDogsWayLeagueMember>
}

export type LostDogsWayUserProfileResponse = {
  __typename?: 'LostDogsWayUserProfileResponse'
  user: LostDogsWayUser
  walletStatus: LostDogsWayWalletStatus
}

export type LostDogsWayUserReferralInfoResponse = {
  __typename?: 'LostDogsWayUserReferralInfoResponse'
  invitedPeopleCount: Scalars['Int']['output']
  referralLink: Scalars['String']['output']
}

export type LostDogsWayUserRoundVote = {
  __typename?: 'LostDogsWayUserRoundVote'
  cards: Array<LostDogsWayRoundCardWithResults>
  date: Scalars['Int']['output']
  notPrize?: Maybe<Scalars['String']['output']>
  possiblePaidReward?: Maybe<LostDogsWayPossiblePaidReward>
  selectedRoundCardValue?: Maybe<Scalars['String']['output']>
  taskType: LostDogsWayRoundTaskType
  userStatus: LostDogsWayUserRoundVoteStatus
  woofPrize?: Maybe<Scalars['String']['output']>
}

export enum LostDogsWayUserRoundVoteStatus {
  Loser = 'loser',
  Skipped = 'skipped',
  Winner = 'winner',
}

export type LostDogsWayUserSquad = {
  __typename?: 'LostDogsWayUserSquad'
  id: Scalars['String']['output']
  logoUrl: Scalars['String']['output']
  name: Scalars['String']['output']
}

export enum LostDogsWayUserTaskType {
  ConnectWallet = 'connectWallet',
  FindMyDogs = 'findMyDogs',
  FindTop = 'findTop',
  FirstBid = 'firstBid',
  FirstBuyDogs = 'firstBuyDogs',
  JoinSquad = 'joinSquad',
  Onboarding = 'onboarding',
  Sharing = 'sharing',
  WoofScreen = 'woofScreen',
}

export enum LostDogsWayVoteChangeBoostStatus {
  Obtained = 'obtained',
  Required = 'required',
  Used = 'used',
}

export type LostDogsWayVotesHistoryResponse = {
  __typename?: 'LostDogsWayVotesHistoryResponse'
  items: Array<LostDogsWayRoundVote>
}

export type LostDogsWayWalletStatus = {
  __typename?: 'LostDogsWayWalletStatus'
  connectedWalletAddress?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  isNotBalanceClaimable: Scalars['Boolean']['output']
  notBalance: Scalars['String']['output']
}

export type LostDogsWayWoofBoosterRate = {
  __typename?: 'LostDogsWayWoofBoosterRate'
  daysInARow: Scalars['Int']['output']
  rateValue: Scalars['String']['output']
}

export type LostDogsWayWoofBoosterRateInfoResponse = {
  __typename?: 'LostDogsWayWoofBoosterRateInfoResponse'
  rates: Array<LostDogsWayWoofBoosterRate>
  userRate: Scalars['String']['output']
  userRateDay: Scalars['Int']['output']
}

export type LostDogsWayWoofPersonalTasksResponse = {
  __typename?: 'LostDogsWayWoofPersonalTasksResponse'
  items: Array<LostDogsWayPersonalTask>
}

export type MpCollectionTop = {
  __typename?: 'MPCollectionTop'
  cursor?: Maybe<Scalars['String']['output']>
  items: Array<MpCollectionTopItem>
}

export type MpCollectionTopItem = {
  __typename?: 'MPCollectionTopItem'
  collection: NftCollection
  currencyFloorPrice: Scalars['Float']['output']
  currencyValue: Scalars['Float']['output']
  diffPercent?: Maybe<Scalars['Float']['output']>
  floorPrice: Scalars['Float']['output']
  place: Scalars['Int']['output']
  tonValue: Scalars['String']['output']
}

export type MpCollectionTopItemCurrencyFloorPriceArgs = {
  currency: CurrencyType
}

export type MpCollectionTopItemCurrencyValueArgs = {
  currency: CurrencyType
}

export enum MpTopKind {
  All = 'all',
  Day = 'day',
  Month = 'month',
  Week = 'week',
}

export type MakeMove = {
  __typename?: 'MakeMove'
  roundEndsAt: Scalars['Int']['output']
}

export enum Marketplace {
  Fragment = 'FRAGMENT',
  Getgems = 'GETGEMS',
  Major = 'MAJOR',
  Marketapp = 'MARKETAPP',
  Other = 'OTHER',
  Xrare = 'XRARE',
}

export type MarketplaceFeeParams = {
  __typename?: 'MarketplaceFeeParams'
  fee: Scalars['Float']['output']
}

export type Media = {
  __typename?: 'Media'
  id: Scalars['String']['output']
  image: Scalars['String']['output']
  video?: Maybe<Scalars['String']['output']>
}

export type MetadataAttributeInput = {
  trait_type: Scalars['String']['input']
  value: Scalars['String']['input']
}

export type MoveResponse = {
  __typename?: 'MoveResponse'
  errorMessage?: Maybe<Scalars['String']['output']>
  gameInfo: GameReponse
  success: Scalars['Boolean']['output']
}

export type MutantToadzStatus = {
  __typename?: 'MutantToadzStatus'
  availableAmount: Scalars['Int']['output']
  canBuyMaxAmount: Scalars['Int']['output']
  paymentComment: Scalars['String']['output']
  paymentWallet: Scalars['String']['output']
  presaleIsActive: Scalars['Boolean']['output']
  price: Scalars['String']['output']
  purchasedAmount: Scalars['Int']['output']
  totalAmount: Scalars['Int']['output']
  userCanBuy: Scalars['Boolean']['output']
}

export type Mutation = {
  __typename?: 'Mutation'
  absurdDropStart: TonTx
  addNftReaction: ReactionsByNftAddress
  adminAddNotification: Scalars['Boolean']['output']
  adminSetUserBannedFlag: Scalars['Boolean']['output']
  attributesCheck: AttributesCheckResponse
  authLinkTelegram: Scalars['Boolean']['output']
  authTonConnectSetStorage: Scalars['Boolean']['output']
  authUnlinkTelegram: Scalars['Boolean']['output']
  authUpdateLang: Scalars['Boolean']['output']
  calculateCart: Array<CartCalculationItemPayload>
  checkUserExists: Scalars['Boolean']['output']
  collectionRefreshMetadata?: Maybe<NftCollection>
  confirmDraftCollection: NftCollection
  confirmDraftItem: NftItem
  createCartTx: CreateCartTxPayload
  createColorCookie: Scalars['String']['output']
  createLoginMessage: Scalars['String']['output']
  createMyGemsWallet: GemsWalletAuth
  createUploadUrl: Scalars['String']['output']
  debugAddCollectionToIndexer: Scalars['Boolean']['output']
  debugForceReindexCollection: Scalars['Boolean']['output']
  debugMintRandomCollection: Scalars['String']['output']
  debugMintRandomNftInCollection: Scalars['Boolean']['output']
  debugMintRandomSingleNft: Scalars['String']['output']
  deleteCover: User
  dogSexAcceptMerge: DogSexAcceptResult
  dogSexStartMerge: DogSexStartResult
  draftCollection: CreateCollectionDraftResult
  draftNftItem: CreateNftDraftResult
  draftNftSingle: CreateNftDraftResult
  editSubdomainPrice?: Maybe<SubdomainPrice>
  gemsWalletDestroy: Scalars['Boolean']['output']
  gemsWalletDisconnectDapp: Scalars['Boolean']['output']
  gemsWalletMintAvatar: GemsWalletAvatarResponse
  gemsWalletResolveConnect: Scalars['Boolean']['output']
  gemsWalletResolveRequest: Scalars['Boolean']['output']
  gemsWalletStartConnect: GemsWalletConnectResult
  gemsWalletSubscribeAvatarNotify: Scalars['Boolean']['output']
  generateFreeCollectible: Scalars['Int']['output']
  generatePreviewCollectible: Scalars['String']['output']
  /** @deprecated use createSubdomainCollection */
  initSubdomain: TonTx
  launchpadCreateBill: LaunchpadBill
  login: Login
  loginTonConnect: Login
  logout: Scalars['Boolean']['output']
  lostDogsWayApplyAdsGram: LostDogsWayCompleteAdsGramTasksResponse
  lostDogsWayApplyNotEmptyWallet: LostDogsWayApplyNotEmptyWalletResponse
  lostDogsWayBuyBoost: StarsTx
  lostDogsWayBuyDogsNotcoin: TonTx
  lostDogsWayBuyDogsStar: StarsTx
  lostDogsWayCheckTgPayment: Scalars['Boolean']['output']
  lostDogsWayClaimNotcoins: TonTx
  lostDogsWayClaimWoof: TonTx
  lostDogsWayCompleteCommonTask: LostDogsWayCompleteCommonTasksResponse
  lostDogsWayCompleteTask: LostDogsWayCompleteTasksResponse
  lostDogsWayGenerateWallet: LostDogsWayUserProfileResponse
  lostDogsWayLinkTonWallet: LostDogsWayUserProfileResponse
  lostDogsWayMovieBuyBoost: StarsTx
  lostDogsWayMovieBuyNotcoin: TonTx
  lostDogsWayMovieBuyNotcoinVariant: TonTx
  lostDogsWayMovieCompleteCommonTask: LostDogsWayCompleteCommonTasksResponse
  lostDogsWayMovieCompleteTask: LostDogsWayCompleteTasksResponse
  lostDogsWayMovieSaveEvent: Scalars['Boolean']['output']
  lostDogsWayMovieViewPrevRound: Scalars['Boolean']['output']
  lostDogsWayMovieVote: LostDogsWayMovieCurrentRoundVote
  lostDogsWayMovieVoteDate: LostDogsWayMovieCurrentRoundVote
  lostDogsWayRemoveWallet: LostDogsWayUserProfileResponse
  lostDogsWaySaveEvent: Scalars['Boolean']['output']
  lostDogsWaySaveExchangeForm: LostDogsWaySaveExchangeFormResponse
  lostDogsWayViewPrevRound: Scalars['Boolean']['output']
  lostDogsWayVote: LostDogsWayCurrentRoundVote
  makeMove: MoveResponse
  mintGetGemsDns: TonTx
  /** @deprecated use createSubdomainNft */
  mintSubdomainDns: TonTx
  /** @deprecated use nftAuctionNoCancelCreate */
  nftAuctionActivate: Scalars['String']['output']
  nftAuctionBidCreate: TonTx
  nftAuctionCancelMessage: NftActionMessage
  /** @deprecated use nftAuctionNoCancelCreate */
  nftAuctionCreate: NftActionResult
  nftAuctionFinishMessage: NftActionMessage
  nftAuctionNoCancelCreate: NftActionResult
  nftAuctionStopMessage: NftActionMessage
  nftCancelVote: NftVotingResponse
  nftClaim: TonTx
  nftCreateTransferPayload: TonTx
  nftFixPriceSaleBuy: TonTx
  nftFixPriceSaleCancel: TonTx
  nftFixPriceSaleChangePrice: TonTx
  nftFixPriceSaleCreate: TonTx
  nftLinkAddress: TonTx
  nftOfferAccept: TonTx
  nftOfferCancel: TonTx
  nftOfferCreate: TonTx
  nftOfferRejectByNftOwner: Scalars['Boolean']['output']
  /** @deprecated use nftItemSync */
  nftRefreshMetadata?: Maybe<NftItem>
  nftReveal: Scalars['Boolean']['output']
  nftSetHiddenFlag: Scalars['Boolean']['output']
  nftTelemintBidCreate: TonTx
  nftUpdateCollection: UpdateCollectionResult
  nftVote: NftVotingResponse
  photoAIChangeWalletAddress: Scalars['Boolean']['output']
  photoAICreateUser: Scalars['Boolean']['output']
  photoAIFillBalance: PhotoAiFillBalanceResponse
  photoAIGenerate: PhotoAiGenerateResponse
  photoAISaveEvent: Scalars['Boolean']['output']
  photoAIUpdateUser: Scalars['Boolean']['output']
  ping: Scalars['String']['output']
  pocketSaveEvent: Scalars['Boolean']['output']
  /** @deprecated use addNftReaction */
  reactionsNftAdd: Scalars['Boolean']['output']
  /** @deprecated use removeNftReaction */
  reactionsNftRemove: Scalars['Boolean']['output']
  readNotifications: ReadNotifications
  removeNftReaction: ReactionsByNftAddress
  revealCollectible: PocketPaymentResponse
  saveCollectionNotifications: CollectionNotificationSettings
  saveEvents?: Maybe<Scalars['Boolean']['output']>
  saveLaunchpadStartNotificationSubscription: SaveLaunchpadStartNotificationSubscriptionStatus
  saveNftNotifications: CollectionNotificationSettings
  saveNotificationsSettings: Scalars['Boolean']['output']
  /** @deprecated will no work */
  simpleTemporaryStorageSet: SimpleTemporaryStorageValue
  subscribeToDrop?: Maybe<Scalars['Int']['output']>
  superAgeRestrictCollection: Scalars['Boolean']['output']
  superApproveCollection?: Maybe<Scalars['Boolean']['output']>
  superApproveNft: Scalars['Boolean']['output']
  superBlockCollection: Scalars['Boolean']['output']
  superBlockNft: Scalars['Boolean']['output']
  superSetPriorityCollection: Scalars['Boolean']['output']
  superSetPriorityNft: Scalars['Boolean']['output']
  superVerifyCollection: Scalars['Boolean']['output']
  syncCollection: SyncCollectionStatus
  /** @deprecated use nftItemSync/nftCollectionSync */
  syncItem?: Maybe<NftItem>
  syncNft: SyncNftStatus
  syncPearlsBotUser: Scalars['Boolean']['output']
  tBattleJettonTransferTx: TonTx
  tBattleLinkTonWallet: TBattleUser
  tBattleRemoveWallet: Scalars['Boolean']['output']
  tBattleUserOnboarding: Scalars['Boolean']['output']
  togglePearlsSubscription: Scalars['Boolean']['output']
  tonTxCheckStatus: TonTxStatus
  tonTxCheckTonkeeperStatus: TonTxTonkeeperStatus
  tvBuyEpisode: TvPaymentResponse
  tvBuySeries: TvPaymentResponse
  tvRecordEpisodeView: TvEpisode
  tvSaveEvent: Scalars['Boolean']['output']
  tvUserOnboarding: Scalars['Boolean']['output']
  unsubscribeNotification: Scalars['Boolean']['output']
  unsubscribeToDrop: Scalars['Boolean']['output']
  updateMe: User
  walletEggCancelSale: WalletEgg
  walletEggCheckTask: WeTaskResult
  walletEggDebugAddNftBot: Scalars['String']['output']
  walletEggDebugDeleteUser: Scalars['String']['output']
  walletEggDebugMoveBot: Scalars['String']['output']
  walletEggDebugNewBot: Scalars['String']['output']
  walletEggGenerateWallet: WalletEggStatus
  walletEggLinkTonWallet: WalletEggStatus
  walletEggLogout: WalletEggStatus
  walletEggMakeMove: WalletEggGame
  walletEggMakeSale: WalletEgg
  walletEggSaveEvent: Scalars['Boolean']['output']
  walletEggUpdateTelegramVisibility: Scalars['Boolean']['output']
}

export type MutationAbsurdDropStartArgs = {
  userAddress: Scalars['String']['input']
}

export type MutationAddNftReactionArgs = {
  address: Scalars['String']['input']
  reaction: ReactionType
}

export type MutationAdminAddNotificationArgs = {
  data: NotificationTypeData
  userAddress: Scalars['String']['input']
}

export type MutationAdminSetUserBannedFlagArgs = {
  address: Scalars['String']['input']
  banned: Scalars['Boolean']['input']
  comment: Scalars['String']['input']
}

export type MutationAttributesCheckArgs = {
  nftAddress: Scalars['String']['input']
}

export type MutationAuthLinkTelegramArgs = {
  jsonAuthData: Scalars['String']['input']
}

export type MutationAuthTonConnectSetStorageArgs = {
  storageJSON: Scalars['String']['input']
  storageVersion: Scalars['Float']['input']
}

export type MutationAuthUpdateLangArgs = {
  lang: UserLang
}

export type MutationCalculateCartArgs = {
  cart: Array<CartCalculationItemInput>
}

export type MutationCollectionRefreshMetadataArgs = {
  address: Scalars['String']['input']
}

export type MutationConfirmDraftCollectionArgs = {
  draftId: Scalars['ID']['input']
}

export type MutationConfirmDraftItemArgs = {
  draftId: Scalars['ID']['input']
}

export type MutationCreateCartTxArgs = {
  cart: Array<CartCalculationItemInput>
}

export type MutationCreateColorCookieArgs = {
  nftAddress: Scalars['String']['input']
}

export type MutationCreateUploadUrlArgs = {
  image: ImageType
}

export type MutationDebugAddCollectionToIndexerArgs = {
  address: Scalars['String']['input']
}

export type MutationDebugForceReindexCollectionArgs = {
  address: Scalars['String']['input']
}

export type MutationDebugMintRandomNftInCollectionArgs = {
  collectionAddress: Scalars['String']['input']
  index: Scalars['Int']['input']
}

export type MutationDogSexAcceptMergeArgs = {
  mergeId: Scalars['ID']['input']
  rightNftAddress: Scalars['String']['input']
  withChild: Scalars['Boolean']['input']
}

export type MutationDogSexStartMergeArgs = {
  leftNftAddress: Scalars['String']['input']
  rightNftAddress?: InputMaybe<Scalars['String']['input']>
}

export type MutationDraftCollectionArgs = {
  data: NftCollectionInput
}

export type MutationDraftNftItemArgs = {
  data: NftItemInput
}

export type MutationDraftNftSingleArgs = {
  data: NftSingleInput
}

export type MutationEditSubdomainPriceArgs = {
  collectionAddress: Scalars['String']['input']
  data: SubdomainPriceData
}

export type MutationGemsWalletDisconnectDappArgs = {
  dappId: Scalars['ID']['input']
}

export type MutationGemsWalletMintAvatarArgs = {
  image: GemsWalletImage
}

export type MutationGemsWalletResolveConnectArgs = {
  accept: Scalars['Boolean']['input']
  connectPayload: Scalars['String']['input']
  wallet: Scalars['String']['input']
}

export type MutationGemsWalletResolveRequestArgs = {
  accept: Scalars['Boolean']['input']
  requestId: Scalars['ID']['input']
}

export type MutationGemsWalletStartConnectArgs = {
  universalUrl: Scalars['String']['input']
}

export type MutationGeneratePreviewCollectibleArgs = {
  backdropS3Key?: InputMaybe<Scalars['String']['input']>
  dropSlug: Scalars['String']['input']
  modelS3Key?: InputMaybe<Scalars['String']['input']>
  symbolS3Key?: InputMaybe<Scalars['String']['input']>
}

export type MutationInitSubdomainArgs = {
  data: SubdomainData
  nftAddress: Scalars['String']['input']
}

export type MutationLaunchpadCreateBillArgs = {
  count?: InputMaybe<Scalars['Int']['input']>
  launchpadItemId: Scalars['String']['input']
}

export type MutationLoginArgs = {
  credentials: LoginCredentialsInput
}

export type MutationLoginTonConnectArgs = {
  payload: TonConnectAuthPayload
}

export type MutationLogoutArgs = {
  reason?: InputMaybe<Scalars['String']['input']>
}

export type MutationLostDogsWayApplyAdsGramArgs = {
  taskId: Scalars['ID']['input']
}

export type MutationLostDogsWayApplyNotEmptyWalletArgs = {
  taskId: Scalars['ID']['input']
}

export type MutationLostDogsWayBuyBoostArgs = {
  type: LostDogsWayBoostType
}

export type MutationLostDogsWayBuyDogsNotcoinArgs = {
  dogsCount: Scalars['Int']['input']
}

export type MutationLostDogsWayBuyDogsStarArgs = {
  dogsCount: Scalars['Int']['input']
}

export type MutationLostDogsWayCheckTgPaymentArgs = {
  check: Scalars['String']['input']
}

export type MutationLostDogsWayCompleteCommonTaskArgs = {
  id: Scalars['ID']['input']
}

export type MutationLostDogsWayCompleteTaskArgs = {
  type: LostDogsWayUserTaskType
}

export type MutationLostDogsWayLinkTonWalletArgs = {
  tonConnectProof: TonConnectAuthPayload
}

export type MutationLostDogsWayMovieBuyBoostArgs = {
  type: LostDogsWayMovieBoostType
}

export type MutationLostDogsWayMovieBuyNotcoinArgs = {
  amount: Scalars['String']['input']
}

export type MutationLostDogsWayMovieBuyNotcoinVariantArgs = {
  amount: Scalars['String']['input']
  variant: Scalars['String']['input']
}

export type MutationLostDogsWayMovieCompleteCommonTaskArgs = {
  id: Scalars['ID']['input']
}

export type MutationLostDogsWayMovieCompleteTaskArgs = {
  type: LostDogsWayUserTaskType
}

export type MutationLostDogsWayMovieSaveEventArgs = {
  data: LostDogsWayMovieSaveEventPayload
}

export type MutationLostDogsWayMovieVoteArgs = {
  value: Scalars['String']['input']
}

export type MutationLostDogsWayMovieVoteDateArgs = {
  dayId: Scalars['String']['input']
  value: Scalars['String']['input']
}

export type MutationLostDogsWaySaveEventArgs = {
  data: LostDogsWaySaveEventPayload
}

export type MutationLostDogsWaySaveExchangeFormArgs = {
  data: LostDogsWaySaveExchangeFormPayload
}

export type MutationLostDogsWayVoteArgs = {
  value: Scalars['String']['input']
}

export type MutationMakeMoveArgs = {
  lang?: InputMaybe<UserLang>
  move: GameMove
  nftAddress: Scalars['String']['input']
}

export type MutationMintGetGemsDnsArgs = {
  bidNano: Scalars['String']['input']
  domain: Scalars['String']['input']
}

export type MutationMintSubdomainDnsArgs = {
  bidNano: Scalars['String']['input']
  collectionAddress: Scalars['String']['input']
  domain: Scalars['String']['input']
}

export type MutationNftAuctionActivateArgs = {
  auctionAddress: Scalars['String']['input']
}

export type MutationNftAuctionBidCreateArgs = {
  amount: Scalars['String']['input']
  saleAddress: Scalars['String']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type MutationNftAuctionCancelMessageArgs = {
  auctionAddress: Scalars['String']['input']
}

export type MutationNftAuctionCreateArgs = {
  params: NftAuctionParams
}

export type MutationNftAuctionFinishMessageArgs = {
  auctionAddress: Scalars['String']['input']
}

export type MutationNftAuctionNoCancelCreateArgs = {
  params: NftAuctionNoCancelParams
}

export type MutationNftAuctionStopMessageArgs = {
  auctionAddress: Scalars['String']['input']
}

export type MutationNftCancelVoteArgs = {
  nftAddress: Scalars['String']['input']
}

export type MutationNftClaimArgs = {
  nftAddress: Scalars['String']['input']
}

export type MutationNftCreateTransferPayloadArgs = {
  newOwnerAddress: Scalars['String']['input']
  nftAddress: Scalars['String']['input']
}

export type MutationNftFixPriceSaleBuyArgs = {
  nftAddress: Scalars['String']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type MutationNftFixPriceSaleCancelArgs = {
  nftAddress: Scalars['String']['input']
}

export type MutationNftFixPriceSaleChangePriceArgs = {
  currency?: InputMaybe<Currency>
  fullPrice: Scalars['String']['input']
  nftAddress: Scalars['String']['input']
}

export type MutationNftFixPriceSaleCreateArgs = {
  currency?: InputMaybe<Currency>
  fullPrice: Scalars['String']['input']
  nftAddress: Scalars['String']['input']
  omitRoyalty?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationNftLinkAddressArgs = {
  newAddress?: InputMaybe<Scalars['String']['input']>
  nftAddress: Scalars['String']['input']
}

export type MutationNftOfferAcceptArgs = {
  offerAddress: Scalars['String']['input']
}

export type MutationNftOfferCancelArgs = {
  offerAddress: Scalars['String']['input']
}

export type MutationNftOfferCreateArgs = {
  params: NftOfferParams
  version?: InputMaybe<Scalars['String']['input']>
}

export type MutationNftOfferRejectByNftOwnerArgs = {
  offerAddress: Scalars['String']['input']
  reason?: InputMaybe<Scalars['String']['input']>
}

export type MutationNftRefreshMetadataArgs = {
  address: Scalars['String']['input']
}

export type MutationNftRevealArgs = {
  nftAddress: Scalars['String']['input']
}

export type MutationNftSetHiddenFlagArgs = {
  isHiddenByUser: Scalars['Boolean']['input']
  nftAddress: Scalars['String']['input']
}

export type MutationNftTelemintBidCreateArgs = {
  amount: Scalars['String']['input']
  nftAddress: Scalars['String']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type MutationNftUpdateCollectionArgs = {
  payload: UpdateCollectionInput
}

export type MutationNftVoteArgs = {
  key: Scalars['String']['input']
  nftAddress: Scalars['String']['input']
}

export type MutationPhotoAiChangeWalletAddressArgs = {
  payload: TonConnectAuthPayload
}

export type MutationPhotoAiCreateUserArgs = {
  userInput: PhotoAiUserInput
}

export type MutationPhotoAiGenerateArgs = {
  payload: PhotoAiGenerateInput
}

export type MutationPhotoAiSaveEventArgs = {
  data: PhotoAiSaveEventPayload
}

export type MutationPhotoAiUpdateUserArgs = {
  userInput: PhotoAiUpdateUserInput
}

export type MutationPocketSaveEventArgs = {
  data: PocketSaveEventPayload
}

export type MutationReactionsNftAddArgs = {
  address: Scalars['String']['input']
  reaction: ReactionType
}

export type MutationReactionsNftRemoveArgs = {
  address: Scalars['String']['input']
  reaction: ReactionType
}

export type MutationReadNotificationsArgs = {
  lastId: Scalars['ID']['input']
}

export type MutationRemoveNftReactionArgs = {
  address: Scalars['String']['input']
  reaction: ReactionType
}

export type MutationRevealCollectibleArgs = {
  id: Scalars['Int']['input']
}

export type MutationSaveCollectionNotificationsArgs = {
  collectionAddress: Scalars['String']['input']
  settings: CollectionNotificationSettingsInput
}

export type MutationSaveEventsArgs = {
  events: EventsPayload
}

export type MutationSaveLaunchpadStartNotificationSubscriptionArgs = {
  isSubscribing: Scalars['Boolean']['input']
  launchpadItemId: Scalars['String']['input']
}

export type MutationSaveNftNotificationsArgs = {
  nftAddress: Scalars['String']['input']
  settings: CollectionNotificationSettingsInput
}

export type MutationSaveNotificationsSettingsArgs = {
  settings: Array<SaveNotificationsSetting>
}

export type MutationSimpleTemporaryStorageSetArgs = {
  key: Scalars['String']['input']
  value: Scalars['String']['input']
}

export type MutationSubscribeToDropArgs = {
  dropId: Scalars['Int']['input']
}

export type MutationSuperAgeRestrictCollectionArgs = {
  address: Scalars['String']['input']
  comment?: InputMaybe<Scalars['String']['input']>
  isAgeRestrict: Scalars['Boolean']['input']
}

export type MutationSuperApproveCollectionArgs = {
  address: Scalars['String']['input']
  comment?: InputMaybe<Scalars['String']['input']>
  isApproving: Scalars['Boolean']['input']
}

export type MutationSuperApproveNftArgs = {
  address: Scalars['String']['input']
  comment?: InputMaybe<Scalars['String']['input']>
  isApproving: Scalars['Boolean']['input']
}

export type MutationSuperBlockCollectionArgs = {
  address: Scalars['String']['input']
  comment?: InputMaybe<Scalars['String']['input']>
  isBlocking: Scalars['Boolean']['input']
}

export type MutationSuperBlockNftArgs = {
  address: Scalars['String']['input']
  comment?: InputMaybe<Scalars['String']['input']>
  isBlocking: Scalars['Boolean']['input']
}

export type MutationSuperSetPriorityCollectionArgs = {
  address: Scalars['String']['input']
  comment?: InputMaybe<Scalars['String']['input']>
  priority: Scalars['Int']['input']
}

export type MutationSuperSetPriorityNftArgs = {
  address: Scalars['String']['input']
  comment?: InputMaybe<Scalars['String']['input']>
  priority: Scalars['Int']['input']
}

export type MutationSuperVerifyCollectionArgs = {
  address: Scalars['String']['input']
  comment?: InputMaybe<Scalars['String']['input']>
  isVerifying: Scalars['Boolean']['input']
}

export type MutationSyncCollectionArgs = {
  address: Scalars['String']['input']
}

export type MutationSyncItemArgs = {
  itemAddress: Scalars['String']['input']
}

export type MutationSyncNftArgs = {
  address: Scalars['String']['input']
}

export type MutationSyncPearlsBotUserArgs = {
  initData: Scalars['String']['input']
  walletType: Scalars['String']['input']
}

export type MutationTBattleJettonTransferTxArgs = {
  amount: Scalars['Float']['input']
}

export type MutationTBattleLinkTonWalletArgs = {
  tonConnectProof: TonConnectAuthPayload
}

export type MutationTBattleUserOnboardingArgs = {
  team: Scalars['Int']['input']
}

export type MutationTogglePearlsSubscriptionArgs = {
  channelId: Scalars['Int']['input']
}

export type MutationTonTxCheckStatusArgs = {
  payload: CheckTxPayload
}

export type MutationTonTxCheckTonkeeperStatusArgs = {
  uuid: Scalars['String']['input']
}

export type MutationTvBuyEpisodeArgs = {
  episodeId: Scalars['Int']['input']
}

export type MutationTvRecordEpisodeViewArgs = {
  episodeId: Scalars['Int']['input']
}

export type MutationTvSaveEventArgs = {
  data: TvSaveEventPayload
}

export type MutationUnsubscribeNotificationArgs = {
  subscriptionId: Scalars['String']['input']
}

export type MutationUnsubscribeToDropArgs = {
  dropId: Scalars['Int']['input']
}

export type MutationUpdateMeArgs = {
  data: UserInput
}

export type MutationWalletEggCancelSaleArgs = {
  nftAddress: Scalars['String']['input']
}

export type MutationWalletEggCheckTaskArgs = {
  code: WeTaskCode
}

export type MutationWalletEggDebugAddNftBotArgs = {
  id: Scalars['String']['input']
}

export type MutationWalletEggDebugDeleteUserArgs = {
  idOrWallet: Scalars['String']['input']
}

export type MutationWalletEggDebugMoveBotArgs = {
  id: Scalars['String']['input']
}

export type MutationWalletEggLinkTonWalletArgs = {
  tonConnectProof: TonConnectAuthPayload
}

export type MutationWalletEggMakeMoveArgs = {
  gameId: Scalars['ID']['input']
  move: GameMove
  nftAddress: Scalars['String']['input']
}

export type MutationWalletEggMakeSaleArgs = {
  nftAddress: Scalars['String']['input']
  price: Scalars['Float']['input']
}

export type MutationWalletEggSaveEventArgs = {
  data: WalletEggSaleEvent
}

export type MutationWalletEggUpdateTelegramVisibilityArgs = {
  show: Scalars['Boolean']['input']
}

export type NtAuctionBidMyNft = {
  auctionAddress: Scalars['String']['input']
  nftAddress: Scalars['String']['input']
  price: Scalars['String']['input']
  userAddress: Scalars['String']['input']
}

export type NtAuctionCancel = {
  auctionAddress: Scalars['String']['input']
  nftAddress: Scalars['String']['input']
}

export type NtAuctionEndsSoon = {
  auctionAddress: Scalars['String']['input']
  endTime?: InputMaybe<Scalars['Int']['input']>
  lastBidAmount: Scalars['String']['input']
  nftAddress: Scalars['String']['input']
  userAddress: Scalars['String']['input']
}

export type NtAuctionFinish = {
  auctionAddress: Scalars['String']['input']
  endTime?: InputMaybe<Scalars['Int']['input']>
  nftAddress: Scalars['String']['input']
  price: Scalars['String']['input']
  userAddress: Scalars['String']['input']
}

export type NtAuctionOverbid = {
  auctionAddress: Scalars['String']['input']
  newBidAmount: Scalars['String']['input']
  nftAddress: Scalars['String']['input']
  userAddress: Scalars['String']['input']
}

export type NtAuctionWin = {
  auctionAddress: Scalars['String']['input']
  nftAddress: Scalars['String']['input']
  price: Scalars['String']['input']
}

export type NtCollection = {
  collectionAddress: Scalars['String']['input']
  collectionName: Scalars['String']['input']
  floorPrice?: InputMaybe<Scalars['String']['input']>
  nftAddress: Scalars['String']['input']
  price: Scalars['String']['input']
}

export type NtDogSexLinkCreated = {
  collectionAddress: Scalars['String']['input']
  mergeId: Scalars['String']['input']
  nftAddress: Scalars['String']['input']
}

export type NtDogSexMergeSuccess = {
  collectionAddress: Scalars['String']['input']
  nftAddress: Scalars['String']['input']
}

export type NtEasterEggs = {
  nftAddress: Scalars['String']['input']
}

export type NtLaunchpadStart = {
  collectionAddress: Scalars['String']['input']
  launchpadItemSlug: Scalars['String']['input']
}

export type NtNft = {
  collectionAddress?: InputMaybe<Scalars['String']['input']>
  nftAddress: Scalars['String']['input']
  price: Scalars['String']['input']
}

export type NtOfferAccept = {
  nftAddress: Scalars['String']['input']
  price: Scalars['String']['input']
}

export type NtOfferDecline = {
  nftAddress: Scalars['String']['input']
  price: Scalars['String']['input']
}

export type NtOfferExpired = {
  nftAddress: Scalars['String']['input']
  price: Scalars['String']['input']
}

export type NtOfferMyNft = {
  nftAddress: Scalars['String']['input']
  offerAddress: Scalars['String']['input']
  price: Scalars['String']['input']
  userAddress: Scalars['String']['input']
}

export type NtSellOwnNft = {
  newOwner: Scalars['String']['input']
  nftAddress: Scalars['String']['input']
  price: Scalars['String']['input']
  sellAddress: Scalars['String']['input']
}

export type NeedsAuth = {
  __typename?: 'NeedsAuth'
  needsAuth?: Maybe<Scalars['Boolean']['output']>
}

export type NftActionButtonClickEvent = {
  buttonTitle?: InputMaybe<Scalars['String']['input']>
  buttonType: Scalars['String']['input']
  buttonUrl?: InputMaybe<Scalars['String']['input']>
  clientTimestampMs: Scalars['Float']['input']
  nftAddress: Scalars['String']['input']
  pageHash?: InputMaybe<Scalars['String']['input']>
  pageId?: InputMaybe<Scalars['String']['input']>
  pageTitle: Scalars['String']['input']
  pageType: Scalars['String']['input']
  url: Scalars['String']['input']
}

export type NftActionMessage = {
  __typename?: 'NftActionMessage'
  /** @deprecated use tx */
  amount: Scalars['String']['output']
  /** @deprecated use tx */
  textMessage: Scalars['String']['output']
  /** @deprecated use tx */
  toAddress: Scalars['String']['output']
  tx: TonTx
  /** @deprecated use tx */
  version: AuctionVersion
}

export type NftActionResult = {
  __typename?: 'NftActionResult'
  tx: TonTx
}

export type NftAttribute = {
  __typename?: 'NftAttribute'
  displayType?: Maybe<NftAttributeDisplayType>
  traitType: Scalars['String']['output']
  value: Scalars['String']['output']
}

export enum NftAttributeDisplayType {
  BoostNumber = 'BoostNumber',
  BoostPercentage = 'BoostPercentage',
  Date = 'Date',
  Number = 'Number',
}

export type NftAuctionBidHistory = {
  __typename?: 'NftAuctionBidHistory'
  cursor?: Maybe<Scalars['String']['output']>
  items: Array<NftAuctionBidItem>
}

export type NftAuctionBidItem = {
  __typename?: 'NftAuctionBidItem'
  amount: Scalars['String']['output']
  amountWithFee?: Maybe<Scalars['String']['output']>
  createdAt: Scalars['Int']['output']
  currency: Currency
  id: Scalars['ID']['output']
  user: User
}

export type NftAuctionNoCancelParams = {
  currency?: InputMaybe<Currency>
  finishAt: Scalars['Int']['input']
  maxBid?: InputMaybe<Scalars['String']['input']>
  minBid: Scalars['String']['input']
  minPercentStep: Scalars['Int']['input']
  nftAddress: Scalars['String']['input']
  omitRoyalty?: InputMaybe<Scalars['Boolean']['input']>
}

export type NftAuctionParams = {
  finishAt: Scalars['Int']['input']
  maxBid?: InputMaybe<Scalars['String']['input']>
  minBid: Scalars['String']['input']
  minStep?: InputMaybe<Scalars['String']['input']>
  nftAddress: Scalars['String']['input']
}

export type NftBanFromFragment = {
  __typename?: 'NftBanFromFragment'
  reason: Scalars['String']['output']
}

export type NftCategory = {
  __typename?: 'NftCategory'
  approximateHoldersCount: Scalars['Int']['output']
  approximateItemsCount: Scalars['Int']['output']
  collectionAddress: Scalars['String']['output']
  descriptionEn?: Maybe<Scalars['String']['output']>
  descriptionRu?: Maybe<Scalars['String']['output']>
  floorPrice?: Maybe<Scalars['Float']['output']>
  highlight: Scalars['Boolean']['output']
  id: Scalars['ID']['output']
  image: Scalars['String']['output']
  name: Scalars['String']['output']
  tonValue?: Maybe<Scalars['String']['output']>
}

export type NftCategoryConnection = {
  __typename?: 'NftCategoryConnection'
  cursor?: Maybe<Scalars['String']['output']>
  items: Array<Maybe<NftCategory>>
}

export type NftCategoryTop = {
  __typename?: 'NftCategoryTop'
  cursor?: Maybe<Scalars['String']['output']>
  items: Array<NftCategoryTopItem>
}

export type NftCategoryTopItem = {
  __typename?: 'NftCategoryTopItem'
  category: NftCategory
  currencyFloorPrice: Scalars['Float']['output']
  currencyValue: Scalars['Float']['output']
  diffPercent?: Maybe<Scalars['Float']['output']>
  floorPrice: Scalars['Float']['output']
  place: Scalars['Int']['output']
  tonValue: Scalars['String']['output']
}

export type NftCategoryTopItemCurrencyFloorPriceArgs = {
  currency: CurrencyType
}

export type NftCategoryTopItemCurrencyValueArgs = {
  currency: CurrencyType
}

export type NftClickPromoEvent = {
  clientTimestampMs: Scalars['Float']['input']
  nftAddress: Scalars['String']['input']
  pageHash?: InputMaybe<Scalars['String']['input']>
  pageId?: InputMaybe<Scalars['String']['input']>
  pageTitle: Scalars['String']['input']
  pageType: Scalars['String']['input']
  source: Scalars['String']['input']
  url: Scalars['String']['input']
}

export type NftCollection = {
  __typename?: 'NftCollection'
  address: Scalars['String']['output']
  announcementPrice: Scalars['String']['output']
  approximateHoldersCount: Scalars['Int']['output']
  approximateItemsCount: Scalars['Int']['output']
  coverImage?: Maybe<NftContentImage>
  description?: Maybe<Scalars['String']['output']>
  domain?: Maybe<Scalars['String']['output']>
  /** @deprecated never worked */
  floorPrice?: Maybe<Scalars['Float']['output']>
  hasCategories?: Maybe<Scalars['Boolean']['output']>
  hasRarityAttributes?: Maybe<Scalars['Boolean']['output']>
  id: Scalars['ID']['output']
  image?: Maybe<NftContentImage>
  isAgeRestrict?: Maybe<Scalars['Boolean']['output']>
  isAllowJettonSales?: Maybe<Scalars['Boolean']['output']>
  isApproved?: Maybe<Scalars['Boolean']['output']>
  isBadSalesHidden?: Maybe<Scalars['Boolean']['output']>
  isBlocked?: Maybe<Scalars['Boolean']['output']>
  /** @deprecated use type */
  isGetGemsDnsCollection?: Maybe<Scalars['Boolean']['output']>
  isNftCommentEnabled: Scalars['Boolean']['output']
  isRarityEnabled?: Maybe<Scalars['Boolean']['output']>
  isRarityValid?: Maybe<Scalars['Boolean']['output']>
  isVerified?: Maybe<Scalars['Boolean']['output']>
  name?: Maybe<Scalars['String']['output']>
  owner: User
  ownerAddress: Scalars['String']['output']
  /** @deprecated never selected */
  priority: Scalars['Int']['output']
  rawMetadata: Scalars['String']['output']
  royaltyParams?: Maybe<RoyaltyParams>
  socialLinks?: Maybe<Array<Scalars['String']['output']>>
  type: NftCollectionType
}

export type NftCollectionCategoriesItems = {
  __typename?: 'NftCollectionCategoriesItems'
  items: Array<NftCategory>
}

export enum NftCollectionCategoriesTopKind {
  All = 'all',
  Day = 'day',
  Month = 'month',
  Week = 'week',
}

export type NftCollectionConnection = {
  __typename?: 'NftCollectionConnection'
  cursor?: Maybe<Scalars['String']['output']>
  items: Array<NftCollection>
}

export type NftCollectionEdge = {
  __typename?: 'NftCollectionEdge'
  cursor: Scalars['String']['output']
  node: NftCollection
}

export type NftCollectionFilter = {
  __typename?: 'NftCollectionFilter'
  attributes: Array<FilterAttribute>
  currency: Array<FilterCurrencyType>
  isOnSale: FilterIsOnSale
  saleType: FilterSaleType
}

export type NftCollectionInput = {
  avatarId: Scalars['String']['input']
  coverId?: InputMaybe<Scalars['String']['input']>
  description: Scalars['String']['input']
  editableNft?: InputMaybe<Scalars['Boolean']['input']>
  name: Scalars['String']['input']
  royalty?: InputMaybe<Scalars['Float']['input']>
  royaltyStr?: InputMaybe<Scalars['String']['input']>
  socialLinks?: InputMaybe<Array<SocialLinkInput>>
}

export type NftCollectionOwnerStats = {
  __typename?: 'NftCollectionOwnerStats'
  amount7d: Scalars['Int']['output']
  collectionAddress: Scalars['String']['output']
  count: Scalars['Int']['output']
  id: Scalars['ID']['output']
  ownerAddress: Scalars['String']['output']
  ownerUser?: Maybe<User>
  updatedAt: Scalars['Int']['output']
  value7d: Scalars['String']['output']
}

export type NftCollectionOwnerStatsConnection = {
  __typename?: 'NftCollectionOwnerStatsConnection'
  cursor?: Maybe<Scalars['String']['output']>
  items: Array<NftCollectionOwnerStats>
}

export type NftCollectionSalesConnection = {
  __typename?: 'NftCollectionSalesConnection'
  isChartHidden: Scalars['Boolean']['output']
  items: Array<SaleItem>
  notcoinPriceHistory?: Maybe<Array<Maybe<NotcoinPriceHistoryItem>>>
}

export type NftCollectionSearchConnection = {
  __typename?: 'NftCollectionSearchConnection'
  edges: Array<NftCollectionEdge>
  info: PageInfo
}

export type NftCollectionStats = {
  __typename?: 'NftCollectionStats'
  floorPrice?: Maybe<Scalars['Float']['output']>
  holders: Scalars['Int']['output']
  itemsCount: Scalars['Int']['output']
  /** @deprecated use totalVolumeSold */
  totalVolume: Scalars['Float']['output']
  totalVolumeSold: Scalars['String']['output']
}

export type NftCollectionStatsCount = {
  __typename?: 'NftCollectionStatsCount'
  from2to5: Scalars['Int']['output']
  from6to24: Scalars['Int']['output']
  from25to50: Scalars['Int']['output']
  from50: Scalars['Int']['output']
  holders: Scalars['Int']['output']
  to1: Scalars['Int']['output']
  updatedAt: Scalars['Int']['output']
}

export enum NftCollectionType {
  Default = 'Default',
  DnsSubdomain = 'DnsSubdomain',
  GgDns = 'GgDns',
  TgGifts = 'TgGifts',
  TgNumbers = 'TgNumbers',
  TgUsernames = 'TgUsernames',
  TonDns = 'TonDns',
}

export enum NftColorScheme {
  Blue = 'blue',
  Gold = 'gold',
  Green = 'green',
  Mint = 'mint',
  Orange = 'orange',
  Pink = 'pink',
  Purple = 'purple',
  Red = 'red',
}

export type NftComment = {
  __typename?: 'NftComment'
  collectionAddress?: Maybe<Scalars['String']['output']>
  comment: Scalars['String']['output']
  id: Scalars['ID']['output']
  isBanned?: Maybe<Scalars['Boolean']['output']>
  isOnModeration?: Maybe<Scalars['Boolean']['output']>
  nftAddress?: Maybe<Scalars['String']['output']>
  user: User
  userAddress: Scalars['String']['output']
}

export type NftCommentConnection = {
  __typename?: 'NftCommentConnection'
  cursor?: Maybe<Scalars['String']['output']>
  items: Array<NftComment>
  totalCount: Scalars['Int']['output']
}

export type NftContent = NftContentImage | NftContentLottie | NftContentNotLoaded | NftContentVideo

export type NftContentImage = {
  __typename?: 'NftContentImage'
  image: Image
  originalUrl?: Maybe<Scalars['String']['output']>
}

export type NftContentLottie = {
  __typename?: 'NftContentLottie'
  image?: Maybe<Image>
  lottie: Scalars['String']['output']
}

export type NftContentNotLoaded = {
  __typename?: 'NftContentNotLoaded'
  notLoaded: Scalars['Boolean']['output']
}

export enum NftContentSourceType {
  Centralized = 'Centralized',
  Decentralized = 'Decentralized',
  GetGems = 'GetGems',
  Ipfs = 'Ipfs',
  OnChain = 'OnChain',
  TonStorage = 'TonStorage',
}

export type NftContentVideo = {
  __typename?: 'NftContentVideo'
  baseUrl: Scalars['String']['output']
  preview?: Maybe<Scalars['String']['output']>
  sized: Scalars['String']['output']
}

export type NftContentVideoPreviewArgs = {
  height: Scalars['Int']['input']
  width: Scalars['Int']['input']
}

export type NftContentVideoSizedArgs = {
  format?: InputMaybe<Scalars['String']['input']>
  height: Scalars['Int']['input']
  width: Scalars['Int']['input']
}

export type NftCreateSubdomainCollectionButton = {
  __typename?: 'NftCreateSubdomainCollectionButton'
  fullPrice: Scalars['String']['output']
}

export type NftCustomBadge = {
  __typename?: 'NftCustomBadge'
  background?: Maybe<NftCustomBadgeBackground>
  text: Scalars['String']['output']
}

export enum NftCustomBadgeBackground {
  Common = 'common',
  Epic = 'epic',
  Legendary = 'legendary',
  Rare = 'rare',
  Uncommon = 'uncommon',
}

export type NftItem = {
  __typename?: 'NftItem'
  actionButtons: Array<ActionButton>
  address: Scalars['String']['output']
  attributes: Array<NftAttribute>
  categoryIds: Array<Scalars['Int']['output']>
  /** @deprecated use shownButtons */
  claimButton?: Maybe<Scalars['Boolean']['output']>
  collection?: Maybe<NftCollection>
  colorScheme?: Maybe<NftColorScheme>
  commentPrice: Scalars['String']['output']
  content: NftContent
  contentSourceType: NftContentSourceType
  createSubdomainCollectionButton?: Maybe<NftCreateSubdomainCollectionButton>
  customBadge?: Maybe<NftCustomBadge>
  description?: Maybe<Scalars['String']['output']>
  domain?: Maybe<Scalars['String']['output']>
  editorAddress?: Maybe<Scalars['String']['output']>
  highlightIndices: Array<NftNameHighlightIndex>
  id: Scalars['ID']['output']
  index: Scalars['Float']['output']
  isApproved?: Maybe<Scalars['Boolean']['output']>
  isBlocked?: Maybe<Scalars['Boolean']['output']>
  isBurned: Scalars['Boolean']['output']
  isHiddenByUser: Scalars['Boolean']['output']
  isNftCommentEnabled: Scalars['Boolean']['output']
  isRevealable: Scalars['Boolean']['output']
  kind: NftItemKind
  lastSale?: Maybe<NftItemLastSale>
  layout?: Maybe<NftPageLayout>
  linkAddressButton?: Maybe<NftLinkButton>
  maxOffer?: Maybe<NftOffer>
  metadataSourceType: NftContentSourceType
  name?: Maybe<Scalars['String']['output']>
  owner: User
  ownerAddress: Scalars['String']['output']
  priority: Scalars['Int']['output']
  rarityAttributes?: Maybe<Array<RarityAttribute>>
  rarityRank?: Maybe<Scalars['Int']['output']>
  /** @deprecated field will be removed */
  rawMetadata: Scalars['String']['output']
  reactionCounters?: Maybe<ReactionCounter>
  sale?: Maybe<NftSale>
  showButtons: NftItemButtons
  stats?: Maybe<NftItemStats>
  version: Scalars['String']['output']
  warningBanner?: Maybe<NftWarningBanner>
}

export type NftItemHighlightIndicesArgs = {
  categoryId?: InputMaybe<Scalars['String']['input']>
}

export type NftItemButton = {
  __typename?: 'NftItemButton'
  displayTo: NftItemButtonDisplayTo
}

export enum NftItemButtonDisplayTo {
  All = 'All',
  Nobody = 'Nobody',
  NotOwner = 'NotOwner',
  Owner = 'Owner',
}

export type NftItemButtons = {
  __typename?: 'NftItemButtons'
  buyNft: NftItemButton
  claimJetton: NftItemButton
  /** @deprecated use createSubdomainCollection */
  createSubdomain: NftItemButton
  createSubdomainCollection: NftItemButton
  makeBid: NftItemButton
  makeOffer: NftItemButton
  mintCNft: NftItemButton
  putOnAuction: NftItemButton
  putOnSale: NftItemButton
  transferNft: NftItemButton
}

export type NftItemConnection = {
  __typename?: 'NftItemConnection'
  cursor?: Maybe<Scalars['String']['output']>
  items: Array<NftItem>
}

export type NftItemDraftDeployInfo = {
  __typename?: 'NftItemDraftDeployInfo'
  collectionAddress: Scalars['String']['output']
  contractAddress: Scalars['String']['output']
  forwardAmount: Scalars['String']['output']
  messageBody: Scalars['String']['output']
  recommendedValue: Scalars['String']['output']
}

export type NftItemEdge = {
  __typename?: 'NftItemEdge'
  cursor: Scalars['String']['output']
  node: NftItem
}

export type NftItemHistory = {
  __typename?: 'NftItemHistory'
  address: Scalars['String']['output']
  collectionAddress?: Maybe<Scalars['String']['output']>
  createdAt: Scalars['Int']['output']
  hash: Scalars['String']['output']
  id: Scalars['ID']['output']
  lt: Scalars['String']['output']
  nft?: Maybe<NftItem>
  time: Scalars['Int']['output']
  typeData?: Maybe<NftItemHistoryType>
}

export type NftItemHistoryConnection = {
  __typename?: 'NftItemHistoryConnection'
  cursor?: Maybe<Scalars['String']['output']>
  items: Array<NftItemHistory>
}

export type NftItemHistoryCounts = {
  __typename?: 'NftItemHistoryCounts'
  burn?: Maybe<Scalars['Int']['output']>
  cancelAuction: Scalars['Int']['output']
  cancelSale: Scalars['Int']['output']
  mint: Scalars['Int']['output']
  putUpForAuction: Scalars['Int']['output']
  putUpForSale: Scalars['Int']['output']
  sold: Scalars['Int']['output']
  transfer: Scalars['Int']['output']
  updatedAt: Scalars['Int']['output']
}

export type NftItemHistoryType =
  | HistoryTypeBurn
  | HistoryTypeCancelAuction
  | HistoryTypeCancelSale
  | HistoryTypeMint
  | HistoryTypePutUpForAuction
  | HistoryTypePutUpForSale
  | HistoryTypeSold
  | HistoryTypeTransfer

export type NftItemInput = {
  attributes?: InputMaybe<Array<MetadataAttributeInput>>
  collectionAddress: Scalars['String']['input']
  description: Scalars['String']['input']
  imageId: Scalars['String']['input']
  name: Scalars['String']['input']
  videoId?: InputMaybe<Scalars['String']['input']>
}

export enum NftItemKind {
  CollectionItem = 'CollectionItem',
  DnsItem = 'DnsItem',
  SbtItem = 'SbtItem',
  SbtSingle = 'SbtSingle',
  Single = 'Single',
  SyntheticItem = 'SyntheticItem',
  SyntheticSbt = 'SyntheticSbt',
}

export type NftItemLastSale = {
  __typename?: 'NftItemLastSale'
  currency: Currency
  date: Scalars['Int']['output']
  fullPrice: Scalars['String']['output']
}

export type NftItemSale = {
  __typename?: 'NftItemSale'
  address: Scalars['String']['output']
  content: NftContent
  contentSourceType: NftContentSourceType
  name: Scalars['String']['output']
  price: Scalars['Float']['output']
  rarityRank: Scalars['Int']['output']
}

export type NftItemSearchConnection = {
  __typename?: 'NftItemSearchConnection'
  edges: Array<NftItemEdge>
  info: PageInfo
}

export type NftItemStats = {
  __typename?: 'NftItemStats'
  address: Scalars['String']['output']
  prevOwnersCount: Scalars['Int']['output']
}

export type NftItemUpdateAuctionCancel = {
  __typename?: 'NftItemUpdateAuctionCancel'
  type: Scalars['String']['output']
}

export type NftItemUpdateAuctionFinish = {
  __typename?: 'NftItemUpdateAuctionFinish'
  amount: Scalars['String']['output']
  type: Scalars['String']['output']
  userAddress: Scalars['String']['output']
}

export type NftItemUpdateAuctionNewBid = {
  __typename?: 'NftItemUpdateAuctionNewBid'
  amount: Scalars['String']['output']
  bid: NftAuctionBidItem
  type: Scalars['String']['output']
  userAddress: Scalars['String']['output']
}

export type NftItemUpdateEvent = {
  __typename?: 'NftItemUpdateEvent'
  nftAddress: Scalars['String']['output']
  payload: NftItemUpdatePayload
}

export type NftItemUpdatePayload =
  | NftItemUpdateAuctionCancel
  | NftItemUpdateAuctionFinish
  | NftItemUpdateAuctionNewBid

export type NftLinkButton = {
  __typename?: 'NftLinkButton'
  isShortUrl: Scalars['Boolean']['output']
  linkButton: Scalars['Boolean']['output']
  linkedTo?: Maybe<NftObject>
  slug: Scalars['String']['output']
  unlinkButton: Scalars['Boolean']['output']
}

export enum NftMintType {
  BuyNow = 'BuyNow',
  DroppingSoon = 'DroppingSoon',
  LimitedAuction = 'LimitedAuction',
  OpenBids = 'OpenBids',
}

export type NftNameHighlightIndex = {
  __typename?: 'NftNameHighlightIndex'
  endIndex: Scalars['Int']['output']
  startIndex: Scalars['Int']['output']
}

export type NftNotificationsList = {
  __typename?: 'NftNotificationsList'
  cursor?: Maybe<Scalars['String']['output']>
  items?: Maybe<Array<NotificationSubscribedNft>>
}

export type NftObject = NftCollection | NftItem | User

export type NftOffer = {
  __typename?: 'NftOffer'
  currency: Currency
  feeAddress: Scalars['String']['output']
  feePrice: Scalars['String']['output']
  finishAt: Scalars['Int']['output']
  fullPrice: Scalars['String']['output']
  isKnownMarketplaceFeeReceiver: Scalars['Boolean']['output']
  offerAddress: Scalars['String']['output']
  profitPrice: Scalars['String']['output']
  royaltyAddress: Scalars['String']['output']
  royaltyPrice: Scalars['String']['output']
  user: User
}

export type NftOfferList = {
  __typename?: 'NftOfferList'
  cursor?: Maybe<Scalars['String']['output']>
  items: Array<NftOffer>
}

export type NftOfferParams = {
  finishAt: Scalars['Int']['input']
  nftAddress: Scalars['String']['input']
  omitRoyalty?: InputMaybe<Scalars['Boolean']['input']>
  price: Scalars['String']['input']
}

export type NftPageLayout = NftPageLayoutDogSex | NftPageLayoutEasterEggs | NftPageLayoutVoting

export type NftPageLayoutDogSex = {
  __typename?: 'NftPageLayoutDogSex'
  isDogSex: Scalars['Boolean']['output']
  mergeCount?: Maybe<Scalars['Int']['output']>
  parents: Array<NftItem>
}

export type NftPageLayoutEasterEggs = {
  __typename?: 'NftPageLayoutEasterEggs'
  isEasterEggs: Scalars['Boolean']['output']
}

export type NftPageLayoutVoting = {
  __typename?: 'NftPageLayoutVoting'
  description: Scalars['String']['output']
  finishAt: Scalars['Int']['output']
  isFinished: Scalars['Boolean']['output']
  isNeedToMint: Scalars['Boolean']['output']
  isVoteable: Scalars['Boolean']['output']
  isVoted: Scalars['Boolean']['output']
  startAt: Scalars['Int']['output']
  title: Scalars['String']['output']
  variants: Array<NftVotingVariant>
}

export type NftPageLayoutVotingDescriptionArgs = {
  lang?: InputMaybe<UserLang>
}

export type NftPageLayoutVotingTitleArgs = {
  lang?: InputMaybe<UserLang>
}

export type NftReactionsConnection = {
  __typename?: 'NftReactionsConnection'
  cursor?: Maybe<Scalars['String']['output']>
  items: Array<Reaction>
  nft: NftItem
}

export type NftSale = NftSaleAuction | NftSaleFixPrice | NftSaleFixPriceDisintar | TelemintAuction

export type NftSaleAuction = {
  __typename?: 'NftSaleAuction'
  address: Scalars['String']['output']
  cancelButton: Scalars['Boolean']['output']
  currency: Currency
  end: Scalars['Boolean']['output']
  finishAt: Scalars['Int']['output']
  finishButton: Scalars['Boolean']['output']
  isCancelable: Scalars['Boolean']['output']
  lastBidAddress?: Maybe<Scalars['String']['output']>
  lastBidAmount?: Maybe<Scalars['String']['output']>
  lastBidAmountWithFee?: Maybe<Scalars['String']['output']>
  lastBidAt?: Maybe<Scalars['Int']['output']>
  lastBidUser?: Maybe<User>
  marketplace: Marketplace
  marketplaceFeeAddress: Scalars['String']['output']
  marketplaceFeePercent: Scalars['Float']['output']
  maxBid?: Maybe<Scalars['String']['output']>
  minBid: Scalars['String']['output']
  minNextBid: Scalars['String']['output']
  minStep: Scalars['String']['output']
  networkFee?: Maybe<Scalars['String']['output']>
  nftOwnerAddress: Scalars['String']['output']
  royaltyAddress: Scalars['String']['output']
  royaltyPercent: Scalars['Float']['output']
  stepIsPercent: Scalars['Boolean']['output']
  version: AuctionVersion
}

export type NftSaleDeployMessageResponse = {
  __typename?: 'NftSaleDeployMessageResponse'
  destinationAddress: Scalars['String']['output']
  extra: Scalars['String']['output']
  marketplaceFee: Scalars['String']['output']
  messageCell: Scalars['String']['output']
  recommendedValue: Scalars['String']['output']
  resultingSaleAddress: Scalars['String']['output']
  royaltyAmount: Scalars['String']['output']
}

export type NftSaleFee = {
  __typename?: 'NftSaleFee'
  isRoyaltyOptional: Scalars['Boolean']['output']
  marketplaceFee: Scalars['Float']['output']
  marketplaceFeeAddress: Scalars['String']['output']
  royaltyAddress?: Maybe<Scalars['String']['output']>
  royaltyPercent?: Maybe<Scalars['Float']['output']>
}

export type NftSaleFixPrice = {
  __typename?: 'NftSaleFixPrice'
  address: Scalars['String']['output']
  currency: Currency
  fullPrice: Scalars['String']['output']
  marketplace: Marketplace
  marketplaceFee: Scalars['String']['output']
  marketplaceFeeAddress: Scalars['String']['output']
  networkFee?: Maybe<Scalars['String']['output']>
  nftOwnerAddress: Scalars['String']['output']
  royaltyAddress: Scalars['String']['output']
  royaltyAmount: Scalars['String']['output']
}

export type NftSaleFixPriceDisintar = {
  __typename?: 'NftSaleFixPriceDisintar'
  address: Scalars['String']['output']
  fullPrice: Scalars['String']['output']
  marketplace: Marketplace
  marketplaceFee: Scalars['String']['output']
  marketplaceFeeAddress: Scalars['String']['output']
  networkFee?: Maybe<Scalars['String']['output']>
  nftOwnerAddress: Scalars['String']['output']
  royaltyAddress: Scalars['String']['output']
  royaltyAmount: Scalars['String']['output']
}

export type NftSingleDraftDeployInfo = {
  __typename?: 'NftSingleDraftDeployInfo'
  contractAddress: Scalars['String']['output']
  recommendedValue: Scalars['String']['output']
  stateInit: Scalars['String']['output']
}

export type NftSingleInput = {
  attributes?: InputMaybe<Array<MetadataAttributeInput>>
  description: Scalars['String']['input']
  imageId: Scalars['String']['input']
  name: Scalars['String']['input']
  royalty?: InputMaybe<Scalars['Int']['input']>
  royaltyStr?: InputMaybe<Scalars['String']['input']>
  videoId?: InputMaybe<Scalars['String']['input']>
}

export enum NftStateBeforeSale {
  Lose = 'Lose',
  Win = 'Win',
}

export type NftVotingResponse = {
  __typename?: 'NftVotingResponse'
  isVoted: Scalars['Boolean']['output']
  variants: Array<NftVotingVariant>
}

export type NftVotingVariant = {
  __typename?: 'NftVotingVariant'
  isChecked: Scalars['Boolean']['output']
  key: Scalars['String']['output']
  statsCount: Scalars['Int']['output']
  statsPercent: Scalars['String']['output']
  text: Scalars['String']['output']
}

export type NftVotingVariantTextArgs = {
  lang?: InputMaybe<UserLang>
}

export type NftWarningBanner = NftBanFromFragment

export type NoGame = {
  __typename?: 'NoGame'
  isNoGame: Scalars['Boolean']['output']
  state?: Maybe<GameState>
}

export type NotcoinPriceHistoryItem = {
  __typename?: 'NotcoinPriceHistoryItem'
  date: Scalars['String']['output']
  price: Scalars['Float']['output']
}

export type Notification = GroupLayout | SimpleLayout

export type NotificationAction = NotificationActionEmpty | NotificationActionUnsubscribe

export type NotificationActionEmpty = {
  __typename?: 'NotificationActionEmpty'
  _?: Maybe<Scalars['Boolean']['output']>
}

export type NotificationActionUnsubscribe = {
  __typename?: 'NotificationActionUnsubscribe'
  id: Scalars['ID']['output']
}

export enum NotificationSettingBlockIcon {
  AuctionSettings = 'auctionSettings',
  DogSexSettings = 'dogSexSettings',
  EasterEggsSettings = 'easterEggsSettings',
  NftCollectionSettings = 'nftCollectionSettings',
  OfferSettings = 'offerSettings',
  OwnNftSettings = 'ownNftSettings',
}

export type NotificationState = {
  __typename?: 'NotificationState'
  count: Scalars['Int']['output']
}

export type NotificationSubscribedCollection = {
  __typename?: 'NotificationSubscribedCollection'
  address: Scalars['String']['output']
  collection?: Maybe<NftCollection>
  settings: CollectionNotificationSettings
}

export type NotificationSubscribedNft = {
  __typename?: 'NotificationSubscribedNft'
  address: Scalars['String']['output']
  nft?: Maybe<NftItem>
  settings: CollectionNotificationSettings
}

export type NotificationTypeData = {
  auctionBidMyNft?: InputMaybe<NtAuctionBidMyNft>
  auctionCancel?: InputMaybe<NtAuctionCancel>
  auctionEndsSoon?: InputMaybe<NtAuctionEndsSoon>
  auctionFinish?: InputMaybe<NtAuctionFinish>
  auctionOverbid?: InputMaybe<NtAuctionOverbid>
  auctionWin?: InputMaybe<NtAuctionWin>
  collectionPutUpForAuction?: InputMaybe<NtCollection>
  collectionPutUpForSale?: InputMaybe<NtCollection>
  collectionSold?: InputMaybe<NtCollection>
  dogSexLinkCreated?: InputMaybe<NtDogSexLinkCreated>
  dogSexMergeSuccess?: InputMaybe<NtDogSexMergeSuccess>
  easterEggsDraw?: InputMaybe<NtEasterEggs>
  easterEggsLose?: InputMaybe<NtEasterEggs>
  easterEggsNextRound?: InputMaybe<NtEasterEggs>
  easterEggsNextSale?: InputMaybe<NtEasterEggs>
  easterEggsWin?: InputMaybe<NtEasterEggs>
  launchpadStart?: InputMaybe<NtLaunchpadStart>
  nftPutUpForAuction?: InputMaybe<NtNft>
  nftPutUpForSale?: InputMaybe<NtNft>
  nftSold?: InputMaybe<NtNft>
  offerAccept?: InputMaybe<NtOfferAccept>
  offerDecline?: InputMaybe<NtOfferDecline>
  offerExpired?: InputMaybe<NtOfferExpired>
  offerMyNft?: InputMaybe<NtOfferMyNft>
  sellOwnNft?: InputMaybe<NtSellOwnNft>
}

export type NotificationsList = {
  __typename?: 'NotificationsList'
  cursor?: Maybe<Scalars['String']['output']>
  lastId?: Maybe<Scalars['ID']['output']>
  notifications?: Maybe<Array<Notification>>
}

export type NotificationsSetting = {
  __typename?: 'NotificationsSetting'
  key: SettingsNames
  name: Scalars['String']['output']
  value: Scalars['Boolean']['output']
}

export type NotificationsSettingsBlock = {
  __typename?: 'NotificationsSettingsBlock'
  icon: NotificationSettingBlockIcon
  name: Scalars['String']['output']
  settings: Array<NotificationsSetting>
}

export type PageInfo = {
  __typename?: 'PageInfo'
  hasNextPage: Scalars['Boolean']['output']
}

export type PageViewEvent = {
  clientTimestampMs: Scalars['Float']['input']
  firstInSession: Scalars['Boolean']['input']
  firstInTab: Scalars['Boolean']['input']
  pageHash?: InputMaybe<Scalars['String']['input']>
  pageId?: InputMaybe<Scalars['String']['input']>
  pageTitle: Scalars['String']['input']
  pageType: Scalars['String']['input']
  url: Scalars['String']['input']
}

export type PearlCounter = {
  __typename?: 'PearlCounter'
  badgeType: BadgeType
  priority?: Maybe<Scalars['Int']['output']>
  value: Scalars['String']['output']
}

export enum PearlIconType {
  Balance = 'balance',
  CollectionHolders = 'collectionHolders',
  Custom = 'custom',
  Everyone = 'everyone',
}

export type PearlImage = {
  __typename?: 'PearlImage'
  badgeType: BadgeType
  image: Scalars['String']['output']
}

export type PearlItem = {
  __typename?: 'PearlItem'
  additionalLimitation?: Maybe<PearlLimitation>
  artistName: Scalars['String']['output']
  artistUrl: Scalars['String']['output']
  counters: Array<Maybe<PearlCounter>>
  date: Scalars['String']['output']
  description: Scalars['String']['output']
  id: Scalars['ID']['output']
  images: Array<PearlImage>
  isFinished: Scalars['Boolean']['output']
  limitation?: Maybe<PearlLimitation>
  title: Scalars['String']['output']
  url?: Maybe<Scalars['String']['output']>
}

export type PearlLimitation = {
  __typename?: 'PearlLimitation'
  icon?: Maybe<PearlLimitationIcon>
  text: Scalars['String']['output']
}

export type PearlLimitationIcon = {
  __typename?: 'PearlLimitationIcon'
  icon?: Maybe<Scalars['String']['output']>
  iconType: PearlIconType
}

export type PearlsChannelStatsResponse = {
  __typename?: 'PearlsChannelStatsResponse'
  numberOfTrades: Scalars['Int']['output']
  subscribersCount: Scalars['Int']['output']
  totalVolume: Scalars['String']['output']
}

export type PearlsChannelsItem = {
  __typename?: 'PearlsChannelsItem'
  address?: Maybe<Scalars['String']['output']>
  avatar: Scalars['String']['output']
  cover: Scalars['String']['output']
  description: Scalars['String']['output']
  id: Scalars['ID']['output']
  slug: Scalars['String']['output']
  socialLinks?: Maybe<Array<SocialLink>>
  title: Scalars['String']['output']
}

export type PearlsDropsItem = {
  __typename?: 'PearlsDropsItem'
  collectionAddress?: Maybe<Scalars['String']['output']>
  date: Scalars['String']['output']
  description: Scalars['String']['output']
  id: Scalars['ID']['output']
  images: Array<PearlImage>
  nftCount: Scalars['Int']['output']
  nftImages?: Maybe<Array<Scalars['String']['output']>>
  pearlsChannel?: Maybe<PearlsChannelsItem>
  pearlsChannelId: Scalars['Int']['output']
  slug: Scalars['String']['output']
  subDescription?: Maybe<Scalars['String']['output']>
  subDescriptionIcon?: Maybe<Scalars['String']['output']>
  title: Scalars['String']['output']
}

export type PearlsDropsListResponse = {
  __typename?: 'PearlsDropsListResponse'
  cursor?: Maybe<Scalars['String']['output']>
  items: Array<PearlsDropsItem>
}

export type PearlsListResponse = {
  __typename?: 'PearlsListResponse'
  cursor?: Maybe<Scalars['String']['output']>
  data: Array<Maybe<PearlItem>>
}

export type PhotoAiEventUtm = {
  campaign?: InputMaybe<Scalars['String']['input']>
  content?: InputMaybe<Scalars['String']['input']>
  medium?: InputMaybe<Scalars['String']['input']>
  source?: InputMaybe<Scalars['String']['input']>
  term?: InputMaybe<Scalars['String']['input']>
}

export type PhotoAiFillBalanceResponse = {
  __typename?: 'PhotoAIFillBalanceResponse'
  tx: TonTx
}

export type PhotoAiFrontEvent = {
  continueTap?: InputMaybe<Scalars['Boolean']['input']>
  createPhotoTap?: InputMaybe<Scalars['Boolean']['input']>
  genderChoseTap?: InputMaybe<Scalars['Boolean']['input']>
  launch?: InputMaybe<Scalars['Boolean']['input']>
  page: Scalars['String']['input']
  pageView?: InputMaybe<Scalars['String']['input']>
  payTap?: InputMaybe<Scalars['Boolean']['input']>
  paymentPopupCloseButtonTap?: InputMaybe<Scalars['Boolean']['input']>
  paymentPopupView?: InputMaybe<Scalars['Boolean']['input']>
  photoUploadTap?: InputMaybe<Scalars['Boolean']['input']>
  shareLinkTap?: InputMaybe<Scalars['Boolean']['input']>
  sharePhotoTap?: InputMaybe<Scalars['Boolean']['input']>
  styleChoseTap?: InputMaybe<PhotoAiStyleChoseTapEvent>
  timeMs: Scalars['Float']['input']
  walletConnectTap?: InputMaybe<Scalars['Boolean']['input']>
}

export enum PhotoAiGender {
  Man = 'man',
  Woman = 'woman',
}

export type PhotoAiGenerateInput = {
  styleId: Scalars['String']['input']
}

export type PhotoAiGenerateResponse = {
  __typename?: 'PhotoAIGenerateResponse'
  generationId: Scalars['String']['output']
}

export type PhotoAiGeneration = {
  __typename?: 'PhotoAIGeneration'
  id: Scalars['ID']['output']
  imageUrlList?: Maybe<Array<Scalars['String']['output']>>
}

export type PhotoAiGetGenerationByIdResponse = {
  __typename?: 'PhotoAIGetGenerationByIdResponse'
  generation?: Maybe<PhotoAiGeneration>
}

export type PhotoAiGetGenerationHistoryResponse = {
  __typename?: 'PhotoAIGetGenerationHistoryResponse'
  cursor?: Maybe<Scalars['String']['output']>
  items: Array<PhotoAiGeneration>
}

export type PhotoAiGetStylesResponse = {
  __typename?: 'PhotoAIGetStylesResponse'
  cursor?: Maybe<Scalars['String']['output']>
  items: Array<PhotoAiStyle>
}

export type PhotoAiSaveEventPayload = {
  events: Array<PhotoAiFrontEvent>
  utm?: InputMaybe<PhotoAiEventUtm>
  visitorId: Scalars['String']['input']
}

export type PhotoAiStyle = {
  __typename?: 'PhotoAIStyle'
  id: Scalars['String']['output']
  imageUrl: Scalars['String']['output']
  name: Scalars['String']['output']
  styleId: Scalars['String']['output']
}

export type PhotoAiStyleChoseTapEvent = {
  styleId: Scalars['String']['input']
}

export type PhotoAiUpdateUserInput = {
  gender?: InputMaybe<PhotoAiGender>
  photoId?: InputMaybe<Scalars['String']['input']>
}

export type PhotoAiUser = {
  __typename?: 'PhotoAIUser'
  gender?: Maybe<PhotoAiGender>
  id: Scalars['ID']['output']
  photoUrl?: Maybe<Scalars['String']['output']>
}

export type PhotoAiUserCredentials = {
  __typename?: 'PhotoAIUserCredentials'
  balance: Scalars['String']['output']
  userId: Scalars['Int']['output']
  walletAddress: Scalars['String']['output']
}

export type PhotoAiUserInput = {
  gender: PhotoAiGender
  photoId: Scalars['String']['input']
}

export type PhotoAiUserProfileResponse = {
  __typename?: 'PhotoAIUserProfileResponse'
  credentials: PhotoAiUserCredentials
  user: PhotoAiUser
}

export type PocketCheckPaymentResponse = {
  __typename?: 'PocketCheckPaymentResponse'
  status: PocketPaymentStatus
}

export type PocketCollectible = {
  __typename?: 'PocketCollectible'
  backdrop: PocketCollectibleAttribute
  comment?: Maybe<Scalars['String']['output']>
  countAvailable?: Maybe<Scalars['Int']['output']>
  countRevealed?: Maybe<Scalars['Int']['output']>
  dateCreated: Scalars['String']['output']
  dropId: Scalars['Int']['output']
  id: Scalars['Int']['output']
  image: Scalars['String']['output']
  model: PocketCollectibleAttribute
  pocketDrop: PocketDropForCollectible
  revealed: Scalars['Boolean']['output']
  symbol: PocketCollectibleAttribute
  tgOwnerId: Scalars['String']['output']
}

export type PocketCollectibleAttribute = {
  __typename?: 'PocketCollectibleAttribute'
  name: Scalars['String']['output']
  rarity: Scalars['Float']['output']
}

export type PocketCollectibleAttributePreview = {
  __typename?: 'PocketCollectibleAttributePreview'
  image: Scalars['String']['output']
  name: Scalars['String']['output']
  rarity: Scalars['Float']['output']
  s3Key: Scalars['String']['output']
}

export type PocketCollectibleBase = {
  __typename?: 'PocketCollectibleBase'
  dropId: Scalars['Int']['output']
  id: Scalars['Int']['output']
  image: Scalars['String']['output']
  maxCollectiblesCount?: Maybe<Scalars['Int']['output']>
  revealed: Scalars['Boolean']['output']
  tgOwnerId: Scalars['String']['output']
}

export type PocketDrop = {
  __typename?: 'PocketDrop'
  artist: Scalars['String']['output']
  artistIcon: Scalars['String']['output']
  collectibles?: Maybe<Array<PocketCollectibleBase>>
  collectiblesReceived: Scalars['Int']['output']
  collectorsCount?: Maybe<Scalars['Int']['output']>
  cover: Scalars['String']['output']
  date: Scalars['String']['output']
  description: Scalars['String']['output']
  id: Scalars['Int']['output']
  isCurrentUserSubscribed?: Maybe<Scalars['Boolean']['output']>
  maxCollectiblesCount: Scalars['Int']['output']
  revealPrice: Scalars['Int']['output']
  slug: Scalars['String']['output']
  title: Scalars['String']['output']
}

export type PocketDropForCollectible = {
  __typename?: 'PocketDropForCollectible'
  id: Scalars['Int']['output']
  maxCollectiblesCount: Scalars['Int']['output']
  revealPrice: Scalars['Int']['output']
  slug: Scalars['String']['output']
  title: Scalars['String']['output']
}

export type PocketDropPreview = {
  __typename?: 'PocketDropPreview'
  backdropValues: Array<PocketCollectibleAttributePreview>
  defaultCollectibleImage: Scalars['String']['output']
  id: Scalars['Int']['output']
  modelValues: Array<PocketCollectibleAttributePreview>
  slug: Scalars['String']['output']
  symbolValues: Array<PocketCollectibleAttributePreview>
  title: Scalars['String']['output']
}

export type PocketEventData = {
  price: Scalars['Int']['input']
}

export type PocketFrontEvent = {
  eventData?: InputMaybe<PocketEventData>
  eventName?: InputMaybe<Scalars['String']['input']>
  page: Scalars['String']['input']
  timeMs: Scalars['Float']['input']
}

export type PocketPayment = {
  __typename?: 'PocketPayment'
  link: Scalars['String']['output']
  purchaseId: Scalars['Int']['output']
}

export type PocketPaymentResponse = {
  __typename?: 'PocketPaymentResponse'
  payment: PocketPayment
}

export enum PocketPaymentStatus {
  Failed = 'failed',
  Paid = 'paid',
  Progress = 'progress',
}

export type PocketSaveEventPayload = {
  events: Array<PocketFrontEvent>
}

export type PocketUser = {
  __typename?: 'PocketUser'
  createdAt: Scalars['String']['output']
  fullName?: Maybe<Scalars['String']['output']>
  isPremium: Scalars['Boolean']['output']
  lang: UserLang
  telegramId: Scalars['String']['output']
  userName?: Maybe<Scalars['String']['output']>
}

export type Price = {
  __typename?: 'Price'
  rub: Scalars['Float']['output']
  ton: Scalars['Float']['output']
  usd: Scalars['Float']['output']
}

export type PriceBadge = {
  __typename?: 'PriceBadge'
  price?: Maybe<Scalars['String']['output']>
  type: PriceBadgeType
}

export enum PriceBadgeType {
  AuctionBidNft = 'AuctionBidNft',
  OfferNft = 'OfferNft',
}

export type PromotionBannerClick = {
  bannerName: Scalars['String']['input']
  clientTimestampMs: Scalars['Float']['input']
  pageHash?: InputMaybe<Scalars['String']['input']>
  pageId?: InputMaybe<Scalars['String']['input']>
  pageTitle: Scalars['String']['input']
  pageType: Scalars['String']['input']
  url: Scalars['String']['input']
}

export type Query = {
  __typename?: 'Query'
  absurdDropStatus: AbsurdDropStatus
  adminActionsHistoryList: AdminActionsHistoryListResponse
  alphaNftCollectionFilter?: Maybe<NftCollectionFilter>
  alphaNftCollectionSearch: NftCollectionSearchConnection
  alphaNftCollectionStats?: Maybe<NftCollectionStats>
  alphaNftItemByAddress?: Maybe<NftItem>
  alphaNftItemSearch: NftItemSearchConnection
  alphaNftItemsByAddressList: Array<NftItem>
  auctionsTop: NftItemConnection
  bannerInfo: BannerResponse
  checkGame: GameReponse
  checkGetGemsDns: GetGemsDnsInfo
  checkGetGemsDnsIsFree: GetGemsDnsStatus
  checkSubdomainDnsIsFree: SubdomainStatus
  checkUserAdmin: Scalars['Boolean']['output']
  collectibleById?: Maybe<PocketCollectible>
  collectionNotifications: CollectionNotificationSettings
  collectionNotificationsList: CollectionNotificationsList
  collectionSalesTop: NftItemHistoryConnection
  /** @deprecated use getCreatedCollections */
  collectionsForDeployTo: NftCollectionConnection
  countCollectionsNftsByUser: CollectionNftsCountConnection
  countHistoryNftCollection: NftItemHistoryCounts
  countSbtCollectionsNftsByUser: CollectionNftsCountConnection
  currentSession?: Maybe<AuthSession>
  dogSexGetMerge: DogSexMerge
  dogSexHasRadioActiveNft: Scalars['Boolean']['output']
  draftNftCollectionsByUserId: DraftNftCollectionsByUserId
  draftNftItemsByUserId: DraftNftItemsByUserId
  featuredBanners: Array<FeaturedBanner>
  gemsWalletCheckAvatar: Scalars['Boolean']['output']
  gemsWalletDapps: GemsWalletDappResponse
  gemsWalletGetActiveRequest?: Maybe<GemsWalletRequest>
  getAddressesOfVerifiedCollections: Array<Scalars['String']['output']>
  getAllDrops: Array<PocketDropPreview>
  getAvailableJettonsForSale: Array<CurrencyInfo>
  getCurrencyInfo: CurrencyInfo
  getGetGemsDnsList: GetGetGemsDnsListResponse
  getLinkedGetGemsDns: GetLinkedGetGemsDnsResponse
  getMyGemsWallet?: Maybe<GemsWalletAuth>
  historyCollectionNftItems: NftItemHistoryConnection
  historyCollectionSales: NftCollectionSalesConnection
  historyNftItem: NftItemHistoryConnection
  historySoldNftItem: Array<NftItemHistory>
  launchpadBillById?: Maybe<LaunchpadBill>
  launchpadItemBySlug?: Maybe<LaunchpadItem>
  launchpadReservedBillsBySlug: LaunchpadBills
  launchpadStartNotificationSubscriptionStatus: SaveLaunchpadStartNotificationSubscriptionStatus
  lostDogsWayClaimStatus: LostDogsWayClaimStatusResponse
  lostDogsWayCommonTasks: LostDogsWayCommonTasksResponse
  lostDogsWayDailyGifts: LostDogsWayDailyGiftsResponse
  lostDogsWayGameBoosts: LostDogsWayGameBoostsResponse
  lostDogsWayGameDogsInfo: LostDogsWayGameDogsInfoResponse
  lostDogsWayGameStatus: LostDogsWayGameStatusResponse
  lostDogsWayLeagueInfo: LostDogsWayLeagueInfoResponse
  lostDogsWayMovieDailyGifts: LostDogsWayMovieDailyGiftsResponse
  lostDogsWayMovieGameBoosts: LostDogsWayMovieGameBoostsResponse
  lostDogsWayMovieGameNotcoinInfo: LostDogsWayMovieGameNotcoinInfoResponse
  lostDogsWayMovieGameStatus: LostDogsWayMovieGameStatusResponse
  lostDogsWayMovieUserCommonTasksDone: Array<Scalars['ID']['output']>
  lostDogsWayMovieUserInfo: LostDogsWayMovieUserInfoResponse
  lostDogsWayMovieUserReferralInfo: LostDogsWayUserReferralInfoResponse
  lostDogsWayMovieUserVotesHistory: LostDogsWayMovieUserChoicesHistoryResponse
  lostDogsWayMovieWoofPersonalTasks: LostDogsWayWoofPersonalTasksResponse
  lostDogsWayUserCommonTasksDone: Array<Scalars['ID']['output']>
  lostDogsWayUserInfo: LostDogsWayUserInfoResponse
  lostDogsWayUserLeagueInfo: LostDogsWayUserLeagueInfoResponse
  lostDogsWayUserProfile: LostDogsWayUserProfileResponse
  lostDogsWayUserReferralInfo: LostDogsWayUserReferralInfoResponse
  lostDogsWayUserVotesHistory: LostDogsWayUserChoicesHistoryResponse
  lostDogsWayVotesHistory: LostDogsWayVotesHistoryResponse
  lostDogsWayWoofBoosterRateInfo: LostDogsWayWoofBoosterRateInfoResponse
  lostDogsWayWoofPersonalTasks: LostDogsWayWoofPersonalTasksResponse
  mainPageTopCollection: MpCollectionTop
  mainPageTopGift: MpCollectionTop
  marketplaceFeeParams: MarketplaceFeeParams
  me?: Maybe<User>
  mutantToadzStatus: MutantToadzStatus
  nftAuctionBidHistory: NftAuctionBidHistory
  nftCategoryById?: Maybe<NftCategory>
  nftCollectionByAddress?: Maybe<NftCollection>
  nftCollectionCategories: Array<NftCategory>
  nftCollectionComments: NftCommentConnection
  /** @deprecated No longer supported */
  nftCollectionDeployMessage: SmcDeployMessageResponse
  nftCollectionItems: NftItemConnection
  nftCollectionSales: Array<NftItemSale>
  nftCollections: NftCollectionConnection
  nftCollectionsByOwner: NftCollectionConnection
  nftComments: NftCommentConnection
  nftFixPriceSaleCalculateFee: NftSaleFee
  nftFixPriceSaleDebugTransferRecommendedValue: Scalars['String']['output']
  nftFixPriceSaleIsDeployed: Scalars['Boolean']['output']
  /** @deprecated nobody used it */
  nftItems: NftItemConnection
  nftItemsByOwner: NftItemConnection
  nftListWithUserOffer: NftItemConnection
  nftNotifications: CollectionNotificationSettings
  nftNotificationsList: NftNotificationsList
  nftOfferList: NftOfferList
  nftOfferListByCurrentUser: NftOfferList
  nftSingles: NftItemConnection
  nftSinglesByEditor: NftItemConnection
  nftTopCategoriesByCollectionAddress: NftCategoryTop
  notificationsList: NotificationsList
  notificationsSettings: Array<NotificationsSettingsBlock>
  ownerStatsNftCollection: NftCollectionOwnerStatsConnection
  pearlsChannelBySlug?: Maybe<PearlsChannelsItem>
  pearlsChannelStats?: Maybe<PearlsChannelStatsResponse>
  pearlsCheckUserSubscription: Scalars['Boolean']['output']
  pearlsDropBySlug?: Maybe<PearlsDropsItem>
  pearlsDropsList: PearlsDropsListResponse
  pearlsDropsListByChannel: PearlsDropsListResponse
  pearlsList: PearlsListResponse
  photoAIGetGenerationById: PhotoAiGetGenerationByIdResponse
  photoAIGetGenerationHistory: PhotoAiGetGenerationHistoryResponse
  photoAIGetStyles: PhotoAiGetStylesResponse
  photoAIGetUserProfile: PhotoAiUserProfileResponse
  ping: Scalars['String']['output']
  pocketDropBySlug: PocketDrop
  pocketPurchaseStatus: PocketCheckPaymentResponse
  rates: Rates
  reactionsByNftAddresses: ReactionsByNftAddresses
  reactionsLikedNfts: NftItemConnection
  reactionsNft: NftReactionsConnection
  resolveAddress?: Maybe<ResolveAddressResult>
  /** @deprecated No longer supported */
  singleNftDeployMessage: SmcDeployMessageResponse
  statsNftCollection: NftCollectionStatsCount
  subdomainPriceData?: Maybe<SubdomainPrice>
  tBattleGameStatus: TBattleGameStatusResponse
  tBattleUser: TBattleUser
  tBattleUserOnboardingStatus: TBattleUserOnboardingStatusResponse
  tBattleUsersTop: TBattleUsersTopResponse
  tvEpisodeVideo: TvEpisodeVideoResponse
  tvEpisodes: TvEpisodesResponse
  tvPurchaseStatus: TvCheckPaymentResponse
  tvSeriesUserStatus: TvSeriesUserStatusResponse
  userBalance: UserBalance
  userByAddress?: Maybe<User>
  userCollectibles: UserCollectiblesResponse
  userCounts?: Maybe<UserCounts>
  userHistoryList: UserHistoryList
  userStats?: Maybe<UserStats>
  walletEggActiveGames: WalletEggGameResponse
  walletEggGameByEggId?: Maybe<WalletEggGame>
  walletEggGameById: WalletEggGame
  walletEggGetById: WalletEgg
  walletEggGetTaskList: Array<WeTask>
  walletEggList: WalletEggListResponse
  walletEggOverGames: WalletEggGameResponse
  walletEggSaleSuggest: WalletEggUserSaleSuggestResponse
  walletEggStats: WalletEggStatistics
  walletEggStatus: WalletEggStatus
  walletEggTop: WalletEggTopResponse
  walletEggUser: WalletEggUser
  walletEggUserStat: WalletEggUserStatResponse
}

export type QueryAbsurdDropStatusArgs = {
  userAddress: Scalars['String']['input']
}

export type QueryAdminActionsHistoryListArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  entityAddress: Scalars['String']['input']
  first: Scalars['Int']['input']
}

export type QueryAlphaNftCollectionFilterArgs = {
  address: Scalars['String']['input']
  query?: InputMaybe<Scalars['String']['input']>
}

export type QueryAlphaNftCollectionSearchArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  first: Scalars['Int']['input']
  query?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Scalars['String']['input']>
}

export type QueryAlphaNftCollectionStatsArgs = {
  address: Scalars['String']['input']
}

export type QueryAlphaNftItemByAddressArgs = {
  address: Scalars['String']['input']
}

export type QueryAlphaNftItemSearchArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  attributes?: InputMaybe<Scalars['String']['input']>
  first: Scalars['Int']['input']
  query?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Scalars['String']['input']>
}

export type QueryAlphaNftItemsByAddressListArgs = {
  addressList: Array<Scalars['String']['input']>
}

export type QueryAuctionsTopArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  first: Scalars['Int']['input']
  type: AuctionsTopType
}

export type QueryBannerInfoArgs = {
  lang: UserLang
}

export type QueryCheckGameArgs = {
  nftAddress: Scalars['String']['input']
}

export type QueryCheckGetGemsDnsArgs = {
  domain: Scalars['String']['input']
}

export type QueryCheckGetGemsDnsIsFreeArgs = {
  domain: Scalars['String']['input']
}

export type QueryCheckSubdomainDnsIsFreeArgs = {
  collectionAddress: Scalars['String']['input']
  domain: Scalars['String']['input']
}

export type QueryCollectibleByIdArgs = {
  id: Scalars['Int']['input']
}

export type QueryCollectionNotificationsArgs = {
  collectionAddress: Scalars['String']['input']
}

export type QueryCollectionNotificationsListArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  first: Scalars['Int']['input']
}

export type QueryCollectionSalesTopArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  categoryId?: InputMaybe<Scalars['String']['input']>
  collectionAddress: Scalars['String']['input']
  date?: InputMaybe<Scalars['String']['input']>
  first: Scalars['Int']['input']
}

export type QueryCollectionsForDeployToArgs = {
  count?: InputMaybe<Scalars['Int']['input']>
  cursor?: InputMaybe<Scalars['String']['input']>
}

export type QueryCountCollectionsNftsByUserArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  first: Scalars['Int']['input']
  userAddress: Scalars['String']['input']
}

export type QueryCountHistoryNftCollectionArgs = {
  categoryId?: InputMaybe<Scalars['String']['input']>
  collectionAddress: Scalars['String']['input']
  time?: InputMaybe<Scalars['Int']['input']>
}

export type QueryCountSbtCollectionsNftsByUserArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  first: Scalars['Int']['input']
  userAddress: Scalars['String']['input']
}

export type QueryDogSexGetMergeArgs = {
  mergeId: Scalars['String']['input']
}

export type QueryDraftNftCollectionsByUserIdArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  first: Scalars['Int']['input']
  userId: Scalars['Int']['input']
}

export type QueryDraftNftItemsByUserIdArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  first: Scalars['Int']['input']
  userId: Scalars['Int']['input']
}

export type QueryFeaturedBannersArgs = {
  lang: UserLang
  page?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryGemsWalletCheckAvatarArgs = {
  nftAddress: Scalars['String']['input']
}

export type QueryGemsWalletDappsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>
  first: Scalars['Int']['input']
}

export type QueryGetAvailableJettonsForSaleArgs = {
  collectionAddress?: InputMaybe<Scalars['String']['input']>
}

export type QueryGetCurrencyInfoArgs = {
  currency: Currency
}

export type QueryGetGetGemsDnsListArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  first: Scalars['Int']['input']
}

export type QueryGetLinkedGetGemsDnsArgs = {
  address: Scalars['String']['input']
}

export type QueryHistoryCollectionNftItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  categoryId?: InputMaybe<Scalars['String']['input']>
  collectionAddress: Scalars['String']['input']
  first: Scalars['Int']['input']
  maxTime?: InputMaybe<Scalars['Int']['input']>
  minTime?: InputMaybe<Scalars['Int']['input']>
  types?: InputMaybe<Array<HistoryType>>
}

export type QueryHistoryCollectionSalesArgs = {
  categoryId?: InputMaybe<Scalars['String']['input']>
  collectionAddress: Scalars['String']['input']
  daysCount?: InputMaybe<Scalars['Int']['input']>
  timezoneOffset?: InputMaybe<Scalars['Int']['input']>
}

export type QueryHistoryNftItemArgs = {
  address: Scalars['String']['input']
  after?: InputMaybe<Scalars['String']['input']>
  first: Scalars['Int']['input']
  maxTime?: InputMaybe<Scalars['Int']['input']>
  minTime?: InputMaybe<Scalars['Int']['input']>
  types?: InputMaybe<Array<HistoryType>>
}

export type QueryHistorySoldNftItemArgs = {
  address: Scalars['String']['input']
}

export type QueryLaunchpadBillByIdArgs = {
  id: Scalars['String']['input']
}

export type QueryLaunchpadItemBySlugArgs = {
  lang?: InputMaybe<UserLang>
  slug: Scalars['String']['input']
}

export type QueryLaunchpadReservedBillsBySlugArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  first: Scalars['Int']['input']
  slug: Scalars['String']['input']
}

export type QueryLaunchpadStartNotificationSubscriptionStatusArgs = {
  launchpadItemId: Scalars['String']['input']
}

export type QueryLostDogsWayLeagueInfoArgs = {
  first: Scalars['Int']['input']
  league: LostDogsWayLeagueName
}

export type QueryLostDogsWayMovieUserVotesHistoryArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  first: Scalars['Int']['input']
}

export type QueryLostDogsWayUserVotesHistoryArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  first: Scalars['Int']['input']
}

export type QueryMainPageTopCollectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  first: Scalars['Int']['input']
  kind: MpTopKind
}

export type QueryMainPageTopGiftArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  first: Scalars['Int']['input']
  kind: MpTopKind
}

export type QueryMutantToadzStatusArgs = {
  initData: Scalars['String']['input']
}

export type QueryNftAuctionBidHistoryArgs = {
  auctionAddress: Scalars['String']['input']
  cursor?: InputMaybe<Scalars['String']['input']>
  first: Scalars['Int']['input']
}

export type QueryNftCategoryByIdArgs = {
  id?: InputMaybe<Scalars['String']['input']>
}

export type QueryNftCollectionByAddressArgs = {
  address: Scalars['String']['input']
}

export type QueryNftCollectionCategoriesArgs = {
  address?: InputMaybe<Scalars['String']['input']>
}

export type QueryNftCollectionCommentsArgs = {
  address: Scalars['String']['input']
  after?: InputMaybe<Scalars['String']['input']>
  first: Scalars['Int']['input']
}

export type QueryNftCollectionDeployMessageArgs = {
  config: CollectionDeployParams
}

export type QueryNftCollectionItemsArgs = {
  address: Scalars['String']['input']
  after?: InputMaybe<Scalars['String']['input']>
  first: Scalars['Int']['input']
}

export type QueryNftCollectionSalesArgs = {
  collectionAddress: Scalars['String']['input']
  first?: InputMaybe<Scalars['Int']['input']>
}

export type QueryNftCollectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  filter?: InputMaybe<FilterInput>
  first: Scalars['Int']['input']
}

export type QueryNftCollectionsByOwnerArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  first: Scalars['Int']['input']
  ownerAddress: Scalars['String']['input']
}

export type QueryNftCommentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  collectionAddress?: InputMaybe<Scalars['String']['input']>
  first: Scalars['Int']['input']
  nftAddress?: InputMaybe<Scalars['String']['input']>
}

export type QueryNftFixPriceSaleCalculateFeeArgs = {
  currency?: InputMaybe<Currency>
  forChangePrice?: InputMaybe<Scalars['Boolean']['input']>
  nftAddress: Scalars['String']['input']
}

export type QueryNftFixPriceSaleDebugTransferRecommendedValueArgs = {
  nftAddress: Scalars['String']['input']
}

export type QueryNftFixPriceSaleIsDeployedArgs = {
  saleAddress: Scalars['String']['input']
}

export type QueryNftItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  filter?: InputMaybe<FilterInput>
  first: Scalars['Int']['input']
}

export type QueryNftItemsByOwnerArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  first: Scalars['Int']['input']
  ownerAddress: Scalars['String']['input']
}

export type QueryNftListWithUserOfferArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  first: Scalars['Int']['input']
  userAddress: Scalars['String']['input']
}

export type QueryNftNotificationsArgs = {
  nftAddress: Scalars['String']['input']
}

export type QueryNftNotificationsListArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  first: Scalars['Int']['input']
}

export type QueryNftOfferListArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>
  first: Scalars['Int']['input']
  nftAddress: Scalars['String']['input']
}

export type QueryNftOfferListByCurrentUserArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>
  first: Scalars['Int']['input']
  nftAddress?: InputMaybe<Scalars['String']['input']>
}

export type QueryNftSinglesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  first: Scalars['Int']['input']
}

export type QueryNftSinglesByEditorArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  first: Scalars['Int']['input']
  ownerAddress: Scalars['String']['input']
}

export type QueryNftTopCategoriesByCollectionAddressArgs = {
  address: Scalars['String']['input']
  after?: InputMaybe<Scalars['String']['input']>
  first: Scalars['Int']['input']
  kind: NftCollectionCategoriesTopKind
}

export type QueryNotificationsListArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>
  lang?: InputMaybe<UserLang>
  limit: Scalars['Int']['input']
}

export type QueryNotificationsSettingsArgs = {
  lang?: InputMaybe<UserLang>
}

export type QueryOwnerStatsNftCollectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  categoryId?: InputMaybe<Scalars['String']['input']>
  collectionAddress: Scalars['String']['input']
  first: Scalars['Int']['input']
}

export type QueryPearlsChannelBySlugArgs = {
  lang: UserLang
  slug: Scalars['String']['input']
}

export type QueryPearlsChannelStatsArgs = {
  slug: Scalars['String']['input']
}

export type QueryPearlsCheckUserSubscriptionArgs = {
  channelId: Scalars['Int']['input']
}

export type QueryPearlsDropBySlugArgs = {
  lang: UserLang
  slug: Scalars['String']['input']
}

export type QueryPearlsDropsListArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  first: Scalars['Int']['input']
  lang: UserLang
}

export type QueryPearlsDropsListByChannelArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  channelId: Scalars['Int']['input']
  first: Scalars['Int']['input']
  lang: UserLang
}

export type QueryPearlsListArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  first: Scalars['Int']['input']
  lang: UserLang
}

export type QueryPhotoAiGetGenerationByIdArgs = {
  generationId: Scalars['String']['input']
}

export type QueryPhotoAiGetGenerationHistoryArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  first: Scalars['Int']['input']
}

export type QueryPhotoAiGetStylesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  first: Scalars['Int']['input']
}

export type QueryPocketDropBySlugArgs = {
  slug: Scalars['String']['input']
}

export type QueryPocketPurchaseStatusArgs = {
  purchaseId: Scalars['Int']['input']
}

export type QueryRatesArgs = {
  timestampSec?: InputMaybe<Scalars['Int']['input']>
}

export type QueryReactionsByNftAddressesArgs = {
  addresses: Array<Scalars['String']['input']>
  uid: Scalars['String']['input']
}

export type QueryReactionsLikedNftsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  first: Scalars['Int']['input']
  uid: Scalars['String']['input']
}

export type QueryReactionsNftArgs = {
  address: Scalars['String']['input']
  after?: InputMaybe<Scalars['String']['input']>
  first: Scalars['Int']['input']
}

export type QueryResolveAddressArgs = {
  address: Scalars['String']['input']
}

export type QuerySingleNftDeployMessageArgs = {
  config: SingleNftDeployParams
}

export type QueryStatsNftCollectionArgs = {
  categoryId?: InputMaybe<Scalars['String']['input']>
  collectionAddress: Scalars['String']['input']
}

export type QuerySubdomainPriceDataArgs = {
  collectionAddress: Scalars['String']['input']
}

export type QueryTBattleUsersTopArgs = {
  round?: InputMaybe<Scalars['Int']['input']>
  roundsCount: Scalars['Int']['input']
  usersCount: Scalars['Int']['input']
}

export type QueryTvEpisodeVideoArgs = {
  episodeId: Scalars['Int']['input']
}

export type QueryTvPurchaseStatusArgs = {
  purchaseId: Scalars['Int']['input']
}

export type QueryUserByAddressArgs = {
  address: Scalars['String']['input']
}

export type QueryUserCollectiblesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  first: Scalars['Int']['input']
}

export type QueryUserCountsArgs = {
  userAddress: Scalars['String']['input']
}

export type QueryUserHistoryListArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>
  lang?: InputMaybe<UserLang>
  limit: Scalars['Int']['input']
  types?: InputMaybe<Array<HistoryDefinedIconType>>
  userAddress: Scalars['String']['input']
}

export type QueryUserStatsArgs = {
  userAddress: Scalars['String']['input']
}

export type QueryWalletEggActiveGamesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  first: Scalars['Int']['input']
}

export type QueryWalletEggGameByEggIdArgs = {
  eggId: Scalars['ID']['input']
}

export type QueryWalletEggGameByIdArgs = {
  gameId: Scalars['ID']['input']
}

export type QueryWalletEggGetByIdArgs = {
  eggId: Scalars['ID']['input']
}

export type QueryWalletEggListArgs = {
  count: Scalars['Int']['input']
  cursor?: InputMaybe<Scalars['String']['input']>
  owner?: InputMaybe<Scalars['String']['input']>
}

export type QueryWalletEggOverGamesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  first: Scalars['Int']['input']
  userAddress?: InputMaybe<Scalars['String']['input']>
}

export type QueryWalletEggSaleSuggestArgs = {
  nftAddress: Scalars['String']['input']
}

export type QueryWalletEggTopArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  first: Scalars['Int']['input']
  type: WalletEggRatingType
}

export type QueryWalletEggUserArgs = {
  id: Scalars['ID']['input']
}

export type QueryWalletEggUserStatArgs = {
  userAddress: Scalars['String']['input']
}

export type RarityAttribute = {
  __typename?: 'RarityAttribute'
  maxShapeCount?: Maybe<Scalars['Int']['output']>
  rarityPercent: Scalars['String']['output']
  traitType: Scalars['String']['output']
  value?: Maybe<Scalars['String']['output']>
}

export type Rates = {
  __typename?: 'Rates'
  tonToRub: Scalars['Float']['output']
  tonToUsd: Scalars['Float']['output']
}

export type Reaction = {
  __typename?: 'Reaction'
  createdAt: Scalars['Int']['output']
  id: Scalars['ID']['output']
  type: Scalars['String']['output']
  user: User
}

export type ReactionCounter = {
  __typename?: 'ReactionCounter'
  likes: Scalars['Int']['output']
}

export enum ReactionType {
  Like = 'Like',
}

export type ReactionsByNftAddress = {
  __typename?: 'ReactionsByNftAddress'
  address: Scalars['String']['output']
  reactions: Array<Maybe<Reaction>>
}

export type ReactionsByNftAddresses = {
  __typename?: 'ReactionsByNftAddresses'
  items: Array<Maybe<ReactionsByNftAddress>>
}

export type ReadNotifications = {
  __typename?: 'ReadNotifications'
  count: Scalars['Int']['output']
}

export type ResolveAddressResult = {
  __typename?: 'ResolveAddressResult'
  address?: Maybe<Scalars['String']['output']>
  isCustomContract?: Maybe<Scalars['Boolean']['output']>
}

export type RoundData =
  | DrawRound
  | LosePrevRound
  | LoseRound
  | MakeMove
  | WaitingOpponent
  | WinRound

export type RoyaltyParams = {
  __typename?: 'RoyaltyParams'
  royaltyAddress: Scalars['String']['output']
  royaltyBase: Scalars['Float']['output']
  royaltyFactor: Scalars['Float']['output']
}

export type RoyaltyParamsInput = {
  royaltyAddress: Scalars['String']['input']
  royaltyBase: Scalars['Int']['input']
  royaltyFactor: Scalars['Int']['input']
}

export type SaleItem = {
  __typename?: 'SaleItem'
  burnCount?: Maybe<Scalars['Int']['output']>
  cancelAuctionCount?: Maybe<Scalars['Int']['output']>
  cancelSaleCount?: Maybe<Scalars['Int']['output']>
  count: Scalars['Int']['output']
  date: Scalars['Int']['output']
  mintCount?: Maybe<Scalars['Int']['output']>
  putUpForAuctionCount?: Maybe<Scalars['Int']['output']>
  putUpForSaleCount?: Maybe<Scalars['Int']['output']>
  sum: Scalars['String']['output']
  sumAvg: Scalars['String']['output']
  transferCount?: Maybe<Scalars['Int']['output']>
}

export type SaveLaunchpadStartNotificationSubscriptionStatus = {
  __typename?: 'SaveLaunchpadStartNotificationSubscriptionStatus'
  isSubscribed: Scalars['Boolean']['output']
}

export type SaveNotificationsSetting = {
  key: SettingsNames
  value: Scalars['Boolean']['input']
}

export enum SettingsNames {
  AuctionBidMyNft = 'auctionBidMyNft',
  AuctionCancel = 'auctionCancel',
  AuctionEndsSoon = 'auctionEndsSoon',
  AuctionFinish = 'auctionFinish',
  AuctionOverbid = 'auctionOverbid',
  AuctionWin = 'auctionWin',
  CollectionPutUpForAuction = 'collectionPutUpForAuction',
  CollectionPutUpForSale = 'collectionPutUpForSale',
  CollectionSold = 'collectionSold',
  DnsSoonOutdated = 'dnsSoonOutdated',
  DogSexLinkCreated = 'dogSexLinkCreated',
  DogSexMergeSuccess = 'dogSexMergeSuccess',
  EeNextStage = 'eeNextStage',
  EeRoundActivity = 'eeRoundActivity',
  NftPutUpForAuction = 'nftPutUpForAuction',
  NftPutUpForSale = 'nftPutUpForSale',
  NftSold = 'nftSold',
  OfferAccept = 'offerAccept',
  OfferDecline = 'offerDecline',
  OfferExpired = 'offerExpired',
  OfferMyNft = 'offerMyNft',
  SellOwnNft = 'sellOwnNft',
}

export type SimpleLayout = {
  __typename?: 'SimpleLayout'
  actions?: Maybe<Array<NotificationAction>>
  buttonText?: Maybe<Scalars['String']['output']>
  createdAt: Scalars['Int']['output']
  icon: LayoutIconType
  id: Scalars['ID']['output']
  isRead: Scalars['Boolean']['output']
  link?: Maybe<Scalars['String']['output']>
  linkToCopy?: Maybe<Scalars['String']['output']>
  media: NftContent
  text: Scalars['String']['output']
}

export type SimpleTemporaryStorageValue = {
  __typename?: 'SimpleTemporaryStorageValue'
  expiresAt: Scalars['Int']['output']
  key: Scalars['String']['output']
  publicUrl: Scalars['String']['output']
  value: Scalars['String']['output']
}

export type SimpleUserHistoryLayout = {
  __typename?: 'SimpleUserHistoryLayout'
  createdAt: Scalars['Int']['output']
  currency: Currency
  header?: Maybe<Scalars['String']['output']>
  icon: HistoryLayoutIconType
  id: Scalars['ID']['output']
  link: Scalars['String']['output']
  media: NftContent
  price?: Maybe<Scalars['String']['output']>
  priceBadge?: Maybe<PriceBadge>
  subHeader?: Maybe<Scalars['String']['output']>
  title: Scalars['String']['output']
}

export type SingleNftDeployParams = {
  content: Scalars['String']['input']
  ownerAddress: Scalars['String']['input']
}

export type SmcDeployMessageResponse = {
  __typename?: 'SmcDeployMessageResponse'
  contractAddress: Scalars['String']['output']
  messageBody?: Maybe<Scalars['String']['output']>
  recommendedValue: Scalars['String']['output']
  stateInit?: Maybe<Scalars['String']['output']>
}

export type SocialLink = {
  __typename?: 'SocialLink'
  type: SocialLinkType
  url: Scalars['String']['output']
}

export type SocialLinkInput = {
  type: SocialLinkType
  url: Scalars['String']['input']
}

export enum SocialLinkType {
  Android = 'Android',
  Discord = 'Discord',
  Instagram = 'Instagram',
  Ios = 'Ios',
  TelegramBot = 'TelegramBot',
  TelegramChannel = 'TelegramChannel',
  TelegramChat = 'TelegramChat',
  TelegramEn = 'TelegramEn',
  TelegramRu = 'TelegramRu',
  Tiktok = 'Tiktok',
  Twitter = 'Twitter',
  Vk = 'VK',
  Website = 'Website',
  Youtube = 'Youtube',
}

export type StarsTx = {
  __typename?: 'StarsTx'
  check: Scalars['String']['output']
  url: Scalars['String']['output']
}

export type SubdomainData = {
  numberPrices?: InputMaybe<SubdomainDiffPrice>
  price?: InputMaybe<Scalars['String']['input']>
  royaltyParams: SubdomainRoyalty
}

export type SubdomainDiffPrice = {
  four: Scalars['String']['input']
  one: Scalars['String']['input']
  six: Scalars['String']['input']
  two: Scalars['String']['input']
}

export type SubdomainDiffPriceData = {
  __typename?: 'SubdomainDiffPriceData'
  four: Scalars['String']['output']
  one: Scalars['String']['output']
  six: Scalars['String']['output']
  two: Scalars['String']['output']
}

export type SubdomainPrice = {
  __typename?: 'SubdomainPrice'
  collectionAddress: Scalars['String']['output']
  numberPrices?: Maybe<SubdomainDiffPriceData>
  price?: Maybe<Scalars['String']['output']>
}

export type SubdomainPriceData = {
  numberPrices?: InputMaybe<SubdomainDiffPrice>
  price?: InputMaybe<Scalars['String']['input']>
}

export type SubdomainRoyalty = {
  royaltyAddress: Scalars['String']['input']
  royaltyStr: Scalars['String']['input']
}

export type SubdomainStatus = SubdomainStatusFree | SubdomainStatusOccupied

export type SubdomainStatusFree = {
  __typename?: 'SubdomainStatusFree'
  fullDomain: Scalars['String']['output']
  imageUrl: Scalars['String']['output']
  minBid: Scalars['String']['output']
  name: Scalars['String']['output']
}

export type SubdomainStatusOccupied = {
  __typename?: 'SubdomainStatusOccupied'
  fullDomain: Scalars['String']['output']
  nft: NftItem
}

export type Subscription = {
  __typename?: 'Subscription'
  easterEggsGameSwitchState: GameSwitchState
  easterEggsState: GameReponse
  gemsWalletEvents: GemsWalletEvent
  lifecheck: Scalars['String']['output']
  lostDogsWayEvents: LostDogsWayEvents
  nftItemWatch: NftItemUpdateEvent
  notificationsState: Notification
  walletEggEvents: WalletEggEvent
}

export type SubscriptionNftItemWatchArgs = {
  nftAddress: Scalars['String']['input']
}

export type SubscriptionNotificationsStateArgs = {
  lang?: InputMaybe<UserLang>
}

export type SyncCollectionStatus = {
  __typename?: 'SyncCollectionStatus'
  collection: NftCollection
  reason?: Maybe<Scalars['String']['output']>
  status: SyncStatus
}

export type SyncNftStatus = {
  __typename?: 'SyncNftStatus'
  nft: NftItem
  reason?: Maybe<Scalars['String']['output']>
  status: SyncStatus
}

export enum SyncStatus {
  Actual = 'Actual',
  ContentFailed = 'ContentFailed',
  Failed = 'Failed',
  Success = 'Success',
}

export type TBattleGameStatusResponse = {
  __typename?: 'TBattleGameStatusResponse'
  activeJetton: Scalars['Int']['output']
  endAt: Scalars['Int']['output']
  jettonBalance: Scalars['Float']['output']
  jettonLimit: Scalars['Float']['output']
  limit: Scalars['Float']['output']
  round: Scalars['Int']['output']
  total: Scalars['Float']['output']
  usdtBalance: Scalars['Float']['output']
}

export type TBattleTopUser = {
  __typename?: 'TBattleTopUser'
  avatar?: Maybe<Scalars['String']['output']>
  collected: Scalars['Int']['output']
  id: Scalars['String']['output']
  round: Scalars['Int']['output']
  username: Scalars['String']['output']
}

export type TBattleUser = {
  __typename?: 'TBattleUser'
  avatar?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  team: Scalars['Int']['output']
  username: Scalars['String']['output']
  wallet?: Maybe<Scalars['String']['output']>
}

export type TBattleUserOnboardingStatusResponse = {
  __typename?: 'TBattleUserOnboardingStatusResponse'
  onboarded: Scalars['Boolean']['output']
}

export type TBattleUsersTopEntry = {
  __typename?: 'TBattleUsersTopEntry'
  round: Scalars['Int']['output']
  totalJettons: Scalars['Int']['output']
  totalUsdt: Scalars['Float']['output']
  users: Array<TBattleTopUser>
}

export type TBattleUsersTopResponse = {
  __typename?: 'TBattleUsersTopResponse'
  cursor: Scalars['Int']['output']
  top: Array<TBattleUsersTopEntry>
}

export type TapGetEarlyAccessEvent = {
  episode?: InputMaybe<TvEventEpisode>
  price: TvEventPrice
}

export type TelegramSettings = {
  __typename?: 'TelegramSettings'
  canSendMessage: Scalars['Boolean']['output']
  hasTelegram: Scalars['Boolean']['output']
  userName?: Maybe<Scalars['String']['output']>
}

export type TelemintAuction = {
  __typename?: 'TelemintAuction'
  delayAuctionDuration?: Maybe<Scalars['Float']['output']>
  finishAt: Scalars['Float']['output']
  isFixPrice: Scalars['Boolean']['output']
  isGetGemsDns?: Maybe<Scalars['Boolean']['output']>
  lastBidAddress?: Maybe<Scalars['String']['output']>
  lastBidAmount: Scalars['String']['output']
  lastBidAt: Scalars['Int']['output']
  lastBidUser?: Maybe<User>
  link?: Maybe<Scalars['String']['output']>
  marketplace: Marketplace
  marketplaceFeePercent: Scalars['Float']['output']
  maxBidAmount?: Maybe<Scalars['String']['output']>
  nextBidAmount: Scalars['String']['output']
  royaltyPercent: Scalars['Float']['output']
}

export type TonConnectAuthPayload = {
  address: Scalars['String']['input']
  authApplication: Scalars['String']['input']
  chain: Scalars['String']['input']
  domainLengthBytes: Scalars['Int']['input']
  domainValue: Scalars['String']['input']
  payload: Scalars['String']['input']
  publicKey?: InputMaybe<Scalars['String']['input']>
  signature: Scalars['String']['input']
  timestamp: Scalars['Float']['input']
  walletStateInit: Scalars['String']['input']
}

export type TonConnectAuthSource = {
  __typename?: 'TonConnectAuthSource'
  isTonConnectAuthSource: Scalars['Boolean']['output']
  storageJSON: Scalars['String']['output']
  storageVersion: Scalars['Float']['output']
}

export type TonKeeperAuthSource = {
  __typename?: 'TonKeeperAuthSource'
  isTonKeeperAuthSource: Scalars['Boolean']['output']
}

export type TonTx = {
  __typename?: 'TonTx'
  deadlineTimestamp: Scalars['Int']['output']
  from?: Maybe<Scalars['String']['output']>
  list: Array<TonTxItem>
  to: Scalars['String']['output']
  /** @deprecated use top-connect way to make transaction */
  tonkeeperLink?: Maybe<Scalars['String']['output']>
  uuid: Scalars['String']['output']
}

export type TonTxContextItem = {
  __typename?: 'TonTxContextItem'
  key: Scalars['String']['output']
  value: Scalars['String']['output']
}

export type TonTxContextItemInput = {
  key: Scalars['String']['input']
  value: Scalars['String']['input']
}

export type TonTxItem = {
  __typename?: 'TonTxItem'
  amount: Scalars['String']['output']
  cartLink: Array<TonTxItemLinkCart>
  check: Scalars['String']['output']
  context: Array<TonTxContextItem>
  /** @deprecated use payloadBoc */
  payload?: Maybe<Scalars['String']['output']>
  payloadBoc?: Maybe<Scalars['String']['output']>
  /** @deprecated use payloadBoc */
  payloadType: TonTxPayloadType
  stateInit?: Maybe<Scalars['String']['output']>
  to: Scalars['String']['output']
}

export type TonTxItemLinkCart = {
  __typename?: 'TonTxItemLinkCart'
  cartItemId: Scalars['String']['output']
  resultEntityId: Scalars['String']['output']
}

export enum TonTxPayloadType {
  Cell = 'Cell',
  Empty = 'Empty',
  Text = 'Text',
}

export enum TonTxState {
  Failed = 'Failed',
  NotReady = 'NotReady',
  Ready = 'Ready',
}

export type TonTxStatus = {
  __typename?: 'TonTxStatus'
  extra?: Maybe<Scalars['String']['output']>
  state: TonTxState
}

export enum TonTxTonkeeperStatus {
  Broadcasted = 'Broadcasted',
  Created = 'Created',
  NotExist = 'NotExist',
  Rejected = 'Rejected',
  Took = 'Took',
}

export type TvCheckPaymentResponse = {
  __typename?: 'TvCheckPaymentResponse'
  status: TvPaymentStatus
}

export type TvContent =
  | TvContentBuy
  | TvContentInvite
  | TvContentNotAvailable
  | TvContentWatchExternal
  | TvContentWatchInApp

export type TvContentBuy = {
  __typename?: 'TvContentBuy'
  freeAt?: Maybe<Scalars['Int']['output']>
  image: Scalars['String']['output']
  price: TvPrice
}

export type TvContentInvite = {
  __typename?: 'TvContentInvite'
  image: Scalars['String']['output']
  requiredCount: Scalars['Int']['output']
  url: Scalars['String']['output']
}

export type TvContentNotAvailable = {
  __typename?: 'TvContentNotAvailable'
  earlyAccessAt?: Maybe<Scalars['Int']['output']>
  freeAt?: Maybe<Scalars['Int']['output']>
  image: Scalars['String']['output']
}

export type TvContentWatchExternal = {
  __typename?: 'TvContentWatchExternal'
  image: Scalars['String']['output']
  url: Scalars['String']['output']
}

export type TvContentWatchInApp = {
  __typename?: 'TvContentWatchInApp'
  image: Scalars['String']['output']
}

export enum TvCurrency {
  Stars = 'STARS',
}

export type TvEpisode = {
  __typename?: 'TvEpisode'
  content: TvContent
  id: Scalars['Int']['output']
  isWatched: Scalars['Boolean']['output']
  name: Scalars['String']['output']
  number: Scalars['Int']['output']
}

export type TvEpisodeVideoResponse = {
  __typename?: 'TvEpisodeVideoResponse'
  video: Scalars['String']['output']
}

export type TvEpisodesResponse = {
  __typename?: 'TvEpisodesResponse'
  items: Array<TvEpisode>
}

export type TvEventEpisode = {
  id: Scalars['Int']['input']
  number: Scalars['Int']['input']
}

export type TvEventEpisodeWithPrice = {
  episode: TvEventEpisode
  price: TvEventPrice
}

export enum TvEventPage {
  Onboarding1 = 'onboarding1',
  Onboarding2 = 'onboarding2',
  Onboarding3 = 'onboarding3',
  Project = 'project',
}

export type TvEventPrice = {
  currency: TvCurrency
  value: Scalars['String']['input']
}

export type TvFrontEvent = {
  inviteFriend?: InputMaybe<TvEventEpisode>
  launch?: InputMaybe<Scalars['Boolean']['input']>
  loadVideo?: InputMaybe<TvLoadVideoEvent>
  pageView?: InputMaybe<TvEventPage>
  tapGetEarlyAccess?: InputMaybe<TapGetEarlyAccessEvent>
  tapInviteFriendToWatchFree?: InputMaybe<TvEventEpisode>
  tapUnlockEpisode?: InputMaybe<TvEventEpisodeWithPrice>
  tapWatchNowFor?: InputMaybe<TvEventEpisodeWithPrice>
  timeMs: Scalars['Float']['input']
  watchEpisode?: InputMaybe<TvEventEpisode>
  watchVideo?: InputMaybe<TvWatchVideoEvent>
}

export type TvFrontEventUtm = {
  campaign?: InputMaybe<Scalars['String']['input']>
  content?: InputMaybe<Scalars['String']['input']>
  medium?: InputMaybe<Scalars['String']['input']>
  source?: InputMaybe<Scalars['String']['input']>
  term?: InputMaybe<Scalars['String']['input']>
}

export type TvLoadVideoEvent = {
  canplayAt?: InputMaybe<Scalars['Float']['input']>
  episodeId: Scalars['Int']['input']
  loadeddataAt?: InputMaybe<Scalars['Float']['input']>
  loadedmetadataAt?: InputMaybe<Scalars['Float']['input']>
  loadstartAt?: InputMaybe<Scalars['Float']['input']>
  mountAt?: InputMaybe<Scalars['Float']['input']>
  sourceLoadedAt?: InputMaybe<Scalars['Float']['input']>
  success: Scalars['Boolean']['input']
}

export type TvPayment = {
  __typename?: 'TvPayment'
  link: Scalars['String']['output']
  purchaseId: Scalars['Int']['output']
}

export type TvPaymentResponse = {
  __typename?: 'TvPaymentResponse'
  payment: TvPayment
}

export enum TvPaymentStatus {
  Failed = 'failed',
  Paid = 'paid',
  Progress = 'progress',
}

export type TvPrice = {
  __typename?: 'TvPrice'
  currency: TvCurrency
  value: Scalars['String']['output']
}

export type TvSaveEventPayload = {
  events: Array<TvFrontEvent>
  utm?: InputMaybe<TvFrontEventUtm>
}

export type TvSeriesUserStatus = {
  __typename?: 'TvSeriesUserStatus'
  currentEpisode?: Maybe<TvEpisode>
  earlyAccessBought: Scalars['Boolean']['output']
  price: TvPrice
}

export type TvSeriesUserStatusResponse = {
  __typename?: 'TvSeriesUserStatusResponse'
  status: TvSeriesUserStatus
}

export type TvWatchVideoEvent = {
  duration?: InputMaybe<Scalars['Float']['input']>
  episodeId: Scalars['Int']['input']
  mountAt?: InputMaybe<Scalars['Float']['input']>
  p30?: InputMaybe<Scalars['Float']['input']>
  p60?: InputMaybe<Scalars['Float']['input']>
  p85?: InputMaybe<Scalars['Float']['input']>
  playAt?: InputMaybe<Scalars['Float']['input']>
}

export type TxReadyEvent = {
  clientTimestampMs: Scalars['Float']['input']
  tx: CheckTxPayload
}

export type UpdateCollectionInput = {
  address: Scalars['String']['input']
  blockchainContent?: InputMaybe<BlockchainContent>
  isAllowJettonSales?: InputMaybe<Scalars['Boolean']['input']>
  isBadSalesHidden?: InputMaybe<Scalars['Boolean']['input']>
  isRarityEnabled?: InputMaybe<Scalars['Boolean']['input']>
}

export type UpdateCollectionResult = {
  __typename?: 'UpdateCollectionResult'
  collection: NftCollection
  tx?: Maybe<TonTx>
}

export type UrlIcon = {
  __typename?: 'UrlIcon'
  url: Scalars['String']['output']
}

export type User = {
  __typename?: 'User'
  avatar: Scalars['String']['output']
  cover?: Maybe<Scalars['String']['output']>
  description?: Maybe<Scalars['String']['output']>
  domain?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  isBanned?: Maybe<Scalars['Boolean']['output']>
  isBurn: Scalars['Boolean']['output']
  isCollectionCreator: Scalars['Boolean']['output']
  isHiddenExist: Scalars['Boolean']['output']
  lang: UserLang
  name: Scalars['String']['output']
  notificationsState: NotificationState
  permissions: Array<UserPermission>
  socialLinks: Array<SocialLink>
  telegram: TelegramSettings
  wallet: Scalars['String']['output']
}

export type UserBalance = {
  __typename?: 'UserBalance'
  value: Scalars['String']['output']
}

export type UserCollectiblesResponse = {
  __typename?: 'UserCollectiblesResponse'
  cursor?: Maybe<Scalars['Int']['output']>
  items: Array<PocketCollectibleBase>
}

export type UserCounts = {
  __typename?: 'UserCounts'
  collectedCount: Scalars['Int']['output']
  collectionsCount: Scalars['Int']['output']
  createdCount: Scalars['Int']['output']
  favoritesCount: Scalars['Int']['output']
  hiddenCount: Scalars['Int']['output']
  offersCount: Scalars['Int']['output']
  sbtCount: Scalars['Int']['output']
  updatedAt: Scalars['Int']['output']
}

export type UserHistoryGroupLayout = {
  __typename?: 'UserHistoryGroupLayout'
  createdAt: Scalars['Int']['output']
  icon: HistoryLayoutIconType
  id: Scalars['ID']['output']
  items: Array<UserHistoryLayout>
  title: Scalars['String']['output']
}

export type UserHistoryItem = SimpleUserHistoryLayout | UserHistoryGroupLayout

export type UserHistoryLayout = EmptyLayout | SimpleUserHistoryLayout

export type UserHistoryList = {
  __typename?: 'UserHistoryList'
  cursor?: Maybe<Scalars['String']['output']>
  items?: Maybe<Array<UserHistoryItem>>
}

export type UserInput = {
  avatarId?: InputMaybe<Scalars['String']['input']>
  coverId?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  socialLinks?: InputMaybe<Array<SocialLinkInput>>
}

export enum UserLang {
  En = 'en',
  Ru = 'ru',
}

export enum UserPermission {
  SuperAdmin = 'SuperAdmin',
  User = 'User',
}

export type UserPreview = {
  __typename?: 'UserPreview'
  avatar: Scalars['String']['output']
  domain?: Maybe<Scalars['String']['output']>
  name?: Maybe<Scalars['String']['output']>
  wallet: Scalars['String']['output']
}

export type UserStats = {
  __typename?: 'UserStats'
  balance: Scalars['String']['output']
  tradingCount: Scalars['Int']['output']
  tradingVolume: Scalars['String']['output']
  updatedAt: Scalars['Int']['output']
}

export type WeOpponentProfileClicked = {
  opponentId: Scalars['String']['input']
  source: Scalars['String']['input']
}

export type WeTask =
  | WeTaskBuyOnGetgems
  | WeTaskConnectWallet
  | WeTaskDalyFreeEgg
  | WeTaskInviteFriend

export type WeTaskBuyOnGetgems = {
  __typename?: 'WETaskBuyOnGetgems'
  description: Scalars['String']['output']
  title: Scalars['String']['output']
  url: Scalars['String']['output']
}

export enum WeTaskCode {
  WeTaskConnectWallet = 'WETaskConnectWallet',
  WeTaskDalyFreeEgg = 'WETaskDalyFreeEgg',
  WeTaskInviteFriend = 'WETaskInviteFriend',
}

export type WeTaskConnectWallet = {
  __typename?: 'WETaskConnectWallet'
  description: Scalars['String']['output']
  title: Scalars['String']['output']
}

export type WeTaskDalyFreeEgg = {
  __typename?: 'WETaskDalyFreeEgg'
  description: Scalars['String']['output']
  title: Scalars['String']['output']
}

export type WeTaskInviteFriend = {
  __typename?: 'WETaskInviteFriend'
  copyLink: Scalars['String']['output']
  description: Scalars['String']['output']
  status?: Maybe<Scalars['String']['output']>
  title: Scalars['String']['output']
}

export type WeTaskResult = {
  __typename?: 'WETaskResult'
  done: Scalars['Boolean']['output']
  newEggs?: Maybe<Scalars['Int']['output']>
  rejectReasonText?: Maybe<Scalars['String']['output']>
}

export type WaitingOpponent = {
  __typename?: 'WaitingOpponent'
  roundEndsAt: Scalars['Int']['output']
  yourMove?: Maybe<GameMove>
}

export type WalletEgg = {
  __typename?: 'WalletEgg'
  canPutOnSale: Scalars['Boolean']['output']
  claimed: Scalars['Boolean']['output']
  id: Scalars['ID']['output']
  image: Scalars['String']['output']
  isBroken: Scalars['Boolean']['output']
  level: Scalars['Int']['output']
  link: Scalars['String']['output']
  name: Scalars['String']['output']
  price?: Maybe<Scalars['Float']['output']>
}

export type WalletEggEvent =
  | WalletEggEventDeleteGame
  | WalletEggEventNewGame
  | WalletEggEventUpdateBanner
  | WalletEggEventUpdateCounters
  | WalletEggEventUpdateGame
  | WalletEggEventUpdateGameState

export type WalletEggEventDeleteGame = {
  __typename?: 'WalletEggEventDeleteGame'
  gameId: Scalars['ID']['output']
}

export type WalletEggEventNewGame = {
  __typename?: 'WalletEggEventNewGame'
  game: WalletEggGame
  gameId: Scalars['ID']['output']
}

export type WalletEggEventUpdateBanner = {
  __typename?: 'WalletEggEventUpdateBanner'
  newBanner?: Maybe<WalletEggGameBanner>
}

export type WalletEggEventUpdateCounters = {
  __typename?: 'WalletEggEventUpdateCounters'
  activeGamesCount?: Maybe<Scalars['Int']['output']>
  overGamesCount?: Maybe<Scalars['Int']['output']>
}

export type WalletEggEventUpdateGame = {
  __typename?: 'WalletEggEventUpdateGame'
  game: WalletEggGame
  gameId: Scalars['ID']['output']
}

export type WalletEggEventUpdateGameState = {
  __typename?: 'WalletEggEventUpdateGameState'
  gameState: WalletEggGameState
}

export type WalletEggFrontEvent = {
  connectTonWalletClicked?: InputMaybe<Scalars['Boolean']['input']>
  getMoreEggsClicked?: InputMaybe<Scalars['Int']['input']>
  joinChatClicked?: InputMaybe<Scalars['Boolean']['input']>
  launch?: InputMaybe<Scalars['Boolean']['input']>
  letsStartClicked?: InputMaybe<Scalars['Boolean']['input']>
  myEggsClicked?: InputMaybe<Scalars['Int']['input']>
  myProfileClicked?: InputMaybe<Scalars['Boolean']['input']>
  opponentProfileClicked?: InputMaybe<WeOpponentProfileClicked>
  ratingClicked?: InputMaybe<Scalars['Boolean']['input']>
  ratingNavigationClicked?: InputMaybe<Scalars['String']['input']>
  sellBannerClicked?: InputMaybe<Scalars['Int']['input']>
  showMyTelegramToggler?: InputMaybe<Scalars['Boolean']['input']>
  timeMs: Scalars['Float']['input']
  tradeClicked?: InputMaybe<Scalars['Int']['input']>
  tutorialFirstRoundDone?: InputMaybe<Scalars['Boolean']['input']>
  tutorialSecondRoundDone?: InputMaybe<Scalars['Boolean']['input']>
  walletConnected?: InputMaybe<Scalars['Boolean']['input']>
}

export type WalletEggGame = {
  __typename?: 'WalletEggGame'
  attempt: Scalars['Int']['output']
  bottomText?: Maybe<WalletEggGameBottomText>
  checkGlobalStatus: Scalars['Boolean']['output']
  id: Scalars['ID']['output']
  isLastAttempt: Scalars['Boolean']['output']
  isRandomWinner: Scalars['Boolean']['output']
  left: WalletEggGameItem
  prevGames?: Maybe<Array<WalletEggGamePrev>>
  right?: Maybe<WalletEggGameItem>
  round: Scalars['Int']['output']
  status: WalletEggGameStatus
  timer?: Maybe<Scalars['Int']['output']>
}

export type WalletEggGameBanner = {
  __typename?: 'WalletEggGameBanner'
  bottom?: Maybe<WalletEggGameBannerFooter>
  content: Scalars['String']['output']
  header: WalletEggGameBannerHeader
}

export type WalletEggGameBannerFooter = {
  __typename?: 'WalletEggGameBannerFooter'
  text: Scalars['String']['output']
  url: Scalars['String']['output']
}

export type WalletEggGameBannerHeader = {
  __typename?: 'WalletEggGameBannerHeader'
  logo?: Maybe<Scalars['String']['output']>
  text: Scalars['String']['output']
}

export enum WalletEggGameBottomText {
  LastDrawAttempt = 'LastDrawAttempt',
  LeftLooseAfterTimeout = 'LeftLooseAfterTimeout',
  LeftOnSale = 'LeftOnSale',
  LeftWinAfterTimeout = 'LeftWinAfterTimeout',
  RandomWinnerAfterTimeout = 'RandomWinnerAfterTimeout',
  TooManyDraws = 'TooManyDraws',
}

export type WalletEggGameItem = {
  __typename?: 'WalletEggGameItem'
  claimed: Scalars['Boolean']['output']
  eggAddress: Scalars['String']['output']
  eggName: Scalars['String']['output']
  image: Scalars['String']['output']
  isBroken: Scalars['Boolean']['output']
  isWinner: Scalars['Boolean']['output']
  move?: Maybe<GameMove>
  user: WalletEggUser
}

export type WalletEggGamePrev = {
  __typename?: 'WalletEggGamePrev'
  leftMove: GameMove
  rightMove: GameMove
}

export type WalletEggGameResponse = {
  __typename?: 'WalletEggGameResponse'
  cursor?: Maybe<Scalars['String']['output']>
  games: Array<WalletEggGame>
}

export type WalletEggGameState =
  | GameStateAwaitPlaying
  | GameStateOver
  | GameStatePlaying
  | GameStateTrading

export enum WalletEggGameStatus {
  Draw = 'Draw',
  LeftOnSale = 'LeftOnSale',
  LeftWin = 'LeftWin',
  RightWin = 'RightWin',
  WaitLeftMove = 'WaitLeftMove',
  WaitOpponent = 'WaitOpponent',
  WaitRightMove = 'WaitRightMove',
}

export type WalletEggGenerationButton = WalletEggGenerationBuyButton | WalletEggGenerationSellButton

export type WalletEggGenerationBuyButton = {
  __typename?: 'WalletEggGenerationBuyButton'
  enabled: Scalars['Boolean']['output']
  url: Scalars['String']['output']
}

export type WalletEggGenerationSellButton = {
  __typename?: 'WalletEggGenerationSellButton'
  enabled: Scalars['Boolean']['output']
}

export type WalletEggListResponse = {
  __typename?: 'WalletEggListResponse'
  cursor?: Maybe<Scalars['String']['output']>
  items: Array<WalletEgg>
}

export type WalletEggRatingData = {
  __typename?: 'WalletEggRatingData'
  position: Scalars['Int']['output']
  value: Scalars['Float']['output']
}

export enum WalletEggRatingType {
  Games = 'games',
  Winrate = 'winrate',
  Wins = 'wins',
}

export type WalletEggSaleEvent = {
  events: Array<WalletEggFrontEvent>
  utm?: InputMaybe<WalletEggSaleEventUtm>
}

export type WalletEggSaleEventUtm = {
  campaign?: InputMaybe<Scalars['String']['input']>
  content?: InputMaybe<Scalars['String']['input']>
  medium?: InputMaybe<Scalars['String']['input']>
  source?: InputMaybe<Scalars['String']['input']>
  term?: InputMaybe<Scalars['String']['input']>
}

export type WalletEggStatistics = {
  __typename?: 'WalletEggStatistics'
  eggsBroken: Scalars['Int']['output']
  eggsInGame: Scalars['Int']['output']
  generations: Array<Maybe<WalletEggStatisticsGeneration>>
  popularMove?: Maybe<WalletEggStatisticsMove>
  sales: Scalars['Int']['output']
  salesInTon: Scalars['String']['output']
  users: Scalars['Int']['output']
}

export type WalletEggStatisticsGeneration = {
  __typename?: 'WalletEggStatisticsGeneration'
  buttons: Array<WalletEggGenerationButton>
  count: Scalars['Int']['output']
  level: Scalars['Int']['output']
  minPrice?: Maybe<Scalars['String']['output']>
}

export type WalletEggStatisticsMove = {
  __typename?: 'WalletEggStatisticsMove'
  count: Scalars['Int']['output']
  move: GameMove
}

export type WalletEggStatus = {
  __typename?: 'WalletEggStatus'
  UQAddress: Scalars['String']['output']
  activeGamesCount?: Maybe<Scalars['Int']['output']>
  banner?: Maybe<WalletEggGameBanner>
  collectionGetgemsLink: Scalars['String']['output']
  eggsUrl: Scalars['String']['output']
  gameState: WalletEggGameState
  hasRightWallet: Scalars['Boolean']['output']
  /** @deprecated use walletAddress */
  hasWallet: Scalars['Boolean']['output']
  id: Scalars['ID']['output']
  image: Scalars['String']['output']
  overGamesCount?: Maybe<Scalars['Int']['output']>
  prizeFund: Scalars['String']['output']
  showTelegramLink: Scalars['Boolean']['output']
  userLink: Scalars['String']['output']
  walletAddress?: Maybe<Scalars['String']['output']>
}

export type WalletEggTop = {
  __typename?: 'WalletEggTop'
  id: Scalars['Int']['output']
  rating: WalletEggRatingData
  user: WalletEggUser
}

export type WalletEggTopResponse = {
  __typename?: 'WalletEggTopResponse'
  cursor?: Maybe<Scalars['String']['output']>
  data: Array<WalletEggTop>
}

export type WalletEggUser = {
  __typename?: 'WalletEggUser'
  gamesCount: Scalars['Int']['output']
  id: Scalars['ID']['output']
  image: Scalars['String']['output']
  link?: Maybe<Scalars['String']['output']>
  name: Scalars['String']['output']
  winsCount: Scalars['Int']['output']
}

export type WalletEggUserSaleSuggestResponse = {
  __typename?: 'WalletEggUserSaleSuggestResponse'
  minPrice: Scalars['Float']['output']
  recommendedPrice: Scalars['Float']['output']
  serviceFeeMin: Scalars['Float']['output']
  serviceFeePercent: Scalars['Float']['output']
}

export type WalletEggUserStatRatings = {
  __typename?: 'WalletEggUserStatRatings'
  games?: Maybe<WalletEggRatingData>
  winrate?: Maybe<WalletEggRatingData>
  wins?: Maybe<WalletEggRatingData>
}

export type WalletEggUserStatResponse = {
  __typename?: 'WalletEggUserStatResponse'
  games: WalletEggRatingData
  user: WalletEggUser
  winrate: WalletEggRatingData
  wins: WalletEggRatingData
}

export type WalletExtensionAuthSource = {
  __typename?: 'WalletExtensionAuthSource'
  isWalletExtensionAuthSource: Scalars['Boolean']['output']
}

export type WinRound = {
  __typename?: 'WinRound'
  isRandomWin: Scalars['Boolean']['output']
  opponentMove?: Maybe<GameMove>
  roundEndsAt: Scalars['Int']['output']
  yourMove?: Maybe<GameMove>
}

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType']
  private value: string
  public __meta__?: Record<string, any> | undefined

  constructor(value: string, __meta__?: Record<string, any> | undefined) {
    super(value)
    this.value = value
    this.__meta__ = __meta__
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value
  }
}
