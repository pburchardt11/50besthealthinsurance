import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const LIB = path.join(__dirname, "..", "src", "lib");

const REAL_DATA = {
  // Italy
  "it-unisalute": { rating: 4.2, badges: ["#1 Market Share Italy", "Digital Leader"], editorialExcerpt: "Sets the benchmark for private health insurance in Italy with 18.2% market share by premiums. Unmatched network and digital-first approach.", editorialSource: "Statista 2023 / Forbes Advisor Italia" },
  "it-generali": { rating: 4.0, badges: ["Multinational Strength", "S&P A+"], editorialExcerpt: "Top choice for families seeking solid European-grade private health coverage, backed by Generali Group's A+ S&P rating.", editorialSource: "Generali Group / Forbes Advisor Italia 2024" },
  // Spain
  "es-sanitas": { rating: 4.2, badges: ["#2 by Premiums Spain", "Bupa Owned", "English-Speaker Favourite"], editorialExcerpt: "Leads for English-speaking support and digital tools. Bupa-owned multinational with strong Madrid/Barcelona presence. 2nd largest by premiums at EUR 1.8B+.", editorialSource: "PacificPrime / Statista 2023" },
  "es-adeslas": { rating: 4.3, badges: ["#1 Spain by Premiums", "44K+ Providers", "Best Network"], editorialExcerpt: "Broadest network in Spain with 44,000+ healthcare professionals. Topped 2025 NLV expat poll with 23% of votes. EUR 3B+ in premiums.", editorialSource: "Statista 2023 / ComingttoSpain 2025" },
  // Netherlands
  "nl-zilverenkruis": { rating: 4.0, badges: ["#1 Netherlands Market Share", "Independer 7.7/10"], editorialExcerpt: "Largest health insurer in the Netherlands. Independer score 7.7/10. Broad coverage even on basic package.", editorialSource: "IAmExpat 2026 / Independer 2025" },
  "nl-vgz": { rating: 3.9, badges: ["Digital Innovation", "Big Four NL"], editorialExcerpt: "Leads on digital innovation and mental health integration among the Dutch Big Four insurers.", editorialSource: "Independer 2025" },
  "nl-menzis": { rating: 4.2, badges: ["Independer Top Rated", "Satisfaction Leader NL", "Premium Freeze 2026"], editorialExcerpt: "Consistently ranks highest for member satisfaction among major Dutch insurers per Independer 2025. Offered complete premium freeze for 2026.", editorialSource: "Independer 2025" },
  // Switzerland
  "ch-css": { rating: 4.0, badges: ["Established", "moneyland.ch 7.7/10"], editorialExcerpt: "moneyland.ch rates 7.7/10 (good). Noted for reliability and broad provider access alongside Atupri.", editorialSource: "moneyland.ch 2025" },
  "ch-helsana": { rating: 4.3, badges: ["Comparis Top 4", "moneyland.ch 8.0/10", "+108K Policyholders"], editorialExcerpt: "moneyland.ch 8.0/10 (very good). Added 108,000 policyholders in 2025 (+7.6%). Broad supplementary portfolio.", editorialSource: "moneyland.ch 2025 / Comparis 2025" },
  "ch-swica": { rating: 4.6, badges: ["Comparis #1 2025", "moneyland.ch 8.0/10", "Most Satisfied Customers"], editorialExcerpt: "Topped Comparis 2025 comparison with score of 5.1. moneyland.ch rates customer satisfaction 8.0/10 (very good). Wellness-focused families' top pick.", editorialSource: "Comparis.ch 2025 / moneyland.ch 2025" },
  // Sweden
  "se-folksam": { rating: 3.6, badges: ["Most Trusted Sweden 2024", "3.5M Members"], editorialExcerpt: "Reputation score 3.61 — Sweden's most trusted insurance brand 2024. Serves over 3.5M members.", editorialSource: "RepTrust 2024" },
  // Norway
  "no-storebrand": { rating: 4.0, badges: ["Trustpilot 3.9/5", "ESG Leader Norway"], editorialExcerpt: "Rated 'Great' 3.9/5 on Trustpilot (792 reviews). Genuine ESG credentials. The natural ESG choice for Norwegian health insurance.", editorialSource: "Trustpilot / NLS Norway 2025" },
  // Ireland
  "ie-vhi": { rating: 4.0, badges: ["48.3% Market Share", "Ireland's Oldest Insurer"], editorialExcerpt: "Ireland's oldest and largest health insurer covering 1.1M+ people with 48.3% market share.", editorialSource: "HIA Market Report 2024" },
  "ie-laya": { rating: 4.1, badges: ["#2 Ireland 27.9%", "Free 2nd Child Cover"], editorialExcerpt: "Ireland's second-largest insurer at 27.9% market share. Only insurer offering free cover for second+ child under 18 on certain plans.", editorialSource: "HIA Market Report 2024 / Settle.ie" },
  // Poland
  "pl-pzu": { rating: 3.8, badges: ["Polish Champion", "Top 3 Private Healthcare"], editorialExcerpt: "One of Poland's TOP 3 private healthcare providers. Broad subscription, insurance and fee-for-service model. Backed by PZU Group (Poland's largest insurer).", editorialSource: "InsightsIO / WellcomeHome" },
  // Slovakia
  "sk-dovera": { rating: 4.5, badges: ["HPI #1 Two Years", "Only 'A' Rated Private Insurer"], editorialExcerpt: "Ranked best health insurer for second consecutive year by HPI think tank. 'A' rating — the only private insurer to win top grade. 32.4% market share.", editorialSource: "Slovak Spectator / HPI" },
  // Estonia
  "ee-ergo": { rating: 4.5, badges: ["Best Service Estonia 2025", "Most Loved Baltic Brand"], editorialExcerpt: "Rated #1 by mystery shopping survey 2025 with 91.78% service rating. Historically recognized as most loved insurance brand in the Baltics.", editorialSource: "DigitalJournal / ERGO PR 2025" },
  // Romania
  "ro-reginamaria": { rating: 4.2, badges: ["200+ Clinics", "Premium Network Romania"], editorialExcerpt: "200+ clinics with oncology coverage and telemedicine. The dominant private healthcare network brand in Romania.", editorialSource: "PacificPrime / Fyk1" },
  // Greece
  "gr-interamerican": { rating: 4.0, badges: ["Domestic Market Leader Greece"], editorialExcerpt: "Comprehensive coverage and extensive network. 'Safe default choice if you want a big Greek brand with predictable structure.'", editorialSource: "ExpatsGreece / ExpatDen" },
  // Hungary
  "hu-generali": { rating: 4.0, badges: ["#1 Life Market Hungary", "26.8% Share"], editorialExcerpt: "Holds first place in total life insurance premium with 26.8% share. Flexible health plans and solid provider network.", editorialSource: "Statista 2023 / PacificPrime" },
  // Croatia
  "hr-croatia": { rating: 3.8, badges: ["Domestic Market Leader Croatia"], editorialExcerpt: "Largest domestic insurer. Supplementary health insurance covering HZZO co-payments, eliminating most out-of-pocket costs.", editorialSource: "ExpatInCroatia / MandracchioCapital" },
  // Bulgaria
  "bg-dzi": { rating: 4.0, badges: ["#1 Life by GWP Bulgaria", "KBC Backed"], editorialExcerpt: "#1 life insurer by gross written premiums (2022). KBC-backed with comprehensive health plans from EUR 200/year.", editorialSource: "Statista 2022" },
  // Slovenia
  "si-triglav": { rating: 4.1, badges: ["Revenue Leader Slovenia", "Lowest VHI Premium"], editorialExcerpt: "Largest insurer in Slovenia (EUR 877.9M revenue). VHI supplementary monthly premium EUR 35.55.", editorialSource: "SloveniaBusiness / NCBI VHI Europe" },
  // Latvia
  "lv-balta": { rating: 4.1, badges: ["Market Leader Latvia", "Most Honest 13+ Years"], editorialExcerpt: "Non-life market leader with 140,000+ health policyholders. Most honest insurance company for 13+ consecutive years per Latvian consumer surveys.", editorialSource: "BALTA / Latvian Consumer Surveys" },
  // Lithuania
  "lt-lietuvosd": { rating: 4.0, badges: ["Revenue Leader Lithuania"], editorialExcerpt: "Ranked #1 among Lithuanian insurance companies by revenue (USD 735.9M). Dominant domestic brand.", editorialSource: "ZoomInfo 2025" },
  // Luxembourg
  "lu-dkv": { rating: 4.3, badges: ["Market Leader Luxembourg", "Since 1981"], editorialExcerpt: "Market leader in private health insurance active since 1981. Renowned for extensive hospitalisation and treatment-abroad cover.", editorialSource: "Switchr.lu 2025 / DKV.lu" },
  // Malta
  "mt-mapfre": { rating: 4.1, badges: ["Largest Insurance Group Malta"], editorialExcerpt: "Largest insurance group in Malta with leadership position in both life and non-life. Part of global Mapfre Group.", editorialSource: "ZoomInfo 2025 / Mapfre.com.mt" },
  // Cyprus
  "cy-eurolife": { rating: 4.1, badges: ["Dominant Provider Cyprus", "Since 1989"], editorialExcerpt: "Dominant provider since 1989 with wide range of medical plans including chronic illness, maternity, and outpatient coverage complementing GESY.", editorialSource: "CypriotInsurance 2025" },
  // Austria
  "at-uniqa": { rating: 4.3, badges: ["44% VHI Market Share", "Most Trusted Austria"], editorialExcerpt: "Best-known and most trusted insurance brand in Austria. 44% VHI market share. English-language policies and fast digital claims processing.", editorialSource: "NCBI VHI Europe / UNIQA Group" },
  // Portugal
  "pt-medis": { rating: 3.5, badges: ["#1 Market Share Portugal (~30%)"], editorialExcerpt: "Dominates Portuguese private health insurance through unmatched network and customer-centric service philosophy. ~30% market share.", editorialSource: "C1Brokers / Trustpilot" },
  // Serbia
  "rs-generali": { rating: 4.0, badges: ["#1 Life Market Serbia", "26.8% Share"], editorialExcerpt: "Holds first place in life insurance premium with 26.8% share. Established private health plans with inpatient, outpatient and dental coverage.", editorialSource: "Serbia-Business.eu" },
  // Ukraine
  "ua-uniqa": { rating: 4.0, badges: ["VHI Leader Ukraine", "UNIQA Group AA-"], editorialExcerpt: "#1 in voluntary health insurance by premium volume (UAH 1.602B). UNIQA Group Austria backing (AA- S&P). 30 years market presence.", editorialSource: "Interfax Ukraine / Beinsure" },
  // Liechtenstein
  "li-swica": { rating: 4.4, badges: ["Comparis #1 (Swiss)", "LKV Approved"], editorialExcerpt: "One of three approved LKV insurers in Liechtenstein. Mirrors Swiss SWICA's Comparis-leading quality.", editorialSource: "LLV.li / LKV.li" },
  // Iceland
  "is-sjova": { rating: 3.9, badges: ["Market Presence Iceland"], editorialExcerpt: "Well-known for comprehensive coverage. Offers medical cost insurance products for private supplementary coverage in Iceland.", editorialSource: "Sjova.is / ExpatFocus" },
  // Finland
  "fi-if": { rating: 4.1, badges: ["Trust Leader Finland (~30%)", "Revenue #1"], editorialExcerpt: "Approximately 30% of Finns name If as most trusted insurance brand. Sampo Group revenue USD 10.6B. Market-dominant on trust metrics.", editorialSource: "Statista 2020 / GlobeNewswire 2024" },
  // Belgium
  "be-cm": { rating: 4.0, badges: ["#1 by Members Belgium"], editorialExcerpt: "Largest mutual in Belgium by membership. All funds reimburse at nationally set rates — service quality and supplementary benefits are differentiators.", editorialSource: "Statista 2021" },
  // Denmark
  "dk-danmark": { rating: 4.4, badges: ["Leading Mutual Denmark"], editorialExcerpt: "Denmark's leading mutual health fund. Employer-pay coverage spreading rapidly as companies seek to curb sick-leave costs.", editorialSource: "ExpatInDenmark / MatrixBCG" },
};

const planFiles = ["plans-europe.ts", "plans-original.ts", "plans-supplemental-1.ts", "plans-supplemental-2.ts", "plans-supplemental-3.ts", "plans-supplemental-4.ts"];
let totalUpdated = 0;

for (const fileName of planFiles) {
  const filePath = path.join(LIB, fileName);
  if (!fs.existsSync(filePath)) continue;
  let content = fs.readFileSync(filePath, "utf8");
  let fileUpdates = 0;

  for (const [idPrefix, data] of Object.entries(REAL_DATA)) {
    const idRegex = new RegExp(`id:\\s*"(${idPrefix}[^"]*)"`, "g");
    let match;
    while ((match = idRegex.exec(content)) !== null) {
      const planId = match[1];
      if (data.rating) {
        const r = new RegExp(`(id:\\s*"${planId.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[\\s\\S]*?rating:\\s*)[\\d.]+`);
        content = content.replace(r, `$1${data.rating}`);
      }
      if (data.badges) {
        const r = new RegExp(`(id:\\s*"${planId.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[\\s\\S]*?badges:\\s*)\\[[^\\]]*\\]`);
        content = content.replace(r, `$1${JSON.stringify(data.badges)}`);
      }
      if (data.editorialExcerpt) {
        const r = new RegExp(`(id:\\s*"${planId.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[\\s\\S]*?editorialExcerpt:\\s*")[^"]*"`);
        content = content.replace(r, `$1${data.editorialExcerpt.replace(/"/g, '\\"')}"`);
      }
      if (data.editorialSource) {
        const r = new RegExp(`(id:\\s*"${planId.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[\\s\\S]*?editorialSource:\\s*")[^"]*"`);
        content = content.replace(r, `$1${data.editorialSource.replace(/"/g, '\\"')}"`);
      }
      fileUpdates++;
      break;
    }
  }

  if (fileUpdates > 0) {
    fs.writeFileSync(filePath, content);
    console.log(`${fileName}: ${fileUpdates} plans updated`);
    totalUpdated += fileUpdates;
  }
}

console.log(`\nTotal: ${totalUpdated} European plans updated with real ratings`);
