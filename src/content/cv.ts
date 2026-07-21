// ─── CV data ─────────────────────────────────────────────────────────────────

export interface CVEntry {
  title: string;
  institution: string;
  year: string;
}

export interface CVSection {
  heading: string;
  entries: CVEntry[];
}

// ─── Arbitration & ADR CV ────────────────────────────────────────────────────
export const arbitrationCV: CVSection[] = [
  {
    heading: "Education & Qualifications",
    entries: [
      {
        title: "Diploma, International Commercial Arbitration",
        institution: "Keble College, University of Oxford, UK",
        year: "2006",
      },
      {
        title: "IP3 Programme",
        institution: "USA",
        year: "2009",
      },
      {
        title: "Regulation Short Course",
        institution: "London School of Economics (LSE)",
        year: "2010",
      },
      {
        title: "PhD Candidate, Energy & Natural Resources Law",
        institution: "Nile University of Nigeria",
        year: "Present",
      },
      {
        title: "LL.B (Common Law) · Best Graduating Student",
        institution: "University of Maiduguri",
        year: "1986",
      },
      {
        title: "BL, Called to the Nigerian Bar",
        institution: "Nigerian Law School",
        year: "1986",
      },
    ],
  },
  {
    heading: "Arbitration & ADR Appointments",
    entries: [
      {
        title: "Chartered Arbitrator (C.Arb.) · Fellow, CIArb",
        institution: "Chartered Institute of Arbitrators",
        year: "Present",
      },
      {
        title: "Chair, Board of Trustees",
        institution: "Janada Int'l Centre for Arbitration & Mediation (JICAM)",
        year: "Present",
      },
      {
        title: "Panel of Neutrals",
        institution: "Abuja & Lagos Multi-Door Courthouses",
        year: "Present",
      },
      {
        title: "Pioneer Board Member",
        institution: "Lagos Court of Arbitration",
        year: "Present",
      },
      {
        title: "Member",
        institution: "London Court of International Arbitration (LCIA)",
        year: "Present",
      },
      {
        title: "Member",
        institution: "CEDR (England) & MIAC (Mauritius)",
        year: "Present",
      },
      {
        title: "Member",
        institution: "RCICA",
        year: "Present",
      },
      {
        title: "Fellow",
        institution: "Nigerian Institute of Chartered Arbitrators (FNICArb)",
        year: "Present",
      },
    ],
  },
  {
    heading: "Recognition",
    entries: [
      {
        title: "500 Leading Lawyers Worldwide",
        institution: "Intercontinental Finance Magazine",
        year: "2015",
      },
      {
        title: "Arbitration Expert",
        institution: "Who's Who Legal",
        year: "Featured",
      },
      {
        title: "Band One, Disputes",
        institution: "Chambers and Partners",
        year: "Ranked",
      },
      {
        title: "Senior Advocate of Nigeria (SAN)",
        institution: "Legal Practitioners' Privileges Committee",
        year: "1998",
      },
    ],
  },
];

// ─── General CV ──────────────────────────────────────────────────────────────
export const generalCV: CVSection[] = [
  {
    heading: "Education & Qualifications",
    entries: [
      {
        title: "PhD Candidate, Energy & Natural Resources Law",
        institution: "Nile University of Nigeria",
        year: "Present",
      },
      {
        title: "Diploma, International Commercial Arbitration",
        institution: "Keble College, University of Oxford, UK",
        year: "2006",
      },
      {
        title: "IP3 Programme",
        institution: "USA",
        year: "2009",
      },
      {
        title: "Regulation Short Course",
        institution: "London School of Economics (LSE)",
        year: "2010",
      },
      {
        title: "LL.B (Common Law) · Best Graduating Student",
        institution: "University of Maiduguri",
        year: "1986",
      },
      {
        title: "BL, Called to the Nigerian Bar & Enrolled at Supreme Court",
        institution: "Nigerian Law School",
        year: "1986",
      },
    ],
  },
  {
    heading: "Professional Positions",
    entries: [
      {
        title: "Founding Principal Partner",
        institution: "J-K Gadzama LLP, Abuja",
        year: "Present",
      },
      {
        title: "Chancellor",
        institution: "Newgate University, Minna",
        year: "2025",
      },
      {
        title: "Part-Time Lecturer, Energy & Natural Resources Law",
        institution: "Nile University of Nigeria",
        year: "Present",
      },
      {
        title: "Chairman, Mentoring Committee for Young Lawyers",
        institution: "Appointed by the Chief Justice of Nigeria",
        year: "2021",
      },
      {
        title: "SEC-Registered Capital Market Consultant",
        institution: "Securities and Exchange Commission",
        year: "Present",
      },
      {
        title: "Legal Consultant",
        institution: "Bureau of Public Enterprises / National Council on Privatization",
        year: "",
      },
      {
        title: "Lead Counsel to INEC and Major Political Parties",
        institution: "Independent National Electoral Commission",
        year: "",
      },
      {
        title: "Notary Public",
        institution: "Federal Republic of Nigeria",
        year: "1996",
      },
    ],
  },
  {
    heading: "National Honours & Titles",
    entries: [
      {
        title: "Officer of the Order of the Federal Republic (OFR)",
        institution: "Conferred by President Goodluck Jonathan",
        year: "2014",
      },
      {
        title: "Member of the Order of the Federal Republic (MFR)",
        institution: "Conferred by President Olusegun Obasanjo",
        year: "2004",
      },
      {
        title: "Life Bencher",
        institution: "Body of Benchers",
        year: "",
      },
      {
        title: "Senior Advocate of Nigeria (SAN)",
        institution: "Legal Practitioners' Privileges Committee",
        year: "1998",
      },
    ],
  },
  {
    heading: "Practice Areas",
    entries: [
      { title: "Litigation", institution: "", year: "" },
      { title: "Election Petitions", institution: "", year: "" },
      { title: "Arbitration & Mediation", institution: "", year: "" },
      { title: "Corporate Law", institution: "", year: "" },
      { title: "Banking & Finance", institution: "", year: "" },
      { title: "International Law", institution: "", year: "" },
    ],
  },
  {
    heading: "Professional Associations",
    entries: [
      { title: "International Bar Association (IBA)", institution: "", year: "" },
      { title: "Nigerian Bar Association (NBA)", institution: "", year: "" },
      { title: "Bar of England and Wales", institution: "", year: "" },
      { title: "Chartered Institute of Arbitrators (CIArb)", institution: "Fellow", year: "" },
      { title: "Council Member, African Bar Association", institution: "", year: "" },
      { title: "Commonwealth Lawyers' Association", institution: "Member", year: "" },
    ],
  },
];
