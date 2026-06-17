import { useState, useRef, useEffect, useMemo } from "react";

const TERMS = {
  "チップ・トランスポンダー": [
    "イモビライザー",
    "トランスポンダー",
    "ID46",
    "ID47",
    "ID48",
    "ID63",
    "ID4D-60",
    "DST-AES",
    "Hitag2",
    "HitagPro",
    "PCF7936",
    "PCF7938",
    "PCF7953",
    "PCF7961",
    "8A",
    "4D-67",
    "4D-68",
    "4D-60",
    "固定コード",
    "ローリングコード",
    "AES暗号",
    "バージン状態",
    "クローン",
    "エミュレーション",
    "PCF7935",
    "PCF7936AS",
    "PCF7937",
    "PCF7939",
    "PCF7941",
    "PCF7945",
    "PCF7946",
    "PCF7947",
    "PCF7952",
    "PCF7953M",
    "PCF7953P",
    "PCF7961M",
    "NCF29A1M",
    "Hitag3",
    "Hitag-AES",
    "XT27A01",
    "XT27A66",
    "ID33",
    "ID40",
    "ID49",
    "ID4C",
    "ID4D",
    "ID70",
    "ID8A",
    "ID8C",
    "トランスポンダ",
    "ICチップ",
    "パッシブチップ",
    "パッシブRFID",
    "IDコード",
    "RFID",
    "電子ID",
    "FeliCa",
    "MIFARE",
    "MIFARE Plus",
    "ISO15693",
    "Bluetooth Low Energy",
    "BLE",
    "Wi-Fi"
  ],
  "スマートキー・リモコン": [
    "スマートキー",
    "全紛失",
    "追加登録",
    "キー登録",
    "AKL",
    "LF",
    "UHF",
    "315MHz",
    "433MHz",
    "ASK",
    "FSK",
    "FCC ID",
    "技適",
    "KeySIM",
    "スマートキーECU",
    "プッシュスタート",
    "イモビユニット",
    "BCM",
    "CEM",
    "SGW",
    "インテリジェントキー",
    "アドバンストキー",
    "アクセスキー",
    "携帯リモコン",
    "電子カードキー",
    "キーレスオペレーションキー",
    "リモコンキー",
    "キーレスエントリー",
    "キーフォブ",
    "スマートエントリー",
    "デジタルキー",
    "シェアキー",
    "メカニカルキー",
    "エマージェンシーキー",
    "スマートタグ",
    "電波遮断ポーチ",
    "電波遮断キーケース",
    "ChecKEYⅡ",
    "スマートロック",
    "スマート電動サムターン",
    "PiACKⅢsmart",
    "PiACKⅢPG",
    "PiACKⅢND",
    "PiACKⅡsmart",
    "PiACK HOME PG",
    "DTRSⅢsmart",
    "DTRSⅢPG",
    "DTRSⅢND",
    "DTRSⅡsmart",
    "iEL smart",
    "iEL Zero smart",
    "iEL smart Noble",
    "Raccess",
    "Raccessキー",
    "Raccessタグ",
    "Raccessポップアップキー",
    "ノンタッチキー",
    "ノンタッチタグ",
    "ノンタッチLite",
    "彩衣-sai-",
    "FLキーヘッド",
    "TLFL-K01",
    "TLNF-C01",
    "MIWA Support",
    "wiremo",
    "MIWA-Link's",
    "ココ配",
    "KEY→Po"
  ],
  "キープログラミングツール": [
    "OBDSTAR",
    "G3",
    "KeyMaster",
    "CN900mini",
    "VVDI",
    "Autel",
    "OBD",
    "OBDポート",
    "ベンチ読み出し",
    "ダンプ読み出し",
    "アダプタ",
    "PINコード取得",
    "EEPROM",
    "Lishi",
    "ピッキング",
    "バイパス",
    "X300",
    "X300 PRO3",
    "X300 Pro4",
    "Key Master",
    "Key Master G3",
    "X300 Classic G3",
    "X300 DP",
    "X300 DP Plus",
    "X300 Mini",
    "F100",
    "F108",
    "OdoMaster",
    "DC706",
    "P50",
    "MP001",
    "Xhorse",
    "VVDI2",
    "VVDI MB",
    "VVDI Prog",
    "Key Tool",
    "Key Tool Max",
    "Key Tool Plus",
    "Mini Key Tool",
    "Condor",
    "Dolphin",
    "Super Chip",
    "MaxiIM",
    "IM508",
    "IM608",
    "IM608 Pro",
    "KM100",
    "APB112",
    "Lonsdor",
    "K518ISE",
    "KH100",
    "KEYDIY",
    "KD-X2",
    "外部診断機",
    "専用テスター",
    "イモビカッター",
    "イモビカッターガード",
    "コードグラバー",
    "SFMT-JU01",
    "管理PCソフト",
    "データ入力機",
    "DTU-V3SET01",
    "カード発行制御部",
    "PC型カード発行制御部",
    "PCHL-05",
    "PCHL-06",
    "CCU-V3SET01",
    "DWHL-V3UA01",
    "BLE登録リーダー",
    "DWHL-V2BLE01",
    "VERSAⅡManager",
    "DCRS管理ツール",
    "SFDC-JU01",
    "安心門番シリーズ統合版ソフト",
    "SFAC-U01"
  ],
  "キーブレード・キーウェイ": [
    "TOY40",
    "TOY43",
    "TOY48",
    "TOY51",
    "TOY2014",
    "HON58R",
    "HON66",
    "NSN14",
    "NSN11",
    "HU101",
    "HU92",
    "HU64",
    "HU66",
    "B111",
    "HY22",
    "H75",
    "VA2",
    "SIP22",
    "ブランクキー",
    "ウェーブカット",
    "インナーカット",
    "ウェーブキー",
    "内溝キー",
    "外溝キー",
    "ギザギザの鍵",
    "刻みキー",
    "ディンプルキー",
    "リッジカット",
    "キーブランク",
    "キーウェイ",
    "スリバチ形状キーウェイ",
    "山型",
    "溝鍵",
    "スケルトンキー",
    "アブロイキー",
    "チューブラーキー",
    "バレルキー",
    "SILCA HU-66",
    "Inner Groove Lock Pick",
    "U9キー",
    "WRキー",
    "URキー",
    "PRキー",
    "PSキー",
    "LBキー",
    "JNキー",
    "JCキー",
    "リバーシブルキー",
    "スリバチ形状",
    "インライン",
    "サイドタンブラー",
    "メインタンブラー",
    "タンブラー",
    "ロッキングバー",
    "セキュリティ認証ID",
    "スペアキー",
    "合鍵",
    "子カギ",
    "コンストラクションキー",
    "マスターキー",
    "グランドマスターキー",
    "グレートグランドマスターキー"
  ],
  "メーカー・車種・型式": [
    "トヨタ",
    "ホンダ",
    "日産",
    "スズキ",
    "ダイハツ",
    "スバル",
    "マツダ",
    "三菱",
    "BMW",
    "ベンツ",
    "ボルボ",
    "フォード",
    "レンジローバー",
    "プリウス",
    "N-BOX",
    "ヴェゼル",
    "セレナ",
    "ソリオ",
    "ムーブ",
    "軽自動車",
    "輸入車",
    "JDM",
    "ハイエース",
    "ランドクルーザー",
    "アクア",
    "ノア",
    "ヴォクシー",
    "bZ4X",
    "センチュリーSUV",
    "カローラクロス",
    "クラウンスポーツ",
    "クラウンセダン",
    "ヤリスクロス",
    "カローラスポーツ",
    "カローラ",
    "カローラツーリング",
    "クラウンクロスオーバー",
    "ランドクルーザー250",
    "GRヤリス",
    "シエンタ",
    "クラウンエステート",
    "レクサス",
    "NX",
    "UX",
    "RX",
    "LX",
    "GX",
    "RZ",
    "UX300e",
    "LBX",
    "LM",
    "ZR-V",
    "フィット",
    "シビック",
    "ステップワゴン",
    "Honda e",
    "オデッセイ",
    "フリード",
    "N-WGN",
    "ライフ",
    "モビリオ",
    "フィットシャトル",
    "エクストレイル",
    "マーチ",
    "キューブ",
    "リーフ",
    "デイズルークス",
    "フェアレディZ",
    "フーガ",
    "ラフェスタ",
    "ダットサントラック",
    "キャラバン",
    "MAZDA2",
    "デミオ",
    "MAZDA3",
    "アクセラ",
    "CX-5",
    "ロードスター",
    "プレマシー",
    "AZワゴン",
    "インプレッサ",
    "フォレスター",
    "レヴォーグ",
    "XV",
    "BRZ",
    "レガシィ",
    "アルト",
    "ジムニー",
    "ワゴンR",
    "ハスラー",
    "パレット",
    "MRワゴン",
    "エブリイ",
    "エスクード",
    "スペーシア",
    "ランディ",
    "セルボ",
    "キャリイ",
    "ムーヴ",
    "タフト",
    "タント",
    "ミラ",
    "ミラ・アヴィ",
    "ミライース",
    "ムーヴコンテ",
    "デリカ",
    "RVR",
    "アウトランダー",
    "EKワゴン",
    "アイ",
    "タウンボックス",
    "1シリーズ",
    "2シリーズ",
    "3シリーズ",
    "4シリーズ",
    "5シリーズ",
    "6シリーズ",
    "7シリーズ",
    "8シリーズ",
    "X5",
    "X6",
    "X7",
    "X5M",
    "X6M",
    "iX",
    "iX3",
    "i7",
    "MIWA",
    "美和ロック",
    "GOAL",
    "SHOWA",
    "HORI",
    "KABA",
    "ALPHA",
    "Mul-T-Lock",
    "Kwikset",
    "Sentry",
    "ABUS",
    "ABLOY",
    "長沢製作所",
    "TAISEI",
    "ZERO HALLIBURTON",
    "Volkswagen",
    "Audi",
    "Skoda",
    "Porsche",
    "Lamborghini",
    "Bentley",
    "Ford",
    "ランドローバー",
    "メルセデス・ベンツ"
  ],
  "錠前・シリンダー": [
    "ピンシリンダー",
    "ロータリーディスク",
    "鍵交換",
    "シリンダー交換",
    "防犯錠前診断士",
    "CP錠",
    "耐ピッキング",
    "耐破錠",
    "シリンダー錠",
    "ピンタンブラー錠",
    "ディスクシリンダー",
    "ディスクタンブラー錠",
    "ロータリーディスクタンブラー錠",
    "マグネチックタンブラー錠",
    "テンキー錠",
    "文字合わせ錠",
    "サムターン",
    "防犯サムターン",
    "スイッチ式サムターン",
    "本締錠",
    "鎌デッド",
    "プッシュプル錠",
    "レバーハンドル錠",
    "面付箱錠",
    "引戸鎌錠",
    "グレモン錠",
    "電気錠",
    "U9シリンダー",
    "WRシリンダー",
    "PRシリンダー",
    "JNシリンダー",
    "JCシリンダー",
    "LBシリンダー",
    "V18シリンダー",
    "カバスター",
    "ミスターホーム",
    "FBロック",
    "インターチェンジャブルシリンダー",
    "デッドボルト",
    "ラッチボルト",
    "ストライク",
    "ユーシン・ショウワ",
    "アルファ",
    "キーレックス",
    "Master Lock",
    "Schlage",
    "Yale",
    "URシリンダー",
    "PXシリンダー",
    "ECシリンダー",
    "DSシリンダー",
    "ロータリーシリンダー",
    "ダブルサイドバー式ディスクシリンダー",
    "2WAYロータリーシリンダー",
    "可変タンブラーシリンダー",
    "リバーシブルピンシリンダー",
    "シームレスシリンダー",
    "U1サムターン",
    "B5サムターン",
    "ケースロック",
    "本締付モノロック",
    "モノロック",
    "空錠",
    "浴室錠",
    "戸襖錠",
    "鎌デッド本締錠",
    "静音本締錠",
    "自動本締錠",
    "強化ガラス扉用錠",
    "エンジンドア用錠",
    "ガードアームロック",
    "框扉用錠",
    "カムロック",
    "チューブラ本締錠",
    "面付本締錠",
    "非常錠",
    "引戸錠",
    "引違戸錠",
    "インダストリアルロック",
    "可変式カムロック",
    "可変ボタン錠",
    "電磁ロック",
    "電気ストライク",
    "フロント",
    "エスカチオン",
    "丸座",
    "長座",
    "トロヨケ",
    "ランダムテンキーロック",
    "マジカルテンキーユニット",
    "ハイブリッドカードロック",
    "ホテルカードロック",
    "南京錠"
  ],
  "作業手順・業界用語": [
    "全紛失対応",
    "キープログラミング",
    "Read Immo Data",
    "Make Simulated Card",
    "Add Keys",
    "Key Count",
    "Erase DTC",
    "PINコード",
    "Type 1",
    "Type 2",
    "Type 3",
    "Type 4",
    "Type 5",
    "With PIN",
    "Without PIN",
    "ネガティブレスポンス",
    "UDSエラー",
    "外部電源",
    "バッテリー電圧",
    "ゲートウェイ bypass",
    "インロック",
    "キー閉じ込み",
    "鍵開け",
    "解錠",
    "施錠",
    "初期化",
    "オンボードプログラミング",
    "サムターン回し",
    "カム送り解錠",
    "バイパス解錠",
    "こじ破り",
    "鍵穴壊し",
    "破壊解錠",
    "ドリリング",
    "ドアノブ回し",
    "レバー倒し",
    "スコープ解錠",
    "マニピュレーション",
    "レーキング",
    "テンション",
    "シムピック",
    "リレーアタック",
    "CANインベーダー",
    "マスターキーシステム",
    "グランドマスターキーシステム",
    "グレートグランドマスターキーシステム",
    "逆マスターキーシステム",
    "同一キーシステム",
    "コンストラクションキーシステム",
    "ダブルコンストラクションキーシステム",
    "マスターキー可変システム",
    "チェンジキーシステム",
    "シャットアウト機能",
    "相見積もり",
    "マルチマスターキーシステム",
    "キーチェンジ",
    "シアライン",
    "かぎ穴壊し",
    "右勝手",
    "左勝手",
    "内開き",
    "外開き",
    "バックセット",
    "スペーシング",
    "チリ寸法",
    "偏心取付"
  ],
  "資格・法令・業界団体": [
    "特殊解錠用具の所持の禁止等に関する法律",
    "ピッキング防止法",
    "指定建物錠",
    "防犯建物部品",
    "官民合同会議",
    "CP部品",
    "認定錠前技師",
    "美和ロック認定・サービス代行技術者",
    "SD",
    "公益社団法人 日本防犯設備協会",
    "日本ロック工業会",
    "JLMA",
    "日本ロックセキュリティ協同組合",
    "JALOS",
    "錠取扱業者",
    "サービス代行店",
    "BL-bs認定品",
    "ISO9001",
    "ISO14001",
    "日本防犯設備協会"
  ],
  "大分県の地名": [
    "大分市",
    "別府市",
    "中津市",
    "日田市",
    "佐伯市",
    "臼杵市",
    "津久見市",
    "竹田市",
    "豊後高田市",
    "杵築市",
    "宇佐市",
    "豊後大野市",
    "由布市",
    "国東市",
    "日出町",
    "九重町",
    "玖珠町",
    "姫島村",
    "大手町",
    "中央町",
    "府内町",
    "荷揚町",
    "都町",
    "千代町",
    "末広町",
    "高砂町",
    "寿町",
    "勢家町",
    "新町",
    "中春日町",
    "西春日町",
    "東春日町",
    "金池町",
    "金池南",
    "顕徳町",
    "長浜町",
    "錦町",
    "泉町",
    "城崎町",
    "碩田町",
    "中島中央",
    "中島西",
    "中島東",
    "弁天",
    "舞鶴町",
    "豊町",
    "上野丘",
    "上野丘西",
    "上野丘東",
    "上野町",
    "元町",
    "大道町",
    "東大道",
    "桜ヶ丘",
    "住吉町",
    "王子北町",
    "王子中町",
    "王子南町",
    "王子西町",
    "要町",
    "豊海",
    "新川町",
    "高松",
    "高松東",
    "花高松",
    "日岡",
    "松原町",
    "向原沖",
    "向原西",
    "向原東",
    "高城本町",
    "高城南町",
    "寺崎町",
    "仲西町",
    "原川",
    "山津町",
    "青葉町",
    "今津留",
    "岩田町",
    "大州浜",
    "大津町",
    "古ヶ鶴",
    "中津留",
    "西新地",
    "西浜",
    "花津留",
    "東津留",
    "賀来",
    "国分",
    "中尾",
    "野田",
    "岡川",
    "鴛野",
    "寒田",
    "高瀬",
    "田尻",
    "旦野原",
    "光吉",
    "宮崎",
    "市",
    "鬼崎",
    "小野鶴",
    "上宗方",
    "下宗方",
    "田原",
    "玉沢",
    "横瀬",
    "廻栖野",
    "大在",
    "鶴崎",
    "乙津",
    "皆春",
    "森町",
    "下徳丸",
    "関園",
    "常行",
    "鶴瀬",
    "丸亀",
    "三佐",
    "松岡",
    "宮河内",
    "猪野",
    "葛木",
    "小池原",
    "横尾",
    "明野",
    "西明野",
    "東明野",
    "青崎",
    "青山町",
    "赤松",
    "秋葉町",
    "朝日ケ丘町",
    "朝見",
    "天間",
    "石垣西",
    "石垣東",
    "井田",
    "内竈",
    "内成",
    "浦田",
    "駅前町",
    "駅前本町",
    "枝郷",
    "扇山",
    "小倉町",
    "小坂",
    "大所",
    "乙原",
    "大畑町",
    "上田の湯町",
    "上野口町",
    "上原町",
    "上平田町",
    "亀川四の湯町",
    "亀川中央町",
    "亀川浜田町",
    "亀川東町",
    "観海寺",
    "観海寺町",
    "鉄輪上",
    "鉄輪東",
    "城島",
    "北鉄輪",
    "北中",
    "北浜",
    "北的ケ浜町",
    "京町",
    "楠町",
    "国立",
    "鉄輪",
    "亀川",
    "浜脇",
    "馬場",
    "火売",
    "風呂本",
    "御幸",
    "山家",
    "日の出",
    "海門寺",
    "老松",
    "流川",
    "梅園",
    "仲町",
    "港町",
    "的ケ浜",
    "弓ケ浜町",
    "南的ケ浜町"
  ]
};

const C = {
  bg: "#0f1117",
  surface: "#1a1d27",
  surface2: "#13161f",
  border: "#2a2d3a",
  border2: "#3a3d50",
  text: "#e8e8e8",
  textMute: "#9a9aa5",
  textDim: "#5f6270",
  gold: "#f0a500",
  goldSoft: "#3a2f10",
  danger: "#c0392b",
};

const STORE_MEMOS   = "memos:v3";
const STORE_CUSTOM  = "customTerms:v1";

function escapeRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }
function fmtDate(iso) {
  try { return new Date(iso).toLocaleString("ja-JP", { month:"numeric", day:"numeric", hour:"2-digit", minute:"2-digit" }); }
  catch(e) { return iso; }
}
function buildSegments(text, re) {
  if (!text || !re) return [{ t: text, hit: false }];
  const out = []; let last = 0; re.lastIndex = 0; let m;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push({ t: text.slice(last, m.index), hit: false });
    out.push({ t: m[0], hit: true });
    last = m.index + m[0].length;
    if (m.index === re.lastIndex) re.lastIndex++;
  }
  if (last < text.length) out.push({ t: text.slice(last), hit: false });
  return out;
}

export default function App() {
  const [transcript, setTranscript] = useState("");
  const [interim,    setInterim]    = useState("");
  const [listening,  setListening]  = useState(false);
  const [status,     setStatus]     = useState("待機中");
  const [customTerms,setCustomTerms]= useState([]);
  const [memos,      setMemos]      = useState([]);
  const [confirming, setConfirming] = useState(false);
  const [tab,        setTab]        = useState("memo");
  const [deletingId, setDeletingId] = useState(null);
  const [storageOk,  setStorageOk]  = useState(true);
  const [editingId,  setEditingId]  = useState(null);
  const [editText,   setEditText]   = useState("");

  const recRef = useRef(null);
  const taRef  = useRef(null);

  // ストレージ読み込み（端末のlocalStorageに保存）
  useEffect(() => {
    try {
      const m = localStorage.getItem(STORE_MEMOS);
      if (m) setMemos(JSON.parse(m));
      const c = localStorage.getItem(STORE_CUSTOM);
      if (c) setCustomTerms(JSON.parse(c));
    } catch(e) { setStorageOk(false); }
  }, []);

  const saveMemos = (next) => {
    setMemos(next);
    try { localStorage.setItem(STORE_MEMOS, JSON.stringify(next)); }
    catch(e) { setStorageOk(false); }
  };
  const saveCustom = (next) => {
    setCustomTerms(next);
    try { localStorage.setItem(STORE_CUSTOM, JSON.stringify(next)); }
    catch(e) { setStorageOk(false); }
  };

  // 全用語（ハイライト用）
  const highlightRe = useMemo(() => {
    const all = new Set();
    Object.values(TERMS).forEach(arr => arr.forEach(t => all.add(t)));
    customTerms.forEach(t => all.add(t));
    const sorted = [...all].sort((a,b) => b.length - a.length).map(escapeRe);
    try { return sorted.length ? new RegExp("(" + sorted.join("|") + ")", "g") : null; }
    catch(e) { return null; }
  }, [customTerms]);

  // 確認画面用セグメント
  const segments     = useMemo(() => buildSegments(transcript, highlightRe), [transcript, highlightRe]);
  const editSegments = useMemo(() => buildSegments(editText,   highlightRe), [editText,   highlightRe]);

  // 音声認識
  useEffect(() => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) { setStatus("⚠️ 音声非対応"); return; }
    const r = new SR();
    r.lang = "ja-JP"; r.continuous = true; r.interimResults = true;
    r.onresult = (e) => {
      let fin = "", itm = "";
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const t = e.results[i][0].transcript;
        if (e.results[i].isFinal) fin += t; else itm += t;
      }
      if (fin) setTranscript(prev => prev + fin);
      setInterim(itm);
    };
    r.onstart = () => { setListening(true);  setStatus("録音中"); };
    r.onend   = () => { setListening(false); setInterim(""); setStatus("待機中"); };
    r.onerror = (e) => { setListening(false); setStatus("エラー: " + e.error); };
    recRef.current = r;
  }, []);

  const toggleMic = () => {
    const r = recRef.current; if (!r) return;
    if (listening) r.stop(); else { try { r.start(); } catch(e) {} }
  };

  const doSave = () => {
    const text = transcript.trim(); if (!text) return;
    saveMemos([{ id: Date.now(), ts: new Date().toISOString(), text }, ...memos]);
    setTranscript(""); setInterim(""); setConfirming(false);
  };

  const delMemo = (id) => { saveMemos(memos.filter(m => m.id !== id)); setDeletingId(null); };
  const copyText = async (text) => { try { await navigator.clipboard.writeText(text); } catch(e) {} };

  const startEdit = (m) => { setEditText(m.text); setEditingId(m.id); setDeletingId(null); };
  const saveEdit = () => {
    const text = editText.trim(); if (!text) return;
    saveMemos(memos.map(m => m.id === editingId ? { ...m, text, edited: new Date().toISOString() } : m));
    setEditingId(null); setEditText("");
  };
  const sendToNotes = async (m) => {
    const text = fmtDate(m.ts) + "\n\n" + m.text;
    try {
      if (navigator.share) { await navigator.share({ text }); }
      else { await navigator.clipboard.writeText(text); alert("共有に未対応の端末のため、本文をコピーしました。メモアプリに貼り付けてください。"); }
    } catch(e) { /* 共有をキャンセルした場合は何もしない */ }
  };

  const S = {
    btn: (active, danger) => ({
      padding: "11px 0", borderRadius: 8, cursor: "pointer", fontSize: 13,
      background: danger ? (active ? C.danger : "transparent")
                         : (active ? C.gold   : "transparent"),
      color: danger ? (active ? "#fff" : C.danger)
                    : (active ? "#0f1117" : C.textMute),
      border: "1px solid " + (danger ? C.danger : (active ? C.gold : C.border2)),
      fontWeight: active ? 700 : 400,
    }),
  };

  // ---- 確認画面 ----
  if (confirming) {
    return (
      <div style={{ background: C.bg, color: C.text, height: "100dvh", fontFamily: "'Hiragino Sans','Meiryo',sans-serif", display: "flex", flexDirection: "column" }}>
        <div style={{ flexShrink: 0, display: "flex", alignItems: "center", gap: 10, padding: "14px 16px", borderBottom: "2px solid " + C.gold, background: C.surface }}>
          <button onClick={() => setConfirming(false)} style={{ background: "none", border: "none", color: C.gold, fontSize: 26, cursor: "pointer", padding: 0, lineHeight: 1 }}>‹</button>
          <span style={{ fontSize: 15, fontWeight: 700, color: C.gold }}>保存前の確認</span>
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: 16 }}>
          <div style={{ fontSize: 12, color: C.textDim, marginBottom: 8 }}>
            辞書一致語をゴールドでハイライトしています
          </div>
          <div style={{ background: C.surface, border: "1px solid " + C.border2, borderRadius: 10, padding: 14, fontSize: 15, lineHeight: 1.85, marginBottom: 12 }}>
            {segments.map((s, i) => s.hit
              ? <span key={i} style={{ color: C.gold, background: C.goldSoft, borderRadius: 3, padding: "0 2px" }}>{s.t}</span>
              : <span key={i}>{s.t}</span>
            )}
          </div>
          <div style={{ fontSize: 12, color: C.textDim }}>修正する場合は「戻る」で編集できます</div>
        </div>
        <div style={{ flexShrink: 0, padding: "12px 16px", paddingBottom: "calc(12px + env(safe-area-inset-bottom, 0px))", display: "flex", gap: 10, background: C.surface, borderTop: "1px solid " + C.border }}>
          <button onClick={() => setConfirming(false)} style={{ ...S.btn(false), flex: 1 }}>戻る</button>
          <button onClick={doSave} style={{ ...S.btn(true), flex: 2 }}>この内容で保存</button>
        </div>
      </div>
    );
  }

  // ---- 編集画面 ----
  if (editingId !== null) {
    return (
      <div style={{ background: C.bg, color: C.text, height: "100dvh", fontFamily: "'Hiragino Sans','Meiryo',sans-serif", display: "flex", flexDirection: "column" }}>
        <div style={{ flexShrink: 0, display: "flex", alignItems: "center", gap: 10, padding: "14px 16px", borderBottom: "2px solid " + C.gold, background: C.surface }}>
          <button onClick={() => { setEditingId(null); setEditText(""); }} style={{ background: "none", border: "none", color: C.gold, fontSize: 26, cursor: "pointer", padding: 0, lineHeight: 1 }}>‹</button>
          <span style={{ fontSize: 15, fontWeight: 700, color: C.gold }}>記録を編集</span>
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: 16, display: "flex", flexDirection: "column", minHeight: 0 }}>
          <textarea
            value={editText}
            onChange={e => setEditText(e.target.value)}
            style={{
              minHeight: 160, width: "100%", boxSizing: "border-box",
              background: C.surface, border: "1px solid " + C.gold,
              borderRadius: 10, color: C.text, padding: "14px 14px",
              fontSize: 15, lineHeight: 1.8, resize: "vertical", outline: "none",
              fontFamily: "inherit", caretColor: C.gold, marginBottom: 12,
            }}
          />
          <div style={{ fontSize: 12, color: C.textDim, marginBottom: 8 }}>辞書一致語をゴールドでハイライトしています</div>
          <div style={{ background: C.surface, border: "1px solid " + C.border2, borderRadius: 10, padding: 14, fontSize: 15, lineHeight: 1.85 }}>
            {editSegments.map((s, i) => s.hit
              ? <span key={i} style={{ color: C.gold, background: C.goldSoft, borderRadius: 3, padding: "0 2px" }}>{s.t}</span>
              : <span key={i}>{s.t}</span>
            )}
          </div>
        </div>
        <div style={{ flexShrink: 0, padding: "12px 16px", paddingBottom: "calc(12px + env(safe-area-inset-bottom, 0px))", display: "flex", gap: 10, background: C.surface, borderTop: "1px solid " + C.border }}>
          <button onClick={() => { setEditingId(null); setEditText(""); }} style={{ ...S.btn(false), flex: 1 }}>キャンセル</button>
          <button onClick={saveEdit} disabled={!editText.trim()} style={{ ...S.btn(!!editText.trim()), flex: 2 }}>保存</button>
        </div>
      </div>
    );
  }

  // ---- 履歴画面 ----
  if (tab === "history") {
    return (
      <div style={{ background: C.bg, color: C.text, height: "100dvh", fontFamily: "'Hiragino Sans','Meiryo',sans-serif", display: "flex", flexDirection: "column" }}>
        <div style={{ flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px", borderBottom: "2px solid " + C.gold, background: C.surface }}>
          <span style={{ fontSize: 15, fontWeight: 700, color: C.gold }}>保存済みの記録</span>
          <span style={{ fontSize: 12, color: C.textMute }}>{memos.length}件</span>
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: 14 }}>
          {memos.length === 0
            ? <div style={{ color: C.textDim, fontSize: 13, marginTop: 30, textAlign: "center" }}>まだ記録はありません</div>
            : memos.map(m => (
              <div key={m.id} style={{ background: C.surface, border: "1px solid " + C.border, borderRadius: 10, padding: "12px 14px", marginBottom: 10 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                  <span style={{ fontSize: 12, color: C.gold }}>
                    {fmtDate(m.ts)}{m.edited ? <span style={{ color: C.textDim, marginLeft: 6 }}>（編集済）</span> : null}
                  </span>
                </div>
                <div style={{ fontSize: 13, color: C.text, lineHeight: 1.75, whiteSpace: "pre-wrap", marginBottom: 10 }}>{m.text}</div>
                <div style={{ display: "flex", gap: 8, borderTop: "1px solid " + C.border, paddingTop: 9 }}>
                  <button onClick={() => startEdit(m)} style={{ ...S.btn(false), flex: 1, padding: "8px 0", fontSize: 12 }}>編集</button>
                  <button onClick={() => sendToNotes(m)} style={{ ...S.btn(true), flex: 1, padding: "8px 0", fontSize: 12 }}>送信</button>
                  <button onClick={() => copyText(m.text)} style={{ ...S.btn(false), flex: 1, padding: "8px 0", fontSize: 12 }}>コピー</button>
                  {deletingId === m.id
                    ? <button onClick={() => delMemo(m.id)} style={{ ...S.btn(true, true), flex: 1, padding: "8px 0", fontSize: 12 }}>確定</button>
                    : <button onClick={() => setDeletingId(m.id)} style={{ ...S.btn(false, true), flex: 1, padding: "8px 0", fontSize: 12 }}>削除</button>}
                </div>
                {deletingId === m.id && (
                  <div onClick={() => setDeletingId(null)} style={{ fontSize: 11, color: C.textDim, cursor: "pointer", textAlign: "right", marginTop: 6 }}>削除をやめる</div>
                )}
              </div>
            ))
          }
        </div>
        <BottomTab tab={tab} setTab={setTab} C={C} />
      </div>
    );
  }

  // ---- メイン画面 ----
  return (
    <div style={{ background: C.bg, color: C.text, height: "100dvh", fontFamily: "'Hiragino Sans','Meiryo',sans-serif", display: "flex", flexDirection: "column", maxWidth: 480, margin: "0 auto" }}>

      {/* ヘッダー */}
      <div style={{ flexShrink: 0, display: "flex", alignItems: "center", gap: 9, padding: "12px 14px", borderBottom: "2px solid " + C.gold, background: C.surface }}>
        <span style={{ fontSize: 20 }}>🔑</span>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: C.gold }}>カギの安心太郎 現場メモ</div>
        </div>
        <span style={{ fontSize: 11, color: C.textMute, display: "flex", alignItems: "center", gap: 5 }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", flexShrink: 0,
            background: listening ? C.danger : C.textDim,
            boxShadow: listening ? "0 0 6px " + C.danger : "none" }} />
          {status}
        </span>
      </div>

      {/* テキストエリア（メイン・大きく） */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "12px 14px 8px", minHeight: 0 }}>
        <textarea
          ref={taRef}
          value={transcript}
          onChange={e => setTranscript(e.target.value)}
          placeholder={listening ? "話してください…" : "マイクで話すか、直接入力してください\n\n現場が終わったら声でメモを残してください"}
          style={{
            flex: 1,
            width: "100%", boxSizing: "border-box",
            background: C.surface,
            border: "1px solid " + (listening ? C.gold : C.border2),
            borderRadius: 10, color: C.text,
            padding: "14px 14px",
            fontSize: 15, lineHeight: 1.8,
            resize: "none", outline: "none",
            fontFamily: "inherit", caretColor: C.gold,
            boxShadow: listening ? "0 0 0 2px " + C.goldSoft : "none",
          }}
        />
        {interim && (
          <div style={{ fontSize: 12, color: C.textDim, fontStyle: "italic", marginTop: 5, paddingLeft: 2 }}>
            認識中… {interim}
          </div>
        )}
      </div>

      {/* マイク＋ボタン */}
      <div style={{ flexShrink: 0, padding: "0 14px 10px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <button onClick={toggleMic} aria-label={listening ? "録音停止" : "録音開始"}
            style={{ width: 54, height: 54, borderRadius: "50%", border: "none", cursor: "pointer", fontSize: 24, flexShrink: 0,
              background: listening ? C.danger : C.gold,
              color: listening ? "#fff" : "#0f1117",
              boxShadow: listening ? "0 0 14px " + C.danger : "0 0 8px rgba(240,165,0,0.3)" }}>
            {listening ? "■" : "🎙"}
          </button>
          <div style={{ display: "flex", gap: 8, flex: 1 }}>
            <button onClick={() => { setTranscript(""); setInterim(""); }} style={{ ...S.btn(false), flex: 1 }}>クリア</button>
            <button
              onClick={() => transcript.trim() && setConfirming(true)}
              disabled={!transcript.trim()}
              style={{ ...S.btn(!!transcript.trim()), flex: 2 }}>
              確認・保存
            </button>
          </div>
        </div>
      </div>

      <BottomTab tab={tab} setTab={setTab} C={C} />
    </div>
  );
}

function BottomTab({ tab, setTab, C }) {
  return (
    <div style={{ flexShrink: 0, display: "flex", borderTop: "1px solid " + C.border, background: C.surface, paddingBottom: "env(safe-area-inset-bottom, 8px)" }}>
      {[["memo","🎙","メモ入力"],["history","📋","記録一覧"]].map(([key, icon, label]) => (
        <button key={key} onClick={() => setTab(key)}
          style={{ flex: 1, padding: "10px 0 8px", border: "none", background: "none", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
          <span style={{ fontSize: 20 }}>{icon}</span>
          <span style={{ fontSize: 10, color: tab === key ? C.gold : C.textDim, fontWeight: tab === key ? 700 : 400 }}>{label}</span>
        </button>
      ))}
    </div>
  );
}
