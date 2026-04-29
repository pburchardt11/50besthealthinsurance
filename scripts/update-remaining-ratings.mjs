import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const LIB = path.join(__dirname, "..", "src", "lib");

const REAL_DATA = {
  // AMERICAS
  "ar-osde": { rating: 4.7, badges: ["#1 by Affiliates Argentina", "Largest Network"], editorialExcerpt: "OSDE has the highest affiliate count in Argentina — the benchmark prepaga for quality-conscious families with a prestigious nationwide physician network.", editorialSource: "Elegimejor.com.ar / RankingsLatam 2025" },
  "ar-swissmedical": { rating: 4.8, badges: ["#1 Consumer Satisfaction 76%", "Best Clinic Network Argentina"], editorialExcerpt: "Swiss Medical holds the best clinic and sanatorium network in Argentina — ranked #1 in consumer satisfaction as of April 2026.", editorialSource: "MiObraSocial / Consumer Satisfaction Survey 2026" },
  "cl-banmedica": { rating: 4.6, badges: ["#1 Empathetic Brand Chile 2025", "100% Response Compliance"], editorialExcerpt: "Earned 1st place in the Empathetic Brand study for the ISAPRE sector in 2025. Maintains a clinic network spanning Clinica Davila and Santa Maria.", editorialSource: "IsapreSySeguros / The Clinic 2025" },
  "co-sura": { rating: 4.6, badges: ["#1 or #2 Quality Every Year", "Best Digital App Colombia", "21.8% Market Share"], editorialExcerpt: "SURA ranks first or second in EPS quality every year per Cuenta Alto Costo government rankings. Its digital app is Colombia's best for appointment booking and plan management.", editorialSource: "MedellinGuru / ColombiaMove 2026" },
  "co-colsanitas": { rating: 4.7, badges: ["Largest Private Network Colombia", "Premium Choice", "+9.6% Growth"], editorialExcerpt: "Colombia's premium choice — the most expensive prepagada but offering the broadest hospital and specialist network. 776K+ affiliates as of mid-2025.", editorialSource: "ColombiaMove / ColombiaOne 2025" },
  "pe-rimac": { rating: 4.5, badges: ["#1 Overall Market Peru 27.8%", "Digital Health Leader"], editorialExcerpt: "Rimac leads Peru's overall insurance market with 27.8% share and is the catalyst for digital health transformation in Peru's private insurance sector.", editorialSource: "RankingsLatam Sept 2025 / World Finance" },
  "ec-saludsa": { rating: 4.4, badges: ["Latin America's Largest Health Insurer", "80% Doctor Visit Coverage"], editorialExcerpt: "Cited as Latin America's largest health-only insurer by premium volume. 80% outpatient reimbursement, 100% hospitalization coverage.", editorialSource: "BrokerFish / ExpatEcuador" },
  "ve-mercantil": { rating: 4.0, badges: ["#1 Venezuela 25.4%", "AM Best B++"], editorialExcerpt: "Dominates Venezuela's insurance market with 25.4% share. Panama-based reinsurance arm holds AM Best B++/bbb with health comprising 85%+ of portfolio.", editorialSource: "RankingsLatam Sept 2025 / AM Best Nov 2024" },
  "pa-assa": { rating: 4.8, badges: ["#1 Panama 20.4%", "AM Best A/a+ Excellent", "13% GWP Growth"], editorialExcerpt: "Panama's largest insurer holding AM Best's highest A/a+ (Excellent) rating with stable outlook — the gold standard in Central American insurance.", editorialSource: "AM Best April 2026 / RankingsLatam 2024" },
  "gt-general": { rating: 4.3, badges: ["#1 Guatemala A&H 24%", "Market Leader"], editorialExcerpt: "Dominates Guatemala's accident and health insurance segment with 24% market share.", editorialSource: "RankingsLatam March 2025" },
  "hn-ficohsa": { rating: 4.2, badges: ["#1 Honduras 23.2%", "First International Rating"], editorialExcerpt: "Leads Honduras with 23.2% market share. First Honduran insurer to receive an international financial rating.", editorialSource: "RankingsLatam March 2025" },
  "do-humano": { rating: 4.3, badges: ["#2 Dominican Republic 25.35%", "Superbrand", "Premium Private"], editorialExcerpt: "Leading private health insurer in the Dominican Republic. Recognized as a Superbrand and rated Highly Qualified by Revista Mercado.", editorialSource: "DR1.com / MAPFRE IGP" },
  "jm-sagicor": { rating: 4.5, badges: ["AM Best A-", "Fitch BBB", "Caribbean Market Leader"], editorialExcerpt: "Caribbean's dominant life and health insurer — AM Best A- (Excellent). Fitch upgraded IDR to BBB in October 2025 citing sustained profitability.", editorialSource: "Sagicor / InsuranceBusinessMag 2025" },

  // AFRICA
  "ma-wafa": { rating: 4.4, badges: ["#1 Morocco 18.05%", "MAD 9.08B Premiums"], editorialExcerpt: "Wafa Assurance has dominated Morocco's total insurance market since 2021, topping rankings with MAD 9.08B in premiums — the country's most trusted brand.", editorialSource: "Atlas-Mag / Commercial Risk" },
  "tn-star": { rating: 4.2, badges: ["Market Leader Tunisia", "State-Backed"], editorialExcerpt: "Tunisia's leading insurance group and market leader by premium volume, providing complementary health coverage to CNAM's public reimbursements.", editorialSource: "Insurancy / Tataachi 2025" },
  "gh-acacia": { rating: 4.4, badges: ["#1 Private Insurer Ghana", "NHIA Certified", "Best Claims Turnaround"], editorialExcerpt: "Ghana's most respected private health insurer. Excellent claims turnaround, access to tier-one private hospitals, highest customer satisfaction among licensed PHIS.", editorialSource: "Accra Street Journal 2025 / Enterprise Group" },
  "tz-jubilee": { rating: 4.3, badges: ["GCR A+ Tanzania", "East Africa #1 Health Insurer"], editorialExcerpt: "Holds GCR national scale A+ rating — highest in Tanzania. Part of East Africa's #1 composite insurer by premium volume.", editorialSource: "GCR Ratings Aug 2024 / PacificPrime" },
  "rw-mutuelle": { rating: 4.5, badges: ["90%+ Population Coverage", "Africa's UHC Model"], editorialExcerpt: "Africa's most-cited UHC success story, covering over 90% of the population through a government-run income-linked community health insurance scheme.", editorialSource: "Borgen Project / KT Press 2026" },
  "ug-jubilee": { rating: 4.2, badges: ["GCR AA- Uganda", "CIO 100 Award 2025", "1.9M Clients"], editorialExcerpt: "Uganda's leading private health insurer with GCR AA- national rating. Won triple award at CIO 100 Awards 2025. Serving 1.9M clients across East Africa.", editorialSource: "GCR Ratings / CIO 100 Awards 2025" },
  "ci-sanlam": { rating: 4.3, badges: ["#1 Non-Life Ivory Coast 22%", "CIMA Zone Leader"], editorialExcerpt: "Leads Ivory Coast's non-life market with 22% share — the country's top-ranked general insurer in the CIMA zone.", editorialSource: "Atlas-Mag / Oxford Business Group" },
  "dz-saa": { rating: 4.1, badges: ["#1 General Insurer Algeria 22.7%"], editorialExcerpt: "Algeria's largest insurer by premium volume, serving as the primary general and health insurer for Algeria's formal sector.", editorialSource: "Atlas-Mag" },
  "zw-cimas": { rating: 4.2, badges: ["#1 Private Medical Aid Zimbabwe"], editorialExcerpt: "Zimbabwe's top private medical aid society, known for superior hospital access and claims efficiency — the preferred option for the corporate and professional market.", editorialSource: "PMC / Statista" },
  "ao-ensa": { rating: 4.1, badges: ["#1 Angola 27% Share", "46 Years Market Leadership"], editorialExcerpt: "Led Angola's insurance market for 46 years with ~27% market share and USD 163.8M in revenues.", editorialSource: "Atlas-Mag / ZoomInfo" },
  "mu-swan": { rating: 4.4, badges: ["Founded 1855", "Market Leader Mauritius"], editorialExcerpt: "Established in 1855, Mauritius's oldest and most trusted insurer. Its Protect Health Insurance line is the benchmark private health product.", editorialSource: "OpenPR / Atlas-Mag" },
  "zm-sanlam": { rating: 4.1, badges: ["#1 Life Zambia 35%"], editorialExcerpt: "Leads Zambia's life insurance sector with 35% market share, offering bundled health and life protection to mining, banking and telecoms workforce.", editorialSource: "MillionAir / ILO" },
  "mw-nico": { rating: 4.1, badges: ["#1 Market Malawi"], editorialExcerpt: "Malawi's largest insurer and domestic market anchor, providing the most accessible health and general insurance coverage.", editorialSource: "Ken Research" },
  "sn-axa": { rating: 4.2, badges: ["#1 Non-Life Senegal", "Global Backing"], editorialExcerpt: "Historically led the Senegalese insurance market by premium volume. Most trusted brand for complementary health top-up coverage.", editorialSource: "Atlas-Mag" },
  "cm-activa": { rating: 4.2, badges: ["#1 Private Health Cameroon"], editorialExcerpt: "Cameroon's most trusted private health insurer with decades of urban market leadership in Douala and Yaounde.", editorialSource: "Nkafu Institute" },
};

const planFiles = ["plans-original.ts","plans-europe.ts","plans-asia.ts","plans-americas.ts","plans-middle-east.ts","plans-africa.ts","plans-oceania.ts","plans-supplemental-1.ts","plans-supplemental-2.ts","plans-supplemental-3.ts","plans-supplemental-4.ts"];
let totalUpdated = 0;

for (const fileName of planFiles) {
  const filePath = path.join(LIB, fileName);
  if (!fs.existsSync(filePath)) continue;
  let content = fs.readFileSync(filePath, "utf8");
  let fileUpdates = 0;
  for (const [idPrefix, data] of Object.entries(REAL_DATA)) {
    const idRegex = new RegExp(`id:\\s*"(${idPrefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[^"]*)"`, "g");
    let match;
    while ((match = idRegex.exec(content)) !== null) {
      const planId = match[1];
      const esc = planId.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      if (data.rating) { content = content.replace(new RegExp(`(id:\\s*"${esc}"[\\s\\S]*?rating:\\s*)[\\d.]+`), `$1${data.rating}`); }
      if (data.badges) { content = content.replace(new RegExp(`(id:\\s*"${esc}"[\\s\\S]*?badges:\\s*)\\[[^\\]]*\\]`), `$1${JSON.stringify(data.badges)}`); }
      if (data.editorialExcerpt) { content = content.replace(new RegExp(`(id:\\s*"${esc}"[\\s\\S]*?editorialExcerpt:\\s*")[^"]*"`), `$1${data.editorialExcerpt.replace(/"/g, '\\"')}"`); }
      if (data.editorialSource) { content = content.replace(new RegExp(`(id:\\s*"${esc}"[\\s\\S]*?editorialSource:\\s*")[^"]*"`), `$1${data.editorialSource.replace(/"/g, '\\"')}"`); }
      fileUpdates++; break;
    }
  }
  if (fileUpdates > 0) { fs.writeFileSync(filePath, content); console.log(`${fileName}: ${fileUpdates} plans updated`); totalUpdated += fileUpdates; }
}
console.log(`\nTotal: ${totalUpdated} plans updated`);
