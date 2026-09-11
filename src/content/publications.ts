
// Populate once Mr. Ebiloma supplies the full list and PDFs.

export interface Publication {
  title: string;
  publisher: string;
  year: string;
  type: "book" | "paper";
  format?: string; // e.g. "Hardcover", "Journal Article"
  isbn?: string;
  downloadUrl?: string; // Path to PDF in /public/downloads/
  externalUrl?: string;
}

export const publications: Publication[] = [
  
  // Books
  // {
  //   title: "Title of Book",
  //   publisher: "Publisher Name",
  //   year: "2020",
  //   type: "book",
  //   format: "Hardcover",
  //   downloadUrl: "/downloads/publications/book-title.pdf",
  // },
];

export const booksEmpty =
  "Chief Gadzama's published books are being prepared for the archive and will be available here very soon.";
export const papersEmpty =
  "Chief Gadzama's scholarly papers and articles are being prepared for the archive and will be available here very soon.";


export const acquisition = {
  heading: "Where to find the books",
  body: "Chief Gadzama's published works can be purchased or requested directly through the chambers of J-K Gadzama LLP. For availability, pricing, and bulk or institutional orders, please reach out to the firm or through the contact page.",
  links: [
    {
      label: "Enquire via J-K Gadzama LLP",
      url: "https://www.j-kgadzamallp.com/",
      external: true,
    },
    { label: "Contact the office", url: "/contact", external: false },
  ] as { label: string; url: string; external: boolean }[],
};


export const llpNewsletter = {
  heading: "J-K Gadzama LLP Newsletter",
  body: "Stay current with the firm's legal insights, case notes, and announcements through the J-K Gadzama LLP newsletter.",
  url: "https://www.j-kgadzamallp.com/",
  cta: "Read the newsletter",
};
