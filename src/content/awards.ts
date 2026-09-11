

export interface AwardGroup {
  group: string;
  eyebrow: string;
  items: { year?: string; title: string; detail?: string }[];
}

export const awardsIntro =
  "Four decades of distinguished service to the law and to the nation, recognised through national honours, traditional titles, and international professional acclaim.";

export const awards: AwardGroup[] = [
  {
    group: "National Honours",
    eyebrow: "Conferred by the Federal Republic of Nigeria",
    items: [
      {
        year: "2014",
        title: "Officer of the Order of the Federal Republic (OFR)",
        detail: "Conferred by President Goodluck Ebele Jonathan, GCFR.",
      },
      {
        year: "2004",
        title: "Member of the Order of the Federal Republic (MFR)",
        detail: "Conferred by President Olusegun Obasanjo, GCFR.",
      },
    ],
  },
  {
    group: "Rank & Standing at the Bar",
    eyebrow: "The profession's highest distinctions",
    items: [
      {
        year: "1998",
        title: "Senior Advocate of Nigeria (SAN)",
        detail:
          "The highest rank conferred on a legal practitioner in Nigeria. Chief Gadzama was the first from the University of Maiduguri and the North-East of Nigeria to attain this distinction.",
      },
      {
        title: "Life Bencher, Body of Benchers",
        detail:
          "A body of legal practitioners of the highest distinction, responsible for the call to Bar and discipline of practitioners.",
      },
      {
        year: "1996",
        title: "Notary Public",
      },
      {
        year: "2021",
        title: "Chairman, Mentoring Committee for Young Lawyers",
        detail: "Appointed by the Chief Justice of Nigeria, Body of Benchers.",
      },
      {
        year: "2025",
        title: "Chancellor, Newgate University, Minna",
        detail:
          "Appointed the first Chancellor of Newgate University in Minna, Niger State.",
      },
    ],
  },
  {
    group: "Traditional Titles",
    eyebrow: "Conferred across the nation",
    items: [
      {
        year: "2022",
        title: "Shettima Ilmuye of Borno",
        detail:
          "Conferred by HRH Alhaji (Dr.) Abubakar Ibn Umar Garbai Al El-Kanemi, CFR, Chairman, Borno Emirate Council.",
      },
      {
        year: "2018",
        title: "Bobajiro of Akure Land",
        detail:
          "Conferred by HIM Oba Aladetoyinbo Ogunlade Aladelusi, Odundun II, the Deji and Paramount Ruler of Akure Land, Ondo State.",
      },
      {
        year: "2008",
        title: "Sardauna of Uba, Borno State",
      },
      {
        year: "2003",
        title: "Okwuluora of Ukpo and Igboland",
        detail:
          "Conferred by HRH Dr. R. C. Eze, the Igwe of Ukpo, Dunukofia LGA, Anambra State.",
      },
    ],
  },
  {
    group: "International & Professional Recognition",
    eyebrow: "Global acclaim",
    items: [
      {
        year: "2024",
        title: "Thomas Sankara Pan African Leadership Prize for Excellence",
        detail:
          "Conferred by the Youth Partnership for Africa's Development (YOUPAD) in recognition of exceptional pan-African leadership.",
      },
      {
        year: "2015",
        title: "500 Leading Lawyers in the World",
        detail: "Recognised by the Intercontinental Finance Magazine (ICFM).",
      },
      {
        title: "National Leader in Arbitration",
        detail:
          "Designated a National Leader in Arbitration by Who's Who Legal, the global reference guide for legal expertise.",
      },
      {
        title: "Band One Litigation Lawyer",
        detail: "Ranked Band One by Chambers and Partners, Nigeria.",
      },
      {
        title: "Arbitration Expert, Who's Who Legal",
        detail:
          "Listed as an Arbitration Expert in Who's Who Legal's Nigeria country guide.",
      },
      {
        title: "Chartered Arbitrator (C.Arb.)",
        detail:
          "One of the very few Chartered Arbitrators in Nigeria, the highest qualification of the Chartered Institute of Arbitrators (UK).",
      },
      {
        title: "Fellow, Chartered Institute of Arbitrators (FCIArb)",
        detail: "Chartered Institute of Arbitrators, United Kingdom.",
      },
      {
        title: "Fellow, Institute of Chartered Mediators & Conciliators (FICMC)",
        detail: "Recognised by the Institute of Chartered Mediators and Conciliators of Nigeria.",
      },
      {
        title: "Fellow, Nigerian Institute of Chartered Arbitrators (FNICArb)",
        detail: "Nigerian Institute of Chartered Arbitrators.",
      },
      {
        title: "DiplCArb, Diploma in International Commercial Arbitration",
        detail: "Keble College, University of Oxford, 2006.",
      },
    ],
  },
];
