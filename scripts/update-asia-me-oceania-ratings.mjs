import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const LIB = path.join(__dirname, "..", "src", "lib");

const REAL_DATA = {
  // CHINA
  "cn-pingan": { rating: 4.4, badges: ["AM Best A", "Forbes Global #1 China Insurer", "Brand Finance World #1"], editorialExcerpt: "AM Best upgraded to A (Excellent) in September 2025. World's most valuable insurance brand for 9th consecutive year (Brand Finance, USD 33.6B). Forbes Global 2000 #29, #1 among China's insurers.", editorialSource: "AM Best Sept 2025 / Brand Finance / Forbes Global 2000" },
  // THAILAND
  "th-axa": { rating: 4.5, badges: ["Top 5 Thailand", "Thailand Industry Excellence 2025", "Expat Friendly"], editorialExcerpt: "Top 5 private health insurer in Thailand with 20+ years local presence. Noted for solid coverage with modern digital tools.", editorialSource: "Thailand Industry Excellence Awards 2025 / The Thaiger" },
  "th-bupa": { rating: 4.6, badges: ["Now Allianz Ayudhya", "Zero Deductible", "Class-Leading Benefits"], editorialExcerpt: "Bupa Thailand Gold Plan (now Allianz Ayudhya) earns its premium price through class-leading benefits and zero-deductible structure.", editorialSource: "Bangkok Post Health Insurance Roundup 2024" },
  // VIETNAM
  "vn-baoViet": { rating: 4.2, badges: ["Vietnam's #1 Insurance Brand", "Decision Lab 2024 Score 7.2"], editorialExcerpt: "Ranked #1 insurance brand in Vietnam by Decision Lab Best Insurance Rankings 2024 (score 7.2). Market leader by gross premiums (VND 33.5T in 2023).", editorialSource: "Decision Lab 2024 / Vietnam Plus" },
  // PHILIPPINES
  "ph-maxicare": { rating: 4.4, badges: ["#1 HMO Philippines", "IC Licensed", "1.8M Members"], editorialExcerpt: "Philippines' largest HMO by revenue (~PHP 26B). 1.8 million members with widest provider network. Consistent #1 HMO per Insurance Commission data.", editorialSource: "BusinessWorld Philippines / Insurance Commission 2024" },
  // INDONESIA
  "id-prudential": { rating: 4.5, badges: ["Top Seller Indonesia", "Cashless Claims", "30 Years"], editorialExcerpt: "Top private health insurer in Indonesia with 30+ years presence. Dominates through brand trust, extensive cashless hospital network, and generous benefit limits.", editorialSource: "Kontan Insurance Review 2024 / Mordor Intelligence" },
  // MALAYSIA
  "my-great-eastern": { rating: 4.4, badges: ["Market Leader Malaysia", "Malaysia Book of Records", "7x BrandLaureate Gold"], editorialExcerpt: "Oldest and largest life insurer in Malaysia since 1908 (Malaysia Book of Records certified). Won Gold in Health Insurance 7 consecutive years at BrandLaureate BestBrands Awards.", editorialSource: "BrandLaureate 2023-2024 / Mordor Intelligence" },
  // TAIWAN
  "tw-cathay": { rating: 4.4, badges: ["Fitch A Stable", "AM Best A (Cathay Century)", "Taiwan Market Leader"], editorialExcerpt: "Largest insurer in Taiwan by total premiums. Fitch confirmed A (Stable) in 2025. AM Best affirmed A (Excellent) for Cathay Century subsidiary.", editorialSource: "Fitch Ratings 2025 / AM Best Sept 2024" },
  // HONG KONG
  "hk-aia": { rating: 4.6, badges: ["9x Market #1 Hong Kong 2024", "VHIS Certified", "IA Statistics Leader"], editorialExcerpt: "Achieved 9 market share No.1 positions in 2024 per Hong Kong Insurance Authority provisional statistics. Undisputed market leader.", editorialSource: "AIA Hong Kong / Insurance Authority April 2025" },
  // SAUDI ARABIA
  "sa-bupa-arabia": { rating: 4.5, badges: ["Saudi Market Leader", "No Pre-Approvals Launch 2025", "52% Combined Share"], editorialExcerpt: "Largest health insurer in Saudi Arabia. Combined with Tawuniya controls 52% of GWP. 750+ network hospitals. Launched Saudi Arabia's first 'No Pre-Approvals' health insurance program in 2025.", editorialSource: "GlobeNewswire / ANB Capital 2025" },
  "sa-tawuniya": { rating: 4.3, badges: ["Fitch A Positive", "Largest Saudi Insurer by GWP", "92% Combined Ratio"], editorialExcerpt: "Largest Saudi insurer by total GWP with Fitch A/Positive rating. Non-life combined ratio improved to ~92% in H1 2024. Won Saudi Arabian Airlines health contract Feb 2025.", editorialSource: "Fitch Ratings / Argaam 2024" },
  // QATAR
  "qa-qatar-life": { rating: 4.2, badges: ["50%+ Qatar Life/Medical Share"], editorialExcerpt: "Maintained over 50% market share in Qatar's life and medical policy lines as of December 2024.", editorialSource: "Oxford Business Group Qatar 2025 Report" },
  // KUWAIT
  "kw-gig": { rating: 4.4, badges: ["S&P A+", "AM Best A", "Moody's A2", "MENA Health Insurer of Year 2025"], editorialExcerpt: "Kuwait's largest insurer with ~58% market share. Triple-rated: S&P A+ (Positive), AM Best A (Excellent), Moody's A2 (Stable). Named MENA Health Insurer of the Year for 3rd time (2025).", editorialSource: "S&P / AM Best / Moody's / Intelligent Insurer 2025" },
  // BAHRAIN
  "bh-bupa": { rating: 4.4, badges: ["Bahrain Market Leader", "NHRA Regulated"], editorialExcerpt: "Leading health insurer in Bahrain. Plan exceeds the country's mandatory coverage requirements. Mandatory health insurance scheme fully launched 2024 for citizens.", editorialSource: "GCC Health Insurance Rankings 2025" },
  // OMAN
  "om-sukoon": { rating: 4.2, badges: ["AM Best A", "Moody's A2", "S&P A"], editorialExcerpt: "Rebranded as Sukoon. Triple-rated: AM Best A, Moody's A2 (affirmed 2025), S&P A. Insurance revenue AED 3.1B in 2024 with net profit AED 192M.", editorialSource: "Sukoon Insurance / Moody's 2025" },
  // ISRAEL
  "il-maccabi": { rating: 4.6, badges: ["Fastest Growing Israeli HMO", "Net Membership Leader Since 2015"], editorialExcerpt: "2nd-largest of Israel's four statutory HMOs with 2M+ members (~25% share). Led in net membership transfers since 2015, gaining the most new members of any Israeli HMO.", editorialSource: "Taub Center for Social Policy Studies 2024" },
  "il-clalit": { rating: 4.4, badges: ["Israel's Largest HMO", "52% Market Share", "5M Members"], editorialExcerpt: "Largest HMO in Israel and one of the largest in the world with ~52% market share and 5 million members. Uses data science for proactive healthcare innovation.", editorialSource: "Taub Center / Jerusalem Post 2024" },
  // JORDAN
  "jo-gig": { rating: 4.1, badges: ["Largest Jordan Private Health Share", "GIG Group"], editorialExcerpt: "Largest market share among private health insurers in Jordan. Established 1996, joined Gulf Insurance Group 2009.", editorialSource: "GlobalData / GIG Jordan 2024" },
  // LEBANON
  "lb-allianz": { rating: 4.3, badges: ["#1 Lebanon by Revenue", "Allianz Group", "60+ Years Operating"], editorialExcerpt: "#1 insurer in Lebanon by revenue (USD 80.3M). Operating since 1963 as fully owned Allianz subsidiary. 147,000+ clients, 17 offices.", editorialSource: "ZoomInfo / Atlas Mag Lebanon 2026" },
  // IRAN
  "ir-bimeh": { rating: 3.6, badges: ["State-Owned Market Leader", "39.47% Market Share"], editorialExcerpt: "Only state-owned insurer in Iran with 39.47% premium market share. Dominant player due to state backing.", editorialSource: "GlobalData Iran 2024" },
  // TURKEY
  "tr-acibadem": { rating: 4.4, badges: ["#1 Corporate PMI Turkey 27%", "Bupa Group", "Only Pure Health Specialist"], editorialExcerpt: "Turkey's only insurance company specializing solely in health insurance. Holds 27% GWP market share in corporate PMI — the largest. ~986,000 customers. Acquired by Bupa 2019.", editorialSource: "Mordor Intelligence / Bupa Group 2024" },
  "tr-allianz": { rating: 4.2, badges: ["Top 5 Turkey Overall"], editorialExcerpt: "Top 5 overall insurer in Turkey. Among five companies contributing 60%+ of the health insurance market value.", editorialSource: "Atlas Mag Turkey 2024 / Mordor Intelligence" },
  // NEW ZEALAND
  "nz-southern-cross": { rating: 4.7, badges: ["S&P A+", "Reader's Digest Most Trusted 2017-2025", "Not-for-Profit"], editorialExcerpt: "NZ's largest health insurer with 951,000+ members. S&P A+ (Strong). Reader's Digest Most Trusted Health Insurance Brand 2017-2025 (consecutive). Pays 93.3 cents per premium dollar in claims.", editorialSource: "Southern Cross Annual Report 2024 / MoneyHub NZ / Reader's Digest" },
  "nz-nib-nz": { rating: 4.5, badges: ["S&P A", "Canstar Outstanding Value 7 Years", "NZ #2 Insurer"], editorialExcerpt: "NZ's 2nd-largest health insurer. S&P A (Strong). Won Canstar Outstanding Value Working Visa Health Cover for 7 consecutive years. Solvency ratio 157% (March 2025).", editorialSource: "PolicyWise NZ / Canstar NZ 2025 / MoneyHub NZ" },
  // FIJI
  "fj-fijicare": { rating: 4.0, badges: ["SPX Listed", "150K+ Members", "Founded 1989"], editorialExcerpt: "One of the largest insurers in Fiji with 150,000+ members. Only insurance company listed on the South Pacific Stock Exchange (since 2000).", editorialSource: "FijiCare / GlobalData Fiji 2024" },
  // BANGLADESH
  "bd-delta": { rating: 3.9, badges: ["IDRA Excellence Award 2024 #3", "Pioneer in Micro-Insurance"], editorialExcerpt: "Ranked 3rd in IDRA Insurance Excellence Awards 2024 (life category). Founded 1986. Pioneer in micro-insurance in Bangladesh.", editorialSource: "Daily Star Bangladesh / IDRA 2024" },
  // PAKISTAN
  "pk-jubilee": { rating: 4.2, badges: ["#2 Pakistan Private Life/Health", "PACRA Rated", "500+ Hospitals"], editorialExcerpt: "Known for exceptional low premium health policies and easy terms. #2 private life and health insurer in Pakistan after state-owned State Life.", editorialSource: "The News Pakistan / Graana.com 2024" },
  // SRI LANKA
  "lk-aia": { rating: 4.3, badges: ["Top-Rated Private Health Plan SL", "AIA Group Backing"], editorialExcerpt: "Top-rated private health plan in Sri Lanka combining AIA Group's pan-Asian brand credibility with critical illness protection. Market growing at 14.58% CAGR.", editorialSource: "Sunday Times Sri Lanka 2024 / Mordor Intelligence" },
  "lk-ceylinco": { rating: 4.0, badges: ["21.4% Market Share", "Market Leader Long-Term Insurance"], editorialExcerpt: "Market leader in long-term insurance with 21.4% market share (2022). Largest agent network in Sri Lanka.", editorialSource: "KPMG Sri Lanka Insurance Report" },
  // NEPAL
  "np-nepal-life": { rating: 3.8, badges: ["Nepal Market Leader", "Highest Premium Income"], editorialExcerpt: "Largest life insurer in Nepal. #1 by premium income (NPR 36.86B, +11.64% YoY FY2025/26).", editorialSource: "Beema Post April 2026" },
  // BRUNEI
  "bn-takaful": { rating: 4.1, badges: ["30+ Year Market Leader", "Sharia-Compliant", "BDCB Regulated"], editorialExcerpt: "Market leader in takaful for 30+ years. Operates TBA and TBK entities. Also offers TBA As-Syifa Medical for foreign nationals.", editorialSource: "BDCB / Takaful Brunei 2024" },
  // MALDIVES
  "mv-allied": { rating: 4.2, badges: ["44% Market Share", "National UHC Administrator", "Cashless Leader"], editorialExcerpt: "Dominant market leader with ~44% market share. Responsible administrator of universal health insurance scheme. Widest network of empaneled service providers in Maldives and abroad.", editorialSource: "Maldives Financial Review / STO Annual Report" },
  // BHUTAN
  "bt-ricb": { rating: 4.0, badges: ["Bhutan Market Leader", "India Hospital Network", "Cashless 2024"], editorialExcerpt: "One of only 3 insurance companies in Bhutan and the only one offering both life and non-life. Launched cashless medical insurance for 500+ hospitals in India in July 2024.", editorialSource: "BBS News / RICB 2024" },
  // CAMBODIA
  "kh-forte": { rating: 4.1, badges: ["Cambodia's Most Established", "20+ Years Operating"], editorialExcerpt: "Cambodia's most established domestic insurer with 20+ years. Leading general insurer among 13 licensed general insurers.", editorialSource: "Khmer Times Business Review 2024" },
  // LAOS
  "la-allianz": { rating: 4.0, badges: ["International Brand", "Medical Evacuation", "30+ Years in Laos"], editorialExcerpt: "Established 1990 as JV between Lao Ministry of Finance and Allianz. Network of 6 clinics in Lao PDR + 300+ hospitals in Thailand for evacuation.", editorialSource: "Vientiane Times / Allianz General Laos 2024" },
  // MONGOLIA
  "mn-mig": { rating: 3.7, badges: ["Top 5 Mongolia"], editorialExcerpt: "Among top 5 insurers in Mongolia alongside Practical, Nomin, Mandal General, and Bodi. Market projected 12%+ CAGR 2024-2028.", editorialSource: "GlobalData Mongolia 2024" },
};

const planFiles = ["plans-original.ts","plans-europe.ts","plans-asia.ts","plans-americas.ts","plans-middle-east.ts","plans-africa.ts","plans-oceania.ts","plans-supplemental-1.ts","plans-supplemental-2.ts","plans-supplemental-3.ts","plans-supplemental-4.ts"];
let totalUpdated = 0;

for (const fileName of planFiles) {
  const filePath = path.join(LIB, fileName);
  if (!fs.existsSync(filePath)) continue;
  let content = fs.readFileSync(filePath, "utf8");
  let fileUpdates = 0;
  for (const [idPrefix, data] of Object.entries(REAL_DATA)) {
    const esc = idPrefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const idRegex = new RegExp(`id:\\s*"(${esc}[^"]*)"`, "g");
    let match;
    while ((match = idRegex.exec(content)) !== null) {
      const planId = match[1];
      const pe = planId.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      if (data.rating) { content = content.replace(new RegExp(`(id:\\s*"${pe}"[\\s\\S]*?rating:\\s*)[\\d.]+`), `$1${data.rating}`); }
      if (data.badges) { content = content.replace(new RegExp(`(id:\\s*"${pe}"[\\s\\S]*?badges:\\s*)\\[[^\\]]*\\]`), `$1${JSON.stringify(data.badges)}`); }
      if (data.editorialExcerpt) { content = content.replace(new RegExp(`(id:\\s*"${pe}"[\\s\\S]*?editorialExcerpt:\\s*")[^"]*"`), `$1${data.editorialExcerpt.replace(/"/g, '\\"')}"`); }
      if (data.editorialSource) { content = content.replace(new RegExp(`(id:\\s*"${pe}"[\\s\\S]*?editorialSource:\\s*")[^"]*"`), `$1${data.editorialSource.replace(/"/g, '\\"')}"`); }
      fileUpdates++; break;
    }
  }
  if (fileUpdates > 0) { fs.writeFileSync(filePath, content); console.log(`${fileName}: ${fileUpdates}`); totalUpdated += fileUpdates; }
}
console.log(`\nTotal: ${totalUpdated} plans updated`);
