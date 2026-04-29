/**
 * Updates plans in supplemental files using JSON-aware matching.
 * The supplemental plans are stored as single-line JSON objects.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const LIB = path.join(__dirname, "..", "src", "lib");

// Verified data for the 28 remaining European countries
const UPDATES = {
  // Poland
  pl: { topInsurer: "PZU Zdrowie", rating: 3.8, badges: ["Polish Champion", "Top 3 Private Healthcare"], editorial: "One of Poland's TOP 3 private healthcare providers with broad subscription and fee-for-service model. Backed by PZU Group, Poland's largest insurer.", source: "InsightsIO / WellcomeHome" },
  // Czech Republic
  cz: { topInsurer: "VZP", rating: 3.7, badges: ["State Leader Czech Republic", "Widest Network", "~55% Market Share"], editorial: "Largest public health insurer with widest network of contracted doctors in Czech Republic. ~55% market share implied.", source: "VZP.cz / InfoCizinci" },
  // Greece
  gr: { topInsurer: "Interamerican", rating: 4.0, badges: ["Domestic Market Leader Greece"], editorial: "Comprehensive coverage and extensive network. Safe default choice for quality-conscious families seeking predictable structure.", source: "ExpatsGreece / ExpatDen" },
  // Romania
  ro: { topInsurer: "Regina Maria", rating: 4.2, badges: ["200+ Clinics Romania", "Premium Network", "Oncology Coverage"], editorial: "200+ clinics with oncology coverage and telemedicine. The dominant private healthcare network brand in Romania.", source: "PacificPrime / Fyk1" },
  // Hungary
  hu: { topInsurer: "Generali", rating: 4.0, badges: ["#1 Life Market Hungary", "26.8% Share"], editorial: "Holds first place in total life insurance premium with 26.8% share. Flexible health plans and solid provider network.", source: "Statista 2023 / PacificPrime" },
  // Croatia
  hr: { topInsurer: "Croatia Osiguranje", rating: 3.8, badges: ["Domestic Market Leader Croatia"], editorial: "Largest domestic insurer. Supplementary health insurance covering HZZO co-payments, eliminating most out-of-pocket costs.", source: "ExpatInCroatia / MandracchioCapital" },
  // Bulgaria
  bg: { topInsurer: "DZI", rating: 4.0, badges: ["#1 Life by GWP Bulgaria", "KBC Backed"], editorial: "#1 life insurer by gross written premiums. KBC Group backed with comprehensive health plans from EUR 200/year.", source: "Statista 2022" },
  // Slovakia
  sk: { topInsurer: "Dovera", rating: 4.5, badges: ["HPI #1 Two Years", "Only A-Rated Private Insurer Slovakia"], editorial: "Ranked best health insurer for second consecutive year by HPI think tank. Only private insurer to win A grade. 32.4% market share.", source: "Slovak Spectator / HPI" },
  // Slovenia
  si: { topInsurer: "Triglav", rating: 4.1, badges: ["Revenue Leader Slovenia", "Lowest VHI Premium"], editorial: "Largest insurer in Slovenia (EUR 877.9M revenue). VHI supplementary monthly premium EUR 35.55.", source: "SloveniaBusiness / NCBI VHI Europe" },
  // Estonia
  ee: { topInsurer: "ERGO", rating: 4.5, badges: ["Best Service Estonia 2025", "Most Loved Baltic Brand"], editorial: "Rated #1 by mystery shopping survey 2025 with 91.78% service rating. Most loved insurance brand in the Baltics.", source: "DigitalJournal / ERGO PR 2025" },
  // Latvia
  lv: { topInsurer: "BALTA", rating: 4.1, badges: ["Market Leader Latvia", "Most Honest 13+ Years"], editorial: "Non-life market leader with 140,000+ health policyholders. Most honest insurance company for 13+ consecutive years.", source: "BALTA / Latvian Consumer Surveys" },
  // Lithuania
  lt: { topInsurer: "Lietuvos draudimas", rating: 4.0, badges: ["Revenue Leader Lithuania"], editorial: "Ranked #1 among Lithuanian insurance companies by revenue (USD 735.9M). Dominant domestic brand.", source: "ZoomInfo 2025" },
  // Luxembourg
  lu: { topInsurer: "DKV", rating: 4.3, badges: ["Market Leader Luxembourg", "Since 1981"], editorial: "Market leader in private health insurance active since 1981. Renowned for extensive hospitalisation and treatment-abroad cover.", source: "Switchr.lu 2025 / DKV.lu" },
  // Malta
  mt: { topInsurer: "Mapfre Middlesea", rating: 4.1, badges: ["Largest Insurance Group Malta"], editorial: "Largest insurance group in Malta with leadership in both life and non-life. Part of global Mapfre Group.", source: "ZoomInfo 2025 / Mapfre.com.mt" },
  // Cyprus
  cy: { topInsurer: "Eurolife", rating: 4.1, badges: ["Dominant Provider Cyprus", "Since 1989"], editorial: "Dominant provider since 1989 with wide range of medical plans complementing GESY universal coverage.", source: "CypriotInsurance 2025" },
  // Iceland
  is: { topInsurer: "Sjova", rating: 3.9, badges: ["Market Presence Iceland"], editorial: "Well-known for comprehensive coverage including medical cost insurance for private supplementary coverage.", source: "Sjova.is / ExpatFocus" },
  // Albania
  al: { topInsurer: "SIGAL UNIQA", rating: 3.8, badges: ["Market Leader Albania", "UNIQA Group"], editorial: "Leading private health insurer in Albania. Part of UNIQA Group Austria. Offers private health insurance including group schemes.", source: "SIGAL / VIG Markets 2025" },
  // North Macedonia
  mk: { topInsurer: "Makedonija Osiguruvanje", rating: 3.7, badges: ["VIG #1 North Macedonia"], editorial: "VIG is number 1 in North Macedonia through Makedonija Osiguruvanje. Largest private insurer in the country.", source: "VIG Markets 2025" },
  // Montenegro
  me: { topInsurer: "Wiener Stadtische", rating: 3.7, badges: ["VIG Market Presence Since 2010"], editorial: "Vienna Insurance Group represented in Montenegro since 2010. Life insurance focus with health riders.", source: "VIG Markets 2025" },
  // Serbia
  rs: { topInsurer: "Generali", rating: 4.0, badges: ["#1 Life Market Serbia", "26.8% Share"], editorial: "Holds first place in life insurance premium with 26.8% share. Established private health plans.", source: "Serbia-Business.eu" },
  // Bosnia
  ba: { topInsurer: "FZZO", rating: 3.5, badges: ["Federal Public Fund Bosnia"], editorial: "Government-owned Health Insurance Fund covering specialist treatment, hospitalisation, prescriptions, and rehabilitation.", source: "EURAXESS.ba" },
  // Moldova
  md: { topInsurer: "Moldasig", rating: 3.8, badges: ["VIG Acquisition 2025", "Market Leader Moldova"], editorial: "Vienna Insurance Group acquiring Moldasig in May 2025. Market liberalization launched January 2025.", source: "VIG PR / Moldasig.md" },
  // Belarus
  by: { topInsurer: "Belgosstrakh", rating: 3.5, badges: ["State Mandatory Insurer Belarus"], editorial: "State insurer providing compulsory health insurance for foreign citizens. Online policy sales for emergency medical care.", source: "BGS.by / MFA Belarus" },
  // Ukraine
  ua: { topInsurer: "UNIQA", rating: 4.0, badges: ["VHI Leader Ukraine", "UNIQA Group AA-"], editorial: "#1 in voluntary health insurance by premium volume (UAH 1.602B). UNIQA Group Austria backing (AA- S&P). 30 years presence.", source: "Interfax Ukraine / Beinsure" },
  // Andorra
  ad: { topInsurer: "CASS", rating: 4.2, badges: ["Universal Coverage Andorra", "75-100% Reimbursement"], editorial: "CASS reimburses 75-100% of most medical costs. Hospitalisation covered at 90%. Total contribution 22% of gross salary.", source: "SetupAndorra / McaAndorra" },
  // Monaco
  mc: { topInsurer: "CCSS", rating: 4.3, badges: ["State Universal Coverage Monaco"], editorial: "Monaco's universal social security and health insurance system providing comprehensive coverage for residents and workers.", source: "AXA / PacificPrime" },
  // Liechtenstein
  li: { topInsurer: "SWICA", rating: 4.4, badges: ["Comparis #1 Swiss Quality", "LKV Approved"], editorial: "One of three approved LKV insurers in Liechtenstein. Mirrors Swiss SWICA's Comparis-leading quality.", source: "LLV.li / LKV.li" },
  // San Marino
  sm: { topInsurer: "ISS", rating: 4.2, badges: ["Universal State Coverage San Marino", "Founded 1876"], editorial: "Only health insurer in San Marino. Founded 1876. Comprehensive universal social security and health insurance.", source: "ISS.sm / INPS" },
};

// Process each supplemental file
const suppFiles = ["plans-supplemental-1.ts", "plans-supplemental-2.ts", "plans-supplemental-3.ts", "plans-supplemental-4.ts"];
let totalUpdated = 0;

for (const fileName of suppFiles) {
  const filePath = path.join(LIB, fileName);
  if (!fs.existsSync(filePath)) continue;
  let content = fs.readFileSync(filePath, "utf8");
  let fileUpdates = 0;

  for (const [countryCode, data] of Object.entries(UPDATES)) {
    // In supplemental files, plans are stored as JSON on single lines
    // Match the first plan for this country code
    const regex = new RegExp(`("countryCode":"${countryCode}"[^}]*"badges":\\[)[^\\]]*\\]`, "");
    if (regex.test(content)) {
      // Update badges for the first plan of this country
      content = content.replace(regex, `$1${JSON.stringify(data.badges).slice(1)}`);

      // Update rating
      const ratingRegex = new RegExp(`("countryCode":"${countryCode}"[^}]*"rating":)[\\d.]+`);
      content = content.replace(ratingRegex, `$1${data.rating}`);

      // Update editorialExcerpt
      const excerptRegex = new RegExp(`("countryCode":"${countryCode}"[^}]*"editorialExcerpt":")[^"]*"`);
      content = content.replace(excerptRegex, `$1${data.editorial.replace(/"/g, '\\"')}"`);

      // Update editorialSource
      const sourceRegex = new RegExp(`("countryCode":"${countryCode}"[^}]*"editorialSource":")[^"]*"`);
      content = content.replace(sourceRegex, `$1${data.source.replace(/"/g, '\\"')}"`);

      fileUpdates++;
    }
  }

  if (fileUpdates > 0) {
    fs.writeFileSync(filePath, content);
    console.log(`${fileName}: ${fileUpdates} countries updated`);
    totalUpdated += fileUpdates;
  }
}

console.log(`\nTotal: ${totalUpdated} country top-plans updated in supplemental files`);
