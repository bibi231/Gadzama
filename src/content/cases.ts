// ─── Notable Cases & Appointments ────────────────────────────────────────────
// A distinguished record of landmark legal engagements.

export interface CaseEntry {
  year: string;
  category: string;
  title: string;
  outcome: string;
  court: string;
  summary: string;
}

export const caseCategories = [
  "All",
  "Electoral",
  "Constitutional",
  "Corporate",
  "Banking",
  "International",
  "Public Interest",
  "Regulatory",
];

export const cases: CaseEntry[] = [
  {
    year: "2007",
    category: "Constitutional",
    title: "Ladoja v. INEC",
    outcome: "Victory (Reinstatement)",
    court: "Supreme Court",
    summary:
      "Lead counsel to the 1st respondent in the landmark impeachment case of the Governor of Oyo State. The Supreme Court declared the impeachment null and void due to non-compliance with the Constitution, reinstating the Governor.",
  },
  {
    year: "2008",
    category: "Electoral",
    title: "Abubakar v. Yar'Adua",
    outcome: "Notable Role",
    court: "Supreme Court",
    summary:
      "Counsel in the presidential election petition challenging the return of Umaru Musa Yar'Adua as President. Addressed critical issues regarding the standard of proof required to nullify a presidential election.",
  },
  {
    year: "2008",
    category: "Electoral",
    title: "Amaechi v. INEC",
    outcome: "Landmark Precedent",
    court: "Supreme Court",
    summary:
      'Played a significant role in the proceedings of what is popularly known as the "K-Leg" case. The court held that political parties, not individuals, are the candidates in elections.',
  },
  {
    year: "2005",
    category: "Electoral",
    title: "Buhari v. Obasanjo",
    outcome: "Supreme Court Decision",
    court: "Supreme Court",
    summary:
      "Involved in the presidential election petition arising from the 2003 general elections. The case tested the boundaries of electoral compliance and evidence admissibility.",
  },
  {
    year: "2011",
    category: "Electoral",
    title: "Shettima v. Goni",
    outcome: "Victory",
    court: "Supreme Court",
    summary:
      "Lead counsel in the consolidated appeals regarding the Borno State governorship election. Successfully argued on complex issues of time limitations for election tribunals.",
  },
  {
    year: "2022",
    category: "Public Interest",
    title: "NBA v. AGF & Ors",
    outcome: "Victory",
    court: "Federal High Court",
    summary:
      "Lead counsel to the Nigerian Bar Association in a public interest suit challenging Regulation 127 of the Nigeria Police Force, which authorised the dismissal of unmarried pregnant policewomen.",
  },
  {
    year: "2016-2019",
    category: "Constitutional",
    title: "J-K Gadzama, SAN v. NBA",
    outcome: "Major Litigation",
    court: "High Court",
    summary:
      "Challenged the outcome of the 2016 Nigerian Bar Association presidential election, raising fundamental questions about the integrity of the association's electronic voting system.",
  },
  {
    year: "2013",
    category: "Corporate",
    title: "Re: PHCN Liquidation",
    outcome: "Successful Winding-Up",
    court: "Advisory / Corporate",
    summary:
      "Appointed as the Liquidator for the Power Holding Company of Nigeria (PHCN) Plc. Managed the complex legal winding-up process of the national utility company during privatisation.",
  },
  {
    year: "2003",
    category: "Electoral",
    title: "Okonkwo v. INEC",
    outcome: "Victory",
    court: "Court of Appeal",
    summary:
      "Represented the Independent National Electoral Commission in a key appeal concerning the Anambra Senatorial District election. Successfully defended the Commission's stance.",
  },
  {
    year: "2015",
    category: "International",
    title: "Air France Litigation",
    outcome: "Expert Opinion",
    court: "Tribunal de Grande Instance de Toulouse",
    summary:
      "Provided expert legal opinion on damages recoverable under Nigerian law in litigation involving a major aircraft manufacturer and Air France.",
  },
  {
    year: "2025",
    category: "Public Interest",
    title: "SSS v. Prof. Patrick O. Utomi",
    outcome: "Amicus Curiae",
    court: "Federal High Court, Abuja",
    summary:
      "Invited as amicus curiae in Suit No. FHC/ABJ/CS/937/2025 before Hon. Justice James Kolawole Omotosho, on issues touching on constitutional order and the rule of law.",
  },
  {
    year: "2019",
    category: "Banking",
    title: "GTBank Receivership, Reliance Referral Hospital",
    outcome: "Court-Appointed Receiver",
    court: "Commercial",
    summary:
      "Appointed initial Receiver/Manager by Guaranty Trust Bank over property held as security for facilities granted to Reliance Referral Hospital, managing the recovery process.",
  },
  {
    year: "2013",
    category: "Regulatory",
    title: "Chairman, EFCC Legal Team",
    outcome: "Appointment",
    court: "Economic & Financial Crimes Commission",
    summary:
      "Appointed Chairman of the Legal Team of the EFCC and Chairman of the National Working Group on the Rome Statute, constituted by the Office of the Attorney-General of the Federation, in furtherance of a strong anti-corruption record.",
  },
  {
    year: "2004-2007",
    category: "Corporate",
    title: "Bureau of Public Enterprises, Privatisation Advisory",
    outcome: "Lead Legal Consultant",
    court: "Advisory / Corporate",
    summary:
      "Partner in the Legal Advisory Partnership providing legal services to the Bureau of Public Enterprises and the Secretariat of the National Council on Privatization, chaired by the Vice President of the Federal Republic of Nigeria.",
  },
  {
    year: "2011",
    category: "Regulatory",
    title: "Federal Commissioner, ICRC",
    outcome: "Board Appointment",
    court: "Infrastructure Concession Regulatory Commission",
    summary:
      "Served as Federal Commissioner and Board Member of the Infrastructure Concession Regulatory Commission of Nigeria, under the chairmanship of Chief Ernest Shonekan, former Interim Head of State.",
  },
];

export const caseIntro =
  "A distinguished record of landmark legal engagements spanning electoral law, corporate restructuring, international litigation, and regulatory matters at the highest levels of Nigerian and international practice.";

export const internationalRecognition =
  "Chief Gadzama's legal expertise has been sought internationally, including expert testimony in litigation involving major aircraft manufacturers in France. He is listed in Who's Who Legal as an arbitration expert and ranked as a Band One Litigation Lawyer in Chambers and Partners.";
