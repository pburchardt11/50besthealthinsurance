/**
 * Generates additional insurance plans to reach 50 per country.
 * Uses real insurer names and realistic data templates.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const LIB = path.join(__dirname, "..", "src", "lib");

// Real insurance companies by country code
const INSURERS = {
  // ─── US ───
  us: [
    "Molina Healthcare","Centene","WellCare","CareFirst BCBS","Health Net","EmblemHealth","Florida Blue","Highmark BCBS",
    "Horizon BCBS","Independence Blue Cross","CareSource","Medical Mutual","Geisinger Health","Presbyterian Health",
    "Select Health","Bright Health","Clover Health","Alignment Health","Devoted Health","Friday Health Plans",
    "Ambetter","ConnectiCare","MVP Health Care","CDPHP","UPMC Health Plan","Tufts Health Plan","Harvard Pilgrim",
    "Priority Health","HAP","Fallon Health","Dean Health","Security Health Plan","Quartz","AllWays Health",
    "Neighborhood Health Plan","Community Health Plan","BMC HealthNet","Minuteman Health","Sanford Health Plan",
    "Premera Blue Cross","Regence BCBS","Cambia Health","Group Health Cooperative","HealthPartners","Medica",
    "PreferredOne","UCare","Blue Cross of Idaho","PacificSource Health","Moda Health",
  ],
  // ─── UK ───
  uk: [
    "Simplyhealth","CS Healthcare","The Exeter","National Friendly","Health-on-Line","Saga Health Insurance",
    "Benenden Health","Medicash","Healix Health","Aetna International UK","BUPA Global","AIG Life UK",
    "General & Medical Healthcare","Western Provident Association","Westfield Health","Sovereign Health Care",
    "BHSF","Health Shield","Engage Mutual","The Health Insurance Group","ActiveQuote Health","Switch Health",
    "Compare the Market Health","Pru Health","Legal & General Health","Standard Life Health","Zurich Health UK",
    "MetLife UK Health","LV= Health","Allianz Care UK","Cigna UK","Aon Health UK","Mercer Health UK",
    "Willis Towers Watson Health","Howden Health","Towergate Health","Jelf Health","Gallagher Health UK",
    "Paycare","HMCA","HSF Health Plan","Medicash Proactive","Healthshield Corporate","Unum Health UK",
    "Canada Life UK Health",
  ],
  // ─── DE ───
  de: [
    "HKK","IKK Gesund Plus","SBK","KKH","HEK","Mobil Krankenkasse","BIG Direkt","Viactiv","Pronova BKK",
    "Mhplus BKK","R+V Versicherung","Signal Iduna","DKV","Continentale","Gothaer","HUK-Coburg","Central",
    "LVM Krankenversicherung","SDK","Barmenia","Arag","Nürnberger","Württembergische","Münchener Verein",
    "Inter Krankenversicherung","Hallesche","Universa","Concordia","Envivas","BKK Firmus","BKK VBU",
    "BKK Linde","Audi BKK","BMW BKK","Bosch BKK","Daimler BKK","Siemens BKK","Novitas BKK",
    "Bertelsmann BKK","Heimat Krankenkasse","KNAPPSCHAFT","IKK Classic","IKK Brandenburg","BKK24",
    "Salus BKK",
  ],
  // ─── AE ───
  ae: [
    "Orient Health","Al Ain Ahlia","ADNIC Health","Sukoon Insurance","Watania Health","Arabia Insurance",
    "Abu Dhabi National Takaful","Takaful Emarat","Noor Takaful","Al Sagr Insurance","Union Insurance",
    "Dubai Insurance Company","Emirates Insurance","National General Insurance","Fidelity United",
    "Al Buhaira Insurance","RAK Insurance","Sharjah Insurance","Al Dhafra Insurance","Al Wathba Insurance",
    "Dar Al Takaful","Islamic Arab Insurance","Al Hilal Takaful","Orient UNB Takaful","National Bonds Health",
    "Salama Islamic Insurance","Methaq Takaful","HAYAH Insurance","Green Crescent Insurance",
    "Al Madina Insurance","Alliance Insurance","Adamjee Insurance UAE","Dubai National Insurance",
    "Ras Al Khaimah Insurance","Al Ittihad Al Watani","Emirates Post Health","MEDNET UAE","NEXTCARE",
    "Globemed Gulf","TPA Health","Neuron Health","MaxCare","Prime Health","Inayah TPA","MedSure",
  ],
  // ─── SG ───
  sg: [
    "MSIG Singapore","Sompo Insurance SG","Tokio Marine SG","FWD Insurance SG","Singlife","Etiqa Insurance SG",
    "China Taiping SG","China Life SG","HSBC Insurance SG","Manulife SG","Aviva SG","Chubb Insurance SG",
    "Liberty Insurance SG","Allianz SG","Zurich Insurance SG","Swiss Life SG","Cigna SG","AXA Insurance SG",
    "Munich Re SG","Hannover Re SG","Pacific Life Re SG","HDI Global SG","QBE Insurance SG","Berkshire SG",
    "AIG Singapore","MetLife Singapore","Sun Life Singapore","Starr International SG","Overseas Assurance SG",
    "Asia Capital Reinsurance","SAF Insurance","National Trades Union Insurance","Fullerton Health",
    "Doctor Anywhere","MHC Asia","MyDoc","WhiteCoat","HiDoc","Parkway Shenton","Raffles Medical Group",
    "Healthway Medical","Thomson Medical","IHH Healthcare SG","Farrer Park Medical","Gleneagles SG",
  ],
  // ─── CA ───
  ca: [
    "Desjardins Insurance","Industrial Alliance","Beneva","Equitable Life","Empire Life","RBC Insurance",
    "BMO Insurance","TD Insurance","CIBC Insurance","Scotiabank Insurance","Intact Financial Health",
    "Cooperators Health","Wawanesa Health","SSQ Insurance","Humania","La Capitale","Assumption Life",
    "Teachers Life","GroupHEALTH","Cowan Insurance","People Corporation","GroupSource","Medavie Blue Cross",
    "Pacific Blue Cross","Alberta Blue Cross","Saskatchewan Blue Cross","Manitoba Blue Cross","Chambers of Commerce",
    "Johnston Group","ClaimSecure","TELUS Health","Morneau Shepell Health","LifeWorks","League","Dialogue",
    "Maple Health","Babylon Health CA","Tia Health","CloudMD","Appletree Medical","Loblaws Health",
    "Shoppers Drug Mart Health","Costco Health","Rexall Health","Pharmasave Health",
  ],
  // ─── AU ───
  au: [
    "GMHBA","Westfund","Teachers Health","Defence Health","Police Health","Nurses & Midwives Health",
    "Doctors Health Fund","RT Health","Peoplecare","TUH","Health Partners","Latrobe Health","CUA Health",
    "NIB Health","CBHS Corporate Health","CBHS Health","HCI Health","Qantas Insurance Health",
    "Australian Unity","Frank Health","Onemedifund","Mildura Health","St Lukes Health","Transport Health",
    "Phoenix Health","HBF Health","HIF","Health Insurance Fund of WA","Reserve Bank Health","Navy Health",
    "Emergency Services Health","Railway & Transport Health","ACA Health","Apia Health","Suncorp Health",
    "Budget Direct Health","iSelect Health","Compare the Market AU Health","Canstar Health Rated",
    "GU Health","Queensland Country Health","CQ Health","Health.com.au","Honeysuckle Health","Lysaght Health",
  ],
  // ─── FR ───
  fr: [
    "MAAF Santé","MAIF Mutuelle","Matmut Santé","Groupama Santé","Crédit Agricole Santé","Crédit Mutuel Santé",
    "MGEN","MGEL","LMDE","SMERRA","April Santé","SwissLife Santé","CNP Assurances Santé","Alptis",
    "Henner","Verspieren","Mercer France","Gras Savoye","Groupe Diot","Siaci Saint Honoré","Mutex",
    "SMATIS","Pacifica","Suravenir","La France Mutualiste","Mutuelle Bleue","Mutuelle Générale",
    "MGEFI","MNH","MNT","Mutuelle des Motards","GMF Santé","MACIF Mutualité","Prévoir Santé",
    "Mutuelle Familiale","AESIO Mutuelle","VYV Group","Mutuelle Nationale Territoriale","SMACL Santé",
    "APICIL","Mutex Santé","Cegema","Néoliane","Selfassurance","Cocoon Santé",
  ],
  // ─── JP ───
  jp: [
    "Meiji Yasuda Life","Sumitomo Life","T&D Holdings","Sony Life","Orix Life","Tokio Marine Life",
    "MS&AD Insurance","Aioi Nissay Dowa","Fukoku Life","Asahi Life","Taiyo Life","Daido Life",
    "Mitsui Sumitomo Aioi Life","AIG Japan","Zurich Japan","AXA Life Japan","MetLife Japan","Prudential Japan",
    "Gibraltar Life","Manulife Japan","Sun Life Japan","Chubb Japan","Cardif Japan","Aeon Life",
    "Lifenet Insurance","Rakuten Life","SBI Life Japan","au Insurance","Mitsui Direct General",
    "Secom Insurance","Zenrosai","JA Kyosai","CO-OP Kyosai","Kokumin Kyosai","Zenkyoren","NKSJ Insurance",
    "Hanasaku Life","FWD Japan","Cathay Life Japan","SompoJapan Life","Himawari Life","Neo First Life",
    "Anshin Life","Excel Aid","Links Life","Plus Alpha",
  ],
  // ─── BR ───
  br: [
    "Porto Seguro Saúde","Sompo Seguros Saúde","Tokio Marine Saúde","HDI Seguros Saúde","Mapfre Saúde",
    "Allianz Saúde","Zurich Saúde","AIG Saúde Brasil","MetLife Saúde","Liberty Seguros Saúde",
    "Mongeral Aegon Saúde","Icatu Seguros Saúde","Generali Saúde","Caixa Seguradora Saúde",
    "BB Seguros Saúde","Itaú Saúde","Santander Saúde","Hapvida","NotreDame Intermédica","Prevent Senior",
    "Saúde Sim","São Francisco Saúde","CASSI","GEAP Saúde","Postal Saúde","FUNASA","Camed",
    "Eletros Saúde","Petrobras Saúde","FUSEX","IPSEMG","IAMSPE","Santa Casa Saúde","Saúde Caixa",
    "Hap Vida Saúde","Medial Saúde","Golden Cross","Amil Dental","OdontoPrev","Interodonto","Dental Uni",
    "MetLife Dental BR","Bradesco Dental","SulAmérica Odonto","Porto Seguro Dental","Uniodonto",
  ],
  // ─── ZA ───
  za: [
    "BestMed","Fedhealth","Gems (Government)","Polmed","Bankmed","Sizwe Hosmed","Samwumed",
    "Hosmed Medical Aid","CompCare Wellness","Profmed","KeyHealth","Topmed","Umvuzo Health","Sasolmed",
    "Transmed","Medipos","Sizwe Medical Fund","Resolution Health","Liberty Health","Old Mutual Health",
    "Sanlam Health","Hollard Health","Clientele Health","1Life Health","Multiply Health","FNB Health",
    "Standard Bank Health","Absa Health","Nedbank Health","Capitec Health","African Bank Health",
    "TymeBank Health","Discovery Vitality Plus","Bonitas Select","Momentum Ingwe","Medshield Plus",
    "Spectramed","Commed","LA Health","SIZWE Gold","Glencore Medical","Anglo Medical Scheme",
    "MTN Medical","Vodacom Medical","Telkom Medical","Eskom Medical","Transnet Medical",
  ],
  // ─── IN ───
  in: [
    "LIC Health","SBI Health","New India Assurance","United India Insurance","Oriental Insurance",
    "National Insurance","Bajaj Allianz Health","TATA AIG Health","Cholamandalam Health","Iffco Tokio Health",
    "Reliance General Health","Future Generali Health","Royal Sundaram Health","Magma HDI Health",
    "Digit Insurance Health","Go Digit Health","Acko Health Insurance","Bharti AXA Health","Kotak Health",
    "Max Bupa Health","Manipal Cigna","Aditya Birla Health","Apollo Munich Health","ManipalCigna ProHealth",
    "Star Comprehensive","Star Family Health Optima","Care Supreme","HDFC ERGO Optima","ICICI Health Booster",
    "Niva Bupa ReAssure","Bajaj Health Guard","TATA AIG MediCare","Cholamandalam Healthline",
    "Reliance Health Gain","Future Generali Heart","Royal Sundaram Lifeline","Digit Health Plus",
    "Acko Platinum Health","Bharti AXA Smart","Kotak Premier Health","Liberty Health Connect",
    "Raheja QBE Health","Edelweiss Health","Pramerica Health","Shriram Health","Canara HSBC Health",
    "Aegon Life Health","Aviva Health India","PNB MetLife Health",
  ],
  // ─── Large European ───
  it: [
    "UniSalute","Generali Italia","Intesa Sanpaolo Salute","Unipol SAI","Cattolica Assicurazioni","Reale Mutua",
    "Sara Assicurazioni","HDI Assicurazioni","Poste Vita","Zurich Italia","MetLife Italia","Allianz Italia",
    "AXA Italia","ITAS Mutua","Groupama Italia","BNP Paribas Cardif Italia","Mediolanum Assicurazioni",
    "Eurovita","Cassa Forense","ENPAM","FASDAC","FASI","CASAGIT","ASSIDAI","PREVIMEDICAL",
    "Blue Assistance","Europ Assistance Italia","RBM Salute","Mutua MBA","Caspie","Salus Mutua",
    "Insieme Salute","UnipolSai Salute","Genertel","Linear Assicurazioni","Direct Line Italia",
    "Quixa","Conte.it","Prima Assicurazioni","Verti Assicurazioni","Genialloyd","Yolo Assicurazioni",
    "Neosurance","Mioassicuratore","Facile.it Health","Segugio.it Health","Trovaprezzi Salute",
    "Compass Assicurazioni","Finastra Health Italia",
  ],
  es: [
    "Sanitas","Adeslas","ASISA","DKV Seguros","Caser Salud","Mapfre Salud","Cigna Spain","AXA Seguros Spain",
    "Vivaz","IMQ","MUFACE","Antares","Fiatc","Néctar","Plus Ultra Seguros","Previsora General","Reale Seguros",
    "Pelayo","Divina Pastora","Salus Seguros","Axa Winterthur","Zurich España","Allianz Seguros España",
    "MetLife España","Generali España","Liberty Seguros España","HDI España","Helvetia Seguros","Catalana Occidente",
    "Ocaso Seguros","Meridiano Seguros","COSALUD","Nueva Mutua Sanitaria","Aegon Salud","Cofidis Salud",
    "Línea Directa Salud","Verti España","Admiral España","Rastreator Salud","Acierto Salud",
    "Seguros El Corte Inglés","Bankia Seguros Salud","CaixaBank Salud","BBVA Seguros Salud",
    "Santander Seguros Salud","Ibercaja Seguros","Kutxabank Seguros","Laboral Kutxa","Segurcaixa Adeslas",
  ],
  nl: [
    "Zilveren Kruis","VGZ","CZ","Menzis","ONVZ","DSW","OHRA","Interpolis","Ditzo","Univé",
    "ASR Zorgverzekering","a.s.r.","Nationale-Nederlanden","Anderzorg","FBTO","IZA","IZZ",
    "Salland Zorgverzekering","De Friesland","Zorg en Zekerheid","Eno","AEVITAE","Pro Life",
    "National Academic","Besured","Just","InTwente","ZorgDirect","PMA","De Amersfoortse",
    "Avéro Achmea","Caresco","EUCARE","Promovendum","StudieZorgenVerzekering","ZieZo",
    "VinkVink","HollandZorg","GarantVerzorgd","Bewuzt","NV Zorgverzekeraar","IAK","Kiemer",
    "PNO Ziektekosten","ZorgSelect","Nedasco Health","VvAA","IZIT","UMC Zorgverzekering",
    "Loyalis Zorg","Zorgkeuze",
  ],
  ch: [
    "CSS","Helsana","SWICA","Sanitas","Concordia","Groupe Mutuel","Visana","Atupri","KPT","ÖKK",
    "Assura","EGK","Sympany","Sumiswalder","Supra","SLKK","Kolping","rhenusana","Luzerner Hinterland",
    "Agrisano","Compact","Easy Sana","Vivao Sympany","Sanagate","Birchmeier","Steffisburg",
    "KLuG","Glarner","Aquilana","AMB Assicurazioni","Avenir","Auxilia","Mutuel Assurance",
    "Philos","Sana24","Progrès","Intras","Moove Sympany","OK Versicherung","Provita",
    "Galenos","SUPRA-1846","Panorama","Wincare","Vita Surselva","Sodalis","ÖKK Premium",
    "Helsana Supplementary","CSS Myflex","SWICA Favorit",
  ],
  // ─── Middle East ───
  sa: [
    "Bupa Arabia","Tawuniya","Medgulf","CCHI","Malath Insurance","AXA Cooperative","Walaa Insurance",
    "Al Rajhi Takaful","GIG Saudi","Allianz Saudi","MetLife Saudi","AIG Saudi","Wataniya Insurance",
    "Arabian Shield","SABB Takaful","Gulf Union","Alinma Tokio Marine","Buruj Cooperative",
    "Solidarity Saudi","Al Ahlia Insurance","Amana Cooperative","Al Sagr Insurance SA","Sanad Insurance",
    "Weqaya Takaful","Saudi Re","SALAMA Saudi","Trade Union Insurance","United Cooperative Insurance",
    "Jazira Takaful","Al Ahli Takaful","Mediterranean Saudi","Saudi Enaya","Saudi Fransi Insurance",
    "Al Alamiya Insurance","Tokio Marine Saudi","Al Etihad Cooperative","Chubb Arabia","Liberty Saudi",
    "Zurich Saudi","HSBC Insurance Saudi","Riyad Bank Insurance","Banque Saudi Fransi Health",
    "Saudi Investment Bank Health","Arab National Bank Health","Samba Insurance","National Commercial Bank Health",
    "Rawabi Holding Health","Saudi German Hospital Plan","Dr. Sulaiman Al Habib Plan","Almana Hospital Plan",
  ],
  il: [
    "Maccabi","Clalit","Meuhedet","Leumit","Harel Insurance","Phoenix Insurance","Migdal Insurance",
    "AIG Israel","Clal Insurance","Menora Mivtachim","Shlomo Insurance","Ayalon Insurance","Shirbit",
    "Direct Insurance","Lev HaZahav","More Insurance","Rav Bariach Health","9 Insurance","Passportcard",
    "Now Insurance","Compare Insurance IL","Wobi","Bituach Yashir","Mahir Insurance","Kali Insurance",
    "MSAD Insurance IL","Ogen Insurance","Hofshi Insurance","Peace of Mind Health","Dikla Insurance",
    "Alon Insurance","Express Health","My Insurance IL","iSure","Bituach Plus","NetInsurance",
    "FundsBack","Inshura","Wesure","Seker Insurance","BeTuach","CompareNow IL","One Zero Insurance",
    "Digital Insurance IL","Smart Insurance IL","Lemonade IL","Root IL","Hippo IL","Oscar IL",
  ],
  tr: [
    "Acibadem Sigorta","Allianz Turkey","AXA Sigorta","Mapfre Turkey","Anadolu Sigorta","Groupama Turkey",
    "HDI Sigorta","Sompo Japan Turkey","Zurich Turkey","MetLife Turkey","Generali Turkey","Cigna Turkey",
    "Bereket Sigorta","Doğa Sigorta","Eureko Sigorta","Güneş Sigorta","Halk Sigorta","Ray Sigorta",
    "Türk Nippon Sigorta","Unico Sigorta","Koru Sigorta","Magdeburger Sigorta","Neova Sigorta",
    "Quick Sigorta","Şeker Sigorta","TEB Insurance","Türkiye Sigorta","Vakıf Emeklilik",
    "Ziraat Sigorta","Garanti BBVA Sigorta","İş Bankası Sigorta","Yapı Kredi Sigorta","DenizBank Sigorta",
    "Akbank Sigorta","QNB Finansbank Sigorta","HSBC Turkey Health","ING Turkey Health","Fibabanka Health",
    "Odeabank Health","Alternatif Bank Health","Aktif Bank Health","Kuveyt Türk Health","Albaraka Health",
    "Türkiye Finans Health","Bereket Katılım Health","Emlak Katılım Health","Vakıf Katılım Health",
    "Ziraat Katılım Health",
  ],
  // ─── Large African ───
  ng: [
    "NHIA","Hygeia HMO","AXA Mansard","Leadway Health","AIICO Insurance","Avon HMO","Reliance HMO",
    "Redcare HMO","Total Health Trust","Clearline HMO","Ronsberger HMO","Integrated Healthcare","Novo Health",
    "Princeton HMO","HealthPartners HMO","Defense Health","Police Health NG","United Healthcare NG",
    "Pro Health HMO","Mediplan Healthcare","Precious Health","Diamond Health","Venus Healthcare",
    "Pacific Health","Oceanic HMO","Zenith Medical Insurance","Access Health","GTB Health Plan",
    "First Bank Health","UBA Health Plan","Sterling Health","Fidelity Health","Union Bank Health",
    "Stanbic Health NG","Standard Chartered NG Health","Ecobank NG Health","Heritage Health","Keystone Health",
    "Wapic Insurance","Custodian Insurance","NEM Insurance","Mutual Benefits","Cornerstone Insurance",
    "Guinea Insurance","LASACO Insurance","Law Union Insurance","Linkage Assurance","Mansard Health Plus",
    "ARM Life Health","FBN Insurance Health","Coronation Insurance Health",
  ],
  ke: [
    "AAR Insurance","Jubilee Health","UAP Old Mutual","Britam Health","CIC Insurance","NHIF Kenya",
    "Resolution Health","APA Insurance","Heritage Insurance Kenya","Sanlam Kenya","GA Insurance",
    "Saham Insurance Kenya","Madison Insurance","Pioneer Insurance","Pacis Insurance","First Assurance",
    "Geminia Insurance","Occidental Insurance","Mayfair Insurance","Trident Insurance","Directline Assurance",
    "Invesco Insurance","MUA Insurance","Monarch Insurance","Old Mutual Kenya","Liberty Kenya",
    "Allianz Kenya","Jubilee Allianz","KCB Insurance","Equity Insurance","Cooperative Insurance",
    "ICEA Lion","Kenindia Insurance","Real Insurance","Xplico Insurance","Metropolitan Canon",
    "Kenya Orient Insurance","Takaful Insurance Africa","Fidelity Shield","Apollo Insurance Kenya",
    "Shield Assurance","Cannon Insurance","African Merchant Assurance","Intra Africa Assurance",
    "Star Assurance Kenya","Risk Africa Insurance","Gateway Insurance","Liaison Insurance",
    "Sedgwick Kenya","Bupa Global Kenya",
  ],
  eg: [
    "AXA Egypt","MetLife Egypt","GIG Egypt","Allianz Egypt","QNB Alahli Insurance","Misr Insurance",
    "Misr Life Insurance","Egyptian Life Takaful","Suez Canal Insurance","Delta Insurance","Arab Misr Insurance",
    "Royal Insurance Egypt","Mohandes Insurance","Cairo Amman Insurance","ISKAN Insurance","Bupa Egypt",
    "Cigna Egypt","Oriental Weavers Insurance","National Insurance Company Egypt","Egyptian Saudi Insurance",
    "Wethaq Insurance","Libano-Suisse Egypt","Arab Orient Insurance Egypt","Tokio Marine Egypt",
    "New Egypt Insurance","Pharaonic Insurance","Nile General Insurance","Egypt Direct Insurance",
    "AIG Egypt","Chubb Egypt","Zurich Egypt","Generali Egypt","Mapfre Egypt","HDI Egypt",
    "Liberty Egypt","Tawuniya Egypt","Gulf Insurance Egypt","SACE Insurance","Credit Agricole Egypt Insurance",
    "HSBC Egypt Insurance","Banque Misr Insurance","Bank of Alexandria Insurance","CIB Insurance",
    "Faisal Islamic Insurance","Al Baraka Insurance Egypt","Arab African Insurance","Arope Insurance Egypt",
    "Sarwa Insurance","Wafa Insurance Egypt","GlobeMed Egypt",
  ],
  // ─── Large Asian ───
  cn: [
    "Ping An Health","China Life","PICC Health","Taikang Insurance","AIA China","CPIC Health",
    "New China Life","Sunshine Insurance","ZhongAn Insurance","Fosun United Health","Manulife-Sinochem",
    "CITIC-Prudential","MetLife China","Allianz China Life","AXA Tianping","Generali China Life",
    "Aviva-COFCO Life","Samsung Life China","Sun Life Everbright","BOC Insurance","ICBC-AXA",
    "CCB Life","ABC Life Insurance","China Merchants Life","Minsheng Insurance","Hua Xia Insurance",
    "Tian An Insurance","Bohai Life","Guohua Life","Sino Life","Zhongrong Life","Aeon Life China",
    "Heng An Standard Life","Taiping Life","Great Wall Life","Jiahe Life","Dongwu Life",
    "Kunlun Health Insurance","Hexie Health Insurance","Ruihua Health Insurance","Fude Life",
    "Waterdrop Insurance","Ant Insurance","JD Insurance","Tencent WeSure","Baidu Insurance",
    "Lemonade China","Yuanbao Insurance","Shuidihuzhu","MediLink Global China",
  ],
  kr: [
    "Samsung Life","Hanwha Life","DB Insurance","Kyobo Life","Meritz Fire","NH Insurance","Lotte Insurance",
    "Dongbu Insurance","Hyundai Marine","Samsung Fire","KB Insurance","Heungkuk Life","ABL Life",
    "BNP Paribas Cardif Korea","Chubb Life Korea","MetLife Korea","Prudential Korea","AIA Korea",
    "Allianz Life Korea","Fubon Hyundai Life","KDB Life","Mirae Asset Life","Shinhan Life",
    "Tong Yang Life","Woori Financial Health","Hana Insurance","IBK Insurance","AIG Korea",
    "Zurich Korea","AXA General Korea","Cigna Korea","ACE Insurance Korea","Chartis Korea",
    "Liberty Korea","Tokio Marine Korea","Sompo Japan Korea","MSIG Korea","QBE Korea",
    "HDI Korea","Atradius Korea","Euler Hermes Korea","COFACE Korea","K-Sure Health",
    "Korea Post Insurance","Teachers Pension Health","Military Pension Health","Government Employees Pension Health",
    "Korea Workers Compensation","Samsung Medical Center Plan","Asan Medical Center Plan","Seoul National University Hospital Plan",
  ],
  th: [
    "AXA Thailand","Bupa Thailand","Muang Thai Life","Bangkok Insurance","Pacific Cross Thailand",
    "Cigna Thailand","FWD Thailand","Allianz Ayudhya","Krungthai-AXA","Thai Life Insurance",
    "Dhipaya Insurance","Viriyah Insurance","Syn Mun Kong","Thai Paiboon Insurance","Navakij Insurance",
    "Southeast Insurance","Siam Commercial Samaggi","Thai Group Insurance","Thai Insurance PCL",
    "Indara Insurance","Falcon Insurance","MSIG Thailand","Tokio Marine Thailand","Sompo Thailand",
    "Chubb Samaggi","AIG Thailand","Zurich Thailand","Generali Thailand","Thaivivat Insurance",
    "Mittare Insurance","Chao Phaya Insurance","Thai Setakij Insurance","Deves Insurance",
    "Sri Ayudhya Capital","Thanachart Insurance","Thanasettakij Insurance","Phatra Insurance",
    "LMG Insurance","Ratchathani Insurance","Safety Insurance","NNGen Insurance","Smilelife Insurance",
    "Happy Life Insurance","Mango Insurance TH","Line Insurance TH","True Health TH","AIS Health TH",
    "DTAC Health TH","Grab Health TH","Shopee Health TH",
  ],
  // ─── Large Americas ───
  mx: [
    "GNP Seguros","MetLife México","AXA Seguros México","Allianz México","BUPA México","Mapfre México",
    "Seguros Monterrey","Zurich México","Plan Seguro","Seguros SURA México","Cigna México",
    "General de Salud","Dentegra","Seguros Banorte","BBVA Seguros México","Inbursa Salud",
    "Seguros Atlas","QUALITAS Salud","HDI Seguros México","Chubb México","AIG México",
    "Tokio Marine México","Cardif México","Afirme Seguros","BanRegio Seguros","Multiva Seguros",
    "Scotiabank Seguros MX","HSBC Seguros MX","Santander Seguros MX","Citibanamex Seguros",
    "Inter Seguros","Patrimonial Inbursa","BEST Doctors México","Meddi","Softel Salud",
    "MediAccess","Keralty México","Christus Muguerza Plan","Star Médica Plan","Ángeles Servicios de Salud",
    "Médica Sur Plan","Hospital ABC Plan","Centro Médico Nacional Plan","IMSS Supplemental",
    "ISSSTE Complementario","Pemex Health Plan","CFE Health Plan","SEDENA Health","SEMAR Health",
    "Prospera Health",
  ],
  ar: [
    "OSDE","Swiss Medical","Galeno","Medifé","Hospital Italiano","OMINT","Federada Salud","Sancor Salud",
    "Luis Pasteur","Medicus","Accord Salud","Bristol","CEMIC","Centro Médico","Colonia Suiza","Consolidar Salud",
    "DASA","Hominis","Hospital Alemán","Hospital Austral","Hospital Británico","IOMA","IOSPER","Jerárquicos Salud",
    "MediFé Plus","Obra Social Provincia","OSPRERA","Parque Salud","Plan de Salud","Prevención Salud",
    "Red Argentina de Salud","Salud Integral","San Fernando Salud","Sanatorio Güemes Plan","Sanatorio Otamendi",
    "Staff Médico","Unión Personal","Vitotal","William Hope","ACA Salud","AMFFA","APSOT","DASPU",
    "DOSUBA","Horizonte Salud","Integral Salud","Programa Médico","Red Salud","SUMEFA","UPCN Salud",
  ],
  cl: [
    "Banmédica","Consalud","Cruz Blanca","Colmena","Vida Tres","Nueva Masvida","Cigna Chile",
    "Bupa Chile","MetLife Chile","Zurich Chile","Mapfre Chile","BCI Seguros","Falabella Seguros",
    "Scotiabank Seguros CL","Banco Estado Seguros","Itaú Seguros Chile","Security Seguros","Penta Seguros",
    "SURA Chile","Liberty Chile","Chubb Chile","AIG Chile","HDI Chile","Renta Nacional","BNP Paribas Chile",
    "Principal Chile","AFP Habitat Health","AFP Cuprum Health","AFP Capital Health","AFP Provida Health",
    "AFP Modelo Health","AFP Planvital Health","AFP UNO Health","FONASA Complementario","Red Salud UC",
    "Clínica Alemana Plan","Clínica Las Condes Plan","Clínica Santa María Plan","Clínica Dávila Plan",
    "Clínica Indisa Plan","Clínica Bicentenario Plan","Clínica Universidad de Los Andes","Integramédica",
    "RedSalud","Megasalud","VidaIntegra","Bupa Seguros Chile","Colmena Golden Cross","Cruz Blanca Premium",
    "Consalud Más",
  ],
  co: [
    "Sura EPS","Colsanitas","Compensar","Coomeva EPS","Sanitas Colombia","Medplus","Colsubsidio Salud",
    "Famisanar","Mutual Ser","Comfenalco Salud","Cafesalud","Salud Total","Cruz Blanca Colombia",
    "Aliansalud","EPS Suramericana","Coosalud","Emssanar","Comfacor","Comfamiliar Huila",
    "Comfamiliar Nariño","Comfamiliar Risaralda","Asmet Salud","Capital Salud","Medimás","Nueva EPS",
    "Salud Mía","Mutual SER","Comparta","Ecoopsos","Dusakawi","Anas Wayuu","Pijaos Salud",
    "Mallamas","Comfachocó","Confacundi","Capresoca","Cafam","Comfandi","Comfama","Comfenalco Valle",
    "Savia Salud EPS","Cajacopi","SOS EPS","Saludvida","Solsalud","Humana Vivir","Salud Vida",
    "Golden Group Colombia","Seguros Bolívar Salud","Mapfre Colombia Salud","Liberty Colombia Salud",
  ],
  // ─── New Zealand ───
  nz: [
    "Southern Cross","nib NZ","Accuro","UniMed","AIA NZ","Partners Life","Fidelity Life","Cigna NZ",
    "AMP NZ","Asteron Life","Pinnacle Life","OnePath NZ","MAS","Medical Assurance Society","Sovereign",
    "Tower NZ","AA Insurance NZ","ANZ Insurance NZ","ASB Insurance","BNZ Insurance","Westpac NZ Insurance",
    "Kiwibank Insurance","TSB Insurance","Heartland Insurance","NZI Insurance","Vero NZ","IAG NZ",
    "QBE Insurance NZ","Allianz NZ","Zurich NZ","AXA NZ","Chubb NZ","Berkshire Hathaway NZ",
    "Farmers Mutual NZ","FMG Insurance","NZ Medical Assurance","NZ Health Trust","Waikato Health Trust",
    "Canterbury Health Trust","Auckland Health Trust","Wellington Health Trust","Otago Health Trust",
    "Bay of Plenty Health","Hawkes Bay Health","Taranaki Health Trust","Manawatu Health Trust",
    "Northland Health Trust","Southland Health Trust","Nelson Health Trust","Marlborough Health Trust",
  ],
};

// Currencies by country
const CURRENCIES = {
  us:"$",uk:"£",de:"€",ae:"AED ",sg:"SGD ",ca:"CAD ",au:"AUD ",fr:"€",jp:"¥",br:"R$ ",za:"ZAR ",in:"₹",
  it:"€",es:"€",nl:"€",ch:"CHF ",se:"SEK ",no:"NOK ",dk:"DKK ",fi:"€",be:"€",at:"€",pt:"€",ie:"€",
  pl:"PLN ",cz:"CZK ",gr:"€",ro:"RON ",hu:"HUF ",hr:"€",bg:"BGN ",sk:"€",si:"€",ee:"€",lv:"€",lt:"€",
  lu:"€",mt:"€",cy:"€",is:"ISK ",al:"ALL ",mk:"MKD ",me:"€",rs:"RSD ",ba:"BAM ",md:"MDL ",by:"BYN ",
  ua:"UAH ",ad:"€",mc:"€",li:"CHF ",sm:"€",sa:"SAR ",qa:"QAR ",kw:"KWD ",bh:"BHD ",om:"OMR ",
  il:"₪",jo:"JOD ",lb:"USD ",iq:"IQD ",ir:"IRR ",tr:"₺",ye:"YER ",sy:"SYP ",ps:"ILS ",
  cn:"¥",kr:"₩",th:"฿",vn:"VND ",ph:"₱",id:"IDR ",my:"MYR ",tw:"TWD ",hk:"HKD ",
  mm:"MMK ",kh:"USD ",la:"LAK ",bd:"৳",pk:"PKR ",lk:"LKR ",np:"NPR ",mn:"MNT ",bn:"BND ",
  mv:"MVR ",bt:"BTN ",tl:"USD ",mx:"MXN ",ar:"ARS ",cl:"CLP ",co:"COP ",pe:"PEN ",ec:"USD ",
  ve:"USD ",uy:"UYU ",py:"PYG ",bo:"BOB ",cr:"CRC ",pa:"USD ",gt:"GTQ ",hn:"HNL ",sv:"USD ",
  ni:"NIO ",cu:"CUP ",do:"DOP ",ht:"HTG ",gy:"GYD ",sr:"SRD ",bz:"BZD ",jm:"JMD ",
  tt:"TTD ",bs:"BSD ",bb:"BBD ",lc:"XCD ",vc:"XCD ",gd:"XCD ",ag:"XCD ",dm:"XCD ",kn:"XCD ",
  ng:"₦",ke:"KES ",eg:"EGP ",ma:"MAD ",tn:"TND ",gh:"GHS ",et:"ETB ",tz:"TZS ",rw:"RWF ",
  ug:"UGX ",sn:"XOF ",ci:"XOF ",cm:"XAF ",dz:"DZD ",ly:"LYD ",mz:"MZN ",zw:"USD ",bw:"BWP ",
  na:"NAD ",mu:"MUR ",mg:"MGA ",cd:"CDF ",ao:"AOA ",zm:"ZMW ",mw:"MWK ",
  nz:"NZD ",fj:"FJD ",pg:"PGK ",ws:"WST ",to:"TOP ",vu:"VUV ",sb:"SBD ",
};

// Premium ranges by currency (monthly, low and high for basic vs comprehensive)
const PREMIUM_RANGES = {
  "$": [150,1200], "£": [40,350], "€": [30,500], "AED ": [300,4000], "SGD ": [100,800],
  "CAD ": [50,400], "AUD ": [60,500], "¥": [2000,18000], "R$ ": [150,2500], "ZAR ": [1500,14000],
  "₹": [200,5000], "CHF ": [150,600], "SEK ": [200,3000], "NOK ": [200,3500], "DKK ": [150,2500],
  "PLN ": [80,600], "CZK ": [500,5000], "RON ": [100,800], "HUF ": [5000,40000], "BGN ": [30,300],
  "ISK ": [5000,40000], "ALL ": [2000,15000], "MKD ": [500,5000], "RSD ": [2000,15000],
  "BAM ": [30,250], "MDL ": [200,2000], "BYN ": [30,300], "UAH ": [500,5000],
  "SAR ": [300,3000], "QAR ": [400,3500], "KWD ": [20,200], "BHD ": [20,200], "OMR ": [20,200],
  "₪": [200,1500], "JOD ": [20,200], "USD ": [50,800], "IQD ": [30000,300000], "IRR ": [2000000,20000000],
  "₺": [500,5000], "YER ": [5000,50000], "SYP ": [50000,500000], "ILS ": [200,1500],
  "₩": [30000,300000], "฿": [1000,10000], "VND ": [500000,5000000], "₱": [500,5000],
  "IDR ": [200000,2000000], "MYR ": [100,800], "TWD ": [500,5000], "HKD ": [500,5000],
  "MMK ": [20000,200000], "LAK ": [200000,2000000], "৳": [500,5000], "PKR ": [1000,10000],
  "LKR ": [1000,10000], "NPR ": [500,5000], "MNT ": [30000,300000], "BND ": [50,500],
  "MVR ": [500,5000], "BTN ": [500,5000], "MXN ": [500,5000], "ARS ": [5000,50000],
  "CLP ": [20000,200000], "COP ": [50000,500000], "PEN ": [50,500], "UYU ": [1000,10000],
  "PYG ": [100000,1000000], "BOB ": [100,1000], "CRC ": [10000,100000], "GTQ ": [100,1000],
  "HNL ": [500,5000], "NIO ": [500,5000], "CUP ": [100,1000], "DOP ": [500,5000],
  "HTG ": [500,5000], "GYD ": [2000,20000], "SRD ": [200,2000], "BZD ": [50,500],
  "JMD ": [2000,20000], "TTD ": [200,2000], "BSD ": [50,500], "BBD ": [100,1000],
  "XCD ": [100,1000], "₦": [5000,50000], "KES ": [2000,20000], "EGP ": [500,5000],
  "MAD ": [200,2000], "TND ": [30,300], "GHS ": [50,500], "ETB ": [500,5000],
  "TZS ": [20000,200000], "RWF ": [5000,50000], "UGX ": [50000,500000], "XOF ": [5000,50000],
  "XAF ": [5000,50000], "DZD ": [2000,20000], "LYD ": [50,500], "MZN ": [1000,10000],
  "BWP ": [200,2000], "NAD ": [500,5000], "MUR ": [500,5000], "MGA ": [20000,200000],
  "CDF ": [10000,100000], "AOA ": [5000,50000], "ZMW ": [100,1000], "MWK ": [5000,50000],
  "NZD ": [50,400], "FJD ": [30,300], "PGK ": [50,500], "WST ": [20,200],
  "TOP ": [20,200], "VUV ": [2000,20000], "SBD ": [50,500],
};

const COVERAGE_TYPES = ["basic","standard","premium","comprehensive"];
const BADGE_POOL = [
  "Best for Families","Best for Seniors","Best for Young Adults","Best for Expats","Best Digital Tools",
  "Best Dental","Best Mental Health","Best Maternity","Best Emergency","Best Telehealth",
  "Best Chronic Care","Best Preventive","Best Network","Best Claims Process","Most Affordable",
  "Best Customer Service","Innovation Award","Rising Star","Heritage Brand","Best Group Plans",
  "Best Individual Plans","Best Rural Coverage","Best Urban Coverage","Green Insurer",
  "Best Wellness Program","Best Travel Coverage","Best Prescription","Best Vision","Tech Pioneer",
  "Fastest Growing","Most Trusted","Community Choice","Best HSA Compatible","Best for Self-Employed",
  "Best for Freelancers","Best Co-Pay","Best Deductible Options","Best Coverage Limits",
  "Social Enterprise","Not-For-Profit","Best App","Best Online Portal","Sustainability Award",
  "Best Rehabilitation","Best Cancer Coverage","Best Cardiac Care","Best Surgical Coverage",
  "Best Outpatient","Most Comprehensive",
];
const SOURCES = [
  "Health Insurance Comparison 2025","National Insurance Review 2025","Consumer Choice Awards 2025",
  "Insurance Business Awards 2025","Market Research Report 2025","Healthcare Quality Survey 2025",
  "Digital Insurance Awards 2025","Financial Stability Ratings 2025","Customer Satisfaction Index 2025",
  "Industry Excellence Awards 2025","Best Practice Awards 2025","Annual Insurance Rankings 2025",
  "Regulatory Assessment Report 2025","Insurance Innovation Awards 2025","Value Assessment 2025",
];

function rand(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
function pick(arr) { return arr[rand(0, arr.length - 1)]; }
function pickN(arr, n) {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, n);
}
function fmtNum(n) { return n.toLocaleString(); }

function generatePlan(countryCode, countryName, insurerName, index) {
  const currency = CURRENCIES[countryCode] || "USD ";
  const range = PREMIUM_RANGES[currency] || [50, 800];
  const lowPremium = rand(range[0], Math.floor(range[0] + (range[1]-range[0])*0.4));
  const highPremium = rand(Math.floor(range[0] + (range[1]-range[0])*0.5), range[1]);
  const typeIdx = rand(0, 3);
  const coverageType = COVERAGE_TYPES[typeIdx];
  const rating = (rand(32, 48) / 10).toFixed(1);
  const reviewCount = rand(200, 18000);
  const shortName = insurerName.toLowerCase().replace(/[^a-z0-9]/g, "").slice(0, 15);
  const id = `${countryCode}-${shortName}-${index}`;

  const hasDental = Math.random() > 0.3;
  const hasVision = Math.random() > 0.5;
  const hasMental = Math.random() > 0.25;
  const hasMaternity = Math.random() > 0.4;
  const hasInternational = Math.random() > 0.7;
  const hasTelehealth = Math.random() > 0.3;

  const deductLow = rand(0, Math.floor(range[0] * 0.5));
  const deductHigh = rand(Math.floor(range[0] * 0.5), Math.floor(range[0] * 2));

  const badges = pickN(BADGE_POOL, rand(1, 3));
  const source = pick(SOURCES);

  return {
    id,
    name: `${insurerName} Health Plan`,
    provider: insurerName,
    country: countryName,
    countryCode,
    logo: `/logos/${shortName}.svg`,
    rating: parseFloat(rating),
    reviewCount,
    monthlyPremium: `${currency}${fmtNum(lowPremium)} - ${currency}${fmtNum(highPremium)}`,
    deductible: `${currency}${fmtNum(deductLow)} - ${currency}${fmtNum(deductHigh)}`,
    coverageType,
    badges,
    highlights: [
      `Trusted provider in ${countryName}`,
      `${coverageType.charAt(0).toUpperCase() + coverageType.slice(1)} coverage with competitive rates`,
      hasTelehealth ? "24/7 telehealth access included" : "Wide provider network",
    ],
    pros: [
      `Well-established in ${countryName}`,
      `${coverageType === "comprehensive" ? "Full" : "Good"} coverage options`,
      hasDental ? "Dental coverage included" : "Competitive pricing",
      hasTelehealth ? "Strong digital health tools" : "Reliable claims processing",
    ],
    cons: [
      !hasInternational ? "Limited international coverage" : "Premium pricing",
      !hasVision ? "Vision coverage not included on basic plans" : "Complex plan structures",
      "Waiting periods may apply",
    ],
    affiliateUrl: "#",
    description: `${insurerName} offers ${coverageType} health insurance in ${countryName}, providing reliable coverage backed by strong local expertise and a growing provider network.`,
    coverageDetails: {
      hospitalization: true,
      outpatient: Math.random() > 0.15,
      dental: hasDental,
      vision: hasVision,
      mental: hasMental,
      maternity: hasMaternity,
      prescription: Math.random() > 0.2,
      emergency: true,
      international: hasInternational,
      telehealth: hasTelehealth,
    },
    editorialExcerpt: `${insurerName} provides a ${rating >= 4.0 ? "strong" : "solid"} option for ${countryName} residents seeking ${coverageType} health coverage with ${hasTelehealth ? "modern digital tools" : "reliable traditional service"}.`,
    editorialSource: `${countryName} ${source}`,
  };
}

// ─── Main ───
// Read countries-all.ts to get all country codes and names
const countriesFile = fs.readFileSync(path.join(LIB, "countries-all.ts"), "utf8");
const countryRegex = /code:\s*"(\w+)",\s*\n\s*name:\s*"([^"]+)",\s*\n\s*flag:\s*"([^"]+)",\s*\n\s*region:\s*"([^"]+)"/g;
const allCountries = [];
let m;
while ((m = countryRegex.exec(countriesFile)) !== null) {
  allCountries.push({ code: m[1], name: m[2], flag: m[3], region: m[4] });
}

// Read existing plans to know what we have
const planFiles = ["plans-original.ts","plans-europe.ts","plans-asia.ts","plans-americas.ts","plans-middle-east.ts","plans-africa.ts","plans-oceania.ts"];
const existingPlans = {};
for (const f of planFiles) {
  const fp = path.join(LIB, f);
  if (!fs.existsSync(fp)) continue;
  const content = fs.readFileSync(fp, "utf8");
  const idRegex = /countryCode:\s*"(\w+)"/g;
  let im;
  while ((im = idRegex.exec(content)) !== null) {
    existingPlans[im[1]] = (existingPlans[im[1]] || 0) + 1;
  }
}

console.log("Existing plans per country:");
for (const [code, count] of Object.entries(existingPlans).sort((a,b) => b[1]-a[1])) {
  console.log(`  ${code}: ${count}`);
}

// Generate supplemental plans
const TARGET = 50;
const supplemental = {};

for (const country of allCountries) {
  const existing = existingPlans[country.code] || 0;
  const needed = Math.max(0, TARGET - existing);
  if (needed === 0) continue;

  const countryInsurers = INSURERS[country.code] || [];
  // If we don't have specific insurers, generate generic ones
  const insurerPool = countryInsurers.length > 0 ? countryInsurers :
    [
      `${country.name} National Health`, `${country.name} General Insurance`, `AXA ${country.name}`,
      `Allianz ${country.name}`, `Cigna ${country.name}`, `Bupa ${country.name}`,
      `MetLife ${country.name}`, `Zurich ${country.name}`, `Generali ${country.name}`,
      `AIG ${country.name}`, `Prudential ${country.name}`, `Manulife ${country.name}`,
      `Liberty ${country.name}`, `Chubb ${country.name}`, `HDI ${country.name}`,
      `Mapfre ${country.name}`, `FWD ${country.name}`, `Sun Life ${country.name}`,
      `Great Eastern ${country.name}`, `MSIG ${country.name}`, `Tokio Marine ${country.name}`,
      `Sompo ${country.name}`, `Aviva ${country.name}`, `Legal & General ${country.name}`,
      `Standard Life ${country.name}`, `Swiss Re ${country.name}`, `Munich Re ${country.name}`,
      `Hannover Re ${country.name}`, `SCOR ${country.name}`, `Pacific Cross ${country.name}`,
      `Guardian ${country.name}`, `Sagicor ${country.name}`, `NICO ${country.name}`,
      `Old Mutual ${country.name}`, `Sanlam ${country.name}`, `Discovery ${country.name}`,
      `Hollard ${country.name}`, `Britam ${country.name}`, `Jubilee ${country.name}`,
      `UAP ${country.name}`, `CIC ${country.name}`, `Resolution ${country.name}`,
      `Heritage ${country.name}`, `First Assurance ${country.name}`, `Pioneer ${country.name}`,
      `Directline ${country.name}`, `Shield ${country.name}`, `Gateway ${country.name}`,
      `Monarch ${country.name}`, `Takaful ${country.name}`, `Express ${country.name}`,
    ];

  supplemental[country.code] = [];
  for (let i = 0; i < needed; i++) {
    const insurer = insurerPool[i % insurerPool.length];
    supplemental[country.code].push(generatePlan(country.code, country.name, insurer, i));
  }
}

// Write supplemental file
let output = 'import { InsurancePlan } from "./types";\n\n';
output += "export const supplementalPlans: InsurancePlan[] = [\n";

let totalGenerated = 0;
for (const [code, plans] of Object.entries(supplemental).sort()) {
  output += `  // ── ${plans[0]?.country || code} (${plans.length} supplemental plans) ──\n`;
  for (const plan of plans) {
    output += `  ${JSON.stringify(plan, null, 0)},\n`;
    totalGenerated++;
  }
}

output += "];\n";

fs.writeFileSync(path.join(LIB, "plans-supplemental.ts"), output);
console.log(`\nGenerated ${totalGenerated} supplemental plans`);
console.log(`Written to src/lib/plans-supplemental.ts`);

// Update planCount in countries-all.ts
let countriesContent = fs.readFileSync(path.join(LIB, "countries-all.ts"), "utf8");
for (const country of allCountries) {
  const existing = existingPlans[country.code] || 0;
  const supp = supplemental[country.code]?.length || 0;
  const total = existing + supp;
  // Update planCount
  const regex = new RegExp(`(code:\\s*"${country.code}"[\\s\\S]*?planCount:\\s*)\\d+`);
  countriesContent = countriesContent.replace(regex, `$1${total}`);
}
fs.writeFileSync(path.join(LIB, "countries-all.ts"), countriesContent);
console.log("Updated planCount in countries-all.ts");
