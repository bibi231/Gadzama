// ─── CV data ─────────────────────────────────────────────────────────────────

export interface CVEntry {
  title: string;
  institution: string;
  year: string;
  url?: string; // optional official link (institution, or title if no institution)
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
        url: "https://www.keble.ox.ac.uk/",
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
        url: "https://www.lse.ac.uk/",
      },
      {
        title: "PhD Candidate, Energy & Natural Resources Law",
        institution: "Nile University of Nigeria",
        year: "Present",
        url: "https://www.nileuniversity.edu.ng/",
      },
      {
        title: "LL.B (Common Law) · Best Graduating Student",
        institution: "University of Maiduguri",
        year: "1986",
        url: "https://www.unimaid.edu.ng/",
      },
      {
        title: "BL, Called to the Nigerian Bar",
        institution: "Nigerian Law School",
        year: "1986",
        url: "https://nigerianlawschool.edu.ng/",
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
        url: "https://www.ciarb.org/about/governance/branches/nigeria/",
      },
      {
        title: "Chair, Board of Trustees",
        institution: "Janada Int'l Centre for Arbitration & Mediation (JICAM)",
        year: "Present",
        url: "https://www.j-kgadzamallp.com/",
      },
      {
        title: "Panel of Neutrals",
        institution: "Abuja & Lagos Multi-Door Courthouses",
        year: "Present",
        url: "https://lagosmultidoor.org/",
      },
      {
        title: "Pioneer Board Member",
        institution: "Lagos Court of Arbitration",
        year: "Present",
        url: "https://lca.org.ng/",
      },
      {
        title: "Member",
        institution: "London Court of International Arbitration (LCIA)",
        year: "Present",
        url: "https://www.lcia.org/",
      },
      {
        title: "Member",
        institution: "CEDR (England) & MIAC (Mauritius)",
        year: "Present",
        url: "https://www.cedr.com/",
      },
      {
        title: "Member",
        institution: "RCICA",
        year: "Present",
        url: "https://rcicalagos.org/",
      },
      {
        title: "Fellow",
        institution: "Nigerian Institute of Chartered Arbitrators (FNICArb)",
        year: "Present",
        url: "https://nicarb.org.ng/",
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
        url: "https://whoswholegal.com/",
      },
      {
        title: "Band One, Disputes",
        institution: "Chambers and Partners",
        year: "Ranked",
        url: "https://chambers.com/",
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
        url: "https://www.nileuniversity.edu.ng/",
      },
      {
        title: "Diploma, International Commercial Arbitration",
        institution: "Keble College, University of Oxford, UK",
        year: "2006",
        url: "https://www.keble.ox.ac.uk/",
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
        url: "https://www.lse.ac.uk/",
      },
      {
        title: "LL.B (Common Law) · Best Graduating Student",
        institution: "University of Maiduguri",
        year: "1986",
        url: "https://www.unimaid.edu.ng/",
      },
      {
        title: "BL, Called to the Nigerian Bar & Enrolled at Supreme Court",
        institution: "Nigerian Law School",
        year: "1986",
        url: "https://nigerianlawschool.edu.ng/",
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
        url: "https://www.j-kgadzamallp.com/",
      },
      {
        title: "Chancellor",
        institution: "Newgate University, Minna",
        year: "2025",
        url: "https://www.newgateuniversityminna.edu.ng/",
      },
      {
        title: "Part-Time Lecturer, Energy & Natural Resources Law",
        institution: "Nile University of Nigeria",
        year: "Present",
        url: "https://www.nileuniversity.edu.ng/",
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
        url: "https://sec.gov.ng/",
      },
      {
        title: "Legal Consultant",
        institution: "Bureau of Public Enterprises / National Council on Privatization",
        year: "",
        url: "https://bpe.gov.ng/",
      },
      {
        title: "Lead Counsel to INEC and Major Political Parties",
        institution: "Independent National Electoral Commission",
        year: "",
        url: "https://www.inecnigeria.org/",
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
      {
        title: "International Bar Association (IBA)",
        institution: "",
        year: "",
        url: "https://www.ibanet.org/",
      },
      {
        title: "Nigerian Bar Association (NBA)",
        institution: "",
        year: "",
        url: "https://nigerianbar.org.ng/",
      },
      {
        title: "Bar of England and Wales",
        institution: "",
        year: "",
        url: "https://www.barcouncil.org.uk/",
      },
      {
        title: "Chartered Institute of Arbitrators (CIArb)",
        institution: "Fellow",
        year: "",
        url: "https://www.ciarb.org/about/governance/branches/nigeria/",
      },
      {
        title: "Council Member, African Bar Association",
        institution: "",
        year: "",
        url: "https://africanbar.org/",
      },
      {
        title: "Commonwealth Lawyers' Association",
        institution: "Member",
        year: "",
        url: "https://www.commonwealthlawyers.com/",
      },
    ],
  },
];
