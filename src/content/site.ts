export const siteConfig = {
  name: "Joe-Kyari Gadzama",
  shortName: "JK Gadzama",
  title: "Chief Joe-Kyari Gadzama, OFR, SAN",
  tagline: "Senior Advocate of Nigeria · Chartered Arbitrator · ADR Practitioner",
  domain: "gadzama.com",
  url: "https://www.gadzama.com",
  description:
    "Official website of Chief Joe-Kyari Gadzama, OFR, SAN, a distinguished Senior Advocate of Nigeria, Chartered Arbitrator, and leading ADR practitioner with 40 years at the Bar.",
  builtBy: "TrueWeb Solutions",
  builtByUrl: "https://www.truewebsolutions.com",
};

export const identity = {
  fullName: "Joe-Kyari Gadzama",
  appellations: "OFR, SAN, Life Bencher, FNIALS, FICMC, DiplCArb, FCIArb, FNICArb, C.Arb.",
  roles: [
    "Part-Time Lecturer & PhD Student, Nile University of Nigeria",
    "Barrister of Lincoln's Inn, Certified Mediator, Regulatory Consultant",
    "Chancellor, Newgate University, Minna",
    "Founding Principal Partner, J-K Gadzama LLP",
  ],
  bio: "Founding Principal Partner, J-K Gadzama LLP. Over three decades of distinction in litigation, arbitration and alternative dispute resolution.",
};

export const stats = [
  { value: "40", label: "Years at the Bar" },
  { value: "26+", label: "Years as SAN" },
  { value: "C.Arb.", label: "Chartered Arbitrator" },
  { value: "500", label: "Leading Lawyers Worldwide" },
  { value: "JICAM", label: "Chair, Board of Trustees" },
];

export const jicam = {
  name: "JICAM",
  fullName: "Janada International Centre for Arbitration and Mediation",
  established: 2015,
  description:
    "Janada International Centre for Arbitration and Mediation, established 2015. A leading neutral venue for domestic and international commercial disputes; Chief J-K Gadzama, SAN serves as Chairman of the Board of Trustees.",
  address: "Plot 1805, Damaturu Crescent, Off Ahmadu Bello Way, Garki 2, Abuja",
  url: "https://www.j-kgadzamallp.com",
};

export const contact = {
  address: {
    line1: "J-K Gadzama Court, Plot 1805,",
    line2: "Damaturu Crescent, Garki II,",
    line3: "Abuja, Nigeria",
    full: "J-K Gadzama Court, Plot 1805, Damaturu Crescent, Garki II, Abuja, Nigeria",
  },
  phone: "+234 9 6233 600",
  email: "info@gadzama.com",
  mapQuery: "J-K+Gadzama+Court,+Garki+II,+Abuja,+Nigeria",
  mapCoords: { lat: 9.0445, lng: 7.4935 },
};

export const socials = [
  {
    platform: "LinkedIn",
    handle: "Joe-Kyari Gadzama, SAN",
    url: "https://www.linkedin.com/in/joe-kyari-gadzama-san/",
    icon: "linkedin",
    pending: false,
  },
  {
    platform: "X (Twitter)",
    handle: "@J_KGadzama",
    url: "https://x.com/J_KGadzama",
    icon: "twitter",
    pending: false,
  },
  {
    platform: "Facebook",
    handle: "Joe-Kyari Gadzama",
    url: "https://www.facebook.com/100069224223475/",
    icon: "facebook",
    pending: false,
  },
  {
    platform: "Instagram",
    handle: "@chief_jkg",
    url: "https://www.instagram.com/chief_jkg/",
    icon: "instagram",
    pending: false,
  },
];

export const vitalLinks = [
  {
    name: "J-K Gadzama LLP",
    description:
      "A foremost Nigerian law firm specialising in litigation, arbitration, corporate law, and election petitions.",
    url: "https://www.j-kgadzamallp.com",
    icon: "briefcase",
  },
  {
    name: "JICAM",
    description:
      "Janada International Centre for Arbitration and Mediation, a leading neutral venue for domestic and international commercial disputes.",
    url: "#", // URL TBC
    icon: "scale",
  },
  {
    name: "Newgate University, Minna",
    description:
      "A private university in Niger State, Nigeria where Chief Gadzama serves as Chancellor.",
    url: "https://www.newgateuniversityminna.edu.ng",
    icon: "graduation",
  },
];

export const navigation = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Profile", href: "/about" },
      { label: "Gallery", href: "/gallery" },
    ],
  },
  {
    label: "CV",
    href: "/cv",
    children: [
      { label: "Arbitration & ADR CV", href: "/cv/arbitration-adr" },
      { label: "General CV", href: "/cv/general" },
    ],
  },
  { label: "Cases", href: "/cases" },
  { label: "Awards", href: "/awards" },
  {
    label: "Publications",
    href: "/publications",
    children: [
      { label: "Books", href: "/publications/books" },
      { label: "Papers", href: "/publications/papers" },
    ],
  },
  { label: "Contact", href: "/contact", isButton: true },
];
