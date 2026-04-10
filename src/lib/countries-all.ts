import { Country } from "./types";

export const allCountries: Country[] = [
  // ── Existing 12 countries (keep exactly as-is) ──────────────────────────
  {
    code: "us",
    name: "United States",
    flag: "🇺🇸",
    region: "North America",
    planCount: 50,
    description:
      "The US health insurance market is the largest in the world, with a mix of employer-sponsored, individual, and government programs.",
    healthcareSystem:
      "Private insurance-based system with public programs (Medicare, Medicaid). The ACA marketplace offers subsidized plans.",
  },
  {
    code: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    region: "Europe",
    planCount: 50,
    description:
      "While the NHS provides universal coverage, many UK residents opt for private health insurance for faster access and specialist care.",
    healthcareSystem:
      "Universal public healthcare (NHS) with optional private insurance for supplementary coverage.",
  },
  {
    code: "de",
    name: "Germany",
    flag: "🇩🇪",
    region: "Europe",
    planCount: 50,
    description:
      "Germany has one of the oldest universal healthcare systems. Private insurance (PKV) is available for higher earners and self-employed.",
    healthcareSystem:
      "Dual system: Statutory Health Insurance (GKV) for most residents, Private Health Insurance (PKV) for high earners.",
  },
  {
    code: "ae",
    name: "United Arab Emirates",
    flag: "🇦🇪",
    region: "Middle East",
    planCount: 50,
    description:
      "Health insurance is mandatory for all residents in the UAE. Employers must provide coverage for their employees.",
    healthcareSystem:
      "Mandatory private insurance for all residents, with government-funded care for nationals.",
  },
  {
    code: "sg",
    name: "Singapore",
    flag: "🇸🇬",
    region: "Asia Pacific",
    planCount: 50,
    description:
      "Singapore has a highly efficient healthcare system combining government subsidies with mandatory savings and private insurance.",
    healthcareSystem:
      "Multi-tier system: MediShield Life (universal), MediSave (mandatory savings), and optional private Integrated Shield Plans.",
  },
  {
    code: "ca",
    name: "Canada",
    flag: "🇨🇦",
    region: "North America",
    planCount: 50,
    description:
      "Canada provides universal public health coverage, but private insurance supplements areas not covered by provincial plans.",
    healthcareSystem:
      "Universal public healthcare (Medicare) with private insurance for dental, vision, prescription drugs, and other supplementary coverage.",
  },
  {
    code: "au",
    name: "Australia",
    flag: "🇦🇺",
    region: "Asia Pacific",
    planCount: 50,
    description:
      "Australia combines universal public healthcare with a strong private insurance market encouraged by tax incentives.",
    healthcareSystem:
      "Universal public healthcare (Medicare) supplemented by private health insurance with government rebates and tax incentives.",
  },
  {
    code: "fr",
    name: "France",
    flag: "🇫🇷",
    region: "Europe",
    planCount: 50,
    description:
      "France's healthcare system is often ranked among the best in the world. Complementary private insurance (mutuelle) covers co-pays.",
    healthcareSystem:
      "Universal public healthcare with mandatory complementary private insurance (mutuelle) covering co-payments.",
  },
  {
    code: "jp",
    name: "Japan",
    flag: "🇯🇵",
    region: "Asia Pacific",
    planCount: 50,
    description:
      "Japan provides universal coverage through employment-based or national health insurance, with optional private supplements.",
    healthcareSystem:
      "Universal public health insurance (NHI or employer-based) with optional private insurance for additional coverage.",
  },
  {
    code: "br",
    name: "Brazil",
    flag: "🇧🇷",
    region: "Latin America",
    planCount: 50,
    description:
      "Brazil has a universal public system (SUS) alongside a large private insurance market serving about 25% of the population.",
    healthcareSystem:
      "Universal public healthcare (SUS) with private insurance plans (planos de saude) for faster access and wider networks.",
  },
  {
    code: "za",
    name: "South Africa",
    flag: "🇿🇦",
    region: "Africa",
    planCount: 50,
    description:
      "South Africa has a two-tier system with public healthcare and private medical schemes covering about 16% of the population.",
    healthcareSystem:
      "Two-tier system: public healthcare for all, private medical schemes for those who can afford it.",
  },
  {
    code: "in",
    name: "India",
    flag: "🇮🇳",
    region: "Asia Pacific",
    planCount: 50,
    description:
      "India's health insurance market is rapidly growing, with both government schemes and private insurers serving a large population.",
    healthcareSystem:
      "Mix of public programs (Ayushman Bharat) and private insurance, with growing digital health platforms.",
  },

  // ── Europe ───────────────────────────────────────────────────────────────
  {
    code: "it",
    name: "Italy",
    flag: "🇮🇹",
    region: "Europe",
    planCount: 51,
    description:
      "Italy's Servizio Sanitario Nazionale provides universal coverage, while private insurance offers faster access to specialists and private clinics.",
    healthcareSystem:
      "Universal public healthcare (SSN) with supplementary private insurance for specialist access and reduced waiting times.",
  },
  {
    code: "es",
    name: "Spain",
    flag: "🇪🇸",
    region: "Europe",
    planCount: 50,
    description:
      "Spain's Sistema Nacional de Salud provides comprehensive public coverage; private insurance is popular for quicker specialist appointments.",
    healthcareSystem:
      "Universal public healthcare (SNS) with a growing private insurance sector used by about 20% of the population.",
  },
  {
    code: "nl",
    name: "Netherlands",
    flag: "🇳🇱",
    region: "Europe",
    planCount: 50,
    description:
      "The Netherlands has a regulated mandatory private insurance system where all residents must purchase basic coverage from approved insurers.",
    healthcareSystem:
      "Mandatory private health insurance regulated by the government, with supplementary plans available for extra coverage.",
  },
  {
    code: "ch",
    name: "Switzerland",
    flag: "🇨🇭",
    region: "Europe",
    planCount: 50,
    description:
      "Switzerland mandates all residents to purchase private health insurance (LaMal/KVG), with subsidies for lower-income households.",
    healthcareSystem:
      "Mandatory private insurance (LaMal/KVG) with government subsidies, offering freedom of choice across registered insurers.",
  },
  {
    code: "se",
    name: "Sweden",
    flag: "🇸🇪",
    region: "Europe",
    planCount: 50,
    description:
      "Sweden's publicly funded healthcare is financed through taxes; private insurance is growing for faster specialist and workplace coverage.",
    healthcareSystem:
      "Tax-funded universal healthcare managed by county councils, with voluntary private insurance for supplementary access.",
  },
  {
    code: "no",
    name: "Norway",
    flag: "🇳🇴",
    region: "Europe",
    planCount: 50,
    description:
      "Norway offers high-quality universal healthcare funded by taxes and oil revenues; private insurance is primarily employer-provided.",
    healthcareSystem:
      "Universal tax-funded healthcare (Helfo) with optional employer-paid private insurance for faster treatment.",
  },
  {
    code: "dk",
    name: "Denmark",
    flag: "🇩🇰",
    region: "Europe",
    planCount: 50,
    description:
      "Denmark provides universal healthcare financed through taxes; voluntary private insurance (Group 2) allows patient choice of GP.",
    healthcareSystem:
      "Tax-funded universal healthcare with voluntary private supplementary insurance for specialist and dental coverage.",
  },
  {
    code: "fi",
    name: "Finland",
    flag: "🇫🇮",
    region: "Europe",
    planCount: 50,
    description:
      "Finland's public healthcare is among the most comprehensive in Europe; private insurance supplements waiting times for specialist care.",
    healthcareSystem:
      "Universal public healthcare (Kela) supplemented by private insurance for faster access to specialists.",
  },
  {
    code: "be",
    name: "Belgium",
    flag: "🇧🇪",
    region: "Europe",
    planCount: 50,
    description:
      "Belgium's compulsory health insurance system is managed by non-profit sickness funds, with supplementary private plans for extras.",
    healthcareSystem:
      "Compulsory health insurance managed by mutualities, with supplementary private insurance for additional coverage.",
  },
  {
    code: "at",
    name: "Austria",
    flag: "🇦🇹",
    region: "Europe",
    planCount: 50,
    description:
      "Austria has a social insurance system providing universal access; private health insurance offers premium hospital rooms and shorter wait times.",
    healthcareSystem:
      "Social health insurance (Krankenkasse) covering all residents, with optional private insurance for hospital comfort and specialist access.",
  },
  {
    code: "pt",
    name: "Portugal",
    flag: "🇵🇹",
    region: "Europe",
    planCount: 50,
    description:
      "Portugal's SNS provides universal coverage; private health insurance is growing due to long public waiting lists.",
    healthcareSystem:
      "Universal public healthcare (SNS) with an expanding private insurance market addressing NHS capacity challenges.",
  },
  {
    code: "ie",
    name: "Ireland",
    flag: "🇮🇪",
    region: "Europe",
    planCount: 50,
    description:
      "Ireland has a mixed public-private system; private health insurance is common among workers due to public hospital waiting lists.",
    healthcareSystem:
      "Public healthcare (HSE) with significant private insurance penetration—over 45% of the population hold private plans.",
  },
  {
    code: "pl",
    name: "Poland",
    flag: "🇵🇱",
    region: "Europe",
    planCount: 50,
    description:
      "Poland's NFZ provides public coverage; private healthcare and insurance are growing rapidly among the urban middle class.",
    healthcareSystem:
      "Public health insurance (NFZ) with rapidly growing private medical subscription and insurance market.",
  },
  {
    code: "cz",
    name: "Czech Republic",
    flag: "🇨🇿",
    region: "Europe",
    planCount: 50,
    description:
      "Czech Republic has a high-quality public insurance system; private supplementary insurance is available for foreign nationals and elective care.",
    healthcareSystem:
      "Public health insurance through multiple competing funds, with supplementary private insurance available.",
  },
  {
    code: "gr",
    name: "Greece",
    flag: "🇬🇷",
    region: "Europe",
    planCount: 50,
    description:
      "Greece provides universal public healthcare (EOPYY); private insurance is popular due to pressures on the public system.",
    healthcareSystem:
      "Universal public healthcare (EOPYY) with widespread private insurance use to access private hospitals and clinics.",
  },
  {
    code: "ro",
    name: "Romania",
    flag: "🇷🇴",
    region: "Europe",
    planCount: 50,
    description:
      "Romania's public healthcare is challenged by underfunding; private insurance and clinics are growing rapidly.",
    healthcareSystem:
      "Public health insurance (CNAS) with growing private insurance sector due to public system capacity constraints.",
  },
  {
    code: "hu",
    name: "Hungary",
    flag: "🇭🇺",
    region: "Europe",
    planCount: 50,
    description:
      "Hungary provides universal public healthcare (OEP); private health insurance supplements waiting times and private hospital access.",
    healthcareSystem:
      "Universal public healthcare funded by social contributions, with supplementary private insurance for specialist access.",
  },
  {
    code: "hr",
    name: "Croatia",
    flag: "🇭🇷",
    region: "Europe",
    planCount: 50,
    description:
      "Croatia's HZZO provides compulsory public insurance; supplementary plans cover co-payments and private care.",
    healthcareSystem:
      "Compulsory public health insurance (HZZO) with optional supplementary insurance covering co-payments.",
  },
  {
    code: "bg",
    name: "Bulgaria",
    flag: "🇧🇬",
    region: "Europe",
    planCount: 50,
    description:
      "Bulgaria's public health insurance (NHIF) is underfunded; private insurance is growing to compensate for limited public resources.",
    healthcareSystem:
      "Public health insurance (NHIF) with growing private insurance market addressing public system gaps.",
  },
  {
    code: "sk",
    name: "Slovakia",
    flag: "🇸🇰",
    region: "Europe",
    planCount: 50,
    description:
      "Slovakia operates a competitive multi-fund public insurance system; private supplementary insurance covers additional services.",
    healthcareSystem:
      "Competitive public insurance system with multiple funds, supplemented by private insurance.",
  },
  {
    code: "si",
    name: "Slovenia",
    flag: "🇸🇮",
    region: "Europe",
    planCount: 50,
    description:
      "Slovenia has one of the best healthcare systems in the region; complementary insurance covers statutory co-payments.",
    healthcareSystem:
      "Compulsory public insurance (ZZZS) with widespread complementary private insurance for co-payment coverage.",
  },
  {
    code: "ee",
    name: "Estonia",
    flag: "🇪🇪",
    region: "Europe",
    planCount: 50,
    description:
      "Estonia's e-health system is world-leading; public insurance covers most residents with private insurance as a supplement.",
    healthcareSystem:
      "Single-payer public insurance (Haigekassa) with optional private insurance for supplementary services.",
  },
  {
    code: "lv",
    name: "Latvia",
    flag: "🇱🇻",
    region: "Europe",
    planCount: 50,
    description:
      "Latvia's public healthcare is tax-funded; private health insurance is popular among employers as a workplace benefit.",
    healthcareSystem:
      "Tax-funded public healthcare with a growing employer-sponsored private insurance market.",
  },
  {
    code: "lt",
    name: "Lithuania",
    flag: "🇱🇹",
    region: "Europe",
    planCount: 50,
    description:
      "Lithuania's compulsory health insurance covers essential services; private insurance supplements waiting times and dental care.",
    healthcareSystem:
      "Compulsory health insurance (TLK) with growing voluntary private insurance for supplementary services.",
  },
  {
    code: "lu",
    name: "Luxembourg",
    flag: "🇱🇺",
    region: "Europe",
    planCount: 50,
    description:
      "Luxembourg's healthcare is among the most generously funded in Europe; supplementary insurance covers co-payments and dental.",
    healthcareSystem:
      "Compulsory public insurance (CNS) with supplementary private plans for additional coverage.",
  },
  {
    code: "mt",
    name: "Malta",
    flag: "🇲🇹",
    region: "Europe",
    planCount: 50,
    description:
      "Malta offers free public healthcare to residents; private insurance provides access to private hospitals and shorter waiting times.",
    healthcareSystem:
      "Universal free public healthcare supplemented by growing private insurance market.",
  },
  {
    code: "cy",
    name: "Cyprus",
    flag: "🇨🇾",
    region: "Europe",
    planCount: 50,
    description:
      "Cyprus launched its national health insurance (GESY) in 2019; private insurance remains popular for specialist access.",
    healthcareSystem:
      "National Health System (GESY) launched 2019, with significant private insurance market.",
  },
  {
    code: "is",
    name: "Iceland",
    flag: "🇮🇸",
    region: "Europe",
    planCount: 50,
    description:
      "Iceland provides excellent universal healthcare financed through taxation; private insurance covers dental and supplementary services.",
    healthcareSystem:
      "Tax-funded universal healthcare (Sjúkratryggingar) with voluntary private insurance for dental and extras.",
  },
  {
    code: "al",
    name: "Albania",
    flag: "🇦🇱",
    region: "Europe",
    planCount: 50,
    description:
      "Albania's public health insurance is growing; private insurance is increasingly popular among urban professionals.",
    healthcareSystem:
      "Public health insurance (FSHS) with growing private insurance market driven by urban demand.",
  },
  {
    code: "mk",
    name: "North Macedonia",
    flag: "🇲🇰",
    region: "Europe",
    planCount: 50,
    description:
      "North Macedonia's public health fund covers basic services; private insurance supplements specialist access.",
    healthcareSystem:
      "Public health insurance (HIF) with supplementary private insurance for improved specialist access.",
  },
  {
    code: "me",
    name: "Montenegro",
    flag: "🇲🇪",
    region: "Europe",
    planCount: 50,
    description:
      "Montenegro's healthcare is publicly funded; international private insurers serve the expat and tourism sector.",
    healthcareSystem:
      "Public health insurance (HIF) with private insurance primarily serving expats and high-net-worth individuals.",
  },
  {
    code: "rs",
    name: "Serbia",
    flag: "🇷🇸",
    region: "Europe",
    planCount: 50,
    description:
      "Serbia provides public health insurance to all citizens; private health insurance and clinics are rapidly growing.",
    healthcareSystem:
      "Compulsory public health insurance (RFZO) with expanding private insurance and clinic sector.",
  },
  {
    code: "ba",
    name: "Bosnia and Herzegovina",
    flag: "🇧🇦",
    region: "Europe",
    planCount: 50,
    description:
      "Bosnia's fragmented health system operates at entity level; private insurance bridges gaps in public coverage.",
    healthcareSystem:
      "Entity-level public health insurance funds with supplementary private insurance available.",
  },
  {
    code: "md",
    name: "Moldova",
    flag: "🇲🇩",
    region: "Europe",
    planCount: 50,
    description:
      "Moldova's mandatory health insurance covers basic services; private insurance is growing among those who can afford it.",
    healthcareSystem:
      "Mandatory public health insurance (CNAM) with developing private insurance sector.",
  },
  {
    code: "by",
    name: "Belarus",
    flag: "🇧🇾",
    region: "Europe",
    planCount: 50,
    description:
      "Belarus retains a largely Soviet-era state healthcare system; voluntary private insurance offers additional comfort.",
    healthcareSystem:
      "State-funded healthcare system with voluntary private insurance for additional services.",
  },
  {
    code: "ua",
    name: "Ukraine",
    flag: "🇺🇦",
    region: "Europe",
    planCount: 50,
    description:
      "Ukraine is reforming its healthcare system; private insurance is important for accessing quality private clinics.",
    healthcareSystem:
      "Reformed public healthcare (NHSU) with private insurance playing an important role in accessing quality care.",
  },
  {
    code: "ad",
    name: "Andorra",
    flag: "🇦🇩",
    region: "Europe",
    planCount: 50,
    description:
      "Andorra has a small but efficient healthcare system (CASS) with optional private complementary insurance.",
    healthcareSystem:
      "Compulsory social insurance (CASS) with complementary private insurance available.",
  },
  {
    code: "mc",
    name: "Monaco",
    flag: "🇲🇨",
    region: "Europe",
    planCount: 50,
    description:
      "Monaco's healthcare is of high quality with compulsory social insurance and optional private plans for residents.",
    healthcareSystem:
      "Compulsory social insurance (CSS) with private supplementary insurance available.",
  },
  {
    code: "li",
    name: "Liechtenstein",
    flag: "🇱🇮",
    region: "Europe",
    planCount: 50,
    description:
      "Liechtenstein mandates private health insurance (KVG) for all residents; quality is closely aligned with Switzerland.",
    healthcareSystem:
      "Mandatory private health insurance regulated similarly to Switzerland's KVG system.",
  },
  {
    code: "sm",
    name: "San Marino",
    flag: "🇸🇲",
    region: "Europe",
    planCount: 50,
    description:
      "San Marino's ISS provides universal healthcare; international private insurers serve residents seeking extra coverage.",
    healthcareSystem:
      "Universal state healthcare (ISS) with private insurance available for supplementary coverage.",
  },

  // ── Asia Pacific ─────────────────────────────────────────────────────────
  {
    code: "cn",
    name: "China",
    flag: "🇨🇳",
    region: "Asia Pacific",
    planCount: 50,
    description:
      "China's healthcare system is rapidly modernizing, with a large and growing private insurance market alongside public social insurance.",
    healthcareSystem:
      "Basic public medical insurance (UEBMI/URBMI) supplemented by fast-growing commercial health insurance.",
  },
  {
    code: "kr",
    name: "South Korea",
    flag: "🇰🇷",
    region: "Asia Pacific",
    planCount: 50,
    description:
      "South Korea's NHI provides universal coverage; supplementary private insurance (sil손보) covers co-payments and non-covered services.",
    healthcareSystem:
      "Universal National Health Insurance (NHI) with widespread supplementary private insurance for co-payments.",
  },
  {
    code: "th",
    name: "Thailand",
    flag: "🇹🇭",
    region: "Asia Pacific",
    planCount: 50,
    description:
      "Thailand's universal coverage scheme (UC) provides basic care; private insurance is popular among expats and higher-income Thais.",
    healthcareSystem:
      "Three public schemes (UC, SSS, CSMBS) with active private insurance market for expats and upper-income residents.",
  },
  {
    code: "vn",
    name: "Vietnam",
    flag: "🇻🇳",
    region: "Asia Pacific",
    planCount: 50,
    description:
      "Vietnam's compulsory health insurance covers most of the population; private insurance is growing among urban workers.",
    healthcareSystem:
      "Compulsory public health insurance with growing private insurance market, especially in urban areas.",
  },
  {
    code: "ph",
    name: "Philippines",
    flag: "🇵🇭",
    region: "Asia Pacific",
    planCount: 50,
    description:
      "PhilHealth provides universal public coverage; private HMO and insurance plans are common among employed urban workers.",
    healthcareSystem:
      "Universal PhilHealth coverage supplemented by widely used private HMO plans from major insurers.",
  },
  {
    code: "id",
    name: "Indonesia",
    flag: "🇮🇩",
    region: "Asia Pacific",
    planCount: 50,
    description:
      "Indonesia's JKN aims for universal coverage; private insurance fills gaps for the growing middle class.",
    healthcareSystem:
      "National health insurance (JKN-KIS) with private insurance for supplementary and higher-tier hospital access.",
  },
  {
    code: "my",
    name: "Malaysia",
    flag: "🇲🇾",
    region: "Asia Pacific",
    planCount: 50,
    description:
      "Malaysia offers low-cost public healthcare alongside a sophisticated private hospital and insurance market.",
    healthcareSystem:
      "Dual public-private system with affordable public care and a strong private insurance market.",
  },
  {
    code: "tw",
    name: "Taiwan",
    flag: "🇹🇼",
    region: "Asia Pacific",
    planCount: 50,
    description:
      "Taiwan's NHI is frequently cited as among the world's best; supplementary private insurance covers non-NHI costs.",
    healthcareSystem:
      "Universal National Health Insurance (NHI) with supplementary private insurance for additional indemnity benefits.",
  },
  {
    code: "hk",
    name: "Hong Kong",
    flag: "🇭🇰",
    region: "Asia Pacific",
    planCount: 50,
    description:
      "Hong Kong has a dual public-private system; VHIS-certified plans provide tax-deductible private coverage.",
    healthcareSystem:
      "Public healthcare (HA) at subsidized rates with a significant private market using VHIS-certified plans.",
  },
  {
    code: "mm",
    name: "Myanmar",
    flag: "🇲🇲",
    region: "Asia Pacific",
    planCount: 50,
    description:
      "Myanmar's healthcare system is developing; private insurance and international plans serve those who can afford them.",
    healthcareSystem:
      "Limited public healthcare with growing private insurance sector, primarily international plans for expatriates.",
  },
  {
    code: "kh",
    name: "Cambodia",
    flag: "🇰🇭",
    region: "Asia Pacific",
    planCount: 50,
    description:
      "Cambodia's health system relies heavily on out-of-pocket payments; private and international insurance is growing.",
    healthcareSystem:
      "Equity funds for poor and developing NSSF with private insurance market serving expats and upper-income residents.",
  },
  {
    code: "la",
    name: "Laos",
    flag: "🇱🇦",
    region: "Asia Pacific",
    planCount: 50,
    description:
      "Laos is developing its national health insurance; international private insurance is important for expats and higher earners.",
    healthcareSystem:
      "Developing national health insurance (NHIS) with reliance on international private plans for comprehensive coverage.",
  },
  {
    code: "bd",
    name: "Bangladesh",
    flag: "🇧🇩",
    region: "Asia Pacific",
    planCount: 50,
    description:
      "Bangladesh's public healthcare has limited reach; private insurance is growing rapidly with microinsurance schemes.",
    healthcareSystem:
      "Limited public healthcare with growing private insurance and microinsurance products for various income levels.",
  },
  {
    code: "pk",
    name: "Pakistan",
    flag: "🇵🇰",
    region: "Asia Pacific",
    planCount: 50,
    description:
      "Pakistan's public health coverage is limited; private insurance and the Sehat Sahulat program serve different segments.",
    healthcareSystem:
      "Public Sehat Sahulat program and growing private insurance sector serving formal economy workers.",
  },
  {
    code: "lk",
    name: "Sri Lanka",
    flag: "🇱🇰",
    region: "Asia Pacific",
    planCount: 50,
    description:
      "Sri Lanka has a free public healthcare system; private insurance is used by those seeking faster and more comfortable care.",
    healthcareSystem:
      "Free universal public healthcare with voluntary private insurance for access to private hospitals.",
  },
  {
    code: "np",
    name: "Nepal",
    flag: "🇳🇵",
    region: "Asia Pacific",
    planCount: 50,
    description:
      "Nepal is expanding its national health insurance; private insurance covers those who can afford additional coverage.",
    healthcareSystem:
      "Expanding National Health Insurance Program with private insurance serving urban and higher-income populations.",
  },
  {
    code: "mn",
    name: "Mongolia",
    flag: "🇲🇳",
    region: "Asia Pacific",
    planCount: 50,
    description:
      "Mongolia's compulsory social health insurance covers basic services; private insurance is growing in Ulaanbaatar.",
    healthcareSystem:
      "Compulsory social health insurance with growing private insurance market in urban centers.",
  },
  {
    code: "bn",
    name: "Brunei",
    flag: "🇧🇳",
    region: "Asia Pacific",
    planCount: 50,
    description:
      "Brunei offers free public healthcare to citizens; private insurance serves those seeking private hospital access.",
    healthcareSystem:
      "Free public healthcare for citizens with private insurance for private hospital access.",
  },
  {
    code: "mv",
    name: "Maldives",
    flag: "🇲🇻",
    region: "Asia Pacific",
    planCount: 50,
    description:
      "Maldives' Aasandha scheme provides universal coverage; international private insurance is vital for medical evacuations.",
    healthcareSystem:
      "Universal Aasandha scheme with international private insurance for medical evacuation and high-cost care.",
  },
  {
    code: "bt",
    name: "Bhutan",
    flag: "🇧🇹",
    region: "Asia Pacific",
    planCount: 50,
    description:
      "Bhutan provides free public healthcare as a fundamental right; private insurance serves the urban workforce.",
    healthcareSystem:
      "Free universal public healthcare with small private insurance market for urban workers.",
  },
  {
    code: "tl",
    name: "Timor-Leste",
    flag: "🇹🇱",
    region: "Asia Pacific",
    planCount: 50,
    description:
      "Timor-Leste has a developing healthcare system; international private insurance is important for expats.",
    healthcareSystem:
      "Developing public healthcare with reliance on international private insurance for comprehensive coverage.",
  },

  // ── Middle East ──────────────────────────────────────────────────────────
  {
    code: "sa",
    name: "Saudi Arabia",
    flag: "🇸🇦",
    region: "Middle East",
    planCount: 50,
    description:
      "Saudi Arabia mandates private health insurance for all expatriates; a large and competitive market serves the diverse workforce.",
    healthcareSystem:
      "Government healthcare for nationals, mandatory private insurance for expatriates regulated by CCHI.",
  },
  {
    code: "qa",
    name: "Qatar",
    flag: "🇶🇦",
    region: "Middle East",
    planCount: 50,
    description:
      "Qatar mandates health insurance for all residents; the NHIC regulates a sophisticated insurance market.",
    healthcareSystem:
      "Mandatory health insurance for all residents, regulated by the National Health Insurance Company (NHIC).",
  },
  {
    code: "kw",
    name: "Kuwait",
    flag: "🇰🇼",
    region: "Middle East",
    planCount: 50,
    description:
      "Kuwait provides free public healthcare to citizens; expatriates require private insurance for public hospital access.",
    healthcareSystem:
      "Free public healthcare for citizens with mandatory private insurance for expatriate residents.",
  },
  {
    code: "bh",
    name: "Bahrain",
    flag: "🇧🇭",
    region: "Middle East",
    planCount: 50,
    description:
      "Bahrain's National Health Insurance (Sehati) covers citizens and expats; a private insurance market supplements NHI.",
    healthcareSystem:
      "National health insurance (Sehati) with supplementary private insurance market.",
  },
  {
    code: "om",
    name: "Oman",
    flag: "🇴🇲",
    region: "Middle East",
    planCount: 50,
    description:
      "Oman's public healthcare is free for citizens; private insurance is mandatory for expatriates in many sectors.",
    healthcareSystem:
      "Free public healthcare for citizens, mandatory private insurance for expatriates in the private sector.",
  },
  {
    code: "il",
    name: "Israel",
    flag: "🇮🇱",
    region: "Middle East",
    planCount: 50,
    description:
      "Israel's universal health insurance is provided by four competing HMOs (Kupot Holim); supplementary private plans are widespread.",
    healthcareSystem:
      "Universal health insurance through four competing HMOs, with supplementary and complementary private plans.",
  },
  {
    code: "jo",
    name: "Jordan",
    flag: "🇯🇴",
    region: "Middle East",
    planCount: 50,
    description:
      "Jordan has a mixed public-private healthcare system; private insurance is popular among formal sector workers.",
    healthcareSystem:
      "Public healthcare through Civil Insurance and Royal Medical Services, with growing private insurance.",
  },
  {
    code: "lb",
    name: "Lebanon",
    flag: "🇱🇧",
    region: "Middle East",
    planCount: 50,
    description:
      "Lebanon's fragmented health system relies heavily on private hospitals; private insurance is essential for quality care.",
    healthcareSystem:
      "Fragmented public coverage (NSSF, MOH) with significant private insurance market.",
  },
  {
    code: "iq",
    name: "Iraq",
    flag: "🇮🇶",
    region: "Middle East",
    planCount: 50,
    description:
      "Iraq's public healthcare is recovering; private insurance serves the growing middle class and expatriates.",
    healthcareSystem:
      "Public healthcare system with growing private insurance sector serving middle and upper-income populations.",
  },
  {
    code: "ir",
    name: "Iran",
    flag: "🇮🇷",
    region: "Middle East",
    planCount: 50,
    description:
      "Iran's universal health insurance (Salamat) covers most citizens; supplementary private insurance offers additional services.",
    healthcareSystem:
      "Universal health insurance (Salamat) with supplementary private insurance for additional coverage.",
  },
  {
    code: "tr",
    name: "Turkey",
    flag: "🇹🇷",
    region: "Middle East",
    planCount: 50,
    description:
      "Turkey's SGK provides universal coverage; private health insurance is growing rapidly with a major private hospital sector.",
    healthcareSystem:
      "Universal public insurance (SGK) with rapidly growing private insurance complementing a strong private hospital network.",
  },
  {
    code: "ye",
    name: "Yemen",
    flag: "🇾🇪",
    region: "Middle East",
    planCount: 50,
    description:
      "Yemen's healthcare system is severely strained; international insurance is essential for expatriates and humanitarian workers.",
    healthcareSystem:
      "Severely strained public healthcare with international insurance essential for expatriates.",
  },
  {
    code: "sy",
    name: "Syria",
    flag: "🇸🇾",
    region: "Middle East",
    planCount: 50,
    description:
      "Syria's healthcare infrastructure is recovering; international and private insurance supports those with access.",
    healthcareSystem:
      "Recovering public healthcare with reliance on international and private insurance for quality coverage.",
  },
  {
    code: "ps",
    name: "Palestine",
    flag: "🇵🇸",
    region: "Middle East",
    planCount: 50,
    description:
      "Palestine's healthcare relies on government and UNRWA services; private insurance supplements for those who can afford it.",
    healthcareSystem:
      "Government health services and UNRWA coverage with supplementary private insurance.",
  },

  // ── Africa ───────────────────────────────────────────────────────────────
  {
    code: "ng",
    name: "Nigeria",
    flag: "🇳🇬",
    region: "Africa",
    planCount: 50,
    description:
      "Nigeria's NHIA aims for universal coverage; private HMOs serve the formal sector in a growing insurance market.",
    healthcareSystem:
      "National Health Insurance Authority (NHIA) with significant private HMO market for formal sector workers.",
  },
  {
    code: "ke",
    name: "Kenya",
    flag: "🇰🇪",
    region: "Africa",
    planCount: 50,
    description:
      "Kenya's NHIF is transitioning to SHIF for universal coverage; private insurance is widely used by employed Kenyans.",
    healthcareSystem:
      "Social health insurance (SHIF) with growing private insurance sector covering employed urban populations.",
  },
  {
    code: "eg",
    name: "Egypt",
    flag: "🇪🇬",
    region: "Africa",
    planCount: 50,
    description:
      "Egypt is rolling out universal health insurance (UHI); private insurance is popular in urban areas and among high earners.",
    healthcareSystem:
      "Expanding universal health insurance (UHI) with significant private insurance market in urban centers.",
  },
  {
    code: "ma",
    name: "Morocco",
    flag: "🇲🇦",
    region: "Africa",
    planCount: 50,
    description:
      "Morocco's AMO and RAMED programs provide coverage; private insurance supplements for better hospital access.",
    healthcareSystem:
      "Mandatory AMO insurance for formal workers and RAMED for vulnerable populations, plus private insurance.",
  },
  {
    code: "tn",
    name: "Tunisia",
    flag: "🇹🇳",
    region: "Africa",
    planCount: 50,
    description:
      "Tunisia's CNAM provides universal coverage; private insurance offers faster access to private clinics.",
    healthcareSystem:
      "Universal public insurance (CNAM) with supplementary private insurance for private clinic access.",
  },
  {
    code: "gh",
    name: "Ghana",
    flag: "🇬🇭",
    region: "Africa",
    planCount: 50,
    description:
      "Ghana's NHIA is one of Africa's most comprehensive; private insurance supplements for additional services.",
    healthcareSystem:
      "National Health Insurance Authority (NHIA) with supplementary private insurance sector.",
  },
  {
    code: "et",
    name: "Ethiopia",
    flag: "🇪🇹",
    region: "Africa",
    planCount: 50,
    description:
      "Ethiopia is developing community-based health insurance; private insurance serves the growing urban middle class.",
    healthcareSystem:
      "Community-based health insurance and CBHI with growing private insurance for urban populations.",
  },
  {
    code: "tz",
    name: "Tanzania",
    flag: "🇹🇿",
    region: "Africa",
    planCount: 50,
    description:
      "Tanzania's NHIF covers formal sector workers; community health funds and private insurance serve other segments.",
    healthcareSystem:
      "National Health Insurance Fund (NHIF) for formal workers with community health funds and private insurance.",
  },
  {
    code: "rw",
    name: "Rwanda",
    flag: "🇷🇼",
    region: "Africa",
    planCount: 50,
    description:
      "Rwanda's Mutuelle de Santé achieves near-universal coverage and is a model for Africa; private insurance supplements.",
    healthcareSystem:
      "Near-universal community health insurance (Mutuelle de Santé) with supplementary private insurance.",
  },
  {
    code: "ug",
    name: "Uganda",
    flag: "🇺🇬",
    region: "Africa",
    planCount: 50,
    description:
      "Uganda's public healthcare is free but underfunded; private insurance serves formal sector workers and higher earners.",
    healthcareSystem:
      "Free public healthcare with growing private insurance market for formal sector and higher-income populations.",
  },
  {
    code: "sn",
    name: "Senegal",
    flag: "🇸🇳",
    region: "Africa",
    planCount: 50,
    description:
      "Senegal is expanding its universal health coverage; private insurance serves urban formal sector workers.",
    healthcareSystem:
      "Expanding UHC with community-based mutuelles and growing private insurance in urban areas.",
  },
  {
    code: "ci",
    name: "Ivory Coast",
    flag: "🇨🇮",
    region: "Africa",
    planCount: 50,
    description:
      "Ivory Coast is implementing universal health coverage; private insurance is popular among Abidjan's formal sector.",
    healthcareSystem:
      "Implementing CNAM universal coverage with private insurance for formal sector workers.",
  },
  {
    code: "cm",
    name: "Cameroon",
    flag: "🇨🇲",
    region: "Africa",
    planCount: 50,
    description:
      "Cameroon's public healthcare is stretched; private insurance and mutual health organizations serve urban workers.",
    healthcareSystem:
      "Limited public healthcare with mutual health organizations and private insurance for urban workers.",
  },
  {
    code: "dz",
    name: "Algeria",
    flag: "🇩🇿",
    region: "Africa",
    planCount: 50,
    description:
      "Algeria's CNAS provides public health insurance; supplementary private insurance is growing among higher earners.",
    healthcareSystem:
      "Public social health insurance (CNAS) with growing supplementary private insurance market.",
  },
  {
    code: "ly",
    name: "Libya",
    flag: "🇱🇾",
    region: "Africa",
    planCount: 50,
    description:
      "Libya's healthcare system is being rebuilt; international private insurance is essential for quality coverage.",
    healthcareSystem:
      "Rebuilding public healthcare with international private insurance serving those who can afford it.",
  },
  {
    code: "mz",
    name: "Mozambique",
    flag: "🇲🇿",
    region: "Africa",
    planCount: 50,
    description:
      "Mozambique has limited public healthcare resources; private insurance serves expatriates and higher-income urban workers.",
    healthcareSystem:
      "Limited public healthcare with private insurance for expatriates and formal sector workers.",
  },
  {
    code: "zw",
    name: "Zimbabwe",
    flag: "🇿🇼",
    region: "Africa",
    planCount: 50,
    description:
      "Zimbabwe's healthcare system faces challenges; medical aid societies and private insurance serve formal sector workers.",
    healthcareSystem:
      "Public healthcare supplemented by medical aid societies and private insurance.",
  },
  {
    code: "bw",
    name: "Botswana",
    flag: "🇧🇼",
    region: "Africa",
    planCount: 50,
    description:
      "Botswana provides relatively good public healthcare; private insurance is popular among the formal sector.",
    healthcareSystem:
      "Public healthcare for all citizens with private insurance for faster specialist access.",
  },
  {
    code: "na",
    name: "Namibia",
    flag: "🇳🇦",
    region: "Africa",
    planCount: 50,
    description:
      "Namibia has public and private healthcare; medical aid funds and private insurance serve the formal sector.",
    healthcareSystem:
      "Public healthcare with medical aid funds and private insurance for formal sector workers.",
  },
  {
    code: "mu",
    name: "Mauritius",
    flag: "🇲🇺",
    region: "Africa",
    planCount: 50,
    description:
      "Mauritius provides free universal public healthcare; private insurance is widely used for private hospital access.",
    healthcareSystem:
      "Free universal public healthcare with substantial private insurance market for private hospital access.",
  },
  {
    code: "mg",
    name: "Madagascar",
    flag: "🇲🇬",
    region: "Africa",
    planCount: 50,
    description:
      "Madagascar's healthcare resources are limited; international private insurance serves expatriates and NGO workers.",
    healthcareSystem:
      "Limited public healthcare with international private insurance for expatriates and NGO workers.",
  },
  {
    code: "cd",
    name: "DR Congo",
    flag: "🇨🇩",
    region: "Africa",
    planCount: 50,
    description:
      "DRC has limited formal health insurance; international and private insurance serves expats and higher-income residents.",
    healthcareSystem:
      "Limited formal health insurance with international private plans for expats and higher-income populations.",
  },
  {
    code: "ao",
    name: "Angola",
    flag: "🇦🇴",
    region: "Africa",
    planCount: 50,
    description:
      "Angola's public healthcare is growing; private insurance is popular among oil sector workers and urban middle class.",
    healthcareSystem:
      "Public healthcare with private insurance popular among oil sector and urban middle-class workers.",
  },
  {
    code: "zm",
    name: "Zambia",
    flag: "🇿🇲",
    region: "Africa",
    planCount: 50,
    description:
      "Zambia's public healthcare is free but underfunded; private insurance serves formal sector employees.",
    healthcareSystem:
      "Free public healthcare with private insurance serving formal sector and higher-income populations.",
  },
  {
    code: "mw",
    name: "Malawi",
    flag: "🇲🇼",
    region: "Africa",
    planCount: 50,
    description:
      "Malawi's healthcare system is developing; private insurance serves expatriates and NGO workers.",
    healthcareSystem:
      "Public healthcare system with private insurance for expatriates and formal sector workers.",
  },

  // ── Latin America ────────────────────────────────────────────────────────
  {
    code: "mx",
    name: "Mexico",
    flag: "🇲🇽",
    region: "Latin America",
    planCount: 50,
    description:
      "Mexico's IMSS and ISSSTE provide public coverage; private insurance is popular for faster access and better facilities.",
    healthcareSystem:
      "Multiple public insurance schemes (IMSS, ISSSTE, INSABI) with growing private insurance market.",
  },
  {
    code: "ar",
    name: "Argentina",
    flag: "🇦🇷",
    region: "Latin America",
    planCount: 50,
    description:
      "Argentina's Obras Sociales provide employer-linked coverage; prepaid medicine plans offer higher-quality private care.",
    healthcareSystem:
      "Obras Sociales (employer funds), PAMI for retirees, and private prepaid medicine plans (prepagas).",
  },
  {
    code: "cl",
    name: "Chile",
    flag: "🇨🇱",
    region: "Latin America",
    planCount: 50,
    description:
      "Chile mandates 7% of salary for health insurance; individuals choose between public FONASA and private ISAPRE.",
    healthcareSystem:
      "Mandatory contribution system with choice between public FONASA and private ISAPRE health insurers.",
  },
  {
    code: "co",
    name: "Colombia",
    flag: "🇨🇴",
    region: "Latin America",
    planCount: 50,
    description:
      "Colombia's universal health system operates through EPS companies; near-universal coverage is a notable achievement.",
    healthcareSystem:
      "Universal health system through EPS (health-promoting entities) with public and private operators.",
  },
  {
    code: "pe",
    name: "Peru",
    flag: "🇵🇪",
    region: "Latin America",
    planCount: 50,
    description:
      "Peru's SIS and EsSalud provide public coverage; private insurance is growing among urban professionals.",
    healthcareSystem:
      "Multiple public coverage schemes (SIS, EsSalud) with growing private insurance market.",
  },
  {
    code: "ec",
    name: "Ecuador",
    flag: "🇪🇨",
    region: "Latin America",
    planCount: 50,
    description:
      "Ecuador's IESS provides social insurance; private insurance is available for those seeking additional coverage.",
    healthcareSystem:
      "Public social insurance (IESS) with private insurance for supplementary coverage.",
  },
  {
    code: "ve",
    name: "Venezuela",
    flag: "🇻🇪",
    region: "Latin America",
    planCount: 50,
    description:
      "Venezuela's healthcare system is under severe strain; private insurance is essential for quality care access.",
    healthcareSystem:
      "Severely strained public healthcare with private insurance essential for quality care.",
  },
  {
    code: "uy",
    name: "Uruguay",
    flag: "🇺🇾",
    region: "Latin America",
    planCount: 50,
    description:
      "Uruguay's FONASA-integrated SNIS provides universal coverage through public and private mutualistas.",
    healthcareSystem:
      "Universal National Integrated Health System (SNIS) with choice between public ASSE and private mutualistas.",
  },
  {
    code: "py",
    name: "Paraguay",
    flag: "🇵🇾",
    region: "Latin America",
    planCount: 50,
    description:
      "Paraguay has public insurance (IPS) and a growing private market; health coverage remains a development priority.",
    healthcareSystem:
      "Public social insurance (IPS) with growing private insurance market.",
  },
  {
    code: "bo",
    name: "Bolivia",
    flag: "🇧🇴",
    region: "Latin America",
    planCount: 50,
    description:
      "Bolivia is expanding its SUS universal health system; private insurance serves formal sector and higher-income residents.",
    healthcareSystem:
      "Universal Health System (SUS) with private insurance for formal sector and higher-income populations.",
  },
  {
    code: "cr",
    name: "Costa Rica",
    flag: "🇨🇷",
    region: "Latin America",
    planCount: 50,
    description:
      "Costa Rica's CCSS is frequently praised as one of Latin America's best health systems; private insurance adds private hospital access.",
    healthcareSystem:
      "Universal public insurance (CCSS/Caja) with private insurance for private hospital and specialist access.",
  },
  {
    code: "pa",
    name: "Panama",
    flag: "🇵🇦",
    region: "Latin America",
    planCount: 50,
    description:
      "Panama's CSS provides public coverage; private insurance is popular for access to its excellent private hospitals.",
    healthcareSystem:
      "Public social insurance (CSS) with private insurance for private hospital access, popular among expats.",
  },
  {
    code: "gt",
    name: "Guatemala",
    flag: "🇬🇹",
    region: "Latin America",
    planCount: 50,
    description:
      "Guatemala's IGSS covers formal sector workers; private insurance is used by higher-income urban populations.",
    healthcareSystem:
      "Public social insurance (IGSS) with private insurance for higher-income and formal sector workers.",
  },
  {
    code: "hn",
    name: "Honduras",
    flag: "🇭🇳",
    region: "Latin America",
    planCount: 50,
    description:
      "Honduras's IHSS covers formal workers; private insurance is growing in urban areas.",
    healthcareSystem:
      "Public social security (IHSS) with growing private insurance in urban centers.",
  },
  {
    code: "sv",
    name: "El Salvador",
    flag: "🇸🇻",
    region: "Latin America",
    planCount: 50,
    description:
      "El Salvador's ISSS covers formal sector workers; private insurance supplements for faster and better care.",
    healthcareSystem:
      "Public social insurance (ISSS) with private insurance for supplementary and faster access.",
  },
  {
    code: "ni",
    name: "Nicaragua",
    flag: "🇳🇮",
    region: "Latin America",
    planCount: 50,
    description:
      "Nicaragua's INSS provides social insurance; private insurance covers gaps for formal sector workers.",
    healthcareSystem:
      "Public social insurance (INSS) with private insurance supplementing formal sector coverage.",
  },
  {
    code: "cu",
    name: "Cuba",
    flag: "🇨🇺",
    region: "Latin America",
    planCount: 50,
    description:
      "Cuba's state healthcare is universal and free; limited private insurance exists for foreign residents and tourists.",
    healthcareSystem:
      "Universal free state healthcare with limited private insurance for foreigners.",
  },
  {
    code: "do",
    name: "Dominican Republic",
    flag: "🇩🇴",
    region: "Latin America",
    planCount: 50,
    description:
      "Dominican Republic's SFS is expanding universal coverage; private ARSs offer supplementary private hospital access.",
    healthcareSystem:
      "Family Health Insurance System (SFS) with regulated private ARSs offering supplementary coverage.",
  },
  {
    code: "ht",
    name: "Haiti",
    flag: "🇭🇹",
    region: "Latin America",
    planCount: 50,
    description:
      "Haiti has very limited formal health insurance; international and private plans serve NGO workers and higher earners.",
    healthcareSystem:
      "Very limited formal health insurance with international private plans for NGO and higher-income residents.",
  },
  {
    code: "bz",
    name: "Belize",
    flag: "🇧🇿",
    region: "Central America",
    planCount: 50,
    description:
      "Belize's Social Security covers basic care; private insurance is popular among expats and retirees.",
    healthcareSystem:
      "Social Security health benefits with private insurance popular among expats and retirees.",
  },
  {
    code: "gy",
    name: "Guyana",
    flag: "🇬🇾",
    region: "Latin America",
    planCount: 50,
    description:
      "Guyana's public healthcare is free; private insurance supplements for private hospital access.",
    healthcareSystem:
      "Free public healthcare with private insurance for private hospital and specialist access.",
  },
  {
    code: "sr",
    name: "Suriname",
    flag: "🇸🇷",
    region: "Latin America",
    planCount: 50,
    description:
      "Suriname provides basic public care; private insurance supplements for formal sector workers.",
    healthcareSystem:
      "Public healthcare (SZF) with private insurance for formal sector workers.",
  },

  // ── Caribbean ────────────────────────────────────────────────────────────
  {
    code: "jm",
    name: "Jamaica",
    flag: "🇯🇲",
    region: "Caribbean",
    planCount: 50,
    description:
      "Jamaica's public healthcare is free but strained; private insurance is common among professionals and the middle class.",
    healthcareSystem:
      "Free public healthcare with private insurance widely used by middle and upper-income populations.",
  },
  {
    code: "tt",
    name: "Trinidad and Tobago",
    flag: "🇹🇹",
    region: "Caribbean",
    planCount: 50,
    description:
      "Trinidad and Tobago provides free public healthcare; private insurance is popular among oil sector workers.",
    healthcareSystem:
      "Free public healthcare with private insurance popular among oil industry and corporate workers.",
  },
  {
    code: "bs",
    name: "Bahamas",
    flag: "🇧🇸",
    region: "Caribbean",
    planCount: 50,
    description:
      "The Bahamas has a National Health Insurance scheme; private insurance supplements for private clinic access.",
    healthcareSystem:
      "National Health Insurance (NHI) with private insurance for supplementary and private clinic access.",
  },
  {
    code: "bb",
    name: "Barbados",
    flag: "🇧🇧",
    region: "Caribbean",
    planCount: 50,
    description:
      "Barbados provides comprehensive public healthcare; private insurance supplements for private hospital access.",
    healthcareSystem:
      "Comprehensive public healthcare with private insurance for private hospital access.",
  },
  {
    code: "lc",
    name: "Saint Lucia",
    flag: "🇱🇨",
    region: "Caribbean",
    planCount: 50,
    description:
      "Saint Lucia's NIC covers formal workers; private insurance supplements for expats and higher earners.",
    healthcareSystem:
      "National Insurance Corporation (NIC) benefits with private insurance for higher-income residents.",
  },
  {
    code: "vc",
    name: "Saint Vincent and the Grenadines",
    flag: "🇻🇨",
    region: "Caribbean",
    planCount: 50,
    description:
      "Saint Vincent provides public healthcare; private insurance serves expats and formal sector workers.",
    healthcareSystem:
      "Public healthcare with private insurance for expats and formal sector workers.",
  },
  {
    code: "gd",
    name: "Grenada",
    flag: "🇬🇩",
    region: "Caribbean",
    planCount: 50,
    description:
      "Grenada's public health services are free; private insurance supplements for private clinic access.",
    healthcareSystem:
      "Free public health services with private insurance for private clinic and specialist access.",
  },
  {
    code: "ag",
    name: "Antigua and Barbuda",
    flag: "🇦🇬",
    region: "Caribbean",
    planCount: 50,
    description:
      "Antigua and Barbuda's medical benefits scheme covers formal workers; private insurance supplements for expats.",
    healthcareSystem:
      "Medical benefits scheme with private insurance for expats and higher-income residents.",
  },
  {
    code: "dm",
    name: "Dominica",
    flag: "🇩🇲",
    region: "Caribbean",
    planCount: 50,
    description:
      "Dominica's public health services are accessible; private insurance supplements for those seeking private care.",
    healthcareSystem:
      "Public health services with private insurance for supplementary coverage.",
  },
  {
    code: "kn",
    name: "Saint Kitts and Nevis",
    flag: "🇰🇳",
    region: "Caribbean",
    planCount: 50,
    description:
      "Saint Kitts and Nevis offers Social Security health benefits; private insurance is popular for citizenship-by-investment residents.",
    healthcareSystem:
      "Social Security health benefits with private insurance for citizenship-by-investment residents.",
  },

  // ── Oceania ──────────────────────────────────────────────────────────────
  {
    code: "nz",
    name: "New Zealand",
    flag: "🇳🇿",
    region: "Oceania",
    planCount: 50,
    description:
      "New Zealand's universal public healthcare is funded by taxes; private insurance is popular for elective procedures and specialist care.",
    healthcareSystem:
      "Universal public healthcare (Te Whatu Ora) with private insurance for elective and specialist access.",
  },
  {
    code: "fj",
    name: "Fiji",
    flag: "🇫🇯",
    region: "Oceania",
    planCount: 50,
    description:
      "Fiji provides public healthcare; private insurance is important for expats and those seeking private hospital access.",
    healthcareSystem:
      "Public healthcare with private insurance for expats and private hospital access.",
  },
  {
    code: "pg",
    name: "Papua New Guinea",
    flag: "🇵🇬",
    region: "Oceania",
    planCount: 50,
    description:
      "Papua New Guinea's healthcare is largely public; private insurance is used by corporate workers and expats.",
    healthcareSystem:
      "Public healthcare with private insurance for corporate, mining sector, and expatriate workers.",
  },
  {
    code: "ws",
    name: "Samoa",
    flag: "🇼🇸",
    region: "Oceania",
    planCount: 50,
    description:
      "Samoa provides public healthcare; private insurance is limited but growing among formal sector workers.",
    healthcareSystem:
      "Public healthcare with limited private insurance market serving formal sector workers.",
  },
  {
    code: "to",
    name: "Tonga",
    flag: "🇹🇴",
    region: "Oceania",
    planCount: 50,
    description:
      "Tonga's public healthcare is free; international private insurance covers medical evacuations for residents.",
    healthcareSystem:
      "Free public healthcare with international private insurance for medical evacuation coverage.",
  },
  {
    code: "vu",
    name: "Vanuatu",
    flag: "🇻🇺",
    region: "Oceania",
    planCount: 50,
    description:
      "Vanuatu's VNPF covers formal workers; private insurance serves expats and business owners.",
    healthcareSystem:
      "VNPF benefits with private insurance serving expatriates and business owners.",
  },
  {
    code: "sb",
    name: "Solomon Islands",
    flag: "🇸🇧",
    region: "Oceania",
    planCount: 50,
    description:
      "Solomon Islands provides public healthcare; international private insurance is vital for medical evacuations.",
    healthcareSystem:
      "Public healthcare with international private insurance for medical evacuation and comprehensive coverage.",
  },
];
